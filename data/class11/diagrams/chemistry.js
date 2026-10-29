// Class 11 Chemistry diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(11, "chemistry", {
  "some-basic-concepts-of-chemistry": [
    {
      title: "The mole as the hub of conversions",
      caption: "Every conversion in stoichiometry goes **through the mole**. **n = m / M** (mass and molar mass), **N = n × NA** (particles), **V = n × 22.7 L** for a gas at STP (273.15 K, 1 bar), and **n = M × V(L)** for a solution (here M is molarity).",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-1h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="205" y="125" width="150" height="40" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5" fill-opacity="0.9"/>
  <text x="280" y="150" text-anchor="middle" font-weight="bold">Amount, n (mol)</text>
  <rect x="10" y="125" width="125" height="40" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="72.5" y="150" text-anchor="middle">Mass, m (g)</text>
  <rect x="425" y="125" width="125" height="40" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="487.5" y="150" text-anchor="middle">No. of particles, N</text>
  <rect x="195" y="12" width="170" height="40" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="280" y="37" text-anchor="middle">Gas volume, V at STP</text>
  <rect x="195" y="238" width="170" height="40" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="280" y="263" text-anchor="middle">Solution: M and V (L)</text>
  <line x1="137" y1="137" x2="203" y2="137" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1a)"/>
  <text x="170" y="130" text-anchor="middle" fill="var(--dg-accent)">÷ M</text>
  <line x1="203" y1="153" x2="137" y2="153" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1)"/>
  <text x="170" y="170" text-anchor="middle">× M</text>
  <line x1="357" y1="137" x2="423" y2="137" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1a)"/>
  <text x="390" y="130" text-anchor="middle" fill="var(--dg-accent)">× NA</text>
  <line x1="423" y1="153" x2="357" y2="153" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1)"/>
  <text x="390" y="170" text-anchor="middle">÷ NA</text>
  <line x1="262" y1="54" x2="262" y2="123" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1a)"/>
  <text x="254" y="93" text-anchor="end" fill="var(--dg-accent)">÷ 22.7 L mol⁻¹</text>
  <line x1="298" y1="123" x2="298" y2="54" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1)"/>
  <text x="306" y="93" text-anchor="start">× 22.7 L mol⁻¹</text>
  <line x1="262" y1="236" x2="262" y2="167" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1a)"/>
  <text x="254" y="207" text-anchor="end" fill="var(--dg-accent)">n = M × V(L)</text>
  <line x1="298" y1="167" x2="298" y2="236" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-1)"/>
  <text x="306" y="207" text-anchor="start">V = n ÷ M</text>
  <text x="72.5" y="190" text-anchor="middle" font-size="11" fill="var(--dg-muted)">M = molar mass (g mol⁻¹)</text>
  <text x="487.5" y="190" text-anchor="middle" font-size="11" fill="var(--dg-muted)">NA = 6.022 × 10²³ mol⁻¹</text>
</svg>`,
    },
  ],
  "structure-of-atom": [
    {
      title: "Energy levels and spectral series of hydrogen",
      caption: "Electron jumps **down** to a lower level emit light of energy **ΔE = E₂ − E₁** (E(n) = −13.6/n² eV). Jumps ending on **n = 1** form the **Lyman** series (UV), **n = 2** the **Balmer** series (visible), and **n = 3, 4, 5** the **Paschen, Brackett, Pfund** series (infrared). Levels get closer together as n increases.",
      svg: `<svg viewBox="0 0 560 358" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-2h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="26" y1="330" x2="26" y2="14" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-c11c-2)"/>
  <text x="14" y="175" text-anchor="middle" transform="rotate(-90 14 175)">Energy</text>
  <g transform="translate(20 0)">
  <line x1="60" y1="320" x2="420" y2="320" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="324" text-anchor="end" font-size="11.5">n = 1</text>
  <text x="428" y="324" text-anchor="start" font-size="11.5">−13.6</text>
  <line x1="60" y1="170" x2="420" y2="170" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="174" text-anchor="end" font-size="11.5">n = 2</text>
  <text x="428" y="174" text-anchor="start" font-size="11.5">−3.40</text>
  <line x1="60" y1="110" x2="420" y2="110" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="114" text-anchor="end" font-size="11.5">n = 3</text>
  <text x="428" y="114" text-anchor="start" font-size="11.5">−1.51</text>
  <line x1="60" y1="78" x2="420" y2="78" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="82" text-anchor="end" font-size="11.5">n = 4</text>
  <text x="428" y="82" text-anchor="start" font-size="11.5">−0.85</text>
  <line x1="60" y1="56" x2="420" y2="56" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="60" text-anchor="end" font-size="11.5">n = 5</text>
  <text x="428" y="60" text-anchor="start" font-size="11.5">−0.54</text>
  <line x1="60" y1="40" x2="420" y2="40" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="44" text-anchor="end" font-size="11.5">n = 6</text>
  <text x="428" y="44" text-anchor="start" font-size="11.5">−0.38</text>
  <line x1="60" y1="24" x2="420" y2="24" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="52" y="28" text-anchor="end" font-size="11.5">∞</text>
  <text x="428" y="28" text-anchor="start" font-size="11.5">0</text>
  <text x="428" y="10" text-anchor="start" font-size="11.5" fill="var(--dg-muted)">E (eV)</text>
  <line x1="80" y1="170" x2="80" y2="320" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="100" y1="110" x2="100" y2="320" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="120" y1="78" x2="120" y2="320" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="160" y1="110" x2="160" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="180" y1="78" x2="180" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="200" y1="56" x2="200" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="240" y1="78" x2="240" y2="110" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="260" y1="56" x2="260" y2="110" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="300" y1="56" x2="300" y2="78" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="320" y1="40" x2="320" y2="78" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <line x1="360" y1="40" x2="360" y2="56" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-2a)"/>
  <text x="100" y="345" text-anchor="middle">Lyman (UV)</text>
  <text x="180" y="188" text-anchor="middle">Balmer (visible)</text>
  <text x="250" y="127" text-anchor="middle">Paschen (IR)</text>
  <text x="310" y="95" text-anchor="middle">Brackett (IR)</text>
  <text x="364" y="73" text-anchor="middle">Pfund (IR)</text>
  <text x="240" y="232" text-anchor="start">E(n) = −13.6 / n² eV</text>
  <text x="240" y="252" text-anchor="start">1/λ = RH (1/n₁² − 1/n₂²),  n₂ > n₁</text>
  <text x="240" y="272" text-anchor="start">RH = 1.097 × 10⁷ m⁻¹</text>
  <text x="240" y="296" text-anchor="start" font-size="11.5" fill="var(--dg-muted)">(levels not drawn to scale)</text>
  </g>
