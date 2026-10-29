// Class 7 Science diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(7, "science", {
  "the-ever-evolving-world-of-science": [
    {
      title: "The scientific method",
      caption: "Scientists **observe, ask, guess (hypothesis), test, analyse and conclude**. If the results do not support the hypothesis, it is changed and tested again. In a **fair test** only one variable is changed.",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7s-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8">
    <rect x="20" y="20" width="140" height="48" rx="8"/><rect x="210" y="20" width="140" height="48" rx="8"/><rect x="400" y="20" width="140" height="48" rx="8"/>
    <rect x="400" y="130" width="140" height="48" rx="8"/><rect x="210" y="130" width="140" height="48" rx="8"/><rect x="20" y="130" width="140" height="48" rx="8"/>
  </g>
  <g text-anchor="middle">
    <text x="90" y="49">1. Observe</text><text x="280" y="49">2. Ask a question</text><text x="470" y="49">3. Hypothesis</text>
    <text x="470" y="159">4. Experiment</text><text x="280" y="159">5. Analyse results</text><text x="90" y="159">6. Conclusion</text>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none">
    <line x1="162" y1="44" x2="208" y2="44" marker-end="url(#ar-c7s-1)"/>
    <line x1="352" y1="44" x2="398" y2="44" marker-end="url(#ar-c7s-1)"/>
    <line x1="500" y1="70" x2="500" y2="128" marker-end="url(#ar-c7s-1)"/>
    <line x1="398" y1="154" x2="352" y2="154" marker-end="url(#ar-c7s-1)"/>
    <line x1="208" y1="154" x2="162" y2="154" marker-end="url(#ar-c7s-1)"/>
  </g>
  <path d="M300 130 V102 H430 V72" fill="none" stroke="var(--dg-muted)" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#ar-c7s-1)"/>
  <text x="420" y="94" text-anchor="end" font-size="12" fill="var(--dg-muted)">not supported: change, retest</text>
  <text x="280" y="215" text-anchor="middle" fill="var(--dg-muted)">Fair test: change only one variable, keep everything else the same</text>
</svg>`,
    },
  ],
  "exploring-substances-acidic-basic-and-neutral": [
    {
      title: "Indicator colour chart",
      caption: "Natural and laboratory **indicators** change colour in acids and bases. Neutral substances do not change **litmus**. A dash means the colour is not given in the notes.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="10" width="540" height="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none">
    <rect x="10" y="10" width="540" height="270"/>
    <line x1="10" y1="46" x2="550" y2="46"/>
    <line x1="10" y1="82" x2="550" y2="82"/><line x1="10" y1="118" x2="550" y2="118"/><line x1="10" y1="154" x2="550" y2="154"/>
    <line x1="10" y1="190" x2="550" y2="190"/><line x1="10" y1="226" x2="550" y2="226"/><line x1="10" y1="262" x2="550" y2="262"/>
    <line x1="160" y1="10" x2="160" y2="280"/><line x1="310" y1="10" x2="310" y2="280"/><line x1="440" y1="10" x2="440" y2="280"/>
  </g>
  <g font-weight="bold">
    <text x="20" y="33">Indicator</text><text x="235" y="33" text-anchor="middle">In an acid</text><text x="375" y="33" text-anchor="middle">In a base</text><text x="495" y="33" text-anchor="middle">In neutral</text>
  </g>
  <g>
    <text x="20" y="69">Litmus</text><text x="20" y="105">Turmeric</text><text x="20" y="141">China rose</text><text x="20" y="177">Red cabbage juice</text><text x="20" y="213">Phenolphthalein</text><text x="20" y="249">Methyl orange</text>
  </g>
  <g text-anchor="middle">
    <text x="235" y="69">Blue turns red</text><text x="375" y="69">Red turns blue</text><text x="495" y="69">No change</text>
    <text x="235" y="105">Stays yellow</text><text x="375" y="105">Reddish-brown</text><text x="495" y="105">Stays yellow</text>
    <text x="235" y="141">Dark pink</text><text x="375" y="141">Green</text><text x="495" y="141">–</text>
    <text x="235" y="177">Pinkish-red</text><text x="375" y="177">Green</text><text x="495" y="177">–</text>
    <text x="235" y="213">Colourless</text><text x="375" y="213">Pink</text><text x="495" y="213">–</text>
    <text x="235" y="249">Red</text><text x="375" y="249">Yellow</text><text x="495" y="249">–</text>
  </g>
</svg>`,
    },
  ],
  "electricity-circuits-and-their-components": [
    {
      title: "Circuit symbols and a simple circuit",
      caption: "In the **cell** symbol the **long thin line is positive (+)** and the **short thick line is negative (−)**. Current flows from the **+ terminal** round the circuit to the **− terminal** when the switch is closed.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7e-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M20 40 H38 M50 40 H70"/><line x1="38" y1="26" x2="38" y2="54" stroke-width="1.5"/><line x1="50" y1="32" x2="50" y2="48" stroke-width="4.5"/>
    <path d="M20 90 H32 M44 90 H52 M62 90 H82"/><line x1="32" y1="76" x2="32" y2="104" stroke-width="1.5"/><line x1="44" y1="82" x2="44" y2="98" stroke-width="4.5"/><line x1="52" y1="76" x2="52" y2="104" stroke-width="1.5"/><line x1="62" y1="82" x2="62" y2="98" stroke-width="4.5"/>
    <path d="M20 140 H41 M69 140 H90"/><circle cx="55" cy="140" r="14"/><path d="M45 130 L65 150 M65 130 L45 150"/>
    <path d="M20 190 H40 M80 190 H100"/><path d="M40 190 L76 172"/>
    <path d="M20 240 H40 M80 240 H100"/><path d="M40 240 H80"/>
  </g>
  <g><circle cx="40" cy="190" r="3"/><circle cx="80" cy="190" r="3"/><circle cx="40" cy="240" r="3"/><circle cx="80" cy="240" r="3"/></g>
  <g font-size="12"><text x="31" y="21" text-anchor="middle">+</text><text x="51" y="21" text-anchor="middle">−</text></g>
  <g>
    <text x="125" y="44">Cell</text><text x="125" y="94">Battery (2 cells)</text><text x="125" y="144">Bulb</text><text x="125" y="194">Switch (open, OFF)</text><text x="125" y="244">Switch (closed, ON)</text>
  </g>
  <line x1="248" y1="20" x2="248" y2="250" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M300 55 H370 M430 55 H500 V114 M500 146 V200 H300 V128 M300 107 V55"/>
    <line x1="290" y1="107" x2="310" y2="107" stroke-width="1.5"/><line x1="294" y1="120" x2="306" y2="120" stroke-width="4.5"/>
    <path d="M300 120 V128"/>
    <circle cx="500" cy="130" r="16"/><path d="M489 119 L511 141 M511 119 L489 141"/>
    <path d="M370 55 H430"/>
  </g>
  <circle cx="370" cy="55" r="3"/><circle cx="430" cy="55" r="3"/>
  <g stroke="var(--dg-accent)" stroke-width="3">
    <line x1="318" y1="55" x2="346" y2="55" marker-end="url(#ar-c7e-1)"/>
    <line x1="500" y1="68" x2="500" y2="92" marker-end="url(#ar-c7e-1)"/>
    <line x1="440" y1="200" x2="412" y2="200" marker-end="url(#ar-c7e-1)"/>
    <line x1="300" y1="178" x2="300" y2="154" marker-end="url(#ar-c7e-1)"/>
  </g>
  <g>
    <text x="284" y="119" text-anchor="end">Cell</text>
    <text x="322" y="111" font-size="12">+</text><text x="322" y="129" font-size="12">−</text>
    <text x="400" y="36" text-anchor="middle">Switch (ON)</text>
    <text x="522" y="135">Bulb</text>
    <text x="400" y="232" text-anchor="middle" fill="var(--dg-muted)">Current: + terminal → bulb → − terminal</text>
  </g>
</svg>`,
    },
    {
      title: "Bulbs in series and in parallel",
      caption: "In **series** there is a single path, so if one bulb fuses all go off. In **parallel** each bulb has its own path, so the other keeps glowing. Home wiring is parallel.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="150" y="22" text-anchor="middle" font-weight="bold">Series</text>
  <text x="420" y="22" text-anchor="middle" font-weight="bold">Parallel</text>
  <line x1="276" y1="12" x2="276" y2="252" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M60 70 H106 M134 70 H171 M199 70 H250 V200 H60 V138 M60 117 V70"/>
    <circle cx="120" cy="70" r="14"/><path d="M110 60 L130 80 M130 60 L110 80"/>
    <circle cx="185" cy="70" r="14"/><path d="M175 60 L195 80 M195 60 L175 80"/>
    <line x1="46" y1="117" x2="74" y2="117" stroke-width="1.5"/><line x1="52" y1="130" x2="68" y2="130" stroke-width="4.5"/><path d="M60 130 V138"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M340 70 H500 M500 200 H340 V138 M340 117 V70"/>
    <line x1="326" y1="117" x2="354" y2="117" stroke-width="1.5"/><line x1="332" y1="130" x2="348" y2="130" stroke-width="4.5"/><path d="M340 130 V138"/>
    <path d="M410 70 V106 M410 134 V200"/><circle cx="410" cy="120" r="14"/><path d="M400 110 L420 130 M420 110 L400 130"/>
    <path d="M490 70 V106 M490 134 V200"/><circle cx="490" cy="120" r="14"/><path d="M480 110 L500 130 M500 110 L480 130"/>
  </g>
  <g><circle cx="410" cy="70" r="3"/><circle cx="490" cy="70" r="3"/><circle cx="410" cy="200" r="3"/><circle cx="490" cy="200" r="3"/></g>
  <g>
    <text x="120" y="46" text-anchor="middle" font-size="12">Bulb 1</text><text x="185" y="46" text-anchor="middle" font-size="12">Bulb 2</text>
    <text x="40" y="128" text-anchor="end">Cell</text>
    <text x="320" y="128" text-anchor="end">Cell</text>
    <text x="390" y="124" text-anchor="end" font-size="12">Bulb 1</text><text x="470" y="124" text-anchor="end" font-size="12">Bulb 2</text>
  </g>
  <g text-anchor="middle" fill="var(--dg-muted)" font-size="12">
    <text x="150" y="228">One path: if one bulb fuses,</text><text x="150" y="246">both bulbs go off.</text>
    <text x="420" y="228">Separate paths: if one bulb fuses,</text><text x="420" y="246">the other keeps glowing.</text>
  </g>
</svg>`,
    },
  ],
  "the-world-of-metals-and-non-metals": [
    {
      title: "Metals and non-metals compared",
      caption: "**Metals** are lustrous, malleable, ductile, sonorous and good conductors, and form **basic oxides**. **Non-metals** are usually dull and brittle, poor conductors, and form **acidic oxides**.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="10" width="540" height="34" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="10" y="10" width="540" height="290"/>
  <line x1="10" y1="44" x2="550" y2="44"/>
  <line x1="10" y1="76" x2="550" y2="76"/>
  <line x1="10" y1="108" x2="550" y2="108"/>
  <line x1="10" y1="140" x2="550" y2="140"/>
  <line x1="10" y1="172" x2="550" y2="172"/>
  <line x1="10" y1="204" x2="550" y2="204"/>
  <line x1="10" y1="236" x2="550" y2="236"/>
  <line x1="10" y1="268" x2="550" y2="268"/>
  <line x1="140" y1="10" x2="140" y2="300"/>
  <line x1="345" y1="10" x2="345" y2="300"/>
  </g>
  <text x="20" y="32" font-weight="bold">Property</text>
  <text x="150" y="32" font-weight="bold">Metals</text>
  <text x="355" y="32" font-weight="bold">Non-metals</text>
  <text x="20" y="62" font-weight="bold">Appearance</text>
  <text x="150" y="62">Lustrous (shiny)</text>
  <text x="355" y="62">Dull (iodine is shiny)</text>
  <text x="20" y="94" font-weight="bold">Hammering</text>
  <text x="150" y="94">Malleable and ductile</text>
  <text x="355" y="94">Brittle</text>
  <text x="20" y="126" font-weight="bold">Conduction</text>
  <text x="150" y="126">Good conductors</text>
  <text x="355" y="126">Poor conductors</text>
  <text x="20" y="158" font-weight="bold">Sound</text>
  <text x="150" y="158">Sonorous (ringing)</text>
  <text x="355" y="158">Not sonorous</text>
  <text x="20" y="190" font-weight="bold">Oxide formed</text>
  <text x="150" y="190">Basic oxides</text>
  <text x="355" y="190">Acidic oxides</text>
  <text x="20" y="222" font-weight="bold">With dilute acid</text>
  <text x="150" y="222">Salt + hydrogen gas</text>
  <text x="355" y="222">Generally no reaction</text>
  <text x="20" y="254" font-weight="bold">State</text>
  <text x="150" y="254">Solid (mercury is liquid)</text>
  <text x="355" y="254">Gases, solids, one liquid</text>
  <text x="20" y="286" font-weight="bold">Exceptions</text>
  <text x="150" y="286">Na, K soft; Hg liquid</text>
  <text x="355" y="286">Graphite conducts</text>
</svg>`,
    },
  ],
  "changes-around-us-physical-and-chemical": [
    {
      title: "Physical and chemical changes",
      caption: "A **physical change** forms **no new substance**. A **chemical change** forms one or more new substances and is mostly irreversible. Always ask whether a new substance has formed.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="10" width="540" height="34" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="10" y="10" width="540" height="270"/>
  <line x1="10" y1="44" x2="550" y2="44"/>
  <line x1="10" y1="76" x2="550" y2="76"/>
  <line x1="10" y1="108" x2="550" y2="108"/>
  <line x1="10" y1="212" x2="550" y2="212"/>
  <line x1="140" y1="10" x2="140" y2="280"/>
  <line x1="340" y1="10" x2="340" y2="280"/>
  </g>
  <text x="20" y="32" font-weight="bold"></text>
  <text x="150" y="32" font-weight="bold">Physical change</text>
  <text x="350" y="32" font-weight="bold">Chemical change</text>
  <text x="20" y="62" font-weight="bold">New substance?</text>
  <text x="150" y="62">No</text>
  <text x="350" y="62">Yes</text>
  <text x="20" y="94" font-weight="bold">Reversible?</text>
  <text x="150" y="94">Often yes</text>
  <text x="350" y="94">Mostly irreversible</text>
  <text x="20" y="126" font-weight="bold">Examples</text>
  <text x="150" y="126">Melting of ice</text>
  <text x="150" y="144">Boiling of water</text>
  <text x="150" y="162">Dissolving sugar</text>
  <text x="150" y="180">Tearing paper</text>
  <text x="150" y="198">Camphor to vapour</text>
  <text x="350" y="126">Burning wood or LPG</text>
  <text x="350" y="144">Rusting of iron</text>
  <text x="350" y="162">Milk turning to curd</text>
  <text x="350" y="180">Cooking and baking</text>
  <text x="350" y="198">Ripening of fruit</text>
  <text x="20" y="230" font-weight="bold">Signs</text>
  <text x="150" y="230">Only shape, size</text>
  <text x="150" y="248">or state changes</text>
  <text x="350" y="230">Heat or light, gas bubbles,</text>
  <text x="350" y="248">colour change, new smell,</text>
  <text x="350" y="266">sound or a new solid</text>
</svg>`,
    },
  ],
  "adolescence-a-stage-of-growth-and-change": [
    {
      title: "How the sex of a baby is decided",
      caption: "Every egg carries an **X** chromosome, but a sperm carries **X or Y**. **X sperm + egg gives a girl (XX)**; **Y sperm + egg gives a boy (XY)**.",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="330" y="24" text-anchor="middle" font-weight="bold">Mother (XX): every egg carries X</text>
  <text x="280" y="62" text-anchor="middle">Egg (X)</text><text x="380" y="62" text-anchor="middle">Egg (X)</text>
  <rect x="230" y="72" width="200" height="160" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.8"><line x1="330" y1="72" x2="330" y2="232"/><line x1="230" y1="152" x2="430" y2="152"/></g>
  <g text-anchor="middle">
    <text x="280" y="110" font-size="20" font-weight="bold">XX</text><text x="280" y="134">Girl</text>
    <text x="380" y="110" font-size="20" font-weight="bold">XX</text><text x="380" y="134">Girl</text>
    <text x="280" y="190" font-size="20" font-weight="bold">XY</text><text x="280" y="214">Boy</text>
    <text x="380" y="190" font-size="20" font-weight="bold">XY</text><text x="380" y="214">Boy</text>
  </g>
  <text x="218" y="116" text-anchor="end">Sperm (X)</text><text x="218" y="196" text-anchor="end">Sperm (Y)</text>
  <text x="105" y="140" text-anchor="middle" font-weight="bold">Father (XY)</text>
  <text x="105" y="158" text-anchor="middle" font-size="12" fill="var(--dg-muted)">sperm carries X or Y</text>
  <text x="330" y="266" text-anchor="middle" fill="var(--dg-muted)">The father's sperm decides the sex of the baby</text>
</svg>`,
    },
    {
      title: "Hormones and the glands that make them",
      caption: "**Hormones** are chemical messengers made by **endocrine (ductless) glands** and poured directly into the blood. They control the changes of puberty.",
      svg: `<svg viewBox="0 0 560 246" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="10" width="550" height="34" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="10" y="10" width="550" height="226"/>
  <line x1="10" y1="44" x2="560" y2="44"/>
  <line x1="10" y1="76" x2="560" y2="76"/>
  <line x1="10" y1="108" x2="560" y2="108"/>
  <line x1="10" y1="140" x2="560" y2="140"/>
  <line x1="10" y1="172" x2="560" y2="172"/>
  <line x1="10" y1="204" x2="560" y2="204"/>
  <line x1="110" y1="10" x2="110" y2="236"/>
  <line x1="240" y1="10" x2="240" y2="236"/>
  </g>
  <text x="20" y="32" font-weight="bold">Gland</text>
  <text x="120" y="32" font-weight="bold">Hormone</text>
  <text x="250" y="32" font-weight="bold">What it does</text>
  <text x="20" y="62" font-weight="bold">Pituitary</text>
  <text x="120" y="62">Growth hormone</text>
  <text x="250" y="62">Master gland; controls other glands</text>
  <text x="20" y="94" font-weight="bold">Thyroid</text>
  <text x="120" y="94">Thyroxine</text>
  <text x="250" y="94">Needs iodine; lack causes goitre</text>
  <text x="20" y="126" font-weight="bold">Pancreas</text>
  <text x="120" y="126">Insulin</text>
  <text x="250" y="126">Controls blood sugar; lack causes diabetes</text>
  <text x="20" y="158" font-weight="bold">Adrenal</text>
  <text x="120" y="158">Adrenaline</text>
  <text x="250" y="158">Prepares the body for emergencies</text>
  <text x="20" y="190" font-weight="bold">Testes</text>
  <text x="120" y="190">Testosterone</text>
  <text x="250" y="190">Puberty changes in boys</text>
  <text x="20" y="222" font-weight="bold">Ovaries</text>
  <text x="120" y="222">Oestrogen</text>
  <text x="250" y="222">Puberty changes in girls</text>
</svg>`,
    },
  ],
  "heat-transfer-in-nature": [
    {
      title: "Conduction, convection and radiation",
      caption: "**Conduction** passes heat through a solid. **Convection** moves heat in liquids and gases as the hot fluid rises. **Radiation** needs no medium, as with heat from the Sun to the Earth.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7h-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3"><line x1="187" y1="10" x2="187" y2="240"/><line x1="373" y1="10" x2="373" y2="240"/></g>
  <g font-weight="bold" text-anchor="middle"><text x="98" y="22">Conduction (solid)</text><text x="280" y="22">Convection (fluid)</text><text x="462" y="22">Radiation</text></g>
  <rect x="30" y="110" width="135" height="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M37 160 Q27 148 37 134 Q40 146 47 150 Q49 156 37 160Z" fill="var(--dg-accent)" opacity="0.7" stroke="currentColor"/>
  <line x1="50" y1="98" x2="150" y2="98" stroke="var(--dg-accent)" stroke-width="3" marker-end="url(#ar-c7h-1)"/>
  <text x="100" y="84" text-anchor="middle" font-size="12">Heat flows along</text>
  <text x="37" y="180" text-anchor="middle">Flame</text><text x="165" y="150" text-anchor="end" font-size="12">Cold end</text>
  <rect x="205" y="66" width="150" height="104" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M280 200 Q268 186 280 172 Q284 184 292 188 Q294 196 280 200Z" fill="var(--dg-accent)" opacity="0.7" stroke="currentColor"/>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none">
    <line x1="280" y1="150" x2="280" y2="98" marker-end="url(#ar-c7h-1)"/>
    <path d="M288 88 H318 Q336 88 336 106 V146" marker-end="url(#ar-c7h-1)"/>
    <path d="M272 88 H242 Q224 88 224 106 V146" marker-end="url(#ar-c7h-1)"/>
  </g>
  <text x="280" y="58" text-anchor="middle">Pan of water</text>
  <g stroke="currentColor" stroke-width="1.5"><circle cx="462" cy="62" r="14" fill="var(--dg-fill)"/>
    <line x1="462" y1="40" x2="462" y2="34"/><line x1="484" y1="62" x2="490" y2="62"/><line x1="440" y1="62" x2="434" y2="62"/><line x1="446" y1="46" x2="442" y2="42"/><line x1="478" y1="46" x2="482" y2="42"/><line x1="446" y1="78" x2="442" y2="82"/><line x1="478" y1="78" x2="482" y2="82"/></g>
  <circle cx="462" cy="170" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="var(--dg-accent)" stroke-width="2.5"><line x1="444" y1="86" x2="444" y2="146" marker-end="url(#ar-c7h-1)"/><line x1="462" y1="86" x2="462" y2="146" marker-end="url(#ar-c7h-1)"/><line x1="480" y1="86" x2="480" y2="146" marker-end="url(#ar-c7h-1)"/></g>
  <text x="500" y="66">Sun</text><text x="486" y="196" text-anchor="start">Earth</text>
  <text x="408" y="116" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Empty</text><text x="408" y="130" text-anchor="middle" font-size="12" fill="var(--dg-muted)">space</text>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)">
    <text x="98" y="222">Heat passes from particle</text><text x="98" y="238">to particle in a solid</text>
    <text x="280" y="222">Hot fluid rises, cool</text><text x="280" y="238">heavier fluid sinks</text>
    <text x="462" y="222">Heat travels without</text><text x="462" y="238">any medium</text>
  </g>
</svg>`,
    },
    {
      title: "Sea breeze and land breeze",
      caption: "By day the land is warmer, so air rises over it and the **sea breeze blows from sea to land**. At night the sea is warmer and the **land breeze blows from land to sea**.",
      svg: `<svg viewBox="0 0 560 262" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7h-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g><text x="140" y="22" text-anchor="middle" font-weight="bold">Day: sea breeze</text>
    <rect x="10" y="170" width="130" height="45" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
    <rect x="140" y="170" width="130" height="45" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M10 170 q8 -7 16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="75" y="198" text-anchor="middle">Sea (cooler)</text><text x="205" y="198" text-anchor="middle">Land (warmer)</text>
    <path d="M45 150 H225 V50 H45 V150" fill="none" stroke="var(--dg-accent)" stroke-width="2.5"/>
    <g stroke="var(--dg-accent)" stroke-width="2.5"><line x1="110" y1="150" x2="140" y2="150" marker-end="url(#ar-c7h-2)"/><line x1="225" y1="108" x2="225" y2="92" marker-end="url(#ar-c7h-2)"/><line x1="140" y1="50" x2="110" y2="50" marker-end="url(#ar-c7h-2)"/><line x1="45" y1="92" x2="45" y2="108" marker-end="url(#ar-c7h-2)"/></g>
    <text x="135" y="104" text-anchor="middle">Sea breeze: sea to land</text>
    <g text-anchor="middle" font-size="12" fill="var(--dg-muted)"><text x="140" y="236">Warm air rises over the land</text><text x="140" y="252">(land heats faster)</text></g></g>
  <g transform="translate(280 0)"><text x="140" y="22" text-anchor="middle" font-weight="bold">Night: land breeze</text>
    <rect x="10" y="170" width="130" height="45" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
    <rect x="140" y="170" width="130" height="45" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M10 170 q8 -7 16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0 t16.25 0" fill="none" stroke="currentColor" stroke-width="1.2"/>
    <text x="75" y="198" text-anchor="middle">Sea (warmer)</text><text x="205" y="198" text-anchor="middle">Land (cooler)</text>
    <path d="M45 150 H225 V50 H45 V150" fill="none" stroke="var(--dg-accent)" stroke-width="2.5"/>
    <g stroke="var(--dg-accent)" stroke-width="2.5"><line x1="140" y1="150" x2="110" y2="150" marker-end="url(#ar-c7h-2)"/><line x1="45" y1="108" x2="45" y2="92" marker-end="url(#ar-c7h-2)"/><line x1="110" y1="50" x2="140" y2="50" marker-end="url(#ar-c7h-2)"/><line x1="225" y1="92" x2="225" y2="108" marker-end="url(#ar-c7h-2)"/></g>
    <text x="135" y="104" text-anchor="middle">Land breeze: land to sea</text>
    <g text-anchor="middle" font-size="12" fill="var(--dg-muted)"><text x="140" y="236">Warm air rises over the sea</text><text x="140" y="252">(land cools faster)</text></g></g>
</svg>`,
    },
  ],
  "measurement-of-time-and-motion": [
    {
      title: "A simple pendulum",
      caption: "A **bob** hangs by a thread from a rigid support. One **oscillation** is the swing from O to A, back through O to B, and back to O. A longer thread gives a longer time period.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g stroke="currentColor" stroke-width="1.2"><line x1="150" y1="40" x2="142" y2="28"/><line x1="160" y1="40" x2="152" y2="28"/><line x1="170" y1="40" x2="162" y2="28"/><line x1="180" y1="40" x2="172" y2="28"/><line x1="190" y1="40" x2="182" y2="28"/><line x1="200" y1="40" x2="192" y2="28"/><line x1="210" y1="40" x2="202" y2="28"/><line x1="220" y1="40" x2="212" y2="28"/><line x1="230" y1="40" x2="222" y2="28"/><line x1="240" y1="40" x2="232" y2="28"/><line x1="250" y1="40" x2="242" y2="28"/></g>
  <line x1="150" y1="40" x2="250" y2="40" stroke="currentColor" stroke-width="3"/>
  <g stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3" fill="none">
    <line x1="200" y1="40" x2="128.2" y2="194.1"/><line x1="200" y1="40" x2="271.8" y2="194.1"/>
  </g>
  <path d="M128.2 194.1 A170 170 0 0 0 271.8 194.1" fill="none" stroke="var(--dg-muted)" stroke-dasharray="2 4"/>
  <line x1="200" y1="40" x2="200" y2="210" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="128.2" cy="194.1" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/><circle cx="271.8" cy="194.1" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/><circle cx="200.0" cy="210.0" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g>
    <text x="260" y="34">Rigid support</text>
    <text x="192" y="175" text-anchor="end">Thread</text>
    <text x="110.2" y="198.1" text-anchor="end">A</text><text x="289.8" y="198.1">B</text>
    <text x="200" y="244" text-anchor="middle">Bob at mean position (O)</text>
  </g>
  <g fill="var(--dg-muted)" font-size="12">
    <text x="360" y="92" fill="currentColor" font-size="13" font-weight="bold">One oscillation</text>
    <text x="360" y="114">O → A → O → B → O</text>
    <text x="360" y="140" fill="currentColor" font-size="13" font-weight="bold">Time period</text>
    <text x="360" y="162">time for one oscillation</text>
    <text x="360" y="184">= total time ÷ oscillations</text>
    <text x="360" y="214">A, B: extreme positions</text>
  </g>
</svg>`,
    },
    {
      title: "Distance–time graph",
      caption: "A **straight sloping line** means uniform speed and a **steeper line** means higher speed. A line **parallel to the time axis** means the object is at rest.",
      svg: `<svg viewBox="0 0 560 275" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7t-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="var(--dg-muted)" stroke-dasharray="3 4" stroke-width="1"><line x1="70" y1="175" x2="395" y2="175"/><line x1="70" y1="130" x2="395" y2="130"/><line x1="70" y1="85" x2="395" y2="85"/><line x1="70" y1="40" x2="395" y2="40"/></g>
  <g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="70" y1="220" x2="480" y2="220" marker-end="url(#ar-c7t-1)"/><line x1="70" y1="220" x2="70" y2="12" marker-end="url(#ar-c7t-1)"/></g>
  <text x="62" y="224" text-anchor="end" font-size="12">0</text><text x="62" y="179" text-anchor="end" font-size="12">100</text><text x="62" y="134" text-anchor="end" font-size="12">200</text><text x="62" y="89" text-anchor="end" font-size="12">300</text><text x="62" y="44" text-anchor="end" font-size="12">400</text><text x="70" y="238" text-anchor="middle" font-size="12">0</text><text x="150" y="238" text-anchor="middle" font-size="12">1</text><text x="230" y="238" text-anchor="middle" font-size="12">2</text><text x="310" y="238" text-anchor="middle" font-size="12">3</text><text x="390" y="238" text-anchor="middle" font-size="12">4</text>
  <g stroke="var(--dg-accent)" stroke-width="3" fill="none">
    <line x1="70" y1="220" x2="390" y2="40"/>
    <line x1="70" y1="220" x2="390" y2="130"/>
    <line x1="70" y1="85" x2="390" y2="85"/>
  </g>
  <g><text x="400" y="44">B: faster</text><text x="400" y="89">C: at rest</text><text x="400" y="134">A: slower</text></g>
  <text x="270" y="262" text-anchor="middle">Time (min)</text>
  <text x="22" y="120" text-anchor="middle" transform="rotate(-90 22 120)">Distance (m)</text>
</svg>`,
    },
  ],
  "life-processes-in-animals": [
    {
      title: "Human digestive system",
      caption: "Food passes from the **mouth** through the **food pipe** to the **stomach** and **small intestine** (where digestion is completed and food is absorbed), then to the **large intestine** (which absorbs water), the **rectum** and the **anus**. The **liver** makes bile and the **pancreas** makes pancreatic juice.",
      svg: `<svg viewBox="0 0 560 365" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs>
    <path id="c7d-si" d="M250 222 V245 H212 A13.5 13.5 0 0 0 212 272 H300 A13.5 13.5 0 0 1 300 299 H212 H182"/>
    <path id="c7d-li" d="M178 322 V215 H335 V322"/>
    <path id="c7d-re" d="M335 322 Q335 338 300 338 H268"/>
    <path id="c7d-oe" d="M240 52 V118"/>
    <path id="c7d-co" d="M250 176 V222"/>
  </defs>
  <ellipse cx="240" cy="32" rx="36" ry="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M222 36 Q240 46 258 36" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <use href="#c7d-oe" stroke="currentColor" stroke-width="11" fill="none"/><use href="#c7d-oe" stroke="var(--dg-fill)" stroke-width="8" fill="none"/>
  <ellipse cx="335" cy="140" rx="52" ry="26" transform="rotate(-10 335 140)" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <ellipse cx="297" cy="193" rx="30" ry="8" transform="rotate(-8 297 193)" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="240" cy="150" rx="46" ry="28" transform="rotate(20 240 150)" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <use href="#c7d-li" stroke="currentColor" stroke-width="14" fill="none"/><use href="#c7d-li" stroke="var(--dg-fill)" stroke-width="11" fill="none"/>
  <use href="#c7d-re" stroke="currentColor" stroke-width="12" fill="none"/><use href="#c7d-re" stroke="var(--dg-fill)" stroke-width="9" fill="none"/>
  <use href="#c7d-co" stroke="currentColor" stroke-width="11" fill="none"/><use href="#c7d-co" stroke="var(--dg-fill)" stroke-width="8" fill="none"/>
  <use href="#c7d-si" stroke="currentColor" stroke-width="12" fill="none"/><use href="#c7d-si" stroke="var(--dg-fill)" stroke-width="9" fill="none"/>
  <circle cx="262" cy="338" r="5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1" fill="none">
    <line x1="164" y1="32" x2="204" y2="32"/><line x1="164" y1="85" x2="231" y2="85"/><line x1="164" y1="150" x2="198" y2="150"/><line x1="164" y1="258" x2="172" y2="258"/>
    <line x1="396" y1="136" x2="410" y2="136"/><line x1="334" y1="190" x2="380" y2="190"/><line x1="312" y1="272" x2="380" y2="272"/><line x1="342" y1="328" x2="380" y2="328"/>
  </g>
  <g>
    <text x="160" y="36" text-anchor="end">Mouth</text><text x="160" y="89" text-anchor="end">Food pipe</text><text x="160" y="154" text-anchor="end">Stomach</text><text x="160" y="262" text-anchor="end">Large intestine</text>
    <text x="414" y="140">Liver</text><text x="384" y="194">Pancreas</text><text x="384" y="276">Small intestine</text><text x="384" y="332">Rectum</text>
    <text x="262" y="360" text-anchor="middle">Anus</text>
  </g>
</svg>`,
    },
    {
      title: "Human respiratory system",
      caption: "Air enters through the **nose**, passes down the **windpipe** and **bronchi** into the **lungs**, where oxygen enters the blood and carbon dioxide leaves it. The **diaphragm** below the lungs moves as we breathe.",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="170" cy="40" rx="14" ry="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <rect x="164" y="52" width="12" height="98" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1"><line x1="164" y1="74" x2="176" y2="74"/><line x1="164" y1="84" x2="176" y2="84"/><line x1="164" y1="94" x2="176" y2="94"/><line x1="164" y1="104" x2="176" y2="104"/><line x1="164" y1="114" x2="176" y2="114"/><line x1="164" y1="124" x2="176" y2="124"/><line x1="164" y1="134" x2="176" y2="134"/><line x1="164" y1="144" x2="176" y2="144"/></g>
  <ellipse cx="120" cy="205" rx="48" ry="70" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <ellipse cx="220" cy="205" rx="48" ry="70" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g fill="none" stroke="currentColor" stroke-width="3"><path d="M170 150 L125 185 M170 150 L215 185"/></g>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M125 185 L98 215 M125 185 L130 240 M125 185 L105 250 M215 185 L242 215 M215 185 L210 240 M215 185 L235 250"/>
  </g>
  <path d="M62 292 Q170 262 278 292" fill="none" stroke="currentColor" stroke-width="3.5"/>
  <g stroke="currentColor" stroke-width="1" fill="none">
    <line x1="184" y1="40" x2="300" y2="40"/><line x1="178" y1="100" x2="300" y2="100"/><line x1="192" y1="167" x2="300" y2="167"/><line x1="266" y1="225" x2="300" y2="225"/><line x1="280" y1="292" x2="300" y2="292"/>
  </g>
  <g>
    <text x="306" y="44">Nose</text><text x="306" y="104">Windpipe</text><text x="306" y="171">Bronchus</text><text x="306" y="229">Lung</text><text x="306" y="296">Diaphragm</text>
  </g>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)">
    <text x="280" y="322">Inhaling: ribs move up and out, diaphragm moves down.</text>
    <text x="280" y="338">Exhaling: ribs move down and in, diaphragm moves up.</text>
  </g>
</svg>`,
    },
  ],
  "life-processes-in-plants": [
    {
      title: "Photosynthesis in a leaf",
      caption: "The leaf takes in **carbon dioxide** through its **stomata**, and **water** comes from the soil. Using **sunlight** and **chlorophyll** it makes **glucose** (stored as starch) and releases **oxygen**.",
      svg: `<svg viewBox="0 0 560 322" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7p-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M170 150 Q280 40 390 150 Q280 260 170 150Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <line x1="170" y1="150" x2="390" y2="150" stroke="currentColor" stroke-width="1.2"/>
  <g stroke="currentColor" stroke-width="1.5"><circle cx="60" cy="52" r="16" fill="var(--dg-fill)"/><line x1="60" y1="26" x2="60" y2="20"/><line x1="86" y1="52" x2="92" y2="52"/><line x1="34" y1="52" x2="28" y2="52"/><line x1="42" y1="34" x2="38" y2="30"/><line x1="78" y1="34" x2="82" y2="30"/><line x1="42" y1="70" x2="38" y2="74"/><line x1="78" y1="70" x2="86" y2="76"/></g>
  <g stroke="var(--dg-accent)" stroke-width="2.5"><line x1="88" y1="70" x2="200" y2="124" marker-end="url(#ar-c7p-1)"/><line x1="96" y1="54" x2="226" y2="100" marker-end="url(#ar-c7p-1)"/><line x1="76" y1="78" x2="180" y2="140" marker-end="url(#ar-c7p-1)"/></g>
  <text x="110" y="28">Sunlight</text>
  <g stroke="var(--dg-accent)" stroke-width="2.5"><line x1="30" y1="176" x2="200" y2="176" marker-end="url(#ar-c7p-1)"/><line x1="360" y1="176" x2="530" y2="176" marker-end="url(#ar-c7p-1)"/><line x1="280" y1="296" x2="280" y2="214" marker-end="url(#ar-c7p-1)"/><line x1="332" y1="212" x2="392" y2="256" marker-end="url(#ar-c7p-1)"/></g>
  <g>
    <text x="30" y="198">Carbon dioxide</text><text x="30" y="214" font-size="12" fill="var(--dg-muted)">(through stomata)</text>
    <text x="530" y="198" text-anchor="end">Oxygen released</text>
    <text x="270" y="262" text-anchor="end">Water from the soil</text>
    <text x="400" y="268">Glucose, stored</text><text x="400" y="284">as starch</text>
    <text x="280" y="122" text-anchor="middle">Chloroplasts with</text><text x="280" y="138" text-anchor="middle">chlorophyll</text>
    <text x="280" y="172" text-anchor="middle" font-size="12">Stomata (pores)</text>
  </g>
  <text x="280" y="316" text-anchor="middle" font-size="12" fill="var(--dg-muted)">carbon dioxide + water → glucose + oxygen (sunlight, chlorophyll)</text>
</svg>`,
    },
    {
      title: "Transport of water and food in a plant",
      caption: "Roots absorb water and minerals through **root hairs**. **Xylem** carries them up to the leaves; **phloem** carries food made in the leaves to all parts. Water vapour is lost from leaves by **transpiration**.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7p-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M266 94 Q205 54 150 88 Q205 122 266 94Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M294 134 Q355 94 410 128 Q355 162 294 134Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <rect x="266" y="64" width="12" height="150" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="282" y="64" width="12" height="150" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="var(--dg-accent)" stroke-width="2.5"><line x1="272" y1="200" x2="272" y2="80" marker-end="url(#ar-c7p-2)"/><line x1="288" y1="80" x2="288" y2="200" marker-end="url(#ar-c7p-2)"/><line x1="185" y1="76" x2="185" y2="44" marker-end="url(#ar-c7p-2)"/></g>
  <line x1="40" y1="214" x2="520" y2="214" stroke="var(--dg-muted)" stroke-dasharray="5 3"/>
  <g stroke="currentColor" stroke-width="1.6" fill="none">
    <path d="M272 214 V250 M272 232 L236 262 M272 244 L250 286 M272 240 L308 270"/>
    <path d="M272 250 V294"/>
  </g>
  <g stroke="currentColor" stroke-width="1"><path d="M243 255 l-8 -3 M258 262 l-9 2 M247 272 l-9 0 M254 282 l-8 4 M290 256 l8 -2 M297 262 l8 1 M262 280 l7 -4 M272 288 l-7 4"/></g>
  <g stroke="currentColor" stroke-width="1" fill="none">
    <line x1="232" y1="160" x2="266" y2="160"/><line x1="294" y1="160" x2="328" y2="160"/><line x1="412" y1="128" x2="440" y2="128"/><line x1="225" y1="268" x2="190" y2="268"/><line x1="278" y1="290" x2="340" y2="290"/>
  </g>
  <g>
    <text x="228" y="164" text-anchor="end">Xylem: water and</text><text x="228" y="180" text-anchor="end">minerals go up</text>
    <text x="332" y="164">Phloem: food goes</text><text x="332" y="180">to all parts</text>
    <text x="444" y="132">Leaf</text>
    <text x="186" y="272" text-anchor="end">Root hairs</text>
    <text x="344" y="294">Roots absorb water</text>
    <text x="196" y="16" text-anchor="middle" font-size="12">Water vapour lost</text><text x="196" y="30" text-anchor="middle" font-size="12">(transpiration)</text>
    <text x="520" y="208" text-anchor="end" font-size="12" fill="var(--dg-muted)">Soil level</text>
  </g>
</svg>`,
    },
  ],
  "light-shadows-and-reflections": [
    {
      title: "Pinhole camera",
      caption: "Light from each point of the object travels in a **straight line** through the **pinhole**, so the image on the translucent screen is **inverted** (upside down). A smaller hole gives a sharper but dimmer image.",
      svg: `<svg viewBox="0 0 560 262" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="300" y="60" width="180" height="160" fill="var(--dg-fill)" opacity="0.5"/>
  <g stroke="currentColor" stroke-width="3.5" fill="none"><path d="M300 60 V134 M300 146 V220 M300 60 H480 M300 220 H480"/></g>
  <line x1="480" y1="60" x2="480" y2="220" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/>
  <g stroke="var(--dg-accent)" stroke-width="2"><line x1="80" y1="80" x2="472" y2="188"/><line x1="80" y1="200" x2="472" y2="92"/></g>
  <g stroke="currentColor" stroke-width="3" fill="none"><line x1="80" y1="200" x2="80" y2="84"/><path d="M73 96 L80 80 L87 96Z" fill="currentColor"/><line x1="472" y1="92" x2="472" y2="186"/><path d="M465 174 L472 190 L479 174Z" fill="currentColor"/></g>
  <circle cx="300" cy="140" r="2.5" fill="var(--dg-accent)"/>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="262" y1="44" x2="298" y2="134"/><line x1="490" y1="190" x2="478" y2="190"/></g>
  <g>
    <text x="80" y="226" text-anchor="middle">Object</text>
    <text x="258" y="38" text-anchor="end">Pinhole</text>
    <text x="394" y="50" text-anchor="middle">Box</text>
    <text x="488" y="106" font-size="12">Translucent</text><text x="488" y="121" font-size="12">screen</text>
    <text x="490" y="190" font-size="12">Inverted</text><text x="490" y="205" font-size="12">image</text>
  </g>
  <text x="280" y="252" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Light travels in straight lines, so the image is upside down</text>
</svg>`,
    },
    {
      title: "Reflection of light at a plane mirror",
      caption: "The **angle of incidence equals the angle of reflection**, both measured from the **normal**. The incident ray, the reflected ray and the normal lie in the same plane.",
      svg: `<svg viewBox="0 0 560 262" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7l-1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="130" y1="190" x2="430" y2="190" stroke="currentColor" stroke-width="3.5"/>
  <g stroke="currentColor" stroke-width="1.2"><line x1="140" y1="192" x2="132" y2="204"/><line x1="152" y1="192" x2="144" y2="204"/><line x1="164" y1="192" x2="156" y2="204"/><line x1="176" y1="192" x2="168" y2="204"/><line x1="188" y1="192" x2="180" y2="204"/><line x1="200" y1="192" x2="192" y2="204"/><line x1="212" y1="192" x2="204" y2="204"/><line x1="224" y1="192" x2="216" y2="204"/><line x1="236" y1="192" x2="228" y2="204"/><line x1="248" y1="192" x2="240" y2="204"/><line x1="260" y1="192" x2="252" y2="204"/><line x1="272" y1="192" x2="264" y2="204"/><line x1="284" y1="192" x2="276" y2="204"/><line x1="296" y1="192" x2="288" y2="204"/><line x1="308" y1="192" x2="300" y2="204"/><line x1="320" y1="192" x2="312" y2="204"/><line x1="332" y1="192" x2="324" y2="204"/><line x1="344" y1="192" x2="336" y2="204"/><line x1="356" y1="192" x2="348" y2="204"/><line x1="368" y1="192" x2="360" y2="204"/><line x1="380" y1="192" x2="372" y2="204"/><line x1="392" y1="192" x2="384" y2="204"/><line x1="404" y1="192" x2="396" y2="204"/><line x1="416" y1="192" x2="408" y2="204"/><line x1="428" y1="192" x2="420" y2="204"/></g>
  <line x1="280" y1="190" x2="280" y2="52" stroke="var(--dg-muted)" stroke-dasharray="5 3" stroke-width="1.5"/>
  <g stroke="var(--dg-accent)" stroke-width="2.5" fill="none">
    <path d="M183.6 75.1 L231.8 132.5 L280 190" marker-mid="url(#ar-c7l-1)"/>
    <path d="M280 190 L328.2 132.5 L376.4 75.1" marker-mid="url(#ar-c7l-1)"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M280 140 A50 50 0 0 0 247.9 151.7"/><path d="M280 140 A50 50 0 0 1 312.1 151.7"/>
  </g>
  <g>
    <text x="256.7" y="124.1" text-anchor="middle" font-style="italic">i</text><text x="303.3" y="124.1" text-anchor="middle" font-style="italic">r</text>
    <text x="177.6" y="67.1" text-anchor="middle">Incident ray</text><text x="382.4" y="67.1" text-anchor="middle">Reflected ray</text>
    <text x="288" y="50">Normal</text>
    <text x="288" y="184" font-size="12">O</text>
    <text x="280" y="228" text-anchor="middle">Plane mirror</text>
  </g>
  <text x="280" y="254" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Angle of incidence (i) = angle of reflection (r); the normal is at 90° to the mirror</text>
</svg>`,
    },
  ],
  "earth-moon-and-the-sun": [
    {
      title: "Solar and lunar eclipses",
      caption: "A **solar eclipse** happens when the **Moon** comes between the Sun and the Earth (new moon). A **lunar eclipse** happens when the **Earth** comes between the Sun and the Moon (full moon). Not to scale.",
      svg: `<svg viewBox="0 0 560 292" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="10" y="18" font-weight="bold">Solar eclipse (new moon): Sun, Moon, Earth in a line</text>
  <polygon points="330,60 436,69 436,79 330,88" fill="currentColor" opacity="0.25"/>
  <g stroke="var(--dg-muted)" stroke-width="1.2"><line x1="55" y1="50" x2="330" y2="60"/><line x1="55" y1="98" x2="330" y2="88"/></g>
  <circle cx="55" cy="74" r="24" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="currentColor" stroke-width="1.5"><line x1="83.0" y1="74.0" x2="89.0" y2="74.0"/><line x1="74.8" y1="93.8" x2="79.0" y2="98.0"/><line x1="55.0" y1="102.0" x2="55.0" y2="108.0"/><line x1="35.2" y1="93.8" x2="31.0" y2="98.0"/><line x1="27.0" y1="74.0" x2="21.0" y2="74.0"/><line x1="35.2" y1="54.2" x2="31.0" y2="50.0"/><line x1="55.0" y1="46.0" x2="55.0" y2="40.0"/><line x1="74.8" y1="54.2" x2="79.0" y2="50.0"/></g><circle cx="330" cy="74" r="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><circle cx="470" cy="74" r="34" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g text-anchor="middle"><text x="55" y="122">Sun</text><text x="330" y="106">Moon</text><text x="470" y="124">Earth</text><text x="400" y="104" font-size="12" fill="var(--dg-muted)">Moon's shadow</text></g>
  <text x="10" y="162" font-weight="bold">Lunar eclipse (full moon): Sun, Earth, Moon in a line</text>
  <polygon points="300,184 300,256 555,220 555,220" fill="currentColor" opacity="0.25"/>
  <g stroke="var(--dg-muted)" stroke-width="1.2"><line x1="79" y1="200" x2="300" y2="184"/><line x1="79" y1="240" x2="300" y2="256"/></g>
  <circle cx="55" cy="220" r="24" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="currentColor" stroke-width="1.5"><line x1="83.0" y1="220.0" x2="89.0" y2="220.0"/><line x1="74.8" y1="239.8" x2="79.0" y2="244.0"/><line x1="55.0" y1="248.0" x2="55.0" y2="254.0"/><line x1="35.2" y1="239.8" x2="31.0" y2="244.0"/><line x1="27.0" y1="220.0" x2="21.0" y2="220.0"/><line x1="35.2" y1="200.2" x2="31.0" y2="196.0"/><line x1="55.0" y1="192.0" x2="55.0" y2="186.0"/><line x1="74.8" y1="200.2" x2="79.0" y2="196.0"/></g><circle cx="300" cy="220" r="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><circle cx="470" cy="220" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g text-anchor="middle"><text x="55" y="268">Sun</text><text x="300" y="272">Earth</text><text x="470" y="246">Moon</text><text x="400" y="270" font-size="12" fill="var(--dg-muted)">Earth's shadow</text></g>
</svg>`,
    },
    {
      title: "Earth's tilt and the seasons",
      caption: "The Earth's axis is tilted about **23½°** and keeps pointing the same way as the Earth goes round the Sun. In June the Northern Hemisphere leans **towards** the Sun (summer); in December it leans **away** (winter). Not to scale.",
      svg: `<svg viewBox="0 0 560 292" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="280" cy="160" rx="150" ry="95" fill="none" stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="5 3"/>
  <circle cx="280" cy="160" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="currentColor" stroke-width="1.5"><line x1="304.0" y1="160.0" x2="310.0" y2="160.0"/><line x1="297.0" y1="177.0" x2="301.2" y2="181.2"/><line x1="280.0" y1="184.0" x2="280.0" y2="190.0"/><line x1="263.0" y1="177.0" x2="258.8" y2="181.2"/><line x1="256.0" y1="160.0" x2="250.0" y2="160.0"/><line x1="263.0" y1="143.0" x2="258.8" y2="138.8"/><line x1="280.0" y1="136.0" x2="280.0" y2="130.0"/><line x1="297.0" y1="143.0" x2="301.2" y2="138.8"/></g>
  <text x="280" y="208" text-anchor="middle">Sun</text>
  <circle cx="130" cy="160" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><line x1="118.0" y1="187.5" x2="142.0" y2="132.5" stroke="currentColor" stroke-width="1.8"/><text x="147.0" y="130.5" font-size="12">N</text><circle cx="430" cy="160" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><line x1="418.0" y1="187.5" x2="442.0" y2="132.5" stroke="currentColor" stroke-width="1.8"/><text x="447.0" y="130.5" font-size="12">N</text><circle cx="280" cy="65" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><line x1="268.0" y1="92.5" x2="292.0" y2="37.5" stroke="currentColor" stroke-width="1.8"/><text x="297.0" y="35.5" font-size="12">N</text><circle cx="280" cy="255" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><line x1="268.0" y1="282.5" x2="292.0" y2="227.5" stroke="currentColor" stroke-width="1.8"/><text x="297.0" y="225.5" font-size="12">N</text>
  
  <g font-weight="bold"><text x="10" y="200">21 June</text><text x="440" y="200">22 December</text></g>
  <g font-size="12"><text x="10" y="216">Summer in the north</text><text x="10" y="232">(longest day)</text><text x="440" y="216">Winter in the north</text><text x="440" y="232">(shortest day)</text>
    <text x="312" y="52" font-size="13">21 March: day and night equal</text><text x="312" y="274" font-size="13">23 Sept: day and night equal</text>
    <text x="10" y="120" fill="var(--dg-muted)">Axis tilted 23½°</text><text x="10" y="136" fill="var(--dg-muted)">and always pointing</text><text x="10" y="152" fill="var(--dg-muted)">the same way</text></g>
</svg>`,
    },
  ],
});
