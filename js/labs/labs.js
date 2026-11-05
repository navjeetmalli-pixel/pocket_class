// Virtual labs: small, original, offline lab simulations (circuit builder, force and motion, particle world, cell builder).
// Each follows predict -> change ONE variable -> observe (numbers with units, a table and a graph of runs) -> explain
// (choose the explanation the evidence supports). A finished experiment is saved as an experiment record in the student's
// data (Store.state.labs) and logged as evidence against the chapter's learning objectives (js/learn.js, source "lab").
//
//   Labs.register(id, { title, area, icon, classes, chapters: [{ cls, subject, chapter }], objective, assumptions, mount(el, api) })
//   Labs.all()                         every lab: [{ id, title, area, classes, chapters, objective, icon }]  (title and objective translated)
//   Labs.forChapter(cls, subj, ch)     labs that belong to a chapter (subj and ch: ids or objects): [{ id, title, blurb, area, objective, icon, href }]
//                                      (title and blurb are already translated; icon is a name in ICONS)
//   Labs.flow(el, api, cfg)            the four-step scaffold the labs share (see the notes above `flow`)
//   Labs.calc                          the pure formulas of each lab, so scripts/check-labs.js can test them without a browser
//
// A lab is opened at #/lab/<id>/<cls>/<subject>/<chapter> (Views.lab, at the end of this file); the chapter says which
// objectives the evidence goes to. Strings are English inside t(); translations are in js/labs/i18n.js.

