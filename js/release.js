// Release lock: hides Hindi and Punjabi (as subjects and as app languages) until a native speaker has reviewed them.
// Nothing is deleted. The content, the translations and every student's saved progress stay as they are; the app just
// does not offer them while the lock applies, and saved Hindi / Punjabi settings are kept (shown as English) so that
// unlocking later restores them.
//
//   Now:                    UNLOCKED everywhere (the owner lifted the lock for the store apps, November 2026). The lock
//                           still applies with window.POCKET_LOCK = true or ?lock=1 (tests and store screenshots use it).
//   Lock the store apps again: applies: () => Native.is || window.POCKET_LOCK === true || …
//   Lock everything:        applies: () => true.
// See "Release lock" in README.md and RELEASE_CHECKLIST.md.
const Release = {
  lockedSubjects: ["hindi", "hindipb", "punjabi"],
  lockedLangs: ["pa", "hi"],
  applies: () => window.POCKET_LOCK === true || /[?&]lock=1\b/.test(location.search),
  // A subject id (also a Practice-by-topic pseudo subject such as "path-punjabi") that is hidden right now.
  subjectLocked(id) {
    id = String(id == null ? "" : id);
    if (id.startsWith("path-")) id = id.slice(5);
    return this.applies() && this.lockedSubjects.includes(id);
  },
  langLocked(code) {
    return this.applies() && this.lockedLangs.includes(code);
  },
  // The Hindi / Punjabi name shown under a subject's English name; empty while the lock applies.
  nativeName(s) {
    return this.applies() ? "" : (s && s.native) || "";
  },
  // Letters of the Hindi / Punjabi games ("hi", "pa") are locked with their language; English ones stay.
  gameLangLocked(code) {
    return this.langLocked(code);
  },
};
