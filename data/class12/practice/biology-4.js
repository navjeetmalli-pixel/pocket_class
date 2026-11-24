// Class 12 Biology practice bank, part 4: Environmental Issues (formative). Extra board-style questions for year-long practice (unreviewed draft).
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
  StudyData.addPractice(12, "biology", {
  "environmental-issues": {
    mcq: [
      M(1, "The Air (Prevention and Control of Pollution) Act was passed in", "1981", ["1974", "1986", "1991"], "It was amended in 1987 to include noise as an air pollutant."),
      M(1, "The Water (Prevention and Control of Pollution) Act was passed in", "1974", ["1981", "1987", "1995"], "It is meant to safeguard the quality of water."),
      M(1, "Which device is used to remove particulate matter from the exhaust of a thermal power plant?", "Electrostatic precipitator", ["Catalytic converter in a car", "Biogas plant with a digester tank", "Sewage settling tank"], "It removes over 99 per cent of the particles."),
      M(1, "A scrubber is used to remove", "gases such as sulphur dioxide", ["lead from petrol", "ozone from the stratosphere", "oil from water"], "The exhaust is passed through water or lime."),
      M(1, "BOD stands for", "biochemical oxygen demand", ["biological organic decay", "bacterial oxygen dissolution", "basic oxidation density"], "It measures the oxygen needed by bacteria to break down organic matter in water."),
      M(1, "The ozone layer lies in the", "stratosphere", ["troposphere", "mesosphere", "thermosphere"], "It absorbs the harmful UV radiation of the Sun."),
      M(1, "The Chipko movement began in the", "Garhwal Himalayas", ["Western Ghats", "Sundarbans delta region", "Shivalik hills of Punjab"], "People hugged trees to prevent them from being cut."),
      M(2, "The metals in a catalytic converter are", "platinum, palladium and rhodium", ["iron, copper and zinc", "lead, tin and nickel", "sodium, potassium and calcium"], "They convert harmful exhaust gases into less harmful ones."),
      M(2, "Which gas is NOT converted to a harmless gas by a catalytic converter?", "Carbon dioxide", ["Carbon monoxide", "Nitric oxide", "Unburnt hydrocarbons"], "CO₂ is a product, not a pollutant removed by the converter."),
      M(2, "Which of these is the main reason for eutrophication?", "Excess nitrates and phosphates", ["Excess dissolved oxygen", "Sudden entry of sea water into the lake", "A rise in the UV radiation reaching it"], "Nutrients from sewage and fertilisers cause algal blooms."),
      M(2, "A water sample with high BOD means the water is", "more polluted", ["pure", "rich in oxygen", "suitable for drinking"], "More organic matter means that bacteria use more oxygen."),
      M(2, "Which chemical causes thinning of eggshells in birds by biomagnification?", "DDT", ["Chlorine", "Methane", "Nitrate"], "DDT builds up at higher trophic levels."),
      M(2, "Minamata disease in Japan was caused by", "mercury in water", ["lead in petrol", "arsenic in rice", "radiation from a reactor"], "Mercury from industrial waste built up in fish."),
      M(2, "Which of these is the main greenhouse gas contributing to global warming?", "Carbon dioxide", ["Oxygen released by plants", "Nitrogen present in air", "Argon present in air"], "CO₂ contributes about 60 per cent of the added warming."),
      M(2, "Chlorine atoms from CFCs act as", "catalysts that destroy ozone", ["raw material for new ozone", "absorbers of infra-red rays", "nutrients for algae"], "One chlorine atom can break down many ozone molecules."),
      M(2, "The Montreal Protocol was signed in", "1987", ["1974", "1992", "2005"], "It controls the emission of ozone-depleting substances."),
      M(2, "Secondary sewage treatment mainly uses", "bacteria that form flocs", ["a strong magnet and filter", "an electrostatic precipitator", "chlorine gas and lime"], "The bacteria digest organic matter in aerated tanks, which lowers BOD."),
      M(2, "Joint Forest Management was introduced in the", "1980s", ["1930s", "1950s", "2000s"], "It involves local communities in forest protection."),
      M(3, "A catalytic converter stops working when a car uses leaded petrol because", "lead inactivates the catalyst", ["lead lowers the engine temperature", "lead gives off more CO₂", "lead dissolves the metals"], "Unleaded petrol must be used."),
      M(3, "A lake receives sewage and fertiliser run-off. Which sequence of events is correct?", "Nutrients rise, algae bloom, oxygen falls, fish die", ["Oxygen rises, fish grow, algae die, nutrients fall", "Algae die, nutrients rise, oxygen rises, fish grow", "Fish die, algae bloom, nutrients fall, oxygen rises"], "This is cultural eutrophication."),
      M(3, "Without the natural greenhouse effect the average temperature of the earth would be about", "−18 °C", ["15 °C", "0 °C", "−40 °C"], "With it, the average is about 15 °C."),
      M(3, "DDT is barely present in lake water but is far higher in fish-eating birds. This is an example of", "biomagnification", ["eutrophication", "biodegradation", "bioremediation"], "A toxic, non-degradable substance rises at each trophic level."),
      AR(2, "Nuclear waste must be stored in shielded containers and buried deep in rocks.", "Nuclear waste gives off radiation that can cause mutations and cancer.", 0, "The shielding and burial protect living things from the radiation."),
      AR(3, "Skin cancer cases rise when the ozone layer thins.", "More UV-B reaches the earth, which damages the DNA of skin cells.", 0, "UV-B causes mutations in DNA."),
      AR(3, "A natural greenhouse effect is harmful to life on earth.", "Without it the average temperature of the earth would fall to about −18 °C.", 3, "A is false: the natural greenhouse effect is needed for life; only the added enhancement causes global warming."),
    ],
    written: [
      W(2, "What is BOD? Why is it measured?", "BOD is the biochemical oxygen demand: the amount of oxygen needed by bacteria to break down the organic matter in a given volume of water.\nIt is measured because the higher the BOD, the more polluted the water."),
      W(2, "Why is unleaded petrol used in vehicles fitted with catalytic converters?", "Lead in petrol coats and inactivates the catalysts platinum, palladium and rhodium.\nUnleaded petrol keeps the converter working."),
      W(2, "Define biomagnification and give an example.", "It is the increase in the concentration of a toxic, non-degradable substance at each successive trophic level.\nExample: DDT, which causes thin eggshells in birds at the top of the food chain."),
      W(3, "How does an electrostatic precipitator work?", "It has electrode wires at a high voltage, which give the particles in the exhaust a charge.\nThe collecting plates are earthed and attract the charged particles.\nIt removes over 99 per cent of the particulate matter."),
      W(3, "What is the ozone hole? How are CFCs responsible for it?", "It is the large thinning of the stratospheric ozone layer over the Antarctic region.\nCFCs rise to the stratosphere, where UV releases chlorine atoms.\nThe chlorine atoms act as catalysts and convert ozone into oxygen, so the layer becomes thin."),
      W(3, "Describe the effects of global warming.", "The earth's average temperature rises.\nIce caps and glaciers melt, so the sea level rises and coasts flood.\nRainfall patterns change, and the habitats of plants and animals change."),
      W(4, "Describe secondary treatment of sewage and say what happens to the activated sludge.", "After the primary treatment, the water goes to aeration tanks and is agitated, so air is pumped in.\nUseful aerobic bacteria grow into flocs and digest the organic matter, so the BOD falls.\nThe effluent goes to a settling tank, where the flocs settle as activated sludge.\nA small part of the sludge is used as inoculum for the aeration tank; the rest is pumped to anaerobic digesters, where bacteria digest it and produce biogas.\nThe treated water is released into water bodies."),
      W(5, "What is eutrophication? Explain how it takes place and the harm it does to a lake.", "It is the enrichment of a water body with nutrients such as nitrates and phosphates, which cause the lake to age.\nNatural eutrophication takes thousands of years, but sewage and fertiliser run-off speed it up (cultural eutrophication).\nThe nutrients cause algal blooms.\nThe algae die and are decomposed by bacteria, using up the dissolved oxygen.\nFish and other animals die, and the lake gives off a bad smell.\nThe lake slowly fills up and turns into land."),
      W(5, "Write a note on the steps taken by people and the government to protect forests.", "In 1731 Amrita Devi Bishnoi and others in Khejarli, Rajasthan, gave their lives to save Khejri trees.\nThe Chipko movement in the Garhwal Himalayas used tree-hugging to stop felling.\nThe Government of India introduced Joint Forest Management in the 1980s, in which local communities work with the forest department.\nCommunities protect the forest and in return get benefits such as forest products.\nThis protects biodiversity and checks soil erosion."),
      W(4, "Case study: A town releases untreated sewage into a lake. In a few months the lake turns green, fish float dead on the surface and the water smells bad.\n(i) Name the process described. (1)\n(ii) Why did the fish die? (1)\n(iii) Suggest two measures to correct the problem. (2)", "(i) Eutrophication (cultural eutrophication, with an algal bloom). (1)\n(ii) The nutrients in the sewage caused algae to bloom and die; bacteria used up the dissolved oxygen in decomposing them, so the fish suffocated. (1)\n(iii) Any two: treat the sewage in primary and secondary stages before release; reduce the use of fertilisers and prevent run-off; use ecological sanitation (dry composting toilets); remove the excess weeds and algae. (2)", "case"),
    ]
  },
  });
})();
