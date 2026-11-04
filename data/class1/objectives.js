// Learning objectives for Class 1 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(1, {
  maths: {
    "addition-up-to-9": [
      {
        id: "meaning",
        text: "I can say that addition means putting groups together, and I can read the signs + and =.",
        topics: ["What is addition?"],
        level: "remember",
        prereq: ["1/maths/numbers-1-to-9"],
        mistakes: [
          { id: "equals-means-answer", text: "Thinking the = sign only means \"the answer comes now\".", fix: "The = sign means both sides have the same value, so 2 + 3 = 5 and 5 = 2 + 3 are both true." }
        ]
      },
      {
        id: "count-on",
        text: "I can add two numbers up to 9 by starting at the bigger number and counting on.",
        topics: ["Counting on"],
        level: "apply",
        prereq: ["1/maths/numbers-1-to-9", "1/maths/zero"],
        mistakes: [
          { id: "count-start-number", text: "Counting the starting number again, so 4 + 2 becomes 4, 5 (answer 5).", fix: "Say the start number, then count the next 2 numbers after it: 4 … 5, 6. The answer is 6." },
          { id: "start-small", text: "Starting from the smaller number and losing count.", fix: "Start from the bigger number. You then count fewer steps, so you make fewer mistakes." }
        ]
      },
      {
        id: "any-order",
        text: "I can show that adding in a different order gives the same answer, like 2 + 4 and 4 + 2.",
        topics: ["Counting on"],
        level: "understand",
        mistakes: [
          { id: "order-matters", text: "Thinking 2 + 4 and 4 + 2 give different answers.", fix: "Both are 6. Put 2 beads and 4 beads together; it does not matter which group you count first." }
        ]
      },
      {
        id: "story-sentence",
        text: "I can write an addition sentence for a picture or a small story, like 3 mangoes and 2 mangoes make 5 mangoes.",
        topics: ["What is addition?", "Counting on"],
        level: "apply",
        prereq: ["1/maths/addition-up-to-9#count-on"]
      }
    ]
  }
});
