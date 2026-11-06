// Class 9 Science (PSEB) practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(9, "sciencepb", {
  "matter-in-our-surroundings": {
    mcq: [
      M(1, "Which state of matter has a definite shape and a fixed volume?", "Solid", ["Liquid", "Gas", "Vapour"], "Solids are rigid, with a definite shape, distinct boundaries and a fixed volume.", "solids-liquids-and-gases"),
      M(2, "LPG and CNG can be stored in cylinders because gases are", "highly compressible", ["completely rigid and hard", "of fixed shape", "of fixed volume"], "A gas can be squeezed into a much smaller volume because it is highly compressible.", "solids-liquids-and-gases"),
      M(3, "A sponge can be pressed, yet it is a solid because", "it has tiny holes holding air that is pushed out", ["it has no fixed shape of its own", "it flows like a liquid when pressed", "its particles move about randomly like the particles of a gas"], "A sponge is a solid with tiny holes filled with air. Pressing pushes the air out.", "solids-liquids-and-gases")
    ],
    written: [
      W(3, "short", "Compare solids, liquids and gases in terms of shape and volume. Why do gases exert pressure?", "Solids have a definite shape and fixed volume. Liquids have a fixed volume but take the shape of the container. Gases have neither fixed shape nor fixed volume. Gas particles move randomly at high speed and hit the walls of the container, so gases exert pressure.", "solids-liquids-and-gases")
    ]
  },
  "structure-of-the-atom": {
    mcq: [
      M(1, "In Bohr's model, electrons revolve only in", "discrete orbits", ["any path at all", "the nucleus only", "straight lines only"], "Electrons revolve in special orbits called discrete orbits or energy levels (shells).", "bohr-s-model"),
      M(2, "According to Bohr's model, an atom is stable because", "electrons do not radiate energy in their orbits", ["electrons stay still inside the nucleus of the atom", "neutrons cancel the charge of protons", "protons revolve around the electrons"], "While revolving in their orbits, electrons do not radiate energy, so they do not spiral into the nucleus.", "bohr-s-model"),
      M(3, "The shell numbered n = 3 is called the", "M shell", ["K shell", "L shell", "N shell"], "The shells K, L, M, N correspond to n = 1, 2, 3, 4.", "bohr-s-model")
    ],
    written: [
      W(3, "short", "State two postulates of Bohr's model of the atom and name the first four shells starting from the nucleus.", "Electrons revolve only in certain special orbits (discrete orbits or energy levels). While in these orbits they do not radiate energy. The shells are K, L, M and N (n = 1, 2, 3, 4).", "bohr-s-model")
    ]
  },
  "tissues": {
    mcq: [
      M(1, "Many plant tissues are", "supportive and dead", ["soft and moving", "all living and nervous", "made only of blood"], "Plants are mostly stationary, so many tissues give mechanical strength and are dead.", "plant-and-animal-tissues-differ"),
      M(2, "Growth in plants is limited to certain regions called", "meristems", ["ganglia cells", "vacuoles", "tendons"], "Plant growth is limited to meristems. Growth in animals is more uniform.", "plant-and-animal-tissues-differ"),
      M(3, "Why are most tissues in animals living?", "Animals move about and use more energy", ["Animals are stationary and need strength", "Animals have no growth at all", "Animals have meristems everywhere"], "Animals move about and use more energy, so most of their tissues are living.", "plant-and-animal-tissues-differ")
    ],
    written: [
      W(3, "short", "Give two differences between plant tissues and animal tissues, with the reason for each.", "Plant tissues are mostly supportive and dead because plants are stationary and need strength. Animal tissues are mostly living because animals move about and use more energy. Growth in plants is limited to meristems, but in animals it is more uniform.", "plant-and-animal-tissues-differ")
    ]
  },
  "work-and-energy": {
    mcq: [
      M(1, "The law of conservation of energy says that energy can neither be", "created nor destroyed", ["changed nor stored in any form", "seen nor felt", "measured nor used"], "Energy can only change from one form to another. The total stays the same.", "law-of-conservation-of-energy"),
      M(2, "A ball falls freely. Ignoring air resistance, PE + KE of the ball", "remains constant", ["keeps increasing", "keeps decreasing", "becomes zero"], "PE decreases and KE increases by the same amount, so their sum remains constant.", "law-of-conservation-of-energy"),
      M(3, "A 2 kg ball is dropped from a height of 5 m (g = 10 m s⁻²). Its kinetic energy just before it lands is", "100 J", ["10 J", "50 J", "200 J"], "PE at the top = mgh = 2 × 10 × 5 = 100 J. All of it becomes KE just before landing.", "law-of-conservation-of-energy")
    ],
    written: [
      W(3, "short", "State the law of conservation of energy. Name the energy change in (a) a green plant and (b) a hydropower plant.", "Energy can neither be created nor destroyed; it can only change from one form to another. (a) A green plant changes light energy into chemical energy. (b) A hydropower plant changes the potential energy of stored water into electrical energy.", "law-of-conservation-of-energy")
    ]
  },
  });
})();
