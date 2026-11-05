// Learning objectives for Class 7 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(7, {
  maths: {
    "operations-with-integers": [
      {
        id: "multiply",
        text: "I can multiply integers using the sign rules and explain 3 × (−4) as repeated addition.",
        topics: ["Multiplying integers"],
        level: "apply",
        prereq: ["6/maths/the-other-side-of-zero"],
        mistakes: [
          { id: "neg-neg-neg", text: "Saying (−3) × (−4) = −12.", fix: "A negative times a negative is positive, so (−3) × (−4) = 12. Different signs give a negative; the same signs give a positive." },
          { id: "mix-add-multiply", text: "Using the multiplication sign rule for addition, e.g. (−3) + (−4) = 7.", fix: "In addition, two negatives add up to a bigger negative: (−3) + (−4) = −7. The rule \"negative times negative is positive\" is only for multiplication and division." }
        ]
      },
      {
        id: "divide",
        text: "I can divide integers, and I know that division by zero is not defined while 0 divided by a non-zero integer is 0.",
        topics: ["Dividing integers"],
        level: "apply",
        mistakes: [
          { id: "div-zero", text: "Writing 5 ÷ 0 = 0 or 5 ÷ 0 = 5.", fix: "Division by zero is not defined, because no number multiplied by 0 gives 5." },
          { id: "zero-div", text: "Thinking 0 ÷ 5 is not defined.", fix: "0 ÷ 5 = 0 because 0 × 5 = 0. Only dividing by 0 is a problem." }
        ]
      },
      {
        id: "properties",
        text: "I can use the commutative, associative and distributive properties to make an integer calculation easier.",
        topics: ["Properties"],
        level: "apply",
        prereq: ["7/maths/operations-with-integers#multiply"],
        mistakes: [
          { id: "sub-commutative", text: "Assuming subtraction and division of integers work in any order, like multiplication.", fix: "Only addition and multiplication are commutative: (−2) × 5 = 5 × (−2), but 3 − 5 is not 5 − 3." },
          { id: "distribute-sign", text: "Forgetting to multiply every term inside the bracket, as in (−3) × (4 + 2) = −12 + 2.", fix: "Multiply the outside number with each term: (−3) × 4 + (−3) × 2 = −18." }
        ]
      },
      {
        id: "sign-of-product",
        text: "I can tell the sign of a product of many integers by counting the negative factors.",
        topics: ["Properties", "Multiplying integers"],
        level: "analyse",
        mistakes: [
          { id: "count-all", text: "Counting all the factors, not just the negative ones, to fix the sign.", fix: "Count only the negative factors. An even number of them gives a positive product and an odd number gives a negative product." }
        ]
      }
    ],
    "working-with-fractions": [
      {
        id: "multiplying-fractions",
        text: "I can multiply fractions and mixed numbers, and find a fraction of a quantity by multiplying.",
        topics: ["Multiplying fractions"],
        level: "apply",
        prereq: ["6/maths/fractions#types-of-fractions", "6/maths/fractions#equivalent-fractions-and-simplest-form"],
        mistakes: [
          { id: "common-denominator", text: "Finding a common denominator before multiplying, as if it were addition.", fix: "To multiply, just multiply the tops and multiply the bottoms: 2/3 × 4/5 = 8/15." },
          { id: "mixed-as-is", text: "Multiplying only the fraction part of a mixed number and leaving out the whole number, so 1½ × 2/3 = ½ × 2/3 = 1/3.", fix: "Change the mixed number to an improper fraction first: 1½ = 3/2, then 3/2 × 2/3 = 1." },
          { id: "always-bigger", text: "Expecting multiplication to always make the number bigger.", fix: "Multiplying by a fraction smaller than 1 makes the number smaller: 3/4 of 20 is 15." }
        ]
      },
      {
        id: "dividing-fractions",
        text: "I can find the reciprocal of a number and divide by a fraction by multiplying by its reciprocal.",
        topics: ["Dividing fractions"],
        level: "apply",
        prereq: ["7/maths/working-with-fractions#multiplying-fractions"],
        mistakes: [
          { id: "flip-wrong", text: "Flipping the first fraction instead of the one you divide by, so 3/4 ÷ 2/5 becomes 4/3 × 2/5.", fix: "Only the divisor is flipped. 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8." },
          { id: "divide-smaller", text: "Thinking that dividing always gives a smaller answer, so 3 ÷ 1/2 should be less than 3.", fix: "Ask how many halves fit in 3. There are 6 of them, so 3 ÷ 1/2 = 6." },
          { id: "reciprocal-sign", text: "Taking the reciprocal of 5/7 as −5/7 or 5/7 again.", fix: "The reciprocal swaps the top and bottom: 7/5. A number times its reciprocal is 1." }
        ]
      },
      {
        id: "word-problems",
        text: "I can decide whether a problem needs multiplying (of) or dividing (how many fit in), solve it and check that the answer is sensible.",
        topics: ["Word problems"],
        level: "analyse",
        prereq: ["7/maths/working-with-fractions#multiplying-fractions", "7/maths/working-with-fractions#dividing-fractions"],
        mistakes: [
          { id: "wrong-operation", text: "Multiplying when the problem asks how many pieces fit in, such as 5 kg of sugar in 1/4 kg packets.", fix: "\"How many fit in\" means divide: 5 ÷ 1/4 = 20 packets." },
          { id: "of-of-the-rest", text: "Taking a fraction of the whole when the problem says a fraction of what is left.", fix: "Find what remains first, then take the fraction of that remaining part." },
          { id: "not-simplified", text: "Leaving the answer unsimplified, or not checking it against the numbers in the problem.", fix: "Divide the top and bottom by their common factor, and ask whether the answer is a sensible size." }
        ]
      }
    ]
  },
  science: {
    "exploring-substances-acidic-basic-and-neutral": [
      {
        id: "acids-bases-and-neutral-substances",
        text: "I can tell acids, bases and neutral substances apart by taste, feel and everyday examples, and I know why unknown substances must never be tasted.",
        topics: ["Acids, Bases and Neutral Substances"],
        level: "remember",
        mistakes: [
          { id: "all-acids-dangerous", text: "Believing that all acids are dangerous and burn the skin.", fix: "Many acids in food, such as lemon juice, vinegar and curd, are weak and safe. Only strong acids like hydrochloric acid are corrosive." },
          { id: "taste-test", text: "Testing an unknown substance by tasting or touching it.", fix: "Never taste or touch unknown substances. Strong acids and bases can burn, so we use indicators instead." },
          { id: "base-neutral", text: "Calling soap or baking soda neutral because they are not sour.", fix: "Bases taste bitter, feel soapy and turn red litmus blue. A neutral substance, like pure water, does nothing to litmus." }
        ]
      },
      {
        id: "indicators",
        text: "I can say what an indicator is and what litmus, turmeric, China rose and phenolphthalein show with acids and bases.",
        topics: ["Indicators"],
        level: "understand",
        prereq: ["6/science/methods-of-separation-in-everyday-life#combining-methods-and-dissolving"],
        mistakes: [
          { id: "litmus-colours", text: "Mixing up which litmus turns which colour.", fix: "Acids turn blue litmus red. Bases turn red litmus blue. A neutral substance changes neither." },
          { id: "turmeric-acid", text: "Thinking turmeric turns red with an acid.", fix: "Turmeric stays yellow in acids. It turns reddish-brown only with a base, like soap." },
          { id: "acid-red-litmus", text: "Expecting an acid to change red litmus.", fix: "Red litmus stays red in an acid. Only a base changes it, to blue." }
        ]
      },
      {
        id: "neutralisation",
        text: "I can explain that an acid and a base react to give a salt and water, and that heat is given out.",
        topics: ["Neutralisation"],
        level: "understand",
        prereq: ["7/science/exploring-substances-acidic-basic-and-neutral#indicators"],
        mistakes: [
          { id: "hydrogen-product", text: "Thinking the products of an acid and a base are a salt and a gas.", fix: "Neutralisation gives a salt and water. For example, hydrochloric acid and sodium hydroxide give common salt and water." },
          { id: "acid-becomes-base", text: "Thinking the acid turns into a base, or that adding acid makes a base more basic.", fix: "The acid and base cancel each other's properties. Added drop by drop, the pink colour of phenolphthalein in a base disappears when the base has been neutralised." }
        ]
      },
      {
        id: "neutralisation-in-daily-life",
        text: "I can use neutralisation to explain antacids, ant stings, treating soil, factory waste and toothpaste.",
        topics: ["Neutralisation in Daily Life"],
        level: "apply",
        prereq: ["7/science/exploring-substances-acidic-basic-and-neutral#neutralisation"],
        mistakes: [
          { id: "acid-for-acid", text: "Using an acid to treat an acid problem, such as vinegar on an ant sting.", fix: "An ant sting has formic acid, and acid soil and factory waste are acidic too. Treat acids with a mild base, such as baking soda, lime or milk of magnesia." },
          { id: "toothpaste-acid", text: "Thinking toothpaste is acidic.", fix: "Toothpastes are basic, so they help neutralise the acids that bacteria make from leftover sugar." },
          { id: "lime-compost", text: "Mixing up what to add to acidic soil and to basic soil.", fix: "Farmers add lime (a base) to acidic soil, and compost to basic soil." }
        ]
      },
      {
        id: "identify-unknown",
        text: "I can use more than one indicator to decide whether an unknown solution is acidic, basic or neutral.",
        topics: ["Indicators", "Acids, Bases and Neutral Substances"],
        level: "analyse",
        prereq: ["7/science/exploring-substances-acidic-basic-and-neutral#indicators"],
        mistakes: [
          { id: "one-test-neutral", text: "Calling a solution neutral because one indicator showed no change.", fix: "Phenolphthalein is colourless in acids and in neutral solutions. Test with red and blue litmus as well before deciding." },
          { id: "sour-means-acid", text: "Deciding a solution is an acid only because it tastes sour.", fix: "We must not taste unknown solutions. An indicator test is the safe way to find out." }
        ]
      }
    ],
    "electricity-circuits-and-their-components": [
      {
        id: "cell-battery-and-circuit",
        text: "I can name the terminals of a cell, work out the voltage of cells joined in series, and say when a circuit is closed or open.",
        topics: ["Cell, Battery and Circuit"],
        level: "understand",
        mistakes: [
          { id: "open-switch-flows", text: "Thinking an open switch still lets current flow.", fix: "An open switch leaves a gap, so there is no complete path. The current stops and the bulb does not glow." },
          { id: "current-used-up", text: "Thinking the bulb uses up the current, so less comes back to the cell.", fix: "The current is the same all the way round a simple circuit. The bulb turns electrical energy into light and heat; the current does not get used up." },
          { id: "series-voltage-same", text: "Thinking cells joined in series give the same voltage as one cell.", fix: "Voltages add up. Three 1.5 V cells joined + to − make a 4.5 V battery." }
        ]
      },
      {
        id: "bulb-and-led",
        text: "I can explain how a filament bulb glows, what a fused bulb is, and connect an LED the right way round.",
        topics: ["Bulb and LED"],
        level: "understand",
        prereq: ["7/science/electricity-circuits-and-their-components#cell-battery-and-circuit"],
        mistakes: [
          { id: "led-either-way", text: "Thinking an LED glows whichever way round it is connected.", fix: "An LED glows only when its longer lead goes to the + side. Turn it round if it does not glow." },
          { id: "fused-loose-wire", text: "Thinking a bulb that does not glow always has a loose wire.", fix: "A fused bulb has a broken filament, which breaks the circuit. Check the filament as well as the wires and the switch." },
          { id: "led-more-power", text: "Thinking an LED uses more electricity than a filament bulb.", fix: "LEDs use much less electricity and stay cooler, so they save energy." }
        ]
      },
      {
        id: "circuit-symbols-and-diagrams",
        text: "I can read a circuit diagram that uses the symbols for a cell, battery, bulb, switch and wire, and tell an open switch from a closed one.",
        topics: ["Circuit Symbols and Diagrams"],
        level: "remember",
        prereq: ["7/science/electricity-circuits-and-their-components#cell-battery-and-circuit"],
        mistakes: [
          { id: "cell-lines", text: "Taking the short thick line in a cell symbol as positive.", fix: "The longer thin line is positive (+) and the shorter thick line is negative (−)." },
          { id: "gap-is-on", text: "Reading a switch drawn with a gap as ON.", fix: "A gap means the switch is open (OFF). A switch drawn joined is closed (ON)." }
        ]
      },
      {
        id: "conductors-and-insulators",
        text: "I can sort materials into conductors and insulators, test them in a circuit, and explain why we keep switches away from water.",
        topics: ["Conductors and Insulators"],
        level: "apply",
        prereq: ["6/science/materials-around-us#properties"],
        mistakes: [
          { id: "water-insulator", text: "Thinking water is an insulator, so wet hands are safe.", fix: "Ordinary tap water conducts electricity. Never touch switches or plugs with wet hands." },
          { id: "graphite-insulator", text: "Thinking only metals conduct, so graphite from a pencil is an insulator.", fix: "Graphite conducts electricity even though it is not a metal. Salt water conducts too." },
          { id: "wire-plastic", text: "Thinking an electric wire is made of plastic or rubber because it is safe to touch.", fix: "The wire inside is copper or aluminium, which conducts. The plastic or rubber covering is the insulator that keeps us safe." }
        ]
      },
      {
        id: "series-parallel-and-the-fuse",
        text: "I can tell a series circuit from a parallel one and say what happens to the other bulbs when one bulb fuses or is taken out.",
        topics: ["Series, Parallel and the Fuse"],
        level: "apply",
        prereq: ["7/science/electricity-circuits-and-their-components#cell-battery-and-circuit"],
        mistakes: [
          { id: "series-others-glow", text: "Thinking the other bulbs in a series circuit keep glowing when one fuses.", fix: "A series circuit has a single path. One fused bulb breaks it and every bulb goes off." },
          { id: "parallel-all-off", text: "Thinking all the bulbs in a parallel circuit go off when one fuses.", fix: "Each bulb in a parallel circuit has its own path, so the others keep glowing. This is why homes are wired in parallel." }
        ]
      },
      {
        id: "heating-effect-and-fuse",
        text: "I can describe the heating effect of current and explain how a fuse or an MCB protects a circuit.",
        topics: ["Series, Parallel and the Fuse"],
        level: "apply",
        prereq: ["7/science/electricity-circuits-and-their-components#series-parallel-and-the-fuse"],
        mistakes: [
          { id: "thick-fuse", text: "Thinking a thick copper wire makes a good fuse.", fix: "A fuse wire must be thin so that it melts easily when too much current flows. A thick copper wire would not melt." },
          { id: "fuse-stores", text: "Thinking a fuse stores the extra electricity or makes the current flow faster.", fix: "A fuse just melts and breaks the circuit when the current is too large, which protects the appliances." },
          { id: "mcb-replace", text: "Thinking an MCB must be replaced after it switches off.", fix: "An MCB switches off automatically and can be switched on again. A melted fuse wire has to be replaced." }
        ]
      }
    ]
  }
});
