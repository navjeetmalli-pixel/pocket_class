// Class 5 EVS diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(5, "evs", {
  "seeds-and-germination": [
    {
      title: "Germination of a seed",
      caption: "A seed with **water, air and warmth** swells and splits. The **root grows down** into the soil and the **shoot grows up** towards light; the first leaves open.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c5-g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" opacity="0.6"><rect x="15" y="110" width="110" height="110"/><rect x="155" y="110" width="110" height="110"/><rect x="295" y="110" width="110" height="110"/><rect x="435" y="110" width="110" height="110"/></g>
  <g stroke="currentColor" stroke-width="1.8"><line x1="15" y1="110" x2="125" y2="110"/><line x1="155" y1="110" x2="265" y2="110"/><line x1="295" y1="110" x2="405" y2="110"/><line x1="435" y1="110" x2="545" y2="110"/></g>
  <g stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c5-g)"><line x1="128" y1="70" x2="152" y2="70"/><line x1="268" y1="70" x2="292" y2="70"/><line x1="408" y1="70" x2="432" y2="70"/></g>
  <g text-anchor="middle" font-weight="bold"><text x="70" y="24">1</text><text x="210" y="24">2</text><text x="350" y="24">3</text><text x="490" y="24">4</text></g>
  <!-- 1 -->
  <ellipse cx="70" cy="155" rx="13" ry="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <!-- 2 -->
  <ellipse cx="210" cy="140" rx="13" ry="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M210 149 Q214 170 208 195" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <!-- 3 -->
  <ellipse cx="350" cy="130" rx="11" ry="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M350 138 V195" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M350 160 Q338 168 332 182" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M350 160 Q362 168 368 182" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M347 122 Q340 100 352 82" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <!-- 4 -->
  <ellipse cx="490" cy="126" rx="8" ry="5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M490 130 V205" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M490 155 Q476 165 470 185" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M490 155 Q504 165 510 185" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M490 180 Q482 192 480 205" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <path d="M490 122 V52" fill="none" stroke="currentColor" stroke-width="2.6"/>
  <path d="M490 70 Q462 52 450 70 Q470 84 490 70Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M490 62 Q518 44 530 62 Q510 76 490 62Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="518" y="176" fill="var(--dg-muted)">Root</text>
  <text x="498" y="100" fill="var(--dg-muted)">Shoot</text>
  <g text-anchor="middle">
    <text x="70" y="244">Seed swells</text><text x="70" y="262">with water</text>
    <text x="210" y="244">Seed coat splits,</text><text x="210" y="262">root comes out</text>
    <text x="350" y="244">Shoot grows up,</text><text x="350" y="262">root grows down</text>
    <text x="490" y="244">First leaves open</text>
  </g>
</svg>`,
    },
  ],
  "water-cycle-and-water-scarcity": [
    {
      title: "The water cycle",
      caption: "The sun makes water **evaporate**; vapour cools into clouds (**condensation**), falls as rain or snow (**precipitation**) and flows back to the sea (**collection**). Plants add vapour by **transpiration**.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c5-wc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="50" cy="42" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.6"><line x1="50" y1="14" x2="50" y2="8"/><line x1="50" y1="70" x2="50" y2="76"/><line x1="22" y1="42" x2="16" y2="42"/><line x1="78" y1="42" x2="84" y2="42"/><line x1="30" y1="22" x2="26" y2="18"/><line x1="70" y1="22" x2="74" y2="18"/><line x1="30" y1="62" x2="26" y2="66"/><line x1="70" y1="62" x2="74" y2="66"/></g>
  <text x="50" y="96" text-anchor="middle">Sun</text>
  <rect x="20" y="250" width="230" height="55" fill="var(--dg-fill)" opacity="0.8"/>
  <path d="M20 250 q14 -6 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t10 0" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="135" y="278" text-anchor="middle">Sea</text><text x="135" y="296" text-anchor="middle" fill="var(--dg-muted)">Collection</text>
  <path d="M250 252 L330 245 L410 135 L455 195 L545 195 V305 H250Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M402 168 Q385 215 335 247 Q295 262 252 268" fill="none" stroke="var(--dg-accent)" stroke-width="3" marker-end="url(#ar-c5-wc)"/>
  <text x="376" y="236" fill="var(--dg-muted)">River</text>
  <g stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-c5-wc)"><line x1="95" y1="240" x2="95" y2="125"/><line x1="140" y1="240" x2="140" y2="125"/><line x1="185" y1="240" x2="185" y2="125"/></g>
  <text x="140" y="113" text-anchor="middle">Evaporation</text>
  <path d="M225 95 Q205 95 207 78 Q209 62 230 63 Q235 40 262 42 Q285 30 305 50 Q335 45 338 72 Q352 80 340 95Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="280" y="76" text-anchor="middle">Cloud</text>
  <text x="280" y="22" text-anchor="middle">Condensation</text>
  <g stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-c5-wc)"><line x1="270" y1="104" x2="262" y2="165"/><line x1="300" y1="104" x2="292" y2="165"/><line x1="330" y1="104" x2="322" y2="165"/></g>
  <text x="362" y="112">Precipitation</text>
  <text x="362" y="128" fill="var(--dg-muted)">rain, snow</text>
  <rect x="502" y="176" width="6" height="19" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="505" cy="165" r="15" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="505" y1="144" x2="505" y2="122" stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-c5-wc)"/>
  <text x="505" y="112" text-anchor="middle">Transpiration</text>
</svg>`,
    },
  ],
});
