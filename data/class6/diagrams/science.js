// Class 6 Science diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(6, "science", {
  "the-wonderful-world-of-science": [
    {
      title: "The scientific method",
      caption: "Scientists **observe, ask a question, make a guess (hypothesis), test it, analyse, conclude and share**. In a **fair test** only one factor is changed and all others are kept the same.",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8">
    <rect x="14" y="20" width="110" height="46" rx="8"/><rect x="152" y="20" width="110" height="46" rx="8"/><rect x="290" y="20" width="110" height="46" rx="8"/><rect x="428" y="20" width="110" height="46" rx="8"/>
    <rect x="428" y="126" width="110" height="46" rx="8"/><rect x="290" y="126" width="110" height="46" rx="8"/><rect x="152" y="126" width="110" height="46" rx="8"/>
  </g>
  <g text-anchor="middle">
    <text x="69" y="48">1. Observe</text><text x="207" y="48">2. Question</text><text x="345" y="48">3. Hypothesis</text><text x="483" y="48">4. Experiment</text>
    <text x="483" y="154">5. Analyse</text><text x="345" y="154">6. Conclude</text><text x="207" y="154">7. Share</text>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none">
    <line x1="126" y1="43" x2="150" y2="43" marker-end="url(#ar-c6s-1)"/>
    <line x1="264" y1="43" x2="288" y2="43" marker-end="url(#ar-c6s-1)"/>
    <line x1="402" y1="43" x2="426" y2="43" marker-end="url(#ar-c6s-1)"/>
    <line x1="483" y1="68" x2="483" y2="124" marker-end="url(#ar-c6s-1)"/>
    <line x1="426" y1="149" x2="402" y2="149" marker-end="url(#ar-c6s-1)"/>
    <line x1="288" y1="149" x2="264" y2="149" marker-end="url(#ar-c6s-1)"/>
  </g>
  <text x="280" y="212" text-anchor="middle" fill="var(--dg-muted)">Fair test: change only ONE factor, keep everything else the same</text>
</svg>`,
    },
  ],
  "diversity-in-the-living-world": [
    {
      title: "Grouping plants by their stems",
      caption: "Plants with **strong stems** are herbs, shrubs and trees. Plants with **weak stems** need support (**climbers**) or spread on the ground (**creepers**).",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="215" y="10" width="130" height="34" rx="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="280" y="32" text-anchor="middle" font-weight="bold">Plants</text>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M280 44 V62 M60 62 H500 M60 62 V80 M170 62 V80 M280 62 V80 M390 62 V80 M500 62 V80"/>
  </g>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8">
    <rect x="10" y="80" width="100" height="108" rx="8"/><rect x="120" y="80" width="100" height="108" rx="8"/><rect x="230" y="80" width="100" height="108" rx="8"/>
    <rect x="340" y="80" width="100" height="108" rx="8"/><rect x="450" y="80" width="100" height="108" rx="8"/>
  </g>
  <g text-anchor="middle">
    <text x="60" y="102" font-weight="bold">Herbs</text><text x="60" y="124" font-size="12">small, soft,</text><text x="60" y="140" font-size="12">green stem</text><text x="60" y="166" font-size="12" fill="var(--dg-muted)">mint, wheat</text>
    <text x="170" y="102" font-weight="bold">Shrubs</text><text x="170" y="124" font-size="12">bushy, hard</text><text x="170" y="140" font-size="12">thin stems</text><text x="170" y="166" font-size="12" fill="var(--dg-muted)">rose, gudhal</text>
    <text x="280" y="102" font-weight="bold">Trees</text><text x="280" y="124" font-size="12">tall, thick</text><text x="280" y="140" font-size="12">woody trunk</text><text x="280" y="166" font-size="12" fill="var(--dg-muted)">mango, neem</text>
    <text x="390" y="102" font-weight="bold">Climbers</text><text x="390" y="124" font-size="12">weak stem,</text><text x="390" y="140" font-size="12">climb a support</text><text x="390" y="166" font-size="12" fill="var(--dg-muted)">grapevine, pea</text>
    <text x="500" y="102" font-weight="bold">Creepers</text><text x="500" y="124" font-size="12">weak stem,</text><text x="500" y="140" font-size="12">spread on ground</text><text x="500" y="166" font-size="12" fill="var(--dg-muted)">pumpkin</text>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none"><path d="M12 208 H328"/><path d="M342 208 H548"/></g>
  <g text-anchor="middle"><text x="170" y="232">Strong stems</text><text x="445" y="232">Weak stems</text></g>
</svg>`,
    },
    {
      title: "Root systems and leaf venation",
      caption: "A **taproot** system (one main root with side roots) usually goes with leaves of **reticulate (net-like) venation**. **Fibrous roots** (many thin roots) usually go with **parallel venation**.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="140" y="14" text-anchor="middle" font-weight="bold">Taproot system</text>
  <text x="420" y="14" text-anchor="middle" font-weight="bold">Fibrous root system</text>
  <line x1="280" y1="10" x2="280" y2="265" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M40 160 V80"/>
    <path d="M40 160 V250 M40 180 L14 200 M40 180 L66 200 M40 205 L16 225 M40 205 L64 225 M40 228 L26 244 M40 228 L54 244"/>
    <path d="M10 160 H70" stroke-dasharray="5 3" stroke="var(--dg-muted)"/>
    <g transform="translate(-24 0)"><path d="M150 76 H175"/>
    <path d="M175 76 Q220 30 270 76 Q220 122 175 76Z" fill="var(--dg-fill)"/>
    <path d="M175 76 H270" stroke-width="2.2"/>
    <path d="M195 76 L213 57 M215 76 L233 58 M235 76 L251 64 M195 76 L213 95 M215 76 L233 94 M235 76 L251 88" stroke-width="1.2"/>
    <path d="M204 66 L224 70 M224 66 L242 72 M204 86 L224 82 M224 86 L242 80" stroke-width="0.9"/></g>
  </g>
  <g>
    <text x="20" y="152" font-size="12" fill="var(--dg-muted)">Soil</text>
    <text x="52" y="108" font-size="12">Stem</text>
    <text x="84" y="196" font-size="12">Side roots</text>
    <text x="84" y="252" font-size="12">Main root</text>
    <g transform="translate(-24 0)">
    <text x="222" y="30" text-anchor="middle" font-size="12">Lamina</text>
    <text x="162" y="108" text-anchor="middle" font-size="12">Petiole</text>
    <text x="268" y="112" font-size="12">Veins</text></g>
    <text x="198" y="142" text-anchor="middle">Reticulate venation</text>
    <text x="198" y="160" text-anchor="middle" font-size="12" fill="var(--dg-muted)">mango, peepal</text>
  </g>
  <g fill="none" stroke="var(--dg-muted)" stroke-width="1">
    <path d="M198 33 V52"/><path d="M138 96 V78"/><path d="M242 100 L224 88"/><path d="M82 192 L62 196"/><path d="M82 248 L42 248"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M330 160 V80"/>
    <path d="M330 160 L300 240 M330 160 L312 252 M330 160 L330 256 M330 160 L348 252 M330 160 L360 240 M330 160 L286 214 M330 160 L374 214"/>
    <path d="M296 160 H364" stroke-dasharray="5 3" stroke="var(--dg-muted)"/>
    <path d="M430 76 Q490 52 550 76 Q490 100 430 76Z" fill="var(--dg-fill)"/>
    <path d="M430 76 Q490 76 550 76 M430 76 Q490 68 550 76 M430 76 Q490 84 550 76 M430 76 Q490 62 550 76 M430 76 Q490 90 550 76" stroke-width="1.2"/>
  </g>
  <g>
    <text x="372" y="152" font-size="12" fill="var(--dg-muted)">Soil</text>
    <text x="342" y="108" font-size="12">Stem</text>
    <text x="380" y="214" font-size="12">Many thin roots</text><text x="380" y="230" font-size="12">of similar size</text>
    <text x="490" y="40" text-anchor="middle" font-size="12">Veins run side by side</text>
    <text x="490" y="122" text-anchor="middle">Parallel venation</text>
    <text x="490" y="140" text-anchor="middle" font-size="12" fill="var(--dg-muted)">grass, wheat, maize</text>
  </g>
</svg>`,
    },
  ],
  "mindful-eating-a-path-to-a-healthy-body": [
    {
      title: "A balanced plate",
      caption: "A balanced diet has **cereals or millets** (energy), **pulses, milk, eggs** (proteins), **vegetables and fruits** (vitamins, minerals, fibre) and a little **oil or nuts** (energy). Sizes are only a guide.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="280" cy="150" r="104" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.8">
    <path d="M280 150 L280.0 55.0 A95 95 0 0 1 356.9 205.8 Z" fill="var(--dg-fill)"/>
    <path d="M280 150 L356.9 205.8 A95 95 0 0 1 203.1 205.8 Z" fill="none"/>
    <path d="M280 150 L203.1 205.8 A95 95 0 0 1 224.2 73.1 Z" fill="var(--dg-fill)"/>
    <path d="M280 150 L224.2 73.1 A95 95 0 0 1 280.0 55.0 Z" fill="none"/>
  </g>
  <g text-anchor="middle" font-size="12"><text x="316" y="118">Vegetables</text><text x="316" y="134">and fruits</text><text x="280" y="214">Cereals</text><text x="280" y="230">millets</text><text x="226" y="128">Pulses</text><text x="226" y="144">milk, eggs</text></g>
  <g fill="none" stroke="var(--dg-muted)" stroke-width="1"><path d="M250 70 L222 44"/></g>
  <g>
    <text x="214" y="40" text-anchor="end">Oil, ghee, nuts</text><text x="214" y="56" text-anchor="end" font-size="12" fill="var(--dg-muted)">energy (a little)</text>
    <text x="396" y="106" font-weight="bold">Vitamins, minerals,</text><text x="396" y="124" font-weight="bold">fibre</text><text x="396" y="144" font-size="12" fill="var(--dg-muted)">protect the body</text>
    <text x="172" y="150" text-anchor="end" font-weight="bold">Proteins</text><text x="172" y="168" text-anchor="end" font-size="12" fill="var(--dg-muted)">growth and repair</text>
    <text x="280" y="270" text-anchor="middle" font-weight="bold">Carbohydrates: quick energy</text>
  </g>
</svg>`,
    },
    {
      title: "Deficiency diseases",
      caption: "A **deficiency disease** results when the body lacks a nutrient for a long time. Eating a balanced diet prevents these diseases.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="10" width="540" height="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="10" y="10" width="540" height="252"/>
    <line x1="10" y1="46" x2="550" y2="46"/><line x1="10" y1="82" x2="550" y2="82"/><line x1="10" y1="118" x2="550" y2="118"/><line x1="10" y1="154" x2="550" y2="154"/><line x1="10" y1="190" x2="550" y2="190"/><line x1="10" y1="226" x2="550" y2="226"/>
    <line x1="130" y1="10" x2="130" y2="262"/><line x1="320" y1="10" x2="320" y2="262"/>
  </g>
  <g font-weight="bold"><text x="20" y="33">Nutrient</text><text x="140" y="33">Deficiency disease</text><text x="330" y="33">Good sources</text></g>
  <g>
    <text x="20" y="69">Vitamin A</text><text x="20" y="105">Vitamin C</text><text x="20" y="141">Vitamin D</text><text x="20" y="177">Calcium</text><text x="20" y="213">Iron</text><text x="20" y="249">Iodine</text>
    <text x="140" y="69">Night blindness</text><text x="140" y="105">Scurvy (bleeding gums)</text><text x="140" y="141">Rickets (bent bones)</text><text x="140" y="177">Weak bones and teeth</text><text x="140" y="213">Anaemia</text><text x="140" y="249">Goitre (swollen neck)</text>
    <text x="330" y="69">carrot, papaya, milk</text><text x="330" y="105">amla, lemon, orange</text><text x="330" y="141">sunlight, milk, eggs</text><text x="330" y="177">milk, curd, paneer, ragi</text><text x="330" y="213">leafy greens, jaggery</text><text x="330" y="249">iodised salt</text>
  </g>
</svg>`,
    },
  ],
  "exploring-magnets": [
    {
      title: "Poles: attraction and repulsion",
      caption: "**Unlike poles attract** (N–S). **Like poles repel** (N–N or S–S). Repulsion is the sure test for a magnet. A broken magnet gives **two smaller magnets**, each with a N and an S pole.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.8">
    <rect x="20" y="30" width="55" height="28" fill="var(--dg-fill)"/><rect x="75" y="30" width="55" height="28" fill="none"/>
    <rect x="200" y="30" width="55" height="28" fill="var(--dg-fill)"/><rect x="255" y="30" width="55" height="28" fill="none"/>
    <rect x="20" y="95" width="55" height="28" fill="var(--dg-fill)"/><rect x="75" y="95" width="55" height="28" fill="none"/>
    <rect x="200" y="95" width="55" height="28" fill="none"/><rect x="255" y="95" width="55" height="28" fill="var(--dg-fill)"/>
    <rect x="20" y="160" width="55" height="28" fill="none"/><rect x="75" y="160" width="55" height="28" fill="var(--dg-fill)"/>
    <rect x="200" y="160" width="55" height="28" fill="var(--dg-fill)"/><rect x="255" y="160" width="55" height="28" fill="none"/>
    <rect x="20" y="225" width="55" height="28" fill="var(--dg-fill)"/><rect x="75" y="225" width="55" height="28" fill="none"/>
    <rect x="200" y="225" width="26" height="28" fill="var(--dg-fill)"/><rect x="226" y="225" width="26" height="28" fill="none"/>
    <rect x="262" y="225" width="26" height="28" fill="var(--dg-fill)"/><rect x="288" y="225" width="26" height="28" fill="none"/>
  </g>
  <g text-anchor="middle" font-weight="bold">
    <text x="47" y="49">N</text><text x="102" y="49">S</text><text x="227" y="49">N</text><text x="282" y="49">S</text>
    <text x="47" y="114">N</text><text x="102" y="114">S</text><text x="227" y="114">S</text><text x="282" y="114">N</text>
    <text x="47" y="179">S</text><text x="102" y="179">N</text><text x="227" y="179">N</text><text x="282" y="179">S</text>
    <text x="47" y="244">N</text><text x="102" y="244">S</text><text x="213" y="244">N</text><text x="239" y="244">S</text><text x="275" y="244">N</text><text x="301" y="244">S</text>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none">
    <line x1="138" y1="44" x2="158" y2="44" marker-end="url(#ar-c6s-2)"/><line x1="192" y1="44" x2="172" y2="44" marker-end="url(#ar-c6s-2)"/>
    <line x1="158" y1="109" x2="138" y2="109" marker-end="url(#ar-c6s-2)"/><line x1="172" y1="109" x2="192" y2="109" marker-end="url(#ar-c6s-2)"/>
    <line x1="158" y1="174" x2="138" y2="174" marker-end="url(#ar-c6s-2)"/><line x1="172" y1="174" x2="192" y2="174" marker-end="url(#ar-c6s-2)"/>
  </g>
  <line x1="138" y1="239" x2="176" y2="239" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-2)"/>
  <text x="157" y="228" text-anchor="middle" font-size="12" fill="var(--dg-muted)">break</text>
  <g>
    <text x="336" y="49" font-weight="bold">Attract</text><text x="336" y="66" font-size="12" fill="var(--dg-muted)">unlike poles (N and S)</text>
    <text x="336" y="114" font-weight="bold">Repel</text><text x="336" y="131" font-size="12" fill="var(--dg-muted)">like poles (S and S)</text>
    <text x="336" y="179" font-weight="bold">Repel</text><text x="336" y="196" font-size="12" fill="var(--dg-muted)">like poles (N and N)</text>
    <text x="336" y="244" font-weight="bold">Broken magnet</text><text x="336" y="261" font-size="12" fill="var(--dg-muted)">two magnets, each N and S</text>
  </g>
</svg>`,
    },
    {
      title: "Magnetic compass and directions",
      caption: "The needle of a **magnetic compass** is a small magnet that settles **north–south**. Its north end points north. Face north, and **east is on your right**, west on your left.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="160" cy="130" r="90" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="160" cy="130" r="80" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1"/>
  <g stroke="currentColor" stroke-width="1.5"><path d="M160 50 V62 M160 198 V210 M80 130 H92 M228 130 H240"/></g>
  <g text-anchor="middle" font-weight="bold"><text x="160" y="40">N</text><text x="160" y="236">S</text><text x="64" y="135">W</text><text x="256" y="135">E</text></g>
  <path d="M160 70 L172 130 L148 130Z" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M148 130 L172 130 L160 190Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="160" cy="130" r="3.5" fill="currentColor"/>
  <g>
    <text x="300" y="70" font-weight="bold">Needle</text>
    <text x="300" y="90" font-size="12">Shaded end = north pole of the needle</text>
    <text x="300" y="108" font-size="12">It points to Earth's north.</text>
    <text x="300" y="148" font-weight="bold">Finding directions</text>
    <text x="300" y="168" font-size="12">1. Keep the compass flat, away from iron.</text>
    <text x="300" y="186" font-size="12">2. Wait until the needle stops.</text>
    <text x="300" y="204" font-size="12">3. Turn the dial so N is under the needle.</text>
  </g>
  <path d="M160 70 L160 62" stroke="none"/>
</svg>`,
    },
  ],
  "measurement-of-length-and-motion": [
    {
      title: "Reading a ruler correctly",
      caption: "Keep your **eye directly above** the mark being read (position **B**). Reading from the side (A or C) gives a wrong value. If the object starts at 1 cm, **subtract** that first reading.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="28" y="150" width="504" height="44" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M40 150 V164 M64 150 V158 M88 150 V164 M112 150 V158 M136 150 V164 M160 150 V158 M184 150 V164 M208 150 V158 M232 150 V164 M256 150 V158 M280 150 V164 M304 150 V158 M328 150 V164 M352 150 V158 M376 150 V164 M400 150 V158 M424 150 V164 M448 150 V158 M472 150 V164 M496 150 V158 M520 150 V164" stroke="currentColor" stroke-width="1.3" fill="none"/>
  <g text-anchor="middle" font-size="12"><text x="40" y="184">0</text><text x="88" y="184">1</text><text x="136" y="184">2</text><text x="184" y="184">3</text><text x="232" y="184">4</text><text x="280" y="184">5</text><text x="328" y="184">6</text><text x="376" y="184">7</text><text x="424" y="184">8</text><text x="472" y="184">9</text><text x="520" y="184">10</text></g>
  <rect x="88" y="126" width="288" height="24" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="232" y="143" text-anchor="middle" font-size="12">Object</text>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3" fill="none"><path d="M88 126 V150 M376 126 V150" stroke-width="1"/></g>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6">
    <ellipse cx="256" cy="40" rx="15" ry="9"/><ellipse cx="376" cy="40" rx="15" ry="9"/><ellipse cx="496" cy="40" rx="15" ry="9"/>
  </g>
  <g><circle cx="256" cy="40" r="4"/><circle cx="376" cy="40" r="4"/><circle cx="496" cy="40" r="4"/></g>
  <g stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="5 3" fill="none"><path d="M262 49 L372 124"/><path d="M490 49 L380 124"/></g>
  <line x1="376" y1="50" x2="376" y2="122" stroke="var(--dg-accent)" stroke-width="2.5"/>
  <g text-anchor="middle" font-size="12">
    <text x="256" y="16" fill="var(--dg-muted)">A: wrong</text><text x="376" y="16" font-weight="bold">B: correct</text><text x="496" y="16" fill="var(--dg-muted)">C: wrong</text>
  </g>
  <g text-anchor="middle">
    <text x="232" y="222" font-size="12" fill="var(--dg-muted)">Scale in cm: the object starts at 1 cm and ends at 7 cm</text>
    <text x="280" y="244" font-weight="bold">Length = 7 − 1 = 6 cm</text>
  </g>
</svg>`,
    },
    {
      title: "Types of motion",
      caption: "**Rectilinear**: straight line. **Circular**: round a fixed point. **Rotational**: spinning about an axis. **Oscillatory**: to-and-fro. **Periodic**: repeats after equal intervals of time.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3"><line x1="187" y1="10" x2="187" y2="320"/><line x1="373" y1="10" x2="373" y2="320"/><line x1="10" y1="165" x2="550" y2="165"/></g>
  <g transform="translate(5 0)">
    <text x="88" y="22" text-anchor="middle" font-weight="bold">Rectilinear</text>
    <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="18" y="48" width="44" height="20"/><circle cx="28" cy="72" r="5"/><circle cx="52" cy="72" r="5"/></g>
    <line x1="72" y1="60" x2="160" y2="60" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-3)"/>
    <text x="88" y="118" text-anchor="middle" font-size="12" fill="var(--dg-muted)">car on a straight road</text>
    <text x="88" y="136" text-anchor="middle" font-size="12" fill="var(--dg-muted)">apple falling down</text>
  </g>
  <g transform="translate(192 0)">
    <text x="88" y="22" text-anchor="middle" font-weight="bold">Circular</text>
    <circle cx="88" cy="70" r="36" fill="none" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
    <line x1="88" y1="70" x2="113.5" y2="44.5" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="88" cy="70" r="3" fill="currentColor"/>
    <circle cx="113.5" cy="44.5" r="6" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
    <path d="M123.2 40.4 A46 46 0 0 1 133.3 78" fill="none" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-3)"/>
    <text x="88" y="124" text-anchor="middle" font-size="12" fill="var(--dg-muted)">stone whirled on a string</text>
  </g>
  <g transform="translate(378 0)">
    <text x="88" y="22" text-anchor="middle" font-weight="bold">Rotational</text>
    <g fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="88" cy="68" r="28" fill="var(--dg-fill)"/><path d="M88 40 V96 M60 68 H116 M68 48 L108 88 M108 48 L68 88" stroke-width="1.2"/></g>
    <circle cx="88" cy="68" r="4" fill="currentColor"/>
    <path d="M88 32 A36 36 0 0 1 124 68" fill="none" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-3)"/>
    <text x="140" y="108" font-size="12">axis</text><path d="M138 102 L92 72" stroke="var(--dg-muted)" stroke-width="1" fill="none"/>
    <text x="88" y="130" text-anchor="middle" font-size="12" fill="var(--dg-muted)">top, ceiling fan</text>
  </g>
  <g transform="translate(5 165)">
    <text x="88" y="22" text-anchor="middle" font-weight="bold">Oscillatory</text>
    <line x1="68" y1="34" x2="108" y2="34" stroke="currentColor" stroke-width="2.5"/>
    <g stroke="var(--dg-muted)" stroke-dasharray="3 3" fill="none"><path d="M88 34 L53 94.6 M88 34 L123 94.6"/><circle cx="53" cy="94.6" r="7"/><circle cx="123" cy="94.6" r="7"/></g>
    <line x1="88" y1="34" x2="88" y2="104" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="88" cy="104" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
    <g fill="none" stroke="var(--dg-accent)" stroke-width="2.5"><path d="M88 116 A82 82 0 0 1 56 107" marker-end="url(#ar-c6s-3)"/><path d="M88 116 A82 82 0 0 0 120 107" marker-end="url(#ar-c6s-3)"/></g>
    <text x="88" y="140" text-anchor="middle" font-size="12" fill="var(--dg-muted)">pendulum, swing</text>
  </g>
  <g transform="translate(192 165)">
    <text x="88" y="22" text-anchor="middle" font-weight="bold">Periodic</text>
    <ellipse cx="88" cy="70" rx="52" ry="30" fill="none" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
    <circle cx="88" cy="70" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="126" cy="50" r="5" fill="currentColor"/>
    <path d="M60 41 Q88 34 112 42" fill="none" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-3)"/>
    <text x="88" y="98" text-anchor="middle" font-size="12">Sun</text>
    <text x="140" y="36" font-size="12">Earth</text>
    <text x="88" y="130" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Earth going round the Sun</text>
  </g>
  <g transform="translate(378 165)">
    <rect x="6" y="14" width="164" height="118" rx="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
    <g font-size="12"><text x="16" y="36" font-weight="bold">Remember</text>
    <text x="16" y="58">Periodic: repeats after</text><text x="16" y="74">equal intervals of time.</text>
    <text x="16" y="98">Oscillatory motion is</text><text x="16" y="114">also periodic.</text></g>
  </g>
