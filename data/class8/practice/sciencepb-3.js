// Class 8 Science (PSEB) practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(8, "sciencepb", {
  "microorganisms-friend-and-foe": {
    mcq: [
      M(1, "Microorganisms are living things that", "cannot be seen by the naked eye", ["live only inside the bodies of humans", "are always harmful to us", "are found only in soil"], "Microbes are too small to be seen without a microscope and are found nearly everywhere.", "what-are-microorganisms"),
      M(2, "Which kind of microorganism can multiply only inside other living cells?", "Virus", ["Bacterium", "Alga", "Protozoan"], "Viruses are even smaller than other microbes and multiply only inside living cells.", "what-are-microorganisms"),
      M(3, "Which statement about microbes is correct?", "Most microbes are harmless and many are useful", ["Every microbe is a germ that causes disease", "Microbes live only in ponds and rivers", "Microbes can be seen clearly with the naked eye"], "Microbes are in air, water, soil, on our skin and in food. Most are harmless and many are useful.", "what-are-microorganisms")
    ],
    written: [
      W(3, "short", "What are microorganisms? Name the main groups and say which group multiplies only inside other living cells.", "Microorganisms (microbes) are living things too small to be seen with the naked eye. The groups are bacteria, fungi (moulds and yeast), protozoa, algae and viruses. Viruses multiply only inside other living cells.", "what-are-microorganisms")
    ]
  },
  "reproduction-in-animals": {
    mcq: [
      M(1, "Animals reproduce so that", "the species continues", ["they can grow taller", "they can move about", "their body gets energy"], "Reproduction produces new individuals of the same kind, so the species does not die out.", "why-animals-reproduce"),
      M(2, "Asexual reproduction needs", "one parent", ["two parents", "three parents", "a male and a female"], "Asexual reproduction needs only one parent. Sexual reproduction needs two.", "why-animals-reproduce"),
      M(3, "Which pair correctly matches the type of reproduction with the number of parents?", "Sexual: two, asexual: one", ["Sexual: one, asexual: two", "Sexual: two, asexual: two", "Sexual: one, asexual: one"], "Sexual reproduction needs two parents and asexual reproduction needs one.", "why-animals-reproduce")
    ],
    written: [
      W(3, "short", "What is reproduction and why is it important? Name the two main ways in which animals reproduce and say how many parents each needs.", "Reproduction is the process by which living things produce new individuals of their own kind, so that the species continues. Asexual reproduction needs one parent and sexual reproduction needs two parents.", "why-animals-reproduce")
    ]
  },
  "sound": {
    mcq: [
      M(1, "SONAR uses ultrasound to", "find the depth of the sea", ["measure the speed of wind", "make fish grow faster", "produce light under water"], "SONAR sends ultrasound down and times its echo to find the depth or locate objects under water.", "uses-of-ultrasound-and-noise"),
      M(2, "Ultrasound can be used to", "find cracks in metal parts", ["make metal parts shine brightly", "make metal parts lighter", "melt metal parts"], "Ultrasound is also used to clean delicate instruments and to find cracks in metal parts.", "uses-of-ultrasound-and-noise"),
      M(3, "A SONAR on a ship receives the echo from the sea floor 4 s after sending ultrasound. The speed of sound in sea water is 1500 m/s. How deep is the sea?", "3000 m", ["6000 m", "375 m", "1500 m"], "The sound travels down and back, so 2d = 1500 × 4 = 6000 m and d = 3000 m.", "uses-of-ultrasound-and-noise")
    ],
    written: [
      W(3, "short", "Give two uses of ultrasound. Why should the volume of music be kept moderate?", "Ultrasound is used by doctors to scan the body and by SONAR to find the depth of the sea (also to clean instruments or find cracks in metal). Very loud sounds can damage hearing, so the volume should be moderate.", "uses-of-ultrasound-and-noise")
    ]
  },
  });
})();
