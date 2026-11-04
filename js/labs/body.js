// Body systems explorer (Biology): a plain, neutral outline of a person with one body system at a time (digestive, respiratory,
// circulatory, excretory, nervous). Tap an organ to see its name and job. Then follow the journeys in order (food through the
// digestive system, air through the breathing system, blood round the body) and match each organ with its job. The reproductive
// system is not part of this lab (the syllabus covers it elsewhere), and the skeleton and muscles are not shown.
//
//   Food:  mouth -> oesophagus -> stomach -> small intestine -> large intestine -> rectum and anus.
//          The liver and the pancreas help digestion, but food does not pass through them.
//   Air:   nose -> windpipe (trachea) -> bronchi -> lungs.
//   Blood: lungs -> heart -> body -> heart (it passes through the heart twice on each round, so this is the double circulation).
//
// Assumptions: a simplified outline, not to scale; the organs are drawn flat and in school-diagram positions; the heart, liver and
// stomach are placed as in a person seen from the front (the liver on the person's right, which is the left of the picture).

(() => {
  const SYS = {
    digestive: { name: "Digestive system", job: "Breaks food down into small substances that dissolve, and takes them into the blood.", link: "The digested food passes into the blood, and the circulatory system carries it to every cell." },
    respiratory: { name: "Respiratory system", job: "Brings oxygen into the body and removes carbon dioxide.", link: "Oxygen passes into the blood in the lungs, and the circulatory system carries it to every cell." },
    circulatory: { name: "Circulatory system", job: "Carries oxygen, digested food and wastes around the body in the blood.", link: "It joins the other systems: it carries oxygen from the lungs, digested food from the small intestine, and wastes to the kidneys." },
    excretory: { name: "Excretory system", job: "Removes wastes made by the cells, and extra water, from the blood.", link: "The kidneys clean the blood that the circulatory system brings. The lungs (carbon dioxide) and the skin (sweat) also remove wastes." },
    nervous: { name: "Nervous system", job: "Collects messages from the senses, decides what to do and sends messages to the muscles.", link: "It controls the other systems, for example how fast the heart beats and how fast we breathe." },
  };
  const SYSTEMS = Object.keys(SYS);

  // pt: where a numbered step of a journey is drawn (viewBox 240 x 430). shape: svg drawn for the organ (class bd-line for tubes).
  const ORGANS = [
    // ----- digestive -----
    { id: "mouth", sys: "digestive", name: "Mouth", fn: "Teeth chew the food and saliva wets it and starts to digest starch.", pt: [120, 54], shape: `<ellipse class="bd-fill" cx="120" cy="55" rx="11" ry="5"/>` },
    { id: "oesophagus", sys: "digestive", name: "Oesophagus (food pipe)", fn: "A muscular tube that squeezes the food down to the stomach.", pt: [122, 106], shape: `<path class="bd-line" d="M120,78 C120,100 124,118 130,134"/>` },
    { id: "stomach", sys: "digestive", name: "Stomach", fn: "Churns the food with acid and juices, which start to digest proteins.", pt: [146, 152], shape: `<path class="bd-fill" d="M124,134 C140,126 164,134 160,156 C157,172 136,174 130,162 C126,154 118,142 124,134Z"/>` },
    { id: "liver", sys: "digestive", name: "Liver", fn: "Makes bile, which helps to digest fats.", off: "Food does not pass through the liver. It makes bile, which flows into the small intestine.", pt: [100, 144], shape: `<path class="bd-fill" d="M78,134 C94,124 116,126 124,134 L122,154 C108,162 90,160 80,150Z"/>` },
    { id: "pancreas", sys: "digestive", name: "Pancreas", fn: "Makes juices that digest carbohydrates, proteins and fats in the small intestine.", off: "Food does not pass through the pancreas. It makes juices that flow into the small intestine.", pt: [131, 181], shape: `<path class="bd-fill" d="M110,178 C124,172 144,174 152,180 C144,186 124,186 110,182Z"/>` },
    { id: "sintest", sys: "digestive", name: "Small intestine", fn: "Digestion is finished here, and the digested food passes into the blood.", pt: [120, 212], shape: `<path class="bd-line" d="M134,170 C134,184 106,188 98,200 H142 C147,200 147,208 142,208 H98 C93,208 93,216 98,216 H142 C147,216 147,224 142,224 H98"/>` },
    { id: "lintest", sys: "digestive", name: "Large intestine", fn: "Takes water from the leftover food and makes solid waste.", pt: [86, 214], shape: `<path class="bd-line bd-wide" d="M86,232 V196 Q86,190 92,190 H148 Q154,190 154,196 V232"/>` },
    { id: "rectum", sys: "digestive", name: "Rectum and anus", fn: "Store the solid waste and let it out of the body.", pt: [130, 250], shape: `<path class="bd-line" d="M154,232 Q154,246 134,248 L122,252"/><circle class="bd-fill" cx="120" cy="255" r="3.5"/>` },
    // ----- respiratory -----
    { id: "nose", sys: "respiratory", name: "Nose", fn: "Air goes in here. The nose warms, cleans and moistens the air.", pt: [120, 47], shape: `<ellipse class="bd-fill" cx="120" cy="47" rx="5" ry="8"/>` },
    { id: "trachea", sys: "respiratory", name: "Windpipe (trachea)", fn: "A tube, held open by rings of cartilage, that carries air to the lungs.", pt: [120, 98], shape: `<path class="bd-line bd-rings" d="M120,70 V120"/>` },
    { id: "bronchi", sys: "respiratory", name: "Bronchi", fn: "Two tubes, one to each lung, that divide into smaller and smaller tubes.", pt: [120, 130], shape: `<path class="bd-line" d="M120,120 L100,140 M120,120 L140,140"/>` },
    { id: "lungs", sys: "respiratory", name: "Lungs", fn: "Oxygen passes into the blood and carbon dioxide passes out, through tiny air sacs.", pt: [98, 152], shape: `<rect class="bd-hit" x="110" y="142" width="20" height="44"/><path class="bd-fill" d="M114,114 C100,110 84,130 82,156 C80,178 92,188 108,186 C116,185 118,172 118,152Z"/><path class="bd-fill" d="M126,114 C140,110 158,130 158,154 C158,176 148,186 134,184 C126,183 122,172 122,152Z"/>` },
    { id: "diaphragm", sys: "respiratory", name: "Diaphragm", fn: "A sheet of muscle under the lungs. It moves down to draw air in and up to push air out.", off: "Air does not pass through the diaphragm. It is a muscle that helps us breathe.", pt: [120, 186], shape: `<path class="bd-line bd-wide" d="M74,198 Q120,170 166,198"/>` },
    // ----- circulatory -----
    { id: "heart", sys: "circulatory", name: "Heart", fn: "A muscular pump that pushes the blood round the body.", pt: [130, 158], shape: `<path class="bd-fill" d="M130,176 C112,164 108,148 119,142 C125,139 130,143 130,147 C130,143 135,139 141,142 C152,148 148,164 130,176Z"/>` },
    { id: "arteries", sys: "circulatory", name: "Arteries", fn: "Carry blood away from the heart. They have thick, strong walls.", pt: [47, 150], shape: `<path class="bd-line bd-art" d="M130,142 C130,118 126,104 120,90 V70 M126,102 C100,100 70,100 47,106 V236 M134,102 C160,100 170,100 193,106 V236 M124,176 V236 C124,244 108,248 96,258 V412 M132,176 V236 C132,244 140,248 144,258 V412"/>` },
    { id: "veins", sys: "circulatory", name: "Veins", fn: "Carry blood back to the heart. They have valves that stop the blood flowing backwards.", pt: [56, 150], shape: `<path class="bd-line bd-vein" d="M138,142 C138,118 132,104 126,92 V72 M132,110 C106,108 76,108 56,114 V236 M140,110 C164,108 176,108 186,114 V236 M118,176 V232 C118,240 110,246 106,258 V412 M138,176 V232 C138,240 146,246 152,258 V412"/>` },
    { id: "capillaries", sys: "circulatory", name: "Capillaries", fn: "The thinnest blood vessels. Oxygen, food and wastes pass between the blood and the cells here.", pt: [47, 246], shape: `<circle class="bd-ring" cx="47" cy="246" r="12"/><path class="bd-line bd-thin" d="M38,240 L56,252 M56,240 L38,252 M47,235 V257 M36,246 H58"/>` },
    // ----- excretory -----
    { id: "kidneys", sys: "excretory", name: "Kidneys", fn: "Clean the blood: they remove wastes and extra water and make urine.", pt: [96, 160], shape: `<rect class="bd-hit" x="108" y="146" width="24" height="24"/><ellipse class="bd-fill" cx="96" cy="160" rx="8" ry="14" transform="rotate(-12 96 160)"/><ellipse class="bd-fill" cx="144" cy="156" rx="8" ry="14" transform="rotate(12 144 156)"/>` },
    { id: "ureters", sys: "excretory", name: "Ureters", fn: "Two tubes that carry urine from the kidneys to the bladder.", pt: [106, 202], shape: `<path class="bd-line bd-thin" d="M98,174 C100,200 110,216 116,228 M142,170 C140,198 130,216 124,228"/>` },
    { id: "bladder", sys: "excretory", name: "Urinary bladder", fn: "Stores the urine until it is passed out of the body.", pt: [120, 238], shape: `<ellipse class="bd-fill" cx="120" cy="239" rx="14" ry="11"/>` },
    { id: "urethra", sys: "excretory", name: "Urethra", fn: "The tube that carries urine out of the body.", pt: [120, 257], shape: `<path class="bd-line" d="M120,250 V262"/>` },
    // ----- nervous -----
    { id: "brain", sys: "nervous", name: "Brain", fn: "The control centre. We think, remember and feel with it, and it sends messages to the body.", pt: [120, 38], shape: `<ellipse class="bd-fill" cx="120" cy="38" rx="21" ry="16"/><path class="bd-fold" d="M107,34 q6,-6 12,0 t13,0 M107,44 q6,-6 12,0 t13,0"/>` },
    { id: "cord", sys: "nervous", name: "Spinal cord", fn: "Carries messages between the brain and the rest of the body. The backbone protects it.", pt: [120, 150], shape: `<path class="bd-line bd-wide" d="M120,70 V250"/>` },
    { id: "nerves", sys: "nervous", name: "Nerves", fn: "Carry messages from the sense organs to the brain and spinal cord, and from them to the muscles.", pt: [47, 170], shape: `<path class="bd-line bd-thin" d="M120,98 C90,98 60,100 47,108 V240 M120,98 C150,98 180,100 193,108 V240 M120,250 C110,254 100,256 96,264 V404 M120,250 C130,254 140,256 144,264 V404"/>` },
  ];
  // The faint lungs shown behind the circulatory layer so that the blood journey can start there.
  const GHOST = { circulatory: ["lungs"] };
  // The body is a pseudo-stop of the blood journey: the capillaries in the organs and tissues.
  const BODY = { id: "body", name: "Body organs", fn: "Blood gives oxygen and digested food to the cells and takes carbon dioxide and wastes away.", pt: [47, 246] };

  const stopName = (id) => (id === "body" ? BODY.name : ORGANS.find((o) => o.id === id).name);
  const JOURNEYS = {
    food: {
      name: "Journey of food",
      sys: "digestive",
      steps: ["mouth", "oesophagus", "stomach", "sintest", "lintest", "rectum"],
      options: ["mouth", "oesophagus", "stomach", "liver", "pancreas", "sintest", "lintest", "rectum"],
      start: "A mouthful of food is taken in. Where does it go first?",
      next: "The food is in the {x}. Where does it go next?",
      done: "The food has been through the whole digestive system. The digested food went into the blood in the small intestine, and the waste left through the rectum and anus.",
    },
    air: {
      name: "Journey of air",
      sys: "respiratory",
      steps: ["nose", "trachea", "bronchi", "lungs"],
      options: ["nose", "trachea", "bronchi", "lungs", "diaphragm"],
      start: "A breath of air is taken in. Where does it go first?",
      next: "The air is in the {x}. Where does it go next?",
      done: "The air has reached the lungs. There, oxygen passes into the blood and carbon dioxide passes out of it, and the air is breathed out.",
    },
    blood: {
      name: "Journey of blood",
      sys: "circulatory",
      steps: ["lungs", "heart", "body", "heart"],
      options: ["lungs", "heart", "body"],
      start: "Blood with little oxygen needs to pick up more. Where does it go first?",
      next: "The blood is in the {x}. Where does it go next?",
      done: "The blood has been round the body once: lungs, heart, body, heart. It passed through the heart twice, and it goes on to the lungs again.",
      says: [
        "Blood picks up oxygen from the air in the lungs and gives out carbon dioxide.",
        "The heart pumps the oxygen-rich blood out to the body through the arteries.",
        "The cells use the oxygen. The blood picks up carbon dioxide and wastes and goes back with little oxygen.",
        "The blood returns to the heart through the veins. The heart pumps it to the lungs again.",
      ],
    },
  };
  const JIDS = Object.keys(JOURNEYS);

  // The jobs are matched to organs in a fixed order that is never the organ's own place (rotated by half).
  const jobOrder = (organs) => organs.map((_, i) => organs[(i + Math.floor(organs.length / 2)) % organs.length]);
  const organsOf = (sys) => ORGANS.filter((o) => o.sys === sys);

  // What goes wrong when the learner taps `chosen` while the journey is at step i:
  // "passed" (already been there), "skip" (a later stop: too soon), "off" (not on the route at all).
  function judgeStep(jid, i, chosen) {
    const steps = JOURNEYS[jid].steps;
    if (chosen === steps[i]) return "ok";
    if (steps.slice(0, i).includes(chosen)) return "passed";
    if (steps.slice(i + 1).includes(chosen)) return "skip";
    return "off";
  }

  const ASSUME = "This is a simple outline for learning, not a drawing to scale. Organs are drawn flat and in the places that school diagrams use, and their sizes and shapes are simplified. The skeleton, muscles, skin and the reproductive system are not shown.";
  const INVS = [
    {
      id: "journey",
      mode: "journey",
      columns: [
        { key: "journey", label: "Journey", var: true },
        { key: "steps", label: "Steps", d: 0 },
        { key: "mistakes", label: "Wrong taps", d: 0 },
        { key: "route", label: "Route" },
      ],
      title: "Follow the journeys",
      question: "In what order does a mouthful of food pass through the digestive system?",
      predict: {
        opts: ["Mouth, oesophagus, stomach, small intestine, large intestine", "Mouth, stomach, oesophagus, large intestine, small intestine", "Mouth, oesophagus, liver, stomach, small intestine"],
        ans: 0,
      },
      vary: "journey",
      held: ["The body outline", "The organs in each system"],
      go: "Choose a journey. At each step tap the organ that comes next. Do at least two different journeys.",
      explain: {
        q: "What do your journeys show?",
        opts: [
          "Each journey follows one fixed route, in order. Food and air travel along tubes, and blood goes round in a circuit that passes through the heart twice: lungs, heart, body, heart",
          "Food can reach the stomach before the oesophagus",
          "Blood goes from the heart to the body and never comes back to the heart",
        ],
        ans: 0,
        why: "Food goes mouth, oesophagus, stomach, small intestine, large intestine and out through the rectum and anus. The liver and pancreas help digestion, but food does not pass through them. Air goes nose, windpipe, bronchi and lungs. Blood goes lungs, heart, body, heart: it passes through the heart twice on each round, picking up oxygen in the lungs and giving it to the body.",
      },
      graph: { x: "run", y: "mistakes" },
    },
    {
      id: "match",
      mode: "match",
      columns: [
        { key: "system", label: "System", var: true },
        { key: "pairs", label: "Organs matched", d: 0 },
        { key: "wrong", label: "Wrong tries", d: 0 },
      ],
      title: "Match organs and jobs",
      question: "Does every organ in a body system have its own job?",
      predict: {
        opts: ["Yes: each organ has its own job, and together they do the work of the system", "No: all the organs in a system do the same job", "No: organs work alone and do not depend on each other"],
        ans: 0,
      },
      vary: "system",
      held: ["The organs in each system"],
      go: "Choose a system with the tabs above the body. Tap an organ, then tap its job. Do at least two systems.",
      explain: {
        q: "What do your matches show?",
        opts: [
          "Each organ has its own job, and the organs of a system work together to do one big job",
          "Every organ in a system does the same job",
          "The body systems work separately and never help each other",
        ],
        ans: 0,
        why: "A body system is a team of organs. In the digestive system the mouth chews, the stomach churns and the small intestine absorbs. The systems also help one another: the lungs bring in oxygen, the digestive system brings in food, and the circulatory system carries both to every cell.",
      },
      graph: { x: "run", y: "wrong" },
    },
  ];

  Labs.calc.body = { SYS, SYSTEMS, ORGANS, BODY, JOURNEYS, JIDS, GHOST, INVS, ASSUME, organsOf, jobOrder, judgeStep, stopName };

  const START_LAYER = {
    "our-teeth-and-digestion": "digestive",
    "nutrition-in-animals": "digestive",
    "life-processes-in-animals": "digestive",
    "life-processes": "digestive",
    "breathing-and-the-heart": "respiratory",
    "respiration-in-organisms": "respiratory",
    "breathing-and-exchange-of-gases": "respiratory",
    "transportation-in-animals-and-plants": "circulatory",
    "body-fluids-and-circulation": "circulatory",
    "excretory-products-and-their-elimination": "excretory",
    "control-and-coordination": "nervous",
    "neural-control-and-coordination": "nervous",
  };

  const BODY_SVG = `<g class="bd-body" aria-hidden="true"><circle cx="120" cy="42" r="28"/><rect x="108" y="66" width="24" height="22" rx="8"/><path d="M64,90 Q64,84 74,84 H166 Q176,84 176,90 V240 Q176,264 150,264 H90 Q64,264 64,240Z"/><rect x="36" y="88" width="22" height="166" rx="11"/><rect x="182" y="88" width="22" height="166" rx="11"/><rect x="76" y="252" width="40" height="170" rx="18"/><rect x="124" y="252" width="40" height="170" rx="18"/></g>`;

  function mount(el, api) {
    const S = { layer: START_LAYER[api.chapter] || "digestive", org: null, jr: {}, jid: "food", match: {}, sel: null };
    let flow = null;
    const oname = (id) => t(stopName(id));
    const O = (id) => ORGANS.find((o) => o.id === id);
    const mode = () => (flow && flow.inv ? flow.inv.mode : INVS[0].mode);
    const jstate = (j) => (S.jr[j] = S.jr[j] || { i: 0, wrong: 0, done: false, recorded: false });
    const mstate = (s) => (S.match[s] = S.match[s] || { done: [], wrong: 0, recorded: false });

    el.innerHTML = `<div class="card bd-card">
        <h3 class="fw-h">${icon("target")} ${t("Explore the body")}</h3>
        <div class="bd-tabs" role="radiogroup" aria-label="${esc(t("Choose a body system"))}">${SYSTEMS.map((s) => `<button type="button" class="option bd-tab" role="radio" aria-checked="false" data-layer="${s}"><span>${t(SYS[s].name)}</span></button>`).join("")}</div>
        <p class="small" data-job></p>
        <div class="bd-wrap"><svg viewBox="0 0 240 430" class="bd-svg" role="group" aria-label="${esc(t("Outline of the human body with the organs of one system. Tap an organ to see its job."))}" data-svg></svg>
          <div class="bd-side">
            <div class="feedback neutral bd-info" data-info role="status" aria-live="polite"></div>
            <div class="vl-parts" role="group" aria-label="${esc(t("Organs of this system"))}" data-organs></div>
            <p class="small muted" data-link></p>
          </div></div>
      </div>
      <div data-flowhost></div>`;
    const $ = (s) => el.querySelector(s);

    // ----- the picture -----
    function badges() {
      const route = [];
      const j = JOURNEYS[S.jid];
      const st = jstate(S.jid);
      if (mode() === "journey" && S.layer === j.sys) for (let i = 0; i < st.i; i++) route.push(j.steps[i]);
      const by = {};
      route.forEach((id, i) => (by[id] = (by[id] || []).concat(i + 1)));
      const pts = route.map((id) => (id === "body" ? BODY.pt : O(id).pt));
      const line = pts.length > 1 ? `<polyline class="bd-route" points="${pts.map((p) => p.join(",")).join(" ")}"/>` : "";
      const dots = Object.keys(by)
        .map((id) => {
          const p = id === "body" ? BODY.pt : O(id).pt;
          const label = by[id].join(",");
          return `<g class="bd-badge" aria-hidden="true"><circle cx="${p[0]}" cy="${p[1]}" r="${label.length > 1 ? 11 : 9}"/><text x="${p[0]}" y="${p[1] + 4}" text-anchor="middle">${label}</text></g>`;
        })
        .join("");
      return line + dots;
    }
    function paintSVG() {
      const ghost = (GHOST[S.layer] || []).map((id) => `<g class="bd-ghost" aria-hidden="true">${O(id).shape}</g>`).join("");
      const organs = organsOf(S.layer)
        .map((o) => `<g class="bd-organ bd-s-${o.sys} ${S.org === o.id ? "sel" : ""}" data-organ="${o.id}" tabindex="0" role="button" aria-label="${esc(t(o.name))}" aria-pressed="${S.org === o.id}">${o.shape}</g>`)
        .join("");
      $("[data-svg]").innerHTML = BODY_SVG + ghost + organs + badges();
    }
    function paintInfo() {
      const o = S.org ? O(S.org) : null;
      $("[data-info]").innerHTML = o
        ? `<div class="h">${esc(t(o.name))}</div><p>${esc(t(o.fn))}</p><p class="small muted">${esc(t(SYS[o.sys].name))}</p>`
        : `<p>${esc(t("Tap an organ on the body, or choose one from the list, to see its name and its job."))}</p>`;
    }
    function paintLayer() {
      el.querySelectorAll("[data-layer]").forEach((b) => {
        const on = b.dataset.layer === S.layer;
        b.setAttribute("aria-checked", on);
        b.classList.toggle("selected", on);
        b.tabIndex = on ? 0 : -1;
      });
      $("[data-job]").textContent = t(SYS[S.layer].job);
      $("[data-link]").textContent = t(SYS[S.layer].link);
      $("[data-organs]").innerHTML = organsOf(S.layer)
        .map((o) => `<button type="button" class="vl-part bd-chip" data-pickorgan="${o.id}" aria-pressed="${S.org === o.id}"><span>${esc(t(o.name))}</span></button>`)
        .join("");
      paintSVG();
      paintInfo();
    }
    function setLayer(s, keepOrgan) {
      S.layer = s;
      if (!keepOrgan) S.org = null;
      paintLayer();
      stagePaint();
    }
    function selectOrgan(id) {
      const o = O(id);
      if (!o) return;
      S.org = id;
      paintSVG();
      paintInfo();
      el.querySelectorAll("[data-pickorgan]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.pickorgan === id));
    }

    el.addEventListener("click", (e) => {
      const l = e.target.closest("[data-layer]");
      if (l) return setLayer(l.dataset.layer);
      const g = e.target.closest("[data-organ]");
      if (g) return selectOrgan(g.dataset.organ);
      const c = e.target.closest("[data-pickorgan]");
      if (c) {
        selectOrgan(c.dataset.pickorgan);
        const again = el.querySelector(`[data-pickorgan="${c.dataset.pickorgan}"]`);
        if (again) again.focus({ preventScroll: true });
      }
    });
    el.addEventListener("keydown", (e) => {
      const g = e.target.closest && e.target.closest("[data-organ]");
      if (g && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        return selectOrgan(g.dataset.organ);
      }
      const r = e.target.closest && e.target.closest("[data-layer]");
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (r && d) {
        const i = SYSTEMS.indexOf(r.dataset.layer);
        const n = SYSTEMS[(i + d + SYSTEMS.length) % SYSTEMS.length];
        setLayer(n);
        el.querySelector(`[data-layer="${n}"]`).focus();
        e.preventDefault();
      }
    });

    // ----- the stage inside the experiment: journeys and matching -----
    const stageHTML = () => `<div class="bd-stage">
      <div data-pane="journey">
        <div class="sim-btns" role="group" aria-label="${esc(t("Choose a journey"))}">${JIDS.map((j) => `<button type="button" class="btn" data-jid="${j}" aria-pressed="false">${t(JOURNEYS[j].name)}<span class="vl-marks" data-jdone="${j}"></span></button>`).join("")}</div>
        <p class="vl-q" data-jq></p>
        <div class="vl-parts" role="group" aria-label="${esc(t("Where does it go next?"))}" data-jopts></div>
        <ol class="bd-done" data-jdone-list aria-label="${esc(t("The journey so far"))}"></ol>
        <div class="feedback neutral vl-cfb" data-jfb role="status" hidden></div>
        <div class="sim-btns"><button type="button" class="btn" data-jreset>${icon("reset")} ${t("Start this journey again")}</button></div>
      </div>
      <div data-pane="match">
        <p class="vl-q" data-mq></p>
        <div class="bd-match"><div class="bd-col" role="group" aria-label="${esc(t("Organs"))}" data-morgans></div><div class="bd-col" role="group" aria-label="${esc(t("Jobs"))}" data-mjobs></div></div>
        <div class="feedback neutral vl-cfb" data-mfb role="status" hidden></div>
        <div class="sim-btns"><button type="button" class="btn" data-mreset>${icon("reset")} ${t("Start this system again")}</button></div>
      </div></div>`;

    function say(sel, html, kind) {
      const f = $(sel);
      f.hidden = false;
      f.className = `feedback ${kind} vl-cfb`;
      f.innerHTML = html;
    }

    // ----- journeys -----
    function jpaint() {
      const j = JOURNEYS[S.jid];
      const st = jstate(S.jid);
      el.querySelectorAll("[data-jid]").forEach((b) => {
        b.setAttribute("aria-pressed", b.dataset.jid === S.jid);
        b.classList.toggle("primary", b.dataset.jid === S.jid);
        b.querySelector("[data-jdone]").textContent = jstate(b.dataset.jid).done ? "✓" : "";
      });
      $("[data-jq]").textContent = st.done ? t(j.done) : st.i === 0 ? t(j.start) : t(j.next, { x: oname(j.steps[st.i - 1]) });
      const opts = j.options;
      $("[data-jopts]").innerHTML = opts.map((id) => `<button type="button" class="vl-part" data-jstop="${id}" ${st.done ? "disabled" : ""}><span>${esc(oname(id))}</span></button>`).join("");
      $("[data-jdone-list]").innerHTML = j.steps.slice(0, st.i).map((id, i) => `<li>${esc(oname(id))}</li>`).join("");
    }
    function jtap(id) {
      if (!flow.predicted) {
        say("[data-jfb]", esc(t("Make your prediction in step 1 first.")), "neutral");
        flow.addRun({});
        return;
      }
      const j = JOURNEYS[S.jid];
      const st = jstate(S.jid);
      if (st.done) return;
      const r = judgeStep(S.jid, st.i, id);
      if (r === "ok") {
        const says = j.says ? t(j.says[st.i]) : t(O(id).fn);
        st.i++;
        if (st.i >= j.steps.length) {
          st.done = true;
          say("[data-jfb]", `<div class="h">✓ ${esc(oname(id))}</div><p>${esc(says)}</p><p>${esc(t(j.done))}</p>`, "good");
          if (!st.recorded) {
            st.recorded = true;
            flow.addRun({ journey: t(j.name), steps: j.steps.length, mistakes: st.wrong, route: j.steps.map(oname).join(" → ") });
          }
        } else say("[data-jfb]", `<div class="h">✓ ${esc(oname(id))}</div><p>${esc(says)}</p>`, "good");
      } else {
        st.wrong++;
        const cur = st.i ? oname(j.steps[st.i - 1]) : "";
        const want = oname(j.steps[st.i]);
        const msg =
          r === "passed"
            ? t("The journey has already been through the {x}. Where is it now?", { x: oname(id) })
            : r === "skip"
            ? t("Not yet. Before the {x} comes the {y}.", { x: oname(id), y: want })
            : O(id).off ? t(O(id).off) : t("This organ is not on the route.");
        say("[data-jfb]", `<div class="h">✗ ${esc(oname(id))}</div><p>${esc(msg)}</p>${cur ? `<p class="small">${esc(t("It is in the {x}. Choose the next place.", { x: cur }))}</p>` : ""}`, "bad");
      }
      jpaint();
      livePaint();
      if (S.layer === j.sys) paintSVG();
      const first = $('[data-jstop]:not([disabled])');
      if (first) first.focus({ preventScroll: true });
    }
    function jstart(jid) {
      S.jid = jid;
      const j = JOURNEYS[jid];
      if (S.layer !== j.sys) setLayer(j.sys);
      $("[data-jfb]").hidden = true;
      jpaint();
      paintSVG();
    }

    // ----- matching -----
    function mpaint() {
      const st = mstate(S.layer);
      const organs = organsOf(S.layer);
      const jobs = jobOrder(organs);
      $("[data-mq]").textContent = t("Match each organ of the {x} with its job. Tap an organ, then its job.", { x: t(SYS[S.layer].name) });
      $("[data-morgans]").innerHTML = organs
        .map((o) => `<button type="button" class="vl-part bd-m ${st.done.includes(o.id) ? "ok" : ""}" data-morg="${o.id}" aria-pressed="${S.sel === o.id}" ${st.done.includes(o.id) ? "disabled" : ""}><span>${st.done.includes(o.id) ? "✓ " : ""}${esc(t(o.name))}</span></button>`)
        .join("");
      $("[data-mjobs]").innerHTML = jobs
        .map((o) => `<button type="button" class="vl-part bd-m bd-job ${st.done.includes(o.id) ? "ok" : ""}" data-mjob="${o.id}" ${st.done.includes(o.id) ? "disabled" : ""}><span>${st.done.includes(o.id) ? "✓ " : ""}${esc(t(o.fn))}</span></button>`)
        .join("");
    }
    function mtap(kind, id) {
      if (kind === "org") {
        S.sel = S.sel === id ? null : id;
        mpaint();
        const b = $(`[data-morg="${id}"]`);
        if (b) b.focus({ preventScroll: true });
        return;
      }
      if (!flow.predicted) {
        say("[data-mfb]", esc(t("Make your prediction in step 1 first.")), "neutral");
        flow.addRun({});
        return;
      }
      if (!S.sel) {
        say("[data-mfb]", esc(t("Tap an organ first, then its job.")), "neutral");
        return;
      }
      const st = mstate(S.layer);
      const o = O(S.sel);
      if (id === S.sel) {
        st.done.push(id);
        S.sel = null;
        const all = organsOf(S.layer);
        if (st.done.length === all.length) {
          say("[data-mfb]", `<div class="h">✓ ${esc(t(o.name))}</div><p>${esc(t(o.fn))}</p><p>${esc(t("All the organs of the {x} are matched.", { x: t(SYS[S.layer].name) }))}</p>`, "good");
          if (!st.recorded) {
            st.recorded = true;
            flow.addRun({ system: t(SYS[S.layer].name), pairs: all.length, wrong: st.wrong });
          }
        } else say("[data-mfb]", `<div class="h">✓ ${esc(t(o.name))}</div><p>${esc(t(o.fn))}</p>`, "good");
      } else {
        st.wrong++;
        say("[data-mfb]", `<div class="h">✗ ${esc(t("That is not the job of the {x}.", { x: t(o.name) }))}</div><p>${esc(t("Think about where the {x} is and what it does. Try another job.", { x: t(o.name) }))}</p>`, "bad");
      }
      mpaint();
      livePaint();
      const next = $("[data-morgans] button:not([disabled])");
      if (next) next.focus({ preventScroll: true });
    }

    function livePaint() {
      if (mode() === "journey")
        flow.live(
          JIDS.map((j) => [t(JOURNEYS[j].name), jstate(j).done ? t("finished, {n} wrong taps", { n: jstate(j).wrong }) : t("step {n} of {m}", { n: jstate(j).i, m: JOURNEYS[j].steps.length })]),
          ""
        );
      else flow.live(SYSTEMS.map((s) => [t(SYS[s].name), mstate(s).done.length === organsOf(s).length ? t("finished, {n} wrong tries", { n: mstate(s).wrong }) : t("{a} of {b} organs matched", { a: mstate(s).done.length, b: organsOf(s).length })]), "");
    }

    function stagePaint() {
      if (!flow) return;
      const m = mode();
      const show = (n, on) => {
        const p = el.querySelector(`[data-pane="${n}"]`);
        if (p) p.hidden = !on;
      };
      show("journey", m === "journey");
      show("match", m === "match");
      if (m === "journey") {
        if (JOURNEYS[S.jid].sys !== S.layer) {
          const j = JIDS.find((x) => JOURNEYS[x].sys === S.layer);
          if (j) S.jid = j;
        }
        jpaint();
      } else {
        S.sel = null;
        mpaint();
      }
      livePaint();
      paintSVG();
    }

    flow = Labs.flow($("[data-flowhost]"), api, {
      assumptions: ASSUME,
      columns: INVS[0].columns,
      investigations: INVS,
      extra: () => ({ layer: S.layer, journeys: JIDS.filter((j) => jstate(j).done), systems: SYSTEMS.filter((s) => mstate(s).done.length === organsOf(s).length) }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stageHTML();
        slot.addEventListener("click", (e) => {
          const js = e.target.closest("[data-jstop]");
          if (js) return jtap(js.dataset.jstop);
          const jd = e.target.closest("[data-jid]");
          if (jd) return jstart(jd.dataset.jid);
          if (e.target.closest("[data-jreset]")) {
            S.jr[S.jid] = null;
            delete S.jr[S.jid];
            $("[data-jfb]").hidden = true;
            jpaint();
            livePaint();
            return paintSVG();
          }
          const mo = e.target.closest("[data-morg]");
          if (mo) return mtap("org", mo.dataset.morg);
          const mj = e.target.closest("[data-mjob]");
          if (mj) return mtap("job", mj.dataset.mjob);
          if (e.target.closest("[data-mreset]")) {
            delete S.match[S.layer];
            S.sel = null;
            $("[data-mfb]").hidden = true;
            mpaint();
            livePaint();
          }
        });
      },
      onInvestigation() {
        $("[data-jfb]").hidden = true;
        $("[data-mfb]").hidden = true;
        stagePaint();
      },
    });
    paintLayer();
    stagePaint();
  }

  Labs.register("body", {
    title: "Body systems explorer",
    area: "biology",
    icon: "target",
    objective: "Explore an outline of the body one system at a time (digestive, respiratory, circulatory, excretory and nervous). Tap an organ to see what it does, follow the journey of food, air and blood in the right order, and match each organ with its job.",
    chapters: [
      { cls: 4, subject: "evs", chapter: "our-teeth-and-digestion" },
      { cls: 5, subject: "evs", chapter: "breathing-and-the-heart" },
      { cls: 7, subject: "science", chapter: "life-processes-in-animals" },
      { cls: 7, subject: "sciencepb", chapter: "nutrition-in-animals" },
      { cls: 7, subject: "sciencepb", chapter: "respiration-in-organisms" },
      { cls: 7, subject: "sciencepb", chapter: "transportation-in-animals-and-plants" },
      { cls: 10, subject: "science", chapter: "life-processes" },
      { cls: 10, subject: "science", chapter: "control-and-coordination" },
      { cls: 11, subject: "biology", chapter: "breathing-and-exchange-of-gases" },
      { cls: 11, subject: "biology", chapter: "body-fluids-and-circulation" },
      { cls: 11, subject: "biology", chapter: "excretory-products-and-their-elimination" },
      { cls: 11, subject: "biology", chapter: "neural-control-and-coordination" },
    ],
    mount,
  });
})();
