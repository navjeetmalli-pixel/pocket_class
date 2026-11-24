// Class 10 English practice bank, part 4: Footprints without Feet, The Book that Saved the Earth (the play by Claire Boiko). Extra board-style questions for year-long practice (unreviewed draft).
(function () {
  const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    return { q, options, answer: at, explain, level };
  }
  // AR(level, assertion, reason, answer index, explanation): assertion-reason with fixed options.
  function AR(level, a, r, answer, explain) {
    return { q: "Assertion (A): " + a + "\nReason (R): " + r, options: AR_OPTS, answer, explain, level, keepOrder: true };
  }
  // W(marks, question, model answer, type?)
  function W(marks, q, a, type) {
    const o = { q, a, marks };
    if (type) o.type = type;
    return o;
  }
  StudyData.addPractice(10, "english", {
  "the-book-that-saved-the-earth": {
    mcq: [
      M(1, "The Book that Saved the Earth is a", "play", ["poem", "biography", "travel diary"], "It is a play, written mainly as dialogue between characters."),
      M(1, "Who is the author of the play?", "Claire Boiko", ["Robert Arthur", "Ruskin Bond", "H.G. Wells"], "The play was written by Claire Boiko."),
      M(1, "Who is Think-Tank's assistant in the play?", "Noodle", ["Omega", "Iota", "Oop"], "Noodle is Think-Tank's assistant; Captain Omega, Lieutenant Iota and Sergeant Oop are the crew on Earth."),
      M(1, "Where have the invaders come from?", "Mars", ["Venus", "The Moon", "Jupiter"], "The invaders are Martians."),
      M(1, "What is the book that the Martians find?", "A book of nursery rhymes", ["A guide to Earth's cities", "A manual on weapons", "A dictionary of Earth"], "It is a children's book of nursery rhymes."),
      M(1, "What did the Martians plan to do to Earth?", "Conquer it", ["Trade with it", "Study its animals peacefully", "Make friends with its people"], "They came to take control of Earth."),
      M(2, "The Martians take the rhyme about the cow jumping over the moon to mean that", "Earth has powerful animals", ["the moon is made of cheese like a rhyme says", "cows are worshipped by Earth's people", "Earth's cows already live on the moon"], "They read a silly rhyme as a serious sign of Earth's strength."),
      M(2, "The play's humour mostly comes from", "Martians taking rhymes as facts", ["Earthlings tricking the Martians cleverly", "a fierce battle fought in space", "a clumsy landing of the spaceship"], "Taking nonsense rhymes literally is the main source of comedy."),
      M(2, "Why is the title of the play ironic?", "A children's book saves the planet", ["The book is a very large volume", "The book is a guide about Mars", "Nobody ever reads the book"], "A harmless book ends the threat, which is the opposite of what we expect."),
      M(2, "Why do the Martians leave Earth at the end?", "They fear Earth is too strong", ["They have won the war and go home", "Their ruler calls them back home", "Earth's people have captured them"], "Their wrong reading of the book makes them fear Earth."),
      M(2, "What does it mean to 'misinterpret' something?", "To understand it wrongly", ["To translate it into another language", "To copy it carefully", "To forget it quickly"], "Misinterpret means to give it a wrong meaning."),
      M(2, "Which theme does the play support?", "Fear and ignorance can lead to wrong decisions", ["Strong weapons always bring victory", "Machines can replace all books", "Children's books are useless"], "The Martians decide in fear and with little knowledge."),
      M(2, "Stage directions in a play are", "instructions on how to speak or move", ["the names of the audience", "a summary of the play", "the title of each act"], "They guide actors and readers about action and tone."),
      M(1, "Which genre does the play belong to?", "Comic science fiction", ["Historical fiction", "Tragedy", "Detective story"], "It is a funny story of an imagined future with Martians."),
      M(2, "What does the play suggest about war?", "It may rest on fear and wrong beliefs", ["It is always necessary and wise", "It is only ever fought with books", "It cannot be avoided by careful thought"], "The invasion is dropped once the Martians believe Earth is strong, yet the belief was false."),
      M(3, "Which description best fits the Martians as shown in the play?", "Clever but quick to jump to conclusions", ["Careless and uninterested in Earth", "Wise, calm and always right", "Friendly, trusting and peaceful"], "They are clever but worried and mistaken."),
      M(2, "Which value does the title of the play point towards?", "The power of books", ["The value of great speed", "The value of great wealth", "The value of silence"], "A book changes the course of a whole planet's future."),
      M(2, "What does the play show about the Martians' knowledge of Earth?", "It was limited, so they misread things", ["It was complete and very exact", "It came from Earth's own scientists", "It was gathered over many long years"], "They had no context for the rhymes."),
      M(3, "The Martians' serious tone while discussing nursery rhymes creates", "humour through contrast", ["real fear in the audience", "deep sadness in the story", "a sense of long mystery"], "The audience knows the rhymes are harmless, so seriousness is funny."),
      M(1, "What is a 'nursery rhyme'?", "A short playful verse", ["A scientific report on children", "A long epic poem about heroes", "A sacred hymn sung in temples"], "Nursery rhymes are simple verses for small children."),
      M(2, "This play is the last lesson of which supplementary reader?", "Footprints without Feet", ["First Flight, the main reader", "Words and Expressions, the workbook", "Beehive, the Class 9 reader"], "It is the final lesson of Footprints without Feet."),
      AR(2, "The Martians abandon their plan to invade Earth.", "They believe the book proves that Earth has dangerous powers.", 0, "Their belief, though mistaken, is the reason for the retreat."),
      AR(2, "The Martians correctly understood the nursery rhymes.", "They took every line as a literal description of Earth's power.", 3, "A is false: they misunderstood. R is true: they read the rhymes literally."),
      AR(3, "The play ends without any fighting between Martians and Earth's people.", "A children's book can be more powerful than a weapon.", 1, "Both are true, but R is the general idea, not what explains the peaceful end; the cause was the Martians' misreading."),
      M(3, "Which sentence best states a message of the play?", "Understand before you judge", ["Never read any old books again", "Always attack your enemy first", "Hide children's books from strangers"], "The play warns against hasty conclusions drawn from fear.")
    ],
    written: [
      W(2, "Why did the Martians come to Earth? What did they hope to learn from the book?", "The Martians came to **conquer Earth**. Before acting, they wanted to know how strong Earth's people were, and they hoped the book they found would tell them **everything about the planet and its defences**."),
      W(2, "What is the book that the Martians find? How is it different from what they expect?", "The book is a **collection of nursery rhymes**, a children's book. They expected a **serious guide** to Earth's weapons, strength and plans, but it is only playful verse."),
      W(3, "Explain how the Martians misread the rhyme about the cow jumping over the moon.", "The Martians take the rhyme **literally**. Having no idea that it is a children's verse, they conclude that Earth has **powerful, high-leaping animals** that can cross to the moon. This makes Earth seem a great military threat, so they grow afraid."),
      W(3, "What is ironic about the way the Earth is saved in the play?", "We expect a planet to be saved by **armies or weapons**. Here a **children's book** saves it, and not through what it says but through how the Martians **wrongly understand** it. The invaders are defeated by their own fear and ignorance, without a fight."),
      W(3, "How does the playwright create humour in the play? Give two ways.", "Humour comes from (1) the Martians **reading nonsense rhymes with great seriousness**, which is a contrast the audience enjoys, and (2) their **literal misunderstanding** of ordinary Earth ideas. The audience knows far more than the characters, which makes each mistaken conclusion funny."),
      W(4, "'Fear of the unknown makes people draw wrong conclusions.' How does the play support this statement?", "The Martians know little about Earth, so they are **anxious** and ready to believe the worst. When one of them offers an interpretation of the rhymes, the others accept it without question. Their **fear and ignorance** make them think Earth is a dangerous planet. As a result, they give up their plan and flee. The play shows that **hasty judgement from fear** can lead to serious mistakes, and that understanding comes before safe decisions."),
      W(4, "What message does the play give about books and knowledge? Support your answer with the plot.", "The play shows that **books carry knowledge, imagination and culture**, and can shape even the fate of a planet. Here, a simple book of rhymes decides what the Martians do. Their **wrong reading** also warns that a book must be understood properly, with its context. So books are powerful, but only when read with care and understanding."),
      W(5, "Describe the plot of 'The Book that Saved the Earth' in your own words, and state the theme.", "In the play, a historian of the far future tells how **Martians** once planned to take over Earth. They find an old **book of nursery rhymes** and, thinking it records Earth's powers, read the rhymes as **serious facts**. A rhyme about a cow jumping over the moon seems to show that Earth has remarkable creatures. Impressed and frightened, they decide that Earth is too strong and **leave in haste**. The planet is saved by a harmless book. The play's themes are the **power of books**, the danger of **misunderstanding**, the effect of **fear and ignorance**, and the folly of war."),
      W(5, "Write a character sketch of the Martians as shown in the play.", "The Martians are **advanced in science and technology**, since they can travel across space to Earth. Yet they are **anxious and over-cautious**, and ready to believe what the most confident among them says. They lack **knowledge of Earth's culture**, so they take nursery rhymes **literally**. Their seriousness is comic, and their **fear** drives them away. Through them, the writer shows that cleverness without understanding can lead to foolish decisions."),
      W(4, "Case study: The Martians read 'a cow jumped over the moon' and decide that Earth has dangerous animals. (i) Why did they reach this conclusion? (ii) What does this show about how they read? (iii) What should they have done?", "(i) They were **ignorant of Earth's culture**, saw no clue that the line was a playful rhyme, and were already afraid.\n(ii) They read **literally** and without checking, accepting one confident view.\n(iii) They should have learned about Earth's **language and customs**, questioned their reading, and gathered more evidence before deciding.", "case")
    ]
  }
  });
})();
