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

**Study tools**
- **Mock test**: timed test across a whole subject, chosen chapters, or all subjects, with a per-chapter score breakdown
- **My mistakes**: every wrong answer is saved so you can practise it until you get it right
- **Formula sheets**: all formulas / key dates of a subject on one printable page
- **Focus timer**: Pomodoro timer (15/25/45/60 min) that keeps running while you study
- **Progress**: daily streak, minutes studied this week, chapter completion, quiz history
- **Question of the day**, search across all notes, bookmarks, light/dark theme

Progress is saved only on the device (browser storage). No account, no internet needed after the first visit.

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

The notes are a revision aid written to follow NCERT. Always study from the textbook too, and report anything that looks wrong.