</svg>`,
    },
  ],
  "materials-around-us": [
    {
      title: "Sorting materials by their properties",
      caption: "Materials are grouped by whether **light passes through** them, whether they **dissolve** in water, whether they **float**, and whether two liquids **mix**.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="10" width="540" height="34" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="10" y="10" width="540" height="290"/>
    <line x1="10" y1="44" x2="550" y2="44"/><line x1="10" y1="108" x2="550" y2="108"/><line x1="10" y1="172" x2="550" y2="172"/><line x1="10" y1="236" x2="550" y2="236"/>
    <line x1="120" y1="10" x2="120" y2="300"/><line x1="263" y1="10" x2="263" y2="300"/><line x1="406" y1="10" x2="406" y2="300"/>
  </g>
  <g font-weight="bold"><text x="20" y="32">Property</text><text x="190" y="32" text-anchor="middle">Group 1</text><text x="334" y="32" text-anchor="middle">Group 2</text><text x="478" y="32" text-anchor="middle">Group 3</text></g>
  <g font-weight="bold" font-size="12">
    <text x="20" y="72">Does light</text><text x="20" y="88">pass through?</text>
    <text x="20" y="136">Does it dissolve</text><text x="20" y="152">in water?</text>
    <text x="20" y="200">Float or sink</text><text x="20" y="216">in water?</text>
    <text x="20" y="264">Do two liquids</text><text x="20" y="280">mix?</text>
  </g>
  <g text-anchor="middle">
    <text x="190" y="68" font-weight="bold">Transparent</text><text x="190" y="86" font-size="12" fill="var(--dg-muted)">glass, clear water</text>
    <text x="334" y="68" font-weight="bold">Translucent</text><text x="334" y="86" font-size="12" fill="var(--dg-muted)">butter paper,</text><text x="334" y="100" font-size="12" fill="var(--dg-muted)">frosted glass</text>
    <text x="478" y="68" font-weight="bold">Opaque</text><text x="478" y="86" font-size="12" fill="var(--dg-muted)">wood, metal, stone</text>
    <text x="190" y="132" font-weight="bold">Soluble</text><text x="190" y="150" font-size="12" fill="var(--dg-muted)">salt, sugar</text>
    <text x="334" y="132" font-weight="bold">Insoluble</text><text x="334" y="150" font-size="12" fill="var(--dg-muted)">sand, chalk powder</text>
    <text x="478" y="140" fill="var(--dg-muted)">–</text>
    <text x="190" y="196" font-weight="bold">Floats</text><text x="190" y="214" font-size="12" fill="var(--dg-muted)">cork, thermocol</text>
    <text x="334" y="196" font-weight="bold">Sinks</text><text x="334" y="214" font-size="12" fill="var(--dg-muted)">stone, iron nail, coin</text>
    <text x="478" y="204" fill="var(--dg-muted)">–</text>
    <text x="190" y="260" font-weight="bold">Miscible</text><text x="190" y="278" font-size="12" fill="var(--dg-muted)">water and vinegar</text>
    <text x="334" y="260" font-weight="bold">Immiscible</text><text x="334" y="278" font-size="12" fill="var(--dg-muted)">oil and water</text>
    <text x="478" y="268" fill="var(--dg-muted)">–</text>
  </g>
</svg>`,
    },
    {
      title: "Transparent, translucent and opaque",
      caption: "A **transparent** material lets all light pass, so we see clearly through it. A **translucent** one lets some light through, so objects look blurred. An **opaque** one blocks light and makes a **shadow**.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3"><line x1="187" y1="10" x2="187" y2="215"/><line x1="373" y1="10" x2="373" y2="215"/></g>
  <g>
    <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"><rect x="10" y="70" width="16" height="22"/></g>
    <g stroke="var(--dg-accent)" stroke-width="2" fill="none"><path d="M28 74 H70 M28 81 H70 M28 88 H70"/><path d="M96 74 H168 M96 81 H168 M96 88 H168" marker-end="url(#ar-c6s-4)"/></g>
    <rect x="70" y="40" width="26" height="82" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <text x="83" y="34" text-anchor="middle" font-size="12">Glass</text>
    <text x="93" y="158" text-anchor="middle" font-weight="bold">Transparent</text>
    <text x="93" y="176" text-anchor="middle" font-size="12" fill="var(--dg-muted)">all light passes</text>
    <text x="93" y="192" text-anchor="middle" font-size="12" fill="var(--dg-muted)">seen clearly</text>
  </g>
  <g transform="translate(187 0)">
    <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"><rect x="10" y="70" width="16" height="22"/></g>
    <g stroke="var(--dg-accent)" stroke-width="2" fill="none"><path d="M28 74 H70 M28 81 H70 M28 88 H70"/></g>
    <g stroke="var(--dg-accent)" stroke-width="1.3" stroke-dasharray="3 3" fill="none"><path d="M96 78 L150 52 M96 81 L160 81 M96 84 L150 110"/></g>
    <rect x="70" y="40" width="26" height="82" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
    <text x="83" y="34" text-anchor="middle" font-size="12">Butter paper</text>
    <text x="93" y="158" text-anchor="middle" font-weight="bold">Translucent</text>
    <text x="93" y="176" text-anchor="middle" font-size="12" fill="var(--dg-muted)">some light passes</text>
    <text x="93" y="192" text-anchor="middle" font-size="12" fill="var(--dg-muted)">seen blurred</text>
  </g>
  <g transform="translate(373 0)">
    <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"><rect x="10" y="70" width="16" height="22"/></g>
    <g stroke="var(--dg-accent)" stroke-width="2" fill="none"><path d="M28 74 H70 M28 81 H70 M28 88 H70"/></g>
    <rect x="70" y="40" width="26" height="82" fill="currentColor" stroke="currentColor" stroke-width="1.8"/>
    <path d="M100 52 H170 V110 H100" fill="none" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
    <text x="135" y="86" text-anchor="middle" font-size="12">Shadow</text>
    <text x="83" y="34" text-anchor="middle" font-size="12">Wood</text>
    <text x="93" y="158" text-anchor="middle" font-weight="bold">Opaque</text>
    <text x="93" y="176" text-anchor="middle" font-size="12" fill="var(--dg-muted)">no light passes</text>
    <text x="93" y="192" text-anchor="middle" font-size="12" fill="var(--dg-muted)">cannot see through</text>
  </g>
</svg>`,
    },
  ],
  "temperature-and-its-measurement": [
    {
      title: "Clinical thermometer",
      caption: "A **clinical thermometer** reads **35 °C to 42 °C**. The **kink** near the bulb stops the mercury falling back, so shake it down before use. Normal body temperature is about **37 °C**.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="84" y="66" width="440" height="34" rx="6" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="66" cy="83" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="66" cy="83" r="13" fill="var(--dg-accent)"/>
  <rect x="84" y="80" width="26" height="6" fill="var(--dg-accent)"/>
  <rect x="116" y="81" width="115" height="4" fill="var(--dg-accent)"/>
  <path d="M110 80 L113 83 L110 86 M116 80 L113 83 L116 86" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M130.0 100 V112 M155.7 100 V106 M181.4 100 V112 M207.1 100 V106 M232.9 100 V112 M258.6 100 V106 M284.3 100 V112 M310.0 100 V106 M335.7 100 V112 M361.4 100 V106 M387.1 100 V112 M412.9 100 V106 M438.6 100 V112 M464.3 100 V106 M490.0 100 V112" stroke="currentColor" stroke-width="1.3" fill="none"/>
  <g text-anchor="middle" font-size="12"><text x="130.0" y="128">35</text><text x="181.4" y="128">36</text><text x="232.9" y="128">37</text><text x="284.3" y="128">38</text><text x="335.7" y="128">39</text><text x="387.1" y="128">40</text><text x="438.6" y="128">41</text><text x="490.0" y="128">42</text></g>
  <text x="540" y="128" font-size="12">°C</text>
  <g fill="none" stroke="var(--dg-muted)" stroke-width="1"><path d="M113 66 V46"/><path d="M231 66 V46"/><path d="M60 106 V140"/></g>
  <g font-size="12">
    <text x="113" y="38" text-anchor="middle">Kink</text>
    <text x="231" y="38" text-anchor="middle">Mercury thread</text>
    <text x="60" y="154" text-anchor="middle">Bulb</text>
  </g>
  <line x1="232.9" y1="196" x2="232.9" y2="140" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-5)"/>
  <text x="232.9" y="214" text-anchor="middle" font-weight="bold">Normal body temperature 37 °C</text>
</svg>`,
    },
    {
      title: "Using a laboratory thermometer",
      caption: "Keep the thermometer **upright** with the bulb **in the liquid but not touching the bottom or sides**. Read it with your **eye level with the end of the thread** (eye B).",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="131" y="110" width="138" height="139" fill="var(--dg-fill)"/>
  <path d="M130 60 V250 H270 V60" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="194" y="30" width="12" height="180" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="200" cy="214" r="10" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.8"/>
  <rect x="198.5" y="140" width="3" height="74" fill="var(--dg-accent)"/>
  <path d="M182 50 H194 M182 65 H194 M182 80 H194 M182 95 H194 M182 110 H194 M182 125 H194 M182 140 H194 M182 155 H194 M182 170 H194 M182 185 H194 M182 200 H194" stroke="currentColor" stroke-width="1.3" fill="none"/>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"><ellipse cx="400" cy="70" rx="15" ry="9"/><ellipse cx="400" cy="140" rx="15" ry="9"/><ellipse cx="400" cy="210" rx="15" ry="9"/></g>
  <g><circle cx="400" cy="70" r="4"/><circle cx="400" cy="140" r="4"/><circle cx="400" cy="210" r="4"/></g>
  <g stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="5 3" fill="none"><path d="M386 74 L208 138"/><path d="M386 206 L208 142"/></g>
  <line x1="385" y1="140" x2="208" y2="140" stroke="var(--dg-accent)" stroke-width="2.5"/>
  <g font-size="12">
    <text x="425" y="74" fill="var(--dg-muted)">A: wrong (too high)</text>
    <text x="425" y="144" font-weight="bold" font-size="13">B: correct</text>
    <text x="425" y="214" fill="var(--dg-muted)">C: wrong (too low)</text>
    <text x="238" y="180" text-anchor="middle">Liquid</text>
    <text x="170" y="44" text-anchor="end">Scale</text><path d="M174 41 L190 50" stroke="var(--dg-muted)" fill="none"/>
  </g>
  <text x="200" y="274" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Bulb in the liquid, not touching bottom or sides</text>
</svg>`,
    },
  ],
  "a-journey-through-states-of-water": [
    {
      title: "The water cycle",
      caption: "The Sun's heat causes **evaporation**. Vapour rises, cools and **condenses** into clouds. Water falls as **precipitation**, then flows as **run-off** or soaks in as **groundwater**, and the cycle repeats.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="50" cy="42" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.6"><path d="M50 14 V20 M50 64 V70 M22 42 H28 M72 42 H78 M30 22 L34 26 M66 58 L70 62 M70 22 L66 26 M30 62 L34 58"/></g>
  <text x="50" y="88" text-anchor="middle" font-size="12">Sun</text>
  <rect x="10" y="248" width="270" height="58" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="145" y="284" text-anchor="middle" font-weight="bold">Sea</text>
  <path d="M280 248 L400 150 L470 215 H550 V306 H280 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M290 248 H270" stroke="currentColor" stroke-width="1.8"/>
  <path d="M310 80 Q290 80 292 62 Q294 46 318 48 Q324 28 350 30 Q375 28 382 48 Q408 46 408 64 Q408 80 388 80 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="350" y="20" text-anchor="middle" font-weight="bold">Condensation</text>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="2.5">
    <path d="M100 242 C100 160 170 92 286 66" marker-end="url(#ar-c6s-6)"/>
    <path d="M170 242 C170 190 220 125 288 76" marker-end="url(#ar-c6s-6)"/>
    <path d="M365 92 V128" marker-end="url(#ar-c6s-6)"/><path d="M385 92 V128" marker-end="url(#ar-c6s-6)"/><path d="M405 100 V134" marker-end="url(#ar-c6s-6)"/>
    <path d="M375 160 L310 216" marker-end="url(#ar-c6s-6)"/>
    <path d="M470 258 Q400 280 300 284" stroke-dasharray="6 3" marker-end="url(#ar-c6s-6)"/>
    <path d="M510 158 V118" marker-end="url(#ar-c6s-6)"/>
  </g>
  <g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M510 214 V186"/><circle cx="510" cy="174" r="14" fill="var(--dg-fill)"/></g>
  <g>
    <text x="22" y="160" font-weight="bold">Evaporation</text>
    <text x="352" y="106" text-anchor="end" font-weight="bold">Precipitation</text><text x="352" y="122" text-anchor="end" font-size="12" fill="var(--dg-muted)">rain, snow, hail</text>
    <text x="330" y="172" text-anchor="end" font-weight="bold">Run-off</text>
    <text x="400" y="300" text-anchor="middle" font-weight="bold">Groundwater</text>
    <text x="510" y="108" text-anchor="middle" font-weight="bold">Transpiration</text>
    <text x="510" y="236" text-anchor="middle" font-size="12" fill="var(--dg-muted)">tree</text>
  </g>
</svg>`,
    },
    {
      title: "Changes of state of water",
      caption: "Ice **melts** and water **freezes** at **0 °C**. Water **boils** at **100 °C** and **evaporates** at any temperature. Water vapour **condenses** to water on cooling.",
      svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="10" y="60" width="120" height="70" rx="8"/><rect x="220" y="60" width="120" height="70" rx="8"/><rect x="430" y="60" width="120" height="70" rx="8"/></g>
  <g text-anchor="middle">
    <text x="70" y="92" font-weight="bold">Ice</text><text x="70" y="112" font-size="12" fill="var(--dg-muted)">solid</text>
    <text x="280" y="92" font-weight="bold">Water</text><text x="280" y="112" font-size="12" fill="var(--dg-muted)">liquid</text>
    <text x="490" y="92" font-weight="bold">Water vapour</text><text x="490" y="112" font-size="12" fill="var(--dg-muted)">gas</text>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none">
    <line x1="134" y1="78" x2="216" y2="78" marker-end="url(#ar-c6s-7)"/><line x1="344" y1="78" x2="426" y2="78" marker-end="url(#ar-c6s-7)"/>
    <line x1="216" y1="114" x2="134" y2="114" marker-end="url(#ar-c6s-7)"/><line x1="426" y1="114" x2="344" y2="114" marker-end="url(#ar-c6s-7)"/>
  </g>
  <g text-anchor="middle" font-size="12">
    <text x="175" y="52" font-weight="bold">Melting</text>
    <text x="385" y="52" font-weight="bold">Evaporation</text>
    <text x="175" y="134" font-weight="bold">Freezing</text><text x="175" y="150" fill="var(--dg-muted)">at 0 °C</text>
    <text x="385" y="134" font-weight="bold">Condensation</text><text x="385" y="150" fill="var(--dg-muted)">on cooling</text>
  </g>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)"><text x="175" y="98">at 0 °C</text><text x="385" y="98">on heating</text></g>
  <text x="280" y="184" text-anchor="middle">Water boils at 100 °C (normal pressure)</text>
