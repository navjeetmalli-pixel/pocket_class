# Content coverage

Made by `node scripts/coverage.js` from the data files; don't edit by hand. Every chapter is in `docs/coverage.csv`.
Counts are what the app holds. They don't mean a chapter matches the current syllabus or that its answers were checked by a teacher.

2,979 board-class-subject-chapter rows (a chapter used by both boards is listed under each).

## Gaps

| Gap | Chapters |
|---|---:|
| `few-mcq`: fewer than 15 MCQs (quiz + bank) | 117 |
| `no-hard`: Class 3+: no hard (level 3) bank MCQs | 4 |
| `no-written`: no written practice (bank or chapter Q&A) | 0 |
| `no-long`: Class 6+: no 4–5 mark written question | 121 |
| `no-fresh`: no endless practice (no generator and no auto-made questions) | 1 |
| `obj-empty`: an objective that no saved question maps to | 380 |

## Per subject

MCQs and written questions per chapter are averages. Fresh: chapters with endless practice (generators or auto-made questions).

| Board | Class | Subject | Chapters | MCQs/ch | Written/ch | Fresh | Review | Gaps (chapters) |
|---|---:|---|---:|---:|---:|---:|---|---|
| CBSE | 1 | Mathematics | 11 | 15 | 6 | 11/11 | draft | none |
| CBSE | 1 | English | 20 | 15 | 7 | 20/20 | draft | none |
| CBSE | 1 | Hindi | 27 | 15 | 6 | 27/27 | draft | obj-empty 3 |
| CBSE | 1 | Punjabi | 21 | 15 | 6 | 21/21 | draft | none |
| CBSE | 2 | Mathematics | 11 | 15 | 6 | 11/11 | draft | none |
| CBSE | 2 | English | 23 | 15 | 7 | 23/23 | draft | obj-empty 3 |
| CBSE | 2 | Hindi | 35 | 15 | 6 | 35/35 | draft | obj-empty 3 |
| CBSE | 2 | Punjabi | 25 | 15 | 6 | 25/25 | draft | obj-empty 4 |
| CBSE | 3 | Mathematics | 13 | 17 | 8 | 13/13 | draft | obj-empty 2 |
| CBSE | 3 | EVS | 10 | 17 | 8 | 10/10 | draft | none |
| CBSE | 3 | English | 22 | 17 | 9 | 22/22 | draft | obj-empty 2 |
| CBSE | 3 | Hindi | 27 | 17 | 8 | 27/27 | draft | obj-empty 5 |
| CBSE | 3 | Punjabi | 29 | 17 | 8 | 29/29 | draft | obj-empty 1 |
| CBSE | 4 | Mathematics | 14 | 17 | 8 | 14/14 | draft | obj-empty 1 |
| CBSE | 4 | EVS | 10 | 17 | 8 | 10/10 | draft | none |
| CBSE | 4 | English | 22 | 17 | 9 | 22/22 | draft | obj-empty 2 |
| CBSE | 4 | Hindi | 21 | 17 | 9 | 21/21 | draft | obj-empty 2 |
| CBSE | 4 | Punjabi | 29 | 17 | 8 | 29/29 | draft | obj-empty 1 |
| CBSE | 5 | Mathematics | 14 | 17 | 8 | 14/14 | draft | obj-empty 2 |
| CBSE | 5 | EVS | 10 | 17 | 8 | 10/10 | draft | none |
| CBSE | 5 | English | 20 | 17 | 8 | 20/20 | draft | obj-empty 1 |
| CBSE | 5 | Hindi | 21 | 17 | 9 | 21/21 | draft | obj-empty 4 |
| CBSE | 5 | Punjabi | 29 | 17 | 9 | 29/29 | draft | none |
| CBSE | 6 | Mathematics | 10 | 20 | 11 | 10/10 | draft | none |
| CBSE | 6 | Science | 12 | 45 | 21 | 12/12 | draft | none |
| CBSE | 6 | Social Science | 14 | 44 | 20 | 14/14 | draft | none |
| CBSE | 6 | English | 26 | 19 | 10 | 26/26 | draft | few-mcq 3, obj-empty 4 |
| CBSE | 6 | Hindi | 21 | 19 | 10 | 21/21 | draft | few-mcq 2, obj-empty 2 |
| CBSE | 6 | Punjabi | 9 | 17 | 9 | 9/9 | draft | few-mcq 3, obj-empty 2 |
| CBSE | 7 | Mathematics | 15 | 19 | 10 | 15/15 | draft | obj-empty 1 |
| CBSE | 7 | Science | 12 | 45 | 21 | 12/12 | draft | none |
| CBSE | 7 | Social Science | 20 | 45 | 20 | 20/20 | draft | none |
| CBSE | 7 | English | 25 | 18 | 9 | 25/25 | draft | few-mcq 4, obj-empty 2 |
| CBSE | 7 | Hindi | 19 | 18 | 10 | 19/19 | draft | few-mcq 3, obj-empty 3 |
| CBSE | 7 | Punjabi | 34 | 19 | 10 | 34/34 | draft | few-mcq 3, obj-empty 2 |
| CBSE | 8 | Mathematics | 14 | 20 | 10 | 14/14 | draft | none |
| CBSE | 8 | Science | 13 | 45 | 21 | 13/13 | draft | none |
| CBSE | 8 | Social Science | 15 | 44 | 20 | 15/15 | draft | none |
| CBSE | 8 | English | 25 | 18 | 10 | 25/25 | draft | few-mcq 4, obj-empty 3 |
| CBSE | 8 | Hindi | 20 | 19 | 10 | 20/20 | draft | few-mcq 4, obj-empty 2 |
| CBSE | 8 | Punjabi | 36 | 19 | 10 | 36/36 | draft | few-mcq 3, obj-empty 1 |
| CBSE | 9 | Mathematics | 14 | 18 | 16 | 14/14 | draft | none |
| CBSE | 9 | Science | 13 | 45 | 23 | 13/13 | draft | none |
| CBSE | 9 | Social Science | 15 | 45 | 22 | 15/15 | draft | none |
| CBSE | 9 | English | 25 | 18 | 10 | 25/25 | draft | few-mcq 3, no-long 6, obj-empty 6 |
| CBSE | 9 | Hindi | 19 | 18 | 10 | 19/19 | draft | few-mcq 2, no-long 5, obj-empty 3 |
| CBSE | 9 | Punjabi | 35 | 17 | 10 | 35/35 | draft | few-mcq 4, no-long 8, obj-empty 2 |
| CBSE | 10 | Mathematics | 14 | 18 | 17 | 14/14 | draft | obj-empty 4 |
| CBSE | 10 | Science | 13 | 49 | 25 | 13/13 | draft | none |
| CBSE | 10 | Social Science | 22 | 45 | 22 | 22/22 | draft | none |
| CBSE | 10 | English | 35 | 18 | 10 | 35/35 | draft | few-mcq 3, no-long 6, obj-empty 6 |
| CBSE | 10 | Hindi | 24 | 18 | 10 | 24/24 | draft | few-mcq 4, no-hard 4, no-long 5, obj-empty 8 |
| CBSE | 10 | Punjabi | 23 | 18 | 10 | 23/23 | draft | few-mcq 4, no-long 7, obj-empty 2 |
| CBSE | 11 | Physics | 14 | 20 | 13 | 14/14 | draft | obj-empty 3 |
| CBSE | 11 | Chemistry | 9 | 20 | 13 | 9/9 | draft | obj-empty 3 |
| CBSE | 11 | Mathematics | 14 | 18 | 17 | 14/14 | draft | obj-empty 6 |
| CBSE | 11 | Biology | 19 | 20 | 13 | 19/19 | draft | obj-empty 4 |
| CBSE | 11 | Accountancy | 9 | 20 | 13 | 9/9 | draft | obj-empty 5 |
| CBSE | 11 | Business Studies | 10 | 20 | 13 | 10/10 | draft | obj-empty 5 |
| CBSE | 11 | Economics | 12 | 20 | 13 | 12/12 | draft | obj-empty 4 |
| CBSE | 11 | History | 7 | 20 | 13 | 7/7 | draft | obj-empty 3 |
| CBSE | 11 | Geography | 20 | 20 | 13 | 20/20 | draft | obj-empty 4 |
| CBSE | 11 | Political Science | 18 | 20 | 13 | 18/18 | draft | obj-empty 8 |
| CBSE | 11 | English | 26 | 18 | 10 | 26/26 | draft | few-mcq 4, no-long 6, obj-empty 3 |
| CBSE | 11 | Hindi | 27 | 18 | 10 | 27/27 | draft | obj-empty 7 |
| CBSE | 11 | Punjabi | 27 | 18 | 11 | 27/27 | draft | few-mcq 3, no-long 5, obj-empty 3 |
| CBSE | 12 | Physics | 14 | 20 | 13 | 14/14 | draft | obj-empty 4 |
| CBSE | 12 | Chemistry | 10 | 20 | 13 | 10/10 | draft | obj-empty 4 |
| CBSE | 12 | Mathematics | 13 | 20 | 13 | 13/13 | draft | obj-empty 2 |
| CBSE | 12 | Biology | 13 | 20 | 13 | 13/13 | draft | obj-empty 1 |
| CBSE | 12 | Accountancy | 12 | 20 | 13 | 12/12 | draft | obj-empty 7 |
| CBSE | 12 | Business Studies | 12 | 20 | 13 | 12/12 | draft | obj-empty 7 |
| CBSE | 12 | Economics | 14 | 20 | 13 | 14/14 | draft | obj-empty 9 |
| CBSE | 12 | History | 12 | 20 | 13 | 12/12 | draft | obj-empty 2 |
| CBSE | 12 | Geography | 17 | 20 | 13 | 17/17 | draft | obj-empty 5 |
| CBSE | 12 | Political Science | 15 | 20 | 13 | 15/15 | draft | obj-empty 3 |
| CBSE | 12 | English | 25 | 18 | 11 | 25/25 | draft | obj-empty 5 |
| CBSE | 12 | Hindi | 24 | 19 | 11 | 24/24 | draft | obj-empty 5 |
| CBSE | 12 | Punjabi | 38 | 17 | 11 | 38/38 | draft | few-mcq 4, no-long 5, obj-empty 1 |
| PSEB | 1 | Mathematics | 11 | 15 | 6 | 11/11 | draft | none |
| PSEB | 1 | English | 18 | 15 | 6 | 18/18 | draft | none |
| PSEB | 1 | Hindi | 8 | 15 | 6 | 8/8 | draft | obj-empty 3 |
| PSEB | 1 | Punjabi | 21 | 15 | 6 | 21/21 | draft | none |
| PSEB | 2 | Mathematics | 11 | 15 | 6 | 11/11 | draft | none |
| PSEB | 2 | English | 24 | 15 | 6 | 24/24 | draft | obj-empty 2 |
| PSEB | 2 | Hindi | 9 | 15 | 6 | 9/9 | draft | obj-empty 3 |
| PSEB | 2 | Punjabi | 25 | 15 | 6 | 25/25 | draft | obj-empty 4 |
| PSEB | 3 | Mathematics | 13 | 17 | 8 | 13/13 | draft | obj-empty 2 |
| PSEB | 3 | EVS | 10 | 17 | 8 | 10/10 | draft | none |
| PSEB | 3 | English | 18 | 17 | 8 | 18/18 | draft | obj-empty 1 |
| PSEB | 3 | Hindi | 9 | 17 | 8 | 9/9 | draft | obj-empty 5 |
| PSEB | 3 | Punjabi | 29 | 17 | 8 | 29/29 | draft | obj-empty 1 |
| PSEB | 4 | Mathematics | 14 | 17 | 8 | 14/14 | draft | obj-empty 1 |
| PSEB | 4 | EVS | 10 | 17 | 8 | 10/10 | draft | none |
| PSEB | 4 | English | 19 | 17 | 8 | 19/19 | draft | obj-empty 1 |
| PSEB | 4 | Hindi | 28 | 17 | 8 | 28/28 | draft | obj-empty 2 |
| PSEB | 4 | Punjabi | 29 | 17 | 8 | 29/29 | draft | obj-empty 1 |
| PSEB | 5 | Mathematics | 14 | 17 | 8 | 14/14 | draft | obj-empty 2 |
| PSEB | 5 | EVS | 10 | 17 | 8 | 10/10 | draft | none |
| PSEB | 5 | English | 19 | 17 | 8 | 19/19 | draft | obj-empty 1 |
| PSEB | 5 | Hindi | 30 | 17 | 8 | 30/30 | draft | obj-empty 4 |
| PSEB | 5 | Punjabi | 29 | 17 | 9 | 29/29 | draft | none |
| PSEB | 6 | Mathematics | 14 | 20 | 11 | 14/14 | draft | obj-empty 1 |
| PSEB | 6 | Science | 11 | 19 | 10 | 11/11 | draft | obj-empty 1 |
| PSEB | 6 | Social Science | 21 | 19 | 11 | 21/21 | draft | obj-empty 1 |
| PSEB | 6 | English | 24 | 19 | 10 | 24/24 | draft | obj-empty 4 |
| PSEB | 6 | Hindi | 28 | 19 | 10 | 28/28 | draft | few-mcq 2, obj-empty 4 |
| PSEB | 6 | Punjabi | 9 | 17 | 9 | 9/9 | draft | few-mcq 3, obj-empty 2 |
| PSEB | 7 | Mathematics | 13 | 20 | 11 | 13/13 | draft | obj-empty 3 |
| PSEB | 7 | Science | 11 | 19 | 10 | 11/11 | draft | none |
| PSEB | 7 | Social Science | 21 | 19 | 10 | 21/21 | draft | none |
| PSEB | 7 | English | 25 | 19 | 10 | 25/25 | draft | none |
| PSEB | 7 | Hindi | 29 | 18 | 10 | 29/29 | draft | few-mcq 3, obj-empty 2 |
| PSEB | 7 | Punjabi | 34 | 19 | 10 | 34/34 | draft | few-mcq 3, obj-empty 2 |
| PSEB | 8 | Mathematics | 13 | 20 | 11 | 13/13 | draft | obj-empty 2 |
| PSEB | 8 | Science | 13 | 20 | 11 | 13/13 | draft | obj-empty 3 |
| PSEB | 8 | Social Science | 27 | 19 | 10 | 27/27 | draft | obj-empty 1 |
| PSEB | 8 | English | 27 | 19 | 10 | 27/27 | draft | obj-empty 4 |
| PSEB | 8 | Hindi | 30 | 18 | 9 | 30/30 | draft | few-mcq 4, obj-empty 2 |
| PSEB | 8 | Punjabi | 36 | 19 | 10 | 36/36 | draft | few-mcq 3, obj-empty 1 |
| PSEB | 9 | Mathematics | 12 | 18 | 17 | 12/12 | draft | obj-empty 4 |
| PSEB | 9 | Science | 12 | 20 | 13 | 12/12 | draft | obj-empty 4 |
| PSEB | 9 | Social Science | 20 | 20 | 12 | 20/20 | draft | none |
| PSEB | 9 | English | 26 | 18 | 10 | 26/26 | draft | few-mcq 4, no-long 10, obj-empty 2 |
| PSEB | 9 | Hindi | 26 | 17 | 10 | 25/26 | draft | few-mcq 2, no-long 5, no-fresh 1, obj-empty 2 |
| PSEB | 9 | Punjabi | 35 | 17 | 10 | 35/35 | draft | few-mcq 4, no-long 8, obj-empty 2 |
| PSEB | 10 | Mathematics | 14 | 18 | 17 | 14/14 | draft | obj-empty 4 |
| PSEB | 10 | Science | 13 | 49 | 25 | 13/13 | draft | none |
| PSEB | 10 | Social Science | 28 | 24 | 15 | 28/28 | draft | none |
| PSEB | 10 | English | 25 | 18 | 10 | 25/25 | draft | few-mcq 1, no-long 6, obj-empty 2 |
| PSEB | 10 | Hindi | 32 | 17 | 10 | 32/32 | draft | few-mcq 4, no-long 8, obj-empty 5 |
| PSEB | 10 | Punjabi | 23 | 18 | 10 | 23/23 | draft | few-mcq 4, no-long 7, obj-empty 2 |
| PSEB | 10 | Punjab History and Culture | 9 | 24 | 15 | 9/9 | draft | none |
| PSEB | 11 | Physics | 14 | 20 | 13 | 14/14 | draft | obj-empty 3 |
| PSEB | 11 | Chemistry | 9 | 20 | 13 | 9/9 | draft | obj-empty 3 |
| PSEB | 11 | Mathematics | 14 | 18 | 17 | 14/14 | draft | obj-empty 6 |
| PSEB | 11 | Biology | 19 | 20 | 13 | 19/19 | draft | obj-empty 4 |
| PSEB | 11 | Accountancy | 9 | 20 | 13 | 9/9 | draft | obj-empty 5 |
| PSEB | 11 | Business Studies | 10 | 20 | 13 | 10/10 | draft | obj-empty 5 |
| PSEB | 11 | Economics | 12 | 20 | 13 | 12/12 | draft | obj-empty 4 |
| PSEB | 11 | History | 22 | 20 | 13 | 22/22 | draft | none |
| PSEB | 11 | Political Science | 20 | 20 | 13 | 20/20 | draft | obj-empty 1 |
| PSEB | 11 | English | 33 | 17 | 9 | 33/33 | draft | few-mcq 5, no-long 8, obj-empty 7 |
| PSEB | 11 | Hindi | 14 | 18 | 10 | 14/14 | draft | few-mcq 4, no-long 6, obj-empty 3 |
| PSEB | 11 | Punjabi | 27 | 18 | 11 | 27/27 | draft | few-mcq 3, no-long 5, obj-empty 3 |
| PSEB | 12 | Physics | 14 | 20 | 13 | 14/14 | draft | obj-empty 4 |
| PSEB | 12 | Chemistry | 10 | 20 | 13 | 10/10 | draft | obj-empty 4 |
| PSEB | 12 | Mathematics | 13 | 20 | 13 | 13/13 | draft | obj-empty 2 |
| PSEB | 12 | Biology | 13 | 20 | 13 | 13/13 | draft | obj-empty 1 |
| PSEB | 12 | Accountancy | 12 | 20 | 13 | 12/12 | draft | obj-empty 7 |
| PSEB | 12 | Business Studies | 12 | 20 | 13 | 12/12 | draft | obj-empty 7 |
| PSEB | 12 | Economics | 14 | 20 | 13 | 14/14 | draft | obj-empty 9 |
| PSEB | 12 | History | 23 | 20 | 13 | 23/23 | draft | obj-empty 2 |
| PSEB | 12 | Political Science | 24 | 20 | 13 | 24/24 | draft | obj-empty 1 |
| PSEB | 12 | English | 31 | 19 | 12 | 31/31 | draft | obj-empty 2 |
| PSEB | 12 | Hindi | 16 | 19 | 12 | 16/16 | draft | few-mcq 4, obj-empty 1 |
| PSEB | 12 | Punjabi | 38 | 17 | 11 | 38/38 | draft | few-mcq 4, no-long 5, obj-empty 1 |