</svg>`,
    },
    {
      title: "Shapes of s, p and d orbitals",
      caption: "**s** orbitals are spherical (2s has one radial node). Each **p** orbital has two lobes along an axis with a nodal plane through the nucleus. Of the five **d** orbitals, dxy (and dyz, dzx) have four lobes **between** the axes, dx²−y² has four lobes **along** the axes, and dz² has two lobes along z with a ring in the xy-plane. + and − are the signs of the wave function.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-3h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="56" cy="62" r="28" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="56" cy="62" r="2" fill="currentColor"/>
  <text x="56" y="118" text-anchor="middle">1s</text>
  <text x="56" y="134" text-anchor="middle" font-size="11.5" fill="var(--dg-muted)">no node</text>
  <circle cx="168" cy="62" r="36" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="168" cy="62" r="14" fill="none" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="3 3"/>
  <circle cx="168" cy="62" r="2" fill="currentColor"/>
  <text x="168" y="118" text-anchor="middle">2s</text>
  <text x="168" y="134" text-anchor="middle" font-size="11.5" fill="var(--dg-muted)">1 radial node</text>
  <line x1="234" y1="62" x2="326" y2="62" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="259" cy="62" rx="21" ry="12" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="301" cy="62" rx="21" ry="12" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="280" cy="62" r="2" fill="currentColor"/>
  <text x="259" y="66" text-anchor="middle" font-size="13">+</text>
  <text x="301" y="66" text-anchor="middle" font-size="13">−</text>
  <text x="330" y="66" text-anchor="start" fill="var(--dg-muted)">x</text>
  <text x="280" y="118" text-anchor="middle">2px</text>
  <line x1="356" y1="98" x2="428" y2="26" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="407" cy="47" rx="21" ry="12" transform="rotate(-45 407 47)" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="377" cy="77" rx="21" ry="12" transform="rotate(-45 377 77)" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="392" cy="62" r="2" fill="currentColor"/>
  <text x="407" y="51" text-anchor="middle" font-size="13">+</text>
  <text x="377" y="81" text-anchor="middle" font-size="13">−</text>
  <text x="436" y="24" text-anchor="start" fill="var(--dg-muted)">y</text>
  <text x="392" y="118" text-anchor="middle">2py</text>
  <line x1="504" y1="16" x2="504" y2="108" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="504" cy="41" rx="12" ry="21" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="504" cy="83" rx="12" ry="21" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="504" cy="62" r="2" fill="currentColor"/>
  <text x="504" y="45" text-anchor="middle" font-size="13">+</text>
  <text x="504" y="87" text-anchor="middle" font-size="13">−</text>
  <text x="512" y="12" text-anchor="start" fill="var(--dg-muted)">z</text>
  <text x="504" y="118" text-anchor="middle">2pz</text>
  <line x1="39" y1="205" x2="151" y2="205" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <line x1="95" y1="261" x2="95" y2="149" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="113" cy="187" rx="22" ry="9" transform="rotate(-45 113 187)" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="189" text-anchor="middle" font-size="13">+</text>
  <ellipse cx="77" cy="223" rx="22" ry="9" transform="rotate(-45 77 223)" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="75" y="229" text-anchor="middle" font-size="13">+</text>
  <ellipse cx="113" cy="223" rx="22" ry="9" transform="rotate(45 113 223)" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="115" y="229" text-anchor="middle" font-size="13">−</text>
  <ellipse cx="77" cy="187" rx="22" ry="9" transform="rotate(45 77 187)" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="75" y="189" text-anchor="middle" font-size="13">−</text>
  <circle cx="95" cy="205" r="2" fill="currentColor"/>
  <text x="155" y="209" text-anchor="start" fill="var(--dg-muted)">x</text>
  <text x="100" y="153" text-anchor="start" fill="var(--dg-muted)">y</text>
  <text x="95" y="280" text-anchor="middle">dxy</text>
  <line x1="280" y1="149" x2="280" y2="261" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="280" cy="178" rx="11" ry="27" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="280" cy="232" rx="11" ry="27" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="280" cy="205" rx="30" ry="7" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="280" cy="205" r="2" fill="currentColor"/>
  <text x="280" y="180" text-anchor="middle" font-size="13">+</text>
  <text x="280" y="238" text-anchor="middle" font-size="13">+</text>
  <text x="260" y="209" text-anchor="middle" font-size="13">−</text>
  <text x="300" y="209" text-anchor="middle" font-size="13">−</text>
  <text x="288" y="151" text-anchor="start" fill="var(--dg-muted)">z</text>
  <text x="280" y="280" text-anchor="middle">dz²</text>
  <line x1="409" y1="205" x2="521" y2="205" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <line x1="465" y1="149" x2="465" y2="261" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="441" cy="205" rx="24" ry="10" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="440" y="209" text-anchor="middle" font-size="13">+</text>
  <ellipse cx="489" cy="205" rx="24" ry="10" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="490" y="209" text-anchor="middle" font-size="13">+</text>
  <ellipse cx="465" cy="181" rx="10" ry="24" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="465" y="183" text-anchor="middle" font-size="13">−</text>
  <ellipse cx="465" cy="229" rx="10" ry="24" fill="var(--dg-fill)" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
  <text x="465" y="235" text-anchor="middle" font-size="13">−</text>
  <circle cx="465" cy="205" r="2" fill="currentColor"/>
  <text x="525" y="209" text-anchor="start" fill="var(--dg-muted)">x</text>
  <text x="471" y="153" text-anchor="start" fill="var(--dg-muted)">y</text>
  <text x="465" y="280" text-anchor="middle">dx²−y²</text>
</svg>`,
    },
    {
      title: "Aufbau principle: order of filling orbitals",
      caption: "Orbitals are filled in order of **increasing (n + l)**; for equal (n + l) the one with **lower n** fills first. Follow the arrows from the top right to the bottom left of each diagonal, then start the next diagonal. This gives **1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s …** (4s fills before 3d).",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-4h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <text x="140" y="20" text-anchor="middle" font-weight="bold">s</text>
  <text x="235" y="20" text-anchor="middle" font-weight="bold">p</text>
  <text x="330" y="20" text-anchor="middle" font-weight="bold">d</text>
  <text x="425" y="20" text-anchor="middle" font-weight="bold">f</text>
  <text x="70" y="66" text-anchor="end" fill="var(--dg-muted)">n = 1</text>
  <text x="140" y="66" text-anchor="middle">1s</text>
  <text x="70" y="100" text-anchor="end" fill="var(--dg-muted)">n = 2</text>
  <text x="140" y="100" text-anchor="middle">2s</text>
  <text x="235" y="100" text-anchor="middle">2p</text>
  <text x="70" y="134" text-anchor="end" fill="var(--dg-muted)">n = 3</text>
  <text x="140" y="134" text-anchor="middle">3s</text>
  <text x="235" y="134" text-anchor="middle">3p</text>
  <text x="330" y="134" text-anchor="middle">3d</text>
  <text x="70" y="168" text-anchor="end" fill="var(--dg-muted)">n = 4</text>
  <text x="140" y="168" text-anchor="middle">4s</text>
  <text x="235" y="168" text-anchor="middle">4p</text>
  <text x="330" y="168" text-anchor="middle">4d</text>
  <text x="425" y="168" text-anchor="middle">4f</text>
  <text x="70" y="202" text-anchor="end" fill="var(--dg-muted)">n = 5</text>
  <text x="140" y="202" text-anchor="middle">5s</text>
  <text x="235" y="202" text-anchor="middle">5p</text>
  <text x="330" y="202" text-anchor="middle">5d</text>
  <text x="425" y="202" text-anchor="middle">5f</text>
  <text x="70" y="236" text-anchor="end" fill="var(--dg-muted)">n = 6</text>
  <text x="140" y="236" text-anchor="middle">6s</text>
  <text x="235" y="236" text-anchor="middle">6p</text>
  <text x="330" y="236" text-anchor="middle">6d</text>
  <text x="70" y="270" text-anchor="end" fill="var(--dg-muted)">n = 7</text>
  <text x="140" y="270" text-anchor="middle">7s</text>
  <text x="235" y="270" text-anchor="middle">7p</text>
  <line x1="212.2" y1="104.2" x2="162.8" y2="121.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="212.2" y1="138.2" x2="162.8" y2="155.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="307.2" y1="138.2" x2="257.8" y2="155.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="212.2" y1="172.2" x2="162.8" y2="189.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="307.2" y1="172.2" x2="257.8" y2="189.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="402.2" y1="172.2" x2="352.8" y2="189.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="212.2" y1="206.2" x2="162.8" y2="223.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="307.2" y1="206.2" x2="257.8" y2="223.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="402.2" y1="206.2" x2="352.8" y2="223.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="212.2" y1="240.2" x2="162.8" y2="257.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <line x1="307.2" y1="240.2" x2="257.8" y2="257.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-4a)"/>
  <text x="280" y="305" text-anchor="middle" font-size="12.5">1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p →</text>
  <text x="280" y="323" text-anchor="middle" font-size="12.5">6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p</text>
</svg>`,
    },
  ],
  "classification-of-elements-and-periodicity": [
    {
      title: "Atomic radius across Period 2",
      caption: "Atomic (covalent) radius **decreases from left to right** across a period: the nuclear charge increases by one each step while the electrons enter the same shell, so the effective nuclear charge pulls the outer electrons closer.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-5h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="80" y1="220" x2="520" y2="220" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-5)"/>
  <line x1="80" y1="220" x2="80" y2="26" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-5)"/>
  <line x1="76" y1="220" x2="80" y2="220" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="224" text-anchor="end" font-size="12">40</text>
  <line x1="80" y1="220" x2="500" y2="220" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <line x1="76" y1="160" x2="80" y2="160" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="164" text-anchor="end" font-size="12">80</text>
  <line x1="80" y1="160" x2="500" y2="160" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <line x1="76" y1="100" x2="80" y2="100" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="104" text-anchor="end" font-size="12">120</text>
  <line x1="80" y1="100" x2="500" y2="100" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <line x1="76" y1="40" x2="80" y2="40" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="44" text-anchor="end" font-size="12">160</text>
  <line x1="80" y1="40" x2="500" y2="40" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <text x="28" y="130" text-anchor="middle" transform="rotate(-90 28 130)">Covalent radius (pm)</text>
  <polyline points="110,52 175,113.5 240,148 305,164.5 370,169 435,181 500,184" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="110" cy="52" r="3.5" fill="currentColor"/>
  <text x="116" y="44" text-anchor="start" font-size="11.5">152</text>
  <text x="110" y="237" text-anchor="middle">Li</text>
  <circle cx="175" cy="113.5" r="3.5" fill="currentColor"/>
  <text x="181" y="105.5" text-anchor="start" font-size="11.5">111</text>
  <text x="175" y="237" text-anchor="middle">Be</text>
  <circle cx="240" cy="148" r="3.5" fill="currentColor"/>
  <text x="246" y="140" text-anchor="start" font-size="11.5">88</text>
  <text x="240" y="237" text-anchor="middle">B</text>
  <circle cx="305" cy="164.5" r="3.5" fill="currentColor"/>
  <text x="311" y="156.5" text-anchor="start" font-size="11.5">77</text>
  <text x="305" y="237" text-anchor="middle">C</text>
  <circle cx="370" cy="169" r="3.5" fill="currentColor"/>
  <text x="376" y="161" text-anchor="start" font-size="11.5">74</text>
  <text x="370" y="237" text-anchor="middle">N</text>
  <circle cx="435" cy="181" r="3.5" fill="currentColor"/>
  <text x="441" y="173" text-anchor="start" font-size="11.5">66</text>
  <text x="435" y="237" text-anchor="middle">O</text>
  <circle cx="500" cy="184" r="3.5" fill="currentColor"/>
  <text x="506" y="176" text-anchor="start" font-size="11.5">64</text>
  <text x="500" y="237" text-anchor="middle">F</text>
  <text x="300" y="260" text-anchor="middle" fill="var(--dg-muted)">Period 2: atomic number increases →</text>
</svg>`,
    },
    {
      title: "First ionisation enthalpy across Period 2",
      caption: "The general rise across the period is due to increasing Zeff and decreasing size. Two **exceptions**: **B < Be** (the 2p electron of B is easier to remove than a 2s electron of Be) and **O < N** (in O one 2p orbital holds a pair, and electron–electron repulsion makes removal easier; N has a stable half-filled 2p³).",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-6h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="80" y1="235" x2="520" y2="235" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-6)"/>
  <line x1="80" y1="235" x2="80" y2="26" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-6)"/>
  <line x1="76" y1="224.2" x2="80" y2="224.2" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="228.2" text-anchor="end" font-size="12">500</text>
  <line x1="80" y1="224.16666666666666" x2="500" y2="224.16666666666666" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <line x1="76" y1="170" x2="80" y2="170" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="174" text-anchor="end" font-size="12">1000</text>
  <line x1="80" y1="170" x2="500" y2="170" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <line x1="76" y1="115.8" x2="80" y2="115.8" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="119.8" text-anchor="end" font-size="12">1500</text>
  <line x1="80" y1="115.83333333333333" x2="500" y2="115.83333333333333" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <line x1="76" y1="61.7" x2="80" y2="61.7" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="65.7" text-anchor="end" font-size="12">2000</text>
  <line x1="80" y1="61.666666666666686" x2="500" y2="61.666666666666686" stroke="var(--dg-muted)" stroke-width="0.6" stroke-dasharray="2 4"/>
  <text x="28" y="137.5" text-anchor="middle" transform="rotate(-90 28 137.5)">ΔiH₁ (kJ mol⁻¹)</text>
  <polyline points="110,222 165.7,180.9 221.4,191.6 277.1,160.7 332.9,126.5 388.6,136 444.3,96.2 500,52.9" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="110" cy="222" r="3.5" fill="currentColor"/>
  <text x="116" y="214" text-anchor="start" font-size="11.5">520</text>
  <text x="110" y="252" text-anchor="middle">Li</text>
  <circle cx="165.7" cy="180.9" r="3.5" fill="currentColor"/>
  <text x="165.7" y="168.9" text-anchor="middle" font-size="11.5">899</text>
  <text x="165.7" y="252" text-anchor="middle">Be</text>
  <circle cx="221.4" cy="191.6" r="3.5" fill="currentColor"/>
  <text x="221.4" y="208.6" text-anchor="middle" font-size="11.5">801</text>
  <text x="221.4" y="252" text-anchor="middle">B</text>
  <circle cx="277.1" cy="160.7" r="3.5" fill="currentColor"/>
  <text x="271.1" y="152.7" text-anchor="end" font-size="11.5">1086</text>
  <text x="277.1" y="252" text-anchor="middle">C</text>
  <circle cx="332.9" cy="126.5" r="3.5" fill="currentColor"/>
  <text x="332.9" y="114.5" text-anchor="middle" font-size="11.5">1402</text>
  <text x="332.9" y="252" text-anchor="middle">N</text>
  <circle cx="388.6" cy="136" r="3.5" fill="currentColor"/>
  <text x="388.6" y="153" text-anchor="middle" font-size="11.5">1314</text>
  <text x="388.6" y="252" text-anchor="middle">O</text>
  <circle cx="444.3" cy="96.2" r="3.5" fill="currentColor"/>
  <text x="438.3" y="88.2" text-anchor="end" font-size="11.5">1681</text>
  <text x="444.3" y="252" text-anchor="middle">F</text>
  <circle cx="500" cy="52.9" r="3.5" fill="currentColor"/>
  <text x="494" y="44.9" text-anchor="end" font-size="11.5">2081</text>
  <text x="500" y="252" text-anchor="middle">Ne</text>
  <text x="300" y="275" text-anchor="middle" fill="var(--dg-muted)">Period 2: atomic number increases →</text>
