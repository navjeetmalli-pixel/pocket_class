# Pocket Class India · Class 1–12 Study App

An offline study app for Indian school students, following the CBSE / NCERT syllabus for Classes 1 to 12.

**Open the app: https://navjeetmalli-pixel.github.io/pocket_class/**: on a phone, open it in Chrome or Safari and choose *Add to Home screen*.

**Subjects**

| Classes | Subjects |
|---|---|
| 1–2 | Maths, English, Hindi, Punjabi |
| 3–5 | Maths, EVS, English, Hindi, Punjabi |
| 6–10 | Maths, Science, Social Science, English, Hindi, Punjabi |
| 11–12 | Physics, Chemistry, Maths, Biology · Accountancy, Business Studies, Economics · History, Geography, Political Science · English, Hindi, Punjabi |

**For every chapter**
- **Notes**: revision notes, a formula / key-facts box, key terms, and labelled diagrams (over 790 across Classes 3–12: ray diagrams, circuits, graphs, cells, cycles, timelines, all drawn to scale)
- **Flashcards**: flip cards for key terms, with "know it / still learning" tracking
- **Practice**: solved examples and board-style questions with model answers
- **Quiz**: MCQs with instant feedback and explanations
- **Lesson** (every chapter, every subject): the chapter's learning loop, see "Chapter learning loop" below. It keeps the older guided-lesson steps for Maths, Science, Physics and Chemistry: a no-pressure question first, the notes one skill at a time, a worked example, **worked-example fading**, a similar question with the steps as hints, **Find the mistake**, mixed recall questions with a "how sure are you?" check, a question that leads into the next chapter, and a **teach-back** at the end
- **Teach-back** (every chapter's Notes tab and the end of the guided lesson): "Explain it in your own words" box, saved on the device per chapter, then a checklist of the chapter's headings and key formulas to tick. Nothing is graded
- **Experiments** (Notes tab, after the notes): six offline simulations, each with predict, change a variable, observe and explain: convex lens and concave mirror image formation, Ohm's law (one resistor, series, parallel), simple pendulum, projectile motion, refraction and total internal reflection, and the graph of y = ax² + bx + c. They sit on the matching chapters (Class 10 Light and Electricity and Quadratic Equations; Class 11 Motion in a Plane, Oscillations and Quadratic Equations; Class 12 Ray Optics and Current Electricity; Class 8 light and electricity) in `js/sims.js`

**Books**: CBSE follows the current NCERT books, including the new 2026–27 Class 9 books (Ganita Manjari, Exploration, Understanding Society, Kaveri, Ganga) and the new Classes 1–8 books. English and Hindi include every lesson of the current NCERT readers, summarised in our own words.

**Boards**: CBSE / NCERT for Classes 1–12. PSEB (Punjab Board), from its 2026–27 syllabus: Classes 1–5 use the topic-based content (PSEB sets learning outcomes, not lesson lists); Classes 6–9 have the earlier NCERT Maths and Science books that PSEB still uses, plus PSEB Social Science and English; Class 10 has NCERT Maths and Science plus PSEB Social Science, English, Hindi and Punjab History and Culture; Classes 11–12 have the sciences, maths and commerce (same NCERT units) plus PSEB's own English, Hindi, History (Class 12: history of the Punjab) and Political Science. PSEB English lessons were checked against the PSEB textbooks (2023–24 edition).

**Practice**
- **Practice sheets**: choose chapters and question types (MCQ, short and long answer, maths problems), then print with an answer key. Sheets are numbered: the same number always gives the same sheet, the next number a new one.
- **Fresh maths, physics and chemistry questions**: 153 question types (from Class 1 addition to Class 12 integrals, Class 8–12 physics numericals and Class 9–12 chemistry calculations) that change the numbers every time, with worked steps.
- **Practice banks** (every chapter, Classes 1–12, both boards): over 30,000 MCQs at up to three levels (assertion–reason and case-based from Class 6) and over 18,000 written questions (1–5 marks) with model answers. Together with each chapter's own quiz and Q&A that is over 43,000 MCQs and over 23,000 written questions, plus over 1,100 solved examples and over 11,000 flashcard terms in about 2,300 chapter files across both boards. These totals come from `node scripts/count-content.js`; rerun it and update this line and `STORE_LISTING.md` whenever content grows. Classes 1–5 get shorter, age-appropriate sets. Each quiz round draws a fresh set.
- **Sample papers** (Classes 9–12): full papers in the board pattern (70 or 80 marks, 3 hours, sections A–F with internal choices) and a marking scheme; every paper number is a new paper.

**Study tools**
- **Mock test**: timed test across a whole subject, chosen chapters, or all subjects, with a per-chapter score breakdown
- **My mistakes**: every wrong answer is saved so you can practise it until you get it right
- **Due today**: spaced revision. A chapter comes back 1, 3, 7, 14 and 30 days after you study it (quiz, guided lesson or revision round), with its open mistakes first and then fresh questions plus a few from earlier chapters of the same subject, every question labelled with its chapter; "Revise all" mixes every due chapter into one round
- **Formula sheets**: all formulas / key dates of a subject on one printable page
- **Focus timer**: Pomodoro timer (15/25/45/60 min) that keeps running while you study
- **Progress**: daily streak, minutes studied this week, chapter completion, quiz history
- **Several students on one device**: Settings → *Students* adds, renames, switches and deletes students; each has their own profile, progress, mistakes, bookmarks, streak and revision schedule, and a switcher appears on Home. Backups hold every student
- **Read aloud** (Classes 1–3 in every subject, English / Hindi / Punjabi in Classes 4–5): a speaker button beside note points, key terms, flashcards and quiz questions, using the device's own English, Hindi or Punjabi voice (hidden when the device has none)
- **For parents** (`#/parent`, from Settings and Progress): a printable one-page summary with study minutes for 7 days, streak, chapters done, quiz and test scores, the weakest chapters, open mistakes and chapters due for revision
- **Daily reminder** (phone apps only): Settings → *Daily reminder* schedules one local notification a day at a chosen time (`@capacitor/local-notifications`), off by default
- **Question of the day**, search across all notes, bookmarks, light/dark theme

Progress is saved only on the device (browser storage). No account, no internet needed after the first visit. Settings → *Save backup* downloads it as a file, which *Restore backup* loads on another phone.

## Onboarding and learner profiles

**First-time setup** (`js/views/onboarding.js`) is one screen per step with a back button and progress dots; the current step is saved in the learner's profile, so setup resumes after the app is closed. Student path: Welcome ("Your world of learning starts here.") > Who is using (Student / Parent or Guardian) > Board (CBSE / PSEB) > Class (1 to 12) > Learning view (Class-wise, recommended, or Subject-wise) > Subjects (from `Store.availableSubjects()`: all ticked in Class-wise, at least one or "Decide later" in Subject-wise) > About you (name, one of 12 built-in SVG pictures, app language, lesson language) > Daily goal (15, 20 or 30 minutes, or "I'll decide later"; no notification prompt) > a skippable three-card tour > Home. Parent path: after Who is using, add one or more children (name, class, board), then "Who is learning now?"; the chosen child carries on from the learning view, the others are saved with the defaults (Class-wise, every subject) and can be switched to in Settings. While the current learner is in setup the app shows only these screens (no tabs). No date of birth, school or contact details are asked. Each step moves focus to its heading and announces "Step n of N"; choices use `aria-pressed`. Classes 1 and 2 get bigger buttons and simpler wording (`body[data-band]`, set from the class in `App.render`: `1-2`, `3-5`, `6-8`, `9-10`, `11-12`; only setup uses it so far).

**Profile data.** Each student's `profile` is `{ name, cls, board, role, avatar, view, subjects, learnLang, goal, setup }`: `role` "student" or "parent-managed"; `avatar` an id from `Store.AVATARS` ("a01" to "a12", drawn in `js/avatars.js`) or null (the first letter of the name is shown); `view` "class" or "subject"; `subjects` the picked subject ids or null (every subject of the board and class); `learnLang` "en", "hi" or "pa" (lesson language, separate from the app language, which stays a device setting; stored now, lessons do not switch language yet); `goal` 15, 20, 30 or null; `setup` `{ step, done }`. `cleanProfile` in `js/store.js` gives every field its default and repairs damaged ones whenever a save, a backup or an imported file is loaded (written as `pv: 1` in the save), so saves and backups from before profiles load unchanged and count as setup done. Backups include the fields. Helpers: `Store.setProfile(patch)` (changing board or class drops picked subjects the new board and class do not offer and returns their ids; progress is never touched), `Store.droppedBy(patch)` (the same list, to ask first), `Store.availableSubjects()`, `Store.selectedSubjects()`, `Store.shownSubjects()`, `Store.goal()`, `Store.inSetup()`.

**Profile page** (`#/profile`, `js/views/profile.js`, opened from the picture on Home or the first card in Settings) edits name, picture, board, class (a confirm names any picked subjects that would be dropped), learning view, subjects, lesson language and daily goal. Settings keeps its own name, class and board controls (with the same confirm), and the Students list shows pictures.

**What follows the profile.** Home lists every subject in Class-wise view and only the picked ones in Subject-wise view. Today's plan only picks lessons, reviews, practice and Practice-by-topic items from the picked subjects (also in Class-wise: untick a subject in the Subjects step or the Profile to leave it out), and the daily goal replaces the plan's time budget (`Plan.budget`). The Learn tab is not built yet. Design tokens (`--navy`, `--blue`, `--green`, `--amber`, `--purple`, `--coral`, `--ui-*`, light and dark) are in `css/styles.css`; only the setup and profile screens use them so far. Tests: `tests/onboarding.spec.js`, `tests/profile.spec.js`.

## Practice by topic

`#/paths` is a subject, topic, level ladder for Maths, Science, English and Punjabi, from Level 0 (before Class 1) up to advanced, built from chapters that already exist in other classes (`data/paths/{subject}.js`, loaded when the subject is opened). Each level has short notes, a worked example, links to the full chapters, "Practice 10 questions" (80% masters the level and unlocks the next; any level can still be opened with "Skip ahead"), and a printable numbered worksheet. "Find my level" asks about 2 questions per level and stops after two misses in a row. Progress is saved per student (`paths` in the student's data, so backups and student switching include it). Wrong answers go to My mistakes. Code: `js/views/paths.js`; format: CONTENT_GUIDE.md.

## Learning objectives and mastery

Every chapter has 3 to 6 **learning objectives** ("I can …" statements). Where a chapter has none written, the app derives one per notes topic ("Understand: <heading>"). Hand-written ones live in `data/class{N}/objectives.js` (one small file per class, loaded with the class's subjects; the class must be listed in `objectivesCatalog` in `data/registry.js`), format in CONTENT_GUIDE.md. Code: `js/objectives.js` (objectives of a chapter, and `Objectives.forQuestion`, which maps any quiz, practice or generated question to an objective: a `q.obj` if the question names one, else the best word match against each objective's text and the notes under its topics, else the first), `js/mastery.js` (thresholds and states), `js/learn.js` (recording and reading).

**Learning record.** Each student has `learn: { v, events, roll }` (versioned, local only, included in backups; backups and saved data without it load as empty). `events` is the newest 5,000 of `{ t, type: "answer" | "hint" | "lesson-step" | "game" | "teach" | "decision" | "diagnostic", cls, subject, chapter, obj, ok, hints, attempt, source: "quiz" | "practice" | "guided" | "game" | "path" | "test" | "revise", err? }`; `roll` holds a small summary per objective (`"10/maths/real-numbers#hcf"`), updated as each event is logged, so trimming the log loses nothing. Events come from chapter quizzes, mock tests, My mistakes and revision rounds (when the round ends), the Practice-by-topic rounds and starting check, the guided lesson (ideas met, hints, answers), games (every multiple-choice answer, plus one `game` event) and teach-back ticks.

**Mastery** is worked out per objective from accuracy, independence (right with no hint) and retention (right at least 2 days after the first success), never from one percentage. States: Not started, Introduced, Learning, Practising, Nearly independent, Mastered for now, Review due, Needs a refresher. "Mastered for now" gets a review date on a ladder (2, 5, 10, 21, 45 days); a right recall climbs a rung, a failed one gives "Needs a refresher" and the shortest interval. Objectives that are due bring their chapter into **Due today** and their questions come first in the revision round; the chapter-level schedule (1, 3, 7, 14, 30 days) still works as before. Every threshold is in `Mastery.config` (including the Practice-by-topic pass mark, default 80%, which was fixed in the code before). The `err` of a wrong answer is the tag of the wrong option when a made-up question's generator tags it (`slip`, `sign`, `scale`, `method`), otherwise `unknown`; a kind of error is only called a pattern after 3 repeats, and the screens never label a child from one answer.

**Where it shows.** The chapter's Notes tab starts with "What you can do" (each objective with a chip: colour, a mark and the words); Progress shows counts per state for each subject; the Parent page lists "Can do now", "Practising" and "To review" in plain words; quiz and game results list the skills that moved forward. `node scripts/check-objectives.js [class subject chapter] [--show n]` reports how many questions map to each objective, and a leave-one-out check of the mapping. `node scripts/validate.js` checks every objectives file (chapters and notes topics exist, 3 to 6 per chapter, unique ids, prerequisites resolve, text in the chapter's language). Tests: `tests/objectives.spec.js`.

**Content review states.** `syllabus.status` (optional) is one of draft, subject-review, curriculum-review, language-review, approved, published, needs-revision; without it `reviewed: false` means draft and a review date means published. The subject page says which, in the app's language.

## Chapter learning loop

The chapter page's **Lesson** tab (`js/guided.js` for the screens, `js/loop.js` for the content choices and rules) runs one learning loop for every subject, built only from what the chapter already has. Stages (spec 5.1), each left out when the chapter has nothing for it:

- **Diagnose** (`diag`): 3 to 6 easy questions on the earlier work the chapter builds on: the hand-written `prereq` links of its objectives (other chapters only; classes or subjects not loaded yet are fetched, and dropped when offline), else the previous chapter or two of the subject. Skipped for a first chapter. Not graded: answers are logged as `diagnostic` events that name no skill, so they change no mastery state.
- **Discover** (`think`, `resolve`): the "Think first" question, or the prediction of the chapter's experiment (`Sims.predictionFor`) when it has one.
- **Visualise** (`visual`): the chapter's diagrams.
- **Explain** (`idea:N`): the notes grouped by objective, one "I can ..." at a time, then the opening question resolved, a worked example, a faded example, "Your turn" with hints, and Find the mistake (where the chapter has solutions with numbers).
- **Interact** (`interact`): the chapter's experiment, or one relevant game played inside the lesson (a game not played yet, not Quick-fire; "A different game" cycles).
- **Retrieve** (`practice`): 3 or 4 questions mixed across the objectives, no notes, with a confidence check.
- **Master** (`master`): one independent check per objective, no hints, filed against that objective (`q.obj`).
- Then **Next up** and an end screen: the skills before and after (chips), what to do next with its reason, how the route was chosen, and the teach-back box.

Subject variations are only ordering and words (`Loop.kindOf`, `VARIANT_LABEL`): Physics runs the experiment before the notes (predict, experiment, explain and calculate), languages say "Listen and read / Read and notice / Construct", Maths says "Notice / Play with it", Chemistry "Predict / Model it".

**Routes.** `Loop.RULES` is one list; each rule has an id, the point it is asked at, a test, a reason (the sentence the student reads, always shown, in the app's language) and what the lesson does. Every fired rule is saved as a `decision` event (`rule`, `choice`: `applied`, `offered` or `accepted`; no skill). Thresholds are in `Loop.config`.

| Rule | When | What happens |
|---|---|---|
| `weak-diagnostic` | fewer than 60% of the entry check right | a "Quick refresher" step: a short recap of the earlier chapter missed most, with links to its lesson and notes |
| `mastered-skip` | an objective is already "Mastered for now" | its Explain step offers "Skip this idea" |
| `worked-followed` | the student says they followed the worked example | the faded example follows, with the reason shown |
| `worked-another` | the student asks for another example | a second worked example (when the chapter has one) |
| `repeat-error` | 2 wrong answers on one objective in a lesson | a button "Show me another way": its diagram, else the experiment, else a game, else the key terms |
| `hints-many` | "Your turn" right but with 2 or more hints | a similar question with no hints |
| `strong-independent` | a Master check right with no hint | a transfer question for that objective (a level-3, case or assertion-reason question; a case study from the written bank is self-checked and not scored) |

The end screen's next step is chosen the same way (`Loop.recommend`): notes for an objective whose check was wrong, else Practise my mistakes, else the quiz, else the next chapter.

**Feedback after a wrong answer** (`Learn.feedback`, used by the chapter quiz, the lesson and Quick-fire; the games' "What you got wrong" list gets the same line): the explanation of the right answer as before, then, when the objective has hand-written `mistakes`, the one whose words the chosen option shares (two shared words or a shared pair, and 40% of the option's words), otherwise "A common mistake here is ..." with its first listed mistake; for a made-up question whose wrong option is tagged `slip`, `sign`, `scale` or `method`, one short tailored line. Chapters without hand-written mistakes only get the tailored line.

**Saving and resuming.** The unfinished lesson of each chapter is saved per student as `loop: { "10/maths/real-numbers": { at, snap } }` (the whole route, the questions drawn and the answers given, so the same questions come back); it is cleared when the lesson finishes or the student taps "Start again", and ignored after 30 days. Tests: `tests/learning-loop.spec.js`.

## Home, Today's plan and readiness

**Home** (spec 9.2) puts one main action first, then everything else in order: **Continue learning** (the exact page the student was last on: a chapter tab, a game, a Practice-by-topic level; the router saves it as `lastAct` through `Plan.noteRoute`, and a lesson's step is added when the page shows one; a new student sees "Start here" with the first plan item), **Today's plan**, **Explore / Play** (one game, or an experiment on alternate days when the chapter has one), **My progress** (compact), **Subjects**, and **More tools** (a folded section holding mock test, mistakes, timer, formula sheets, games, Practice by topic, sheets, sample papers and the question of the day). Classes 1 to 3 get the same screen with bigger tiles, fewer plan items and fewer tools.

**Today's plan** (`js/plan.js`, rules are fixed and each item shows its reason). About 18 minutes (10 for Classes 1 to 3). In order, while the time allows: up to 2 **reviews** (1 for Classes 1 to 3) from the chapters in Due today, skills due first, then open mistakes, then the chapter schedule, about 5 minutes each; one **lesson**, the next chapter not started in the subject the student uses most (answers, quizzes and chapters opened), or the next level of the Practice-by-topic topic used last when that is more recent than the last chapter, about 8 minutes (5 for Classes 1 to 3); one short **practice**, a quiz on the chapter of the weakest started skill (lowest share right, at least 2 answers, not due for review), about 5 minutes, left out when its chapter is already in the plan. The plan is kept per day (`plan` in the student's data): items stay until finished or no longer due, each type has one place so finishing the lesson does not bring a second one, and finished items stay ticked. An item is ticked from the record after it was added (a revision round; the guided lesson, a quiz or 3 lesson steps; 5 answers or a game; a path level round) and one `plan` event is logged through `Learn.plan`. Every number is in `Plan.config`.

**Readiness** (`js/readiness.js`, spec 14.3) keeps two measures apart, per subject and per chapter, on Progress (with a next step each) and in plain words on the parent page. *Concept learning* puts each started skill in one stage from the mastery states: understanding, practising, remembering (right now but not yet shown after a delay, or a review is due) and ready to apply (mastered and right after a delay, `Readiness.config.retention`). *Exam readiness* comes only from mock tests (answered without hints or feedback): chapters tried and chapters in a mock test, accuracy by format (multiple choice, assertion-reason; saved per chapter as `exam` through `Store.recordQuiz`) and accuracy with the clock on. Speed is never scored, and written answers (2, 3 and 5 marks) and printed sample papers are not marked by the app, so they are not counted.

**Recognitions** (spec 8.5, on Progress, `Readiness.rewards`) are worked out from the record each time: improving after feedback (right twice in a row after a wrong answer), remembering after a break, finishing a skill written at apply or analyse level without hints, a teach-back with an explanation and two key points ticked, and reaching "Mastered for now". They have no points, ranks or levels. The streak can be turned off in Settings ("Show streak", per student, `prefs.streak`); a day with no study shows a dash, never a zero, and nothing is lost by missing a day. Tests: `tests/home-plan.spec.js`.

## Games

Play is a small offline game system with 17 game types (`js/games/engine.js`, one file per game type, screens in `js/views/games.js`). Every chapter page has a **Play** tab listing the games it can make; a Practice-by-topic level has a **Play** button (games built from the level's chapters); Home has a **Games** card (`#/games`: subject, chapter, game, or "Random game"). Routes: `#/play/{cls}/{subject}/{chapter}[/{type}]` and `#/play/level/{subject}/{topic}/{level}[/{type}]`. Games are filled automatically from existing chapter content, so no extra content is needed.

- **Match pairs**: six key terms against their meanings (`terms`; chapters with 4 or more terms), timed, wrong matches cost points.
- **Label the diagram**: hides 3–6 `<text>` labels of a chapter diagram (not numbers, single characters, repeated or "(note)" text) and shows numbered blanks; drag a label onto a blank, or tap a label then a blank.
- **Quick-fire**: 60 seconds of MCQs (chapter quiz, practice bank, generated questions), 3 lives, streak bonus, harder questions (`level`) as the streak grows. Wrong answers go to My mistakes.
- **Sort into groups**: 2–3 boxes and 6–10 items; drag or tap each item into its group. Groups are the chapter's notes headings; items are phrases set in bold at the start of a note point that occur under exactly one heading (for a level: the key terms of each of its chapters). Offered only when at least 2 groups have 2+ such items and there are 6+ in all; language subjects are skipped.
- **Put in order**: shuffled steps of a solved example or generated question (Maths, Science, Physics, Chemistry, Accountancy, Economics); drag the handle, tap a step then its place, or use the arrows; Check marks right and wrong places. Used only when 3–6 steps clearly build on each other (and are not labelled (i), (ii)…).
- **Timeline**: 5–7 events from `data/games/timelines.js` (`StudyData.addTimelines`, loaded when a Play page opens; a longer list gives a random 6) dragged or tapped onto a timeline; Check locks the right ones and shows their years. Checked by `scripts/validate.js`.

The shell gives every game a how-to, Start, score, timer, lives, streak, pause (button or Esc; also when the page is hidden), 1–3 stars, a results page with "What you got wrong", Play again, and saves the best score and stars per student per chapter or level (`games` in the student's data, so backups and student switching include it). Games respect reduced motion and are usable by keyboard and screen reader.

**Maths games** (`js/games/mathkit.js` plus `numberline`, `fractions`, `balance`, `angles`, `graphs`, `race`): visual games chosen by chapter id and class (`MathKit.scope` also reads Practice-by-topic level ids), seeded so each replay differs, with Punjabi/Hindi lines in `js/games/mathtext.js`. `node scripts/check-games.js` (also run by `validate.js`) audits the maths of every round over 300 seeds for every chapter and level; `tests/maths-games.spec.js` plays each one.

**Adding a game type**: create `js/games/{name}.js`, add it to `index.html` (after engine.js) and `sw.js` `FILES`, and register it:

```js
Games.register("sort", {
  title: "Sort it", blurb: "One line for the list", how: "Two short sentences on how to play.", icon: "match", // icon: a name in ICONS (js/util.js)
  hud: { timer: "up" },                       // or { timer: "down", seconds: 60, lives: 3, streak: true }
  available: (c, subj, ch) => Games.terms(c, subj, ch).length >= 4,
  build: (c, subj, ch, seed) => ({ /* pick this round's content with Games.rng(seed) */ }),
  mount(el, data, api) { /* draw into el; api.score(n), api.miss({...}), api.finish({ stars, lines }) … */ },
});
```

Read content only through `Games.terms / mcqs / gens / genItems / diagrams` (they also work for levels). Put every visible string through `t()` and add Punjabi and Hindi lines to `js/i18n.js`. The full `api` is documented at the top of `js/games/engine.js`; `Games.draggable` gives drag-and-drop with a tap fallback. Tests: `tests/games.spec.js`.

**Language games** (`js/games/langkit.js` plus `letters.js`, `matras.js`, `words.js`, `sentences.js`, `grammar.js`): letters and pictures (Level 0 to Class 2; Gurmukhi, Devanagari, English), matra builder (Punjabi and Hindi, Classes 1–3), spell the word (English, Classes 1–5), sentence builder (all three languages, Classes 2–8) and grammar sort (noun / verb / adjective, gender, number; Classes 2–10). They are offered on the language chapters of those classes (`english`, `englishpb`, `hindi`, `hindipb`, `punjabi`) and on the matching Practice-by-topic levels (rules in `RANGES` and `LEVEL_TOPICS` in `langkit.js`). Their words are hand-written in `data/games/{letters,matras,words,sentences,grammar}.js` and load on first play; `node scripts/validate.js` checks them (NFC text, script of each language, a letter starts its word, matra `parts` join to the word, one class per grammar word, enough words for every class). Matra tiles are drawn on a dotted circle (◌ਾ) so a vowel sign stays whole on its own. Tests: `tests/games-language.spec.js`.

## Run it

Easiest: open `index.html` in a browser. Everything works, except installing it as an app and offline caching, which need a web server.

With a local server (needs [Node.js](https://nodejs.org)):

```bash
node scripts/serve.js
```

Then open http://localhost:8765.

To use it on a phone, host the folder on any static host (GitHub Pages, Netlify, etc.), open it in Chrome or Safari, and choose **Add to Home screen**.

**How content loads.** Opening the app loads only the student's class *index* (`data/class{N}/index.js`: subject list, chapter titles and summaries, enough for the home screen, subject lists and progress; about 130 KB for Class 12). A subject's full file (notes, quizzes) and its practice banks and diagrams load the first time a page needs them: opening that subject or a chapter in it, a test, sheet or sample paper, flashcards, a formula sheet, search (all subjects), revision, mistakes, and the home screen's question of the day (one subject). Each file is then kept for offline use by the service worker, so anything a student has opened keeps working without internet. Settings → *Save every class for offline* fetches everything, for every class. The phone apps bundle every file and read them the same way.

**Updates.** When a new version of the site is published, the open page keeps running the old version and shows "A new version is ready" with a **Reload** button; nothing is half-updated. Bump `CACHE` in `sw.js` on every release so installed copies notice. (Website only; the phone apps update through the stores.)

**Phone apps**: `ios/` and `android/` are Capacitor projects that pack every file inside the app, so it works offline from the first launch, with native printing and sharing. `npm install`, then `npm run sync` after any change. See [STORE_GUIDE.md](STORE_GUIDE.md) for building and publishing to the App Store and Google Play.

## Testing

End-to-end tests drive the real app in Chromium with [Playwright](https://playwright.dev). They start their own static server (`node scripts/serve.js 8799`), so nothing else needs to be running.

```bash
npm install
npx playwright install chromium   # once: downloads the test browser
npm test                          # whole suite, headless
npm run test:headed               # watch it run
npx playwright test -c tests quiz # one file or test name
npm run test:report               # open the HTML report of the last run
```

The suite runs on a phone-sized window (412×915) and, for the tests tagged `@desktop`, on a 1280×800 desktop window. It covers onboarding and language switching, the chapter tabs and quiz, My mistakes, progress saving, several students, backup and restore (including the old single-student backup format), switching class and which data files get requested, mock tests, sample papers and practice sheets, the guided lesson, offline use, the "new version is ready" update, and the Home screen of every class on both boards. Any page error or `console.error` fails the test it happens in.

Tests live in `tests/*.spec.js`; `tests/helpers.js` holds the shared fixtures (clean storage per test, `seed()` to start already onboarded, quiz helpers that read the right answer from the study data). Failures leave a screenshot and trace in `test-results/` (`npx playwright show-trace <trace.zip>`). `test-results/` and `playwright-report/` are git-ignored and are not copied into `www/` by `npm run build:www`. See `RELEASE_CHECKLIST.md` for where this fits in a release.

## Project layout

```
index.html            page shell, loads everything
css/styles.css        all styles (light + dark)
js/util.js            helpers and icons
js/store.js           saved progress for each student (localStorage)
js/readiness.js       concept learning vs exam readiness, recognitions
js/plan.js            Today's plan, Explore / Play, the place to resume
js/avatars.js         the built-in profile pictures (inline SVG)
js/speech.js          read-aloud buttons (browser speech synthesis)
js/reminder.js        daily reminder (phone apps)
js/quiz.js            quiz / test runner and flashcards
js/timer.js           focus timer
js/sims.js            interactive experiments (SVG simulations on the Notes tab)
js/games/             Play: engine.js (shell + registry) and one file per game type
js/views/             every screen, one file per area: ui.js (shared pieces, creates `Views`), students, revise,
                      home, subject, chapter, test, timer, progress, parent, search, onboarding, settings
js/app.js             router and navigation
data/registry.js      subjects and which class has which (catalog)
data/class1 … class12 content, one file per subject, plus a generated index.js per class
scripts/build-index.js writes each class's index.js (chapter titles only; run by npm run sync)
sw.js                 offline cache
CONTENT_GUIDE.md      how to write or edit content
scripts/validate.js   checks content files
tests/                Playwright end-to-end tests (npm test)
```

## Adding or fixing content

Content is plain JavaScript data. See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the format, then check your changes:

```bash
node scripts/validate.js
```

To add a subject to a class, add its id to that class in `catalog` in `data/registry.js` and create `data/class{N}/{id}.js`. After editing any subject file run `node scripts/build-index.js` (`npm run sync` does it too); `node scripts/validate.js` fails if an index is out of date. Bump `CACHE` in `sw.js` whenever you change files, so installed apps pick up the update.

## How closely content follows the textbooks

Each subject page says what its chapters follow (the `syllabus` block in each data file):

| Label | Meaning | Where |
|---|---|---|
| Current NCERT book | Chapters follow the book's titles and order | Maths, Science and SST in Classes 6–8 (Ganita Prakash, Curiosity, Exploring Society); Class 8 Hindi literature (Malhar, 5 of 10 lessons); most Class 9–12 subjects |
| Topic-based revision | Arranged by syllabus topic, not by any one book | Classes 1–5; English in Classes 6–8; Hindi in Classes 6–7; Punjabi in every class |

English and Hindi in Classes 9–12 cover grammar, writing and a selection of literature lessons, not every chapter.

**Nothing has been checked by a teacher yet.** All notes, answers and explanations are drafts written to follow NCERT
and have not been checked against the CBSE 2026–27 curriculum. Use them for revision alongside the textbook, and
report anything that looks wrong.
