// One coherent line-icon family for subjects and app sections.
// 24x24 viewBox, 2px round strokes, currentColor only (themes with light/dark by setting CSS `color`).
// API:
//   SubjectIcons.svg(id, { size = 24, label, className })  -> inline SVG string
//     - with `label`: role="img" aria-label="..." (standalone use)
//     - without: aria-hidden="true" focusable="false" (decorative, beside text)
//   SubjectIcons.has(id) -> true for real subjects, "path-<subject>" ids and generic icons
//   SubjectIcons.ids()   -> all known ids
// Unknown ids fall back to the generic "learn" icon.
globalThis.SubjectIcons = (function () {
  const T = (x, y, size, s, extra) =>
    `<text x="${x}" y="${y}" font-size="${size}" font-weight="700" text-anchor="middle" fill="currentColor" stroke="none" font-family="system-ui,'Noto Sans Devanagari','Noto Sans Gurmukhi',sans-serif"${extra || ""}>${s}</text>`;
  const dot = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" stroke="none"/>`;
  const book = (glyph) =>
    `<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3"/>` + glyph;
  const flask = `<path d="M9 3h6"/><path d="M10 3v6l-5.2 9.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9V3"/><path d="M7.5 15h9"/>`;
  const temple = `<path d="M3 9l9-6 9 6z"/><path d="M6 12v6M10 12v6M14 12v6M18 12v6"/><path d="M3 21h18"/>`;
  const globe = `<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>`;

  const ICONS = {
    maths: `<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7.5 12h9"/>` + dot(12, 8, 1.4) + dot(12, 16, 1.4),
    science: flask,
    physics: `<ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>` + dot(12, 12, 1.6),
    chemistry: `<path d="M8 3h8"/><path d="M9 3v6l-4.2 9.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L15 9V3"/>` + `<circle cx="10.5" cy="16.5" r="1"/><circle cx="14" cy="14" r=".9"/><circle cx="14.5" cy="18" r=".8"/>`,
    biology: `<path d="M20 4C10 4 4.5 8.5 4.5 14.5c0 1.8.5 3.4 1.5 4.5 6.5 0 14-3.5 14-15z"/><path d="M4 21c2-5 6-9 11-11"/>`,
    evs: `<path d="M6.5 15.5a3.4 3.4 0 0 1-1.9-6.2 4.3 4.3 0 0 1 7.6-2.8 3.8 3.8 0 0 1 2.4 9z"/><path d="M10 15.5V21"/><path d="M5.5 21h9"/><circle cx="20" cy="4.5" r="1.2"/>`,
    sst: `<circle cx="12" cy="8.5" r="6.5"/><ellipse cx="12" cy="8.5" rx="2.6" ry="6.5"/><path d="M5.5 8.5h13"/><path d="M3 16.5h6c1.5 0 2.3.5 3 1.5.7-1 1.5-1.5 3-1.5h6V22h-6c-1.5 0-2.3.5-3 1.2-.7-.7-1.5-1.2-3-1.2H3z" transform="translate(0 -1)"/>`,
    english: book(T(12.6, 14.6, 9, "Aa")),
    hindi: book(T(12.4, 15.2, 11, "अ")),
    punjabi: book(T(12.4, 15.4, 11, "ੳ")),
    history: temple,
    phc: `<path d="M5 21V10a7 7 0 0 1 14 0v11"/><path d="M9 21v-5a3 3 0 0 1 6 0v5"/><path d="M3 21h18"/>`,
    geography: globe,
    polsci: `<path d="M6 11a6 6 0 0 1 12 0"/><path d="M12 5V2.5h3"/><path d="M4 11h16"/><path d="M7 14v4M12 14v4M17 14v4"/><path d="M4 21h16"/>`,
    economics: `<path d="M3 3v18h18"/><path d="M8 19v-5M12.5 19v-9M17 19V6"/>` + T(6.4, 10, 7.5, "₹"),
    business: `<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>` + dot(12, 13, 1),
    accountancy: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18"/><path d="M12.5 8h3.5M12.5 12h3.5M12.5 16h2"/>`,
    // generic / app sections
    game: `<path d="M7 7h10a5 5 0 0 1 5 5v1.5a3 3 0 0 1-5.4 1.8L15.5 14h-7l-1.1 1.3A3 3 0 0 1 2 13.5V12a5 5 0 0 1 5-5z"/><path d="M8 9.5v3M6.5 11h3"/>` + dot(15.5, 10.4, 1) + dot(17.8, 12.2, 1),
    lab: `<path d="M9.5 3.5l4.5 2-3 7.5-4.5-2z"/><path d="M11.2 13a5 5 0 0 0 7 1.5"/><path d="M8 21h11"/><path d="M13 21a6 6 0 0 0 6-6"/>`,
    explore: `<circle cx="12" cy="12" r="9"/><path d="M15.8 8.2l-2.1 5.5-5.5 2.1 2.1-5.5z"/>`,
    learn: `<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.7V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.3"/><path d="M22 9v6"/>`,
    today: `<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9 15.5l2 2 4-4"/>`,
    progress: `<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>`
  };
  // Subjects that share an icon with a base subject (Punjabi-medium editions etc.)
  const ALIAS = { mathspb: "maths", sciencepb: "science", sstpb: "sst", englishpb: "english", hindipb: "hindi", historypb: "history", polscipb: "polsci" };

  const resolve = (id) => {
    id = String(id || "");
    if (id.startsWith("path-")) id = id.slice(5);
    return ALIAS[id] || id;
  };
  const has = (id) => Object.prototype.hasOwnProperty.call(ICONS, resolve(id));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  function svg(id, opts) {
    const o = opts || {};
    const size = o.size || 24;
    const body = ICONS[has(id) ? resolve(id) : "learn"];
    const a11y = o.label ? `role="img" aria-label="${esc(o.label)}"` : `aria-hidden="true" focusable="false"`;
    const cls = o.className ? ` class="${esc(o.className)}"` : "";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${cls} ${a11y}>${body}</svg>`;
  }
  // Icon markup for a subject object ({id, icon, color}): a tinted inline SVG, or the registry emoji when there is no drawing.
  // The tint mixes the subject accent with the text colour so it keeps 3:1 against its pale box in light and dark.
  function html(subj, opts) {
    if (!subj) return "";
    if (!has(subj.id)) return esc(subj.icon || "");
    return `<span class="sico" style="--c:${esc(subj.color || "currentColor")}">${svg(subj.id, opts)}</span>`;
  }
  return { svg, html, has, ids: () => Object.keys(ICONS).concat(Object.keys(ALIAS)) };
})();
