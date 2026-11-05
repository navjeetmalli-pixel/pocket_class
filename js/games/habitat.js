// Game: Habitat sort. Animal and plant picture cards go to the place they live: LAND, WATER, SKY, or LAND AND WATER (the middle
// zone, for the ones that really live in both). The zones are small illustrated scenes (grass and a tree, pond waves, clouds).
//
//   * Pick a card (tap it, Enter on it, or drag it), then tap a zone. Three cards wait in the tray at a time, nine to a round.
//   * Right: the card flies into the zone and settles with a small bounce. Wrong: it slides back and one plain line says where
//     it lives ("A fish lives in water."). A second wrong try puts it in the right zone with the same line.
//   * Only the FIRST try of each card is recorded (api.answered, "Where does a fish live?"). 10 points first time, 5 second.
//   * No timer. Keyboard: Tab to a card, Enter to pick it, Enter on a zone to place it. Reduced motion: no flying or bouncing.
//
// WHERE EACH LIVES (accurate, and honest about the ones that live in two places). `home` is the one zone that is right:
//   land      the animal lives and moves on the ground (a tiger, a cow, a hen). Plants that grow on soil (tree, rose, grass).
//   water     it lives in water all its life (fish, whale, octopus, starfish). The lotus grows in a pond.
//   both      it lives on land AND in water, so only the middle zone is right: frog, duck, swan, crocodile, crab.
//   sky       a bird or insect that flies (crow, eagle, parrot, butterfly, bee). The game asks where it flies; the nest in a tree
//             is not asked about, and the line says "flies in the sky".
// Left out on purpose because the honest answer is "it depends": snake (some swim), tortoise (children mix it with turtle),
// bat, penguin, otter and anything not drawn in the picture kit.
// Chapters: see CHAPTERS below. Content: this table; no data file.

