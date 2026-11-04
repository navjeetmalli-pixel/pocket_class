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
- **Notes**: revision notes, a formula / key-facts box, key terms, and labelled diagrams (about 800 across Classes 3–12: ray diagrams, circuits, graphs, cells, cycles, timelines, all drawn to scale)
- **Flashcards**: flip cards for key terms, with "know it / still learning" tracking
- **Practice**: solved examples and board-style questions with model answers
- **Quiz**: MCQs with instant feedback and explanations
- **Guided lesson** (Maths, Science, Physics and Chemistry, Classes 6–12): the chapter as one path. A no-pressure question first, the notes one idea at a time, a worked example, then **worked-example fading** (a second solution with its last one or two steps hidden for the student to finish and check), a similar question with the steps as hints, **Find the mistake** (a worked solution with one wrong step, built by changing one result in a correct step list; tap the faulty step; Maths and Physics chapters that have number-changing questions), three practice questions with a "how sure are you?" check, a question that leads into the next chapter, and a **teach-back** at the end
- **Teach-back** (every chapter's Notes tab and the end of the guided lesson): "Explain it in your own words" box, saved on the device per chapter, then a checklist of the chapter's headings and key formulas to tick. Nothing is graded
- **Experiments** (Notes tab, after the notes): six offline simulations, each with predict, change a variable, observe and explain: convex lens and concave mirror image formation, Ohm's law (one resistor, series, parallel), simple pendulum, projectile motion, refraction and total internal reflection, and the graph of y = ax² + bx + c. They sit on the matching chapters (Class 10 Light and Electricity and Quadratic Equations; Class 11 Motion in a Plane, Oscillations and Quadratic Equations; Class 12 Ray Optics and Current Electricity; Class 8 light and electricity) in `js/sims.js`

**Books**: CBSE follows the current NCERT books, including the new 2026–27 Class 9 books (Ganita Manjari, Exploration, Understanding Society, Kaveri, Ganga) and the new Classes 1–8 books. English and Hindi include every lesson of the current NCERT readers, summarised in our own words.

**Boards**: CBSE / NCERT for Classes 1–12. PSEB (Punjab Board), from its 2026–27 syllabus: Classes 1–5 use the topic-based content (PSEB sets learning outcomes, not lesson lists); Classes 6–9 have the earlier NCERT Maths and Science books that PSEB still uses, plus PSEB Social Science and English; Class 10 has NCERT Maths and Science plus PSEB Social Science, English, Hindi and Punjab History and Culture; Classes 11–12 have the sciences, maths and commerce (same NCERT units) plus PSEB's own English, Hindi, History (Class 12: history of the Punjab) and Political Science. PSEB English lessons were checked against the PSEB textbooks (2023–24 edition).

**Practice**
- **Practice sheets**: choose chapters and question types (MCQ, short and long answer, maths problems), then print with an answer key. Sheets are numbered: the same number always gives the same sheet, the next number a new one.
- **Fresh maths, physics and chemistry questions**: 153 question types (from Class 1 addition to Class 12 integrals, Class 8–12 physics numericals and Class 9–12 chemistry calculations) that change the numbers every time, with worked steps.
- **Practice banks** (every chapter, Classes 1–12, both boards): about 23,000 MCQs at up to three levels (assertion–reason and case-based from Class 6) and 14,000 written questions (1–5 marks) with model answers. Classes 1–5 get shorter, age-appropriate sets. Each quiz round draws a fresh set.
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

## Practice by topic

`#/paths` is a subject, topic, level ladder for Maths, Science, English and Punjabi, from Level 0 (before Class 1) up to advanced, built from chapters that already exist in other classes (`data/paths/{subject}.js`, loaded when the subject is opened). Each level has short notes, a worked example, links to the full chapters, "Practice 10 questions" (80% masters the level and unlocks the next; any level can still be opened with "Skip ahead"), and a printable numbered worksheet. "Find my level" asks about 2 questions per level and stops after two misses in a row. Progress is saved per student (`paths` in the student's data, so backups and student switching include it). Wrong answers go to My mistakes. Code: `js/views/paths.js`; format: CONTENT_GUIDE.md.

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
js/speech.js          read-aloud buttons (browser speech synthesis)
js/reminder.js        daily reminder (phone apps)
js/quiz.js            quiz / test runner and flashcards
js/timer.js           focus timer
js/sims.js            interactive experiments (SVG simulations on the Notes tab)
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
