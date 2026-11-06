// Class 11 Chemistry practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "chemistry", {
  "some-basic-concepts-of-chemistry": {
    mcq: [
      M(1, "The law of conservation of mass was stated by", "Lavoisier", ["Gay Lussac", "Dalton", "Avogadro"], "Lavoisier showed that matter can neither be created nor destroyed in a chemical reaction.", "chemical-laws"),
      M(2, "Water from a river and water from a tap both contain hydrogen and oxygen in the mass ratio 1 : 8. Which law does this show?", "Law of definite proportions", ["Law of multiple proportions", "Gay Lussac's law of volumes", "Avogadro's law of gases"], "A given compound always contains the same elements in the same proportion by mass (Proust).", "chemical-laws"),
      M(3, "12 g of carbon combines with 16 g of oxygen to form CO and with 32 g of oxygen to form CO₂. The ratio of oxygen masses combining with the fixed 12 g of carbon is", "1 : 2", ["1 : 3", "2 : 3", "1 : 4"], "16 : 32 = 1 : 2, a simple whole-number ratio, as the law of multiple proportions says.", "chemical-laws")
    ],
    written: [
      W(3, "short", "At the same temperature and pressure, 10 mL of nitrogen reacts completely with 30 mL of hydrogen to form 20 mL of ammonia. Write the ratio of volumes and name the law shown.", "The volumes are in the ratio 10 : 30 : 20 = 1 : 3 : 2, a simple whole-number ratio. This is Gay Lussac's law of combining volumes of gases.", "chemical-laws")
    ]
  },
  "structure-of-atom": {
    mcq: [
      M(1, "The de Broglie wavelength of a moving particle of mass m and velocity v is", "λ = h/mv", ["λ = mv/h", "λ = h/m", "λ = hm/v"], "de Broglie gave λ = h/mv = h/p. It is noticeable only for tiny particles such as electrons.", "dual-nature-and-uncertainty-principle"),
      M(2, "In the Schrödinger equation, ψ² gives", "the probability density of finding the electron", ["the energy of the electron in its orbit", "the fixed orbit of the electron around the nucleus", "the mass of the electron at rest"], "ψ is the wave function; ψ² gives the probability density of the electron.", "dual-nature-and-uncertainty-principle"),
      M(3, "An electron (m = 9.1 × 10⁻³¹ kg) moves at 1 × 10⁶ m s⁻¹. Its de Broglie wavelength is about (h = 6.626 × 10⁻³⁴ J s)", "7.3 × 10⁻¹⁰ m", ["7.3 × 10⁻⁷ m", "6.6 × 10⁻²⁸ m", "1.4 × 10⁹ m"], "λ = h/mv = 6.626 × 10⁻³⁴ ÷ (9.1 × 10⁻³¹ × 10⁶) = 7.3 × 10⁻¹⁰ m.", "dual-nature-and-uncertainty-principle")
    ],
    written: [
      W(4, "short", "The position of an electron is known to within 1 × 10⁻¹⁰ m. Use Heisenberg's uncertainty principle to find the minimum uncertainty in its velocity. (m = 9.1 × 10⁻³¹ kg, h = 6.626 × 10⁻³⁴ J s)", "Δx × Δp ≥ h/4π, so Δv ≥ h/(4π m Δx) = 6.626 × 10⁻³⁴ ÷ (4 × 3.14 × 9.1 × 10⁻³¹ × 10⁻¹⁰) = 6.626 × 10⁻³⁴ ÷ 1.14 × 10⁻³⁹ ≈ 5.8 × 10⁵ m s⁻¹.", "dual-nature-and-uncertainty-principle")
    ]
  },
  "chemical-bonding-and-molecular-structure": {
    mcq: [
      M(1, "According to the octet rule, atoms combine by transferring or sharing electrons to get how many electrons in their valence shell?", "Eight", ["Four", "Six", "Seven"], "Atoms try to reach eight valence electrons.", "kossel-lewis-approach-and-ionic-bonds"),
      M(2, "Which molecule is an example of an expanded octet?", "SF₆", ["BCl₃", "NO", "BeH₂"], "In SF₆ sulphur has 12 electrons around it. BCl₃ and BeH₂ have incomplete octets and NO has an odd number of electrons.", "kossel-lewis-approach-and-ionic-bonds"),
      M(3, "Formal charge = V − L − ½S. An oxygen atom with 6 valence electrons, 6 non-bonding electrons and 2 bonding electrons (a single bond) has formal charge", "−1", ["0", "+1", "−2"], "6 − 6 − ½(2) = −1.", "kossel-lewis-approach-and-ionic-bonds")
    ],
    written: [
      W(3, "short", "State three factors that favour the formation of an ionic bond.", "The metal should have a low ionisation enthalpy, the non-metal should have a strongly negative electron gain enthalpy, and the lattice enthalpy of the solid should be high (for NaCl it is 788 kJ mol⁻¹).", "kossel-lewis-approach-and-ionic-bonds")
    ]
  },
  });
})();