</svg>`,
    },
  ],
  "chemical-bonding-and-molecular-structure": [
    {
      title: "VSEPR: shapes of molecules and bond angles",
      caption: "Electron pairs around the central atom arrange themselves to be as far apart as possible. **Lone pairs repel more than bond pairs**, so the angle shrinks from 109.5° (CH₄) to 107° (NH₃, one lone pair) and 104.5° (H₂O, two lone pairs). Wedge = bond towards you, dashes = bond away from you.",
      svg: `<svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-7a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-7h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <g transform="translate(0 0)">
  <line x1="57" y1="64" x2="29" y2="64" stroke="currentColor" stroke-width="1.8"/>
  <line x1="83" y1="64" x2="111" y2="64" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="18" cy="64" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="18" y="68.5" text-anchor="middle" font-size="12">Cl</text>
  <circle cx="122" cy="64" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="122" y="68.5" text-anchor="middle" font-size="12">Cl</text>
  <circle cx="70" cy="64" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><text x="70" y="68.5" text-anchor="middle" font-size="12">Be</text>
  <text x="70" y="160" text-anchor="middle" font-size="12.5" font-weight="bold">Linear</text>
  <text x="70" y="177" text-anchor="middle" font-size="12" fill="var(--dg-muted)">BeCl₂ · 180° · sp</text>
  </g>
  <g transform="translate(140 0)">
  <line x1="70" y1="53" x2="70" y2="29" stroke="currentColor" stroke-width="1.8"/>
  <line x1="58.7" y1="72.5" x2="39.5" y2="83.5" stroke="currentColor" stroke-width="1.8"/>
  <line x1="81.3" y1="72.5" x2="100.5" y2="83.5" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="70" cy="18" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="70" y="22.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="30" cy="89" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="30" y="93.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="110" cy="89" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="110" y="93.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="70" cy="66" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><text x="70" y="70.5" text-anchor="middle" font-size="12">B</text>
  <text x="70" y="160" text-anchor="middle" font-size="12.5" font-weight="bold">Trigonal planar</text>
  <text x="70" y="177" text-anchor="middle" font-size="12" fill="var(--dg-muted)">BF₃ · 120° · sp²</text>
  </g>
  <g transform="translate(280 0)">
  <line x1="60.8" y1="54.8" x2="41.8" y2="35.8" stroke="currentColor" stroke-width="1.8"/>
  <line x1="60.8" y1="73.2" x2="41.8" y2="92.2" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="80.3,71.9 102.5,94.8 108,87.7" fill="currentColor"/>
  <line x1="80.3" y1="56.1" x2="105.3" y2="36.7" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2.5"/>
  <circle cx="34" cy="28" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="34" y="32.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="34" cy="100" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="34" y="104.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="114" cy="98" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="114" y="102.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="114" cy="30" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="114" y="34.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="70" cy="64" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><text x="70" y="68.5" text-anchor="middle" font-size="12">C</text>
  <text x="70" y="160" text-anchor="middle" font-size="12.5" font-weight="bold">Tetrahedral</text>
  <text x="70" y="177" text-anchor="middle" font-size="12" fill="var(--dg-muted)">CH₄ · 109.5° · sp³</text>
  </g>
  <g transform="translate(420 0)">
  <line x1="70" y1="51" x2="70" y2="25" stroke="currentColor" stroke-width="1.8"/>
  <line x1="70" y1="77" x2="70" y2="103" stroke="currentColor" stroke-width="1.8"/>
  <line x1="83" y1="64" x2="111" y2="64" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="59.2,71.2 34.7,82.2 39.6,89.6" fill="currentColor"/>
  <line x1="59.2" y1="56.8" x2="37.2" y2="42.1" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2.5"/>
  <circle cx="70" cy="14" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="70" y="18.5" text-anchor="middle" font-size="12">Cl</text>
  <circle cx="70" cy="114" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="70" y="118.5" text-anchor="middle" font-size="12">Cl</text>
  <circle cx="122" cy="64" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="122" y="68.5" text-anchor="middle" font-size="12">Cl</text>
  <circle cx="28" cy="92" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="28" y="96.5" text-anchor="middle" font-size="12">Cl</text>
  <circle cx="28" cy="36" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="28" y="40.5" text-anchor="middle" font-size="12">Cl</text>
  <circle cx="70" cy="64" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><text x="70" y="68.5" text-anchor="middle" font-size="12">P</text>
  <text x="70" y="160" text-anchor="middle" font-size="12.5" font-weight="bold">Trigonal bipyramidal</text>
  <text x="70" y="177" text-anchor="middle" font-size="12" fill="var(--dg-muted)">PCl₅ · 90°, 120° · sp³d</text>
  </g>
  <g transform="translate(0 200)">
  <line x1="70" y1="51" x2="70" y2="25" stroke="currentColor" stroke-width="1.8"/>
  <line x1="70" y1="77" x2="70" y2="103" stroke="currentColor" stroke-width="1.8"/>
  <line x1="57" y1="64" x2="31" y2="64" stroke="currentColor" stroke-width="1.8"/>
  <line x1="83" y1="64" x2="109" y2="64" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="79.7,72.6 94.8,92.1 100.8,85.3" fill="currentColor"/>
  <line x1="60.3" y1="55.4" x2="42.2" y2="39.3" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2.5"/>
  <circle cx="70" cy="14" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="70" y="18.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="70" cy="114" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="70" y="118.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="20" cy="64" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="20" y="68.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="120" cy="64" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="120" y="68.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="106" cy="96" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="106" y="100.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="34" cy="32" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="34" y="36.5" text-anchor="middle" font-size="12">F</text>
  <circle cx="70" cy="64" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><text x="70" y="68.5" text-anchor="middle" font-size="12">S</text>
  <text x="70" y="160" text-anchor="middle" font-size="12.5" font-weight="bold">Octahedral</text>
  <text x="70" y="177" text-anchor="middle" font-size="12" fill="var(--dg-muted)">SF₆ · 90° · sp³d²</text>
  </g>
  <g transform="translate(140 200)">
  <line x1="61" y1="61.4" x2="33.6" y2="90.1" stroke="currentColor" stroke-width="1.8"/>
  <line x1="79" y1="61.4" x2="106.4" y2="90.1" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="70,65 65.5,101 74.5,101" fill="currentColor"/>
  <circle cx="26" cy="98" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="26" y="102.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="114" cy="98" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="114" y="102.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="70" cy="112" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="70" y="116.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="70" cy="52" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><text x="70" y="56.5" text-anchor="middle" font-size="12">N</text>
  <circle cx="66.5" cy="26" r="1.9" fill="currentColor"/><circle cx="73.5" cy="26" r="1.9" fill="currentColor"/>
  <text x="70" y="160" text-anchor="middle" font-size="12.5" font-weight="bold">Trigonal pyramidal</text>
  <text x="70" y="177" text-anchor="middle" font-size="12" fill="var(--dg-muted)">NH₃ · 107° · sp³</text>
  </g>
  <g transform="translate(280 200)">
  <line x1="61.2" y1="61.6" x2="35.4" y2="89.9" stroke="currentColor" stroke-width="1.8"/>
  <line x1="78.8" y1="61.6" x2="104.6" y2="89.9" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="28" cy="98" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="28" y="102.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="112" cy="98" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="112" y="102.5" text-anchor="middle" font-size="12">H</text>
  <circle cx="70" cy="52" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><text x="70" y="56.5" text-anchor="middle" font-size="12">O</text>
  <circle cx="36.5" cy="30" r="1.9" fill="currentColor"/><circle cx="43.5" cy="30" r="1.9" fill="currentColor"/>
  <circle cx="96.5" cy="30" r="1.9" fill="currentColor"/><circle cx="103.5" cy="30" r="1.9" fill="currentColor"/>
  <text x="70" y="160" text-anchor="middle" font-size="12.5" font-weight="bold">Bent (V-shaped)</text>
  <text x="70" y="177" text-anchor="middle" font-size="12" fill="var(--dg-muted)">H₂O · 104.5° · sp³</text>
  </g>
  <text x="420" y="232" text-anchor="start" font-size="12.5" font-weight="bold">Hybridisation</text>
  <text x="420" y="251" text-anchor="start" font-size="12">sp: linear</text>
  <text x="420" y="270" text-anchor="start" font-size="12">sp²: trigonal planar</text>
  <text x="420" y="289" text-anchor="start" font-size="12">sp³: tetrahedral</text>
  <text x="420" y="308" text-anchor="start" font-size="12">sp³d: trig. bipyramidal</text>
  <text x="420" y="327" text-anchor="start" font-size="12">sp³d²: octahedral</text>
