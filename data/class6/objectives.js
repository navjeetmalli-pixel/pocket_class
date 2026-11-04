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
    ]
  }
});