</svg>`,
    },
  ],
  "methods-of-separation-in-everyday-life": [
    {
      title: "Decantation and filtration",
      caption: "In **decantation** the clear liquid is poured off slowly, leaving the **sediment** behind. In **filtration** the solid stays on the filter paper as **residue** and the clear liquid passes through as the **filtrate**.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="268" y1="10" x2="268" y2="260" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="135" y="22" text-anchor="middle" font-weight="bold">Decantation</text>
  <text x="410" y="22" text-anchor="middle" font-weight="bold">Filtration</text>
  <rect x="31" y="111" width="78" height="78" fill="var(--dg-fill)"/>
  <path d="M30 90 V190 H110 V90" fill="none" stroke="currentColor" stroke-width="2"/>
  <g fill="currentColor"><circle cx="42" cy="180" r="2"/><circle cx="55" cy="183" r="2"/><circle cx="68" cy="179" r="2"/><circle cx="80" cy="183" r="2"/><circle cx="94" cy="180" r="2"/><circle cx="48" cy="173" r="2"/><circle cx="74" cy="172" r="2"/><circle cx="90" cy="173" r="2"/></g>
  <rect x="171" y="166" width="78" height="23" fill="var(--dg-fill)"/>
  <path d="M170 90 V190 H250 V90" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M104 80 Q140 40 176 78" fill="none" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-8)"/>
  <g text-anchor="middle" font-size="12">
    <text x="70" y="150">Clear water</text>
    <text x="70" y="216">Sediment</text><text x="210" y="216">Clear water</text><text x="210" y="232">collected</text>
    <text x="140" y="46" fill="var(--dg-muted)">pour slowly</text>
  </g>
  <path d="M70 202 V186" stroke="var(--dg-muted)" fill="none"/>
  <path d="M310 70 H410 L370 130 H350 Z" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M320 74 L360 124 L400 74" fill="none" stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M338 90 L360 124 L382 90 Z" fill="var(--dg-fill)"/>
  <path d="M350 130 V160 M370 130 V160" stroke="currentColor" stroke-width="2" fill="none"/>
  <rect x="321" y="206" width="78" height="33" fill="var(--dg-fill)"/>
  <path d="M320 170 V240 H400 V170" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="360" y1="40" x2="360" y2="66" stroke="var(--dg-accent)" stroke-width="2.5" marker-end="url(#ar-c6s-8)"/>
  <line x1="360" y1="162" x2="360" y2="200" stroke="var(--dg-accent)" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#ar-c6s-8)"/>
  <g font-size="12">
    <text x="370" y="52">Mixture poured in</text>
    <text x="420" y="94">Filter paper</text><text x="420" y="112">with residue</text>
    <text x="408" y="136">Funnel</text>
    <text x="410" y="226">Filtrate</text>
  </g>
  <g fill="none" stroke="var(--dg-muted)" stroke-width="1"><path d="M416 90 L392 82"/><path d="M404 132 L378 120"/></g>
</svg>`,
    },
    {
      title: "Methods of separation",
      caption: "Choose the method by the **difference** between the substances: size, weight, magnetism, whether they settle, or whether they dissolve.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="10" width="540" height="34" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="10" y="10" width="540" height="272"/>
    <line x1="10" y1="44" x2="550" y2="44"/><line x1="10" y1="78" x2="550" y2="78"/><line x1="10" y1="112" x2="550" y2="112"/><line x1="10" y1="146" x2="550" y2="146"/><line x1="10" y1="180" x2="550" y2="180"/><line x1="10" y1="214" x2="550" y2="214"/><line x1="10" y1="248" x2="550" y2="248"/>
    <line x1="200" y1="10" x2="200" y2="282"/><line x1="380" y1="10" x2="380" y2="282"/>
  </g>
  <g font-weight="bold"><text x="20" y="32">Method</text><text x="210" y="32">Used to separate</text><text x="390" y="32">Works because</text></g>
  <g>
    <text x="20" y="66">Handpicking</text><text x="210" y="66">stones from rice or dal</text><text x="390" y="66">pieces are large</text>
    <text x="20" y="100">Winnowing</text><text x="210" y="100">husk from grain</text><text x="390" y="100">weight (wind blows it)</text>
    <text x="20" y="134">Sieving</text><text x="210" y="134">bran from atta</text><text x="390" y="134">size of particles</text>
    <text x="20" y="168">Magnet</text><text x="210" y="168">iron nails from sand</text><text x="390" y="168">iron is attracted</text>
    <text x="20" y="202">Sedimentation, decantation</text><text x="210" y="202">mud from water</text><text x="390" y="202">solid settles at bottom</text>
    <text x="20" y="236">Filtration</text><text x="210" y="236">solid from a liquid</text><text x="390" y="236">solid stays on paper</text>
    <text x="20" y="270">Evaporation</text><text x="210" y="270">salt from salt water</text><text x="390" y="270">water leaves as vapour</text>
  </g>
</svg>`,
    },
  ],
  "living-creatures-exploring-their-characteristics": [
    {
      title: "Characteristics of living things",
      caption: "Living things **need food, respire, respond to stimuli, grow, reproduce, excrete, move** and have a **life span**. A non-living thing does not show all of these.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g stroke="var(--dg-muted)" stroke-width="1.5" fill="none">
    <path d="M70 56 L280 125 M210 56 L280 125 M350 56 L280 125 M490 56 L280 125 M70 194 L280 125 M210 194 L280 125 M350 194 L280 125 M490 194 L280 125"/>
  </g>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8">
    <rect x="10" y="12" width="120" height="44" rx="8"/><rect x="150" y="12" width="120" height="44" rx="8"/><rect x="290" y="12" width="120" height="44" rx="8"/><rect x="430" y="12" width="120" height="44" rx="8"/>
    <rect x="10" y="194" width="120" height="44" rx="8"/><rect x="150" y="194" width="120" height="44" rx="8"/><rect x="290" y="194" width="120" height="44" rx="8"/><rect x="430" y="194" width="120" height="44" rx="8"/>
  </g>
  <rect x="215" y="105" width="130" height="40" rx="20" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="3"/>
  <text x="280" y="130" text-anchor="middle" font-weight="bold">Living things</text>
  <g text-anchor="middle">
    <text x="70" y="32" font-weight="bold">Food</text><text x="70" y="48" font-size="12" fill="var(--dg-muted)">energy, growth</text>
    <text x="210" y="32" font-weight="bold">Respiration</text><text x="210" y="48" font-size="12" fill="var(--dg-muted)">uses oxygen</text>
    <text x="350" y="32" font-weight="bold">Response</text><text x="350" y="48" font-size="12" fill="var(--dg-muted)">to stimuli</text>
    <text x="490" y="32" font-weight="bold">Growth</text><text x="490" y="48" font-size="12" fill="var(--dg-muted)">size increases</text>
    <text x="70" y="214" font-weight="bold">Reproduction</text><text x="70" y="230" font-size="12" fill="var(--dg-muted)">young ones</text>
    <text x="210" y="214" font-weight="bold">Excretion</text><text x="210" y="230" font-size="12" fill="var(--dg-muted)">removes wastes</text>
    <text x="350" y="214" font-weight="bold">Movement</text><text x="350" y="230" font-size="12" fill="var(--dg-muted)">animals move</text>
    <text x="490" y="214" font-weight="bold">Life span</text><text x="490" y="230" font-size="12" fill="var(--dg-muted)">birth to death</text>
  </g>
</svg>`,
    },
    {
      title: "Photosynthesis and respiration",
      caption: "Plants make food by **photosynthesis** in their leaves. All living things release energy from food by **respiration**, using oxygen and giving out carbon dioxide.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6s-9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="10" y="22" font-weight="bold">Photosynthesis (in green leaves)</text>
  <text x="10" y="132" font-weight="bold">Respiration (in all living things)</text>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8">
    <rect x="10" y="36" width="210" height="54" rx="8"/><rect x="340" y="36" width="210" height="54" rx="8"/>
    <rect x="10" y="146" width="210" height="54" rx="8"/><rect x="340" y="146" width="210" height="54" rx="8"/>
  </g>
  <g text-anchor="middle">
    <text x="115" y="60">Carbon dioxide</text><text x="115" y="78">+ water</text>
    <text x="445" y="60">Food (glucose)</text><text x="445" y="78">+ oxygen</text>
    <text x="115" y="170">Food</text><text x="115" y="188">+ oxygen</text>
    <text x="445" y="170">Energy + carbon dioxide</text><text x="445" y="188">+ water</text>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none">
    <line x1="226" y1="63" x2="334" y2="63" marker-end="url(#ar-c6s-9)"/><line x1="226" y1="173" x2="334" y2="173" marker-end="url(#ar-c6s-9)"/>
  </g>
  <g text-anchor="middle" font-size="12"><text x="280" y="54">sunlight</text><text x="280" y="164">uses oxygen</text></g>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)">
    <text x="280" y="228">Breathing organs: lungs (land animals), gills (fish), moist skin (earthworm),</text>
    <text x="280" y="246">spiracles (insects), stomata (leaves of plants)</text>
  </g>
