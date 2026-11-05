// Game: Letters and pictures (Level 0 to Class 2; Gurmukhi, Devanagari and English). Eight questions. Either a letter comes up and
// the student picks, from four, the picture-word that starts with it, or a picture-word comes up and the student picks its first
// letter. A wrong pick is marked and the student tries again (fewer points). The word can be read aloud when the device has a voice.
// Content: data/games/letters.js (read through LangGames). The game never offers a conjunct and its first letter together (त and त्र).

(() => {
  const QUESTIONS = 8;

  const show = (lang, x) => (lang === "en" ? `${x.letter}${x.letter.toLowerCase()}` : x.letter);

  Games.register("letters", {
    title: "Letters and pictures",
    blurb: "Match each letter to its picture-word",
    how: "Match letters with pictures. Sometimes you see a letter and pick the picture-word that starts with it. Sometimes you see a picture-word and pick the letter it starts with.",
    icon: "label",
    hud: { timer: "up" },
    load: LangGames.load,
    ready: LangGames.ready,

    available: (c, subj, ch) => LangGames.applies("letters", c, subj, ch),

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const i = LangGames.info(c, subj, ch);
      const all = LangGames.get("letters")[i.lang] || [];
      const clash = (a, b) => a === b || (a.conj && a.conj === b.letter) || (b.conj && b.conj === a.letter);
      const picked = Games.shuffled(all, R).slice(0, QUESTIONS);
      const modes = Games.shuffled(picked.map((_, k) => (k % 2 ? "letter" : "picture")), R);
      const questions = picked.map((right, k) => {
        const others = Games.shuffled(all.filter((x) => !clash(x, right)), R);
        const chosen = [];
        for (const x of others) if (chosen.length < 3 && !chosen.some((y) => clash(x, y))) chosen.push(x);
        return { mode: modes[k], right, options: Games.shuffled([right, ...chosen], R) };
      });
      return { lang: i.lang, questions };
    },

    mount(el, data, api) {
      const { lang, questions } = data;
      const total = questions.length;
      let n = 0;
      let tries = 0;
      let firstTry = 0;
      let wrong = 0;
      let answered = false;

      const wordHtml = (x) => `<span class="lt-emoji" aria-hidden="true">${x.emoji}</span><span class="lt-word" lang="${lang}">${esc(x.word)}</span>`;

      function ask() {
        const q = questions[n];
        answered = false;
        tries = 0;
        const letterQ = q.mode === "picture"; // a letter is shown; pick a picture-word
        const prompt = letterQ ? t("Which picture-word starts with this letter?") : t("Which letter does this word start with?");
        const stem = letterQ
          ? `<div class="lt-big" lang="${lang}" role="img" aria-label="${t("Letter {letter}", { letter: show(lang, q.right) })}">${esc(show(lang, q.right))}</div>`
          : `<div class="lt-pic"><span class="lt-emoji big" aria-hidden="true">${q.right.emoji}</span><span class="lt-word big" lang="${lang}">${esc(q.right.word)}</span>${LangGames.speaker(q.right.word)}</div>`;
        const opts = q.options
          .map((o, k) =>
            letterQ
              ? `<button type="button" class="lt-opt" data-o="${k}" aria-label="${esc(o.word)}">${wordHtml(o)}</button>`
              : `<button type="button" class="lt-opt letter" data-o="${k}" lang="${lang}">${esc(show(lang, o))}</button>`
          )
          .join("");
        el.innerHTML = `
          <p class="small muted game-help">${t("Tap the right answer. Hear the word with the speaker button.")}</p>
          <div class="card lt-q"><div class="small muted">${t("{a} of {b}", { a: n + 1, b: total })}</div><div class="lt-prompt">${prompt}</div>${stem}</div>
          <div class="lt-opts" role="group" aria-label="${prompt}">${opts}</div>
          <div data-fb></div>
          <div class="quiz-nav" data-nav></div>`;
        api.say(`${prompt} ${letterQ ? show(lang, q.right) : q.right.word}`);
      }

      function pick(k) {
        if (answered || !api.live()) return;
        const q = questions[n];
        const o = q.options[k];
        const btn = el.querySelector(`[data-o="${k}"]`);
        const fb = el.querySelector("[data-fb]");
        const letterQ = q.mode === "picture";
        api.answered({ q: q.right.word, explain: show(lang, q.right) }, o === q.right, k);
        if (o === q.right) {
          answered = true;
          btn.classList.add("ok");
          el.querySelectorAll(".lt-opt").forEach((b) => (b.disabled = true));
          if (tries === 0) firstTry++;
          api.score(tries === 0 ? 100 : 40);
          fb.innerHTML = `<div class="feedback good" role="status"><div class="h">${t("Right! 🎉")}</div>${t("{word} starts with {letter}.", { word: `<strong lang="${lang}">${esc(q.right.emoji + " " + q.right.word)}</strong>`, letter: `<strong lang="${lang}">${esc(show(lang, q.right))}</strong>` })} ${letterQ ? LangGames.speaker(q.right.word) : ""}</div>`;
          const last = n === total - 1;
          el.querySelector("[data-nav]").innerHTML = `<button class="btn primary" data-act="${last ? "done" : "next"}">${last ? t("See my score") : t("Next question")} ${icon("arrow")}</button>`;
          el.querySelector("[data-nav] .btn").focus({ preventScroll: true });
          api.say(t("Right!"));
          fb.scrollIntoView({ block: "nearest" });
          return;
        }
        tries++;
        wrong++;
        btn.classList.add("bad");
        btn.disabled = true;
        api.score(-10);
        if (tries === 1)
          api.miss({
            prompt: letterQ ? `${show(lang, q.right)} · ${t("Which picture-word starts with this letter?")}` : `${q.right.emoji} ${q.right.word} · ${t("Which letter does this word start with?")}`,
            yours: letterQ ? `${o.emoji} ${o.word}` : show(lang, o),
            right: letterQ ? `${q.right.emoji} ${q.right.word}` : show(lang, q.right),
          });
        fb.innerHTML = `<div class="feedback bad" role="status"><div class="h">${t("Not that one. Try another.")}</div></div>`;
        api.say(t("Not that one. Try another."));
      }

      el.addEventListener("click", (e) => {
        const o = e.target.closest(".lt-opt");
        if (o) return pick(Number(o.dataset.o));
        const a = e.target.closest("[data-act]");
        if (!a) return;
        if (a.dataset.act === "next") {
          n++;
          ask();
          window.scrollTo({ top: 0 });
        } else if (a.dataset.act === "done") {
          const ratio = firstTry / total;
          api.finish({ stars: ratio >= 0.85 ? 3 : ratio >= 0.6 ? 2 : 1, lines: [wrong ? t("{n} wrong {n:answer|answers}", { n: wrong }) : t("No wrong answers")] });
        }
      });
      ask();
    },
  });
})();
