// Learning objectives for Class 8 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(8, {
  maths: {
    "algebra-play": [
      {
        id: "write-expressions",
        text: "I can write an algebraic expression for a pattern or a situation, such as 3n + 5, 2n for the nth even number or 3n + 1 for matchstick squares.",
        topics: ["Writing expressions"],
        level: "apply",
        prereq: ["7/maths/expressions-using-letter-numbers"],
        mistakes: [
          { id: "combine-unlike", text: "Writing 3n + 5 as 8n.", fix: "3n and 5 are unlike terms: one has the variable and the other does not, so they cannot be added into one term." },
          { id: "odd-number", text: "Writing the nth odd number as 2n.", fix: "2n is even. The nth odd number is 2n − 1 (or 2n + 1 if you start counting from 0)." }
        ]
      },
      {
        id: "explain-tricks",
        text: "I can use a variable to show why a number trick works for every starting number.",
        topics: ["Number tricks"],
        level: "analyse",
        mistakes: [
          { id: "examples-prove", text: "Believing that a trick is proved because it worked for a few numbers.", fix: "Examples can test a claim but cannot prove it. Use n for the starting number and show the n cancels out." }
        ]
      },
      {
        id: "form-equation",
        text: "I can turn a word problem into an equation.",
        topics: ["Forming and solving equations"],
        level: "apply",
        prereq: ["7/maths/finding-the-unknown"],
        mistakes: [
          { id: "wrong-operation", text: "Translating \"5 less than 3 times a number\" as 5 − 3n.", fix: "\"5 less than\" means subtract 5 from 3n, so the expression is 3n − 5." }
        ]
      },
      {
        id: "solve-check",
        text: "I can solve a linear equation by doing the same operation on both sides, and check the answer against the story.",
        topics: ["Forming and solving equations"],
        level: "apply",
        prereq: ["8/maths/algebra-play#form-equation"],
        mistakes: [
          { id: "one-side", text: "Subtracting 5 on the left of 3x + 5 = 20 but not on the right.", fix: "Whatever you do to one side you must do to the other. 3x + 5 − 5 = 20 − 5, so 3x = 15." },
          { id: "no-check", text: "Not putting the answer back into the equation.", fix: "Check: 3(5) + 5 = 20, so x = 5 is correct. Then check that the answer also makes sense in the story." }
        ]
      }
    ]
  },
  science: {
    "exploring-forces": [
      {
        id: "what-is-force",
        text: "I can describe a force as a push or a pull with a size and a direction, and tell contact forces from non-contact forces.",
        topics: ["What is a force?"],
        level: "understand",
        prereq: ["7/science/measurement-of-time-and-motion", "6/science/exploring-magnets"],
        mistakes: [
          { id: "force-unit", text: "Giving the unit of force as kilogram.", fix: "The kilogram measures mass. Force is measured in newtons (N)." },
          { id: "magnet-contact", text: "Calling magnetic force a contact force.", fix: "A magnet pulls iron from a distance without touching it, so magnetic force is a non-contact force." }
        ]
      },
      {
        id: "net-force",
        text: "I can find the net force of two forces on an object and say whether its motion will change.",
        topics: ["Balanced and unbalanced forces"],
        level: "apply",
        mistakes: [
          { id: "balanced-rest", text: "Thinking balanced forces mean the object must be at rest.", fix: "Balanced forces give zero net force, so the motion does not change. The object may be at rest or moving steadily." },
          { id: "add-opposite", text: "Adding two forces that act in opposite directions.", fix: "Forces in opposite directions subtract, so the net force is their difference, in the direction of the bigger force." }
        ]
      },
      {
        id: "friction",
        text: "I can explain what affects friction, name its types, and give ways to increase or reduce it.",
        topics: ["Friction"],
        level: "understand",
        mistakes: [
          { id: "friction-bad", text: "Thinking friction is always harmful.", fix: "We need friction to walk, to grip and to brake. It is a problem only where it causes wear and heating, and lubricants and wheels reduce it." },
          { id: "friction-smooth", text: "Thinking smoother surfaces have more friction.", fix: "Friction is larger for rough surfaces and when the pressing force is greater." }
        ]
      },
      {
        id: "field-forces",
        text: "I can describe gravitational, magnetic and electrostatic forces, and explain the difference between mass and weight.",
        topics: ["Gravity, magnetic and electrostatic force"],
        level: "understand",
        mistakes: [
          { id: "mass-weight", text: "Using mass and weight as the same thing.", fix: "Mass is the amount of matter (kg). Weight is the gravitational force on it (N), so it would be less on the Moon." },
          { id: "like-poles", text: "Saying like poles of magnets, or like charges, attract.", fix: "Like poles and like charges repel; unlike poles and unlike charges attract." }
        ]
      }
    ],
    "particulate-nature-of-matter": [
      {
        id: "matter-is-made-of-particles",
        text: "I can say that matter is made of tiny particles with spaces between them, that the particles are always moving, and that they attract one another.",
        topics: ["Matter is made of particles"],
        level: "remember",
        prereq: ["6/science/materials-around-us#properties"],
        mistakes: [
          { id: "no-gaps", text: "Thinking matter is one continuous block with no gaps.", fix: "Matter has spaces between its particles. That is why sugar can dissolve in a full glass of water without making it overflow." },
          { id: "solid-still", text: "Thinking the particles of a solid do not move.", fix: "Particles in a solid vibrate in place all the time. They only cannot move about freely." },
          { id: "particles-expand", text: "Thinking the particles themselves swell when something is heated.", fix: "The particles stay the same size. They move faster, and the spaces between them grow." }
        ]
      },
      {
        id: "states-of-matter",
        text: "I can describe solids, liquids and gases by how their particles are arranged, move and attract, and link this to shape, volume and compressing.",
        topics: ["States of matter"],
        level: "understand",
        prereq: ["8/science/particulate-nature-of-matter#matter-is-made-of-particles"],
        mistakes: [
          { id: "liquid-volume", text: "Thinking a liquid has no fixed volume because it takes the shape of its container.", fix: "A liquid changes shape but keeps the same volume, because its particles stay close together." },
          { id: "solid-no-space", text: "Thinking a solid cannot be compressed because it has no spaces at all.", fix: "A solid has tiny spaces between its particles, but they are so small and the attraction is so strong that squeezing hardly changes it." },
          { id: "gas-heavy", text: "Thinking a gas fills its container because its particles are heavier.", fix: "Gas particles are far apart, attract each other weakly and move freely, so they spread to fill all the space." }
        ]
      },
      {
        id: "diffusion",
        text: "I can explain diffusion by the movement of particles, and say why it is fastest in gases and speeds up when it is warmer.",
        topics: ["Diffusion"],
        level: "understand",
        prereq: ["8/science/particulate-nature-of-matter#states-of-matter"],
        mistakes: [
          { id: "air-currents-only", text: "Thinking a smell spreads only because moving air carries it.", fix: "Particles move on their own and mix even in still air. That mixing is diffusion." },
          { id: "diffusion-gas-only", text: "Thinking diffusion happens only in gases.", fix: "It happens in liquids too, as ink spreading in water, and very slowly in solids." },
          { id: "temp-no-effect", text: "Thinking temperature does not change how fast diffusion happens.", fix: "Particles move faster when it is hotter, so diffusion is quicker. Sugar dissolves faster in hot water." }
        ]
      },
      {
        id: "changes-of-state",
        text: "I can name the changes of state, including sublimation, and explain why the temperature stays constant while a solid melts.",
        topics: ["Changes of state"],
        level: "understand",
        prereq: ["6/science/a-journey-through-states-of-water"],
        mistakes: [
          { id: "temp-rises-melting", text: "Thinking the temperature keeps rising while ice melts.", fix: "During melting the temperature stays at 0 °C. The heat energy is used to overcome the attraction between particles, not to make them hotter." },
          { id: "melt-freeze-mix", text: "Mixing up melting with freezing, or condensation with boiling.", fix: "Melting is solid to liquid and freezing is liquid to solid. Boiling is liquid to gas and condensation is gas to liquid." }
        ]
      },
      {
        id: "evaporation-and-cooling",
        text: "I can tell evaporation from boiling and explain with particles why evaporation causes cooling.",
        topics: ["Changes of state"],
        level: "apply",
        prereq: ["8/science/particulate-nature-of-matter#changes-of-state"],
        mistakes: [
          { id: "evaporation-boiling-same", text: "Thinking evaporation and boiling are the same.", fix: "Evaporation happens at any temperature, only from the surface. Boiling happens at the boiling point, throughout the liquid." },
          { id: "evaporation-hot-only", text: "Thinking evaporation happens only when a liquid is hot.", fix: "Wet clothes dry on a cool day too. Warmth and a breeze only make evaporation faster." },
          { id: "cold-wet-skin", text: "Thinking wet skin feels cold because the water freezes or the air has cold particles.", fix: "The water evaporates by taking heat from your skin, so the skin cools down. A matka stays cool in the same way." }
        ]
      }
    ]
  },
  sst: {
    "the-colonial-era-in-india": [
      {
        id: "company-rule",
        text: "I can explain how the East India Company moved from trade to rule through Plassey (1757), Buxar (1764) and the Diwani of 1765.",
        topics: ["From Trade to Rule"],
        level: "understand",
        prereq: ["8/sst/reshaping-indias-political-map"],
        mistakes: [
          { id: "plassey-buxar", text: "Mixing up the order or the dates of Plassey and Buxar.", fix: "Plassey was fought in 1757 and Buxar in 1764. The Company received the Diwani of Bengal, Bihar and Orissa in 1765, after both." }
        ]
      },
      {
        id: "expansion",
        text: "I can describe how the Company expanded its territory by the Subsidiary Alliance and the Doctrine of Lapse, and by wars such as those against Tipu Sultan.",
        topics: ["From Trade to Rule"],
        level: "understand",
        mistakes: [
          { id: "lapse-wellesley", text: "Linking the Doctrine of Lapse with Lord Wellesley and the Subsidiary Alliance with Lord Dalhousie.", fix: "The Subsidiary Alliance is linked to Lord Wellesley and the Doctrine of Lapse to Lord Dalhousie." }
        ]
      },
      {
        id: "revenue-economy",
        text: "I can compare the Permanent Settlement, Ryotwari and Mahalwari systems and explain how colonial rule affected peasants and handicrafts.",
        topics: ["Revenue and Economy"],
        level: "analyse",
        mistakes: [
          { id: "settlement-peasants", text: "Thinking the Permanent Settlement fixed the revenue that peasants paid.", fix: "It fixed the revenue that zamindars paid to the Company. Peasants still faced heavy demands and often fell into debt." },
          { id: "railway-india", text: "Thinking the railways were built mainly for the Indian public.", fix: "The first line (Bombay to Thane, 1853) mainly served trade and administration." }
        ]
      },
      {
        id: "revolt-crown",
        text: "I can state the causes and result of the Revolt of 1857, including the 1858 transfer of power to the Crown, and explain the effect of Macaulay's Minute of 1835.",
        topics: ["Revolt and Crown Rule"],
        level: "understand",
        mistakes: [
          { id: "revolt-soldiers", text: "Calling 1857 only a revolt of soldiers.", fix: "Soldiers began it, but peasants and some rulers also took part, so it spread widely." },
          { id: "crown-1857", text: "Saying the Crown took over in 1857.", fix: "The Revolt was in 1857; the power passed from the Company to the Crown in 1858." }
        ]
      }
    ]
  }
});
