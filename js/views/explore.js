// Explore (#/explore, spec 7.7): the places for discovery, as areas. An area is shown only when it has something real for
// the learner's class: Physics Lab, Chemistry Lab, Biology Explorer, Maths Studio and World Explorer. Each item says what
// can be investigated and links back to its chapter. The items are the experiments (js/sims.js), the visual Maths games and
// the diagram and timeline games, found by asking the content what it can make for this class. No dead cards, no
// invented content: an area with nothing for this class is left out.

(() => {
  const { D, cls, findChapter, emptyState } = Views._;

  const AREAS = [
    { id: "physics", name: "Physics Lab", sub: "Experiments with light, electricity and motion", icon: "bolt", subjects: ["physics"] },
    { id: "chemistry", name: "Chemistry Lab", sub: "Diagrams of apparatus, reactions and structures", icon: "formula", subjects: ["chemistry"] },
    { id: "biology", name: "Biology Explorer", sub: "Label and explore living things", icon: "target", subjects: ["biology", "science", "sciencepb", "evs"] },
    { id: "maths", name: "Maths Studio", sub: "See and move numbers, shapes and graphs", icon: "formula", subjects: ["maths", "mathspb"] },
    { id: "world", name: "World Explorer", sub: "Maps, places and events in time", icon: "compass", subjects: ["geography", "sst", "sstpb", "history", "historypb", "phc", "polsci", "polscipb"] },
  ];

  // What the learner can investigate with each experiment, and the area it belongs to.
  const SIM = {
    lens: { area: "physics", what: "Move the object along the axis and see where the image forms, and whether it is real or virtual." },
    ohm: { area: "physics", what: "Change the voltage and the resistors, in series or in parallel, and watch the current." },
    pend: { area: "physics", what: "Change the length and the pull of gravity and see how the time period changes." },
    proj: { area: "physics", what: "Change the speed and the angle of a throw and see how far and how high it goes." },
    snell: { area: "physics", what: "Change the angle and the two materials to see light bend, or reflect completely." },
    quad: { area: "maths", what: "Change a, b and c and watch the curve, its roots and its lowest or highest point move." },
  };

  // The visual games: what they let the learner investigate, by game type.
  const GAME_WHAT = {
    balance: "Keep a scale balanced to see why the same thing is done to both sides of an equation.",
    angles: "Estimate angles and work out the missing one in a shape.",
    fractions: "Shade bars and circles to see what a fraction, and equal fractions, look like.",
    numberline: "Place numbers on a line and see how big or small they are next to each other.",
    graphs: "Plot lines and read graphs to see how an equation looks.",
    label: "Put the labels back on a diagram and see how the parts fit together.",
    timeline: "Put events in order and see what came before what.",
  };
  const MATHS_GAMES = ["balance", "angles", "fractions", "numberline", "graphs"];
  const SHOW = 3; // chapters listed on a card; the rest are in Play

  // Subjects of this class that an area could use (their files are loaded for this page).
  function exploreNeeds(c) {
    const want = new Set(AREAS.flatMap((a) => a.subjects));
    const ids = D.subjectsFor(c)
      .filter((s) => want.has(s.id) && D.chapters(c, s.id).length)
      .map((s) => s.id);
    return ids.length ? { cls: c, ids, practice: true, games: true } : null;
  }

  const areaOfSubject = (id) => (AREAS.find((a) => a.subjects.includes(id)) || {}).id;

  // [{ area, key, ic, title, what, color, kind, type, rows: [{ subj, ch }] }]
  function items(c) {
    const out = [];
    const subs = D.subjectsFor(c).filter((s) => D.hasFull(c, s.id));

    // Virtual labs (js/labs/): attached to chapters by id, each opens in its own page with the chapter as its context.
    if (typeof Labs !== "undefined")
      for (const lab of Labs.all()) {
        const rows = [];
        for (const s of subs) for (const ch of D.chapters(c, s.id)) if (lab.chapters.some((x) => x.cls === c && x.subject === s.id && x.chapter === ch.id)) rows.push({ subj: s, ch });
        if (rows.length) out.push({ area: lab.area, key: `lab-${lab.id}`, ic: lab.icon, title: lab.title, what: lab.objective, color: rows[0].subj.color, kind: "lab", type: lab.id, rows });
      }

    // Experiments: attached to chapters by id (js/sims.js).
    for (const id of Sims.ids) {
      const rows = [];
      for (const s of subs) for (const ch of D.chapters(c, s.id)) if ((Sims.chapters[`${c}/${ch.id}`] || []).includes(id)) rows.push({ subj: s, ch });
      if (rows.length) out.push({ area: SIM[id].area, key: `sim-${id}`, ic: "bolt", title: Sims._defs[id].title, what: SIM[id].what, color: rows[0].subj.color, kind: "sim", type: id, rows });
    }

    // Games that can be made from the chapters, by type and area.
    const games = {};
    for (const s of subs) {
      const area = areaOfSubject(s.id);
      if (!area) continue;
      const types = area === "maths" ? [...MATHS_GAMES, "label"] : area === "world" ? ["timeline", "label"] : ["label"];
      for (const type of types) {
        const g = Games.get(type);
        if (!g) continue;
        for (const ch of D.chapters(c, s.id)) {
          let ok = false;
          try {
            ok = g.available(c, s, ch);
          } catch (e) {}
          if (ok) ((games[`${area}/${type}`] = games[`${area}/${type}`] || { area, type, g, rows: [] }).rows.push({ subj: s, ch }));
        }
      }
    }
    for (const x of Object.values(games)) out.push({ area: x.area, key: `game-${x.type}`, ic: x.g.icon, title: x.g.title, what: GAME_WHAT[x.type], color: x.rows[0].subj.color, kind: "game", type: x.type, rows: x.rows });
    return out;
  }

  function card(c, it) {
    const row = (r) => {
      const open = it.kind === "lab"
        ? `<a class="btn primary" href="#/lab/${it.type}/${c}/${r.subj.id}/${r.ch.id}">${icon(it.ic)} ${t("Open lab")}</a>`
        : it.kind === "sim"
        ? `<a class="btn" data-open-sim="${it.type}" href="#/chapter/${c}/${r.subj.id}/${r.ch.id}/notes">${icon("bolt")} ${t("Open experiment")}</a>`
        : `<a class="btn" href="#/play/${c}/${r.subj.id}/${r.ch.id}/${it.type}">${icon("play")} ${t("Play")}</a>`;
      const concept = `<a class="btn" href="#/chapter/${c}/${r.subj.id}/${r.ch.id}">${icon("notes")} ${t("Chapter")}</a>`;
      return `<li class="ex-row"><span class="ex-ch grow"><span class="small muted">${esc(r.subj.short)}</span> ${esc(r.ch.title)}</span>${open}${concept}</li>`;
    };
    const more = it.rows.length - SHOW;
    return `<article class="card explore-item" style="--c:${it.color}" data-explore="${it.key}">
      <div class="row" style="align-items:flex-start"><span class="ti">${icon(it.ic)}</span>
        <div class="grow"><h3 class="ex-title">${t(it.title)}</h3><p class="small muted">${t(it.what)}</p></div></div>
      <ul class="ex-rows">${it.rows.slice(0, SHOW).map(row).join("")}</ul>
      ${more > 0 ? `<p class="tiny muted" style="margin:6px 0 0">${t("and {n} more {n:chapter|chapters}", { n: more })}</p>` : ""}
    </article>`;
  }

  function explore() {
    const c = cls();
    const all = items(c);
    const sections = AREAS.map((a) => ({ a, list: all.filter((x) => x.area === a.id) })).filter((x) => x.list.length);
    const body = sections.length
      ? sections
          .map(
            ({ a, list }) => `<section class="ex-area" id="area-${a.id}" aria-labelledby="area-h-${a.id}">
              <h2 class="block-title ex-h" id="area-h-${a.id}">${icon(a.icon)} ${t(a.name)}</h2>
              <p class="small muted" style="margin:-4px 2px 10px">${t(a.sub)}</p>
              <div class="stack">${list.map((it) => card(c, it)).join("")}</div>
            </section>`
          )
          .join("")
      : emptyState("🔭", t("Experiments and labs for Class {n} are coming soon. Games and lessons are in Play and Learn.", { n: c }));
    return {
      title: t("Explore"),
      html: `${Views._.shellHead(t("Explore"), t("Investigate ideas by trying them. Each one links back to its chapter."), "explore")}
        <div class="explore-main">${body}</div>
        ${sections.length ? `<p class="small muted" style="margin:22px 2px 0">${t("More labs are coming soon.")}</p>` : ""}`,
      mount(el) {
        el.onclick = (e) => {
          const a = e.target.closest("[data-open-sim]");
          if (a) App.openSim = a.dataset.openSim; // the chapter opens this experiment
        };
      },
    };
  }

  Object.assign(Views, { explore, exploreNeeds });
})();
