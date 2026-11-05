// Game: Sentence builder (English, Hindi and Punjabi, Classes 2 to 8). The words of a sentence are mixed up; the student puts them
// in the boxes in the right order (tap or drag), then Check. Five sentences a round, from data/games/sentences.js for the
// chapter's class (and the two before it). Only the sentence itself, or an order listed as `alt` there, is accepted.

(() => {
  const SENTENCES = 5;
  // Compare words without their capital letter or the full stop, comma, question mark or danda joined to them.
  const norm = (w) => w.toLowerCase().replace(/^[^\p{L}\p{N}\p{M}]+|[^\p{L}\p{N}\p{M}]+$/gu, "");

  Games.register("sentences", {
    title: "Sentence builder",
    blurb: "Put the words in order",
    how: "Put the words in the right order to make a correct sentence. Tap the words, or drag them into the boxes. Then tap Check.",
    icon: "order",
    hud: { timer: "up" },
    load: LangGames.load,
    ready: LangGames.ready,

    available: (c, subj, ch) => LangGames.applies("sentences", c, subj, ch),

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const i = LangGames.info(c, subj, ch);
      const cls = LangGames.classFor("sentences", i);
      const list = Games.shuffled(LangGames.pool.sentences(i.lang, cls), R).slice(0, SENTENCES);
      const puzzles = list.map((x) => {
        const words = x.s.split(" ");
        const accepted = [words, ...(x.alt || []).map((a) => a.split(" "))].map((a) => a.map(norm).join(" "));
        let bank;
        let tries = 0;
        do bank = Games.shuffled(words, R);
        while (tries++ < 30 && accepted.includes(bank.map(norm).join(" ")));
        return { s: x.s, words, alts: (x.alt || []).map((a) => a.split(" ")), bank };
      });
      return { lang: i.lang, puzzles };
    },

    mount(el, data, api) {
      const { lang } = data;
      const puzzles = data.puzzles.map((p) => ({
        lang,
        head: `<div class="lt-prompt">${t("Put the words in order to make a sentence.")}</div>`,
        bank: p.bank,
        target: p.words,
        alts: p.alts,
        eq: (a, b) => norm(a) === norm(b),
        canon: (arr) => arr.map(norm).join("\u0001"),
        join: (arr) => arr.join(" "),
        answer: p.s,
        missPrompt: `${t("Put the words in order to make a sentence.")} ${p.bank.join(" · ")}`,
        done: `<div lang="${lang}" style="font-size:18px;font-weight:650">${esc(p.s)} ${LangGames.speaker(p.s)}</div>`,
        intro: t("Put the words in order to make a sentence."),
      }));
      LangGames.builder(el, api, { answered: (p, ok) => api.answered({ q: p.answer, explain: "" }, ok), puzzles, wide: true, preview: false, help: t("Put the words in the right order to make a correct sentence. Tap the words, or drag them into the boxes. Then tap Check.") });
    },
  });
})();
