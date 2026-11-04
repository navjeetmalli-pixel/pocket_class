// Game: Balance the equation. A balance scale holds x-blocks and unit weights on both pans, like 3x + 5 = x + 11. Do the same
// thing to both sides (subtract 5, divide by 2 ...) until x stands alone. Every step is written down below the scale.
//   Class 6   x + 4 = 9, 3x = 12                  Class 7   2x + 3 = 11, x − 4 = 5
//   Class 8   3x + 2 = x + 10 (x on both sides)   Class 9-10  negative numbers and answers, 5x − 7 = 2x + 8
// The scale keeps its x-blocks and weights on the pans, so a step that does not keep it balanced is not possible.
// Content: no saved content; the equations are made fresh from the seed.

(() => {
  const MK = MathKit;
  const ROUNDS = 4;
  const MAX_STEPS = 14;

  const CH = {
    6: /^(algebra)$/,
    7: /^(finding-the-unknown|simple-equations|expressions-using-letter-numbers)$/,
    8: /^(algebra-play|linear-equations-in-one-variable)$/,
    9: /^(introduction-to-linear-polynomials)$/,
    10: /^(pair-of-linear-equations-in-two-variables)$/,
  };
  const kOf = (sc) => (!sc ? 0 : sc.level ? (sc.topic === "algebra" && sc.n >= 6 && sc.n <= 10 ? sc.n : 0) : CH[sc.cls] && CH[sc.cls].test(sc.id) ? sc.cls : 0);

  const TIERS = { 6: [1, 1, 1, 2], 7: [1, 2, 2, 2], 8: [2, 2, 3, 3], 9: [2, 3, 3, 4], 10: [3, 3, 4, 4] };

  // a x + b = c x + d
  function equation(tier, R) {
    let a, b, c, d, x;
    if (tier === 1) {
      x = R.int(1, 9);
      if (R.next() < 0.6) {
        a = 1;
        b = R.int(1, 9);
        c = 0;
        d = x + b;
      } else {
        a = R.int(2, 5);
        b = 0;
        c = 0;
        d = a * x;
      }
    } else if (tier === 2) {
      x = R.int(1, 9);
      a = R.next() < 0.2 ? 1 : R.int(2, 5);
      b = R.sign() * R.int(1, 9);
      if (a === 1 && b > 0) b = -b;
      c = 0;
      d = a * x + b;
      if (d < 1) {
        b = Math.abs(b);
        d = a * x + b;
      }
    } else if (tier === 3) {
      x = R.int(1, 9);
      c = R.int(1, 4);
      a = c + R.int(1, 4);
      b = R.int(0, 9);
      d = (a - c) * x + b;
    } else {
      do x = R.int(-8, 8);
      while (x === 0);
      c = R.int(0, 3);
      a = c + R.int(1, 5);
      b = R.sign() * R.int(1, 9);
      d = (a - c) * x + b;
    }
    return { a, b, c, d, x, tier };
  }

  const term = (co, v, first) => {
    const abs = Math.abs(co);
    return `${first ? (co < 0 ? "−" : "") : co < 0 ? " − " : " + "}${abs === 1 ? "" : abs}${v}`;
  };
  function side(co, k) {
    let s = "";
    if (co) s = term(co, "x", true);
    if (k || !co) s += co ? (k < 0 ? " − " : " + ") + Math.abs(k) : MK.num(k);
    return s;
  }
  const eqText = (s) => `${side(s.a, s.b)} = ${side(s.c, s.d)}`;

  const solved = (s) => s.a === 1 && s.b === 0 && s.c === 0;

  // One step on both sides. op = { k: "add" | "sub" | "mul" | "div", v, x: bool }. Returns { s } or { err }.
  function apply(s, op) {
    const n = { ...s };
    const v = op.v;
    if (op.k === "mul") {
      for (const f of ["a", "b", "c", "d"]) n[f] *= v;
    } else if (op.k === "div") {
      if (["a", "b", "c", "d"].some((f) => s[f] % v)) return { err: t("Dividing by {v} would leave a part that does not divide evenly. Try another step.", { v }) };
      for (const f of ["a", "b", "c", "d"]) n[f] /= v;
    } else {
      const sg = op.k === "add" ? 1 : -1;
      if (op.x) {
        n.a += sg * v;
        n.c += sg * v;
      } else {
        n.b += sg * v;
        n.d += sg * v;
      }
    }
    if (n.c < 0 || n.a < 0) return { err: t("That would leave a negative number of x on a pan. Try another step.") };
    if ([n.a, n.b, n.c, n.d].some((f) => Math.abs(f) > 60)) return { err: t("The numbers would get too big. Try another step.") };
    return { s: n };
  }

  // The shortest way from a state: x to one side first, then the number, then divide.
  function hintOp(s) {
    if (solved(s)) return null;
    if (s.c !== 0) return { k: "sub", v: s.c, x: true };
    if (s.b !== 0) return s.b > 0 ? { k: "sub", v: s.b, x: false } : { k: "add", v: -s.b, x: false };
    return { k: "div", v: s.a, x: false };
  }
  function plan(s) {
    const out = [];
    let cur = s;
    for (let i = 0; i < 6 && !solved(cur); i++) {
      const op = hintOp(cur);
      const r = apply(cur, op);
      if (!r.s) break;
      cur = r.s;
      out.push({ op, s: cur });
    }
    return out;
  }
  function opText(op) {
    const v = op.x ? (op.v === 1 ? "x" : op.v + "x") : String(op.v);
    return op.k === "add" ? t("Add {v} to both sides", { v }) : op.k === "sub" ? t("Subtract {v} from both sides", { v }) : op.k === "mul" ? t("Multiply both sides by {v}", { v }) : t("Divide both sides by {v}", { v });
  }

  Games.register("balance", {
    title: "Balance the equation",
    blurb: "Keep the scale balanced and get x alone",
    how: "A scale shows an equation. Do the same thing to both pans, such as subtract 3 or divide by 2, until x is alone on one side. Fewer steps score more.",
    icon: "scale",

    available: (c, subj, ch) => kOf(MK.scope(c, subj, ch)) > 0,

    build(c, subj, ch, seed) {
      const k = kOf(MK.scope(c, subj, ch));
      const R = Games.rng(seed);
      const rounds = [];
      for (const tier of TIERS[k]) {
        let e;
        for (let tries = 0; tries < 10; tries++) {
          e = equation(tier, R);
          if (!rounds.some((x) => eqText(x) === eqText(e))) break;
        }
        e.opt = plan(e).length;
        rounds.push(e);
      }
      return { rounds, cls: k };
    },

    audit(data) {
      const bad = [];
      for (const e of data.rounds) {
        const tag = eqText(e);
        if (e.a === e.c) bad.push(tag + ": x cancels");
        if (e.a * e.x + e.b !== e.c * e.x + e.d) bad.push(tag + ": x is not a solution");
        if (!Number.isInteger(e.x)) bad.push(tag + ": x not whole");
        if (e.a <= e.c || e.c < 0) bad.push(tag + ": shape");
        // following the hints must solve it, and reach x = e.x
        let cur = e;
        let n = 0;
        while (!solved(cur) && n < 8) {
          const r = apply(cur, hintOp(cur));
          if (!r.s) {
            bad.push(tag + ": hint refused: " + r.err);
            break;
          }
          cur = r.s;
          n++;
        }
        if (!solved(cur) || cur.d !== e.x) bad.push(tag + `: plan ends at ${eqText(cur)}`);
        if (n !== e.opt || n > 4) bad.push(tag + ": step count " + n);
        if (/NaN|undefined/.test(tag)) bad.push(tag + ": text");
      }
      return bad;
    },

    mount(el, data, api) {
      MK.run(el, api, { rounds: data.rounds, prompt: () => t("Get x on its own. Do the same to both sides."), draw });
    },
  });

  // ---------- drawing the scale ----------
  const CELL = 21;
  function pan(cx, co, k) {
    const items = [];
    if (co) {
      if (Math.abs(co) <= 6) for (let i = 0; i < Math.abs(co); i++) items.push({ t: "x", neg: co < 0, label: co < 0 ? "−x" : "x" });
      else items.push({ t: "bigx", neg: co < 0, label: `${co}x` });
    }
    if (k) {
      if (Math.abs(k) <= 8) for (let i = 0; i < Math.abs(k); i++) items.push({ t: "u", neg: k < 0, label: k < 0 ? "−1" : "1" });
      else items.push({ t: "big", neg: k < 0, label: MK.num(k) });
    }
    const per = 5;
    const left = cx - (per * CELL) / 2;
    let g = "";
    items.forEach((it, i) => {
      const row = Math.floor(i / per);
      const col = i % per;
      const x = left + col * CELL;
      const y = 124 - (row + 1) * CELL;
      const cls = `bal-item ${it.t}${it.neg ? " neg" : ""}`;
      if (it.t === "x") g += `<g class="${cls}"><rect x="${x + 1}" y="${y + 1}" width="${CELL - 2}" height="${CELL - 2}" rx="4"/><text x="${x + CELL / 2}" y="${y + CELL / 2 + 4}" text-anchor="middle">${it.label}</text></g>`;
      else if (it.t === "u") g += `<g class="${cls}"><circle cx="${x + CELL / 2}" cy="${y + CELL / 2}" r="${CELL / 2 - 2}"/><text x="${x + CELL / 2}" y="${y + CELL / 2 + 3.5}" text-anchor="middle">${it.label}</text></g>`;
      else g += `<g class="${cls}"><rect x="${cx - 24}" y="${y - 6}" width="48" height="${CELL + 4}" rx="6"/><text x="${cx}" y="${y + CELL / 2 + 5}" text-anchor="middle">${it.label}</text></g>`;
    });
    return g;
  }
  function scale(s) {
    const lx = 80;
    const rx = 240;
    return `<svg class="bal-svg" viewBox="0 0 320 160" aria-hidden="true">
      <path class="bal-stand" d="M160,40 L160,142 M120,146 L200,146"/>
      <line class="bal-beam" x1="${lx - 40}" y1="40" x2="${rx + 40}" y2="40"/>
      <circle class="bal-pivot" cx="160" cy="40" r="6"/>
      <path class="bal-string" d="M${lx},40 L${lx - 54},126 M${lx},40 L${lx + 54},126 M${rx},40 L${rx - 54},126 M${rx},40 L${rx + 54},126"/>
      <path class="bal-plate" d="M${lx - 56},124 H${lx + 56} M${rx - 56},124 H${rx + 56}"/>
      ${pan(lx, s.a, s.b)}${pan(rx, s.c, s.d)}
    </svg>`;
  }

  function draw(e0, board, submit) {
    let s = { ...e0 };
    const history = [{ s, text: null }];
    let n = 3;
    let hints = 0;
    let refused = 0;
    const hasX = e0.c !== 0;

    board.innerHTML = `<div class="card mk-card">
      <div class="bal-eq" data-eq aria-live="polite"></div>
      <div class="bal-scale" data-scale></div>
      <div class="bal-key small muted" data-key></div>
      <div class="bal-ops" role="group" aria-label="${t("Choose a step")}">
        <div class="bal-num" role="group" aria-label="${t("Number to use")}">
          <button class="btn" data-n="-1" aria-label="${t("Smaller number")}">−</button><output data-nv aria-live="off"></output><button class="btn" data-n="1" aria-label="${t("Bigger number")}">+</button>
        </div>
        <div class="bal-grid">
          <button class="btn" data-op="add" data-focus></button><button class="btn" data-op="sub"></button><button class="btn" data-op="mul"></button>
          ${hasX ? `<button class="btn" data-op="addx"></button><button class="btn" data-op="subx"></button>` : ""}<button class="btn" data-op="div"></button>
        </div>
      </div>
      <p class="small bal-msg" data-msg role="status"></p>
      <div class="mk-btnrow"><button class="btn" data-act="undo">${t("Undo")}</button><button class="btn" data-act="hint">${t("Hint")}</button></div>
      <ol class="bal-steps" data-steps aria-label="${t("Your steps")}"></ol>
    </div>`;
    const q = (sel) => board.querySelector(sel);
    const msg = (text) => (q("[data-msg]").textContent = text || "");

    const labelOf = (op, v) => {
      const x = op.endsWith("x");
      const k = op.replace("x", "");
      const vv = x ? (v === 1 ? "x" : v + "x") : String(v);
      return k === "add" ? `+ ${vv}` : k === "sub" ? `− ${vv}` : k === "mul" ? `× ${vv}` : `÷ ${vv}`;
    };
    function paint() {
      q("[data-eq]").textContent = eqText(s);
      q("[data-scale]").innerHTML = scale(s);
      q("[data-nv]").textContent = n;
      board.querySelectorAll("[data-op]").forEach((b) => {
        const op = b.dataset.op;
        b.textContent = labelOf(op, n);
        const k = op.replace("x", "");
        b.setAttribute("aria-label", opText({ k, v: n, x: op.endsWith("x") }));
      });
      q("[data-key]").textContent = [s.b < 0 || s.d < 0 ? t("Dashed red weights are negative.") : ""].filter(Boolean).join(" ");
      q("[data-steps]").innerHTML = history
        .slice(1)
        .map((h) => `<li>${esc(h.text)} <span class="muted">→</span> <b>${esc(eqText(h.s))}</b></li>`)
        .join("");
      q("[data-act=undo]").disabled = history.length < 2;
    }
    paint();

    function finish(win) {
      const steps = history.length - 1;
      const extra = Math.max(0, steps - e0.opt);
      const pts = win ? Math.max(30, 100 - 15 * extra - 15 * hints - 5 * refused) : 0;
      const best = plan(e0)
        .map((p) => `<li>${esc(opText(p.op))} → <b>${esc(eqText(p.s))}</b></li>`)
        .join("");
      submit({
        ok: win,
        credit: win ? pts / 100 : 0,
        pts,
        headline: win ? (extra === 0 ? t("Solved in the fewest steps! 🎉") : t("Solved! 🎉")) : t("Not quite"),
        missPrompt: esc(eqText(e0)),
        yours: win ? "" : esc(eqText(s)),
        right: esc(`x = ${MK.num(e0.x)}`),
        showRight: true,
        explain: `${win ? t("You used {n} {n:step|steps}. The shortest way uses {m}.", { n: steps, m: e0.opt }) : t("The shortest way:")}<ol class="bal-steps">${best}</ol>${t("Check: put x = {x} back in. Left = {l}, right = {r}.", { x: MK.num(e0.x), l: MK.num(e0.a * e0.x + e0.b), r: MK.num(e0.c * e0.x + e0.d) })}`,
      });
    }

    function doOp(op) {
      const r = apply(s, op);
      if (!r.s) {
        refused++;
        return msg(r.err);
      }
      s = r.s;
      history.push({ s, text: opText(op) });
      msg("");
      paint();
      if (solved(s)) finish(true);
      else if (history.length - 1 >= MAX_STEPS) finish(false);
    }
    board.addEventListener("click", (ev) => {
      const nb = ev.target.closest("[data-n]");
      if (nb) {
        n = Math.max(1, Math.min(12, n + Number(nb.dataset.n)));
        return paint();
      }
      const ob = ev.target.closest("[data-op]");
      if (ob) {
        const op = ob.dataset.op;
        return doOp({ k: op.replace("x", ""), v: n, x: op.endsWith("x") });
      }
      const act = ev.target.closest("[data-act]");
      if (!act) return;
      if (act.dataset.act === "undo" && history.length > 1) {
        history.pop();
        s = history[history.length - 1].s;
        msg("");
        paint();
      }
      if (act.dataset.act === "hint") {
        const op = hintOp(s);
        if (!op) return;
        hints++;
        msg(t("Hint: {step}.", { step: opText(op) }));
      }
    });
  }
})();
