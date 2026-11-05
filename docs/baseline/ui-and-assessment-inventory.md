# Pocket Class: UI spec and Platform Assessment checked against source

Checked on the `main` tree (clean, last commit e90e04a). Statuses: DONE, PARTIAL, MISSING, STALE, DEFER/REJECT.

## 0. Is docs/UI_IMPLEMENTATION.md true?

- Phases 1-4 ticked: TRUE. Verified in `js/views/onboarding.js` (STEPS), `learn.js`, `shell.js`, `chapter.js`, and `tests/{onboarding,profile,shell,chapter-hub}.spec.js`.
- "Phase 5 in progress" (unticked in the file): the file is out of date. The task brief says 1-5 are ticked, but the file still shows `[ ]` for Phase 5 and 6. In code, Phase 5 is largely done. There are 19 registered games (`js/games/*`) and 17 labs (`js/labs/*`: circuit, force, particles, cell, atom, equation, body, foodweb, placevalue, fractionwall, algebratiles, geoboard, grapher, indiamap). The doc's "Not done" list is stale: Chemistry labs, Biology labs, Maths Studio, the India map and tracing exist.
- Phase 2 "Not done: Explore items open the chapter's Notes; no stand-alone labs; Parent area has no gate": the labs part is STALE. `Labs.forChapter` exists, and `explore.js` links "Open" or "Play". The parent gate is still MISSING (no gate/PIN in `parent.js`, `shell.js` or `settings.js`).
- Phase 1 "the app-wide emoji icons are unchanged": PARTIAL-stale. `js/subject-icons.js` (SVG line icons) is used in shell, subject, chapter, onboarding, parent, progress and others. Emoji remain in empty states, Progress, the games engine and other places (counts below).
- Phase 6 (Progress and personalisation) is unticked and is genuinely partial. See the Progress section below.

## 1. UI spec (ui-spec.txt)

### 1-3 Goals, five tabs, IA
- Five tabs Today / Learn / Play / Explore / Progress, stable bottom bar and sidebar, `aria-current`: DONE (`js/views/shell.js`, `App.tabOf`).
- Profile/avatar entry holds Profile, Settings, Parent, Search, Downloads, Timer: DONE (`shell.js`, `js/views/profile.js`).
- Class-wise / Subject-wise are projections of one content graph: DONE (`Store.shownSubjects`, `profile.view`, `profile.subjects`; `learn.js`).
- "Mastery means understanding, not one quiz score": DONE (`js/mastery.js`: accuracy, independence and retention over a window and delays; states).

### 4-5 Onboarding
- Welcome, Who, Board, Class, View, Subjects, About you, Goal, Tour, Today, resumable via `profile.setup`: DONE (`onboarding.js` STEPS, `Store.inSetup`).
- Student / Parent paths, parent creates children then picks who is learning: DONE (onboarding.js, `students.js`). International children via the Parent path: MISSING (UI_IMPLEMENTATION says "Not done").
- Board step with CBSE and PSEB, board id stored: DONE. "Other boards: coming later" tile: MISSING. There is an International option instead, so this is acceptable.
- Class 3x4 grid with large targets: DONE (`classGrid`, `--touch` 44px; 88px in band 1-2).
- Warn on board/class change when subjects would drop: DONE (`settings.js:62`, `profile.js:103`).
- Class-wise preselects all; Subject-wise needs at least one: DONE (onboarding subjects step; `subjects: null` means all).
- Nickname, avatar, interface language, separate lesson language: PARTIAL. `profile.learnLang` is stored and editable (`profile.js`, onboarding), but nothing reads it. Lessons, notes and `guided.js` never switch language. A setting that does nothing is a dead control.
- No DOB, school, address or contact asked: DONE.
- Goal 15/20/30 or decide later; reminders opt-in: DONE (`profile.goal`, `js/reminder.js`).
- Optional skippable tour: DONE.
- First Today never empty: DONE (`home.js` "Start learning / Choose a subject" card).
- Never fabricate progress / recommendations: DONE (Plan falls back; `Plan.young`, `plan.js`).

