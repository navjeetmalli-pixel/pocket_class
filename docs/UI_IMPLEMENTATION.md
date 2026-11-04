# New UI — implementation plan

How the "Full Onboarding and UI/UX Design Specification" maps onto this codebase. The blueprint is the design
document; this file says which files change, in what order, and what must not break.

Architecture stays as it is: vanilla JavaScript, no build step, PWA + Capacitor. No framework rewrite.

## Ground rules

1. **One content graph.** Board → Class → Subject → Chapter → Objective stays in `data/` and `data/registry.js`.
   Class-wise and Subject-wise are two views over it (filters in the Learn screen), never two copies of content.
2. **Progress is never lost.** `js/store.js` keeps its versioned save (`vidya:v1`, `v: 2`); every new field gets a
   default and a migration. Old backups keep restoring. Tests in `tests/backup.spec.js` must stay green.
3. **Every phase ships on its own**: validator 0 errors, `npm test` green twice, `npm run sync`, Android build.
4. **No dead ends.** A card or tab only shows when it leads somewhere real (spec §11, §15).

## Learner profile (do this first)

Today a student is `{ id, profile: { name, cls, board }, …progress }` and the device keeps `theme`, `lang`,
`reminder`. Extend the profile — same object, new optional fields, all defaulted for old saves:

```js
profile: {
  name: "Arjun",            // existing
  cls: 8,                   // existing (classLevel)
  board: "cbse",            // existing (boardId: "cbse" | "pseb")
  role: "student",          // new: "student" | "parent-managed"
  avatar: "a03",            // new: one of a small built-in set (SVG, offline)
  view: "class",            // new: learning view "class" | "subject"
  subjects: null,           // new: selected subject ids; null = all available for board+class
  learnLang: "en",          // new: lesson/explanation language preference ("en" | "hi" | "pa"), separate from interface language
  goal: 20,                 // new: daily goal minutes (15 | 20 | 30 | null = decide later)
  setup: { step, done }     // new: onboarding progress so setup resumes after the app is closed
}
```

Interface language stays a device setting (`state.lang`); lesson language is per learner (`profile.learnLang`).
When class or board changes, re-check `subjects` against `StudyData.subjectsFor` and confirm before dropping any.

## Phases and files