</svg>`,
    },
    {
      title: "Sigma (σ) and pi (π) overlap",
      caption: "A **σ bond** forms by **head-on (axial) overlap** along the internuclear axis (s–s, s–p, p–p); it is stronger and allows free rotation. A **π bond** forms by **sideways overlap** of parallel p orbitals, giving electron density **above and below** the axis (with a nodal plane along it). A double bond = 1 σ + 1 π; a triple bond = 1 σ + 2 π.",
      svg: `<svg viewBox="0 0 560 215" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-8a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-8h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="4" y1="100" x2="136" y2="100" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <circle cx="45" cy="100" r="32" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="95" cy="100" r="32" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="45" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="95" cy="100" r="2.5" fill="currentColor"/>
  <text x="70" y="168" text-anchor="middle" font-weight="bold">σ (s–s)</text>
  <text x="70" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">head-on overlap</text>
  <line x1="144" y1="100" x2="276" y2="100" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <circle cx="180" cy="100" r="26" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="213" cy="100" rx="17" ry="13" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="247" cy="100" rx="17" ry="13" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="180" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="230" cy="100" r="2.5" fill="currentColor"/>
  <text x="210" y="168" text-anchor="middle" font-weight="bold">σ (s–p)</text>
  <text x="210" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">head-on overlap</text>
  <line x1="284" y1="100" x2="416" y2="100" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="308" cy="100" rx="17" ry="12" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="342" cy="100" rx="17" ry="12" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="358" cy="100" rx="17" ry="12" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="392" cy="100" rx="17" ry="12" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="325" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="375" cy="100" r="2.5" fill="currentColor"/>
  <text x="350" y="168" text-anchor="middle" font-weight="bold">σ (p–p)</text>
  <text x="350" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">head-on overlap</text>
  <line x1="424" y1="100" x2="556" y2="100" stroke="var(--dg-muted)" stroke-width="1.1" stroke-dasharray="3 3"/>
  <ellipse cx="474" cy="78" rx="22" ry="22" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="506" cy="78" rx="22" ry="22" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="474" cy="122" rx="22" ry="22" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="506" cy="122" rx="22" ry="22" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="474" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="506" cy="100" r="2.5" fill="currentColor"/>
  <text x="490" y="168" text-anchor="middle" font-weight="bold">π (p–p)</text>
  <text x="490" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">sideways overlap</text>
  <text x="210" y="36" text-anchor="middle" font-size="12" fill="var(--dg-muted)">σ bonds: electron density along the axis</text>
  <text x="556" y="36" text-anchor="end" font-size="12" fill="var(--dg-muted)">π: above and below the axis</text>
</svg>`,
    },
    {
      title: "Molecular orbital diagram of O₂",
      caption: "Two 2s and two 2p atomic orbitals of each O atom combine to form bonding (lower) and antibonding (*, higher) MOs. For O₂ (and F₂) the order is **σ2pz below π2p**. The 12 valence electrons give **Nb = 8, Na = 4**, so bond order = ½(8 − 4) = **2**, and the two unpaired electrons in π* make O₂ **paramagnetic**. (In N₂ and lighter molecules, π2p lies below σ2pz.)",
      svg: `<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-9a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-9h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="24" y1="330" x2="24" y2="22" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-c11c-9)"/>
  <text x="12" y="176" text-anchor="middle" transform="rotate(-90 12 176)">Energy</text>
  <line x1="60" y1="140" x2="84" y2="140" stroke="currentColor" stroke-width="1.6"/>
  <text x="72" y="134" text-anchor="middle" font-size="13">↑↓</text>
  <line x1="92" y1="140" x2="116" y2="140" stroke="currentColor" stroke-width="1.6"/>
  <text x="104" y="134" text-anchor="middle" font-size="13">↑</text>
  <line x1="124" y1="140" x2="148" y2="140" stroke="currentColor" stroke-width="1.6"/>
  <text x="136" y="134" text-anchor="middle" font-size="13">↑</text>
  <line x1="92" y1="262" x2="116" y2="262" stroke="currentColor" stroke-width="1.6"/>
  <text x="104" y="256" text-anchor="middle" font-size="13">↑↓</text>
  <text x="104" y="158" text-anchor="middle" font-size="12">2p</text>
  <text x="104" y="280" text-anchor="middle" font-size="12">2s</text>
  <line x1="440" y1="140" x2="464" y2="140" stroke="currentColor" stroke-width="1.6"/>
  <text x="452" y="134" text-anchor="middle" font-size="13">↑↓</text>
  <line x1="472" y1="140" x2="496" y2="140" stroke="currentColor" stroke-width="1.6"/>
  <text x="484" y="134" text-anchor="middle" font-size="13">↑</text>
  <line x1="504" y1="140" x2="528" y2="140" stroke="currentColor" stroke-width="1.6"/>
  <text x="516" y="134" text-anchor="middle" font-size="13">↑</text>
  <line x1="472" y1="262" x2="496" y2="262" stroke="currentColor" stroke-width="1.6"/>
  <text x="484" y="256" text-anchor="middle" font-size="13">↑↓</text>
  <text x="484" y="158" text-anchor="middle" font-size="12">2p</text>
  <text x="484" y="280" text-anchor="middle" font-size="12">2s</text>
  <text x="104" y="346" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Atomic orbitals of O</text>
  <text x="484" y="346" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Atomic orbitals of O</text>
  <text x="282" y="346" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Molecular orbitals</text>
  <line x1="256" y1="66" x2="308" y2="66" stroke="currentColor" stroke-width="1.6"/>
  <text x="282" y="81" text-anchor="middle" font-size="12">σ*2pz</text>
  <line x1="240" y1="106" x2="278" y2="106" stroke="currentColor" stroke-width="1.6"/>
  <line x1="286" y1="106" x2="324" y2="106" stroke="currentColor" stroke-width="1.6"/>
  <text x="259" y="100" text-anchor="middle" font-size="13">↑</text>
  <text x="305" y="100" text-anchor="middle" font-size="13">↑</text>
  <text x="282" y="121" text-anchor="middle" font-size="12">π*2p</text>
  <line x1="240" y1="168" x2="278" y2="168" stroke="currentColor" stroke-width="1.6"/>
  <line x1="286" y1="168" x2="324" y2="168" stroke="currentColor" stroke-width="1.6"/>
  <text x="259" y="162" text-anchor="middle" font-size="13">↑↓</text>
  <text x="305" y="162" text-anchor="middle" font-size="13">↑↓</text>
  <text x="282" y="183" text-anchor="middle" font-size="12">π2p</text>
  <line x1="256" y1="206" x2="308" y2="206" stroke="currentColor" stroke-width="1.6"/>
  <text x="282" y="200" text-anchor="middle" font-size="13">↑↓</text>
  <text x="282" y="221" text-anchor="middle" font-size="12">σ2pz</text>
  <line x1="256" y1="250" x2="308" y2="250" stroke="currentColor" stroke-width="1.6"/>
  <text x="282" y="244" text-anchor="middle" font-size="13">↑↓</text>
  <text x="282" y="265" text-anchor="middle" font-size="12">σ*2s</text>
  <line x1="256" y1="306" x2="308" y2="306" stroke="currentColor" stroke-width="1.6"/>
  <text x="282" y="300" text-anchor="middle" font-size="13">↑↓</text>
  <text x="282" y="321" text-anchor="middle" font-size="12">σ2s</text>
  <line x1="148" y1="140" x2="240" y2="106" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="148" y1="140" x2="240" y2="168" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="148" y1="140" x2="256" y2="66" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="148" y1="140" x2="256" y2="206" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="440" y1="140" x2="324" y2="106" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="440" y1="140" x2="324" y2="168" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="440" y1="140" x2="308" y2="66" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="440" y1="140" x2="308" y2="206" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="116" y1="262" x2="256" y2="250" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="116" y1="262" x2="256" y2="306" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="472" y1="262" x2="308" y2="250" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="472" y1="262" x2="308" y2="306" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
