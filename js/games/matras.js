// Game: Matra builder (Punjabi and Hindi, Classes 1 to 3). A picture comes up, with its English name; the student builds its word
// from tiles: the consonants and vowels, and the matras (ਲਗਾਂ-ਮਾਤਰਾਂ / मात्राएँ) with a few extra ones that do not belong. A matra tile
// is shown on a dotted circle (◌ਾ) so it stays whole when it is on its own. Tap tiles or drag them into the boxes, then Check.
// Content: data/games/matras.js, { word, parts, emoji, en, cls }. Six words a round.

(() => {
  const WORDS = 6;
  const MARKS = {
    pa: ["ਾ", "ਿ", "ੀ", "ੁ", "ੂ", "ੇ", "ੈ", "ੋ", "ੌ", "ਂ", "ੰ", "ੱ"],
    hi: ["ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ", "ं", "ँ"],
  };
  const BASIC = { pa: MARKS.pa.slice(0, 5), hi: MARKS.hi.slice(0, 5) };
  const NAMES = { pa: "punjabi", hi: "hindi" };

  Games.register("matras", {
    title: "Matra builder",
    blurb: "Build a word with its vowel signs",
    how: "Build the word shown by the picture. Tap the letters and vowel signs in order, or drag them into the boxes. Then tap Check.",
    icon: "order",
    hud: { timer: "up" },
    load: LangGames.load,
    ready: LangGames.ready,

    available: (c, subj, ch) => LangGames.applies("matras", c, subj, ch),

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const i = LangGames.info(c, subj, ch);
      const cls = LangGames.classFor("matras", i);
      const list = Games.shuffled(LangGames.pool.matras(i.lang, cls), R).slice(0, WORDS);
      const puzzles = list.map((w) => {
        const pool = (w.cls === 1 ? BASIC : MARKS)[i.lang].filter((m) => !w.parts.includes(m));
        const extra = Games.shuffled(pool, R).slice(0, 2);
        return { ...w, extra, bank: Games.shuffled([...w.parts, ...extra], R) };
      });
      return { lang: i.lang, puzzles };
    },

    mount(el, data, api) {
      const { lang } = data;
      const puzzles = data.puzzles.map((w) => ({
        lang,
        head: `<div class="lt-pic"><span class="lt-emoji big" aria-hidden="true">${w.emoji}</span><span class="lt-word">${esc(w.en)}</span>${LangGames.speaker(w.word)}</div>
          <div class="small muted" style="margin-top:4px">${t("Build this word")}</div>`,
        bank: w.bank,
        target: w.parts,
        canon: LangGames.canonMarks,
        eq: (a, b) => a === b,
        join: (arr) => arr.join(""),
        tile: LangGames.tileText,
        label: LangGames.tileText,
        answer: w.word,
        missPrompt: `${w.emoji} ${w.en}`,
        done: `<div><strong lang="${lang}" style="font-size:22px">${esc(w.word)}</strong> ${LangGames.speaker(w.word)}</div>`,
        intro: t("Build this word"),
      }));
      LangGames.builder(el, api, { answered: (p, ok) => api.answered({ q: p.answer, explain: "" }, ok), puzzles, preview: true, help: `${t("Build the word shown by the picture. Tap the letters and vowel signs in order, or drag them into the boxes. Then tap Check.")} ${t("A vowel sign is shown on a dotted circle (◌), so you can see it on its own.")}` });
    },
  });
})();