| Phase | Build | Files |
|---|---|---|
| 1 Onboarding + profiles | Welcome → Student/Parent → Board → Class → Learning view → Subjects → Name, avatar, languages → Study goal → Optional tour → Today. Resumable. Parent path: create child profiles, then pick who is learning. | `js/views/onboarding.js` (rewrite as a step flow), `js/store.js` (profile fields + migration), `js/views/students.js`, `js/views/settings.js` (Profile: manage subjects, view, languages, goal), `js/i18n.js`, `css/styles.css`, `tests/onboarding.spec.js` |
| 2 App shell | Five tabs: **Today, Learn, Play, Explore, Progress**; profile/avatar button opens Profile, Settings, Parent, Search, Downloads. Old routes keep working (redirect `#/revise`, `#/test`, `#/timer` into Today/Learn/Progress sections). | `js/app.js` (NAV, routes, redirects), `index.html`, `js/views/home.js` → Today, new `js/views/learn.js`, `js/views/explore.js`, `js/views/games.js` → Play centre, `css/styles.css` (tokens) |
| 3 Class-wise / Subject-wise | Segmented switch at top of Learn; class view = all subjects of board+class; subject view = selected subjects; switching never touches progress. Subject dashboard tidy-up. | `js/views/learn.js`, `js/views/subject.js`, `js/store.js` (`profile.view`, `profile.subjects`) |
| 4 Chapter hub | Sections **Understand, Visualise, Explore, Play, Practise, Master**, hiding empty ones; Understand = notes + learning loop (`js/guided.js`), Visualise = diagrams, Explore = experiments (`js/sims.js`), Play = games registry, Practise = practice bank + sheets, Master = quiz/test + objective check. | `js/views/chapter.js`, `js/guided.js`, `js/sims.js` |
| 5 Games and labs | Grow the existing games registry (`js/games/`) and experiments into the Play and Explore centres; new labs (circuit builder, particle world, cell builder, maths studio, India map, tracing). | `js/games/*`, `js/sims.js`, new lab files |
| 6 Progress and personalisation | Already started in Phase A/B of the learning spec (objectives, mastery, Today's plan, readiness). Progress screen uses "developing / secure / mastered" wording; parent area behind a parent gate. | `js/mastery.js`, `js/learn.js`, `js/views/progress.js`, `js/views/parent.js` |

## Status

- [x] **Phase 1 — Onboarding + profiles** (done): learner profile fields with migration and backup (`js/store.js`), step-flow onboarding for Student and Parent paths with resume (`js/views/onboarding.js`), Profile page (`js/views/profile.js`, `#/profile`), pictures (`js/avatars.js`), Settings and Students list updated, Home subjects and Today's plan follow the profile (Subject-wise view, picked subjects, daily goal), design tokens in `css/styles.css` used by the setup and profile screens, `body[data-band]` set in `App.render`, tests in `tests/onboarding.spec.js` and `tests/profile.spec.js`.
  - [x] Learner profile + versioned migration (`pv`), old saves and backups load with setup done
  - [x] Welcome > Who > Board > Class > Learning view > Subjects > About you > Goal > Tour > Today
  - [x] Parent path: children, then "Who is learning now?"
  - [x] Profile editing with confirm before dropping subjects (progress never deleted)
  - [x] Named colour tokens (light and dark) and age band attribute
  - Not done in Phase 1: lesson language does not change lessons yet; the Learn tab and the rest of the restyle are Phases 2 to 4; the app-wide emoji icons are unchanged.
- [x] **Phase 2 — App shell** (done): five tabs (bottom bar and sidebar) Today, Learn, Play, Explore, Progress with `aria-current`, the profile menu (Profile, Switch student, Search, Settings, Parent area, Timer, Downloads), Today trimmed to spec 7.1, Play centre groups, Explore areas, Progress with developing / secure / mastered, colour tokens and age-band density on Today and Learn, all old routes kept (`App.tabOf`), `js/views/shell.js`, `learn.js`, `explore.js`, `tests/shell.spec.js`. Not done: Explore items open the chapter's Notes (the experiment opens in place); there are no stand-alone labs yet (Phase 5); the Parent area still has no gate; the emoji subject icons are being replaced separately.
- [x] **Phase 3 — Class-wise / Subject-wise in Learn** (done): the segmented switch on `#/learn` (saved as `profile.view`, progress untouched), Subject-wise lists only the picked subjects with "Manage subjects", subject page tidy-up (identity, progress, continue chapter, "Review due" marks, practice tools).
- [x] **Phase 4 — Chapter hub** (done): six sections (Understand, Visualise, Explore, Play, Practise, Master) with empty ones hidden, routes `#/chapter/{c}/{s}/{ch}/{section}` with the old tab names redirecting, the lesson as a focused page with Exit and resume, age-band tiles (Classes 1-5) and density (11-12), `tests/chapter-hub.spec.js`. Not done: Explore lists `Labs.forChapter` items only once that function exists; the Master mock test is a fixed 15-question round, not the full Mock test setup.
- [ ] Phase 5 Games and labs — in progress. **Labs done:** four virtual labs (`js/labs/`: circuit builder, force and motion lab, particle world, cell builder) with predict, change one variable, observe, explain; experiment records saved per student (`labs` in the student data and backup); evidence logged against chapter objectives; listed in Explore and returned by `Labs.forChapter` for the chapter hub; formulas checked by `scripts/check-labs.js`; tests in `tests/labs.spec.js`. **Not done:** the remaining Play-centre game templates, more labs (waves, magnetism, acids and bases, ecosystems), a teacher view of experiment records.
- [x] **International — learn by topic** (done, outside the phase list): a third board on the setup board step (country, school year, Maths / English / Science), `profile.country / year / currency`, `cls` as a level 0 to 12, Learn / Today / Play / Explore / Progress built on the Practice-by-topic levels, `Money.fmt` for currencies, Profile switching with a confirm. See README "International students"; `js/international.js`, `js/views/international.js`, `tests/international.spec.js`. Not done: the Parent setup path for International children, a country-specific curriculum (deliberately never claimed), rupees in saved question text.
- [ ] Phase 6 Progress and personalisation

## Design tokens (spec §9)

Add to `css/styles.css` `:root` as named tokens and map existing ones onto them, light and dark tested separately:
navy `#142B4A`, blue `#4C91D7` (Learn), green `#39B99A` (progress/Explore), amber `#F3B65C` (challenges),
purple `#6E77D9` (Play/selected), coral `#E77969` (errors, sparingly), background `#F1F4F8`, surface `#FFFFFF`,
text `#26364A`, muted `#66758A`. 8-point spacing, 14–20 px card radius, 44 px touch targets.
Fonts stay system/bundled (no CDN). Emoji subject icons get replaced by one coherent bundled SVG icon set in Phase 2–3.

Age bands (spec §8) change spacing, density and illustration only — never ids, routes or the progress schema:
`body[data-band="1-2" | "3-5" | "6-8" | "9-10" | "11-12"]` set from `profile.cls`, styled in CSS.

## First milestone (before any more games)

1. New onboarding screens. 2. Learner profile storage. 3. Class-wise / Subject-wise selection.
4. Redesigned Today dashboard. 5. Redesigned Learn screen with working navigation.
