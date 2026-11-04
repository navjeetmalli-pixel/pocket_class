// Cell builder (Biology): build a plant cell and an animal cell by placing organelles into the cell they belong in. A part in
// the wrong cell is sent back with the reason; every part placed right shows its function. Then a label check: name the part
// that is highlighted.
//
// What is in which cell (school level): both have a cell membrane, cytoplasm, nucleus, mitochondria, vacuoles (one large central
// vacuole in a plant cell, small ones in an animal cell), ribosomes, endoplasmic reticulum and Golgi apparatus. Only the plant
// cell has a cell wall and chloroplasts. Only the animal cell has a centrosome with centrioles (flowering plants have none).
// Classes 8 and below get the first seven parts; Classes 9 and above get all eleven.

(() => {
  // plant / animal: is it found there. min: lowest class that meets it.
  const ORG = [
    { id: "wall", name: "Cell wall", plant: true, animal: false, min: 0, fn: "A rigid outer layer that gives the plant cell its fixed shape and support.", why: "Animal cells have no cell wall. Only a thin, flexible cell membrane surrounds them." },
    { id: "membrane", name: "Cell membrane", plant: true, animal: true, min: 0, fn: "A thin boundary that controls what goes into and out of the cell." },
    { id: "cytoplasm", name: "Cytoplasm", plant: true, animal: true, min: 0, fn: "A jelly-like fluid that holds the other parts. Many reactions happen here." },
    { id: "nucleus", name: "Nucleus", plant: true, animal: true, min: 0, fn: "Holds the DNA and controls what the cell does." },
    { id: "mito", name: "Mitochondria", plant: true, animal: true, min: 0, fn: "Release energy from food (respiration): the powerhouses of the cell." },
    { id: "chloro", name: "Chloroplasts", plant: true, animal: false, min: 0, fn: "Contain chlorophyll and make food by photosynthesis.", why: "Animal cells cannot make food by photosynthesis. They get food by eating." },
    { id: "vacuole", name: "Vacuole", plant: true, animal: true, min: 0, fn: "Stores water, food and wastes. It is one large central vacuole in a plant cell (it keeps the cell firm) and small ones in an animal cell." },
    { id: "ribo", name: "Ribosomes", plant: true, animal: true, min: 9, fn: "Tiny parts that make proteins." },
    { id: "er", name: "Endoplasmic reticulum", plant: true, animal: true, min: 9, fn: "A network of membranes that carries materials. Rough ER has ribosomes on it and helps to make proteins." },
    { id: "golgi", name: "Golgi apparatus", plant: true, animal: true, min: 9, fn: "Packs materials made in the cell and sends them out." },
    { id: "centro", name: "Centrosome", plant: false, animal: true, min: 9, fn: "Contains centrioles that help the cell to divide.", why: "The cells of flowering plants do not have centrioles." },
  ];
  const CELLS = ["plant", "animal"];
  const forClass = (cls) => ORG.filter((o) => !cls || cls >= o.min);
  const truth = (cell, cls) => forClass(cls).filter((o) => o[cell]).map((o) => o.id);
  // Parts found in one cell and not in the other (for the "only here" column).
  const onlyIn = (cell, cls) => forClass(cls).filter((o) => o[cell] && !o[cell === "plant" ? "animal" : "plant"]).map((o) => o.id);
  // Placing a part into a cell: "ok", "again" (already there) or "no" (it does not belong).
  const place = (placed, cell, id, cls) => {
    const o = ORG.find((x) => x.id === id);
    if (!o || (cls && cls < o.min)) return "no";
    if (!o[cell]) return "no";
    return placed.includes(id) ? "again" : "ok";
  };

  const TXT = (x, y, s, anchor = "middle") => `<text class="vl-lab" x="${x}" y="${y}" text-anchor="${anchor}">${esc(t(s))}</text>`;
  // Drawings: [shape svg, label] for each part in each cell (viewBox 300 x 240).
  const D = {
    plant: {
      cytoplasm: () => `<rect class="vl-cyto" x="12" y="12" width="276" height="216" rx="10"/>` + TXT(110, 38, "Cytoplasm"),
      wall: () => `<rect class="vl-wall" x="5" y="5" width="290" height="230" rx="14"/>` + TXT(236, 34, "Cell wall"),
      membrane: () => `<rect class="vl-mem" x="14" y="14" width="272" height="212" rx="9"/>`,
      vacuole: () => `<ellipse class="vl-vac" cx="176" cy="125" rx="52" ry="52"/>` + TXT(176, 129, "Vacuole"),
      nucleus: () => `<circle class="vl-nuc" cx="68" cy="70" r="26"/><circle class="vl-nucleolus" cx="74" cy="64" r="8"/>` + TXT(68, 108, "Nucleus"),
      chloro: () => `<ellipse class="vl-chl" cx="256" cy="60" rx="18" ry="10"/><ellipse class="vl-chl" cx="256" cy="108" rx="18" ry="10"/>` + TXT(256, 82, "Chloroplast"),
      mito: () => `<ellipse class="vl-mit" cx="52" cy="190" rx="17" ry="8" transform="rotate(-20 52 190)"/><ellipse class="vl-mit" cx="100" cy="204" rx="17" ry="8" transform="rotate(15 100 204)"/>` + TXT(76, 222, "Mitochondria"),
      ribo: () => [[40, 132], [53, 143], [38, 152], [60, 127], [50, 158]].map(([x, y]) => `<circle class="vl-rib" cx="${x}" cy="${y}" r="3"/>`).join("") + TXT(28, 172, "Ribosomes", "start"),
      er: () => `<path class="vl-er" d="M96,100 q12,9 0,18 t0,18 t0,18"/>` + TXT(112, 152, "ER", "start"),
      golgi: () => `<path class="vl-gol" d="M240,162 q16,-7 32,0 M240,172 q16,-7 32,0 M240,182 q16,-7 32,0"/>` + TXT(256, 204, "Golgi"),
    },
    animal: {
      cytoplasm: () => `<ellipse class="vl-cyto" cx="150" cy="122" rx="138" ry="106"/>`,
      membrane: () => `<ellipse class="vl-mem" cx="150" cy="122" rx="140" ry="108"/>`,
      vacuole: () => `<circle class="vl-vac" cx="72" cy="78" r="14"/><circle class="vl-vac" cx="236" cy="82" r="10"/>` + TXT(72, 58, "Vacuole"),
      nucleus: () => `<circle class="vl-nuc" cx="150" cy="122" r="34"/><circle class="vl-nucleolus" cx="160" cy="114" r="8"/>` + TXT(150, 142, "Nucleus"),
      mito: () => `<ellipse class="vl-mit" cx="70" cy="180" rx="17" ry="8" transform="rotate(-20 70 180)"/><ellipse class="vl-mit" cx="190" cy="196" rx="17" ry="8" transform="rotate(15 190 196)"/>` + TXT(100, 208, "Mitochondria"),
      ribo: () => [[222, 100], [232, 108], [220, 116], [240, 94], [236, 120]].map(([x, y]) => `<circle class="vl-rib" cx="${x}" cy="${y}" r="3"/>`).join("") + TXT(232, 140, "Ribosomes"),
      er: () => `<path class="vl-er" d="M104,98 q-12,9 0,18 t0,18 t0,18"/>` + TXT(86, 128, "ER", "end"),
      golgi: () => `<path class="vl-gol" d="M212,162 q16,-7 32,0 M212,171 q16,-7 32,0 M212,180 q16,-7 32,0"/>` + TXT(228, 198, "Golgi"),
      centro: () => `<rect class="vl-cen" x="139" y="48" width="22" height="6"/><rect class="vl-cen" x="147" y="40" width="6" height="22"/>` + TXT(150, 32, "Centrosome"),
    },
  };
  Labs.calc.cell = { ORG, truth, onlyIn, place, forClass, drawn: { plant: Object.keys(D.plant), animal: Object.keys(D.animal) } };
  const DRAW_ORDER = ["cytoplasm", "wall", "membrane", "vacuole", "er", "nucleus", "ribo", "golgi", "mito", "chloro", "centro"];

  // The cell drawing with the parts placed so far. opts: { labels: false hides names, hl: part to highlight }.
  function cellSVG(cell, placed, opts = {}) {
    const g = DRAW_ORDER.filter((id) => placed.includes(id) && D[cell][id])
      .map((id) => `<g data-org="${id}" class="vl-org ${opts.hl === id ? "hl" : ""}">${D[cell][id]()}</g>`)
      .join("");
    const empty = placed.length ? "" : cell === "plant" ? `<rect class="vl-empty" x="6" y="6" width="288" height="228" rx="14"/>` : `<ellipse class="vl-empty" cx="150" cy="122" rx="140" ry="108"/>`;
    return `<svg viewBox="0 0 300 240" class="vl-cellsvg ${opts.labels === false ? "vl-nolab" : ""}" aria-hidden="true">${empty}${g}</svg>`;
  }

  function mount(el, api) {
    const cls = api.cls || 0;
    const avail = forClass(cls);
    const S = { sel: null, placed: { plant: [], animal: [] }, miss: { plant: 0, animal: 0 }, done: { plant: false, animal: false }, lc: null };
    let flow;
    const nm = (id) => t(ORG.find((o) => o.id === id).name);
    const need = (c) => truth(c, cls);

    const stage = () => `<div class="vl-cells">
      <div class="vl-parts" role="group" aria-label="${esc(t("Parts. Choose one, then tap the cell it belongs in, or drag it there."))}">${avail.map((o) => `<button type="button" class="vl-part" data-org="${o.id}" aria-pressed="false"><span>${t(o.name)}</span><span class="vl-marks" data-marks></span></button>`).join("")}</div>
      <p class="small muted" data-hint></p>
      <div class="vl-cellgrid">${CELLS.map((c) => `<div class="vl-cellbox"><h4>${t(c === "plant" ? "Plant cell" : "Animal cell")} <span class="small muted" data-prog="${c}"></span></h4>
        <button type="button" class="vl-celltarget" data-cell="${c}"><span data-svg="${c}"></span></button></div>`).join("")}</div>
      <div class="feedback neutral vl-cfb" data-cfb role="status" hidden></div>
      <div class="sim-btns"><button type="button" class="btn" data-again>${icon("reset")} ${t("Start again")}</button></div>
      <div class="vl-lc" data-lc></div></div>`;

    function paint() {
      CELLS.forEach((c) => {
        el.querySelector(`[data-svg="${c}"]`).innerHTML = cellSVG(c, S.placed[c]);
        const n = S.placed[c].length, tot = need(c).length;
        el.querySelector(`[data-prog="${c}"]`).textContent = t("{a} of {b} parts", { a: n, b: tot });
        el.querySelector(`[data-cell="${c}"]`).setAttribute("aria-label", `${t(c === "plant" ? "Plant cell" : "Animal cell")}: ${t("{a} of {b} parts", { a: n, b: tot })}. ${S.sel ? t("Tap to put the {p} here.", { p: nm(S.sel) }) : t("Choose a part first.")}`);
        el.querySelector(`[data-cell="${c}"]`).classList.toggle("vl-target", !!S.sel);
        el.querySelector(`[data-cell="${c}"]`).classList.toggle("vl-complete", S.done[c]);
      });
      el.querySelectorAll("[data-org].vl-part").forEach((b) => {
        const id = b.dataset.org;
        b.setAttribute("aria-pressed", id === S.sel);
        const marks = CELLS.filter((c) => S.placed[c].includes(id)).map((c) => t(c === "plant" ? "plant ✓" : "animal ✓")).join(" ");
        b.querySelector("[data-marks]").textContent = marks;
      });
      el.querySelector("[data-hint]").textContent = S.sel ? t("Now tap the cell where the {p} belongs.", { p: nm(S.sel) }) : t("Tap a part below, then the cell it belongs in. Some parts belong in both cells.");
      flow.live(
        CELLS.map((c) => [t(c === "plant" ? "Plant cell" : "Animal cell"), t("{a} of {b} parts placed, {m} sent back", { a: S.placed[c].length, b: need(c).length, m: S.miss[c] })]),
        t("Plant cell {a} of {b}. Animal cell {c} of {d}.", { a: S.placed.plant.length, b: need("plant").length, c: S.placed.animal.length, d: need("animal").length })
      );
    }

    function say(html, kind) {
      const f = el.querySelector("[data-cfb]");
      f.hidden = false;
      f.className = `feedback ${kind} vl-cfb`;
      f.innerHTML = html;
    }

    function drop(cell, id) {
      if (!flow.predicted) {
        say(esc(t("Make your prediction in step 1 first.")), "neutral");
        flow.addRun({}); // shows the same message and moves focus to the prediction
        return;
      }
      const o = ORG.find((x) => x.id === id);
      const cname = t(cell === "plant" ? "plant cell" : "animal cell");
      const r = place(S.placed[cell], cell, id, cls);
      if (r === "ok") {
        S.placed[cell].push(id);
        say(`<div class="h">✓ ${t("{p} belongs in the {c}.", { p: nm(id), c: cname })}</div>${esc(t(o.fn))}`, "good");
        if (!S.done[cell] && need(cell).every((x) => S.placed[cell].includes(x))) {
          S.done[cell] = true;
          flow.addRun({
            cell: t(cell === "plant" ? "Plant cell" : "Animal cell"),
            placed: S.placed[cell].length,
            miss: S.miss[cell],
            only: onlyIn(cell, cls).map(nm).join(", ") || "—",
          });
          say(`<div class="h">✓ ${t("The {c} is complete.", { c: cname })}</div>${esc(t(o.fn))} ${S.done.plant && S.done.animal ? t("Both cells are built. Compare them in step 3.") : t("Now build the other cell.")}`, "good");
          lcOffer();
        }
      } else if (r === "again") say(`${t("The {p} is already in the {c}.", { p: nm(id), c: cname })}`, "neutral");
      else {
        S.miss[cell]++;
        say(`<div class="h">✗ ${t("The {p} does not belong in the {c}.", { p: nm(id), c: cname })}</div>${esc(t(o.why || "This part is not found in this cell."))}`, "bad");
      }
      paint();
    }

    // ----- label check -----
    function lcOffer() {
      const box = el.querySelector("[data-lc]");
      if (S.lc) return;
      box.innerHTML = `<div class="card vl-lccard"><strong>${t("Label check")}</strong><p class="small">${t("Name the highlighted part in your finished cell.")}</p><button type="button" class="btn primary" data-lcstart>${t("Start the label check")}</button></div>`;
    }
    function lcStart() {
      const built = CELLS.filter((c) => S.done[c]);
      const pool = avail.filter((o) => built.some((c) => S.placed[c].includes(o.id))).filter((o) => o.id !== "cytoplasm" && o.id !== "membrane");
      const qs = [...pool].sort((a, b) => ["nucleus", "mito", "chloro", "vacuole", "wall", "golgi", "er", "ribo", "centro"].indexOf(a.id) - ["nucleus", "mito", "chloro", "vacuole", "wall", "golgi", "er", "ribo", "centro"].indexOf(b.id)).slice(0, 5);
      S.lc = { qs, i: 0, score: 0, answered: false, built };
      lcShow();
    }
    function lcShow() {
      const L = S.lc, box = el.querySelector("[data-lc]");
      if (L.i >= L.qs.length) {
        const total = L.qs.length;
        box.innerHTML = `<div class="card vl-lccard"><strong>${t("Label check")}</strong><p>${t("You named {a} of {b} parts.", { a: L.score, b: total })}</p></div>`;
        L.finished = true;
        flow.say(t("You named {a} of {b} parts.", { a: L.score, b: total }));
        return;
      }
      const q = L.qs[L.i];
      const cell = L.built.find((c) => S.placed[c].includes(q.id));
      const others = avail.filter((o) => o.id !== q.id && o[cell]);
      const pick = [q, others[(L.i * 2) % others.length], others[(L.i * 2 + 3) % others.length]].filter((x, i, a) => a.indexOf(x) === i);
      while (pick.length < 3) pick.push(others.find((o) => !pick.includes(o)));
      pick.sort((a, b) => ((a.id.charCodeAt(0) * 7 + L.i) % 5) - ((b.id.charCodeAt(0) * 7 + L.i) % 5) || a.id.localeCompare(b.id));
      L.cur = { q, pick };
      box.innerHTML = `<div class="card vl-lccard" data-target="${q.id}"><strong>${t("Label check")} ${L.i + 1} / ${L.qs.length}</strong>
        <div class="vl-lcsvg">${cellSVG(cell, S.placed[cell], { labels: false, hl: q.id })}</div>
        <p>${t("What is the highlighted part?")}</p>
        <div class="sim-opts" role="group">${pick.map((o) => `<button type="button" class="option" data-lcopt="${o.id}"><span>${t(o.name)}</span></button>`).join("")}</div>
        <div role="status" data-lcfb></div></div>`;
      box.querySelector("[data-lcopt]").focus({ preventScroll: true });
    }
    function lcAnswer(id) {
      const L = S.lc;
      if (L.answered) return;
      L.answered = true;
      const { q, pick } = L.cur;
      const ok = id === q.id;
      if (ok) L.score++;
      const box = el.querySelector("[data-lc]");
      box.querySelectorAll("[data-lcopt]").forEach((b) => {
        b.classList.toggle("correct", b.dataset.lcopt === q.id);
        b.classList.toggle("wrong", b.dataset.lcopt === id && !ok);
        b.disabled = true;
      });
      box.querySelector("[data-lcfb]").innerHTML = `<div class="feedback ${ok ? "good" : "neutral"}"><div class="h">${ok ? t("Yes.") : t("It is the {p}.", { p: nm(q.id) })}</div>${esc(t(q.fn))}</div><button type="button" class="btn primary" data-lcnext>${L.i + 1 < L.qs.length ? t("Next") : t("Finish")}</button>`;
      api.logItem({ q: `${nm(q.id)} ${t(q.fn)} ${t("Label check")}`, explain: t(q.fn), options: pick.map((o) => nm(o.id)), answer: pick.indexOf(q) }, ok);
      box.querySelector("[data-lcnext]").focus({ preventScroll: true });
    }

    function reset() {
      S.sel = null;
      S.placed = { plant: [], animal: [] };
      S.miss = { plant: 0, animal: 0 };
      S.done = { plant: false, animal: false };
      S.lc = null;
      el.querySelector("[data-lc]").innerHTML = "";
      const f = el.querySelector("[data-cfb]");
      f.hidden = true;
    }

    flow = Labs.flow(el, api, {
      assumptions: "These are simple diagrams of typical cells at school level. Real cells are different shapes and sizes, and not drawn to scale. Cells of different tissues have different numbers of each part.",
      columns: [
        { key: "cell", label: "Cell", var: true },
        { key: "placed", label: "Parts placed", d: 0 },
        { key: "miss", label: "Parts sent back", d: 0 },
        { key: "only", label: "Found only in this cell" },
      ],
      investigations: [
        {
          id: "cells",
          title: "Plant cell and animal cell",
          question: "Which parts will you find in a plant cell but NOT in an animal cell?",
          predict: { opts: ["A cell wall and chloroplasts", "A nucleus and mitochondria", "A cell membrane and cytoplasm"], ans: 0 },
          vary: "cell",
          held: ["The same list of parts to choose from"],
          go: "Build the plant cell and the animal cell. Put each part in a cell it belongs in. A part in the wrong cell is sent back with the reason.",
          explain: {
            q: "Which conclusion do the two cells you built support?",
            opts: ["An animal cell has everything a plant cell has, and more", "Both cells have a membrane, cytoplasm, a nucleus and mitochondria; only the plant cell has a cell wall and chloroplasts", "A plant cell has no mitochondria, because chloroplasts supply its energy"],
            ans: 1,
            why: "Both kinds of cell have a membrane, cytoplasm, a nucleus, mitochondria and vacuoles. The cell wall and the chloroplasts are found only in plant cells. Plant cells also respire, so they have mitochondria as well as chloroplasts.",
          },
          graph: null,
        },
      ],
      extra: () => (S.lc && S.lc.finished ? { labelCheck: { score: S.lc.score, total: S.lc.qs.length } } : {}),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        slot.addEventListener("click", (e) => {
          const chip = e.target.closest(".vl-part");
          if (chip && !chip.dataset.dragged) {
            S.sel = S.sel === chip.dataset.org ? null : chip.dataset.org;
            return paint();
          }
          const cb = e.target.closest("[data-cell]");
          if (cb) {
            if (!S.sel) {
              say(esc(t("Choose a part first.")), "neutral");
              return;
            }
            const id = S.sel;
            S.sel = null;
            return drop(cb.dataset.cell, id);
          }
          if (e.target.closest("[data-again]")) {
            reset();
            flow.reset();
            paint();
          } else if (e.target.closest("[data-lcstart]")) lcStart();
          else if (e.target.closest("[data-lcopt]")) lcAnswer(e.target.closest("[data-lcopt]").dataset.lcopt);
          else if (e.target.closest("[data-lcnext]")) {
            S.lc.i++;
            S.lc.answered = false;
            lcShow();
          }
        });
        Games.draggable(slot, ".vl-part", {
          onDrop(chip, els) {
            const c = els.find((x) => x.matches && x.matches("[data-cell]"));
            if (c) {
              S.sel = null;
              drop(c.dataset.cell, chip.dataset.org);
            }
          },
          onTap() {},
          over(els) {
            slot.querySelectorAll("[data-cell]").forEach((b) => b.classList.toggle("vl-over", els.includes(b)));
          },
        });
      },
      onInvestigation() {
        reset();
        paint();
      },
    });
  }

  Labs.register("cell", {
    title: "Cell builder",
    area: "biology",
    icon: "target",
    objective: "Build a plant cell and an animal cell by placing the parts where they belong. See what each part does, which parts the two cells share and which are found in only one, then name the parts.",
    chapters: [
      { cls: 8, subject: "science", chapter: "invisible-living-world" },
      { cls: 9, subject: "science", chapter: "cell-the-building-block-of-life" },
      { cls: 9, subject: "sciencepb", chapter: "fundamental-unit-of-life" },
      { cls: 11, subject: "biology", chapter: "cell-the-unit-of-life" },
    ],
    mount,
  });
})();
