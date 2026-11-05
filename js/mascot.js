/* Pocket Class India - Mithu, the guide: a young green parakeet with a red-orange hooked beak.
   Original drawing in the Pics style (gradients, soft shadow, outlines a shade darker than the fill).
     Mascot.svg(pose, { size = 120, label })  -> inline svg string
     Mascot.html(pose, { size, label, say })  -> <div class="mascot mascot-POSE"> svg + optional speech bubble (say: translated text)
     Mascot.POSES = wave, cheer, think, oops, point, sleep
   Body parts are shared; a pose only chooses the wings, the eyes and a few extras. Idle bob, blink and the cheer hop are CSS
   (transform only) in the "Mascot and subject tiles" block and are switched off by prefers-reduced-motion. */
const Mascot = (() => {
  const P = Pics;
  const sh = P.shade, tn = P.tint;
  const fl = (c, k) => `url(#${k || "l"}${c.slice(1).toLowerCase()}@)`;
  const out = (c) => sh(c, 0.66);
  const path = (d, c, k, o = "") => `<path d="${d}" fill="${fl(c, k)}" stroke="${out(c)}" ${o}/>`;
  const ell = (cx, cy, rx, ry, c, k, o = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fl(c, k)}" stroke="${out(c)}" ${o}/>`;
  const dot = (cx, cy, r, c, o = "") => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" ${o}/>`;
  const line = (d, c, w, o = "") => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${o}/>`;

  const HEAD = "#74d65c", BODY = "#4cbf45", BELLY = "#d6f07a", WING = "#3aa83a", TAIL = "#3aa0d8", BEAK = "#f2672a", INK = "#3a2a2a";

  // One feather-shaped wing that points up from the shoulder (0,0); `rot` turns it clockwise, `k` scales it.
  const wing = (x, y, rot, k = 1) =>
    `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${k})">${path("M0 2C-11 -3 -12 -24 0 -34C12 -24 11 -3 0 2Z", WING, "l", 'stroke-width="2.4"')}` +
    `<path d="M0 -16C-8 -18 -9 -28 0 -34C9 -28 8 -18 0 -16Z" fill="${fl(TAIL, "l")}" stroke="none" opacity=".9"/>` +
    `<ellipse cx="-4" cy="-10" rx="2.4" ry="7" fill="#fff" opacity=".35"/></g>`;

  const eyeOpen = (cx, cy, dx = 0, dy = 0) =>
    `<g class="m-eye"><ellipse cx="${cx}" cy="${cy}" rx="11" ry="12.5" fill="#fff" stroke="${sh("#74d65c", 0.55)}" stroke-width="2"/>` +
    `<circle cx="${cx + dx}" cy="${cy + dy + 1}" r="7" fill="${INK}"/><circle cx="${cx + dx - 2.4}" cy="${cy + dy - 2}" r="2.6" fill="#fff"/><circle cx="${cx + dx + 2.4}" cy="${cy + dy + 3.4}" r="1.3" fill="#fff"/></g>`;
  const eyeHappy = (cx, cy) => line(`M${cx - 10} ${cy + 3}Q${cx} ${cy - 11} ${cx + 10} ${cy + 3}`, INK, 4);
  const eyeShut = (cx, cy) => line(`M${cx - 9} ${cy - 1}Q${cx} ${cy + 8} ${cx + 9} ${cy - 1}`, INK, 3.6);

  const POSES = {
    wave: { l: [-8 + 188, 0.95], r: [38, 1.05], eyes: "open" },
    cheer: { l: [-32, 1.05], r: [32, 1.05], eyes: "happy" },
    think: { l: [190, 0.95], r: [-70, 0.7], eyes: "up" },
    oops: { l: [200, 0.95], r: [160, 0.95], eyes: "wide", brows: true, drop: true },
    point: { l: [190, 0.95], r: [90, 1.0], eyes: "open" },
    sleep: { l: [190, 0.95], r: [170, 0.95], eyes: "shut", z: true },
  };

  function body(p) {
    const e = p.eyes;
    let s = `<g class="m-all">`;
    // shadow, tail, feet
    s += `<ellipse cx="60" cy="114" rx="30" ry="4.5" fill="#000" opacity=".1"/><ellipse cx="60" cy="114" rx="22" ry="3" fill="#000" opacity=".12"/>`;
    s += path("M50 94C40 108 44 118 52 118C60 114 62 104 60 96Z", TAIL, "l", 'stroke-width="2.4"') + path("M70 94C80 108 76 118 68 118C60 114 58 104 60 96Z", sh(TAIL, 0.9), "l", 'stroke-width="2.4"');
    s += ell(50, 111, 7, 3.6, "#f59a23", "l", 'stroke-width="2"') + ell(70, 111, 7, 3.6, "#f59a23", "l", 'stroke-width="2"');
    // body and belly
    s += ell(60, 88, 27, 26, BODY, "r", 'stroke-width="2.6"');
    s += `<ellipse cx="60" cy="95" rx="16" ry="16" fill="${fl(BELLY, "r")}" stroke="none"/>`;
    // wings (behind the head, in front of the body)
    const up = (r) => { const a = ((r % 360) + 360) % 360; return a < 120 || a > 240; }; // raised wings are drawn in front of the head
    const wl = wing(37, 78, p.l[0], p.l[1]), wr = wing(83, 78, p.r[0], p.r[1]);
    s += (up(p.l[0]) ? "" : wl) + (up(p.r[0]) ? "" : wr);
    // head with a little crest
    s += path("M52 18C48 8 54 2 60 2C58 8 60 12 60 18Z", WING, "l", 'stroke-width="2"') + path("M62 18C62 8 70 4 74 8C68 10 68 14 68 20Z", WING, "l", 'stroke-width="2"');
    s += ell(60, 46, 32, 30, HEAD, "r", 'stroke-width="2.8"');
    s += `<ellipse cx="46" cy="28" rx="9" ry="4.5" fill="#fff" opacity=".4" transform="rotate(-25 46 28)"/>`;
    s += `<ellipse cx="35" cy="58" rx="6.5" ry="4.5" fill="#ff7a7a" opacity=".45"/><ellipse cx="85" cy="58" rx="6.5" ry="4.5" fill="#ff7a7a" opacity=".45"/>`;
    s += (up(p.l[0]) ? wl : "") + (up(p.r[0]) ? wr : "");
    // eyes
    const dx = e === "up" ? 3 : 0, dy = e === "up" ? -4 : 0;
    if (e === "happy") s += eyeHappy(44, 42) + eyeHappy(76, 42);
    else if (e === "shut") s += eyeShut(44, 43) + eyeShut(76, 43);
    else s += eyeOpen(44, 42, dx, dy) + eyeOpen(76, 42, dx, dy);
    if (p.brows) s += line("M33 25Q40 19 52 26", out(HEAD), 3.4) + line("M87 25Q80 19 68 26", out(HEAD), 3.4);
    // beak: a big hooked upper half and a small lower half
    s += path("M53 60C53 66 57 70 60 70C63 70 67 66 67 60Z", "#d94e18", "l", 'stroke-width="2"');
    s += path("M47 49C47 42 53 40 60 40C67 40 73 42 73 49C73 59 67 66 60 68C53 66 47 59 47 49Z", BEAK, "r", 'stroke-width="2.6"');
    s += `<ellipse cx="55" cy="47" rx="3" ry="4.4" fill="#fff" opacity=".5" transform="rotate(12 55 47)"/>`;
    s += dot(56.5, 52, 1.4, "#a8360f") + dot(63.5, 52, 1.4, "#a8360f");
    if (e === "wide") s += `<ellipse cx="60" cy="66" rx="3.4" ry="3" fill="#7a2a0c"/>`;
    // extras
    if (p.drop) s += path("M99 30C94 38 93 42 99 44C105 42 104 38 99 30Z", "#8fd6f5", "l", 'stroke-width="1.6"');
    if (p.z) s += `<g class="m-z" font-family="system-ui,sans-serif" font-weight="800" fill="${sh("#3b82e0", 0.85)}"><text x="96" y="26" font-size="17">z</text><text x="106" y="12" font-size="12">z</text></g>`;
    return s + "</g>";
  }

  function svg(pose, o = {}) {
    const p = POSES[pose] || POSES.wave;
    const size = o.size || 120;
    const s = P.svg(body(p), { w: 120, h: 122, label: o.label });
    return s.replace("<svg ", `<svg width="${size}" height="${Math.round((size * 122) / 120)}" `).replace('class="pic"', 'class="pic mascot-svg"');
  }

  function html(pose, o = {}) {
    const bubble = o.say ? `<div class="m-bubble">${o.say}</div>` : "";
    return `<div class="mascot mascot-${pose}${o.say ? " has-say" : ""}">${svg(pose, o)}${bubble}</div>`;
  }

  return { svg, html, POSES: Object.keys(POSES) };
})();
