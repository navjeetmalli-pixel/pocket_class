// Game: Grammar sort (English, Hindi and Punjabi, Classes 2 to 10). Ten words and two or three labelled groups: noun / verb /
// adjective, masculine / feminine (Hindi and Punjabi: ਲਿੰਗ / लिंग), or singular / plural (ਵਚਨ / वचन). The student drags a word into
// its group, or taps the word and then the group. A wrong group costs points and the word can be tried again. Each round picks
// one way of sorting that suits the class. Content: data/games/grammar.js; every word there has exactly one class.

(() => {
  const ITEMS = 10;
  // The group names: English term (translated by t()) and, for Hindi and Punjabi, the term the textbooks use.
  const TERMS = {
    noun: { en: "Noun", hi: "संज्ञा", pa: "ਨਾਂਵ" },
    verb: { en: "Verb", hi: "क्रिया", pa: "ਕਿਰਿਆ" },
    adjective: { en: "Adjective", hi: "विशेषण", pa: "ਵਿਸ਼ੇਸ਼ਣ" },
    masculine: { en: "Masculine", hi: "पुल्लिंग", pa: "ਪੁਲਿੰਗ" },
    feminine: { en: "Feminine", hi: "स्त्रीलिंग", pa: "ਇਸਤਰੀ ਲਿੰਗ" },
    singular: { en: "Singular", hi: "एकवचन", pa: "ਇੱਕ ਵਚਨ" },
    plural: { en: "Plural", hi: "बहुवचन", pa: "ਬਹੁ ਵਚਨ" },
  };
  const label = (lang, key) => {
    const eng = t(TERMS[key].en);
    return lang === "en" || TERMS[key][lang] === eng ? eng : `${TERMS[key][lang]} · ${eng}`;
  };
  const help = (kind, groups) =>
    kind === "gender" ? t("Sort the nouns by gender.") : kind === "number" ? t("Sort the words by number.") : groups.length === 3 ? t("Sort the words into nouns, verbs and adjectives.") : t("Sort the words into nouns and verbs.");

  Games.register("grammar", {
    title: "Grammar sort",
    blurb: "Sort words by their kind",
    how: "Sort each word into its group, such as noun, verb or adjective, or masculine and feminine. Drag it into its group, or tap the word and then the group. A wrong group costs points.",
    icon: "sort",
    hud: { timer: "up" },
    load: LangGames.load,
    ready: LangGames.ready,

    available: (c, subj, ch) => LangGames.applies("grammar", c, subj, ch),

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const i = LangGames.info(c, subj, ch);
      const cls = LangGames.classFor("grammar", i);
      const kinds = LangGames.pool.grammar(i.lang, cls);
      const kind = kinds[R.int(0, kinds.length - 1)];
      const per = kind.groups.length === 3 ? [4, 3, 3] : [5, 5];
      const order = Games.shuffled(kind.groups, R);
      const items = order.flatMap((g, gi) => Games.shuffled(g.words, R).slice(0, per[gi]).map((w) => ({ word: w, group: gi })));
      return { lang: i.lang, kind: kind.kind, groups: order.map((g) => g.key), items: Games.shuffled(items, R).slice(0, ITEMS) };
    },

    mount(el, data, api) {
      const { lang, items } = data;
      const names = data.groups.map((k) => label(lang, k));
      const total = items.length;
      el.innerHTML = `
        <p class="small muted game-help">${help(data.kind, data.groups)} ${t("Drag an item into its group, or tap an item and then a group.")}</p>
        <div class="sort-boxes" role="group" aria-label="${t("Groups")}">${names
          .map((g, i) => `<button class="sort-box" data-box="${i}" aria-pressed="false" aria-label="${esc(g)}"><span class="sort-title">${esc(g)}</span><span class="sort-in"></span></button>`)
          .join("")}</div>
        <div data-fb></div>
        <div class="sort-bank" role="group" aria-label="${t("Items")}">${items.map((it, i) => `<button class="sort-chip" data-chip="${i}" aria-pressed="false" lang="${lang}">${esc(it.word)}</button>`).join("")}</div>
        <p class="small muted center" data-count aria-hidden="true"></p>
        <div data-end></div>`;
      const bank = el.querySelector(".sort-bank");
      const boxes = [...el.querySelectorAll(".sort-box")];
      const fb = el.querySelector("[data-fb]");
      const count = el.querySelector("[data-count]");
      const chip = (i) => bank.querySelector(`[data-chip="${i}"]`);
      let done = 0;
      let wrong = 0;
      let busy = false;
      let selChip = null;
      let selBox = null;
      const counts = names.map(() => 0);
      const showCount = () => (count.textContent = t("{a} of {b} sorted", { a: done, b: total }));
      showCount();

      function mark() {
        bank.querySelectorAll(".sort-chip").forEach((b) => {
          const on = Number(b.dataset.chip) === selChip;
          b.classList.toggle("sel", on);
          b.setAttribute("aria-pressed", on);
        });
        boxes.forEach((b, i) => {
          b.classList.toggle("sel", i === selBox);
          b.classList.toggle("ready", selChip !== null);
          b.setAttribute("aria-pressed", i === selBox);
        });
      }

      function place(c, g) {
        if (!api.live() || busy || items[c].placed) return;
        selChip = selBox = null;
        mark();
        const it = items[c];
        const box = boxes[g];
        api.answered({ q: it.word, explain: names[it.group] }, it.group === g);
        if (it.group === g) {
          it.placed = true;
          done++;
          counts[g]++;
          chip(c).hidden = true;
          box.querySelector(".sort-in").insertAdjacentHTML("beforeend", `<span class="sort-got" lang="${lang}">${esc(it.word)}</span>`);
          box.setAttribute("aria-label", t("{name}, {n} placed", { name: names[g], n: counts[g] }));
          api.score(100);
          showCount();
          fb.innerHTML = `<div class="feedback good" role="status"><div class="h">${t("“{item}” belongs in “{group}”.", { item: esc(it.word), group: esc(names[g]) })}</div></div>`;
          api.say(done < total ? t("Correct. {a} of {b} sorted.", { a: done, b: total }) : t("Correct. Everything is sorted."));
          if (done === total) complete();
          return;
        }
        wrong++;
        api.score(-20);
        (it.tried = it.tried || new Set()).add(names[g]);
        fb.innerHTML = `<div class="feedback bad" role="status"><div class="h">${t("“{item}” doesn't go in “{group}”. Try another group.", { item: esc(it.word), group: esc(names[g]) })}</div></div>`;
        api.say(t("Not in that group. Try another."));
        busy = true;
        const b = chip(c);
        [box, b].forEach((x) => x.classList.add("bad"));
        setTimeout(() => {
          [box, b].forEach((x) => x.classList.remove("bad"));
          busy = false;
        }, 600);
      }

      function complete() {
        bank.hidden = true;
        el.querySelector(".game-help").hidden = true;
        fb.innerHTML = "";
        el.querySelector("[data-end]").innerHTML = `<div class="feedback good"><div class="h">${t("Everything is sorted! 🎉")}</div></div>
          <div class="quiz-nav"><button class="btn primary" data-act="done">${t("See my score")} ${icon("arrow")}</button></div>`;
        el.querySelector("[data-act=done]").focus({ preventScroll: true });
      }

      function finish() {
        for (const it of items) if (it.tried) api.miss({ prompt: `${it.word} · ${t("Which group?")}`, yours: [...it.tried].join(", "), right: names[it.group] });
        api.finish({ stars: wrong === 0 ? 3 : wrong <= Math.ceil(total / 3) ? 2 : 1, lines: [wrong ? t("{n} wrong {n:try|tries}", { n: wrong }) : t("No wrong tries")] });
      }

      const tapChip = (b) => {
        const c = Number(b.dataset.chip);
        if (selBox !== null) return place(c, selBox);
        selChip = selChip === c ? null : c;
        mark();
      };
      const tapBox = (g) => {
        if (selChip !== null) return place(selChip, g);
        selBox = selBox === g ? null : g;
        mark();
      };
      const boxAt = (els) => {
        const b = els.map((x) => x.closest && x.closest(".sort-box")).find(Boolean);
        return b ? Number(b.dataset.box) : null;
      };
      Games.draggable(bank, ".sort-chip", {
        onTap: tapChip,
        onDrop(b, els) {
          const g = boxAt(els);
          if (g !== null) place(Number(b.dataset.chip), g);
        },
        over(els) {
          const g = boxAt(els);
          boxes.forEach((x, i) => x.classList.toggle("over", i === g));
        },
      });
      el.addEventListener("click", (e) => {
        const b = e.target.closest(".sort-box");
        if (b) tapBox(Number(b.dataset.box));
        else if (e.target.closest("[data-act=done]")) finish();
      });
      api.say(t("{n} items to sort into {g} groups.", { n: total, g: names.length }));
    },
  });
})();