</svg>`,
    },
  ],
  "thermodynamics": [
    {
      title: "Enthalpy diagrams: exothermic and endothermic reactions",
      caption: "In an **exothermic** reaction the products have **lower enthalpy** than the reactants, so **ΔH is negative** and heat is released to the surroundings. In an **endothermic** reaction the products have **higher enthalpy**, so **ΔH is positive** and heat is absorbed.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-10a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-10h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="30" y1="230" x2="30" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-c11c-10)"/>
  <text x="22" y="130" text-anchor="middle" transform="rotate(-90 22 130)">Enthalpy, H</text>
  <line x1="60" y1="70" x2="140" y2="70" stroke="currentColor" stroke-width="2.5"/>
  <line x1="190" y1="170" x2="270" y2="170" stroke="currentColor" stroke-width="2.5"/>
  <text x="100" y="62" text-anchor="middle">Reactants</text>
  <text x="230" y="190" text-anchor="middle">Products</text>
  <line x1="140" y1="70" x2="215" y2="70" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="140" y1="170" x2="190" y2="170" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="210" y1="70" x2="210" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-10a)"/>
  <text x="218" y="124" text-anchor="start" fill="var(--dg-accent)">ΔH &lt; 0</text>
  <text x="150" y="252" text-anchor="middle" font-size="12.5">Exothermic (heat released to surroundings)</text>
  <line x1="310" y1="230" x2="310" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-c11c-10)"/>
  <text x="302" y="130" text-anchor="middle" transform="rotate(-90 302 130)">Enthalpy, H</text>
  <line x1="340" y1="170" x2="420" y2="170" stroke="currentColor" stroke-width="2.5"/>
  <line x1="470" y1="70" x2="550" y2="70" stroke="currentColor" stroke-width="2.5"/>
  <text x="380" y="190" text-anchor="middle">Reactants</text>
  <text x="510" y="62" text-anchor="middle">Products</text>
  <line x1="420" y1="170" x2="495" y2="170" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="420" y1="70" x2="470" y2="70" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="490" y1="170" x2="490" y2="70" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-10a)"/>
  <text x="498" y="124" text-anchor="start" fill="var(--dg-accent)">ΔH > 0</text>
  <text x="430" y="252" text-anchor="middle" font-size="12.5">Endothermic (heat absorbed from surroundings)</text>
</svg>`,
    },
    {
      title: "Hess's law: formation of CO₂ in one step or two",
      caption: "The enthalpy change depends only on the **initial and final states**, not on the route. Burning C directly to CO₂ gives ΔH = −393.5 kJ mol⁻¹. Going through CO gives ΔH₁ + ΔH₂ = −110.5 + (−283.0), which is the **same** −393.5 kJ mol⁻¹.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-11a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-11h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="24" y1="256.75" x2="24" y2="24" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-c11c-11)"/>
  <text x="12" y="140" text-anchor="middle" transform="rotate(-90 12 140)">Enthalpy, H</text>
  <line x1="60" y1="50" x2="400" y2="50" stroke="currentColor" stroke-width="2.5"/>
  <text x="60" y="41" text-anchor="start">C(s) + O₂(g)</text>
  <line x1="350" y1="105.3" x2="490" y2="105.3" stroke="currentColor" stroke-width="2.5"/>
  <text x="350" y="123.3" text-anchor="start">CO(g) + ½O₂(g)</text>
  <line x1="60" y1="246.8" x2="490" y2="246.8" stroke="currentColor" stroke-width="2.5"/>
  <text x="60" y="266.8" text-anchor="start">CO₂(g)</text>
  <line x1="100" y1="50" x2="100" y2="246.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-11a)"/>
  <text x="110" y="140" text-anchor="start" fill="var(--dg-accent)">ΔH = −393.5 kJ mol⁻¹</text>
  <text x="110" y="158" text-anchor="start" fill="var(--dg-muted)">(one step)</text>
  <line x1="372" y1="50" x2="372" y2="105.3" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-11)"/>
  <text x="380" y="80" text-anchor="start">ΔH₁ = −110.5</text>
  <line x1="465" y1="105.3" x2="465" y2="246.8" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-11)"/>
  <text x="457" y="180" text-anchor="end">ΔH₂ = −283.0</text>
  <text x="280" y="298" text-anchor="middle" font-size="13">ΔH = ΔH₁ + ΔH₂ = −110.5 + (−283.0) = −393.5 kJ mol⁻¹</text>
</svg>`,
    },
    {
      title: "Born–Haber cycle for NaCl(s)",
      caption: "Lattice enthalpy cannot be measured directly, so it is found from a cycle: **ΔfH = ΔsubH + ΔiH + ½ΔbondH + ΔegH + lattice enthalpy**. For NaCl: −411 = 108 + 496 + 122 + (−349) + (−788) kJ mol⁻¹. (Energies are to scale; arrows going up absorb energy.)",
      svg: `<svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-12a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-12h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="28" y1="252" x2="84" y2="252" stroke="currentColor" stroke-width="2.5"/>
  <text x="56" y="231" text-anchor="middle" font-size="11.5">Na(s) +</text>
  <text x="56" y="244" text-anchor="middle" font-size="11.5">½Cl₂(g)</text>
  <line x1="108" y1="223.5" x2="164" y2="223.5" stroke="currentColor" stroke-width="2.5"/>
  <text x="136" y="202.5" text-anchor="middle" font-size="11.5">Na(g) +</text>
  <text x="136" y="215.5" text-anchor="middle" font-size="11.5">½Cl₂(g)</text>
  <line x1="188" y1="191.3" x2="244" y2="191.3" stroke="currentColor" stroke-width="2.5"/>
  <text x="216" y="170.3" text-anchor="middle" font-size="11.5">Na(g) +</text>
  <text x="216" y="183.3" text-anchor="middle" font-size="11.5">Cl(g)</text>
  <line x1="268" y1="60.3" x2="324" y2="60.3" stroke="currentColor" stroke-width="2.5"/>
  <text x="296" y="39.3" text-anchor="middle" font-size="11.5">Na⁺(g) + Cl(g)</text>
  <text x="296" y="52.3" text-anchor="middle" font-size="11.5">+ e⁻</text>
  <line x1="348" y1="152.5" x2="404" y2="152.5" stroke="currentColor" stroke-width="2.5"/>
  <text x="376" y="170.5" text-anchor="middle" font-size="11.5">Na⁺(g) +</text>
  <text x="376" y="184.5" text-anchor="middle" font-size="11.5">Cl⁻(g)</text>
  <line x1="428" y1="360.5" x2="484" y2="360.5" stroke="currentColor" stroke-width="2.5"/>
  <text x="456" y="378.5" text-anchor="middle" font-size="11.5">NaCl(s)</text>
  <line x1="84" y1="252" x2="96" y2="252" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="96" y1="223.5" x2="108" y2="223.5" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="96" y1="252" x2="96" y2="223.5" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-12a)"/>
  <text x="101" y="241.7" text-anchor="start" font-size="11.5">(1)</text>
  <line x1="164" y1="223.5" x2="176" y2="223.5" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="176" y1="191.3" x2="188" y2="191.3" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="176" y1="223.5" x2="176" y2="191.3" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-12a)"/>
  <text x="181" y="211.4" text-anchor="start" font-size="11.5">(2)</text>
  <line x1="244" y1="191.3" x2="256" y2="191.3" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="256" y1="60.3" x2="268" y2="60.3" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="256" y1="191.3" x2="256" y2="60.3" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-12a)"/>
  <text x="261" y="129.8" text-anchor="start" font-size="11.5">(3)</text>
  <line x1="324" y1="60.3" x2="336" y2="60.3" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="336" y1="152.5" x2="348" y2="152.5" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="336" y1="60.3" x2="336" y2="152.5" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-12a)"/>
  <text x="341" y="110.4" text-anchor="start" font-size="11.5">(4)</text>
  <line x1="404" y1="152.5" x2="416" y2="152.5" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="416" y1="360.5" x2="428" y2="360.5" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="416" y1="152.5" x2="416" y2="360.5" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-12a)"/>
  <text x="421" y="199.2" text-anchor="start" font-size="11.5">(5)</text>
  <line x1="84" y1="252" x2="520" y2="252" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="484" y1="360.5" x2="520" y2="360.5" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="520" y1="252" x2="520" y2="360.5" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-12a)"/>
  <text x="541" y="306.1" text-anchor="middle" transform="rotate(-90 541 306.12)" fill="var(--dg-accent)">ΔfH = −411</text>
  <text x="20" y="300" text-anchor="start" font-size="12">(1) Sublimation of Na: ΔsubH = +108</text>
  <text x="20" y="318" text-anchor="start" font-size="12">(2) ½ Cl–Cl bond dissociation: ½ΔbondH = +122</text>
  <text x="20" y="336" text-anchor="start" font-size="12">(3) Ionisation of Na(g): ΔiH = +496</text>
  <text x="20" y="354" text-anchor="start" font-size="12">(4) Electron gain by Cl(g): ΔegH = −349</text>
  <text x="20" y="372" text-anchor="start" font-size="12">(5) Lattice formation: ΔlatticeH = −788   (all in kJ mol⁻¹)</text>
