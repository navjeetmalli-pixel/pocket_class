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
      // k (the class) says whether a round is drawn as plates (Classes 3-4) or as bars
      MK.run(el, api, { rounds: data.rounds.map((r) => ({ ...r, k: data.cls })), prompt, draw, item });
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
    if (r.type === "build" && young(r)) return t("Take {f} of the {food}.", { f: fh(fx(r.n, r.d)), food: t(foodOf(r)) });
    if (r.type === "build") return t("Shade the fraction {f}.", { f: fh(fx(r.n, r.d)) });
    if (r.type === "equiv") return t("The top bar shows {f}. Shade the same amount on the bottom bar, which has {D} equal parts.", { f: fh(r.f), D: r.cells });
    if (r.type === "compare" && young(r)) return t("Which is bigger: A = {a} or B = {b}?", { a: fh(r.a), b: fh(r.b) });
    if (r.type === "compare") return t("Which is bigger: bar A = {a} or bar B = {b}?", { a: fh(r.a), b: fh(r.b) });
    return t(r.type === "add" ? "Shade the answer to {a} + {b} on the bottom bar." : "Shade the answer to {a} − {b} on the bottom bar.", { a: fh(r.a), b: fh(r.b) });
  }

  // ---------- 2.5D drawings (js/pics.js: same colours, gradients, soft shadow and shine as Pics.fraction) ----------
  // Classes 3-4: a plate with a roti or pizza cut into equal pieces; tapped pieces lift and slide onto "my plate".
  // Source plate on the left, "my plate" on the right (side by side, so the whole round fits on a phone screen with Check visible).
  const PLATE = { cx: 118, cy: 124, R: 96, mx: 374, my: 136, k: 0.62, w: 470, h: 250 };
  const FOODS = ["roti", "pizza"];
  const foodOf = (r) => FOODS[(r.n + r.d + (r.f ? r.f.d : 0)) % 2];
  const young = (r) => r.k <= 4 && (r.type === "build" || r.type === "compare");
  const gradOf = (c) => `url(#r${c.slice(1).toLowerCase()}@)`; // placeholder Pics.svg turns into a real gradient (see the header of js/pics.js)
  const ang = (i, d) => (360 / d) * i;
  const mid = (i, d) => (((360 / d) * (i + 0.5) - 90) * Math.PI) / 180;

  function pieceArt(food, i, d, taken) {
    const [cS, cP] = Pics.FR[food];
    const col = taken ? cS : Pics.tint(cS, 0.32); // a piece waiting on the big plate is a lighter golden-brown / red; once taken it is the full colour
    const w = Pics.wedge(PLATE.cx, PLATE.cy, PLATE.R - 6, ang(i, d), ang(i + 1, d));
    let dots = "";
    [[0.4, 0], [0.68, 0.22], [0.68, -0.22]].forEach(([f, o]) => {
      const a = mid(i, d) + (o * 2 * Math.PI) / d;
      const x = PLATE.cx + (PLATE.R - 6) * f * Math.cos(a);
      const y = PLATE.cy + (PLATE.R - 6) * f * Math.sin(a);
      dots += food === "pizza" ? `<circle cx="${MK.p1(x)}" cy="${MK.p1(y)}" r="${d > 6 ? 5 : 7}" fill="${gradOf(cP)}" stroke="${Pics.shade(cP, 0.6)}" stroke-width="1.2"/>` : `<circle cx="${MK.p1(x)}" cy="${MK.p1(y)}" r="${d > 6 ? 3 : 4.2}" fill="#7a4414" opacity=".55"/>`;
    });
    const shine = Pics.wedge(PLATE.cx, PLATE.cy, PLATE.R - 22, ang(i, d) + 2, ang(i, d) + 360 / d / 2);
    return { w, dots, col, shine, cS };
  }

  function plate(r, food, d, interactive, label) {
    const { cx, cy, R, mx, my, k } = PLATE;
    const [cS, cP] = Pics.FR[food];
    let slots = "";
    let mine = "";
    let pcs = "";
    let hits = "";
    for (let i = 0; i < d; i++) {
      const art = pieceArt(food, i, d, false);
      const w = art.w;
      slots += `<path class="fb-ghost" d="${w}"/>`;
      mine += `<path class="fb-mslot" d="${w}" transform="translate(${MK.p1(mx - cx * k)} ${MK.p1(my - cy * k)}) scale(${k})"/>`;
      pcs += `<g class="fb-pc" data-i="${i}" ${interactive ? "" : 'style="pointer-events:none"'}><g class="fb-lift">
        <path class="fb-pshadow" d="${w}" transform="translate(2.5 5)"/>
        <path class="fb-pbody wait" d="${w}" fill="${gradOf(Pics.tint(cS, 0.32))}" stroke="${Pics.shade(cS, 0.6)}" stroke-width="2.6" stroke-linejoin="round"/><path class="fb-pbody full" d="${w}" fill="${gradOf(cS)}" stroke="${Pics.shade(cS, 0.6)}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="${art.shine}" fill="#fff" opacity=".18"/>${art.dots}</g></g>`;
      if (interactive) hits += `<g class="fb-slice" role="button" tabindex="0" aria-pressed="false" data-i="${i}" ${i === 0 ? "data-focus" : ""} aria-label="${t("Piece {i} of {n}, not taken", { i: i + 1, n: d })}"><path class="fb-hit" d="${w}"/></g>`;
    }
    const ring = (x, y, rr, sc) => `<circle cx="${x}" cy="${y}" r="${rr}" fill="${gradOf("#ffffff")}" stroke="${Pics.shade("#dfe4ee", 0.8)}" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="${rr - 9 * sc}" fill="none" stroke="#c9d1df" stroke-width="1.6"/>`;
    const body = `<ellipse cx="${cx + 3}" cy="${cy + R + 14}" rx="${R - 8}" ry="8" fill="#000" opacity=".1"/>
      <circle cx="${cx + 3}" cy="${cy + 6}" r="${R + 12}" fill="#000" opacity=".1"/>${ring(cx, cy, R + 12, 1)}
      <g>${slots}</g>
      <ellipse cx="${mx + 2}" cy="${my + (R + 12) * k + 4}" rx="${(R - 8) * k}" ry="5" fill="#000" opacity=".1"/>${ring(mx, my, (R + 12) * k, k)}
      <g>${mine}</g>
      <text class="fb-lbl" x="${mx}" y="${MK.p1(my - (R + 12) * k - 12)}" text-anchor="middle">${t("My plate")}</text>
      <g class="fb-pieces" style="--tx:${MK.p1(mx - cx * k)}px;--ty:${MK.p1(my - cy * k)}px;--k:${k}">${pcs}</g><g class="fb-marks"></g>${hits}`;
    return `<div class="fb-stage" data-food="${food}">${Pics.svg(body, { w: PLATE.w, h: PLATE.h, label })}</div>`;
  }

  // a fraction picture (roti/pizza with n of d pieces shaded)
  const mini = (food, n, d, px, label) => `<span class="fb-mini" style="width:${px}px">${Pics.svg(Pics.fraction({ shape: food, parts: d, shaded: n, x: 60, y: 62, s: 110 }), { w: 120, h: 124, label })}</span>`;

  // a bar of n parts; the first `on` shaded when it is only shown, buttons when it can be shaded
  function bar(id, n, on, label) {
    if (on !== null)
      return `<div class="fb-bar given" role="img" aria-label="${esc(label)}">${Array.from({ length: n }, (_, i) => `<span class="fb-cell ${i < on ? "on" : ""}"></span>`).join("")}</div>`;
    return `<div class="fb-bar" role="group" data-bar="${id}" aria-label="${esc(label)}">${Array.from({ length: n }, (_, i) => `<button type="button" class="fb-cell" data-i="${i}" aria-pressed="false" ${i === 0 ? "data-focus" : ""} aria-label="${t("Piece {i} of {n}, not taken", { i: i + 1, n })}"></button>`).join("")}</div>`;
  }

  // a few star and confetti pieces that fly out and fade in under a second (transform and opacity only); never blocks the page
  function burst(host) {
    if (!host || host.querySelector(".fb-burst")) return;
    const calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cols = ["#ffc933", "#e5473d", "#3b82e0", "#4caf50", "#ee6fa4", "#f59a23"];
    const bits = Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * 2 * Math.PI + (i % 2) * 0.2;
      const dist = 70 + (i % 3) * 26;
      const star = i % 3 === 0;
      return `<svg class="fb-bit" viewBox="-8 -8 16 16" style="--dx:${Math.round(Math.cos(a) * dist)}px;--dy:${Math.round(Math.sin(a) * dist - 16)}px;--rot:${(i * 67) % 180}deg;animation-delay:${(i % 4) * 25}ms" aria-hidden="true">${
        star ? `<path d="M0-7 2.1-2.4 7-2 3.3 1.4 4.4 6.4 0 3.8-4.4 6.4-3.3 1.4-7-2-2.1-2.4Z" fill="${cols[i % 6]}" stroke="#a87400" stroke-width=".8" stroke-linejoin="round"/>` : `<rect x="-3.5" y="-2.2" width="7" height="4.4" rx="1.2" fill="${cols[i % 6]}"/>`
      }</svg>`;
    }).join("");
    const b = document.createElement("div");
    b.className = "fb-burst" + (calm ? " calm" : "");
    b.setAttribute("aria-hidden", "true");
    b.innerHTML = bits;
    host.appendChild(b);
    setTimeout(() => b.remove(), calm ? 900 : 1000);
  }

  function draw(r, board, submit) {
    const cmp = r.type === "compare";
    const isPlate = young(r) && !cmp;
    const food = foodOf(r);
    let top = "";
    if (isPlate)
      top = `<div class="fb-goal"><span class="fb-goal-pic">${mini(food, r.n, r.d, 74, t("{f} of the {food}", { f: MK.frText(r.n, r.d), food: t(food) }))}</span><span class="fb-goal-fr">${MK.frHtml(r.n, r.d)}</span><span class="fb-goal-word">${t("of the {food}", { food: t(food) })}</span></div>
        <p class="fb-hint">${t("Tap a piece to put it on your plate. Tap it again to put it back.")}</p>
        ${plate(r, food, r.d, true, t("{food} cut into {n} equal pieces", { food: t(food), n: r.d }))}`;
    else if (r.type === "build") top = bar("main", r.d, null, t("Bar cut into {n} equal parts", { n: r.d }));
    else if (r.type === "equiv") top = `<div class="fb-row"><span class="fb-tag">${ft(r.f)}</span>${bar("", r.f.d, r.f.n, t("{f} shown on a bar", { f: ft(r.f) }))}</div><div class="fb-row"><span class="fb-tag">?</span>${bar("main", r.cells, null, t("Bar cut into {n} equal parts", { n: r.cells }))}</div>`;
    else if (cmp && young(r)) top = `<div class="fb-cmp">${[["A", r.a], ["B", r.b]].map(([nm, f]) => `<div class="fb-cmp-card"><span class="fb-cmp-tag">${nm}</span>${mini("roti", f.n, f.d, 132, t("Plate {x} shows {f}", { x: nm, f: ft(f) }))}<span class="fb-cmp-fr">${MK.frHtml(f.n, f.d)}</span></div>`).join("")}</div>`;
    else if (cmp) top = `<div class="fb-row"><span class="fb-tag">A ${ft(r.a)}</span>${bar("", r.a.d, r.a.n, t("Bar A shows {f}", { f: ft(r.a) }))}</div><div class="fb-row"><span class="fb-tag">B ${ft(r.b)}</span>${bar("", r.b.d, r.b.n, t("Bar B shows {f}", { f: ft(r.b) }))}</div>`;
    else top = `<div class="fb-row"><span class="fb-tag">${ft(r.a)}</span>${bar("", r.a.d, r.a.n, t("{f} shown on a bar", { f: ft(r.a) }))}</div><div class="fb-row"><span class="fb-tag">${ft(r.b)}</span>${bar("", r.b.d, r.b.n, t("{f} shown on a bar", { f: ft(r.b) }))}</div><div class="fb-row"><span class="fb-tag">?</span>${bar("main", r.L, null, t("Answer bar cut into {n} equal parts", { n: r.L }))}</div>`;

    board.innerHTML = `<div class="card mk-card fb-card ${isPlate ? "fb-plates" : ""}">${top}
      ${
        cmp
          ? `<div class="fb-choices" role="group" aria-label="${t("Your answer")}"><button class="btn" data-pick="a" data-focus>${t("A is bigger")}</button><button class="btn" data-pick="eq">${t("They are equal")}</button><button class="btn" data-pick="b">${t("B is bigger")}</button></div>`
          : `<p class="mk-read" aria-live="polite" data-count></p><div class="mk-btnrow"><button class="btn" data-act="clear">${t("Clear")}</button><button class="btn primary" data-act="check">${t("Check")}</button></div>`
      }</div>`;

    const total = r.type === "build" ? r.d : r.cells;
    const target = r.type === "build" ? r.n : r.type === "equiv" ? r.f.n * r.m : r.target;
    const parts = [...board.querySelectorAll(".fb-bar:not(.given) .fb-cell, .fb-slice")];
    const count = board.querySelector("[data-count]");
    const taken = [];  // the pieces on my plate, in the order they were taken (their numbers when a wrong answer is explained)
    let tried = false; // the first wrong try has been explained; this is the second
    const shaded = () => parts.filter((x) => x.classList.contains("on")).length;
    const upd = () => count && (count.textContent = isPlate ? t("Taken: {a} of {b} pieces", { a: shaded(), b: total }) : t("Shaded: {a} of {b} parts", { a: shaded(), b: total }));
    upd();

    const pc = (x) => board.querySelector(`.fb-pc[data-i="${x.dataset.i}"]`);
    const set = (x, on, hop) => {
      x.classList.toggle("on", on);
      x.setAttribute(x.hasAttribute("aria-pressed") ? "aria-pressed" : "aria-checked", on);
      const i = +x.dataset.i;
      if (on) taken.push(i);
      else if (taken.includes(i)) taken.splice(taken.indexOf(i), 1);
      if (isPlate) {
        x.setAttribute("aria-label", t(on ? "Piece {i} of {n}, taken" : "Piece {i} of {n}, not taken", { i: i + 1, n: total }));
        const p = pc(x);
        if (p) {
          p.classList.toggle("taken", on);
          if (hop) {
            p.classList.remove("hop");
            void p.getBoundingClientRect(); // restart the short lift
            p.classList.add("hop");
          }
        }
      } else x.setAttribute("aria-label", t(on ? "Piece {i} of {n}, taken" : "Piece {i} of {n}, not taken", { i: i + 1, n: total }));
    };
    const toggle = (x) => {
      set(x, !x.classList.contains("on"), true);
      upd();
    };
    board.addEventListener("animationend", (e) => e.target.closest && e.target.closest(".fb-pc") && e.target.closest(".fb-pc").classList.remove("hop"));
    board.addEventListener("click", (e) => {
      const x = e.target.closest(".fb-cell[data-i], .fb-slice");
      if (x) return toggle(x);
      const pcEl = e.target.closest(".fb-pc.taken"); // a taken piece on my plate can be tapped to send it back
      if (pcEl) return toggle(parts.find((p) => p.dataset.i === pcEl.dataset.i));
      const pick = e.target.closest("[data-pick]");
      if (pick) return answerCompare(pick);
      if (e.target.closest("[data-act=clear]")) {
        parts.forEach((p) => set(p, false, false));
        taken.length = 0;
        unmark();
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

    // wrong answer: outline the equal pieces and number the ones that were taken, 1 to n
    function mark() {
      board.classList.add("fb-teaching");
      if (isPlate) {
        const { cx, cy, R, mx, my, k } = PLATE;
        const g = board.querySelector(".fb-marks");
        g.innerHTML = taken
          .map((i, n) => {
            const a = mid(i, r.d);
            const rho = (R - 6) * 0.6;
            const bx = (c, m, sc) => MK.p1(m + (c === "x" ? Math.cos(a) : Math.sin(a)) * rho * sc);
            const big = `<g class="fb-num"><circle cx="${bx("x", cx, 1)}" cy="${bx("y", cy, 1)}" r="13"/><text x="${bx("x", cx, 1)}" y="${bx("y", cy, 1)}" dy=".36em">${n + 1}</text></g>`;
            const small = `<g class="fb-num sm"><circle cx="${bx("x", mx, k)}" cy="${bx("y", my, k)}" r="9"/><text x="${bx("x", mx, k)}" y="${bx("y", my, k)}" dy=".36em">${n + 1}</text></g>`;
            return big + small;
          })
          .join("");
      } else taken.forEach((i, n) => parts[i].setAttribute("data-num", n + 1));
    }
    function unmark() {
      board.classList.remove("fb-teaching");
      const g = board.querySelector(".fb-marks");
      if (g) g.innerHTML = "";
      parts.forEach((p) => p.removeAttribute("data-num"));
    }

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

    function teach(n) {
      const took = n === 1 ? t("You took 1 piece.") : t("You took {n} pieces.", { n });
      const rule = r.type === "build" ? t("{f} means {a} of the {d} equal pieces.", { f: MK.frText(r.n, r.d), a: r.n, d: r.d }) : t("The answer {f} needs {a} of the {d} equal pieces.", { f: MK.frText(target, total), a: target, d: total });
      return `${esc(took)} ${esc(rule)}`;
    }

    function check() {
      const n = shaded();
      if (n === 0) return;
      const ok = n === target;
      const near = Math.abs(n - target) === 1;
      const was = tried;
      const x = {
        ok,
        credit: ok ? 1 : near ? 0.4 : 0,
        pts: ok ? 100 : near ? 25 : 0,
        yours: esc(isPlate ? t("{a} of {b} pieces taken", { a: n, b: total }) : t("{a} of {b} parts shaded", { a: n, b: total })),
        right: esc(isPlate ? t("{a} of {b} pieces taken", { a: target, b: total }) : t("{a} of {b} parts shaded", { a: target, b: total })),
        explain: esc(explain()),
        showRight: true,
        headline: was ? (ok ? t("Got it this time!") : t("Not quite")) : undefined,
        reveal() {
          if (ok) {
            burst(board.querySelector(".fb-card"));
            return;
          }
          unmark();
          const on = parts.filter((x) => x.classList.contains("on"));
          on.forEach((x) => x.classList.add(n > target ? "extra" : "ok"));
          if (n < target) parts.filter((x) => !x.classList.contains("on")).slice(0, target - n).forEach((x) => x.classList.add("missing"));
          if (n > target) on.slice(target).forEach((x) => x.classList.add("remove"));
        },
      };
      if (!ok && !was)
        x.retry = {
          teach: teach(n),
          say: teach(n).replace(/&[a-z]+;/g, ""),
          mark,
          again() {
            tried = true;
            unmark();
          },
        };
      submit(x);
    }
  }
})();
