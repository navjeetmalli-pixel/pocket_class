// Game: Number line. Put the marker on a number, fraction, decimal or integer; for young classes also "jump" sums
// (start at 7, jump 5, where do you land?). The line, the size of the numbers and how exact you must be follow the class:
//   Class 1  0 to 10 / 20 / 50, exact          Class 2  0 to 100 (1 off is fine)      Class 3  0 to 1000 (3% off), halves/quarters
//   Class 4  0 to 10 000, tenths, fractions    Class 5  0 to 1 00 000, decimals, equivalent fractions
//   Class 6  integers -10 to 10, fractions to 2 Class 7  integers -20 to 20, negative fractions, hundredths
// Content: no saved content, the numbers are made fresh from the seed. Chapters and levels come from KINDS below.

(() => {
  const MK = MathKit;
  const ROUNDS = 6;

  // kinds of question a chapter can ask: whole (place a number), jump (add/subtract by hopping), frac, dec,
  // neg (integers), jumpneg (hop across zero)
  const CH = {
    1: [[/^(numbers|zero)/, ["whole"]], [/^(addition|subtraction)/, ["jump", "whole"]]],
    2: [[/^(numbers-up|place-value)/, ["whole"]], [/^(addition|subtraction)/, ["jump", "whole"]]],
    3: [[/^numbers-up/, ["whole"]], [/^(addition|subtraction)$/, ["jump", "whole"]], [/^fractions$/, ["frac"]]],
    4: [[/^numbers-up/, ["whole"]], [/^fractions$/, ["frac"]], [/^introduction-to-decimals$/, ["dec"]]],
    5: [[/^large-numbers$/, ["whole"]], [/^fractions$/, ["frac"]], [/^decimals$/, ["dec"]]],
    6: [[/^(the-other-side-of-zero|integers)$/, ["neg", "jumpneg"]], [/^fractions$/, ["frac"]], [/^knowing-our-numbers$/, ["whole"]], [/^decimals$/, ["dec"]]],
    7: [[/^(operations-with-integers|integers)$/, ["neg", "jumpneg"]], [/^working-with-fractions$/, ["frac"]], [/^large-numbers-around-us$/, ["whole"]], [/peek-beyond-the-point$/, ["dec"]], [/^fractions-and-decimals$/, ["frac", "dec"]], [/^rational-numbers$/, ["frac"]]],
  };

  function kinds(sc) {
    if (!sc || sc.cls > 7) return [];
    if (sc.level) {
      const n = sc.n;
      if (sc.topic === "numbers") return n <= 3 ? ["whole", "jump"] : n <= 5 ? ["whole"] : n === 6 ? ["whole", "neg"] : n === 7 ? ["neg", "jumpneg", "whole"] : [];
      if (sc.topic === "fractions") return n === 3 ? ["frac"] : n >= 4 && n <= 7 ? ["frac", "dec"] : [];
      return [];
    }
    for (const [re, k] of CH[sc.cls] || []) if (re.test(sc.id)) return k;
    return [];
  }

  // ---------- the value at a mark ----------
  // Mark number i (0 = left end) stands for (lo + i*unit) / den.
  function lab(r, i) {
    const nu = r.lo + i * r.unit;
    return r.kind === "frac" ? MK.frText(nu, r.den, true) : MK.num(nu / r.den);
  }
  const labHtml = (r, i) => {
    const nu = r.lo + i * r.unit;
    return r.kind === "frac" ? MK.frHtml(...reduce(nu, r.den)) : esc(lab(r, i));
  };
  function reduce(n, d) {
    const g = MK.gcd(n, d) || 1;
    return [n / g, d / g];
  }

  // ---------- making a round ----------
  const base = (kind, o) => ({ kind, n: 10, lo: 0, den: 1, unit: 1, major: 1, minor: 1, snap: 1, tol: 0, start: 0, ...o });

  function whole(k, id, R) {
    const hi = k <= 1 ? (/50/.test(id) ? 50 : /to-20|addition|subtraction/.test(id) ? 20 : 10) : k === 2 ? 100 : k === 3 ? 1000 : k === 4 ? 10000 : k <= 6 ? 100000 : 1000000;
    const big = hi > 100;
    const n = big ? 100 : hi;
    let target;
    if (big) target = 5 * R.int(1, 19);
    else if (n >= 50) {
      do target = R.int(1, n - 1);
      while (target % 10 === 0);
    } else target = R.int(1, n - 1);
    return base("whole", { n, unit: big ? hi / 100 : 1, major: n <= 10 ? 1 : n <= 20 ? 5 : hi >= 10000 ? 20 : 10, minor: n <= 50 ? 1 : 5, tol: n <= 20 ? 0 : n <= 100 && !big ? 1 : 3, target });
  }

  function hopsOf(b, chunkBig) {
    const out = [];
    let left = b;
    while (left >= chunkBig && chunkBig > 1) {
      out.push(chunkBig);
      left -= chunkBig;
    }
    while (left > 0) {
      out.push(1);
      left--;
    }
    return out;
  }

  function jump(k, id, R) {
    const addOnly = /^addition/.test(id);
    const subOnly = /^subtraction/.test(id);
    const add = addOnly ? true : subOnly ? false : R.next() < 0.5;
    let n, unit, a, b, hops;
    if (k <= 1) {
      n = 20;
      a = add ? R.int(0, n - 3) : R.int(3, n);
      b = add ? R.int(1, Math.min(9, n - a)) : R.int(1, Math.min(9, a));
      unit = 1;
      hops = hopsOf(b, 1);
    } else if (k === 2) {
      n = 100;
      unit = 1;
      b = R.pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 12, 15, 25]);
      a = add ? R.int(5, 100 - b) : R.int(b, 95);
      hops = hopsOf(b, 10);
    } else {
      n = 100;
      unit = 10;
      b = 5 * R.int(1, 6);
      a = add ? 5 * R.int(0, Math.floor((100 - b) / 5)) : 5 * R.int(Math.ceil(b / 5), 20);
      hops = hopsOf(b, 5);
    }
    const sign = add ? 1 : -1;
    return base("jump", { n, unit, major: n <= 20 ? 5 : 10, minor: n <= 50 ? 1 : 5, snap: k >= 3 ? 5 : 1, a, b, sign, hops, start: a, target: a + sign * b, add });
  }

  function neg(k, R) {
    const m = k <= 6 ? 10 : 20;
    let target;
    do target = R.int(-m + 1, m - 1);
    while (target === 0);
    return base("neg", { n: 2 * m, lo: -m, major: 5, start: m, target: target + m });
  }

  function jumpneg(k, R) {
    const m = k <= 6 ? 10 : 20;
    const add = R.next() < 0.5;
    let a, b, t;
    do {
      a = R.int(-m + 2, m - 2);
      b = R.int(2, m - 1);
      t = add ? a + b : a - b;
    } while (t < -m || t > m || t === a);
    const sign = add ? 1 : -1;
    return base("jumpneg", { n: 2 * m, lo: -m, major: 5, a: a + m, b, sign, hops: hopsOf(b, b > 12 ? 5 : 1), start: a + m, target: t + m, add, aVal: a });
  }

  function frac(k, R) {
    if (k <= 3) {
      const D = R.pick([2, 3, 4]);
      const t = R.int(1, D - 1);
      return base("frac", { n: D, den: D, major: D, target: t, show: [t, D] });
    }
    if (k === 4) {
      const D = R.pick([2, 3, 4, 5, 6, 8, 10]);
      const t = R.int(1, D - 1);
      return base("frac", { n: D, den: D, major: D, target: t, show: [t, D] });
    }
    // Class 5+: the written fraction can have a smaller denominator than the marks (2/4 on a line of eighths)
    const D = R.pick(k >= 7 ? [2, 3, 4, 5, 6] : [4, 6, 8, 10, 12]);
    const ds = [];
    for (let d = 2; d <= D; d++) if (D % d === 0) ds.push(d);
    const d = R.pick(ds);
    const span = k <= 5 ? 1 : 2; // line from 0 to span, or -2 to 2
    const left = k >= 7 ? -2 : 0;
    const right = k >= 7 ? 2 : span;
    let t;
    do t = R.int(left * d + 1, right * d - 1);
    while (t === 0 || t % d === 0);
    return base("frac", { n: (right - left) * D, lo: left * D, den: D, major: D, start: -left * D, target: (t * D) / d - left * D, show: [t, d] });
  }

  function dec(k, R) {
    if (k <= 4) {
      const t = R.int(1, 9);
      return base("dec", { n: 10, den: 10, major: 5, target: t });
    }
    if (k === 5 && R.next() < 0.5) {
      const t = R.int(1, 19);
      return base("dec", { n: 20, den: 10, major: 5, target: t });
    }
    const a = k >= 6 ? R.int(0, 9) : 0;
    let t = k >= 6 ? R.int(3, 97) : 5 * R.int(1, 19);
    if (t % 10 === 0) t += 3;
    return base("dec", { n: 100, lo: a * 100, den: 100, major: 10, minor: 5, tol: 2, target: t });
  }

  // ---------- the game ----------
  Games.register("numberline", {
    title: "Number line",
    blurb: "Put the marker on the right number",
    how: "Each question asks for a number, fraction or decimal. Drag the marker along the line (or tap the line, or use the arrow buttons and keys) and press Check. For jump sums, start at the first number and land on the answer.",
    icon: "numline",

    available: (c, subj, ch) => kinds(MK.scope(c, subj, ch)).length > 0,

    build(c, subj, ch, seed) {
      const sc = MK.scope(c, subj, ch);
      const ks = kinds(sc);
      const R = Games.rng(seed);
      const k = Math.max(1, sc.cls);
      const order = Games.shuffled(ks, R);
      const rounds = [];
      for (let i = 0; i < ROUNDS; i++) {
        const kind = order[i % order.length];
        let r;
        for (let tries = 0; tries < 8; tries++) {
          r = kind === "whole" ? whole(k, sc.id, R) : kind === "jump" ? jump(k, sc.id, R) : kind === "neg" ? neg(k, R) : kind === "jumpneg" ? jumpneg(k, R) : kind === "frac" ? frac(k, R) : dec(k, R);
          if (!rounds.some((x) => x.kind === r.kind && x.target === r.target && x.a === r.a)) break;
        }
        rounds.push(r);
      }
      return { rounds, cls: k };
    },

    // For scripts/check-games.js: everything a round claims must agree with itself.
    audit(data) {
      const bad = [];
      for (const r of data.rounds) {
        const tag = `${r.kind} n=${r.n} target=${r.target}`;
        if (!Number.isInteger(r.n) || r.n < 2) bad.push(tag + ": bad n");
        if (!Number.isInteger(r.target) || r.target < 0 || r.target > r.n) bad.push(tag + ": target off the line");
        if (r.target % r.snap) bad.push(tag + ": target is not a place the marker can stop");
        if (r.tol * 4 >= r.n) bad.push(tag + ": tolerance too wide");
        if (r.start === r.target) bad.push(tag + ": marker starts on the answer");
        if (r.start % r.snap) bad.push(tag + ": start is not a place the marker can stop");
        if (/NaN|undefined|Infinity/.test(lab(r, 0) + lab(r, r.n) + lab(r, r.target))) bad.push(tag + ": bad label");
        if (r.kind === "jump" || r.kind === "jumpneg") {
          if (r.target !== r.a + r.sign * r.b) bad.push(tag + ": jump does not land on target");
          if (r.hops.reduce((x, y) => x + y, 0) !== r.b) bad.push(tag + ": hops do not add up");
          if (r.tol !== 0) bad.push(tag + ": jump should be exact");
        }
        if (r.kind === "frac") {
          const [sn, sd] = r.show;
          if (sn * r.den !== (r.lo + r.target) * sd) bad.push(tag + `: shown ${sn}/${sd} is not the target`);
        }
        if (r.kind === "dec" && Math.abs((r.lo + r.target) / r.den - Number(lab(r, r.target).replace("−", "-").replace(/,/g, ""))) > 1e-9) bad.push(tag + ": decimal label wrong");
        if (r.kind === "whole" || r.kind === "neg") {
          const v = Number(lab(r, r.target).replace("−", "-").replace(/,/g, ""));
          if (v !== (r.lo + r.target * r.unit) / r.den) bad.push(tag + ": label wrong");
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
    const right = lab(r, r.target);
    if (r.kind === "jump" || r.kind === "jumpneg") {
      const a = MK.num((r.a * r.unit + r.lo) / r.den);
      const b = MK.num((r.b * r.unit) / r.den);
      return { q: `${r.add ? "Add" : "Subtract"} on the number line: ${a} ${r.add ? "+" : "-"} ${b}${r.kind === "jumpneg" ? " with negative integers" : ""}`, explain: `Jump ${r.add ? "right" : "left"} on the number line to land on ${right}.`, answer: right };
    }
    const noun = r.kind === "frac" ? `the fraction ${MK.frText(...r.show)} on the number line` : r.kind === "dec" ? `the decimal ${right} on the number line` : r.kind === "neg" ? `the integer ${right} (negative numbers) on the number line` : `the number ${right} on the number line`;
    return { q: `Place ${noun}`, explain: `Locate ${noun}: it sits at ${right}.`, answer: right };
  }

  function prompt(r) {
    if (r.kind === "jump" || r.kind === "jumpneg") {
      const a = esc(MK.num((r.a * r.unit + r.lo) / r.den));
      const b = esc(MK.num((r.b * r.unit) / r.den));
      return r.add ? t("{a} + {b} = ?  Start at {a}, jump {b} to the right and put the marker where you land.", { a, b }) : t("{a} − {b} = ?  Start at {a}, jump {b} to the left and put the marker where you land.", { a, b });
    }
    const v = r.kind === "frac" ? `<span class="mk-val">${MK.frHtml(...r.show)}</span>` : `<span class="mk-val">${labHtml(r, r.target)}</span>`;
    return t("Put the marker on {v}.", { v });
  }

  function explain(r) {
    const right = lab(r, r.target);
    if (r.kind === "jump" || r.kind === "jumpneg") {
      const a = MK.num((r.a * r.unit + r.lo) / r.den);
      const b = MK.num((r.b * r.unit) / r.den);
      return t(r.add ? "{a} + {b} = {r}: start at {a}, jump {b} to the right and land on {r}." : "{a} − {b} = {r}: start at {a}, jump {b} to the left and land on {r}.", { a, b, r: right });
    }
    if (r.kind === "frac") {
      const [sn, sd] = r.show;
      const m = r.target + r.lo;
      if (m < 0) return t("{f} is {m} small parts of 1/{D} to the left of 0.", { f: MK.frText(sn, sd), m: Math.abs(m), D: r.den });
      if (sd === r.den) return t("{f} means {n} of the {d} equal parts between 0 and 1. Count {n} marks from 0.", { f: MK.frText(sn, sd), n: sn, d: sd });
      return t("{f} = {g}. Each small part is 1/{D}, so count {m} small parts from 0.", { f: MK.frText(sn, sd), g: MK.frText(m, r.den), D: r.den, m });
    }
    if (r.kind === "dec") return t("{v} is {m} steps of {s} after {l}.", { v: right, m: r.target, s: MK.num(1 / r.den), l: lab(r, 0) });
    return t("{v} is at the green mark. Count along from the nearest number written on the line.", { v: right });
  }

  // ---------- drawing ----------
  const W = 320;
  const H = 150;
  const X0 = 18;
  const X1 = 302;
  const Y = 82;

  function draw(r, board, submit) {
    const xOf = (i) => X0 + (i / r.n) * (X1 - X0);
    let ticks = "";
    for (let i = 0; i <= r.n; i++) {
      const major = i % r.major === 0;
      if (!major && i % r.minor) continue;
      const x = MK.p1(xOf(i));
      ticks += `<line class="mk-tick${major ? " maj" : ""}" x1="${x}" x2="${x}" y1="${Y - (major ? 9 : 5)}" y2="${Y + (major ? 9 : 5)}"/>`;
      if (major) ticks += `<text class="mk-lab" x="${x}" y="${Y + 26}" text-anchor="middle">${esc(lab(r, i))}</text>`;
    }
    const mid = r.start;
    board.innerHTML = `<div class="card mk-card">
      <svg class="mk-svg" viewBox="0 0 ${W} ${H}" role="group" aria-label="${t("Number line from {a} to {b}", { a: lab(r, 0), b: lab(r, r.n) })}" style="touch-action:none">
        <line class="mk-axis" x1="${X0 - 6}" x2="${X1 + 6}" y1="${Y}" y2="${Y}"/>
        ${ticks}
        <g data-layer="reveal"></g>
        <g class="mk-marker" data-marker tabindex="0" data-focus role="slider" aria-label="${t("Marker")}" aria-valuemin="0" aria-valuemax="${r.n}" aria-valuenow="${mid}" aria-valuetext="${esc(lab(r, mid))}">
          <rect class="mk-flag" x="-26" y="-60" width="52" height="24" rx="8"/>
          <text class="mk-flagtext" x="0" y="-43" text-anchor="middle" data-flag>${esc(lab(r, mid))}</text>
          <path class="mk-stem" d="M0,-36 L0,-12"/>
          <circle class="mk-knob" r="11" cy="0"/>
        </g>
      </svg>
      <div class="mk-btnrow" role="group" aria-label="${t("Move the marker")}">
        ${r.major > r.snap ? `<button class="btn" data-mv="-${r.major}" aria-label="${t("Move left a long way")}">◀◀</button>` : ""}
        <button class="btn" data-mv="-${r.snap}" aria-label="${t("Move left")}">◀</button>
        <button class="btn" data-mv="${r.snap}" aria-label="${t("Move right")}">▶</button>
        ${r.major > r.snap ? `<button class="btn" data-mv="${r.major}" aria-label="${t("Move right a long way")}">▶▶</button>` : ""}
      </div>
      <button class="btn primary block" data-act="check" style="margin-top:12px">${t("Check")}</button>
    </div>`;

    const svg = board.querySelector("svg");
    const mk = board.querySelector("[data-marker]");
    const flag = board.querySelector("[data-flag]");
    let idx = mid;
    let drag = false;
    const set = (v) => {
      idx = Math.max(0, Math.min(r.n, Math.round(v / r.snap) * r.snap));
      mk.setAttribute("transform", `translate(${MK.p1(xOf(idx))},${Y})`);
      mk.setAttribute("aria-valuenow", idx);
      mk.setAttribute("aria-valuetext", lab(r, idx));
      flag.textContent = lab(r, idx);
    };
    set(mid);
    const fromEvent = (e) => {
      const rc = svg.getBoundingClientRect();
      const x = ((e.clientX - rc.left) * W) / rc.width;
      return ((x - X0) / (X1 - X0)) * r.n;
    };
    svg.addEventListener("pointerdown", (e) => {
      drag = true;
      try {
        svg.setPointerCapture(e.pointerId);
      } catch (_) {}
      set(fromEvent(e));
      mk.focus({ preventScroll: true });
    });
    svg.addEventListener("pointermove", (e) => drag && set(fromEvent(e)));
    const up = () => (drag = false);
    svg.addEventListener("pointerup", up);
    svg.addEventListener("pointercancel", up);
    mk.addEventListener("keydown", (e) => {
      const k = e.key;
      const d = k === "ArrowLeft" || k === "ArrowDown" ? -r.snap : k === "ArrowRight" || k === "ArrowUp" ? r.snap : k === "PageDown" ? -Math.max(r.major, r.snap) : k === "PageUp" ? Math.max(r.major, r.snap) : 0;
      if (d) {
        e.preventDefault();
        set(idx + d);
      } else if (k === "Home" || k === "End") {
        e.preventDefault();
        set(k === "Home" ? 0 : r.n);
      } else if (k === "Enter") {
        e.preventDefault();
        check();
      }
    });
    board.addEventListener("click", (e) => {
      const b = e.target.closest("[data-mv]");
      if (b) set(idx + Number(b.dataset.mv));
      if (e.target.closest("[data-act=check]")) check();
    });

    function check() {
      const d = Math.abs(idx - r.target);
      const ok = d <= r.tol;
      const credit = ok ? 1 : d <= Math.max(1, r.tol * 2) ? 0.4 : 0;
      submit({
        ok,
        credit,
        pts: ok ? 100 : credit ? 25 : 0,
        headline: ok && d > 0 ? t("Close enough! 🎯") : undefined,
        yours: labHtml(r, idx),
        right: labHtml(r, r.target),
        explain: esc(explain(r)),
        showRight: true,
        reveal() {
          const x = MK.p1(xOf(r.target));
          let g = "";
          if (r.tol > 0) g += `<rect class="mk-band" x="${MK.p1(xOf(r.target - r.tol))}" y="${Y - 14}" width="${MK.p1(xOf(r.target + r.tol) - xOf(r.target - r.tol))}" height="28" rx="6"/>`;
          if (r.hops) {
            let at = r.a;
            for (const h of r.hops) {
              const x1 = xOf(at);
              const x2 = xOf(at + r.sign * h);
              const hh = Math.min(30, Math.abs(x2 - x1) / 2 + 6);
              g += `<path class="mk-hop" d="M${MK.p1(x1)},${Y - 12} Q${MK.p1((x1 + x2) / 2)},${Y - 12 - hh * 1.4} ${MK.p1(x2)},${Y - 12}"/>`;
              at += r.sign * h;
            }
          }
          g += `<circle class="mk-answer-dot" cx="${x}" cy="${Y}" r="8"/><text class="mk-answer-text" x="${x}" y="${Y + 46}" text-anchor="middle">${esc(lab(r, r.target))}</text>`;
          board.querySelector("[data-layer=reveal]").innerHTML = g;
          mk.classList.add(ok ? "good" : "bad");
        },
      });
    }
  }
})();