(() => {
  const ROUNDS = 9; // cards in a round (8-10)
  const MIN_CARDS = 8;
  const TRAY = 3;

  // [picture, English name, home, kind]  (kind: "a" animal, "p" plant)
  const CARDS = [
    ["cow", "cow", "land", "a"], ["goat", "goat", "land", "a"], ["sheep", "sheep", "land", "a"], ["horse", "horse", "land", "a"],
    ["donkey", "donkey", "land", "a"], ["camel", "camel", "land", "a"], ["giraffe", "giraffe", "land", "a"], ["zebra", "zebra", "land", "a"],
    ["deer", "deer", "land", "a"], ["pig", "pig", "land", "a"], ["rabbit", "rabbit", "land", "a"], ["monkey", "monkey", "land", "a"],
    ["tiger", "tiger", "land", "a"], ["lion", "lion", "land", "a"], ["bear", "bear", "land", "a"], ["elephant", "elephant", "land", "a"],
    ["cat", "cat", "land", "a"], ["dog", "dog", "land", "a"], ["hen", "hen", "land", "a"], ["squirrel", "squirrel", "land", "a"],
    ["ant", "ant", "land", "a"], ["spider", "spider", "land", "a"],
    ["tree", "tree", "land", "p"], ["grass", "grass", "land", "p"], ["rose", "rose", "land", "p"], ["sunflower", "sunflower", "land", "p"],
    ["fish", "fish", "water", "a"], ["whale", "whale", "water", "a"], ["octopus", "octopus", "water", "a"], ["starfish", "starfish", "water", "a"],
    ["lotus", "lotus", "water", "p"],
    ["frog", "frog", "both", "a"], ["duck", "duck", "both", "a"], ["swan", "swan", "both", "a"], ["crocodile", "crocodile", "both", "a"], ["crab", "crab", "both", "a"],
    ["eagle", "eagle", "sky", "a"], ["crow", "crow", "sky", "a"], ["sparrow", "sparrow", "sky", "a"], ["pigeon", "pigeon", "sky", "a"],
    ["parrot", "parrot", "sky", "a"], ["owl", "owl", "sky", "a"], ["butterfly", "butterfly", "sky", "a"], ["bee", "bee", "sky", "a"],
  ].map(([pic, name, home, kind]) => ({ pic, name, home, kind }));
  const BY = Object.fromEntries(CARDS.map((c) => [c.pic, c]));

  // Chapters that get the game: "{class}/{subject}/{chapter}" -> a theme that decides which cards are likelier.
  const CHAPTERS = {
    "3/evs/plants-around-us": "plants",
    "3/evs/animals-around-us": "all",
    "3/evs/water": "water",
    "4/evs/animals-and-their-homes": "all",
    "4/evs/roots-stems-and-leaves": "plants",
    "4/evs/water-sources-and-saving-water": "water",
    "5/evs/forests-and-forest-people": "all",
    "5/evs/mountains-deserts-and-life-there": "all",
    "5/evs/senses-of-animals": "all",
    "1/english/a-farm": "all",
    "1/englishpb/a-farm": "all",
    "2/english/rb2-going-to-a-zoo": "all",
    "2/englishpb/rb2-going-to-a-zoo": "all",
  };
  const themeOf = (c, subj, ch) => (subj && ch && !ch.levelKey && !ch.sources ? CHAPTERS[`${c}/${subj.id}/${ch.id}`] || "" : "");

  const ZONES = ["sky", "land", "both", "water"];
  const ZNAME = { sky: "Sky", land: "Land", both: "Land and water", water: "Water" };
  const an = (w) => /^[aeiou]/.test(w);
  // The plain line for a card: where it lives. Spelled out per English template so every one has a Punjabi and Hindi version.
  function fact(card) {
    const x = t(card.name);
    const A = an(card.name);
    const key = card.kind === "p" ? (card.home === "water" ? "grows in water" : "grows on land") : card.home === "land" ? "lives on land" : card.home === "water" ? "lives in water" : card.home === "both" ? "lives on land and in water" : "flies in the sky";
    const tpl = {
      "lives on land": ["A {x} lives on land.", "An {x} lives on land."],
      "lives in water": ["A {x} lives in water.", "An {x} lives in water."],
      "lives on land and in water": ["A {x} lives on land and in water.", "An {x} lives on land and in water."],
      "flies in the sky": ["A {x} flies in the sky.", "An {x} flies in the sky."],
      "grows on land": ["A {x} grows on land.", "An {x} grows on land."],
      "grows in water": ["A {x} grows in water.", "An {x} grows in water."],
    }[key];
    return t(tpl[A ? 1 : 0], { x });
  }
  // Plain English for the learning record (never translated).
  const qOf = (card) => `Where does ${an(card.name) ? "an" : "a"} ${card.name} ${card.kind === "p" ? "grow" : "live"}?`;
  const answerOf = (card) => ({ land: "On land", water: "In water", both: "On land and in water", sky: "In the sky" }[card.home]);

  // ---------- three more drawings in the picture kit's style (whale, octopus, starfish) ----------
  const fl = (c, k) => `url(#${k || "l"}${c.slice(1).toLowerCase()}@)`;
  const dark = (c) => Pics.shade(c, 0.68);
  const path = (d, c, k, o) => `<path d="${d}" fill="${fl(c, k)}" stroke="${dark(c)}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"${o || ""}/>`;
  const ell = (cx, cy, rx, ry, c, k) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fl(c, k)}" stroke="${dark(c)}" stroke-width="3"/>`;
  const dot = (cx, cy, r, c) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;
  const eye = (cx, cy, r) => dot(cx, cy, r, "#3a2a2a") + dot(cx - r * 0.3, cy - r * 0.35, r * 0.35, "#fff");
  const shadow = (rx) => `<ellipse cx="50" cy="93" rx="${rx}" ry="4.5" fill="#000" opacity=".08"/><ellipse cx="50" cy="93" rx="${rx * 0.78}" ry="3.2" fill="#000" opacity=".12"/>`;
  const star5 = (cx, cy, R, r) => {
    let d = "";
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      const rr = i % 2 ? r : R;
      d += (i ? "L" : "M") + (Math.round((cx + rr * Math.cos(a)) * 10) / 10) + " " + (Math.round((cy + rr * Math.sin(a)) * 10) / 10);
    }
    return d + "Z";
  };
  const EXTRA = {
    whale: () =>
      shadow(34) +
      `<path d="M40 30Q40 18 33 12M40 30Q44 18 52 13" fill="none" stroke="#9fd3f7" stroke-width="3.5" stroke-linecap="round"/>` +
      path("M74 56Q92 52 92 34Q100 42 108 38Q106 56 88 66Q80 66 74 62Z", "#3b82e0") +
      ell(46, 58, 36, 25, "#3b82e0", "r") +
      `<path d="M16 62Q46 84 76 62Q66 76 46 80Q26 78 16 62Z" fill="#cfe6fb" opacity=".95"/>` +
      eye(28, 52, 3.6) +
      `<path d="M16 62Q24 66 32 62" fill="none" stroke="${dark("#3b82e0")}" stroke-width="2.4" stroke-linecap="round"/>` +
      `<ellipse cx="38" cy="45" rx="8" ry="3.5" fill="#fff" opacity=".45" transform="rotate(-15 38 45)"/>`,
    octopus: () => {
      const C = "#a56ae8";
      let legs = "";
      [[28, 62, 14, 86, 24, 90], [40, 66, 36, 90, 46, 88], [60, 66, 64, 90, 54, 88], [72, 62, 86, 86, 76, 90]].forEach(([x, y, cx, cy, ex, ey]) => {
        legs += `<path d="M${x} ${y}Q${cx} ${cy} ${ex} ${ey}" fill="none" stroke="${dark(C)}" stroke-width="12" stroke-linecap="round"/><path d="M${x} ${y}Q${cx} ${cy} ${ex} ${ey}" fill="none" stroke="${C}" stroke-width="7.5" stroke-linecap="round"/>`;
      });
      return shadow(30) + legs + ell(50, 40, 27, 28, C, "r") + eye(40, 40, 5) + eye(60, 40, 5) + `<path d="M43 54Q50 59 57 54" fill="none" stroke="${dark(C)}" stroke-width="2.6" stroke-linecap="round"/>` + `<ellipse cx="38" cy="24" rx="7" ry="3.5" fill="#fff" opacity=".45" transform="rotate(-25 38 24)"/>`;
    },
    starfish: () => shadow(32) + path(star5(50, 52, 42, 19), "#f59a23") + [[50, 38], [40, 54], [60, 54], [50, 62], [50, 24], [30, 48], [70, 48]].map(([x, y], i) => dot(x, y, i < 4 ? 2.4 : 1.8, "#c9680a")).join("") + eye(44, 50, 2.6) + eye(56, 50, 2.6),
  };
  function art(name, size) {
    const g = EXTRA[name] ? `<g transform="translate(${50 - size / 2} ${50 - size / 2}) scale(${size / 100})">${EXTRA[name]()}</g>` : Pics.item(name, { x: 50, y: 50, s: size });
    return Pics.svg(g, { w: 100, h: 100, label: "" });
  }
  const drawable = (c) => EXTRA[c.pic] || (typeof Pics !== "undefined" && Pics.names.includes(c.pic));

  // ---------- the zone scenes (SVG backgrounds) ----------
  function scene(z) {
    const wave = (y, o) => `<path d="M-4 ${y}q10 -7 20 0t20 0t20 0t20 0t20 0t20 0t20 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity="${o}"/>`;
    const cloud = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="6" rx="22" ry="9" fill="#000" opacity=".07"/><path d="M-22 4q-2 -10 8 -11q4 -10 14 -5q9 -6 14 3q10 0 8 13h-44z" fill="${fl("#ffffff")}" stroke="#bcd3ea" stroke-width="2" stroke-linejoin="round"/></g>`;
    let body;
    if (z === "sky") {
      body = `<rect width="360" height="90" fill="${fl("#7cc4f5")}"/><circle cx="318" cy="28" r="17" fill="${fl("#ffc933", "r")}" stroke="#d9a000" stroke-width="2.6"/>${cloud(70, 34, 1.15)}${cloud(185, 22, 0.8)}${cloud(250, 50, 1)}<path d="M0 76q40 -14 90 -4t100 2t90 -6t80 6v16H0z" fill="#fff" opacity=".35"/>`;
      return Pics.svg(body, { w: 360, h: 90, label: "" }).replace("<svg ", '<svg preserveAspectRatio="xMidYMid slice" ');
    }
    if (z === "land") body = `<rect width="120" height="130" fill="${fl("#bfe6ff")}"/><ellipse cx="60" cy="150" rx="110" ry="82" fill="${fl("#5fbd5a", "r")}"/><ellipse cx="108" cy="124" rx="50" ry="30" fill="${fl("#7acb6a")}" opacity=".9"/><rect x="21" y="52" width="8" height="26" rx="3" fill="${fl("#8a5a2b")}" stroke="#5e3a17" stroke-width="2"/><circle cx="25" cy="44" r="17" fill="${fl("#3f9d45", "r")}" stroke="#2c7433" stroke-width="2.4"/><circle cx="14" cy="53" r="11" fill="${fl("#4caf50", "r")}" stroke="#2c7433" stroke-width="2.4"/><circle cx="36" cy="53" r="11" fill="${fl("#4caf50", "r")}" stroke="#2c7433" stroke-width="2.4"/><path d="M84 92l3 -9l3 9M94 96l3 -8l3 8M70 100l2 -7l3 7" fill="none" stroke="#2c7433" stroke-width="2.4" stroke-linecap="round"/>`;
    else if (z === "water") body = `<rect width="120" height="130" fill="${fl("#4fb0f0")}"/><rect y="0" width="120" height="14" fill="${fl("#bfe6ff")}"/>${wave(24, 0.55)}${wave(48, 0.45)}${wave(72, 0.4)}${wave(96, 0.35)}<ellipse cx="94" cy="108" rx="16" ry="6" fill="#2f7fd1" opacity=".35"/>`;
    else
      body = `<rect width="120" height="130" fill="${fl("#4fb0f0")}"/><rect y="0" width="120" height="14" fill="${fl("#bfe6ff")}"/><path d="M0 40q18 -10 36 2t32 14t26 26t26 24v30H0z" fill="${fl("#5fbd5a", "r")}" stroke="#2c7433" stroke-width="2.4"/><path d="M0 62q16 -6 32 4t26 16t24 18" fill="none" stroke="#e9d9a8" stroke-width="5" stroke-linecap="round" opacity=".85"/>${wave(58, 0.5).replace("-4 58", "58 38")}${wave(86, 0.4).replace("-4 86", "66 90")}<path d="M12 40l1 -14M18 40l-2 -12M24 42l3 -12" fill="none" stroke="#2c7433" stroke-width="2.4" stroke-linecap="round"/><circle cx="14" cy="27" r="2.6" fill="#8a5a2b"/><circle cx="26" cy="29" r="2.6" fill="#8a5a2b"/>`;
    return Pics.svg(body, { w: 120, h: 130, label: "" }).replace("<svg ", '<svg preserveAspectRatio="xMidYMid slice" ');
  }

  // ---------- registration ----------
  Games.register("habitat", {
    title: "Habitat sort",
    blurb: "Where does each one live?",
    how: "Pick a card, then tap the place where it lives: land, water, sky, or land and water for the ones that live in both.",
    icon: "sort",

    available: (c, subj, ch) => !!themeOf(c, subj, ch) && CARDS.filter(drawable).length >= MIN_CARDS,

    build(c, subj, ch, seed) {
      const R = Games.rng(seed);
      const theme = themeOf(c, subj, ch) || "all";
      const by = (home) => Games.shuffled(CARDS.filter((x) => x.home === home && drawable(x)), R);
      const pools = { land: by("land"), water: by("water"), both: by("both"), sky: by("sky") };
      const quota = theme === "water" ? { water: 3, both: 3, land: 2, sky: 1 } : { land: 3, water: 2, both: 2, sky: 2 };
      const picked = [];
      const take = (x) => {
        if (x && !picked.includes(x)) picked.push(x);
      };
      if (theme === "plants") {
        // every plant first (up to 4), the lotus always in
        const plants = Games.shuffled(CARDS.filter((x) => x.kind === "p"), R);
        take(plants.find((x) => x.pic === "lotus"));
        plants.forEach((x) => picked.length < 4 && take(x));
      }
      for (const z of ["water", "both", "sky", "land"]) {
        let have = picked.filter((x) => x.home === z).length;
        for (const x of pools[z]) if (have < quota[z] && picked.length < ROUNDS) (take(x), (have = picked.filter((y) => y.home === z).length));
      }
      const rest = Games.shuffled(CARDS.filter((x) => drawable(x) && !picked.includes(x)), R);
      for (const x of rest) if (picked.length < ROUNDS) take(x);
      return { cards: Games.shuffled(picked, R).map((x) => x.pic), theme };
    },

    // Problems with a round (empty when fine): enough cards, every card drawn and in the table, every zone used.
    audit(data) {
      const bad = [];
      if (data.cards.length < 8 || data.cards.length > 10) bad.push(`${data.cards.length} cards`);
      if (new Set(data.cards).size !== data.cards.length) bad.push("a card twice");
      for (const id of data.cards) {
        const c = BY[id];
        if (!c) bad.push(`${id}: not in the table`);
        else if (!drawable(c)) bad.push(`${id}: no picture`);
        else if (!ZONES.includes(c.home)) bad.push(`${id}: bad home`);
      }
      const homes = new Set(data.cards.map((id) => BY[id] && BY[id].home));
      for (const z of ["land", "water", "both", "sky"]) if (!homes.has(z)) bad.push(`no card for ${z}`);
      return bad;
    },

    mount(el, data, api) {
      play(el, data, api);
    },
  });

  const calm = () => !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

  function burst(host) {
    if (!host || host.querySelector(".fb-burst")) return;
    const cols = ["#ffc933", "#e5473d", "#3b82e0", "#4caf50", "#ee6fa4", "#f59a23"];
    const bits = Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * 2 * Math.PI + (i % 2) * 0.2;
      const dist = 70 + (i % 3) * 26;
      return `<svg class="fb-bit" viewBox="-8 -8 16 16" style="--dx:${Math.round(Math.cos(a) * dist)}px;--dy:${Math.round(Math.sin(a) * dist - 16)}px;--rot:${(i * 67) % 180}deg;animation-delay:${(i % 4) * 25}ms" aria-hidden="true">${
        i % 3 === 0 ? `<path d="M0-7 2.1-2.4 7-2 3.3 1.4 4.4 6.4 0 3.8-4.4 6.4-3.3 1.4-7-2-2.1-2.4Z" fill="${cols[i % 6]}" stroke="#a87400" stroke-width=".8" stroke-linejoin="round"/>` : `<rect x="-3.5" y="-2.2" width="7" height="4.4" rx="1.2" fill="${cols[i % 6]}"/>`
      }</svg>`;
    }).join("");
    const b = document.createElement("div");
    b.className = "fb-burst" + (calm() ? " calm" : "");
    b.setAttribute("aria-hidden", "true");
    b.innerHTML = bits;
    host.appendChild(b);
    setTimeout(() => b.remove(), calm() ? 900 : 1000);
  }

  function play(el, data, api) {
    const cards = data.cards.map((id) => BY[id]);
    const total = cards.length;
    const queue = cards.slice(); // cards not yet in the tray
    const tray = [];
    const first = {}; // pic -> true when the first try was right
    const tried = {}; // pic -> number of tries
    let placed = 0;
    let picked = null;
    let busy = false;

    const mithu = (pose, size) => (typeof Mascot !== "undefined" ? Mascot.svg(pose, { size }) : "");
    el.innerHTML = `<div class="card mk-card hb-card">
      <div class="mk-top"><span class="small muted" data-hb="count"></span><span class="mk-dots" aria-hidden="true" data-hb="dots"></span></div>
      <h2 class="mk-q hb-q">${t("Where does it live?")}</h2>
      <div class="hb-tray" data-hb="tray" role="group" aria-label="${t("Cards to sort")}"></div>
      <p class="hb-line" data-hb="line" role="status" aria-live="polite"></p>
      <div class="hb-zones" role="group" aria-label="${t("Places")}">
        ${ZONES.filter((z) => z === "sky").map((z) => zoneHtml(z)).join("")}
        <div class="hb-row">${["land", "both", "water"].map(zoneHtml).join("")}</div>
      </div>
    </div>`;
    function zoneHtml(z) {
      return `<button type="button" class="hb-zone hb-${z}" data-z="${z}" aria-label="${t(ZNAME[z])}"><span class="hb-bg" aria-hidden="true">${scene(z)}</span><span class="hb-name">${t(ZNAME[z])}</span><span class="hb-placed" data-placed="${z}"></span></button>`;
    }
    const $ = (s) => el.querySelector(`[data-hb=${s}]`);
    const trayEl = $("tray");
    const line = $("line");
    const card = el.querySelector(".hb-card");
    const zoneEl = (z) => el.querySelector(`.hb-zone[data-z="${z}"]`);

    const status = () => {
      $("count").textContent = t("Card {a} of {b}", { a: Math.min(placed + 1, total), b: total });
      $("dots").innerHTML = cards.map((c, k) => `<i class="${k < placed ? "ok" : k === placed ? "cur" : ""}"></i>`).join("");
    };
    const say = (msg, cls) => {
      line.textContent = msg;
      line.className = "hb-line" + (cls ? " " + cls : "");
    };
    const refill = () => {
      while (tray.length < TRAY && queue.length) tray.push(queue.shift());
      trayEl.innerHTML = tray.map((c) => `<button type="button" class="hb-pick" data-id="${c.pic}" aria-pressed="false" aria-label="${esc(t(c.name))}"><span class="hb-art">${art(c.pic, 94)}</span><span class="hb-nm">${esc(t(c.name))}</span></button>`).join("");
      if (picked) setPick(null);
    };
    const pickEl = (id) => trayEl.querySelector(`[data-id="${id}"]`);

    function setPick(id) {
      picked = id;
      trayEl.querySelectorAll(".hb-pick").forEach((b) => {
        const on = b.dataset.id === id;
        b.classList.toggle("sel", on);
        b.setAttribute("aria-pressed", on);
      });
      el.classList.toggle("hb-ready", !!id);
      if (id) say(t("Now tap where it lives."));
      else say(tray.length ? t("Pick a card, then tap where it lives.") : "");
    }

    function select(btn) {
      if (busy) return;
      const id = btn.dataset.id;
      setPick(picked === id ? null : id);
      if (picked) (zoneEl("land") || zoneEl("sky")).focus({ preventScroll: true });
    }

    // fly a copy from `from` to `to` (a settle with a small bounce); nothing happens with reduced motion
    function fly(from, to, keyframes, ms) {
      if (calm() || !from || !to || !to.animate) return;
      to.animate(keyframes, { duration: ms, easing: "cubic-bezier(.3,1.4,.5,1)" });
    }

    function place(zone, id) {
      if (busy || !id) return;
      const c = BY[id];
      const btn = pickEl(id);
      if (!btn) return;
      const n = (tried[id] = (tried[id] || 0) + 1);
      const ok = c.home === zone;
      if (n === 1) {
        first[id] = ok;
        api.answered({ q: qOf(c), explain: `${c.name} - ${answerOf(c).toLowerCase()}.`, answer: answerOf(c) }, ok);
        if (ok) api.score(10);
        else api.miss({ prompt: qOf(c), yours: esc(t(ZNAME[zone])), right: esc(t(ZNAME[c.home])), explain: esc(fact(c)) });
      } else if (ok) api.score(5);
      if (ok || n >= 2) return settle(c, btn, c.home, ok);
      // wrong: it slides back and one plain line says where it lives
      const z = zoneEl(zone);
      if (!calm() && btn.animate && z) {
        const a = btn.getBoundingClientRect();
        const b = z.getBoundingClientRect();
        const dx = b.left + b.width / 2 - (a.left + a.width / 2);
        const dy = b.top + b.height / 2 - (a.top + a.height / 2);
        btn.animate([{ transform: `translate(${dx}px, ${dy}px) scale(.55)`, opacity: 0.9 }, { transform: "translate(0,0) scale(1)", opacity: 1 }], { duration: 480, easing: "cubic-bezier(.3,1.3,.5,1)" });
      }
      z && z.classList.add("hb-no");
      setTimeout(() => z && z.classList.remove("hb-no"), 500);
      setPick(null);
      say(`${fact(c)} ${t("Try again.")}`, "bad");
      api.say(`${fact(c)} ${t("Try again.")}`);
      const back = pickEl(id);
      if (back) back.focus({ preventScroll: true });
    }

    function settle(c, btn, zone, ok) {
      busy = true;
      const from = btn.getBoundingClientRect();
      const host = el.querySelector(`[data-placed="${zone}"]`);
      const st = document.createElement("span");
      st.className = "hb-st" + (ok ? "" : " shown");
      st.innerHTML = art(c.pic, 94);
      st.title = t(c.name);
      host.appendChild(st);
      const to = st.getBoundingClientRect();
      if (!calm() && st.animate && from.width) {
        const dx = from.left + from.width / 2 - (to.left + to.width / 2);
        const dy = from.top + from.height / 2 - (to.top + to.height / 2);
        const k = from.width / (to.width || 1);
        st.animate([{ transform: `translate(${dx}px, ${dy}px) scale(${Math.min(k, 3)})`, opacity: 1 }, { transform: "translate(0,0) scale(1.18)", opacity: 1, offset: 0.72 }, { transform: "translate(0,0) scale(1)", opacity: 1 }], { duration: 520, easing: "ease-out" });
      }
      const idx = tray.indexOf(c);
      if (idx >= 0) tray.splice(idx, 1);
      placed++;
      setPick(null);
      refill();
      status();
      const z = zoneEl(zone);
      z.setAttribute("aria-label", `${t(ZNAME[zone])}: ${host.children.length}`);
      say(ok ? fact(c) : `${fact(c)} ${t("It goes here.")}`, ok ? "good" : "bad");
      api.say(fact(c));
      busy = false;
      if (placed >= total) return done();
      const nx = trayEl.querySelector(".hb-pick");
      if (nx) nx.focus({ preventScroll: true });
    }

    function done() {
      const right = Object.values(first).filter(Boolean).length;
      burst(card);
      trayEl.innerHTML = `<div class="hb-done"><span aria-hidden="true">${mithu("cheer", 84)}</span><button type="button" class="btn primary" data-hb="finish">${t("See my stars")}</button></div>`;
      say(t("{a} of {b} right the first time", { a: right, b: total }), "good");
      const b = trayEl.querySelector("[data-hb=finish]");
      b.focus({ preventScroll: true });
      b.addEventListener("click", () => api.finish({ stars: right >= total - 1 ? 3 : right >= Math.ceil(total * 0.6) ? 2 : 1, lines: [t("{a} of {b} right the first time", { a: right, b: total })] }));
    }

    // zones: tap (or Enter) places the picked card
    el.querySelector(".hb-zones").addEventListener("click", (e) => {
      const z = e.target.closest(".hb-zone");
      if (!z) return;
      if (!picked) return say(t("Pick a card first."));
      place(z.dataset.z, picked);
    });
    // cards: tap to pick, or drag onto a zone
    Games.draggable(trayEl, ".hb-pick", {
      onTap: select,
      onDrop(chip, hits) {
        const z = hits.map((x) => x.closest && x.closest(".hb-zone")).find(Boolean);
        if (z) place(z.dataset.z, chip.dataset.id);
      },
      over(hits) {
        const z = hits.map((x) => x.closest && x.closest(".hb-zone")).find(Boolean);
        el.querySelectorAll(".hb-zone").forEach((x) => x.classList.toggle("hb-over", x === z));
      },
    });

    refill();
    status();
    say(t("Pick a card, then tap where it lives."));
    const f = trayEl.querySelector(".hb-pick");
    if (f && document.activeElement && (document.activeElement === document.body || el.contains(document.activeElement) || document.activeElement.closest("#app"))) f.focus({ preventScroll: true });
  }

  window.HabitatSort = { CARDS, CHAPTERS };
})();