</svg>`,
    },
  ],
  "natures-treasures": [
    {
      title: "Kinds of natural resources",
      caption: "**Renewable** resources are replaced by nature or can be regrown. **Non-renewable** resources take millions of years to form and will run out one day. Coal, petroleum and natural gas are **fossil fuels**.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="195" y="8" width="170" height="34" rx="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="280" y="30" text-anchor="middle" font-weight="bold">Natural resources</text>
  <path d="M280 42 V58 M140 58 H420 M140 58 V72 M420 58 V72" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="30" y="72" width="220" height="50" rx="8"/><rect x="310" y="72" width="220" height="50" rx="8"/></g>
  <g text-anchor="middle"><text x="140" y="94" font-weight="bold">Renewable</text><text x="140" y="112" font-size="12" fill="var(--dg-muted)">replaced by nature</text><text x="420" y="94" font-weight="bold">Non-renewable</text><text x="420" y="112" font-size="12" fill="var(--dg-muted)">will run out one day</text></g>
  <path d="M140 122 V136 M420 122 V136" stroke="currentColor" stroke-width="1.6" fill="none"/>
  <g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="30" y="136" width="220" height="124" rx="8"/><rect x="310" y="136" width="220" height="124" rx="8"/></g>
  <g>
    <text x="48" y="164">Sunlight</text><text x="48" y="188">Wind</text><text x="48" y="212">Water (water cycle)</text><text x="48" y="236">Forests (if used wisely)</text>
    <text x="328" y="164">Coal</text><text x="328" y="188">Petroleum</text><text x="328" y="212">Natural gas</text><text x="328" y="244">Metal ores</text>
  </g>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="2.5"><path d="M426 156 H434 V206 H426"/></g>
  <text x="442" y="186" font-size="12" font-weight="bold">Fossil</text><text x="442" y="202" font-size="12" font-weight="bold">fuels</text>
</svg>`,
    },
    {
      title: "Gases in air",
      caption: "Air is a **mixture of gases**: about **78% nitrogen**, **21% oxygen** and about **1%** other gases. We breathe in oxygen, and plants need carbon dioxide.",
      svg: `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g stroke="currentColor" stroke-width="1.8">
    <rect x="30" y="60" width="390" height="46" fill="none"/><rect x="420" y="60" width="105" height="46" fill="var(--dg-fill)"/><rect x="525" y="60" width="5" height="46" fill="var(--dg-accent)"/>
  </g>
  <g text-anchor="middle" font-weight="bold"><text x="225" y="88">Nitrogen 78%</text><text x="472" y="88">Oxygen 21%</text></g>
  <path d="M527 58 V34 H440" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="436" y="38" text-anchor="end" font-size="12">Argon, carbon dioxide, water vapour (about 1%)</text>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)">
    <text x="225" y="140">Most of the air</text>
    <text x="472" y="140">We breathe it in</text>
  </g>
  <path d="M30 120 V126 H530 V120" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="280" y="170" text-anchor="middle">Total = 100%</text>
</svg>`,
    },
  ],
  "beyond-earth": [
    {
      title: "Planets of the Solar System",
      caption: "The eight planets in order from the Sun: **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**. Asteroids lie mostly between Mars and Jupiter. This is a schematic: sizes and distances are **not to scale**.",
      svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="64" y1="110" x2="552" y2="110" stroke="var(--dg-muted)" stroke-dasharray="4 4"/>
  <circle cx="34" cy="110" r="30" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.8"/>
  <text x="34" y="166" text-anchor="middle" font-size="12" font-weight="bold">Sun</text>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6">
    <circle cx="100" cy="110" r="4"/><circle cx="138" cy="110" r="7"/><circle cx="180" cy="110" r="7.5"/><circle cx="218" cy="110" r="5"/>
    <circle cx="310" cy="110" r="24"/><circle cx="392" cy="110" r="19"/><circle cx="456" cy="110" r="11"/><circle cx="512" cy="110" r="11"/>
  </g>
  <ellipse cx="392" cy="110" rx="32" ry="7" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <g fill="currentColor"><circle cx="246" cy="96" r="1.8"/><circle cx="252" cy="118" r="1.8"/><circle cx="258" cy="104" r="1.8"/><circle cx="264" cy="124" r="1.8"/><circle cx="270" cy="98" r="1.8"/><circle cx="276" cy="114" r="1.8"/><circle cx="256" cy="130" r="1.8"/></g>
  <g text-anchor="middle" font-size="12">
    <text x="100" y="52" font-weight="bold">1 Mercury</text><text x="100" y="68" fill="var(--dg-muted)">nearest, smallest</text>
    <text x="138" y="158" font-weight="bold">2 Venus</text><text x="138" y="174" fill="var(--dg-muted)">hottest</text>
    <text x="180" y="52" font-weight="bold">3 Earth</text><text x="180" y="68" fill="var(--dg-muted)">has life</text>
    <text x="218" y="158" font-weight="bold">4 Mars</text><text x="218" y="174" fill="var(--dg-muted)">red planet</text>
    <text x="262" y="68" fill="var(--dg-muted)">Asteroid belt</text>
    <text x="310" y="158" font-weight="bold">5 Jupiter</text><text x="310" y="174" fill="var(--dg-muted)">largest</text>
    <text x="392" y="68" font-weight="bold">6 Saturn</text><text x="392" y="84" fill="var(--dg-muted)">rings</text>
    <text x="456" y="146" font-weight="bold">7 Uranus</text>
    <text x="512" y="68" font-weight="bold">8 Neptune</text>
  </g>
</svg>`,
    },
    {
      title: "Phases of the Moon",
      caption: "The Moon shines by **reflected sunlight**. As it goes round the Earth we see different amounts of its bright half. The bright part **grows (waxing)** after new moon and **shrinks (waning)** after full moon, a cycle of about **29½ days**.",
      svg: `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="40" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="40" y="148" text-anchor="middle" font-size="12">New moon</text>
  <circle cx="108" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M108 78 A22 22 0 0 1 108 122 A11 22 0 0 0 108 78Z" fill="var(--dg-accent)"/>
  <text x="108" y="148" text-anchor="middle" font-size="12">Waxing</text>
  <text x="108" y="164" text-anchor="middle" font-size="12">crescent</text>
  <circle cx="176" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M176 78 A22 22 0 0 1 176 122Z" fill="var(--dg-accent)"/>
  <text x="176" y="148" text-anchor="middle" font-size="12">First</text>
  <text x="176" y="164" text-anchor="middle" font-size="12">quarter</text>
  <circle cx="244" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M244 78 A22 22 0 0 1 244 122 A11 22 0 0 1 244 78Z" fill="var(--dg-accent)"/>
  <text x="244" y="148" text-anchor="middle" font-size="12">Waxing</text>
  <text x="244" y="164" text-anchor="middle" font-size="12">gibbous</text>
  <circle cx="312" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M290 100 A22 22 0 1 1 334 100 A22 22 0 1 1 290 100Z" fill="var(--dg-accent)"/>
  <text x="312" y="148" text-anchor="middle" font-size="12">Full moon</text>
  <circle cx="380" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M380 78 A22 22 0 0 0 380 122 A11 22 0 0 0 380 78Z" fill="var(--dg-accent)"/>
  <text x="380" y="148" text-anchor="middle" font-size="12">Waning</text>
  <text x="380" y="164" text-anchor="middle" font-size="12">gibbous</text>
  <circle cx="448" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M448 78 A22 22 0 0 0 448 122Z" fill="var(--dg-accent)"/>
  <text x="448" y="148" text-anchor="middle" font-size="12">Last</text>
  <text x="448" y="164" text-anchor="middle" font-size="12">quarter</text>
  <circle cx="516" cy="100" r="22" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M516 78 A22 22 0 0 0 516 122 A11 22 0 0 1 516 78Z" fill="var(--dg-accent)"/>
  <text x="516" y="148" text-anchor="middle" font-size="12">Waning</text>
  <text x="516" y="164" text-anchor="middle" font-size="12">crescent</text>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="2.5"><path d="M18 48 H262"/><path d="M298 48 H542"/></g>
  <g text-anchor="middle" font-weight="bold"><text x="140" y="36">Waxing (bright part grows)</text><text x="420" y="36">Waning (bright part shrinks)</text></g>
  <text x="280" y="196" text-anchor="middle" fill="var(--dg-muted)">One cycle of phases takes about 29½ days</text>
</svg>`,
    },
  ],
});