### 6 Class-wise vs Subject-wise
- Segmented control at top of Learn, saved, progress untouched: DONE (`learn.js`, `.learn-seg`).
- "Manage subjects" in Learn and Profile: DONE.

### 7 Main screens
- Today order (greeting, continue, plan, due, daily challenge, subjects, recent): DONE (`home.js`; an extra Explore card). "Recently opened" is DONE (`Views._.recentList`).
- Learn: class pill, search link, subject cards: DONE. "Age-appropriate filters": MISSING (no filter beyond view and class).
- Subject dashboard (identity, progress, continue chapter, review-due marks): DONE (`subject.js`). Only 121 lines, tidy.
- Chapter hub Understand / Visualise / Explore / Play / Practise / Master, empty hidden: DONE (`chapter.js`, `tests/chapter-hub.spec.js`).
- Lesson player (title, step progress, Exit, resume at checkpoint, predict then discover then visualise then worked/fade then retrieve): DONE (`js/guided.js`: diag, think, interact, visual, idea, resolve, worked, fade, turn, practice, master). "Reflect" is only partly there (`hook`, `done`; teach-back in `.teach`).
- Play centre groups: Continue playing, Quick challenges, chapter-linked, My subjects: DONE (`games.js:172-186`). "Logic & Reasoning" group: MISSING (no such grouping or content tag).
- Game tile metadata (subject, class range, objective, duration, completion): PARTIAL. `gameTile` shows title, blurb, subject, chapter, stars, "New", and `minutes()` estimates (3 min default). No class range, and the objective is not shown on the tile.
- "Rewards should not encourage endless play": DONE by design (stars per round, no streak-bait in games). Streak is optional (`Store.showStreak`).
- Explore areas Physics Lab / Chemistry Lab / Biology Explorer / Maths Studio / World Explorer: DONE (`explore.js` AREAS), with "what you can investigate" text. Experiment result back to lesson: DONE via a "Chapter" link on each row and objective evidence (`Labs`).
- Progress: developing / secure / mastered wording: PARTIAL. `mastery.js` uses eight states ("Nearly independent", "Mastered for now", review-due, refresher) with text and a mark glyph, not the 3-word set. That is richer than spec and not colour-only.
- Progress dimensions (understanding, accuracy, application, retention, independence, reasoning): PARTIAL. Only accuracy, independence and retention are computed (`mastery.js`). Understanding, application and reasoning have no measure.
- Mastery map, revision queue, "what to work on next", history, achievements: DONE (`progress.js`: By chapter, skills bands, What to work on next, This week, Recognitions, Certificates; `revise.js` queue). A visual per-subject "map" is PARTIAL (chips and bars, no map).
- Parent dashboard: weekly summary, subject progress, mastered vs needing practice, printable report: DONE (`parent.js`, `printPage`). Parent gate: MISSING. Exportable report is print only, no file export (fine offline).

### 8 Age bands
- `body[data-band]` 1-2, 3-5, 6-8, 9-10, 11-12 set from class: DONE (`App.band`, `App.render`).
- Band styles for Today/Learn/chapter hub/onboarding at 1-2, 3-5 and 11-12: DONE (CSS lines ~1418, 1553-1588, 1642-1660).
- Bands 6-8 and 9-10 have zero rules (default look). PARTIAL: the spec's "rich diagrams / exam practice" emphasis is not a visual or content-density treatment.
- Band 1-2 and 3-5 share one set of rules (identical styling): PARTIAL. No distinct "mission map / story / collectibles" for 3-5.
- Band changes only presentation, never ids: DONE.
- Band-aware content outside CSS (speech for classes <= 3 and language subjects to 5, letter tracing big for cls <= 2, race level by class): DONE (`speech.js:10`, `trace.js:237`, `race.js:16`).
- Audio guidance for classes 1-2: PARTIAL. `Speech.btn` read-aloud exists on notes and terms (`speech.js`, classes 1-3 and language subjects to 5), not on onboarding or game instructions.

