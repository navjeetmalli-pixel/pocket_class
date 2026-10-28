StudyData.add(11, "physics", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Physics Part I","Physics Part II"], reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "units-and-measurement",
      title: "Units and Measurement",
      section: "Mechanics",
      summary: "Physics rests on measurement. This chapter covers the SI system of base and derived units, the rules for significant figures and rounding off, and dimensional analysis, which is used to check equations, convert units and deduce relations between quantities.",
      notes: [
        {
          heading: "The International System of Units (SI)",
          points: [
            "A **unit** is an internationally accepted standard for measuring a physical quantity. Every measurement = numerical value × unit.",
            "SI has **seven base quantities**: length (metre, m), mass (kilogram, kg), time (second, s), electric current (ampere, A), thermodynamic temperature (kelvin, K), amount of substance (mole, mol) and luminous intensity (candela, cd).",
            "**Derived units** are combinations of base units, e.g. newton N = kg m s⁻², joule J = kg m² s⁻², pascal Pa = N m⁻², watt W = J s⁻¹.",
            "Plane angle is measured in **radian** (θ = arc/radius) and solid angle in **steradian** (Ω = area/r²); both are dimensionless.",
            "Large and small distances: 1 light year = 9.46 × 10¹⁵ m, 1 AU = 1.496 × 10¹¹ m, 1 parsec = 3.08 × 10¹⁶ m, 1 Å = 10⁻¹⁰ m, 1 fermi = 10⁻¹⁵ m."
          ]
        },
        {
          heading: "Significant Figures",
          points: [
            "Significant figures are the **reliably known digits plus the first uncertain digit** of a measurement.",
            "All non-zero digits are significant, and zeros between non-zero digits are significant (2.008 has 4).",
            "Leading zeros in a number less than 1 are **not** significant: 0.00230 has 3 (2, 3 and the trailing 0). Trailing zeros after a decimal point **are** significant (4.700 has 4).",
            "Trailing zeros in a number without a decimal point are not significant (123 m = 12300 cm still has 3). Scientific notation removes the confusion, and changing units does not change the number of significant figures.",
            "**Multiplication/division**: keep as many significant figures as the quantity with the **fewest significant figures**. **Addition/subtraction**: keep as many **decimal places** as the quantity with the fewest decimal places.",
            "Rounding off: if the digit dropped is more than 5, raise the previous digit by 1; if less than 5, leave it. If it is exactly 5, raise the previous digit only if it is odd (2.735 → 2.74, but 2.745 → 2.74)."
          ]
        },
        {
          heading: "Dimensions and Dimensional Formulae",
          points: [
            "The **dimensions** of a quantity are the powers to which the base quantities ([M], [L], [T], [A], [K], [mol], [cd]) are raised to represent it.",
            "Examples: velocity [L T⁻¹], acceleration [L T⁻²], force [M L T⁻²], work and energy [M L² T⁻²], power [M L² T⁻³], pressure [M L⁻¹ T⁻²].",
            "Different quantities can have the **same dimensions**: work and torque are both [M L² T⁻²]; pressure, stress and Young's modulus are all [M L⁻¹ T⁻²].",
            "Pure numbers, angles, strain, refractive index and relative density are **dimensionless**."
          ]
        },
        {
          heading: "Dimensional Analysis and its Uses",
          points: [
            "**Principle of homogeneity**: only quantities with the same dimensions can be added, subtracted or equated, so every term in a correct equation has the same dimensions.",
            "Uses: (1) checking whether an equation is dimensionally consistent, (2) converting a quantity from one system of units to another, (3) deducing a relation when a quantity depends on others as a product of powers.",
            "A dimensionally correct equation **need not be correct**, but a dimensionally wrong equation is **certainly wrong**.",
            "Arguments of sin, cos, exp and log must be dimensionless, e.g. in y = A sin(ωt − kx), both ωt and kx are dimensionless.",
            "Limitations: it cannot find dimensionless constants (like ½ or 2π), cannot derive relations with sums of terms or trigonometric/exponential functions, and cannot tell a scalar from a vector."
          ]
        }
      ],
      formulas: [
        "Measurement = n × u (numerical value × unit); n₁u₁ = n₂u₂, so a bigger unit gives a smaller number",
        "Unit conversion for a quantity of dimensions [Mᵃ Lᵇ Tᶜ]: n₂ = n₁ (M₁/M₂)ᵃ (L₁/L₂)ᵇ (T₁/T₂)ᶜ",
        "Velocity [L T⁻¹]; acceleration [L T⁻²]",
        "Force [M L T⁻²]; 1 N = 1 kg m s⁻²",
        "Momentum and impulse [M L T⁻¹]",
        "Work, energy and torque [M L² T⁻²]; 1 J = 1 kg m² s⁻²",
        "Power [M L² T⁻³]; 1 W = 1 J s⁻¹",
        "Pressure, stress, elastic modulus [M L⁻¹ T⁻²]; 1 Pa = 1 N m⁻²",
        "Gravitational constant G [M⁻¹ L³ T⁻²]",
        "Angular momentum and Planck's constant [M L² T⁻¹]",
        "Frequency and angular velocity [T⁻¹]",
        "Plane angle θ = arc/radius (rad); solid angle Ω = area/r² (sr)",
        "1 light year = 9.46 × 10¹⁵ m; 1 AU = 1.496 × 10¹¹ m; 1 parsec = 3.08 × 10¹⁶ m"
      ],
      terms: [
        { term: "Base (fundamental) units", meaning: "The **seven independent SI units**: metre, kilogram, second, ampere, kelvin, mole and candela." },
        { term: "Derived unit", meaning: "A unit formed by **combining base units**, e.g. newton = kg m s⁻²." },
        { term: "Significant figures", meaning: "The **reliably known digits plus the first uncertain digit** in a measured value." },
        { term: "Dimensions of a quantity", meaning: "The **powers of the base quantities** (M, L, T …) that represent the quantity, e.g. force is [M L T⁻²]." },
        { term: "Principle of homogeneity", meaning: "Every term on both sides of a correct physical equation must have **the same dimensions**." },
        { term: "Dimensionless quantity", meaning: "A quantity with **no dimensions**, e.g. angle, strain, refractive index." }
      ],
      examples: [
        {
          q: "Using dimensions, convert 1 joule into erg (the CGS unit of energy).",
          steps: [
            "Energy has dimensions [M L² T⁻²], so a = 1, b = 2, c = −2",
            "n₂ = n₁ (M₁/M₂)¹ (L₁/L₂)² (T₁/T₂)⁻²",
            "M₁/M₂ = 1 kg / 1 g = 10³; L₁/L₂ = 1 m / 1 cm = 10²; T₁/T₂ = 1 s / 1 s = 1",
            "n₂ = 1 × 10³ × (10²)² × 1 = 10⁷"
          ],
          answer: "1 J = 10⁷ erg"
        },
        {
          q: "The period T of a simple pendulum may depend on its length l, the mass m of the bob and g. Find the relation using dimensional analysis.",
          steps: [
            "Let T = k lᵃ mᵇ gᶜ, where k is a dimensionless constant",
            "[T] = [L]ᵃ [M]ᵇ [L T⁻²]ᶜ = [Mᵇ Lᵃ⁺ᶜ T⁻²ᶜ]",
            "Compare powers: M: b = 0; T: −2c = 1, so c = −½; L: a + c = 0, so a = ½",
            "So T = k √l/√g = k √(l/g); the constant k (= 2π) cannot be found by this method"
          ],
          answer: "T = k √(l/g): the period does not depend on the mass of the bob"
        }
      ],
      qa: [
        {
          q: "State the principle of homogeneity of dimensions and use it to check v² = u² + 2as.",
          a: "In a correct equation **every term must have the same dimensions**. Here [v²] = [u²] = [L T⁻¹]² = [L² T⁻²], and [2as] = [L T⁻²][L] = [L² T⁻²]. All terms have the same dimensions, so the equation is **dimensionally correct**."
        },
        {
          q: "What are the limitations of dimensional analysis?",
          a: "(1) It cannot give the value of **dimensionless constants** such as ½ or 2π. (2) It cannot derive relations containing **sums or differences** of terms, or trigonometric, exponential and logarithmic functions. (3) It cannot tell whether a quantity is a **scalar or a vector**. (4) A dimensionally correct equation may still be wrong."
        },
        {
          q: "State the number of significant figures in: (a) 0.007 m² (b) 2.64 × 10²⁴ kg (c) 0.2370 g cm⁻³ (d) 6.320 J.",
          a: "(a) **1**: leading zeros are not significant. (b) **3**: in scientific notation all digits of 2.64 count. (c) **4**: the trailing zero after the decimal point is significant. (d) **4**: same reason as (c)."
        }
      ],
      quiz: [
        {
          q: "The dimensional formula of pressure is:",
          options: ["[M L T⁻²]", "[M L² T⁻²]", "[M L⁻¹ T⁻²]", "[M L⁻² T⁻²]"],
          answer: 2,
          explain: "Pressure = force/area = [M L T⁻²]/[L²] = **[M L⁻¹ T⁻²]**."
        },
        {
          q: "Which pair of quantities has the same dimensions?",
          options: ["Work and torque", "Force and power", "Momentum and energy", "Pressure and force"],
          answer: 0,
          explain: "Work (force × distance) and torque (force × perpendicular distance) are both **[M L² T⁻²]**, though they are different physical quantities."
        },
        {
          q: "The number of significant figures in 0.06900 is:",
          options: ["2", "4", "5", "6"],
          answer: 1,
          explain: "Leading zeros are not significant; the trailing zeros after the decimal point are. So 6, 9, 0, 0 give **4** significant figures."
        },
        {
          q: "Two measured lengths 3.0 cm and 2.53 cm are multiplied. The product, to the correct number of significant figures, is:",
          options: ["7.59 cm²", "7.590 cm²", "8 cm²", "7.6 cm²"],
          answer: 3,
          explain: "3.0 × 2.53 = 7.59, but 3.0 has only 2 significant figures, so the result is rounded to **7.6 cm²**."
        },
        {
          q: "If force (F), length (L) and time (T) are taken as fundamental quantities, the dimensional formula of mass is:",
          options: ["[F L T⁻²]", "[F L² T⁻²]", "[F L⁻¹ T²]", "[F L⁻¹ T⁻²]"],
          answer: 2,
          explain: "m = F/a and a has dimensions [L T⁻²], so m = F/(L T⁻²) = **[F L⁻¹ T²]**."
        },
        {
          q: "In y = A sin(ωt − kx), where x is a distance and t is time, the dimensions of k are:",
          options: ["[L⁻¹]", "[T⁻¹]", "[L]", "[L T⁻¹]"],
          answer: 0,
          explain: "The argument of sine must be dimensionless, so kx has no dimensions and k = **[L⁻¹]**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "motion-in-a-straight-line",
      title: "Motion in a Straight Line",
      section: "Mechanics",
      summary: "Describes motion along a straight line using position, displacement, velocity and acceleration, their graphs, the kinematic equations for uniformly accelerated motion, free fall under gravity and relative velocity.",
      notes: [
        {
          heading: "Position, Displacement and Velocity",
          points: [
            "Motion is always described relative to a **frame of reference**: an origin, a set of axes and a clock. For straight-line motion one axis (x-axis) is enough.",
            "**Displacement** Δx = x₂ − x₁ is a vector and can be positive, negative or zero; **path length (distance)** is a scalar and is always ≥ |displacement|.",
            "**Average velocity** = displacement/time; **average speed** = total path length/time. Average speed is always ≥ the magnitude of average velocity.",
            "**Instantaneous velocity** v = dx/dt is the slope of the position–time (x–t) graph at that instant; its magnitude is the instantaneous speed.",
            "In **uniform motion** equal displacements occur in equal intervals of time, and the x–t graph is a straight line."
          ]
        },
        {
          heading: "Acceleration and Motion Graphs",
          points: [
            "**Acceleration** a = dv/dt = d²x/dt² is the slope of the velocity–time (v–t) graph; unit m s⁻².",
            "**Area under the v–t graph = displacement**; area under the a–t graph = change in velocity.",
            "A body **speeds up** when v and a have the same sign and **slows down** when they have opposite signs; a negative acceleration does not always mean slowing down.",
            "For uniform acceleration the v–t graph is a straight line and the x–t graph is a **parabola**.",
            "Velocity can be zero while acceleration is not, e.g. a ball at the highest point of its vertical flight has v = 0 but a = g."
          ]
        },
        {
          heading: "Kinematic Equations (Constant Acceleration)",
          points: [
            "v = u + at, x = ut + ½at², v² = u² + 2ax, where x is the displacement from the starting point.",
            "These equations hold **only when acceleration is constant**; for variable acceleration use v = dx/dt and a = dv/dt with calculus.",
            "Displacement in the nth second: sₙ = u + ½a(2n − 1).",
            "**Stopping distance** d = u²/2a is proportional to the square of the initial speed, so doubling the speed makes it four times longer.",
            "**Reaction time** is the time a person takes to observe, think and act; during it the vehicle keeps moving at its original speed."
          ]
        },
        {
          heading: "Free Fall",
          points: [
            "Ignoring air resistance, all bodies near the earth fall with the same acceleration **g ≈ 9.8 m s⁻²**, directed downwards.",
            "Taking upward as positive, a = −g: v = u − gt, y = ut − ½gt², v² = u² − 2gy.",
            "A body thrown up with speed u rises to H = u²/2g in time u/g, and returns to the point of projection after 2u/g with the **same speed u**.",
            "**Galileo's law of odd numbers**: distances covered in successive equal time intervals by a body falling from rest are in the ratio 1 : 3 : 5 : 7 …"
          ]
        },
        {
          heading: "Relative Velocity",
          points: [
            "The velocity of A relative to B is v_AB = v_A − v_B; similarly v_BA = v_B − v_A = −v_AB.",
            "For bodies moving in the **same direction**, relative speed = difference of speeds; in **opposite directions**, relative speed = sum of speeds.",
            "If v_A = v_B, the separation between A and B stays constant and their x–t graphs are parallel straight lines."
          ]
        }
      ],
      formulas: [
        "Average velocity = Δx/Δt; average speed = total path length/total time",
        "Instantaneous velocity v = dx/dt; acceleration a = dv/dt = d²x/dt²",
        "v = u + at",
        "x = ut + ½at²",
        "v² = u² + 2ax",
        "x = ½(u + v)t (constant acceleration)",
        "Displacement in the nth second: sₙ = u + ½a(2n − 1)",
        "Stopping distance: d = u²/2a (a = magnitude of retardation)",
        "Vertical throw with speed u: maximum height H = u²/2g, time of ascent = u/g, time of flight = 2u/g",
        "Dropped from height h: time t = √(2h/g), speed on reaching ground v = √(2gh)",
        "Relative velocity: v_AB = v_A − v_B",
        "Displacement = area under v–t graph; change in velocity = area under a–t graph"
      ],
      terms: [
        { term: "Frame of reference", meaning: "An **origin, a set of axes and a clock** with respect to which position and motion are described." },
        { term: "Displacement", meaning: "The **change in position** (x₂ − x₁); a vector that may be positive, negative or zero." },
        { term: "Instantaneous velocity", meaning: "Velocity at a given instant, **v = dx/dt**: the slope of the x–t graph at that point." },
        { term: "Uniformly accelerated motion", meaning: "Motion in which the **velocity changes by equal amounts in equal intervals** of time (constant acceleration)." },
        { term: "Free fall", meaning: "Motion of a body **under gravity alone**, with acceleration g downwards (air resistance neglected)." },
        { term: "Relative velocity", meaning: "Velocity of one body as seen from another: **v_AB = v_A − v_B**." }
      ],
      examples: [
        {
          q: "A ball is thrown vertically upwards with a speed of 20 m s⁻¹ from the top of a building 25 m high. How high does it rise above the building, and after how long does it hit the ground? (g = 10 m s⁻²)",
          steps: [
            "Maximum height above the building: H = u²/2g = (20)²/(2 × 10) = 20 m",
            "Take the top of the building as origin and upward as positive; the ground is at y = −25 m",
            "y = ut − ½gt² gives −25 = 20t − 5t², i.e. t² − 4t − 5 = 0",
            "(t − 5)(t + 1) = 0, so t = 5 s (t = −1 s is not physical)"
          ],
          answer: "It rises 20 m above the building and hits the ground after 5 s."
        },
        {
          q: "A car moving at 72 km/h is braked uniformly and stops in 4 s. Find its retardation and the distance it travels before stopping.",
          steps: [
            "u = 72 km/h = 72 × 5/18 = 20 m s⁻¹, v = 0, t = 4 s",
            "a = (v − u)/t = (0 − 20)/4 = −5 m s⁻²",
            "Distance d = u²/2|a| = 400/10 = 40 m",
            "Check: x = ut + ½at² = 80 − ½ × 5 × 16 = 80 − 40 = 40 m"
          ],
          answer: "Retardation = 5 m s⁻²; stopping distance = 40 m"
        }
      ],
      qa: [
        {
          q: "Can a body have zero velocity and still be accelerating? Give an example.",
          a: "**Yes.** A ball thrown vertically upwards momentarily has **zero velocity at its highest point**, but its acceleration is still **g = 9.8 m s⁻² downwards**, which is why it starts falling back."
        },
        {
          q: "Using the velocity–time graph, derive x = ut + ½at² for uniformly accelerated motion.",
          a: "For constant a, the v–t graph is a straight line from v = u at t = 0 to v = u + at at time t. **Displacement = area under the graph** = rectangle of height u and width t, plus a triangle of base t and height (v − u) = at. So x = ut + ½ × t × at = **ut + ½at²**."
        },
        {
          q: "Why is the stopping distance of a vehicle proportional to the square of its initial speed?",
          a: "With uniform retardation a, v² = u² − 2ad. The vehicle stops when v = 0, so **d = u²/2a**. Hence d ∝ u²: doubling the speed makes the stopping distance **four times** larger. This is why speed limits matter for road safety."
        }
      ],
      quiz: [
        {
          q: "The slope of a velocity–time graph gives:",
          options: ["displacement", "acceleration", "average speed", "distance travelled"],
          answer: 1,
          explain: "Slope of v–t graph = dv/dt = **acceleration**. The area under it gives displacement."
        },
        {
          q: "A body starts from rest with uniform acceleration. The distances it covers in the 1st, 2nd and 3rd seconds are in the ratio:",
          options: ["1 : 2 : 3", "1 : 4 : 9", "1 : 1 : 1", "1 : 3 : 5"],
          answer: 3,
          explain: "With u = 0, sₙ = ½a(2n − 1), giving ½a, 3a/2, 5a/2: ratio **1 : 3 : 5** (Galileo's law of odd numbers). 1 : 4 : 9 is the ratio of total distances after 1, 2, 3 s."
        },
        {
          q: "The position of a particle is x = 2t³ − 6t² + 3 (x in m, t in s). Its acceleration at t = 2 s is:",
          options: ["0 m s⁻²", "6 m s⁻²", "12 m s⁻²", "24 m s⁻²"],
          answer: 2,
          explain: "v = dx/dt = 6t² − 12t and a = dv/dt = 12t − 12. At t = 2 s, a = **12 m s⁻²**. (The velocity is zero at that instant, not the acceleration.)"
        },
        {
          q: "A stone is dropped from a height of 45 m. The speed with which it hits the ground is (g = 10 m s⁻²):",
          options: ["30 m s⁻¹", "45 m s⁻¹", "15 m s⁻¹", "90 m s⁻¹"],
          answer: 0,
          explain: "v = √(2gh) = √(2 × 10 × 45) = √900 = **30 m s⁻¹**."
        },
        {
          q: "A car's stopping distance is 20 m at 36 km/h. With the same retardation, its stopping distance at 72 km/h is:",
          options: ["40 m", "80 m", "60 m", "160 m"],
          answer: 1,
          explain: "d = u²/2a, so d ∝ u². Doubling the speed makes d four times: 4 × 20 = **80 m**."
        },
        {
          q: "Two cars move in the same direction on a straight road at 54 km/h and 72 km/h. The speed of the faster car relative to the slower one is:",
          options: ["35 m s⁻¹", "18 m s⁻¹", "126 km/h", "5 m s⁻¹"],
          answer: 3,
          explain: "Same direction, so relative speed = 72 − 54 = 18 km/h = 18 × 5/18 = **5 m s⁻¹**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "motion-in-a-plane",
      title: "Motion in a Plane",
      section: "Mechanics",
      summary: "Extends kinematics to two dimensions using vectors: addition, subtraction and resolution of vectors, motion with constant acceleration in a plane, projectile motion and uniform circular motion.",
      notes: [
        {
          heading: "Scalars and Vectors",
          points: [
            "**Scalars** have only magnitude (mass, time, speed, work). **Vectors** have magnitude and direction and add by the triangle or parallelogram law (displacement, velocity, force).",
            "Two vectors are **equal** only if they have the same magnitude and the same direction. Multiplying a vector by a negative number reverses its direction.",
            "A **null (zero) vector** has zero magnitude, e.g. the displacement after a round trip.",
            "A **unit vector** n̂ = A/|A| has magnitude 1 and only gives direction; î, ĵ and k̂ point along the x, y and z axes."
          ]
        },
        {
          heading: "Addition and Resolution of Vectors",
          points: [
            "Vector addition is **commutative** (A + B = B + A) and **associative**; subtraction is A − B = A + (−B).",
            "Resultant of A and B at angle θ: R = √(A² + B² + 2AB cos θ), with direction tan α = B sin θ/(A + B cos θ) measured from A.",
            "R is **maximum (A + B)** when θ = 0° and **minimum |A − B|** when θ = 180°.",
            "**Resolution**: A = Ax î + Ay ĵ with Ax = A cos θ and Ay = A sin θ; then A = √(Ax² + Ay²) and tan θ = Ay/Ax.",
            "In the component method, x- and y-components add separately: if R = A + B, then Rx = Ax + Bx and Ry = Ay + By."
          ]
        },
        {
          heading: "Motion in a Plane with Constant Acceleration",
          points: [
            "Position r = x î + y ĵ; velocity v = dr/dt; acceleration a = dv/dt. The velocity is always **along the tangent to the path**.",
            "For constant acceleration: v = v₀ + at and r = r₀ + v₀t + ½at², which hold separately for the x and y components.",
            "Motion in a plane can be treated as **two independent straight-line motions** along perpendicular directions."
          ]
        },
        {
          heading: "Projectile Motion",
          points: [
            "A projectile has **constant horizontal velocity** u cos θ and a **vertical acceleration g downwards** (air resistance neglected).",
            "Its path is a **parabola**: y = x tan θ − g x²/(2u² cos² θ).",
            "Time of flight T = 2u sin θ/g, maximum height H = u² sin² θ/2g, horizontal range R = u² sin 2θ/g.",
            "Range is **maximum (u²/g) at θ = 45°**, and complementary angles θ and (90° − θ) give the **same range**.",
            "At the highest point the velocity is horizontal (u cos θ) and the acceleration is g downwards, so they are **perpendicular**."
          ]
        },
        {
          heading: "Uniform Circular Motion",
          points: [
            "In uniform circular motion the speed is constant but the direction of velocity keeps changing, so the body is **accelerated**.",
            "**Centripetal acceleration** a = v²/R = ω²R is always directed **towards the centre**.",
            "Angular speed ω = Δθ/Δt = v/R = 2πν = 2π/T, where ν is the frequency and T the time period.",
            "The magnitude of the acceleration is constant but its direction changes, so the acceleration **vector is not constant**."
          ]
        }
      ],
      formulas: [
        "Resultant of two vectors: R = √(A² + B² + 2AB cos θ)",
        "Direction of resultant: tan α = B sin θ/(A + B cos θ)",
        "Components: Ax = A cos θ, Ay = A sin θ; A = √(Ax² + Ay²)",
        "Unit vector: n̂ = A/|A|",
        "Constant acceleration: v = v₀ + at; r = r₀ + v₀t + ½at²",
        "Projectile time of flight: T = 2u sin θ/g",
        "Maximum height: H = u² sin² θ/2g",
        "Horizontal range: R = u² sin 2θ/g; maximum range = u²/g at θ = 45°",
        "Trajectory: y = x tan θ − g x²/(2u² cos² θ)",
        "Projected horizontally with speed u from height h: time t = √(2h/g), range = u √(2h/g)",
        "Circular motion: v = ωR; ω = 2π/T = 2πν",
        "Centripetal acceleration: a = v²/R = ω²R = 4π²ν²R"
      ],
      terms: [
        { term: "Vector", meaning: "A quantity with **both magnitude and direction** that adds by the triangle law, e.g. velocity, force." },
        { term: "Unit vector", meaning: "A vector of **magnitude 1** that only shows direction: n̂ = A/|A|." },
        { term: "Resolution of a vector", meaning: "Splitting a vector into **components** along chosen axes, e.g. Ax = A cos θ, Ay = A sin θ." },
        { term: "Projectile", meaning: "A body thrown into the air that moves **under gravity alone**; its path is a parabola." },
        { term: "Centripetal acceleration", meaning: "Acceleration of a body in circular motion, **v²/R directed towards the centre**." },
        { term: "Angular speed", meaning: "Rate of change of angular position, **ω = Δθ/Δt**, measured in rad s⁻¹." }
      ],
      examples: [
        {
          q: "A cricket ball is thrown at 28 m s⁻¹ at 30° above the horizontal. Find (a) the maximum height, (b) the time to return to the same level, (c) the horizontal distance covered. (g = 9.8 m s⁻²)",
          steps: [
            "Vertical component u sin 30° = 28 × 0.5 = 14 m s⁻¹",
            "(a) H = (u sin θ)²/2g = 14²/(2 × 9.8) = 196/19.6 = 10.0 m",
            "(b) T = 2u sin θ/g = 2 × 14/9.8 ≈ 2.9 s",
            "(c) R = u² sin 2θ/g = (784 × sin 60°)/9.8 = 80 × 0.866 ≈ 69.3 m"
          ],
          answer: "H = 10.0 m, T ≈ 2.9 s, R ≈ 69.3 m"
        },
        {
          q: "An insect trapped in a circular groove of radius 12 cm moves steadily along it and completes 7 revolutions in 100 s. Find its angular speed, linear speed and acceleration.",
          steps: [
            "Frequency ν = 7/100 = 0.07 s⁻¹",
            "ω = 2πν = 2 × 3.1416 × 0.07 ≈ 0.44 rad s⁻¹",
            "v = ωR = 0.44 × 12 ≈ 5.3 cm s⁻¹",
            "a = ω²R = (0.44)² × 12 ≈ 2.3 cm s⁻², directed towards the centre"
          ],
          answer: "ω ≈ 0.44 rad s⁻¹, v ≈ 5.3 cm s⁻¹, a ≈ 2.3 cm s⁻² towards the centre. The acceleration vector is not constant because its direction keeps changing."
        }
      ],
      qa: [
        {
          q: "Show that the path of a projectile is a parabola.",
          a: "Let a body be projected with speed u at angle θ. Horizontally x = (u cos θ)t, so t = x/(u cos θ). Vertically y = (u sin θ)t − ½gt². Substituting t: **y = x tan θ − g x²/(2u² cos² θ)**. This has the form y = ax − bx² (a, b constants), which is the equation of a **parabola**."
        },
        {
          q: "Show that angles of projection θ and (90° − θ) give the same horizontal range.",
          a: "R = u² sin 2θ/g. For angle (90° − θ), R′ = u² sin(180° − 2θ)/g = u² sin 2θ/g = R, since **sin(180° − 2θ) = sin 2θ**. So complementary angles (e.g. 30° and 60°) give the same range, though the heights and times of flight differ."
        },
        {
          q: "Why is uniform circular motion called accelerated motion? Give the magnitude and direction of the acceleration.",
          a: "Although the **speed is constant**, the **direction of velocity changes continuously**, so the velocity changes and the body has an acceleration. This **centripetal acceleration** has magnitude **v²/R = ω²R** and is always directed **towards the centre** of the circle."
        }
      ],
      quiz: [
        {
          q: "Two forces of 3 N and 4 N act on a body at right angles to each other. The magnitude of their resultant is:",
          options: ["7 N", "1 N", "12 N", "5 N"],
          answer: 3,
          explain: "R = √(3² + 4²) = √25 = **5 N** (θ = 90° so cos θ = 0)."
        },
        {
          q: "A ball is thrown horizontally at 15 m s⁻¹ from a height of 20 m. It lands at a horizontal distance of (g = 10 m s⁻²):",
          options: ["15 m", "30 m", "20 m", "60 m"],
          answer: 1,
          explain: "Time to fall t = √(2h/g) = √4 = 2 s. Horizontal distance = 15 × 2 = **30 m**."
        },
        {
          q: "At the highest point of a projectile's path (no air resistance):",
          options: ["velocity and acceleration are both zero", "velocity is zero and acceleration is g downwards", "velocity is horizontal and acceleration is g downwards", "acceleration is zero and velocity is horizontal"],
          answer: 2,
          explain: "Only the vertical component of velocity becomes zero; the horizontal component u cos θ remains. The acceleration is **g downwards throughout** the flight."
        },
        {
          q: "The maximum range of a projectile is 80 m. If it is thrown at 45° with the same speed, the maximum height reached is:",
          options: ["20 m", "40 m", "80 m", "10 m"],
          answer: 0,
          explain: "Maximum range u²/g = 80 m. At 45°, H = u² sin² 45°/2g = u²/4g = 80/4 = **20 m**."
        },
        {
          q: "A body moves in a circle of radius 2 m with a constant speed of 4 m s⁻¹. Its centripetal acceleration is:",
          options: ["2 m s⁻²", "16 m s⁻²", "8 m s⁻²", "32 m s⁻²"],
          answer: 2,
          explain: "a = v²/R = 16/2 = **8 m s⁻²**, directed towards the centre."
        },
        {
          q: "If |A + B| = |A − B| for two non-zero vectors A and B, the angle between them is:",
          options: ["0°", "90°", "180°", "45°"],
          answer: 1,
          explain: "A² + B² + 2AB cos θ = A² + B² − 2AB cos θ gives cos θ = 0, so θ = **90°**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "laws-of-motion",
      title: "Laws of Motion",
      section: "Mechanics",
      summary: "Newton's three laws link force and motion. The chapter covers inertia, momentum and impulse, conservation of momentum, equilibrium of a particle, friction and the dynamics of circular motion, including vehicles on level and banked roads.",
      notes: [
        {
          heading: "Newton's First Law and Inertia",
          points: [
            "**Galileo's law of inertia**: a body moving on a frictionless horizontal surface keeps moving with constant velocity; no force is needed to maintain uniform motion.",
            "**First law**: every body continues in its state of rest or of uniform motion in a straight line unless compelled by an external force to change that state.",
            "**Inertia** is the resistance of a body to a change in its state of motion; **mass is the measure of inertia**.",
            "Examples: passengers are jerked backwards when a bus starts suddenly and thrown forwards when it stops suddenly."
          ]
        },
        {
          heading: "Second Law, Momentum and Impulse",
          points: [
            "**Linear momentum** p = mv is a vector; unit kg m s⁻¹.",
            "**Second law**: the rate of change of momentum equals the net external force, F = dp/dt; for constant mass **F = ma**. 1 N = 1 kg m s⁻².",
            "The second law is a vector law (Fx = m ax, Fy = m ay) and is **local**: the force at an instant decides the acceleration at that instant.",
            "**Impulse** = F × Δt = change in momentum. A large force acting for a very short time (a bat hitting a ball) is an **impulsive force**.",
            "A cricketer **draws his hands back** while catching to increase the time of impact, which reduces the force on his hands for the same change in momentum."
          ]
        },
        {
          heading: "Third Law and Conservation of Momentum",
          points: [
            "**Third law**: to every action there is always an equal and opposite reaction. Forces always occur in pairs.",
            "Action and reaction act **simultaneously on different bodies**, so they never cancel each other.",
            "**Conservation of momentum**: the total momentum of an isolated system (no net external force) remains constant.",
            "**Recoil of a gun**: a bullet of mass m fired with speed v makes a gun of mass M recoil with speed V = mv/M, since total momentum stays zero.",
            "**Equilibrium of a particle**: the net force on it is zero; three concurrent forces in equilibrium (F₁ + F₂ + F₃ = 0) form a closed triangle."
          ]
        },
        {
          heading: "Friction",
          points: [
            "**Static friction** opposes impending relative motion and is self-adjusting, up to a limiting value fₛ(max) = μₛN, where N is the normal reaction.",
            "**Kinetic friction** fₖ = μₖN acts once sliding starts; usually μₖ < μₛ. **Rolling friction** is much smaller than sliding friction.",
            "To a good approximation friction does **not depend on the area of contact**; it depends on the nature of the surfaces and on N.",
            "**Angle of repose**: a block on an incline just begins to slide when tan θ = μₛ.",
            "Friction is reduced by lubricants, ball bearings and streamlining; it is also essential, e.g. for walking, braking and holding things."
          ]
        },
        {
          heading: "Dynamics of Circular Motion",
          points: [
            "A body in uniform circular motion needs a net **centripetal force** mv²/R towards the centre, supplied by tension, gravity, friction or a normal force.",
            "Car on a **level road**: static friction supplies the centripetal force, so the maximum safe speed is v = √(μₛRg).",
            "On a road **banked** at angle θ, a component of the normal reaction also provides centripetal force; at the **optimum speed** v₀ = √(Rg tan θ) no friction is needed, which reduces tyre wear.",
            "Maximum safe speed on a banked road: v = √[Rg(μₛ + tan θ)/(1 − μₛ tan θ)]."
          ]
        }
      ],
      formulas: [
        "Momentum: p = mv",
        "Second law: F = dp/dt = ma",
        "Impulse: J = F Δt = Δp = mv − mu",
        "Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
        "Recoil speed of a gun: V = mv/M",
        "Limiting static friction fₛ(max) = μₛN; kinetic friction fₖ = μₖN",
        "Angle of repose: tan θ = μₛ",
        "Block sliding down a rough incline: a = g(sin θ − μₖ cos θ)",
        "Apparent weight in a lift: R = m(g + a) accelerating up, R = m(g − a) accelerating down, R = 0 in free fall",
        "Two masses over a light frictionless pulley (m₁ > m₂): a = (m₁ − m₂)g/(m₁ + m₂), T = 2m₁m₂g/(m₁ + m₂)",
        "Centripetal force: F = mv²/R = mω²R",
        "Level road maximum speed: v = √(μₛRg)",
        "Banked road optimum speed: v₀ = √(Rg tan θ)",
        "Banked road maximum speed: v = √[Rg(μₛ + tan θ)/(1 − μₛ tan θ)]"
      ],
      terms: [
        { term: "Inertia", meaning: "The tendency of a body to **resist any change in its state of rest or uniform motion**; measured by mass." },
        { term: "Linear momentum", meaning: "**p = mv**, the product of mass and velocity; a vector quantity." },
        { term: "Impulse", meaning: "**Force × time** for which it acts, equal to the change in momentum." },
        { term: "Static friction", meaning: "Self-adjusting friction that **opposes impending motion**, up to a limit μₛN." },
        { term: "Centripetal force", meaning: "The net force **mv²/R towards the centre** needed to keep a body in circular motion." },
        { term: "Banking of roads", meaning: "Raising the **outer edge of a curved road** so the normal reaction helps provide the centripetal force." }
      ],
      examples: [
        {
          q: "A batsman hits a ball straight back towards the bowler without changing its speed of 12 m s⁻¹. If the mass of the ball is 0.15 kg, find the impulse given to the ball.",
          steps: [
            "Take the direction towards the bowler as positive",
            "Initial velocity u = −12 m s⁻¹, final velocity v = +12 m s⁻¹",
            "Impulse = m(v − u) = 0.15 × (12 − (−12)) = 0.15 × 24"
          ],
          answer: "Impulse = 3.6 N s, directed from the batsman towards the bowler."
        },
        {
          q: "A circular racetrack of radius 300 m is banked at 15°. If μₛ between the tyres and road is 0.2, find (a) the optimum speed, (b) the maximum safe speed. (g = 9.8 m s⁻², tan 15° = 0.268)",
          steps: [
            "(a) v₀ = √(Rg tan θ) = √(300 × 9.8 × 0.268) = √788 ≈ 28.1 m s⁻¹",
            "(b) v = √[Rg(μₛ + tan θ)/(1 − μₛ tan θ)]",
            "= √[2940 × (0.2 + 0.268)/(1 − 0.2 × 0.268)] = √[2940 × 0.468/0.946]",
            "= √1454 ≈ 38.1 m s⁻¹"
          ],
          answer: "Optimum speed ≈ 28.1 m s⁻¹; maximum safe speed ≈ 38.1 m s⁻¹"
        }
      ],
      qa: [
        {
          q: "Why does a cricketer move his hands backwards while catching a fast ball?",
          a: "The change in momentum of the ball is fixed (from mv to zero). Since **F = Δp/Δt**, moving the hands back **increases the time Δt** over which the ball stops, so the **force on the hands is reduced** and they are not hurt."
        },
        {
          q: "Action and reaction are equal and opposite. Why don't they cancel each other?",
          a: "Action and reaction **act on different bodies**. Forces cancel only when they act on the **same body**. For example, when a horse pulls a cart, the cart pulls the horse back; the forward motion depends on the forces acting on the horse–cart system from the ground."
        },
        {
          q: "Why are roads banked on curves? Obtain the optimum speed on a banked road.",
          a: "On a level road only friction provides the centripetal force, which may be insufficient. On a road banked at angle θ, ignoring friction, **N cos θ = mg** and **N sin θ = mv²/R**. Dividing, tan θ = v²/Rg, so the optimum speed is **v₀ = √(Rg tan θ)**. At this speed no friction is needed and tyre wear is minimum."
        }
      ],
      quiz: [
        {
          q: "A force of 10 N acts for 3 s on a body of mass 2 kg initially at rest. The momentum gained by the body is:",
          options: ["15 kg m s⁻¹", "30 kg m s⁻¹", "60 kg m s⁻¹", "5 kg m s⁻¹"],
          answer: 1,
          explain: "Change in momentum = impulse = F × t = 10 × 3 = **30 kg m s⁻¹**."
        },
        {
          q: "A person of mass 60 kg stands on a weighing scale in a lift accelerating upwards at 2 m s⁻². The scale reads (g = 10 m s⁻²):",
          options: ["600 N", "480 N", "120 N", "720 N"],
          answer: 3,
          explain: "Going up with acceleration a: R = m(g + a) = 60 × 12 = **720 N**."
        },
        {
          q: "Action and reaction forces do not cancel each other because they:",
          options: ["act on different bodies", "are unequal in magnitude", "act at different times", "act in the same direction"],
          answer: 0,
          explain: "They are equal, opposite and simultaneous, but they act on **different bodies**."
        },
        {
          q: "A block on an inclined plane just begins to slide when the angle of incline is 30°. The coefficient of static friction is:",
          options: ["√3", "1/2", "1/√3", "√3/2"],
          answer: 2,
          explain: "At the angle of repose, μₛ = tan θ = tan 30° = **1/√3** ≈ 0.58."
        },
        {
          q: "A bullet of mass 20 g is fired at 200 m s⁻¹ from a gun of mass 4 kg. The recoil speed of the gun is:",
          options: ["2 m s⁻¹", "1 m s⁻¹", "0.5 m s⁻¹", "10 m s⁻¹"],
          answer: 1,
          explain: "V = mv/M = (0.02 × 200)/4 = 4/4 = **1 m s⁻¹**, opposite to the bullet."
        },
        {
          q: "The maximum speed at which a car can take a level circular turn of radius 100 m, if μₛ = 0.4, is (g = 10 m s⁻²):",
          options: ["20 m s⁻¹", "40 m s⁻¹", "10 m s⁻¹", "400 m s⁻¹"],
          answer: 0,
          explain: "v = √(μₛRg) = √(0.4 × 100 × 10) = √400 = **20 m s⁻¹**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "work-energy-and-power",
      title: "Work, Energy and Power",
      section: "Mechanics",
      summary: "Introduces the scalar product, work done by constant and variable forces, the work-energy theorem, kinetic and potential energy (including the energy of a spring), conservation of mechanical energy, power, and elastic and inelastic collisions.",
      notes: [
        {
          heading: "Scalar Product and Work",
          points: [
            "**Scalar (dot) product**: A·B = AB cos θ = AxBx + AyBy + AzBz. It is commutative and distributive; î·î = 1 and î·ĵ = 0.",
            "**Work** done by a constant force: W = F·d = Fd cos θ; SI unit joule (1 J = 1 N m).",
            "Work is **zero** if the force is zero, the displacement is zero, or the force is perpendicular to displacement (e.g. centripetal force does no work).",
            "Work is **positive** for 0° ≤ θ < 90° and **negative** for 90° < θ ≤ 180° (e.g. friction on a sliding body, gravity on a rising ball).",
            "Work done by a **variable force** = ∫F dx = area under the force–displacement graph."
          ]
        },
        {
          heading: "Kinetic Energy and the Work-Energy Theorem",
          points: [
            "**Kinetic energy** K = ½mv² = p²/2m; it is a scalar and never negative.",
            "**Work-energy theorem**: the work done by the **net force** on a body equals the change in its kinetic energy: W = ½mv² − ½mu².",
            "For two bodies with equal momentum, the **lighter** one has more kinetic energy, since K = p²/2m.",
            "1 eV = 1.6 × 10⁻¹⁹ J and 1 kWh = 3.6 × 10⁶ J are other units of energy."
          ]
        },
        {
          heading: "Potential Energy and Conservation of Mechanical Energy",
          points: [
            "**Potential energy** is energy stored because of position or configuration; it is defined only for **conservative forces**.",
            "A force is **conservative** if the work done by it depends only on the initial and final positions (zero round a closed path), e.g. gravity and spring force. **Friction is non-conservative.**",
            "Gravitational PE near the earth's surface: V = mgh. For a conservative force, F = −dV/dx.",
            "**Conservation of mechanical energy**: if only conservative forces do work, K + V stays constant; KE and PE simply change into each other (free fall, pendulum).",
            "For a bob whirled in a vertical circle on a string, the minimum speed at the lowest point is √(5gR) and at the top √(gR)."
          ]
        },
        {
          heading: "Spring Energy and Power",
          points: [
            "For an ideal spring the restoring force is **F = −kx** (Hooke's law); k is the spring constant (N m⁻¹), larger for a stiffer spring.",
            "Work done in stretching or compressing a spring by x is **½kx²**, stored as elastic potential energy.",
            "**Power** is the rate of doing work: average P = W/t, instantaneous **P = dW/dt = F·v**.",
            "Unit of power: watt (1 W = 1 J s⁻¹); 1 horsepower (hp) = 746 W. The **kilowatt hour** is a unit of energy, not power."
          ]
        },
        {
          heading: "Collisions",
          points: [
            "In every collision, **total linear momentum and total energy are conserved**. In an **elastic collision** the total kinetic energy is also conserved.",
            "In an **inelastic collision** some kinetic energy changes to heat, sound or deformation. In a **perfectly inelastic** collision the bodies stick together and the KE loss is maximum.",
            "1D elastic collision with m₂ initially at rest: v₁ = (m₁ − m₂)u₁/(m₁ + m₂), v₂ = 2m₁u₁/(m₁ + m₂).",
            "Equal masses in a 1D elastic collision (one at rest) **exchange velocities**; a light ball hitting a very heavy one at rest bounces back with nearly the same speed.",
            "In a 2D collision, momentum is conserved separately along x and y."
          ]
        }
      ],
      formulas: [
        "Scalar product: A·B = AB cos θ = AxBx + AyBy + AzBz",
        "Work by a constant force: W = F·d = Fd cos θ",
        "Work by a variable force: W = ∫F dx (area under F–x graph)",
        "Kinetic energy: K = ½mv² = p²/2m",
        "Work-energy theorem: W(net) = ½mv² − ½mu²",
        "Gravitational PE near the earth: V = mgh",
        "Conservative force: F = −dV/dx",
        "Spring: F = −kx; elastic PE = ½kx²",
        "Mechanical energy (only conservative forces): K + V = constant",
        "Power: P = W/t; instantaneous P = F·v = Fv cos θ",
        "1 hp = 746 W; 1 kWh = 3.6 × 10⁶ J; 1 eV = 1.6 × 10⁻¹⁹ J",
        "Elastic collision (m₂ at rest): v₁ = (m₁ − m₂)u₁/(m₁ + m₂), v₂ = 2m₁u₁/(m₁ + m₂)",
        "Perfectly inelastic collision: common velocity v = (m₁u₁ + m₂u₂)/(m₁ + m₂)",
        "Vertical circle on a string: minimum speed √(5gR) at the bottom, √(gR) at the top"
      ],
      terms: [
        { term: "Work", meaning: "**W = Fd cos θ**: the product of force and the displacement in the direction of the force; a scalar." },
        { term: "Kinetic energy", meaning: "Energy of a body due to its motion, **K = ½mv²**." },
        { term: "Conservative force", meaning: "A force whose work **depends only on initial and final positions**, not on the path, e.g. gravity, spring force." },
        { term: "Work-energy theorem", meaning: "Work done by the net force on a body **equals the change in its kinetic energy**." },
        { term: "Power", meaning: "**Rate of doing work**, P = W/t = F·v; unit watt." },
        { term: "Elastic collision", meaning: "A collision in which **both momentum and total kinetic energy are conserved**." }
      ],
      examples: [
        {
          q: "A force F = (3x² + 2) N, where x is in metres, acts along the x-axis on a 1 kg body initially at rest at x = 0. Find the work done from x = 0 to x = 2 m and the speed of the body at x = 2 m.",
          steps: [
            "W = ∫₀² (3x² + 2) dx = [x³ + 2x] from 0 to 2",
            "W = (8 + 4) − 0 = 12 J",
            "By the work-energy theorem, ½mv² − 0 = 12, so ½ × 1 × v² = 12",
            "v² = 24, v = √24 ≈ 4.9 m s⁻¹"
          ],
          answer: "Work done = 12 J; speed at x = 2 m ≈ 4.9 m s⁻¹"
        },
        {
          q: "A 2 kg ball moving at 3 m s⁻¹ collides head-on elastically with a 1 kg ball at rest. Find their velocities after the collision.",
          steps: [
            "v₁ = (m₁ − m₂)u₁/(m₁ + m₂) = (2 − 1) × 3/3 = 1 m s⁻¹",
            "v₂ = 2m₁u₁/(m₁ + m₂) = 2 × 2 × 3/3 = 4 m s⁻¹",
            "Check momentum: 2 × 3 = 6 before; 2 × 1 + 1 × 4 = 6 after",
            "Check KE: ½ × 2 × 9 = 9 J before; ½ × 2 × 1 + ½ × 1 × 16 = 9 J after"
          ],
          answer: "The 2 kg ball moves on at 1 m s⁻¹ and the 1 kg ball moves at 4 m s⁻¹, both in the original direction."
        }
      ],
      qa: [
        {
          q: "State and prove the work-energy theorem for a constant force.",
          a: "**Statement**: the work done by the net force on a body equals the change in its kinetic energy. **Proof**: for constant acceleration, v² − u² = 2as. Multiply by m/2: ½mv² − ½mu² = mas = Fs. Since Fs is the work done W, **W = ½mv² − ½mu² = ΔK**."
        },
        {
          q: "What is a conservative force? Give two examples and one example of a non-conservative force.",
          a: "A force is **conservative** if the work done by it on a body depends only on the **initial and final positions** and not on the path, so the work over any **closed path is zero**. Examples: **gravitational force, spring force** (also electrostatic force). **Friction** is non-conservative: the work it does depends on the path length and is always negative."
        },
        {
          q: "Show that in a one-dimensional elastic collision of two equal masses, with one initially at rest, the bodies exchange velocities.",
          a: "For m₂ at rest, v₁ = (m₁ − m₂)u₁/(m₁ + m₂) and v₂ = 2m₁u₁/(m₁ + m₂). Putting **m₁ = m₂ = m**: v₁ = 0 and v₂ = 2mu₁/2m = u₁. So the first body **stops** and the second moves off with the **velocity of the first**: they exchange velocities."
        }
      ],
      quiz: [
        {
          q: "A force F = (3î + 4ĵ) N displaces a body by d = (2î − ĵ) m. The work done is:",
          options: ["10 J", "2 J", "5 J", "−2 J"],
          answer: 1,
          explain: "W = F·d = 3 × 2 + 4 × (−1) = 6 − 4 = **2 J**."
        },
        {
          q: "If the momentum of a body is doubled, its kinetic energy becomes:",
          options: ["two times", "half", "eight times", "four times"],
          answer: 3,
          explain: "K = p²/2m, so K ∝ p². Doubling p makes K **four times**."
        },
        {
          q: "A spring of spring constant 200 N m⁻¹ is compressed by 10 cm. The energy stored in it is:",
          options: ["10 J", "2 J", "1 J", "100 J"],
          answer: 2,
          explain: "U = ½kx² = ½ × 200 × (0.1)² = **1 J**. (Forgetting to square x gives 10 J; forgetting the ½ gives 2 J.)"
        },
        {
          q: "Which of the following is a non-conservative force?",
          options: ["Kinetic friction", "Gravitational force", "Spring force", "Electrostatic force"],
          answer: 0,
          explain: "Work done by **friction** depends on the path and cannot be recovered as potential energy, so it is non-conservative."
        },
        {
          q: "A motor lifts 100 kg of water through a height of 15 m in 10 s. Its power output is (g = 10 m s⁻²):",
          options: ["150 W", "15 kW", "1.5 kW", "1.5 W"],
          answer: 2,
          explain: "P = mgh/t = (100 × 10 × 15)/10 = 1500 W = **1.5 kW**."
        },
        {
          q: "A 4 kg body moving at 5 m s⁻¹ collides with and sticks to a 1 kg body at rest. The loss of kinetic energy is:",
          options: ["40 J", "50 J", "0 J", "10 J"],
          answer: 3,
          explain: "Common velocity v = (4 × 5)/5 = 4 m s⁻¹. KE before = ½ × 4 × 25 = 50 J; KE after = ½ × 5 × 16 = 40 J. Loss = **10 J**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "system-of-particles-and-rotational-motion",
      title: "System of Particles and Rotational Motion",
      section: "Mechanics",
      summary: "Deals with extended bodies: the centre of mass and its motion, the vector product, torque and angular momentum, equilibrium of rigid bodies, moment of inertia and the dynamics of rotation about a fixed axis.",
      notes: [
        {
          heading: "Centre of Mass",
          points: [
            "A **rigid body** is one in which the distances between particles do not change. Its motion can be pure translation, rotation about a fixed axis, or both.",
            "**Centre of mass (CM)** of a system: R = Σmᵢrᵢ/M. For two particles on the x-axis, X = (m₁x₁ + m₂x₂)/(m₁ + m₂).",
            "For uniform symmetric bodies (rod, ring, disc, sphere, cube) the CM is at the **geometric centre**; it may lie outside the material, as in a ring.",
            "**Motion of the CM**: M a(cm) = F(ext). Internal forces do not affect it, so the CM of an exploding shell keeps following the original parabolic path.",
            "Total momentum P = M v(cm); if the net external force is zero, the CM moves with **constant velocity**."
          ]
        },
        {
          heading: "Vector Product, Torque and Angular Momentum",
          points: [
            "**Vector (cross) product**: |A × B| = AB sin θ, direction given by the **right-hand rule**. A × B = −B × A, and A × A = 0.",
            "**Torque** (moment of force) τ = r × F; magnitude rF sin θ = force × perpendicular distance from the axis; unit N m.",
            "**Angular momentum** of a particle L = r × p; for a particle in a circle, L = mvr.",
            "**τ = dL/dt**: torque is the rate of change of angular momentum (rotational form of the second law).",
            "**Conservation of angular momentum**: if the net external torque is zero, L = Iω stays constant. A skater pulling in her arms decreases I and **spins faster**."
          ]
        },
        {
          heading: "Equilibrium of a Rigid Body",
          points: [
            "**Translational equilibrium**: net external force = 0. **Rotational equilibrium**: net external torque = 0. Both are needed for mechanical equilibrium.",
            "A **couple** is a pair of equal and opposite forces with different lines of action; it causes rotation without translation (turning a steering wheel or a bottle cap).",
            "**Principle of moments** for a lever: load × load arm = effort × effort arm; **mechanical advantage** = load/effort = effort arm/load arm.",
            "**Centre of gravity** is the point where the total gravitational torque on the body is zero; it coincides with the CM when g is uniform over the body."
          ]
        },
        {
          heading: "Moment of Inertia",
          points: [
            "**Moment of inertia** I = Σmᵢrᵢ² is the rotational analogue of mass. It depends on the mass, its **distribution** and the **axis of rotation**; unit kg m².",
            "**Radius of gyration** k is defined by I = Mk²: the distance at which the whole mass could be concentrated to give the same I.",
            "Standard values: thin ring about its axis MR²; disc about its axis ½MR²; thin rod about the perpendicular bisector ML²/12; solid sphere about a diameter 2MR²/5.",
            "A **flywheel** has a large moment of inertia, so it resists sudden changes in its speed and keeps an engine running smoothly."
          ]
        },
        {
          heading: "Rotation about a Fixed Axis",
          points: [
            "For constant angular acceleration α: ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ.",
            "**τ = Iα** is the rotational analogue of F = ma; angular momentum L = Iω; rotational KE = ½Iω².",
            "Work done by a torque W = τθ; power P = τω.",
            "Analogues: mass ↔ moment of inertia, force ↔ torque, linear momentum ↔ angular momentum, velocity ↔ angular velocity."
          ]
        }
      ],
      formulas: [
        "Centre of mass: X = Σmᵢxᵢ/Σmᵢ (similarly Y and Z)",
        "Two particles: X = (m₁x₁ + m₂x₂)/(m₁ + m₂)",
        "Motion of CM: M a(cm) = F(ext); P = M v(cm)",
        "Vector product: |A × B| = AB sin θ; î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ",
        "Torque: τ = r × F, |τ| = rF sin θ",
        "Angular momentum: L = r × p; for a rigid body about a fixed axis L = Iω",
        "τ = dL/dt; if τ(ext) = 0, I₁ω₁ = I₂ω₂",
        "Moment of inertia: I = Σmr² = Mk² (k = radius of gyration)",
        "Ring about its axis MR²; ring about a diameter ½MR²",
        "Disc or solid cylinder about its axis ½MR²; disc about a diameter ¼MR²",
        "Thin rod about perpendicular bisector ML²/12; solid sphere about a diameter 2MR²/5",
        "τ = Iα; rotational KE = ½Iω²; W = τθ; P = τω",
        "ω = ω₀ + αt; θ = ω₀t + ½αt²; ω² = ω₀² + 2αθ",
        "v = ωr; tangential acceleration = αr",
        "Lever: load × load arm = effort × effort arm"
      ],
      terms: [
        { term: "Centre of mass", meaning: "The point where the **whole mass of a system can be taken to be concentrated** for describing its translational motion." },
        { term: "Torque", meaning: "The turning effect of a force, **τ = r × F** (force × perpendicular distance from the axis)." },
        { term: "Angular momentum", meaning: "Moment of linear momentum, **L = r × p**; for a rigid body L = Iω." },
        { term: "Moment of inertia", meaning: "**I = Σmr²**, the rotational inertia of a body about an axis; depends on mass distribution and the axis." },
        { term: "Radius of gyration", meaning: "Distance k from the axis such that **I = Mk²**." },
        { term: "Couple", meaning: "Two **equal and opposite forces with different lines of action**; produces rotation without translation." }
      ],
      examples: [
        {
          q: "Masses of 1 kg, 2 kg and 3 kg are placed at (0, 0), (3 m, 0) and (0, 4 m). Find the centre of mass.",
          steps: [
            "Total mass M = 1 + 2 + 3 = 6 kg",
            "X = (1 × 0 + 2 × 3 + 3 × 0)/6 = 6/6 = 1 m",
            "Y = (1 × 0 + 2 × 0 + 3 × 4)/6 = 12/6 = 2 m"
          ],
          answer: "Centre of mass = (1 m, 2 m)"
        },
        {
          q: "A constant torque of 20 N m acts on a wheel of moment of inertia 4 kg m², initially at rest. Find its angular acceleration, angular speed after 5 s and kinetic energy at that time.",
          steps: [
            "α = τ/I = 20/4 = 5 rad s⁻²",
            "ω = ω₀ + αt = 0 + 5 × 5 = 25 rad s⁻¹",
            "KE = ½Iω² = ½ × 4 × 625 = 1250 J",
            "Check: θ = ½αt² = 62.5 rad, so work done = τθ = 20 × 62.5 = 1250 J"
          ],
          answer: "α = 5 rad s⁻², ω = 25 rad s⁻¹, KE = 1250 J"
        }
      ],
      qa: [
        {
          q: "State the law of conservation of angular momentum and explain it with an example.",
          a: "If the **net external torque** on a system is zero, its **angular momentum remains constant**: Iω = constant. Example: a **skater or a person on a rotating stool** who pulls in the arms reduces the moment of inertia I, so the angular speed ω **increases**; stretching the arms out slows the rotation."
        },
        {
          q: "State the conditions for equilibrium of a rigid body.",
          a: "(1) **Translational equilibrium**: the vector sum of all external forces is zero, ΣF = 0, so the CM has no acceleration. (2) **Rotational equilibrium**: the vector sum of all external torques about any point is zero, Στ = 0, so there is no angular acceleration."
        },
        {
          q: "Why is the moment of inertia of a ring greater than that of a disc of the same mass and radius about their central axes?",
          a: "In a ring **all the mass is at distance R** from the axis, so I = MR². In a disc the mass is **spread from the centre to the rim**, and much of it is closer to the axis, so I = ½MR². Moment of inertia depends on how far the mass is from the axis."
        }
      ],
      quiz: [
        {
          q: "The moment of inertia of a uniform disc of mass 2 kg and radius 0.5 m about its central axis perpendicular to its plane is:",
          options: ["0.5 kg m²", "0.25 kg m²", "1 kg m²", "0.125 kg m²"],
          answer: 1,
          explain: "I = ½MR² = ½ × 2 × (0.5)² = **0.25 kg m²**."
        },
        {
          q: "A skater spinning with arms outstretched pulls them in. Which quantity remains constant?",
          options: ["Angular velocity", "Moment of inertia", "Rotational kinetic energy", "Angular momentum"],
          answer: 3,
          explain: "No external torque acts, so **angular momentum Iω is conserved**. I decreases, ω increases, and rotational KE actually increases (she does work pulling her arms in)."
        },
        {
          q: "A force F = (2î + 3ĵ) N acts at the point r = (î + ĵ) m. The torque about the origin is:",
          options: ["5k̂ N m", "−k̂ N m", "k̂ N m", "−5k̂ N m"],
          answer: 2,
          explain: "τ = r × F = (x Fy − y Fx) k̂ = (1 × 3 − 1 × 2) k̂ = **k̂ N m**."
        },
        {
          q: "Particles of mass 2 kg and 3 kg are at x = 0 and x = 5 m. Their centre of mass is at:",
          options: ["x = 3 m", "x = 2 m", "x = 2.5 m", "x = 1.5 m"],
          answer: 0,
          explain: "X = (2 × 0 + 3 × 5)/(2 + 3) = 15/5 = **3 m**, closer to the heavier particle."
        },
        {
          q: "A wheel's angular speed increases uniformly from 10 rad s⁻¹ to 30 rad s⁻¹ in 4 s. The angle it turns through is:",
          options: ["40 rad", "120 rad", "80 rad", "20 rad"],
          answer: 2,
          explain: "θ = ½(ω₀ + ω)t = ½ × (10 + 30) × 4 = **80 rad**."
        },
        {
          q: "The radius of gyration of a solid sphere of radius R about a diameter is:",
          options: ["2R/5", "√(2/5) R", "√(5/2) R", "R/√2"],
          answer: 1,
          explain: "I = 2MR²/5 = Mk², so k² = 2R²/5 and k = **√(2/5) R** ≈ 0.63R."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "gravitation",
      title: "Gravitation",
      section: "Mechanics",
      summary: "Covers Kepler's laws of planetary motion, Newton's universal law of gravitation, the variation of g with height and depth, gravitational potential energy and potential, escape speed, and the speed and energy of earth satellites.",
      notes: [
        {
          heading: "Kepler's Laws",
          points: [
            "**Law of orbits**: all planets move in elliptical orbits with the Sun at one of the foci.",
            "**Law of areas**: the line joining a planet to the Sun sweeps out equal areas in equal intervals of time. It follows from **conservation of angular momentum**, since gravity is a central force.",
            "Hence a planet moves **fastest at perihelion** (closest to the Sun) and slowest at aphelion (farthest).",
            "**Law of periods**: the square of the time period is proportional to the cube of the semi-major axis, T² ∝ a³."
          ]
        },
        {
          heading: "Universal Law of Gravitation",
          points: [
            "Every particle attracts every other particle with a force F = Gm₁m₂/r² along the line joining them; gravity is **always attractive**.",
            "G = 6.67 × 10⁻¹¹ N m² kg⁻² is a universal constant, first measured experimentally by **Henry Cavendish** in 1798.",
            "Gravitational forces obey the **superposition principle**: the net force is the vector sum of individual forces.",
            "A uniform spherical shell attracts an outside particle as if all its mass were at its centre; the force on a particle **inside the shell is zero**."
          ]
        },
        {
          heading: "Acceleration due to Gravity",
          points: [
            "At the earth's surface **g = GM/R²** ≈ 9.8 m s⁻²; g does not depend on the mass of the falling body.",
            "At height h: g(h) = gR²/(R + h)² ≈ g(1 − 2h/R) for h ≪ R, so g **decreases with height**.",
            "At depth d: g(d) = g(1 − d/R), so g **decreases with depth** and becomes **zero at the centre** of the earth.",
            "Taking the earth as a uniform sphere, g is therefore maximum at the surface."
          ]
        },
        {
          heading: "Gravitational Potential Energy and Escape Speed",
          points: [
            "Gravitational PE of two masses at separation r: V = −Gm₁m₂/r, taking zero at infinity. It is **negative** because the force is attractive.",
            "**Gravitational potential** = PE per unit mass = −GM/r (J kg⁻¹). Near the surface, the PE difference for a small height h reduces to mgh.",
            "**Escape speed** vₑ = √(2GM/R) = √(2gR) ≈ **11.2 km s⁻¹** for the earth; it does not depend on the mass of the body.",
            "The moon's escape speed is only about 2.3 km s⁻¹, so gas molecules escape easily and the moon has **no atmosphere**."
          ]
        },
        {
          heading: "Earth Satellites",
          points: [
            "Orbital speed at distance r = R + h from the earth's centre: v = √(GM/r). Close to the surface, v ≈ √(gR) ≈ 7.9 km s⁻¹.",
            "Period T = 2πr/v = 2π√(r³/GM), so T² ∝ r³, as in Kepler's third law.",
            "Energy of a satellite: KE = GMm/2r, PE = −GMm/r, total **E = −GMm/2r**. Negative total energy means the satellite is **bound** to the earth.",
            "Near the surface, escape speed = √2 × orbital speed."
          ]
        }
      ],
      formulas: [
        "Newton's law: F = Gm₁m₂/r²; G = 6.67 × 10⁻¹¹ N m² kg⁻²",
        "Kepler's third law: T² ∝ a³",
        "At the surface: g = GM/R²",
        "At height h: g(h) = gR²/(R + h)² ≈ g(1 − 2h/R) for h ≪ R",
        "At depth d: g(d) = g(1 − d/R)",
        "Gravitational PE: V = −Gm₁m₂/r",
        "Gravitational potential: −GM/r",
        "Escape speed: vₑ = √(2GM/R) = √(2gR) ≈ 11.2 km s⁻¹",
        "Orbital speed: v = √(GM/(R + h)); near the surface v = √(gR) ≈ 7.9 km s⁻¹",
        "Period of a satellite: T = 2π√((R + h)³/GM)",
        "Satellite: KE = GMm/2r, PE = −GMm/r, total E = −GMm/2r",
        "Binding energy of a satellite = GMm/2r"
      ],
      terms: [
        { term: "Kepler's law of areas", meaning: "The line from the Sun to a planet **sweeps equal areas in equal times**; a result of conservation of angular momentum." },
        { term: "Universal gravitational constant", meaning: "**G = 6.67 × 10⁻¹¹ N m² kg⁻²**, the same for all pairs of bodies everywhere." },
        { term: "Acceleration due to gravity", meaning: "Acceleration of a freely falling body near the earth, **g = GM/R² ≈ 9.8 m s⁻²**." },
        { term: "Gravitational potential", meaning: "Gravitational **potential energy per unit mass** at a point, −GM/r." },
        { term: "Escape speed", meaning: "Minimum speed needed to **escape the earth's gravity** permanently, √(2gR) ≈ 11.2 km s⁻¹." },
        { term: "Orbital speed", meaning: "Speed needed to **stay in a circular orbit**, v = √(GM/r)." }
      ],
      examples: [
        {
          q: "At what height above the earth's surface does the value of g become one-fourth of its value at the surface? (R = 6400 km)",
          steps: [
            "g(h)/g = R²/(R + h)² = 1/4",
            "Taking square roots: R/(R + h) = 1/2",
            "R + h = 2R, so h = R"
          ],
          answer: "h = R = 6400 km"
        },
        {
          q: "Calculate the escape speed from the earth's surface. (g = 9.8 m s⁻², R = 6.4 × 10⁶ m)",
          steps: [
            "Energy needed to escape: ½mvₑ² = GMm/R, so vₑ = √(2GM/R) = √(2gR)",
            "2gR = 2 × 9.8 × 6.4 × 10⁶ = 1.2544 × 10⁸ m² s⁻²",
            "vₑ = √(1.2544 × 10⁸) = 1.12 × 10⁴ m s⁻¹"
          ],
          answer: "vₑ ≈ 11.2 km s⁻¹"
        }
      ],
      qa: [
        {
          q: "State Kepler's three laws of planetary motion.",
          a: "(1) **Law of orbits**: planets move in **elliptical orbits** with the Sun at one focus. (2) **Law of areas**: the line joining the Sun and a planet sweeps **equal areas in equal times**. (3) **Law of periods**: **T² ∝ a³**, where T is the period and a the semi-major axis of the orbit."
        },
        {
          q: "Derive an expression for the escape speed from the surface of the earth.",
          a: "A body of mass m on the surface has PE = −GMm/R. To just escape to infinity (where PE = 0 and KE = 0), its total energy must be zero: ½mvₑ² − GMm/R = 0. So **vₑ = √(2GM/R)**. Using GM = gR², **vₑ = √(2gR)** ≈ 11.2 km s⁻¹. It is independent of the mass of the body."
        },
        {
          q: "Show that the value of g decreases with depth.",
          a: "Treat the earth as a uniform sphere of density ρ. At depth d, only the inner sphere of radius (R − d) attracts the body (the outer shell exerts no net force). Its mass is M(R − d)³/R³. So g(d) = G × M(R − d)³/R³ ÷ (R − d)² = GM(R − d)/R³ = **g(1 − d/R)**. Hence g decreases linearly with depth and is **zero at the centre**."
        }
      ],
      quiz: [
        {
          q: "If the distance between two masses is doubled, the gravitational force between them becomes:",
          options: ["half", "double", "one-fourth", "four times"],
          answer: 2,
          explain: "F ∝ 1/r², so doubling r makes F **one-fourth**."
        },
        {
          q: "The escape speed from the earth is 11.2 km s⁻¹. For a body of twice the mass, the escape speed is:",
          options: ["22.4 km s⁻¹", "11.2 km s⁻¹", "5.6 km s⁻¹", "15.8 km s⁻¹"],
          answer: 1,
          explain: "vₑ = √(2GM/R) does **not depend on the mass** of the body, so it stays **11.2 km s⁻¹**."
        },
        {
          q: "Kepler's law of areas is a consequence of the conservation of:",
          options: ["angular momentum", "linear momentum", "energy", "mass"],
          answer: 0,
          explain: "Gravity is a central force, so its torque about the Sun is zero and **angular momentum** is conserved. Areal velocity = L/2m is therefore constant."
        },
        {
          q: "The value of g at a depth R/2 below the earth's surface (R = radius of the earth) is:",
          options: ["g/4", "2g", "zero", "g/2"],
          answer: 3,
          explain: "g(d) = g(1 − d/R) = g(1 − ½) = **g/2**. (g/4 is the value at a height R above the surface.)"
        },
        {
          q: "A satellite in a circular orbit has kinetic energy K. Its total mechanical energy is:",
          options: ["K", "−2K", "−K", "2K"],
          answer: 2,
          explain: "KE = GMm/2r and total E = −GMm/2r, so **E = −K**. (The potential energy is −2K.)"
        },
        {
          q: "If a planet's orbit around the Sun had a radius 4 times that of the earth's, its period would be:",
          options: ["4 years", "16 years", "2 years", "8 years"],
          answer: 3,
          explain: "T² ∝ r³, so T(planet)/T(earth) = √(4³) = √64 = 8. The period is **8 years**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "mechanical-properties-of-solids",
      title: "Mechanical Properties of Solids",
      section: "Properties of Matter",
      summary: "Explains the elastic behaviour of solids: stress and strain, Hooke's law, the stress–strain curve, Young's modulus, shear modulus, bulk modulus and Poisson's ratio, and how elasticity is used in engineering design.",
      notes: [
        {
          heading: "Elasticity, Stress and Strain",
          points: [
            "**Elasticity** is the property of a body to regain its original size and shape when the deforming force is removed. **Plastic** bodies (putty, mud) do not regain it.",
            "**Stress** = restoring force per unit area, F/A; unit N m⁻² or Pa, dimensions [M L⁻¹ T⁻²].",
            "Types of stress: **tensile or compressive** (longitudinal), **shearing** (tangential force), and **hydraulic** (uniform pressure from all sides).",
            "**Strain** is the fractional change in dimension: longitudinal ΔL/L, shearing Δx/L = tan θ ≈ θ, volume ΔV/V. Strain has **no unit**."
          ]
        },
        {
          heading: "Hooke's Law and the Stress–Strain Curve",
          points: [
            "**Hooke's law**: for small deformations, **stress ∝ strain**; stress = modulus of elasticity × strain.",
            "The stress–strain curve is a straight line up to the **proportional limit**. Up to the **elastic limit (yield point)** the body regains its shape when the load is removed.",
            "Beyond the yield point, strain increases rapidly and the deformation is **permanent** (plastic). The maximum stress the wire can bear is its **ultimate tensile strength**; after that it fractures.",
            "If the ultimate strength and fracture points are far apart, the material is **ductile** (copper, mild steel); if they are close, it is **brittle** (glass, cast iron).",
            "**Elastomers** such as rubber and the tissue of the aorta can be stretched a lot and still return, but their stress–strain curve is not linear."
          ]
        },
        {
          heading: "Elastic Moduli",
          points: [
            "**Young's modulus** Y = (F/A)/(ΔL/L) = FL/(A ΔL); for steel Y ≈ 2 × 10¹¹ Pa. Steel is **more elastic than rubber** because it has a much larger Y.",
            "**Shear modulus (modulus of rigidity)** G = (F/A)/θ; for most materials G ≈ Y/3.",
            "**Bulk modulus** B = −p/(ΔV/V); the minus sign shows that volume decreases when pressure increases. **Compressibility** = 1/B.",
            "Solids are the least compressible and gases the most; only the bulk modulus applies to liquids and gases, which have no fixed shape.",
            "**Poisson's ratio** = lateral strain/longitudinal strain; it has no unit."
          ]
        },
        {
          heading: "Applications of Elastic Behaviour",
          points: [
            "Crane ropes are made of **many thin wires braided together** for flexibility and strength; their thickness is chosen so the stress stays well below the elastic limit.",
            "A beam of length l, breadth b and depth d loaded at the middle sags by δ = Wl³/(4bd³Y). Increasing the **depth d** reduces bending the most.",
            "Bridges and buildings use **I-shaped girders**: they give a large depth with less material and weight, while resisting bending and buckling.",
            "The maximum height of a mountain on earth (about 10 km) is limited by the **elastic limit of rocks** at its base under the weight above."
          ]
        }
      ],
      formulas: [
        "Stress = F/A (unit Pa = N m⁻²)",
        "Longitudinal strain = ΔL/L; shearing strain = Δx/L = tan θ ≈ θ; volume strain = ΔV/V",
        "Hooke's law: stress = modulus of elasticity × strain",
        "Young's modulus: Y = FL/(A ΔL)",
        "Extension of a wire: ΔL = FL/(AY) = FL/(πr²Y)",
        "Shear modulus: G = F/(Aθ) = FL/(A Δx)",
        "Bulk modulus: B = −pV/ΔV; compressibility = 1/B",
        "Poisson's ratio = (Δd/d)/(ΔL/L)",
        "Sag of a beam loaded at the centre: δ = Wl³/(4bd³Y)",
        "Elastic potential energy per unit volume = ½ × stress × strain"
      ],
      terms: [
        { term: "Elasticity", meaning: "Property of a body to **regain its original size and shape** after the deforming force is removed." },
        { term: "Stress", meaning: "**Restoring force per unit area** set up inside a deformed body; unit Pa." },
        { term: "Strain", meaning: "**Fractional change in dimension** (length, shape or volume); it has no unit." },
        { term: "Elastic limit (yield point)", meaning: "The **maximum stress** up to which a body fully regains its original dimensions when the load is removed." },
        { term: "Young's modulus", meaning: "**Ratio of tensile (or compressive) stress to longitudinal strain**, Y = FL/(A ΔL)." },
        { term: "Bulk modulus", meaning: "**Ratio of hydraulic stress to volume strain**, B = −p/(ΔV/V)." }
      ],
      examples: [
        {
          q: "A steel wire of length 2 m and cross-sectional area 1 mm² supports a load of 10 kg. Find the stress, strain and extension. (Y = 2 × 10¹¹ N m⁻², g = 10 m s⁻²)",
          steps: [
            "F = mg = 10 × 10 = 100 N; A = 1 mm² = 1 × 10⁻⁶ m²",
            "Stress = F/A = 100/10⁻⁶ = 1 × 10⁸ N m⁻²",
            "Strain = stress/Y = 10⁸/(2 × 10¹¹) = 5 × 10⁻⁴",
            "Extension ΔL = strain × L = 5 × 10⁻⁴ × 2 = 1 × 10⁻³ m"
          ],
          answer: "Stress = 1 × 10⁸ N m⁻², strain = 5 × 10⁻⁴, extension = 1 mm"
        },
        {
          q: "Find the fractional change in volume of a glass slab under a hydraulic pressure of 10 atm. (Bulk modulus of glass = 37 × 10⁹ N m⁻², 1 atm = 1.013 × 10⁵ Pa)",
          steps: [
            "p = 10 × 1.013 × 10⁵ = 1.013 × 10⁶ Pa",
            "|ΔV/V| = p/B = 1.013 × 10⁶/(37 × 10⁹)",
            "= 2.74 × 10⁻⁵"
          ],
          answer: "Fractional decrease in volume ≈ 2.74 × 10⁻⁵"
        }
      ],
      qa: [
        {
          q: "Steel is more elastic than rubber. Explain.",
          a: "Elasticity is measured by the **modulus of elasticity**. For the same stress, steel shows a **much smaller strain** than rubber, so its Young's modulus (≈ 2 × 10¹¹ Pa) is far greater. A body that offers more resistance to deformation and restores itself is **more elastic**, so steel is more elastic than rubber."
        },
        {
          q: "Describe the stress–strain curve of a metal wire under increasing load.",
          a: "Initially stress ∝ strain (straight line) up to the **proportional limit**, where Hooke's law holds. Up to the **elastic limit (yield point)** the wire returns to its original length on unloading. Beyond it, strain rises rapidly and a **permanent set** remains. The highest point of the curve is the **ultimate tensile strength**; beyond it the wire thins and finally breaks at the **fracture point**."
        },
        {
          q: "Why are girders and beams given an I-shaped cross-section?",
          a: "The sag of a beam is δ = Wl³/(4bd³Y), so it falls rapidly as the **depth d increases** (δ ∝ 1/d³). A deep beam would be heavy, so an **I-section** keeps a large depth while removing material from the middle where stress is small. This **saves material and weight** without loss of strength, and also reduces buckling."
        }
      ],
      quiz: [
        {
          q: "The SI unit of stress is the same as that of:",
          options: ["force", "pressure", "strain", "work"],
          answer: 1,
          explain: "Stress = force/area, the same as **pressure**: N m⁻² or Pa."
        },
        {
          q: "For a perfectly rigid body, Young's modulus would be:",
          options: ["zero", "1", "equal to its bulk modulus", "infinite"],
          answer: 3,
          explain: "A perfectly rigid body has **zero strain** for any stress, so Y = stress/strain is **infinite**."
        },
        {
          q: "A wire stretches by 1 mm under a load. Another wire of the same material, twice as long and of twice the radius, under the same load stretches by:",
          options: ["0.5 mm", "1 mm", "2 mm", "4 mm"],
          answer: 0,
          explain: "ΔL = FL/(πr²Y) ∝ L/r². Doubling L and r gives 2/4 = ½, so ΔL = **0.5 mm**."
        },
        {
          q: "When a wire is loaded beyond its elastic limit, it:",
          options: ["obeys Hooke's law", "becomes more elastic", "does not regain its original length when the load is removed", "breaks immediately"],
          answer: 2,
          explain: "Beyond the elastic limit the deformation is **plastic (permanent)**; the wire breaks only at the fracture point."
        },
        {
          q: "The bulk modulus of a liquid is 2 × 10⁹ Pa. The pressure needed to reduce its volume by 0.1% is:",
          options: ["2 × 10⁷ Pa", "2 × 10⁶ Pa", "2 × 10⁵ Pa", "2 × 10¹² Pa"],
          answer: 1,
          explain: "p = B × |ΔV/V| = 2 × 10⁹ × 0.001 = **2 × 10⁶ Pa**."
        },
        {
          q: "Assuming Hooke's law holds, the stress needed to double the length of a wire of Young's modulus Y is:",
          options: ["Y/2", "2Y", "Y/4", "Y"],
          answer: 3,
          explain: "Doubling the length means ΔL = L, so strain = 1 and stress = Y × 1 = **Y**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "mechanical-properties-of-fluids",
      title: "Mechanical Properties of Fluids",
      section: "Properties of Matter",
      summary: "Studies fluids at rest and in motion: pressure and Pascal's law, streamline flow, the equation of continuity and Bernoulli's principle, viscosity and Stokes' law, and surface tension with its effects on drops, bubbles and capillary rise.",
      notes: [
        {
          heading: "Pressure and Pascal's Law",
          points: [
            "**Pressure** P = F/A is a scalar; unit pascal (Pa). Atmospheric pressure at sea level is 1 atm = 1.013 × 10⁵ Pa, about **76 cm of mercury**.",
            "Pressure at depth h in a liquid open to air: **P = P₀ + ρgh**, where P₀ is atmospheric pressure. The excess ρgh is the **gauge pressure**.",
            "Pressure is the same at all points at the same depth, whatever the shape of the container (**hydrostatic paradox**).",
            "**Pascal's law**: pressure applied to an enclosed fluid is transmitted **undiminished** to every part of the fluid and to the walls of the container.",
            "**Hydraulic lift and brakes**: F₂ = F₁(A₂/A₁), so a small force on a small piston supports a large load on a large piston."
          ]
        },
        {
          heading: "Streamline Flow and Bernoulli's Principle",
          points: [
            "In **streamline (steady) flow** the velocity at each point does not change with time; streamlines never cross. Above a **critical speed** flow becomes turbulent.",
            "**Equation of continuity**: A₁v₁ = A₂v₂ for an incompressible fluid; the fluid **speeds up where the pipe narrows**.",
            "**Bernoulli's principle**: P + ½ρv² + ρgh = constant along a streamline for steady, incompressible, non-viscous flow; it is **conservation of energy** for fluids.",
            "**Torricelli's law**: liquid flows out of a small hole at depth h below the open surface with speed v = √(2gh), as if it had fallen freely through h.",
            "Applications: the **venturi meter**, **dynamic lift** on aeroplane wings and spinning balls (Magnus effect), and roofs blown off in storms (fast wind above means lower pressure)."
          ]
        },
        {
          heading: "Viscosity",
          points: [
            "**Viscosity** is internal friction between layers of a fluid in relative motion. Viscous force F = ηA (dv/dx), where dv/dx is the velocity gradient.",
            "Coefficient of viscosity η has SI unit **Pa s** (poiseuille) and dimensions [M L⁻¹ T⁻¹].",
            "The viscosity of liquids **decreases** with rise in temperature, while that of gases **increases**.",
            "**Stokes' law**: viscous drag on a small sphere of radius r moving with speed v is F = 6πηrv.",
            "A sphere falling through a fluid reaches a constant **terminal velocity** vₜ = 2r²(ρ − σ)g/9η, where ρ is its density and σ the fluid's; vₜ ∝ r²."
          ]
        },
        {
          heading: "Surface Tension",
          points: [
            "**Surface tension** S is the force per unit length in the plane of a liquid surface (N m⁻¹); it equals the **surface energy per unit area** (J m⁻²).",
            "Surface molecules have extra energy, so a liquid tends to **minimise its surface area**; that is why small drops and bubbles are spherical.",
            "**Angle of contact** θ: if θ < 90° the liquid wets the solid (water on clean glass); if θ > 90° it does not (mercury on glass). Detergents lower the surface tension and the angle of contact.",
            "**Excess pressure** inside a liquid drop or an air bubble in a liquid = 2S/r; inside a soap bubble, which has two surfaces, = 4S/r.",
            "**Capillary rise** h = 2S cos θ/(ρgr): water rises in a thin glass tube, while mercury (θ > 90°) is depressed. Surface tension generally decreases as temperature rises."
          ]
        }
      ],
      formulas: [
        "Pressure: P = F/A; 1 atm = 1.013 × 10⁵ Pa",
        "Pressure at depth h: P = P₀ + ρgh; gauge pressure = ρgh",
        "Hydraulic lift: F₁/A₁ = F₂/A₂",
        "Equation of continuity: A₁v₁ = A₂v₂",
        "Bernoulli's principle: P + ½ρv² + ρgh = constant",
        "Speed of efflux (Torricelli): v = √(2gh)",
        "Viscous force: F = ηA (dv/dx); η in Pa s, dimensions [M L⁻¹ T⁻¹]",
        "Stokes' law: F = 6πηrv",
        "Terminal velocity: vₜ = 2r²(ρ − σ)g/9η",
        "Surface tension: S = F/l = surface energy/area",
        "Excess pressure: drop or air bubble in liquid = 2S/r; soap bubble = 4S/r",
        "Capillary rise: h = 2S cos θ/(ρgr)",
        "Work done to blow a soap bubble of radius r: W = 8πr²S (two surfaces)"
      ],
      terms: [
        { term: "Pascal's law", meaning: "Pressure applied to an enclosed fluid is **transmitted equally and undiminished** in all directions." },
        { term: "Streamline flow", meaning: "Steady flow in which the **velocity at each point stays constant** in time; streamlines never cross." },
        { term: "Bernoulli's principle", meaning: "For steady ideal flow, **P + ½ρv² + ρgh is constant** along a streamline." },
        { term: "Viscosity", meaning: "**Internal friction** between fluid layers that opposes their relative motion." },
        { term: "Terminal velocity", meaning: "The **constant maximum speed** reached by a body falling through a fluid, when viscous drag + buoyancy balance its weight." },
        { term: "Surface tension", meaning: "**Force per unit length** (or energy per unit area) of a liquid surface; makes the surface behave like a stretched membrane." }
      ],
      examples: [
        {
          q: "A copper ball of radius 2.0 mm falls through oil with a terminal velocity of 6.5 cm s⁻¹. Find the viscosity of the oil. (Density of oil = 1.5 × 10³ kg m⁻³, copper = 8.9 × 10³ kg m⁻³, g = 9.8 m s⁻²)",
          steps: [
            "η = 2r²(ρ − σ)g/(9vₜ)",
            "Numerator: 2 × (2 × 10⁻³)² × (8.9 − 1.5) × 10³ × 9.8 = 2 × 4 × 10⁻⁶ × 7.4 × 10³ × 9.8 ≈ 0.580",
            "Denominator: 9 × 6.5 × 10⁻² = 0.585",
            "η = 0.580/0.585 ≈ 0.99"
          ],
          answer: "η ≈ 9.9 × 10⁻¹ Pa s (kg m⁻¹ s⁻¹)"
        },
        {
          q: "How high will water rise in a clean glass capillary tube of radius 0.5 mm? (S = 0.073 N m⁻¹, angle of contact 0°, ρ = 1000 kg m⁻³, g = 9.8 m s⁻²)",
          steps: [
            "h = 2S cos θ/(ρgr), with cos 0° = 1",
            "h = (2 × 0.073)/(1000 × 9.8 × 0.5 × 10⁻³)",
            "h = 0.146/4.9 ≈ 0.0298 m"
          ],
          answer: "h ≈ 3.0 cm"
        }
      ],
      qa: [
        {
          q: "State Pascal's law and explain the working of a hydraulic lift.",
          a: "**Pascal's law**: pressure applied to an enclosed fluid is transmitted undiminished to every point of the fluid and the walls. In a **hydraulic lift**, a small force F₁ on a small piston of area A₁ creates pressure F₁/A₁, which acts on a large piston of area A₂ and produces a force **F₂ = F₁(A₂/A₁)**. So a small effort can lift a heavy car."
        },
        {
          q: "State Bernoulli's principle and explain how an aeroplane wing gets lift.",
          a: "**Bernoulli's principle**: for steady, non-viscous, incompressible flow, P + ½ρv² + ρgh is constant along a streamline, so where speed is **higher, pressure is lower**. A wing (aerofoil) is shaped so that air flows **faster over the top** than below. The pressure above becomes less than below, giving an upward **dynamic lift**."
        },
        {
          q: "Why does water rise in a glass capillary while mercury is depressed?",
          a: "Capillary rise h = 2S cos θ/(ρgr). For water on clean glass the **angle of contact is acute** (≈ 0°), so cos θ > 0 and the water **rises**. For mercury on glass θ is **obtuse** (about 140°), so cos θ < 0 and h is negative: mercury is **depressed**."
        }
      ],
      quiz: [
        {
          q: "Water flows through a horizontal pipe whose cross-section narrows from 4 cm² to 1 cm². If the speed in the wider part is 2 m s⁻¹, the speed in the narrower part is:",
          options: ["0.5 m s⁻¹", "4 m s⁻¹", "8 m s⁻¹", "16 m s⁻¹"],
          answer: 2,
          explain: "By continuity A₁v₁ = A₂v₂: v₂ = (4 × 2)/1 = **8 m s⁻¹**."
        },
        {
          q: "The excess pressure inside a soap bubble of radius r and surface tension S is:",
          options: ["4S/r", "2S/r", "S/r", "8S/r"],
          answer: 0,
          explain: "A soap bubble has **two surfaces**, so the excess pressure is 2 × 2S/r = **4S/r**. A drop has one surface (2S/r)."
        },
        {
          q: "If the radius of a small sphere falling through a viscous liquid is doubled, its terminal velocity becomes:",
          options: ["2 times", "4 times", "8 times", "half"],
          answer: 1,
          explain: "vₜ = 2r²(ρ − σ)g/9η, so vₜ ∝ r². Doubling r makes vₜ **4 times**."
        },
        {
          q: "With a rise in temperature, the viscosity of a liquid:",
          options: ["increases", "stays the same", "becomes zero at the boiling point", "decreases"],
          answer: 3,
          explain: "The viscosity of liquids **decreases** with temperature (hot oil flows easily), whereas that of gases increases."
        },
        {
          q: "Water flows out of a small hole 5 m below the water surface in an open tank. The speed of efflux is (g = 10 m s⁻²):",
          options: ["10 m s⁻¹", "5 m s⁻¹", "50 m s⁻¹", "100 m s⁻¹"],
          answer: 0,
          explain: "By Torricelli's law, v = √(2gh) = √(2 × 10 × 5) = √100 = **10 m s⁻¹**."
        },
        {
          q: "A hydraulic lift has pistons of area 10 cm² and 500 cm². A force of 200 N on the small piston can support a load of:",
          options: ["4 N", "10³ N", "10⁴ N", "10⁵ N"],
          answer: 2,
          explain: "F₂ = F₁(A₂/A₁) = 200 × 500/10 = **10⁴ N**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "thermal-properties-of-matter",
      title: "Thermal Properties of Matter",
      section: "Properties of Matter",
      summary: "Covers temperature scales and the ideal gas equation, thermal expansion of solids, liquids and gases, specific heat and calorimetry, change of state and latent heat, and heat transfer by conduction, convection and radiation, with Newton's law of cooling.",
      notes: [
        {
          heading: "Temperature and its Measurement",
          points: [
            "**Temperature** is a measure of hotness; **heat** is energy transferred between bodies because of a temperature difference.",
            "Celsius and Fahrenheit: t(F) = (9/5) t(C) + 32. Ice point = 0 °C = 32 °F; steam point = 100 °C = 212 °F.",
            "Absolute (kelvin) scale: T = t(C) + 273.15. **Absolute zero** is 0 K = −273.15 °C; a change of 1 K equals a change of 1 °C.",
            "**Ideal gas equation**: PV = μRT, where μ is the number of moles and R = 8.31 J mol⁻¹ K⁻¹."
          ]
        },
        {
          heading: "Thermal Expansion",
          points: [
            "**Linear expansion**: ΔL = αLΔT; **area expansion**: ΔA = βAΔT; **volume expansion**: ΔV = γVΔT. For an isotropic solid, β = 2α and γ = 3α.",
            "For an ideal gas at constant pressure, γ = 1/T, so gases expand far more than solids and liquids.",
            "**Anomalous expansion of water**: water contracts on heating from 0 °C to 4 °C and has its **maximum density at 4 °C**.",
            "So lakes freeze from the **top downwards**; the water at the bottom stays near 4 °C and aquatic life survives.",
            "A rod clamped at both ends and heated develops a **thermal stress** = YαΔT; gaps are left in railway tracks and bridges for this reason."
          ]
        },
        {
          heading: "Specific Heat and Calorimetry",
          points: [
            "**Heat capacity** S = ΔQ/ΔT; **specific heat capacity** s = ΔQ/(mΔT), unit J kg⁻¹ K⁻¹; **molar specific heat** C = ΔQ/(μΔT).",
            "Water has a very high specific heat (**4186 J kg⁻¹ K⁻¹**), so it is used as a coolant in car radiators and in hot-water bags, and it moderates coastal climates.",
            "For a gas, Cₚ > Cᵥ: heat at constant pressure also does work in expansion. For an ideal gas Cₚ − Cᵥ = R.",
            "**Principle of calorimetry**: in an isolated system, **heat lost by the hot body = heat gained by the cold body**."
          ]
        },
        {
          heading: "Change of State and Latent Heat",
          points: [
            "During melting or boiling the **temperature stays constant** although heat is supplied; the heat needed is Q = mL, where L is the latent heat.",
            "For water: latent heat of fusion L(f) = 3.33 × 10⁵ J kg⁻¹ and latent heat of vaporisation L(v) = 22.6 × 10⁵ J kg⁻¹.",
            "Steam at 100 °C causes **more severe burns** than water at 100 °C, because it also gives out its large latent heat on condensing.",
            "The melting point of ice **decreases with pressure** (regelation), while the boiling point **increases with pressure**, which is why a pressure cooker cooks faster.",
            "**Sublimation** is the direct change from solid to vapour, e.g. dry ice (solid CO₂), iodine, camphor."
          ]
        },
        {
          heading: "Heat Transfer and Newton's Law of Cooling",
          points: [
            "**Conduction**: rate of heat flow H = KA(T₁ − T₂)/L, where K is thermal conductivity (W m⁻¹ K⁻¹). Metals are good conductors; air, wood and glass wool are poor.",
            "**Convection** is heat transfer by the actual movement of a fluid: natural (sea breeze, land breeze, trade winds) or forced (fans, pumps).",
            "**Radiation** needs no medium and travels at the speed of light. **Stefan–Boltzmann law**: H = eσAT⁴, where e = emissivity (1 for a blackbody).",
            "**Wien's displacement law**: λₘT = 2.9 × 10⁻³ m K; hotter bodies emit their peak radiation at shorter wavelengths.",
            "**Newton's law of cooling**: the rate of cooling is proportional to the temperature difference with the surroundings, −dT/dt = k(T − Tₛ), for small differences."
          ]
        }
      ],
      formulas: [
        "t(F) = (9/5) t(C) + 32; T(K) = t(C) + 273.15",
        "Ideal gas: PV = μRT, R = 8.31 J mol⁻¹ K⁻¹",
        "Linear expansion: ΔL = αLΔT",
        "Area expansion: ΔA = βAΔT, β = 2α",
        "Volume expansion: ΔV = γVΔT, γ = 3α",
        "Ideal gas at constant pressure: γ = 1/T",
        "Thermal stress in a clamped rod: stress = YαΔT",
        "Heat for temperature change: Q = msΔT",
        "Heat for change of state: Q = mL",
        "Calorimetry: heat lost = heat gained",
        "Conduction: H = KA(T₁ − T₂)/L",
        "Stefan–Boltzmann law: H = eσAT⁴, σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴",
        "Net radiation loss to surroundings at Tₛ: H = eσA(T⁴ − Tₛ⁴)",
        "Wien's displacement law: λₘT = 2.9 × 10⁻³ m K",
        "Newton's law of cooling: −dT/dt = k(T − Tₛ)"
      ],
      terms: [
        { term: "Coefficient of linear expansion", meaning: "**Fractional increase in length per kelvin** rise in temperature, α = ΔL/(LΔT)." },
        { term: "Specific heat capacity", meaning: "Heat needed to **raise the temperature of 1 kg of a substance by 1 K**; unit J kg⁻¹ K⁻¹." },
        { term: "Latent heat", meaning: "Heat per unit mass needed to **change the state** of a substance **without changing its temperature**." },
        { term: "Thermal conductivity", meaning: "K in H = KA(T₁ − T₂)/L: measures **how easily a material conducts heat**." },
        { term: "Anomalous expansion of water", meaning: "Water **contracts on heating from 0 °C to 4 °C**, so it is densest at 4 °C." },
        { term: "Blackbody", meaning: "An ideal body that **absorbs all radiation** falling on it and is also the best emitter (e = 1)." }
      ],
      examples: [
        {
          q: "A brass wire 1.8 m long at 27 °C is held taut with negligible tension between two rigid supports. If it is cooled to −39 °C, find the tension developed. (Diameter = 2.0 mm, α = 2.0 × 10⁻⁵ K⁻¹, Y = 0.91 × 10¹¹ Pa)",
          steps: [
            "ΔT = 27 − (−39) = 66 K",
            "The wire cannot contract, so thermal stress = YαΔT = 0.91 × 10¹¹ × 2.0 × 10⁻⁵ × 66 ≈ 1.20 × 10⁸ Pa",
            "Area A = πr² = 3.14 × (1.0 × 10⁻³)² = 3.14 × 10⁻⁶ m²",
            "Tension = stress × A = 1.20 × 10⁸ × 3.14 × 10⁻⁶ ≈ 377 N"
          ],
          answer: "Tension ≈ 3.8 × 10² N (the length of the wire does not matter)"
        },
        {
          q: "When 0.15 kg of ice at 0 °C is mixed with 0.30 kg of water at 50 °C, the final temperature is 6.7 °C. Find the latent heat of fusion of ice. (s(water) = 4186 J kg⁻¹ K⁻¹)",
          steps: [
            "Heat lost by warm water = 0.30 × 4186 × (50 − 6.7) ≈ 54 376 J",
            "Heat gained by ice = 0.15 L (melting) + 0.15 × 4186 × 6.7 (warming from 0 °C to 6.7 °C)",
            "0.15 × 4186 × 6.7 ≈ 4207 J",
            "0.15 L = 54 376 − 4207 = 50 169 J, so L = 50 169/0.15 ≈ 3.34 × 10⁵ J kg⁻¹"
          ],
          answer: "Latent heat of fusion ≈ 3.34 × 10⁵ J kg⁻¹"
        }
      ],
      qa: [
        {
          q: "Explain the anomalous expansion of water. How does it help aquatic life?",
          a: "Most liquids expand on heating, but water **contracts when heated from 0 °C to 4 °C**, so it is **densest at 4 °C**. In winter, as the surface water cools below 4 °C it becomes lighter and stays on top, and finally freezes. Ice is a poor conductor, and the water below remains at about 4 °C, so **lakes freeze from the top** and fish and plants survive."
        },
        {
          q: "Why does food cook faster in a pressure cooker, and why is cooking difficult on high mountains?",
          a: "The **boiling point of water rises with pressure**. In a pressure cooker the steam pressure is high, so water boils at a temperature above 100 °C and food cooks faster. On high mountains the atmospheric pressure is low, so water **boils below 100 °C** and food takes longer to cook."
        },
        {
          q: "State Newton's law of cooling. When is it valid?",
          a: "**Newton's law of cooling**: the rate of loss of heat of a body is **directly proportional to the difference in temperature** between the body and its surroundings: −dT/dt = k(T − Tₛ). It holds only when the **temperature difference is small**; for large differences the Stefan–Boltzmann law must be used."
        }
      ],
      quiz: [
        {
          q: "The temperature at which the Celsius and Fahrenheit scales show the same reading is:",
          options: ["40°", "−40°", "−32°", "0°"],
          answer: 1,
          explain: "Put t(F) = t(C) = x in t(F) = (9/5)t(C) + 32: x = 1.8x + 32 gives x = **−40**."
        },
        {
          q: "For an isotropic solid, the coefficients of volume expansion γ and linear expansion α are related by:",
          options: ["γ = 3α", "γ = 2α", "γ = α/3", "γ = α³"],
          answer: 0,
          explain: "V = L³ gives ΔV/V = 3ΔL/L, so **γ = 3α** (and area expansion β = 2α)."
        },
        {
          q: "Water has its maximum density at:",
          options: ["0 °C", "−4 °C", "4 °C", "100 °C"],
          answer: 2,
          explain: "Because of its anomalous expansion, water is **densest at 4 °C**."
        },
        {
          q: "The heat needed to melt 2 kg of ice at 0 °C is (latent heat of fusion = 3.33 × 10⁵ J kg⁻¹):",
          options: ["1.67 × 10⁵ J", "3.33 × 10⁵ J", "6.66 × 10⁶ J", "6.66 × 10⁵ J"],
          answer: 3,
          explain: "Q = mL = 2 × 3.33 × 10⁵ = **6.66 × 10⁵ J**; the temperature stays at 0 °C while melting."
        },
        {
          q: "If the absolute temperature of a blackbody is doubled, the power it radiates becomes:",
          options: ["4 times", "16 times", "8 times", "2 times"],
          answer: 1,
          explain: "By the Stefan–Boltzmann law, H ∝ T⁴, so doubling T gives 2⁴ = **16 times**."
        },
        {
          q: "The sun's radiation peaks at a wavelength of about 480 nm. Using Wien's law (b = 2.9 × 10⁻³ m K), its surface temperature is about:",
          options: ["6000 K", "600 K", "60 000 K", "1500 K"],
          answer: 0,
          explain: "T = b/λₘ = 2.9 × 10⁻³/(480 × 10⁻⁹) ≈ 6.0 × 10³ K, i.e. about **6000 K**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "thermodynamics",
      title: "Thermodynamics",
      section: "Heat and Thermodynamics",
      summary: "Deals with heat, work and internal energy: the zeroth and first laws, specific heats of gases, thermodynamic processes (isothermal, adiabatic, isochoric, isobaric and cyclic), the second law, reversible and irreversible processes, and the Carnot engine.",
      notes: [
        {
          heading: "Zeroth Law, Heat and Internal Energy",
          points: [
            "**Zeroth law**: if systems A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. It defines **temperature**.",
            "**Internal energy** U is the sum of the kinetic and potential energies of the molecules (relative to the CM of the system). It is a **state variable**: it depends only on the state, not on how it was reached.",
            "**Heat** and **work** are two modes of energy transfer; they are **not state variables** and depend on the path.",
            "For an ideal gas, internal energy depends **only on temperature**."
          ]
        },
        {
          heading: "First Law of Thermodynamics",
          points: [
            "**First law**: ΔQ = ΔU + ΔW. Heat supplied to a system = increase in its internal energy + work done by the system. It is the **law of conservation of energy**.",
            "Sign convention: ΔQ is positive when heat is **supplied to** the system; ΔW is positive when work is done **by** the system.",
            "Work done by a gas: ΔW = PΔV; for any process, work = **area under the P–V curve**.",
            "For an ideal gas, molar specific heats satisfy **Cₚ − Cᵥ = R** (Mayer's relation), and γ = Cₚ/Cᵥ.",
            "**State variables** like P, V, T, U are linked by an equation of state, e.g. PV = μRT for an ideal gas."
          ]
        },
        {
          heading: "Thermodynamic Processes",
          points: [
            "A **quasi-static** process is infinitely slow, so the system stays in equilibrium with its surroundings at every stage.",
            "**Isothermal** (T constant): PV = constant, ΔU = 0, so ΔQ = ΔW = μRT ln(V₂/V₁).",
            "**Adiabatic** (no heat exchange, ΔQ = 0): PV^γ = constant; ΔW = −ΔU, so a gas **cools on adiabatic expansion** and heats up on compression.",
            "**Isochoric** (V constant): ΔW = 0, so all the heat changes internal energy. **Isobaric** (P constant): ΔW = PΔV = μRΔT.",
            "**Cyclic** process: the system returns to its initial state, so ΔU = 0 and **net heat absorbed = net work done** (area enclosed by the P–V loop).",
            "On a P–V diagram an adiabatic curve is **steeper** than an isothermal curve through the same point (by a factor γ)."
          ]
        },
        {
          heading: "Second Law and the Carnot Engine",
          points: [
            "A **heat engine** takes heat Q₁ from a hot reservoir, does work W and rejects Q₂ to a cold reservoir; efficiency η = W/Q₁ = 1 − Q₂/Q₁.",
            "**Kelvin–Planck statement**: no process is possible whose sole result is the absorption of heat from a reservoir and its complete conversion into work. So **no engine is 100% efficient**.",
            "**Clausius statement**: no process is possible whose sole result is the transfer of heat from a colder object to a hotter object.",
            "A **reversible** process can be retraced so that both system and surroundings return to their original states; it must be quasi-static with no dissipative effects (friction, viscosity). All natural processes are **irreversible**.",
            "**Carnot engine**: a reversible engine working between T₁ and T₂ through two isothermal and two adiabatic steps; η = 1 − T₂/T₁. No engine between the same temperatures can be more efficient (**Carnot's theorem**), and η does not depend on the working substance."
          ]
        }
      ],
      formulas: [
        "First law: ΔQ = ΔU + ΔW",
        "Work done by a gas: W = ∫P dV (area under P–V curve); at constant pressure W = PΔV",
        "Mayer's relation: Cₚ − Cᵥ = R; γ = Cₚ/Cᵥ",
        "Isothermal: PV = constant; W = μRT ln(V₂/V₁) = 2.303 μRT log₁₀(V₂/V₁)",
        "Adiabatic: PV^γ = constant; TV^(γ−1) = constant",
        "Adiabatic work: W = μR(T₁ − T₂)/(γ − 1) = (P₁V₁ − P₂V₂)/(γ − 1)",
        "Isochoric: W = 0, ΔQ = ΔU = μCᵥΔT",
        "Isobaric: ΔQ = μCₚΔT, W = μRΔT",
        "Cyclic process: ΔU = 0, so ΔQ = ΔW",
        "Heat engine efficiency: η = W/Q₁ = 1 − Q₂/Q₁",
        "Carnot engine: η = 1 − T₂/T₁ (temperatures in kelvin); Q₂/Q₁ = T₂/T₁"
      ],
      terms: [
        { term: "Zeroth law of thermodynamics", meaning: "Two systems each in thermal equilibrium with a third are **in thermal equilibrium with each other**; the basis of temperature." },
        { term: "Internal energy", meaning: "Total **molecular kinetic + potential energy** of a system; a state variable." },
        { term: "Isothermal process", meaning: "A process at **constant temperature**; for an ideal gas ΔU = 0 and PV = constant." },
        { term: "Adiabatic process", meaning: "A process with **no heat exchange** with the surroundings; PV^γ = constant." },
        { term: "Reversible process", meaning: "A quasi-static process with no dissipation that can be **retraced so system and surroundings both return** to their original states." },
        { term: "Carnot engine", meaning: "An ideal **reversible engine** between two temperatures with efficiency 1 − T₂/T₁, the maximum possible." }
      ],
      examples: [
        {
          q: "Two moles of an ideal gas expand isothermally and reversibly at 300 K from 10 L to 20 L. Find the work done by the gas and the heat absorbed. (R = 8.31 J mol⁻¹ K⁻¹, ln 2 = 0.693)",
          steps: [
            "W = μRT ln(V₂/V₁) = 2 × 8.31 × 300 × ln 2",
            "= 4986 × 0.693 ≈ 3456 J",
            "Isothermal, so ΔU = 0 and ΔQ = ΔW"
          ],
          answer: "Work done ≈ 3.46 × 10³ J; heat absorbed ≈ 3.46 × 10³ J"
        },
        {
          q: "A Carnot engine works between 500 K and 300 K and absorbs 1000 J of heat per cycle from the source. Find its efficiency, the work done per cycle and the heat rejected.",
          steps: [
            "η = 1 − T₂/T₁ = 1 − 300/500 = 0.4",
            "W = ηQ₁ = 0.4 × 1000 = 400 J",
            "Q₂ = Q₁ − W = 1000 − 400 = 600 J (check: Q₂/Q₁ = 0.6 = T₂/T₁)"
          ],
          answer: "η = 40%, W = 400 J, heat rejected = 600 J"
        }
      ],
      qa: [
        {
          q: "State the first law of thermodynamics and apply it to isothermal and adiabatic processes of an ideal gas.",
          a: "**First law**: ΔQ = ΔU + ΔW. **Isothermal**: T is constant, so ΔU = 0 and **ΔQ = ΔW**: all the heat absorbed is converted into work. **Adiabatic**: ΔQ = 0, so **ΔW = −ΔU**: work done by the gas comes from its internal energy, so it cools on expansion and warms on compression."
        },
        {
          q: "Why is Cₚ greater than Cᵥ for a gas? Show that Cₚ − Cᵥ = R for an ideal gas.",
          a: "At constant volume, all the heat supplied raises internal energy. At constant pressure, part of the heat is also used for **work of expansion**, so more heat is needed for the same rise in temperature: **Cₚ > Cᵥ**. For 1 mole: ΔQ = ΔU + PΔV. At constant volume Cᵥ = ΔU/ΔT. At constant pressure Cₚ = ΔU/ΔT + P(ΔV/ΔT) = Cᵥ + R, since PV = RT gives PΔV = RΔT. Hence **Cₚ − Cᵥ = R**."
        },
        {
          q: "State the Kelvin–Planck and Clausius statements of the second law of thermodynamics.",
          a: "**Kelvin–Planck**: no process is possible whose sole result is the absorption of heat from a reservoir and the **complete conversion of that heat into work**. **Clausius**: no process is possible whose sole result is the **transfer of heat from a colder object to a hotter object**. Both say that no heat engine can be 100% efficient and no refrigerator can work without external work."
        }
      ],
      quiz: [
        {
          q: "In the isothermal expansion of an ideal gas:",
          options: ["no heat is exchanged with the surroundings", "the work done by the gas is zero", "the internal energy stays constant and the heat absorbed equals the work done", "the temperature of the gas falls"],
          answer: 2,
          explain: "For an ideal gas U depends only on T, so ΔU = 0 and **ΔQ = ΔW**."
        },
        {
          q: "In a cyclic process, the change in internal energy of the system is:",
          options: ["zero", "equal to the work done", "equal to the heat absorbed", "always negative"],
          answer: 0,
          explain: "Internal energy is a state variable and the system returns to its initial state, so **ΔU = 0**."
        },
        {
          q: "A Carnot engine works between 127 °C and 27 °C. Its efficiency is:",
          options: ["78.7%", "75%", "33.3%", "25%"],
          answer: 3,
          explain: "Use kelvin: T₁ = 400 K, T₂ = 300 K. η = 1 − 300/400 = **25%**. (Using °C wrongly gives 78.7%.)"
        },
        {
          q: "When a gas is compressed adiabatically, its temperature:",
          options: ["falls", "rises", "stays constant", "first falls and then rises"],
          answer: 1,
          explain: "ΔQ = 0, so the work done on the gas increases its internal energy: the temperature **rises** (e.g. a bicycle pump warms up)."
        },
        {
          q: "A system absorbs 600 J of heat and does 250 J of work on its surroundings. The change in its internal energy is:",
          options: ["850 J", "−350 J", "350 J", "250 J"],
          answer: 2,
          explain: "ΔU = ΔQ − ΔW = 600 − 250 = **350 J** (an increase)."
        },
        {
          q: "Two moles of an ideal gas are heated at constant pressure through 50 K. The work done by the gas is (R = 8.3 J mol⁻¹ K⁻¹):",
          options: ["415 J", "830 J", "1660 J", "83 J"],
          answer: 1,
          explain: "At constant pressure, W = PΔV = μRΔT = 2 × 8.3 × 50 = **830 J**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "kinetic-theory",
      title: "Kinetic Theory",
      section: "Heat and Thermodynamics",
      summary: "Explains the behaviour of gases in terms of moving molecules: the gas laws, assumptions of kinetic theory, pressure of an ideal gas, kinetic interpretation of temperature and rms speed, the law of equipartition of energy, specific heats and mean free path.",
      notes: [
        {
          heading: "Behaviour of Gases",
          points: [
            "Real gases at low pressure and high temperature approximately obey **PV = μRT = N kB T**; an **ideal gas** obeys it exactly at all pressures and temperatures.",
            "**Boyle's law**: P ∝ 1/V at constant T. **Charles' law**: V ∝ T at constant P.",
            "**Avogadro's hypothesis**: equal volumes of all gases at the same temperature and pressure contain the same number of molecules. One mole contains 6.02 × 10²³ molecules and occupies 22.4 L at STP.",
            "**Dalton's law of partial pressures**: the total pressure of a mixture of ideal gases is the sum of their partial pressures.",
            "Real gases deviate from ideal behaviour most at **high pressure and low temperature**."
          ]
        },
        {
          heading: "Kinetic Theory of an Ideal Gas",
          points: [
            "Assumptions: a gas has a very large number of molecules in **random motion**; their size is negligible compared with the spacing between them; they exert no forces except during collisions.",
            "Collisions with each other and with the walls are **perfectly elastic** and take negligible time.",
            "Pressure is due to the momentum transferred by molecules hitting the walls: **P = ⅓ n m ⟨v²⟩**, where n is the number of molecules per unit volume and ⟨v²⟩ the mean square speed.",
            "Equivalently P = ⅓ ρ⟨v²⟩, and **PV = ⅔E**, where E is the total translational kinetic energy of the molecules."
          ]
        },
        {
          heading: "Kinetic Interpretation of Temperature",
          points: [
            "Average translational KE of a molecule = ½m⟨v²⟩ = **(3/2) kB T**; it depends **only on the absolute temperature**, not on the nature of the gas.",
            "**Root mean square speed**: v(rms) = √⟨v²⟩ = √(3kBT/m) = √(3RT/M), where M is the molar mass.",
            "At the same temperature, lighter molecules move faster: v(rms) ∝ 1/√M, so hydrogen molecules move 4 times faster than oxygen molecules.",
            "Boltzmann constant kB = R/N(A) = 1.38 × 10⁻²³ J K⁻¹."
          ]
        },
        {
          heading: "Equipartition of Energy and Specific Heats",
          points: [
            "**Degrees of freedom** are the independent ways in which a molecule can have energy. A monatomic molecule has 3 (translational); a rigid diatomic molecule has 5 (3 translational + 2 rotational).",
            "**Law of equipartition**: in thermal equilibrium, each translational and rotational degree of freedom has average energy **½ kB T**; each vibrational mode has kB T (kinetic + potential).",
            "Monatomic gas: U = (3/2)RT per mole, Cᵥ = (3/2)R, Cₚ = (5/2)R, **γ = 5/3**.",
            "Rigid diatomic gas: Cᵥ = (5/2)R, Cₚ = (7/2)R, **γ = 7/5**; if it also vibrates, Cᵥ = (7/2)R and γ = 9/7.",
            "Solids: each atom oscillates in 3 directions, so U = 3RT per mole and **C = 3R** (Dulong and Petit)."
          ]
        },
        {
          heading: "Mean Free Path",
          points: [
            "**Mean free path** l is the average distance a molecule travels between two successive collisions: l = 1/(√2 n π d²), where d is the molecular diameter.",
            "l is smaller for **denser gases** (larger n) and **larger molecules** (larger d).",
            "Molecules move at hundreds of metres per second, yet a smell spreads slowly across a room because frequent collisions keep **changing their direction**."
          ]
        }
      ],
      formulas: [
        "Ideal gas: PV = μRT = N kB T",
        "R = 8.31 J mol⁻¹ K⁻¹; kB = 1.38 × 10⁻²³ J K⁻¹; Avogadro number = 6.02 × 10²³ mol⁻¹",
        "Pressure of an ideal gas: P = ⅓ n m ⟨v²⟩ = ⅓ ρ ⟨v²⟩",
        "PV = ⅔E (E = total translational KE)",
        "Average translational KE per molecule: ½ m⟨v²⟩ = (3/2) kB T",
        "Translational KE per mole: (3/2) RT",
        "rms speed: v(rms) = √(3kBT/m) = √(3RT/M) = √(3P/ρ)",
        "Energy per degree of freedom: ½ kB T per molecule",
        "Monatomic gas: Cᵥ = 3R/2, Cₚ = 5R/2, γ = 5/3",
        "Rigid diatomic gas: Cᵥ = 5R/2, Cₚ = 7R/2, γ = 7/5",
        "Solids: C = 3R",
        "Mean free path: l = 1/(√2 n π d²)",
        "Dalton's law: P = P₁ + P₂ + P₃ + …"
      ],
      terms: [
        { term: "Ideal gas", meaning: "A gas that **obeys PV = μRT exactly** at all pressures and temperatures; its molecules have no size and no mutual forces." },
        { term: "rms speed", meaning: "**Square root of the mean of the squares** of molecular speeds, √(3RT/M)." },
        { term: "Degrees of freedom", meaning: "The number of **independent ways a molecule can move or store energy** (translation, rotation, vibration)." },
        { term: "Law of equipartition of energy", meaning: "In equilibrium, energy is shared equally: **½ kB T per translational or rotational degree** of freedom." },
        { term: "Mean free path", meaning: "**Average distance travelled by a molecule between successive collisions**." },
        { term: "Boltzmann constant", meaning: "**kB = R/N(A) = 1.38 × 10⁻²³ J K⁻¹**, the gas constant per molecule." }
      ],
      examples: [
        {
          q: "Find the rms speed of oxygen molecules at 27 °C. (M = 32 g mol⁻¹, R = 8.31 J mol⁻¹ K⁻¹)",
          steps: [
            "T = 27 + 273 = 300 K; M = 0.032 kg mol⁻¹",
            "v(rms) = √(3RT/M) = √(3 × 8.31 × 300/0.032)",
            "= √(7479/0.032) = √233 719",
            "≈ 483 m s⁻¹"
          ],
          answer: "v(rms) ≈ 483 m s⁻¹"
        },
        {
          q: "At what temperature is the rms speed of an argon atom equal to that of a helium atom at −20 °C? (Atomic mass: Ar = 39.9 u, He = 4.0 u)",
          steps: [
            "v(rms) = √(3RT/M), so equal speeds need T(Ar)/M(Ar) = T(He)/M(He)",
            "T(He) = −20 + 273 = 253 K",
            "T(Ar) = 253 × 39.9/4.0 ≈ 2524 K"
          ],
          answer: "T ≈ 2.52 × 10³ K"
        }
      ],
      qa: [
        {
          q: "State the main assumptions of the kinetic theory of gases.",
          a: "(1) A gas consists of a very large number of identical molecules in **constant random motion**. (2) The **size of molecules is negligible** compared with the distances between them. (3) Molecules exert **no forces** on each other except during collisions. (4) Collisions are **perfectly elastic** and of negligible duration. (5) Between collisions molecules move in straight lines with constant velocity."
        },
        {
          q: "Show that the average kinetic energy of a gas molecule is proportional to its absolute temperature.",
          a: "From kinetic theory, PV = ⅓ N m ⟨v²⟩. From the ideal gas equation, PV = N kB T. Equating: ⅓ m⟨v²⟩ = kB T, so **½ m⟨v²⟩ = (3/2) kB T**. Hence the average translational KE of a molecule is **directly proportional to the absolute temperature** and is independent of the nature of the gas."
        },
        {
          q: "State the law of equipartition of energy and use it to find γ for a monatomic gas.",
          a: "**Law**: in thermal equilibrium, the total energy is equally distributed among all degrees of freedom, each translational and rotational degree getting **½ kB T** per molecule. A monatomic molecule has 3 translational degrees, so U = 3 × ½ kB T × N(A) = (3/2)RT per mole. Then Cᵥ = dU/dT = (3/2)R, Cₚ = Cᵥ + R = (5/2)R, and **γ = Cₚ/Cᵥ = 5/3**."
        }
      ],
      quiz: [
        {
          q: "The rms speed of the molecules of a gas is v at absolute temperature T. If T is made 4 times, the rms speed becomes:",
          options: ["2v", "4v", "v/2", "16v"],
          answer: 0,
          explain: "v(rms) ∝ √T, so 4 times T gives √4 = **2 times** the speed."
        },
        {
          q: "The ratio of the rms speeds of hydrogen (M = 2) and oxygen (M = 32) molecules at the same temperature is:",
          options: ["1 : 4", "16 : 1", "4 : 1", "1 : 16"],
          answer: 2,
          explain: "v(rms) ∝ 1/√M, so v(H₂)/v(O₂) = √(32/2) = √16 = **4 : 1**."
        },
        {
          q: "The ratio γ = Cₚ/Cᵥ for a rigid diatomic gas is:",
          options: ["5/3", "7/5", "9/7", "4/3"],
          answer: 1,
          explain: "5 degrees of freedom: Cᵥ = 5R/2, Cₚ = 7R/2, so **γ = 7/5 = 1.4**."
        },
        {
          q: "The average translational kinetic energy of a gas molecule at absolute temperature T is:",
          options: ["(1/2) kB T", "(5/2) kB T", "3 kB T", "(3/2) kB T"],
          answer: 3,
          explain: "Three translational degrees of freedom, each with ½ kB T, give **(3/2) kB T**."
        },
        {
          q: "If the number of gas molecules per unit volume is doubled (same gas), the mean free path:",
          options: ["is doubled", "is unchanged", "is halved", "becomes four times"],
          answer: 2,
          explain: "l = 1/(√2 n π d²), so l ∝ 1/n: doubling n **halves** the mean free path."
        },
        {
          q: "The total translational kinetic energy of 1 mole of an ideal gas at 300 K is (R = 8.31 J mol⁻¹ K⁻¹):",
          options: ["2.49 kJ", "3.74 kJ", "6.23 kJ", "1.25 kJ"],
          answer: 1,
          explain: "E = (3/2)RT = 1.5 × 8.31 × 300 ≈ 3739 J ≈ **3.74 kJ**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "oscillations",
      title: "Oscillations",
      section: "Oscillations and Waves",
      summary: "Studies periodic and oscillatory motion, especially simple harmonic motion (SHM): its displacement, velocity and acceleration, its link with uniform circular motion, the force law, energy in SHM, and the spring–mass system and simple pendulum.",
      notes: [
        {
          heading: "Periodic and Oscillatory Motion",
          points: [
            "**Periodic motion** repeats itself at regular intervals of time. **Oscillatory motion** is periodic to-and-fro motion about a mean (equilibrium) position.",
            "Every oscillatory motion is periodic, but not every periodic motion is oscillatory; e.g. uniform circular motion is periodic but not oscillatory.",
            "**Period** T is the time for one complete oscillation (s); **frequency** ν = 1/T (hertz, Hz); **angular frequency** ω = 2π/T = 2πν (rad s⁻¹).",
            "Any periodic motion can be expressed as a combination of sine and cosine functions of different periods."
          ]
        },
        {
          heading: "Simple Harmonic Motion",
          points: [
            "In **SHM**, displacement x(t) = A cos(ωt + φ): A is the **amplitude**, (ωt + φ) the **phase** and φ the **phase constant**.",
            "SHM is the **projection of uniform circular motion** on a diameter of the circle.",
            "Velocity v = −ωA sin(ωt + φ) = ±ω√(A² − x²): **maximum (ωA) at the mean position** and zero at the extremes.",
            "Acceleration **a = −ω²x**: proportional to displacement and directed towards the mean position; maximum (ω²A) at the extremes and zero at the mean position.",
            "Velocity leads displacement in phase by π/2, and acceleration is **π out of phase** with displacement."
          ]
        },
        {
          heading: "Force Law and Energy in SHM",
          points: [
            "**Force law**: F = −kx, where k = mω² is the force constant; hence **ω = √(k/m)**.",
            "Kinetic energy K = ½k(A² − x²); potential energy U = ½kx².",
            "Total energy **E = ½kA² = ½mω²A²** stays constant and is proportional to the square of the amplitude.",
            "KE is maximum at the mean position and PE is maximum at the extremes; **KE = PE at x = A/√2**.",
            "KE and PE each vary periodically with **twice the frequency** of the oscillation (period T/2)."
          ]
        },
        {
          heading: "Spring–Mass System and Simple Pendulum",
          points: [
            "A mass m on a spring of constant k: **T = 2π√(m/k)**, independent of the amplitude and of g.",
            "**Simple pendulum** (small angles, sin θ ≈ θ): **T = 2π√(L/g)**, independent of the mass of the bob.",
            "A **seconds pendulum** has a period of 2 s; its length on earth is L = gT²/4π² ≈ 0.99 m, about 1 m.",
            "A pendulum clock taken up a mountain **runs slow**, because g decreases and T increases.",
            "Springs in series: 1/k = 1/k₁ + 1/k₂ (softer); in parallel: k = k₁ + k₂ (stiffer)."
          ]
        }
      ],
      formulas: [
        "T = 1/ν; ω = 2π/T = 2πν",
        "Displacement: x = A cos(ωt + φ)",
        "Velocity: v = −ωA sin(ωt + φ) = ±ω√(A² − x²); maximum speed = ωA",
        "Acceleration: a = −ω²x; maximum acceleration = ω²A",
        "Force law: F = −kx, with k = mω²",
        "Spring–mass system: T = 2π√(m/k)",
        "Simple pendulum: T = 2π√(L/g)",
        "Kinetic energy: K = ½k(A² − x²) = ½mω²(A² − x²)",
        "Potential energy: U = ½kx²",
        "Total energy: E = ½kA² = ½mω²A²",
        "Springs in series: 1/k = 1/k₁ + 1/k₂; in parallel: k = k₁ + k₂"
      ],
      terms: [
        { term: "Periodic motion", meaning: "Motion that **repeats itself after equal intervals of time**." },
        { term: "Simple harmonic motion", meaning: "Oscillation in which the **restoring force (or acceleration) is proportional to displacement** and directed towards the mean position: a = −ω²x." },
        { term: "Amplitude", meaning: "The **maximum displacement** from the mean position." },
        { term: "Phase", meaning: "The quantity **(ωt + φ)** that tells the position and direction of motion of the particle at time t." },
        { term: "Angular frequency", meaning: "**ω = 2πν = 2π/T**; for SHM ω = √(k/m)." },
        { term: "Seconds pendulum", meaning: "A simple pendulum with a **period of exactly 2 s**; length about 1 m on earth." }
      ],
      examples: [
        {
          q: "A body moves in SHM according to x = 6.0 cos(3πt + π/3) m. Find its displacement, velocity and acceleration at t = 2.0 s.",
          steps: [
            "Phase at t = 2 s: 3π × 2 + π/3 = 6π + π/3, which is equivalent to π/3",
            "x = 6.0 cos(π/3) = 6.0 × 0.5 = 3.0 m",
            "v = −ωA sin(π/3) = −3π × 6.0 × 0.866 ≈ −49 m s⁻¹",
            "a = −ω²x = −(3π)² × 3.0 = −27π² ≈ −266 m s⁻²"
          ],
          answer: "x = 3.0 m, v ≈ −49 m s⁻¹, a ≈ −2.66 × 10² m s⁻²"
        },
        {
          q: "A 3 kg mass attached to a spring of spring constant 1200 N m⁻¹ on a frictionless surface is pulled 2.0 cm and released. Find the frequency, the maximum acceleration and the maximum speed.",
          steps: [
            "ω = √(k/m) = √(1200/3) = √400 = 20 rad s⁻¹",
            "ν = ω/2π = 20/(2 × 3.14) ≈ 3.2 Hz",
            "Maximum acceleration = ω²A = 400 × 0.02 = 8.0 m s⁻²",
            "Maximum speed = ωA = 20 × 0.02 = 0.40 m s⁻¹"
          ],
          answer: "ν ≈ 3.2 Hz, maximum acceleration = 8.0 m s⁻², maximum speed = 0.40 m s⁻¹"
        }
      ],
      qa: [
        {
          q: "Show that SHM is the projection of uniform circular motion on a diameter of the circle.",
          a: "Let a particle P move on a circle of radius A with constant angular speed ω, starting at angle φ. At time t, the radius OP makes an angle (ωt + φ) with the x-axis. Its projection on the x-axis is **x = A cos(ωt + φ)**, which is the equation of SHM. So the foot of the perpendicular from P on a diameter executes **SHM with amplitude A and angular frequency ω**."
        },
        {
          q: "Derive an expression for the total energy of a particle in SHM and show that it is constant.",
          a: "With x = A cos(ωt + φ) and k = mω²: U = ½kx² = ½kA² cos²(ωt + φ). Velocity v = −ωA sin(ωt + φ), so K = ½mv² = ½mω²A² sin²(ωt + φ) = ½kA² sin²(ωt + φ). Adding, **E = ½kA²(sin² + cos²) = ½kA²**, which does not depend on time: the total energy is **constant**."
        },
        {
          q: "Derive the expression for the time period of a simple pendulum.",
          a: "For a bob of mass m on a string of length L displaced by angle θ, the restoring torque is τ = −mgL sin θ. The moment of inertia about the support is I = mL². For **small θ, sin θ ≈ θ**, so α = τ/I = −(g/L)θ. This is SHM (α ∝ −θ) with ω² = g/L. Hence **T = 2π√(L/g)**, independent of the mass of the bob."
        }
      ],
      quiz: [
        {
          q: "In SHM, the acceleration of the particle is maximum at:",
          options: ["the mean position", "the extreme positions", "x = A/2", "x = A/√2"],
          answer: 1,
          explain: "a = −ω²x, so |a| is largest where |x| is largest: at the **extreme positions** (x = ±A)."
        },
        {
          q: "A simple pendulum has a period of 2 s. If its length is made 4 times, its new period is:",
          options: ["8 s", "1 s", "4 s", "2√2 s"],
          answer: 2,
          explain: "T ∝ √L, so 4 times the length gives √4 = 2 times the period: **4 s**."
        },
        {
          q: "The total energy of a particle executing SHM is proportional to:",
          options: ["the amplitude", "the displacement", "the square root of the amplitude", "the square of the amplitude"],
          answer: 3,
          explain: "E = ½kA² = ½mω²A², so E ∝ **A²**; it does not depend on the instantaneous displacement."
        },
        {
          q: "A particle in SHM has an amplitude of 4 cm. Its kinetic and potential energies are equal when its displacement is:",
          options: ["2√2 cm", "2 cm", "4 cm", "1 cm"],
          answer: 0,
          explain: "½k(A² − x²) = ½kx² gives x = A/√2 = 4/√2 = **2√2 cm** ≈ 2.83 cm."
        },
        {
          q: "A 1 kg mass attached to a spring of spring constant 100 N m⁻¹ oscillates. Its time period is:",
          options: ["2π s", "0.2π s", "0.1π s", "20π s"],
          answer: 1,
          explain: "T = 2π√(m/k) = 2π√(1/100) = 2π × 0.1 = **0.2π s** ≈ 0.63 s."
        },
        {
          q: "The phase difference between the displacement and the acceleration of a particle in SHM is:",
          options: ["zero", "π/2", "π", "π/4"],
          answer: 2,
          explain: "a = −ω²x: the acceleration is always opposite to the displacement, a phase difference of **π**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "waves",
      title: "Waves",
      section: "Oscillations and Waves",
      summary: "Describes mechanical waves: transverse and longitudinal waves, the equation of a travelling wave, wave speed on a string and in a fluid (Newton's formula and Laplace's correction), superposition, reflection, standing waves in strings and pipes, and beats.",
      notes: [
        {
          heading: "Transverse and Longitudinal Waves",
          points: [
            "A **wave** carries energy and a pattern of disturbance from one place to another, **without transporting matter**; particles of the medium only oscillate about their mean positions.",
            "**Transverse waves**: particles oscillate **perpendicular** to the direction of propagation (waves on a string). They need a medium that resists shearing, so they travel in solids and strings but not inside fluids.",
            "**Longitudinal waves**: particles oscillate **along** the direction of propagation, forming **compressions and rarefactions** (sound in air). They travel in solids, liquids and gases.",
            "**Mechanical waves** need a material medium; electromagnetic waves do not."
          ]
        },
        {
          heading: "Equation of a Travelling Wave",
          points: [
            "y(x, t) = a sin(kx − ωt + φ) is a wave moving in the **+x direction**; a wave with (kx + ωt) moves in the **−x direction**.",
            "**Wavelength** λ is the minimum distance between two points in the same phase (crest to crest); **angular wave number** k = 2π/λ.",
            "Angular frequency ω = 2π/T = 2πν, where T is the period and ν the frequency.",
            "**Wave speed** v = λ/T = νλ = ω/k."
          ]
        },
        {
          heading: "Speed of Waves",
          points: [
            "Transverse wave on a stretched string: **v = √(T/μ)**, where T is the tension and μ the mass per unit length. It depends only on the string, not on frequency.",
            "Longitudinal waves: v = √(B/ρ) in a fluid and v = √(Y/ρ) in a thin solid rod.",
            "**Newton** assumed the compressions in sound are isothermal: v = √(P/ρ) ≈ 280 m s⁻¹ for air at STP, about 15% less than the measured value.",
            "**Laplace's correction**: the changes are **adiabatic** (too fast for heat exchange), so v = √(γP/ρ) ≈ 331 m s⁻¹ for air at STP (γ = 1.4).",
            "The speed of sound in a gas does not depend on pressure at constant temperature, but **increases with temperature** (v ∝ √T) and with humidity."
          ]
        },
        {
          heading: "Superposition, Reflection and Standing Waves",
          points: [
            "**Principle of superposition**: when waves overlap, the resultant displacement at any point is the **algebraic sum** of the individual displacements.",
            "At a **rigid boundary** a wave is reflected with a **phase change of π** (a crest returns as a trough); at an **open boundary** it is reflected with no phase change.",
            "Two identical waves travelling in opposite directions form a **standing wave**: y = 2a sin kx cos ωt. The pattern does not move.",
            "Points of zero amplitude are **nodes** and of maximum amplitude are **antinodes**; adjacent nodes are **λ/2 apart** and a node and the next antinode are λ/4 apart."
          ]
        },
        {
          heading: "Normal Modes and Beats",
          points: [
            "**String fixed at both ends**: λ = 2L/n and ν = nv/2L (n = 1, 2, 3 …). The lowest frequency (n = 1) is the **fundamental mode or first harmonic**.",
            "**Pipe closed at one end**: ν = nv/4L with n = 1, 3, 5 …, so **only odd harmonics** are present.",
            "**Pipe open at both ends**: ν = nv/2L with n = 1, 2, 3 …, so all harmonics are present.",
            "**Beats**: two sounds of slightly different frequencies ν₁ and ν₂ produce a regular rise and fall of loudness; **beat frequency = |ν₁ − ν₂|**.",
            "Musicians tune instruments using beats: they adjust the tension until the beats with a standard note disappear."
          ]
        }
      ],
      formulas: [
        "Travelling wave: y = a sin(kx − ωt + φ)",
        "k = 2π/λ; ω = 2πν = 2π/T",
        "Wave speed: v = νλ = λ/T = ω/k",
        "Transverse wave on a string: v = √(T/μ)",
        "Sound in a fluid: v = √(B/ρ); in a solid rod: v = √(Y/ρ)",
        "Newton's formula: v = √(P/ρ); Laplace's correction: v = √(γP/ρ)",
        "Speed of sound in a gas: v ∝ √T (T in kelvin)",
        "Standing wave: y = 2a sin kx cos ωt",
        "Adjacent nodes (or antinodes) are λ/2 apart; node to nearest antinode = λ/4",
        "String fixed at both ends or pipe open at both ends: ν = nv/2L, n = 1, 2, 3 …",
        "Pipe closed at one end: ν = nv/4L, n = 1, 3, 5 …",
        "Beat frequency = |ν₁ − ν₂|"
      ],
      terms: [
        { term: "Transverse wave", meaning: "A wave in which particles of the medium oscillate **perpendicular to the direction of propagation**." },
        { term: "Longitudinal wave", meaning: "A wave in which particles oscillate **along the direction of propagation**, forming compressions and rarefactions." },
        { term: "Wavelength", meaning: "The **minimum distance between two points in the same phase** of a wave, λ = v/ν." },
        { term: "Node and antinode", meaning: "In a standing wave, a **node** has zero amplitude and an **antinode** has maximum amplitude." },
        { term: "Fundamental mode", meaning: "The **lowest natural frequency** of vibration of a string or air column (first harmonic)." },
        { term: "Beats", meaning: "**Periodic rise and fall of loudness** when two sounds of slightly different frequencies overlap; beat frequency = ν₁ − ν₂." }
      ],
      examples: [
        {
          q: "A steel wire 0.72 m long has a mass of 5.0 × 10⁻³ kg. If it is under a tension of 60 N, what is the speed of transverse waves on it?",
          steps: [
            "Mass per unit length μ = 5.0 × 10⁻³/0.72 ≈ 6.94 × 10⁻³ kg m⁻¹",
            "v = √(T/μ) = √(60/6.94 × 10⁻³)",
            "= √8640 ≈ 93 m s⁻¹"
          ],
          answer: "v ≈ 93 m s⁻¹"
        },
        {
          q: "Find the three lowest resonant frequencies of a pipe 85 cm long that is closed at one end. (Speed of sound = 340 m s⁻¹)",
          steps: [
            "Closed pipe: ν = nv/4L with n = 1, 3, 5 …",
            "Fundamental: ν₁ = 340/(4 × 0.85) = 340/3.4 = 100 Hz",
            "Next modes: 3 × 100 = 300 Hz and 5 × 100 = 500 Hz"
          ],
          answer: "100 Hz, 300 Hz and 500 Hz (only odd harmonics)"
        }
      ],
      qa: [
        {
          q: "Distinguish between transverse and longitudinal waves.",
          a: "In **transverse waves** the particles oscillate **perpendicular** to the direction of wave travel, forming crests and troughs; they need a medium with shear rigidity (solids, strings). In **longitudinal waves** the particles oscillate **parallel** to the direction of travel, forming compressions and rarefactions; they can travel in solids, liquids and gases. Example: waves on a string are transverse, sound in air is longitudinal."
        },
        {
          q: "Explain Newton's formula for the speed of sound in air and Laplace's correction.",
          a: "Newton assumed the compressions and rarefactions are **isothermal**, so the bulk modulus equals P and v = √(P/ρ) ≈ **280 m s⁻¹** for air at STP, about 15% less than the measured value. **Laplace** pointed out that the changes are so rapid that there is no time for heat exchange: they are **adiabatic**, so the bulk modulus is γP. Then v = √(γP/ρ) ≈ **331 m s⁻¹**, which agrees with experiment."
        },
        {
          q: "What are beats? Show that the beat frequency equals the difference of the two frequencies.",
          a: "**Beats** are the periodic waxing and waning of loudness when two waves of slightly different frequencies superpose. Adding s₁ = a cos ω₁t and s₂ = a cos ω₂t gives s = 2a cos[(ω₁ − ω₂)t/2] cos[(ω₁ + ω₂)t/2]. The amplitude term 2a cos[(ω₁ − ω₂)t/2] reaches maximum magnitude twice in each of its cycles, so loudness peaks at angular frequency (ω₁ − ω₂). Hence **beat frequency = ν₁ − ν₂**."
        }
      ],
      quiz: [
        {
          q: "A wave is given by y = 0.02 sin(2πx − 100πt), with x and y in metres and t in seconds. Its speed is:",
          options: ["100 m s⁻¹", "50 m s⁻¹", "25 m s⁻¹", "200 m s⁻¹"],
          answer: 1,
          explain: "k = 2π m⁻¹ and ω = 100π rad s⁻¹, so v = ω/k = 100π/2π = **50 m s⁻¹** (λ = 1 m, ν = 50 Hz)."
        },
        {
          q: "If the tension in a stretched string is made 4 times, the speed of transverse waves on it becomes:",
          options: ["4 times", "half", "16 times", "2 times"],
          answer: 3,
          explain: "v = √(T/μ) ∝ √T, so 4 times the tension gives **2 times** the speed."
        },
        {
          q: "An organ pipe closed at one end produces:",
          options: ["only odd harmonics", "only even harmonics", "all harmonics", "only the fundamental"],
          answer: 0,
          explain: "In a closed pipe ν = nv/4L with n = 1, 3, 5 …: **only odd harmonics** are present."
        },
        {
          q: "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. The number of beats heard per second is:",
          options: ["258", "2", "4", "516"],
          answer: 2,
          explain: "Beat frequency = |ν₁ − ν₂| = 260 − 256 = **4 per second**."
        },
        {
          q: "Laplace corrected Newton's formula for the speed of sound by treating sound propagation in air as:",
          options: ["isothermal", "adiabatic", "isobaric", "isochoric"],
          answer: 1,
          explain: "The compressions and rarefactions are too rapid for heat exchange, so they are **adiabatic**: v = √(γP/ρ)."
        },
        {
          q: "The speed of sound in air at 27 °C is v. At what temperature will it be 2v?",
          options: ["108 °C", "1200 °C", "54 °C", "927 °C"],
          answer: 3,
          explain: "v ∝ √T (in kelvin). Doubling v needs 4 × 300 K = 1200 K = 1200 − 273 = **927 °C**."
        }
      ]
    }
  ]
});
