// Class 11 Biology practice bank, part 4: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "biology", {
  "the-living-world": {
    mcq: [
      M(1, "The categories of classification, together arranged in order, form the", "taxonomic hierarchy", ["herbarium sheet", "nomenclature key", "binomial nomenclature"], "Each category (rank) is a taxon, and together they form the taxonomic hierarchy.", "classification-taxonomy-and-systematics"),
      M(2, "Systematics goes beyond simple classification because it also considers", "evolutionary relationships", ["only the colour of the organism", "only the habitat of the organism", "only the size of the organism"], "Systematics (from 'systema') arranges organisms in a way that also takes their evolutionary relationships into account.", "classification-taxonomy-and-systematics"),
      M(3, "Which of these is NOT a part of taxonomy?", "Cultivation", ["Identification", "Nomenclature", "Characterisation"], "Taxonomy includes characterisation, identification, classification and nomenclature.", "classification-taxonomy-and-systematics")
    ],
    written: [
      W(3, "short", "Define taxon, taxonomy and systematics. Name the book of Linnaeus.", "A taxon is each category or rank of classification (plural taxa). Taxonomy includes characterisation, identification, classification and nomenclature. Systematics is the systematic arrangement of organisms that also considers their evolutionary relationships. Linnaeus wrote Systema Naturae.", "classification-taxonomy-and-systematics")
    ]
  },
  "plant-kingdom": {
    mcq: [
      M(1, "Which system of classification used only a few characters, mainly vegetative features or the androecium?", "Artificial system", ["Natural system", "Phylogenetic system", "Cytotaxonomic system"], "Artificial systems (such as that of Linnaeus) used a few characters and gave equal weight to vegetative and sexual characters.", "systems-of-classification"),
      M(2, "Phylogenetic systems of classification are based on", "evolutionary relationships", ["the number of petals alone", "chemical tests alone", "the size of the plant alone"], "They assume that members of a taxon share a common ancestor.", "systems-of-classification"),
      M(3, "Which approach uses chromosome number, structure and behaviour?", "Cytotaxonomy", ["Chemotaxonomy", "Numerical taxonomy", "Artificial system"], "Cytotaxonomy uses cytological information. Chemotaxonomy uses chemical constituents and numerical taxonomy uses computers to give equal weight to every character.", "systems-of-classification")
    ],
    written: [
      W(3, "short", "Distinguish an artificial system from a natural system of classification, giving the basis of each. What does numerical taxonomy do?", "An artificial system uses only a few characters, mainly vegetative features or the androecium (Linnaeus). A natural system (Bentham and Hooker) uses natural affinities, including external and internal features such as anatomy, embryology and phytochemistry. Numerical taxonomy uses computers and gives equal importance to every character.", "systems-of-classification")
    ]
  },
  "plant-growth-and-development": {
    mcq: [
      M(1, "Development in a plant includes all the changes from", "seed germination to senescence", ["flowering to fruiting only", "root growth to stem growth only", "seed formation to dispersal only"], "Development covers everything from germination to senescence.", "differentiation-and-development"),
      M(2, "Heterophylly in cotton, coriander and larkspur is an example of", "plasticity", ["dedifferentiation", "senescence", "vernalisation"], "Plasticity is the ability of a plant to follow different pathways and give different structures, such as leaves of different shapes, depending on environment or phase of life.", "differentiation-and-development"),
      M(3, "During differentiation, a tracheary element", "loses protoplasm and gets thick walls", ["gains more protoplasm and thin walls", "starts dividing again like a meristem", "turns back into a living parenchyma"], "Cells from meristems become specialised, for example tracheary elements that lose protoplasm and develop thick walls.", "differentiation-and-development")
    ],
    written: [
      W(4, "short", "Define differentiation, dedifferentiation and redifferentiation with an example of dedifferentiation. What is plasticity?", "Differentiation is the specialisation of cells formed by meristems. Dedifferentiation is the regaining of the capacity to divide by living differentiated cells, for example interfascicular cambium and cork cambium. Redifferentiation is the loss of division capacity again by the cells formed, which then mature. Plasticity is the ability of a plant to follow different pathways to form different structures depending on environment or life phase (heterophylly).", "differentiation-and-development")
    ]
  },
  "breathing-and-exchange-of-gases": {
    mcq: [
      M(1, "The sound box of the respiratory tract is the", "larynx", ["pharynx", "trachea", "bronchus"], "The larynx is called the sound box. It opens into the trachea through the glottis.", "human-respiratory-system"),
      M(2, "The trachea is kept open by", "C-shaped cartilage rings", ["complete rings of hard bone", "spiral bands of muscle tissue", "two straight cartilage rods"], "The trachea is supported by incomplete (C-shaped) cartilage rings.", "human-respiratory-system"),
      M(3, "What is the function of the pleural fluid between the two layers of the pleura?", "It reduces friction", ["It stores oxygen for the lungs", "It makes the air warm", "It carries CO₂ in the blood"], "The double-layered pleura holds pleural fluid, which reduces friction as the lungs move.", "human-respiratory-system")
    ],
    written: [
      W(4, "short", "Trace the path of air from the external nostrils to the alveoli. Which structure covers the glottis during swallowing?", "Air passes through the external nostrils, nasal chamber, nasopharynx, larynx, trachea, primary bronchi (dividing into secondary and tertiary bronchi), bronchioles and finally the alveoli. The epiglottis, a cartilaginous flap, covers the glottis during swallowing.", "human-respiratory-system")
    ]
  },
  });
})();
