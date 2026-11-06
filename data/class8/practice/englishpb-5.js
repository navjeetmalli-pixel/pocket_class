// Class 8 English (PSEB) practice bank, part 5: extra questions for chapters with gaps. Extra practice (unreviewed draft).
(function () {
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation, objective id?): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain, obj) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    const o = { q, options, answer: at, explain, level };
    if (obj) o.obj = obj;
    return o;
  }
  // W(marks, question, model answer, type?, objective id?)
  function W(marks, q, a, type, obj) {
    const o = { q, a, marks };
    if (type) o.type = type;
    if (obj) o.obj = obj;
    return o;
  }
  StudyData.addPractice(8, "englishpb", {
    "pb-paragraph-story": {
      mcq: [
        M(1, "What should you do before you start writing a paragraph or story?", "Jot down ideas, then arrange them", ["Begin writing at once and fix it all later", "Copy the cue word for word", "Wait until you feel inspired"], "Plan before writing: jot down ideas, then arrange them.", "good-habits"),
        M(2, "Which habit helps the writing sound better?", "Avoiding the repetition of the same word", ["Repeating the key word in every single line", "Using very long sentences always", "Leaving out the full stops"], "Use simple, correct sentences and avoid repeating the same word.", "good-habits")
      ],
      written: [
        W(3, "List three good habits for writing a paragraph or a story.", "Plan before writing: jot down ideas, then arrange them. Use simple, correct sentences and avoid repeating the same word. Revise at the end: check spelling, punctuation and sentence sense.", "short", "good-habits")
      ]
    },
    "pb-value-of-money": {
      mcq: [
        M(1, "In which person is the lesson told?", "The first person", ["The third person", "The second person", "Passive voice only"], "It is told in the first person.", "about-the-lesson"),
        M(2, "What does the narrator do in the lesson?", "Looks back on an event from his teenage years", ["Plans a future journey to a distant country", "Reports a news item as a witness", "Describes an old family tree"], "It looks back on an event from the narrator's teenage years.", "about-the-lesson")
      ],
      written: [
        W(3, "Name the author of \"Value of Money\" as given in the book and describe how the lesson is told.", "The author given in the book is Vandana Lunyal. The lesson is told in the first person, with the narrator looking back on an event from his or her teenage years.", "short", "about-the-lesson")
      ]
    },
    "pb-charge-for-love": {
      mcq: [
        M(1, "Why does the boy understand the puppy?", "He too is disabled", ["He is the puppy's owner", "He once lived on a farm", "He is a trained vet"], "The boy understands the puppy because he too is disabled.", "theme"),
        M(2, "What does the theme say about every living being?", "Each has equal worth, whatever its weakness", ["Only the strong and able have any worth", "Pets have more worth than most people do", "Worth depends on the price that was paid for it"], "Every living being has equal worth, whatever its weakness.", "theme")
      ],
      written: [
        W(3, "What is the theme of \"Charge for Love\"?", "The theme is empathy: the boy understands the puppy because he too is disabled. Every living being has equal worth, whatever its weakness. Love cannot be priced, but things of value deserve respect, not charity.", "short", "theme")
      ]
    },
    "pb-glass-ceiling": {
      mcq: [
        M(1, "According to the theme, what should women get?", "Equal chances to work and grow", ["Fewer jobs than men", "Only household work and no study", "Chances only after the family agrees to it"], "Women should get equal chances to work and grow.", "theme"),
        M(2, "What comes from effort and achievement, not only degrees?", "Real qualification", ["A government post", "A large bank balance", "A foreign visa"], "Real qualification comes from effort and achievement, not only degrees.", "theme")
      ],
      written: [
        W(3, "What does \"Smashing the Glass Ceiling\" tell us about opportunities for women?", "Women should get equal chances to work and grow. Training, skills and support can lift anyone out of poverty. Real qualification comes from effort and achievement, not only degrees.", "short", "theme")
      ]
    }
  });
})();