const Labs = (() => {
  const defs = {};
  const order = [];
  const calc = {};
  let uid = 0;

  const sid = (s) => (s && typeof s === "object" ? s.id : s);
  const num = (x, d = 2) => {
    const r = Math.round(x * 10 ** d) / 10 ** d;
    return (r < 0 ? "−" : "") + String(Math.abs(r));
  };
  const fix = (x, d = 2) => (x < 0 ? "−" : "") + Math.abs(x).toFixed(d);
  const pt = (x) => Math.round(x * 10) / 10;

  function register(id, def) {
    defs[id] = { id, ...def, classes: [...new Set(def.chapters.map((c) => c.cls))].sort((a, b) => a - b) };
    order.push(id);
  }
  const brief = (d) => ({ id: d.id, title: t(d.title), area: d.area, classes: d.classes, chapters: d.chapters, objective: t(d.objective), blurb: t(d.objective), icon: d.icon });
  const all = () => order.map((id) => brief(defs[id]));
  const get = (id) => defs[id] || null;
  // Labs that belong to a chapter, with the link that opens them in that chapter's context.
  function forChapter(c, subj, ch) {
    const s = sid(subj);
    const h = sid(ch);
    return order
      .map((id) => defs[id])
      .filter((d) => d.chapters.some((x) => x.cls === Number(c) && x.subject === s && x.chapter === h))
      .map((d) => ({ ...brief(d), href: `#/lab/${d.id}/${c}/${s}/${h}` }));
  }

  // ---------- the experiment scaffold ----------
  // Labs.flow(root, api, cfg) draws the four steps into `root` and keeps the runs, the prediction and the record.
  //   cfg.columns        [{ key, label, unit?, d?, var? }]  columns of the table of runs; `var` marks a variable the learner controls
  //   cfg.investigations [{ id, title, question, predict: { q, opts, ans }, vary: key, go, explain: { q, opts, ans, why },
  //                         held: [labels], graph: { x: key | "run", y: key }, sentence? }]
  //   inv.columns        optional: this investigation's own table columns instead of cfg.columns
  //   cfg.mountStage(slot, flow)   draws the lab's own picture and controls once into `slot`
  //   cfg.onInvestigation(inv, flow)  sets the lab up for an investigation (a preset)
  //   cfg.assumptions    text shown under the lab
  //   cfg.extra()        optional: extra data saved in the record
  // The lab calls flow.addRun({ key: value, ... }) when the learner records a run, and flow.live(rows, summary) to show
  // its readouts (rows: [[label, value]]; summary: one sentence for screen readers).
  function flow(root, api, cfg) {
    const n = ++uid;
    const S = { i: 0, pick: null, runs: [], rid: null, ePick: null, tries: 0, started: false, noted: false };
    const inv = () => cfg.investigations[S.i];
    const cols = () => inv().columns || cfg.columns; // an investigation may bring its own table columns (inv.columns)
    const col = (k) => cols().find((c) => c.key === k);
    const label = (c) => t(c.label) + (c.unit ? ` (${c.unit})` : "");
    const cell = (c, v) => (c.fmt ? c.fmt(v) : v == null ? "—" : typeof v === "number" ? (c.d != null ? fix(v, c.d) : num(v, 2)) : String(v));
    const $ = (s) => root.querySelector(s);
    const L = "ABC";

    root.innerHTML = `<div class="vl sim">
      <section class="sim-step" aria-labelledby="vl${n}-h1"><h3 id="vl${n}-h1"><span class="n">1</span>${t("Predict")}</h3>
        ${cfg.investigations.length > 1 ? `<div class="vl-invs" role="radiogroup" aria-label="${esc(t("Choose an investigation"))}">${cfg.investigations
          .map((v, i) => `<button type="button" class="option" role="radio" aria-checked="false" data-inv="${i}"><span class="letter">${i + 1}</span><span>${t(v.title)}</span></button>`)
          .join("")}</div>` : ""}
        <p class="vl-q" data-q></p>
        <div class="sim-opts" role="radiogroup" data-pred aria-label="${esc(t("Your prediction"))}"></div>
        <p class="small muted" data-predmsg></p></section>
      <section class="sim-step" aria-labelledby="vl${n}-h2"><h3 id="vl${n}-h2"><span class="n">2</span>${t("Change one variable")}</h3>
        <p data-go></p><div data-stage></div></section>
      <section class="sim-step" aria-labelledby="vl${n}-h3"><h3 id="vl${n}-h3"><span class="n">3</span>${t("Observe")}</h3>
        <dl class="sim-rows" data-live></dl><p class="sr-only" role="status" data-say></p>
        <h4 class="vl-sub">${t("Your runs")}</h4>
        <p class="small muted" data-noruns>${t("No runs yet. Make a prediction, then record a run.")}</p>
        <div class="vl-tablewrap" data-tablewrap hidden><table class="vl-table" data-table></table></div>
        <p class="small vl-fair" data-fair></p>
        <div data-graph></div>
        <div class="sim-btns"><button type="button" class="btn" data-clear hidden>${icon("reset")} ${t("Clear my runs")}</button></div></section>
      <section class="sim-step" aria-labelledby="vl${n}-h4"><h3 id="vl${n}-h4"><span class="n">4</span>${t("Explain")}</h3>
        <p data-eq></p>
        <div class="sim-opts" role="radiogroup" data-exp aria-label="${esc(t("Choose the explanation your runs support"))}"></div>
        <p class="small muted" data-evidence></p>
        <button type="button" class="btn primary" data-check disabled>${t("Check my explanation")}</button>
        <div data-fb role="status"></div></section>
      <details class="vl-past card" data-past><summary>${icon("notes")} <span data-pastn></span></summary><ul class="vl-pastlist" data-pastlist></ul></details>
      ${cfg.assumptions ? `<div class="vl-assume small"><strong>${t("Assumptions in this model")}</strong><p>${t(cfg.assumptions)}</p></div>` : ""}
    </div>`;

    // ----- helpers -----
    let sayT = 0;
    let lastSay = "";
    const say = (txt) => {
      clearTimeout(sayT);
      sayT = setTimeout(() => {
        const el = $("[data-say]");
        if (el && txt !== lastSay) el.textContent = lastSay = txt;
      }, 350);
    };
    const radio = (host, items, sel, attr, locked) => {
      host.innerHTML = items
        .map((o, i) => `<button type="button" class="option ${sel === i ? "selected" : ""}" role="radio" aria-checked="${sel === i}" tabindex="${sel === i || (sel == null && i === 0) ? 0 : -1}" ${attr}="${i}" ${locked ? "disabled" : ""}><span class="letter">${L[i]}</span><span>${t(o)}</span></button>`)
        .join("");
    };
    const locked = () => S.runs.length > 0;
    const setRunButtons = () => root.querySelectorAll("[data-vl-run]").forEach((b) => (b.disabled = S.pick == null));

    const distinct = () => new Set(S.runs.map((r) => String(r[inv().vary]))).size;
    const enough = () => distinct() >= 2;

    function renderInv() {
      const v = inv();
      root.querySelectorAll("[data-inv]").forEach((b) => {
        const on = Number(b.dataset.inv) === S.i;
        b.classList.toggle("selected", on);
        b.setAttribute("aria-checked", on);
        b.tabIndex = on ? 0 : -1;
      });
      $("[data-q]").textContent = t(v.question);
      radio($("[data-pred]"), v.predict.opts, S.pick, "data-pp", locked());
      $("[data-predmsg]").textContent = S.pick == null ? t("Choose what you think will happen. You can change your mind until you record your first run.") : locked() ? t("Your prediction is locked in. Compare it with your runs.") : t("Prediction saved. Now change the variable and record runs.");
      $("[data-go]").textContent = t(v.go);
      radio($("[data-exp]"), v.explain.opts, S.ePick, "data-ee", false);
      $("[data-eq]").textContent = t(v.explain.q);
      setRunButtons();
    }

    function renderRuns() {
      const v = inv();
      const has = S.runs.length > 0;
      $("[data-noruns]").hidden = has;
      $("[data-tablewrap]").hidden = !has;
      $("[data-clear]").hidden = !has;
      $("[data-table]").innerHTML = has
        ? `<caption class="sr-only">${t("Your runs")}</caption><thead><tr><th scope="col">#</th>${cols().map((c) => `<th scope="col" class="${c.var ? "vl-var" : ""}">${esc(label(c))}</th>`).join("")}</tr></thead><tbody>${S.runs
            .map((r, i) => `<tr><th scope="row">${i + 1}</th>${cols().map((c) => `<td class="${c.var ? "vl-var" : ""}">${esc(cell(c, r[c.key]))}</td>`).join("")}</tr>`)
            .join("")}</tbody>`
        : "";
      // Fair test: compare the last run with the one before it.
      let fair = "";
      if (S.runs.length > 1) {
        const a = S.runs[S.runs.length - 2];
        const b = S.runs[S.runs.length - 1];
        const ch = cols().filter((c) => c.var && String(a[c.key]) !== String(b[c.key]));
        fair = !ch.length ? t("These two runs have the same settings.") : ch.length === 1 ? t("Fair test: you changed only {x}.", { x: t(ch[0].label) }) : t("You changed more than one thing ({x}). It is hard to tell which one caused the difference.", { x: ch.map((c) => t(c.label)).join(", ") });
      }
      $("[data-fair]").textContent = fair;
      $("[data-graph]").innerHTML = S.runs.length ? graph(S.runs, v.graph, cols()) : "";
      const ev = $("[data-evidence]");
      ev.textContent = enough() ? t("You have runs that differ in {x}. You can explain what you found.", { x: t(col(v.vary).label) }) : t("To explain, record at least two runs that differ in {x}.", { x: t(col(v.vary).label) });
      $("[data-check]").disabled = !(enough() && S.ePick != null);
    }

    function renderPast() {
      const rec = Store.labRecords(api.id);
      $("[data-pastn]").textContent = t("Your saved experiments: {n}", { n: rec.length });
      $("[data-past]").hidden = !rec.length;
      $("[data-pastlist]").innerHTML = rec
        .slice(0, 6)
        .map(
          (r) =>
            `<li><strong>${esc(r.question)}</strong><br><span class="small muted">${r.prediction.ok ? "✓" : "✗"} ${t("Prediction")} · ${r.conclusion.ok ? "✓" : "✗"} ${t("Explanation")} · ${t("{n} {n:run|runs}", { n: r.observations.length })} · ${new Date(r.at).toLocaleDateString(langTag(), { day: "numeric", month: "short" })}</span></li>`
        )
        .join("");
    }

    // ----- the flow object the lab uses -----
    const F = {
      api,
      root,
      get inv() {
        return inv();
      },
      get runs() {
        return S.runs;
      },
      get predicted() {
        return S.pick != null;
      },
      say,
      live(rows, summary) {
        const dl = $("[data-live]");
        if (dl) dl.innerHTML = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
        if (summary) say(summary);
      },
      addRun(row) {
        if (S.pick == null) {
          $("[data-predmsg]").textContent = t("Make your prediction in step 1 first.");
          $("[data-pred]").querySelector("[role=radio]").focus();
          say(t("Make your prediction in step 1 first."));
          return false;
        }
        S.runs.push(row);
        if (S.runs.length > 8) S.runs.shift();
        if (S.runs.length === 1) renderInv();
        renderRuns();
        say(t("Run {n} recorded.", { n: S.runs.length }));
        if (!S.noted) {
          S.noted = true;
          api.log([{ type: "lesson-step" }], inv());
        }
        return true;
      },
      reset() {
        S.runs = [];
        S.rid = null;
        $("[data-fb]").innerHTML = "";
        renderInv();
        renderRuns();
      },
    };

    // ----- events -----
    root.addEventListener("click", (e) => {
      const iv = e.target.closest("[data-inv]");
      if (iv) {
        S.i = Number(iv.dataset.inv);
        S.pick = null;
        S.ePick = null;
        S.noted = false;
        F.reset();
        cfg.onInvestigation && cfg.onInvestigation(inv(), F);
        return;
      }
      const pp = e.target.closest("[data-pp]");
      if (pp && !locked()) {
        S.pick = Number(pp.dataset.pp);
        renderInv();
        $(`[data-pp="${S.pick}"]`).focus();
        return;
      }
      const ee = e.target.closest("[data-ee]");
      if (ee) {
        S.ePick = Number(ee.dataset.ee);
        $("[data-fb]").innerHTML = "";
        renderInv();
        renderRuns();
        $(`[data-ee="${S.ePick}"]`).focus();
        return;
      }
      if (e.target.closest("[data-clear]")) {
        F.reset();
        return;
      }
      if (e.target.closest("[data-check]")) check();
    });
    // Radio groups move with the arrow keys.
    root.addEventListener("keydown", (e) => {
      const r = e.target.closest && e.target.closest("[role=radio]");
      const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (!r || !d) return;
      const all = [...r.parentElement.querySelectorAll("[role=radio]:not([disabled])")];
      const nx = all[(all.indexOf(r) + d + all.length) % all.length];
      nx.focus();
      nx.click();
      e.preventDefault();
    });

    function check() {
      const v = inv();
      if (!enough() || S.ePick == null) return;
      S.tries++;
      const okE = S.ePick === v.explain.ans;
      const okP = S.pick === v.predict.ans;
      $("[data-exp]").querySelectorAll("[data-ee]").forEach((o) => {
        const i = Number(o.dataset.ee);
        o.classList.toggle("correct", i === v.explain.ans && okE);
        o.classList.toggle("wrong", i === S.ePick && !okE);
      });
      // The record: question, prediction, variables, observations, conclusion.
      S.rid = S.rid || "x" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
      const heldCols = (v.held || []).map((h) => t(h));
      const rec = {
        id: S.rid,
        lab: api.id,
        inv: v.id,
        cls: api.cls,
        subject: api.subject,
        chapter: api.chapter,
        at: Date.now(),
        question: t(v.question),
        prediction: { text: t(v.predict.opts[S.pick]), ok: okP },
        variables: { changed: t(col(v.vary).label), held: heldCols },
        observations: S.runs.map((r) => Object.fromEntries(cols().map((c) => [c.key, cell(c, r[c.key])]))),
        conclusion: { text: t(v.explain.opts[S.ePick]), ok: okE },
        fair: S.runs.length > 1 && S.runs.every((r, i) => i === 0 || cols().filter((c) => c.var && String(r[c.key]) !== String(S.runs[i - 1][c.key])).length <= 1),
      };
      if (cfg.extra) rec.extra = cfg.extra();
      Store.saveLab(rec);
      // Sticker book (Classes 1-5): the first save of each experiment earns one.
      const first = !S.sticker;
      const sticker = S.sticker || (S.sticker = Stickers.earn("lab", `lab:${api.id}:${v.id}:${S.rid}`));
      if (sticker && first) Stickers.celebrate(sticker);
      const moved = api.log([{ type: "answer", ok: okE, hints: 0, attempt: S.tries }], v);
      $("[data-fb]").innerHTML = `<div class="feedback ${okE ? "good" : "neutral"}"><div class="h">${okE ? t("That is what your runs show.") : t("Look at your table again.")}</div>
        <p>${okP ? t("Your prediction was right.") : t("Your prediction was different from what happened.")} ${esc(t(v.explain.why))}</p>
        ${okE ? "" : `<p class="small">${t("Which of your runs changed only the variable you are testing? Compare those rows, then choose again.")}</p>`}
        <p class="small muted" style="margin:8px 0 0">${icon("check")} ${t("Saved in your experiment record.")}</p></div>${sticker ? Stickers.winHTML(sticker) : ""}${Learn.improvedHTML(moved)}`;
      renderPast();
      say(okE ? t("Correct. Experiment saved.") : t("Not quite. Look at your table again."));
    }

    // ----- start -----
    renderInv();
    renderRuns();
    renderPast();
    cfg.mountStage($("[data-stage]"), F);
    cfg.onInvestigation && cfg.onInvestigation(inv(), F);
    setRunButtons();
    return F;
  }

  // A small graph of the runs: y against x (a line when x is a number), or bars when x is "run".
  function graph(runs, g, cols) {
    if (!g) return "";
    const cy = cols.find((c) => c.key === g.y);
    const cx = g.x === "run" ? { label: "Run", unit: "" } : cols.find((c) => c.key === g.x);
    const bars = g.x === "run";
    const pts = runs
      .map((r, i) => ({ x: bars ? i + 1 : r[g.x], y: r[g.y], i }))
      .filter((p) => typeof p.x === "number" && typeof p.y === "number" && isFinite(p.x) && isFinite(p.y));
    if (!pts.length) return "";
    const nice = (v) => {
      if (v <= 0) return 1;
      const p = 10 ** Math.floor(Math.log10(v));
      return [1, 2, 2.5, 5, 10].map((k) => k * p).find((k) => k >= v - 1e-9);
    };
    const W = 600, H = 270, L0 = 70, R0 = 24, T0 = 20, B0 = 62;
    const xmax = nice(Math.max(...pts.map((p) => p.x), bars ? pts.length : 0));
    const ymax = nice(Math.max(...pts.map((p) => p.y)));
    const X = (v) => L0 + ((W - L0 - R0) * v) / (bars ? pts.length + 1 : xmax);
    const Y = (v) => H - B0 - ((H - T0 - B0) * v) / ymax;
    const fmt = (v) => num(v, 2);
    let s = `<line class="s-ax" x1="${L0}" y1="${H - B0}" x2="${W - R0}" y2="${H - B0}"/><line class="s-ax" x1="${L0}" y1="${T0}" x2="${L0}" y2="${H - B0}"/>`;
    for (let k = 0; k <= 4; k++) {
      const yv = (ymax * k) / 4;
      s += `<line class="s-grid" x1="${L0}" y1="${pt(Y(yv))}" x2="${W - R0}" y2="${pt(Y(yv))}"/><text class="s-m" x="${L0 - 8}" y="${pt(Y(yv) + 6)}" text-anchor="end">${esc(fmt(yv))}</text>`;
    }
    if (bars) {
      pts.forEach((p) => {
        const w = Math.min(46, (W - L0 - R0) / (pts.length + 1) / 1.6);
        s += `<rect class="vl-bar" x="${pt(X(p.x) - w / 2)}" y="${pt(Y(p.y))}" width="${pt(w)}" height="${pt(H - B0 - Y(p.y))}"/><text class="s-m" x="${pt(X(p.x))}" y="${H - B0 + 22}" text-anchor="middle">${p.x}</text>`;
      });
    } else {
      for (let k = 0; k <= 4; k++) s += `<text class="s-m" x="${pt(X((xmax * k) / 4))}" y="${H - B0 + 22}" text-anchor="middle">${esc(fmt((xmax * k) / 4))}</text>`;
      const sorted = [...pts].sort((a, b) => a.x - b.x);
      if (sorted.length > 1) s += `<polyline class="s-curve" fill="none" points="${sorted.map((p) => `${pt(X(p.x))},${pt(Y(p.y))}`).join(" ")}"/>`;
      pts.forEach((p) => (s += `<circle class="s-pt vl-dot" cx="${pt(X(p.x))}" cy="${pt(Y(p.y))}" r="6"/><text class="s-m" x="${pt(X(p.x) + 9)}" y="${pt(Y(p.y) - 9)}">${p.i + 1}</text>`));
    }
    const xl = `${t(cx.label)}${cx.unit ? ` (${cx.unit})` : ""}`;
    const yl = `${t(cy.label)}${cy.unit ? ` (${cy.unit})` : ""}`;
    s += `<text class="s-t" x="${(L0 + W - R0) / 2}" y="${H - 14}" text-anchor="middle">${esc(xl)}</text><text class="s-t" transform="translate(16 ${(T0 + H - B0) / 2}) rotate(-90)" text-anchor="middle">${esc(yl)}</text>`;
    const desc = pts.map((p) => `(${fmt(p.x)}, ${fmt(p.y)})`).join(", ");
    return `<figure class="vl-graph"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t("Graph of {y} against {x}: {pts}", { y: yl, x: xl, pts: desc }))}">${s}</svg></figure>`;
  }

  // ---------- recording events against the chapter's objectives ----------
  // Events go to the objective the investigation names for this chapter, else the one that best matches its wording
  // (Objectives.forQuestion). An investigation may name objectives per chapter, as one lab serves several chapters:
  //   obj: { "7/science/electricity-circuits-and-their-components": "series-parallel-and-the-fuse" }
  // (a plain string is used for any chapter that has an objective with that id).
  const objFor = (ctx, inv) => (inv.obj && typeof inv.obj === "object" ? inv.obj[`${ctx.cls}/${ctx.subject}/${ctx.chapter}`] : inv.obj) || undefined;
  function logger(ctx) {
    return (events, inv) => {
      if (!ctx || !Learn.ready(ctx.cls)) return [];
      try {
        const o = Objectives.forQuestion(ctx.cls, ctx.subject, ctx.chapter, { q: `${inv.question} ${inv.title || ""}`, explain: inv.explain.why, options: inv.explain.opts, answer: inv.explain.ans, obj: objFor(ctx, inv) });
        if (!o) return [];
        return Learn.record(events.map((e) => ({ cls: ctx.cls, subject: ctx.subject, chapter: ctx.chapter, obj: o.id, source: "lab", ...e })));
      } catch (e) {
        return [];
      }
    };
  }
  // Same, for a lab that asks its own questions (the cell builder's label check): a question item in the shape Objectives expects.
  function logItem(ctx, item, ok, hints = 0) {
    if (!ctx || !Learn.ready(ctx.cls)) return [];
    const o = Objectives.forQuestion(ctx.cls, ctx.subject, ctx.chapter, item);
    return o ? Learn.record([{ type: "answer", cls: ctx.cls, subject: ctx.subject, chapter: ctx.chapter, obj: o.id, ok, hints, attempt: 1, source: "lab" }]) : [];
  }

  // ---------- the page ----------
  function view([id, c, subj, ch]) {
    const V = Views._;
    const def = defs[id];
    if (!def) return V.notFound();
    const found = c ? V.findChapter(Number(c), subj, ch) : null;
    const ctx = found ? { cls: Number(c), subject: subj, chapter: ch } : null;
    const back = "#/explore";
    const api = { id, cls: ctx && ctx.cls, subject: ctx && ctx.subject, chapter: ctx && ctx.chapter, ctx, log: logger(ctx), logItem: (item, ok, hints) => logItem(ctx, item, ok, hints) };
    const link = found
      ? `<p class="small vl-for">${t("For")}: <a href="#/chapter/${c}/${subj}/${ch}">${International.srcLabel(c)} · ${esc(found.subj.short || found.subj.name)} · ${esc(found.ch.title)}</a></p>`
      : "";
    return {
      title: t(def.title),
      html: `${V.topbar(t(def.title), back)}
        <div class="vl-intro card"${found ? ` style="--c:${found.subj.color}"` : ""}>
          <p class="vl-obj"><strong>${t("What you can investigate")}</strong><br>${t(def.objective)}</p>${link}
          <p class="small muted">${t("Virtual labs help you understand an idea. They do not replace real practical work or your teacher's safety instructions.")}</p>
        </div>
        <div id="vl-mount"></div>`,
      mount(el) {
        const host = el.querySelector("#vl-mount");
        def.mount(host, api);
        // Arriving from a link: the page starts at its top.
      },
    };
  }
  Object.assign(Views, { lab: view });

  return { register, all, get, forChapter, flow, graph, calc, num, fix, logger, view };
})();