### 9 Visual design system
- Tokens (navy, blue, green, amber, purple, coral, bg, surface, text, muted) in `:root` and dark: DONE (`css/styles.css:1-110`, plus `--ink-*` accessible text colours per tab).
- Consistent use: PARTIAL. Two token sets coexist. Legacy (`--bg #f5f5f9`, `--accent #5b5bd6`, `--surface-2`, `--border`) is used 764 times in CSS. The spec's `--ui-*` set is used 60 times, `--navy/blue/green/amber/purple/coral` 77 times. Onboarding and profile use `--ui-*`. Most of the app (cards, quiz, chapter, labs, games) uses the legacy indigo `--accent`. The spec palette is only the tab-level accent.
- Hard-coded hex in CSS outside the token blocks: 52 (e.g. gradients `#6d6df0/#4a3fc4`, `#5b5bd6/#7a4fd1`, `#fff`), plus 5 `rgb()` calls. Hex in `js/views/*.js`: 0. `js/avatars.js`: 9. `data/registry.js` subject colours: 24 (feed `--c`). `js/labs` and `js/games`: 0.
- Inline `style=` in views, total 168: chapter 19, paths 36, progress 17, international 17, revise 16, parent 13, profile 8, games 7, settings 7, home 6, onboarding 6, test 6, explore 5, timer 4, learn 3, shell 3, subject 2, search 2, ui 2, students 1. About 39 are `--c:` (the data-driven subject colour, fine), 12 are `width:%` progress bars (fine), and about 67 are margin-only spacing. Hard-coded colour in inline styles: about 11 (`color:`/`background:`; e.g. `profile.js:34` `color:var(--muted)` is token-based). So views are token-based for colour; the debt is layout inline styles with no spacing utility classes.
- Typography: system-ui stack plus Noto Devanagari/Gurmukhi (offline, covers three scripts): DONE and deliberate. Spec's Inter/Poppins: REJECT (no bundled fonts; system stack is the offline-safe choice).
- 8-pt spacing (`--sp: 8px`), 14-20 px radii (`--radius 18`, `--radius-sm 12`): PARTIAL. The tokens exist, but most CSS uses raw px values (many 10, 12, 14, 6).
- Touch targets 44px: DONE. `--touch: 44px`; about 45 `min-height: 44px`+ rules covering tabs, chips, games, labs. Small spots remain, e.g. `.ord-grip` width 36, `.im-t` min-width 40, and tiny/pill links.
- One coherent icon family, no mixing: PARTIAL. `subject-icons.js` provides 25 line icons (subjects and sections), and `icon()` handles UI glyphs. But emoji are still used in views/games: games.js 7, progress.js 9, paths.js 8, onboarding.js 7, home.js 3 (including the "Namaste 🙏" greeting), revise.js 3, engine.js 16, mathtext.js 20, plus `data/games/*` word-art. Empty states are emoji-based (see below). Subject emoji remain in `data/registry.js` as the fallback (`SubjectIcons.html` falls back to emoji only when no drawing).
- Custom subject illustrations (not just icons): MISSING. Icons are 24px monoline glyphs. No illustrated artwork, no game thumbnails (game tile uses a generic `icon(g.icon)`).
- Motion tied to meaning, reduced motion: DONE. Global `@media (prefers-reduced-motion: reduce)` at `styles.css:793` kills all transitions and animations, with extra per-component rules.
- Dark theme with separately tested tokens: DONE (auto/light/dark in Settings; `--ui-*`, `--ink-*` redefined; no automated contrast test). Dark values for the legacy tokens exist.
- Focus styles: DONE. Global `:focus-visible` 2.5px outline (`styles.css:154`) and many component overrides; `forced-colors` handled for onboarding only.
- Dynamic type / large text: PARTIAL. `-webkit-text-size-adjust: 100%` and mostly px font sizes. No in-app text-size control, no `rem` scaling. This is a gap against "Support dynamic font sizing".

