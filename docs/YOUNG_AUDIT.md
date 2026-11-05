# Classes 1–3: pictures and read-aloud, step by step (audit, 5 Nov 2026)

A Class 1–2 child can't read, and a Class 3 child reads slowly. Every screen and step they use needs to work from
pictures and sound. This list goes through each one and records what it has today and what it needs. "Speak" means the
device reads it aloud (js/speech.js, offline device voices).

| Where | Step / part | Pictures today | Speech today | Needed |
|---|---|---|---|---|
| **Start** | Onboarding: who is using, class, board, learning style, subjects, name | Line icons | None | Picture choices (child / parent, subject art); every choice read aloud on tap; Mithu reads each question |
| **Today** | Mithu greeting | Mithu | None | Mithu says the bubble aloud |
| | Today's plan items | None | None | Subject art on each item; read the item when tapped |
| | Question of the day | Picture answers + question picture *(being built)* | Auto-read *(being built)* | — |
| | Subject tiles | Subject art | None | Read the subject name on tap |
| **Learn** | Subject grid, chapter list | Subject art; chapters text only | None | A picture per chapter (from its title or its first note); read the chapter name |
| **Chapter hub** | Section tiles (Understand, Explore, Play, Practise, Master) | Line icons | None | Read the section name; bigger pictures |
| | Understand: notes | None | Per point (button) | **Auto-picture each point** ("Count 3 mangoes" → 3 mangoes; nouns, shapes, colours, numbers) |
| | Understand: key terms, flashcards | None | Per term (button) | Picture per term (the term's noun) |
| | Understand: worked examples, Q&A | None | None | Pictures from the text; speak buttons |
| | Visualise: diagrams | The diagram | Title + caption | — |
| **Guided lesson** | Entry check (diag) | Picture answers if picturable *(being built)* | None | Auto-read each question and answers |
| | Think first / predict | Same | None | Same |
| | Idea steps (the notes, one skill at a time) | None | None | Auto-picture each point; auto-read the step |
| | Worked example, Complete it, Your turn, Find the mistake | Generator pictures for Maths only | None | Read each step; pictures from the text |
| | Teach-back, hook, done | None | None | Mithu reads the prompt; voice-free choices |
| | Practice, Master | Picture answers *(being built)* | None | Auto-read |
| **Practise / Master** | Quiz, practice, fresh questions, mock test | Picture answers + question pictures *(being built)* | Question + options (button); auto-read for Classes 1–2 *(being built)* | — |
| | Results summary | Mithu | None | Mithu reads the summary lines |
| **Play** | Game intro (how to play) | Line icon | None | Mithu reads "how to play" aloud; a short picture demo |
| | Match | Text cards | None | **Picture cards** where both sides are picturable (word ↔ picture); read a card on tap |
| | Sort | Text cards | None | Picture cards; read the group names |
| | Order / timeline | Text | None | Read each card on tap |
| | Letters, matras, words, sentences | Letters (text) | Speaker on the target | Picture of the word (a for apple → apple) |
| | Tracing (hidden until reviewed) | Letter | None | Say the letter's sound |
| | Race, quick-fire | Picture answers via items *(being built)* | None | Auto-read for Classes 1–2 is too slow for a race: read only on tap |
| | Number line, fractions | Pictures (fractions plates) | None | Read the task aloud |
| | Game results | Line icons | None | Mithu reads the result line |
| **Explore** | Labs for young classes (place value, fraction wall, geoboard, body, food web) | Lab drawings | None | Read each instruction and question |
| **Progress** | Stars, skills, certificates | Icons | None | Read the skill names on tap |
| **Revise** | My mistakes, due reviews | Same as quiz | Same as quiz | — |

Every row applies to **every subject** of Classes 1–5: Maths, English, EVS, Hindi and Punjabi (and SST/Science where a
Class 4–5 child meets them). Read-aloud picks the voice by script (English, Hindi, Punjabi); the picture dictionary has
English, Hindi and Punjabi words.

## The approach (so it reaches every screen and subject, not one at a time)

1. **"Read to me" button with Mithu** on every screen for Classes 1–3. It reads the screen's main content in order
   (heading → instruction → question → options), highlighting each sentence as it is read. Screens mark what to read
   with `data-read`; a sensible default covers the rest.
2. **Auto-read of the key prompt** when a new step or question appears (Classes 1–2; follows the Sound effects setting):
   game instructions, lesson steps, questions, the Mithu bubble, results.
3. **Auto-pictures from text** (`PicDict.illustrate`): any text block (note point, term, example, lesson step, game
   card) gets a picture when it names something the picture kit can draw ("3 mangoes", "a red ball", "triangle").
4. **Picture answers and question pictures** (being built now) for all MCQs.
5. **A coverage report** per class and subject, so we can see what still has no picture and draw it next.
