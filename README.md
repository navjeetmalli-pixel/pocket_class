# Vidya · Class 1–12 Study App

An offline study app for Indian school students, following the CBSE / NCERT syllabus for Classes 1 to 12.

**Open the app: https://navjeetmalli-pixel.github.io/vidya/**: on a phone, open it in Chrome or Safari and choose *Add to Home screen*.

**Subjects**

| Classes | Subjects |
|---|---|
| 1–2 | Maths, English, Hindi, Punjabi |
| 3–5 | Maths, EVS, English, Hindi, Punjabi |
| 6–10 | Maths, Science, Social Science, English, Hindi, Punjabi |
| 11–12 | Physics, Chemistry, Maths, Biology · Accountancy, Business Studies, Economics · History, Geography, Political Science · English, Hindi, Punjabi |

**For every chapter**
- **Notes**: revision notes, a formula / key-facts box, and key terms
- **Flashcards**: flip cards for key terms, with "know it / still learning" tracking
- **Practice**: solved examples and board-style questions with model answers
- **Quiz**: MCQs with instant feedback and explanations

**Boards**: CBSE / NCERT for Classes 1–12. PSEB (Punjab Board) for Class 10: NCERT Maths and Science (same as PSEB's), plus PSEB Social Science, English, Hindi and Punjab History and Culture written from PSEB's 2026–27 syllabus. PSEB students in other classes see the CBSE set, with a note.

**Practice**
- **Practice sheets**: choose chapters and question types (MCQ, short and long answer, maths problems), then print with an answer key. Sheets are numbered: the same number always gives the same sheet, the next number a new one.
- **Fresh maths and physics questions**: 116 question types (from Class 1 addition to Class 12 integrals and Class 8–12 physics numericals) that change the numbers every time, with worked steps.
- **Practice banks** (Classes 9–12): about 10,200 MCQs at three levels (with assertion–reason and case-based) and 6,500 written questions (1–5 marks) with model answers, across every subject. Each quiz round draws a fresh set.

**Study tools**
- **Mock test**: timed test across a whole subject, chosen chapters, or all subjects, with a per-chapter score breakdown
- **My mistakes**: every wrong answer is saved so you can practise it until you get it right
- **Formula sheets**: all formulas / key dates of a subject on one printable page
- **Focus timer**: Pomodoro timer (15/25/45/60 min) that keeps running while you study
- **Progress**: daily streak, minutes studied this week, chapter completion, quiz history
- **Question of the day**, search across all notes, bookmarks, light/dark theme

Progress is saved only on the device (browser storage). No account, no internet needed after the first visit. Settings → *Save backup* downloads it as a file, which *Restore backup* loads on another phone.

## Run it

Easiest: open `index.html` in a browser. Everything works, except installing it as an app and offline caching, which need a web server.

With a local server (needs [Node.js](https://nodejs.org)):

```bash
node scripts/serve.js
```

Then open http://localhost:8765.

To use it on a phone, host the folder on any static host (GitHub Pages, Netlify, etc.), open it in Chrome or Safari, and choose **Add to Home screen**.

## Project layout

```
index.html            page shell, loads everything
css/styles.css        all styles (light + dark)
js/util.js            helpers and icons
js/store.js           saved progress (localStorage)
js/quiz.js            quiz / test runner and flashcards
js/timer.js           focus timer
js/views.js           every screen
js/app.js             router and navigation
data/registry.js      subjects and which class has which (catalog)
data/class1 … class12 content, one file per subject; only the student's class is loaded
sw.js                 offline cache
CONTENT_GUIDE.md      how to write or edit content
scripts/validate.js   checks content files
```

## Adding or fixing content

Content is plain JavaScript data. See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the format, then check your changes:

```bash
node scripts/validate.js
```

To add a subject to a class, add its id to that class in `catalog` in `data/registry.js` and create `data/class{N}/{id}.js`. Bump `CACHE` in `sw.js` whenever you change files, so installed apps pick up the update.

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