### 10 Component inventory
- Board selector, Class selector, Learning-view switch, Subject card, Chapter row, Continue card, Activity tile (game tile), Mastery indicator (glyph plus label), Revision queue item, Profile switcher, Parent summary card, Feedback panel (`.feedback good/bad` plus hints): DONE.
- Lesson step header: DONE (guided.js).
- Empty state: PARTIAL. One helper `emptyState(emoji, text)` (`ui.js:148`). It has no action button (just emoji and a sentence), and inline variants exist (`learn.js:56`, `progress.js:29,163`, `parent.js:52,54`). A few have a next action (Today start card, revise "nothing due", games retry button).
- Offline status (available / downloaded / not available): PARTIAL. Settings "Save every class for offline" with status text; none per item. Native builds bundle everything, so it matters only for the web.
- Loading / error states: PARTIAL. Games have "Loading..." and a retry (`games.js:81-85`); other views are synchronous.

### 11 Interaction and state rules
- Board/class/profile/view preserved across restarts: DONE (localStorage `vidya:v1`).
- Switching view never touches history: DONE.
- Class change re-checks subjects and confirms: DONE.
- Games and labs write to objectives, not just score: DONE (`engine.js:259-336` `Learn.answerEvent`, `Learn.record`; labs log evidence per chapter objective; tests).
- Game mistakes feed My mistakes: DONE (`engine.js:266` `Store.addMistake`).
- Resume lesson at last safe checkpoint: DONE.
- Delete profile / reset progress confirm: DONE (`students.js:78`, `settings.js:180`). Undo: MISSING (native `confirm()` only; no undo).
- Fallback to "Choose a subject" without mapping: DONE.
- Screen-reader labels, keyboard on web: PARTIAL. 102 `aria-` attributes across views, labelled controls, keyboard-operable labs (focusable cells, `tabindex`), but no screen-reader audit or test; `confirm()` dialogs.

### 12-13 Data model, offline, privacy
- Profile fields, versioned migration, backup restore: DONE (`store.js` `pv`, `tests/backup.spec.js`).
- No CDN for fonts/icons/game logic: DONE (verified: no external URLs in CSS; sw.js precaches `js/`, `data/games/`).
- Large media download availability: PARTIAL (see Offline status).
- Storage pressure: PARTIAL. `store.js:153,166` catch quota failures and keep working in memory silently. No user-visible warning.
- Explain backup behaviour; parent access explicit: PARTIAL. Backup exists in Settings (`settings.js:99`), but no parent gate.
- Text alternatives for diagrams: DONE (`role="img" aria-label` on diagrams, `chapter.js:295`; SVG icons labelled).
- Short plain-language instructions for young learners: PARTIAL (band 1-2 hides hints in onboarding; game instructions not simplified).

### 14-15 Rollout and QA
- Phase 1 and 2: DONE. Phase 3 (parent, dark mode): PARTIAL (no parent gate; dark mode done; cross-platform QA is the open store-release list in CLAUDE.md).
- Airplane-mode, backup/restore, profile-leak tests: DONE (`tests/pwa.spec.js`, `backup.spec.js`, `students.spec.js`, `loading.spec.js`).
- Large-text and screen-reader checks: MISSING (no test).
- Colour contrast automated check: MISSING (comments claim 4.5:1 for `--ink-*`, no test).

## 2. Platform Assessment (assessment.txt)

