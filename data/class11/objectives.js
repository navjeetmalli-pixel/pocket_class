// Learning objectives for Class 11 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(11, {
  physics: {
    "laws-of-motion": [
      {
        id: "first-law",
        text: "I can state Newton's first law, explain inertia (mass as its measure) and explain everyday cases such as the jerk felt in a bus.",
        topics: ["Newton's First Law and Inertia"],
        level: "understand",
        prereq: ["9/science/how-forces-affect-motion", "11/physics/motion-in-a-straight-line"],
        mistakes: [
          { id: "force-for-motion", text: "Believing a force is needed to keep a body moving at constant velocity.", fix: "A force is needed only to change velocity. With zero net force, a moving body continues with constant velocity, as in Galileo's idea of inertia." },
          { id: "inertia-force", text: "Treating inertia as a force that pushes a body backwards.", fix: "Inertia is the resistance of a body to a change in its state of motion. It is a property of the body, measured by its mass, and not a force." }
        ]
      },
      {
        id: "second-law",
        text: "I can use F = dp/dt and F = ma to find acceleration, and use impulse = change in momentum to explain impact forces.",
        topics: ["Second Law, Momentum and Impulse"],
        level: "apply",
        prereq: ["11/physics/motion-in-a-plane"],
        mistakes: [
          { id: "force-velocity", text: "Thinking the acceleration points along the velocity, and not along the net force.", fix: "The acceleration is always in the direction of the net force. Apply the law separately to each component: Fₓ = maₓ, F_y = ma_y." },
          { id: "catch-hands", text: "Saying drawing the hands back while catching a ball reduces the change in momentum.", fix: "The change in momentum is the same. A longer time of impact gives a smaller average force, since F = Δp/Δt." }
        ]
      },
      {
        id: "third-law",
        text: "I can identify action-reaction pairs and use conservation of momentum, as in the recoil of a gun.",
        topics: ["Third Law and Conservation of Momentum"],
        level: "apply",
        prereq: ["11/physics/laws-of-motion#second-law"],
        mistakes: [
          { id: "pair-cancel", text: "Saying action and reaction cancel each other, so nothing can move.", fix: "They act on different bodies, so they cannot be added to find one body's net force. Each body accelerates because of the force acting on it." },
          { id: "weight-normal-pair", text: "Calling the weight of a book and the normal force on it an action-reaction pair.", fix: "They act on the same body. The reaction to the Earth's pull on the book is the book's pull on the Earth." },
          { id: "momentum-closed", text: "Applying conservation of momentum when external forces act on the system.", fix: "Total momentum is constant only for an isolated system, with no net external force." }
        ]
      },
      {
        id: "friction",
        text: "I can use fₛ ≤ μₛN and fₖ = μₖN, and the angle of repose, to solve problems on blocks and inclines.",
        topics: ["Friction"],
        level: "apply",
        mistakes: [
          { id: "static-equal", text: "Always taking static friction as μₛN.", fix: "Static friction adjusts itself to the applied force, up to the limiting value μₛN. It equals μₛN only at the point of sliding." },
          { id: "area-contact", text: "Thinking friction grows with the area of contact.", fix: "To a good approximation friction depends on the nature of the surfaces and on the normal reaction N, not on the area." },
          { id: "normal-mg", text: "Using N = mg on an inclined plane.", fix: "On an incline of angle θ, N = mg cos θ. The block starts to slide when tan θ = μₛ." }
        ]
      },
      {
        id: "circular",
        text: "I can find the centripetal force in circular motion and the maximum safe speed of a car on a level and on a banked road.",
        topics: ["Dynamics of Circular Motion"],
        level: "analyse",
        prereq: ["11/physics/motion-in-a-plane", "11/physics/laws-of-motion#friction"],
        mistakes: [
          { id: "centripetal-extra", text: "Drawing centripetal force as an extra force in a free-body diagram, besides tension or friction.", fix: "Centripetal force is the name for the net force towards the centre. It is provided by tension, gravity, friction or a normal force, and is not a separate force." },
          { id: "level-road", text: "Saying the speed limit on a level road depends on the mass of the car.", fix: "Friction supplies mv²/R, and the maximum friction is μₛmg, so v = √(μₛRg) and the mass cancels." }
        ]
      }
    ]
  },
  chemistry: {
    "some-basic-concepts-of-chemistry": [
      {
        id: "matter-measurement",
        text: "I can classify matter, use the SI base units, and report a calculated result with the correct number of significant figures.",
        topics: ["Matter, Measurement and Significant Figures"],
        level: "apply",
        prereq: ["9/science/atomic-foundations-of-matter", "10/science/chemical-reactions-and-equations"],
        mistakes: [
          { id: "sigfig-leading-zero", text: "Counting the zeros at the start of 0.0045 as significant figures.", fix: "Leading zeros only show the place of the decimal point. 0.0045 has two significant figures." },
          { id: "mixture-compound", text: "Calling a homogeneous mixture such as air or salt solution a compound.", fix: "A mixture has components that can be separated by physical methods and are not in a fixed ratio. A compound has a fixed ratio by mass." }
        ]
      },
      {
        id: "chemical-laws",
        text: "I can state the laws of chemical combination and use them to analyse data.",
        topics: ["Laws of Chemical Combination"],
        level: "understand",
        mistakes: [
          { id: "definite-multiple", text: "Mixing up the law of definite proportions and the law of multiple proportions.", fix: "Definite proportions: one compound always has the same mass ratio of elements. Multiple proportions: for two compounds of the same two elements, the masses of one element combining with a fixed mass of the other are in a small whole-number ratio." }
        ]
      },
      {
        id: "mole",
        text: "I can use atomic mass, molecular mass, molar mass and the mole to convert between mass, moles and number of particles.",
        topics: ["Atomic Mass, Molecular Mass and the Mole"],
        level: "apply",
        prereq: ["11/chemistry/some-basic-concepts-of-chemistry#matter-measurement"],
        mistakes: [
          { id: "molecules-atoms", text: "Saying 18 g of water contains 6.022 × 10²³ atoms.", fix: "18 g is 1 mole of H₂O, so it contains 6.022 × 10²³ molecules and three times as many atoms." },
          { id: "u-g", text: "Using the atomic mass unit and the gram interchangeably.", fix: "1 u = 1.66056 × 10⁻²⁴ g is the mass scale for single atoms. Molar mass is the mass of one mole, in g mol⁻¹." }
        ]
      },
      {
        id: "composition-formula",
        text: "I can calculate mass percentage and find empirical and molecular formulae from composition data.",
        topics: ["Percentage Composition and Formulae"],
        level: "apply",
        prereq: ["11/chemistry/some-basic-concepts-of-chemistry#mole"],
        mistakes: [
          { id: "ratio-masses", text: "Taking the ratio of masses as the ratio of atoms in the empirical formula.", fix: "Convert each mass to moles by dividing by the atomic mass, then divide by the smallest to get the whole-number ratio." },
          { id: "empirical-molecular", text: "Reporting the empirical formula when the molecular formula is asked.", fix: "Molecular formula = empirical formula × n, where n = molar mass ÷ empirical formula mass." }
        ]
      },
      {
        id: "stoichiometry",
        text: "I can use a balanced equation to find the mass or moles of products and identify the limiting reagent.",
        topics: ["Stoichiometry and Limiting Reagent"],
        level: "analyse",
        prereq: ["11/chemistry/some-basic-concepts-of-chemistry#mole"],
        mistakes: [
          { id: "limiting-smaller-mass", text: "Choosing the reactant with the smaller mass as the limiting reagent.", fix: "Convert to moles and divide by the coefficient in the balanced equation. The reactant with the smaller value runs out first." },
          { id: "unbalanced", text: "Using an unbalanced equation for the mole ratio.", fix: "Balance the equation first. Mole ratios are the coefficients of the balanced equation." }
        ]
      },
      {
        id: "concentration",
        text: "I can calculate mass per cent, mole fraction and molarity, and say which of them change with temperature.",
        topics: ["Concentration Terms"],
        level: "apply",
        mistakes: [
          { id: "molarity-solvent", text: "Dividing the moles of solute by the volume of the solvent when finding molarity.", fix: "Molarity is moles of solute per litre of solution, not of solvent." },
          { id: "molarity-temp", text: "Assuming molarity does not depend on temperature.", fix: "Volume changes with temperature, so molarity changes. Mass per cent and mole fraction do not." }
        ]
      }
    ]
  }
});
