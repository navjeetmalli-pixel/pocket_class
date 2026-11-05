# Pocket Class India

An offline study app for Classes 1–12. It covers CBSE/NCERT and PSEB (Punjab), plus an international learn-by-topic option.

It's one vanilla-JS web app (no framework, no build step). Capacitor 8 wraps it as iOS and Android apps.

- The product has no AI features. Content was written with AI help, which is fine, but a teacher must review it before sale.
- It has no backend and no accounts, and it works fully offline. It's sold as a one-time purchase, not a subscription.
- Live site: https://navjeetmalli-pixel.github.io/pocket_class/. Repo: navjeetmalli-pixel/pocket_class (GitHub Pages builds from `main`).

## Working rules (from the owner)

- **Ask before every `git push`.** The owner answers "Yes, push it". Commit locally freely.
- Subagents: use cheaper models (sonnet/haiku), **at most 2 at a time**.
- Subagents must never run `git stash`, `git reset`, `git checkout -- .`, `rm -r` on project folders, or `pkill`. Tell each one which files the other is editing.
- Textbook PDFs: read them only in the built-in browser. Never save book text to disk, and write summaries in our own words.
- The owner (with teachers) does content and language review. Don't mark content as reviewed.
- Don't recreate other products (e.g. Mathletics). Borrow ideas only, in our own design.

## Commands

```bash
npm test                    # Playwright, all specs (tests/playwright.config.js, own server on port 8799)
npx playwright test -c tests paths certificates   # just some specs
node scripts/validate.js    # data, generators, labs, India map, objectives, Punjabi/Hindi translations
npm run sync                # build www/ and copy into ios/ and android/ (run after any web change before a native build)
npm run build:index         # rebuild data/classN/index.js after adding chapters
```

- Dev server: the "vidya" entry in `.claude/launch.json` (`scripts/serve.js`, port 8765). Clear the service worker and caches in the page if it serves stale files.
- Android builds need Android Studio's Java: `export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"`.
  - Release: `cd android && ./gradlew bundleRelease`. It needs the git-ignored `android/keystore.properties`; see STORE_GUIDE.md.
- iOS: team `K4Q5CMZX9B`.
  - Install on a device such as Arnav's iPad (UDID from `xcrun devicectl list devices`; kept out of this public repo): `npm run sync`, then
    `xcodebuild -project ios/App/App.xcodeproj -scheme App -configuration Debug -destination 'id=<UDID>' -derivedDataPath <tmp> -allowProvisioningUpdates DEVELOPMENT_TEAM=K4Q5CMZX9B CODE_SIGN_STYLE=Automatic build`
  - Then `xcrun devicectl device install app --device <UDID> <App.app>`. Retry once if it fails with "Connection interrupted".

## Every change

- Bump `CACHE` in `sw.js` (`pocket-class-vN`). New JS files go in `index.html` **and** the `FILES` list in `sw.js`.
- Every user-facing string goes through `t("…")`. Add Punjabi and Hindi translations to both dictionaries in `js/i18n.js`; `validate.js` checks them.
- Add or extend a spec in `tests/`, and run `npm test` and `node scripts/validate.js` before committing.
- Keep the stored data backward compatible. Old saves must still load.

## Map of the code

- `js/store.js`: everything saved, per student.
  - It lives in localStorage `"vidya:v1"` (`v: 2`, `students[]`, `current`).
  - Internal "vidya" names (storage key, backup app id, app ID) are kept on purpose for compatibility.
- `data/registry.js` (`StudyData`): loads each subject from `data/classN/index.js`, and holds `addPath`, `addObjectives`, `addTimelines`, `practiceCatalog`.
- Content: `data/classN/*`, `data/paths/{maths,english,science,punjabi}.js` (Practice by topic ladders), `data/games/*`. See CONTENT_GUIDE.md.
- Views: `js/views/*.js`.
  - `shell.js` has the five tabs: Today, Learn, Play, Explore, Progress.
  - Other views: `onboarding.js`, `chapter.js` (the chapter hub), `paths.js` (ladders, Find my level / Check my progress, certificates), `progress.js`, `parent.js`.
- Learning engine:
  - `js/gen.js` (question generators, `Gen`)
  - `js/objectives.js`, `js/mastery.js`, `js/learn.js` (learning record)
  - `js/loop.js` (adaptation rules), `js/plan.js` (Today's plan)
- Games: `js/games/engine.js` (`Games.register`, best scores, results) plus one file per game. The race has a ghost of the best run.
- Labs: `js/labs/*.js` (`Labs.register`, `Labs.forChapter`).
- `js/release.js`: **store release lock**.
  - It hides Hindi and Punjabi subjects and app languages in the native apps (`Native.is`, or `?lock=1` / `window.POCKET_LOCK` on the web).
  - To unlock, empty `lockedSubjects` and `lockedLangs`. Then restore the full counts in STORE_LISTING.md.
- `js/games/trace.js`: letter tracing is hidden (`STROKES_REVIEWED = false`) until a teacher checks `docs/strokes.html`. `window.POCKET_PREVIEW = true` shows it.
- `js/util.js` `printPage()`: use this to print; `window.print()` does nothing in the app web views.

## Release status

- See RELEASE_CHECKLIST.md, STORE_GUIDE.md and STORE_LISTING.md.
- Still open:
  - Decide whether to rename the app ID (`io.github.navjeetmallipixel.vidya`). This must happen before the first store upload.
  - Teacher and language review.
  - Store accounts and screenshots.
  - The 14-day Play closed test.
