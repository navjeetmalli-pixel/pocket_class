// Learning objectives for Class 3 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(3, {
  evs: {
    "plants-around-us": [
      {
        id: "parts",
        text: "I can name the parts of a plant and say what the roots and the stem do.",
        topics: ["Parts of a plant"],
        level: "remember",
        mistakes: [
          { id: "roots-food", text: "Thinking the roots give the plant its food.", fix: "Roots hold the plant in the soil and take in water and minerals. The leaves make the food." }
        ]
      },
      {
        id: "leaf-food",
        text: "I can explain that green leaves use sunlight, air and water to make food, and that plants give out oxygen.",
        topics: ["What leaves do"],
        level: "understand",
        prereq: ["3/evs/plants-around-us#parts"],
        mistakes: [
          { id: "soil-food", text: "Saying plants eat soil or that the soil is their food.", fix: "Plants make their own food in the leaves from sunlight, air and water. The soil gives water and minerals." },
          { id: "leaf-green", text: "Not knowing why leaves are green.", fix: "Leaves contain a green substance called chlorophyll, which helps them make food." }
        ]
      },
      {
        id: "uses",
        text: "I can list things we get from plants, like food, medicine, wood, cotton, oxygen and shade.",
        topics: ["Plants are useful to us"],
        level: "remember"
      },
      {
        id: "protect-land-life",
        text: "I can explain how trees help soil and animals, and why we should not cut them needlessly.",
        topics: ["Plants are useful to us"],
        level: "understand",
        mistakes: [
          { id: "trees-only-wood", text: "Thinking trees are only useful for wood.", fix: "Trees also hold the soil together, give shade and oxygen, and give homes and food to birds and other animals." }
        ]
      }
    ]
  }
});
