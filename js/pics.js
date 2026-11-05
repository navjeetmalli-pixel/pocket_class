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

  root.Pics = { svg: svg, item: item, names: NAMES, row: row, rowSize: rowSize, clock: clock, fraction: fraction, coin: coin, note: note, tens: tens, one: one, shape: shape };
})(typeof window !== "undefined" ? window : this);
