// Class 6 English (PSEB) practice bank, part 5: extra questions for chapters with gaps. Extra practice (unreviewed draft).
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
  StudyData.addPractice(6, "englishpb", {
    "pb-verbs-tenses": {
      mcq: [
        M(1, "Which word goes with \"I\" in the present tense?", "am", ["is", "are", "were"], "Am goes with I.", "is-am-are-and-was-were"),
        M(1, "Choose the correct sentence.", "The dog is hungry.", ["The dog are hungry.", "The dog am hungry.", "The dog were hungry."], "Is goes with he, she, it and singular nouns.", "is-am-are-and-was-were"),
        M(2, "Which word goes with \"children\"?", "are", ["is", "am", "was"], "Are goes with you, we, they and plural nouns.", "is-am-are-and-was-were"),
        M(2, "Which past form goes with \"he\"?", "was", ["were", "are", "am"], "Was is used with I, he, she and it.", "is-am-are-and-was-were"),
        M(2, "Which past form goes with \"they\"?", "were", ["was", "is", "been"], "Were is used with you, we and they.", "is-am-are-and-was-were")
      ],
      written: [
        W(3, "Write the forms of be used with I, he/she/it and we/you/they in the present and the past. Give one example.", "Present: am with I; is with he, she, it and singular nouns; are with you, we, they and plural nouns. Past: was with I, he, she and it; were with you, we and they. Example: \"The children are playing.\"", "short", "is-am-are-and-was-were")
      ]
    },
    "pb-my-furry-friend": {
      mcq: [
        M(1, "According to the poem, a pet becomes a", "member of the family", ["stranger at home", "toy in a shop", "guest in the family for a day"], "A pet becomes a real member of the family.", "theme"),
        M(2, "What does a pet bring, along with a little trouble?", "Fun and affection", ["Silence and sadness", "Money and fame", "Cold and fear"], "A pet brings fun and affection along with a little trouble.", "theme")
      ],
      written: [
        W(3, "What is the theme of the poem \"My Furry Friend\"?", "The poem celebrates the bond between people and animals. A pet becomes a real member of the family, bringing fun and affection along with a little trouble.", "short", "theme")
      ]
    },
    "pb-writing-a-letter": {
      mcq: [
        M(1, "According to the theme, a letter written with care shows", "love", ["anger", "boredom", "fear"], "A letter written with care shows love.", "theme"),
        M(2, "Which of these is a basic part of a letter taught by the poem?", "Date", ["Slogan", "Index", "Blurb"], "The poem teaches the date, address, greeting, message and ending.", "theme")
      ],
      written: [
        W(3, "What does the poem \"I am Writing a Letter\" teach us?", "It shows that a letter written with care shows love. It also teaches the basic parts of a letter: date, address, greeting, message and ending.", "short", "theme")
      ]
    },
    "pb-rosy-meets-nessy": {
      mcq: [
        M(1, "What does the story teach about judging others?", "Do not judge by size or what others say", ["Always trust what others say", "Big creatures are always scary", "Small creatures are always weak and harmless"], "Do not judge by size or by what others say; the monster turns out to be gentle.", "theme"),
        M(2, "What can a new friend do for a dull place?", "Make it exciting", ["Make it noisier", "Make it smaller", "Make it darker"], "A new friend can turn a dull place into an exciting one.", "theme"),
        M(2, "Which of these describes a myth?", "A story that may not be true", ["A word that sounds the same", "A letter written with care", "A poem about a pet"], "A myth is a story that may not be true.", "theme")
      ],
      written: [
        W(3, "What does Rosy's meeting with Nessy teach? Mention what is learned about myths and homophones.", "We should not judge by size or by what others say, because the 'monster' turns out to be gentle. A new friend can turn a dull place into an exciting one. Also, a myth is a story that may not be true, and homophones sound the same but differ in meaning.", "short", "theme")
      ]
    }
  });
})();