</svg>`,
    },
  ],
  "equilibrium": [
    {
      title: "Approach to equilibrium: concentration and rate against time",
      caption: "For A ⇌ B starting with pure A, [A] falls and [B] rises until they become **constant** at the equilibrium time, t(eq). At that point the **forward and reverse rates are equal**: the equilibrium is dynamic, not a stop of the reactions.",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-13a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-13h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="50" y1="220" x2="265" y2="220" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-13)"/><line x1="50" y1="220" x2="50" y2="30" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-13)"/>
  <text x="42" y="130" text-anchor="middle" transform="rotate(-90 16 130)" >Concentration</text>
  <path d="M50 50 L58 68.5 L66 83.6 L74 96 L82 106.2 L90 114.5 L98 121.3 L106 126.8 L114 131.4 L122 135.1 L130 138.2 L138 140.7 L146 142.7 L154 144.4 L162 145.8 L170 146.9 L178 147.8 L186 148.6 L194 149.2 L202 149.7 L210 150.1 L218 150.5 L226 150.7 L234 151 L242 151.2 L250 151.3 " fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M50 220 L58 201.5 L66 186.4 L74 174 L82 163.8 L90 155.5 L98 148.7 L106 143.2 L114 138.6 L122 134.9 L130 131.8 L138 129.3 L146 127.3 L154 125.6 L162 124.2 L170 123.1 L178 122.2 L186 121.4 L194 120.8 L202 120.3 L210 119.9 L218 119.5 L226 119.3 L234 119 L242 118.8 L250 118.7 " fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="252" y="170" text-anchor="start">[A]</text>
  <text x="252" y="111" text-anchor="start" fill="var(--dg-accent)">[B]</text>
  <line x1="50" y1="152" x2="250" y2="152" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="50" y1="118" x2="250" y2="118" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="190" y1="220" x2="190" y2="40" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="190" y="238" text-anchor="middle">t(eq)</text>
  <text x="158" y="258" text-anchor="middle" fill="var(--dg-muted)">Time →</text>
  <text x="44" y="156" text-anchor="end" font-size="11">0.4</text>
  <text x="44" y="122" text-anchor="end" font-size="11">0.6</text>
  <text x="44" y="54" text-anchor="end" font-size="11">1.0</text>
  <line x1="312" y1="220" x2="527" y2="220" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-13)"/><line x1="312" y1="220" x2="312" y2="30" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-13)"/>
  <text x="286" y="130" text-anchor="middle" transform="rotate(-90 286 130)">Rate of reaction</text>
  <path d="M312 50 L319.6 68.5 L327.2 83.6 L334.8 96 L342.4 106.2 L350 114.5 L357.6 121.3 L365.2 126.8 L372.8 131.4 L380.4 135.1 L388 138.2 L395.6 140.7 L403.2 142.7 L410.8 144.4 L418.4 145.8 L426 146.9 L433.6 147.8 L441.2 148.6 L448.8 149.2 L456.4 149.7 L464 150.1 L471.6 150.5 L479.2 150.7 L486.8 151 L494.4 151.2 L502 151.3 " fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M312 220 L319.6 207.7 L327.2 197.6 L334.8 189.3 L342.4 182.6 L350 177 L357.6 172.5 L365.2 168.8 L372.8 165.7 L380.4 163.2 L388 161.2 L395.6 159.5 L403.2 158.2 L410.8 157.1 L418.4 156.1 L426 155.4 L433.6 154.8 L441.2 154.3 L448.8 153.9 L456.4 153.5 L464 153.2 L471.6 153 L479.2 152.8 L486.8 152.7 L494.4 152.6 L502 152.5 " fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="445" y1="220" x2="445" y2="40" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="312" y1="152" x2="445" y2="152" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="508" y="138" text-anchor="start">forward</text>
  <text x="508" y="176" text-anchor="start" fill="var(--dg-accent)">reverse</text>
  <text x="445" y="238" text-anchor="middle">t(eq)</text>
  <text x="412" y="258" text-anchor="middle" fill="var(--dg-muted)">Time →</text>
</svg>`,
    },
    {
      title: "The pH scale",
      caption: "**pH = −log[H⁺]**. At 298 K, pH 7 is neutral ([H⁺] = [OH⁻] = 10⁻⁷ M), pH < 7 is acidic and pH > 7 is basic. Each unit is a **tenfold** change in [H⁺]. Values for common substances are approximate.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-14" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-14a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-14h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="268.09999999999997" y1="46" x2="40" y2="46" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-14)"/>
  <line x1="292.09999999999997" y1="46" x2="520.1999999999999" y2="46" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-c11c-14)"/>
  <text x="160" y="36" text-anchor="middle" fill="var(--dg-muted)">increasing acidity (pH &lt; 7)</text>
  <text x="400.2" y="36" text-anchor="middle" fill="var(--dg-muted)">increasing basicity (pH > 7)</text>
  <text x="280.1" y="70" text-anchor="middle" font-weight="bold">neutral</text>
  <rect x="28" y="130" width="504.19999999999993" height="26" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="280.09999999999997" y1="124" x2="280.09999999999997" y2="162" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="40" y1="130" x2="40" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="40" y1="151" x2="40" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="40" y="148" text-anchor="middle" font-size="12">0</text>
  <line x1="74.3" y1="130" x2="74.3" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="74.3" y1="151" x2="74.3" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="74.3" y="148" text-anchor="middle" font-size="12">1</text>
  <line x1="108.6" y1="130" x2="108.6" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="108.6" y1="151" x2="108.6" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="108.6" y="148" text-anchor="middle" font-size="12">2</text>
  <line x1="142.9" y1="130" x2="142.9" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="142.9" y1="151" x2="142.9" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="142.9" y="148" text-anchor="middle" font-size="12">3</text>
  <line x1="177.2" y1="130" x2="177.2" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="177.2" y1="151" x2="177.2" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="177.2" y="148" text-anchor="middle" font-size="12">4</text>
  <line x1="211.5" y1="130" x2="211.5" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="211.5" y1="151" x2="211.5" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="211.5" y="148" text-anchor="middle" font-size="12">5</text>
  <line x1="245.8" y1="130" x2="245.8" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="245.8" y1="151" x2="245.8" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="245.8" y="148" text-anchor="middle" font-size="12">6</text>
  <line x1="280.1" y1="130" x2="280.1" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="280.1" y1="151" x2="280.1" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="280.1" y="148" text-anchor="middle" font-size="12">7</text>
  <line x1="314.4" y1="130" x2="314.4" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="314.4" y1="151" x2="314.4" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="314.4" y="148" text-anchor="middle" font-size="12">8</text>
  <line x1="348.7" y1="130" x2="348.7" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="348.7" y1="151" x2="348.7" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="348.7" y="148" text-anchor="middle" font-size="12">9</text>
  <line x1="383" y1="130" x2="383" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="383" y1="151" x2="383" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="383" y="148" text-anchor="middle" font-size="12">10</text>
  <line x1="417.3" y1="130" x2="417.3" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="417.3" y1="151" x2="417.3" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="417.3" y="148" text-anchor="middle" font-size="12">11</text>
  <line x1="451.6" y1="130" x2="451.6" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="451.6" y1="151" x2="451.6" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="451.6" y="148" text-anchor="middle" font-size="12">12</text>
  <line x1="485.9" y1="130" x2="485.9" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="485.9" y1="151" x2="485.9" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="485.9" y="148" text-anchor="middle" font-size="12">13</text>
  <line x1="520.2" y1="130" x2="520.2" y2="135" stroke="currentColor" stroke-width="0.8"/>
  <line x1="520.2" y1="151" x2="520.2" y2="156" stroke="currentColor" stroke-width="0.8"/>
  <text x="520.2" y="148" text-anchor="middle" font-size="12">14</text>
  <line x1="74.3" y1="108" x2="74.3" y2="130" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="74.3" y="104" text-anchor="middle" font-size="11.5">0.1 M HCl</text>
  <line x1="142.9" y1="108" x2="142.9" y2="130" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="142.9" y="104" text-anchor="middle" font-size="11.5">vinegar</text>
  <line x1="263" y1="108" x2="263" y2="130" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="263" y="104" text-anchor="middle" font-size="11.5">milk</text>
  <line x1="293.8" y1="90" x2="293.8" y2="130" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="293.8" y="86" text-anchor="middle" font-size="11.5">blood</text>
  <line x1="115.5" y1="158" x2="115.5" y2="184" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="115.5" y="196" text-anchor="middle" font-size="11.5">lemon juice</text>
  <line x1="184.1" y1="158" x2="184.1" y2="184" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="184.1" y="196" text-anchor="middle" font-size="11.5">tomato juice</text>
  <line x1="280.1" y1="158" x2="280.1" y2="184" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="280.1" y="196" text-anchor="middle" font-size="11.5">pure water</text>
  <line x1="317.8" y1="158" x2="317.8" y2="212" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="317.8" y="224" text-anchor="middle" font-size="11.5">sea water</text>
  <line x1="434.5" y1="158" x2="434.5" y2="184" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="434.5" y="196" text-anchor="middle" font-size="11.5">ammonia soln</text>
  <line x1="485.9" y1="158" x2="485.9" y2="212" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="485.9" y="224" text-anchor="middle" font-size="11.5">0.1 M NaOH</text>
  <text x="280.1" y="270" text-anchor="middle" font-size="12" fill="var(--dg-muted)">[H⁺] = 10⁻ᵖᴴ mol L⁻¹;  [H⁺][OH⁻] = 10⁻¹⁴ at 298 K</text>
