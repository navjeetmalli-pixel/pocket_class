// Learning objectives for Class 10 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(10, {
  maths: {
    "quadratic-equations": [
      {
        id: "standard-form",
        text: "I can decide whether an equation is quadratic by simplifying it, and write it in the form ax² + bx + c = 0 with a ≠ 0.",
        topics: ["Standard form"],
        level: "understand",
        prereq: ["10/maths/polynomials", "9/maths/exploring-algebraic-identities", "9/mathspb/polynomials", "8/maths/algebra-play"],
        mistakes: [
          { id: "a-zero", text: "Calling an equation quadratic because it has x² before simplifying, such as x(x + 1) + 8 = (x + 2)(x − 2).", fix: "Simplify first. Here the x² terms cancel and x + 12 = 0 is linear, not quadratic. A quadratic must keep a nonzero x² term (a ≠ 0)." },
          { id: "root-count", text: "Expecting a quadratic equation to have exactly two real roots every time.", fix: "It has at most two roots. It can have two distinct, two equal, or no real roots." }
        ]
      },
      {
        id: "factorisation",
        text: "I can solve a quadratic equation by splitting the middle term into two linear factors.",
        topics: ["Solving by factorisation"],
        level: "apply",
        prereq: ["10/maths/quadratic-equations#standard-form"],
        mistakes: [
          { id: "divide-by-x", text: "Dividing both sides of x² = 3x by x, and getting only x = 3.", fix: "Never divide by an expression containing x. Write x² − 3x = 0, factorise as x(x − 3) = 0 and get x = 0 or x = 3." },
          { id: "product-not-zero", text: "Solving (x − 2)(x − 3) = 6 by taking x − 2 = 6 or x − 3 = 6.", fix: "The zero product rule works only when the product equals 0. Expand, move 6 to the left to get a quadratic equal to 0, then factorise." },
          { id: "split-product", text: "Choosing two numbers whose sum is b but whose product is not ac.", fix: "The two numbers must add to b and multiply to a × c. Check both before splitting the middle term." }
        ]
      },
      {
        id: "formula",
        text: "I can use x = [−b ± √(b² − 4ac)] / 2a to find the roots after writing the equation in standard form.",
        topics: ["Quadratic formula"],
        level: "apply",
        prereq: ["10/maths/real-numbers"],
        mistakes: [
          { id: "sign-of-b", text: "Writing −b as −5 when b = −5.", fix: "Put the sign with the number in brackets: if b = −5 then −b = 5, and b² = 25." },
          { id: "denominator", text: "Dividing only the square root part by 2a.", fix: "The whole numerator −b ± √(b² − 4ac) is divided by 2a." },
          { id: "not-standard", text: "Reading a, b, c from an equation that is not yet equal to 0.", fix: "First bring every term to one side so the equation reads ax² + bx + c = 0." }
        ]
      },
      {
        id: "nature-of-roots",
        text: "I can use the discriminant D = b² − 4ac to say whether the roots are two distinct real, two equal real or not real, and to find an unknown constant.",
        topics: ["Nature of roots"],
        level: "analyse",
        mistakes: [
          { id: "d-negative", text: "Saying that when D < 0 the roots are negative.", fix: "D < 0 means there are no real roots at all, not that the roots are negative." },
          { id: "equal-roots-k", text: "Keeping a value of k that makes a = 0 when solving D = 0.", fix: "Check each value of k against the condition a ≠ 0. For kx² − 2kx + 6 = 0, D = 0 gives k = 0 or 6; k = 0 is rejected, so k = 6." }
        ]
      },
      {
        id: "word-problems",
        text: "I can turn a word problem into a quadratic equation, solve it and reject answers that do not make sense.",
        topics: ["Word problems"],
        level: "apply",
        prereq: ["10/maths/pair-of-linear-equations-in-two-variables"],
        mistakes: [
          { id: "keep-negative", text: "Giving a negative length, age or number of items as the answer.", fix: "Check each root in the situation and reject those that are impossible, such as a negative speed or count." },
          { id: "time-equation", text: "Writing the time equation as speed ÷ distance.", fix: "Time = distance ÷ speed. Form the equation from the difference between the two times." }
        ]
      }
    ]
  },
  science: {
    "light-reflection-and-refraction": [
      {
        id: "reflection-laws",
        text: "I can state the laws of reflection and describe the image formed by a plane mirror.",
        topics: ["Reflection and Spherical Mirrors"],
        level: "remember",
        prereq: ["8/science/light-mirrors-and-lenses", "7/science/light-shadows-and-reflections"],
        mistakes: [
          { id: "angle-from-surface", text: "Measuring the angle of incidence from the mirror surface.", fix: "Both angles are measured from the normal, the line at 90° to the surface at the point of incidence." },
          { id: "lateral-inversion", text: "Saying the plane mirror image is upside down.", fix: "It is erect but laterally inverted (left and right are interchanged), virtual, the same size, and as far behind the mirror as the object is in front." }
        ]
      },
      {
        id: "mirror-images",
        text: "I can state the nature, size and position of the image formed by a concave and a convex mirror for different object positions, using ray diagrams.",
        topics: ["Images Formed by Spherical Mirrors"],
        level: "apply",
        prereq: ["10/science/light-reflection-and-refraction#reflection-laws"],
        mistakes: [
          { id: "convex-real", text: "Saying a convex mirror can form a real image.", fix: "A convex mirror always forms a virtual, erect and diminished image, wherever the object is." },
          { id: "virtual-behind", text: "Believing a virtual image can be caught on a screen.", fix: "A virtual image is formed where rays only appear to meet and cannot be taken on a screen. Only a real image can." }
        ]
      },
      {
        id: "mirror-formula",
        text: "I can use the new Cartesian sign convention with 1/v + 1/u = 1/f and m = −v/u to find image position and magnification.",
        topics: ["Sign Convention and Mirror Formula"],
        level: "apply",
        mistakes: [
          { id: "u-positive", text: "Substituting the object distance u as a positive number.", fix: "The object is on the left of the pole, against the incident light, so u is negative. The focal length of a concave mirror is also negative." },
          { id: "m-negative", text: "Reading a negative magnification as a virtual image.", fix: "A negative m means the image is inverted, which is a real image. A virtual image has positive m." }
        ]
      },
      {
        id: "refraction",
        text: "I can explain refraction as a change of speed, say how light bends at a boundary, and use Snell's law and refractive index.",
        topics: ["Refraction of Light"],
        level: "understand",
        prereq: ["10/science/light-reflection-and-refraction#reflection-laws"],
        mistakes: [
          { id: "bend-direction", text: "Saying light always bends towards the normal on refraction.", fix: "It bends towards the normal when going into a denser medium and away from the normal when going into a rarer medium." },
          { id: "denser-faster", text: "Believing light moves faster in a medium of higher refractive index.", fix: "Light travels more slowly in a medium with a higher refractive index." }
        ]
      },
      {
        id: "lenses",
        text: "I can describe the images formed by convex and concave lenses and use the lens formula and magnification.",
        topics: ["Spherical Lenses"],
        level: "apply",
        mistakes: [
          { id: "lens-thickness", text: "Mixing up which lens is converging.", fix: "A convex lens, thicker at the middle, converges rays. A concave lens, thicker at the edges, diverges them." },
          { id: "concave-real", text: "Saying a concave lens forms a real image.", fix: "A concave lens always forms a virtual, erect, diminished image on the same side as the object." }
        ]
      },
      {
        id: "lens-power",
        text: "I can find the power of a lens in dioptres and add the powers of lenses in contact.",
        topics: ["Power of a Lens"],
        level: "apply",
        prereq: ["10/science/light-reflection-and-refraction#lenses"],
        mistakes: [
          { id: "f-in-cm", text: "Using the focal length in centimetres in P = 1/f.", fix: "Convert f to metres first. A lens with f = 50 cm = 0.5 m has power +2 D." },
          { id: "concave-power-sign", text: "Giving a concave lens a positive power.", fix: "A convex lens has positive power; a concave lens has negative power." }
        ]
      }
    ],
    electricity: [
      {
        id: "current-pd",
        text: "I can define electric current and potential difference, and say how an ammeter and a voltmeter are connected.",
        topics: ["Electric Current and Potential Difference"],
        level: "understand",
        prereq: ["8/science/electricity-magnetic-and-heating-effects", "7/science/electricity-circuits-and-their-components"],
        mistakes: [
          { id: "current-used-up", text: "Saying current is used up as it goes through a bulb.", fix: "Charge keeps flowing around the circuit and the same current leaves the bulb that entered it. Electrical energy is what is transformed." },
          { id: "ammeter-parallel", text: "Connecting an ammeter in parallel with the component.", fix: "An ammeter goes in series and a voltmeter goes in parallel." }
        ]
      },
      {
        id: "ohms-law",
        text: "I can use V = IR, explain the factors on which the resistance of a conductor depends, and read a V–I graph.",
        topics: ["Ohm's Law and Resistance"],
        level: "apply",
        mistakes: [
          { id: "r-depends-vi", text: "Thinking resistance changes whenever V or I changes.", fix: "Resistance is a property of the conductor (its length, area of cross-section, material and temperature). In an ohmic conductor V and I change in the same ratio, so R stays constant." },
          { id: "ohm-all", text: "Applying Ohm's law to every device.", fix: "It holds for metallic conductors at constant temperature. The V–I graph of such a conductor is a straight line through the origin." }
        ]
      },
      {
        id: "series-parallel",
        text: "I can find the equivalent resistance of resistors in series and in parallel and the current or potential difference in each.",
        topics: ["Resistors in Series and Parallel"],
        level: "apply",
        prereq: ["10/science/electricity#ohms-law"],
        mistakes: [
          { id: "parallel-add", text: "Adding resistances in parallel as R₁ + R₂.", fix: "In parallel, 1/Rₚ = 1/R₁ + 1/R₂ + …, so Rₚ is smaller than the smallest resistor." },
          { id: "reciprocal-forgot", text: "Finishing with 1/Rₚ and not turning it over.", fix: "Calculate 1/Rₚ and then take the reciprocal to get Rₚ." }
        ]
      },
      {
        id: "joule-heating",
        text: "I can use H = I²Rt to calculate the heat produced and explain the working of devices based on the heating effect.",
        topics: ["Heating Effect of Electric Current"],
        level: "apply",
        mistakes: [
          { id: "heat-prop-i", text: "Thinking the heat produced is proportional to the current.", fix: "Heat is proportional to the square of the current (I²), so doubling the current makes four times the heat." }
        ]
      },
      {
        id: "power-energy",
        text: "I can use P = VI = I²R = V²/R and calculate the cost of electrical energy in kW h.",
        topics: ["Electric Power"],
        level: "apply",
        mistakes: [
          { id: "kwh-power", text: "Treating the kilowatt hour as a unit of power.", fix: "The watt measures power; the kilowatt hour measures energy. 1 kW h = 3.6 × 10⁶ J, and energy = power × time." },
          { id: "wh-kwh", text: "Forgetting to convert watts to kilowatts and minutes to hours before finding units used.", fix: "Units used = (power in kW) × (time in hours)." }
        ]
      }
    ]
  }
});
