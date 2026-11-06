// Class 12 Chemistry practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
(function () {
  const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation, objective id): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain, obj) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    return { q, options, answer: at, explain, level, obj };
  }
  // AR(level, assertion, reason, answer index, explanation, objective id): assertion-reason with fixed options.
  function AR(level, a, r, answer, explain, obj) {
    return { q: "Assertion (A): " + a + "\nReason (R): " + r, options: AR_OPTS, answer, explain, level, keepOrder: true, obj };
  }
  // W(marks, type, question, model answer, objective id)
  function W(marks, type, q, a, obj) {
    return { q, a, marks, type, obj };
  }
  StudyData.addPractice(12, "chemistry", {
  "chemical-kinetics": {
    mcq: [
      M(1, "Collisions that actually lead to a reaction are called", "effective collisions", ["elastic collisions", "random collisions", "head-on collisions only"], "Only collisions with enough energy and the proper orientation are effective.", "collision-theory"),
      M(2, "For a collision to be effective, the molecules must have energy at least equal to the", "threshold energy", ["ionisation energy", "lattice energy", "zero-point energy"], "Molecules need energy at least equal to the threshold energy, plus proper orientation.", "collision-theory"),
      M(3, "The probability (steric) factor P in rate = P Z_AB e^(−Ea/RT) accounts for", "the proper orientation of colliding molecules", ["the concentration of the catalyst used in the reaction", "the temperature of the mixture", "the volume of the container"], "Not every collision with enough energy has the right orientation, so P is less than 1.", "collision-theory")
    ],
    written: [
      W(3, "short", "Find the value of e^(−Ea/RT) for Ea = 50 kJ mol⁻¹ at 300 K (R = 8.314 J K⁻¹ mol⁻¹, e⁻²⁰ ≈ 2.06 × 10⁻⁹). What does it show?", "Ea/RT = 50000 ÷ (8.314 × 300) = 50000 ÷ 2494 ≈ 20.05. So e^(−20.05) ≈ 2.0 × 10⁻⁹. Only about two in a billion collisions have energy of at least Ea, so most collisions are not effective.", "collision-theory")
    ]
  },
  "d-and-f-block-elements": {
    mcq: [
      M(1, "All actinoids are", "radioactive", ["non-radioactive", "inert gases", "colourless liquids"], "All actinoids are radioactive, and those after uranium are man-made.", "actinoids"),
      M(2, "Actinoids show a wider range of oxidation states than lanthanoids because", "the 5f, 6d and 7s levels have comparable energies", ["the 4f electrons shield the nucleus very strongly", "they have no valence electrons", "they are all non-radioactive"], "Electrons from all three levels can take part in bonding.", "actinoids"),
      M(3, "The highest oxidation state shown by uranium is", "+6", ["+3", "+7", "+8"], "+3 is common in actinoids, uranium reaches +6 and Np and Pu reach +7.", "actinoids")
    ],
    written: [
      W(3, "short", "Give two points of difference between the actinoids and the lanthanoids.", "Actinoids show a wider range of oxidation states, because 5f, 6d and 7s levels have comparable energies, while lanthanoids mainly show +3. Actinoid contraction is greater, because 5f electrons shield poorly. Actinoids are radioactive and more reactive, and their chemistry is harder to study.", "actinoids")
    ]
  },
  "haloalkanes-and-haloarenes": {
    mcq: [
      M(1, "A carbon atom bonded to four different groups is called a", "chiral carbon", ["tertiary carbon", "sp carbon", "carbocation"], "It is also called an asymmetric carbon, for example C2 of butan-2-ol.", "stereochemistry"),
      M(2, "A racemic mixture is optically", "inactive", ["dextrorotatory", "laevorotatory", "active to the right"], "It contains equal amounts of the two enantiomers, whose rotations cancel.", "stereochemistry"),
      M(3, "Enantiomers are non-superimposable mirror images that", "have identical physical properties except optical rotation", ["have different melting points, boiling points and solubilities", "can be superimposed on each other", "rotate light equally in the same direction"], "One rotates plane-polarised light clockwise (+) and the other anticlockwise (−) by the same amount.", "stereochemistry")
    ],
    written: [
      W(3, "short", "Define a chiral carbon, enantiomers and a racemic mixture. Identify the chiral carbon in butan-2-ol.", "A chiral carbon has four different groups. Enantiomers are non-superimposable mirror images with identical physical properties except the direction of rotation of plane-polarised light. A racemic mixture has equal amounts of the two enantiomers and is optically inactive. In butan-2-ol the chiral carbon is C2.", "stereochemistry")
    ]
  },
  "aldehydes-ketones-and-carboxylic-acids": {
    mcq: [
      M(1, "Carboxylic acids react with PCl₅, PCl₃ or SOCl₂ to give", "acyl chlorides", ["esters", "amides", "carboxylate salts"], "With alcohols and H⁺ they give esters, and with NH₃ followed by heat they give amides.", "reactions-of-carboxylic-acids"),
      M(2, "Which reagent reduces –COOH to –CH₂OH?", "LiAlH₄", ["NaBH₄", "Zn–Hg and HCl", "Tollens' reagent"], "LiAlH₄ or diborane reduces carboxylic acids, but NaBH₄ does not.", "reactions-of-carboxylic-acids"),
      M(3, "Heating sodium acetate with soda lime gives", "methane", ["ethane", "ethanol", "acetone"], "CH₃COONa + NaOH → CH₄ + Na₂CO₃. Decarboxylation removes one carbon as CO₂.", "reactions-of-carboxylic-acids")
    ],
    written: [
      W(3, "short", "Why does benzoic acid not undergo Friedel–Crafts reactions? What is the Hell–Volhard–Zelinsky reaction?", "–COOH is deactivating, and AlCl₃ binds to the carboxyl group, so Friedel–Crafts reactions do not occur. In the HVZ reaction, carboxylic acids with an α-hydrogen react with Cl₂ or Br₂ in the presence of red phosphorus to give α-halo acids.", "reactions-of-carboxylic-acids")
    ]
  },
  });
})();
