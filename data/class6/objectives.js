// Learning objectives for Class 6 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(6, {
  science: {
    "materials-around-us": [
      {
        id: "object-material",
        text: "I can tell an object from the material it is made of, and say whether a material is natural or made by people.",
        topics: ["Materials and objects"],
        level: "understand",
        mistakes: [
          { id: "one-material", text: "Thinking one object is made of only one material.", fix: "Many objects use several materials: a pencil has wood, graphite and rubber." },
          { id: "glass-natural", text: "Calling glass or plastic natural materials.", fix: "People make glass from sand and plastic from petroleum, so they are made materials. Cotton, wood and clay come directly from nature." }
        ]
      },
      {
        id: "properties",
        text: "I can describe a material using lustre, hardness, transparency, solubility and whether it floats or sinks.",
        topics: ["Properties of materials"],
        level: "understand",
        prereq: ["6/science/the-wonderful-world-of-science"],
        mistakes: [
          { id: "translucent-clear", text: "Saying frosted glass or butter paper is transparent.", fix: "Transparent materials let you see clearly through them. Translucent ones let some light through, so things look blurred." },
          { id: "heavy-sinks", text: "Believing every big or heavy object sinks and every small one floats.", fix: "It depends on the material. A large wooden log floats while a small iron nail sinks." },
          { id: "soluble-miscible", text: "Using \"soluble\" and \"miscible\" for the same thing.", fix: "Soluble is about a solid dissolving in a liquid, such as salt in water. Miscible is about two liquids mixing fully, such as water and vinegar." }
        ]
      },
      {
        id: "choose-material",
        text: "I can choose a suitable material for a job and explain my choice using its properties.",
        topics: ["Choosing the right material", "Properties of materials"],
        level: "apply",
        prereq: ["6/science/materials-around-us#properties"],
        mistakes: [
          { id: "handle-metal", text: "Choosing metal for the handle of a cooking pan.", fix: "Metal lets heat pass, so the handle would become too hot. Wood or plastic heats up slowly and is safe to hold." }
        ]
      },
      {
        id: "use-wisely",
        text: "I can say which materials are biodegradable and how the 3 Rs (reduce, reuse, recycle) cut waste.",
        topics: ["Using materials wisely"],
        level: "understand",
        prereq: ["5/evs/fuels-and-pollution"],
        mistakes: [
          { id: "plastic-rots", text: "Thinking plastic waste rots away like vegetable peels.", fix: "Microbes cannot break plastic down easily, so it stays on land and in water for a very long time." },
          { id: "recycle-only", text: "Thinking recycling is the only R that matters.", fix: "Reducing use comes first and reusing comes next. Recycling is for what is left." }
        ]
      }
    ],
    "methods-of-separation-in-everyday-life": [
      {
        id: "mixtures-and-why-we-separate-them",
        text: "I can say what a mixture is and give reasons for separating one, such as removing harmful things or getting something useful.",
        topics: ["Mixtures and why we separate them"],
        level: "remember",
        prereq: ["6/science/materials-around-us#properties"],
        mistakes: [
          { id: "new-substance", text: "Thinking that mixing makes a new substance with new properties.", fix: "In a mixture no new substance forms. Each part keeps its own properties, so salt in water is still salty and sand is still sand." },
          { id: "only-dirt", text: "Thinking we separate a mixture only to throw the unwanted part away.", fix: "Sometimes the separated part is the useful one, as with salt from sea water. We pick the method from the properties of the parts: size, weight, solubility or magnetism." }
        ]
      },
      {
        id: "separating-solids-from-solids",
        text: "I can choose handpicking, threshing, winnowing, sieving or a magnet to separate a mixture of solids, and say which property it uses.",
        topics: ["Separating solids from solids"],
        level: "apply",
        mistakes: [
          { id: "winnow-sieve", text: "Mixing up winnowing and sieving.", fix: "Winnowing uses wind to separate heavy grain from light husk, so it works by weight. Sieving uses holes to separate big pieces from small ones, so it works by size." },
          { id: "thresh-winnow", text: "Thinking threshing and winnowing are the same.", fix: "Threshing is beating the stalks to loosen the grains. Winnowing comes after it and blows the husk away from the grains." }
        ]
      },
      {
        id: "separating-solids-from-liquids",
        text: "I can explain sedimentation, decantation, filtration, evaporation and condensation and say when each one is used.",
        topics: ["Separating solids from liquids"],
        level: "understand",
        prereq: ["6/science/a-journey-through-states-of-water"],
        mistakes: [
          { id: "settle-pour", text: "Thinking sedimentation and decantation are the same thing.", fix: "Sedimentation is the mud settling at the bottom when water is left still. Decantation is slowly pouring off the clear water above it." },
          { id: "evaporation-vanish", text: "Thinking the water is lost for ever when salt water is evaporated.", fix: "The water has become vapour. If the vapour is cooled it condenses back to pure liquid water, so evaporation followed by condensation gives pure water." }
        ]
      },
      {
        id: "combining-methods-and-dissolving",
        text: "I can name the solute, solvent and solution, and explain why a dissolved solid cannot be separated by filtration.",
        topics: ["Combining methods and dissolving"],
        level: "understand",
        mistakes: [
          { id: "filter-dissolved", text: "Believing filtration can remove dissolved salt or sugar from water.", fix: "Dissolved particles are tiny and pass through the filter paper with the water. Use evaporation to get them back." },
          { id: "solute-solvent", text: "Mixing up the solute and the solvent.", fix: "The solute is the substance that dissolves, such as salt. The solvent is the liquid it dissolves in, such as water." },
          { id: "clear-is-safe", text: "Believing clear filtered water is safe to drink.", fix: "Filtering removes only insoluble pieces. Germs can remain, so the water must be boiled or chlorinated." }
        ]
      },
      {
        id: "plan-separation",
        text: "I can plan, in the right order, how to separate a mixture of three things such as iron nails, sand and salt.",
        topics: ["Combining methods and dissolving"],
        level: "analyse",
        prereq: ["6/science/methods-of-separation-in-everyday-life#separating-solids-from-liquids"],
        mistakes: [
          { id: "evaporate-first", text: "Evaporating the water first, before the sand is filtered out.", fix: "Sand does not dissolve, so it would stay mixed with the salt. Filter first, then evaporate the clear filtrate to get the salt." },
          { id: "one-method", text: "Trying to separate everything with one method.", fix: "Each part has its own property. A magnet takes out iron, filtration holds back sand, and evaporation gets the dissolved salt." }
        ]
      }
    ]
  },
  maths: {
    fractions: [
      {
        id: "what-a-fraction-means",
        text: "I can explain a fraction as equal parts of a whole, a part of a collection, a point on the number line and a division.",
        topics: ["What a fraction means"],
        level: "understand",
        prereq: ["5/maths/fractions#like-unlike"],
        mistakes: [
          { id: "unequal-parts", text: "Calling a shape divided into unequal pieces a fraction, such as 1/3 when the three parts are different sizes.", fix: "A fraction a/b needs b equal parts. If the parts differ in size, we cannot name one of them 1/b." },
          { id: "swap-top-bottom", text: "Mixing up numerator and denominator when finding a fraction of a collection, such as dividing 20 by 3 to find 3/5 of 20.", fix: "Divide by the denominator (5) to get one part, then multiply by the numerator (3): 20 ÷ 5 × 3 = 12." }
        ]
      },
      {
        id: "types-of-fractions",
        text: "I can tell proper, improper and mixed fractions apart and change an improper fraction to a mixed fraction and back.",
        topics: ["Types of fractions"],
        level: "understand",
        prereq: ["6/maths/fractions#what-a-fraction-means"],
        mistakes: [
          { id: "remainder-as-top", text: "Writing 7/4 as 1 7/4 or 1 4/3 (using the wrong numbers for the remainder part).", fix: "7 ÷ 4 = 1 remainder 3. The quotient is the whole number, the remainder is the new numerator, and the denominator stays 4: 1 3/4." },
          { id: "mixed-to-improper", text: "Changing 2 1/3 to an improper fraction as 3/3 or 21/3.", fix: "Multiply the whole number by the denominator and add the numerator: (2 × 3 + 1)/3 = 7/3." }
        ]
      },
      {
        id: "equivalent-fractions-and-simplest-form",
        text: "I can make equivalent fractions by multiplying or dividing the top and bottom by the same number, and write a fraction in simplest form.",
        topics: ["Equivalent fractions and simplest form"],
        level: "apply",
        prereq: ["6/maths/fractions#what-a-fraction-means", "5/maths/fractions#add-sub-unlike"],
        mistakes: [
          { id: "add-same-number", text: "Adding the same number to the top and bottom, so 2/3 becomes 3/4.", fix: "Adding changes the value. Only multiplying or dividing both by the same number keeps it equal: 2/3 = 4/6." },
          { id: "half-simplified", text: "Dividing only until it looks smaller, for example leaving 18/24 as 9/12.", fix: "Keep dividing by common factors, or divide by the HCF at once, until no common factor is left: 18/24 = 3/4." }
        ]
      },
      {
        id: "comparing-fractions",
        text: "I can compare and order fractions, using the same denominator or the same numerator, or by changing them to the same denominator.",
        topics: ["Comparing fractions"],
        level: "analyse",
        prereq: ["6/maths/fractions#equivalent-fractions-and-simplest-form"],
        mistakes: [
          { id: "bigger-denominator-bigger", text: "Thinking a bigger denominator means a bigger fraction, so 1/5 > 1/3.", fix: "With the same numerator, more parts means smaller parts. 1/3 of a roti is bigger than 1/5." },
          { id: "compare-numerators-only", text: "Comparing only the numerators of unlike fractions, so 3/4 looks smaller than 5/12 because 3 < 5.", fix: "Change to a common denominator first. 3/4 = 9/12, which is bigger than 5/12." }
        ]
      },
      {
        id: "adding-and-subtracting-fractions",
        text: "I can add and subtract like and unlike fractions, using the LCM as the common denominator, and give the answer in simplest form.",
        topics: ["Adding and subtracting fractions"],
        level: "apply",
        prereq: ["5/maths/fractions#add-sub-like", "5/maths/fractions#add-sub-unlike", "6/maths/fractions#comparing-fractions"],
        mistakes: [
          { id: "add-across", text: "Adding numerators and denominators both, so 1/2 + 1/3 = 2/5.", fix: "Halves and thirds are different sized parts. Change both to sixths first: 3/6 + 2/6 = 5/6." },
          { id: "change-one-fraction", text: "Changing the denominator of one fraction without changing its numerator, so 1/4 becomes 1/8.", fix: "Whatever you multiply the bottom by, multiply the top by too: 1/4 = 2/8." }
        ]
      }
    ]
  }
});
