// Class 12 Biology practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "biology", {
  "biotechnology-principles-and-processes": {
    mcq: [
      M(1, "The two core techniques that gave rise to modern biotechnology are genetic engineering and", "bioprocess engineering", ["tissue grafting technology", "gene mapping", "population study"], "Bioprocess engineering maintains sterile conditions to grow only the desired microbe or cell in large quantity.", "principles-of-biotechnology"),
      M(2, "The first recombinant DNA was constructed in 1972 by", "Cohen and Boyer", ["Watson and Crick", "Sanger and Gilbert", "Hershey and Chase"], "They joined a plasmid carrying an antibiotic-resistance gene from Salmonella typhimurium to a native plasmid.", "principles-of-biotechnology"),
      M(3, "In the steps of rDNA technology, which step follows cutting the DNA with restriction enzymes?", "Amplification by PCR", ["Transfer into the host", "Isolation of DNA", "Obtaining the gene product"], "The order is: isolation of DNA, cutting, amplification by PCR, insertion into a vector, transfer into the host, obtaining the product.", "principles-of-biotechnology")
    ],
    written: [
      W(3, "short", "Write the steps of recombinant DNA technology in order. Which bacterium gave the antibiotic-resistance gene in the first rDNA experiment?", "Isolation of DNA; cutting it with restriction enzymes; amplification of the gene by PCR; insertion into a vector; transfer into the host; obtaining the foreign gene product. The first experiment (Cohen and Boyer, 1972) used the resistance gene of Salmonella typhimurium.", "principles-of-biotechnology")
    ]
  },
  });
})();
