// Class 10 Science practice bank, part 7: Periodic Classification of Elements and Evolution (both formative-assessment chapters in 2026-27). Extra board-style questions for year-long practice (unreviewed draft).
(function () {
  const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    return { q, options, answer: at, explain, level };
  }
  // AR(level, assertion, reason, answer index, explanation): assertion-reason with fixed options.
  function AR(level, a, r, answer, explain) {
    return { q: "Assertion (A): " + a + "\nReason (R): " + r, options: AR_OPTS, answer, explain, level, keepOrder: true };
  }
  // W(marks, question, model answer, type?)
  function W(marks, q, a, type) {
    const o = { q, a, marks };
    if (type) o.type = type;
    return o;
  }
  StudyData.addPractice(10, "science", {
  "periodic-classification-of-elements": {
    mcq: [
      M(1, "Which scientist arranged elements in triads?", "Döbereiner", ["Mendeleev", "Moseley", "Dalton"], "Döbereiner grouped similar elements in threes."),
      M(1, "Which of these is a Döbereiner triad?", "Ca, Sr, Ba", ["Na, Mg, Al", "C, N, O", "H, He, Li"], "In Ca, Sr, Ba the middle element's mass is about the mean of the other two."),
      M(1, "Newlands compared the repeat of properties to", "the notes of a musical octave", ["the phases of the moon", "the days of a week", "the colours of a rainbow"], "Every eighth element resembled the first, as in music."),
      M(1, "The number of groups in the modern periodic table is", "18", ["7", "8", "16"], "There are 18 groups and 7 periods."),
      M(1, "The number of periods in the modern periodic table is", "7", ["8", "18", "9"], "Rows are called periods, and there are 7."),
      M(2, "Mendeleev's periodic law was based on", "atomic mass", ["atomic number", "number of neutrons", "valence electrons"], "The modern law uses atomic number instead."),
      M(2, "The element Mendeleev called eka-aluminium is now called", "gallium", ["germanium", "scandium", "indium"], "Eka-silicon is germanium, and eka-aluminium is gallium."),
      M(2, "A limitation of Mendeleev's table was that", "hydrogen could not be given a fixed place", ["it had no groups", "it showed noble gases from the start", "it used atomic number"], "Hydrogen behaves like both alkali metals and halogens."),
      M(2, "Atomic number of an element is the number of", "protons in its nucleus", ["neutrons in its nucleus", "electrons in its outer shell", "shells in the atom"], "Atomic number counts protons."),
      M(2, "An element with electronic configuration 2, 8, 1 is placed in", "Group 1, Period 3", ["Group 3, Period 1", "Group 1, Period 2", "Group 11, Period 3"], "It has one valence electron and three shells."),
      M(2, "Which element has the largest atomic size in Period 3?", "Sodium", ["Chlorine", "Silicon", "Argon"], "Size decreases across a period, so the first element is the largest."),
      M(2, "Moving down Group 1, the metallic character", "increases", ["decreases", "first rises then falls", "stays the same"], "Larger atoms lose their outer electron more easily."),
      M(2, "The valency of magnesium (atomic number 12) is", "2", ["1", "3", "12"], "Its configuration is 2, 8, 2, so it loses two electrons."),
      M(3, "The element with configuration 2, 8, 6 has a valency of", "2", ["6", "8", "1"], "It needs two electrons to complete its octet: 8 − 6 = 2."),
      M(2, "Which of the following elements belongs to the same group as chlorine?", "Bromine", ["Argon", "Sulphur", "Sodium"], "Chlorine and bromine are both halogens in Group 17."),
      M(2, "Which one is a noble gas?", "Argon", ["Chlorine", "Sulphur", "Phosphorus"], "Argon is in Group 18 and has a full outer shell."),
      M(2, "The period of an element tells us its", "number of shells", ["number of valence electrons", "atomic mass", "number of neutrons"], "The period equals the number of occupied shells."),
      M(3, "Which group has elements with valency zero?", "Group 18", ["Group 1", "Group 17", "Group 14"], "Noble gases have complete outer shells."),
      M(2, "Across a period from left to right, the non-metallic character", "increases", ["decreases", "stays the same", "disappears"], "Atoms hold their electrons more tightly and tend to gain electrons."),
      M(3, "Which of these pairs shows an element and its correct group?", "Calcium, Group 2", ["Sodium, Group 2", "Neon, Group 17", "Carbon, Group 18"], "Calcium is an alkaline earth metal in Group 2."),
      M(2, "Metalloids are placed", "along the zig-zag line between metals and non-metals", ["at the far left of the table", "in Group 1 only", "at the very top"], "They have properties of both metals and non-metals."),
      M(3, "The atomic number of an element is 13. Its group and period are", "Group 13, Period 3", ["Group 3, Period 13", "Group 13, Period 2", "Group 1, Period 3"], "Configuration is 2, 8, 3: three shells and three valence electrons."),
      AR(2, "Elements in the same group show similar chemical properties.", "They have the same number of valence electrons.", 0, "Chemical behaviour depends on the valence electrons."),
      AR(2, "Atomic size decreases from left to right across a period.", "The number of shells increases across a period.", 2, "A is true, as the nuclear charge increases while the shell number stays constant. R is false."),
      AR(3, "Mendeleev left gaps in his table.", "He thought some elements were still undiscovered.", 0, "He predicted their properties, as with eka-aluminium and eka-silicon.")
    ],
    written: [
      W(2, "State Döbereiner's law of triads with one example.", "Döbereiner arranged similar elements in groups of three, so that the **atomic mass of the middle element is about the mean** of the first and third. Example: **Li, Na, K** or **Cl, Br, I**."),
      W(2, "Give two limitations of Mendeleev's periodic table.", "(1) The position of **hydrogen** could not be fixed. (2) **Isotopes** had no separate place, and elements were not always in the order of increasing atomic mass (e.g. cobalt and nickel)."),
      W(2, "What is the modern periodic law?", "The modern periodic law states that the **properties of elements are a periodic function of their atomic numbers**."),
      W(3, "Explain how atomic size changes across a period and down a group.", "**Across a period**, the number of shells stays the same but the **nuclear charge increases**, so electrons are pulled closer and size **decreases**. **Down a group**, a new shell is added for each element, so the size **increases**."),
      W(3, "An element X has atomic number 12. Write its electronic configuration and find its group, period and valency.", "Configuration: **2, 8, 2**. It has **3 shells**, so Period 3. It has **2 valence electrons**, so Group 2. It loses 2 electrons, so valency is **2** (magnesium)."),
      W(3, "Why do elements in Group 17 have similar chemical properties? Name two of them.", "All of them have **7 valence electrons**, so each tends to gain one electron and has valency 1. Two such elements are **chlorine and bromine**."),
      W(4, "How did the modern periodic table remove some defects of Mendeleev's table?", "The modern table uses **atomic number** instead of atomic mass. This puts elements in a fixed order, so **cobalt and nickel** and similar cases are no longer a problem, and isotopes (same atomic number) take the **same place**. It also arranges elements by electronic configuration into **18 groups and 7 periods**, giving a clearer pattern of properties."),
      W(4, "Compare the metallic character of elements across Period 3 and down Group 1. Give reasons.", "Across Period 3, metallic character **decreases** from sodium to chlorine, as atoms hold their outer electrons more tightly and find it harder to lose them. Down Group 1, it **increases** from lithium to potassium, because the outer electron is farther from the nucleus and is lost more easily."),
      W(5, "Describe the contribution of Newlands and Mendeleev to the classification of elements, and one limitation of each.", "**Newlands** arranged elements by increasing atomic mass and noticed that every **eighth element** repeated properties, calling it the Law of Octaves. It worked only up to **calcium** and forced unlike elements together. **Mendeleev** arranged the 63 known elements by atomic mass into groups and periods, **left gaps** for undiscovered elements and predicted eka-aluminium and eka-silicon. Its limitation was the **unclear position of hydrogen** and the order of some elements by mass."),
      W(4, "Case study: Elements A, B and C have atomic numbers 11, 12 and 17. (i) Write the electronic configuration of each. (ii) Which has the largest atomic size? (iii) Which is most non-metallic?", "(i) A: 2, 8, 1; B: 2, 8, 2; C: 2, 8, 7.\n(ii) All are in Period 3, and size decreases across the period, so **A (sodium)** is the largest.\n(iii) **C (chlorine)** is most non-metallic, because it has 7 valence electrons and easily gains one.", "case")
    ]
  },
  "evolution": {
    mcq: [
      M(1, "Which of these is an inherited trait?", "Colour of the eyes", ["A cut on the hand", "A tanned skin from sun", "Being good at cycling"], "Inherited traits pass through genes in germ cells."),
      M(1, "Which of these is an acquired trait?", "A scar from an accident", ["Skin colour of a child at birth", "Blood group inherited at birth", "Height passed down from parents"], "Acquired traits are gained during life."),
      M(1, "The formation of new species is called", "speciation", ["variation", "fossilisation", "pollination"], "Speciation produces new species."),
      M(1, "Fossils are", "preserved remains of ancient organisms", ["living plants in a museum", "rocks that move slowly", "dried leaves from forests"], "Fossils are found mostly in rocks."),
      M(2, "Why are acquired traits not passed to the next generation?", "They do not change the DNA of germ cells", ["They are always harmful", "They only occur in plants", "They disappear within a day"], "Only changes in germ-cell DNA are inherited."),
      M(2, "A barrier like a mountain that divides a population is an example of", "geographical isolation", ["artificial selection", "sexual reproduction", "fossil dating"], "It stops groups from interbreeding."),
      M(2, "The forelimbs of a frog, lizard, bird and human are", "homologous organs", ["analogous organs", "fossil organs", "artificial organs"], "Same basic design but different functions."),
      M(2, "The wings of an insect and the wings of a bird are", "analogous organs", ["homologous organs", "vestigial organs", "organs of a single ancestor"], "They have a different origin but the same function."),
      M(2, "Archaeopteryx is regarded as a link between", "reptiles and birds", ["fish and reptiles", "mammals and birds", "amphibians and mammals"], "It had feathers but also teeth and claws."),
      M(2, "Which method gives a fairly exact age of a fossil?", "Carbon-14 dating", ["Counting its colours", "Measuring its weight alone", "Comparing it with a living animal"], "The ratio of carbon isotopes shows the age."),
      M(2, "When we dig into rock layers, fossils found deeper are generally", "older", ["more recent", "the same age", "never found"], "Deeper layers were laid down earlier."),
      M(2, "Feathers in some dinosaurs were probably meant for", "keeping warm", ["flying", "catching prey", "attracting rain"], "Later, birds used them for flight."),
      M(2, "Broccoli, cauliflower and kale are all developed from", "wild cabbage", ["wild mustard seeds", "a hybrid of potato and tomato", "a wild tree"], "People selected different features, an example of artificial selection."),
      M(2, "Which statement is correct about evolution?", "It has branches and no fixed goal", ["It always makes organisms better and better", "It stops once humans have appeared", "It is complete within one generation"], "Evolution is not progress."),
      M(2, "Where did the earliest Homo sapiens originate?", "Africa", ["Australia", "North America", "Europe"], "They later spread to other continents."),
      M(3, "A chance change in gene frequency in a small population is called", "genetic drift", ["natural selection", "artificial selection", "gene therapy"], "It is random, not guided by usefulness."),
      M(3, "Which is the best evidence that organisms have a common ancestor?", "Homologous organs", ["Analogous organs of insects", "Acquired traits of parents", "Living in the same habitat"], "Same basic design suggests common origin."),
      M(3, "In a population of beetles on green bushes, red beetles are eaten more than green ones. Over generations,", "green beetles become more common", ["red beetles become more common", "all beetles turn red", "beetles stop reproducing"], "Natural selection favours the better camouflaged colour."),
      M(2, "Simple eye-like spots found in flatworms suggest that complex eyes", "evolved in small steps", ["appeared suddenly", "were created by use", "are not related to simple eyes"], "Complex organs develop gradually."),
      M(2, "Which of the following is NOT a factor in speciation?", "Eating a balanced diet", ["Genetic drift", "Natural selection", "Geographical isolation"], "Diet changes the individual but not the species' genes."),
      M(2, "The classification of living things on the basis of similarities reflects", "their evolutionary relationship", ["only their size", "only their colour", "their habitat alone"], "More shared traits mean closer relationship."),
      M(3, "Which of the following can be used to trace the movement of early humans?", "DNA studies", ["Weather records", "Colour of clothes", "Names of cities"], "DNA, fossils and tools help to trace migrations."),
      AR(2, "Acquired traits are not inherited.", "They do not change the DNA of the germ cells.", 0, "Only a change in germ-cell DNA can be passed on."),
      AR(2, "Evolution leads to better and better organisms in every case.", "Evolution has no fixed goal and only produces branching diversity.", 3, "A is false, since evolution is not progress. R is true."),
      AR(3, "The wings of a bat and a bird are analogous organs.", "They have different origin but the same function.", 0, "Analogous organs share function, not origin.")
    ],
    written: [
      W(2, "Distinguish between acquired and inherited traits.", "**Inherited traits** pass from parents to offspring through the DNA of germ cells, e.g. eye colour. **Acquired traits** are gained during life and affect only body cells, so they are not passed on, e.g. a scar."),
      W(2, "What is speciation?", "**Speciation** is the formation of a **new species** from an existing species, when groups become so different that they can no longer interbreed."),
      W(2, "What are fossils? How is their age estimated?", "Fossils are **preserved remains or impressions** of organisms that lived long ago. Age is estimated by the **depth** of the rock layer (relative dating) and by the ratio of isotopes such as **carbon-14**."),
      W(3, "Write three factors that can lead to speciation.", "(1) **Natural selection**: useful variations are passed on more. (2) **Genetic drift**: chance changes in gene frequency in a small population. (3) **Geographical isolation**: a barrier prevents interbreeding, so groups drift apart."),
      W(3, "Differentiate between homologous and analogous organs with examples.", "**Homologous organs** have the same basic structure but different functions, e.g. forelimbs of a human and a bird, showing common ancestry. **Analogous organs** have different structure and origin but similar function, e.g. wings of a bat and a bird."),
      W(3, "How do feathers in dinosaurs and birds show evolution in stages?", "Some dinosaurs had **feathers**, probably for **warmth**, and could not fly. Later, descendants used feathers for **flight**. So a structure that evolved for one function was later adapted for another."),
      W(4, "Explain how Archaeopteryx supports the idea that birds evolved from reptiles.", "Archaeopteryx has **feathers and wings like a bird**, but also **teeth, claws and a long tail like a reptile**. This mix of features shows an **intermediate form**, so birds are believed to have evolved from reptile-like ancestors."),
      W(4, "'Evolution should not be equated with progress.' Explain with reasons.", "Evolution produces **branching diversity** and not a ladder. Change helps a species survive in its **own environment** but has no fixed goal. **Simple forms such as bacteria** have survived for very long, and humans are only one branch among many. So we cannot call any organism more 'advanced' as the final aim of evolution."),
      W(5, "Describe how a new species may arise from an existing population by geographical isolation.", "A **barrier** such as a mountain or river separates one population into two groups. They can no longer breed together, so **gene flow stops**. Each group lives in a different environment, so **natural selection** favours different traits, and **genetic drift** adds random changes. Over many generations the two groups differ so much that they **cannot interbreed**, even if they meet again. They are then separate **species**."),
      W(4, "Case study: Wild cabbage has been bred by farmers into broccoli, cauliflower, kale and kohlrabi. (i) What process is this? (ii) How does it differ from natural selection? (iii) What does it show?", "(i) It is **artificial selection**.\n(ii) In it, **humans choose** which plants to breed for the traits they want; in natural selection, the **environment** decides which organisms survive.\n(iii) It shows that **selection acting on variation over generations** can produce large changes from one ancestor.", "case")
    ]
  }
  });
})();
