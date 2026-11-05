# Baseline: what's built and what's missing (5 Nov 2026)

This is Phase 1 of the plan. It checks three design documents against the code at commit `e90e04a` and against the live site:

- the Onboarding and UI/UX Design Specification
- the Master Learning Methodology and Feature Specification
- the Platform Assessment

The line-by-line checks are in [baseline/methodology-inventory.md](baseline/methodology-inventory.md) and
[baseline/ui-and-assessment-inventory.md](baseline/ui-and-assessment-inventory.md).

The documents are design proposals written without seeing the code. They aren't a list of things to rebuild. Anything that
conflicts with the product rules is rejected below.

## Scorecard

| Document | Done | Partial | Missing | Stale claim | Deferred or rejected |
|---|---|---|---|---|---|
| UI/UX spec and Platform Assessment (182 items) | 108 | 40 | 25 | 2 | 5 |
| Learning Methodology (about 119 items) | 46 | 52 | 13 | – | 8 |

**Already in place (no rework needed):**
- onboarding
- the five tabs, with desktop sidebar and phone tab bar
- the chapter hub (Understand, Visualise, Explore, Play, Practise, Master)
- the guided lesson (entry check, prediction, worked and faded examples, independent questions, teach-back)
- mastery states and spaced review
- Loop rules and Today's plan
- 18 game types (letter tracing hidden) and 14 labs
- Practice by topic, with before/after checks and certificates
- an international option
- light and dark themes
- reduced motion, focus styles and 44px touch targets
- a fully offline service worker
- 316 automated tests

**Live app check:** done at phone (375px) and desktop (1280px) widths, light and dark, for a Class 2 and a Class 6 learner. Every tab works.
- For a new learner, Today shows the *same chapter* three times: Start here, Today's plan and Play a game.
- A Class 2 child sees the same Today screen as a Class 6 child.
- Once, the update bar hid the greeting. I couldn't reproduce it after the update took over. It was most likely Chrome restoring the scroll position on a reload. Watch for it on real phones.

**Stale claims in the documents:**
- "no stand-alone labs": there are 14 now
- the theme and desktop layout "to do": already done
- `docs/UI_IMPLEMENTATION.md` still shows Phase 5 (games and labs) unticked, though most of it is built