### 1-2 Repository facts and visual design
- "Light and dark themes, responsive layout, desktop sidebar": STALE (already true and expanded: five-tab shell).
- "Large touch targets, reduced motion, accessibility": DONE (see above).
- "Purple-indigo #5b5bd6 accent, grey bg, 2-column subject cards with small icons": PARTIAL-stale. Still the dominant legacy `--accent`; but subject icons are now SVG line icons, and band 1-5 get larger cards.
- Learning adventure / journey through subjects: MISSING (no adventure map UI; the nearest are Today's plan and the India map lab).
- Replace emoji subject icons with illustrated artwork: PARTIAL (line-icon SVG set done; no illustrations).
- Show progress visually: map, badges, challenges, next recommended activity: PARTIAL. Badges/Recognitions and Certificates (`progress.js`), next activity (`plan.js`, Today). No progress map.
- Interactive content (move, build, vary, solve visual puzzles): DONE (17 labs plus games such as fractions, balance, graphs, angles, order, timeline, sort, trace).
- Age-based visual direction table: PARTIAL (spacing and density only, see section 8).
- Keep brand consistent, vary playfulness: DONE in approach (bands change only presentation).
- Chapter-specific game thumbnails: MISSING.
- Animated completion celebrations, small character animations: PARTIAL. Games end screen with stars and `Learn.improvedHTML`; `util.js:123` has an AudioContext sound; nothing animated beyond that.
- Optional sound effects: PARTIAL (`util.js`, a tone; confirm it has a mute setting).
- "Consistent fonts for English, Gurmukhi, Devanagari": DONE (`--font` stack).
- Avoid gradients/flashing/continuous animation: DONE (reduced-motion; the few gradients are on buttons).

### 3 Research benchmarks
- Tivumo: manipulatable maths: DONE (`js/labs/{placevalue,fractionwall,algebratiles,geoboard,grapher}.js`).
- Learning Cave quests/battles/spells: DEFER (game-theme; Learning Cave-style battles add little; could do missions later).
- PhET predict-manipulate-observe-explain: DONE (labs: predict, change one variable, observe, explain; `labs.spec.js`).
- Seterra maps: DONE (`labs/india-map.js`, `india-lab.js`; world map: MISSING).
- ScratchJr creation/projects: MISSING (P2, no creation tool); not a conflict.
- Do not bundle PhET: DONE (own labs; `scripts/check-labs.js`).

### 4 Game catalogue (by topic)
Maths
- Number Safari / Number line: DONE (`numberline`, 'order').
- Number Builder (place value): DONE (`labs/placevalue.js`).
- Math Race: DONE (`games/race.js`, with ghost).
- Multiplication Factory (arrays): MISSING.
- Sharing Challenge (division): MISSING.
- Fraction Kitchen: PARTIAL (`games/fractions.js`, `labs/fractionwall.js`; pizza/kitchen theme absent).
- Decimal Market, Recipe Master, Discount Store: MISSING (money context exists in `Money.fmt` and paths).
- Integers number line: DONE (`numberline`).
- Balance the Equation: DONE (`games/balance.js`, `labs/algebratiles.js`).
- Function Machine: MISSING.
- Shape Studio / Geoboard: DONE (`labs/geoboard.js`, `games/angles.js`).
- Area/perimeter garden: PARTIAL (geoboard only).
- Coordinate "Treasure Coordinates": PARTIAL (`graphs.js`, `grapher.js`).
- Graph Builder: DONE (`games/graphs.js`, `labs/grapher.js`).
- Data Detective, Probability Lab, Trigonometry Height Explorer, Calculus Moving Graph, Vector Navigator: MISSING.
Science
- Living / Non-living, Habitat Rescue: PARTIAL (generic `sort` game).
- Plant Life Builder: MISSING.
- Body Explorer: DONE (`labs/body.js`).
- Cell Builder: DONE (`labs/cell.js`).
- Food chains / web: DONE (`labs/foodweb.js`).
- Circuit Lab: DONE (`labs/circuit.js`).
- Magnetism, Light/optics, Sound waves: MISSING.
- Motion and force: DONE (`labs/force.js`).
- Particle World: DONE (`labs/particles.js`).
- Atom Builder: DONE (`labs/atom.js`).
- Periodic table sorter: MISSING.
- Reaction Lab / equation balancing: DONE (`labs/equation.js`).
- Mole concept, DNA/genetics, Planet Protector: MISSING.
- Systems Mission: DONE (`labs/body.js`).
Social Science
- History Time Machine (order events): DONE (`games/timeline.js`, `data/games/timelines.js`).
- Build a Civilisation, Historical Detective, Earth Explorer, Monsoon Mission, Resource Manager: MISSING.
- India Map Explorer: DONE (`labs/india-lab.js`).
- Constitution Challenge: PARTIAL (generic `match`).
- Parliament/Governance/Market simulators, Population Explorer: MISSING.
English
- Word Builder / Spell Builder: DONE (`games/words.js`).
- Grammar Detective: DONE (`games/grammar.js`).
- Sentence Builder: DONE (`games/sentences.js`).
- Word Match: DONE (`games/match.js`).
- Sound Detective (phonics): PARTIAL (read-aloud only, no minimal-pair game).
- Tense Time Machine, Punctuation Rescue, Mystery Passage, Character Detective, Rhyme, Story Creator, Story Sequence: MISSING / PARTIAL (`order` could serve sequencing).
Punjabi / Hindi
- Gurmukhi Akhar Adventure: DONE (`games/letters.js`).
- Matra Builder: DONE (`games/matras.js`).
- Letter tracing: DONE but hidden until teacher review (`STROKES_REVIEWED=false`).
- Hindi games: DONE in code, locked in store builds by `js/release.js`.
Computer Science, Commerce, Accountancy
- Algorithm Maze: MISSING. There is no CS subject (`data/registry.js` ids: accountancy, business, economics exist as content only). Commerce simulation games: MISSING.

### 5 Chapter playability
- Game or lab per chapter via chapter hub Play/Explore: DONE (`chapter.js`, `Labs.forChapter`, `Games`).
- Coverage rules: PARTIAL. Chapter-linked games exist only for chapters with a mapped game; no "every chapter has a game", no section challenge, no per-objective activity guarantee.
- Fraction Kitchen style 3 challenges and 4 minutes, stars: DONE as pattern (rounds, stars, `minutes()`).
- Game performance feeds subject progress: DONE (`Learn.record`).
- Missed skills reappear: DONE (`Store.addMistake`, Revise).

### 6 Technical
- Keep vanilla JS plus Capacitor: DONE.
- `engine.js` + registry + progress + feedback + templates dir layout: PARTIAL. Single `Games.register` engine with one file per game; no `templates/` split. The proposed JSON-driven game data (template, objectives, offline flag): PARTIAL (`data/games/*` for words, letters, matras, timelines, sentences; most games build from chapter content and `Gen`).
- Game progress store (completed, best, stars, attempts, last played): DONE (`engine.js` best scores).
- Mistakes connect to My Mistakes: DONE.
- Rendering HTML/CSS/SVG/Canvas: DONE. Phaser: REJECT for now (adds weight; the doc itself says start simple and avoid CDNs).
- Subject asset folders `assets/games/<subject>`: MISSING (no art assets; vector-in-code).

### 7 Visual excitement
- Home sections (greeting, journey, continue, play today's game, illustrated subjects, daily challenge, achievements, progress map): PARTIAL. All except "Play today's game" (Quick challenges only on Play), illustrated subjects and progress map.
- Collectible badges and subject achievements: PARTIAL (Recognitions and Certificates exist, not collectible per subject).

### 8-10 Measurement, roadmap, publishing
- Short post-game check, increasing difficulty, explanatory feedback: DONE (`Learn.feedback`, race levels, before/after "Check my progress").
- Don't reward speed alone: DONE (race is the only timed game; mastery ignores speed).
- 12-game first batch: 9 of 12 exist (Number Safari~numberline, Fraction Kitchen~fractions, Algebra Balance, Circuit Lab, Cell Builder, India Map, Time Machine, Word Builder, Grammar Detective, Akhar, Matra); Algorithm Maze MISSING.
- Pilot: one per age group per family: DONE.
- Repository description says Class 9-10: not verifiable offline (GitHub setting); README says Classes 1-12. STALE for the files; MISSING check for the GitHub "About" text.
- Reconcile 23,000 vs 40,000 MCQs: PARTIAL. README says over 30,000; STORE_LISTING says over 27,000 MCQs and 16,000 written (locked build). Neither matches the assessment's 23,000 / 40,000, but README and store counts differ by design (lock), documented in CLAUDE.md.
- PhET licensing warning: DONE (own sims).

### Methodology blueprint (rest of document)
- Active recall, spaced repetition at 1/3/7/14/30 days, Leitner-style review ladder: DONE (`revise.js`, `mastery.js` intervals).
- Interleaved/mixed practice, cumulative tests: DONE (`test.js` mock tests, mixed quizzes).
- Flashcards, retrieval quizzes: DONE.
- Worked examples, fading, error analysis ("turn", "slip" steps), self-explanation (teach-back): DONE (`guided.js`).
- Predict-Observe-Explain: DONE (labs, `sims.js`).
- Diagnostic assessment / Find my level: DONE (`paths.js`).
- Mastery learning, rule-based knowledge model, misconceptions: DONE (`mastery.js`, `objectives.js`, `Learn.feedback`). Statistical knowledge tracing: DEFER (assessment itself calls it later).
- Physics Experiment Notebook (hypothesis, variables, observations, conclusion): DONE (per-student `labs` records).
- Knowledge graph / prerequisites: PARTIAL (objectives mapping; no prerequisite graph).
- Socratic questions, real-world scenarios (Bhanzu), "one question five ways": PARTIAL (think/predict steps exist; multi-representation lessons rare).
- Project-based learning, student-generated projects, portfolios, ScratchJr-style creation: MISSING.
- Computational thinking / coding: MISSING.
- UDL (multiple ways to access): PARTIAL (read-aloud, three languages, diagrams).
- Parent reports: DONE (`parent.js`).
- Language engine (listen, pronounce, dictation, shadowing, speaking): PARTIAL (read-aloud only; no speech recognition).
- 3D anatomy, 3D terrain, climate sims: MISSING (SVG only).
- Accountancy simulations (ledgers, trial balance): MISSING.
- AI-assisted explanations / adaptive via AI: REJECT (no AI features).
- Online features suggested by sources (cloud sync, accounts, leaderboards, peer instruction, collaborative learning, debate): REJECT (no backend, no accounts, children's privacy).
- Video-based teaching (Physics Wallah style): DEFER (offline size, one-time purchase; none in repo).
- "Make a new Master Learning Methodology document": DEFER (owner decision; docs exist).

## 3. Status counts

Counted by the first status label on each bullet in sections 1 and 2 (182 bullets, 2 unlabelled notes): DONE 108, PARTIAL 40, MISSING 25, DEFER 3, STALE 2, REJECT 2. Several bullets bundle many items (e.g. the game catalogue), so counts understate MISSING games.

## 4. Top gaps (highest impact first)

1. **Lesson language does nothing.** `profile.learnLang` is collected in onboarding and Profile but never read. Either hide the control until content exists or switch notes and terms to the Hindi or Punjabi text that already exists (locked build: hide it).
2. **Two token systems.** Legacy indigo `--accent` still drives most of the app, while the spec palette only covers tab colours and setup. Alias the legacy tokens to the new ones (`--accent: var(--purple)`-style mapping, `--bg: var(--ui-bg)`) in one place and remove the 52 raw hex values in CSS.
3. **Emoji mixed with SVG icons.** Empty states, Progress, Today greeting, games engine and word art still use emoji. Add 5 to 6 SVG empty-state icons to `subject-icons.js` and change `emptyState(emoji, text)` to take an icon id and an optional action link.
4. **Empty states are dead ends.** `emptyState` has no action. Add an optional `{label, href}` and use it in Play, Explore, Progress and search.
5. **No parent gate.** The parent area, which shows one child's record, is open. Add a lightweight local gate (simple sum question or optional PIN stored in the profile) before `#/parent`, without accounts.
6. **No illustrated identity or game thumbnails.** Icons are 24px monoline only. Add one small illustration per subject and a thumbnail per game type, bundled as inline SVG so it stays offline and light.
7. **Bands 6-8 and 9-10 and 3-5 have no distinct treatment.** Add CSS for `data-band` 6-8 and 9-10 (density, panel style) and give 3-5 its own rules, keeping the ids and schema unchanged.
8. **Progress dimensions incomplete.** Only accuracy, independence and retention exist. Add "application" (correct on unfamiliar variants from `Gen`) and "reasoning" (teach-back or explain-step results), and show a three-word summary (developing / secure / mastered) beside the detailed states.
9. **Large text and accessibility checks absent.** Add an in-app text-size setting (scale root font in `rem`), plus a Playwright axe contrast and focus check for light and dark.
10. **Game catalogue gaps by subject.** Computer Science has no subject and games, and Social Science, Maths (arrays, division, function machine) and Science (optics, magnetism, sound) lack templates. Reuse existing templates (`sort`, `match`, `order`, `numberline`) with new `data/games/*` content before building new engines.
