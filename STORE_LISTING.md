# Store listing text

Copy these into Play Console and App Store Connect. Character limits are in brackets; every line here fits.

## Names

| | Text | Limit |
|---|---|---|
| Play title | Pocket Class: CBSE & PSEB 1–12 | 30 |
| App Store name | Pocket Class India | 30 |
| App Store subtitle | Offline study, Class 1–12 | 30 |

## Google Play short description (80)

Offline notes, quizzes and sample papers for CBSE & PSEB Classes 1 to 12.

Punjabi and Hindi short descriptions: for later. The first store release locks Hindi and Punjabi (see "Release lock" in `README.md`), so the app is in English only and does not claim Punjabi or Hindi. When the lock is lifted, add them back:
- Punjabi: ਕਲਾਸ 1–12 ਲਈ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਨੋਟਸ, ਕਵਿਜ਼ ਅਤੇ ਨਮੂਨਾ ਪੇਪਰ — CBSE ਅਤੇ PSEB।
- Hindi: कक्षा 1–12 के लिए बिना इंटरनेट नोट्स, क्विज़ और सैंपल पेपर — CBSE और PSEB।

## App Store promotional text (170)

Every chapter of Classes 1–12, CBSE and PSEB, in your pocket: notes, diagrams, quizzes and board-pattern sample papers. Works fully offline. No account, no ads.

## App Store keywords (100)

CBSE,PSEB,NCERT,class 10,class 12,notes,quiz,sample paper,maths,science,english,offline,study

## Full description (Play 4000 / App Store 4000)

Written for the locked launch: English interface, no Hindi or Punjabi subjects. After the lock is lifted, restore the Hindi and Punjabi lines (see "For later" at the end of this section).

Pocket Class India is a complete study companion for Indian school students in Classes 1 to 12. It follows the CBSE / NCERT syllabus and the Punjab School Education Board (PSEB) syllabus, and everything works offline, with no account and no ads.

FOR EVERY CHAPTER
• Revision notes with a key-facts and formula box
• Over 790 labelled diagrams: ray diagrams, circuits, graphs, cells, cycles, maps and timelines
• Flashcards for key terms
• Solved examples and board-style questions with model answers
• Quizzes with instant feedback and an explanation for every answer

PRACTICE THAT NEVER RUNS OUT
• Over 27,000 multiple-choice questions and 16,000 written questions with model answers
• Fresh maths and physics questions with new numbers every time, with worked steps
• Printable practice sheets with an answer key
• Full sample papers for Classes 9–12 in the board pattern (sections A–F, internal choices, marking scheme)

STUDY SMARTER
• Mock tests across a subject or all subjects, with a chapter-by-chapter score
• "My mistakes": every wrong answer comes back until you get it right
• Spaced revision: chapters return after 1, 3, 7, 14 and 30 days
• Formula sheets, a focus timer, daily streak and progress charts
• Search across all notes, bookmarks, light and dark theme

BOOKS AND BOARDS
• CBSE: the current NCERT books, including the new Classes 1–9 books, and every lesson of the NCERT English reader, summarised in our own words
• PSEB: PSEB's own Social Science, English, Punjab History and Culture, History and Political Science, plus the NCERT Maths and Science the board uses
• The app is in English

PRIVATE BY DESIGN
Pocket Class collects no data. Progress stays on your phone; you can back it up to a file and restore it on another phone.

Pocket Class India is an independent study app. It is not made by or connected with CBSE, NCERT or PSEB.

FOR LATER (when Hindi and Punjabi are unlocked): "CBSE: ... and every lesson of the NCERT English and Hindi readers", "PSEB: ... English, Hindi, Punjabi ... with every lesson of the PSEB Punjabi and Hindi books", "Punjabi and Hindi content written in Gurmukhi and Devanagari", the app interface in Punjabi and Hindi, and the keywords Punjabi,Hindi. Do not use them while `js/release.js` locks those subjects. The counts above (over 27,000 MCQs, 16,000 written questions) leave out the locked Hindi and Punjabi subjects (about 15,000 MCQs and 8,000 written questions); with them unlocked, `node scripts/count-content.js` gives the full totals (over 43,000 and 23,000).

INTERNATIONAL LISTINGS (outside India)
For a listing aimed at students in Australia, Canada, the United Kingdom, the United States or New Zealand, use this paragraph instead of the CBSE and PSEB lines above, and keep the claim exactly this narrow: "Maths, English and Science practice by topic, from beginner to Year 12 level. Learn by topic with levels you climb, games and virtual labs, no account and no ads, works offline. It is not tied to any national curriculum (not Australian Curriculum, Common Core, the National Curriculum for England or any other), so use it alongside your school's own work." Questions and notes are in English and were written for Indian school books, so a few examples mention India or rupees (a known limit); money questions made by the app use A$, C$, £, $ or NZ$.

## Review notes (App Store Connect → App Review Information)

Pocket Class India is a fully offline study app: every class, note, diagram and question bank is packed inside the app, so it works with no internet connection from the first launch. It uses native printing (practice sheets and sample papers) and the share sheet (progress backup). No account or sign-in is needed. To try it: pick any class and board on the first screen, open a subject, then a chapter.

## Category and age

- Category: Education (Play and App Store). Not the Kids category.
- Content rating: everyone / 4+. No ads, no in-app purchases, no user content, no data collected.
- Play target audience: 6–12 and 13–17 (and 18+ for parents), so the Families policy applies.
- Data safety (Play) and App Privacy (Apple): "No data collected", "No data shared".
- Privacy policy: https://navjeetmalli-pixel.github.io/pocket_class/privacy.html

## Screenshots

Ready in `store/screenshots/` (7 each, the store build with Hindi and Punjabi locked; made on 6 Nov 2026):
- `iphone/`: App Store 6.9" iPhone, 1320×2868.
- `ipad/`: App Store 13" iPad, 2064×2752.
- `play/`: Google Play, 1320×2640 (Play allows at most a 2:1 ratio).

The seven: 1 Today with Mithu and the Start card, 2 the journey map, 3 a question with picture answers, 4 the habitat
sort game, 5 the picture word builder, 6 the sticker book, 7 the circuit builder lab (Class 7). Remake them after a
visual change with `tests/store-screens.spec.js` (instructions at its top).

The app has no links to outside websites, no ads, no sign-in and no tracking, which keeps it clear of the extra
rules for children's apps.
