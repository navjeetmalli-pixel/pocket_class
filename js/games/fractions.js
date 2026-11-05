// Game: Fraction builder. Shade parts of a bar or a circle to show a fraction, find an equivalent fraction, compare two
// fractions, and add or subtract fractions by shading the answer. What is asked follows the class:
//   Class 3  shade halves, thirds, quarters; compare with the same parts      Class 4  also circles, equivalent fractions
//   Class 5  tenths, unlike comparing, adding with the same denominator       Class 6-8  adding and subtracting with different denominators
// Content: no saved content; the fractions are made fresh from the seed.

(() => {
  const MK = MathKit;
  const ROUNDS = 6;

  const CH = { 3: /^fractions$/, 4: /^fractions$/, 5: /^fractions$/, 6: /^fractions$/, 7: /^(working-with-fractions|fractions-and-decimals|rational-numbers)$/, 8: /^rational-numbers$/ };
  const kOf = (sc) => (!sc ? 0 : sc.level ? (sc.topic === "fractions" && sc.n >= 3 && sc.n <= 8 ? sc.n : 0) : CH[sc.cls] && CH[sc.cls].test(sc.id) ? sc.cls : 0);

  // pairs of denominators whose common denominator fits on a bar of at most 12 parts
  const PAIRS = [[2, 3], [2, 4], [3, 4], [2, 6], [3, 6], [4, 6], [2, 5], [5, 10], [2, 10], [3, 12], [4, 12], [6, 12]];
  const fx = (n, d) => ({ n, d });
  const val = (f) => f.n / f.d;

  function pool(k) {
    return k <= 3 ? ["build", "build", "compare"] : k === 4 ? ["build", "pie", "equiv", "compare"] : k === 5 ? ["build", "equiv", "compare", "add"] : ["equiv", "compare", "add", "sub"];
  }

  function make(type, k, R) {
    const maxD = k <= 3 ? 4 : k === 4 ? 8 : 10;
    if (type === "build" || type === "pie") {
      const d = R.int(2, maxD);
      return { type: "build", shape: type === "pie" ? "pie" : "bar", n: R.int(1, d - 1), d, cells: d };
    }
    if (type === "equiv") {
      const d = R.int(2, k <= 4 ? 5 : 6);
      const m = R.pick([2, 3, 4].filter((x) => d * x <= 12));
      return { type, f: fx(R.int(1, d - 1), d), m, cells: d * m };
    }
    if (type === "compare") {
      let a, b;
      if (k <= 3) {
        const d = R.int(3, 6);
        do {
          a = fx(R.int(1, d - 1), d);
          b = fx(R.int(1, d - 1), d);
        } while (a.n === b.n);
      } else if (k === 4) {
        if (R.next() < 0.5) {
          const d = R.int(3, 8);
          do {
            a = fx(R.int(1, d - 1), d);
            b = fx(R.int(1, d - 1), d);
          } while (a.n === b.n);
        } else {
          const [d1, d2] = R.pick([[2, 4], [2, 3], [3, 4], [4, 8], [3, 6], [2, 8]]);
          a = fx(1, d1);
          b = fx(1, d2);
          if (R.next() < 0.5) [a, b] = [b, a];
        }
      } else if (R.next() < 0.25) {
        const [d1, d2] = R.pick([[2, 4], [2, 6], [3, 6], [4, 8], [2, 10], [3, 9]]);
        const t = R.int(1, d1 - 1);
        a = fx(t, d1);
        b = fx((t * d2) / d1, d2);
      } else {
        do {
          const [d1, d2] = R.pick(k === 5 ? [[2, 4], [2, 3], [3, 4], [3, 6], [4, 8], [2, 5], [5, 10]] : PAIRS);
          a = fx(R.int(1, d1 - 1), d1);
          b = fx(R.int(1, d2 - 1), d2);
        } while (a.n * b.d === b.n * a.d);
      }
      const L = MK.lcm(a.d, b.d);
      const cross = a.n * b.d - b.n * a.d;
      return { type, a, b, L, answer: cross > 0 ? "a" : cross < 0 ? "b" : "eq", cells: Math.max(a.d, b.d) };
    }
    // add / subtract: the answer bar is cut into L equal parts
    let a, b, L;
    for (let tries = 0; tries < 50; tries++) {
      const [d1, d2] = k === 5 ? [R.pick([3, 4, 5, 6, 8, 10, 12])].flatMap((d) => [d, d]) : R.pick(PAIRS);
      const swap = R.next() < 0.5 && d1 !== d2;
      a = fx(R.int(1, d1 - 1), swap ? d2 : d1);
      b = fx(R.int(1, d2 - 1), swap ? d1 : d2);
      L = MK.lcm(a.d, b.d);
      const x = (a.n * L) / a.d;
      const y = (b.n * L) / b.d;
      if (type === "add" ? x + y <= L && x + y < L : x - y >= 1) break;
      if (tries === 49) {
        a = fx(1, 2);
        b = fx(1, 4);
        L = 4;
      }
    }
    const x = (a.n * L) / a.d;
    const y = (b.n * L) / b.d;
    return { type, a, b, L, target: type === "add" ? x + y : x - y, cells: L };
  }

  Games.register("fractions", {
    title: "Fraction builder",
    blurb: "Shade bars and circles to show fractions",
    how: "Tap the parts of a bar or circle to shade them, then press Check. You will show fractions, find equal fractions, compare two fractions, and add or take away fractions by shading the answer.",
    icon: "pie",

    available: (c, subj, ch) => kOf(MK.scope(c, subj, ch)) > 0,

    build(c, subj, ch, seed) {
      const k = kOf(MK.scope(c, subj, ch));
      const R = Games.rng(seed);
      const types = Games.shuffled(pool(k), R);
      const rounds = [];
      for (let i = 0; i < ROUNDS; i++) {
        let r;
        for (let tries = 0; tries < 6; tries++) {
          r = make(types[i % types.length], k, R);
          if (!rounds.some((x) => JSON.stringify(x) === JSON.stringify(r))) break;
        }
        rounds.push(r);
      }
      return { rounds, cls: k };
    },

    audit(data) {
      const bad = [];
      for (const r of data.rounds) {
        const tag = r.type + " " + JSON.stringify(r).slice(0, 80);
        if (r.cells < 2 || r.cells > 12) bad.push(tag + ": bar size");
        if (r.type === "build" && !(r.n >= 1 && r.n < r.d)) bad.push(tag + ": bad fraction");
        if (r.type === "equiv") {
          const target = r.f.n * r.m;
          if (target >= r.cells || r.f.n >= r.f.d || r.cells !== r.f.d * r.m || target / r.cells !== r.f.n / r.f.d) bad.push(tag + ": equivalent wrong");
        }
        if (r.type === "compare") {
          const want = val(r.a) > val(r.b) + 1e-12 ? "a" : val(r.b) > val(r.a) + 1e-12 ? "b" : "eq";
          if (want !== r.answer) bad.push(tag + ": compare answer");
          if (r.a.n >= r.a.d || r.b.n >= r.b.d) bad.push(tag + ": improper in compare");
        }
        if (r.type === "add" || r.type === "sub") {
          const exact = r.type === "add" ? val(r.a) + val(r.b) : val(r.a) - val(r.b);
          if (Math.abs(r.target / r.L - exact) > 1e-12) bad.push(tag + ": sum/difference");
          if (!(r.target >= 1 && r.target <= r.L)) bad.push(tag + ": answer off the bar");
          if (r.L % r.a.d || r.L % r.b.d) bad.push(tag + ": L not common");
        }
      }
      return bad;
    },

    mount(el, data, api) {
      // each checked round goes to api.answered(item(round), ok) inside MK.run (js/games/mathkit.js)
      MK.run(el, api, { rounds: data.rounds, prompt, draw, item });
    },
  });

  // plain English text for the learning record (never translated)
  function item(r) {
    const f = (x) => `${x.n}/${x.d}`;
    if (r.type === "build") return { q: `Shade ${r.n}/${r.d} of a ${r.shape === "pie" ? "circle" : "bar"}: show the fraction ${r.n}/${r.d}`, explain: `A fraction ${r.n}/${r.d} means ${r.n} of ${r.d} equal parts.`, answer: `${r.n}/${r.d}` };
    if (r.type === "equiv") return { q: `Find an equivalent fraction: write ${f(r.f)} as a fraction with denominator ${r.cells}`, explain: `Equivalent fractions: ${f(r.f)} = ${r.f.n * r.m}/${r.cells}.`, answer: `${r.f.n * r.m}/${r.cells}` };
    if (r.type === "compare") return { q: `Compare fractions ${f(r.a)} and ${f(r.b)}: which is bigger?`, explain: `Compare fractions using a common denominator of ${r.L}.`, answer: r.answer };
    return { q: `${r.type === "add" ? "Add" : "Subtract"} fractions with different denominators: ${f(r.a)} ${r.type === "add" ? "+" : "-"} ${f(r.b)}`, explain: `${r.type === "add" ? "Adding" : "Subtracting"} fractions: use the common denominator ${r.L}.`, answer: `${r.target}/${r.L}` };
  }

  const fh = (f) => `<span class="mk-val">${MK.frHtml(f.n, f.d)}</span>`;
  const ft = (f) => MK.frText(f.n, f.d);

  function prompt(r) {
    if (r.type === "build") return t("Shade the fraction {f}.", { f: fh(fx(r.n, r.d)) });
    if (r.type === "equiv") return t("The top bar shows {f}. Shade the same amount on the bottom bar, which has {D} equal parts.", { f: fh(r.f), D: r.cells });
    if (r.type === "compare") return t("Which is bigger: bar A = {a} or bar B = {b}?", { a: fh(r.a), b: fh(r.b) });
    return t(r.type === "add" ? "Shade the answer to {a} + {b} on the bottom bar." : "Shade the answer to {a} − {b} on the bottom bar.", { a: fh(r.a), b: fh(r.b) });
  }

  // a bar of n parts; the first `on` shaded when it is only shown, buttons when it can be shaded
  function bar(id, n, on, label) {
    if (on !== null)
      return `<div class="fb-bar given" role="img" aria-label="${esc(label)}">${Array.from({ length: n }, (_, i) => `<span class="fb-cell ${i < on ? "on" : ""}"></span>`).join("")}</div>`;
    return `<div class="fb-bar" role="group" data-bar="${id}" aria-label="${esc(label)}">${Array.from({ length: n }, (_, i) => `<button type="button" class="fb-cell" data-i="${i}" aria-pressed="false" ${i === 0 ? "data-focus" : ""} aria-label="${t("Part {i} of {n}", { i: i + 1, n })}"></button>`).join("")}</div>`;
  }

  function pie(n) {
    const cx = 100;
    const cy = 100;
    const rad = 88;
    const pt = (i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      return [MK.p1(cx + rad * Math.cos(a)), MK.p1(cy + rad * Math.sin(a))];
    };
    const slices = Array.from({ length: n }, (_, i) => {
      const [x1, y1] = pt(i);
      const [x2, y2] = pt(i + 1);
      return `<path class="fb-slice" data-i="${i}" role="checkbox" aria-checked="false" tabindex="0" ${i === 0 ? "data-focus" : ""} aria-label="${t("Part {i} of {n}", { i: i + 1, n })}" d="M${cx},${cy} L${x1},${y1} A${rad},${rad} 0 0 1 ${x2},${y2} Z"/>`;
    }).join("");
    return `<svg class="fb-pie" viewBox="0 0 200 200" role="group" aria-label="${t("Circle cut into {n} equal parts", { n })}">${slices}</svg>`;
  }

  function draw(r, board, submit) {
    const cmp = r.type === "compare";
    let top = "";
    if (r.type === "build") top = r.shape === "pie" ? pie(r.d) : bar("main", r.d, null, t("Bar cut into {n} equal parts", { n: r.d }));
    else if (r.type === "equiv") top = `<div class="fb-row"><span class="fb-tag">${ft(r.f)}</span>${bar("", r.f.d, r.f.n, t("{f} shown on a bar", { f: ft(r.f) }))}</div><div class="fb-row"><span class="fb-tag">?</span>${bar("main", r.cells, null, t("Bar cut into {n} equal parts", { n: r.cells }))}</div>`;
    else if (cmp) top = `<div class="fb-row"><span class="fb-tag">A ${ft(r.a)}</span>${bar("", r.a.d, r.a.n, t("Bar A shows {f}", { f: ft(r.a) }))}</div><div class="fb-row"><span class="fb-tag">B ${ft(r.b)}</span>${bar("", r.b.d, r.b.n, t("Bar B shows {f}", { f: ft(r.b) }))}</div>`;
    else top = `<div class="fb-row"><span class="fb-tag">${ft(r.a)}</span>${bar("", r.a.d, r.a.n, t("{f} shown on a bar", { f: ft(r.a) }))}</div><div class="fb-row"><span class="fb-tag">${ft(r.b)}</span>${bar("", r.b.d, r.b.n, t("{f} shown on a bar", { f: ft(r.b) }))}</div><div class="fb-row"><span class="fb-tag">?</span>${bar("main", r.L, null, t("Answer bar cut into {n} equal parts", { n: r.L }))}</div>`;

    board.innerHTML = `<div class="card mk-card">${top}
      ${
        cmp
          ? `<div class="fb-choices" role="group" aria-label="${t("Your answer")}"><button class="btn" data-pick="a" data-focus>${t("A is bigger")}</button><button class="btn" data-pick="eq">${t("They are equal")}</button><button class="btn" data-pick="b">${t("B is bigger")}</button></div>`
          : `<p class="mk-read" aria-live="polite" data-count></p><div class="mk-btnrow"><button class="btn" data-act="clear">${t("Clear")}</button><button class="btn primary" data-act="check">${t("Check")}</button></div>`
      }</div>`;

    const total = r.type === "build" ? r.d : r.cells;
    const target = r.type === "build" ? r.n : r.type === "equiv" ? r.f.n * r.m : r.target;
    const parts = [...board.querySelectorAll(".fb-bar:not(.given) .fb-cell, .fb-slice")];
    const count = board.querySelector("[data-count]");
    const shaded = () => parts.filter((x) => x.classList.contains("on")).length;
    const upd = () => count && (count.textContent = t("Shaded: {a} of {b} parts", { a: shaded(), b: total }));
    upd();

    const toggle = (x) => {
      const on = !x.classList.contains("on");
      x.classList.toggle("on", on);
      x.setAttribute(x.hasAttribute("aria-pressed") ? "aria-pressed" : "aria-checked", on);
      upd();
    };
    board.addEventListener("click", (e) => {
      const x = e.target.closest(".fb-cell[data-i], .fb-slice");
      if (x) return toggle(x);
      const pick = e.target.closest("[data-pick]");
      if (pick) return answerCompare(pick);
      if (e.target.closest("[data-act=clear]")) {
        parts.forEach((p) => {
          p.classList.remove("on");
          p.setAttribute(p.hasAttribute("aria-pressed") ? "aria-pressed" : "aria-checked", "false");
        });
        upd();
      }
      if (e.target.closest("[data-act=check]")) check();
    });
    board.addEventListener("keydown", (e) => {
      const x = e.target.closest(".fb-slice");
      if (x && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        toggle(x);
      }
    });

    function explain() {
      if (r.type === "build") return t("Cut into {d} equal parts and shade {n} of them: {f}.", { d: r.d, n: r.n, f: MK.frText(r.n, r.d) });
      if (r.type === "equiv") return t("{f} = {g}: each part of the top bar is cut into {m} smaller parts, so {a} shaded parts become {b}.", { f: ft(r.f), g: MK.frText(target, r.cells), m: r.m, a: r.f.n, b: target });
      if (cmp) {
        const x = (r.a.n * r.L) / r.a.d;
        const y = (r.b.n * r.L) / r.b.d;
        const w = r.answer === "a" ? t("A is bigger") : r.answer === "b" ? t("B is bigger") : t("They are equal");
        return t("Use {L} equal parts: {a} = {x}/{L} and {b} = {y}/{L}, so {w}.", { L: r.L, a: ft(r.a), x, b: ft(r.b), y, w });
      }
      const x = (r.a.n * r.L) / r.a.d;
      const y = (r.b.n * r.L) / r.b.d;
      const sign = r.type === "add" ? "+" : "−";
      return t("Cut every bar into {L} equal parts: {x} {s} {y} = {z} parts shaded, so the answer is {f}.", { L: r.L, x, s: sign, y, z: target, f: MK.frText(target, r.L, true) });
    }

    function answerCompare(btn) {
      const pick = btn.dataset.pick;
      const ok = pick === r.answer;
      const name = (v) => (v === "a" ? t("A is bigger") : v === "b" ? t("B is bigger") : t("They are equal"));
      submit({
        ok,
        yours: esc(name(pick)),
        right: esc(name(r.answer)),
        explain: esc(explain()),
        reveal() {
          board.querySelectorAll("[data-pick]").forEach((b) => {
            if (b.dataset.pick === r.answer) b.classList.add("correct");
            else if (b === btn) b.classList.add("wrong");
          });
        },
      });
    }

    function check() {
      const n = shaded();
      if (n === 0) return;
      const ok = n === target;
      submit({
        ok,
        credit: ok ? 1 : Math.abs(n - target) === 1 ? 0.4 : 0,
        pts: ok ? 100 : Math.abs(n - target) === 1 ? 25 : 0,
        yours: esc(t("{a} of {b} parts shaded", { a: n, b: total })),
        right: esc(t("{a} of {b} parts shaded", { a: target, b: total })),
        explain: esc(explain()),
        showRight: true,
        reveal() {
          if (ok) return;
          const on = parts.filter((x) => x.classList.contains("on"));
          on.forEach((x) => x.classList.add(n > target ? "extra" : "ok"));
          if (n < target) parts.filter((x) => !x.classList.contains("on")).slice(0, target - n).forEach((x) => x.classList.add("missing"));
          if (n > target) on.slice(target).forEach((x) => x.classList.add("remove"));
        },
      });
    }
  }
})();
