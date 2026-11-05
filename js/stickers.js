/* Pocket Class India - the sticker book (Classes 1-5).
   A child earns ONE sticker for: finishing a guided lesson, a chapter quiz with 60% or more, a game with 2 or more stars,
   a virtual-lab experiment, or mastering a Practice-by-topic level for the first time.
   Rules (so it cannot be farmed, and nothing is ever taken away):
     * at most DAILY_CAP (3) stickers a day (a calendar day on the device);
     * the same activity (a chapter's quiz, one game in one chapter, one lesson ...) earns once a day;
     * the book holds SEQ.length (60) stickers. When it is full nothing more is earned. Nothing is ever removed.
   The order is fixed (SEQ): the child's n-th sticker is always SEQ[n-1], so a collection grows the same way for everyone.
   Specials (Mithu poses, a crown, a rainbow) sit at 10, 25, 40 and 50.
   Saved per student in Store (stickers: [{ id, at, why, ref? }]), so backups and student switching include them.

     Stickers.on()               true for Classes 1-5
     Stickers.earn(why, ref)     -> the sticker definition just earned, or null (not young, cap reached, repeat, book full)
     Stickers.winHTML(def)       the "You earned a sticker!" card for a results screen (Mithu cheers, the sticker pops in)
     Stickers.celebrate(def)     the sound (once) after the card is drawn
     Stickers.art(def, size)     the sticker picture on its white die-cut paper
     Stickers.name(def)          its name in the app language
     Stickers.SEQ, Stickers.DAILY_CAP, Stickers.owned(), Stickers.todayCount(), Stickers.next() */
const Stickers = (() => {
  const DAILY_CAP = 3;

  // [id, picture]; picture "mithu:POSE" is a Mithu pose. The English name is the id with a capital (Ice cream, Mithu cheering ...).
  const NAMES = {
    apple: "Apple", cat: "Cat", balloon: "Balloon", fish: "Fish", sun: "Sun", mango: "Mango", butterfly: "Butterfly", car: "Car", duck: "Duck",
    "mithu-cheer": "Mithu cheering", banana: "Banana", elephant: "Elephant", kite: "Kite", flower: "Flower", boat: "Boat", cow: "Cow", bus: "Bus",
    frog: "Frog", tree: "Tree", dog: "Dog", strawberry: "Strawberry", bee: "Bee", rabbit: "Rabbit", train: "Train", crown: "Crown", orange: "Orange",
    owl: "Owl", tiger: "Tiger", umbrella: "Umbrella", tortoise: "Tortoise", aeroplane: "Aeroplane", grapes: "Grapes", horse: "Horse", lotus: "Lotus",
    monkey: "Monkey", rocket: "Rocket", watermelon: "Watermelon", bicycle: "Bicycle", pineapple: "Pineapple", "mithu-wave": "Mithu waving",
    peacock: "Peacock", squirrel: "Squirrel", tractor: "Tractor", moon: "Moon", "ice-cream": "Ice cream", giraffe: "Giraffe", carrot: "Carrot",
    lion: "Lion", whale: "Whale", rainbow: "Rainbow", ship: "Ship", diya: "Diya", crab: "Crab", cake: "Cake", helicopter: "Helicopter",
    star: "Star", camel: "Camel", deer: "Deer", hen: "Hen", goat: "Goat",
  };
  const SEQ = Object.keys(NAMES).map((id, i) => ({ id, name: NAMES[id], n: i + 1, special: /^mithu|^crown$|^rainbow$/.test(id) }));
  const byId = Object.fromEntries(SEQ.map((d) => [d.id, d]));

  const on = () => {
    const p = typeof Store !== "undefined" && Store.state && Store.state.profile;
    if (!p || p.cls == null) return false;
    const b = App.band(p.cls);
    return b === "1-2" || b === "3-5";
  };
  const owned = () => Store.stickers();
  const ownedIds = () => new Set(owned().map((r) => r.id));
  const next = () => {
    const have = ownedIds();
    return SEQ.find((d) => !have.has(d.id)) || null;
  };
  const startOfToday = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  };
  const todays = () => owned().filter((r) => r.at >= startOfToday());
  const todayCount = () => todays().length;

  function earn(why, ref) {
    if (!on()) return null;
    const def = next();
    if (!def) return null;
    const today = todays();
    if (today.length >= DAILY_CAP) return null;
    if (ref && today.some((r) => r.ref === ref && r.why === why)) return null;
    Store.addSticker({ id: def.id, at: Date.now(), why, ...(ref ? { ref } : {}) });
    return def;
  }

  const name = (def) => t(def.name);

  // The picture only (no paper): an item of the picture kit, or a Mithu pose.
  function pic(def, size) {
    if (def.id.startsWith("mithu-")) return Mascot.svg(def.id.slice(6), { size });
    return Pics.svg(Pics.item(def.id, { x: 50, y: 52, s: 80 }), { w: 100, h: 100 }).replace("<svg ", `<svg width="${size}" height="${size}" `);
  }

  // A sticker: the picture on white die-cut paper with a soft shadow, turned a little (the same way every time).
  function art(def, size = 88) {
    const tilt = [-5, 3, -2, 6, -4, 2][def.n % 6];
    return `<span class="stk${def.special ? " stk-special" : ""}" style="--tilt:${tilt}deg;--sz:${size}px" aria-hidden="true">${pic(def, Math.round(size * 0.8))}</span>`;
  }

  function winHTML(def) {
    if (!def) return "";
    const have = owned().length;
    return `<section class="card sticker-win" role="status" aria-live="polite" aria-label="${esc(t("You earned a sticker!"))}">
      <div class="sw-mithu" aria-hidden="true">${Mascot.svg("cheer", { size: 84 })}</div>
      <div class="sw-body">
        <h2 class="sw-title">${t("You earned a sticker!")}</h2>
        <div class="sw-pop">${art(def, 104)}</div>
        <p class="sw-name">${esc(name(def))}${def.special ? ` <span class="sw-special">${t("A special one!")}</span>` : ""}</p>
        <p class="sw-count small muted">${t("{n} of {total} stickers", { n: have, total: SEQ.length })}</p>
        <a class="btn sw-link" href="#/stickers">${t("See my stickers")}</a>
      </div>
    </section>`;
  }

  // The happy sound, once, just after the card is on screen; the card is brought into view (it can sit below the score).
  function celebrate(def) {
    if (!def) return;
    setTimeout(() => {
      if (typeof Sound !== "undefined") Sound.play("celebrate");
      const card = document.querySelector(".sticker-win");
      if (card && card.getBoundingClientRect().bottom > window.innerHeight - 70) {
        const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        card.scrollIntoView({ block: "center", behavior: calm ? "auto" : "smooth" });
      }
    }, 250);
  }

  return { DAILY_CAP, SEQ, byId, on, earn, owned, next, todayCount, name, art, pic, winHTML, celebrate };
})();
