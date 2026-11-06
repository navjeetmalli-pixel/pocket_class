# Release checklist

Do these in order. Stop at the first failure and fix it before going on.

## 1. Check the content and the web app

- [ ] `node scripts/validate.js`: content files are valid and the class indexes are up to date. It also runs `scripts/check-gen.js` (every question generator over 500 seeds: 3 distinct wrong answers, no NaN, steps present; every chapter named in `Gen.MAP` exists).
- [ ] `node scripts/build-index.js --check`: no `data/class*/index.js` is stale. If it reports any, run `node scripts/build-index.js` and look at the diff.
- [ ] `npm test`: the whole Playwright suite passes (phone and desktop). Run it a second time if anything failed once; a test that passes only sometimes is a bug to chase, not to ignore. First time on a machine: `npx playwright install chromium`.

- [ ] `node scripts/count-content.js`: run before updating store text. It counts chapters, MCQs, written questions, solved examples, flashcards, diagrams, generators, games, topics and timeline events from the data files. Make the numbers in `README.md` match, rounded down ("over 48,000"). While Hindi and Punjabi are locked, `STORE_LISTING.md` uses `node scripts/count-content.js --store`.

## 2. Make installed copies update

- [ ] Bump `CACHE` in `sw.js` (`pocket-class-vNN` to `pocket-class-vNN+1`) whenever any app file, script, style or data file changed. Without it, installed web apps keep the old files. (The update test reads the name from `sw.js`, so nothing else to edit.)
- [ ] Add any new app file (a new `js/*.js`) to the `FILES` list in `sw.js` and to `index.html`.

## 3. Build the store apps (only for a store release)

- [ ] **Check the Release locks before a store build.** Open `js/release.js`: `lockedSubjects` and `lockedLangs` say what the store apps hide (Hindi and Punjabi, until a native speaker has reviewed them), and `applies` says where (default: store apps only). Decide on purpose: still locked, or emptied to unlock. Then make `STORE_LISTING.md` say the same thing (no Hindi / Punjabi claims while locked), and run `npx playwright test -c tests release-lock`.

- [ ] `npm run sync`: rebuilds the class indexes, copies the web app into `www/` and into the Android and iOS projects. `www/` must not contain `tests/`, `scripts/` or `node_modules/`.
- [ ] Bump the version numbers:
  - Android, `android/app/build.gradle`: `versionCode` (a whole number, +1 every upload) and `versionName` (e.g. `"1.1"`).
  - iOS, in Xcode (target App, General) or `ios/App/App.xcodeproj/project.pbxproj`: `MARKETING_VERSION` (e.g. `1.1`) and `CURRENT_PROJECT_VERSION` (the build number, +1 every upload) in both Debug and Release.
- [ ] Android: `export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"` then `cd android && ./gradlew assembleDebug`. It must build; install the APK on a device or emulator and open a chapter with no connection.
- [ ] iOS: build the `App` scheme for an iOS Simulator (Xcode, or `xcodebuild -project ios/App/App.xcodeproj -scheme App -destination 'generic/platform=iOS Simulator' build`). Launch it in the simulator and open a chapter with no connection.
- [ ] Release builds and uploads: see `STORE_GUIDE.md` (signed Android App Bundle, iOS archive). Update `STORE_LISTING.md` if the description or screenshots changed.

## 4. Before publishing the website

- [ ] Open the site in a private window, add it to the home screen, go offline and check Home and one subject still open.
- [ ] Reload an already installed copy: the "A new version is ready" bar appears, and Reload brings in the new version.
