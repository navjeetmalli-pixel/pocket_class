// Class 9 Science diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(9, "sciencepb", {
  "matter-in-our-surroundings": [
    {
      title: "Interconversion of the three states of matter",
      caption: "Changing temperature (or pressure) moves matter between states. **Melting, vaporisation and sublimation absorb heat; freezing, condensation and deposition release it.** Solids such as camphor and ammonium chloride sublime straight to gas.",
      svg: `<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="30" y="100" width="80" height="40" rx="6"/><rect x="240" y="100" width="80" height="40" rx="6"/><rect x="450" y="100" width="80" height="40" rx="6"/></g>
  <g text-anchor="middle" font-size="14"><text x="70" y="125">Solid</text><text x="280" y="125">Liquid</text><text x="490" y="125">Gas</text></g>
  <g stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-s9-1)">
    <line x1="114" y1="112" x2="236" y2="112"/><line x1="236" y1="128" x2="114" y2="128"/>
    <line x1="324" y1="112" x2="446" y2="112"/><line x1="446" y1="128" x2="324" y2="128"/>
    <path d="M70 98 V55 H490 V98"/><path d="M490 142 V195 H70 V142"/>
  </g>
  <g text-anchor="middle">
    <text x="175" y="88">Melting</text><text x="175" y="101" font-size="12" fill="var(--dg-muted)">heat absorbed</text>
    <text x="175" y="152">Freezing</text><text x="175" y="166" font-size="12" fill="var(--dg-muted)">heat released</text>
    <text x="385" y="88">Vaporisation</text><text x="385" y="101" font-size="12" fill="var(--dg-muted)">heat absorbed</text>
    <text x="385" y="152">Condensation</text><text x="385" y="166" font-size="12" fill="var(--dg-muted)">heat released</text>
    <text x="280" y="47">Sublimation</text><text x="280" y="213">Deposition</text>
  </g>
</svg>`,
    },
  ],
  "is-matter-around-us-pure": [
    {
      title: "Classification of matter",
      caption: "Matter is either a **pure substance** (fixed composition: elements and compounds) or a **mixture** of two or more substances in any proportion (homogeneous or heterogeneous).",
      svg: `<svg viewBox="0 0 560 225" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6">
    <rect x="220" y="10" width="120" height="30" rx="5"/>
    <rect x="80" y="75" width="130" height="30" rx="5"/><rect x="350" y="75" width="130" height="30" rx="5"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <rect x="15" y="140" width="120" height="30" rx="5"/><rect x="155" y="140" width="120" height="30" rx="5"/>
    <rect x="285" y="140" width="120" height="30" rx="5"/><rect x="425" y="140" width="120" height="30" rx="5"/>
    <path d="M280 40 V57 M145 57 H415 M145 57 V75 M415 57 V75"/>
    <path d="M145 105 V122 M75 122 H215 M75 122 V140 M215 122 V140"/>
    <path d="M415 105 V122 M345 122 H485 M345 122 V140 M485 122 V140"/>
  </g>
  <g text-anchor="middle">
    <text x="280" y="30" font-size="14">Matter</text>
    <text x="145" y="95">Pure substances</text><text x="415" y="95">Mixtures</text>
    <text x="75" y="160">Elements</text><text x="215" y="160">Compounds</text>
    <text x="345" y="160">Homogeneous</text><text x="485" y="160">Heterogeneous</text>
    <g font-size="12" fill="var(--dg-muted)">
      <text x="75" y="192">Fe, O₂, Au</text><text x="215" y="192">H₂O, NaCl</text>
      <text x="345" y="192">salt solution,</text><text x="345" y="208">alloys, air</text>
      <text x="485" y="192">sand + water,</text><text x="485" y="208">oil + water</text>
    </g>
  </g>
</svg>`,
    },
    {
      title: "Simple distillation",
      caption: "Used to separate a liquid from a dissolved solid, or two liquids with a large boiling-point difference. **The liquid boils, its vapour is cooled in the condenser (water flows in at the lower end) and the pure distillate collects in the receiver.**",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g transform="translate(35 0)">
    <path d="M64 200 A46 46 0 0 0 156 200 Z" fill="var(--dg-fill)" opacity="0.7"/>
    <path d="M120 124 V155 A46 46 0 1 1 100 155 V95 H120 V108" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <rect x="97" y="88" width="26" height="10" fill="var(--dg-fill)" stroke="currentColor"/>
    <line x1="110" y1="60" x2="110" y2="112" stroke="currentColor" stroke-width="1.6"/><circle cx="110" cy="115" r="3.5" fill="currentColor"/>
    <rect x="205" y="94" width="190" height="44" fill="var(--dg-fill)" opacity="0.5" stroke="currentColor" stroke-width="1.8"/>
    <path d="M120 108 H440 M120 124 H440" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <path d="M235 94 V70 M370 138 V162" fill="none" stroke="currentColor" stroke-width="1.6"/>
    <g stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-s9-2)">
      <line x1="235" y1="90" x2="235" y2="62"/><line x1="370" y1="176" x2="370" y2="142"/><line x1="440" y1="132" x2="440" y2="190"/>
    </g>
    <path d="M410 190 V270 H490 V190" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <rect x="411" y="238" width="78" height="31" fill="var(--dg-fill)" opacity="0.8"/>
    <rect x="55" y="252" width="110" height="4" fill="currentColor"/>
    <path d="M62 256 L50 305 M158 256 L170 305" stroke="currentColor" stroke-width="1.8" fill="none"/>
    <rect x="102" y="285" width="16" height="20" fill="none" stroke="currentColor"/>
    <path d="M110 283 Q101 272 110 262 Q119 272 110 283Z" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/>
    <g text-anchor="end"><text x="58" y="198">Distillation</text><text x="58" y="214">flask</text><text x="92" y="97">Cork</text></g>
    <text x="126" y="66">Thermometer</text>
    <text x="110" y="228" text-anchor="middle">Mixture</text>
    <text x="162" y="102" text-anchor="middle" fill="var(--dg-muted)">Vapour</text>
    <text x="290" y="158" text-anchor="middle">Liebig condenser</text>
    <text x="235" y="54" text-anchor="middle">Water out</text><text x="370" y="192" text-anchor="middle">Water in</text>
    <text x="450" y="259" text-anchor="middle">Distillate</text><text x="450" y="290" text-anchor="middle">Receiver (beaker)</text>
    <text x="172" y="268">Wire gauze</text><text x="182" y="296">Tripod stand</text><text x="110" y="324" text-anchor="middle">Burner</text>
  </g>
</svg>`,
    },
  ],
  "structure-of-the-atom": [
    {
      title: "Rutherford's alpha-particle scattering experiment",
      caption: "A beam of α-particles was fired at thin gold foil. **Most passed straight through (the atom is mostly empty space), a few were deflected (the nucleus is positively charged) and very few rebounded (the nucleus is tiny and dense).**",
      svg: `<svg viewBox="0 0 560 350" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="14" y="85" width="30" height="130" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="296" y="40" width="8" height="220" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/>
  <path d="M445.6 27.9 A190 190 0 0 1 445.6 272.1" fill="none" stroke="currentColor" stroke-width="3"/>
  <g stroke="var(--dg-accent)" stroke-width="1.6" fill="none">
    <path d="M44 100 H483"/><path d="M44 160 H490"/><path d="M44 130 H300 L468 60.6"/><path d="M44 200 H298 L190 232"/>
  </g>
  <g fill="currentColor"><circle cx="300" cy="140" r="3.5"/><circle cx="300" cy="200" r="3.5"/></g>
  <g text-anchor="middle"><text x="300" y="30">Thin gold foil</text><text x="52" y="238">Source of</text><text x="52" y="254">α-particles</text></g>
  <text x="312" y="218">Nucleus</text><text x="490" y="95">1</text><text x="478" y="55">2</text><text x="176" y="248">3</text>
  <text x="550" y="290" text-anchor="end">Fluorescent screen</text>
  <g font-size="12" fill="var(--dg-muted)"><text x="10" y="310">1  Most α-particles go straight through: the atom is mostly empty space.</text><text x="10" y="326">2  A few are deflected: the nucleus is positively charged.</text><text x="10" y="342">3  Very few (about 1 in 12000) rebound: the nucleus is very small and dense.</text></g>
</svg>`,
    },
    {
      title: "Bohr models: carbon, sodium and chlorine",
      caption: "Electrons fill shells in the order **K (max 2), L (max 8), M (max 8 for the first 20 elements)**. The outermost shell decides the valency: carbon 4, sodium 1, chlorine 1 (needs 1 more to reach 8).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="95" cy="108" r="19" fill="var(--dg-fill)" stroke="currentColor"/><text x="95" y="106" text-anchor="middle" font-size="12">6p</text><text x="95" y="119" text-anchor="middle" font-size="12">6n</text><circle cx="95" cy="108" r="32" fill="none" stroke="var(--dg-muted)"/><circle cx="95.0" cy="76.0" r="3" fill="currentColor"/><circle cx="95.0" cy="140.0" r="3" fill="currentColor"/><circle cx="95" cy="108" r="52" fill="none" stroke="var(--dg-muted)"/><circle cx="115.2" cy="60.1" r="3" fill="currentColor"/><circle cx="142.9" cy="128.2" r="3" fill="currentColor"/><circle cx="74.8" cy="155.9" r="3" fill="currentColor"/><circle cx="47.1" cy="87.8" r="3" fill="currentColor"/>
  <circle cx="280" cy="108" r="19" fill="var(--dg-fill)" stroke="currentColor"/><text x="280" y="106" text-anchor="middle" font-size="12">11p</text><text x="280" y="119" text-anchor="middle" font-size="12">12n</text><circle cx="280" cy="108" r="32" fill="none" stroke="var(--dg-muted)"/><circle cx="280.0" cy="76.0" r="3" fill="currentColor"/><circle cx="280.0" cy="140.0" r="3" fill="currentColor"/><circle cx="280" cy="108" r="52" fill="none" stroke="var(--dg-muted)"/><circle cx="300.2" cy="60.1" r="3" fill="currentColor"/><circle cx="328.2" cy="88.5" r="3" fill="currentColor"/><circle cx="327.9" cy="128.2" r="3" fill="currentColor"/><circle cx="299.5" cy="156.2" r="3" fill="currentColor"/><circle cx="259.8" cy="155.9" r="3" fill="currentColor"/><circle cx="231.8" cy="127.5" r="3" fill="currentColor"/><circle cx="232.1" cy="87.8" r="3" fill="currentColor"/><circle cx="260.5" cy="59.8" r="3" fill="currentColor"/><circle cx="280" cy="108" r="72" fill="none" stroke="var(--dg-muted)"/><circle cx="331.6" cy="57.8" r="3" fill="currentColor"/>
  <circle cx="465" cy="108" r="19" fill="var(--dg-fill)" stroke="currentColor"/><text x="465" y="106" text-anchor="middle" font-size="12">17p</text><text x="465" y="119" text-anchor="middle" font-size="12">18n</text><circle cx="465" cy="108" r="32" fill="none" stroke="var(--dg-muted)"/><circle cx="465.0" cy="76.0" r="3" fill="currentColor"/><circle cx="465.0" cy="140.0" r="3" fill="currentColor"/><circle cx="465" cy="108" r="52" fill="none" stroke="var(--dg-muted)"/><circle cx="485.2" cy="60.1" r="3" fill="currentColor"/><circle cx="513.2" cy="88.5" r="3" fill="currentColor"/><circle cx="512.9" cy="128.2" r="3" fill="currentColor"/><circle cx="484.5" cy="156.2" r="3" fill="currentColor"/><circle cx="444.8" cy="155.9" r="3" fill="currentColor"/><circle cx="416.8" cy="127.5" r="3" fill="currentColor"/><circle cx="417.1" cy="87.8" r="3" fill="currentColor"/><circle cx="445.5" cy="59.8" r="3" fill="currentColor"/><circle cx="465" cy="108" r="72" fill="none" stroke="var(--dg-muted)"/><circle cx="516.6" cy="57.8" r="3" fill="currentColor"/><circle cx="536.4" cy="117.1" r="3" fill="currentColor"/><circle cx="502.4" cy="169.5" r="3" fill="currentColor"/><circle cx="440.2" cy="175.6" r="3" fill="currentColor"/><circle cx="396.7" cy="130.8" r="3" fill="currentColor"/><circle cx="404.6" cy="68.8" r="3" fill="currentColor"/><circle cx="458.0" cy="36.3" r="3" fill="currentColor"/>
  <g text-anchor="middle">
    <text x="95" y="206">Carbon (C)</text><text x="95" y="222" font-size="12" fill="var(--dg-muted)">2, 4 (valency 4)</text>
    <text x="280" y="206">Sodium (Na)</text><text x="280" y="222" font-size="12" fill="var(--dg-muted)">2, 8, 1 (valency 1)</text>
    <text x="465" y="206">Chlorine (Cl)</text><text x="465" y="222" font-size="12" fill="var(--dg-muted)">2, 8, 7 (valency 1)</text>
    <text x="280" y="242" font-size="12" fill="var(--dg-muted)">p = protons, n = neutrons (in the nucleus); dots = electrons in K, L, M shells</text>
  </g>
</svg>`,
    },
  ],
  "fundamental-unit-of-life": [
    {
      title: "Animal cell",
      caption: "An animal cell has **no cell wall, no large central vacuole and no chloroplasts**. The nucleus (with nucleolus) controls the cell; mitochondria release energy; the Golgi apparatus packs and dispatches materials; lysosomes digest waste.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="280" cy="170" rx="150" ry="125" fill="var(--dg-fill)" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
  <circle cx="270" cy="160" r="40" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><circle cx="270" cy="160" r="10" fill="currentColor"/>
  <g transform="translate(370 130) rotate(-20)"><ellipse rx="24" ry="12" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M-15 0 l5 -7 l5 14 l5 -14 l5 14 l5 -14 l5 14 l5 -7" fill="none" stroke="currentColor"/></g>
  <g fill="none" stroke="currentColor" stroke-width="1.6"><path d="M330 215 Q350 205 370 215"/><path d="M328 225 Q350 215 372 225"/><path d="M330 235 Q350 225 370 235"/></g>
  <g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M165 200 q10 -12 20 0 t20 0 t20 0 t20 0"/><path d="M165 214 q10 -12 20 0 t20 0 t20 0 t20 0"/></g>
  <circle cx="200" cy="110" r="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="240" cy="255" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="var(--dg-muted)" stroke-width="1" fill="none">
    <path d="M122 60 L172 86"/><path d="M122 108 L192 110"/><path d="M122 154 L188 160"/><path d="M122 200 L165 201"/><path d="M122 262 L228 257"/>
    <path d="M438 58 L298 133"/><path d="M438 110 L390 124"/><path d="M438 158 L282 160"/><path d="M438 236 L372 226"/>
  </g>
  <g text-anchor="end"><text x="118" y="64">Cell membrane</text><text x="118" y="112">Lysosome</text><text x="118" y="158">Cytoplasm</text><text x="118" y="198">Endoplasmic</text><text x="118" y="214">reticulum</text><text x="118" y="266">Vacuole</text></g>
  <g><text x="442" y="62">Nucleus</text><text x="442" y="114">Mitochondrion</text><text x="442" y="162">Nucleolus</text><text x="442" y="240">Golgi apparatus</text></g>
</svg>`,
    },
    {
      title: "Plant cell",
      caption: "Besides the organelles of an animal cell, a plant cell has a **rigid cell wall of cellulose, chloroplasts (for photosynthesis) and a large central vacuole** that pushes the nucleus and cytoplasm towards the edge.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="140" y="40" width="280" height="260" rx="10" fill="none" stroke="currentColor" stroke-width="3.5"/>
  <rect x="150" y="50" width="260" height="240" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <rect x="205" y="105" width="165" height="140" rx="25" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/>
  <text x="287" y="180" text-anchor="middle" fill="var(--dg-muted)">Cell sap</text>
  <circle cx="178" cy="172" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><circle cx="178" cy="172" r="6" fill="currentColor"/>
  <g transform="translate(250 76)"><ellipse rx="20" ry="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><g fill="currentColor"><rect x="-11" y="-4" width="5" height="8"/><rect x="-3" y="-4" width="5" height="8"/><rect x="5" y="-4" width="5" height="8"/></g></g><g transform="translate(330 76)"><ellipse rx="20" ry="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><g fill="currentColor"><rect x="-11" y="-4" width="5" height="8"/><rect x="-3" y="-4" width="5" height="8"/><rect x="5" y="-4" width="5" height="8"/></g></g><g transform="translate(255 270)"><ellipse rx="20" ry="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><g fill="currentColor"><rect x="-11" y="-4" width="5" height="8"/><rect x="-3" y="-4" width="5" height="8"/><rect x="5" y="-4" width="5" height="8"/></g></g><g transform="translate(335 270)"><ellipse rx="20" ry="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><g fill="currentColor"><rect x="-11" y="-4" width="5" height="8"/><rect x="-3" y="-4" width="5" height="8"/><rect x="5" y="-4" width="5" height="8"/></g></g>
  <g transform="translate(390 175)"><ellipse rx="9" ry="17" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M-9 -8 H-3 M9 0 H3 M-9 8 H-3" stroke="currentColor"/></g>
  <g stroke="var(--dg-muted)" stroke-width="1" fill="none">
    <path d="M122 100 L173 110"/><path d="M122 168 L157 172"/><path d="M122 226 L207 226"/>
    <path d="M438 56 L420 68"/><path d="M438 98 L411 110"/><path d="M438 173 L399 175"/><path d="M438 266 L357 269"/>
  </g>
  <g text-anchor="end"><text x="118" y="104">Cytoplasm</text><text x="118" y="172">Nucleus</text><text x="118" y="222">Large central</text><text x="118" y="238">vacuole</text></g>
  <g><text x="442" y="60">Cell wall</text><text x="442" y="102">Cell membrane</text><text x="442" y="178">Mitochondrion</text><text x="442" y="270">Chloroplast</text></g>
</svg>`,
    },
  ],
  "tissues": [
    {
      title: "Types of epithelial tissue",
      caption: "Epithelial cells sit tightly packed on a **basement membrane**. **Squamous** cells are flat (lining of alveoli, blood vessels, skin surface), **cuboidal** cells are cube-shaped (kidney tubules, glands) and **columnar** cells are tall (lining of the intestine).",
      svg: `<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="20" y="100" width="50" height="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="45" cy="107" rx="9" ry="3" fill="var(--dg-accent)"/><rect x="70" y="100" width="50" height="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="95" cy="107" rx="9" ry="3" fill="var(--dg-accent)"/><rect x="120" y="100" width="50" height="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="145" cy="107" rx="9" ry="3" fill="var(--dg-accent)"/><rect x="207" y="84" width="36" height="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><circle cx="225" cy="102" r="7" fill="var(--dg-accent)"/><rect x="243" y="84" width="36" height="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><circle cx="261" cy="102" r="7" fill="var(--dg-accent)"/><rect x="279" y="84" width="36" height="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><circle cx="297" cy="102" r="7" fill="var(--dg-accent)"/><rect x="315" y="84" width="36" height="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><circle cx="333" cy="102" r="7" fill="var(--dg-accent)"/><rect x="392" y="60" width="24" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="404" cy="105" rx="5" ry="8" fill="var(--dg-accent)"/><rect x="416" y="60" width="24" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="428" cy="105" rx="5" ry="8" fill="var(--dg-accent)"/><rect x="440" y="60" width="24" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="452" cy="105" rx="5" ry="8" fill="var(--dg-accent)"/><rect x="464" y="60" width="24" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="476" cy="105" rx="5" ry="8" fill="var(--dg-accent)"/><rect x="488" y="60" width="24" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="500" cy="105" rx="5" ry="8" fill="var(--dg-accent)"/><rect x="512" y="60" width="24" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.3"/><ellipse cx="524" cy="105" rx="5" ry="8" fill="var(--dg-accent)"/>
  <g stroke="currentColor" stroke-width="3"><path d="M15 120H175"/><path d="M200 120H360"/><path d="M385 120H545"/></g>
  <g stroke="var(--dg-muted)" stroke-width="1"><path d="M95 84 L95 103"/><path d="M261 60 L261 94"/><path d="M476 40 L476 97"/></g>
  <g text-anchor="middle">
    <text x="95" y="78">Nucleus</text><text x="261" y="56">Nucleus</text><text x="476" y="36">Nucleus</text>
    <g font-size="12" fill="var(--dg-muted)"><text x="95" y="138">Basement membrane</text><text x="280" y="138">Basement membrane</text><text x="465" y="138">Basement membrane</text></g>
    <text x="95" y="166">Squamous</text><text x="280" y="166">Cuboidal</text><text x="465" y="166">Columnar</text>
    <g font-size="12" fill="var(--dg-muted)"><text x="95" y="183">flat, thin cells</text><text x="95" y="199">lining of alveoli</text><text x="280" y="183">cube-shaped cells</text><text x="280" y="199">kidney tubules</text><text x="465" y="183">tall, narrow cells</text><text x="465" y="199">lining of intestine</text></g>
  </g>
</svg>`,
    },
    {
      title: "The three types of muscle tissue",
      caption: "**Skeletal (striated) muscle** moves bones and is voluntary; **smooth muscle** lines the gut and blood vessels and is involuntary; **cardiac muscle** forms the heart wall, is branched and involuntary, and never tires.",
      svg: `<svg viewBox="0 0 560 265" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="70" y="50" width="26" height="140" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="100" y="50" width="26" height="140" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M70 58H96M70 66H96M70 74H96M70 82H96M70 90H96M70 98H96M70 106H96M70 114H96M70 122H96M70 130H96M70 138H96M70 146H96M70 154H96M70 162H96M70 170H96M70 178H96M70 186H96M100 58H126M100 66H126M100 74H126M100 82H126M100 90H126M100 98H126M100 106H126M100 114H126M100 122H126M100 130H126M100 138H126M100 146H126M100 154H126M100 162H126M100 170H126M100 178H126M100 186H126" stroke="var(--dg-muted)" stroke-width="0.8" fill="none"/>
  <g fill="var(--dg-accent)"><ellipse cx="75" cy="80" rx="4" ry="2.5"/><ellipse cx="75" cy="125" rx="4" ry="2.5"/><ellipse cx="75" cy="170" rx="4" ry="2.5"/><ellipse cx="121" cy="100" rx="4" ry="2.5"/><ellipse cx="121" cy="150" rx="4" ry="2.5"/></g>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5">
    <path d="M252 50 Q274 110 252 170 Q230 110 252 50Z"/><path d="M282 80 Q304 140 282 200 Q260 140 282 80Z"/><path d="M312 50 Q334 110 312 170 Q290 110 312 50Z"/>
  </g>
  <g fill="var(--dg-accent)"><ellipse cx="252" cy="110" rx="3" ry="9"/><ellipse cx="282" cy="140" rx="3" ry="9"/><ellipse cx="312" cy="110" rx="3" ry="9"/></g>
  <rect x="430" y="50" width="22" height="140" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="478" y="50" width="22" height="140" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M452 105 L478 122 L478 146 L452 129Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M430 58H452M430 66H452M430 74H452M430 82H452M430 90H452M430 98H452M430 106H452M430 114H452M430 122H452M430 130H452M430 138H452M430 146H452M430 154H452M430 162H452M430 170H452M430 178H452M430 186H452M478 58H500M478 66H500M478 74H500M478 82H500M478 90H500M478 98H500M478 106H500M478 114H500M478 122H500M478 130H500M478 138H500M478 146H500M478 154H500M478 162H500M478 170H500M478 178H500M478 186H500" stroke="var(--dg-muted)" stroke-width="0.8" fill="none"/>
  <g stroke="var(--dg-accent)" stroke-width="3"><path d="M430 88H452M478 88H500M430 160H452M478 160H500"/></g>
  <g fill="var(--dg-accent)"><ellipse cx="441" cy="125" rx="4" ry="8"/><ellipse cx="489" cy="125" rx="4" ry="8"/></g>
  <g stroke="var(--dg-muted)" stroke-width="1"><path d="M62 124 L72 125"/><path d="M338 110 L316 110"/><path d="M457 40 L445 84"/></g>
  <text x="60" y="130" text-anchor="end">Nucleus</text><text x="340" y="114">Nucleus</text>
  <text x="136" y="76" fill="var(--dg-muted)">Striations</text>
  <text x="465" y="36" text-anchor="middle">Intercalated disc</text>
  <g text-anchor="middle">
    <text x="98" y="222">Striated (skeletal)</text><text x="98" y="238" font-size="12" fill="var(--dg-muted)">long, unbranched,</text><text x="98" y="254" font-size="12" fill="var(--dg-muted)">many nuclei per fibre</text>
    <text x="282" y="222">Smooth (unstriated)</text><text x="282" y="238" font-size="12" fill="var(--dg-muted)">spindle-shaped,</text><text x="282" y="254" font-size="12" fill="var(--dg-muted)">one nucleus per cell</text>
    <text x="465" y="222">Cardiac</text><text x="465" y="238" font-size="12" fill="var(--dg-muted)">branched, striated,</text><text x="465" y="254" font-size="12" fill="var(--dg-muted)">involuntary</text>
  </g>
</svg>`,
    },
    {
      title: "Neuron (nerve cell)",
      caption: "A neuron receives impulses through its **dendrites**, passes them through the **cell body**, and carries them away along the long **axon** to the nerve endings, which pass the impulse to the next neuron or a muscle or gland.",
      svg: `<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="170" cy="130" r="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><circle cx="170" cy="130" r="11" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="170" cy="130" r="3" fill="currentColor"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M148 115 L112 85 M112 85 L88 80 M112 85 L102 60"/><path d="M142 130 L92 130 M92 130 L66 118 M92 130 L66 144"/><path d="M148 146 L114 176 M114 176 L90 184 M114 176 L106 204"/>
    <path d="M198 124 H440 M198 136 H440 M440 124 L452 130 L440 136"/><path d="M452 130 L490 102 M452 130 L500 130 M452 130 L490 158"/>
  </g>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"><circle cx="494" cy="98" r="5"/><circle cx="505" cy="130" r="5"/><circle cx="494" cy="162" r="5"/></g>
  <line x1="270" y1="170" x2="430" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-s9-6)"/>
  <g stroke="var(--dg-muted)" stroke-width="1" fill="none"><path d="M76 94 L104 85"/><path d="M196 92 L184 106"/><path d="M203 180 L177 139"/><path d="M490 80 L494 92"/></g>
  <text x="14" y="98">Dendrites</text><text x="200" y="88" text-anchor="middle">Cell body</text><text x="205" y="200">Nucleus</text>
  <text x="320" y="116" text-anchor="middle">Axon</text><text x="480" y="74" text-anchor="middle">Nerve endings</text>
  <text x="360" y="192" text-anchor="middle">Direction of nerve impulse</text>
</svg>`,
    },
  ],
  "motion": [
    {
      title: "Distance–time graphs",
      caption: "The **slope of a distance–time graph is the speed**. A horizontal line means the object is at rest, a straight sloping line means uniform speed, and a curve means non-uniform speed.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g transform="translate(35 175)"><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M0 0H132M0 0V-142"/></g><path d="M134 0l-8 -3.5v7z M0 -144l-3.5 8h7z" fill="currentColor"/><text x="66" y="17" text-anchor="middle">Time</text><text transform="translate(-12 -72) rotate(-90)" text-anchor="middle">Distance</text><path d="M0 -70H124" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/><text x="66" y="42" text-anchor="middle" font-size="14">At rest</text><text x="66" y="58" text-anchor="middle" font-size="12" fill="var(--dg-muted)">slope = 0</text></g><g transform="translate(215 175)"><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M0 0H132M0 0V-142"/></g><path d="M134 0l-8 -3.5v7z M0 -144l-3.5 8h7z" fill="currentColor"/><text x="66" y="17" text-anchor="middle">Time</text><text transform="translate(-12 -72) rotate(-90)" text-anchor="middle">Distance</text><path d="M0 0L124 -114" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/><path d="M30 -27.5H100V-92" stroke="var(--dg-muted)" stroke-dasharray="4 3" fill="none"/><text x="65" y="-14" text-anchor="middle" font-size="12">Δt</text><text x="107" y="-58" font-size="12">Δd</text><text x="66" y="42" text-anchor="middle" font-size="14">Uniform speed</text><text x="66" y="58" text-anchor="middle" font-size="12" fill="var(--dg-muted)">slope = speed</text></g><g transform="translate(395 175)"><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M0 0H132M0 0V-142"/></g><path d="M134 0l-8 -3.5v7z M0 -144l-3.5 8h7z" fill="currentColor"/><text x="66" y="17" text-anchor="middle">Time</text><text transform="translate(-12 -72) rotate(-90)" text-anchor="middle">Distance</text><path d="M0 0Q70 -4 124 -128" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/><text x="66" y="42" text-anchor="middle" font-size="14">Non-uniform speed</text><text x="66" y="58" text-anchor="middle" font-size="12" fill="var(--dg-muted)">slope keeps changing</text></g>
</svg>`,
    },
    {
      title: "Velocity–time graphs",
      caption: "The **slope of a velocity–time graph is the acceleration**. A horizontal line is uniform velocity (a = 0), a rising straight line is uniform acceleration and a falling straight line is uniform retardation.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g transform="translate(35 175)"><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M0 0H132M0 0V-142"/></g><path d="M134 0l-8 -3.5v7z M0 -144l-3.5 8h7z" fill="currentColor"/><text x="66" y="17" text-anchor="middle">Time</text><text transform="translate(-12 -72) rotate(-90)" text-anchor="middle">Velocity</text><path d="M0 -85H124" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/><text x="66" y="42" text-anchor="middle" font-size="14">Uniform velocity</text><text x="66" y="58" text-anchor="middle" font-size="12" fill="var(--dg-muted)">a = 0</text></g><g transform="translate(215 175)"><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M0 0H132M0 0V-142"/></g><path d="M134 0l-8 -3.5v7z M0 -144l-3.5 8h7z" fill="currentColor"/><text x="66" y="17" text-anchor="middle">Time</text><text transform="translate(-12 -72) rotate(-90)" text-anchor="middle">Velocity</text><path d="M0 0L124 -118" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/><text x="66" y="42" text-anchor="middle" font-size="14">Uniform acceleration</text><text x="66" y="58" text-anchor="middle" font-size="12" fill="var(--dg-muted)">slope = a (positive)</text></g><g transform="translate(395 175)"><g stroke="currentColor" stroke-width="1.6" fill="none"><path d="M0 0H132M0 0V-142"/></g><path d="M134 0l-8 -3.5v7z M0 -144l-3.5 8h7z" fill="currentColor"/><text x="66" y="17" text-anchor="middle">Time</text><text transform="translate(-12 -72) rotate(-90)" text-anchor="middle">Velocity</text><path d="M0 -118L124 0" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/><text x="66" y="42" text-anchor="middle" font-size="14">Uniform retardation</text><text x="66" y="58" text-anchor="middle" font-size="12" fill="var(--dg-muted)">slope = a (negative)</text></g>
</svg>`,
    },
    {
      title: "Area under a velocity–time graph",
      caption: "The **area under a velocity–time graph is the displacement**. Splitting the trapezium into a rectangle (ut) and a triangle (½at²) gives the second equation of motion, s = ut + ½at².",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-m3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M70 160L370 60V210H70z" fill="var(--dg-fill)"/>
  <path d="M70 210H410M70 210V20" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M412 210l-8 -3.5v7z M70 18l-3.5 8h7z" fill="currentColor"/>
  <path d="M70 160L370 60" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/>
  <path d="M70 160H370M370 60V210" stroke="var(--dg-muted)" stroke-dasharray="4 3" fill="none"/>
  <g text-anchor="middle"><text x="220" y="190">ut</text><text x="340" y="134">½ at²</text><text x="370" y="228">t</text><text x="240" y="244">Time</text></g>
  <text x="62" y="164" text-anchor="end">u</text><text x="62" y="64" text-anchor="end">v</text><text x="62" y="214" text-anchor="end">O</text>
  <text transform="translate(18 115) rotate(-90)" text-anchor="middle">Velocity</text>
  <g><text x="395" y="70">Slope = acceleration</text><text x="395" y="90">a = (v − u) / t</text><text x="395" y="125">Area = displacement</text><text x="395" y="145">s = ½ (u + v) t</text><text x="395" y="165">= ut + ½at²</text></g>
</svg>`,
    },
  ],
  "force-and-laws-of-motion": [
    {
      title: "Balanced and unbalanced forces",
      caption: "**Balanced forces** cancel and do not change the state of motion; **unbalanced forces** have a net force that changes the speed or direction of the object (F = ma).",
      svg: `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-f4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="100" y="70" width="70" height="46" rx="3"/><rect x="370" y="70" width="70" height="46" rx="3"/></g>
  <g stroke="currentColor" stroke-width="1.6"><path d="M20 116H250M290 116H540"/></g>
  <g stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-s9-f4)"><line x1="100" y1="93" x2="40" y2="93"/><line x1="170" y1="93" x2="230" y2="93"/><line x1="370" y1="93" x2="340" y2="93"/><line x1="440" y1="93" x2="530" y2="93"/></g>
  <g text-anchor="middle"><text x="70" y="82">10 N</text><text x="200" y="82">10 N</text><text x="355" y="82">5 N</text><text x="485" y="82">15 N</text>
  <text x="135" y="98" font-size="12">block</text><text x="405" y="98" font-size="12">block</text>
  <text x="135" y="25" font-size="14">Balanced forces</text><text x="405" y="25" font-size="14">Unbalanced forces</text>
  <g font-size="12" fill="var(--dg-muted)"><text x="135" y="145">net force = 0</text><text x="135" y="162">no change in motion</text><text x="405" y="145">net force = 10 N to the right</text><text x="405" y="162">block accelerates to the right</text></g></g>
</svg>`,
    },
    {
      title: "Third law: recoil of a gun",
      caption: "The gun exerts a forward force on the bullet (action) and the bullet exerts an **equal and opposite** force on the gun (reaction). Because the gun is much heavier, its recoil velocity is much smaller than the bullet's.",
      svg: `<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-f5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="215" y="78" width="110" height="24" rx="3"/><rect x="325" y="85" width="55" height="10"/><path d="M235 102V135H262L268 102z"/></g>
  <circle cx="412" cy="90" r="6" fill="currentColor"/>
  <g stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-s9-f5)"><line x1="205" y1="90" x2="130" y2="90"/><line x1="428" y1="90" x2="510" y2="90"/></g>
  <g text-anchor="middle"><text x="165" y="76">V (recoil)</text><text x="470" y="76">v (bullet)</text><text x="270" y="64" font-size="12" fill="var(--dg-muted)">gun (mass M)</text><text x="412" y="112" font-size="12" fill="var(--dg-muted)">bullet (m)</text>
  <text x="280" y="170">Action: gun pushes the bullet forward. Reaction: bullet pushes the gun backward.</text>
  <text x="280" y="192">Equal and opposite forces; m v + M V = 0, so V = − m v / M</text></g>
