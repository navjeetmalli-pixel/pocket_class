// Learning objectives for Class 5 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(5, {
  maths: {
    fractions: [
      {
        id: "like-unlike",
        text: "I can name the numerator and denominator of a fraction and tell like fractions from unlike fractions.",
        topics: ["Like and unlike fractions"],
        level: "remember",
        prereq: ["4/maths/fractions"],
        mistakes: [
          { id: "swap-parts", text: "Mixing up the numerator and the denominator.", fix: "The denominator (bottom) tells into how many equal parts the whole is cut. The numerator (top) tells how many parts we take." },
          { id: "like-means-small", text: "Calling 3/8 and 5/8 unlike because the numbers look different.", fix: "Like fractions are decided by the denominator only. 3/8 and 5/8 both have denominator 8, so they are like." }
        ]
      },
      {
        id: "add-sub-like",
        text: "I can add and subtract like fractions and mixed numbers, and write the answer in simplest form.",
        topics: ["Adding and subtracting like fractions"],
        level: "apply",
        prereq: ["5/maths/fractions#like-unlike"],
        mistakes: [
          { id: "add-denominators", text: "Adding the denominators too, so 2/7 + 3/7 = 5/14.", fix: "The parts are the same size (sevenths), so only count how many: 2 sevenths + 3 sevenths = 5 sevenths = 5/7." },
          { id: "not-simplest", text: "Leaving the answer as 2/4 instead of 1/2.", fix: "Divide the numerator and the denominator by their common factor to write the fraction in simplest form." }
        ]
      },
      {
        id: "add-sub-unlike",
        text: "I can add and subtract unlike fractions by first changing them to a common denominator.",
        topics: ["Adding and subtracting unlike fractions"],
        level: "apply",
        prereq: ["5/maths/factors-and-multiples", "5/maths/fractions#add-sub-like"],
        mistakes: [
          { id: "add-across", text: "Adding top with top and bottom with bottom, so 1/2 + 1/3 = 2/5.", fix: "Halves and thirds are different sized parts. Change both to sixths first: 3/6 + 2/6 = 5/6." },
          { id: "change-one-part", text: "Changing only the denominator and not the numerator when making an equal fraction.", fix: "Multiply the numerator and the denominator by the same number: 1/2 = 3/6, not 1/6." }
        ]
      },
      {
        id: "solve-and-check",
        text: "I can solve a word problem with fractions and check that my answer is sensible.",
        topics: ["Adding and subtracting like fractions", "Adding and subtracting unlike fractions"],
        level: "analyse",
        prereq: ["5/maths/fractions#add-sub-unlike"],
        mistakes: [
          { id: "bigger-after-subtract", text: "Not noticing that an answer is impossible, such as a sum of 1/2 and 1/3 that comes to more than 1.", fix: "Estimate first: 1/2 + 1/3 is a little less than 1. Compare your answer with the estimate." }
        ]
      }
    ]
  }
});
