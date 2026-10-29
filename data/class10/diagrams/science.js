// Class 10 Science diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(10, "science", {
  "chemical-reactions-and-equations": [
    {
      title: "Electrolysis of water",
      caption: "Passing current through acidified water splits it: **hydrogen collects at the cathode (−) and oxygen at the anode (+), in the volume ratio 2 : 1**. 2H₂O → 2H₂ + O₂ (a decomposition reaction).",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M130 80 V260 H430 V80" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="131" y="90" width="298" height="169" fill="var(--dg-fill)" opacity="0.6"/>
  <line x1="131" y1="90" x2="429" y2="90" stroke="currentColor" stroke-dasharray="4 3"/>
  <rect x="215" y="40" width="50" height="130" fill="var(--dg-fill)" opacity="0.9"/>
  <rect x="295" y="40" width="50" height="65" fill="var(--dg-fill)" opacity="0.9"/>
  <path d="M215 215 V40 H265 V215" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M295 215 V40 H345 V215" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="215" y1="170" x2="265" y2="170" stroke="currentColor"/>
  <line x1="295" y1="105" x2="345" y2="105" stroke="currentColor"/>
  <g stroke="currentColor" stroke-width="3"><line x1="240" y1="190" x2="240" y2="260"/><line x1="320" y1="190" x2="320" y2="260"/></g>
  <g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M240 260 V300 H270"/><path d="M290 300 H320 V260"/></g>
  <g stroke="currentColor" stroke-width="2"><line x1="270" y1="292" x2="270" y2="308"/><line x1="290" y1="286" x2="290" y2="314"/></g>
  <text x="280" y="332" text-anchor="middle">Battery</text>
  <text x="262" y="289" text-anchor="end">−</text><text x="298" y="289">+</text>
  <text x="205" y="52" text-anchor="end">Hydrogen gas</text><text x="205" y="68" text-anchor="end" fill="var(--dg-muted)">(2 volumes)</text>
  <text x="355" y="52">Oxygen gas</text><text x="355" y="68" fill="var(--dg-muted)">(1 volume)</text>
  <text x="205" y="240" text-anchor="end">Cathode (−)</text><text x="355" y="240">Anode (+)</text>
  <text x="140" y="116">Acidified</text><text x="140" y="132">water</text>
  <text x="280" y="20" text-anchor="middle" fill="var(--dg-muted)">Test tubes filled with water, inverted over the electrodes</text>
</svg>`,
    },
    {
      title: "Heating lead nitrate crystals",
      caption: "On heating, lead nitrate decomposes: **2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂**. Brown fumes of nitrogen dioxide are seen; a yellow residue of lead oxide is left in the boiling tube.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c1-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M50 105 H190 V145 H50 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="55" y="130" width="70" height="14" fill="var(--dg-fill)"/>
  <rect x="190" y="112" width="14" height="26" fill="var(--dg-fill)" stroke="currentColor"/>
  <path d="M204 125 H330 V200" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M290 175 V245 H410 V175" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="291" y="195" width="118" height="49" fill="var(--dg-fill)" opacity="0.6"/>
  <path d="M310 160 V225 Q310 235 320 235 H340 Q350 235 350 225 V160" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M90 190 Q80 170 90 160 Q96 172 104 162 Q112 178 90 190Z" fill="var(--dg-accent)" opacity="0.5"/>
  <rect x="82" y="190" width="16" height="45" fill="none" stroke="currentColor"/>
  <line x1="60" y1="235" x2="120" y2="235" stroke="currentColor" stroke-width="2"/>
  <g stroke="var(--dg-accent)" stroke-width="1.5" fill="none"><path d="M140 100 Q135 85 145 75" marker-end="url(#ar-c1-2)"/></g>
  <text x="150" y="70" fill="var(--dg-accent)">NO₂ + O₂ gases</text>
  <text x="50" y="92">Boiling tube</text>
  <text x="95" y="127" text-anchor="middle" fill="var(--dg-muted)">Lead nitrate</text>
  <text x="212" y="102">Cork</text>
  <text x="105" y="258" text-anchor="middle">Burner</text>
  <text x="338" y="116" text-anchor="middle">Delivery tube</text>
  <text x="330" y="260" text-anchor="middle" fill="var(--dg-muted)">Cold water</text>
  <text x="430" y="208">Beaker</text>
  <text x="362" y="138">Collecting tube</text>
  <text x="362" y="154" fill="var(--dg-muted)">(brown fumes)</text>
</svg>`,
    },
  ],
  "acids-bases-and-salts": [
    {
      title: "The pH scale",
      caption: "pH runs from 0 to 14: **below 7 is acidic, 7 is neutral, above 7 is basic**. The lower the pH, the higher the H⁺ ion concentration; the higher the pH, the higher the OH⁻ concentration.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c2-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="20" y="70" width="250" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
  <rect x="270" y="70" width="250" height="30" fill="none" stroke="currentColor"/>
  <line x1="270" y1="64" x2="270" y2="106" stroke="var(--dg-accent)" stroke-width="2.5"/>
  <text x="145" y="90" text-anchor="middle">Acidic</text><text x="395" y="90" text-anchor="middle">Basic</text>
  <text x="270" y="60" text-anchor="middle">Neutral</text>
  <line x1="268" y1="38" x2="30" y2="38" stroke="currentColor" marker-end="url(#ar-c2-1)"/>
  <line x1="272" y1="38" x2="510" y2="38" stroke="currentColor" marker-end="url(#ar-c2-1)"/>
  <text x="150" y="26" text-anchor="middle">H⁺ concentration increases</text><text x="395" y="26" text-anchor="middle">OH⁻ concentration increases</text>
  <g text-anchor="middle"><text x="20" y="120">0</text><text x="55.7" y="120">1</text><text x="91.4" y="120">2</text><text x="127.1" y="120">3</text><text x="162.9" y="120">4</text><text x="198.6" y="120">5</text><text x="234.3" y="120">6</text><text x="270" y="120">7</text><text x="305.7" y="120">8</text><text x="341.4" y="120">9</text><text x="377.1" y="120">10</text><text x="412.9" y="120">11</text><text x="448.6" y="120">12</text><text x="484.3" y="120">13</text><text x="520" y="120">14</text></g>
  <g stroke="var(--dg-muted)"><line x1="20" y1="124" x2="20" y2="136"/><line x1="62.9" y1="124" x2="62.9" y2="136"/><line x1="98.6" y1="124" x2="98.6" y2="136"/><line x1="177.1" y1="124" x2="177.1" y2="136"/><line x1="252.1" y1="124" x2="252.1" y2="136"/><line x1="270" y1="124" x2="270" y2="136"/><line x1="312.9" y1="124" x2="312.9" y2="136"/><line x1="377.1" y1="124" x2="377.1" y2="136"/><line x1="520" y1="124" x2="520" y2="136"/></g>
  <g font-size="12">
    <text transform="translate(24 138) rotate(90)">Hydrochloric acid</text>
    <text transform="translate(67 138) rotate(90)">Gastric juice (1.2)</text>
    <text transform="translate(103 138) rotate(90)">Lemon juice (2.2)</text>
    <text transform="translate(181 138) rotate(90)">Tomato juice (4.4)</text>
    <text transform="translate(256 138) rotate(90)">Milk (6.5)</text>
    <text transform="translate(274 138) rotate(90)">Pure water (7)</text>
    <text transform="translate(317 138) rotate(90)">Baking soda (8.2)</text>
    <text transform="translate(381 138) rotate(90)">Milk of magnesia (10)</text>
    <text transform="translate(515 138) rotate(90)">Sodium hydroxide</text>
  </g>
</svg>`,
    },
    {
      title: "Does an acid conduct electricity?",
      caption: "The bulb glows when dilute HCl is in the beaker because the acid forms **H⁺ and Cl⁻ ions**, which carry current between the electrodes. Glucose or alcohol solutions (no ions) would not light the bulb.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M90 150 V260 H480 V150" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="91" y="175" width="388" height="84" fill="var(--dg-fill)" opacity="0.6"/>
  <g stroke="currentColor" stroke-width="5"><line x1="190" y1="130" x2="190" y2="240"/><line x1="380" y1="130" x2="380" y2="240"/></g>
  <g stroke="currentColor" stroke-width="1.5" fill="none"><path d="M190 130 V60 H220"/><path d="M260 60 H300"/><path d="M310 60 H380 V130"/></g>
  <circle cx="240" cy="60" r="20" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M228 68 Q234 48 240 60 Q246 72 252 52" fill="none" stroke="currentColor"/>
  <g stroke="var(--dg-accent)" stroke-width="1.6"><line x1="240" y1="30" x2="240" y2="20"/><line x1="262" y1="38" x2="270" y2="30"/><line x1="218" y1="38" x2="210" y2="30"/></g>
  <g stroke="currentColor" stroke-width="2"><line x1="300" y1="46" x2="300" y2="74"/><line x1="310" y1="52" x2="310" y2="68"/></g>
  <text x="240" y="108" text-anchor="middle">Bulb</text>
  <text x="305" y="36" text-anchor="middle">Battery</text>
  <text x="182" y="215" text-anchor="end">Carbon rod</text><text x="388" y="215">Carbon rod</text>
  <text x="285" y="235" text-anchor="middle">Dilute HCl</text>
  <text x="285" y="272" text-anchor="middle" fill="var(--dg-muted)">Beaker</text>
</svg>`,
    },
  ],
  "metals-and-non-metals": [
    {
      title: "Formation of sodium chloride (ionic bond)",
      caption: "Sodium gives its one outer electron to chlorine. **Na becomes Na⁺ (2, 8) and Cl becomes Cl⁻ (2, 8, 8)**, both with a stable octet; the opposite charges attract to form the ionic compound NaCl.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c3-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="70" cy="95" r="22" fill="none" stroke="var(--dg-muted)"/><circle cx="70" cy="95" r="38" fill="none" stroke="var(--dg-muted)"/><circle cx="70" cy="95" r="54" fill="none" stroke="var(--dg-muted)"/><text x="70" y="99" text-anchor="middle" font-size="12">11+</text><circle cx="77.5" cy="74.3" r="3" fill="currentColor"/><circle cx="62.5" cy="74.3" r="3" fill="currentColor"/><circle cx="108" cy="95" r="3" fill="currentColor"/><circle cx="96.9" cy="68.1" r="3" fill="currentColor"/><circle cx="70" cy="57" r="3" fill="currentColor"/><circle cx="43.1" cy="68.1" r="3" fill="currentColor"/><circle cx="32" cy="95" r="3" fill="currentColor"/><circle cx="43.1" cy="121.9" r="3" fill="currentColor"/><circle cx="70" cy="133" r="3" fill="currentColor"/><circle cx="96.9" cy="121.9" r="3" fill="currentColor"/><circle cx="124" cy="95" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="215" cy="95" r="22" fill="none" stroke="var(--dg-muted)"/><circle cx="215" cy="95" r="38" fill="none" stroke="var(--dg-muted)"/><circle cx="215" cy="95" r="54" fill="none" stroke="var(--dg-muted)"/><text x="215" y="99" text-anchor="middle" font-size="12">17+</text><circle cx="222.5" cy="74.3" r="3" fill="currentColor"/><circle cx="207.5" cy="74.3" r="3" fill="currentColor"/><circle cx="253" cy="95" r="3" fill="currentColor"/><circle cx="241.9" cy="68.1" r="3" fill="currentColor"/><circle cx="215" cy="57" r="3" fill="currentColor"/><circle cx="188.1" cy="68.1" r="3" fill="currentColor"/><circle cx="177" cy="95" r="3" fill="currentColor"/><circle cx="188.1" cy="121.9" r="3" fill="currentColor"/><circle cx="215" cy="133" r="3" fill="currentColor"/><circle cx="241.9" cy="121.9" r="3" fill="currentColor"/><circle cx="269" cy="95" r="3" fill="currentColor"/><circle cx="253.2" cy="56.8" r="3" fill="currentColor"/><circle cx="215" cy="41" r="3" fill="currentColor"/><circle cx="176.8" cy="56.8" r="3" fill="currentColor"/><circle cx="176.8" cy="133.2" r="3" fill="currentColor"/><circle cx="215" cy="149" r="3" fill="currentColor"/><circle cx="253.2" cy="133.2" r="3" fill="currentColor"/>
  <line x1="128" y1="95" x2="160" y2="95" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c3-1)"/><text x="144" y="87" text-anchor="middle" fill="var(--dg-accent)">e⁻</text>
  <line x1="282" y1="95" x2="308" y2="95" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c3-1)"/>
  <circle cx="355" cy="95" r="22" fill="none" stroke="var(--dg-muted)"/><circle cx="355" cy="95" r="38" fill="none" stroke="var(--dg-muted)"/><text x="355" y="99" text-anchor="middle" font-size="12">11+</text><circle cx="362.5" cy="74.3" r="3" fill="currentColor"/><circle cx="347.5" cy="74.3" r="3" fill="currentColor"/><circle cx="393" cy="95" r="3" fill="currentColor"/><circle cx="381.9" cy="68.1" r="3" fill="currentColor"/><circle cx="355" cy="57" r="3" fill="currentColor"/><circle cx="328.1" cy="68.1" r="3" fill="currentColor"/><circle cx="317" cy="95" r="3" fill="currentColor"/><circle cx="328.1" cy="121.9" r="3" fill="currentColor"/><circle cx="355" cy="133" r="3" fill="currentColor"/><circle cx="381.9" cy="121.9" r="3" fill="currentColor"/>
  <circle cx="480" cy="95" r="22" fill="none" stroke="var(--dg-muted)"/><circle cx="480" cy="95" r="38" fill="none" stroke="var(--dg-muted)"/><circle cx="480" cy="95" r="54" fill="none" stroke="var(--dg-muted)"/><text x="480" y="99" text-anchor="middle" font-size="12">17+</text><circle cx="487.5" cy="74.3" r="3" fill="currentColor"/><circle cx="472.5" cy="74.3" r="3" fill="currentColor"/><circle cx="518" cy="95" r="3" fill="currentColor"/><circle cx="506.9" cy="68.1" r="3" fill="currentColor"/><circle cx="480" cy="57" r="3" fill="currentColor"/><circle cx="453.1" cy="68.1" r="3" fill="currentColor"/><circle cx="442" cy="95" r="3" fill="currentColor"/><circle cx="453.1" cy="121.9" r="3" fill="currentColor"/><circle cx="480" cy="133" r="3" fill="currentColor"/><circle cx="506.9" cy="121.9" r="3" fill="currentColor"/><circle cx="534" cy="95" r="3" fill="currentColor"/><circle cx="518.2" cy="56.8" r="3" fill="currentColor"/><circle cx="480" cy="41" r="3" fill="currentColor"/><circle cx="441.8" cy="56.8" r="3" fill="currentColor"/><circle cx="426" cy="95" r="3" fill="currentColor"/><circle cx="441.8" cy="133.2" r="3" fill="currentColor"/><circle cx="480" cy="149" r="3" fill="currentColor"/><circle cx="518.2" cy="133.2" r="3" fill="currentColor"/>
  <text x="355" y="37" text-anchor="middle" font-size="16">+</text><text x="480" y="35" text-anchor="middle" font-size="16">−</text>
  <g text-anchor="middle"><text x="70" y="175">Sodium atom</text><text x="70" y="191" fill="var(--dg-muted)">(2, 8, 1)</text><text x="215" y="175">Chlorine atom</text><text x="215" y="191" fill="var(--dg-muted)">(2, 8, 7)</text><text x="355" y="175">Sodium ion Na⁺</text><text x="355" y="191" fill="var(--dg-muted)">(2, 8)</text><text x="480" y="175">Chloride ion Cl⁻</text><text x="480" y="191" fill="var(--dg-muted)">(2, 8, 8)</text><text x="280" y="220">Opposite charges attract: ionic bond in NaCl</text></g>