</svg>`,
    },
  ],
  "redox-reactions": [
    {
      title: "Electron transfer in Zn + Cu²⁺ → Zn²⁺ + Cu",
      caption: "**Oxidation = loss of electrons** (oxidation number increases); **reduction = gain of electrons** (oxidation number decreases). Zn loses 2 e⁻ and is the **reducing agent**; Cu²⁺ gains 2 e⁻ and is the **oxidising agent**. The two half-reactions always occur together.",
      svg: `<svg viewBox="0 0 560 275" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-15" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-15a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-15h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <text x="130" y="28" text-anchor="middle" fill="var(--dg-muted)">O.N. = 0</text>
  <text x="430" y="28" text-anchor="middle" fill="var(--dg-muted)">O.N. = +2</text>
  <rect x="70" y="36" width="120" height="38" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="130" y="61" text-anchor="middle" font-size="14">Zn(s)</text>
  <rect x="370" y="36" width="120" height="38" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="61" text-anchor="middle" font-size="14">Cu²⁺(aq)</text>
  <line x1="194" y1="55" x2="366" y2="55" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-15a)"/>
  <text x="280" y="46" text-anchor="middle" fill="var(--dg-accent)">2 e⁻</text>
  <text x="280" y="75" text-anchor="middle" font-size="11.5" fill="var(--dg-muted)">electrons transferred</text>
  <line x1="130" y1="76" x2="130" y2="168" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-15a)"/>
  <text x="138" y="108" text-anchor="start" font-weight="bold">Oxidation</text>
  <text x="138" y="126" text-anchor="start" font-size="12">Zn → Zn²⁺ + 2 e⁻</text>
  <line x1="430" y1="76" x2="430" y2="168" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-15a)"/>
  <text x="422" y="108" text-anchor="end" font-weight="bold">Reduction</text>
  <text x="422" y="126" text-anchor="end" font-size="12">Cu²⁺ + 2 e⁻ → Cu</text>
  <rect x="70" y="170" width="120" height="38" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="130" y="195" text-anchor="middle" font-size="14">Zn²⁺(aq)</text>
  <rect x="370" y="170" width="120" height="38" rx="4" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="195" text-anchor="middle" font-size="14">Cu(s)</text>
  <text x="130" y="226" text-anchor="middle" fill="var(--dg-muted)">O.N. = +2</text>
  <text x="430" y="226" text-anchor="middle" fill="var(--dg-muted)">O.N. = 0</text>
  <text x="130" y="255" text-anchor="middle">Zn: reducing agent</text>
  <text x="430" y="255" text-anchor="middle">Cu²⁺: oxidising agent</text>
</svg>`,
    },
    {
      title: "Oxidation states of nitrogen",
      caption: "Nitrogen shows oxidation states from **−3 to +5**. An element in its **lowest** state (N in NH₃) can only be oxidised, so it can act only as a reducing agent; in its **highest** state (N in HNO₃) it can only be reduced, so it acts only as an oxidising agent. In **intermediate** states it can do either (disproportionation is possible).",
      svg: `<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-16" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-16a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-16h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="40" y1="80" x2="520" y2="80" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="70" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="70" y="62" text-anchor="middle" font-weight="bold">−3</text>
  <text x="70" y="106" text-anchor="middle" font-size="12.5">NH₃</text>
  <circle cx="122" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="122" y="62" text-anchor="middle" font-weight="bold">−2</text>
  <text x="122" y="106" text-anchor="middle" font-size="12.5">N₂H₄</text>
  <circle cx="174" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="174" y="62" text-anchor="middle" font-weight="bold">−1</text>
  <text x="174" y="106" text-anchor="middle" font-size="12.5">NH₂OH</text>
  <circle cx="226" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="226" y="62" text-anchor="middle" font-weight="bold">0</text>
  <text x="226" y="106" text-anchor="middle" font-size="12.5">N₂</text>
  <circle cx="278" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="278" y="62" text-anchor="middle" font-weight="bold">+1</text>
  <text x="278" y="106" text-anchor="middle" font-size="12.5">N₂O</text>
  <circle cx="330" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="330" y="62" text-anchor="middle" font-weight="bold">+2</text>
  <text x="330" y="106" text-anchor="middle" font-size="12.5">NO</text>
  <circle cx="382" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="382" y="62" text-anchor="middle" font-weight="bold">+3</text>
  <text x="382" y="106" text-anchor="middle" font-size="12.5">HNO₂</text>
  <circle cx="434" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="434" y="62" text-anchor="middle" font-weight="bold">+4</text>
  <text x="434" y="106" text-anchor="middle" font-size="12.5">NO₂</text>
  <circle cx="486" cy="80" r="4.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="486" y="62" text-anchor="middle" font-weight="bold">+5</text>
  <text x="486" y="106" text-anchor="middle" font-size="12.5">HNO₃</text>
  <text x="30" y="62" text-anchor="middle" fill="var(--dg-muted)">O.N.</text>
  <path d="M50 120 V126 H90 V120" fill="none" stroke="var(--dg-muted)" stroke-width="1.4"/>
  <path d="M104 120 V126 H452 V120" fill="none" stroke="var(--dg-muted)" stroke-width="1.4"/>
  <path d="M466 120 V126 H506 V120" fill="none" stroke="var(--dg-muted)" stroke-width="1.4"/>
  <text x="70" y="144" text-anchor="middle" font-size="12">only a reducing</text>
  <text x="70" y="159" text-anchor="middle" font-size="12">agent</text>
  <text x="278" y="144" text-anchor="middle" font-size="12">can act as an oxidising agent or</text>
  <text x="278" y="159" text-anchor="middle" font-size="12">a reducing agent</text>
  <text x="486" y="144" text-anchor="middle" font-size="12">only an oxidising</text>
  <text x="486" y="159" text-anchor="middle" font-size="12">agent</text>
  <line x1="300" y1="195" x2="510" y2="195" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-16a)"/>
  <text x="405" y="214" text-anchor="middle" font-size="12">Oxidation: O.N. increases</text>
  <line x1="260" y1="195" x2="50" y2="195" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c11c-16)"/>
  <text x="155" y="214" text-anchor="middle" font-size="12">Reduction: O.N. decreases</text>
</svg>`,
    },
  ],
  "organic-chemistry-basic-principles": [
    {
      title: "Structural isomers: chain, position and functional",
      caption: "Isomers have the **same molecular formula but different structures**. **Chain** isomers differ in the carbon skeleton; **position** isomers differ in where a group sits on the same skeleton; **functional** isomers have different functional groups. (Bond-line formulae: each bend or end is a carbon atom with enough H atoms.)",
      svg: `<svg viewBox="0 0 560 375" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-17" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-17a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-17h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <text x="20" y="20" text-anchor="start" font-weight="bold" font-size="13">Chain isomerism: C₄H₁₀</text>
  <line x1="80" y1="80" x2="115" y2="60" stroke="currentColor" stroke-width="1.8"/>
  <line x1="115" y1="60" x2="150" y2="80" stroke="currentColor" stroke-width="1.8"/>
  <line x1="150" y1="80" x2="185" y2="60" stroke="currentColor" stroke-width="1.8"/>
  <text x="132" y="112" text-anchor="middle">butane</text>
  <line x1="360" y1="58" x2="360" y2="28" stroke="currentColor" stroke-width="1.8"/>
  <line x1="360" y1="58" x2="330" y2="76" stroke="currentColor" stroke-width="1.8"/>
  <line x1="360" y1="58" x2="390" y2="76" stroke="currentColor" stroke-width="1.8"/>
  <text x="360" y="112" text-anchor="middle">2-methylpropane</text>
  <text x="132" y="128" text-anchor="middle" font-size="11.5" fill="var(--dg-muted)">(straight chain)</text>
  <text x="360" y="128" text-anchor="middle" font-size="11.5" fill="var(--dg-muted)">(branched chain)</text>
  <text x="20" y="160" text-anchor="start" font-weight="bold" font-size="13">Position isomerism: C₃H₈O</text>
  <line x1="70" y1="220" x2="105" y2="200" stroke="currentColor" stroke-width="1.8"/>
  <line x1="105" y1="200" x2="140" y2="220" stroke="currentColor" stroke-width="1.8"/>
  <line x1="140" y1="220" x2="164.6" y2="206" stroke="currentColor" stroke-width="1.8"/>
  <text x="180" y="205" text-anchor="middle" font-size="13">OH</text>
  <text x="122" y="252" text-anchor="middle">propan-1-ol</text>
  <line x1="330" y1="220" x2="365" y2="200" stroke="currentColor" stroke-width="1.8"/>
  <line x1="365" y1="200" x2="400" y2="220" stroke="currentColor" stroke-width="1.8"/>
  <line x1="365" y1="200" x2="365" y2="172" stroke="currentColor" stroke-width="1.8"/>
  <text x="365" y="164" text-anchor="middle" font-size="13">OH</text>
  <text x="365" y="252" text-anchor="middle">propan-2-ol</text>
  <text x="20" y="285" text-anchor="start" font-weight="bold" font-size="13">Functional isomerism: C₂H₆O</text>
  <line x1="70" y1="340" x2="105" y2="320" stroke="currentColor" stroke-width="1.8"/>
  <line x1="105" y1="320" x2="129.6" y2="334" stroke="currentColor" stroke-width="1.8"/>
  <text x="148" y="345" text-anchor="middle" font-size="13">OH</text>
  <text x="110" y="368" text-anchor="middle">ethanol (alcohol)</text>
  <line x1="330" y1="340" x2="358.1" y2="324" stroke="currentColor" stroke-width="1.8"/>
  <line x1="371.9" y1="324" x2="400" y2="340" stroke="currentColor" stroke-width="1.8"/>
  <text x="365" y="324" text-anchor="middle" font-size="13">O</text>
  <text x="365" y="368" text-anchor="middle">methoxymethane (ether)</text>
