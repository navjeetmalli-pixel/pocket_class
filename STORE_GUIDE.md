# Publishing Vidya to the App Store and Google Play

The phone apps are the same Vidya web app wrapped with [Capacitor](https://capacitorjs.com). Every class, note and
practice bank is packed inside the app, so it works fully offline from the first launch. Printing uses the phone's
own print dialog, and "Back up progress" opens the share sheet.

## One-time setup on this Mac

- Node 20+ and `npm install` in this folder.
- Xcode (for iOS) and Android Studio (for Android). Android builds need Android Studio's Java 21:
  `export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"`
- App ID (both stores): `io.github.navjeetmallipixel.vidya`. You can change it in `capacitor.config.json` before the
  first upload; after that it is fixed forever.

## After any change to the content or code

```bash
npm run sync
```

This copies the web files into `www/` and then into both native projects. Bump `version` (Android:
`versionCode` and `versionName` in `android/app/build.gradle`; iOS: Version and Build in Xcode) before each upload.

To change the icon or splash screen, edit the PNGs in `assets/` and run `npx capacitor-assets generate`, then
delete the `icons/icon-*.webp` files it also creates (the website doesn't use them).

## Google Play ($25 once)

1. Create a developer account at play.google.com/console (identity check takes a few days).
2. Open the project: `npx cap open android`. In Android Studio: Build → Generate Signed App Bundle → Android App
   Bundle → create a new upload key (keep the `.jks` file and its passwords safe and backed up; losing them
   means asking Google to reset the key).
3. In Play Console: create the app, fill in the store listing (name, short and full description, at least 2 phone
   screenshots, 512×512 icon from `assets/icon-only.png`, 1024×500 feature graphic), content rating questionnaire,
   target audience (children: the app is for students, so the Families policy applies), and the Data safety form
   (Vidya collects no data; progress stays on the device).
4. New personal developer accounts must run a closed test with at least 12 testers for 14 days before going to
   production. Upload the `.aab` to the closed-testing track first.
5. Pricing: a one-time price is set under "Monetise → App pricing" once a payments profile exists.

## Apple App Store ($99 per year)

1. Join the Apple Developer Program at developer.apple.com (as an individual or an organisation; organisations
   need a D-U-N-S number).
2. Open the project: `npx cap open ios`. In Xcode select the App target → Signing & Capabilities → choose your Team.
   Xcode creates the certificates and profile.
3. In App Store Connect create the app with the same bundle ID, then fill in the listing: screenshots for 6.9" iPhone
   (and 13" iPad if you keep iPad support), description, keywords, support URL, privacy policy URL, age rating, and
   the App Privacy form ("Data not collected").
4. In Xcode: Product → Archive → Distribute App → App Store Connect. Then submit for review in App Store Connect.
5. Apple can reject apps that are "just a website". Vidya is packaged to work fully offline with native printing
   and sharing, which helps; mention offline use in the review notes.
6. Apps for children: if you choose the Kids category, Apple's extra rules apply (no external links without a
   parental gate). The Education category without the Kids category is simpler.

## Before charging money

- The content was written with AI help and still needs a teacher's review (see each subject's "reviewed" field).
- Another app named "Vidya AI Tutor" exists; check the name is available in both stores before you build a listing.
- You need a privacy policy page (a simple GitHub Pages page saying no data is collected is enough).