**Rejected (product rules: no AI, no backend or accounts, offline, children's privacy):**
- AI tutor or AI explanations
- accounts and cloud sync
- leaderboards, chat and peer features
- telemetry-based metrics (only on-device measures fit)

**Deferred:** video lessons, statistical knowledge tracing, and a Computer Science course (no syllabus chosen yet).

## The real gaps

### Learning quality (largest impact)

1. **Learning goals are mostly automatic.**
   - Only 20 of about 2,350 chapters have hand-written objectives (92 objectives, 159 known mistakes). Every other chapter makes one objective per notes heading.
   - No question names its objective, so questions are matched by word overlap. A self-test of that matching is right only 65% of the time (22–50% in the worst chapters).
   - So "skills" on Progress are only as good as this matching.
2. **Mistake-aware feedback** ("this looks like a known mistake…") exists only in those 20 chapters.
3. **Games mostly don't count towards skills.**
   - Only Quick-fire reports each answer to the learning record. The other 17 games, including the race, record only "played a game".
   - Labs record one event per experiment. The India map records none.
4. **Confidence isn't used.** A lucky guess counts the same as a sure answer in mastery.
5. **Prerequisites are used only by the entry check.** There's no "build this first" on the chapter hub or in Today's plan.
6. **No typed number answers** (with units or tolerance) and no self-marking of written answers. Everything is multiple choice.

### Visual system

7. **Two colour-token systems are in use side by side** (old `--accent` 764 uses; spec `--ui-*` and named colours about 140), plus 52 raw hex colours in CSS and about 67 inline margin styles in views.
8. **Emoji mixed with line icons.** Empty states, Progress, games and Today still use emoji. Empty states are dead ends with no action button.
9. **No subject illustrations or game thumbnails.** Subject icons are 24px line icons only.
10. **Age bands are thin.** Only Classes 1–2 get a different look; 3–5, 6–8 and 9–10 look the same. Younger children need bigger, picture-led controls; older ones need denser study tools.
11. **No text-size setting** and no automated contrast or focus test.

### Smaller items

12. **"Lesson language" does nothing.** It's stored in onboarding and Profile, but no screen reads it. Hide it, or use the existing Hindi and Punjabi text. It's already hidden in the store apps by the release lock.
13. **The Parent area has no gate.** A sum question or an optional PIN would be enough; no accounts are needed.
14. **The GitHub repository description** still says "Class 9 & 10". It should say Classes 1–12. This is public text, so the owner should approve it.

## Proposed order (adapted from the plan)

| Step | What | Why first |
|---|---|---|
| 1 | Baseline (this file) | done |
| 2 ✅ | **Games and labs report every answer to the learning record** (gap 3). Done 5 Nov 2026: all 18 games and the India map; a strict skill match for made-up game items; at most 3 answers per skill per round; `scripts/check-evidence.js` guards it. The engine already has `api.answered`; each game must call it. | Cheap. Without it, nothing games do shows up in skills, revision or Today's plan. |
| 3 ✅ | **Objectives for pilot chapters** (gaps 1, 2, 4). Done 5 Nov 2026 for Class 3 Addition and Times tables, Class 4 Addition & subtraction and Fractions, Class 6 Fractions, Class 7 Working with fractions; Science Class 6 Methods of separation, Class 7 Acidic/basic/neutral and Electricity circuits, Class 8 Particulate nature of matter: hand-written skills (ids kept where they match, so progress carries over), common mistakes with fixes, prerequisite chains, 259 questions tagged with `obj:`, circuit and particle lab investigations name their skill; `check-objectives.js` now fails on a tag that names no skill. Teacher review still needed. Planned as: about 10 of the most-used Class 3–10 Maths and Science chapters get hand-written objectives, prerequisites, common mistakes and `obj:` tags on questions. | Makes Progress honest where children spend the most time. |
| 4 ✅ | **Visual pass on one slice** (gaps 7–9). Done 5 Nov 2026: one colour system (spec palette, old names are aliases, no raw hex, contrast checked light and dark); `emptyState(icon, text, action)` with a next step on every empty screen; line icons instead of emoji on Today, chapter hub, lessons, game results and Progress; Today shows each chapter once and a game card only for a chapter already opened. Translated strings with emoji still to be reworded (stripped at display for now). Planned as: Today → chapter → lesson → game → results → Progress. Merge the token systems, swap emoji for SVG, give empty states an action, and remove Today's repeated chapter. | One coherent journey before touching every screen. |
| 5 ✅ | **Age bands** (gap 10). Done 5 Nov 2026: 1–2 biggest controls in quizzes and lessons, less text, prominent read-aloud; 3–5 a step down with summaries; 6–8 Explore and labs emphasised; 9–10 and 11–12 denser with an exam-preparation row on Today (11–12 navy headings). No routes, ids or saved data changed. across that slice. | Needs the token merge first. |
| 6 ✅ | Done 5 Nov 2026: a right answer marked "Not sure" counts as helped, not independent; weak prerequisites (real wrong answers only) show as "Build this first" on the chapter hub and as a practice item in Today's plan; a plain-language summary (practised, went well, to review, next) after games, quizzes and lessons. Planned as: Connect the evidence: confidence in mastery, prerequisites in the plan, plain-language results (gaps 4–5). | Uses steps 2–3. |
| 7 | Pilot with real children (owner) and teacher review, then expand to more chapters. | Only people can judge learning. |

Smaller items 12–14 can go in with any step.

## Owner decisions needed

- **Pilot chapters:** which classes and subjects matter most for launch (suggested: Class 3–8 Maths and Class 6–8 Science)?
- **Lesson language:** hide it, or build it?
- **Parent gate:** a sum question or a PIN?
- **GitHub repository description:** OK to update it?
