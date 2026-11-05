// Learning objectives for Class 4 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(4, {
  hindi: {
    "sangya-ke-bhed": [
      {
        id: "paanch-bhed",
        text: "मैं संज्ञा के पाँचों भेदों के नाम बता सकता/सकती हूँ: व्यक्तिवाचक, जातिवाचक, भाववाचक, द्रव्यवाचक और समूहवाचक।",
        topics: ["संज्ञा के पाँच भेद"],
        level: "remember",
        prereq: ["3/hindi/sangya"]
      },
      {
        id: "dravya",
        text: "मैं द्रव्यवाचक संज्ञा पहचान सकता/सकती हूँ, यानी वे पदार्थ जिन्हें तौला या नापा जाता है, जैसे दूध, सोना, तेल।",
        topics: ["द्रव्यवाचक संज्ञा"],
        level: "understand",
        prereq: ["3/hindi/sangya"],
        mistakes: [
          { id: "dravya-gina", text: "द्रव्यवाचक संज्ञा को गिनकर बोलना, जैसे \"दो दूध\"।", fix: "दूध, सोना जैसे पदार्थ तौले या नापे जाते हैं, इसलिए \"दो लीटर दूध\" कहते हैं।" },
          { id: "dravya-vastu", text: "\"सोने की अँगूठी\" में अँगूठी को भी द्रव्यवाचक मान लेना।", fix: "सोना द्रव्यवाचक है, पर अँगूठी एक वस्तु का नाम है, इसलिए वह जातिवाचक है।" }
        ]
      },
      {
        id: "samuh",
        text: "मैं समूहवाचक संज्ञा पहचान सकता/सकती हूँ, यानी एक जैसी वस्तुओं या लोगों के समूह के नाम, जैसे सेना, झुंड, भीड़।",
        topics: ["समूहवाचक संज्ञा"],
        level: "understand",
        mistakes: [
          { id: "samuh-jati", text: "\"सैनिक\" और \"सेना\" को एक ही भेद की संज्ञा समझना।", fix: "एक सैनिक जातिवाचक संज्ञा है, पर बहुत से सैनिकों के समूह का नाम \"सेना\" समूहवाचक संज्ञा है।" }
        ]
      },
      {
        id: "vaakya-mein-pehchaan",
        text: "मैं किसी वाक्य में से संज्ञाएँ छाँटकर बता सकता/सकती हूँ कि वे किस भेद की हैं।",
        topics: ["संज्ञा के पाँच भेद", "द्रव्यवाचक संज्ञा", "समूहवाचक संज्ञा"],
        level: "apply",
        prereq: ["4/hindi/sangya-ke-bhed#dravya", "4/hindi/sangya-ke-bhed#samuh"]
      }
    ]
  },
  maths: {
    "addition-and-subtraction": [
      {
        id: "adding-4-digit-numbers",
        text: "I can add 4-digit numbers by lining up the places and carrying 1 to the next place whenever a column makes 10 or more.",
        topics: ["Adding 4-digit numbers"],
        level: "apply",
        prereq: ["3/maths/addition", "3/maths/numbers-up-to-999"],
        mistakes: [
          { id: "carry-forgotten", text: "Forgetting to add the carried 1, so 4,235 + 2,458 comes out one ten short.", fix: "Write the carry small above the next column and add it in: tens 3 + 5 + 1 = 9." },
          { id: "carry-both-digits", text: "Writing both digits of a column total, such as 13 in the ones place.", fix: "Each place holds one digit. Write 3 and carry the 1 to the tens." }
        ]
      },
      {
        id: "subtracting-4-digit-numbers",
        text: "I can subtract 4-digit numbers, borrowing from the next place when the top digit is smaller, even across zeros.",
        topics: ["Subtracting 4-digit numbers"],
        level: "apply",
        prereq: ["3/maths/subtraction", "4/maths/addition-and-subtraction#adding-4-digit-numbers"],
        mistakes: [
          { id: "smaller-from-bigger", text: "Always taking the smaller digit from the bigger one in each column, so 7,000 − 2,345 gives 5,345.", fix: "The top number stays on top. If its digit is smaller, borrow 1 from the next place instead of turning the sum around." },
          { id: "zero-borrow", text: "Not knowing how to borrow when the next digit is 0, or forgetting that the place you borrowed from is now one less.", fix: "Borrow 1 thousand: it becomes 10 hundreds. Keep going place by place, and remember each place you borrowed from is one smaller." }
        ]
      },
      {
        id: "checking-your-answer",
        text: "I can check an addition by subtracting and a subtraction by adding.",
        topics: ["Checking your answer"],
        level: "understand",
        prereq: ["4/maths/addition-and-subtraction#subtracting-4-digit-numbers"],
        mistakes: [
          { id: "check-same-way", text: "Checking a subtraction by subtracting again.", fix: "Use the opposite action: add the difference to the smaller number and you should get the bigger number back." },
          { id: "wrong-pair", text: "Adding the wrong two numbers when checking, for example the sum and one of the parts.", fix: "For a sum, take away one part and see if you get the other part: 6,693 − 4,235 = 2,458." }
        ]
      },
      {
        id: "solving-word-problems",
        text: "I can read a story problem, decide whether to add or subtract, and write the answer with its unit.",
        topics: ["Solving word problems"],
        level: "analyse",
        prereq: ["4/maths/addition-and-subtraction#checking-your-answer"],
        mistakes: [
          { id: "more-means-add", text: "Adding whenever the word \"more\" appears, even in \"how many more\" or \"how much more than\".", fix: "\"How much more\" compares two amounts, so subtract the smaller from the bigger." },
          { id: "unit-missing", text: "Giving only a number and leaving out the unit, or answering a different question than the one asked.", fix: "Re-read the last line of the problem and write the answer with kg, rupees or books." }
        ]
      }
    ],
    fractions: [
      {
        id: "parts-of-a-whole",
        text: "I can say what the numerator and denominator mean and write the fraction for a shape or story cut into equal parts.",
        topics: ["Parts of a whole"],
        level: "remember",
        prereq: ["3/maths/fractions"],
        mistakes: [
          { id: "swap-top-bottom", text: "Writing the fraction upside down, such as 5/2 for 2 pieces out of 5.", fix: "The bottom number is how many equal parts in all (5). The top number is how many parts we talk about (2). So it is 2/5." },
          { id: "unequal-parts", text: "Counting parts that are not equal in size as fractions.", fix: "A fraction needs equal parts. If the pieces are different sizes, it cannot be written as one fraction." }
        ]
      },
      {
        id: "like-fractions",
        text: "I can spot like fractions and add or subtract them by working only with the numerators.",
        topics: ["Like fractions"],
        level: "apply",
        prereq: ["4/maths/fractions#parts-of-a-whole"],
        mistakes: [
          { id: "add-denominators", text: "Adding the denominators too, so 2/7 + 3/7 = 5/14.", fix: "The parts are all sevenths, so only count how many: 2 sevenths + 3 sevenths = 5 sevenths = 5/7." },
          { id: "bigger-bottom-bigger", text: "Thinking that a bigger denominator means a bigger fraction.", fix: "A bigger denominator means the whole is cut into more, smaller pieces. 1/8 of a roti is smaller than 1/4." }
        ]
      },
      {
        id: "equivalent-fractions",
        text: "I can write equal fractions by multiplying or dividing the top and bottom by the same number, and write a fraction in simplest form.",
        topics: ["Equivalent fractions"],
        level: "apply",
        prereq: ["4/maths/fractions#parts-of-a-whole"],
        mistakes: [
          { id: "change-one-number", text: "Changing only the bottom, so 1/2 = 1/4, or adding the same number to the top and bottom.", fix: "Multiply or divide both numbers by the same number: 1/2 = 2/4 because 1 × 2 = 2 and 2 × 2 = 4." },
          { id: "stop-too-early", text: "Stopping at 2/4 when asked for the simplest form of 6/8.", fix: "Keep dividing top and bottom by a common number until you cannot: 6/8 = 3/4." }
        ]
      },
      {
        id: "fraction-of-a-group",
        text: "I can find a fraction of a collection, such as 3/4 of 20, by dividing by the denominator and then multiplying by the numerator.",
        topics: ["Fraction of a group"],
        level: "apply",
        prereq: ["4/maths/fractions#parts-of-a-whole", "3/maths/division"],
        mistakes: [
          { id: "stop-after-divide", text: "Finding 1/4 of 20 = 5 and stopping, so 3/4 of 20 is given as 5.", fix: "5 is only one part. Three parts make 3 × 5 = 15." },
          { id: "divide-by-top", text: "Dividing by the numerator instead of the denominator.", fix: "The denominator tells how many equal groups to make. 3/4 of 20: divide by 4 first, then take 3 of the groups." }
        ]
      }
    ]
  }
});
