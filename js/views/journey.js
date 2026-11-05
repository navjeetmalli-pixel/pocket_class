// The journey map on the subject page for Classes 1-5: a winding picture-book path with one stepping stone per chapter, in
// order. A stone shows the chapter's number and picture and up to 3 stars; the next chapter glows and Mithu stands on it.
// Every stone is a link to the chapter hub (the same route as the list). Older classes keep the list (js/views/subject.js).
//
//   stars   0 not touched   1 opened, or a skill started   2 chapter done (quiz 60%+)   3 done and every started skill mastered
//           (or a best quiz score of 90%+)
//   scenery ONE svg behind the stones (the path, grass, trees, hills, a river with a bridge, a village), drawn once per visit;
//           the stones are plain HTML links placed over it by percentages, so 35 chapters stay light.
//
// Journey.html(c, subj, chs, nextCh, dueSet) -> html; Journey.stars(c, subjId, ch, roll) -> 0..3

const Journey = (() => {
  const W = 360; // design width of the scenery (it scales to the page)
  const STEP = 140; // vertical distance between stones
  const TOP = 84;
  const BOTTOM = 190;
  const XL = 94;
  const XR = 266;
  const P = () => Pics;

  // Skills of this subject's chapters, from the learning record: { chapterId: [states] }. One pass over the record.
  function skillStates(c, subjId) {
    const out = {};
    const roll = Store.state.learn.roll;
    const now = Date.now();
    const pre = `${c}/${subjId}/`;
    for (const k of Object.keys(roll)) {
      if (!k.startsWith(pre)) continue;
      const m = /^[^/]+\/[^/]+\/([^/#]+)#/.exec(k);
      if (m) (out[m[1]] = out[m[1]] || []).push(Mastery.stateOf(roll[k], now));
    }
    return out;
  }

  function stars(rec, skills) {
    const s = skills || [];
    if (rec.done) return s.length && s.every((x) => x === "mastered") ? 3 : rec.best != null && rec.best >= 90 ? 3 : 2;
    return rec.opened || s.length ? 1 : 0;
  }

  const xOf = (i) => (i % 2 ? XR : XL);
  const yOf = (i) => TOP + i * STEP;

  // ---------- the scenery ----------
  const fill = (hex, k) => `url(#${k || "l"}${hex.slice(1).toLowerCase()}@)`;

  function pathD(n) {
    let d = `M${xOf(0)} ${yOf(0)}`;
    for (let i = 1; i < n; i++) {
      const x0 = xOf(i - 1), y0 = yOf(i - 1), x1 = xOf(i), y1 = yOf(i), dir = x1 > x0 ? 1 : -1;
      d += `C${x0 + dir * 150} ${y0} ${x1 - dir * 150} ${y1} ${x1} ${y1}`;
    }
    return d;
  }

  // Turn of the path (degrees from upright) where it crosses between stones i and i+1 (middle of the S-curve).
  function bridgeAngle(i) {
    const dx = 0.75 * (2 * (xOf(i + 1) - xOf(i)) - 2 * 150 * (xOf(i + 1) > xOf(i) ? 1 : -1));
    const dy = 0.75 * 2 * STEP;
    return Math.round((Math.atan2(dy, dx) * 180) / Math.PI - 90);
  }

  // Scenery items beside the path: [name, size] for each zone of six stones.
  const ZONES = [
    ["meadow", [["tree", 74], ["flower", 40], ["tree", 62], ["sunflower", 44], ["grass", 44], ["marigold", 40]]],
    ["river", [["tree", 70], ["lotus", 40], ["flower", 40], ["tree", 64], ["duck", 40], ["grass", 44]]],
    ["hills", [["mountain", 96], ["tree", 60], ["cloud", 64], ["mountain", 78], ["tree", 66], ["flower", 38]]],
    ["village", [["house", 76], ["tree", 66], ["hut", 70], ["cow", 54], ["tree", 62], ["temple", 74]]],
    ["forest", [["tree", 78], ["squirrel", 40], ["tree", 66], ["deer", 54], ["tree", 74], ["rabbit", 40]]],
  ];

  function scenery(n, H) {
    const K = P();
    let s = "";
    // ground: soft bands of grass
    s += `<rect width="${W}" height="${H}" fill="${fill("#a8dc7a")}"/>`;
    for (let y = 40, j = 0; y < H; y += 150, j++) s += `<path d="M0 ${y}Q90 ${y - 26} 180 ${y}T360 ${y}V${y + 90}Q270 ${y + 116} 180 ${y + 90}T0 ${y + 90}Z" fill="${j % 2 ? "#b9e589" : "#9ad46c"}" opacity=".55"/>`;
    // a river in the second zone of every five, with a bridge where the path crosses
    const bridges = [];
    for (let z = 0; z * 6 + 3 < n; z++) {
      if (ZONES[z % ZONES.length][0] !== "river") continue;
      const i = z * 6 + 2;
      const ym = (yOf(i) + yOf(i + 1)) / 2;
      s += `<path d="M-10 ${ym}Q45 ${ym - 22} 100 ${ym}T210 ${ym}T330 ${ym}T380 ${ym}" fill="none" stroke="#5aa9d8" stroke-width="38" stroke-linecap="round"/>`;
      s += `<path d="M-10 ${ym}Q45 ${ym - 22} 100 ${ym}T210 ${ym}T330 ${ym}T380 ${ym}" fill="none" stroke="#8fd0f0" stroke-width="25" stroke-linecap="round"/>`;
      s += `<path d="M10 ${ym + 5}q14 -7 28 0M150 ${ym - 5}q14 -7 28 0M260 ${ym + 4}q14 -7 28 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>`;
      bridges.push([ym, i]);
    }
    // the path: a soft shadow, the edge, the sand and a light centre line
    const d = pathD(n);
    s += `<path d="${d}" transform="translate(0 7)" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += `<path d="${d}" fill="none" stroke="#c99a58" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += `<path d="${d}" fill="none" stroke="#f0dcab" stroke-width="31" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += `<path d="${d}" fill="none" stroke="#fff6dc" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 11" opacity=".9"/>`;
    for (const [ym, i] of bridges) {
      // the bridge lies along the path where it crosses (the path is nearly upright there)
      s += `<g transform="translate(180 ${ym}) rotate(${bridgeAngle(i)})"><rect x="-27" y="-34" width="54" height="68" rx="7" fill="#a9733c" stroke="#7a4a22" stroke-width="2.5"/>`;
      for (let k = -27; k <= 27; k += 9) s += `<path d="M-27 ${k}H27" stroke="#7a4a22" stroke-width="1.6" opacity=".7"/>`;
      s += `<path d="M-27 -34V34M27 -34V34" stroke="#d9a769" stroke-width="4" stroke-linecap="round"/></g>`;
    }
    // sun and clouds at the top, a school at the end of the road
    s += K.item("sun", { x: 316, y: 38, s: 52 }) + K.item("cloud", { x: 60, y: 30, s: 58 });
    // things beside the path
    for (let i = 0; i < n; i++) {
      const [zone, list] = ZONES[Math.floor(i / 6) % ZONES.length];
      void zone;
      const [name, size] = list[i % 6];
      const left = i % 2 === 1; // a stone on the right leaves the left edge free
      const x = left ? Math.max(34, size / 2 + 6) : Math.min(326, W - size / 2 - 6);
      const y = yOf(i) + (name === "cloud" ? -28 : 6);
      s += K.item(name, { x, y, s: size });
      // a small extra in the gap between stones, on the free edge
      const extra = ["flower", "grass", "flower", "marigold"][i % 4];
      s += K.item(extra, { x: left ? 40 : 320, y: yOf(i) + STEP * 0.62, s: 30 });
    }
    s += K.item("school", { x: 180, y: yOf(n - 1) + 112, s: 112 });
    s += K.item("flag", { x: xOf(n - 1) + (n % 2 ? -66 : 66), y: yOf(n - 1) + 4, s: 44 });
    return K.svg(s, { w: W, h: H });
  }

  // ---------- one stone ----------
  function stone(c, subj, ch, i, n, isNext, due, rec, st) {
    const left = i % 2 === 0;
    const state = rec.done ? "done" : st ? "open" : "new";
    const label = [
      t("Chapter {n}: {title}", { n: i + 1, title: ch.title }),
      st ? t("{n} of 3 stars", { n: st }) : t("not started"),
      rec.done ? t("done") : "",
      due ? t("review due") : "",
      isNext ? t("next") : "",
    ].filter(Boolean).join(", ");
    const H = TOP + (n - 1) * STEP + BOTTOM;
    const star = (k) => `<span class="js-star${k < st ? " on" : ""}">★</span>`;
    return `<li class="jli" style="left:${((xOf(i) / W) * 100).toFixed(2)}%;top:${((yOf(i) / H) * 100).toFixed(3)}%"><a class="jstone s-${state}${isNext ? " next" : ""}${left ? " left" : " right"}" href="#/chapter/${c}/${subj.id}/${ch.id}" data-ch="${esc(ch.id)}" data-stars="${st}" aria-label="${esc(label)}"${isNext ? ' aria-current="step"' : ""}>
      ${isNext ? `<span class="js-mithu" aria-hidden="true">${Mascot.svg("wave", { size: 66 })}</span>` : ""}
      <span class="js-disc" aria-hidden="true">
        ${chapterPic(subj, ch, 48)}
        <span class="js-num">${i + 1}</span>
        ${rec.done ? `<span class="js-check">${icon("check")}</span>` : due ? `<span class="js-due">↻</span>` : ""}
      </span>
      <span class="js-stars" aria-hidden="true">${star(0)}${star(1)}${star(2)}</span>
      <span class="js-name" aria-hidden="true"><span class="js-name-t">${esc(ch.title)}</span></span>
    </a></li>`;
  }

  function html(c, subj, chs, nextCh, dueSet) {
    const n = chs.length;
    const H = TOP + (n - 1) * STEP + BOTTOM;
    const skills = skillStates(c, subj.id);
    const stones = chs
      .map((ch, i) => {
        const rec = Store.chapter(Store.key(c, subj.id, ch.id));
        return stone(c, subj, ch, i, n, !!nextCh && nextCh.id === ch.id, dueSet.has(ch.id), rec, stars(rec, skills[ch.id]));
      })
      .join("");
    return `<ol class="jmap" aria-label="${esc(t("Your journey through {subject}", { subject: subj.name }))}" style="--c:${subj.color}">
      <li class="jmap-art" aria-hidden="true">${scenery(n, H)}</li>
      ${stones}
    </ol>`;
  }

  return { html, stars, W, STEP };
})();
