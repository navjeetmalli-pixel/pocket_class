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
  },
  maths: {
    addition: [
      {
        id: "adding-in-columns",
        text: "I can write 3-digit numbers one under the other, with ones under ones, and add column by column when nothing needs carrying.",
        topics: ["Adding in columns"],
        level: "apply",
        prereq: ["3/maths/numbers-up-to-999", "2/maths/addition-with-carrying"],
        mistakes: [
          { id: "misaligned", text: "Not lining up the places, so a 2-digit number is added under the wrong columns, like 245 + 32 with the 3 under the 4.", fix: "Start from the right. Ones go under ones, tens under tens, hundreds under hundreds. The 32 has no hundreds, so leave that place empty." },
          { id: "left-first", text: "Adding the hundreds first and getting muddled later.", fix: "Always begin with the ones. Then any carry moves left to the next column." }
        ]
      },
      {
        id: "carrying-from-the-ones",
        text: "I can carry 1 ten to the tens column when the ones add up to 10 or more.",
        topics: ["Carrying from the ones"],
        level: "apply",
        prereq: ["3/maths/addition#adding-in-columns"],
        mistakes: [
          { id: "write-whole", text: "Writing the whole 13 in the ones place instead of 3 with a carry of 1.", fix: "Each place holds one digit. 13 ones is 1 ten and 3 ones, so write 3 and carry the 1 ten." },
          { id: "forget-carry", text: "Forgetting to add the carried 1 in the tens column, so 178 + 145 comes out as 313.", fix: "Write the small 1 above the tens column and add it with the other tens: 7 + 4 + 1 = 12." }
        ]
      },
      {
        id: "carrying-from-the-tens",
        text: "I can carry 1 hundred to the hundreds column when the tens add up to 10 or more, and add the carried 1 along with the digits.",
        topics: ["Carrying from the tens"],
        level: "apply",
        prereq: ["3/maths/addition#carrying-from-the-ones"],
        mistakes: [
          { id: "carry-lost", text: "Dropping the carried 1 when the tens make 12, so the hundreds are one short.", fix: "12 tens is 1 hundred and 2 tens. Write 2 and add the 1 hundred to the hundreds column." },
          { id: "carry-wrong-column", text: "Adding the carry to the wrong column, for example putting the carried 1 with the ones.", fix: "A carry always goes to the column on its left, the next bigger place." }
        ]
      },
      {
        id: "checking-your-answer",
        text: "I can estimate by rounding and add in a different order to check that my answer makes sense.",
        topics: ["Checking your answer"],
        level: "understand",
        prereq: ["3/maths/addition#carrying-from-the-tens"],
        mistakes: [
          { id: "estimate-exact", text: "Expecting the estimate to match the exact answer, or rounding one number up and the other the wrong way.", fix: "An estimate is only close. Round both numbers to the nearest ten or hundred, add them, and see that your answer is near it." },
          { id: "same-order-check", text: "Checking by doing exactly the same sum again and repeating the same slip.", fix: "Swap the order, 145 + 178 instead of 178 + 145. A different path catches a mistake." }
        ]
      }
    ],
    "multiplication-tables": [
      {
        id: "multiplication-means-equal-groups",
        text: "I can say that 3 × 4 means 3 groups of 4, write it as repeated addition, and know that 3 × 4 = 4 × 3.",
        topics: ["Multiplication means equal groups"],
        level: "understand",
        prereq: ["2/maths/multiplication-as-repeated-addition"],
        mistakes: [
          { id: "times-is-plus", text: "Doing 3 × 4 as 3 + 4 = 7.", fix: "3 × 4 means 3 equal groups of 4: 4 + 4 + 4 = 12." },
          { id: "order-matters", text: "Thinking 4 × 3 gives a different answer from 3 × 4.", fix: "Changing the order does not change the answer. 4 groups of 3 and 3 groups of 4 both make 12." }
        ]
      },
      {
        id: "tables-of-2-5-and-10",
        text: "I can count in twos, fives and tens and say the facts of the 2, 5 and 10 tables.",
        topics: ["Tables of 2, 5 and 10"],
        level: "remember",
        prereq: ["3/maths/multiplication-tables#multiplication-means-equal-groups"],
        mistakes: [
          { id: "five-ending", text: "Thinking a number like 32 or 58 is in the 5 table.", fix: "Every multiple of 5 ends in 0 or 5: 5, 10, 15, 20, 25 ..." },
          { id: "ten-add-zero", text: "Answering 10 × 7 as 17.", fix: "10 × 7 is seven tens, which is 70. Put a 0 after the 7." }
        ]
      },
      {
        id: "using-tables-you-already-know",
        text: "I can work out a harder table fact from one I know, by using doubles or by adding one more group.",
        topics: ["Using tables you already know"],
        level: "apply",
        prereq: ["3/maths/multiplication-tables#tables-of-2-5-and-10"],
        mistakes: [
          { id: "neighbour-fact", text: "Slipping to a nearby table fact, for example saying 7 × 8 = 49 (that is 7 × 7) or 54.", fix: "Build from a fact you are sure of. 7 × 7 = 49, and one more group of 7 gives 7 × 8 = 56." },
          { id: "forget-extra-group", text: "Using 5 × 8 = 40 for 6 × 8 and forgetting to add one more group of 8.", fix: "6 × 8 is 5 groups of 8 plus one more group of 8: 40 + 8 = 48." }
        ]
      },
      {
        id: "9-times-table-trick",
        text: "I can use the 10 times table and take away one group to find a fact in the 9 times table.",
        topics: ["9 times table trick"],
        level: "apply",
        prereq: ["3/maths/multiplication-tables#tables-of-2-5-and-10"],
        mistakes: [
          { id: "take-away-nine", text: "Taking away 9 instead of one group, so 9 × 4 = 40 − 9 = 31.", fix: "9 × 4 is 10 × 4 take away one group of 4: 40 − 4 = 36." },
          { id: "stop-at-ten", text: "Giving the 10 times answer and forgetting to take away a group.", fix: "10 × 4 = 40 is one group too many. Subtract 4 to get 9 × 4 = 36." }
        ]
      }
    ]
  }
});
