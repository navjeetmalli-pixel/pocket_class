// Game: Spell the word (English, Classes 1 to 5). A picture comes up; the student puts the letter tiles in the boxes to spell its
// word. Tap the letters or drag them, then Check. Content: data/games/words.js, { word, emoji, cls }. Six words a round,
// of the chapter's class or the one before.

(() => {
  const WORDS = 6;

  Games.register("words", {
    title: "Spell the word",
    blurb: "Put the letters in order",
    how: "Look at the picture and put the letters in the right order to spell its word. Tap the letters, or drag them into the boxes. Then tap Check.",
    icon: "order",
    hud: { timer: "up" },
    load: LangGames.load,
    ready: LangGames.ready,

    available: (c, subj, ch) => LangGames.applies("words", c, subj, ch),

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const i = LangGames.info(c, subj, ch);
      const cls = LangGames.classFor("words", i);
      const list = Games.shuffled(LangGames.pool.words(cls), R).slice(0, WORDS);
      const puzzles = list.map((w) => {
        const letters = [...w.word];
        let bank;
        let tries = 0;
        do bank = Games.shuffled(letters, R);
        while (tries++ < 20 && bank.join("") === w.word);
        return { ...w, letters, bank };
      });
      return { puzzles };
    },

    mount(el, data, api) {
      const puzzles = data.puzzles.map((w) => ({
        lang: "en",
        head: `<div class="lt-pic"><span class="lt-emoji big" aria-hidden="true">${w.emoji}</span>${LangGames.speaker(w.word)}</div>
          <div class="small muted" style="margin-top:4px">${t("Spell the word for the picture.")} ${t("{n} letters", { n: w.letters.length })}</div>`,
        bank: w.bank,
        target: w.letters,
        join: (arr) => arr.join(""),
        answer: w.word,
        missPrompt: `${w.emoji} ${t("Spell the word for the picture.")}`,
        done: `<div><strong lang="en" style="font-size:22px">${esc(w.word)}</strong> ${LangGames.speaker(w.word)}</div>`,
        intro: t("{n} letters", { n: w.letters.length }),
      }));
      LangGames.builder(el, api, { puzzles, preview: true, help: t("Look at the picture and put the letters in the right order to spell its word. Tap the letters, or drag them into the boxes. Then tap Check.") });
    },
  });
})();