</svg>`,
    },
  ],
  "gravitation": [
    {
      title: "Universal law of gravitation",
      caption: "Every object attracts every other object with a force **directly proportional to the product of their masses and inversely proportional to the square of the distance between them**.",
      svg: `<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-g6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><circle cx="130" cy="85" r="30"/><circle cx="430" cy="85" r="42"/></g>
  <g stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-s9-g6)"><line x1="162" y1="85" x2="232" y2="85"/><line x1="386" y1="85" x2="316" y2="85"/></g>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3"><path d="M130 115V150M430 127V150"/></g>
  <g stroke="currentColor" stroke-width="1.5" marker-end="none"><path d="M130 142H430"/></g><path d="M130 142l8 -3.5v7z M430 142l-8 -3.5v7z" fill="currentColor"/>
  <g text-anchor="middle"><text x="130" y="90">m₁</text><text x="430" y="90">m₂</text><text x="197" y="74">F</text><text x="351" y="74">F</text>
  <text x="280" y="30" font-size="14">F = G m₁ m₂ / d²</text><text x="280" y="136" >d</text><text x="280" y="170" font-size="12" fill="var(--dg-muted)">d = distance between the centres; the two forces are equal and opposite</text></g>
</svg>`,
    },
    {
      title: "Floating and sinking",
      caption: "An object in a liquid feels an **upthrust** (buoyant force). It floats when the upthrust equals its weight and sinks when its weight is greater than the upthrust.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-b7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M50 45V200H210V45" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M51 70H209V199H51z" fill="var(--dg-fill)"/><path d="M51 70H209" stroke="currentColor" stroke-dasharray="5 3"/><path d="M340 45V200H500V45" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M341 70H499V199H341z" fill="var(--dg-fill)"/><path d="M341 70H499" stroke="currentColor" stroke-dasharray="5 3"/>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="100" y="52" width="60" height="40" rx="2"/><rect x="390" y="100" width="60" height="40" rx="2"/></g>
  <g stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-s9-b7)"><line x1="130" y1="76" x2="130" y2="26"/><line x1="130" y1="76" x2="130" y2="126"/><line x1="420" y1="120" x2="420" y2="82"/><line x1="420" y1="120" x2="420" y2="190"/></g>
  <g><text x="142" y="36">U</text><text x="142" y="124">W</text><text x="432" y="96">U</text><text x="432" y="182">W</text></g>
  <g text-anchor="middle"><text x="130" y="224">Floats: U = W</text><text x="420" y="224">Sinks: W &gt; U</text><text x="280" y="246" font-size="12" fill="var(--dg-muted)">U = upthrust (buoyant force, upwards), W = weight of the object (downwards)</text></g>
</svg>`,
    },
  ],
  "work-and-energy": [
    {
      title: "Energy changes in a simple pendulum",
      caption: "At the extreme positions the bob is momentarily at rest, so energy is all **potential**. At the mean position it moves fastest, so energy is all **kinetic**. The total mechanical energy stays constant.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  
  <path d="M250 22H310" stroke="currentColor" stroke-width="2.4"/><path d="M256 22l-6 -8M268 22l-6 -8M280 22l-6 -8M292 22l-6 -8M304 22l-6 -8" stroke="currentColor"/>
  <path d="M194 143A150 150 0 0 0 366 143" fill="none" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <path d="M280 22L194 143M280 22L366 143M280 22V170" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <path d="M120 170H440M194 143H138" stroke="var(--dg-muted)" stroke-dasharray="4 3" fill="none"/>
  <path d="M148 143V170" stroke="currentColor" stroke-width="1.4"/><path d="M148 143l-3 8h6z M148 170l-3 -8h6z" fill="currentColor"/><text x="138" y="161" text-anchor="end">h</text>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><circle cx="194" cy="143" r="10"/><circle cx="280" cy="170" r="10"/><circle cx="366" cy="143" r="10"/></g>
  <g><text x="168" y="134" text-anchor="end">A</text><text x="384" y="134">B</text><text x="296" y="190">O</text></g>
  <g text-anchor="middle"><text x="194" y="214">At extreme A</text><text x="194" y="230" font-size="12" fill="var(--dg-muted)">PE maximum, KE = 0</text>
  <text x="366" y="214">At extreme B</text><text x="366" y="230" font-size="12" fill="var(--dg-muted)">PE maximum, KE = 0</text>
  <text x="280" y="248" font-size="12" fill="var(--dg-muted)">At mean position O: KE maximum, PE minimum</text></g>
</svg>`,
    },
    {
      title: "Energy of a freely falling object",
      caption: "As the object falls, **potential energy decreases and kinetic energy increases by the same amount**, so PE + KE = mgh stays constant.",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-w9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M60 180H340" stroke="currentColor" stroke-width="2"/>
  <path d="M200 30V160" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><circle cx="200" cy="30" r="10"/><circle cx="200" cy="105" r="10"/><circle cx="200" cy="170" r="10"/></g>
  <path d="M120 30V170" stroke="currentColor" stroke-width="1.4"/><path d="M114 30H126M114 105H126M114 170H126" stroke="currentColor" stroke-width="1.4"/>
  <g text-anchor="end"><text x="106" y="70">h/2</text><text x="106" y="142">h/2</text></g>
  <path d="M236 40V150" stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-s9-w9)"/>
  <text x="246" y="100" font-size="13">v</text>
  <g><text x="360" y="34" >Top: PE = mgh, KE = 0</text><text x="360" y="109">Middle: PE = ½mgh, KE = ½mgh</text><text x="360" y="174">Ground: PE = 0, KE = mgh</text></g>
  <text x="200" y="206" text-anchor="middle">PE + KE = mgh at every height (energy is conserved)</text>
</svg>`,
    },
  ],
  "sound": [
    {
      title: "Sound as a longitudinal wave",
      caption: "Sound travels as **compressions** (high-pressure, high-density regions) and **rarefactions** (low-pressure regions). The distance between two successive compressions or rarefactions is the **wavelength λ**.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-s10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M20 36V86M36.9 36V86M52.9 36V86M67.4 36V86M79.7 36V86M89.7 36V86M97.4 36V86M102.9 36V86M106.9 36V86M110 36V86M113.1 36V86M117.1 36V86M122.6 36V86M130.3 36V86M140.3 36V86M152.6 36V86M167.1 36V86M183.1 36V86M200 36V86M216.9 36V86M232.9 36V86M247.4 36V86M259.7 36V86M269.7 36V86M277.4 36V86M282.9 36V86M286.9 36V86M290 36V86M293.1 36V86M297.1 36V86M302.6 36V86M310.3 36V86M320.3 36V86M332.6 36V86M347.1 36V86M363.1 36V86M380 36V86M396.9 36V86M412.9 36V86M427.4 36V86M439.7 36V86M449.7 36V86M457.4 36V86M462.9 36V86M466.9 36V86M470 36V86M473.1 36V86M477.1 36V86M482.6 36V86M490.3 36V86M500.3 36V86M512.6 36V86M527.1 36V86" stroke="currentColor" stroke-width="1.6"/>
  <g text-anchor="middle"><text x="110" y="24">Compression</text><text x="290" y="24">Compression</text><text x="470" y="24">Compression</text><text x="200" y="104" font-size="12" fill="var(--dg-muted)">Rarefaction</text><text x="380" y="104" font-size="12" fill="var(--dg-muted)">Rarefaction</text></g>
  <path d="M20 165H540M20 118V212" stroke="currentColor" stroke-width="1.4" fill="none"/>
  <path d="M20 205L25 204.4L30 202.6L35 199.6L40 195.6L45 190.7L50 185L55 178.7L60 171.9L65 165L70 158.1L75 151.3L80 145L85 139.3L90 134.4L95 130.4L100 127.4L105 125.6L110 125L115 125.6L120 127.4L125 130.4L130 134.4L135 139.3L140 145L145 151.3L150 158.1L155 165L160 171.9L165 178.7L170 185L175 190.7L180 195.6L185 199.6L190 202.6L195 204.4L200 205L205 204.4L210 202.6L215 199.6L220 195.6L225 190.7L230 185L235 178.7L240 171.9L245 165L250 158.1L255 151.3L260 145L265 139.3L270 134.4L275 130.4L280 127.4L285 125.6L290 125L295 125.6L300 127.4L305 130.4L310 134.4L315 139.3L320 145L325 151.3L330 158.1L335 165L340 171.9L345 178.7L350 185L355 190.7L360 195.6L365 199.6L370 202.6L375 204.4L380 205L385 204.4L390 202.6L395 199.6L400 195.6L405 190.7L410 185L415 178.7L420 171.9L425 165L430 158.1L435 151.3L440 145L445 139.3L450 134.4L455 130.4L460 127.4L465 125.6L470 125L475 125.6L480 127.4L485 130.4L490 134.4L495 139.3L500 145L505 151.3L510 158.1L515 165L520 171.9L525 178.7L530 185L535 190.7L540 195.6" stroke="var(--dg-accent)" stroke-width="2.4" fill="none"/>
  <path d="M110 125V238M290 125V238" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <path d="M110 232H290" stroke="currentColor" stroke-width="1.4"/><path d="M110 232l8 -3.5v7z M290 232l-8 -3.5v7z" fill="currentColor"/>
  <text x="200" y="250" text-anchor="middle">Wavelength λ</text>
  <text x="30" y="132">Density</text>
</svg>`,
    },
    {
      title: "Reflection of sound: echo",
      caption: "An echo is sound heard again after reflection. The sound travels to the surface and back, a path of **2d**. The sensation of sound lasts about 0.1 s, so the reflector must be at least about **17 m** away.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-s9-e11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="58" cy="68" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><path d="M58 77V110M58 110L48 134M58 110L68 134M58 88L74 98M58 88L44 98" stroke="currentColor" stroke-width="1.8" fill="none"/>
  <rect x="450" y="50" width="12" height="86" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><path d="M462 50l12 -10M462 62l12 -10M462 74l12 -10M462 86l12 -10M462 98l12 -10M462 110l12 -10M462 122l12 -10M462 134l12 -10" stroke="currentColor" stroke-width="1.2"/>
  <g stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-s9-e11)"><line x1="90" y1="82" x2="442" y2="82"/><line x1="442" y1="108" x2="90" y2="108"/></g>
  <g text-anchor="middle"><text x="266" y="72">Sound sent out</text><text x="266" y="128">Reflected sound (echo)</text><text x="72" y="152">Source and listener</text><text x="440" y="32">Reflecting surface</text></g>
  <path d="M58 172H456" stroke="currentColor" stroke-width="1.4"/><path d="M58 172l8 -3.5v7z M456 172l-8 -3.5v7z" fill="currentColor"/><text x="257" y="166" text-anchor="middle">d</text>
  <g text-anchor="middle"><text x="280" y="196">Total path = 2d, so v = 2d / t</text><text x="280" y="216" font-size="12" fill="var(--dg-muted)">Echo heard if t ≥ 0.1 s: minimum d ≈ 17 m (v ≈ 344 m/s)</text></g>
</svg>`,
    },
  ],
  "improvement-in-food-resources": [
    {
      title: "Mixed cropping and intercropping",
      caption: "In **mixed cropping** two or more crops are grown together on the same land with no pattern. In **intercropping** they are grown in definite alternating rows, which reduces pest and disease spread and gives better use of nutrients.",
      svg: `<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="20" y="20" width="240" height="130" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><circle cx="42" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="70" cy="40" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="98" cy="40" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="126" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="154" cy="40" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="182" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="210" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="238" cy="40" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="42" cy="60" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="70" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="98" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="126" cy="60" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="154" cy="60" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="182" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="210" cy="60" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="238" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="42" cy="80" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="70" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="98" cy="80" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="126" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="154" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="182" cy="80" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="210" cy="80" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="238" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="42" cy="100" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="70" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="98" cy="100" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="126" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="154" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="182" cy="100" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="210" cy="100" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="238" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="42" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="70" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="98" cy="120" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="126" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="154" cy="120" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="182" cy="120" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="210" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="238" cy="120" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="42" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="70" cy="140" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="98" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="126" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="154" cy="140" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="182" cy="140" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="210" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="238" cy="140" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><rect x="300" y="20" width="240" height="130" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><circle cx="322" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="350" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="378" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="406" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="434" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="462" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="490" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="518" cy="40" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="322" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="350" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="378" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="406" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="434" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="462" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="490" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="518" cy="60" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="322" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="350" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="378" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="406" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="434" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="462" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="490" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="518" cy="80" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="322" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="350" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="378" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="406" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="434" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="462" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="490" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="518" cy="100" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="322" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="350" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="378" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="406" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="434" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="462" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="490" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="518" cy="120" r="7" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/><circle cx="322" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="350" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="378" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="406" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="434" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="462" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="490" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="518" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <g text-anchor="middle" font-size="14"><text x="140" y="173">Mixed cropping</text><text x="420" y="173">Intercropping</text></g>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)"><text x="140" y="190">two crops sown together, no pattern</text><text x="420" y="190">two crops in separate, alternate rows</text></g>
  <circle cx="190" cy="207" r="5" fill="var(--dg-accent)" stroke="currentColor"/><text x="200" y="211" font-size="12">Crop A</text><circle cx="270" cy="207" r="5" fill="none" stroke="currentColor"/><text x="280" y="211" font-size="12">Crop B</text>
</svg>`,
    },
  ],
});
