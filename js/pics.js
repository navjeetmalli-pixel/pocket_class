/* Pocket Class India - picture kit.
   Original vector drawings (SVG strings) in one soft "2.5D" sticker style:
   rounded shapes, 2-3 tone gradients, light from the top-left, a soft ellipse shadow underneath,
   a small white shine and an outline one shade darker than the fill (never black).

   ID UNIQUENESS: gradients are never written by hand. Every fill is a placeholder such as
   url(#l3b82e0@) (l = linear, r = radial, then the 6-digit colour). Pics.svg(content, opts) scans the
   finished content for those placeholders, writes ONE <defs> with the gradients that are really used and
   replaces "@" by a suffix that is new on every call (random per page load + counter). So any number of
   pictures can sit on one page, a hidden (display:none) earlier svg can never break a later one, and
   content can be built BEFORE Pics.svg is called. Content may be a plain string or a function (suffix) => string.

   Pics.item / row / clock / fraction / coin / note / tens / one / shape return SVG CONTENT (a <g>), not a
   whole <svg>. Wrap them: Pics.svg(Pics.item("apple", {x:100, y:60, s:80}), {w:200, h:120, label:"an apple"}).
   Pics.row lays out inside 0..w x 0..h, so give Pics.svg the same w and h. */
(function (root) {
  "use strict";
  var N = 0, TAG = Math.random().toString(36).slice(2, 5);

  /* ---------- colour helpers ---------- */
  function h2r(c) { return [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16)]; }
  function r2h(a) { return "#" + a.map(function (v) { return ("0" + Math.round(Math.max(0, Math.min(255, v))).toString(16)).slice(-2); }).join(""); }
  function shade(c, f) { return r2h(h2r(c).map(function (v) { return v * f; })); }
  function tint(c, f) { return r2h(h2r(c).map(function (v) { return v + (255 - v) * f; })); }
  function fl(c, k) { return "url(#" + (k || "l") + c.slice(1).toLowerCase() + "@)"; }
  function f1(n) { return Math.round(n * 10) / 10; }

  /* ---------- element helpers (all in a 100 x 100 design box) ---------- */
  function P(d, c, k, o) { return '<path d="' + d + '" fill="' + fl(c, k) + '" stroke="' + shade(c, 0.68) + '"' + (o || "") + "/>"; }
  function PN(d, c, k, o) { return '<path d="' + d + '" fill="' + fl(c, k) + '" stroke="none"' + (o || "") + "/>"; }
  function E(cx, cy, rx, ry, c, k, o) { return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + fl(c, k) + '" stroke="' + shade(c, 0.68) + '"' + (o || "") + "/>"; }
  function Ci(cx, cy, r, c, k, o) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fl(c, k) + '" stroke="' + shade(c, 0.68) + '"' + (o || "") + "/>"; }
  function Rc(x, y, w, h, r, c, k, o) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" fill="' + fl(c, k) + '" stroke="' + shade(c, 0.68) + '"' + (o || "") + "/>"; }
  function F(d, c, o) { return '<path d="' + d + '" fill="' + c + '" stroke="none"' + (o || "") + "/>"; }
  function Fc(cx, cy, r, c, o) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + c + '" stroke="none"' + (o || "") + "/>"; }
  function Fe(cx, cy, rx, ry, c, o) { return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + c + '" stroke="none"' + (o || "") + "/>"; }
  function L(d, c, w, o) { return '<path d="' + d + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"' + (o || "") + "/>"; }
  function T(d, c, w) { return L(d, shade(c, 0.68), w + 3) + L(d, c, w); }
  function SH(rx, y, ry) {
    y = y || 93; ry = ry || 4.5;
    return Fe(50, y, rx, ry, "#000", ' opacity=".08"') + Fe(50, y, rx * 0.78, ry * 0.7, "#000", ' opacity=".12"');
  }
  function SHN(cx, cy, rx, ry, rot, op) { return Fe(cx, cy, rx, ry, "#fff", ' opacity="' + (op || 0.55) + '" transform="rotate(' + (rot || 0) + " " + cx + " " + cy + ')"'); }
  function starD(cx, cy, R, r, n) {
    var d = "", i, a, rr;
    for (i = 0; i < n * 2; i++) { a = -Math.PI / 2 + i * Math.PI / n; rr = i % 2 ? r : R; d += (i ? "L" : "M") + f1(cx + rr * Math.cos(a)) + " " + f1(cy + rr * Math.sin(a)); }
    return d + "Z";
  }

  var RED = "#e5473d", ORANGE = "#f59a23", YELLOW = "#ffc933", GREEN = "#4caf50", BLUE = "#3b82e0", SKY = "#4aa3e8",
    BROWN = "#8a5a2b", PINK = "#ee6fa4", CREAM = "#fff1d6", DARK = "#3d3d4a", EYE = "#3a2a2a";
  function eye(cx, cy, r) { return Fc(cx, cy, r, EYE) + Fc(cx - r * 0.3, cy - r * 0.35, r * 0.35, "#fff"); }

  /* ---------- items ---------- */
  var BALLOONS = ["#e5473d", "#3b82e0", "#ffc933", "#43b05c", "#e060a8"];
  var ITEMS = {
    apple: function () {
      return SH(30) + P("M50 33C38 22 15 28 16 56C17 80 36 92 50 86C64 92 83 80 84 56C85 28 62 22 50 33Z", RED, "r") +
        L("M50 34Q50 22 57 13", "#7a4a24", 4.5) + P("M54 24Q64 10 80 16Q72 30 54 24Z", GREEN) + SHN(31, 48, 5, 10, -20);
    },
    mango: function () {
      return SH(30) + P("M28 28C44 10 84 18 88 54C91 80 68 92 46 84C22 74 12 44 28 28Z", "#f7b52a", "r") + F("M28 28C36 18 50 14 62 18C50 26 40 40 34 56C22 50 20 36 28 28Z", "#8cc63f", ' opacity=".45"') +
        F("M70 30C84 40 90 60 80 78C70 88 56 90 46 84C70 80 80 56 70 30Z", RED, ' opacity=".35"') +
        L("M30 28Q34 20 40 16", "#7a4a24", 3.5) + P("M32 24Q26 10 12 12Q14 26 32 24Z", GREEN) + SHN(36, 42, 5, 11, 35);
    },
    banana: function () {
      return SH(32) + P("M14 24C8 74 56 98 92 60L83 49C56 72 34 56 33 22Z", "#ffd93b") +
        L("M30 32C36 58 58 68 80 58", "#d9ae1c", 2, ' opacity=".7"') + P("M14 24L33 22L32 12L16 13Z", "#8a6a2a") +
        Ci(89, 55, 4, "#6b4a1a") + L("M22 40C24 58 34 72 50 80", "#fff", 3, ' opacity=".5"');
    },
    orange: function () {
      var d = [[38, 66], [60, 72], [70, 52], [52, 48], [46, 80]], s = SH(30) + Ci(50, 56, 34, "#ff9a1f", "r");
      d.forEach(function (p) { s += Fc(p[0], p[1], 1.8, "#e07a10", ' opacity=".6"'); });
      return s + P("M52 24Q62 10 78 14Q70 28 52 24Z", GREEN) + Ci(50, 23, 3.5, "#7a4a24") + SHN(34, 42, 6, 11, 30);
    },
    grapes: function () {
      var pts = [[28, 38], [50, 38], [72, 38], [39, 56], [61, 56], [50, 74]], s = SH(24) + L("M50 26L50 12", "#7a4a24", 4) + P("M52 16Q64 4 78 10Q70 22 52 16Z", GREEN);
      pts.forEach(function (p) { s += Ci(p[0], p[1], 13.5, "#8e44c8", "r"); });
      pts.forEach(function (p) { s += Fc(p[0] - 4.5, p[1] - 5, 2.5, "#fff", ' opacity=".6"'); });
      return s;
    },
    strawberry: function () {
      var s = SH(28) + P("M50 90C24 74 14 46 24 34C34 24 44 30 50 34C56 30 66 24 76 34C86 46 76 74 50 90Z", "#e63950", "r"),
        sd = [[34, 48], [50, 46], [66, 48], [40, 62], [58, 62], [49, 76], [28, 58], [72, 58]];
      sd.forEach(function (p) { s += Fe(p[0], p[1], 2, 3, "#ffe08a"); });
      return s + P("M32 34L43 31L50 20L57 31L68 34L58 39L50 46L42 39Z", GREEN) + SHN(28, 50, 4, 9, 15);
    },
    watermelon: function () {
      return SH(38, 88) + P("M8 38A42 42 0 0 0 92 38Z", "#3fa34d") + F("M13 38A37 37 0 0 0 87 38Z", "#f1f7d8") +
        PN("M17 38A33 33 0 0 0 83 38Z", "#ee4b5a", "r") +
        Fe(34, 52, 2.4, 4, EYE) + Fe(50, 55, 2.4, 4, EYE) + Fe(66, 52, 2.4, 4, EYE) + Fe(42, 66, 2.4, 4, EYE) + Fe(58, 66, 2.4, 4, EYE) +
        SHN(28, 48, 3, 6, 40, 0.4);
    },
    laddoo: function () {
      var s = SH(32, 93) + Ci(50, 50, 30, "#f4b72e", "r"), i, a, r, x, y;
      for (i = 0; i < 40; i++) {
        a = i * 2.39996; r = Math.sqrt((i + 0.5) / 40) * 26; x = f1(50 + r * Math.cos(a)); y = f1(50 + r * Math.sin(a));
        s += Fc(x, y, i % 3 ? 1.5 : 2, i % 2 ? "#ffe9a0" : "#c98a14", ' opacity=".75"');
      }
      return s + P("M42 31Q51 23 60 30Q54 33 50 36Z", "#f3dfb0") + E(60, 40, 4, 2.4, "#e8d3a0", "l", ' transform="rotate(30 60 40)"') +
        P("M20 70Q50 82 80 70L72 91L28 91Z", "#fff6e0") + L("M32 76L35 90M44 79L45 91M56 79L55 91M68 76L65 90", "#d8c9a6", 1.5) + SHN(38, 36, 6, 9, 35, 0.5);
    },
    roti: function () {
      return SH(40, 88, 5) + E(50, 58, 42, 31, "#d9a24e") + E(50, 52, 42, 31, "#f2c274", "r") +
        Fe(34, 48, 6, 4, "#b8742a", ' opacity=".55"') + Fe(58, 42, 5, 3.5, "#b8742a", ' opacity=".55"') + Fe(66, 58, 6, 4, "#b8742a", ' opacity=".55"') +
        Fe(42, 64, 5, 3.5, "#b8742a", ' opacity=".55"') + Fe(52, 55, 4, 3, "#b8742a", ' opacity=".45"') + SHN(28, 44, 7, 3, -25, 0.5);
    },
    samosa: function () {
      return SH(38) + P("M50 14C54 14 58 20 90 78C92 84 88 88 82 88L18 88C12 88 8 84 10 78C42 20 46 14 50 14Z", "#e0a040", "r") +
        L("M50 30L30 80", "#a86a1c", 2, ' opacity=".5"') + L("M50 30L70 80", "#a86a1c", 2, ' opacity=".5"') +
        L("M16 82L84 82", "#a86a1c", 3, ' stroke-dasharray="3 4" opacity=".6"') + Fc(46, 58, 2.2, "#a86a1c", ' opacity=".5"') +
        Fc(58, 68, 2.2, "#a86a1c", ' opacity=".5"') + Fc(40, 70, 2, "#a86a1c", ' opacity=".5"') + SHN(44, 40, 3.5, 12, 22);
    },
    cup: function () {
      return SH(30) + L("M80 42C98 42 98 70 76 70", "#3d9ccc", 7) + P("M20 34L80 34L74 78C73 86 66 90 58 90L42 90C34 90 27 86 26 78Z", SKY) +
        E(50, 34, 30, 6, "#8fd6f5") + Fe(50, 35, 25, 3.8, "#b5651d") +
        L("M42 24Q36 18 44 12", "#aab4c0", 3, ' opacity=".7"') + L("M56 24Q50 18 58 12", "#aab4c0", 3, ' opacity=".7"') + SHN(32, 58, 3, 12, 8);
    },
    egg: function () {
      return SH(26) + P("M50 12C70 12 80 46 80 62C80 80 66 90 50 90C34 90 20 80 20 62C20 46 30 12 50 12Z", "#fdecc8", "r") + SHN(36, 40, 5, 11, 20, 0.7);
    },
    balloon: function (v) {
      var c = BALLOONS[(v || 0) % 5];
      return SH(12, 96, 2.4) + L("M50 82Q40 88 52 92Q62 95 50 98", "#8a8a96", 1.6) + P("M50 78L44 86L56 86Z", c) +
        P("M50 8C74 8 82 32 76 50C72 62 58 72 50 76C42 72 28 62 24 50C18 32 26 8 50 8Z", c, "r") + SHN(34, 30, 5, 10, 25, 0.6);
    },
    ball: function () {
      return SH(30) + Ci(50, 56, 34, RED, "r") + L("M18 46Q50 68 82 46", "#fff", 3.5, ' opacity=".9"') + L("M20 70Q50 48 80 70", "#fff", 3.5, ' opacity=".9"') + SHN(36, 38, 6, 10, 35, 0.5);
    },
    star: function () {
      return SH(30) + P(starD(50, 54, 40, 20, 5), YELLOW, "r", ' stroke-width="7"') + SHN(40, 44, 4, 8, 30, 0.6);
    },
    flower: function () {
      var s = SH(14) + L("M50 62L50 90", "#3e9a45", 5) + P("M52 80Q66 68 78 74Q70 88 52 80Z", GREEN), i;
      for (i = 0; i < 5; i++) s += E(50, 21, 12, 14, PINK, "r", ' transform="rotate(' + i * 72 + ' 50 36)"');
      return s + Ci(50, 36, 11, YELLOW, "r") + SHN(45, 31, 3, 4, 0, 0.7);
    },
    lotus: function () {
      var pt = "M0 0C-14 -16 -12 -40 0 -52C12 -40 14 -16 0 0Z";
      function pet(a, c) { return P(pt, c, "l", ' transform="translate(50 74) rotate(' + a + ')"'); }
      return SH(40, 90) + E(50, 80, 42, 11, "#43a35a") + pet(-62, "#f7b0cf") + pet(62, "#f7b0cf") + pet(-32, "#f48db8") + pet(32, "#f48db8") + pet(0, "#ee5a96") + SHN(46, 46, 2.5, 9, 0, 0.5);
    },
    leaf: function () {
      return SH(30) + P("M16 84C10 40 40 12 86 14C90 56 62 88 16 84Z", "#4caf50", "r") + L("M16 84Q46 52 80 20", "#2e7d32", 2.5) +
        L("M38 62L50 66M48 50L64 54M34 70L36 54M56 40L66 36", "#2e7d32", 1.8, ' opacity=".6"') + SHN(40, 32, 3.5, 9, 55, 0.5);
    },
    tree: function () {
      return SH(26) + P("M43 92L45 56L55 56L57 92Z", "#a0683a") + Ci(30, 56, 20, GREEN, "r") + Ci(70, 56, 20, GREEN, "r") + Ci(50, 38, 27, GREEN, "r") +
        SHN(40, 28, 7, 5, -30, 0.5) + Fc(36, 62, 2, "#2e7d32", ' opacity=".4"') + Fc(62, 50, 2, "#2e7d32", ' opacity=".4"');
    },
    kite: function () {
      var o = ' stroke-width="2.5"';
      return SH(10, 96, 2) + L("M50 70Q38 78 50 84Q62 90 50 96", "#8a6a4a", 1.8) + P("M46 78L38 76L40 84Z", PINK) + P("M54 88L62 86L60 94Z", BLUE) +
        P("M50 8L50 38L24 38Z", RED, "l", o) + P("M50 8L76 38L50 38Z", YELLOW, "l", o) + P("M24 38L50 38L50 72Z", YELLOW, "l", o) + P("M76 38L50 38L50 72Z", RED, "l", o) + SHN(40, 30, 2.5, 7, 30, 0.5);
    },
    pencil: function () {
      return SH(30, 93, 4) + '<g transform="rotate(-40 50 50)">' + Rc(9, 41, 15, 18, 6, "#f48db8") + Rc(22, 41, 8, 18, 0, "#b9c0cc") + Rc(30, 41, 42, 18, 0, YELLOW) +
        L("M30 47H72M30 53H72", "#d9ae1c", 1.5, ' opacity=".8"') + P("M72 41L93 50L72 59Z", "#f3c98b") + P("M86 46.5L93 50L86 53.5Z", "#454552") + L("M32 44H70", "#fff", 2, ' opacity=".5"') + "</g>";
    },
    crayon: function () {
      return SH(30, 93, 4) + '<g transform="rotate(-40 50 50)">' + Rc(10, 36, 16, 28, 7, "#3fa34d") + Rc(20, 36, 50, 28, 0, "#4caf50") + Rc(30, 36, 26, 28, 0, "#fff1d6") +
        L("M30 42H56M30 58H56", "#4caf50", 2) + P("M70 36L92 50L70 64Z", "#4caf50") + L("M22 40H68", "#fff", 2, ' opacity=".4"') + "</g>";
    },
    book: function () {
      return SH(32) + Rc(24, 20, 60, 70, 3, "#fff6e0") + L("M30 84H80M30 79H80", "#d8c9a6", 1.2) +
        Rc(16, 14, 62, 72, 5, BLUE) + Rc(16, 14, 11, 72, 5, "#2a62b0") + Ci(52, 44, 11, YELLOW, "r") + F(starD(52, 44, 6, 2.8, 5), "#fff", ' opacity=".9"') +
        Rc(36, 62, 30, 5, 2.5, "#9cc4f5") + P("M60 14L60 30L65 26L70 30L70 14Z", RED) + SHN(34, 30, 3, 8, 0, 0.35);
    },
    bag: function () {
      return SH(32) + L("M38 32C38 12 62 12 62 32", "#2a62b0", 6) + Rc(20, 26, 60, 64, 15, BLUE, "l") + L("M28 46H72", "#2a62b0", 2.5) +
        Rc(28, 58, 44, 27, 9, ORANGE) + L("M34 66H66", "#c97a10", 2, ' opacity=".6"') + Ci(50, 66, 3.5, YELLOW) + Ci(36, 46, 2.5, YELLOW) + SHN(30, 40, 3, 8, 10, 0.5);
    },
    fish: function () {
      return SH(34, 86) + P("M30 50L8 28Q14 50 8 72Z", "#ff7a30") + P("M44 30Q58 12 74 32Z", "#e8631c") + E(56, 50, 33, 23, "#ff8a3d", "r") +
        L("M60 28Q67 50 60 72", "#fff", 5, ' opacity=".55"') + L("M44 40Q48 50 44 60", "#c04e10", 2, ' opacity=".6"') + Ci(76, 44, 5.5, "#fff", "l", ' stroke-width="1.5"') +
        Fc(77, 44, 2.8, EYE) + L("M86 54Q82 57 80 56", "#a03e0c", 2) + SHN(44, 38, 8, 3, -20, 0.5);
    },
    bird: function () {
      return SH(26) + L("M42 80L42 92M56 80L56 92", "#f08a24", 3) + P("M20 62L2 48L8 70Z", "#2f7ec4") + Ci(46, 58, 28, SKY, "r") + Ci(66, 36, 17, SKY, "r") +
        Fe(52, 68, 18, 12, "#e4f3fd", ' opacity=".8"') + E(40, 58, 16, 10, "#2f7ec4", "l", ' transform="rotate(-20 40 58)"') +
        P("M80 34L93 39L80 45Z", "#ff8a24") + eye(70, 32, 3.6) + SHN(60, 26, 4, 2.5, -20, 0.6);
    },
    butterfly: function () {
      var up = P("M50 46C30 8 4 18 11 44C14 56 34 56 50 50Z", "#a64dd1", "r") + Ci(28, 32, 5.5, "#fff", "l", ' opacity=".7" stroke="none"'),
        lo = P("M50 52C34 54 16 62 24 78C30 92 46 78 50 58Z", ORANGE, "r") + Ci(33, 70, 4, "#fff", "l", ' opacity=".7" stroke="none"');
      return SH(24, 95, 3) + up + lo + '<g transform="translate(100 0) scale(-1 1)">' + up + lo + "</g>" +
        E(50, 54, 4.5, 21, "#5a2d82") + Ci(50, 30, 5, "#5a2d82") + L("M48 27Q42 14 36 14M52 27Q58 14 64 14", "#5a2d82", 2);
    },
    cat: function () {
      return SH(30) + T("M72 84C96 84 98 58 86 50", "#d98820", 8) + E(50, 72, 26, 22, "#f2a23c", "r") +
        P("M26 32L28 6L45 20Z", "#f2a23c") + P("M74 32L72 6L55 20Z", "#f2a23c") + F("M31 26L32 14L40 21Z", "#f7a8b8") + F("M69 26L68 14L60 21Z", "#f7a8b8") +
        Ci(50, 42, 25, "#f2a23c", "r") + L("M50 20V28M42 22L44 28M58 22L56 28", "#c47010", 2.2) + Fe(40, 42, 3.8, 5, EYE) + Fe(60, 42, 3.8, 5, EYE) +
        Fc(41.2, 40, 1.4, "#fff") + Fc(61.2, 40, 1.4, "#fff") + F("M46 49L54 49L50 54Z", "#e8708a") + L("M50 54Q46 59 42 56M50 54Q54 59 58 56", "#7a4a1a", 1.6) +
        L("M30 50L16 47M30 54L17 56M70 50L84 47M70 54L83 56", "#fff", 1.6, ' opacity=".9"') + SHN(36, 30, 4, 7, 25, 0.5);
    },
    dog: function () {
      return SH(30) + E(50, 84, 24, 14, "#e8b87a", "r") + Ci(50, 40, 26, "#e8b87a", "r") +
        E(21, 40, 10, 20, "#8b5a2b", "l", ' transform="rotate(12 21 40)"') + E(79, 40, 10, 20, "#8b5a2b", "l", ' transform="rotate(-12 79 40)"') +
        E(50, 50, 16, 12, "#f9e6cc", "r") + Fe(50, 44, 6.5, 4.5, EYE) + Fc(48, 42.8, 1.3, "#fff") +
        eye(39, 34, 3.4) + eye(61, 34, 3.4) + E(50, 59, 5, 4.5, "#f0788c") + L("M50 48V55M42 55Q50 62 50 55Q50 62 58 55", "#7a4a1a", 1.6) +
        L("M32 66Q50 76 68 66", RED, 5) + Fc(50, 74, 3, YELLOW) + SHN(36, 26, 4, 7, 25, 0.5);
    },
    cow: function () {
      return SH(30) + L("M31 22Q22 6 12 12", "#e6cf94", 6) + L("M69 22Q78 6 88 12", "#e6cf94", 6) +
        E(15, 36, 13, 7, "#c58a5a", "l", ' transform="rotate(-20 15 36)"') + E(85, 36, 13, 7, "#c58a5a", "l", ' transform="rotate(20 85 36)"') +
        E(50, 44, 26, 32, "#f6efe4", "r") + Fe(62, 26, 12, 8, "#b87a4a", ' transform="rotate(-20 62 26)"') + eye(39, 38, 3.6) + eye(61, 38, 3.6) +
        E(50, 68, 21, 15, "#f4a6a0", "r") + Fe(42, 68, 3, 4.5, "#a55a58") + Fe(58, 68, 3, 4.5, "#a55a58") + L("M50 76Q46 80 42 78M50 76Q54 80 58 78", "#a55a58", 1.5) + SHN(36, 30, 4, 8, 20, 0.6);
    },
    elephant: function () {
      var g = "#b6bfcc";
      return SH(32) + E(19, 44, 18, 25, "#9fa8b8", "r") + E(81, 44, 18, 25, "#9fa8b8", "r") + Fe(19, 44, 10, 17, "#e9b4c0", ' opacity=".6"') + Fe(81, 44, 10, 17, "#e9b4c0", ' opacity=".6"') +
        Ci(50, 42, 27, g, "r") + T("M50 52C50 76 46 86 36 84C32 83 32 78 36 78", g, 15) +
        P("M37 62Q27 70 31 78Q35 72 41 68Z", "#fff6e6") + P("M63 62Q73 70 69 78Q65 72 59 68Z", "#fff6e6") + eye(39, 36, 3.6) + eye(61, 36, 3.6) + SHN(36, 26, 5, 8, 25, 0.5);
    },
    peacock: function () {
      var s = SH(30), i, a = [-60, -40, -20, 0, 20, 40, 60];
      for (i = 0; i < a.length; i++) {
        s += '<g transform="rotate(' + a[i] + ' 50 72)">' + E(50, 44, 8, 25, "#2fa88a", "l") + Ci(50, 24, 5.5, BLUE, "r") + Fc(50, 24, 2.6, YELLOW) + "</g>";
      }
      return s + E(50, 78, 16, 17, "#2c7be0", "r") + P("M44 70Q42 56 50 50Q58 56 56 70Z", "#2c7be0") + Ci(50, 48, 10, "#2c7be0", "r") +
        L("M50 38V30M45 39L42 32M55 39L58 32", "#2c7be0", 1.8) + Fc(50, 29, 2, YELLOW) + Fc(42, 31, 2, YELLOW) + Fc(58, 31, 2, YELLOW) +
        P("M46 51L54 51L50 58Z", "#ff9a30") + eye(46, 46, 2.4) + eye(54, 46, 2.4) + L("M46 92V96M54 92V96", "#c58a3a", 2.5);
    },
    duck: function () {
      return SH(34) + P("M14 62L2 44L28 54Z", "#ffd23f") + E(46, 68, 36, 22, "#ffd23f", "r") + Ci(66, 34, 20, "#ffd23f", "r") +
        E(42, 68, 20, 12, "#f2b705", "l", ' transform="rotate(-10 42 68)"') + E(85, 40, 11, 5.5, ORANGE) + eye(70, 29, 3.4) + Fe(74, 40, 4, 2.6, PINK, ' opacity=".5"') + SHN(58, 24, 5, 2.8, -25, 0.6);
    },
    car: function () {
      return SH(40, 85, 4) + P("M8 62L8 52C8 46 14 44 22 42L34 28C36 26 38 26 42 26L64 26C68 26 70 28 72 30L80 42C90 44 94 48 94 56L94 62C94 66 90 68 86 68L14 68C10 68 8 66 8 62Z", RED) +
        P("M37 31L30 42L48 42L48 31Z", "#bfe6fb") + P("M54 31L54 42L75 42L67 31Z", "#bfe6fb") + L("M52 42V68", "#a82f27", 1.6, ' opacity=".6"') +
        Ci(90, 54, 4, YELLOW) + Ci(28, 70, 11, DARK, "r") + Ci(28, 70, 4.5, "#c8ced8") + Ci(74, 70, 11, DARK, "r") + Ci(74, 70, 4.5, "#c8ced8") + SHN(30, 33, 8, 1.6, 0, 0.5);
    },
    bus: function () {
      return SH(42, 85, 4) + Rc(6, 22, 88, 54, 11, YELLOW) + Rc(14, 30, 16, 17, 3, "#bfe6fb") + Rc(35, 30, 16, 17, 3, "#bfe6fb") + Rc(56, 30, 16, 17, 3, "#bfe6fb") + P("M77 30L88 30Q91 30 91 34L91 47L77 47Z", "#bfe6fb") +
        F("M7 56H93V61H7Z", RED, ' opacity=".9"') + Ci(90, 67, 3.2, "#fff6c9") + Ci(28, 77, 10, DARK, "r") + Ci(28, 77, 4, "#c8ced8") + Ci(72, 77, 10, DARK, "r") + Ci(72, 77, 4, "#c8ced8") + SHN(30, 25, 10, 1.6, 0, 0.5);
    },
    auto: function () {
      return SH(44, 92, 4) + Ci(80, 82, 9, "#2b2b36", "r") + Rc(62, 40, 28, 22, 4, "#c0623a") + Rc(36, 56, 54, 9, 3, "#d9794a") + L("M92 26V64", "#1f3d28", 3) +
        P("M26 30C34 12 82 10 97 28L97 32Q60 27 26 35Z", "#2f5d3a", "l") + P("M34 32L24 54L31 54L39 33Z", "#bfe6fb") +
        P("M30 62L92 62L92 78C92 80 90 82 88 82L30 82Z", "#9ccc3c") + L("M32 70H90", "#6a9a1e", 2) +
        P("M8 80L8 66C8 58 16 54 26 54L34 54L34 82L12 82C10 82 8 82 8 80Z", "#9ccc3c") + Ci(10, 64, 3.8, YELLOW) +
        Ci(20, 84, 8, DARK, "r") + Ci(20, 84, 3, "#c8ced8") + Ci(66, 83, 10, DARK, "r") + Ci(66, 83, 4, "#c8ced8") + SHN(50, 20, 14, 2, -4, 0.35);
    },
    cycle: function () {
      return SH(40, 90, 3.5) + '<circle cx="24" cy="66" r="20" fill="none" stroke="#7d879c" stroke-width="4.5"/><circle cx="76" cy="66" r="20" fill="none" stroke="#7d879c" stroke-width="4.5"/>' +
        T("M24 66L46 68L40 36L24 66M46 68L66 38L40 36M66 38L76 66", RED, 4.5) + L("M66 38L64 28L72 28", "#555", 4) + Rc(32, 31, 16, 6, 3, "#555") + Ci(24, 66, 4, YELLOW) + Ci(76, 66, 4, YELLOW) + Ci(46, 68, 4.5, "#c8ced8");
    },
    boat: function () {
      return SH(40, 96, 2.5) + P("M12 62L88 62L76 80C74 82 72 84 68 84L32 84C28 84 26 82 24 80Z", RED) + L("M50 8V62", BROWN, 3) + P("M48 12L48 56L18 56Z", "#fff6e6") + P("M53 22L53 56L82 56Z", YELLOW) + P("M50 8L62 12L50 16Z", BLUE) +
        P("M5 82Q15 76 25 82T45 82T65 82T85 82T97 82L97 92L5 92Z", SKY, "l", ' opacity=".92"') + L("M12 87Q18 84 24 87M60 88Q66 85 72 88", "#fff", 2, ' opacity=".6"');
    },
    house: function () {
      return SH(38) + Rc(66, 14, 12, 28, 2, "#c0623a") + Rc(16, 44, 68, 46, 3, "#ffe0b2") + P("M8 50L50 12L92 50Z", RED, "l", ' stroke-width="4"') +
        Rc(41, 60, 18, 30, 3, "#a0683a") + Fc(55, 76, 1.8, YELLOW) + Rc(22, 56, 14, 14, 2, "#bfe6fb") + Rc(64, 56, 14, 14, 2, "#bfe6fb") +
        L("M29 56V70M22 63H36M71 56V70M64 63H78", "#6a8cae", 1.4) + SHN(34, 28, 12, 2.2, -38, 0.4);
    },
    sun: function () {
      var s = "", i, a, c = Math.cos, n = Math.sin;
      for (i = 0; i < 12; i++) { a = i * Math.PI / 6; s += L("M" + f1(50 + 34 * c(a)) + " " + f1(50 + 34 * n(a)) + "L" + f1(50 + 46 * c(a)) + " " + f1(50 + 46 * n(a)), "#ffa726", 7); }
      return s + Ci(50, 50, 27, "#ffcb2e", "r") + SHN(40, 38, 6, 10, 40, 0.6);
    },
    cloud: function () {
      return Fe(50, 90, 34, 3.5, "#000", ' opacity=".08"') + P("M26 76C8 76 6 52 26 50C26 30 52 24 60 40C72 28 92 38 86 56C100 58 100 76 82 76Z", "#f0f7ff", "l") + L("M20 66Q24 58 32 58", "#fff", 3, ' opacity=".9"');
    },
    umbrella: function () {
      return SH(30) + T("M50 52V82C50 94 36 94 36 82", BROWN, 5) + P("M8 54C8 26 30 10 50 10C70 10 92 26 92 54C84 48 76 48 70 54C62 48 56 48 50 54C44 48 38 48 30 54C24 48 16 48 8 54Z", RED, "r") +
        PN("M50 10C40 16 34 32 30 54C38 48 44 48 50 54Z", YELLOW, "l") + PN("M50 10C60 16 66 32 70 54C62 48 56 48 50 54Z", YELLOW, "l") +
        L("M50 10C40 16 34 32 30 54M50 10C60 16 66 32 70 54M50 10V54", "#a8302a", 1.8) + Ci(50, 9, 3.5, "#c8ced8") + SHN(30, 26, 4, 9, 40, 0.5);
    },
    diya: function () {
      return SH(38, 92) + Fc(50, 36, 18, "#ffd23f", ' opacity=".16"') + P("M12 60C14 80 30 90 50 90C70 90 86 80 88 60C70 68 30 68 12 60Z", "#d9692e", "r") +
        E(50, 60, 38, 8, "#e88a4e") + Fe(50, 60, 30, 5, "#8a4a1c", ' opacity=".55"') + Fc(30, 78, 2.4, YELLOW) + Fc(50, 82, 2.4, YELLOW) + Fc(70, 78, 2.4, YELLOW) +
        P("M50 56C36 42 46 30 50 14C54 30 64 42 50 56Z", "#ff9f1c", "r") + F("M50 54C44 46 48 40 50 32C52 40 56 46 50 54Z", "#ffe27a") + SHN(26, 76, 4, 2, -20, 0.5);
    },
    bell: function () {
      return SH(34) + Ci(50, 12, 5, "#e09a10") + P("M50 14C34 14 28 30 28 48C28 64 20 72 14 78L86 78C80 72 72 64 72 48C72 30 66 14 50 14Z", "#f5b81c", "r") +
        Ci(50, 84, 8, "#e09a10", "r") + E(50, 78, 37, 6.5, "#e8a512") + SHN(38, 40, 4.5, 14, 12, 0.6);
    },
    shoe: function () {
      return SH(42, 88, 4) + P("M12 70L12 30C12 24 18 22 24 24C30 36 40 40 50 44C60 52 76 52 88 62C94 66 94 70 94 72Z", RED, "l") +
        L("M30 36L38 42M40 42L48 48", "#fff", 3.5, ' opacity=".9"') + Rc(9, 68, 88, 15, 6, "#fff6e0") + L("M14 76H92", "#d8c9a6", 1.6) + PN("M12 40Q20 46 20 66L12 66Z", "#c0352c", "l") + SHN(24, 36, 3, 7, 0, 0.5);
    },
    cap: function () {
      return SH(38, 90) + P("M14 64C14 32 30 20 50 20C70 20 86 32 86 64Z", BLUE, "r") + L("M50 22V62M34 26Q30 44 32 62M66 26Q70 44 68 62", "#2a62b0", 1.6, ' opacity=".6"') +
        P("M38 64C54 54 84 56 97 68C93 78 60 78 38 68Z", "#2a62b0", "l") + Ci(50, 20, 4.5, "#2a62b0") + SHN(34, 34, 5, 9, 40, 0.5);
    }
  };

  /* ======== everyday-word items (animals, food, home, nature, body, people) ======== */
  var I = ITEMS;
  /* ---- shared helpers ---- */
  var DKB = "#4a3326", WHITE = "#fffaf0";
  function eyes(cx, cy, dx, r) { return eye(cx - dx, cy, r) + eye(cx + dx, cy, r); }
  function smile(cx, cy, w, c) { return L("M" + (cx - w) + " " + cy + "Q" + cx + " " + f1(cy + w * 0.9) + " " + (cx + w) + " " + cy, c || "#7a3a2a", 1.8); }
  function hoof(x, y, w, c) { return Rc(f1(x), y, w, 5, 2, c || DKB, "l", ' stroke-width="1.5"'); }
  // Generic side-view four-legged animal (faces right). o: c body, d far legs, c2 muzzle, pre (behind: tail), mane (over the neck),
  // ear (absolute coords, before head), hd (details inside the rotated head), post; head = ellipse hx,hy,hrx,hry tilted by rot.
  function quad(o) {
    var c = o.c, d = o.d || shade(c, 0.82), bx = o.bx || 42, by = o.by || 52, rx = o.rx || 29, ry = o.ry || 18, lw = o.lw || 8, ly = o.ly || 88,
      hx = o.hx || 80, hy = o.hy || 32, hrx = o.hrx || 9, hry = o.hry || 16, rot = o.rot == null ? -38 : o.rot, hf = o.hf || DKB,
      lx = [[bx - rx * 0.5, d], [bx + rx * 0.66, d], [bx - rx * 0.88, c], [bx + rx * 0.34, c]], s = SH(o.sh || 36, 92, 4) + (o.pre || ""), i;
    for (i = 0; i < 4; i++) s += Rc(f1(lx[i][0]), by, lw, ly - by, lw / 2, lx[i][1], "l") + (o.nohoof ? "" : hoof(lx[i][0] - 0.5, ly - 5, lw + 1, hf));
    s += T("M" + f1(bx + rx * 0.6) + " " + (by - 6) + "L" + f1(hx - 2) + " " + f1(hy + 6), c, o.nw || 13);
    s += E(bx, by, rx, ry, c, "r") + (o.mid || "") + (o.mane || "") + (o.ear || "");
    s += '<g transform="rotate(' + rot + " " + hx + " " + hy + ')">' + E(hx, hy, hrx, hry, c, "r") + E(hx, f1(hy + hry * 0.62), f1(hrx * 0.84), f1(hry * 0.38), o.c2 || tint(c, 0.5), "r") +
      Fc(f1(hx - hrx * 0.28), f1(hy + hry * 0.72), 1.3, DKB) + Fc(f1(hx + hrx * 0.28), f1(hy + hry * 0.72), 1.3, DKB) + eye(f1(hx + hrx * 0.42), f1(hy - hry * 0.2), 2.8) + (o.hd || "") + "</g>";
    s += (o.post || "");
    return o.sc ? '<g transform="translate(' + (50 + (o.dx || 0)) + ' 92) scale(' + o.sc + ') translate(-50 -92)">' + s + "</g>" : s;
  }
  // Generic bird (faces right). o: c body, w wing, b belly, bk beak colour, bs beak path, tail path, lg leg colour, hr head radius, post
  function birdy(o) {
    var c = o.c;
    return SH(26) + (o.pre || "") + L("M42 80L40 92M56 80L56 92M34 92H44M52 92H62", o.lg || "#f08a24", 3) + P(o.tail || "M20 62L2 50L8 72Z", o.tc || o.w) + Ci(46, 58, 28, c, "r") + Ci(66, 36, o.hr || 17, o.hc || c, "r") +
      Fe(52, 68, 18, 12, o.b || tint(c, 0.6), ' opacity=".85"') + E(40, 58, 16, 10, o.w, "l", ' transform="rotate(-20 40 58)"') + P(o.bs || "M80 34L93 39L80 45Z", o.bk || "#ff8a24") +
      eye(70, 32, 3.6) + (o.post || "") + SHN(60, 26, 4, 2.5, -20, 0.6);
  }
  var SPOTS = function (pts, c, r) { return pts.map(function (p) { return Fc(p[0], p[1], r, c); }).join(""); };

  /* ---- farm and wild animals ---- */
  I.hen = function () {
    return SH(30) + L("M42 84V93M56 84V93M36 93H46M52 93H62", "#f0a020", 3.2) + P("M22 58L6 44L8 70Z", "#a85f24") + P("M24 52L10 34L14 60Z", "#c97b3a") + E(46, 64, 28, 23, "#d9893c", "r") + E(64, 50, 12, 14, "#d9893c", "r") +
      E(40, 66, 15, 11, "#b86c28", "l", ' transform="rotate(-15 40 66)"') + Ci(70, 38, 13, "#d9893c", "r") + Ci(66, 25, 4.2, RED, "r") + Ci(72, 23, 4.8, RED, "r") + Ci(78, 27, 3.8, RED, "r") +
      P("M80 35L93 40L80 45Z", YELLOW) + Ci(78, 50, 3.8, RED, "r") + eye(72, 35, 2.8) + SHN(60, 54, 4, 8, 20, 0.45);
  };
  I.rooster = function () {
    return SH(32) + L("M42 82V93M54 82V93M36 93H46M50 93H60", "#f0a020", 3.2) + P("M26 58C0 54 -2 24 10 8C16 28 28 38 34 50Z", GREEN, "l") + P("M28 62C4 66 -4 44 4 26C14 40 24 46 34 54Z", BLUE, "l") + P("M26 54C8 40 14 16 26 6C26 26 34 38 38 48Z", ORANGE, "l") +
      E(46, 64, 24, 22, "#e0562a", "r") + E(62, 46, 11, 16, "#e0562a", "r") + E(42, 66, 13, 10, "#b83a1c", "l", ' transform="rotate(-15 42 66)"') + Ci(66, 28, 12.5, "#f0a030", "r") +
      Ci(60, 14, 4.2, RED, "r") + Ci(66, 11, 5, RED, "r") + Ci(72, 14, 4.2, RED, "r") + P("M76 26L90 31L76 37Z", YELLOW) + Ci(76, 42, 4.5, RED, "r") + eye(69, 26, 2.8);
  };
  I.goat = function () {
    var hn = T("M70 20Q60 2 50 8", "#6a4a22", 6);
    return quad({sc: 0.88,  c: "#e9dfcf", d: "#cdbfa8", lw: 6, ly: 90, rx: 27, ry: 16, by: 52, hx: 79, hy: 30, hrx: 8, hry: 14, rot: -30, c2: "#f6efe3", nw: 11, hf: "#6a4a30",
      pre: T("M14 42Q8 36 12 32", "#cdbfa8", 4), ear: E(66, 28, 9, 4.4, "#cdbfa8", "l", ' transform="rotate(25 66 28)"') + hn + T("M75 18Q74 2 62 -2", "#6a4a22", 6),
      post: P("M84 46L91 62L80 52Z", "#fffaf0", "l") });
  };
  I.sheep = function () {
    var w = "#f6f2ea", s = SH(32) + L("M30 76V90M42 78V91M62 78V91M74 76V90", DKB, 5) + Ci(76, 52, 12, "#4a4752", "r") + E(66, 44, 9, 4.4, "#3a3842", "l", ' transform="rotate(-25 66 44)"') + E(88, 44, 8, 4, "#3a3842", "l", ' transform="rotate(25 88 44)"');
    [[24, 56, 15], [44, 46, 17], [62, 52, 15], [32, 70, 14], [52, 70, 14], [68, 66, 12], [16, 66, 11]].forEach(function (q) { s += Ci(q[0], q[1], q[2], w, "r"); });
    return '<g transform="translate(2 4) scale(.94)">' + s + Ci(78, 38, 7, w, "r") + eye(81, 50, 2.6) + Fe(86, 58, 3, 2, "#2a2830") + SHN(36, 40, 5, 4, 0, 0.6) + "</g>";
  };
  I.horse = function () {
    return quad({ c: "#b86f35", ly: 90, lw: 7, rx: 28, ry: 17, by: 52, hx: 80, hy: 30, hrx: 8.5, hry: 17, rot: -38, c2: "#d9a070", hf: "#3a2418",
      pre: T("M16 46C0 50 2 72 10 82", "#4a2a14", 7), mane: T("M58 40Q62 28 68 18", "#4a2a14", 8), ear: P("M66 22L66 7L75 17Z", "#b86f35") + P("M68 20L68 12L72 17Z", "#e8a8a0") });
  };
  I.donkey = function () {
    return quad({sc: 0.92,  c: "#8f8f9c", d: "#7a7a86", ly: 90, lw: 7, rx: 28, ry: 17, by: 52, hx: 80, hy: 30, hrx: 9.5, hry: 16, rot: -35, c2: "#e6e2d8", hf: "#3a3a44",
      pre: T("M16 48C6 54 6 70 10 78", "#6a6a76", 4.5) + Ci(10, 80, 5, "#4a4a56", "r"), mane: T("M58 40Q62 30 66 24", "#5a5a66", 6),
      ear: P("M64 22L60 -2L74 16Z", "#8f8f9c") + P("M64 20L62 6L70 17Z", "#e8a8a0") });
  };
  I.zebra = function () {
    var st = "", i;
    for (i = 0; i < 6; i++) st += L("M" + (22 + i * 8) + " 36Q" + (26 + i * 8) + " 52 " + (22 + i * 8) + " 70", "#2f2f3a", 4.2);
    return quad({sc: 0.94,  c: "#f6f6f6", d: "#dcdce2", ly: 90, lw: 7, rx: 28, ry: 17, by: 52, hx: 80, hy: 30, hrx: 8.5, hry: 17, rot: -38, c2: "#3a3a44", hf: "#2f2f3a",
      pre: T("M16 46C0 50 2 72 10 82", "#2f2f3a", 6),
      mid: '<clipPath id="zc@"><ellipse cx="42" cy="52" rx="28" ry="17"/></clipPath><g clip-path="url(#zc@)">' + st + "</g>" + L("M30 78V86M52 76V86", "#2f2f3a", 3),
      mane: T("M58 40Q62 28 68 18", "#2f2f3a", 8), ear: P("M66 22L66 7L75 17Z", "#f6f6f6") + P("M67 20L67 12L72 17Z", "#2f2f3a"),
      post: L("M72 18L76 28M70 26L76 34M76 12L80 22", "#2f2f3a", 3) });
  };
  I.camel = function () {
    var c = "#d6a35a";
    return quad({sc: 0.92,  c: c, d: "#b98a44", ly: 91, lw: 6, rx: 28, ry: 16, by: 56, hx: 82, hy: 24, hrx: 8, hry: 13, rot: -75, c2: "#ecd0a0", nw: 10, hf: "#8a6a30", sh: 34,
      pre: T("M14 54Q6 60 8 72", "#b98a44", 4),
      mid: Ci(34, 38, 12, c, "r") + Ci(54, 40, 11, c, "r") + SHN(31, 33, 3, 6, 0, 0.45),
      ear: Ci(74, 12, 3.4, c, "l") });
  };
  I.giraffe = function () {
    var c = "#f6c54a";
    return quad({sc: 0.8,  c: c, d: "#dba92c", bx: 38, rx: 24, ry: 15, by: 56, lw: 5.5, ly: 91, hx: 74, hy: 12, hrx: 8, hry: 10, rot: -80, c2: "#fbe6a8", nw: 11, hf: "#6a4a20", sh: 32,
      pre: T("M14 54Q8 60 10 72", "#dba92c", 3.5),
      mid: SPOTS([[24, 52], [36, 60], [46, 50], [30, 44], [50, 62]], "#b5651d", 5) + SPOTS([[60, 40], [64, 56], [58, 28]], "#b5651d", 3.2),
      ear: T("M72 5L70 -1M78 5L80 -1", "#8a5a2b", 3) + Ci(70, -1, 2.2, "#6a4a20") + Ci(80, -1, 2.2, "#6a4a20") + E(66, 10, 6, 3, c, "l", ' transform="rotate(30 66 10)"') });
  };
  I.deer = function () {
    var c = "#c98b4f";
    return quad({sc: 0.86,  c: c, d: "#a8703a", lw: 5.5, ly: 90, rx: 26, ry: 15, by: 54, hx: 76, hy: 24, hrx: 8, hry: 13, rot: -45, c2: "#f0d9b8", nw: 10, hf: "#4a3326", sh: 32,
      pre: P("M14 48L6 42L10 56Z", WHITE),
      mid: SPOTS([[28, 46], [40, 50], [50, 44], [34, 58], [24, 56]], "#fff1d6", 2.6),
      ear: T("M68 8Q62 -2 58 2M64 4L66 -4M72 6Q74 -4 80 -6M74 0L82 -2", "#8a5a2b", 3) + E(64, 18, 7, 3.4, c, "l", ' transform="rotate(30 64 18)"') });
  };
  I.pig = function () {
    var c = "#f4a3b0";
    return SH(34) + T("M14 52C4 50 4 62 12 62C6 66 14 70 16 64", "#e88a98", 3.2) + Rc(22, 66, 9, 24, 4, "#e88a98", "l") + Rc(60, 66, 9, 24, 4, "#e88a98", "l") +
      E(44, 56, 32, 24, c, "r") + Rc(30, 68, 9, 22, 4, c, "l") + Rc(70, 68, 9, 22, 4, c, "l") + hoof(30, 85, 9, "#a8606c") + hoof(70, 85, 9, "#a8606c") + hoof(22, 85, 9, "#a8606c") + hoof(60, 85, 9, "#a8606c") +
      P("M62 28L66 12L78 24Z", c) + Ci(76, 46, 18, c, "r") + E(88, 54, 9, 11, "#f7b8c2", "r") + Fe(86, 51, 1.8, 3, "#b5586a") + Fe(91, 51, 1.8, 3, "#b5586a") + eye(77, 40, 3) + SHN(36, 42, 6, 9, 25, 0.5);
  };
  I.rabbit = function () {
    var c = "#f3efe8";
    return SH(28) + E(50, 76, 24, 18, c, "r") + Ci(76, 80, 8, "#fff", "r") + E(40, 90, 10, 5, "#e2dcd0", "l") + E(60, 90, 10, 5, "#e2dcd0", "l") +
      E(36, 20, 8, 22, c, "r", ' transform="rotate(-8 36 20)"') + E(64, 20, 8, 22, c, "r", ' transform="rotate(8 64 20)"') + E(36, 22, 4, 16, "#f4a6b4", "l", ' stroke="none" transform="rotate(-8 36 22)"') + E(64, 22, 4, 16, "#f4a6b4", "l", ' stroke="none" transform="rotate(8 64 22)"') +
      Ci(50, 50, 22, c, "r") + eyes(50, 47, 10, 3.6) + F("M46 54L54 54L50 59Z", "#f08aa0") + L("M50 59V63M50 63Q45 67 42 63M50 63Q55 67 58 63", "#8a6a6a", 1.5) + Rc(47, 64, 6, 6, 2, "#fff", "l", ' stroke-width="1.4"') +
      L("M30 54L16 51M30 58L17 60M70 54L84 51M70 58L83 60", "#9a9a9a", 1.3) + SHN(38, 40, 4, 6, 20, 0.6);
  };
  I.mouse = function () {
    var c = "#b3adc0";
    return SH(30) + T("M24 80C6 82 4 62 12 58", "#e8a4b2", 3.2) + E(40, 70, 26, 20, c, "r") + E(48, 78, 14, 11, "#e7e3ee", "r") + Rc(52, 80, 9, 12, 4, "#e8a4b2", "l") + E(30, 90, 12, 5, "#e8a4b2", "l") + E(52, 91, 10, 4.5, "#e8a4b2", "l") +
      Ci(54, 36, 13, c, "r") + Ci(54, 36, 8, "#f4a6b4", "r", ' stroke="none"') + E(68, 52, 19, 14, c, "r") + Ci(86, 55, 4.2, "#e8708a", "r") + Fc(70, 46, 3.3, EYE) + Fc(69, 45, 1.1, "#fff") + L("M82 56L96 52M82 58L96 60M82 60L94 67", "#6a6a76", 1.2) + SHN(42, 62, 4, 8, 20, 0.45);
  };
  I.monkey = function () {
    var c = "#8a5a2b", fc = "#f0c9a0";
    return SH(30) + T("M68 84C96 88 96 58 82 56", c, 6) + E(50, 76, 22, 18, c, "r") + E(50, 78, 12, 13, fc, "r") + Ci(34, 90, 7, c, "r") + Ci(66, 90, 7, c, "r") + Ci(26, 38, 9, c, "r") + Ci(74, 38, 9, c, "r") + Ci(26, 38, 5, fc, "r", ' stroke="none"') + Ci(74, 38, 5, fc, "r", ' stroke="none"') +
      Ci(50, 38, 23, c, "r") + E(50, 44, 18, 15, fc, "r") + Ci(40, 36, 8, fc, "l", ' stroke="none"') + Ci(60, 36, 8, fc, "l", ' stroke="none"') + eye(41, 37, 3.2) + eye(59, 37, 3.2) + Fe(46, 46, 1.4, 1.8, "#7a4a1a") + Fe(54, 46, 1.4, 1.8, "#7a4a1a") + smile(50, 50, 6) + SHN(38, 24, 4, 7, 25, 0.5);
  };
  I.tiger = function () {
    var c = "#f59a23", k = "#3d3d4a", st = "", i;
    for (i = 0; i < 6; i++) st += L("M" + (22 + i * 8) + " 34Q" + (27 + i * 8) + " 50 " + (22 + i * 8) + " 66", k, 4.2);
    return SH(38) + T("M14 52C0 52 0 72 12 74", c, 7) + L("M5 56L11 54M3 64L9 63", k, 3) + Rc(20, 56, 9, 32, 4, c, "l") + Rc(36, 62, 9, 26, 4, "#d98010", "l") + Rc(58, 62, 9, 26, 4, "#d98010", "l") + Rc(72, 56, 9, 32, 4, c, "l") +
      E(46, 54, 32, 20, c, "r") + '<clipPath id="tc@"><ellipse cx="46" cy="54" rx="32" ry="20"/></clipPath><g clip-path="url(#tc@)">' + st + "</g>" + E(46, 66, 20, 6, WHITE, "l", ' opacity=".7" stroke="none"') +
      Ci(62, 18, 5, c, "r") + Ci(86, 20, 5, c, "r") + Ci(76, 34, 18, c, "r") + E(82, 42, 11, 8, WHITE, "r") + F("M72 36L80 36L76 42Z", "none") + Fe(88, 38, 3.2, 2.4, "#e8708a") + eye(68, 30, 3) + eye(84, 30, 3) + L("M76 16V22M70 18L72 23M82 18L80 23M62 36L66 40", k, 2.4) + SHN(68, 24, 3.5, 5, 25, 0.5);
  };
  I.lion = function () {
    var s = SH(34) + E(50, 80, 22, 14, "#f2b84b", "r") + Ci(36, 90, 7, "#f2b84b", "r") + Ci(64, 90, 7, "#f2b84b", "r") + T("M70 84C90 88 94 70 90 62", "#d9922a", 4) + Ci(90, 60, 5, "#9a5a1c", "r"), i, a;
    for (i = 0; i < 12; i++) { a = i * Math.PI / 6; s += Ci(f1(50 + 26 * Math.cos(a)), f1(44 + 26 * Math.sin(a)), 12, "#a9611f", "r"); }
    return s + Ci(50, 44, 28, "#a9611f", "r") + Ci(34, 22, 6, "#f2b84b", "r") + Ci(66, 22, 6, "#f2b84b", "r") + Ci(50, 46, 21, "#f2b84b", "r") + E(50, 55, 12, 9, "#fbe6b0", "r") + eyes(50, 40, 9, 3.2) +
      F("M45 50L55 50L50 56Z", "#7a3a2a") + L("M50 56V60M50 60Q45 64 41 60M50 60Q55 64 59 60", "#7a3a2a", 1.5) + SHN(38, 28, 4, 7, 25, 0.5);
  };
  I.bear = function () {
    var c = "#7a4a28";
    return SH(32) + E(50, 76, 28, 20, c, "r") + E(50, 80, 16, 14, "#c9966a", "r") + Ci(28, 92, 9, c, "r") + Ci(72, 92, 9, c, "r") + Ci(24, 70, 8, c, "r") + Ci(76, 70, 8, c, "r") +
      Ci(26, 22, 10, c, "r") + Ci(74, 22, 10, c, "r") + Ci(26, 22, 5, "#c9966a", "r", ' stroke="none"') + Ci(74, 22, 5, "#c9966a", "r", ' stroke="none"') + Ci(50, 40, 27, c, "r") +
      E(50, 50, 13, 10, "#d9a97a", "r") + E(50, 45, 5.5, 3.8, "#2a1a14", "r") + L("M50 49V54M50 54Q45 58 42 55M50 54Q55 58 58 55", "#2a1a14", 1.6) + eyes(50, 36, 12, 3.4) + SHN(36, 26, 4, 7, 25, 0.5);
  };
  I.frog = function () {
    var c = "#58b947";
    return SH(34) + E(18, 82, 12, 9, c, "r") + E(82, 82, 12, 9, c, "r") + E(50, 66, 34, 24, c, "r") + E(50, 74, 22, 14, "#d6efb0", "r") + Rc(28, 84, 13, 7, 3.5, c, "l") + Rc(59, 84, 13, 7, 3.5, c, "l") +
      Ci(32, 38, 12, c, "r") + Ci(68, 38, 12, c, "r") + Ci(32, 38, 8, "#fff", "r", ' stroke-width="1.5"') + Ci(68, 38, 8, "#fff", "r", ' stroke-width="1.5"') + Fc(33, 39, 4.2, EYE) + Fc(67, 39, 4.2, EYE) + Fc(34.4, 37.6, 1.3, "#fff") + Fc(68.4, 37.6, 1.3, "#fff") +
      L("M26 60Q50 78 74 60", "#2e7d32", 2.2) + Fc(46, 54, 1.2, "#2e7d32") + Fc(54, 54, 1.2, "#2e7d32") + SHN(30, 62, 4, 7, 30, 0.35);
  };
  I.snake = function () {
    var c = "#6dbb3c";
    return SH(34) + T("M14 80C10 62 44 70 54 62C66 52 30 46 40 34C46 26 62 28 68 22", c, 13) + L("M14 80C10 62 44 70 54 62C66 52 30 46 40 34C46 26 62 28 68 22", "#e7d44a", 3.5, ' stroke-dasharray="1 9" opacity=".95"') +
      E(76, 22, 14, 11, c, "r", ' transform="rotate(-15 76 22)"') + L("M88 24L97 20M93 22L97 26", RED, 2) + eye(76, 16, 3.2) + SHN(70, 17, 3, 5, 0, 0.5);
  };
  I.ant = function () {
    var c = "#6b3f2a", s = SH(32, 90), l = "";
    [[34, 60, 18, 84], [46, 62, 46, 88], [58, 60, 74, 84]].forEach(function (q) { l += T("M" + q[0] + " " + q[1] + "Q" + (q[0] + (q[2] - q[0]) * 0.3) + " " + (q[1] + 6) + " " + q[2] + " " + q[3], c, 2.6); });
    return s + l + T("M70 40Q64 24 52 20M74 40Q80 24 90 22", c, 2) + Ci(22, 56, 18, c, "r") + Ci(46, 56, 11, c, "r") + Ci(68, 50, 13, c, "r") + eye(72, 46, 3.4) + smile(72, 57, 4, "#d9a98c") + SHN(18, 48, 4, 6, 20, 0.5);
  };
  I.bee = function () {
    return SH(30, 92) + E(34, 28, 12, 20, "#cfe9ff", "l", ' opacity=".85" transform="rotate(-25 34 28)"') + E(58, 24, 11, 19, "#cfe9ff", "l", ' opacity=".85" transform="rotate(15 58 24)"') + P("M24 58L8 62L24 66Z", "#3d3d4a") +
      E(44, 58, 26, 20, "#ffcc2e", "r") + '<clipPath id="bc@"><ellipse cx="44" cy="58" rx="26" ry="20"/></clipPath><g clip-path="url(#bc@)"><rect x="30" y="30" width="7" height="60" fill="#3d3d4a"/><rect x="45" y="30" width="7" height="60" fill="#3d3d4a"/></g>' +
      Ci(72, 54, 14, "#3d3d4a", "r") + Fc(75, 52, 4.5, "#fff") + Fc(76, 52, 2.4, EYE) + smile(76, 62, 4, "#fff") + L("M74 42Q74 30 82 28M68 42Q64 30 58 30", "#3d3d4a", 2) + SHN(36, 50, 4, 7, 20, 0.45);
  };
  I.spider = function () {
    var c = "#6a4a8a", l = "", i, ys = [48, 56, 64, 72];
    for (i = 0; i < 4; i++) l += T("M44 " + ys[i] + "Q22 " + (ys[i] - 14 + i * 3) + " 8 " + (ys[i] + 12 + i * 3), c, 3) + T("M56 " + ys[i] + "Q78 " + (ys[i] - 14 + i * 3) + " 92 " + (ys[i] + 12 + i * 3), c, 3);
    return L("M50 2V30", "#a8a8b8", 1.4) + l + Ci(50, 62, 18, c, "r") + Ci(50, 40, 12, c, "r") + eye(45, 38, 3.4) + eye(55, 38, 3.4) + smile(50, 46, 4, "#e8c8e8") + SHN(42, 54, 4, 7, 20, 0.45);
  };
  I.crow = function () {
    return birdy({ c: "#454558", w: "#2f2f40", b: "#5a5a6e", bk: "#2a2a34", bs: "M80 30L98 38L80 46Z", lg: "#4a3a3a", tail: "M20 62L0 54L6 76Z", hr: 16 });
  };
  I.sparrow = function () {
    return birdy({ c: "#b5835a", w: "#8a5a34", b: "#f0e6d6", bk: "#5a4a3a", bs: "M80 35L89 39L80 44Z", lg: "#d98a7a", tail: "M20 62L4 52L8 72Z", hr: 16,
      post: Fe(72, 41, 4, 3, "#f6efe3") + Fe(74, 46, 4, 2.4, "#3a2a2a") + L("M32 54L48 62M30 62L44 68", "#5a3a22", 1.8, ' opacity=".7"') });
  };
  I.pigeon = function () {
    return birdy({ c: "#a2abc0", w: "#7a859e", b: "#c9d0de", bk: "#4a4a58", bs: "M80 35L90 39L80 44Z", lg: "#e07a8a", tail: "M20 62L2 52L8 72Z", hr: 15,
      post: E(58, 46, 8, 7, "#4eab94", "r", ' opacity=".9" stroke="none"') + L("M30 52L50 60M28 60L44 66", "#3d4560", 3, ' opacity=".7"') + Ci(78, 36, 2, "#f0f0f0") });
  };
  I.parrot = function () {
    return birdy({ c: "#4cc24d", w: "#2f7ec4", b: "#a7e48a", bk: RED, bs: "M78 26C94 26 96 42 86 46C84 40 80 38 76 38Z", lg: "#7a5a3a", hr: 17, tail: "M26 66L12 94L24 96L38 76Z", tc: "#2f7ec4",
      pre: Rc(6, 90, 88, 6, 3, "#8a5a2b", "l"), post: Ci(70, 32, 5, "#fff1d6", "r", ' stroke="none"') + eye(70, 32, 3) + P("M28 70L18 96L26 92Z", YELLOW) });
  };
  I.owl = function () {
    return SH(28) + Rc(8, 88, 84, 6, 3, "#8a5a2b", "l") + L("M40 86V91M60 86V91", ORANGE, 3.4) + P("M26 38L22 10L42 24Z", "#8a5a2b") + P("M74 38L78 10L58 24Z", "#8a5a2b") + E(50, 58, 30, 32, "#a97a44", "r") + E(14, 62, 8, 20, "#8a5a2b", "l", ' transform="rotate(8 14 62)"') + E(86, 62, 8, 20, "#8a5a2b", "l", ' transform="rotate(-8 86 62)"') +
      E(50, 68, 19, 20, "#f0d9b0", "r") + L("M42 62Q46 66 50 62Q54 66 58 62M40 72Q45 76 50 72Q55 76 60 72M44 82Q50 86 56 82", "#c9a070", 1.6) + Ci(36, 42, 13, "#fff1d6", "r") + Ci(64, 42, 13, "#fff1d6", "r") + Ci(36, 43, 7, "#f2a51c", "r", ' stroke-width="1.5"') + Ci(64, 43, 7, "#f2a51c", "r", ' stroke-width="1.5"') +
      Fc(36, 43, 3.6, EYE) + Fc(64, 43, 3.6, EYE) + Fc(37.4, 41.6, 1.2, "#fff") + Fc(65.4, 41.6, 1.2, "#fff") + P("M46 50L54 50L50 58Z", ORANGE) + SHN(34, 30, 4, 7, 20, 0.4);
  };
  I.tortoise = function () {
    return SH(38, 90) + Rc(18, 74, 12, 14, 5, "#b9c46a", "l") + Rc(60, 74, 12, 14, 5, "#b9c46a", "l") + P("M84 70L98 72L90 78Z", "#b9c46a") + E(88, 58, 10, 9, "#b9c46a", "r") + eye(91, 55, 2.6) + smile(92, 62, 3, "#6a7a2a") +
      P("M10 74C10 38 28 24 50 24C72 24 88 40 90 74Z", "#6d9a3c", "r") + L("M50 26V46M30 36L38 50M70 36L62 50M22 62L38 50M78 62L62 50M38 50L62 50M38 50L38 74M62 50L62 74", "#3e6a1e", 2.2, ' opacity=".8"') +
      E(50, 76, 41, 6, "#e8d89a", "l") + SHN(34, 38, 4, 9, 40, 0.45);
  };
  I.crocodile = function () {
    var c = "#4fa044", i, t = "", b = "";
    for (i = 0; i < 6; i++) { t += F("M" + (60 + i * 6.2) + " 62l2.4 5l2.4-5z", "#fff"); b += Ci(18 + i * 9, 50 - Math.min(i, 5 - i) * 0.5, 3.4, "#3a7a30", "r", ' stroke-width="1.4"'); }
    return '<g transform="translate(0 -20) scale(1 1.28)">' + SH(42, 90) + Rc(24, 66, 9, 18, 4, c, "l") + Rc(62, 66, 9, 18, 4, c, "l") + P("M2 78C10 60 24 56 46 54C62 52 66 48 84 48C94 48 98 52 98 58C98 62 94 62 86 64C72 66 60 72 44 72C32 72 22 80 2 78Z", c, "r") +
      Rc(34, 68, 9, 18, 4, c, "l") + Rc(72, 66, 9, 18, 4, c, "l") + E(54, 66, 22, 5, "#d6e8a0", "l", ' stroke="none"') + b + t + L("M70 60Q84 62 96 58", "#2e5a22", 1.8) + Ci(70, 46, 6, c, "r") + Fc(71, 45, 3, "#fff") + Fc(72, 45, 1.7, EYE) + Fc(90, 52, 1.3, "#2e5a22") + SHN(40, 58, 12, 2.4, -10, 0.4) + "</g>";
  };
  I.squirrel = function () {
    var c = "#c4733a";
    return SH(30) + P("M30 80C-2 80 -4 38 18 20C30 10 44 20 36 30C26 28 18 40 22 54C26 66 40 72 44 76Z", c, "r") + L("M10 40Q18 32 28 28M12 54Q20 46 26 42", tint(c, 0.4), 2.2, ' opacity=".8"') +
      E(54, 70, 18, 22, c, "r") + E(60, 74, 10, 14, "#f6dcb4", "r") + Rc(46, 88, 14, 7, 3.5, c, "l") + Ci(60, 38, 15, c, "r") + P("M50 28L48 14L58 24Z", c) + P("M68 28L72 14L74 28Z", c) + E(69, 42, 5, 4, "#f6dcb4", "r") + Fc(74, 40, 2.2, EYE) + eye(63, 34, 3) +
      Ci(66, 64, 6, "#a0683a", "r") + E(66, 59, 6, 3, "#6a4a2a", "l") + SHN(52, 28, 4, 5, 20, 0.5);
  };
  I["bat-animal"] = function () {
    var w = function () { return P("M46 40C36 24 14 22 2 36C10 40 12 50 18 60C24 54 32 54 36 64C40 58 44 58 46 64Z", "#8878b4", "r") + L("M44 42L16 44M44 48L22 56M44 54L34 62", "#5a4a86", 1.6, ' opacity=".7"'); };
    return SH(30, 92) + w() + '<g transform="translate(100 0) scale(-1 1)">' + w() + "</g>" + E(50, 54, 10, 16, "#5a4a86", "r") + P("M40 30L38 12L48 24Z", "#5a4a86") + P("M60 30L62 12L52 24Z", "#5a4a86") + Ci(50, 36, 11, "#5a4a86", "r") + eye(46, 34, 2.8) + eye(54, 34, 2.8) + F("M46 42L48 47L50 42Z", "#fff") + F("M50 42L52 47L54 42Z", "#fff");
  };

  /* ---- food ---- */
  var GLS = "#cfe6f2";
  function tumbler(fill, k, lvl) { // a glass with a liquid in it; lvl = y of the surface
    return P("M22 14L78 14L72 86C71 91 66 93 62 93L38 93C34 93 29 91 28 86Z", GLS, "l", ' fill-opacity=".55"') +
      PN("M25.5 " + lvl + "L74.5 " + lvl + "L72 86C71 90 66 92 62 92L38 92C34 92 29 90 28 86Z", fill, k || "l") + E(50, lvl, 24.5, 4.6, tint(fill, 0.45), "l", ' stroke="none"');
  }
  function bowl(c, inner, top) {
    return SH(36) + P("M10 50C10 74 28 90 50 90C72 90 90 74 90 50Z", c, "r") + E(50, 50, 40, 9, shade(c, 0.85)) + E(50, 50, 36, 7, inner, "r", ' stroke="none"') + (top || "") + L("M20 62Q24 76 36 82", "#fff", 3, ' opacity=".4"');
  }
  I.milk = function () {
    return SH(28) + tumbler("#fffdf6", "r", 34) + E(50, 33, 24, 5, "#fff", "l", ' stroke="none"') + Fc(42, 30, 3, "#fff", ' opacity=".9"') + Fc(58, 28, 3.6, "#fff", ' opacity=".9"') + Fc(50, 25, 2.6, "#fff", ' opacity=".9"') + L("M31 40L35 80", "#fff", 4, ' opacity=".7"');
  };
  I.water = function () {
    return SH(28) + tumbler("#4ab0f0", "l", 32) + L("M26 40Q38 36 50 40T74 40", "#fff", 2.4, ' opacity=".55"') + Ci(40, 60, 3.2, "#fff", "l", ' opacity=".55" stroke="none"') + Ci(58, 72, 2.4, "#fff", "l", ' opacity=".55" stroke="none"') + Ci(52, 52, 2, "#fff", "l", ' opacity=".55" stroke="none"') + L("M31 40L35 80", "#fff", 4, ' opacity=".7"') + P("M82 12C86 18 88 22 84 26C80 26 78 20 82 12Z", "#4ab0f0");
  };
  I.glass = function () {
    return SH(28) + tumbler("#e8f5fb", "l", 20) + L("M31 28L35 80", "#fff", 5, ' opacity=".85"') + L("M68 30L66 72", "#fff", 2, ' opacity=".6"') + E(50, 14, 28, 5, "#eaf6fc", "l");
  };
  I.rice = function () {
    var s = bowl("#3b82e0", "#fffdf4", E(50, 36, 30, 16, "#fffdf4", "r", ' stroke="none"') + Fe(38, 26, 5, 2.2, "#fff", ' opacity=".8"')), i, a, r;
    s = s.replace(E(50, 50, 36, 7, "#fffdf4", "r", ' stroke="none"'), E(50, 50, 36, 7, "#fffdf4", "r", ' stroke="none"'));
    for (i = 0; i < 22; i++) { a = i * 2.4; r = Math.sqrt(i / 22) * 24; s += Fe(f1(50 + r * Math.cos(a)), f1(40 + r * 0.5 * Math.sin(a)), 3, 1.3, "#e4dcc4", ' opacity=".6" transform="rotate(' + (i * 37 % 90) + " " + f1(50 + r * Math.cos(a)) + " " + f1(40 + r * 0.5 * Math.sin(a)) + ')"'); }
    return s + L("M44 22Q40 14 46 8M56 22Q52 14 58 8", "#aab4c0", 3, ' opacity=".6"');
  };
  I.dal = function () {
    return bowl("#d9692e", "#f2b533", Fe(50, 50, 28, 5, "#f7cf5a", ' opacity=".8"') + Fc(40, 50, 2, "#c98a14") + Fc(58, 51, 2, "#c98a14") + Fc(64, 48, 1.6, "#c98a14") + Ci(52, 48, 3, RED, "r", ' stroke-width="1.2"') + P("M32 49Q36 44 40 49Q36 52 32 49Z", GREEN) + P("M60 52Q66 48 68 53Q62 55 60 52Z", GREEN));
  };
  I.bread = function () {
    return SH(34) + P("M26 38C16 32 20 14 40 14C46 8 60 10 62 14C80 14 82 34 74 38L74 84C74 88 70 90 66 90L34 90C30 90 26 88 26 84Z", "#d9a35a", "l") +
      P("M32 44C28 40 28 22 42 22C48 18 58 18 62 22C72 22 72 40 68 44L68 82L32 82Z", "#f6d9a0", "r") + L("M40 48H60M40 58H60M40 68H60", "#e0b878", 1.6, ' opacity=".7"') + Fc(46, 32, 1.2, "#d9a35a") + Fc(56, 34, 1.2, "#d9a35a") + SHN(36, 26, 5, 3, -20, 0.5);
  };
  I.carrot = function () {
    return SH(30) + P("M46 24C34 12 28 8 24 14C32 12 38 20 42 26Z", GREEN) + P("M50 24C48 8 52 2 56 4C54 12 56 20 54 26Z", "#43b05c") + P("M54 26C62 14 72 10 76 16C68 16 62 22 58 28Z", GREEN) +
      P("M34 28C42 22 62 22 68 30C70 40 56 76 50 94C44 80 28 42 34 28Z", "#f08a22", "l") + L("M42 40H52M50 54H58M46 66H52", "#c9640a", 2, ' opacity=".7"') + SHN(40, 36, 3, 8, -15, 0.5);
  };
  I.tomato = function () {
    return SH(30) + Ci(50, 56, 35, "#e5372f", "r") + P("M34 30L44 32L50 20L56 32L66 30L58 40L62 48L50 42L38 48L42 40Z", "#43a047") + L("M50 22V14", "#43a047", 4) + SHN(34, 46, 6, 10, 20, 0.5);
  };
  I.potato = function () {
    return SH(34) + P("M12 56C10 34 34 22 54 26C76 24 92 40 88 62C84 82 56 90 36 84C18 80 14 70 12 56Z", "#c49a5c", "r") + SPOTS([[30, 50], [58, 40], [68, 66], [44, 72], [76, 50]], "#8a6a38", 2.6) + SHN(32, 40, 8, 4, -25, 0.5);
  };
  I.onion = function () {
    return SH(30) + P("M50 6C54 18 56 22 56 26C80 32 90 54 80 72C72 86 28 86 20 72C10 54 20 32 44 26C44 22 46 18 50 6Z", "#c9558e", "r") + L("M50 28C34 40 30 66 38 82M50 28C60 40 66 66 62 82M50 28C46 44 46 66 50 84", "#a03a6e", 1.8, ' opacity=".7"') +
      T("M44 87Q50 94 56 87", "#d9c9a0", 2.4) + SHN(32, 50, 5, 10, 15, 0.5);
  };
  I.plum = function () {
    return SH(28) + Ci(50, 58, 32, "#7a3aa8", "r") + L("M50 30Q44 56 50 90", "#5a2a80", 2, ' opacity=".6"') + L("M50 28Q50 18 56 12", "#7a4a24", 4) + P("M54 22Q66 8 82 14Q74 28 54 22Z", GREEN) + SHN(34, 48, 5, 10, 20, 0.5) + Fe(62, 62, 6, 9, "#b88ad8", ' opacity=".35"');
  };
  I.guava = function () {
    return SH(36) + Ci(34, 54, 28, "#a9c94a", "r") + SPOTS([[26, 44], [38, 62], [44, 44], [24, 62]], "#7a9a2a", 1.8) + P("M34 26Q42 18 46 24Q40 28 34 26Z", GREEN) + L("M32 26Q34 20 38 18", "#7a4a24", 3) +
      Ci(72, 62, 24, "#a9c94a", "r") + Ci(72, 62, 19, "#f08aa0", "r", ' stroke="none"') + Ci(72, 62, 9, "#fbd8de", "r", ' stroke="none"') + SPOTS([[72, 56], [67, 64], [77, 64], [72, 69], [66, 57], [78, 57]], "#f7e6a0", 1.8) + SHN(24, 44, 4, 7, 20, 0.5);
  };
  I.pineapple = function () {
    var s = SH(30), i;
    s += P("M50 30C40 14 36 8 30 10C36 16 40 24 42 30Z", "#2f9a4a") + P("M50 30C46 12 48 2 52 2C54 12 56 20 54 30Z", "#43b05c") + P("M50 30C60 14 66 8 72 10C66 16 62 24 58 30Z", "#2f9a4a") + P("M44 30C34 18 22 18 20 22C30 24 38 30 44 34Z", "#43b05c") + P("M56 30C66 18 78 18 80 22C70 24 62 30 56 34Z", "#43b05c") +
      E(50, 62, 27, 33, "#f5b52c", "r") + '<clipPath id="pc@"><ellipse cx="50" cy="62" rx="27" ry="33"/></clipPath><g clip-path="url(#pc@)">';
    for (i = -3; i < 6; i++) s += L("M" + (i * 12) + " 26L" + (i * 12 + 60) + " 100M" + (i * 12 + 80) + " 26L" + (i * 12 + 20) + " 100", "#b87a14", 1.8, ' opacity=".7"');
    return s + "</g>" + SHN(38, 48, 4, 10, 15, 0.5);
  };
  I.honey = function () {
    return SH(30) + Rc(22, 34, 56, 56, 14, "#f0a820", "l", ' fill-opacity=".95"') + Rc(26, 44, 48, 42, 11, "#e08a0c", "r", ' stroke="none"') + Rc(26, 20, 48, 14, 5, "#8a5a2b", "l") +
      P("M30 34Q34 46 40 34Z", "#ffd45a") + E(50, 60, 14, 12, "#fff1c0", "r", ' opacity=".9"') + E(50, 60, 8, 7, "#e08a0c", "r", ' stroke="none"') + L("M30 48L32 80", "#fff", 4, ' opacity=".5"') + Fc(52, 7, 0, "#000");
  };
  I.sweets = function () {
    return SH(40) + P("M6 44L94 44L86 88L14 88Z", "#c43a30", "l") + E(50, 44, 44, 8, "#8a2020") + Ci(30, 48, 10, "#f4b72e", "r") + SPOTS([[27, 45], [33, 50], [30, 53]], "#c98a14", 1.2) + P("M46 40L58 48L46 56L34 48Z", "#fff6e0", "l", ' transform="translate(18 -1)"') +
      Rc(66, 40, 14, 14, 3, "#f48db8", "l", ' transform="rotate(10 73 47)"') + Ci(46, 60, 8, "#8a5a2b", "r") + Ci(66, 64, 7, "#f4b72e", "r") + Ci(28, 66, 7, "#f48db8", "r") + L("M14 84L86 84", "#e8c070", 2.4, ' opacity=".8"') + SHN(24, 62, 5, 2, -10, 0.35);
  };
  I["ice-cream"] = function () {
    return SH(22) + P("M30 52L70 52L50 94Z", "#e0a252", "l") + L("M36 56L50 88M44 54L56 80M64 56L50 88M56 54L44 80", "#b8742a", 1.6, ' opacity=".7"') + Ci(50, 40, 22, "#f48db8", "r") + Ci(36, 44, 14, "#fff1d6", "r") + Ci(66, 44, 14, "#8a5a2b", "r") + Ci(50, 30, 20, "#f48db8", "r") +
      Ci(50, 16, 6, RED, "r") + L("M50 10Q54 2 60 2", "#4a7a2a", 2) + SPOTS([[44, 28], [56, 34], [50, 24]], "#fff", 1.4) + SHN(42, 24, 4, 6, 25, 0.5);
  };
  I.chocolate = function () {
    var s = SH(36) + P("M10 60L66 18L92 56L36 92Z", "#c8ced8", "l") + P("M14 56L66 16L90 52L40 88Z", "#6a3a1c", "l"), i, j;
    for (i = 0; i < 3; i++) for (j = 0; j < 2; j++) s += P("M" + (22 + i * 14 + j * 8) + " " + (62 - i * 10 + j * 14) + "L" + (32 + i * 14 + j * 8) + " " + (54 - i * 10 + j * 14) + "L" + (38 + i * 14 + j * 8) + " " + (64 - i * 10 + j * 14) + "L" + (28 + i * 14 + j * 8) + " " + (72 - i * 10 + j * 14) + "Z", "#8a4a22", "l", ' stroke-width="1.6" transform="translate(-4 -2)"');
    return s + P("M44 80L66 62L92 56L82 90Z", "#e0453a", "l", ' opacity="0"') + SHN(36, 54, 3, 8, 40, 0.3);
  };

  /* ---- home and school ---- */
  var WOOD = "#c68a4c", WOODD = "#a0683a";
  I.table = function () {
    return SH(40) + P("M20 52L26 90L34 90L36 56Z", WOODD, "l") + P("M80 52L74 90L66 90L64 56Z", WOODD, "l") + P("M10 40L28 22L92 22L90 40Z", "#dca25c", "l") + P("M10 40L90 40L90 50L10 50Z", WOOD, "l") + P("M14 50L22 88L30 88L32 50Z", WOOD, "l") + P("M68 50L70 88L78 88L86 50Z", WOOD, "l") + L("M30 27H84", "#fff", 2.4, ' opacity=".45"');
  };
  I.chair = function () {
    return SH(30) + Rc(22, 12, 10, 44, 4, WOOD, "l") + Rc(68, 12, 10, 44, 4, WOOD, "l") + Rc(32, 18, 36, 7, 3, WOODD, "l") + Rc(32, 32, 36, 7, 3, WOODD, "l") + Rc(18, 54, 64, 11, 5, "#e09a4a", "l") + Rc(22, 64, 9, 28, 3, WOOD, "l") + Rc(69, 64, 9, 28, 3, WOOD, "l") + Rc(40, 66, 7, 22, 3, WOODD, "l") + SHN(30, 58, 10, 1.8, 0, 0.5);
  };
  I.bed = function () {
    return SH(42) + Rc(6, 22, 10, 68, 4, WOODD, "l") + Rc(84, 38, 10, 52, 4, WOODD, "l") + Rc(10, 56, 84, 18, 5, WOOD, "l") + Rc(14, 44, 74, 18, 7, "#f4f7ff", "l") + Rc(16, 38, 24, 14, 7, "#fff", "l") + Rc(36, 48, 54, 26, 6, "#4aa3e8", "l") + L("M44 56H84M44 64H84", "#2a62b0", 1.6, ' opacity=".5"') + Rc(14, 72, 8, 18, 3, WOOD, "l") + Rc(78, 72, 8, 18, 3, WOOD, "l");
  };
  I.door = function () {
    return SH(34) + Rc(20, 6, 60, 86, 3, "#8a5a2b", "l") + Rc(26, 12, 48, 80, 2, "#c68a4c", "l") + Rc(32, 18, 16, 28, 3, "#a9733a", "l") + Rc(52, 18, 16, 28, 3, "#a9733a", "l") + Rc(32, 52, 16, 32, 3, "#a9733a", "l") + Rc(52, 52, 16, 32, 3, "#a9733a", "l") + Ci(68, 54, 4, YELLOW, "r") + SHN(34, 24, 3, 5, 0, 0.45);
  };
  I.window = function () {
    return SH(36, 94) + Rc(10, 8, 80, 82, 5, "#f4ece0", "l") + Rc(18, 16, 64, 66, 3, "#8ccdf2", "l") + PN("M18 70C34 60 56 64 82 56L82 82L18 82Z", "#6fbe6a") + Ci(66, 32, 7, YELLOW, "r", ' stroke="none"') + Rc(47, 16, 6, 66, 0, "#f4ece0", "l") + Rc(18, 46, 64, 6, 0, "#f4ece0", "l") + Rc(6, 84, 88, 8, 4, "#d9c9a6", "l") + P("M18 16L38 16L18 40Z", "#fff", "l", ' opacity=".35" stroke="none"');
  };
  I.fan = function () {
    var s = SH(28) + Rc(44, 70, 12, 16, 3, "#8a95a8", "l") + E(50, 90, 26, 5, "#6a7488", "l") + Ci(50, 40, 34, "#e6edf6", "l", ' fill-opacity=".35"'), i;
    for (i = 0; i < 3; i++) s += E(50, 24, 10, 17, ["#e5473d", "#ffc933", "#43b05c"][i], "l", ' transform="rotate(' + (i * 120) + ' 50 40)"');
    s += Ci(50, 40, 7, "#8a95a8", "r");
    for (i = 1; i < 4; i++) s += '<circle cx="50" cy="40" r="' + i * 8.5 + '" fill="none" stroke="#8a95a8" stroke-width="1.2" opacity=".8"/>';
    return s + L("M50 6V74M16 40H84M26 16L74 64M74 16L26 64", "#8a95a8", 1.2, ' opacity=".8"') + Ci(50, 40, 34, "none", "l", ' fill="none" stroke="#6a7488" stroke-width="3"');
  };
  I.lamp = function () {
    return Fc(50, 36, 38, "#ffe27a", ' opacity=".22"') + SH(26) + E(50, 90, 22, 5, "#6a7a96", "l") + Rc(46, 54, 8, 36, 3, "#8a95a8", "l") + P("M28 54L36 14L64 14L72 54Z", "#ffcb2e", "l") + E(50, 14, 14, 3.4, "#ffe27a", "l") + E(50, 54, 22, 4, "#e0a512", "l") + L("M38 24L34 46", "#fff", 3, ' opacity=".55"');
  };
  I.clock = function () {
    var s = SH(36, 95, 3) + Ci(50, 50, 44, "#e5473d", "r") + Ci(50, 50, 36, "#fffdf5", "r", ' stroke-width="1.5"'), i, a;
    for (i = 0; i < 12; i++) { a = i * Math.PI / 6; s += L("M" + f1(50 + 28 * Math.sin(a)) + " " + f1(50 - 28 * Math.cos(a)) + "L" + f1(50 + 32 * Math.sin(a)) + " " + f1(50 - 32 * Math.cos(a)), "#6a7488", i % 3 ? 1.6 : 3); }
    return s + L("M50 50L50 28", "#3a3f5c", 5) + L("M50 50L68 58", RED, 3.4) + Ci(50, 50, 4, YELLOW, "r") + SHN(32, 28, 5, 2, -30, 0.5);
  };
  I.key = function () {
    return SH(34, 92) + '<g transform="rotate(-35 50 50)">' + P("M44 42L88 42L88 58L80 58L80 52L74 52L74 58L66 58L66 52L44 52Z", "#f2c14b", "l") + Ci(24, 47, 20, "#f2c14b", "r") + Ci(24, 47, 8, "#fffdf5", "l") + L("M14 36Q22 30 32 34", "#fff", 3, ' opacity=".6"') + "</g>";
  };
  I.box = function () {
    return SH(38) + P("M10 36L50 50L50 92L10 78Z", "#d9a35a", "l") + P("M50 50L90 36L90 78L50 92Z", "#b98a44", "l") + P("M10 36L36 22L50 28L28 36Z", "#e8be78", "l") + P("M90 36L64 22L50 28L72 36Z", "#e8be78", "l") + P("M10 36L50 50L90 36L50 24Z", "#c89448", "l") + P("M40 46L60 46L60 56L40 56Z", "#f6d98a", "l", ' transform="rotate(14 50 51) translate(0 2)"') + SHN(24, 62, 2, 8, -20, 0.35);
  };
  I.bottle = function () {
    return SH(22) + Rc(40, 4, 20, 12, 3, "#e5473d", "l") + P("M42 16L58 16L60 28C74 34 76 42 76 52L76 88C76 92 72 94 68 94L32 94C28 94 24 92 24 88L24 52C24 42 26 34 40 28Z", "#6fc4f0", "l", ' fill-opacity=".8"') +
      Rc(24, 56, 52, 18, 0, "#fff", "l", ' opacity=".9"') + L("M24 62H76M24 68H76", "#4aa3e8", 2) + L("M32 40L32 52M32 78L32 88", "#fff", 4, ' opacity=".7"') + L("M42 21H58", "#e0b8b0", 1.6);
  };
  I.spoon = function () {
    return SH(30, 92) + '<g transform="rotate(30 50 50)">' + P("M46 40L54 40L56 92C56 96 44 96 44 92Z", "#c8ced8", "l") + E(50, 24, 17, 22, "#d6dce6", "r") + E(50, 24, 10, 15, "#eef2f8", "l", ' stroke="none"') + L("M42 14Q40 24 44 34", "#fff", 2.4, ' opacity=".8"') + "</g>";
  };
  I.plate = function () {
    return SH(42, 90, 5) + E(50, 56, 44, 32, "#e9edf5", "l") + E(50, 54, 44, 32, "#fffdf8", "r") + E(50, 54, 30, 20, "#f6f9ff", "l", ' stroke-width="2"') + '<ellipse cx="50" cy="54" rx="38" ry="26" fill="none" stroke="#4aa3e8" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/>' + SHN(28, 40, 10, 2.4, -22, 0.7);
  };
  I.comb = function () {
    var s = SH(36, 90) + Rc(8, 22, 84, 20, 8, "#2fb3a3", "l"), i;
    for (i = 0; i < 12; i++) s += Rc(12 + i * 6.7, 40, 4.6, 36, 2.3, "#2fb3a3", "l", ' stroke-width="1.6"');
    return s + L("M16 28H84", "#fff", 3, ' opacity=".5"');
  };
  I.toothbrush = function () {
    var s = SH(34, 92) + '<g transform="rotate(-32 50 50)">' + P("M4 44C4 40 8 38 12 38L58 42L58 56L12 60C8 60 4 58 4 54Z", "#4aa3e8", "l") + Rc(54, 38, 40, 18, 6, "#9ae6cf", "l"), i;
    for (i = 0; i < 6; i++) s += L("M" + (60 + i * 6) + " 38V22", i % 2 ? "#ffffff" : "#e5473d", 4);
    return s + L("M12 46H46", "#fff", 3, ' opacity=".5"') + Ci(14, 49, 3, "#2a62b0", "r") + "</g>";
  };
  I.soap = function () {
    return SH(34) + Rc(10, 40, 80, 46, 18, "#f48db8", "l") + Rc(18, 46, 64, 12, 6, "#fbc4d8", "l", ' stroke="none"') + Ci(30, 22, 9, "#d9f0ff", "r", ' opacity=".9" stroke-width="1.6"') + Ci(50, 14, 6, "#d9f0ff", "r", ' opacity=".9" stroke-width="1.6"') + Ci(68, 24, 11, "#d9f0ff", "r", ' opacity=".9" stroke-width="1.6"') + Ci(80, 12, 4, "#d9f0ff", "r", ' opacity=".9" stroke-width="1.4"') + SHN(30, 52, 4, 2, -10, 0.55);
  };
  I.towel = function () {
    return SH(38) + P("M10 40C10 34 14 32 20 32L80 32C88 32 92 36 90 44L88 80C88 86 84 88 80 88L20 88C14 88 10 84 10 78Z", "#2fb3a3", "l") + Rc(16, 48, 68, 8, 0, "#fff", "l", ' stroke="none"') + Rc(16, 62, 68, 8, 0, "#ffc933", "l", ' stroke="none"') + P("M14 32L86 32L90 40L10 40Z", "#5cd0c0", "l") + L("M20 88V94M32 88V94M44 88V94M56 88V94M68 88V94M80 88V94", "#2a8a7e", 2.2) + SHN(26, 38, 8, 1.8, 0, 0.5);
  };
  I.shirt = function () {
    return SH(36) + P("M34 10L16 20L4 44L22 52L28 42L28 90L72 90L72 42L78 52L96 44L84 20L66 10C62 18 38 18 34 10Z", "#4aa3e8", "l") + P("M34 10L50 30L66 10C62 18 38 18 34 10Z", "#fff", "l", ' stroke-width="2.2"') + L("M50 30V88", "#2a62b0", 1.6, ' opacity=".5"') + Fc(50, 44, 2.2, "#fff") + Fc(50, 58, 2.2, "#fff") + Fc(50, 72, 2.2, "#fff") + SHN(36, 50, 3, 12, 8, 0.4);
  };
  I.frock = function () {
    return SH(36) + P("M36 8L46 12L50 22L54 12L64 8L72 22L62 36L82 90L18 90L38 36L28 22Z", "#ee6fa4", "l") + Rc(36, 34, 28, 6, 3, "#ffc933", "l") + Ci(50, 20, 4, "#ffc933", "r") + P("M28 22C14 18 14 34 26 36L32 28Z", "#f48db8") + P("M72 22C86 18 86 34 74 36L68 28Z", "#f48db8") + Ci(40, 66, 3, "#fff") + Ci(58, 74, 3, "#fff") + Ci(50, 56, 3, "#fff") + L("M24 86Q50 80 76 86", "#fff", 2.2, ' opacity=".6"') + SHN(36, 60, 3, 12, 12, 0.4);
  };
  I.sock = function () {
    return SH(34) + P("M30 8L58 8L58 50L86 66C94 72 92 86 82 88L46 90C34 90 28 82 28 72Z", "#fffdf5", "l") + Rc(30, 8, 28, 14, 4, "#e5473d", "l") + P("M28 36L58 36L58 44L28 44Z", "#e5473d", "l", ' stroke="none"') + P("M28 56L50 56L66 66L28 70Z", "#e5473d", "l", ' stroke="none" opacity=".0"') + Ci(34, 80, 8, "#e5473d", "r", ' stroke="none"') + P("M62 70C74 70 88 74 88 82L70 86Z", "#e5473d", "l", ' stroke="none"') + SHN(36, 34, 3, 9, 0, 0.5);
  };
  I.hat = function () {
    return SH(40, 90) + E(50, 64, 46, 16, "#f2c14b", "l") + P("M24 62C22 30 36 20 50 20C64 20 78 30 76 62C64 70 36 70 24 62Z", "#f6d36a", "r") + Rc(24, 50, 52, 10, 3, "#e5473d", "l", ' transform="rotate(0)"') + L("M30 34Q34 28 42 26", "#fff", 3, ' opacity=".5"') + L("M12 66Q50 80 88 66", "#d9a52a", 1.6, ' opacity=".6"');
  };
  I.mat = function () {
    var s = SH(42, 88) + P("M4 76L18 36L96 36L84 76Z", "#e5473d", "l"), i;
    s += P("M11 68L22 42L90 42L80 68Z", "#ffc933", "l") + P("M17 62L26 47L84 47L76 62Z", "#2fb3a3", "l") + P("M23 58L30 51L78 51L72 58Z", "#fff1d6", "l");
    for (i = 0; i < 9; i++) s += L("M" + (10 + i * 8.6) + " 76L" + (8 + i * 8.6) + " 84", "#c0352c", 2.2);
    return s;
  };
  I.doll = function () {
    return SH(30) + P("M30 94L30 78L40 74L46 94Z", "#6a8cd0") + Rc(28, 86, 18, 8, 4, "#e5473d", "l") + Rc(54, 86, 18, 8, 4, "#e5473d", "l") + Rc(36, 66, 9, 22, 4, "#f1c9a0", "l") + Rc(55, 66, 9, 22, 4, "#f1c9a0", "l") +
      Ci(18, 60, 6, "#f1c9a0", "r") + Ci(82, 60, 6, "#f1c9a0", "r") + P("M32 44L14 58L20 64L36 54Z", "#f1c9a0") + P("M68 44L86 58L80 64L64 54Z", "#f1c9a0") + P("M34 42C34 38 66 38 66 42L78 80L22 80Z", "#ee6fa4", "l") + Ci(30, 22, 8, "#2a1a14", "r") + Ci(70, 22, 8, "#2a1a14", "r") +
      Ci(50, 24, 20, "#f1c9a0", "r") + P("M30 22C30 4 70 4 70 22C60 14 40 14 30 22Z", "#2a1a14", "l") + eyes(50, 26, 8, 2.8) + Ci(36, 32, 3.4, "#f4a6b4", "r", ' stroke="none" opacity=".7"') + Ci(64, 32, 3.4, "#f4a6b4", "r", ' stroke="none" opacity=".7"') + smile(50, 33, 5) + Ci(30, 18, 2.6, RED) + Ci(70, 18, 2.6, RED);
  };
  I.drum = function () {
    var s = SH(36) + P("M12 40L12 76C12 90 88 90 88 76L88 40Z", "#e5473d", "l") + E(50, 40, 38, 12, "#fff1d6", "r"), i;
    for (i = 0; i < 4; i++) s += L("M" + (22 + i * 16) + " 52L" + (30 + i * 16) + " 80L" + (38 + i * 16) + " 52", "#fff", 2.2, ' opacity=".85"');
    return s + E(50, 40, 38, 12, "none", "l", ' fill="none"') + T("M30 8L52 36", "#e0a252", 4) + T("M70 8L50 36", "#e0a252", 4) + Ci(30, 8, 4.4, "#ffc933", "r") + Ci(70, 8, 4.4, "#ffc933", "r");
  };
  I.pen = function () {
    return SH(30, 93, 4) + L("M12 90Q20 82 28 90T44 90", "#2a62b0", 2, ' opacity=".7"') + '<g transform="rotate(135 50 50)">' + Rc(10, 41, 20, 18, 6, "#2a62b0", "l") + Rc(24, 42, 44, 16, 3, BLUE, "l") + Rc(60, 36, 4, 4, 0, "#fff") + P("M68 42L82 46L82 54L68 58Z", "#c8ced8", "l") + P("M82 46L92 50L82 54Z", "#c8ced8", "l") + Fc(92, 50, 1.8, "#2a62b0") + L("M28 46H66", "#fff", 2, ' opacity=".5"') + Rc(30, 34, 5, 12, 2, "#c8ced8", "l", ' transform="rotate(0)"') + "</g>";
  };
  I.eraser = function () {
    return SH(34, 90) + '<g transform="rotate(-18 50 52)">' + Rc(12, 34, 76, 36, 8, "#f4a6b4", "l") + Rc(40, 34, 48, 36, 8, "#4aa3e8", "l") + Rc(40, 34, 12, 36, 0, "#4aa3e8", "l", ' stroke="none"') + L("M18 40H36", "#fff", 3, ' opacity=".6"') + L("M46 40H82", "#fff", 3, ' opacity=".4"') + "</g>" + Fc(14, 84, 2.4, "#f4a6b4") + Fc(22, 88, 1.8, "#f4a6b4") + Fc(86, 86, 2.2, "#f4a6b4");
  };
  I.ruler = function () {
    var s = SH(40, 90) + '<g transform="rotate(-24 50 50)">' + Rc(4, 34, 92, 32, 5, "#ffd45a", "l"), i;
    for (i = 0; i < 18; i++) s += L("M" + (10 + i * 4.8) + " 34V" + (i % 5 ? 41 : 48), "#8a6a1c", 1.4);
    return s + L("M10 60H90", "#fff", 2, ' opacity=".5"') + "</g>";
  };
  I.scissors = function () {
    return SH(30, 94) + P("M48 52L30 6L40 4L58 46Z", "#d6dce6", "l") + P("M52 52L70 6L60 4L42 46Z", "#b8c0cc", "l") + Ci(32, 72, 15, "#e5473d", "r") + Ci(32, 72, 7, "#fffdf5", "l") + Ci(68, 72, 15, "#e5473d", "r") + Ci(68, 72, 7, "#fffdf5", "l") + P("M40 56L60 56L66 64L34 64Z", "#e5473d", "l") + Ci(50, 54, 3, "#8a95a8") + SHN(24, 66, 4, 2, 0, 0.5);
  };
  I.phone = function () {
    var s = SH(24) + Rc(24, 6, 52, 88, 10, "#3d3d4a", "l") + Rc(29, 16, 42, 66, 4, "#8ccdf2", "l"), i;
    for (i = 0; i < 6; i++) s += Rc(33 + (i % 3) * 13, 22 + Math.floor(i / 3) * 14, 9, 9, 2.5, [RED, YELLOW, GREEN, PINK, ORANGE, BLUE][i], "l", ' stroke-width="1.4"');
    return s + Ci(50, 88, 3, "#8a95a8", "l") + L("M44 11H56", "#8a95a8", 2) + P("M29 62L50 62L29 82Z", "#fff", "l", ' opacity=".3" stroke="none"');
  };
  I.television = function () {
    return SH(38) + L("M50 24L34 6M50 24L66 6", "#6a7488", 2.6) + Rc(10, 24, 80, 56, 8, "#3d3d4a", "l") + Rc(16, 30, 68, 42, 4, "#8ccdf2", "l") + PN("M16 62C32 54 56 60 84 52L84 68C84 70 82 72 80 72L20 72C18 72 16 70 16 68Z", "#6fbe6a") + Ci(66, 42, 6, YELLOW, "r", ' stroke="none"') + Ci(78, 80, 0, "#000") + Rc(24, 80, 12, 10, 3, "#3d3d4a", "l") + Rc(64, 80, 12, 10, 3, "#3d3d4a", "l") + Ci(80, 76, 2, RED) + P("M16 30L40 30L16 56Z", "#fff", "l", ' opacity=".3" stroke="none"');
  };
  I.brick = function () {
    var br = function (x, y) { return P("M" + x + " " + (y + 8) + "L" + (x + 8) + " " + y + "L" + (x + 52) + " " + y + "L" + (x + 44) + " " + (y + 8) + "Z", "#e58a6a", "l") + P("M" + x + " " + (y + 8) + "L" + (x + 44) + " " + (y + 8) + "L" + (x + 44) + " " + (y + 28) + "L" + x + " " + (y + 28) + "Z", "#c4452e", "l") + P("M" + (x + 44) + " " + (y + 8) + "L" + (x + 52) + " " + y + "L" + (x + 52) + " " + (y + 20) + "L" + (x + 44) + " " + (y + 28) + "Z", "#a02a1a", "l") + SPOTS([[x + 10, y + 16], [x + 26, y + 22], [x + 36, y + 14]], "#a02a1a", 1.2) + E(x + 18, y + 4, 4, 1.4, "#c86a52", "l", ' stroke="none"') + E(x + 34, y + 4, 4, 1.4, "#c86a52", "l", ' stroke="none"'); };
    return SH(40) + br(8, 62) + br(36, 38) + br(8, 14);
  };

  /* ---- nature, sky and transport ---- */
  I.moon = function () {
    return Fc(50, 50, 44, "#ffe27a", ' opacity=".1"') + P("M64 10C34 10 14 30 14 54C14 80 36 92 58 90C70 88 80 82 86 74C56 78 36 52 50 28C54 20 60 14 64 10Z", "#ffe27a", "r", ' transform="rotate(10 50 50)"') +
      Ci(34, 56, 4, "#e8c84a", "r", ' stroke="none" opacity=".7"') + Ci(30, 72, 3, "#e8c84a", "r", ' stroke="none" opacity=".7"') + F(starD(82, 26, 8, 3.4, 5), YELLOW) + F(starD(70, 60, 5, 2.2, 5), YELLOW) + F(starD(90, 50, 4, 1.8, 5), "#fff1b0") + SHN(26, 40, 3, 9, 20, 0.5);
  };
  I.rainbow = function () {
    var cs = [RED, ORANGE, YELLOW, GREEN, BLUE, "#8e44c8"], s = SH(40, 92, 3), i, r;
    for (i = 0; i < 6; i++) { r = 44 - i * 6; s += '<path d="M' + (50 - r) + " 82A" + r + " " + r + " 0 0 1 " + (50 + r) + ' 82" fill="none" stroke="' + shade(cs[i], 0.68) + '" stroke-width="7.6"/><path d="M' + (50 - r) + " 82A" + r + " " + r + " 0 0 1 " + (50 + r) + ' 82" fill="none" stroke="' + cs[i] + '" stroke-width="5.4"/>'; }
    return s + P("M2 84C-2 74 12 70 18 76C22 66 40 68 40 80C44 84 40 92 34 92L10 92C4 92 2 88 2 84Z", "#f0f7ff", "l") + P("M60 84C60 74 76 68 82 76C88 70 100 74 98 84C100 90 96 92 90 92L68 92C62 92 58 88 60 84Z", "#f0f7ff", "l");
  };
  I.rain = function () {
    return P("M26 52C8 52 6 28 26 26C26 6 52 0 60 16C72 4 92 14 86 32C100 34 100 52 82 52Z", "#9aa8bc", "l") + L("M20 42Q24 34 32 34", "#fff", 3, ' opacity=".6"') + P("M26 62Q30 68 26 74Q22 68 26 62Z", "#3b9be8") + P("M44 66Q48 72 44 78Q40 72 44 66Z", "#3b9be8") + P("M62 62Q66 68 62 74Q58 68 62 62Z", "#3b9be8") + P("M78 66Q82 72 78 78Q74 72 78 66Z", "#3b9be8") +
      P("M34 80Q38 86 34 92Q30 86 34 80Z", "#3b9be8") + P("M54 82Q58 88 54 94Q50 88 54 82Z", "#3b9be8") + P("M70 82Q74 88 70 94Q66 88 70 82Z", "#3b9be8");
  };
  I.mountain = function () {
    return SH(44, 92) + P("M2 88L38 22L74 88Z", "#8a7a9a", "l") + P("M38 22L52 48L44 44L38 52L32 44L26 48Z", "#fff", "l", ' stroke-width="2"') + P("M44 88L72 38L98 88Z", "#6f9a8a", "l") + P("M72 38L80 52L72 50L66 54Z", "#fff", "l", ' stroke-width="2"') + P("M0 86C20 80 40 90 60 86C80 82 90 88 100 86L100 94L0 94Z", "#5ab04f", "l") + Ci(86, 20, 8, "#ffcb2e", "r", ' stroke="none"');
  };
  I.river = function () {
    return Rc(2, 6, 96, 88, 8, "#6fbe6a", "l") + P("M54 6C70 6 78 20 54 34C34 46 30 52 56 62C84 74 80 88 72 94L36 94C44 86 52 80 30 70C6 58 12 44 38 32C56 22 42 6 36 6Z", "#4aa3e8", "l") + L("M44 18Q52 14 58 18M30 56Q38 52 46 56M58 76Q66 72 72 76", "#fff", 2.4, ' opacity=".7"') + Ci(14, 20, 6, "#4caf50", "r", ' stroke="none"') + Ci(86, 76, 6, "#4caf50", "r", ' stroke="none"') + Ci(84, 24, 4, "#8a7a6a", "r", ' stroke="none"');
  };
  I.grass = function () {
    var s = SH(36, 93, 3), i, h = [[10, 42, "#4caf50"], [20, 22, "#43b05c"], [30, 36, "#58c15a"], [40, 14, "#4caf50"], [50, 30, "#43b05c"], [60, 12, "#58c15a"], [70, 34, "#4caf50"], [80, 20, "#43b05c"], [90, 40, "#58c15a"]];
    for (i = 0; i < h.length; i++) s += P("M" + (h[i][0] - 6) + " 92Q" + (h[i][0] - 2) + " " + (h[i][1] + 30) + " " + (h[i][0] + (i % 2 ? 6 : -4)) + " " + h[i][1] + "Q" + (h[i][0] + 6) + " " + (h[i][1] + 30) + " " + (h[i][0] + 6) + " 92Z", h[i][2], "l", ' stroke-width="2"');
    return s;
  };
  I.seed = function () {
    return SH(34, 92) + P("M30 22C48 10 66 34 60 54C54 70 40 76 30 66C20 54 20 28 30 22Z", "#8a5a2b", "r", ' transform="rotate(-20 40 45)"') + L("M30 28Q40 48 38 66", "#5a3a1a", 1.8, ' opacity=".6"') +
      P("M60 52C72 46 88 62 82 76C76 86 62 84 58 74C54 66 54 56 60 52Z", "#c49a5c", "r") + P("M16 68C28 64 38 76 32 86C26 92 12 88 12 80C10 74 12 70 16 68Z", "#d9b87a", "r") + SHN(34, 30, 3, 6, -20, 0.5) + SHN(66, 60, 2.4, 5, 0, 0.5);
  };
  I.rose = function () {
    return SH(22) + L("M50 56V92", "#3e9a45", 5) + P("M52 80Q68 68 80 74Q70 90 52 80Z", GREEN) + P("M48 70Q34 60 22 66Q30 82 48 70Z", GREEN) + L("M50 62L44 58M50 74L56 70", "#2e7d32", 2.4) +
      P("M22 30C20 12 80 12 78 30C78 52 62 62 50 62C38 62 22 52 22 30Z", "#c9223f", "r") + P("M22 30C30 38 40 42 50 42C60 42 70 38 78 30C78 52 62 62 50 62C38 62 22 52 22 30Z", "#e8506c", "l") +
      P("M30 22C34 8 66 8 70 22C62 28 38 28 30 22Z", "#f0788e", "l") + Ci(50, 26, 11, "#b01c38", "r", ' stroke="none"') + L("M42 26Q50 16 58 26Q56 34 48 32Q43 28 49 24", "#7a0f26", 2, ' opacity=".8"') + L("M30 40Q50 50 70 40", "#a01c36", 1.6, ' opacity=".6"') + SHN(34, 22, 4, 6, 30, 0.45);
  };
  I.sunflower = function () {
    var s = SH(14) + L("M50 58V92", "#3e9a45", 6) + P("M52 82Q68 70 82 76Q72 92 52 82Z", GREEN) + P("M48 72Q32 62 18 68Q26 84 48 72Z", GREEN), i;
    for (i = 0; i < 12; i++) s += E(50, 14, 7, 14, "#ffc933", "l", ' transform="rotate(' + i * 30 + " 50 38" + ')"');
    return s + Ci(50, 38, 15, "#6a3a1c", "r") + SPOTS([[46, 34], [54, 34], [50, 40], [44, 42], [56, 42], [50, 32]], "#3a1f0e", 1.4) + SHN(44, 30, 3, 4, 0, 0.4);
  };
  I.fire = function () {
    return SH(30, 94, 3) + P("M50 6C62 28 84 38 80 62C78 80 64 88 50 88C36 88 22 80 20 62C18 46 30 40 34 24C40 34 44 36 46 38C46 28 46 18 50 6Z", "#f2662a", "r") + P("M50 34C58 48 70 54 68 68C66 78 58 82 50 82C42 82 34 78 34 68C34 58 44 54 50 34Z", "#ffb02e", "r") + P("M50 56C54 64 60 66 58 74C56 78 52 80 50 80C46 80 42 78 42 74C42 68 48 64 50 56Z", "#fff1a0", "r", ' stroke="none"') +
      T("M12 90L52 82", "#8a5a2b", 7) + T("M88 90L48 82", "#6a4222", 7);
  };
  I.ice = function () {
    return SH(36) + P("M10 50L40 42L50 66L24 76Z", "#bfe8fa", "l", ' fill-opacity=".9"') + P("M44 24L76 20L84 52L52 56Z", "#cdeefc", "l", ' fill-opacity=".9"') + P("M28 70L64 58L84 80L44 92Z", "#a9ddf5", "l", ' fill-opacity=".92"') + P("M52 56L84 52L84 80L64 58Z", "#8ccdf2", "l") + L("M16 52L34 48M50 28L66 26M36 80L58 72", "#fff", 3.2, ' opacity=".8"') + F(starD(88, 24, 6, 2.2, 4), "#fff") + F(starD(14, 30, 5, 2, 4), "#fff");
  };
  I.stone = function () {
    return SH(40, 92) + P("M4 80C2 56 20 38 38 40C54 40 66 56 64 78C62 88 12 90 4 80Z", "#8f98a6", "r") + P("M46 80C42 60 56 44 74 46C92 50 98 68 92 80C86 90 52 90 46 80Z", "#aab3c0", "r") + L("M22 52Q28 50 32 54M62 56Q70 54 76 58", "#6a7488", 1.6, ' opacity=".7"') + SHN(24, 52, 6, 3, -25, 0.5) + SHN(68, 56, 5, 2.4, -20, 0.5);
  };
  I.sand = function () {
    return SH(42, 92) + P("M4 86C12 66 30 50 52 46C72 44 90 64 96 86C96 92 6 92 4 86Z", "#f2d38a", "r") + P("M52 46C72 44 90 64 96 86L70 90C70 70 62 54 52 46Z", "#dcb860", "l", ' stroke="none" opacity=".6"') + SPOTS([[30, 74], [44, 62], [60, 68], [74, 80], [38, 84], [54, 82], [82, 76]], "#c9a050", 1.6) + E(24, 82, 9, 5, "#fbe9c4", "l", ' transform="rotate(-10 24 82)"') + L("M20 82Q24 78 28 82", "#e0b8a0", 1.4) + SHN(40, 58, 8, 2.6, -25, 0.5);
  };
  I["cricket-bat"] = function () {
    return SH(36, 92) + '<g transform="rotate(35 50 50)">' + Rc(40, 2, 12, 34, 5, "#2a62b0", "l") + L("M40 12H52M40 20H52M40 28H52", "#fff", 1.4, ' opacity=".6"') + P("M38 36L54 36L60 90C60 94 50 96 46 96C42 96 34 94 34 90Z", "#f0c27a", "l") + L("M46 40V92", "#c89448", 1.6, ' opacity=".7"') + L("M40 44L38 86", "#fff", 3, ' opacity=".5"') + "</g>" + Ci(78, 80, 10, RED, "r") + L("M70 76Q78 80 86 76", "#fff", 1.8, ' opacity=".9"') + SHN(74, 75, 3, 4, 20, 0.5);
  };
  I.rocket = function () {
    return SH(22, 94, 3) + P("M50 96C42 86 40 80 44 74L56 74C60 80 58 86 50 96Z", "#ff9a1f", "r") + P("M50 90C47 84 47 80 50 76C53 80 53 84 50 90Z", "#ffe27a") + P("M32 56L18 76L34 74Z", RED, "l") + P("M68 56L82 76L66 74Z", RED, "l") + P("M50 4C66 16 68 40 64 70L36 70C32 40 34 16 50 4Z", "#f4f7fb", "r") + P("M50 4C58 10 63 18 65 28L35 28C37 18 42 10 50 4Z", RED, "l") + Ci(50, 46, 9, "#4aa3e8", "r") + Ci(50, 46, 5, "#bfe6fb", "l", ' stroke="none"') + Rc(36, 62, 28, 6, 3, RED, "l");
  };
  I.train = function () {
    var s = SH(46, 90, 4) + Rc(4, 30, 28, 46, 4, "#e5473d", "l") + Rc(34, 26, 28, 50, 6, BLUE, "l") + Rc(64, 30, 32, 46, 5, BLUE, "l") + Rc(8, 36, 18, 14, 3, "#bfe6fb", "l") + Rc(40, 34, 16, 16, 3, "#bfe6fb", "l") + Rc(70, 36, 20, 14, 3, "#bfe6fb", "l") + Rc(4, 60, 92, 6, 0, "#ffc933", "l", ' stroke="none"') + Rc(36, 16, 8, 14, 2, DARK, "l") + Ci(40, 10, 5, "#d6dce6", "r", ' opacity=".8" stroke="none"') + Ci(4, 68, 4, YELLOW, "r") + L("M0 84H100", "#8a95a8", 3);
    return s + Ci(16, 80, 8, DARK, "r") + Ci(16, 80, 3, "#c8ced8") + Ci(44, 80, 8, DARK, "r") + Ci(44, 80, 3, "#c8ced8") + Ci(70, 80, 8, DARK, "r") + Ci(70, 80, 3, "#c8ced8") + Ci(88, 80, 8, DARK, "r") + Ci(88, 80, 3, "#c8ced8");
  };
  I.ship = function () {
    return SH(44, 94, 3) + Rc(44, 6, 12, 22, 3, RED, "l") + Rc(44, 6, 12, 5, 2, DARK, "l") + Rc(24, 28, 52, 26, 4, "#f6f2ea", "l") + Rc(32, 34, 8, 8, 2, "#8ccdf2", "l") + Rc(46, 34, 8, 8, 2, "#8ccdf2", "l") + Rc(60, 34, 8, 8, 2, "#8ccdf2", "l") + Rc(12, 50, 76, 10, 3, "#f6f2ea", "l") + P("M4 58L96 58L82 82C80 84 78 86 74 86L26 86C22 86 20 84 18 82Z", "#2a62b0", "l") + L("M12 66H88", RED, 3) +
      P("M0 84Q10 78 20 84T40 84T60 84T80 84T100 84L100 94L0 94Z", SKY, "l", ' opacity=".92"') + L("M10 90Q16 87 22 90M64 90Q70 87 76 90", "#fff", 2, ' opacity=".6"');
  };
  I.aeroplane = function () {
    return SH(36, 93, 3) + P("M60 52L36 86L50 86L84 52Z", "#c8d2e0", "l") + P("M18 50C18 36 26 36 30 24L40 24L38 50Z", "#2a62b0", "l") + P("M14 44C14 36 20 38 26 50L8 58Z", "#4aa3e8", "l", ' opacity="0"') +
      P("M6 52C6 42 30 38 62 38C86 38 98 44 98 54C98 62 80 64 60 64L14 62C8 62 6 58 6 52Z", "#f6f9ff", "r") + Rc(22, 46, 8, 7, 2, "#8ccdf2", "l") + Rc(36, 46, 8, 7, 2, "#8ccdf2", "l") + Rc(50, 46, 8, 7, 2, "#8ccdf2", "l") + P("M80 44C88 42 94 46 96 50L80 52Z", "#8ccdf2", "l") + L("M10 58H96", "#4aa3e8", 3) +
      P("M56 56L38 14L52 14L82 56Z", "#dde5f0", "l") + SHN(44, 42, 18, 1.8, 0, 0.6);
  };
  I.tractor = function () {
    return SH(42, 92, 4) + Rc(10, 40, 50, 28, 6, "#e5473d", "l") + Rc(56, 26, 28, 12, 3, "#b82f27", "l") + Rc(60, 36, 22, 28, 4, "#d9402f", "l") + Rc(62, 38, 18, 14, 3, "#bfe6fb", "l") + Rc(18, 28, 5, 14, 2, DARK, "l") + L("M62 26V20Q72 18 82 24", DARK, 3) +
      Rc(4, 58, 36, 10, 3, "#8a95a8", "l", ' opacity="0"') + Ci(30, 70, 22, DARK, "r") + Ci(30, 70, 13, "#ffc933", "r") + Ci(30, 70, 4, "#8a95a8", "r") + Ci(76, 78, 12, DARK, "r") + Ci(76, 78, 6, "#ffc933", "r") + Ci(76, 78, 2, "#8a95a8") + L("M10 66L30 70L76 78", "#a82f27", 2, ' opacity=".6"') + SHN(24, 46, 10, 2, 0, 0.5);
  };
  I.truck = function () {
    return SH(46, 88, 4) + Rc(4, 22, 62, 50, 4, "#2fb3a3", "l") + L("M10 32H60M10 40H60", "#fff", 2, ' opacity=".6"') + Ci(20, 56, 4, YELLOW, "r") + Ci(34, 56, 4, RED, "r") + Ci(48, 56, 4, YELLOW, "r") + Rc(4, 66, 62, 10, 0, "#1f7a6e", "l", ' stroke="none"') +
      P("M68 36L84 36C90 36 94 44 96 54L96 74L68 74Z", "#ffc933", "l") + P("M72 40L84 40L90 52L72 52Z", "#bfe6fb") + Ci(94, 66, 3.4, "#fff6c9") + L("M68 60H96", "#d9a52a", 2) + Ci(22, 76, 10, DARK, "r") + Ci(22, 76, 4, "#c8ced8") + Ci(48, 76, 10, DARK, "r") + Ci(48, 76, 4, "#c8ced8") + Ci(82, 76, 10, DARK, "r") + Ci(82, 76, 4, "#c8ced8") + SHN(22, 28, 12, 1.8, 0, 0.45);
  };
  I.airplane = I.aeroplane; I.bicycle = I.cycle;

  /* ---- body ---- */
  var SKIN = "#f1c9a0", SKIND = "#c98a5a";
  I.eye = function () {
    return SH(34, 90, 4) + T("M12 22Q50 4 88 22", "#3d2a1a", 4) + P("M6 56C20 30 80 30 94 56C80 82 20 82 6 56Z", "#fffdf8", "r") + Ci(50, 56, 18, "#7a4a22", "r") + Fc(50, 56, 9, EYE) + Fc(43, 49, 4.4, "#fff") + Fc(57, 62, 2, "#fff", ' opacity=".7"') +
      L("M6 56C20 30 80 30 94 56", "#3a2a2a", 3.6) + L("M24 40L17 30M40 34L37 22M60 34L63 22M76 40L83 30", "#3a2a2a", 3);
  };
  I.ear = function () {
    return SH(26) + P("M44 6C22 8 14 38 26 60C32 70 36 88 50 90C66 90 76 72 72 50C70 26 62 4 44 6Z", SKIN, "r") + L("M44 20C30 26 28 46 36 58M48 32C42 40 44 52 50 60", SKIND, 3.4) + Ci(62, 58, 6, "#f0b890", "r") + SHN(34, 30, 4, 10, 30, 0.5);
  };
  I.nose = function () {
    return SH(30, 92) + P("M44 8C40 30 36 44 30 52C16 56 12 74 26 82C34 88 42 82 50 84C58 82 66 88 74 82C88 74 84 56 70 52C64 44 60 30 56 8Z", SKIN, "r") + P("M26 66C20 56 30 50 38 54C42 60 38 72 26 66Z", "#f0b890", "l", ' stroke="none" opacity=".6"') + Fe(38, 74, 6, 4.2, "#7a3a1a") + Fe(62, 74, 6, 4.2, "#7a3a1a") + L("M34 52Q40 58 44 56M66 52Q60 58 56 56", SKIND, 2.2, ' opacity=".8"') + SHN(46, 30, 3.4, 14, 4, 0.55);
  };
  I.mouth = function () {
    return SH(36, 86, 4) + P("M8 46C24 30 40 32 50 38C60 32 76 30 92 46C76 62 24 62 8 46Z", "#7a1f2a", "r") + Rc(22, 42, 56, 10, 3, "#fffdf8", "l", ' stroke-width="1.6"') + E(50, 62, 16, 6, "#f0788c", "r", ' stroke="none"') +
      P("M8 46C24 30 40 32 50 38C60 32 76 30 92 46C76 40 62 42 50 46C38 42 24 40 8 46Z", "#e5473d", "r") + P("M8 46C24 62 76 62 92 46C88 74 66 82 50 82C34 82 12 74 8 46Z", "#f0606a", "r", ' opacity="0"') + L("M10 52Q50 84 90 52", "#c0352c", 6) + L("M10 52Q50 84 90 52", "#f0606a", 3.6) + SHN(30, 40, 6, 1.8, -10, 0.55);
  };
  I.hand = function () {
    var s = SH(28), f = [[28, 22, 10, 40, 0], [39, 12, 11, 48, 0], [51, 14, 11, 46, 0], [62, 24, 10, 38, 0]], i;
    s += Rc(6, 52, 13, 34, 6.5, SKIN, "l", ' transform="rotate(-38 14 70)"');
    for (i = 0; i < 4; i++) s += Rc(f[i][0], f[i][1], f[i][2], f[i][3], 5, SKIN, "l");
    return s + Rc(26, 46, 48, 46, 16, SKIN, "r") + L("M38 70Q50 76 62 66M44 58Q52 62 62 56", SKIND, 2, ' opacity=".7"') + SHN(36, 60, 4, 10, 15, 0.45);
  };
  I.foot = function () {
    return SH(26, 94) + P("M26 66C24 48 36 38 52 38C68 38 78 52 74 66C72 80 68 94 50 94C34 94 28 82 26 66Z", SKIN, "r") + Ci(34, 28, 9.4, SKIN, "r") + Ci(51, 22, 6.2, SKIN, "r") + Ci(63, 27, 5.4, SKIN, "r") + Ci(72, 35, 4.8, SKIN, "r") + Ci(77, 46, 4.2, SKIN, "r") + P("M26 66C24 48 36 38 52 38C68 38 78 52 74 66C72 80 68 94 50 94C34 94 28 82 26 66Z", SKIN, "r", ' stroke="none"') +
      L("M32 66Q50 74 68 62", SKIND, 2, ' opacity=".5"') + SHN(36, 60, 4, 10, 15, 0.45);
  };
  I.tooth = function () {
    return SH(28, 93) + P("M22 22C30 10 42 14 50 16C58 14 70 10 78 22C84 32 78 48 74 60C72 72 70 92 62 92C54 92 56 68 50 68C44 68 46 92 38 92C30 92 28 72 26 60C22 48 16 32 22 22Z", "#fffdf8", "r") + L("M32 24Q40 20 46 24", "#c8d6e6", 2, ' opacity=".7"') + SHN(32, 34, 4, 8, 15, 0.9) + F(starD(84, 18, 8, 2.6, 4), "#7cc8f0") + F(starD(14, 54, 5, 1.8, 4), "#7cc8f0");
  };
  I.hair = function () {
    var s = SH(24, 94), i, c = "#2a1a14";
    s += P("M18 6C40 -4 82 6 80 30C78 50 66 46 52 36C40 26 26 22 18 6Z", c, "r") + L("M26 12Q50 6 70 18M30 20Q52 16 72 28", "#6a4a40", 2, ' opacity=".7"');
    for (i = 0; i < 4; i++) s += E(i % 2 ? 54 : 46, 46 + i * 12, 11, 8, c, "r", ' transform="rotate(' + (i % 2 ? -25 : 25) + " " + (i % 2 ? 54 : 46) + " " + (46 + i * 12) + ')"');
    return s + Ci(50, 40, 5, RED, "r") + P("M46 90L50 100L56 90Z", "#2a1a14") + F("M44 38L40 34L38 44L46 42Z", RED) + F("M56 38L60 34L62 44L54 42Z", RED) + SHN(34, 18, 6, 2.4, -10, 0.45);
  };
  /* ---- people: one shared body and head, a few parameters ---- */
  function person(o) {
    var sk = o.sk || SKIN, top = o.top || BLUE, bot = o.bot || DARK, s = o.noSH ? "" : SH(26, 93, 4), arm = function (x, d, ox) { return T("M" + x + " 54Q" + (x + d) + " 60 " + (x + d + ox) + " 74", top, 8) + Ci(f1(x + d + ox), 76, 4.8, sk, "r"); };
    s += (o.back || "");
    if (o.legs != null) s += o.legs;
    else if (o.dress) s += Rc(38, 82, 8, 10, 4, sk, "l") + Rc(54, 82, 8, 10, 4, sk, "l") + Rc(35, 88, 13, 6, 3, DARK, "l") + Rc(52, 88, 13, 6, 3, DARK, "l");
    else s += Rc(36, 74, 12, 18, 5, o.long ? bot : sk, "l") + Rc(52, 74, 12, 18, 5, o.long ? bot : sk, "l") + Rc(33, 87, 16, 7, 3.5, DARK, "l") + Rc(51, 87, 16, 7, 3.5, DARK, "l") + (o.long ? "" : Rc(33, 70, 34, 14, 5, bot, "l"));
    s += (o.larm || arm(31, -9, -1)) + (o.rarm || arm(69, 9, 1));
    s += o.dress ? P("M33 48L67 48L80 88L20 88Z", o.dress, "l") + (o.skirt || "") : Rc(31, 47, 38, 34, 12, top, "l");
    s += (o.mid || "") + Ci(50, 32, 19, sk, "r") + (o.hairB || "") + (o.eyesS != null ? o.eyesS : eyes(50, 33, 7.4, 2.9)) + Ci(36, 41, 3.4, "#f08a8a", "r", ' stroke="none" opacity=".45"') + Ci(64, 41, 3.4, "#f08a8a", "r", ' stroke="none" opacity=".45"') + (o.mouth != null ? o.mouth : smile(50, 42, 4.4, "#8a3a2a"));
    return s + (o.front || "") + SHN(40, 22, 4, 6, 25, 0.35) + (o.acc || "");
  }
  var HAIR = "#2a1a14", FR2 = function (c) { return P("M30 30C28 8 72 8 70 30C62 20 38 20 30 30Z", c, "r"); };
  I.boy = function () { return person({ sk: "#d9a273", top: "#e5473d", bot: "#2a62b0", front: FR2(HAIR) + P("M30 30C28 10 40 6 50 8L40 16Z", HAIR, "r", ' stroke="none"') }); };
  I.girl = function () {
    return person({ sk: "#f1c9a0", dress: "#ee6fa4", skirt: Ci(50, 60, 3, YELLOW) + Ci(42, 76, 2.4, "#fff") + Ci(60, 80, 2.4, "#fff") + Ci(52, 70, 2.4, "#fff"), top: "#ee6fa4",
      back: T("M32 30Q18 46 24 64", HAIR, 7) + T("M68 30Q82 46 76 64", HAIR, 7) + Ci(24, 66, 4.6, RED, "r") + Ci(76, 66, 4.6, RED, "r"), front: FR2(HAIR) });
  };
  I.teacher = function () {
    return person({ sk: "#c98a5a", dress: "#2fb3a3", top: "#2fb3a3", skirt: P("M33 48L67 48L72 60L34 70Z", ORANGE, "l", ' opacity=".95"') + L("M40 62L74 88", "#fff", 2, ' opacity=".6"'),
      back: Ci(50, 11, 9, HAIR, "r"), front: P("M30 30C28 10 72 10 70 30C60 18 40 18 30 30Z", HAIR, "r") + Fc(50, 22, 2, RED) +
        '<circle cx="42" cy="34" r="7.4" fill="none" stroke="#3d3d4a" stroke-width="1.8"/><circle cx="58" cy="34" r="7.4" fill="none" stroke="#3d3d4a" stroke-width="1.8"/><path d="M49.4 34h1.2" stroke="#3d3d4a" stroke-width="1.8"/>',
      rarm: T("M69 54Q80 56 84 62", "#2fb3a3", 8) + Ci(85, 64, 4.8, "#c98a5a", "r"), acc: Rc(78, 56, 20, 16, 2, BLUE, "l", ' transform="rotate(-12 88 64)"') + Rc(80, 58, 3, 12, 0, "#fff", "l", ' stroke="none" transform="rotate(-12 88 64)"') + Ci(85, 64, 4.8, "#c98a5a", "r") });
  };
  I.farmer = function () {
    return person({ sk: "#b97a4c", top: "#6aa84f", bot: "#fff6e0", long: true, rarm: T("M69 54Q84 54 86 44", "#6aa84f", 8) + Ci(86, 42, 4.8, "#b97a4c", "r"),
      back: T("M88 12L86 88", BROWN, 3.4) + P("M80 8C92 6 98 12 96 20C90 16 84 16 80 8Z", "#a8b0bc", "l"),
      front: E(50, 18, 23, 12, "#ffcf6a", "r") + P("M30 22C34 12 66 12 70 22C60 18 40 18 30 22Z", "#ffe8a0", "l", ' stroke="none"') + L("M32 18Q50 10 68 18M34 24Q50 16 66 24", "#d9a52a", 1.6, ' opacity=".7"') + P("M40 42Q50 38 60 42Q50 48 40 42Z", HAIR, "r"), acc: Ci(86, 42, 4.8, "#b97a4c", "r") });
  };
  I.doctor = function () {
    return person({ sk: "#f1c9a0", top: "#ffffff", bot: "#3b82e0", long: true, back: P("M32 28C26 44 30 54 34 52L36 34Z", HAIR, "r") + P("M68 28C74 44 70 54 66 52L64 34Z", HAIR, "r"),
      mid: P("M42 46L50 58L58 46L66 48L66 80L34 80L34 48Z", "#ffffff", "l", ' opacity="0"') + Rc(47, 47, 6, 34, 0, "#4aa3e8", "l", ' stroke="none"'),
      front: FR2(HAIR), acc: T("M40 50Q40 70 50 68Q60 70 60 50", "#3d3d4a", 2.2) + Ci(50, 70, 3.6, "#c8ced8", "r") + Rc(55, 62, 9, 9, 2, "#fff", "l", ' stroke-width="1.4"') + F("M58.6 63.4h1.8v1.8h1.8v1.8h-1.8v1.8h-1.8v-1.8h-1.8v-1.8h1.8z", RED) + Rc(33, 58, 6, 4, 2, RED, "r", ' opacity="0"') });
  };
  I.cook = function () {
    return person({ sk: "#d9a273", top: "#fffdf5", bot: "#3d3d4a", long: true, rarm: T("M69 54Q82 56 82 64", "#fffdf5", 8) + Ci(82, 66, 4.8, "#d9a273", "r"),
      mid: P("M36 56L64 56L68 82L32 82Z", "#e5473d", "l") + Rc(40, 64, 20, 8, 3, "#f2662a", "l", ' stroke-width="1.6"') + P("M42 49L50 56L58 49L56 47L50 52L44 47Z", RED, "l", ' stroke-width="1.5"'),
      front: Ci(34, 14, 10, "#fffdf5", "r") + Ci(66, 14, 10, "#fffdf5", "r") + Ci(50, 8, 11, "#fffdf5", "r") + Rc(33, 12, 34, 12, 3, "#fffdf5", "r") + L("M38 14Q50 8 62 14", "#e8e2d0", 1.4) + P("M40 40Q50 36 60 40Q50 46 40 40Z", HAIR, "r", ' opacity=".0"'),
      acc: T("M84 54L88 76", "#a8b0bc", 3) + E(88, 80, 8, 6, "#8a95a8", "r") + Ci(82, 66, 4.8, "#d9a273", "r") });
  };
  I.police = function () {
    return person({ sk: "#b97a4c", top: "#c9a85a", bot: "#7a6a3a", long: true, mid: Rc(31, 70, 38, 5, 0, "#3a2a1a", "l", ' stroke="none"') + Rc(46, 69, 8, 7, 1, YELLOW, "r", ' stroke-width="1.2"') + Rc(36, 54, 8, 8, 1, "#e0c070", "l", ' stroke-width="1.2"') + Rc(56, 54, 8, 8, 1, "#e0c070", "l", ' stroke-width="1.2"'),
      front: P("M30 24C30 8 70 8 70 24Z", "#c9a85a", "r") + P("M28 26L72 26L66 30L34 30Z", "#3a2a1a", "l") + Ci(50, 16, 4.2, YELLOW, "r", ' stroke-width="1.4"') + P("M41 42Q50 37 59 42Q50 46 41 42Z", HAIR, "r"), acc: T("M54 54Q60 62 58 70", "#c8ced8", 1.8) + Ci(58, 70, 3, "#c8ced8", "r") });
  };
  I.baby = function () {
    var sk = "#f1c9a0";
    return SH(30, 93, 4) + Rc(30, 82, 17, 10, 5, sk, "l") + Rc(53, 82, 17, 10, 5, sk, "l") + E(50, 72, 22, 17, "#ffd45a", "l") + Rc(34, 76, 32, 12, 6, "#fffdf5", "l") + T("M32 66Q20 66 18 56", "#ffd45a", 7) + T("M68 66Q80 66 82 56", "#ffd45a", 7) + Ci(18, 54, 5, sk, "r") + Ci(82, 54, 5, sk, "r") +
      Ci(50, 38, 25, sk, "r") + Ci(26, 40, 5, sk, "r") + Ci(74, 40, 5, sk, "r") + eyes(50, 42, 9.5, 3.6) + Ci(34, 50, 4.2, "#f08a8a", "r", ' stroke="none" opacity=".5"') + Ci(66, 50, 4.2, "#f08a8a", "r", ' stroke="none" opacity=".5"') + smile(50, 50, 5, "#8a3a2a") + Fc(50, 46, 1.4, "#c98a5a") +
      T("M46 14Q50 8 56 14", "#2a1a14", 3) + SHN(38, 26, 4, 6, 25, 0.4);
  };
  I.family = function () {
    var g = function (o, x, y, k) { o.noSH = true; return '<g transform="translate(' + x + " " + y + ") scale(" + k + ')">' + person(o) + "</g>"; };
    return SH(42, 94, 4) + g({ sk: "#b97a4c", top: "#4aa3e8", bot: "#3d3d4a", long: true, front: FR2(HAIR) }, 2, 14, 0.74) + g({ sk: "#c98a5a", dress: "#ee6fa4", top: "#ee6fa4", back: Ci(50, 11, 9, HAIR, "r"), front: FR2(HAIR) }, 36, 14, 0.74) +
      g({ sk: "#d9a273", top: "#ffc933", bot: "#e5473d", front: FR2(HAIR) }, 19, 46, 0.58);
  };

  /* ---- action words: a child doing it (jump, run, walk, sleep, eat, drink, sing, dance, read, write, swim, fly, cry, laugh, sit, stand) ---- */
  var KS = "#d9a273", KB = "#2a62b0", HR = "#2a1a14", WT = "#4ab0f0";
  var KHAIR = FR2(HR) + P("M30 30C28 10 40 6 50 8L40 16Z", HR, "r", ' stroke="none"');
  function kid(o) { var b = { sk: KS, top: RED, bot: KB, front: KHAIR }, k; for (k in o) b[k] = o[k]; return person(b); }
  function armTo(x, y, qx, qy, ex, ey, top, sk) { return T("M" + x + " " + y + "Q" + qx + " " + qy + " " + ex + " " + ey, top || RED, 8) + Ci(ex, ey, 4.8, sk || KS, "r"); }
  function legPair(a1, a2, lift) { // two legs swung apart around the hips, with shoes and shorts; lift = raise the left foot
    var lg = function (a, hx, up) {
      return '<g transform="' + (up ? "translate(0 -" + up + ") " : "") + "rotate(" + a + " " + hx + ' 76)">' + Rc(hx - 6, 74, 12, 18, 5, KS, "l") + Rc(hx - 9, 87, 16, 7, 3.5, DARK, "l") + "</g>";
    };
    return lg(a1, 42, lift || 0) + lg(a2, 58, 0) + Rc(33, 70, 34, 14, 5, KB, "l");
  }
  function note8(x, y, c) { return L("M" + (x + 3.4) + " " + y + "L" + (x + 3.4) + " " + (y - 14) + "Q" + (x + 10) + " " + (y - 11) + " " + (x + 9) + " " + (y - 5), c || "#6a4cc8", 2.2) + E(x, y, 4.6, 3.4, c || "#6a4cc8", "l", ' transform="rotate(-20 ' + x + " " + y + ')"'); }
  function dashes(arr, c) { return arr.map(function (d) { return L(d, c || "#9aa6b8", 3, ' stroke-linecap="round"'); }).join(""); }
  I.stand = function () { return kid({ acc: P("M90 28L97 40H92.5V60H87.5V40H83Z", GREEN) }); };
  I.walk = function () {
    return kid({ legs: legPair(14, -14), larm: armTo(31, 54, 20, 58, 18, 70), rarm: armTo(69, 54, 76, 62, 77, 76), back: Fe(20, 93, 5, 2, "#000", ' opacity=".12"') + Fe(84, 93, 5, 2, "#000", ' opacity=".12"') });
  };
  I.run = function () {
    return '<g transform="rotate(8 50 92)">' + kid({ legs: legPair(32, -26, 7), larm: armTo(31, 54, 14, 54, 14, 40), rarm: armTo(69, 54, 82, 60, 88, 72), mouth: Fe(50, 43, 3.2, 2.6, "#7a2a2a") }) + "</g>" + dashes(["M3 44H14", "M2 58H12", "M5 72H15"]);
  };
  I.jump = function () {
    return Fe(50, 94, 16, 3, "#000", ' opacity=".14"') + '<g transform="translate(5 -3) scale(0.9)">' + kid({ noSH: true, legs: legPair(-10, 10), larm: armTo(31, 54, 18, 44, 18, 26), rarm: armTo(69, 54, 82, 44, 82, 26), mouth: Fe(50, 43, 3.6, 3, "#7a2a2a") }) + "</g>" +
      dashes(["M8 38V28", "M92 38V28", "M50 12V4"], "#f2a51c");
  };
  I.sit = function () {
    var chair = Rc(26, 38, 48, 46, 8, "#b07a3c", "l") + Rc(22, 80, 56, 8, 4, BROWN, "l") + Rc(26, 86, 6, 8, 2, BROWN, "l") + Rc(68, 86, 6, 8, 2, BROWN, "l");
    return kid({ back: chair, legs: Rc(33, 72, 34, 12, 5, KB, "l") + Rc(37, 84, 11, 8, 3, KS, "l") + Rc(52, 84, 11, 8, 3, KS, "l") + Rc(34, 88, 15, 6, 3, DARK, "l") + Rc(51, 88, 15, 6, 3, DARK, "l"), noSH: false });
  };
  I.sleep = function () {
    return SH(46, 94, 4) + Rc(4, 74, 92, 12, 5, BROWN, "l") + Rc(4, 64, 6, 28, 3, "#b07a3c", "l") + Rc(90, 70, 6, 22, 3, "#b07a3c", "l") + Rc(8, 60, 84, 18, 7, "#fffdf5", "l") +
      E(25, 56, 18, 10, "#cfe0ff", "r") + Ci(26, 48, 15, KS, "r") + P("M11 46C12 30 40 30 41 46C34 40 20 40 11 46Z", HR, "r") + L("M19 49Q22 52 25 49M30 49Q33 52 36 49", EYE, 1.8) +
      Ci(18, 54, 2.8, "#f08a8a", "r", ' stroke="none" opacity=".5"') + Ci(36, 54, 2.8, "#f08a8a", "r", ' stroke="none" opacity=".5"') + L("M24 57Q27 59 30 57", "#8a3a2a", 1.6) +
      P("M38 58C52 52 76 54 92 60L92 80L38 80Z", BLUE, "l") + L("M38 62C52 56 76 58 92 64", "#fff", 2, ' opacity=".5"') + L("M46 66V80M58 64V80M70 64V80M82 66V80", "#fff", 1.8, ' opacity=".28"') +
      L("M56 30h9l-9 10h9", "#6a4cc8", 3, ' stroke-linecap="round" stroke-linejoin="round"') + L("M70 16h12l-12 13h12", "#6a4cc8", 3.6, ' stroke-linecap="round" stroke-linejoin="round"');
  };
  I.eat = function () {
    return kid({ rarm: "<g/>", mouth: Fe(50, 43.5, 3.6, 2.8, "#7a2a2a"), acc: armTo(69, 56, 80, 56, 64, 47, RED, KS) + item("apple", { x: 70, y: 40, s: 24 }) });
  };
  I.drink = function () {
    return kid({ rarm: "<g/>", acc: armTo(69, 56, 70, 66, 61, 62, RED, KS) + '<g transform="translate(37 28) rotate(-14 20 20) scale(0.4)">' + tumbler(WT, "l", 30) + L("M26 40Q38 36 50 40T74 40", "#fff", 3, ' opacity=".55"') + "</g>" });
  };
  I.sing = function () {
    return kid({ mouth: Fe(50, 44, 4.4, 5.2, "#7a2a2a") + Fe(50, 46.4, 2.6, 1.8, "#e86a6a"), acc: note8(10, 30) + note8(88, 22, "#e5473d") + note8(90, 52, "#3b82e0") });
  };
  I.dance = function () {
    var g = person({ sk: SKIN, noSH: true, dress: "#ee6fa4", top: "#ee6fa4", skirt: Ci(50, 60, 3, YELLOW) + Ci(42, 76, 2.4, "#fff") + Ci(60, 80, 2.4, "#fff") + Ci(52, 70, 2.4, "#fff"),
      back: T("M32 30Q16 40 18 58", HR, 7) + T("M68 30Q84 40 82 58", HR, 7) + Ci(18, 60, 4.6, RED, "r") + Ci(82, 60, 4.6, RED, "r"), front: FR2(HR),
      larm: armTo(31, 54, 16, 50, 12, 34, "#ee6fa4", SKIN), rarm: armTo(69, 54, 82, 62, 90, 72, "#ee6fa4", SKIN), mouth: P("M42 41Q50 52 58 41Z", "#7a2a2a", "l", ' stroke-width="1.2"') });
    return SH(26, 93, 4) + '<g transform="rotate(-7 50 90)">' + g + "</g>" + note8(8, 24) + note8(88, 20, "#e5473d") + P(starD(90, 46, 6, 2.6, 4), YELLOW, "l", ' stroke-width="1.4"');
  };
  I.read = function () {
    var pg = function (d) { return P(d, "#fffdf5", "l", ' stroke-width="1.8"'); };
    return kid({ larm: armTo(31, 54, 22, 64, 26, 76), rarm: armTo(69, 54, 78, 64, 74, 76),
      acc: P("M24 56L50 62L76 56L76 84L50 90L24 84Z", RED, "l") + pg("M50 62L27 57L27 82L50 88Z") + pg("M50 62L73 57L73 82L50 88Z") + L("M32 63l13 3M32 69l13 3M32 75l13 3M68 63l-13 3M68 69l-13 3M68 75l-13 3", "#b8b0a0", 1.6) + Ci(24, 76, 4.2, KS, "r") + Ci(76, 76, 4.2, KS, "r") });
  };
  I.write = function () {
    return kid({ rarm: "<g/>", larm: armTo(31, 54, 22, 64, 28, 76),
      acc: P("M20 62L62 62L62 90L20 90Z", "#fffdf5", "l") + L("M26 70H56M26 77H56M26 84H44", "#9fc2ea", 1.8) + L("M28 72Q34 66 40 72T52 72", "#3b82e0", 1.8) + Ci(28, 76, 4.2, KS, "r") +
        armTo(69, 56, 76, 66, 62, 74, RED, KS) + T("M86 52L60 82", YELLOW, 6) + P("M60 82L57 90L65 85Z", "#f5d7a8") + F("M57 90L58.4 87.6L60.2 89.2Z", DARK) });
  };
  I.cry = function () {
    var tear = function (x, y) { return P("M" + x + " " + y + "C" + (x - 3) + " " + (y + 5) + " " + (x - 3) + " " + (y + 9) + " " + x + " " + (y + 9) + "C" + (x + 3) + " " + (y + 9) + " " + (x + 3) + " " + (y + 5) + " " + x + " " + y + "Z", "#6ec6ff", "l", ' stroke-width="1.2"'); };
    return kid({ eyesS: L("M36 31Q42 36 48 31M52 31Q58 36 64 31", EYE, 2) + L("M34 27L46 24M66 27L54 24", EYE, 1.8), mouth: L("M43 49Q50 41 57 49", "#8a3a2a", 2.4),
      front: KHAIR + tear(40, 37) + tear(60, 37) + tear(36, 46) + tear(64, 46), rarm: armTo(69, 54, 76, 50, 66, 40, RED, KS) });
  };
  I.laugh = function () {
    return kid({ eyesS: L("M36 34Q42 28 48 34M52 34Q58 28 64 34", EYE, 2.2), mouth: P("M40 40Q50 40 60 40Q58 52 50 52Q42 52 40 40Z", "#7a2a2a", "l", ' stroke-width="1.2"') + Fe(50, 49, 4.4, 2.4, "#e86a6a"),
      acc: L("M14 22L22 28M10 36H20M14 50L22 44M86 22L78 28M90 36H80M86 50L78 44", "#f2a51c", 2.6, ' stroke-linecap="round"') });
  };
  I.swim = function () {
    var cap = P("M31 29C28 6 72 6 69 29C60 22 40 22 31 29Z", "#e5473d", "r"), gog = '<circle cx="42" cy="33" r="7" fill="#bfe8fa" stroke="#3d3d4a" stroke-width="2"/><circle cx="58" cy="33" r="7" fill="#bfe8fa" stroke="#3d3d4a" stroke-width="2"/><path d="M49 33h2M30 32L35 33M70 32L65 33" stroke="#3d3d4a" stroke-width="2" fill="none"/>';
    return kid({ noSH: true, legs: "", front: cap, eyesS: gog, mouth: "", rarm: armTo(69, 56, 86, 36, 97, 50, "#ee6fa4", KS), larm: "<g/>", top: "#ee6fa4" }) +
      P("M0 64Q12 56 25 64T50 64T75 64T100 64V100H0Z", SKY, "l") + L("M6 76Q18 70 30 76T54 76T78 76", "#fff", 2.4, ' opacity=".6"') + L("M12 88Q24 82 36 88T60 88T84 88", "#fff", 2.4, ' opacity=".4"') +
      Ci(88, 30, 2.6, "#bfe8fa", "l", ' stroke-width="1.2"') + Ci(94, 22, 2, "#bfe8fa", "l", ' stroke-width="1"');
  };
  I.fly = function () {
    return Fe(26, 90, 14, 4, "#fff", ' opacity=".9"') + Fe(40, 86, 16, 6, "#fff", ' opacity=".9"') + Fe(80, 90, 14, 4, "#fff", ' opacity=".7"') +
      P("M40 56C28 40 26 20 36 6C50 18 58 38 54 56Z", "#7ab4f0", "l") + P("M22 62L2 54L6 70Z", "#4a86d6") +
      E(48, 60, 26, 16, BLUE, "r") + Fe(50, 66, 14, 8, "#dbeeff", ' opacity=".9"') + Ci(72, 48, 12, BLUE, "r") + P("M82 46L96 50L82 54Z", "#ff9a24") + eye(75, 45, 3.2) +
      P("M46 58C34 42 30 24 20 12C34 14 52 28 62 54Z", "#4a86d6", "l") + L("M30 40L44 54M26 28L40 48", "#fff", 1.6, ' opacity=".5"') + SHN(66, 42, 3, 2, -20, 0.6);
  };
  /* ---- describing words ---- */
  function dimmed(on, inner) { return on ? inner : '<g opacity=".32">' + inner + "</g>"; }
  function ph(x, base, k, inner) { return '<g transform="translate(' + x + " " + base + ") scale(" + k + ") translate(-50 -94)\">" + inner + "</g>"; }
  I.big = function () { return dimmed(true, item("ball", { x: 36, y: 56, s: 70 })) + dimmed(false, item("ball", { x: 80, y: 74, s: 32 })); };
  I.small = function () { return dimmed(false, item("ball", { x: 36, y: 56, s: 70 })) + dimmed(true, item("ball", { x: 80, y: 74, s: 32 })); };
  function kidT(skin, top, hairy) { return person({ noSH: true, sk: skin, top: top, bot: KB, front: hairy ? KHAIR : FR2(HR) }); }
  I.tall = function () {
    return Fe(50, 94, 44, 3.5, "#000", ' opacity=".1"') + dimmed(true, ph(34, 94, 0.9, kidT(KS, RED, true))) + dimmed(false, ph(80, 94, 0.5, kidT(SKIN, YELLOW)));
  };
  I.short = function () {
    return Fe(50, 94, 44, 3.5, "#000", ' opacity=".1"') + dimmed(false, ph(34, 94, 0.9, kidT(KS, RED, true))) + dimmed(true, ph(80, 94, 0.5, kidT(SKIN, YELLOW)));
  };
  I.hot = function () {
    var st = function (x, h) { return L("M" + x + " 34C" + (x - 10) + " 26 " + (x + 10) + " 20 " + x + " " + (34 - h), "#e5473d", 4, ' stroke-linecap="round"'); };
    return SH(30) + L("M78 52C98 50 98 78 76 76", "#c9361c", 7) + P("M20 44L80 44L74 82C73 90 66 94 58 94L42 94C34 94 27 90 26 82Z", "#f2662a", "l") + E(50, 44, 30, 6, "#ff9a5a") + Fe(50, 45, 25, 3.8, "#6b3a1c") + st(38, 20) + st(52, 28) + st(66, 20) + SHN(32, 66, 3, 12, 8);
  };
  I.cold = function () {
    var sf = "", i;
    for (i = 0; i < 3; i++) sf += L("M0 -13V13", "#3b9ee8", 3, ' stroke-linecap="round" transform="translate(80 24) rotate(' + i * 60 + ')"');
    return item("ice", { x: 44, y: 62, s: 84 }) + sf + Fc(80, 24, 3, "#3b9ee8");
  };
  I.happy = function () {
    return SH(30) + Ci(50, 52, 38, YELLOW, "r") + Ci(36, 62, 5, "#ff9a7a", "r", ' stroke="none" opacity=".5"') + Ci(64, 62, 5, "#ff9a7a", "r", ' stroke="none" opacity=".5"') + eyes(50, 46, 12, 4.2) + P("M30 58Q50 86 70 58Z", "#7a2a2a", "l", ' stroke-width="2"') + Fe(50, 70, 8, 3.4, "#e86a6a") + SHN(34, 32, 6, 3, -30, 0.55);
  };
  I.sad = function () {
    return SH(30) + Ci(50, 52, 38, "#ffd35a", "r") + eyes(50, 46, 12, 4.2) + L("M32 38L45 32M68 38L55 32", EYE, 2.4, ' stroke-linecap="round"') + L("M34 70Q50 54 66 70", "#7a2a2a", 3.4, ' stroke-linecap="round"') +
      P("M65 52C61 58 61 63 65 63C69 63 69 58 65 52Z", "#6ec6ff", "l", ' stroke-width="1.4"') + SHN(34, 32, 6, 3, -30, 0.5);
  };
  I.pillow = function () {
    return SH(40, 92, 4) + P("M8 30C30 22 70 22 92 30C98 48 98 62 92 78C70 86 30 86 8 78C2 62 2 48 8 30Z", "#cfe0ff", "r") + L("M10 34Q14 54 10 74M90 34Q86 54 90 74", "#9bb4e8", 2, ' opacity=".7"') +
      L("M30 40Q50 34 70 40", "#fff", 3, ' opacity=".6"') + F("M8 30L16 36L10 44Z", "#9bb4e8", ' opacity=".5"') + SHN(30, 40, 9, 3.4, -8, 0.6);
  };
  I.heavy = function () {
    return Fe(50, 93, 36, 4, "#000", ' opacity=".18"') + T("M34 34C32 6 68 6 66 34", "#3d3d4a", 6) + Ci(50, 64, 30, "#4a5060", "r") + Rc(32, 84, 36, 8, 3, "#3d3d4a", "l") + SHN(38, 52, 6, 10, 30, 0.35) +
      '<text x="50" y="72" text-anchor="middle" font-size="18" font-weight="800" fill="#fff" font-family="system-ui,sans-serif" stroke="none">kg</text>' + P("M6 22L16 22L16 34L22 34L11 46L0 34L6 34Z", "#e5473d", "l", ' stroke-width="1.6"') + P("M84 22L94 22L94 34L100 34L89 46L78 34L84 34Z", "#e5473d", "l", ' stroke-width="1.6"');
  };
  I.light = function () { // not heavy: a feather
    return Fe(50, 94, 24, 3, "#000", ' opacity=".08"') + P("M18 84C10 50 34 14 80 8C84 40 62 76 22 86Z", "#f4a6c8", "l") + L("M16 88C34 62 56 36 78 12", "#d9729e", 3) + L("M30 66L52 70M36 54L60 56M44 40L68 40M54 28L74 26", "#d9729e", 1.6, ' opacity=".6"') +
      L("M10 88L18 82", "#c9a66b", 3) + SHN(52, 34, 3, 12, 40, 0.6);
  };
  I.full = function () {
    return SH(28) + tumbler(WT, "l", 20) + L("M26 28Q38 24 50 28T74 28", "#fff", 2.4, ' opacity=".55"') + L("M31 30L35 80", "#fff", 4, ' opacity=".6"') + Ci(44, 58, 3, "#fff", "l", ' opacity=".5" stroke="none"') + Ci(58, 70, 2.4, "#fff", "l", ' opacity=".5" stroke="none"');
  };
  I.empty = function () {
    return SH(28) + tumbler("#e8f5fb", "l", 93) + L("M31 28L35 80", "#fff", 5, ' opacity=".85"') + L("M68 30L66 72", "#fff", 2, ' opacity=".6"') + E(50, 14, 28, 5, "#eaf6fc", "l");
  };
  I.fast = function () {
    return dashes(["M2 40H20", "M0 54H16", "M4 68H22"], "#9aa6b8") + item("rabbit", { x: 62, y: 54, s: 80 }) + P("M84 14L92 4L94 16L100 18L90 24Z", YELLOW, "l", ' stroke-width="1.2"');
  };
  I.slow = function () {
    return item("tortoise", { x: 50, y: 56, s: 90 }) + Fc(8, 90, 2.4, "#bca77a", ' opacity=".6"') + Fc(14, 92, 1.8, "#bca77a", ' opacity=".6"');
  };
  /* ---- other everyday words ---- */
  I.sky = function () {
    return SH(40, 94, 3) + Rc(6, 8, 88, 82, 14, "#78c2f2", "l") + Fe(50, 78, 40, 10, "#fff", ' opacity=".35"') + Ci(72, 30, 13, YELLOW, "r", ' stroke-width="2"') +
      Fe(30, 62, 20, 9, "#fff") + Fe(42, 56, 14, 11, "#fff") + Fe(22, 56, 11, 8, "#fff") + SHN(16, 20, 6, 2.6, -20, 0.5);
  };
  I.bulb = function () {
    return L("M50 2V9M16 20L21 25M84 20L79 25M6 46H13M94 46H87", "#f2a51c", 3.4, ' stroke-linecap="round"') + P("M50 10C28 10 18 28 24 44C27 52 36 58 36 68L64 68C64 58 73 52 76 44C82 28 72 10 50 10Z", "#ffe27a", "r") +
      Rc(36, 68, 28, 8, 3, "#aab4c0", "l") + Rc(37, 77, 26, 7, 3, "#8a95a8", "l") + Rc(41, 85, 18, 6, 3, "#6b7688", "l") + L("M42 56L46 36L50 50L54 36L58 56", "#e08a14", 2) + SHN(36, 28, 5, 9, 30, 0.7);
  };
  I.tongue = function () {
    return SH(34, 93, 3) + P("M6 36C20 20 80 20 94 36C94 62 76 76 50 76C24 76 6 62 6 36Z", "#c2453a", "r") + P("M24 40C24 36 76 36 76 40L76 50L24 50Z", "#fffdf6", "l", ' stroke-width="1.6"') +
      P("M34 52L66 52C68 70 62 90 50 90C38 90 32 70 34 52Z", "#ee6a7c", "r") + L("M50 56V80", "#c2455a", 2.4) + SHN(44, 62, 4, 8, 10, 0.5);
  };
  I.fruit = function () {
    return SH(38) + item("banana", { x: 68, y: 34, s: 46, rot: 18 }) + item("grapes", { x: 28, y: 36, s: 38 }) + item("apple", { x: 48, y: 40, s: 40 }) + item("orange", { x: 74, y: 54, s: 34 }) +
      P("M8 56C8 80 28 92 50 92C72 92 92 80 92 56Z", "#e0a040", "r") + E(50, 56, 42, 7, "#c98a2c") + L("M18 68Q22 80 34 85", "#fff", 3, ' opacity=".4"');
  };
  I.wind = function () {
    var c = "#eaf2fc", cs = [[28, 44, 20], [46, 36, 22], [62, 46, 18], [26, 60, 15], [46, 62, 17]], o = "", i;
    for (i = 0; i < cs.length; i++) o += Ci(cs[i][0], cs[i][1], cs[i][2], c, "r");
    for (i = 0; i < cs.length; i++) o += '<circle cx="' + cs[i][0] + '" cy="' + cs[i][1] + '" r="' + (cs[i][2] - 1) + '" fill="' + fl(c, "r") + '" stroke="none"/>';
    return SH(30, 94, 3) + o + Ci(30, 52, 4.4, "#f08a8a", "r", ' stroke="none" opacity=".5"') + Ci(52, 52, 4.4, "#f08a8a", "r", ' stroke="none" opacity=".5"') + eyes(41, 44, 8, 2.8) + Fe(41, 55, 3.6, 3, "#7a2a2a") +
      T("M62 56C74 54 84 50 88 42C92 34 82 30 78 38", "#8fb4d8", 3.4) + T("M64 62C78 62 92 64 94 72C95 80 86 80 84 74", "#8fb4d8", 3.4) + T("M60 68C68 76 78 80 76 92", "#8fb4d8", 3);
  };

  /* ======== BATCH 3 (words the first kit lacked): shared helpers, then places, food, things, people, ideas, positions ======== */
  // @@BATCH3-START
  var WD2 = "#d9a066";
  function win(x, y, w, h, c) { return Rc(x, y, w, h, 2, c || "#9fd4f4", "l", ' stroke-width="1.6"') + L("M" + f1(x + w / 2) + " " + y + "V" + (y + h) + "M" + x + " " + f1(y + h / 2) + "H" + (x + w), "#fff", 1.4, ' opacity=".8"'); }
  function dor(x, y, w, h, c) { return Rc(x, y, w, h, 3, c || BROWN, "l", ' stroke-width="1.6"') + Ci(x + w - 3.5, y + h / 2, 1.4, YELLOW, "r", ' stroke-width=".6"'); }
  function crownD(cx, y, w) {
    var h = w * 0.62, x = cx - w / 2;
    return P("M" + f1(x) + " " + f1(y + h) + "L" + f1(x - w * 0.04) + " " + y + "L" + f1(x + w * 0.27) + " " + f1(y + h * 0.4) + "L" + cx + " " + f1(y - h * 0.15) + "L" + f1(x + w * 0.73) + " " + f1(y + h * 0.4) + "L" + f1(x + w * 1.04) + " " + y + "L" + f1(x + w) + " " + f1(y + h) + "Z", "#ffcf3a", "l", ' stroke-width="1.6"') + Ci(cx, f1(y + h * 0.58), w * 0.07, RED, "r", ' stroke-width="1"');
  }
  function bl(cx, cy, r) { // the one ball used in every position picture
    return Ci(cx, cy, r, RED, "r") + L("M" + f1(cx - r * 0.9) + " " + f1(cy - r * 0.2) + "Q" + cx + " " + f1(cy + r * 0.5) + " " + f1(cx + r * 0.9) + " " + f1(cy - r * 0.2), "#fff", 1.6, ' opacity=".9"') + L("M" + f1(cx - r * 0.7) + " " + f1(cy + r * 0.6) + "Q" + cx + " " + f1(cy - r * 0.1) + " " + f1(cx + r * 0.7) + " " + f1(cy + r * 0.6), "#fff", 1.6, ' opacity=".9"') + SHN(cx - r * 0.35, cy - r * 0.4, r * 0.25, r * 0.4, 35, 0.55);
  }
  function cubeD(x, y, s, c) { return P("M" + x + " " + (y + s * 0.25) + "L" + (x + s * 0.5) + " " + y + "L" + (x + s) + " " + (y + s * 0.25) + "L" + (x + s * 0.5) + " " + (y + s * 0.5) + "Z", tint(c, 0.35), "l") + P("M" + x + " " + (y + s * 0.25) + "L" + (x + s * 0.5) + " " + (y + s * 0.5) + "L" + (x + s * 0.5) + " " + (y + s) + "L" + x + " " + (y + s * 0.75) + "Z", c, "l") + P("M" + (x + s * 0.5) + " " + (y + s * 0.5) + "L" + (x + s) + " " + (y + s * 0.25) + "L" + (x + s) + " " + (y + s * 0.75) + "L" + (x + s * 0.5) + " " + (y + s) + "Z", shade(c, 0.78), "l"); }
  function wheelD(cx, cy, r) {
    var s = Ci(cx, cy, r, "#8a5a2b", "r", ' stroke-width="3"'), i;
    for (i = 0; i < 4; i++) s += L("M" + f1(cx - r * 0.85 * Math.cos(i * 0.785)) + " " + f1(cy - r * 0.85 * Math.sin(i * 0.785)) + "L" + f1(cx + r * 0.85 * Math.cos(i * 0.785)) + " " + f1(cy + r * 0.85 * Math.sin(i * 0.785)), "#c68a4c", 2.4);
    return s + Ci(cx, cy, r * 0.22, "#c68a4c", "r", ' stroke-width="1.4"');
  }
  function hutD(cx, base, k, roof) {
    return '<g transform="translate(' + cx + " " + base + ") scale(" + k + ')">' + Rc(-17, -26, 34, 26, 3, "#d9a273", "l", ' stroke-width="1.8"') + P("M-24 -22L0 -48L24 -22Z", roof || "#c9a23a", "l", ' stroke-width="1.8"') + L("M-14 -26L-8 -33M-2 -26L0 -38M10 -26L6 -33", "#a8841c", 1.4, ' opacity=".7"') + Rc(-5, -17, 10, 17, 3, BROWN, "l", ' stroke-width="1.4"') + "</g>";
  }

  /* ---- numbers beyond 20: tens bundles and single sticks ---- */
  function bundleTen(x, y, w, h) { // one bundle of ten sticks tied with a red band
    var s = SH(w / 2, y + h + 2, 1.6).replace(/cx="50"/g, 'cx="' + (x + w / 2) + '"'), i;
    for (i = 0; i < 5; i++) s += Rc(f1(x + i * w / 5), y, f1(w / 5 + 0.6), h, 1.4, "#4aa3e8", "l", ' stroke-width="1"');
    return s + Rc(f1(x - 1), f1(y + h * 0.42), w + 2, f1(h * 0.16), 1.5, RED, "l", ' stroke-width="1"');
  }
  function bundles(o) { // place value picture for 21..100 in a 100 x 100 box: tens bundles (up to 5 a row) then single sticks
    var n = o.n, t = Math.floor(n / 10), u = n % 10, s = "", rows = t > 5 ? 2 : (t ? 1 : 0), bh = rows === 2 ? 31 : 38, y0 = rows === 2 ? 4 : (u ? 10 : 30), i, c, r, per, x0, bw = 17, sw = 6.5;
    for (i = 0; i < t; i++) {
      r = i < 5 ? 0 : 1; per = r === 0 ? Math.min(t, 5) : t - 5; c = r === 0 ? i : i - 5; x0 = 50 - per * (bw + 2.5) / 2 + 1.25;
      s += bundleTen(f1(x0 + c * (bw + 2.5)), y0 + r * (bh + 3), bw, bh);
    }
    y0 = u && t ? (rows === 2 ? 72 : 56) : 36;
    x0 = 50 - u * (sw + 3.5) / 2 + 1.75;
    for (i = 0; i < u; i++) s += Rc(f1(x0 + i * (sw + 3.5)), y0, sw, rows === 2 ? 24 : 36, 3, "#4aa3e8", "l", ' stroke-width="1.2"') + Rc(f1(x0 + i * (sw + 3.5) + 1.3), y0 + 3, 1.4, rows === 2 ? 17 : 29, 0.7, "#fff", "l", ' opacity=".5" stroke="none"');
    return W(o.x, o.y, o.s || 100, s);
  }

  /* ---- things and food ---- */
  I.matchbox = function () {
    return SH(40) + Rc(8, 36, 84, 46, 6, "#e5473d", "l") + Rc(14, 42, 72, 34, 4, "#ffd45a", "l", ' stroke-width="1.6"') + Rc(8, 74, 84, 8, 3, "#5a3a2a", "l", ' stroke-width="1.4"') +
      Fc(20, 78, 1, "#c98a5a") + Fc(34, 78.5, 1, "#c98a5a") + Fc(50, 78, 1, "#c98a5a") + Fc(66, 78.5, 1, "#c98a5a") + Fc(80, 78, 1, "#c98a5a") +
      L("M36 70L58 48", "#c68a4c", 4.5) + Ci(60, 46, 5, RED, "r", ' stroke-width="1.6"') + P("M64 42Q70 32 66 24Q76 32 72 42Q69 46 64 42Z", ORANGE, "r", ' stroke-width="1.2"') + SHN(18, 44, 6, 2.4, -10, 0.5);
  };
  I.thumb = function () { // a thumbs-up
    return SH(30) + Rc(6, 52, 18, 38, 5, BLUE, "l") + P("M28 52C34 46 40 38 42 26C42 14 54 12 56 22C58 32 54 42 52 48L80 48C88 48 90 54 86 58C90 62 90 68 84 70C88 74 86 80 80 82C82 88 76 92 70 92L34 92C30 92 28 90 28 86Z", SKIN, "r") +
      L("M52 56H80M50 66H80M48 76H78", SKIND, 1.8, ' opacity=".6"') + SHN(48, 28, 3, 8, 8, 0.5);
  };
  I.ox = function () {
    return quad({ c: "#e6dcc6", d: "#cbbfa6", by: 56, bx: 40, rx: 30, ry: 19, hx: 84, hy: 42, hrx: 10.5, hry: 17, rot: -28, ly: 90, c2: "#9a7a66", hf: "#3a2a1c", nw: 16,
      pre: T("M13 52Q4 62 8 80", "#e6dcc6", 3) + Ci(8, 82, 4, "#5a4a3a", "r"), mid: E(60, 38, 12, 11, "#e6dcc6", "r") + L("M70 54Q74 62 72 72", "#b8a888", 2, ' opacity=".6"'),
      ear: T("M80 29Q70 28 68 18", "#f7f0dc", 4.5) + T("M92 28Q100 26 100 16", "#f7f0dc", 4.5) + E(76, 40, 5, 2.6, "#cbbfa6", "l", ' transform="rotate(20 76 40)"') });
  };

  I["bullock-cart"] = function () {
    return SH(44, 93, 4) + '<g transform="translate(40 24) scale(.62)">' + I.ox() + "</g>" + T("M52 70L72 70", BROWN, 3) +
      Rc(4, 52, 54, 7, 3, WD2, "l") + L("M8 52V40M20 52V40M32 52V40M44 52V40M56 52V40", BROWN, 2.4) + Rc(4, 40, 54, 4, 2, "#c68a4c", "l", ' stroke-width="1.4"') + L("M56 58L74 76", BROWN, 3) + wheelD(30, 74, 17) + SHN(14, 54, 5, 1.4, 0, 0.5);
  };
  I.okra = function () {
    var pod = function (rot, c) { return '<g transform="rotate(' + rot + ' 50 92)">' + P("M50 14C60 16 62 32 58 52C56 70 53 84 50 93C47 84 44 70 42 52C38 32 40 16 50 14Z", c, "l") + L("M50 20V88", shade(c, 0.78), 1.4, ' opacity=".7"') + L("M46 22C45 46 47 70 49 86M54 22C55 46 53 70 51 86", shade(c, 0.78), 1, ' opacity=".5"') + P("M43 16Q50 8 57 16Q50 20 43 16Z", "#2f7a3a", "l", ' stroke-width="1.4"') + "</g>"; };
    return SH(28) + pod(-28, "#5fae4a") + pod(26, "#5fae4a") + pod(0, "#7bc258") + SHN(46, 40, 2.6, 12, 4, 0.5);
  };
  I.soil = function () {
    return SH(42) + P("M6 90C10 62 28 42 50 40C72 42 90 62 94 90Z", "#8a5a2b", "r") + Ci(30, 76, 4, "#6a4220", "r", ' stroke-width="1"') + Ci(52, 62, 3.4, "#a3703a", "r", ' stroke-width="1"') + Ci(68, 78, 4.4, "#6a4220", "r", ' stroke-width="1"') + Ci(42, 54, 2.6, "#6a4220", "r", ' stroke-width="1"') + Ci(78, 70, 2.6, "#a3703a", "r", ' stroke-width="1"') +
      T("M70 92Q80 84 88 90T96 88", "#ee8a9a", 3.4) + Ci(96, 88, 2.4, "#ee8a9a", "r", ' stroke-width="1"') + SHN(38, 52, 6, 3, -30, 0.35);
  };
  I.lamb = function () {
    var w = "#fbf7ee", s = SH(30), i, p = [[26, 70, 14], [74, 70, 14], [50, 76, 18], [34, 56, 15], [66, 56, 15], [50, 62, 16]];
    s += Rc(34, 84, 9, 9, 4, "#4a4752", "l") + Rc(57, 84, 9, 9, 4, "#4a4752", "l");
    for (i = 0; i < p.length; i++) s += Ci(p[i][0], p[i][1], p[i][2], w, "r");
    return s + E(26, 34, 13, 6, "#4a4752", "l", ' transform="rotate(-25 26 34)"') + E(74, 34, 13, 6, "#4a4752", "l", ' transform="rotate(25 74 34)"') + Ci(50, 18, 9, w, "r") + Ci(40, 22, 7, w, "r") + Ci(60, 22, 7, w, "r") +
      E(50, 38, 15, 17, "#6a6670", "r") + Fc(42, 36, 3, "#fff") + Fc(58, 36, 3, "#fff") + Fc(42.4, 36.4, 1.6, EYE) + Fc(58.4, 36.4, 1.6, EYE) + Fe(50, 46, 4.2, 3, "#f0788c") + L("M50 49V51M45 52Q50 56 55 52", "#2a2830", 1.2) + SHN(36, 60, 5, 4, 0, 0.6);
  };
  I.jeep = function () {
    return SH(44, 88, 4) + P("M6 62L6 46C6 42 9 40 12 40L40 40L46 24L74 24L76 40L90 42C94 43 95 46 95 50L95 62C95 66 92 68 88 68L12 68C8 68 6 66 6 62Z", "#5c9a3c", "l") +
      P("M49 28L44 40L66 40L66 28Z", "#bfe6fb") + L("M44 24H76", "#3d5a2a", 3) + L("M46 24V40M76 24V40", "#3d5a2a", 2.4) + Rc(2, 50, 8, 8, 2, "#8a8a96", "r") + Ci(90, 52, 4, "#fff6c9", "r", ' stroke-width="1.4"') + Rc(4, 52, 4, 14, 2, "#3d3d4a", "l") +
      Ci(26, 70, 12, DARK, "r") + Ci(26, 70, 5, "#c8ced8") + Ci(76, 70, 12, DARK, "r") + Ci(76, 70, 5, "#c8ced8") + SHN(20, 46, 8, 1.6, 0, 0.5);
  };
  I.swan = function () {
    return P("M0 70Q12 64 25 70T50 70T75 70T100 70V100H0Z", SKY, "l") + L("M8 82Q20 77 32 82T56 82", "#fff", 2.4, ' opacity=".6"') +
      T("M66 58C80 58 82 40 72 32C64 26 66 12 76 14", "#ffffff", 9) + E(44, 60, 30, 14, "#ffffff", "r") + P("M16 54C8 46 4 50 10 60Z", "#ffffff", "l") + P("M22 56C34 42 56 48 64 58C50 64 34 64 22 56Z", "#e4eaf4", "l", ' stroke-width="1.6"') +
      Ci(78, 14, 7, "#ffffff", "r") + P("M83 12L95 15L83 19Z", "#ff8a24") + Fc(81, 11, 2, EYE) + Fc(84, 11, 1.8, "#3a2a2a", ' opacity="0"') + SHN(38, 52, 8, 2.6, -10, 0.7);
  };
  I.salt = function () {
    return SH(30, 94, 3) + Rc(24, 36, 40, 56, 8, "#d4e8f2", "l", ' fill-opacity=".7"') + Rc(28, 52, 32, 36, 5, "#ffffff", "l", ' stroke="none"') + Rc(22, 22, 44, 18, 6, "#b9c4d2", "l") + Fc(34, 28, 1.6, "#6b7688") + Fc(44, 28, 1.6, "#6b7688") + Fc(54, 28, 1.6, "#6b7688") + Fc(39, 33, 1.4, "#6b7688") + Fc(49, 33, 1.4, "#6b7688") +
      Fc(78, 80, 2, "#fff") + Fc(84, 86, 2, "#fff") + Fc(74, 88, 2, "#fff") + Fc(90, 78, 1.6, "#fff") + Fc(80, 90, 1.6, "#fff") + F(starD(80, 64, 6, 1.8, 4), "#7cc8f0") + L("M30 44L32 88", "#fff", 3, ' opacity=".6"');
  };
  I.papaya = function () {
    var sd = "", i;
    for (i = 0; i < 9; i++) sd += Ci(40 + (i % 3) * 8 + (i > 5 ? 3 : 0), 50 + Math.floor(i / 3) * 9 + (i % 3) * 3, 2.6, "#2a1a14", "r", ' stroke="none"');
    return SH(34) + '<g transform="rotate(-24 50 54)">' + P("M50 6C72 10 82 40 76 66C72 86 62 94 50 94C38 94 28 86 24 66C18 40 28 10 50 6Z", "#8cbf3f", "l") + P("M50 12C68 16 76 42 71 64C68 80 60 88 50 88C40 88 32 80 29 64C24 42 32 16 50 12Z", "#ff9a3c", "r", ' stroke="none"') +
      E(50, 56, 11, 22, "#ffb55a", "r", ' stroke="none"') + sd + P("M46 6L54 6L52 0L48 0Z", "#6a8a2a", "l", ' stroke-width="1.4"') + "</g>" + SHN(30, 40, 3, 10, 20, 0.45);
  };
  I.oil = function () {
    return SH(26) + P("M44 6L56 6L56 20C70 28 74 38 74 52L74 86C74 91 70 94 65 94L35 94C30 94 26 91 26 86L26 52C26 38 30 28 44 20Z", "#f2b620", "l") + Rc(41, 2, 18, 9, 3, RED, "l") + Rc(30, 52, 40, 28, 5, "#fff6e0", "l", ' stroke-width="1.6"') +
      P("M50 56C44 64 44 70 50 72C56 70 56 64 50 56Z", "#f2b620", "r", ' stroke-width="1.4"') + L("M31 36L31 84", "#fff", 3.4, ' opacity=".55"') + P("M86 62C82 70 82 76 86 78C90 76 90 70 86 62Z", "#f2b620", "r", ' stroke-width="1.4"');
  };
  I.chalk = function () {
    var st = function (x, y, rot, c) { return '<g transform="rotate(' + rot + " " + x + " " + y + ')">' + Rc(x - 7, y - 17, 14, 34, 7, c, "l", ' stroke-width="2"') + L("M" + (x - 3) + " " + (y - 10) + "V" + (y + 10), "#fff", 2.2, ' opacity=".6"') + "</g>"; };
    return SH(40, 94, 3) + Rc(8, 6, 84, 46, 5, "#2f6a4a", "l", ' stroke="#8a5a2b" stroke-width="4"') + L("M18 22Q26 14 34 22T50 22M60 38H82", "#ffffff", 2.4, ' opacity=".8" stroke-linecap="round"') + st(26, 74, -20, "#ffd45a") + st(74, 76, 24, "#ee6fa4") + st(50, 76, 0, "#ffffff");
  };

  I.bun = function () {
    return SH(36, 90) + E(50, 62, 40, 28, "#d9923a", "l") + P("M12 60C12 30 88 30 88 60C88 78 70 86 50 86C30 86 12 78 12 60Z", "#e7a64c", "r") + E(50, 50, 32, 14, "#f2c274", "r", ' stroke="none" opacity=".6"') +
      L("M30 48Q50 40 70 48", "#b8742a", 2, ' opacity=".6"') + Fe(36, 56, 3, 1.6, "#fff6e0", ' transform="rotate(-20 36 56)"') + Fe(52, 50, 3, 1.6, "#fff6e0", ' transform="rotate(10 52 50)"') + Fe(66, 58, 3, 1.6, "#fff6e0", ' transform="rotate(30 66 58)"') + Fe(46, 66, 3, 1.6, "#fff6e0") + SHN(32, 46, 6, 3, -20, 0.55);
  };
  I.eagle = function () {
    return birdy({ c: "#7a4a24", w: "#5a3418", hc: "#fffaf0", b: "#a56a38", hr: 17, bk: "#ffc933", bs: "M80 28L98 34Q94 46 82 44L80 38Z", lg: "#ffc933", tail: "M22 62L0 56L4 76Z", tc: "#5a3418", post: L("M64 28L76 31", "#3a2a1c", 2.4) });
  };
  I.globe = function () {
    return '<defs><clipPath id="gc@"><circle cx="50" cy="42" r="34"/></clipPath></defs>' + SH(26, 94, 3) + Rc(46, 78, 8, 12, 2, "#8a5a2b", "l") + E(50, 90, 22, 5, "#a0683a", "l") +
      Ci(50, 42, 34, "#3b82e0", "r") + '<g clip-path="url(#gc@)">' + P("M24 22C34 14 46 18 44 28C42 38 32 40 34 52C30 56 22 46 22 38Z", "#4caf50", "l", ' stroke-width="1.4"') + P("M54 18C66 14 80 22 80 34C78 42 70 40 66 48C60 56 54 48 56 38C50 32 48 22 54 18Z", "#4caf50", "l", ' stroke-width="1.4"') + P("M52 58C62 56 72 62 66 70C60 74 54 68 52 58Z", "#4caf50", "l", ' stroke-width="1.4"') + "</g>" +
      '<ellipse cx="50" cy="42" rx="14" ry="34" fill="none" stroke="#fff" stroke-width="1" opacity=".35"/>' + L("M16 42H84", "#fff", 1, ' opacity=".35"') + L("M12 56A40 40 0 0 0 66 78", "#c9a66b", 4) + SHN(36, 26, 7, 12, 35, 0.4);
  };
  I.school = function () {
    return SH(46, 93, 4) + Rc(8, 44, 84, 46, 3, "#f4d28a", "l") + Rc(4, 40, 92, 8, 3, "#c0392b", "l") + Rc(34, 28, 32, 18, 3, "#f4d28a", "l") + P("M30 30L50 14L70 30Z", "#c0392b", "l") + L("M50 14V2", "#8a8a96", 2) + P("M50 2L66 6L50 10Z", ORANGE, "l", ' stroke-width="1.2"') +
      win(13, 54, 14, 14) + win(73, 54, 14, 14) + win(13, 74, 14, 14) + win(73, 74, 14, 14) + win(41, 32, 18, 10) + dor(42, 62, 16, 28) + Rc(38, 88, 24, 5, 1, "#c8ced8", "l", ' stroke-width="1.4"') + SHN(20, 50, 6, 1.4, 0, 0.5);
  };
  I.hospital = function () {
    return SH(46, 93, 4) + Rc(8, 30, 84, 60, 4, "#f5f7fa", "l") + Rc(8, 30, 84, 8, 3, "#3b82e0", "l") + Rc(40, 8, 20, 20, 4, "#fff", "l") + Rc(46, 11, 8, 14, 1, RED, "l", ' stroke="none"') + Rc(43, 14, 14, 8, 1, RED, "l", ' stroke="none"') +
      win(14, 46, 14, 12, "#9fd4f4") + win(72, 46, 14, 12, "#9fd4f4") + win(14, 66, 14, 12, "#9fd4f4") + win(72, 66, 14, 12, "#9fd4f4") + Rc(38, 58, 24, 32, 3, "#bfe6fb", "l") + L("M50 58V90", "#fff", 1.6) + SHN(18, 44, 6, 1.4, 0, 0.5);
  };
  I.library = function () {
    var cols = [RED, BLUE, GREEN, YELLOW, "#8e44c8", ORANGE, "#2fb3a3", PINK], s = SH(44, 94, 3) + Rc(6, 6, 88, 86, 4, WD2, "l"), r, i, x, h;
    for (r = 0; r < 3; r++) {
      s += Rc(10, 12 + r * 26, 80, 22, 2, "#8a5a2b", "l", ' stroke-width="1.2"');
      x = 12;
      for (i = 0; i < 7; i++) { h = 15 + ((i * 7 + r * 3) % 6); s += Rc(x, 12 + r * 26 + 22 - h, 8.4, h, 1.4, cols[(i + r * 3) % 8], "l", ' stroke-width="1.2"'); x += 10.6; }
    }
    return s;
  };
  I.park = function () {
    return Fe(50, 90, 48, 7, "#8fc16a", ' opacity=".6"') + item("tree", { x: 26, y: 48, s: 62 }) + L("M52 90L58 30M92 90L86 30M58 30H86", "#8a5a2b", 4) + L("M64 30V68M80 30V68", "#6a4a2a", 1.8) + Rc(60, 66, 24, 5, 2, "#e5473d", "l", ' stroke-width="1.4"');
  };
  I.garden = function () {
    var s = Fe(50, 90, 48, 6, "#8fc16a", ' opacity=".6"') + L("M4 60H96", "#fff", 3) + L("M10 50V84M26 50V84M42 50V84M58 50V84M74 50V84M90 50V84", "#f5f5f0", 6) + L("M10 50V84M26 50V84M42 50V84M58 50V84M74 50V84M90 50V84", "#c8c8c0", 1) + L("M4 74H96", "#fff", 3);
    return s + item("flower", { x: 24, y: 70, s: 40 }) + item("sunflower", { x: 52, y: 62, s: 48 }) + item("rose", { x: 78, y: 70, s: 40 });
  };
  I.flag = function () {
    var chakra = Ci(52, 36, 7, "#ffffff", "l", ' stroke="#1f3a93" stroke-width="1.6"'), i, sp = "";
    for (i = 0; i < 6; i++) sp += L("M" + f1(52 + 6.4 * Math.cos(i * 0.5236)) + " " + f1(36 + 6.4 * Math.sin(i * 0.5236)) + "L" + f1(52 - 6.4 * Math.cos(i * 0.5236)) + " " + f1(36 - 6.4 * Math.sin(i * 0.5236)), "#1f3a93", 1);
    return SH(18, 95, 2.5) + Rc(14, 10, 5, 84, 2.5, "#9aa0a8", "l") + Ci(16.5, 8, 4, YELLOW, "r") + P("M19 12Q40 6 60 12T92 12L92 28L19 28Z", "#ff9933", "l", ' stroke-width="1.6"') + P("M19 28Q40 22 60 28T92 28L92 44L19 44Z", "#ffffff", "l", ' stroke-width="1.6"') + P("M19 44Q40 38 60 44T92 44L92 60L19 60Z", "#138808", "l", ' stroke-width="1.6"') + chakra + sp;
  };
  I.toy = function () {
    return SH(42, 93, 4) + cubeD(8, 56, 36, RED) + cubeD(44, 56, 36, BLUE) + cubeD(26, 28, 36, YELLOW) + bl(78, 82, 12) + F(starD(35, 46, 5, 2, 5), "#fff", ' opacity=".8"');
  };
  I.jug = function () {
    return SH(30) + T("M70 36C92 36 92 70 68 70", "#2f8ed8", 6) + P("M22 14L72 14L76 22L68 28C74 40 78 60 74 82C72 90 66 94 58 94L36 94C28 94 22 90 22 82C20 60 28 40 32 28L22 22Z", "#4aa3e8", "l") + P("M22 14L72 14L76 22L22 22Z", "#78c2f2", "l", ' stroke-width="1.6"') + Fe(48, 24, 22, 3, "#fff", ' opacity=".35"') + L("M30 44Q50 52 70 44", "#fff", 2, ' opacity=".5"') + L("M30 38L30 82", "#fff", 3.6, ' opacity=".5"');
  };
  I.mug = function () {
    return SH(28) + T("M72 36C94 36 94 74 70 74", "#e5473d", 7) + P("M22 22L74 22L72 84C72 90 66 94 60 94L36 94C30 94 24 90 24 84Z", "#ee6a5a", "l") + E(48, 22, 26, 6, "#ff9a8a") + Fe(48, 23, 21, 3.6, "#b5651d") + L("M32 36L34 82", "#fff", 4, ' opacity=".5"');
  };
  I.pot = function () { // a clay pot (matka)
    return SH(32) + P("M38 18C34 18 32 20 32 24L32 28C16 36 10 54 14 70C18 86 34 94 50 94C66 94 82 86 86 70C90 54 84 36 68 28L68 24C68 20 66 18 62 18Z", "#d2693a", "r") + E(50, 19, 18, 5, "#e98a58") + Fe(50, 20, 13, 2.8, "#5a2a14") + L("M17 56Q50 66 83 56", "#8a3a1a", 2.4, ' opacity=".7"') + L("M16 66Q50 76 84 66", "#8a3a1a", 2.4, ' opacity=".5"') +
      Fc(30, 62, 1.8, "#f5d9a0") + Fc(42, 66, 1.8, "#f5d9a0") + Fc(54, 66, 1.8, "#f5d9a0") + Fc(66, 62, 1.8, "#f5d9a0") + SHN(26, 48, 4, 10, 25, 0.45);
  };
  I.tamarind = function () {
    var bumps = function (y0) { var o = "", i; for (i = 0; i < 6; i++) o += L("M" + (22 + i * 11) + " " + (y0 - 2 + Math.abs(2 - i) * 1.5) + "v7", "#7a4a24", 1.4, ' opacity=".6"'); return o; };
    return SH(40, 92, 4) + P("M6 40C16 18 52 12 80 22C92 28 96 38 92 44C80 36 50 30 30 42C20 48 10 48 6 40Z", "#b98a5a", "l") + bumps(30) +
      P("M4 78C14 56 50 50 78 60C90 66 96 76 92 82C80 74 50 68 28 80C16 86 8 86 4 78Z", "#a0683a", "l") + E(48, 70, 30, 6, "#7a3a14", "r", ' transform="rotate(8 48 70)"') + Ci(34, 70, 2.6, "#3a1a0a", "r", ' stroke="none"') + Ci(48, 71, 2.6, "#3a1a0a", "r", ' stroke="none"') + Ci(62, 72, 2.6, "#3a1a0a", "r", ' stroke="none"');
  };

  I.pomegranate = function () {
    var s = SH(34) + Ci(40, 56, 32, "#c8283c", "r") + P("M32 26L36 16L40 24L45 15L48 25L54 18L52 30Z", "#8a1c2c", "l", ' stroke-width="1.4"') + SHN(26, 44, 5, 11, 30, 0.5), i, a;
    s += Ci(70, 66, 24, "#f0e0c0", "r") + Ci(70, 66, 20, "#e0304a", "r", ' stroke="none"');
    for (i = 0; i < 9; i++) { a = i * 2.4; s += Ci(f1(70 + (i % 3 + 1) * 5 * Math.cos(a)), f1(66 + (i % 3 + 1) * 5 * Math.sin(a)), 3.2, "#ff5a6e", "r", ' stroke-width="1"'); }
    return s;
  };
  I.jaggery = function () {
    return SH(40, 92, 4) + P("M8 70L12 46L34 40L46 50L44 80L22 86Z", "#b9772a", "l") + P("M44 80L46 50L70 44L92 58L88 82L62 88Z", "#9a5e1e", "l") + P("M28 44L36 22L62 18L76 34L68 46L46 50Z", "#d9983a", "l") +
      L("M16 54L36 50M54 60L80 64M40 28L60 26", "#7a4a14", 1.6, ' opacity=".5"') + Fc(22, 70, 1.6, "#7a4a14", ' opacity=".5"') + Fc(70, 74, 1.6, "#7a4a14", ' opacity=".5"') + SHN(44, 28, 8, 3, -10, 0.5);
  };
  I.puppy = function () {
    return SH(30) + E(50, 82, 21, 13, "#e8b87a", "r") + Rc(34, 86, 11, 8, 4, "#f9e6cc", "l") + Rc(55, 86, 11, 8, 4, "#f9e6cc", "l") + T("M70 84Q86 80 84 66", "#e8b87a", 6) + Ci(50, 42, 27, "#e8b87a", "r") +
      E(22, 42, 10, 21, "#8b5a2b", "l", ' transform="rotate(14 22 42)"') + E(78, 42, 10, 21, "#8b5a2b", "l", ' transform="rotate(-14 78 42)"') + E(50, 52, 17, 12, "#f9e6cc", "r") + eye(38, 36, 4.2) + eye(62, 36, 4.2) + E(50, 46, 6, 4.4, EYE) + Fc(48, 44.6, 1.4, "#fff") +
      L("M50 50V55M42 56Q50 64 50 56Q50 64 58 56", "#7a4a1a", 1.6) + P("M45 60Q50 74 55 60Z", "#f0788c", "l", ' stroke-width="1.4"') + SHN(36, 26, 4, 7, 25, 0.5);
  };
  I.helmet = function () {
    return SH(36, 90) + P("M10 66C8 34 28 12 52 12C76 12 92 34 90 66L90 74L10 74Z", RED, "r") + P("M10 66L90 66L90 74L10 74Z", "#b8302a", "l", ' stroke-width="1.6"') + F("M40 16L48 14L44 64L32 64Z", "#fff", ' opacity=".9"') + F("M60 16L68 20L64 64L52 64Z", "#fff", ' opacity=".9"') +
      T("M32 74Q34 90 50 90Q64 90 66 74", "#3d3d4a", 3) + Rc(46, 84, 8, 8, 2, YELLOW, "r", ' stroke-width="1.4"') + SHN(28, 36, 5, 12, 35, 0.5);
  };
  I.taxi = function () {
    return SH(42, 87, 4) + Rc(36, 14, 28, 10, 3, YELLOW, "l", ' stroke-width="1.6"') + '<text x="50" y="22" text-anchor="middle" font-size="7.5" fill="#3d3d4a" stroke="none"' + FONT + ">TAXI</text>" +
      P("M8 64L8 54C8 48 14 46 22 44L34 30C36 28 38 28 42 28L64 28C68 28 70 30 72 32L80 44C90 46 94 50 94 58L94 64C94 68 90 70 86 70L14 70C10 70 8 68 8 64Z", YELLOW, "l") + F("M8 56H94V62H8Z", DARK, ' opacity=".85"') +
      P("M37 33L30 44L48 44L48 33Z", "#bfe6fb") + P("M54 33L54 44L75 44L67 33Z", "#bfe6fb") + Ci(90, 56, 4, "#fff6c9") + Ci(28, 72, 11, DARK, "r") + Ci(28, 72, 4.5, "#c8ced8") + Ci(74, 72, 11, DARK, "r") + Ci(74, 72, 4.5, "#c8ced8") + SHN(30, 35, 8, 1.6, 0, 0.5);
  };
  I.bench = function () {
    return SH(42, 93, 3) + Rc(10, 22, 80, 8, 3, WD2, "l") + Rc(10, 34, 80, 8, 3, WD2, "l") + Rc(12, 20, 6, 38, 2, "#6a4a2a", "l") + Rc(82, 20, 6, 38, 2, "#6a4a2a", "l") + Rc(6, 54, 88, 10, 4, "#c68a4c", "l") + Rc(14, 62, 7, 30, 2, "#555a66", "l") + Rc(79, 62, 7, 30, 2, "#555a66", "l") + L("M12 58H88", "#fff", 1.6, ' opacity=".4"');
  };
  I.wheat = function () {
    var st = function (x, rot) { var s = '<g transform="rotate(' + rot + " " + x + ' 94)">' + L("M" + x + " 94V30", "#c9a23a", 2.6), i; for (i = 0; i < 6; i++) s += E(x - 5, 28 - i * 0 + i * 7 - 6, 3.2, 6.4, "#e8b83a", "l", ' transform="rotate(-24 ' + (x - 5) + " " + (28 + i * 7 - 6) + ')"') + E(x + 5, 28 + i * 7 - 6, 3.2, 6.4, "#e8b83a", "l", ' transform="rotate(24 ' + (x + 5) + " " + (28 + i * 7 - 6) + ')"'); return s + E(x, 18, 3, 7, "#e8b83a", "l") + "</g>"; };
    return SH(28) + st(50, 0) + st(32, -12) + st(68, 12) + L("M30 80Q50 70 70 80", "#8a5a2b", 3) + P("M34 78Q50 68 66 78L62 90Q50 94 38 90Z", "#e5473d", "l", ' stroke-width="1.4" opacity="0"');
  };
  I.sugarcane = function () {
    var cane = function (x, rot, c) { var s = '<g transform="rotate(' + rot + " " + x + ' 94)">' + Rc(x - 5, 22, 10, 72, 4, c, "l"), i; for (i = 0; i < 4; i++) s += L("M" + (x - 5) + " " + (36 + i * 15) + "H" + (x + 5), shade(c, 0.6), 2); return s + "</g>"; };
    return SH(28) + cane(36, -6, "#8e44c8") + cane(62, 8, "#7a3aa8") + cane(50, 0, "#a65fd6") + P("M50 24Q30 14 20 22Q34 24 50 28Z", GREEN, "l", ' stroke-width="1.4"') + P("M50 24Q70 12 82 20Q66 24 50 28Z", GREEN, "l", ' stroke-width="1.4"') + P("M50 24Q48 8 42 2Q56 10 54 26Z", "#6fcf5a", "l", ' stroke-width="1.4"');
  };
  I.cracker = function () {
    var cr = function (x, rot) { return '<g transform="rotate(' + rot + " " + x + ' 80)">' + Rc(x - 7, 36, 14, 52, 3, RED, "l") + Rc(x - 7, 44, 14, 5, 0, YELLOW, "l", ' stroke-width="1"') + Rc(x - 7, 74, 14, 5, 0, YELLOW, "l", ' stroke-width="1"') + L("M" + x + " 36Q" + (x + 4) + " 28 " + (x + 1) + " 22", "#3d3d4a", 1.8) + "</g>"; };
    return SH(32) + cr(28, -10) + cr(72, 10) + cr(50, 0) + F(starD(52, 14, 11, 4, 8), YELLOW) + F(starD(52, 14, 5, 2, 8), "#fff") + F(starD(20, 24, 5, 2, 4), ORANGE) + F(starD(84, 28, 5, 2, 4), ORANGE);
  };
  I.lock = function () {
    return SH(30) + T("M30 44V30C30 12 70 12 70 30V44", "#9aa6b4", 8) + Rc(16, 42, 68, 48, 9, "#f2b620", "l") + Ci(50, 62, 7, "#6a4a14", "r", ' stroke-width="1.4"') + Rc(47, 64, 6, 14, 3, "#6a4a14", "l", ' stroke="none"') + L("M22 50L22 82", "#fff", 3.4, ' opacity=".5"') + SHN(30, 52, 6, 2, -10, 0.5);
  };
  I.marigold = function () {
    var s = SH(24) + P("M50 70C48 80 52 88 50 94", GREEN, "l", ' stroke="#3e9a45" stroke-width="3"') + P("M50 84Q64 74 80 80Q70 92 50 84Z", GREEN, "l") + P("M50 86Q36 76 20 82Q30 94 50 86Z", GREEN, "l"), i;
    for (i = 0; i < 12; i++) s += E(50, 24, 8, 15, i % 2 ? "#f59a23" : "#ffb733", "r", ' transform="rotate(' + i * 30 + ' 50 44)"');
    for (i = 0; i < 8; i++) s += E(50, 32, 6, 10, i % 2 ? "#f08a1a" : "#ffc233", "r", ' transform="rotate(' + (i * 45 + 20) + ' 50 44)"');
    return s + Ci(50, 44, 7, "#d9740e", "r") + SHN(40, 34, 3, 5, 20, 0.5);
  };
  I.pond = function () {
    return E(50, 66, 46, 26, "#9bc78a", "l") + E(50, 66, 42, 22, "#4aa3e8", "r") + Fe(36, 62, 14, 3, "#fff", ' opacity=".35"') + E(62, 70, 9, 4.6, "#43a047", "l") + P("M62 70L70 66L72 72Z", "#4aa3e8", "l", ' stroke="none"') + F(starD(62, 66, 5, 2.4, 6), PINK) + E(34, 72, 7, 3.6, "#43a047", "l") +
      L("M10 62V36M16 60V30M88 62V34M82 60V28", "#6a9a3a", 3) + E(10, 34, 3, 7, "#8a5a2b", "l") + E(88, 32, 3, 7, "#8a5a2b", "l");
  };
  I.village = function () {
    return Fe(50, 90, 48, 6, "#8fc16a", ' opacity=".6"') + item("tree", { x: 82, y: 56, s: 44 }) + hutD(24, 84, 1.0, "#c9a23a") + hutD(58, 90, 0.9, "#b8872a") + hutD(80, 84, 0.5, "#c9a23a");
  };
  I.city = function () {
    var b = function (x, w, h, c) { var s = Rc(x, 92 - h, w, h, 2, c, "l"), r, k; for (r = 0; r < Math.floor((h - 8) / 12); r++) for (k = 0; k < Math.floor((w - 4) / 8); k++) s += Rc(x + 3 + k * 8, 98 - h + r * 12, 4.6, 6, 1, r % 2 && k % 2 ? "#ffe27a" : "#cfe9f8", "l", ' stroke-width=".6"'); return s; };
    return SH(46, 93, 3) + b(4, 22, 52, "#7d8fb0") + b(28, 26, 82, "#4a6a9a") + b(56, 18, 40, "#9a7aa8") + b(76, 20, 62, "#5a8aa8") + L("M41 10V2", "#8a8a96", 2) + Fc(41, 2, 2, RED);
  };
  I.market = function () {
    var s = SH(46, 93, 3), i;
    s += Rc(6, 62, 88, 8, 2, WD2, "l") + Rc(10, 68, 6, 24, 1, "#8a5a2b", "l") + Rc(84, 68, 6, 24, 1, "#8a5a2b", "l") + L("M12 26V62M88 26V62", "#8a5a2b", 3);
    for (i = 0; i < 6; i++) s += P("M" + (6 + i * 14.7) + " 22L" + (6 + (i + 1) * 14.7) + " 22L" + (6 + (i + 1) * 14.7) + " 38Q" + (6 + (i + 0.5) * 14.7) + " 46 " + (6 + i * 14.7) + " 38Z", i % 2 ? "#fff" : RED, "l", ' stroke-width="1.4"');
    return s + Ci(26, 56, 7, RED, "r", ' stroke-width="1.4"') + Ci(40, 56, 7, ORANGE, "r", ' stroke-width="1.4"') + Ci(54, 56, 7, "#ffd93b", "r", ' stroke-width="1.4"') + Ci(68, 56, 7, GREEN, "r", ' stroke-width="1.4"') + Ci(33, 48, 7, ORANGE, "r", ' stroke-width="1.4"') + Ci(47, 48, 7, RED, "r", ' stroke-width="1.4"') + Ci(61, 48, 7, "#ffd93b", "r", ' stroke-width="1.4"');
  };
  I.money = function () {
    return SH(40, 93, 3) + note({ value: 50, x: 42, y: 34, s: 78 }).replace("<g ", '<g ') + note({ value: 100, x: 58, y: 52, s: 78 }) + coin({ value: 10, x: 28, y: 78, s: 32 }) + coin({ value: 5, x: 66, y: 82, s: 28 }) + coin({ value: 2, x: 84, y: 76, s: 22 });
  };
  I.wool = function () {
    var s = SH(30, 92, 4) + Ci(46, 56, 32, "#ee6fa4", "r"), i;
    for (i = 0; i < 6; i++) s += L("M" + (18 + i * 2) + " " + (46 + i * 6) + "Q46 " + (30 + i * 8) + " " + (76 - i * 2) + " " + (48 + i * 4), "#c8407f", 1.8, ' opacity=".7"');
    return s + L("M30 34Q60 62 40 84", "#c8407f", 1.8, ' opacity=".7"') + T("M74 70Q92 76 82 90T58 92", "#ee6fa4", 3.4) + L("M70 18L92 46M82 12L98 36", "#c9a66b", 3) + Ci(70, 18, 2.4, "#c9a66b", "r") + Ci(82, 12, 2.4, "#c9a66b", "r") + SHN(34, 40, 6, 10, 30, 0.5);
  };
  I.pea = function () {
    var s = SH(36), i;
    s += P("M8 50C20 30 70 24 92 40C84 66 40 80 8 50Z", "#5fae4a", "l") + P("M14 50C28 36 68 32 86 42C76 58 40 68 14 50Z", "#8cd070", "l", ' stroke="none"');
    for (i = 0; i < 5; i++) s += Ci(26 + i * 14, 50 - Math.sin(i * 0.7 + 0.2) * 6 + 3, 8.4, "#7fcf4a", "r", ' stroke-width="1.8"') + Fc(24 + i * 14, 46 - Math.sin(i * 0.7 + 0.2) * 6 + 3, 2, "#fff", ' opacity=".6"');
    return s + T("M92 40Q98 34 98 26", "#3e9a45", 3);
  };
  I.lemon = function () {
    var i, h = "";
    for (i = 0; i < 8; i++) h += L("M70 70L" + f1(70 + 14 * Math.cos(i * 0.785)) + " " + f1(70 + 14 * Math.sin(i * 0.785)), "#f1e07a", 1.4);
    return SH(34) + P("M6 46C6 30 22 22 36 26C50 20 66 28 66 44C66 58 52 68 36 66C20 70 6 60 6 46Z", "#ffe03a", "r") + P("M46 12Q56 4 62 12Q52 18 46 12Z", GREEN, "l", ' stroke-width="1.4"') + SHN(20, 38, 5, 8, 35, 0.5) +
      Ci(70, 70, 22, "#ffe03a", "r") + Ci(70, 70, 18, "#fff3a0", "r", ' stroke="none"') + h + Ci(70, 70, 3, "#f1e07a", "r", ' stroke="none"');
  };
  I.karela = function () {
    var s = SH(34) + P("M6 66C14 40 40 30 70 36C88 40 96 54 92 62C84 56 60 56 40 66C26 74 12 76 6 66Z", "#4f9a3a", "l"), i;
    for (i = 0; i < 9; i++) s += E(18 + i * 8.6, 56 - Math.sin(i * 0.35 + 0.3) * 14 + (i > 6 ? 2 : 0), 3.2, 5.4, "#3a7a2a", "l", ' stroke-width="1" transform="rotate(' + (-30 + i * 4) + " " + (18 + i * 8.6) + " " + (56 - Math.sin(i * 0.35 + 0.3) * 14) + ')"');
    return s + L("M10 62C20 44 46 36 70 40", "#9edc74", 2.6, ' opacity=".6"');
  };
  I.chilli = function () {
    var ch = function (rot, c) { return '<g transform="rotate(' + rot + ' 50 20)">' + P("M44 20C34 40 36 70 52 92C52 70 60 50 58 30C57 22 50 16 44 20Z", c, "l") + P("M42 22Q50 10 60 22Q50 24 42 22Z", "#3e9a45", "l", ' stroke-width="1.4"') + L("M50 14Q52 6 58 4", "#3e9a45", 3.4) + L("M45 30C42 46 45 62 50 78", "#fff", 2.4, ' opacity=".5"') + "</g>"; };
    return SH(30) + ch(-14, "#c8283c") + ch(16, "#e5473d");
  };
  I.leg = function () {
    return SH(28) + P("M34 6C30 34 34 50 34 64C34 72 32 78 32 82L62 82C62 74 60 70 60 64C62 48 64 30 64 6Z", SKIN, "r") + Rc(28, 2, 40, 14, 4, BLUE, "l") + Ci(48, 52, 8, SKIN, "r", ' stroke-width="1.6" opacity=".6"') + L("M40 52Q48 58 56 52", SKIND, 1.6, ' opacity=".6"') + P("M30 80C28 90 30 94 36 94L78 94C86 94 88 86 80 84L64 80Z", RED, "l") + Rc(28, 76, 38, 6, 2, "#fff", "l", ' stroke-width="1.4"') + SHN(40, 30, 3, 12, 4, 0.45);
  };


  /* ---- people ---- */
  var GLASS2 = '<circle cx="42" cy="34" r="7.4" fill="none" stroke="#3d3d4a" stroke-width="1.8"/><circle cx="58" cy="34" r="7.4" fill="none" stroke="#3d3d4a" stroke-width="1.8"/><path d="M49.4 34h1.2" stroke="#3d3d4a" stroke-width="1.8"/>';
  var MOUST = P("M40 41Q50 36 60 41Q50 45 40 41Z", HAIR, "r", ' stroke-width="1"');
  function sari(c, sk) { return { sk: sk, dress: c, top: c, skirt: L("M33 50L70 86", "#ffd45a", 3, ' opacity=".9"'), back: T("M32 30Q16 46 22 66", HAIR, 7) + T("M68 30Q84 46 78 66", HAIR, 7), front: FR2(HAIR) + Fc(50, 24, 1.8, RED) }; }
  I.man = function () { return person({ sk: "#c98a5a", top: "#4aa3e8", bot: "#3d3d4a", long: true, front: FR2(HAIR) }); };
  I.woman = function () { return person(sari("#8e44c8", "#d9a273")); };
  I.child = function () { return SH(20, 93, 3) + ph(50, 94, 0.78, kidT(KS, "#43b05c", true)); };
  I.uncle = function () { return person({ sk: "#c98a5a", top: ORANGE, bot: "#fff6e0", long: true, front: FR2(HAIR) + MOUST + GLASS2 }); };
  I.grandfather = function () { return person({ sk: "#d9a273", top: "#f2f2ea", bot: "#6a6a76", long: true, front: P("M30 30C28 12 72 12 70 30C62 22 38 22 30 30Z", "#e8e8ee", "r") + P("M40 41Q50 37 60 41Q50 45 40 41Z", "#e8e8ee", "r", ' stroke-width="1"') + GLASS2, acc: T("M88 56V92", BROWN, 3.4) + T("M82 56Q88 52 90 58", BROWN, 3.4) }); };
  I.grandmother = function () { var o = sari("#e5473d", "#d9a273"); o.back = Ci(50, 12, 10, "#e8e8ee", "r") + T("M32 30Q22 40 26 56", "#e8e8ee", 6) + T("M68 30Q78 40 74 56", "#e8e8ee", 6); o.front = P("M30 30C28 10 72 10 70 30C62 20 38 20 30 30Z", "#e8e8ee", "r") + GLASS2; o.acc = T("M88 56V92", BROWN, 3.4) + T("M82 56Q88 52 90 58", BROWN, 3.4); return person(o); };
  I.king = function () { return person({ sk: "#c98a5a", top: "#8e44c8", bot: "#8e44c8", long: true, back: P("M24 52C16 70 18 88 30 90L70 90C82 88 84 70 76 52Z", RED, "l"), mid: Rc(31, 47, 38, 6, 0, "#ffd45a", "l", ' stroke="none"'), front: P("M30 30C28 14 72 14 70 30C62 24 38 24 30 30Z", HAIR, "r") + MOUST + P("M38 44Q50 62 62 44Q50 50 38 44Z", HAIR, "r", ' stroke-width="1"') + crownD(50, 2, 28) }); };
  I.queen = function () { var o = sari("#ee6fa4", "#d9a273"); o.front = FR2(HAIR) + crownD(50, 2, 26); o.mid = T("M40 50Q50 62 60 50", "#ffcf3a", 2.2); return person(o); };
  I.scientist = function () { return person({ sk: "#d9a273", top: "#ffffff", bot: "#3d3d4a", long: true, front: P("M30 30C26 6 74 6 70 30C62 18 38 18 30 30Z", HAIR, "r") + GLASS2, mid: Rc(46, 50, 8, 32, 0, "#cfe0ff", "l", ' stroke="none"'),
    rarm: armTo(69, 54, 82, 56, 84, 48, "#ffffff", "#d9a273"), acc: P("M80 50L88 50L92 62C94 66 90 68 84 68C78 68 74 66 76 62Z", "#d4e8f2", "l", ' stroke-width="1.4"') + P("M78 62L90 62L92 64C91 67 88 68 84 68C80 68 77 67 76 64Z", "#43b05c", "l", ' stroke="none"') + Ci(84, 56, 1.6, "#fff", "l", ' stroke="none"') }); };
  function grp(list, k, sp) { var n = list.length, s = Fe(50, 94, 44, 3.5, "#000", ' opacity=".1"'), i; for (i = 0; i < n; i++) s += ph(50 + (i - (n - 1) / 2) * sp, 94, k, list[i]); return s; }
  I.women = function () { return grp([person({ noSH: true, sk: "#d9a273", dress: "#8e44c8", top: "#8e44c8", back: T("M32 30Q16 46 22 66", HAIR, 7) + T("M68 30Q84 46 78 66", HAIR, 7), front: FR2(HAIR) + Fc(50, 24, 1.8, RED) }), person({ noSH: true, sk: "#c98a5a", dress: "#2fb3a3", top: "#2fb3a3", back: Ci(50, 11, 9, HAIR, "r"), front: FR2(HAIR) })], 0.72, 40); };
  I.men = function () { return grp([person({ noSH: true, sk: "#c98a5a", top: "#4aa3e8", bot: "#3d3d4a", long: true, front: FR2(HAIR) }), person({ noSH: true, sk: "#d9a273", top: "#43b05c", bot: "#6a5a4a", long: true, front: FR2(HAIR) })], 0.72, 40); };
  I.children = function () { return grp([kidT(KS, RED, true), person({ noSH: true, sk: SKIN, dress: PINK, top: PINK, back: T("M32 30Q18 44 24 60", HAIR, 6) + T("M68 30Q82 44 76 60", HAIR, 6), front: FR2(HAIR) }), kidT("#c98a5a", YELLOW, false)], 0.52, 30); };
  I.kick = function () {
    return dashes(["M4 62H14", "M2 74H12"]) + kid({ legs: legPair(0, -58, 0), larm: armTo(31, 54, 20, 48, 14, 40), rarm: armTo(69, 54, 78, 62, 84, 66), mouth: Fe(50, 43, 3.4, 2.8, "#7a2a2a") }) + bl(88, 84, 7);
  };
  I.clap = function () {
    return kid({ larm: armTo(31, 54, 36, 64, 46, 58), rarm: armTo(69, 54, 64, 64, 54, 58), mouth: P("M42 40Q50 40 58 40Q56 50 50 50Q44 50 42 40Z", "#7a2a2a", "l", ' stroke-width="1.2"'), acc: dashes(["M50 40V32", "M36 44L30 38", "M64 44L70 38"], "#f2a51c") });
  };
  I.play = function () {
    return kid({ larm: armTo(31, 54, 20, 64, 18, 72), rarm: armTo(69, 54, 80, 62, 84, 74), mouth: P("M40 40Q50 40 60 40Q58 52 50 52Q42 52 40 40Z", "#7a2a2a", "l", ' stroke-width="1.2"') }) + bl(86, 84, 8) + L("M78 52Q84 44 90 52", "#9aa6b8", 2, ' stroke-linecap="round"');
  };
  /* ---- describing words and ideas (shown as answers only) ---- */
  function trunk(x, w, on) { return dimmed(on, Rc(x - w / 2, 34, w, 58, w / 2.4, "#a0683a", "l") + L("M" + (x - w * 0.15) + " 44V84", "#c68a4c", Math.max(1.2, w * 0.14), ' opacity=".6"') + Ci(x, 28, w / 2 + 8, "#43b05c", "r")); }
  I.thin = function () { return Fe(50, 94, 44, 3, "#000", ' opacity=".1"') + trunk(24, 9, true) + trunk(68, 30, false); };
  I.fat = function () { return Fe(50, 94, 44, 3, "#000", ' opacity=".1"') + trunk(24, 9, false) + trunk(68, 30, true); };
  I.angry = function () {
    return SH(30) + Ci(50, 52, 38, "#f2662a", "r") + eyes(50, 50, 12, 4) + L("M30 38L46 46M70 38L54 46", EYE, 3.4, ' stroke-linecap="round"') + L("M34 74Q50 60 66 74", "#7a2a2a", 3.6, ' stroke-linecap="round"') + dashes(["M84 22L92 16", "M88 32L98 30"], "#e5473d") + SHN(34, 32, 6, 3, -30, 0.45);
  };
  I.loud = function () { return item("drum", { x: 36, y: 58, s: 64 }) + L("M68 34Q82 54 68 74", "#e5473d", 4, ' stroke-linecap="round"') + L("M78 24Q98 54 78 84", "#e5473d", 4, ' stroke-linecap="round"') + L("M58 22L64 12M70 16L72 6", YELLOW, 3, ' stroke-linecap="round"'); };
  I.rough = function () {
    var s = SH(38, 92, 3) + P("M8 26L84 14L92 80L14 90Z", "#d9b06a", "l") + P("M84 14L92 80L78 70Z", "#b8884a", "l", ' stroke-width="1.4"'), i;
    for (i = 0; i < 46; i++) s += Fc(f1(16 + (i * 37) % 70), f1(24 + (i * 53) % 60), 1.1 + (i % 3) * 0.4, i % 2 ? "#8a5a2b" : "#f4e0b0", ' opacity=".8"');
    return s;
  };
  I.new = function () { return item("shoe", { x: 46, y: 56, s: 84 }) + F(starD(82, 18, 9, 3, 4), YELLOW) + F(starD(14, 30, 6, 2, 4), YELLOW) + F(starD(88, 46, 5, 1.8, 4), "#fff") + Rc(8, 74, 22, 12, 2, "#43b05c", "l", ' stroke-width="1.4"') + '<text x="19" y="83" text-anchor="middle" font-size="7" fill="#fff" stroke="none"' + FONT + ">NEW</text>"; };
  I.old = function () { return '<g opacity=".72">' + item("shoe", { x: 46, y: 56, s: 84 }) + "</g>" + Rc(36, 36, 16, 12, 3, "#8a6a3a", "l", ' stroke-width="1.4"') + L("M38 38L50 46M50 38L38 46", "#5a4220", 1.2) + Fe(70, 64, 7, 2, "#3d3d4a", ' opacity=".5"') + L("M60 58L70 66", "#3d3d4a", 2, ' opacity=".6"') + Fc(16, 88, 2, "#bca77a", ' opacity=".7"') + Fc(24, 91, 1.6, "#bca77a", ' opacity=".7"') + Fc(88, 90, 2, "#bca77a", ' opacity=".7"'); };
  I.high = function () { return Fe(50, 94, 46, 3.5, "#000", ' opacity=".1"') + item("kite", { x: 64, y: 24, s: 46 }) + L("M60 40Q40 62 30 82", "#8a8a96", 1.4) + item("tree", { x: 16, y: 74, s: 40 }) + Fc(80, 88, 1.6, "#fff", ' opacity="0"'); };
  I.bridge = function () {
    return P("M0 74Q12 68 25 74T50 74T75 74T100 74V100H0Z", SKY, "l") + L("M10 86Q22 82 34 86T58 86", "#fff", 2.2, ' opacity=".5"') + P("M4 50L96 50L96 62L4 62Z", "#b9bcc8", "l") + P("M4 62Q50 30 96 62L96 74L4 74Z", "#9a9ca8", "l", ' opacity="0"') + P("M14 62C20 36 80 36 86 62Z", "#bfe0f6", "l", ' opacity="0"') +
      P("M4 62L4 80L22 80C22 64 34 56 50 56C66 56 78 64 78 80L96 80L96 62Z", "#c68a4c", "l") + L("M4 44H96", "#8a5a2b", 3) + L("M12 44V50M28 44V50M44 44V50M60 44V50M76 44V50M92 44V50", "#8a5a2b", 2.4);
  };
  I.tap = function () {
    return SH(26, 94, 3) + Rc(6, 26, 14, 14, 3, "#9aa6b4", "l") + P("M16 26L66 26C78 26 82 32 82 42L82 52L66 52L66 42L16 42Z", "#b9c4d2", "l") + Rc(36, 14, 6, 12, 2, RED, "l") + Rc(28, 10, 22, 6, 3, RED, "l") + Rc(62, 52, 24, 8, 3, "#9aa6b4", "l") +
      P("M74 68C68 78 68 86 74 88C80 86 80 78 74 68Z", "#4aa3e8", "r") + SHN(30, 34, 8, 1.6, 0, 0.5);
  };
  I.snow = function () {
    return SH(30) + Ci(50, 70, 24, "#ffffff", "r") + Ci(50, 38, 17, "#ffffff", "r") + Rc(34, 18, 32, 5, 2, "#3d3d4a", "l", ' stroke-width="1.4"') + Rc(39, 5, 22, 15, 3, "#3d3d4a", "l") + Fc(44, 34, 2, EYE) + Fc(56, 34, 2, EYE) + P("M50 38L66 42L50 45Z", ORANGE, "l", ' stroke-width="1.2"') +
      Fc(50, 62, 2, EYE) + Fc(50, 72, 2, EYE) + Fc(50, 82, 2, EYE) + L("M36 50Q50 58 64 50", RED, 4) + F(starD(14, 22, 5, 1.8, 6), "#7cc8f0") + F(starD(86, 30, 6, 2, 6), "#7cc8f0") + F(starD(84, 64, 4, 1.4, 6), "#7cc8f0");
  };
  I.lightning = function () {
    return SH(36, 94, 3) + Fe(30, 30, 20, 13, "#5a6478", ' opacity="0"') + Ci(30, 32, 18, "#6a7488", "r") + Ci(52, 24, 22, "#6a7488", "r") + Ci(74, 34, 18, "#6a7488", "r") + Rc(18, 32, 66, 20, 10, "#6a7488", "r", ' stroke="none"') + P("M56 44L38 68L50 68L42 94L68 60L54 60L64 44Z", "#ffe23a", "l", ' stroke-width="2.4"');
  };
  /* ---- plants: the part meant is shown in full colour with a glow ---- */
  function plant(part) {
    var soil = Rc(2, 50, 96, 44, 6, "#8a5a2b", "l") + Fc(14, 78, 2, "#6a4220") + Fc(86, 70, 2, "#6a4220") + Fc(70, 86, 2, "#6a4220"), glow = function (inner) { return Fe(50, part === "root" ? 74 : 32, part === "root" ? 36 : 14, part === "root" ? 22 : 32, "#fff3a0", ' opacity=".8"'); };
    var roots = T("M50 52V70", "#e8d2a0", 3.4) + T("M50 62Q36 66 28 80", "#e8d2a0", 3) + T("M50 62Q64 66 72 80", "#e8d2a0", 3) + T("M50 70Q46 80 44 90", "#e8d2a0", 3) + T("M50 70Q56 80 58 88", "#e8d2a0", 2.6) + T("M34 70Q24 72 14 70", "#e8d2a0", 2.2),
      above = T("M50 50V14", "#43b05c", 5) + P("M50 36Q70 24 86 32Q74 48 50 38Z", GREEN, "l") + P("M50 30Q30 18 14 26Q26 42 50 32Z", GREEN, "l") + Ci(50, 12, 5, PINK, "r");
    return glow() + SH(40, 96, 2) + soil + dimmed(part === "root", roots) + dimmed(part === "stem", above);
  }
  I.root = function () { return plant("root"); };
  I.stem = function () { return plant("stem"); };
  /* ---- position words: the same ball and the same wooden cabinet in every picture, only the position changes ---- */
  function cab() { return Rc(31, 64, 6, 26, 2, "#8a5a2b", "l") + Rc(63, 64, 6, 26, 2, "#8a5a2b", "l") + Rc(24, 40, 52, 26, 4, WD2, "l") + Rc(29, 45, 42, 16, 2, "#5a3a22", "l", ' stroke-width="1.4"') + Rc(24, 40, 52, 4, 2, "#e8be78", "l", ' stroke="none"'); }
  function grnd() { return Fe(50, 91, 46, 4, "#8fc16a", ' opacity=".55"'); }
  function at(dx, dy, k, inner) { return '<g transform="translate(' + dx + " " + dy + ") scale(" + k + ')">' + inner + "</g>"; }
  var BR = 8;
  I["pos-in"] = function () { return grnd() + cab() + bl(50, 53, BR); };
  I["pos-on"] = function () { return grnd() + cab() + bl(50, 32, BR); };
  I["pos-under"] = function () { return grnd() + cab() + Fe(50, 90, 9, 2, "#000", ' opacity=".18"') + bl(50, 80, BR); };
  I["pos-above"] = function () { return grnd() + cab() + bl(50, 12, BR) + L("M50 22V34", "#9aa6b8", 2, ' stroke-dasharray="3 3"'); };
  I["pos-over"] = function () { return grnd() + cab() + L("M14 36Q50 -8 86 36", "#9aa6b8", 2, ' stroke-dasharray="3 3"') + bl(50, 12, BR) + F("M84 30L92 38L80 40Z", "#9aa6b8"); };
  I["pos-near"] = function () { return grnd() + at(-14, 0, 1, cab()) + bl(72, 82, BR); };
  I["pos-far"] = function () { return grnd() + at(-20, 0, 1, cab()) + bl(92, 82, BR); };
  I["pos-out"] = function () { return grnd() + at(-14, 0, 1, cab()) + bl(72, 82, BR) + L("M42 56Q56 40 62 70", "#43b05c", 3, ' stroke-linecap="round"') + F("M56 68L64 74L68 64Z", "#43b05c"); };
  I["pos-behind"] = function () { return grnd() + bl(72, 44, BR + 1) + cab(); };
  I["pos-front"] = function () { return grnd() + at(10, 16, 0.8, cab()) + bl(50, 80, BR + 5); };
  I["pos-between"] = function () { return grnd() + at(0, 43, 0.52, cab()) + at(48, 43, 0.52, cab()) + bl(50, 82, BR); };
  I["pos-up"] = function () { return grnd() + bl(50, 24, BR + 2) + P("M50 44L64 62L55 62L55 86L45 86L45 62L36 62Z", "#43b05c", "l"); };
  I["pos-down"] = function () { return grnd() + bl(50, 78, BR + 2) + P("M50 58L64 40L55 40L55 16L45 16L45 40L36 40Z", "#e5473d", "l"); };
  // @@BATCH3-END

  var NAMES = Object.keys(ITEMS);

  /* ---------- wrapper: place a 100-wide design box at (x,y), size s ---------- */
  var SA = ' stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"';
  function W(x, y, s, inner, bh) {
    return '<g transform="translate(' + f1(x || 0) + " " + f1(y || 0) + ") scale(" + Math.round(s / 100 * 10000) / 10000 + ") translate(-50 -" + (bh || 100) / 2 + ')"' + SA + ">" + inner + "</g>";
  }
  function item(name, o) {
    o = o || {};
    var fn = ITEMS[name], s = o.s == null ? 40 : o.s, k = Math.round(s / 100 * 10000) / 10000;
    if (!fn) return "";
    return '<g transform="translate(' + f1(o.x || 0) + " " + f1(o.y || 0) + ")" + (o.rot ? " rotate(" + o.rot + ")" : "") + " scale(" + (o.flip ? -k : k) + " " + k +
      ') translate(-50 -50)"' + SA + ">" + fn(o.variant) + "</g>";
  }

  /* ---------- subject pictures (tiles on Today, Learn and Play) ---------- */
  function blk(x, y, w, ch, c, rot, fs) {
    var cx = x + w / 2, cy = y + w / 2;
    return '<g transform="rotate(' + (rot || 0) + " " + cx + " " + cy + ')">' + Rc(x, y + 5, w, w, 9, shade(c, 0.78), "l") + Rc(x, y, w, w, 9, c, "l") +
      '<text x="' + cx + '" y="' + f1(cy + (fs || 30) * 0.36) + '" text-anchor="middle" font-size="' + (fs || 30) + '" font-weight="800" fill="#fff" stroke="' + shade(c, 0.6) + '" stroke-width="1.2" paint-order="stroke" font-family="system-ui,\'Noto Sans Devanagari\',\'Noto Sans Gurmukhi\',sans-serif">' + ch + "</text>" +
      SHN(x + w * 0.28, y + 9, 7, 2.6, -8, 0.5) + "</g>";
  }
  var SUBJ = {
    maths: function () {
      var s = SH(40) + Rc(8, 80, 84, 10, 5, BROWN) + Rc(8, 12, 84, 10, 5, BROWN) + Rc(12, 18, 8, 68, 3, "#b07a3c") + Rc(80, 18, 8, 68, 3, "#b07a3c"), i, j,
        cols = [RED, YELLOW, BLUE, GREEN];
      for (i = 0; i < 4; i++) {
        s += L("M22 " + (30 + i * 16) + "H78", "#8a6a3a", 2.4);
        for (j = 0; j < 4; j++) s += Ci(32 + j * 12 + (i % 2 ? 14 - j * 3 : 0) * (j > 1 ? 1 : 0), 30 + i * 16, 6.2, cols[i], "r", ' stroke-width="1.6"');
      }
      return s;
    },
    science: function () {
      return SH(30) + P("M40 12H60V38L82 80C86 88 82 92 74 92H26C18 92 14 88 18 80L40 38Z", "#bfe4f2", "l") +
        PN("M30 66C42 60 54 72 70 64L82 82C86 90 82 92 74 92H26C18 92 14 90 18 82Z", GREEN, "l") + Rc(36, 8, 28, 9, 4, "#e8f3f8") +
        Ci(44, 76, 3, "#d6f5c8", "r", ' stroke-width="1.2"') + Ci(60, 82, 2.4, "#d6f5c8", "r", ' stroke-width="1.2"') +
        P("M52 56C44 36 58 22 78 22C80 40 68 56 52 56Z", "#43b05c", "r") + L("M54 54Q64 40 74 28", "#2e7d32", 1.8) + SHN(36, 50, 2.6, 10, 18, 0.7);
    },
    evs: function () {
      return SH(40) + item("sun", { x: 74, y: 28, s: 44 }) + item("tree", { x: 40, y: 60, s: 82 }) + Fe(50, 92, 36, 4, "#5aa75f", ' opacity=".9"');
    },
    english: function () {
      return SH(42) + blk(6, 52, 40, "A", RED, -4, 30) + blk(52, 52, 40, "B", BLUE, 3, 30) + blk(28, 10, 40, "C", "#f2a51c", 6, 30);
    },
    hindi: function () { return SH(36) + blk(14, 14, 72, "अ", "#d6409f", -5, 52); },
    punjabi: function () { return SH(36) + blk(14, 14, 72, "ੳ", "#8e4ec6", 5, 52); },
    sst: function () {
      return SH(30) + Rc(30, 84, 40, 8, 4, BROWN) + L("M50 76V86", "#8a5a2b", 5) + Ci(50, 44, 38, "#3b82e0", "r") +
        '<clipPath id="gc@"><circle cx="50" cy="44" r="37"/></clipPath><g clip-path="url(#gc@)">' +
        F("M24 26C34 16 46 20 44 30C42 40 32 42 34 52C30 58 22 50 20 40C18 34 20 30 24 26Z", "#43b05c") +
        F("M56 38C68 30 84 36 82 50C80 62 70 70 64 78C56 70 60 60 54 52C52 46 52 42 56 38Z", "#43b05c") + F("M52 12C62 10 72 14 66 20C60 22 54 20 52 12Z", "#43b05c") + "</g>" +
        L("M12 44Q50 56 88 44", "#fff", 1.6, ' opacity=".55"') + SHN(34, 24, 6, 11, 40, 0.5);
    },
    book: function () { return item("book", { x: 50, y: 50, s: 100 }); }
  };
  var SUBJ_OF = { maths: "maths", mathspb: "maths", science: "science", sciencepb: "science", physics: "science", chemistry: "science", biology: "science",
    evs: "evs", english: "english", englishpb: "english", hindi: "hindi", hindipb: "hindi", punjabi: "punjabi", sst: "sst", sstpb: "sst", geography: "sst", history: "sst", historypb: "sst", phc: "sst" };
  function subject(id, o) {
    o = o || {};
    var k = SUBJ_OF[id] || "book", s = o.s == null ? 64 : o.s, sc = Math.round(s / 100 * 10000) / 10000;
    return '<g transform="translate(' + f1(o.x || 0) + " " + f1(o.y || 0) + ") scale(" + sc + ") translate(-50 -50)\"" + SA + ">" + SUBJ[k]() + "</g>";
  }
  function subjectSvg(id, size, label) { return svg(subject(id, { x: 50, y: 50, s: 100 }), { w: 100, h: 100, label: label }).replace("<svg ", '<svg width="' + size + '" height="' + size + '" '); }

  // The grid that fits n items in w×h with the biggest cells (5 to a row preferred).
  function grid(n, w, h) {
    var best = null, c, r, cell;
    n = Math.max(1, n | 0);
    for (c = 1; c <= n; c++) {
      r = Math.ceil(n / c); cell = Math.min(w / c, h / r);
      if (!best || cell > best.cell + 0.01 || (cell > best.cell - 0.01 && c % 5 === 0 && best.c % 5)) best = { c: c, r: r, cell: cell };
    }
    return best;
  }
  // The item size Pics.row uses for n items in w×h. Groups drawn side by side for counting or comparing must share one
  // size (the smallest), or a child may read "bigger" as "more": pass it as `s` to each Pics.row.
  function rowSize(n, o) {
    o = o || {};
    return grid(n, o.w || 200, o.h || 120).cell * 0.9;
  }
  function row(name, n, o) {
    o = o || {};
    var w = o.w || 200, h = o.h || 120, best, c, r, cell, i, s = "", sz, x0, y0;
    n = Math.max(1, n | 0);
    best = grid(n, w, h);
    c = best.c; r = best.r; cell = best.cell; sz = Math.min(o.s || cell * 0.9, cell * 0.95);
    x0 = (w - c * cell) / 2; y0 = (h - r * cell) / 2;
    for (i = 0; i < n; i++) s += item(name, { x: x0 + cell * (i % c + 0.5), y: y0 + cell * (Math.floor(i / c) + 0.5), s: sz, variant: o.variant });
    return "<g>" + s + "</g>";
  }

  /* ---------- clock ---------- */
  var FONT = ' font-family="system-ui,-apple-system,Segoe UI,Arial,sans-serif" font-weight="800"';
  function clock(o) {
    var s = "", i, a, ha = ((o.h || 0) % 12) * 30 + (o.m || 0) * 0.5, ma = (o.m || 0) * 6, sn = Math.sin, cs = Math.cos, d2r = Math.PI / 180;
    s += SH(40, 97, 3) + Ci(50, 50, 46, SKY, "r") + Ci(50, 50, 38, "#fffdf5", "r", ' stroke="' + shade(SKY, 0.8) + '" stroke-width="1.5"');
    for (i = 0; i < 12; i++) {
      a = i * 30 * d2r;
      s += L("M" + f1(50 + 35.5 * sn(a)) + " " + f1(50 - 35.5 * cs(a)) + "L" + f1(50 + 37.5 * sn(a)) + " " + f1(50 - 37.5 * cs(a)), "#9aa5b8", 1.2);
      s += '<text x="' + f1(50 + 30 * sn(a)) + '" y="' + f1(50 - 30 * cs(a)) + '" dy=".35em" text-anchor="middle"' + FONT + ' font-size="10" fill="#3a3f5c" stroke="none">' + (i || 12) + "</text>";
    }
    s += L("M50 50L" + f1(50 + 16 * sn(ha * d2r)) + " " + f1(50 - 16 * cs(ha * d2r)), "#3a3f5c", 5.5) + L("M50 50L" + f1(50 + 23 * sn(ma * d2r)) + " " + f1(50 - 23 * cs(ma * d2r)), RED, 3.6) + Ci(50, 50, 3.6, YELLOW);
    return W(o.x, o.y, o.s || 100, s);
  }

  /* ---------- fractions ---------- */
  var FR = { roti: ["#b9702a", "#fff4dc"], pizza: ["#e0452f", "#fff2c4"], bar: ["#58b56b", "#e9f1e6"], square: ["#f5a623", "#fdf0d5"], circle: ["#4aa3e8", "#e4eefa"] };
  function wedge(cx, cy, r, a0, a1) {
    function p(a) { var t = (a - 90) * Math.PI / 180; return f1(cx + r * Math.cos(t)) + " " + f1(cy + r * Math.sin(t)); }
    return "M" + cx + " " + cy + "L" + p(a0) + "A" + r + " " + r + " 0 " + (a1 - a0 > 180 ? 1 : 0) + " 1 " + p(a1) + "Z";
  }
  function fraction(o) {
    var shape = FR[o.shape] ? o.shape : "circle", parts = Math.max(1, o.parts | 0), sh = o.shaded | 0, cS = FR[shape][0], cP = FR[shape][1], ln = shade(cP, 0.55),
      lo = ' stroke="' + ln + '" stroke-width="2.4"', s = "", i, cols = parts, rows = 1, pw, ph, ang, rr;
    function col(i) { return i < sh ? cS : cP; }
    if (shape === "roti" || shape === "pizza" || shape === "circle") {
      s += SH(40, 94, 4) + Ci(50, 55, 40, shade(cP, 0.78), "l");
      for (i = 0; i < parts; i++) {
        lo = ' stroke="' + shade(i < sh ? cS : cP, 0.6) + '" stroke-width="2.4"';
        s += parts === 1 ? Ci(50, 50, 40, col(0), "r", lo) : P(wedge(50, 50, 40, 360 / parts * i, 360 / parts * (i + 1)), col(i), "r", lo);
      }
      if (shape === "pizza") s += '<circle cx="50" cy="50" r="38" fill="none" stroke="#c98a3c" stroke-width="5" opacity=".9"/>';
      for (i = 0; i < sh && i < parts && shape !== "circle"; i++) {
        ang = (360 / parts * (i + 0.5) - 90) * Math.PI / 180;
        [[parts === 1 ? 12 : 17, 0], [parts === 1 ? 26 : 29, 0.28]].forEach(function (q) {
          var an = ang + q[1] * (parts === 1 ? 2 : 6 / parts), x = f1(50 + q[0] * Math.cos(an)), y = f1(50 + q[0] * Math.sin(an));
          s += shape === "pizza" ? Ci(x, y, 4.6, "#fff0c9", "r", ' stroke-width="1.5"') : Fc(x, y, 3, "#7a4414", ' opacity=".6"');
        });
      }
      return W(o.x, o.y, o.s || 100, s);
    }
    if (shape === "bar") {
      s += SH(42, 82, 4) + Rc(5, 34, 90, 40, 6, shade(cP, 0.78));
      pw = 90 / parts;
      for (i = 0; i < parts; i++) s += Rc(5 + pw * i, 30, pw, 40, 0, col(i), "l", lo);
      s += '<rect x="5" y="30" width="90" height="40" rx="6" fill="none"' + lo + "/>";
      return W(o.x, o.y, o.s || 100, s);
    }
    if (parts === 4) { cols = 2; rows = 2; } else if (parts === 6) { cols = 3; rows = 2; } else if (parts === 8) { cols = 4; rows = 2; } else if (parts === 9) { cols = 3; rows = 3; } else if (parts === 10) { cols = 5; rows = 2; } else if (parts === 12) { cols = 4; rows = 3; }
    pw = 76 / cols; ph = 76 / rows;
    s += SH(38, 94, 4) + Rc(12, 16, 76, 76, 6, shade(cP, 0.78));
    for (i = 0; i < parts; i++) s += Rc(12 + pw * (i % cols), 12 + ph * Math.floor(i / cols), pw, ph, 0, col(i), "l", lo);
    s += '<rect x="12" y="12" width="76" height="76" rx="6" fill="none"' + lo + "/>";
    return W(o.x, o.y, o.s || 100, s);
  }

  /* ---------- money ---------- */
  function coin(o) {
    var v = o.value || 1, c = v === 5 || v === 10 ? "#f2c14b" : v === 2 ? "#e0a070" : "#c3ccd8", s = SH(40, 95, 3.5);
    s += Ci(50, 54, 43, shade(c, 0.8), "l") + Ci(50, 50, 43, c, "r");
    if (v === 10) s += Ci(50, 50, 30, "#d4dbe6", "r", ' stroke-width="2"');
    else s += '<circle cx="50" cy="50" r="35" fill="none" stroke="' + tint(c, 0.5) + '" stroke-width="2.2"/>';
    s += '<text x="50" y="50" dy=".36em" text-anchor="middle"' + FONT + ' font-size="' + (v >= 10 ? 34 : 44) + '" fill="' + (v === 10 ? "#5a6478" : shade(c, 0.45)) + '" stroke="none">' + v + "</text>";
    s += L("M20 36Q26 24 38 19", "#fff", 3, ' opacity=".6"');
    return W(o.x, o.y, o.s || 100, s);
  }
  var NOTE = { 10: "#c58a4a", 20: "#a6c449", 50: "#4ab8d8", 100: "#a58be0", 200: "#f08a3c", 500: "#9aa6a0" };
  function note(o) {
    var v = o.value || 10, c = NOTE[v] || NOTE[10], s = "", ff = FONT + ' fill="' + shade(c, 0.4) + '" stroke="none"';
    s += Fe(50, 55, 44, 3.5, "#000", ' opacity=".12"') + Rc(4, 5, 92, 46, 5, c, "l") + '<rect x="9" y="10" width="82" height="36" rx="3" fill="none" stroke="' + tint(c, 0.55) + '" stroke-width="1.5"/>' +
      Ci(28, 31, 10, tint(c, 0.4), "r", ' stroke-width="1.6"') + Fc(28, 31, 3.6, shade(c, 0.85), ' opacity=".5"') +
      L("M44 20Q54 14 64 20T84 20M44 36Q54 30 64 36T84 36", tint(c, 0.5), 1.4, ' opacity=".8"') +
      '<text x="68" y="28" dy=".35em" text-anchor="middle" font-size="' + (v >= 100 ? 17 : 20) + '"' + ff + ">" + v + "</text>" +
      '<text x="14" y="15" dy=".35em" text-anchor="start" font-size="7"' + ff + ">" + v + "</text>";
    return W(o.x, o.y, o.s || 100, s, 56);
  }

  /* ---------- place value ---------- */
  function stick(x, y0) { return Rc(x, y0, 9, 76, 4.5, "#4aa3e8", "l", ' stroke-width="1.6"') + Rc(x + 1.8, y0 + 4, 2, 68, 1, "#fff", "l", ' opacity=".45" stroke="none"'); }
  function tens(o) {
    var s = SH(42, 92, 4), i;
    for (i = 0; i < 10; i++) s += stick(5 + i * 9, 10);
    s += Rc(2, 44, 96, 13, 5, RED) + L("M8 48H92", "#fff", 1.8, ' opacity=".5"');
    return W(o.x, o.y, o.s || 100, s);
  }
  function one(o) { return W(o.x, o.y, o.s || 100, SH(10, 92, 3) + stick(45.5, 10)); }

  /* ---------- shapes ---------- */
  function shape(o) {
    var k = o.kind || "circle", s = "";
    switch (k) {
      case "square": s = SH(36) + Rc(14, 14, 72, 72, 10, BLUE, "l"); break;
      case "triangle": s = SH(40) + P("M50 12L90 84L10 84Z", "#43b05c", "l", ' stroke-width="6"'); break;
      case "rectangle": s = SH(42) + Rc(6, 26, 88, 52, 8, ORANGE, "l"); break;
      case "oval": s = SH(42) + E(50, 50, 44, 28, "#9b59c9", "r"); break;
      case "star": s = SH(30) + P(starD(50, 54, 42, 21, 5), YELLOW, "r", ' stroke-width="7"'); break;
      case "cube": s = SH(36) + P("M50 12L84 30L50 48L16 30Z", tint("#2fb3a3", 0.35), "l") + P("M16 30L50 48L50 88L16 70Z", "#2fb3a3", "l") + P("M50 48L84 30L84 70L50 88Z", shade("#2fb3a3", 0.78), "l"); break;
      case "cuboid": s = SH(42) + P("M58 56L12 34L34 23L80 45Z", tint(PINK, 0.35), "l") + P("M12 34L58 56L58 86L12 64Z", PINK, "l") + P("M58 56L80 45L80 75L58 86Z", shade(PINK, 0.78), "l"); break;
      case "cone": s = SH(32) + P("M18 76L50 10L82 76A32 10 0 0 1 18 76Z", ORANGE, "l") + L("M44 24L28 68", "#fff", 4, ' opacity=".4"'); break;
      case "cylinder": s = SH(32) + P("M20 24L20 74A30 10 0 0 0 80 74L80 24Z", SKY, "l") + E(50, 24, 30, 10, tint(SKY, 0.45), "l") + L("M30 40L30 72", "#fff", 4, ' opacity=".4"'); break;
      case "sphere": s = SH(30) + Ci(50, 52, 38, "#e8504a", "r") + SHN(36, 34, 8, 13, 40, 0.6); break;
      default: s = SH(34) + Ci(50, 50, 38, RED, "r");
    }
    return W(o.x, o.y, o.s || 100, s);
  }

  /* ---------- svg wrapper ---------- */
  function grad(k, c, sfx) {
    var col = "#" + c, id = k + c + "-" + sfx;
    return k === "l"
      ? '<linearGradient id="' + id + '" x1="0" y1="0" x2=".7" y2="1"><stop offset="0" stop-color="' + tint(col, 0.38) + '"/><stop offset=".55" stop-color="' + col + '"/><stop offset="1" stop-color="' + shade(col, 0.82) + '"/></linearGradient>'
      : '<radialGradient id="' + id + '" cx=".38" cy=".32" r=".78"><stop offset="0" stop-color="' + tint(col, 0.5) + '"/><stop offset=".45" stop-color="' + col + '"/><stop offset="1" stop-color="' + shade(col, 0.76) + '"/></radialGradient>';
  }
  function svg(content, o) {
    o = o || {};
    var w = o.w || 200, h = o.h || 120, sfx = TAG + (++N).toString(36), seen = {}, defs = "",
      label = (o.label || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
    if (typeof content === "function") content = content(sfx);
    content = String(content == null ? "" : content);
    content.replace(/#([lr])([0-9a-f]{6})@/g, function (m, k, c) { if (!seen[k + c]) { seen[k + c] = 1; defs += grad(k, c, sfx); } return m; });
    content = content.replace(/@/g, "-" + sfx);
    return '<svg class="pic" viewBox="0 0 ' + w + " " + h + '" ' + (label ? 'role="img" aria-label="' + label + '"' : 'aria-hidden="true"') +
      ' xmlns="http://www.w3.org/2000/svg"><defs>' + defs + "</defs>" + content + "</svg>";
  }

  root.Pics = { svg: svg, item: item, names: NAMES, row: row, rowSize: rowSize, clock: clock, fraction: fraction, coin: coin, note: note, tens: tens, one: one, bundles: bundles, shape: shape, FR: FR, wedge: wedge, shade: shade, tint: tint, subject: subject, subjectSvg: subjectSvg, SUBJ_OF: SUBJ_OF };
})(typeof window !== "undefined" ? window : this);
