// Class 9 Science practice bank, part 2: Atom, Matter, Sound, Reproduction, Classification, Earth as a System.
(function () {
  const AR = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  StudyData.addPractice(9, "science", {
  "journey-inside-the-atom": {
    mcq: [
      { q: "The neutron was discovered by:", options: ["Rutherford", "Thomson", "Chadwick", "Bohr"], answer: 2, explain: "James Chadwick discovered the neutron in 1932.", level: 1 },
      { q: "The atomic number of an element is the number of:", options: ["protons in its nucleus", "neutrons in its nucleus", "nucleons", "electron shells"], answer: 0, explain: "Atomic number Z = number of protons.", level: 1 },
      { q: "The maximum number of electrons that the L shell can hold is:", options: ["2", "8", "18", "32"], answer: 1, explain: "2n² with n = 2 gives 8.", level: 1 },
      { q: "Isotopes of an element have the same:", options: ["mass number", "number of neutrons", "physical properties", "atomic number"], answer: 3, explain: "Isotopes differ in neutrons and hence in mass number, but have the same number of protons.", level: 1 },
      { q: "The valency of magnesium (2, 8, 2) is:", options: ["1", "2", "3", "0"], answer: 1, explain: "Magnesium loses two electrons to get a stable octet.", level: 1 },
      { q: "The number of neutrons in ²⁷₁₃Al is:", options: ["13", "27", "40", "14"], answer: 3, explain: "Neutrons = A − Z = 27 − 13 = 14.", level: 2 },
      { q: "In the gold foil experiment a few α-particles bounced back. This showed that:", options: ["electrons are very heavy", "an atom has a small, dense, positively charged centre", "an atom is a solid sphere", "neutrons repel α-particles"], answer: 1, explain: "Only a very small, dense and positive nucleus could turn heavy α-particles back.", level: 2 },
      {
        q: "Assertion (A): Neon is chemically unreactive.\nReason (R): The outer shell of neon is complete with 8 electrons.",
        options: AR,
        answer: 0, explain: "A full octet makes an atom stable and unreactive.", level: 2, keepOrder: true
      },
      { q: "An atom X has 17 protons, 18 neutrons and 17 electrons. Its mass number and valency are:", options: ["35 and 7", "17 and 1", "35 and 1", "18 and 7"], answer: 2, explain: "A = 17 + 18 = 35; configuration 2, 8, 7 gives valency 1.", level: 2 },
      { q: "Which pair of atoms are isobars?", options: ["¹²C and ¹⁴C", "⁴⁰₂₀Ca and ⁴⁰₁₈Ar", "³⁵Cl and ³⁷Cl", "¹H and ²H"], answer: 1, explain: "Isobars have different atomic numbers but the same mass number (40).", level: 2 },
      { q: "An element has two isotopes of mass 10 u (20 %) and 11 u (80 %). Its average atomic mass is:", options: ["10.2 u", "10.5 u", "11.0 u", "10.8 u"], answer: 3, explain: "(10 × 0.20) + (11 × 0.80) = 2.0 + 8.8 = 10.8 u.", level: 3 },
      {
        q: "Assertion (A): Isotopes of an element have the same chemical properties.\nReason (R): Isotopes of an element have different numbers of neutrons.",
        options: AR,
        answer: 1, explain: "Both are true, but the chemical behaviour is the same because the electron arrangement is the same, not because the neutrons differ.", level: 3, keepOrder: true
      },
      { q: "A neutral atom has 19 protons and mass number 39. It loses one electron. The resulting ion has:", options: ["+1 charge and 20 neutrons", "−1 charge and 20 neutrons", "+1 charge and 19 neutrons", "no charge and 20 neutrons"], answer: 0, explain: "Losing an electron leaves 19 protons against 18 electrons, so charge +1. Neutrons = 39 − 19 = 20.", level: 3 },
      { q: "An atom has mass number 28 and 14 neutrons. Its valency is:", options: ["14", "4", "2", "8"], answer: 1, explain: "Z = 28 − 14 = 14, configuration 2, 8, 4, so the valency is 4.", level: 3 }
    ],
    written: [
      { q: "What is meant by the mass number of an atom?", a: "The total number of protons and neutrons (nucleons) in the nucleus of an atom.", marks: 1 },
      { q: "Name an isotope used in the treatment of cancer.", a: "Cobalt-60.", marks: 1 },
      { q: "Define isotopes and give an example.", a: "Isotopes are atoms of the same element with the same atomic number but different mass numbers.\nExample: protium, deuterium and tritium of hydrogen (or carbon-12, -13, -14).", marks: 2 },
      { q: "Write the electronic configuration of calcium (Z = 20) and state its valency.", a: "Configuration: 2, 8, 8, 2.\nIt loses its 2 outer electrons to become stable, so the valency is 2.", marks: 2 },
      { q: "Copper has two isotopes, ⁶³Cu (70 %) and ⁶⁵Cu (30 %). Find its average atomic mass.", a: "Average = (63 × 0.70) + (65 × 0.30).\n= 44.1 + 19.5.\n= 63.6 u.", marks: 3 },
      { q: "For ¹⁹₉F state the number of protons, neutrons and electrons, the electronic configuration and the valency.", a: "Protons = 9 and electrons = 9.\nNeutrons = 19 − 9 = 10.\nConfiguration 2, 7; it needs one electron to complete the octet, so the valency is 1.", marks: 3 },
      { q: "State the observations of Rutherford's α-scattering experiment and the conclusions drawn.", a: "Observations: (1) most α-particles passed straight through; (2) some were deflected through large angles; (3) a very few bounced back.\nConclusions: the atom is mostly empty space, and has a small, dense, positively charged nucleus where the mass is concentrated.", marks: 3 },
      { q: "Compare the atomic models of Thomson, Rutherford and Bohr, and state one limitation of Rutherford's model.", a: "Thomson: electrons embedded in a positively charged sphere.\nRutherford: electrons revolve around a small, dense, positive nucleus (planetary model), found from the gold foil experiment.\nBohr: electrons move in fixed energy levels (shells K, L, M…) and the atom is stable.\nLimitation of Rutherford's model: it could not explain why electrons revolving around the nucleus do not lose energy and fall into it (the stability of the atom).\nChadwick later discovered the neutron in 1932.", marks: 5 },
      { q: "Explain how electrons are arranged in shells. Give the configurations and valencies of sodium, chlorine and neon.", a: "(1) Maximum electrons in the nth shell = 2n²: K = 2, L = 8, M = 18.\n(2) Shells are filled in order K, L, M…, and the outermost shell holds at most 8.\n(3) Sodium (Z = 11): 2, 8, 1; valency 1.\n(4) Chlorine (Z = 17): 2, 8, 7; valency 1.\n(5) Neon (Z = 10): 2, 8; full outer shell, so valency 0.", marks: 5 },
      { q: "Case study: The table gives three species: P has atomic number 17 and mass number 35; Q has atomic number 18 and mass number 40; R has atomic number 20 and mass number 40.\n(i) Which two are isobars?\n(ii) How many neutrons does P have?\n(iii) Write the electronic configuration and valency of R.", a: "(i) Q and R, since both have mass number 40 but different atomic numbers.\n(ii) Neutrons in P = 35 − 17 = 18.\n(iii) R (Z = 20): 2, 8, 8, 2; valency 2.", marks: 4, type: "case" }
    ]
  },
  "atomic-foundations-of-matter": {
    mcq: [
      { q: "The law of conservation of mass was stated by:", options: ["Lavoisier", "Proust", "Dalton", "Rutherford"], answer: 0, explain: "Lavoisier showed that mass is neither created nor destroyed in a chemical reaction.", level: 1 },
      { q: "In water the ratio of hydrogen to oxygen by mass is:", options: ["1 : 16", "1 : 8", "2 : 1", "8 : 1"], answer: 1, explain: "2 g of hydrogen combines with 16 g of oxygen, so H : O = 1 : 8.", level: 1 },
      { q: "A bond formed by sharing of electrons is called:", options: ["ionic", "metallic", "covalent", "hydrogen"], answer: 2, explain: "Non-metal atoms share electrons to form covalent bonds.", level: 1 },
      { q: "The molecular mass of CO₂ is (C = 12, O = 16):", options: ["44 u", "28 u", "32 u", "60 u"], answer: 0, explain: "12 + 2 × 16 = 44 u.", level: 1 },
      { q: "A cation is an ion that is:", options: ["neutral", "negatively charged", "a molecule", "positively charged"], answer: 3, explain: "An atom that loses electrons becomes a positive ion, a cation.", level: 1 },
      { q: "The formula of aluminium oxide (Al³⁺, O²⁻) is:", options: ["AlO", "Al₂O₃", "Al₃O₂", "AlO₃"], answer: 1, explain: "Criss-crossing the charges 3 and 2 gives Al₂O₃.", level: 2 },
      { q: "12 g of carbon combines with 32 g of oxygen to give CO₂. The mass of CO₂ obtained from 6 g of carbon (with enough oxygen) is:", options: ["11 g", "16.5 g", "22 g", "44 g"], answer: 2, explain: "6 g is half of 12 g, so CO₂ is half of 44 g = 22 g.", level: 2 },
      {
        q: "Assertion (A): Sodium chloride conducts electricity in the molten state but not as a solid.\nReason (R): In the molten state the ions are free to move.",
        options: AR,
        answer: 0, explain: "In the solid the ions are locked in the crystal; melting frees them to carry charge.", level: 2, keepOrder: true
      },
      { q: "Two samples of water, one from a river and one from rain, are analysed. 36 g of either sample contains what mass of oxygen?", options: ["32 g", "4 g", "16 g", "36 g"], answer: 0, explain: "By the law of definite proportions H : O = 1 : 8 in any water sample, so oxygen = 8/9 of 36 g = 32 g.", level: 2 },
      { q: "The formula unit mass of MgCl₂ (Mg = 24, Cl = 35.5 u) is:", options: ["59.5 u", "95 u", "60 u", "71 u"], answer: 1, explain: "24 + 2 × 35.5 = 95 u. Forgetting the subscript gives 59.5 u.", level: 2 },
      { q: "The formula unit mass of Ca(OH)₂ (Ca = 40, O = 16, H = 1 u) is:", options: ["57 u", "58 u", "91 u", "74 u"], answer: 3, explain: "40 + 2 × (16 + 1) = 74 u.", level: 3 },
      {
        q: "Assertion (A): Covalent compounds generally have low melting points.\nReason (R): Covalent compounds consist of ions held together in a strong three-dimensional lattice.",
        options: AR,
        answer: 2, explain: "A is true, but R is false: that description fits ionic compounds. Covalent compounds are made of molecules.", level: 3, keepOrder: true
      },
      { q: "Magnesium and oxygen combine in the mass ratio 3 : 2 to form magnesium oxide. When 6 g of magnesium burns completely, the mass of oxide formed is:", options: ["6 g", "10 g", "16 g", "4 g"], answer: 1, explain: "Oxygen needed = 6 × 2/3 = 4 g; oxide = 6 + 4 = 10 g.", level: 3 },
      { q: "Methane from two different sources shows carbon and hydrogen in the mass ratio 3 : 1. A 20 g sample of methane contains how much carbon?", options: ["5 g", "12 g", "15 g", "16 g"], answer: 2, explain: "Carbon is 3/4 of the total: 3/4 × 20 = 15 g.", level: 3 }
    ],
    written: [
      { q: "State the law of definite proportions.", a: "A chemical compound always contains the same elements combined in a fixed ratio by mass, whatever its source.", marks: 1 },
      { q: "What is a formula unit?", a: "The simplest whole-number ratio of ions in an ionic compound, for example NaCl or CaCl₂; ionic compounds have no discrete molecules.", marks: 1 },
      { q: "Write the formulae of (a) calcium chloride and (b) sodium sulphate.", a: "(a) Ca²⁺ and Cl⁻ give CaCl₂.\n(b) Na⁺ and SO₄²⁻ give Na₂SO₄.", marks: 2 },
      { q: "Distinguish between ionic and covalent bonds in two points.", a: "(1) An ionic bond is formed by transfer of electrons, giving cations and anions; a covalent bond is formed by sharing of electrons.\n(2) Ionic compounds are usually hard, brittle and of high melting point; covalent compounds usually have low melting points and are poor conductors.", marks: 2 },
      { q: "Calculate the molecular mass of (a) NH₃, (b) CH₄ and (c) HNO₃ (H = 1, C = 12, N = 14, O = 16 u).", a: "(a) NH₃ = 14 + 3 × 1 = 17 u.\n(b) CH₄ = 12 + 4 × 1 = 16 u.\n(c) HNO₃ = 1 + 14 + 3 × 16 = 63 u.", marks: 3 },
      { q: "How does Dalton's atomic theory explain the law of conservation of mass?", a: "(1) Atoms are neither created nor destroyed in a chemical reaction.\n(2) A reaction only rearranges atoms into new combinations.\n(3) The number and mass of atoms are unchanged, so the total mass of reactants equals that of the products.", marks: 3 },
      { q: "State three properties of ionic compounds.", a: "(1) Usually hard and brittle, with high melting points.\n(2) Usually soluble in water.\n(3) Conduct electricity when molten or dissolved (ions are free to move), not as solids.", marks: 3 },
      { q: "Explain the formation of sodium chloride by the transfer of electrons.", a: "(1) Sodium has configuration 2, 8, 1 and chlorine has 2, 8, 7.\n(2) Sodium loses one electron and becomes Na⁺ (2, 8), a stable octet.\n(3) Chlorine gains that electron and becomes Cl⁻ (2, 8, 8).\n(4) Oppositely charged ions attract strongly: an ionic bond.\n(5) The ions form a 3-D crystal, so the formula unit NaCl is used instead of a molecule.", marks: 5 },
      { q: "Write the formula of aluminium sulphate using the criss-cross method and calculate its formula unit mass (Al = 27, S = 32, O = 16 u).", a: "Ions: Al³⁺ and SO₄²⁻.\nCriss-cross the charges: Al₂(SO₄)₃.\nMass of 2 Al = 2 × 27 = 54 u.\nMass of one SO₄ = 32 + 4 × 16 = 96 u; three of them = 288 u.\nFormula unit mass = 54 + 288 = 342 u.", marks: 5 },
      { q: "Case study: In an experiment 3 g of magnesium burns completely in oxygen to give 5 g of magnesium oxide.\n(i) How much oxygen has combined?\n(ii) What mass of oxide is formed from 12 g of magnesium?\n(iii) How much magnesium and oxygen are present in 30 g of the oxide?", a: "(i) Oxygen = 5 − 3 = 2 g (law of conservation of mass).\n(ii) Mg : O = 3 : 2, so 12 g Mg needs 8 g O; oxide = 20 g (law of definite proportions).\n(iii) In 30 g of oxide, Mg = 3/5 × 30 = 18 g and oxygen = 2/5 × 30 = 12 g.", marks: 4, type: "case" }
    ]
  },
  "sound-waves-characteristics-and-applications": {
    mcq: [
      { q: "Sound cannot travel through:", options: ["air", "a vacuum", "water", "steel"], answer: 1, explain: "Sound needs a material medium.", level: 1 },
      { q: "The unit of frequency is:", options: ["metre", "second", "newton", "hertz"], answer: 3, explain: "One hertz is one oscillation per second.", level: 1 },
      { q: "The audible range of the human ear is:", options: ["20 Hz to 20 kHz", "2 Hz to 2 kHz", "200 Hz to 200 kHz", "20 kHz to 200 kHz"], answer: 0, explain: "Below 20 Hz is infrasonic, above 20 kHz is ultrasonic.", level: 1 },
      { q: "The pitch of a sound depends on its:", options: ["amplitude", "speed", "frequency", "medium only"], answer: 2, explain: "Pitch is how the ear perceives frequency.", level: 1 },
      { q: "Sound travels fastest in a:", options: ["gas", "vacuum", "liquid", "solid"], answer: 3, explain: "Speed is greatest in solids (steel ≈ 5000 m s⁻¹) and least in gases.", level: 1 },
      { q: "A wave has frequency 500 Hz and wavelength 0.68 m. Its speed is:", options: ["340 m s⁻¹", "735 m s⁻¹", "170 m s⁻¹", "0.00136 m s⁻¹"], answer: 0, explain: "v = νλ = 500 × 0.68 = 340 m s⁻¹.", level: 2 },
      { q: "An echo is heard 0.5 s after a shout (speed of sound 340 m s⁻¹). The reflecting wall is at a distance of:", options: ["170 m", "42.5 m", "85 m", "340 m"], answer: 2, explain: "Total path = 340 × 0.5 = 170 m, so the distance is half of it: 85 m.", level: 2 },
      {
        q: "Assertion (A): Sound cannot travel in a vacuum.\nReason (R): Sound needs particles of a medium to form compressions and rarefactions.",
        options: AR,
        answer: 0, explain: "A vacuum has no particles to carry the disturbance.", level: 2, keepOrder: true
      },
      { q: "A bat emits an ultrasonic pulse and hears the echo from an insect after 0.02 s (speed of sound 340 m s⁻¹). The insect is about ___ away.", options: ["3.4 m", "6.8 m", "34 m", "0.34 m"], answer: 0, explain: "Distance = 340 × 0.02 / 2 = 3.4 m.", level: 2 },
      { q: "Which change will reduce reverberation in a large hall?", options: ["Smooth bare walls", "Curtains and cushioned seats", "A marble floor", "Polished glass panels"], answer: 1, explain: "Soft materials absorb sound, so there are fewer multiple reflections.", level: 2 },
      { q: "A sound wave has a time period of 0.004 s and a speed of 340 m s⁻¹. Its wavelength is:", options: ["0.74 m", "1.36 m", "13.6 m", "85 m"], answer: 1, explain: "λ = vT = 340 × 0.004 = 1.36 m.", level: 3 },
      {
        q: "Assertion (A): Infrasound can be used to detect earthquakes.\nReason (R): Infrasonic waves have frequencies above 20 kHz.",
        options: AR,
        answer: 2, explain: "A is true. R is false: infrasonic waves have frequencies below 20 Hz.", level: 3, keepOrder: true
      },
      { q: "A ship's sonar signal returns after 4 s. The speed of sound in water is 1500 m s⁻¹. The depth of the sea bed is:", options: ["6000 m", "1500 m", "750 m", "3000 m"], answer: 3, explain: "Total path = 1500 × 4 = 6000 m, so depth = 3000 m.", level: 3 },
      { q: "A 440 Hz note passes from air (340 m s⁻¹) into water (1480 m s⁻¹). Which statement is correct?", options: ["Frequency increases; wavelength is unchanged", "Frequency and wavelength both decrease", "Frequency stays 440 Hz; wavelength increases", "Frequency decreases; wavelength increases"], answer: 2, explain: "Frequency is fixed by the source. Since v = νλ, a greater speed gives a longer wavelength.", level: 3 }
    ],
    written: [
      { q: "What are compressions and rarefactions?", a: "Compressions are regions of high density (particles close together) and rarefactions are regions of low density in a sound wave.", marks: 1 },
      { q: "State the audible range of the human ear.", a: "20 Hz to 20 kHz.", marks: 1 },
      { q: "Calculate the wavelength of a 256 Hz sound wave in air (speed 340 m s⁻¹).", a: "λ = v/ν = 340/256.\nλ ≈ 1.33 m.", marks: 2 },
      { q: "Write two applications of ultrasound.", a: "(1) Ultrasonography for imaging inside the body (also breaking kidney stones).\n(2) Cleaning machine parts, or detecting flaws in metal blocks (any two).", marks: 2 },
      { q: "State the condition for hearing a distinct echo and find the minimum distance to the reflector (speed 340 m s⁻¹).", a: "(1) The reflected sound must reach the ear at least 0.1 s after the original.\n(2) Distance travelled by the sound = 340 × 0.1 = 34 m.\n(3) This is to the reflector and back, so the minimum distance is 17 m.", marks: 3 },
      { q: "A ship sends an ultrasonic signal and receives the echo from the sea bed after 2.4 s. If the speed of sound in sea water is 1500 m s⁻¹, find the depth of the sea.", a: "Time to reach the bed = 2.4/2 = 1.2 s.\nDepth = speed × time = 1500 × 1.2.\nDepth = 1800 m.", marks: 3 },
      { q: "What is reverberation? Why is it a problem in a large hall and how can it be reduced?", a: "(1) Reverberation is the persistence of sound due to multiple reflections in a large hall.\n(2) It makes speech unclear because sounds overlap.\n(3) It is reduced by curtains, upholstered chairs and sound-absorbing panels.", marks: 3 },
      { q: "Describe how a sound wave travels through air. Define frequency, wavelength and amplitude, and write the relation among speed, frequency and wavelength.", a: "(1) A vibrating object pushes and pulls on the nearby air, creating alternate compressions and rarefactions that move forward; energy travels, not matter.\n(2) Frequency: number of oscillations per second (Hz).\n(3) Wavelength: distance between two successive compressions or rarefactions.\n(4) Amplitude: maximum change in density; larger amplitude means a louder sound.\n(5) v = νλ.", marks: 5 },
      { q: "A person standing between two cliffs claps. He hears the first echo after 2 s and the second after 3 s. If the speed of sound is 340 m s⁻¹, find the distance between the cliffs.", a: "First cliff: the sound travels there and back in 2 s, so d₁ = 340 × 2/2 = 340 m.\nSecond cliff: d₂ = 340 × 3/2 = 510 m.\nThe person is between the cliffs, so the distance = d₁ + d₂.\nDistance = 340 + 510 = 850 m.\nAnswer: 850 m.", marks: 5 },
      { q: "Case study: A dolphin emits clicks of frequency 100 kHz. The speed of sound in sea water is 1500 m s⁻¹. A click reflected from a fish returns to the dolphin after 0.04 s.\n(i) Can humans hear the clicks?\n(ii) Find the wavelength of the click.\n(iii) How far is the fish?", a: "(i) No, 100 kHz is above 20 kHz, so it is ultrasonic.\n(ii) λ = v/ν = 1500/100 000 = 0.015 m (1.5 cm).\n(iii) Distance = 1500 × 0.04/2 = 30 m.", marks: 4, type: "case" }
    ]
  },
  "reproduction-how-life-continues": {
    mcq: [
      { q: "Reproduction with only one parent that gives genetically identical offspring is:", options: ["asexual", "sexual", "pollination", "fertilisation only"], answer: 0, explain: "Asexual reproduction needs one parent and produces identical offspring.", level: 1 },
      { q: "Bryophyllum can reproduce vegetatively from its:", options: ["stem", "root", "leaf", "seed"], answer: 2, explain: "New plants arise from buds on the leaf margins.", level: 1 },
      { q: "Transfer of pollen from an anther to a stigma is:", options: ["fertilisation", "pollination", "germination", "ovulation"], answer: 1, explain: "Pollination is the transfer of pollen; fertilisation is the fusion of gametes.", level: 1 },
      { q: "After fertilisation in a flower, the ovary develops into the:", options: ["seed", "embryo", "petal", "fruit"], answer: 3, explain: "The ovule becomes the seed and the ovary becomes the fruit.", level: 1 },
      { q: "In humans fertilisation normally takes place in the:", options: ["uterus", "vagina", "oviduct", "ovary"], answer: 2, explain: "Sperm meet the egg in the oviduct and form a zygote.", level: 1 },
      { q: "Which method helps prevent both pregnancy and sexually transmitted infections?", options: ["Condom", "Oral pills", "Copper-T", "Tubectomy"], answer: 0, explain: "A condom acts as a barrier, so it protects against STIs as well.", level: 2 },
      { q: "Meiosis is essential for gamete formation because it:", options: ["makes the gametes larger", "keeps the chromosome number constant by halving it in gametes", "copies DNA faster", "makes cells identical to the parent"], answer: 1, explain: "Without halving, the chromosome number would double in every generation.", level: 2 },
      {
        q: "Assertion (A): Wind-pollinated flowers produce a large amount of light pollen.\nReason (R): The chance of a pollen grain reaching a stigma by wind is low.",
        options: AR,
        answer: 0, explain: "Large quantities make up for the low chance of reaching the stigma.", level: 2, keepOrder: true
      },
      { q: "A farmer wants new sugarcane plants identical to her best plant. The best method is to:", options: ["cross-pollinate it with a neighbour", "sow its seeds", "spray growth hormone", "plant cuttings of its stem"], answer: 3, explain: "Vegetative propagation by stem cuttings gives identical plants.", level: 2 },
      { q: "Fish lay thousands of eggs, whereas birds lay only a few. This is because in fish:", options: ["the young are fed by the mother", "fertilisation is external and survival of the young is low", "the eggs have a thick shell", "fish are mammals"], answer: 1, explain: "External fertilisation in water and poor survival need very large numbers of eggs.", level: 2 },
      { q: "The body cells of a plant have 24 chromosomes. The number in its gametes and in its zygote respectively is:", options: ["24 and 24", "12 and 12", "24 and 48", "12 and 24"], answer: 3, explain: "Meiosis halves the number in gametes (12); fertilisation restores the full number (24).", level: 3 },
      { q: "Which is the correct order of events in a flowering plant?", options: ["Fertilisation, pollination, pollen tube growth, seed formation", "Pollen tube growth, seed formation, pollination, fertilisation", "Pollination, pollen tube growth through the style, fertilisation, seed formation", "Seed formation, pollination, fertilisation, pollen tube growth"], answer: 2, explain: "The pollen tube grows down the style to the ovule; fertilisation then leads to the seed.", level: 3 },
      {
        q: "Assertion (A): Rhizopus reproduces by seeds.\nReason (R): Rhizopus forms spores in sacs on its hyphae.",
        options: AR,
        answer: 3, explain: "A is false because fungi do not form seeds. R is true: Rhizopus reproduces by spores.", level: 3, keepOrder: true
      },
      { q: "In a woman whose egg has been fertilised this month, the thickened uterine lining:", options: ["remains thick and the embryo implants in it", "is shed as usual", "moves into the oviduct", "is absorbed by the ovary"], answer: 0, explain: "The lining is shed (menstruation) only if the egg is not fertilised; otherwise the embryo implants in it.", level: 3 }
    ],
    written: [
      { q: "What is vegetative propagation? Give one example.", a: "Growth of new plants from vegetative parts such as stems, roots or leaves, without seeds. Example: potato, ginger, sugarcane or Bryophyllum.", marks: 1 },
      { q: "Name two methods used by farmers for large-scale production of desired plants.", a: "Any two of cutting, grafting, layering and tissue culture.", marks: 1 },
      { q: "Differentiate between self-pollination and cross-pollination.", a: "In self-pollination pollen is transferred to the stigma of the same flower or the same plant.\nIn cross-pollination pollen is transferred to a flower of another plant of the same kind, which brings variation.", marks: 2 },
      { q: "Why do fish and frogs lay many more eggs than lizards and birds?", a: "Fish and frogs have external fertilisation in water, where eggs and young are easily lost to predators and the environment.\nSo survival is low, and thousands of eggs are laid to ensure that some young survive.", marks: 2 },
      { q: "Describe the events from pollination to the formation of the fruit and seed.", a: "(1) Pollen lands on the stigma and the pollen grain forms a pollen tube that grows through the style to the ovule.\n(2) The male gamete fuses with the egg in the ovule (fertilisation) to form a zygote, which becomes the embryo.\n(3) The ovule develops into the seed and the ovary into the fruit.", marks: 3 },
      { q: "Explain the importance of meiosis in sexual reproduction.", a: "(1) Meiosis halves the chromosome number in gametes.\n(2) At fertilisation the full number is restored, so the number remains constant in every generation.\n(3) Together with the mixing of genes of two parents it creates variation, which helps species adapt and survive.", marks: 3 },
      { q: "Name three methods of preventing pregnancy. Which of them also protect against STIs? What does the law say about prenatal sex determination?", a: "(1) Methods: condoms, oral pills, copper-T (IUD) and surgical methods (any three).\n(2) Condoms also protect against STIs such as gonorrhoea, syphilis and HIV.\n(3) Prenatal sex determination is prohibited by law in India.", marks: 3 },
      { q: "Compare asexual and sexual reproduction in five points.", a: "(1) Parents: one in asexual; two in sexual.\n(2) Gametes: not involved in asexual; fusion of male and female gametes in sexual.\n(3) Offspring: genetically identical in asexual; show variation in sexual.\n(4) Examples: Amoeba, yeast, Hydra, potato stem (asexual); flowering plants, fishes, birds, humans (sexual).\n(5) Role of meiosis: absent in asexual; gametes are formed by meiosis in sexual reproduction.", marks: 5 },
      { q: "Describe the human menstrual cycle with reference to ovulation, fertilisation, implantation and menstruation.", a: "(1) About every month an egg is released from an ovary (ovulation); the uterine lining thickens.\n(2) The egg enters the oviduct, where it can be fertilised by a sperm to form a zygote.\n(3) The zygote divides and the embryo implants in the uterine lining; pregnancy lasts about nine months.\n(4) If there is no fertilisation, the lining is shed with blood as menstruation for 3–7 days.\n(5) The cycle repeats every 21–35 days (about 28 days).", marks: 5 },
      { q: "Case study: A farmer cuts a potato into pieces, each with an eye (bud), and plants them. After a few weeks new plants grow which look exactly like the parent plant.\n(i) Name the type of reproduction.\n(ii) Why are the new plants identical to the parent?\n(iii) Name one other plant that reproduces in the same way.", a: "(i) Asexual reproduction by vegetative propagation (from the stem).\n(ii) Only one parent is involved and there is no fusion of gametes, so the offspring are genetically identical.\n(iii) Ginger (or sugarcane, money plant).", marks: 4, type: "case" }
    ]
  },
  "patterns-in-life-diversity-and-classification": {
    mcq: [
      { q: "The five-kingdom classification was proposed by:", options: ["Linnaeus", "Whittaker", "Haeckel", "Copeland"], answer: 1, explain: "R. H. Whittaker proposed five kingdoms in 1969.", level: 1 },
      { q: "Mushrooms belong to the kingdom:", options: ["Monera", "Protista", "Fungi", "Plantae"], answer: 2, explain: "Fungi are heterotrophs with chitin cell walls.", level: 1 },
      { q: "Plants with naked seeds belong to:", options: ["gymnosperms", "angiosperms", "pteridophytes", "bryophytes"], answer: 0, explain: "Pine is a gymnosperm; its seeds are not enclosed in a fruit.", level: 1 },
      { q: "Binomial nomenclature was introduced by:", options: ["Aristotle", "Whittaker", "Birbal Sahni", "Linnaeus"], answer: 3, explain: "Linnaeus gave each organism a two-part name of genus and species.", level: 1 },
      { q: "Hydra belongs to the phylum:", options: ["Porifera", "Cnidaria", "Platyhelminthes", "Chordata"], answer: 1, explain: "Cnidarians have true tissues and a single body opening.", level: 1 },
      { q: "The correct way to write the scientific name of mango is:", options: ["Mangifera, Indica", "mangifera-indica", "Mangifera indica", "Mangiferaindica"], answer: 2, explain: "Genus starts with a capital letter and the species name is in small letters (italicised or underlined).", level: 2 },
      { q: "Which of these is a unicellular eukaryote?", options: ["Bacterium", "Mushroom", "Amoeba", "Fern"], answer: 2, explain: "Amoeba belongs to Protista, the unicellular eukaryotes.", level: 2 },
      {
        q: "Assertion (A): Bacteria are placed in the kingdom Monera.\nReason (R): Bacteria are unicellular prokaryotes.",
        options: AR,
        answer: 0, explain: "Monera includes the unicellular prokaryotes.", level: 2, keepOrder: true
      },
      { q: "Ravi finds an organism on bread. It is multicellular, has a body of fine threads and cell walls of chitin, and cannot make its own food. It belongs to:", options: ["Plantae", "Animalia", "Monera", "Fungi"], answer: 3, explain: "A mycelium of threads, chitin walls and heterotrophic nutrition are features of fungi.", level: 2 },
      { q: "The correct order of the taxonomic hierarchy from largest to smallest group is:", options: ["Kingdom, phylum, class, order, family, genus, species", "Kingdom, class, phylum, order, family, genus, species", "Species, genus, family, order, class, phylum, kingdom", "Phylum, kingdom, class, order, family, genus, species"], answer: 0, explain: "Each step down the hierarchy groups together more similar organisms.", level: 2 },
      { q: "Which pair of organisms share the most characteristics?", options: ["Same kingdom, different phylum", "Same class, different order", "Same genus, different species", "Same family, different genus"], answer: 2, explain: "The lower the group they share, the more characters they have in common; the genus is lower than family, order or class.", level: 3 },
      {
        q: "Assertion (A): Animals without a notochord are called chordates.\nReason (R): The presence of a notochord divides animals into chordates and non-chordates.",
        options: AR,
        answer: 3, explain: "A is false: chordates are the animals that have a notochord. R is true.", level: 3, keepOrder: true
      },
      { q: "Which organism does NOT belong to the same kingdom as the others?", options: ["Aspergillus", "Amoeba", "Paramecium", "Euglena"], answer: 0, explain: "Aspergillus is a fungus; the other three are unicellular eukaryotes (Protista).", level: 3 },
      { q: "An organism is unicellular, has no nucleus, has a cell wall and makes its own food using chlorophyll. It belongs to the kingdom:", options: ["Protista", "Monera", "Plantae", "Fungi"], answer: 1, explain: "Prokaryotic and unicellular means Monera; cyanobacteria are autotrophic members.", level: 3 }
    ],
    written: [
      { q: "Who proposed the five-kingdom system and in which year? Name the kingdoms.", a: "R. H. Whittaker, 1969. The kingdoms are Monera, Protista, Fungi, Plantae and Animalia.", marks: 1 },
      { q: "What is a notochord?", a: "A flexible rod-like structure along the back whose presence separates chordates from non-chordates.", marks: 1 },
      { q: "State two rules of binomial nomenclature and give an example.", a: "(1) The name has two parts: the genus name first with a capital letter and the species name in small letters.\n(2) It is written in italics (or underlined when handwritten).\nExample: Panthera tigris for the tiger.", marks: 2 },
      { q: "Name two criteria used for classifying organisms.", a: "Any two of: type of cell (prokaryote or eukaryote), presence of cell wall, level of organisation (unicellular or multicellular), mode of nutrition (autotrophic or heterotrophic).", marks: 2 },
      { q: "Differentiate between gymnosperms and angiosperms in three points.", a: "(1) Seeds: naked in gymnosperms; enclosed in a fruit in angiosperms.\n(2) Flowers: gymnosperms do not bear true flowers; angiosperms are flowering plants.\n(3) Examples: pine (gymnosperm); mango, wheat (angiosperm).", marks: 3 },
      { q: "Write three features of the kingdom Fungi with two examples.", a: "(1) Mostly multicellular eukaryotes with a body of threads called mycelium.\n(2) Cell walls made of chitin.\n(3) Heterotrophic and act as decomposers.\nExamples: mushroom, Aspergillus, yeast (any two).", marks: 3 },
      { q: "Name three groups of invertebrates studied and give one feature of each.", a: "Porifera (sponges): no true tissues.\nCnidaria (Hydra): true tissues and a single opening to the body cavity.\nPlatyhelminthes (flatworms): bilateral symmetry.", marks: 3 },
      { q: "Describe the five kingdoms with cell type, body organisation, nutrition and an example of each.", a: "Monera: prokaryotic, unicellular; autotrophic or heterotrophic; bacteria, cyanobacteria.\nProtista: unicellular eukaryotes; Amoeba, Paramecium, Euglena.\nFungi: multicellular eukaryotes, chitin walls, heterotrophic decomposers; mushroom, yeast.\nPlantae: multicellular, autotrophic, cellulose wall; mango, pine.\nAnimalia: multicellular, heterotrophic, no cell wall; Hydra, tiger.", marks: 5 },
      { q: "Why do we classify living organisms? Write the taxonomic hierarchy, explain how it helps, and name two threats to biodiversity.", a: "(1) Classification groups organisms by similarities, making the huge diversity easy to study and showing how organisms are related.\n(2) Hierarchy: Kingdom, phylum, class, order, family, genus, species.\n(3) The lower the group, the more characters shared by its members.\n(4) Fossils help to understand how life has changed.\n(5) Threats to biodiversity: pollution, deforestation, overuse of resources, climate change (any two).", marks: 5 },
      { q: "Case study: A student records three organisms. A is unicellular, prokaryotic and has a cell wall. B is multicellular, heterotrophic and has no cell wall. C is multicellular, autotrophic and has a cellulose wall.\n(i) Assign each organism to a kingdom.\n(ii) Which kingdom has cell walls made of chitin?\n(iii) Give one example of B.", a: "(i) A: Monera; B: Animalia; C: Plantae.\n(ii) Fungi.\n(iii) Hydra (or tiger, any animal).", marks: 4, type: "case" }
    ]
  },
  "earth-as-a-system-energy-matter-and-life": {
    mcq: [
      { q: "The main source of energy for the Earth is the:", options: ["Moon", "Sun", "volcano", "ocean"], answer: 1, explain: "Electromagnetic radiation from the Sun powers the Earth's systems.", level: 1 },
      { q: "The most abundant gas in the atmosphere is:", options: ["oxygen", "argon", "nitrogen", "carbon dioxide"], answer: 2, explain: "Nitrogen makes up about 78 % of the atmosphere.", level: 1 },
      { q: "Weather occurs in the:", options: ["stratosphere", "mesosphere", "ozone layer", "troposphere"], answer: 3, explain: "The troposphere (0–12 km) is where weather happens.", level: 1 },
      { q: "The ozone layer in the stratosphere absorbs harmful:", options: ["infrared rays", "ultraviolet rays", "visible light", "radio waves"], answer: 1, explain: "It shields life from UV radiation.", level: 1 },
      { q: "Which surface has the highest albedo?", options: ["Dark soil", "Ocean water", "Fresh snow", "Dense forest"], answer: 2, explain: "Fresh snow reflects about 80–90 % of the sunlight falling on it.", level: 1 },
      { q: "In the troposphere the temperature falls by about 6.5 °C per km. If the surface temperature is 30 °C, the temperature at 6 km is about:", options: ["−9 °C", "9 °C", "−39 °C", "24 °C"], answer: 0, explain: "30 − 6 × 6.5 = 30 − 39 = −9 °C.", level: 2 },
      { q: "A valley breeze:", options: ["blows down the slope at night", "blows up the slope during the day", "blows down the slope during the day", "blows only over the sea"], answer: 1, explain: "By day the slopes warm and air flows up them; at night the mountain breeze blows down.", level: 2 },
      {
        q: "Assertion (A): Snow-covered regions stay cold even in bright sunshine.\nReason (R): Snow has a high albedo and reflects most of the solar radiation.",
        options: AR,
        answer: 0, explain: "Most of the incoming radiation is reflected, so little heat is absorbed.", level: 2, keepOrder: true
      },
      { q: "A city paints its flat roofs white. The roofs stay cooler because white surfaces:", options: ["absorb more sunlight", "are heavier than dark ones", "have a higher albedo and reflect more sunlight", "have zero albedo"], answer: 2, explain: "A higher albedo means more radiation is reflected and less absorbed.", level: 2 },
      { q: "Oxygen in the atmosphere is mainly restored by:", options: ["respiration", "combustion", "rusting", "photosynthesis"], answer: 3, explain: "Plants and other photosynthesisers release oxygen.", level: 2 },
      { q: "Warm air rises at the equator and sinks again near the latitude of about:", options: ["0°", "30° N and S", "60° N and S", "90° N and S"], answer: 1, explain: "The air sinks near 30° N and S (the sub-tropical high pressure belts).", level: 3 },
      {
        q: "Assertion (A): The troposphere is the layer of the atmosphere between 12 km and 50 km.\nReason (R): The ozone layer lies in the stratosphere.",
        options: AR,
        answer: 3, explain: "A is false: the troposphere is 0–12 km; 12–50 km is the stratosphere. R is true.", level: 3, keepOrder: true
      },
      { q: "A mountaineer starts from sea level where the temperature is 28 °C and climbs to 4000 m (taking 6.5 °C per km). The expected temperature at the top is:", options: ["−10 °C", "22 °C", "2 °C", "54 °C"], answer: 2, explain: "Fall = 4 × 6.5 = 26 °C; 28 − 26 = 2 °C.", level: 3 },
      { q: "A town clears a forest and builds coal-burning factories. The likely effect on atmospheric carbon dioxide is:", options: ["it increases, because burning adds CO₂ and fewer trees remove it", "it decreases, because factories need CO₂", "it stays unchanged", "only the oxygen level changes"], answer: 0, explain: "Burning fuels adds CO₂ and deforestation reduces the removal of CO₂ by photosynthesis.", level: 3 }
    ],
    written: [
      { q: "Define albedo.", a: "Albedo is the fraction of incoming solar radiation reflected by a surface.", marks: 1 },
      { q: "In which layer of the atmosphere is the ozone layer found, and what does it do?", a: "In the stratosphere (12–50 km); it absorbs harmful ultraviolet radiation.", marks: 1 },
      { q: "Give two reasons why the Earth's surface is heated unevenly by the Sun.", a: "(1) The Earth's shape and latitude make the angle of the sun's rays vary, so insolation differs from place to place.\n(2) The tilt of the Earth's axis changes it through the year (also: different surfaces absorb differently, land heats faster than water).", marks: 2 },
      { q: "Why does temperature fall with height in the troposphere? State the rate of fall.", a: "The air is heated mainly from the warm ground below, so higher air is cooler.\nThe temperature falls about 6.5 °C per km.", marks: 2 },
      { q: "Differentiate between a valley breeze and a mountain breeze.", a: "(1) Valley breeze: blows during the day, up the slopes, as the slopes warm up.\n(2) Mountain breeze: blows at night, down into the valley, as the slopes cool.\n(3) Both are local winds caused by uneven heating and pressure differences.", marks: 3 },
      { q: "Describe the pattern of planetary winds between the equator and 30° latitude.", a: "(1) The equator is heated strongly, so warm air rises there, creating a low pressure belt.\n(2) The air moves poleward at height and sinks near 30° N and S (sub-tropical high pressure).\n(3) It returns along the surface towards the equator, completing the circulation.", marks: 3 },
      { q: "List three factors that cause ocean currents.", a: "(1) Planetary winds.\n(2) Differences in temperature and salinity of water.\n(3) The rotation of the Earth and the shape of the land masses.", marks: 3 },
      { q: "Describe the composition of the atmosphere and its two lowest layers.", a: "(1) The atmosphere is about 78 % nitrogen and 21 % oxygen, with argon, carbon dioxide and water vapour.\n(2) Troposphere: 0–12 km; weather occurs here.\n(3) The temperature falls with height at about 6.5 °C per km.\n(4) Stratosphere: 12–50 km; has the ozone layer that absorbs UV.\n(5) The temperature rises with height here, so weather stays in the troposphere.", marks: 5 },
      { q: "Explain how oxygen and carbon cycle between living and non-living parts of the Earth, and state the effect of human activities with two remedies.", a: "(1) Oxygen is used in respiration, combustion and forming oxides.\n(2) It is restored mainly by photosynthesis, which also removes carbon dioxide.\n(3) Burning fuels and deforestation add greenhouse gases and cause smog and ground-level ozone.\n(4) Remedy: use renewable energy and plant trees.\n(5) Remedy: save water and follow reduce–reuse–recycle; the Montreal Protocol helped the ozone layer to recover.", marks: 5 },
      { q: "Case study: In a mountain village, fresh snow has an albedo of about 0.85 and dark soil about 0.15. A visitor notices that snow stays frozen on sunny days while bare soil next to it feels warm.\n(i) What fraction of sunlight does the snow absorb?\n(ii) Which surface warms up more and why?\n(iii) What would happen if the snow melted and exposed more dark ground?", a: "(i) Snow reflects 0.85, so it absorbs 1 − 0.85 = 0.15 (15 %).\n(ii) Dark soil: its low albedo (0.15) means it absorbs 85 % of the sunlight.\n(iii) More ground would absorb more sunlight, so the area would warm up more.", marks: 4, type: "case" }
    ]
  }
  });
})();
