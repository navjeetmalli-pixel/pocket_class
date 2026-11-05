# Methodology spec vs. actual code (Pocket Class India)

Legend: **DONE** / **PARTIAL** / **MISSING** / **DEFER** (conflicts with product rules or out of scope for now). Verified by reading source; spec section numbers in brackets.

## Facts from the code (counts)
- Hand-written objectives: **20 chapters, 92 objectives** (data/class{1..12}/objectives.js; 159 written `mistakes` with a `fix`, 57 objectives with `prereq` links). Class 1-7 have 1 chapter each, 8: 3, 9: 2, 10: 3, 11: 2, 12: 3.
- Everything else is **derived**: one objective per notes heading ("Understand: <heading>"; Objectives.derivedBase). Content loads ~2,349 chapter objects with ~8,434 notes headings, so roughly 99% of chapters use derived objectives (<1% hand-written). Derived ids come from the heading text, so renaming a heading resets progress.
- Question-to-objective matching (Objectives.forQuestion): `q.obj` if the question names one (no question in data/ does), else TF-IDF-style word overlap against objective text + notes under its topics, else first objective. Deterministic, no hand labels.
- `node scripts/check-objectives.js` (sample of 54 chapters, 20 hand + 34 derived): 227 objectives, 1,023 questions; 2% match no word (fall to the first objective); 83% have a clear winner; 13/227 (6%) objectives have no question; leave-one-out notes-point -> own objective only **65%** (541/834); derived chapters score as low as 22-50%.
- Game types: 18 registered (js/games/*). Only **engine.js + quickfire.js** call `api.answered` (per-objective evidence). Labs: 15 use `Labs.flow` (api.log records one answer event per finished experiment); `cell.js` also logs label-check answers; `india-map.js` has no evidence.

## 1-3. Vision, experience model, platform lessons
- Five experiences Learn/Play/Explore/Master/Grow [2.1]: PARTIAL. Tabs are Today/Learn/Play/Explore/Progress (js/views/shell.js); "Master" lives inside chapter hub (quiz, mock test) and Practice by topic; no cross-links like "misconception in a lab -> short explanation".
- Seven-step promise, multiple representations [2.2]: DONE (guided.js lesson).
- "Not a video library / quiz-only / reward machine / one-percent dashboard" [2.3]: DONE (no video; mastery has dimensions; Progress separates concept vs exam).
- Don't copy platforms, original assets [1, 3]: DONE (CLAUDE.md rule).
- Explain remedial recommendation to the student (DreamBox) [3]: DONE (Loop.RULES each has a plain-language `reason`, shown, logged as "decision" events).
- Optional/rest-day-safe streak [3, 8.5]: DONE (Store.showStreak pref; Progress hides it when off). Streak punishing rest days: not checked in detail.
- Avoid drilling / stopping rules [4.3]: PARTIAL (Plan caps ~18 min and 2 reviews/day; quiz/practice rounds fixed length; no per-skill stopping rule).

## 4. Learning-science methods
- Retrieval practice [4.1]: DONE (Retrieve stage in guided.js: 3-4 mixed, no notes, confidence check; flashcards in views/revise.js; Loop.drawSets).
- Spaced practice [4.1]: DONE, two ladders: objective-level `Mastery.config.intervalsDays` [2,5,10,21,45] with fail -> back to step 0 and "Needs a refresher"; chapter-level `Store.due` GAPS [1,3,7,14,30] (store.js:195). Not unified; thresholds in config.
- Interleaving [4.1]: DONE (round-robin retrieve in Loop.drawSets; mixed due round in revise.js `dueRound`; Mixed test in views/test.js). Initial-practice-before-mixing rule not explicit.
- Worked examples [4.1]: DONE (guided `worked`, `worked2` "another example", from Gen steps or chapter examples). Only where chapter has solved examples/generators, so mostly Maths/Science.
- Faded examples [4.1]: DONE (`fade` step hides last 1-2 steps; rule worked-followed; `turn` reveals steps as hints, `again` no hints).
- Immediate informative feedback [4.1]: PARTIAL. `Learn.feedback` links wrong option to hand-written mistake (keyword match) or tags from generators (slip/sign/scale/method). Only 20 chapters have mistakes; every other MCQ gets just `explain`.
- Self-explanation [4.1]: PARTIAL. Teach-back box (guided.js `teachHTML`, Store.teach): free text, student ticks key points; logs "teach" evidence (only "seen", not graded). No per-step "why did we do this?" prompt.
- Elaboration prompts ("what changes if...") [4.1]: MISSING.
- Dual coding [4.1]: DONE (diagrams in `visual` step, `data/classN/diagrams`, labs graphs, read-aloud via js/speech.js).
- Concrete -> abstract [4.1]: PARTIAL. Maths Studio labs (placevalue, fractionwall, algebratiles, geoboard, grapher) exist but are not sequenced into lessons; lesson order is notes -> example.
- Socratic questions [4.2]: PARTIAL (`think` "Think first" opener, `resolve`); one question per lesson.
- Predict-Observe-Explain [4.2]: DONE (Labs.flow predict -> vary one variable -> table/graph -> explain; Sims `pred`; guided Physics runs experiment before notes).
- Inquiry / problem-based [4.2]: PARTIAL (labs with investigations; case/HOTS written questions in banks but not marked or guided).
- Project-based, design thinking [4.2]: MISSING.
- Case-based [4.2]: PARTIAL (case-study MCQs and 4-mark case in Papers; no interactive cases).
- Simulation-based [4.2]: DONE (Sims, 15 labs).
- Analogy/comparison, concept mapping [4.2]: MISSING.
- Error analysis [4.2]: DONE (`slip` Find-the-mistake step; My mistakes list; mistake `fix` text).
- Productive struggle [4.2]: DONE (guess before teaching; hints revealed one at a time, last step hidden).
- Mastery learning (gate dependents) [4.2]: PARTIAL. States exist and `mastered-skip` lets known notes be skipped; prerequisites are used only for the entry check, never to gate. Practice-by-topic levels are gated (locked/unlocked).
- Peer instruction [4.2]: DEFER (optional; needs no feature; a "talk to a parent" prompt could be copy only).
- Debate, role-play, story missions [4.2]: MISSING (story only in early-years games content).
- Metacognition [4.2]: PARTIAL (Sure / Not sure after each Retrieve answer; end screen lists "sure but wrong"; Find my level -> Check my progress growth line).
- Reflection ("what's still hard") [4.2]: PARTIAL (end screen skills before/after + teach-back; no explicit reflection prompt at the end of games or labs).
- Transfer [4.2]: DONE (Loop transfer question per objective after a strong Master answer; `isTransfer`; rule strong-independent).
- Computational thinking [4.2]: MISSING (no CS/IT subject in data/class*; Class 11-12 have accountancy, business, economics but no CS).
- Avoid learning-style labels, AI explanations [4.3]: DONE (none; no AI).

## 5. Learning engine
- Eight-stage cycle [5.1]: DONE for 7 (Loop.STAGES + guided.js steps: diag, think, visual, idea/resolve/worked/fade/turn, interact, practice, master). "Remember" handled by Due today/Revise outside the lesson.
- Diagnose with prerequisite check [5.1]: DONE (guided `diag` 3-6 easy Qs from hand-written `prereq` or previous 1-2 chapters; weak -> `refresh` inline). Not graded, logged as "diagnostic".
- Subject variants [5.2]: PARTIAL. Loop.kindOf/VARIANT_LABEL change wording/order for language, physics, chemistry, maths only; no History/Biology/Geography/Commerce variants, content does not change.
- One chapter, multiple routes [5.3]: DONE (Loop.RULES: weak-diagnostic, mastered-skip, worked-followed/another, repeat-error -> `alt` "Another way", hints-many -> `again`, strong-independent -> transfer). Routes are fixed small branches; no separate remediation tracks per error type (e.g. equals-sign vs arithmetic slip).
- Alternative representation on repeat error: PARTIAL (`alt` shows "another way" from existing notes/diagrams; not misconception-specific).

## 6. Mastery and adaptation
- Multidimensional profile [6.1]: PARTIAL. Mastery.assess gives accuracy, independence, retention; no separate "concept understanding", "application" or "reasoning" dimensions (transfer results and teach-back are not folded in).
- Error classification [6.2]: PARTIAL. Mastery.ERRORS = slip/sign/scale/method/unknown, only for generated Qs; `errorPattern` needs >=3 and 60% before naming, else "uncertain" (matches spec). No vocabulary/reading, guessing, hint-dependence or careless classes, though confidence (sure) is captured in lesson only and not stored in Mastery.
- Guessing detection via confidence [6.2]: PARTIAL (Sure/Not sure in lesson Retrieve; not folded into mastery).
- Uncertain state [6.2]: DONE (`confidence: "uncertain"`).
- Transparent rule-based adaptation, configurable thresholds [6.3]: DONE (Loop.config, Mastery.config; no "80%" universal, though pathPass is 0.8 for ladders). Calibration pilots: not done.
- Rules list [6.3]: weak prereq -> refresher DONE; worked ok -> faded DONE; repeated miss -> different view DONE; hints frequent -> similar no-hint Q DONE; strong -> transfer DONE; due -> Due today DONE; weak delayed recall -> shorter interval DONE; strong repeated recall -> longer interval DONE.
- Mastery states (8) [6.4]: DONE (Mastery.STATES, chips with marks, "Mastered for now" not permanent).
- Knowledge tracing, personalised selection, AI tutor [6.5]: DEFER (spec itself defers; AI tutor conflicts with no-AI rule -> REJECT).

## 7. Subject blueprint (catalogue; only what exists)
- Maths manipulatives/visual [7.1]: DONE for place value, fraction wall, algebra tiles, geoboard, grapher (js/labs), plus games: balance, fractions, numberline, angles, graphs, mathkit. MISSING: area/array models, percent grid/discount store, ratio double number line, probability/statistics lab, trig/vector tools, money/decimal market.
- Bhanzu-style Percentages lesson [7.1]: PARTIAL (think/worked/fade/game generic; no percent-specific discovery manipulative).
- Physics Discovery Engine [7.2]: PARTIAL. Labs: force and motion, circuit (Labs.flow, record saved via Store.saveLab). MISSING: waves/sound, optics ray lab, heat, magnetism, gravitation, energy. Experiment record fields: question, prediction, variables changed/held, observations table, conclusion, fair-test flag. MISSING: free-text hypothesis/reflection and "numerical application after" step.
- Experiment notebook/record [7.2, 11]: PARTIAL (Store.saveLab and "past records" list inside each lab; no global notebook/portfolio view).
- Chemistry [7.3]: DONE for particles (states), atom builder, molecule builder, equation balancer. MISSING: periodic table explorer, indicator/pH lab, reactivity ranking, mole concept, dilution.
- Biology [7.4]: DONE for cell builder (with label check), food web, body systems. MISSING: photosynthesis, genetics/inheritance, digestion sequencer, classification sorter (generic `sort` game may serve).
- Science/EVS Classes 1-5 [7.5]: PARTIAL (generic sort/match/order games; no dedicated EVS packs).
- English [7.6]: PARTIAL. Games: words, sentences, grammar, langkit. No reading-evidence/writing tasks; constructed responses not marked.
- Punjabi / Hindi pathway [7.7, 7.8]: PARTIAL. Gurmukhi letters, matras, tracing (js/games/letters.js, matras.js, trace.js); tracing hidden until teacher reviews strokes (STROKES_REVIEWED=false); Hindi/Punjabi hidden by release lock in store builds. Audio: device TTS only (speech.js), no verified Punjabi audio asset (spec warns against this).
- History timelines / source analysis [7.9]: PARTIAL (timeline game, India map explorer). Source investigation, cause-effect chain: MISSING.
- Geography maps [7.10]: PARTIAL (India map explorer, labs/india-map.js, india-lab.js; no scale/legend/climate/data layers).
- Civics [7.11]: MISSING beyond MCQ/notes (polsci content exists, no activities).
- Economics / Accountancy / Business [7.12]: MISSING interactions (content for class 11-12 exists; no ledger/journal builders or demand-supply lab).
- Computer Science [7.13]: MISSING.
- Vocational/other [7.14]: MISSING (phc.js health & PE content exists, no activities).
- Fictional-data/no-financial-advice [7.12]: DONE by omission.

## 8. Games
- Every chapter has at least one interaction [8.1]: PARTIAL. Games.availableFor decides per chapter from content; games/labs are not mapped to named objectives in data (the engine infers via `Objectives.forQuestion`), and many chapters have only generic games.
- Reusable templates [8.2]: DONE for match, sort, sequence (order, timeline), build (words, sentences, mathkit, balance), label (labels), trace, number line, prediction (labs), quickfire/race (MCQ). MISSING: find-the-error as a game template (exists only as lesson step), data investigation, story/role-play.
- Data-only game configuration (Phase 2 exit) [15]: PARTIAL. Templates take terms/MCQs/diagrams from chapter data via Games.terms/mcqs/diagrams/gens; no explicit per-chapter game config file or registry mapping chapter -> game + objective.
- Game quality checklist fields [8.3]: PARTIAL (completion/ stars, mistakes list, accessibility by tests; no objective IDs, prerequisite or evidence metadata per game).
- Game loop: demo round, hint, adjust difficulty, end reflection, follow-up transfer [8.4]: PARTIAL (results screen shows "What you got wrong" and "Skills that moved forward"; no demo round, hints, adaptive difficulty or reflection prompt).
- Evidence from games at objective level [8.1, 11]: **PARTIAL, weak**. Only MCQ-based games calling `api.answered` (engine.js:257; quickfire.js:76) write answer events; race.js and the 16 other types write only the final non-objective "game" event (engine.js:336, changes no mastery). Race uses MCQs but calls `api.miss`/`api.score` only.
- Labs evidence at objective level: PARTIAL. Labs.flow logs one answer (explanation correct/incorrect) to the best-word-matched objective (Labs.logger) - prediction not stored as evidence separately; india-map has none.
- Rewards for learning behaviours [8.5]: DONE (Readiness recognitions on Progress, no points/ranks; "improved after feedback", retention).
- No public ranking/shame/pay-to-win [8.5]: DONE (local best score and ghost of own best run only).

## 9. Visual design / age bands
- Age bands with different density/tone [9]: DONE (App.band sets body[data-band], css adapts; Plan.young for classes 1-3 shorter sessions).
- Reduced motion, colour not only indicator [9.1]: DONE (prefers-reduced-motion in css; state chips use marks + text; labs keyboard/radios, aria-live).
- Recommended home: Continue Learning, Today's Plan, Explore/Play, My Progress, Subjects [9.2]: PARTIAL (js/views/home.js with Plan.today and resume; Explore/Play suggestion via Plan.explore; verify "Continue" exact-lesson resume works: Guided snapshots resume).

## 10. Content architecture
- Objectives as central data unit [10.1, 15]: PARTIAL (see counts; <1% chapters hand-written).
- Chapter schema fields [10.2]: PARTIAL. Have: ids, objectives {id,text,topics,level,prereq,mistakes}, lesson route generated, revision implicit. MISSING: methods list, activities/assessmentIds per objective, curriculumVersion, per-objective review status.
- Activity schema [10.3]: PARTIAL (Labs.register: id, title, area, chapters, objective, assumptions; investigations declare variables/predictions; no `objectiveIds`, `evidence` list; labs map to chapters not objectives).
- Assessment variety [10.4]: PARTIAL. MCQ, assertion-reason, case MCQ, sort/match/order games, written questions (shown with model answer, unmarked), generators with numeric options (still MCQ). MISSING: numeric answer entry with tolerance, constructed response marking/rubric, graph/diagram placement as assessment (labels game exists).
- Feedback/misconception mapping separate from UI [10.4]: PARTIAL (mistakes live in data/objectives.js; question-to-mistake via keyword match, not explicit `misconception` field on distractors).
- Curriculum mapping (board, version, review status) [10.5]: PARTIAL. `syllabus: { board, match, books, reviewed, status }` per subject and `source` per chapter (data/registry.js:244, CONTENT_GUIDE.md); CBSE and PSEB are separate subject files (mathspb, sciencepb, etc.), no shared-with-variants model. Not per-objective; no cognitive-demand beyond `level` remember/understand/apply/analyse.
- Prerequisite graph [10, Phase 4]: PARTIAL (57 objectives with `prereq` lists, used only by entry diagnostic).
- Misconception database [10]: PARTIAL (159 mistakes in 20 chapters).

## 11. Progress and events
- Local versioned event log [11.1]: DONE (Store.logLearn; events {type, cls, subject, chapter, obj, ok, hints, attempt, source, err}; `learn.roll` summaries; eventCap 5000; state v2; backup/restore in Settings).
- Per-objective tracking [11.2]: DONE (n, ok, ind, nh, seen, first/last, ret, step, due, err). Hint *level* not stored; explanation/justification evidence only as "teach" ticks; response time not used (matches spec).
- Student-facing progress [11.3]: DONE (Progress page, chapter hub objective chips, "Skills that moved forward", parent page lists can/practising/review).
- Parent report: DONE basic (js/views/parent.js, plain wording, no labels on the child); next-step recommendations: PARTIAL (Loop.recommend on lesson end only).

## 12. Technical, offline, privacy
- Keep JS + Capacitor + PWA [12.1]: DONE.
- SVG/Canvas, no big game framework (Phaser) [12.1]: DONE.
- Offline core [12.2]: DONE (sw.js precache, per-class data loading). Optional content pack download/update UI and recovery from interrupted update: PARTIAL (per-class lazy load with Native bundle; no explicit pack manager).
- Schema versioning and migration tests [12.3]: PARTIAL (state `v: 2`, backward-compatible rule in CLAUDE.md, tests/backup.spec.js; no migration test suite for the learn log).
- Multi-student profiles + backup [12.3]: DONE (students.js, backup.spec.js).
- IndexedDB for large data [12.3]: DEFER (localStorage fine now; eventCap 5000 limits size).
- Optional cloud sync [12.4]: DEFER/REJECT (no backend/accounts rule).
- No ads, minimal data, no public leaderboards, no camera/mic/location [12.4]: DONE.
- Safe sharing/collaboration feature [12.4]: DEFER (no chat, no sharing; certificates are printable only).

## 13. Content QA
- Review workflow & content states [13.1, 13.2]: PARTIAL. Statuses draft/published (+ `status` field per subject in registry) and CONTENT_GUIDE review section; no 10-state pipeline, no reviewer per item, not shown beyond a draft label. Owner does reviews; do not mark content reviewed.
- Quality checklist automation [13.3]: PARTIAL (scripts/validate.js checks data, generators, labs, India map, objectives, translations; check-objectives.js reports mapping quality).
- Language/audio review [13.1, 7.7]: MISSING in tooling (manual only).

## 14. Assessment and exam prep
- Entry diagnostic, in-lesson checks, practice, mixed retrieval, chapter assessment, cumulative, exam sim, transfer [14.1]: DONE (guided diag; Retrieve/Master; quiz; Revise due mixed; Mixed test, Class 9-12 Papers; transfer Qs). Cumulative across units: PARTIAL (mixed test by subject).
- Chapter Q&A, MCQ + non-MCQ, numericals with steps, sample papers, formula sheets, error notebook, timer [14.2]: DONE (practice banks incl. written, Gen steps, Papers 9-12, sheets.js/formula sheets, My mistakes, timer). Previous-year papers: MISSING (legal sourcing).
- Exam readiness report by objective [14.2, 14.3]: PARTIAL. Readiness.exam is by chapter coverage and question format, concept vs exam kept separate (DONE); no per-objective exam report; written answers not scored.
- Time management feedback not confusing speed with understanding: DONE (speed never scored).

## 15-19. Rollout, prioritisation, metrics, acceptance
- Phase 0 audit/IDs: PARTIAL (stable objective keys; marketing counts reconcile in STORE_LISTING.md/RELEASE_CHECKLIST.md; review workflow informal).
- Phase 1 loop (diagnostic, prediction, worked/faded, self-explain, feedback, spacing, mastery, objective view): DONE except "self-explain per step" and error-specific feedback outside 20 chapters.
- Phase 2 game templates: PARTIAL (see section 8).
- Phase 3 subject packs: PARTIAL (Maths, Chem, Bio partial; Physics 2 labs; languages partial; Commerce/CS none).
- Phase 4 adaptive/knowledge graph: PARTIAL / DEFER.
- Phase 5 projects/portfolio: MISSING; "optional family/teacher review": DEFER (no accounts); "AI-assisted help": REJECT.
- Prioritisation formula [16]: n/a (process).
- Success metrics [17]: Improvement diagnostic -> assessment: DONE for Practice by topic (Find my level -> Check my progress growth line); delayed recall: DONE in Mastery.ret and Readiness "ready" stage; independent completion: DONE (ind); transfer success: PARTIAL (transfer events not tagged/reported); drop-off by step, crash-free sessions, error reports, aggregate analytics: DEFER/REJECT (needs backend/telemetry; offer only on-device reports).
- Chapter "complete" acceptance criteria [18]: PARTIAL; no automated check that each chapter has measurable objectives, independent check per objective, worked example, visual, interactive experience (could be added to validate.js).
- Sprint backlog [19]: Sprint B items DONE except "discovery/prediction configurable via data" (think uses first quiz Q or Sims pred); Sprint C PARTIAL; Sprint D PARTIAL (Maths, Biology, Punjabi in; Physics notebook, History/Geography timeline+map partial).

## Tally
Approx. lines tagged (mixed-status lines counted under each tag): DONE 46, PARTIAL 52, MISSING 13, DEFER/REJECT 8.

## Top gaps (highest learning value first)
1. Objective quality: ~99% of chapters use heading-derived objectives and word-match mapping (leave-one-out 65%, as low as 22% in derived chapters). Approach: use check-objectives.js to rank chapters by worst leave-one-out, hand-write objectives (with `topics`, `prereq`, `mistakes`) in data/classN/objectives.js for the weakest ones first; add optional `obj:` on bank questions so Objectives.forQuestion short-circuits.
2. Mistake-aware feedback only exists in 20 chapters. Approach: write `mistakes`/`fix` for the highest-traffic Class 6-10 Maths/Science chapters, and let question banks tag wrong options (`kinds` already supported by Learn.errorOf) instead of keyword matching.
3. 17 of 18 game types give no objective evidence. Approach: route MCQ-style games (race, match/sort via item {q, options, answer, ref}) through api.answered; for non-MCQ games emit one Learn.answerEvent per item with ok/hints using the same helper labs use (Labs.logItem).
4. Labs/sims not wired to objectives (best word match on investigation text, one event per experiment) and india-map none. Approach: add optional `objective` id to each Labs.flow investigation and log prediction correctness separately (api.log already takes events).
5. No unified use of confidence/"guessing" and hint dependence in Mastery. Approach: pass `sure` from guided practice into the answer event and add a `guess` kind to Mastery.fold so unsure-right does not count toward independence; surface in Loop.recommend.
6. Prerequisites are never used to gate or to route remediation (only entry check). Approach: reuse `prereq` + Mastery.stateOf to show "build this first" chips on the chapter hub and in Plan.lessonItem for hand-written chapters.
7. Self-explanation/elaboration limited to optional teach-back. Approach: add a 'why' step after `worked`/`fade` (tap the reason for a step from options generated from Gen steps), logged as `lesson-step`/`teach` evidence.
8. Physics/Chemistry/Biology coverage of discovery labs is thin (2 physics labs, no waves, optics, magnetism, pH, genetics). Approach: add Labs.flow configs (data-only investigations) with Labs.calc formulas tested in scripts/check-labs.js.
9. Non-MCQ assessment: no numeric-entry with tolerance or marked constructed responses. Approach: extend quiz item shape with `type: "numeric"` (answer, tol, unit) rendered in quiz.js and guided turn/master; self-check rubric for written answers using existing `written` bank (student ticks marking points).
10. Subject-specific variants and activities for History, Civics, Economics, Accountancy, Computer Science are absent (only generic games). Approach: add configs for existing templates (timeline, sort, order, match) with source-analysis and journal-entry sorters from chapter data; defer CS until a syllabus is chosen.