</svg>`,
    },
    {
      title: "Reactivity series and extraction of metals",
      caption: "Metals are arranged from most to least reactive. **The more reactive the metal, the more strongly it holds on to oxygen**, so a more powerful method is needed to extract it from its ore.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c3-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="40" y1="42" x2="40" y2="322" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c3-2)"/>
  <text transform="translate(28 182) rotate(-90)" text-anchor="middle">Reactivity decreases</text>
  <text x="150" y="28" text-anchor="middle" font-size="14">Reactivity series</text>
  <rect x="80" y="40" width="140" height="22" fill="var(--dg-fill)" stroke="currentColor"/><text x="150" y="56" text-anchor="middle">Potassium (K)</text>
  <rect x="80" y="62" width="140" height="22" fill="none" stroke="currentColor"/><text x="150" y="78" text-anchor="middle">Sodium (Na)</text>
  <rect x="80" y="84" width="140" height="22" fill="var(--dg-fill)" stroke="currentColor"/><text x="150" y="100" text-anchor="middle">Calcium (Ca)</text>
  <rect x="80" y="106" width="140" height="22" fill="none" stroke="currentColor"/><text x="150" y="122" text-anchor="middle">Magnesium (Mg)</text>
  <rect x="80" y="128" width="140" height="22" fill="var(--dg-fill)" stroke="currentColor"/><text x="150" y="144" text-anchor="middle">Aluminium (Al)</text>
  <rect x="80" y="150" width="140" height="22" fill="none" stroke="currentColor"/><text x="150" y="166" text-anchor="middle">Zinc (Zn)</text>
  <rect x="80" y="172" width="140" height="22" fill="var(--dg-fill)" stroke="currentColor"/><text x="150" y="188" text-anchor="middle">Iron (Fe)</text>
  <rect x="80" y="194" width="140" height="22" fill="none" stroke="currentColor"/><text x="150" y="210" text-anchor="middle">Lead (Pb)</text>
  <rect x="80" y="216" width="140" height="22" fill="var(--dg-fill)" stroke="currentColor"/><text x="150" y="232" text-anchor="middle" fill="var(--dg-muted)">Hydrogen (H)</text>
  <rect x="80" y="238" width="140" height="22" fill="none" stroke="currentColor"/><text x="150" y="254" text-anchor="middle">Copper (Cu)</text>
  <rect x="80" y="260" width="140" height="22" fill="var(--dg-fill)" stroke="currentColor"/><text x="150" y="276" text-anchor="middle">Mercury (Hg)</text>
  <rect x="80" y="282" width="140" height="22" fill="none" stroke="currentColor"/><text x="150" y="298" text-anchor="middle">Silver (Ag)</text>
  <rect x="80" y="304" width="140" height="22" fill="var(--dg-fill)" stroke="currentColor"/><text x="150" y="320" text-anchor="middle">Gold (Au)</text>
  <path d="M228 43 H234 V147 H228" fill="none" stroke="currentColor"/><path d="M228 153 H234 V257 H228" fill="none" stroke="currentColor"/><path d="M228 263 H234 V323 H228" fill="none" stroke="currentColor"/>
  <g font-size="12">
  <text x="244" y="90">Highly reactive: extracted by</text><text x="244" y="106">electrolysis of their molten ores</text>
  <text x="244" y="198">Moderately reactive: ore roasted or</text><text x="244" y="214">calcined to oxide, then reduced by carbon</text>
  <text x="244" y="287">Least reactive: Hg by heating cinnabar;</text><text x="244" y="303">Ag and Au occur free (native) in nature</text>
  </g>
</svg>`,
    },
  ],
  "carbon-and-its-compounds": [
    {
      title: "Electron dot structures: methane and ethene",
      caption: "Carbon (4 valence electrons) shares electrons with hydrogen (1 each). **Methane has four single C–H bonds; ethene has a C=C double bond (two shared pairs)** plus four C–H bonds.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="100" y="105" text-anchor="middle" font-size="15">C</text><text x="100" y="45" text-anchor="middle" font-size="15">H</text><circle cx="105" cy="70" r="2.8" fill="currentColor"/><path d="M92 67l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="100" y="165" text-anchor="middle" font-size="15">H</text><circle cx="95" cy="130" r="2.8" fill="currentColor"/><path d="M102 127l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="40" y="105" text-anchor="middle" font-size="15">H</text><circle cx="70" cy="95" r="2.8" fill="currentColor"/><path d="M67 102l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="160" y="105" text-anchor="middle" font-size="15">H</text><circle cx="130" cy="105" r="2.8" fill="currentColor"/><path d="M127 92l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <text x="100" y="195" text-anchor="middle">Methane, CH₄</text><text x="100" y="212" text-anchor="middle" fill="var(--dg-muted)">4 single bonds</text>
  <text x="340" y="105" text-anchor="middle" font-size="15">C</text><text x="430" y="105" text-anchor="middle" font-size="15">C</text><circle cx="376" cy="94" r="2.8" fill="currentColor"/><path d="M373 102l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><circle cx="394" cy="94" r="2.8" fill="currentColor"/><path d="M391 102l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="285" y="55" text-anchor="middle" font-size="15">H</text><circle cx="315.9" cy="71.3" r="2.8" fill="currentColor"/><path d="M306.1 75.7l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="285" y="155" text-anchor="middle" font-size="15">H</text><circle cx="309.1" cy="121.3" r="2.8" fill="currentColor"/><path d="M312.9 125.7l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="485" y="55" text-anchor="middle" font-size="15">H</text><circle cx="460.9" cy="78.7" r="2.8" fill="currentColor"/><path d="M451.1 68.3l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="485" y="155" text-anchor="middle" font-size="15">H</text><circle cx="454.1" cy="128.7" r="2.8" fill="currentColor"/><path d="M457.9 118.3l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <text x="385" y="195" text-anchor="middle">Ethene, C₂H₄</text><text x="385" y="212" text-anchor="middle" fill="var(--dg-muted)">1 double bond between the carbons</text>
  <g font-size="12" fill="var(--dg-muted)"><circle cx="180" cy="16" r="2.8" fill="currentColor"/><text x="188" y="20">electron of C</text><path d="M177 28l6 6m0-6l-6 6" stroke="var(--dg-accent)" stroke-width="1.5"/><text x="188" y="36">electron of H</text></g>
</svg>`,
    },
    {
      title: "Soap micelle: how soap cleans",
      caption: "Soap molecules have a water-loving ionic head and an oil-loving hydrocarbon tail. **In water they gather into a micelle with tails buried in the grease and heads facing outward**, so the dirt is pulled away and rinsed off.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="330" cy="135" rx="24" ry="20" fill="var(--dg-fill)" stroke="currentColor" stroke-dasharray="3 3"/>
  <path d="M404 135L394.6 139L385.2 131L375.8 139L366.4 131L357 139" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="412" cy="135" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M396.7 167.1L386.5 166.6L381.5 155.3L369.5 158.5L364.5 147.2L352.6 150.3" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="403.9" cy="170.6" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M376.1 192.9L367.2 188L367.5 175.7L355.4 173.3L355.8 161L343.7 158.6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="381.1" cy="199.1" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M346.5 207.1L340.5 198.9L346.2 187.9L336.3 180.5L342 169.6L332.1 162.2" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="348.2" cy="214.9" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M313.5 207.1L311.7 197.1L321.6 189.7L315.9 178.8L325.8 171.4L320.1 160.4" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="311.8" cy="214.9" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M283.9 192.9L286.6 183L298.7 180.7L298.3 168.3L310.4 166L310 153.6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="278.9" cy="199.1" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M263.3 167.1L270.1 159.4L282 162.6L287 151.3L298.9 154.4L303.9 143.1" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="256.1" cy="170.6" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M256 135L265.4 131L274.8 139L284.2 131L293.6 139L303 131" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="248" cy="135" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M263.3 102.9L273.5 103.4L278.5 114.7L290.5 111.5L295.5 122.8L307.4 119.7" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="256.1" cy="99.4" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M283.9 77.1L292.8 82L292.5 94.3L304.6 96.7L304.2 109L316.3 111.4" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="278.9" cy="70.9" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M313.5 62.9L319.5 71.1L313.8 82.1L323.7 89.5L318 100.4L327.9 107.8" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="311.8" cy="55.1" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M346.5 62.9L348.3 72.9L338.4 80.3L344.1 91.2L334.2 98.6L339.9 109.6" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="348.2" cy="55.1" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M376.1 77.1L373.4 87L361.3 89.3L361.7 101.7L349.6 104L350 116.4" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="381.1" cy="70.9" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M396.7 102.9L389.9 110.6L378 107.4L373 118.7L361.1 115.6L356.1 126.9" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="403.9" cy="99.4" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45" cy="60" r="7" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><path d="M52 60 l8 -4 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 4" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="45" y="84" text-anchor="middle">Head</text><text x="45" y="100" text-anchor="middle" fill="var(--dg-muted)">hydrophilic</text><text x="130" y="84" text-anchor="middle">Tail</text><text x="130" y="100" text-anchor="middle" fill="var(--dg-muted)">hydrophobic</text>
  <text x="20" y="30">One soap molecule</text>
  <text x="20" y="150">Heads (ionic, –COO⁻Na⁺) face</text><text x="20" y="166">the water; hydrocarbon tails</text><text x="20" y="182">point into the oil or grease.</text>
  <text x="330" y="139" text-anchor="middle" font-size="12">Oil</text>
  <text x="330" y="258" text-anchor="middle">Micelle in water (the oily dirt is trapped inside)</text>
  <text x="440" y="60" fill="var(--dg-muted)">Water</text>
</svg>`,
    },
  ],
  "life-processes": [
    {
      title: "Human heart (schematic)",
      caption: "Blood from the body enters the right atrium, goes to the right ventricle and out to the lungs; oxygenated blood returns to the left atrium and is pumped by the **thick-walled left ventricle** into the aorta. The septum keeps the two sides apart.",
      svg: `<svg viewBox="0 0 560 370" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c5-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8">
    <rect x="150" y="130" width="120" height="80" rx="18"/><rect x="160" y="215" width="110" height="115" rx="24"/>
    <rect x="300" y="130" width="80" height="80" rx="18"/><rect x="290" y="215" width="120" height="125" rx="26"/>
  </g>
  <rect x="270" y="215" width="20" height="115" fill="var(--dg-muted)" opacity="0.35"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M175 130 V50 M205 130 V50"/><path d="M277 215 V105 M293 215 V105"/>
    <path d="M345 130 V55 M367 130 V55"/><path d="M388 215 V95 M408 215 V95"/>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2" fill="none">
    <line x1="190" y1="62" x2="190" y2="108" marker-end="url(#ar-c5-1)"/>
    <line x1="285" y1="190" x2="285" y2="114" marker-end="url(#ar-c5-1)"/>
    <line x1="356" y1="62" x2="356" y2="108" marker-end="url(#ar-c5-1)"/>
    <line x1="398" y1="190" x2="398" y2="104" marker-end="url(#ar-c5-1)"/>
  </g>
  <g text-anchor="middle"><text x="210" y="175">Right atrium</text><text x="215" y="278">Right</text><text x="215" y="294">ventricle</text><text x="340" y="175">Left atrium</text><text x="350" y="283">Left</text><text x="350" y="299">ventricle</text></g>
  <text x="168" y="72" text-anchor="end">Vena cava</text><text x="168" y="88" text-anchor="end" fill="var(--dg-muted)">(from body)</text>
  <text x="285" y="80" text-anchor="middle">Pulmonary artery</text><text x="285" y="96" text-anchor="middle" fill="var(--dg-muted)">(to lungs)</text>
  <text x="356" y="22" text-anchor="middle">Pulmonary vein</text><text x="356" y="38" text-anchor="middle" fill="var(--dg-muted)">(from lungs)</text>
  <text x="418" y="80">Aorta</text><text x="418" y="96" fill="var(--dg-muted)">(to body)</text>
  <line x1="145" y1="213" x2="156" y2="213" stroke="var(--dg-muted)"/><text x="141" y="217" text-anchor="end">Valve</text>
  <line x1="280" y1="342" x2="280" y2="322" stroke="var(--dg-muted)"/><text x="280" y="358" text-anchor="middle">Septum</text>
</svg>`,
    },
    {
      title: "Human alimentary canal",
      caption: "Food passes mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus. **Salivary glands, liver and pancreas** are the associated glands that pour in digestive juices.",
      svg: `<svg viewBox="0 0 560 410" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="280" cy="28" rx="24" ry="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="238" cy="52" rx="14" ry="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><ellipse cx="322" cy="52" rx="14" ry="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M280 40 V152" fill="none" stroke="currentColor" stroke-width="13" stroke-linejoin="round"/><path d="M280 40 V152" fill="none" stroke="var(--dg-fill)" stroke-width="10" stroke-linejoin="round"/>
  <ellipse cx="225" cy="160" rx="48" ry="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="256" cy="198" rx="8" ry="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="368" cy="212" rx="28" ry="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M235 332 V232 H345 V332 Q345 362 300 368" fill="none" stroke="currentColor" stroke-width="15" stroke-linejoin="round"/><path d="M235 332 V232 H345 V332 Q345 362 300 368" fill="none" stroke="var(--dg-fill)" stroke-width="12" stroke-linejoin="round"/>
  <path d="M300 186 V240 H258 V256 H330 V272 H258 V288 H330 V304 H246 V324" fill="none" stroke="currentColor" stroke-width="11" stroke-linejoin="round"/><path d="M300 186 V240 H258 V256 H330 V272 H258 V288 H330 V304 H246 V324" fill="none" stroke="var(--dg-fill)" stroke-width="8" stroke-linejoin="round"/>
  <ellipse cx="320" cy="168" rx="42" ry="24" transform="rotate(20 320 168)" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="var(--dg-muted)"><line x1="150" y1="60" x2="224" y2="52"/><line x1="150" y1="160" x2="177" y2="160"/><line x1="150" y1="210" x2="248" y2="205"/><line x1="180" y1="282" x2="229" y2="282"/></g>
  <g stroke="var(--dg-muted)"><line x1="417" y1="100" x2="290" y2="100"/><line x1="417" y1="168" x2="360" y2="168"/><line x1="417" y1="214" x2="394" y2="212"/><line x1="417" y1="288" x2="336" y2="288"/><line x1="417" y1="345" x2="333" y2="350"/><line x1="335" y1="392" x2="305" y2="380"/></g>
  <g text-anchor="end"><text x="146" y="64">Salivary glands</text><text x="146" y="164">Liver</text><text x="146" y="214">Gall bladder</text><text x="176" y="286">Large intestine</text></g>
  <text x="318" y="20" fill="currentColor">Mouth</text><text x="424" y="104">Oesophagus</text><text x="424" y="172">Stomach</text><text x="424" y="218">Pancreas</text><text x="424" y="292">Small intestine</text><text x="424" y="349">Rectum</text><text x="340" y="398">Anus</text>
</svg>`,
    },
    {
      title: "Human excretory system",
      caption: "Each kidney filters blood to make urine. **Urine flows down the ureters to the urinary bladder** and is passed out through the urethra.",
      svg: `<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g id="ex-half-c5">
    <path d="M215 55 C180 45 165 90 175 125 C185 160 215 160 220 150 C205 140 208 130 215 118 C225 100 235 70 215 55Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
    <path d="M214 120 Q232 200 262 262" fill="none" stroke="currentColor" stroke-width="7"/><path d="M214 120 Q232 200 262 262" fill="none" stroke="var(--dg-fill)" stroke-width="4"/>
  </g>
  <use href="#ex-half-c5" transform="translate(560 0) scale(-1 1)"/>
  <path d="M255 265 Q250 320 280 330 Q310 320 305 265 Q280 250 255 265Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M280 330 V372" fill="none" stroke="currentColor" stroke-width="11"/><path d="M280 330 V372" fill="none" stroke="var(--dg-fill)" stroke-width="8"/>
  <g stroke="var(--dg-muted)">
    <line x1="150" y1="100" x2="178" y2="100"/><line x1="150" y1="200" x2="236" y2="200"/>
    <line x1="410" y1="200" x2="326" y2="200"/><line x1="410" y1="298" x2="308" y2="298"/><line x1="410" y1="355" x2="290" y2="355"/>
  </g>
  <text x="146" y="104" text-anchor="end">Kidney</text><text x="146" y="204" text-anchor="end">Ureter</text>
  <text x="416" y="204">Ureter</text><text x="416" y="302">Urinary bladder</text><text x="416" y="359">Urethra</text>
</svg>`,
    },
  ],
  "control-and-coordination": [
    {
      title: "Structure of a neuron",
      caption: "The **dendrites receive** information, which travels as an electrical impulse through the cell body and along the axon, and is passed on at the nerve endings to the next neuron or to a muscle or gland.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M92 98 L58 78 L30 82 M58 78 L44 56"/><path d="M90 114 L50 118 L24 112 M50 118 L38 142"/>
    <path d="M100 138 L72 166 L50 170 M72 166 L66 190"/><path d="M118 80 L106 50 L84 34 M106 50 L120 28"/>
  </g>
  <ellipse cx="135" cy="110" rx="48" ry="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="135" cy="110" r="14" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M183 110 H430" fill="none" stroke="currentColor" stroke-width="9"/><path d="M183 110 H430" fill="none" stroke="var(--dg-fill)" stroke-width="6"/>
  <g fill="none" stroke="currentColor" stroke-width="1.6"><path d="M430 110 L470 78 M430 110 L476 110 M430 110 L470 142"/></g>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"><circle cx="474" cy="76" r="5"/><circle cx="481" cy="110" r="5"/><circle cx="474" cy="144" r="5"/></g>
  <line x1="220" y1="170" x2="400" y2="170" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c6-1)"/>
  <text x="310" y="192" text-anchor="middle" fill="var(--dg-accent)">Direction of nerve impulse</text>
  <g stroke="var(--dg-muted)"><line x1="150" y1="34" x2="112" y2="42"/><line x1="203" y1="60" x2="142" y2="98"/><line x1="320" y1="62" x2="320" y2="104"/><line x1="500" y1="76" x2="482" y2="76"/></g>
  <text x="152" y="30">Dendrites</text>
  <text x="206" y="64">Nucleus</text>
  <text x="140" y="165" text-anchor="middle" fill="currentColor">Cell body</text>
  <text x="320" y="56" text-anchor="middle">Axon</text>
  <text x="504" y="72">Nerve</text><text x="504" y="88">endings</text>
</svg>`,
    },
    {
      title: "Reflex arc",
      caption: "A reflex is a quick, automatic response that does not wait for the brain. The impulse follows **receptor → sensory neuron → spinal cord → motor neuron → effector**.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6-2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>
  <marker id="ar-c6-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <ellipse cx="290" cy="150" rx="90" ry="62" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <ellipse cx="290" cy="150" rx="56" ry="38" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="48" cy="48" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="480" y="228" width="60" height="32" rx="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="2.2">
    <path d="M57 50 Q170 50 258 128" marker-end="url(#ar-c6-2)"/>
    <path d="M322 172 Q340 236 476 244" marker-end="url(#ar-c6-2)"/>
  </g>
  <path d="M258 128 C285 122 312 140 322 168" fill="none" stroke="currentColor" stroke-width="2.4" marker-end="url(#ar-c6-2b)"/>
  <g stroke="var(--dg-muted)"><line x1="215" y1="256" x2="240" y2="200"/><line x1="362" y1="102" x2="300" y2="134"/></g>
  <text x="20" y="28">Receptor</text><text x="20" y="76" fill="var(--dg-muted)">(e.g. skin)</text>
  <text x="150" y="38">Sensory neuron</text>
  <text x="210" y="272" text-anchor="middle">Spinal cord</text>
  <text x="365" y="98">Relay neuron</text>
  <text x="410" y="278" text-anchor="middle">Motor neuron</text>
  <text x="510" y="200" text-anchor="middle">Effector</text><text x="510" y="216" text-anchor="middle" fill="var(--dg-muted)">(muscle)</text>
</svg>`,
    },
  ],
  "how-do-organisms-reproduce": [
    {
      title: "Binary fission in Amoeba",
      caption: "The nucleus divides first, then the cell **constricts in the middle and splits into two daughter Amoebae**, each with its own nucleus. This is asexual reproduction.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c7-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path transform="translate(65 100) scale(1 1)" d="M-40 0 C-46 -22 -22 -38 -2 -33 C14 -44 42 -30 40 -4 C50 14 28 38 4 33 C-14 42 -42 26 -40 0Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><circle cx="65" cy="100" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path transform="translate(180 100) scale(1.05 0.95)" d="M-40 0 C-46 -22 -22 -38 -2 -33 C14 -44 42 -30 40 -4 C50 14 28 38 4 33 C-14 42 -42 26 -40 0Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><ellipse cx="180" cy="100" rx="20" ry="8" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M255 100 C255 70 285 66 315 80 C345 66 375 70 375 100 C375 130 345 134 315 120 C285 134 255 130 255 100Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><circle cx="288" cy="100" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="342" cy="100" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path transform="translate(435 100) scale(0.7 0.7)" d="M-40 0 C-46 -22 -22 -38 -2 -33 C14 -44 42 -30 40 -4 C50 14 28 38 4 33 C-14 42 -42 26 -40 0Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><path transform="translate(500 100) scale(0.7 0.7)" d="M-40 0 C-46 -22 -22 -38 -2 -33 C14 -44 42 -30 40 -4 C50 14 28 38 4 33 C-14 42 -42 26 -40 0Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><circle cx="435" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="500" cy="100" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="var(--dg-accent)" stroke-width="2" fill="none"><line x1="112" y1="100" x2="130" y2="100" marker-end="url(#ar-c7-2)"/><line x1="228" y1="100" x2="248" y2="100" marker-end="url(#ar-c7-2)"/><line x1="382" y1="100" x2="402" y2="100" marker-end="url(#ar-c7-2)"/></g>
  <line x1="65" y1="46" x2="65" y2="92" stroke="var(--dg-muted)"/><text x="65" y="40" text-anchor="middle">Nucleus</text>
  <g text-anchor="middle"><text x="65" y="165">Parent Amoeba</text><text x="180" y="165">Nucleus divides</text><text x="315" y="165">Cell constricts</text><text x="315" y="181" fill="var(--dg-muted)">in the middle</text><text x="467" y="165">Two daughter</text><text x="467" y="181">Amoebae</text></g>
</svg>`,
    },
    {
      title: "Longitudinal section of a flower",
      caption: "The **stamen** (anther + filament) is the male part and the **pistil** (stigma, style, ovary) is the female part. Ovules inside the ovary become seeds after fertilisation.",
      svg: `<svg viewBox="0 110 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M250 315 C170 300 150 200 165 130 C210 170 240 240 250 315Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><g transform="translate(560 0) scale(-1 1)"><path d="M250 315 C170 300 150 200 165 130 C210 170 240 240 250 315Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/></g><path d="M248 338 C190 338 160 315 150 290 C190 298 225 308 248 328Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><g transform="translate(560 0) scale(-1 1)"><path d="M248 338 C190 338 160 315 150 290 C190 298 225 308 248 328Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/></g>
  <path d="M232 322 V172" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M328 322 V172" stroke="currentColor" stroke-width="1.6" fill="none"/>
  <ellipse cx="232" cy="160" rx="9" ry="15" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><ellipse cx="328" cy="160" rx="9" ry="15" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M280 349 V388" stroke="currentColor" stroke-width="3"/><ellipse cx="280" cy="335" rx="38" ry="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><path d="M280 349 V349" stroke="currentColor" stroke-width="3"/>
  <rect x="276" y="140" width="8" height="75" fill="var(--dg-fill)" stroke="currentColor"/>
  <ellipse cx="280" cy="262" rx="28" ry="50" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="280" cy="235" r="7" fill="none" stroke="currentColor"/><circle cx="280" cy="262" r="7" fill="none" stroke="currentColor"/><circle cx="280" cy="289" r="7" fill="none" stroke="currentColor"/>
  <ellipse cx="280" cy="132" rx="14" ry="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g stroke="var(--dg-muted)"><line x1="143" y1="152" x2="221" y2="158"/><line x1="143" y1="232" x2="229" y2="232"/><line x1="143" y1="270" x2="190" y2="270"/><line x1="143" y1="312" x2="190" y2="310"/><line x1="417" y1="130" x2="296" y2="132"/><line x1="417" y1="178" x2="285" y2="178"/><line x1="417" y1="222" x2="305" y2="222"/><line x1="417" y1="262" x2="294" y2="262"/><line x1="417" y1="340" x2="320" y2="338"/></g>
  <g text-anchor="end"><text x="139" y="156">Anther</text><text x="139" y="236">Filament</text><text x="139" y="274">Petal</text><text x="139" y="316">Sepal</text></g>
  <text x="422" y="134">Stigma</text><text x="422" y="182">Style</text><text x="422" y="226">Ovary</text><text x="422" y="266">Ovule</text><text x="422" y="344">Receptacle</text>
</svg>`,
    },
    {
      title: "Human reproductive systems",
      caption: "Left: female system, where the ovary releases eggs into the oviduct and the fertilised egg grows in the uterus. Right: **male system, where the testes (in the scrotum) make sperms** that travel by the vas deferens to the urethra.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="175" y="20" text-anchor="middle" font-size="14">Female</text><text x="385" y="20" text-anchor="middle" font-size="14">Male</text>
  <path d="M139 80 C150 95 150 115 158 125" fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"/><path d="M139 80 C150 95 150 115 158 125" fill="none" stroke="var(--dg-fill)" stroke-width="6" stroke-linejoin="round"/><path d="M211 80 C200 95 200 115 192 125" fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"/><path d="M211 80 C200 95 200 115 192 125" fill="none" stroke="var(--dg-fill)" stroke-width="6" stroke-linejoin="round"/>
  <ellipse cx="125" cy="75" rx="14" ry="10" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><ellipse cx="225" cy="75" rx="14" ry="10" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M175 205 V290" fill="none" stroke="currentColor" stroke-width="15" stroke-linejoin="round"/><path d="M175 205 V290" fill="none" stroke="var(--dg-fill)" stroke-width="12" stroke-linejoin="round"/>
  <path d="M150 120 H200 L190 190 Q175 205 160 190Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="var(--dg-muted)"><line x1="96" y1="75" x2="110" y2="75"/><line x1="96" y1="108" x2="147" y2="108"/><line x1="96" y1="160" x2="158" y2="160"/><line x1="96" y1="205" x2="168" y2="205"/><line x1="96" y1="250" x2="168" y2="250"/></g>
  <g text-anchor="end"><text x="92" y="79">Ovary</text><text x="92" y="112">Oviduct</text><text x="92" y="164">Uterus</text><text x="92" y="209">Cervix</text><text x="92" y="254">Vagina</text></g>
  <path d="M385 94 V310" fill="none" stroke="currentColor" stroke-width="12" stroke-linejoin="round"/><path d="M385 94 V310" fill="none" stroke="var(--dg-fill)" stroke-width="9" stroke-linejoin="round"/>
  <circle cx="385" cy="68" r="24" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="338" y="212" width="94" height="73" rx="30" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M362 224 C340 190 345 140 372 128" fill="none" stroke="currentColor" stroke-width="5"/><path d="M362 224 C340 190 345 140 372 128" fill="none" stroke="var(--dg-fill)" stroke-width="2.5"/>
  <path d="M408 224 C430 190 425 140 398 128" fill="none" stroke="currentColor" stroke-width="5"/><path d="M408 224 C430 190 425 140 398 128" fill="none" stroke="var(--dg-fill)" stroke-width="2.5"/>
  <ellipse cx="362" cy="248" rx="17" ry="24" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><ellipse cx="408" cy="248" rx="17" ry="24" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="410" cy="108" rx="10" ry="6" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="385" cy="134" rx="16" ry="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g stroke="var(--dg-muted)"><line x1="446" y1="64" x2="409" y2="66"/><line x1="446" y1="96" x2="418" y2="105"/><line x1="446" y1="134" x2="401" y2="134"/><line x1="446" y1="168" x2="426" y2="168"/><line x1="446" y1="248" x2="426" y2="248"/><line x1="446" y1="282" x2="428" y2="276"/><line x1="446" y1="304" x2="391" y2="304"/><line x1="332" y1="200" x2="381" y2="200"/></g>
  <g font-size="12"><text x="450" y="68">Urinary bladder</text><text x="450" y="100">Seminal vesicle</text><text x="450" y="138">Prostate gland</text><text x="450" y="172">Vas deferens</text><text x="450" y="252">Testis</text><text x="450" y="286">Scrotum</text><text x="450" y="308">Penis</text></g>
  <text x="328" y="204" text-anchor="end" font-size="12">Urethra</text>
</svg>`,
    },
  ],
  "heredity": [
    {
      title: "Monohybrid cross (tall × dwarf pea plants)",
      caption: "All F₁ plants are tall because T is dominant. Self-pollination of F₁ gives **tall and dwarf in the ratio 3 : 1 in F₂**, so the recessive trait reappears.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c8-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="20" y="22" fill="var(--dg-muted)">Parents (P)</text>
  <rect x="20" y="32" width="100" height="34" rx="6" fill="var(--dg-fill)" stroke="currentColor"/><text x="70" y="48" text-anchor="middle">Tall plant</text><text x="70" y="62" text-anchor="middle">TT</text>
  <rect x="160" y="32" width="100" height="34" rx="6" fill="var(--dg-fill)" stroke="currentColor"/><text x="210" y="48" text-anchor="middle">Dwarf plant</text><text x="210" y="62" text-anchor="middle">tt</text>
  <text x="140" y="54" text-anchor="middle" font-size="16">×</text>
  <g stroke="var(--dg-accent)" stroke-width="1.8" fill="none"><line x1="70" y1="68" x2="70" y2="94" marker-end="url(#ar-c8-1)"/><line x1="210" y1="68" x2="210" y2="94" marker-end="url(#ar-c8-1)"/><line x1="70" y1="132" x2="125" y2="164" marker-end="url(#ar-c8-1)"/><line x1="210" y1="132" x2="155" y2="164" marker-end="url(#ar-c8-1)"/></g>
  <text x="140" y="116" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Gametes</text>
  <circle cx="70" cy="112" r="16" fill="none" stroke="currentColor"/><text x="70" y="117" text-anchor="middle">T</text><circle cx="210" cy="112" r="16" fill="none" stroke="currentColor"/><text x="210" y="117" text-anchor="middle">t</text>
  <rect x="85" y="168" width="110" height="40" rx="6" fill="var(--dg-fill)" stroke="currentColor"/><text x="140" y="185" text-anchor="middle">F₁: all tall</text><text x="140" y="201" text-anchor="middle">Tt</text>
  <line x1="200" y1="188" x2="320" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c8-1)"/>
  <text x="258" y="196" text-anchor="middle" font-size="12" fill="var(--dg-muted)">F₁ self-pollinated</text>
  <text x="440" y="22" text-anchor="middle">F₂ generation</text>
  <g fill="none" stroke="currentColor"><rect x="370" y="66" width="70" height="56" fill="var(--dg-fill)"/><rect x="440" y="66" width="70" height="56"/><rect x="370" y="122" width="70" height="56"/><rect x="440" y="122" width="70" height="56" fill="var(--dg-fill)"/></g>
  <text x="405" y="58" text-anchor="middle">T</text><text x="475" y="58" text-anchor="middle">t</text><text x="358" y="98" text-anchor="end">T</text><text x="358" y="154" text-anchor="end">t</text>
  <g text-anchor="middle" font-size="15"><text x="405" y="96">TT</text><text x="475" y="96">Tt</text><text x="405" y="152">Tt</text><text x="475" y="152">tt</text></g>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)"><text x="405" y="112">Tall</text><text x="475" y="112">Tall</text><text x="405" y="168">Tall</text><text x="475" y="168">Dwarf</text></g>
  <text x="440" y="214" text-anchor="middle">Phenotypic ratio: 3 tall : 1 dwarf</text>
  <text x="440" y="234" text-anchor="middle">Genotypic ratio: 1 TT : 2 Tt : 1 tt</text>
  <text x="140" y="260" text-anchor="middle" fill="var(--dg-muted)">T (tall) is dominant; t (dwarf) is recessive</text>
</svg>`,
    },
    {
      title: "Sex determination in humans",
      caption: "Every egg carries X, but a sperm carries either X or Y. **XX gives a girl and XY gives a boy**, so there is an equal chance of each.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c8-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="105" y="14" width="110" height="34" rx="6" fill="var(--dg-fill)" stroke="currentColor"/><text x="160" y="30" text-anchor="middle">Mother</text><text x="160" y="44" text-anchor="middle">44 + XX</text>
  <rect x="345" y="14" width="110" height="34" rx="6" fill="var(--dg-fill)" stroke="currentColor"/><text x="400" y="30" text-anchor="middle">Father</text><text x="400" y="44" text-anchor="middle">44 + XY</text>
  <text x="280" y="36" text-anchor="middle" font-size="16">×</text>
  <g stroke="var(--dg-accent)" stroke-width="1.8"><line x1="160" y1="50" x2="160" y2="72" marker-end="url(#ar-c8-2)"/><line x1="400" y1="50" x2="400" y2="72" marker-end="url(#ar-c8-2)"/></g>
  <text x="160" y="92" text-anchor="middle">Eggs: X, X</text><text x="400" y="92" text-anchor="middle">Sperms: X, Y</text>
  <g fill="none" stroke="currentColor"><rect x="240" y="150" width="90" height="55" fill="var(--dg-fill)"/><rect x="330" y="150" width="90" height="55"/><rect x="240" y="205" width="90" height="55"/><rect x="330" y="205" width="90" height="55" fill="var(--dg-fill)"/></g>
  <text x="285" y="142" text-anchor="middle">X <tspan fill="var(--dg-muted)" font-size="12">(sperm)</tspan></text><text x="375" y="142" text-anchor="middle">Y <tspan fill="var(--dg-muted)" font-size="12">(sperm)</tspan></text>
  <text x="232" y="182" text-anchor="end">X <tspan fill="var(--dg-muted)" font-size="12">(egg)</tspan></text><text x="232" y="237" text-anchor="end">X <tspan fill="var(--dg-muted)" font-size="12">(egg)</tspan></text>
  <g text-anchor="middle"><text x="285" y="176" font-size="15">XX</text><text x="375" y="176" font-size="15">XY</text><text x="285" y="231" font-size="15">XX</text><text x="375" y="231" font-size="15">XY</text></g>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)"><text x="285" y="193">Girl</text><text x="375" y="193">Boy</text><text x="285" y="248">Girl</text><text x="375" y="248">Boy</text></g>
  <text x="330" y="292" text-anchor="middle">Boy : girl = 1 : 1</text>
  <text x="330" y="312" text-anchor="middle" fill="var(--dg-muted)">The father's sperm (X or Y) decides the sex of the child</text>
</svg>`,
    },
  ],
  "light-reflection-and-refraction": [
    {
      title: "Convex lens: object beyond 2F₁",
      caption: "A ray parallel to the axis bends through F₂; a ray through the optical centre O goes straight on. Where they meet is the image: **between F₂ and 2F₂, real, inverted and smaller** (drawn to scale for f = 8 units, u = −20).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-l10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="20" y1="130" x2="540" y2="130" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <path d="M280 40 Q306 130 280 220 Q254 130 280 40Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor"><line x1="120" y1="125" x2="120" y2="135"/><line x1="200" y1="125" x2="200" y2="135"/><line x1="360" y1="125" x2="360" y2="135"/><line x1="440" y1="125" x2="440" y2="135"/></g>
  <text x="120" y="152" text-anchor="middle">2F₁</text><text x="200" y="152" text-anchor="middle">F₁</text>
  <text x="290" y="148">O</text><text x="360" y="152" text-anchor="middle">F₂</text><text x="440" y="152" text-anchor="middle">2F₂</text>
  <line x1="80" y1="130" x2="80" y2="82" stroke="currentColor" stroke-width="2.5" marker-end="url(#ar-l10)"/>
  <text x="80" y="72" text-anchor="middle">A</text><text x="80" y="148" text-anchor="middle">B</text>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <path d="M80 80 H280 L413 163" marker-mid="url(#ar-l10)"/>
    <line x1="280" y1="80" x2="346" y2="121" marker-end="url(#ar-l10)"/>
    <line x1="80" y1="80" x2="413" y2="163"/>
    <line x1="80" y1="80" x2="180" y2="105" marker-end="url(#ar-l10)"/>
  </g>
  <line x1="413" y1="130" x2="413" y2="161" stroke="currentColor" stroke-width="2.5" marker-end="url(#ar-l10)"/>
  <text x="413" y="182" text-anchor="middle">A′</text><text x="413" y="122" text-anchor="middle">B′</text>
  <text x="80" y="210" text-anchor="middle" fill="var(--dg-muted)">Object</text><text x="413" y="210" text-anchor="middle" fill="var(--dg-muted)">Image</text>
</svg>`,
    },
    {
      title: "Concave mirror: object beyond C",
      caption: "The ray parallel to the axis reflects through F; the ray through F reflects parallel to the axis. They meet at the image, **between C and F, real, inverted and smaller** than the object (drawn to scale: f = 80, u = −200).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-l11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-l11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="20" y1="130" x2="520" y2="130" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <path d="M475 30 Q485 130 475 230" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <g stroke="currentColor"><line x1="476.9" y1="40" x2="484.9" y2="48"/><line x1="478.6" y1="60" x2="486.6" y2="68"/><line x1="479.8" y1="80" x2="487.8" y2="88"/><line x1="480.6" y1="100" x2="488.6" y2="108"/><line x1="480.9" y1="120" x2="488.9" y2="128"/><line x1="480.9" y1="140" x2="488.9" y2="148"/><line x1="480.6" y1="160" x2="488.6" y2="168"/><line x1="479.8" y1="180" x2="487.8" y2="188"/><line x1="478.6" y1="200" x2="486.6" y2="208"/><line x1="476.9" y1="220" x2="484.9" y2="228"/>
  <line x1="320" y1="125" x2="320" y2="135"/><line x1="400" y1="125" x2="400" y2="135"/></g>
  <text x="320" y="148" text-anchor="middle" >C</text><text x="400" y="148" text-anchor="middle" >F</text><text x="488" y="124" text-anchor="start" >P</text>
  <line x1="280" y1="130" x2="280" y2="90" stroke="currentColor" stroke-width="2.2" marker-end="url(#ar-l11)"/><text x="280" y="80" text-anchor="middle" >A</text><text x="280" y="148" text-anchor="middle" >B</text>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <line x1="280" y1="90" x2="480" y2="90" /><line x1="374" y1="90" x2="380" y2="90" marker-end="url(#ra-l11)"/>
    <line x1="480" y1="90" x2="346.7" y2="156.7" /><line x1="424" y1="118" x2="420" y2="120" marker-end="url(#ra-l11)"/>
    <line x1="280" y1="90" x2="480" y2="156.7" /><line x1="374" y1="121.3" x2="380" y2="123.3" marker-end="url(#ra-l11)"/>
    <line x1="480" y1="156.7" x2="346.7" y2="156.7" /><line x1="424" y1="156.7" x2="420" y2="156.7" marker-end="url(#ra-l11)"/>
  </g>
  <line x1="346.7" y1="130" x2="346.7" y2="156.7" stroke="currentColor" stroke-width="2.2" marker-end="url(#ar-l11)"/><text x="346.7" y="174" text-anchor="middle" >A′</text><text x="334.7" y="125" text-anchor="middle" >B′</text>
  <text x="280" y="214" text-anchor="middle" fill="var(--dg-muted)">Object</text><text x="346.7" y="214" text-anchor="middle" fill="var(--dg-muted)">Image</text>
</svg>`,
    },
    {
      title: "Refraction through a rectangular glass slab",
      caption: "Entering glass the ray bends **towards the normal** (∠r < ∠i); leaving it bends **away from the normal**. The **emergent ray is parallel to the incident ray** (∠e = ∠i) but **laterally displaced**.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-l12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-l12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="120" y="110" width="320" height="100" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g stroke="var(--dg-muted)" stroke-dasharray="5 4"><line x1="240" y1="55" x2="240" y2="165"/><line x1="299.4" y1="155" x2="299.4" y2="265"/></g>
  <text x="240" y="48" text-anchor="middle" >Normal</text><text x="299.4" y="280" text-anchor="middle" >Normal</text>
  <line x1="240" y1="110" x2="450.9" y2="287" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <line x1="148.1" y1="32.9" x2="240" y2="110" /><line x1="191.3" y1="69.1" x2="194" y2="71.4" marker-end="url(#ra-l12)"/>
    <line x1="240" y1="110" x2="299.4" y2="210" /><line x1="270.9" y1="162" x2="272.7" y2="165" marker-end="url(#ra-l12)"/>
    <line x1="299.4" y1="210" x2="391.3" y2="287.1" /><line x1="351.8" y1="254" x2="354.6" y2="256.3" marker-end="url(#ra-l12)"/>
  </g>
  <line x1="347.1" y1="250" x2="371.8" y2="220.6" stroke="currentColor" stroke-width="1.2"/>
  <line x1="361.4" y1="235.3" x2="396" y2="226" stroke="var(--dg-muted)" stroke-width="0.8"/>
  <text x="400" y="230" text-anchor="start" >Lateral displacement</text>
  <text x="224" y="82" text-anchor="end" >i</text><text x="248" y="154" text-anchor="start" >r</text><text x="287.4" y="168" text-anchor="end" >r</text><text x="309.4" y="236" text-anchor="start" >e</text>
  <text x="130" y="134" text-anchor="start" >Glass slab</text><text x="28" y="28" text-anchor="start" >Air</text><text x="28" y="298" text-anchor="start" >Air</text>
  <text x="140.1" y="26.9" text-anchor="end" >Incident ray</text>
  <text x="272" y="180" text-anchor="end" >Refracted ray</text>
  <text x="401.3" y="299.1" text-anchor="start" >Emergent ray</text>
  <text x="232" y="106" text-anchor="end" >E</text><text x="291.4" y="204" text-anchor="end" >F</text>
</svg>`,
    },
    {
      title: "Concave lens: image of an object",
      caption: "A ray parallel to the axis diverges as if coming from F₁; a ray through O goes straight on. The diverging rays are traced back to meet at the image: **between O and F₁, virtual, erect and diminished** (drawn to scale: f = −100, u = −200).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-l13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-l13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="20" y1="130" x2="540" y2="130" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <path d="M255 40 H305 Q285 130 305 220 H255 Q275 130 255 40Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor"><line x1="180" y1="125" x2="180" y2="135"/><line x1="380" y1="125" x2="380" y2="135"/></g>
  <text x="180" y="152" text-anchor="middle" >F₁</text><text x="380" y="152" text-anchor="middle" >F₂</text><text x="292" y="150" text-anchor="start" >O</text>
  <line x1="80" y1="130" x2="80" y2="80" stroke="currentColor" stroke-width="2.2" marker-end="url(#ar-l13)"/><text x="80" y="70" text-anchor="middle" >A</text><text x="80" y="148" text-anchor="middle" >B</text>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <line x1="80" y1="80" x2="280" y2="80" /><line x1="174" y1="80" x2="180" y2="80" marker-end="url(#ra-l13)"/>
    <line x1="280" y1="80" x2="420" y2="10" /><line x1="338.8" y1="50.6" x2="343" y2="48.5" marker-end="url(#ra-l13)"/>
    <line x1="280" y1="80" x2="180" y2="130" stroke-dasharray="4 3"/>
    <line x1="80" y1="80" x2="400" y2="160" /><line x1="166.4" y1="101.6" x2="176" y2="104" marker-end="url(#ra-l13)"/>
  </g>
  <line x1="213.3" y1="130" x2="213.3" y2="113.3" stroke="currentColor" stroke-width="2.2" marker-end="url(#ar-l13)"/><text x="205.3" y="104" text-anchor="end" >A′</text><text x="213.3" y="148" text-anchor="middle" >B′</text>
  <text x="80" y="214" text-anchor="middle" fill="var(--dg-muted)">Object</text><text x="213.3" y="214" text-anchor="middle" fill="var(--dg-muted)">Image</text>
</svg>`,
    },
  ],
  "human-eye-and-colourful-world": [
    {
      title: "Structure of the human eye",
      caption: "Light enters through the **cornea**, passes the **pupil** (size controlled by the **iris**) and the **lens** (focal length adjusted by the **ciliary muscles**), and forms an inverted image on the **retina**; the **optic nerve** carries signals to the brain.",
      svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M197.5 110 A110 110 0 1 1 197.5 190 Q145 150 197.5 110Z" fill="var(--dg-fill)" opacity="0.55"/>
  <path d="M197.5 110 A110 110 0 1 1 197.5 190" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M197.5 190 Q145 150 197.5 110" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <path d="M327 48 A106 106 0 0 1 327 252" fill="none" stroke="currentColor" stroke-width="3.5"/>
  <path d="M405 180 Q435 190 475 210 L468 230 Q430 212 400 202Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="262" cy="150" rx="13" ry="32" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g stroke="currentColor" stroke-width="4"><line x1="228" y1="70" x2="228" y2="120"/><line x1="228" y1="180" x2="228" y2="230"/></g>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"><ellipse cx="268" cy="102" rx="13" ry="12"/><ellipse cx="268" cy="198" rx="13" ry="12"/></g>
  <g stroke="currentColor" stroke-width="1"><line x1="264" y1="113" x2="262" y2="122"/><line x1="264" y1="187" x2="262" y2="178"/></g>
  <g stroke="var(--dg-muted)" stroke-width="0.9" fill="none">
    <line x1="150" y1="64" x2="173.8" y2="127"/>
    <line x1="150" y1="150" x2="190" y2="150"/>
    <line x1="140" y1="238" x2="226" y2="216"/>
    <line x1="150" y1="214" x2="231" y2="172"/>
    <line x1="268" y1="38" x2="268" y2="90"/>
    <line x1="310" y1="38" x2="270" y2="120"/>
    <line x1="440" y1="66" x2="392.4" y2="96.7"/>
    <line x1="485" y1="243" x2="460" y2="226"/>
  </g>
  <text x="145" y="60" text-anchor="end" >Cornea</text><text x="145" y="154" text-anchor="end" >Aqueous humour</text><text x="135" y="244" text-anchor="end" >Iris</text><text x="145" y="218" text-anchor="end" >Pupil</text>
  <text x="268" y="30" text-anchor="end" >Ciliary muscles</text><text x="314" y="30" text-anchor="start" >Lens</text>
  <text x="444" y="62" text-anchor="start" >Retina</text><text x="490" y="253" text-anchor="start" >Optic nerve</text>
  <text x="348" y="146" text-anchor="middle" >Vitreous</text><text x="348" y="163" text-anchor="middle" >humour</text>
</svg>`,
    },
    {
      title: "Dispersion of white light by a glass prism",
      caption: "A prism splits white light into its seven colours, **VIBGYOR**. **Red bends least and violet bends most**, because the prism refracts each colour by a different amount.",
      svg: `<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-e2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-e2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M250,60 L170,200 L330,200Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <line x1="500" y1="170" x2="500" y2="340" stroke="currentColor" stroke-width="3"/>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <line x1="40" y1="175" x2="206" y2="137" /><line x1="118" y1="157.1" x2="123" y2="156" marker-end="url(#ra-e2)"/>
    <line x1="206" y1="137" x2="298" y2="144" /><line x1="249.2" y1="140.3" x2="252" y2="140.5" marker-end="url(#ra-e2)"/>
    <line x1="298" y1="144" x2="500" y2="200" stroke-opacity="1.00"/><line x1="298" y1="144" x2="500" y2="219" stroke-opacity="0.85"/><line x1="298" y1="144" x2="500" y2="238" stroke-opacity="0.85"/><line x1="298" y1="144" x2="500" y2="257" stroke-opacity="0.85"/><line x1="298" y1="144" x2="500" y2="276" stroke-opacity="0.85"/><line x1="298" y1="144" x2="500" y2="295" stroke-opacity="0.85"/><line x1="298" y1="144" x2="500" y2="314" stroke-opacity="1.00"/>
  </g>
  <text x="510" y="204" text-anchor="start" >Red</text><text x="510" y="223" text-anchor="start" >Orange</text><text x="510" y="242" text-anchor="start" >Yellow</text><text x="510" y="261" text-anchor="start" >Green</text><text x="510" y="280" text-anchor="start" >Blue</text><text x="510" y="299" text-anchor="start" >Indigo</text><text x="510" y="318" text-anchor="start" >Violet</text>
  <text x="40" y="165" text-anchor="start" >White light</text>
  <text x="250" y="50" text-anchor="middle" >Apex</text><text x="160" y="218" text-anchor="end" >Base</text><text x="250" y="218" text-anchor="middle" >Glass prism</text>
  <text x="500" y="160" text-anchor="middle" >Screen</text><text x="308" y="132" text-anchor="start" fill="var(--dg-muted)">Dispersion</text>
</svg>`,
    },
    {
      title: "Myopia and its correction",
      caption: "In a myopic eye distant objects focus **in front of the retina**, so they look blurred. A **concave (diverging) lens** of suitable power spreads the rays slightly so the image falls **on the retina**.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-e3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-e3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="180" cy="120" r="70" fill="var(--dg-fill)" opacity="0.55"/><circle cx="180" cy="120" r="70" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M223 70 A66 66 0 0 1 223 170" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="118" cy="120" rx="6" ry="21" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><circle cx="460" cy="120" r="70" fill="var(--dg-fill)" opacity="0.55"/><circle cx="460" cy="120" r="70" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M503 70 A66 66 0 0 1 503 170" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="398" cy="120" rx="6" ry="21" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><line x1="10" y1="120" x2="252" y2="120" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="290" y1="120" x2="532" y2="120" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <line x1="10" y1="100" x2="118" y2="100" /><line x1="60.8" y1="100" x2="64" y2="100" marker-end="url(#ra-e3)"/><line x1="10" y1="140" x2="118" y2="140" /><line x1="60.8" y1="140" x2="64" y2="140" marker-end="url(#ra-e3)"/>
    <line x1="118" y1="100" x2="225" y2="120"/><line x1="118" y1="140" x2="225" y2="120"/>
    <line x1="225" y1="120" x2="250" y2="124.7"/><line x1="225" y1="120" x2="250" y2="115.3"/>
    <line x1="290" y1="100" x2="335" y2="100" /><line x1="311.1" y1="100" x2="312.5" y2="100" marker-end="url(#ra-e3)"/><line x1="290" y1="140" x2="335" y2="140" /><line x1="311.1" y1="140" x2="312.5" y2="140" marker-end="url(#ra-e3)"/>
    <line x1="335" y1="100" x2="398" y2="94"/><line x1="335" y1="140" x2="398" y2="146"/>
    <line x1="398" y1="94" x2="528" y2="120"/><line x1="398" y1="146" x2="528" y2="120"/>
    <line x1="353" y1="98.4" x2="357" y2="98" marker-end="url(#ra-e3)"/>
  </g>
  <path d="M327 60 H345 Q337 120 345 180 H327 Q335 120 327 60Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="225" cy="120" r="3" fill="var(--dg-accent)"/>
  <line x1="246" y1="190" x2="238" y2="156" stroke="var(--dg-muted)" stroke-width="0.9"/><text x="250" y="205" text-anchor="middle" >Retina</text>
  <text x="135" y="232" text-anchor="middle" >Rays focus in front of retina</text>
  <text x="135" y="28" text-anchor="middle" >Myopia (near-sightedness)</text><text x="415" y="28" text-anchor="middle" >Corrected by a concave lens</text>
  <text x="336" y="198" text-anchor="middle" >Concave lens</text><text x="460" y="232" text-anchor="middle" >Image formed on retina</text>
  <text x="135" y="252" text-anchor="middle" fill="var(--dg-muted)">(eyeball too long, or lens too curved)</text>
</svg>`,
    },
  ],
  "electricity": [
    {
      title: "Circuit to verify Ohm’s law",
      caption: "The **ammeter** is connected in **series** with the resistor R, the **voltmeter** in **parallel** across it. The **rheostat** changes the current so a series of readings of V and I can be taken.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-el1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-el1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M80 60 H125 M170 60 H274 M306 60 H480 V105 M480 175 V220 H370 M250 220 H80 V148 M80 112 V60"/>
    <path d="M250 220 L262 220 L270 210 L286 230 L302 210 L318 230 L334 210 L350 230 L358 220 L370 220"/>
    <path d="M250 220 V280 H294 M326 280 H370 V220"/>
    <path d="M125 60 L165 36"/>
    <rect x="468" y="105" width="24" height="70"/>
    <path d="M434 140 H468"/>
  </g>
  <circle cx="125" cy="60" r="3"/><circle cx="170" cy="60" r="3"/><circle cx="250" cy="220" r="3"/><circle cx="370" cy="220" r="3"/>
  <g stroke="currentColor" stroke-width="2.6"><line x1="64" y1="112" x2="96" y2="112"/><line x1="71" y1="124" x2="89" y2="124"/><line x1="64" y1="136" x2="96" y2="136"/><line x1="71" y1="148" x2="89" y2="148"/></g>
  <circle cx="290" cy="60" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g><circle cx="310" cy="280" r="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/></g>
  <text x="290" y="65" text-anchor="middle" >A</text><text x="310" y="285" text-anchor="middle" >V</text>
  <path d="M434 140 l8 -5 v10z" fill="currentColor" stroke="none"/>
  <text x="115" y="38" text-anchor="middle" >Key (K)</text><text x="290" y="96" text-anchor="middle" >Ammeter</text><text x="310" y="318" text-anchor="middle" >Voltmeter</text>
  <text x="310" y="198" text-anchor="middle" >Resistor R</text><text x="430" y="92" text-anchor="middle" >Rheostat</text><text x="110" y="134" text-anchor="start" >Battery</text>
  <text x="102" y="110" font-size="13">+</text><text x="102" y="158" font-size="13">−</text>
  <g stroke="var(--dg-accent)" stroke-width="1.6"><line x1="205" y1="60" x2="226" y2="60" marker-end="url(#ra-el1)"/></g>
  <text x="215" y="50" text-anchor="middle" fill="var(--dg-muted)">I</text>
</svg>`,
    },
    {
      title: "V–I graph for a metallic conductor",
      caption: "For an ohmic conductor at constant temperature the **V–I graph is a straight line through the origin**, so V/I is constant. Its **slope gives the resistance R**; a steeper line means a larger resistance.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-el2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-el2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.8"><line x1="100" y1="260" x2="100" y2="30" marker-end="url(#ar-el2)"/><line x1="100" y1="260" x2="500" y2="260" marker-end="url(#ar-el2)"/></g>
  <line x1="100" y1="260" x2="440" y2="60" stroke="var(--dg-accent)" stroke-width="2"/>
  <g stroke="var(--dg-muted)" stroke-dasharray="5 4"><line x1="100" y1="110" x2="360" y2="110"/><line x1="360" y1="110" x2="360" y2="260"/></g>
  <circle cx="360" cy="110" r="3.5" fill="var(--dg-accent)"/>
  <text x="92" y="34" text-anchor="end" >V (volt)</text><text x="500" y="282" text-anchor="end" >I (ampere)</text><text x="88" y="276" text-anchor="end" >O</text>
  <text x="92" y="114" text-anchor="end" >V</text><text x="360" y="280" text-anchor="middle" >I</text><text x="372" y="100" text-anchor="start" >P</text>
  <text x="130" y="56" text-anchor="start" >V ∝ I: a straight line</text><text x="130" y="74" text-anchor="start" >through the origin</text>
  <text x="130" y="98" text-anchor="start" >Slope = V / I = R</text>
  <text x="250" y="310" text-anchor="middle" fill="var(--dg-muted)">At constant temperature</text>
</svg>`,
    },
    {
      title: "Resistors in series and in parallel",
      caption: "**Series:** the same current flows through every resistor and **R = R₁ + R₂ + R₃**. **Parallel:** the potential difference across each resistor is the same and **1/R = 1/R₁ + 1/R₂ + 1/R₃**.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-el3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-el3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M40 60 H70 M70 60 L78 60 L80.4 52 L85.2 68 L90 52 L94.8 68 L99.6 52 L102 60 L110 60 H130 M130 60 L138 60 L140.4 52 L145.2 68 L150 52 L154.8 68 L159.6 52 L162 60 L170 60 H190 M190 60 L198 60 L200.4 52 L205.2 68 L210 52 L214.8 68 L219.6 52 L222 60 L230 60 H250 V200 H40 V140 M40 120 V60"/>
    <path d="M300 60 H330 H530 V200 H300 V140 M300 120 V60"/>
    <path d="M370 60 V80 L370 88 L378 95.4 L362 110.2 L378 125 L362 139.8 L378 154.6 L370 162 L370 170 V200"/>
    <path d="M440 60 V80 L440 88 L448 95.4 L432 110.2 L448 125 L432 139.8 L448 154.6 L440 162 L440 170 V200"/>
    <path d="M510 60 V80 L510 88 L518 95.4 L502 110.2 L518 125 L502 139.8 L518 154.6 L510 162 L510 170 V200"/>
  </g>
  <g fill="currentColor"><circle cx="370" cy="60" r="3"/><circle cx="440" cy="60" r="3"/><circle cx="510" cy="60" r="3"/><circle cx="370" cy="200" r="3"/><circle cx="440" cy="200" r="3"/><circle cx="510" cy="200" r="3"/></g>
  <g stroke="currentColor" stroke-width="2.4"><line x1="35" y1="120" x2="45" y2="120"/><line x1="37" y1="127" x2="43" y2="127"/><line x1="35" y1="134" x2="45" y2="134"/><line x1="37" y1="141" x2="43" y2="141"/></g><g stroke="currentColor" stroke-width="2.4"><line x1="295" y1="120" x2="305" y2="120"/><line x1="297" y1="127" x2="303" y2="127"/><line x1="295" y1="134" x2="305" y2="134"/><line x1="297" y1="141" x2="303" y2="141"/></g>
  <text x="90" y="44" text-anchor="middle" >R₁</text><text x="150" y="44" text-anchor="middle" >R₂</text><text x="210" y="44" text-anchor="middle" >R₃</text>
  <text x="356" y="128" text-anchor="end" >R₁</text><text x="426" y="128" text-anchor="end" >R₂</text><text x="496" y="128" text-anchor="end" >R₃</text>
  <text x="145" y="235" text-anchor="middle" >Resistors in series</text><text x="415" y="235" text-anchor="middle" >Resistors in parallel</text>
  <text x="25" y="134" text-anchor="end" >+</text><text x="284" y="134" text-anchor="end" >+</text>
</svg>`,
    },
  ],
  "magnetic-effects-of-electric-current": [
    {
      title: "Magnetic field lines of a bar magnet",
      caption: "Outside the magnet the field lines **emerge from the north pole and merge at the south pole**; inside, they run from S to N, so each line is a **closed curve**. Lines never cross, and they are **closest together near the poles**, where the field is strongest.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-m1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="210" y="125" width="70" height="50" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <rect x="280" y="125" width="70" height="50" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="245" y="157" text-anchor="middle" font-size="16">N</text><text x="315" y="157" text-anchor="middle" font-size="16">S</text>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="1.5">
    <path d="M210 150 A80 30 0 1 1 350 150"/><path d="M210 150 A80 30 0 1 0 350 150"/><path d="M210 150 A105 48 0 1 1 350 150"/><path d="M210 150 A105 48 0 1 0 350 150"/><path d="M210 150 A135 62 0 1 1 350 150"/><path d="M210 150 A135 62 0 1 0 350 150"/>
    <line x1="210" y1="150" x2="90" y2="150"/><line x1="470" y1="150" x2="350" y2="150"/>
    <line x1="340" y1="135" x2="220" y2="135"/>
    <line x1="274" y1="105.5" x2="290" y2="105.5" marker-end="url(#ra-m1)"/><line x1="274" y1="194.5" x2="290" y2="194.5" marker-end="url(#ra-m1)"/><line x1="274" y1="66.2" x2="290" y2="66.2" marker-end="url(#ra-m1)"/><line x1="274" y1="233.8" x2="290" y2="233.8" marker-end="url(#ra-m1)"/><line x1="274" y1="35" x2="290" y2="35" marker-end="url(#ra-m1)"/><line x1="274" y1="265" x2="290" y2="265" marker-end="url(#ra-m1)"/>
    <line x1="150" y1="150" x2="130" y2="150" marker-end="url(#ra-m1)"/>
    <line x1="430" y1="150" x2="410" y2="150" marker-end="url(#ra-m1)"/>
    <line x1="290" y1="135" x2="270" y2="135" marker-end="url(#ra-m1)"/>
  </g>
</svg>`,
    },
    {
      title: "Magnetic field of a current-carrying solenoid",
      caption: "The field of a solenoid resembles that of a **bar magnet**: one end acts as the **north pole** and the other as the **south pole**. Inside, the field lines are **parallel straight lines**, so the field is **uniform**.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="1.5">
    <path d="M190 140 A100 50 0 1 1 370 140"/><path d="M190 140 A125 62 0 1 1 370 140"/><path d="M190 140 A155 75 0 1 1 370 140"/>
    <line x1="274" y1="78.2" x2="290" y2="78.2" marker-end="url(#ra-m2)"/><line x1="274" y1="45" x2="290" y2="45" marker-end="url(#ra-m2)"/><line x1="274" y1="13.9" x2="290" y2="13.9" marker-end="url(#ra-m2)"/>
  </g>
    <g fill="none" stroke="currentColor" stroke-width="2"><path d="M200 100 A8 40 0 0 1 200 180"/><path d="M220 100 A8 40 0 0 1 220 180"/><path d="M240 100 A8 40 0 0 1 240 180"/><path d="M260 100 A8 40 0 0 1 260 180"/><path d="M280 100 A8 40 0 0 1 280 180"/><path d="M300 100 A8 40 0 0 1 300 180"/><path d="M320 100 A8 40 0 0 1 320 180"/><path d="M340 100 A8 40 0 0 1 340 180"/><path d="M360 100 A8 40 0 0 1 360 180"/></g>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M200 180 H165 V270 H272"/><path d="M284 270 H410 V180 H360"/>
    <line x1="272" y1="258" x2="272" y2="282" stroke-width="2.6"/><line x1="284" y1="264" x2="284" y2="276" stroke-width="2.6"/>
  </g>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="1.5">
    <line x1="165" y1="240" x2="165" y2="215" marker-end="url(#ra-m2)"/><line x1="410" y1="215" x2="410" y2="240" marker-end="url(#ra-m2)"/>
    <line x1="345" y1="120" x2="215" y2="120"/><line x1="290" y1="120" x2="270" y2="120" marker-end="url(#ra-m2)"/><line x1="345" y1="140" x2="215" y2="140"/><line x1="290" y1="140" x2="270" y2="140" marker-end="url(#ra-m2)"/><line x1="345" y1="160" x2="215" y2="160"/><line x1="290" y1="160" x2="270" y2="160" marker-end="url(#ra-m2)"/>
  </g>
  <text x="278" y="300" text-anchor="middle" >Battery</text><text x="262" y="284" text-anchor="end" >+</text><text x="296" y="284" text-anchor="start" >−</text>
  <text x="150" y="160" text-anchor="end" font-size="15">N</text><text x="400" y="160" text-anchor="start" font-size="15">S</text>
  <text x="280" y="222" text-anchor="middle" >Solenoid</text><text x="150" y="225" text-anchor="end" fill="var(--dg-muted)">I</text><text x="425" y="225" text-anchor="start" fill="var(--dg-muted)">I</text>
</svg>`,
    },
    {
      title: "Electric motor",
      caption: "A rectangular **coil** between the poles of a magnet carries current. The two vertical sides carry current in opposite directions, so the forces on them are opposite (**out of and into the page**) and **turn the coil**. The **split-ring commutator** reverses the current every half turn so the coil keeps rotating one way.",
      svg: `<svg viewBox="0 0 560 350" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-m3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="40" y="85" width="70" height="120" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <rect x="470" y="85" width="70" height="120" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="75" y="152" text-anchor="middle" font-size="18">N</text><text x="505" y="152" text-anchor="middle" font-size="18">S</text>
  <g stroke="var(--dg-accent)" stroke-width="1.5" fill="none"><line x1="112" y1="105" x2="468" y2="105" /><line x1="151.2" y1="105" x2="161.8" y2="105" marker-end="url(#ra-m3)"/><line x1="112" y1="185" x2="468" y2="185" /><line x1="151.2" y1="185" x2="161.8" y2="185" marker-end="url(#ra-m3)"/></g>
  <text x="160" y="97" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Magnetic field</text>
  <line x1="290" y1="70" x2="290" y2="232" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <path d="M210 250 V90 H370 V250" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M210 250 H272"/><path d="M370 250 H308"/></g>
  <path d="M289 232 A18 18 0 0 0 289 268" fill="none" stroke="currentColor" stroke-width="4"/>
  <path d="M291 232 A18 18 0 0 1 291 268" fill="none" stroke="currentColor" stroke-width="4"/>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"><rect x="273" y="266" width="10" height="16"/><rect x="297" y="266" width="10" height="16"/></g>
  <g fill="none" stroke="currentColor" stroke-width="1.6"><path d="M278 282 V312 H286"/><path d="M302 282 V312 H294"/></g>
  <g stroke="currentColor" stroke-width="2.6"><line x1="286" y1="305" x2="286" y2="319"/><line x1="294" y1="301" x2="294" y2="323"/></g>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <line x1="370" y1="160" x2="370" y2="135" marker-end="url(#ra-m3)"/>
    <line x1="330" y1="90" x2="310" y2="90" marker-end="url(#ra-m3)"/>
    <line x1="210" y1="135" x2="210" y2="160" marker-end="url(#ra-m3)"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="190" cy="215" r="7"/><circle cx="390" cy="215" r="7"/><path d="M385 210 L395 220 M395 210 L385 220"/></g>
  <circle cx="190" cy="215" r="2" fill="currentColor"/>
  <text x="180" y="238" text-anchor="end" font-size="12">Force out</text><text x="400" y="238" text-anchor="start" font-size="12">Force in</text>
  <line x1="383" y1="258" x2="309" y2="258" stroke="var(--dg-muted)" stroke-width="0.9"/>
  <text x="388" y="262" text-anchor="start" >Split-ring commutator</text>
  <text x="264" y="282" text-anchor="end" >Brush</text><text x="318" y="282" text-anchor="start" >Brush</text>
  <text x="290" y="340" text-anchor="middle" >Battery</text><text x="245" y="314" text-anchor="end" >−</text><text x="335" y="314" text-anchor="start" >+</text>
  <text x="290" y="60" text-anchor="middle" >Axle</text><text x="330" y="80" text-anchor="start" >Coil</text>
</svg>`,
    },
  ],
  "our-environment": [
    {
      title: "Food chain and the 10% law",
      caption: "Energy flows in **one direction** along a food chain. Only about **10% of the energy** passes to the next trophic level; the rest is used for life processes or lost as heat, so food chains rarely exceed **4–5 levels**.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-en1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-en1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="20" y="90" width="92" height="52" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="66" y="121" text-anchor="middle" >Grass</text><text x="66" y="168" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Producer</text><line x1="112" y1="116" x2="128" y2="116" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-en1)"/><text x="66" y="62" text-anchor="middle" font-weight="600">10 000 J</text><rect x="128" y="90" width="92" height="52" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="174" y="121" text-anchor="middle" >Grasshopper</text><text x="174" y="168" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Primary</text><text x="174" y="182" text-anchor="middle" fill="var(--dg-muted)" font-size="12">consumer</text><line x1="220" y1="116" x2="236" y2="116" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-en1)"/><text x="174" y="62" text-anchor="middle" font-weight="600">1 000 J</text><rect x="236" y="90" width="92" height="52" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="282" y="121" text-anchor="middle" >Frog</text><text x="282" y="168" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Secondary</text><text x="282" y="182" text-anchor="middle" fill="var(--dg-muted)" font-size="12">consumer</text><line x1="328" y1="116" x2="344" y2="116" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-en1)"/><text x="282" y="62" text-anchor="middle" font-weight="600">100 J</text><rect x="344" y="90" width="92" height="52" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="390" y="121" text-anchor="middle" >Snake</text><text x="390" y="168" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Tertiary</text><text x="390" y="182" text-anchor="middle" fill="var(--dg-muted)" font-size="12">consumer</text><line x1="436" y1="116" x2="452" y2="116" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-en1)"/><text x="390" y="62" text-anchor="middle" font-weight="600">10 J</text><rect x="452" y="90" width="92" height="52" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="498" y="121" text-anchor="middle" >Hawk</text><text x="498" y="168" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Top</text><text x="498" y="182" text-anchor="middle" fill="var(--dg-muted)" font-size="12">carnivore</text><text x="498" y="62" text-anchor="middle" font-weight="600">1 J</text>
  <line x1="40" y1="212" x2="520" y2="212" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ra-en1)"/>
  <text x="280" y="236" text-anchor="middle" fill="var(--dg-muted)">Energy available falls to about 10% at each step</text>
  <text x="280" y="26" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Energy at each trophic level (from 10 000 J of sunlight captured by grass)</text>
</svg>`,
    },
    {
      title: "Pyramid of energy",
      caption: "The **pyramid of energy is always upright**: because only about **10%** of the energy is passed on, each higher trophic level has less energy than the one below it.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-en2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ra-en2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="50" y="190" width="380" height="42" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="240" y="216" text-anchor="middle" font-weight="600">10 000 J</text><line x1="430" y1="211" x2="444" y2="211" stroke="var(--dg-muted)" stroke-width="0.9"/><text x="448" y="216" text-anchor="start" >Producers</text><rect x="105" y="142" width="270" height="42" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="240" y="168" text-anchor="middle" font-weight="600">1 000 J</text><line x1="375" y1="163" x2="389" y2="163" stroke="var(--dg-muted)" stroke-width="0.9"/><text x="393" y="168" text-anchor="start" >Primary consumers</text><rect x="155" y="94" width="170" height="42" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="240" y="120" text-anchor="middle" font-weight="600">100 J</text><line x1="325" y1="115" x2="339" y2="115" stroke="var(--dg-muted)" stroke-width="0.9"/><text x="343" y="120" text-anchor="start" >Secondary consumers</text><rect x="195" y="46" width="90" height="42" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="240" y="72" text-anchor="middle" font-weight="600">10 J</text><line x1="285" y1="67" x2="299" y2="67" stroke="var(--dg-muted)" stroke-width="0.9"/><text x="303" y="72" text-anchor="start" >Tertiary consumers</text>
  <line x1="40" y1="225" x2="40" y2="30" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-en2)"/>
  <text x="52" y="40" text-anchor="start" >Trophic</text><text x="52" y="56" text-anchor="start" >level rises</text>
  <text x="240" y="255" text-anchor="middle" fill="var(--dg-muted)">Pyramid of energy (always upright)</text>
</svg>`,
    },
  ],
});