</svg>`,
    },
    {
      title: "Homolytic and heterolytic fission of a covalent bond",
      caption: "**Homolytic fission**: the shared pair splits **one electron to each atom**, giving two **free radicals** (shown with half-headed 'fish-hook' arrows). **Heterolytic fission**: the shared pair goes **entirely to the more electronegative atom**, giving a cation and an anion (shown with a full-headed curved arrow).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-18" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-18a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-18h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <text x="20" y="22" text-anchor="start" font-weight="bold">Homolytic fission</text>
  <text x="80" y="85" text-anchor="middle" font-size="16">A</text>
  <line x1="92" y1="82" x2="130" y2="82" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="85" text-anchor="middle" font-size="16">B</text>
  <path d="M111 78 Q92 42 80 66" fill="none" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-18h)"/>
  <path d="M111 78 Q130 42 142 66" fill="none" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-18h)"/>
  <line x1="190" y1="82" x2="270" y2="82" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-18a)"/>
  <text x="350" y="87" text-anchor="middle" font-size="16">A• + •B</text>
  <text x="350" y="115" text-anchor="middle" font-size="12" fill="var(--dg-muted)">two free radicals</text>
  <text x="20" y="140" text-anchor="start" font-weight="bold">Heterolytic fission</text>
  <text x="80" y="203" text-anchor="middle" font-size="16">A</text>
  <line x1="92" y1="200" x2="130" y2="200" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="203" text-anchor="middle" font-size="16">B</text>
  <path d="M111 196 Q128 160 142 184" fill="none" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-18a)"/>
  <line x1="190" y1="200" x2="270" y2="200" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-18a)"/>
  <text x="350" y="205" text-anchor="middle" font-size="16">A⁺ + :B⁻</text>
  <text x="350" y="233" text-anchor="middle" font-size="12" fill="var(--dg-muted)">a cation and an anion (B more electronegative)</text>
</svg>`,
    },
  ],
  "hydrocarbons": [
    {
      title: "Newman projections of ethane: staggered and eclipsed",
      caption: "Looking along the C–C bond, bonds to the **front** carbon meet at the centre and bonds to the **back** carbon start from the circle. In the **staggered** conformation the dihedral angle is 60° (H atoms as far apart as possible, **most stable**). In the **eclipsed** conformation it is 0° (shown slightly offset so both sets are visible); it has about **12.5 kJ mol⁻¹** more energy because of torsional strain.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-19" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-19a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-19h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="140" cy="108" r="30" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="140" y1="108" x2="140" y2="46" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="38.5" text-anchor="middle">H</text>
  <line x1="140" y1="108" x2="86.3" y2="139" stroke="currentColor" stroke-width="1.8"/>
  <text x="75.9" y="149.5" text-anchor="middle">H</text>
  <line x1="140" y1="108" x2="193.7" y2="139" stroke="currentColor" stroke-width="1.8"/>
  <text x="204.1" y="149.5" text-anchor="middle">H</text>
  <line x1="166" y1="93" x2="193.7" y2="77" stroke="currentColor" stroke-width="1.8"/>
  <text x="204.1" y="75.5" text-anchor="middle">H</text>
  <line x1="114" y1="93" x2="86.3" y2="77" stroke="currentColor" stroke-width="1.8"/>
  <text x="75.9" y="75.5" text-anchor="middle">H</text>
  <line x1="140" y1="138" x2="140" y2="170" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="186.5" text-anchor="middle">H</text>
  <circle cx="420" cy="108" r="30" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="420" y1="108" x2="420" y2="46" stroke="currentColor" stroke-width="1.8"/>
  <text x="420" y="38.5" text-anchor="middle">H</text>
  <line x1="420" y1="108" x2="366.3" y2="139" stroke="currentColor" stroke-width="1.8"/>
  <text x="355.9" y="149.5" text-anchor="middle">H</text>
  <line x1="420" y1="108" x2="473.7" y2="139" stroke="currentColor" stroke-width="1.8"/>
  <text x="484.1" y="149.5" text-anchor="middle">H</text>
  <line x1="441.6" y1="87.2" x2="464.6" y2="64.9" stroke="currentColor" stroke-width="1.8"/>
  <text x="473.2" y="61.1" text-anchor="middle">H</text>
  <line x1="391.2" y1="99.7" x2="360.4" y2="90.9" stroke="currentColor" stroke-width="1.8"/>
  <text x="348.9" y="92.1" text-anchor="middle">H</text>
  <line x1="427.3" y1="137.1" x2="435" y2="168.2" stroke="currentColor" stroke-width="1.8"/>
  <text x="437.9" y="184.3" text-anchor="middle">H</text>
  <path d="M140 64 A44 44 0 0 1 178 86" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/>
  <text x="172" y="62" text-anchor="start" fill="var(--dg-accent)">60°</text>
  <text x="140" y="208" text-anchor="middle" font-weight="bold">Staggered (dihedral angle 60°)</text>
  <text x="140" y="226" text-anchor="middle" font-size="12" fill="var(--dg-muted)">lowest energy, most stable</text>
  <text x="420" y="208" text-anchor="middle" font-weight="bold">Eclipsed (dihedral angle 0°)</text>
  <text x="420" y="226" text-anchor="middle" font-size="12" fill="var(--dg-muted)">highest energy, least stable</text>
</svg>`,
    },
    {
      title: "Structure of benzene: Kekulé structures and the resonance hybrid",
      caption: "Benzene (C₆H₆) is a planar regular hexagon of sp² carbons (all bond angles 120°). The two **Kekulé structures** differ only in the positions of the double bonds; the real molecule is a **resonance hybrid** with delocalised π electrons, so all six C–C bonds are equal (**139 pm**, between C–C 154 pm and C=C 134 pm). One H on each carbon is not drawn.",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-20" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-20a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-20h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <polygon points="90,53 53.6,74 53.6,116 90,137 126.4,116 126.4,74" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="88.4" y1="62" x2="62.2" y2="77.1" stroke="currentColor" stroke-width="1.8"/>
  <line x1="62.2" y1="112.9" x2="88.4" y2="128" stroke="currentColor" stroke-width="1.8"/>
  <line x1="119.4" y1="110.1" x2="119.4" y2="79.9" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="270,53 233.6,74 233.6,116 270,137 306.4,116 306.4,74" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="240.6" y1="79.9" x2="240.6" y2="110.1" stroke="currentColor" stroke-width="1.8"/>
  <line x1="271.6" y1="128" x2="297.8" y2="112.9" stroke="currentColor" stroke-width="1.8"/>
  <line x1="297.8" y1="77.1" x2="271.6" y2="62" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="455,53 418.6,74 418.6,116 455,137 491.4,116 491.4,74" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="455" cy="95" r="26.04" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="180" y1="95" x2="154" y2="95" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-c11c-20)"/><line x1="180" y1="95" x2="206" y2="95" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-c11c-20)"/>
  <line x1="362" y1="30" x2="362" y2="200" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="90" y="165" text-anchor="middle">Kekulé structure I</text>
  <text x="270" y="165" text-anchor="middle">Kekulé structure II</text>
  <text x="180" y="190" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(contributing structures)</text>
  <text x="455" y="165" text-anchor="middle" font-weight="bold">Resonance hybrid</text>
  <text x="455" y="190" text-anchor="middle" font-size="12" fill="var(--dg-muted)">circle = delocalised π electrons</text>
</svg>`,
    },
    {
      title: "Markovnikov addition of HBr to propene",
      caption: "In the addition of HX to an unsymmetrical alkene, the **H atom goes to the carbon with more hydrogens** and X to the carbon with fewer. Reason: H⁺ adds first and gives the **more stable carbocation** (3° > 2° > 1° > CH₃⁺, because of the +I effect and hyperconjugation), which Br⁻ then attacks. So 2-bromopropane is the **major** product.",
      svg: `<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11c-21" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c11c-21a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ar-c11c-21h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L1 5z" fill="var(--dg-accent)"/></marker></defs>
  <text x="10" y="123" text-anchor="start" font-size="14">CH₃–CH=CH₂ + HBr</text>
  <line x1="152" y1="114" x2="200" y2="70" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-21a)"/>
  <line x1="152" y1="128" x2="200" y2="170" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#ar-c11c-21)"/>
  <text x="205" y="66" text-anchor="start" font-size="14">CH₃–C⁺H–CH₃</text>
  <text x="205" y="84" text-anchor="start" font-size="11.5" fill="var(--dg-muted)">2° carbocation (more stable)</text>
  <text x="205" y="174" text-anchor="start" font-size="14">CH₃–CH₂–C⁺H₂</text>
  <text x="205" y="192" text-anchor="start" font-size="11.5" fill="var(--dg-muted)">1° carbocation (less stable)</text>
  <line x1="350" y1="62" x2="390" y2="62" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11c-21a)"/>
  <text x="370" y="54" text-anchor="middle">Br⁻</text>
  <line x1="350" y1="170" x2="390" y2="170" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#ar-c11c-21)"/>
  <text x="370" y="162" text-anchor="middle">Br⁻</text>
  <text x="396" y="66" text-anchor="start" font-size="14" font-weight="bold">CH₃–CHBr–CH₃</text>
  <text x="396" y="84" text-anchor="start" font-size="11.5" fill="var(--dg-accent)">2-bromopropane (major)</text>
  <text x="396" y="174" text-anchor="start" font-size="14">CH₃–CH₂–CH₂Br</text>
  <text x="396" y="192" text-anchor="start" font-size="11.5" fill="var(--dg-muted)">1-bromopropane (minor)</text>
  <text x="280" y="228" text-anchor="middle" font-size="12.5">H adds to C-1 (the carbon with more H); Br goes to C-2.</text>
</svg>`,
    },
  ],
});
