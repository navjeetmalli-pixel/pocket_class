// Shared parts of the visual Maths games (numberline.js, fractions.js, balance.js, angles.js, graphs.js, race.js):
//   MathKit.scope(c, subj, ch)   what a chapter or Practice-by-topic level means for maths games, or null if it is not maths:
//                                { level, cls, id, topic, n } (for a level, cls is its level number: Level 5 = Class 5)
//   MathKit.run(el, api, opts)   a round-by-round game: question, board, check, feedback with the right answer, Next, stars
//   number / fraction helpers and the icons of the maths games.
// Everything that decides the maths (build, audit) is plain JavaScript with no document access, so
// scripts/check-games.js can run it over thousands of seeds in Node.

const MathKit = (() => {
  Object.assign(ICONS, {
    numline: '<path d="M3 15h18"/><path d="M5 12v6M9 13.5v3M13 13.5v3M17 12v6"/><circle cx="13" cy="7" r="2"/>',
    pie: '<circle cx="12" cy="12" r="9"/><path d="M12 12V3M12 12l6.4 6.4"/>',
    scale: '<path d="M12 3v17"/><path d="M8 20h8"/><path d="M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0z"/><path d="M19 7l-3 7a3 3 0 0 0 6 0z"/>',
    angle: '<path d="M4 20h16"/><path d="M4 20 16 6"/><path d="M11 20a7 7 0 0 0-2.5-5.3"/>',
    graph: '<path d="M4 3v17h17"/><path d="m7 16 4-5 3 3 5-8"/>',
    race: '<path d="M5 21V4"/><path d="M5 4h12l-2 4 2 4H5"/>',
  });

  const MATHS = ["maths", "mathspb"];
  const LEVEL_ID = /-(\d+)[a-z]?$/; // level ids end in their number: "fractions-5", "calculus-11a"

  function scope(c, subj, ch) {
    if (!subj || !ch) return null;
    if (ch.levelKey) {
      const m = LEVEL_ID.exec(ch.id || "");
      const parts = String(ch.levelKey).split("/"); // "maths/{topic}/{level}"
      return m && parts[0] === "maths" ? { level: true, cls: +m[1], id: ch.id, topic: parts[1], n: +m[1] } : null;
    }
    return MATHS.includes(subj.id) ? { level: false, cls: c, id: ch.id, topic: null, n: c } : null;
  }

  // ---------- numbers ----------
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
  // A number with a real minus sign and Indian digit grouping (1,00,000).
  function num(x, dp) {
    const r = dp === undefined ? Math.round(x * 1e6) / 1e6 : x;
    const s = Math.abs(r) >= 1000 ? Math.abs(r).toLocaleString("en-IN", { maximumFractionDigits: 6 }) : dp === undefined ? String(Math.abs(r)) : Math.abs(r).toFixed(dp);
    return (r < 0 && Number(s.replace(/,/g, "")) !== 0 ? "−" : "") + s;
  }
  // "3/8" in plain text (reduced only if `reduce`); whole numbers come out as "2".
  function frText(n, d, reduce) {
    if (reduce) {
      const g = gcd(n, d) || 1;
      n /= g;
      d /= g;
    }
    return d === 1 ? num(n) : `${n < 0 ? "−" : ""}${Math.abs(n)}/${d}`;
  }
  // A fraction stacked as numerator over denominator.
  const frHtml = (n, d) => (d === 1 ? `<b>${num(n)}</b>` : `<span class="mk-fr" role="img" aria-label="${n < 0 ? "−" : ""}${Math.abs(n)}/${d}">${n < 0 ? "−" : ""}<span aria-hidden="true"><i>${Math.abs(n)}</i><i>${d}</i></span></span>`);
  const p1 = (x) => Math.round(x * 10) / 10;

  // ---------- the round-by-round runner ----------
  // opts: { rounds: [...], prompt(round, i) -> html, draw(round, board, submit, i), stars?(avgCredit) }
  // submit({ ok, credit 0..1, pts, right (html), yours (html), explain (html), headline?, reveal?() }) ends the round: the
  // runner records it (opts.item(round) -> { q, explain, answer } for api.answered) and scores it, locks the board, shows the correct answer with the explanation, and a Next button.
  function run(el, api, o) {
    const rounds = o.rounds;
    const total = rounds.length;
    let i = 0;
    let sum = 0;
    let right = 0;
    let streak = 0;
    let busy = false;
    const res = [];

    const dots = () => rounds.map((_, k) => `<i class="${k < i ? (res[k] ? "ok" : "no") : k === i ? "cur" : ""}"></i>`).join("");

    function show() {
      const r = rounds[i];
      busy = false;
      el.innerHTML = `<div class="mk-top"><span class="small muted">${t("Question {a} of {b}", { a: i + 1, b: total })}</span><span class="mk-dots" aria-hidden="true">${dots()}</span></div>
        <h2 class="mk-q" data-mk="q">${o.prompt(r, i)}</h2>
        <div class="mk-board" data-mk="board"></div>
        <div data-mk="fb"></div>`;
      const board = el.querySelector("[data-mk=board]");
      o.draw(r, board, (x) => submit(r, board, x), i);
      const spoken = el.querySelector("[data-mk=q]").cloneNode(true);
      spoken.querySelectorAll(".mk-fr").forEach((f) => f.replaceWith(f.getAttribute("aria-label") || ""));
      api.say(spoken.textContent);
      const f = board.querySelector("[data-focus]");
      if (f && document.activeElement && (document.activeElement === document.body || el.contains(document.activeElement) || document.activeElement.closest("#app"))) f.focus({ preventScroll: true });
    }

    function submit(r, board, x) {
      if (busy || !api.live()) return;
      busy = true;
      if (x.reveal) x.reveal();
      board.setAttribute("inert", "");
      const ok = !!x.ok;
      const credit = Math.max(0, Math.min(1, x.credit === undefined ? (ok ? 1 : 0) : x.credit));
      const pts = x.pts === undefined ? (ok ? 100 : 0) : x.pts;
      res[i] = ok;
      sum += credit;
      let bonus = 0;
      if (ok) {
        right++;
        streak++;
        bonus = Math.min(streak - 1, 5) * 5;
      } else streak = 0;
      api.streak(streak);
      api.score(pts + (ok ? bonus : 0));
      if (o.item) api.answered(o.item(r, x), ok); // learning record: plain English concept words for the objective matcher
      if (!ok) api.miss({ prompt: x.missPrompt || o.prompt(r, i), yours: x.yours || "", right: x.right, explain: x.explain });
      const head = x.headline || (ok ? t("Correct! 🎉") : t("Not quite"));
      const plus = pts + (ok ? bonus : 0) > 0 ? ` +${pts + (ok ? bonus : 0)}` : "";
      const last = i === total - 1;
      el.querySelector("[data-mk=fb]").innerHTML = `<div class="feedback ${ok ? "good" : "bad"}"><div class="h">${head}${plus}</div>
          ${ok && !x.showRight ? "" : `<div>${t("Correct answer:")} <strong>${x.right}</strong></div>`}
          ${x.explain ? `<div class="mk-why">${x.explain}</div>` : ""}</div>
        <div class="quiz-nav"><button class="btn primary" data-mk="next">${last ? t("See my score") : t("Next question")} ${icon("arrow")}</button></div>`;
      api.say(`${plain(head.replace(/<[^>]+>/g, ""))}${ok ? "" : ". " + t("Correct answer:") + " " + String(x.right).replace(/<[^>]+>/g, "")}`);
      const nb = el.querySelector("[data-mk=next]");
      nb.focus({ preventScroll: true });
      nb.scrollIntoView({ block: "nearest" });
    }

    el.addEventListener("click", (e) => {
      if (!e.target.closest("[data-mk=next]") || !api.live()) return;
      i++;
      if (i < total) return show();
      const avg = sum / total;
      const stars = o.stars ? o.stars(avg, right, total) : avg >= 0.85 ? 3 : avg >= 0.5 ? 2 : 1;
      api.finish({ stars, lines: [t("{a} of {b} right", { a: right, b: total })] });
    });
    show();
  }

  // Numeric input + Check button row. Calls onSubmit(value) when a number is entered; returns the input.
  function numberInput(box, { label, unit, onSubmit }) {
    box.innerHTML = `<div class="mk-answer"><input class="mk-num" data-focus type="text" inputmode="numeric" autocomplete="off" aria-label="${esc(label)}" maxlength="6">${unit ? `<span class="mk-unit">${unit}</span>` : ""}
      <button class="btn primary" data-act="check">${t("Check")}</button></div>`;
    const inp = box.querySelector("input");
    const go = () => {
      const v = inp.value.replace(/[−–]/g, "-").trim();
      if (!/^-?\d+$/.test(v)) {
        inp.setAttribute("aria-invalid", "true");
        return inp.focus();
      }
      onSubmit(Number(v));
    };
    box.querySelector("[data-act=check]").onclick = go;
    inp.onkeydown = (e) => e.key === "Enter" && go();
    inp.oninput = () => inp.removeAttribute("aria-invalid");
    return inp;
  }

  return { scope, gcd, lcm, num, frText, frHtml, p1, run, numberInput };
})();
