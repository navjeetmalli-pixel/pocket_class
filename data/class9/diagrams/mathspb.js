// Class 9 Maths diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(9, "mathspb", {
  "number-systems": [
    {
      title: "Locating √2 and √3 on the number line",
      caption: "Make a right triangle with both legs 1 unit; its hypotenuse is **√2**. Swing an arc from O to mark √2 on the line, then erect a perpendicular of length 1 at that point to get **√3**, and so on (the square-root spiral).",
      svg: `<svg viewBox="0 0 560 258" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="20" y1="205" x2="520" y2="205" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-1)"/>
  <line x1="60" y1="201" x2="60" y2="209" stroke="currentColor" stroke-width="1.6"/>
  <line x1="180" y1="201" x2="180" y2="209" stroke="currentColor" stroke-width="1.6"/>
  <text x="180" y="225" text-anchor="middle" >1</text>
  <line x1="300" y1="201" x2="300" y2="209" stroke="currentColor" stroke-width="1.6"/>
  <text x="300" y="225" text-anchor="middle" >2</text>
  <line x1="420" y1="201" x2="420" y2="209" stroke="currentColor" stroke-width="1.6"/>
  <text x="420" y="225" text-anchor="middle" >3</text>
  <text x="44" y="225" >O</text>
  <line x1="60" y1="205" x2="180" y2="85" stroke="currentColor" stroke-width="1.6"/>
  <line x1="180" y1="205" x2="180" y2="85" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="60" y1="205" x2="229.7" y2="85" stroke="currentColor" stroke-width="1.6"/>
  <line x1="229.7" y1="205" x2="229.7" y2="85" stroke="currentColor" stroke-width="1.6"/>
  <path d="M180 85A169.7 169.7 0 0 1 229.7 205" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M229.7 85A207.8 207.8 0 0 1 267.8 205" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="229.7" cy="205" r="4" fill="var(--dg-accent)"/>
  <circle cx="267.8" cy="205" r="4" fill="var(--dg-accent)"/>
  <text x="176" y="77" text-anchor="end">B</text>
  <text x="233.7" y="77" >D</text>
  <text x="186" y="149" font-size="12">1</text>
  <text x="235.7" y="149" font-size="12">1</text>
  <text x="231.7" y="245" text-anchor="middle" fill="var(--dg-accent)">√2</text>
  <text x="271.8" y="245" text-anchor="middle" fill="var(--dg-accent)">√3</text>
  <text x="65" y="35" >OA = AB = 1 unit, so OB = √(1² + 1²) = √2</text>
  <text x="65" y="55" fill="var(--dg-muted)">Arc with centre O and radius OB cuts the line at √2.</text>
  <text x="166" y="199" text-anchor="start" font-size="12">A</text>
  <text x="232.7" y="199" font-size="12">C</text>
  <text x="350" y="80" >Then CD = 1 (perpendicular at C),</text>
  <text x="350" y="98" >so OD = √(√2² + 1²) = √3</text>
  <text x="350" y="116" fill="var(--dg-muted)">and the arc centre O, radius OD</text>
  <text x="350" y="132" fill="var(--dg-muted)">cuts the line at √3.</text>
</svg>`,
    },
    {
      title: "The number system: N ⊂ W ⊂ Z ⊂ Q ⊂ R",
      caption: "Each set sits inside the next: **N ⊂ W ⊂ Z ⊂ Q ⊂ R**. Irrational numbers lie in R but outside Q, and together with the rationals they fill the whole real line.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="10" y="8" width="540" height="314" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="22" y="26" font-size="14">Real numbers (R) = rational + irrational</text>
  <rect x="30" y="40" width="340" height="270" rx="5" fill="var(--dg-fill)" opacity="0.5" stroke="currentColor" stroke-width="1.4"/>
  <rect x="50" y="98" width="300" height="212" rx="5" fill="var(--dg-fill)" opacity="0.6" stroke="currentColor" stroke-width="1.4"/>
  <rect x="70" y="148" width="260" height="132" rx="5" fill="var(--dg-fill)" opacity="0.8" stroke="currentColor" stroke-width="1.4"/>
  <rect x="90" y="198" width="220" height="70" rx="5" fill="var(--dg-fill)" opacity="1" stroke="currentColor" stroke-width="1.4"/>
  <text x="200" y="60" text-anchor="middle" >Rational numbers (Q)</text>
  <text x="200" y="78" text-anchor="middle" font-size="12" fill="var(--dg-muted)">p/q, q ≠ 0:  ½,  −¾,  0.25,  0.3̄</text>
  <text x="200" y="118" text-anchor="middle" >Integers (Z)</text>
  <text x="200" y="136" text-anchor="middle" font-size="12" fill="var(--dg-muted)">… −2, −1, 0, 1, 2 …</text>
  <text x="200" y="168" text-anchor="middle" >Whole numbers (W)</text>
  <text x="200" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">0, 1, 2, 3, …</text>
  <text x="200" y="226" text-anchor="middle" >Natural numbers (N)</text>
  <text x="200" y="246" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1, 2, 3, …</text>
  <rect x="390" y="60" width="145" height="240" rx="5" fill="var(--dg-fill)" opacity="0.5" stroke="currentColor" stroke-width="1.4"/>
  <text x="462" y="95" text-anchor="middle" >Irrational</text>
  <text x="462" y="113" text-anchor="middle" >numbers</text>
  <text x="462" y="150" text-anchor="middle" font-size="12" fill="var(--dg-muted)">√2, √3, √5, π</text>
  <text x="462" y="185" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Non-terminating</text>
  <text x="462" y="203" text-anchor="middle" font-size="12" fill="var(--dg-muted)">and non-repeating</text>
  <text x="462" y="221" text-anchor="middle" font-size="12" fill="var(--dg-muted)">decimals</text>
</svg>`,
    },
  ],
  "polynomials": [
    {
      title: "Zero of a linear polynomial on a graph",
      caption: "The zero of a polynomial p(x) is the x-coordinate of the point where the graph of y = p(x) cuts the x-axis. For **p(x) = 2x − 4** the graph meets the x-axis at (2, 0), so the zero is **x = 2**.",
      svg: `<svg viewBox="0 0 560 325" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="40" x2="60" y2="280" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="120" y1="40" x2="120" y2="280" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="150" y1="40" x2="150" y2="280" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="180" y1="40" x2="180" y2="280" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="210" y1="40" x2="210" y2="280" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="280" x2="210" y2="280" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="250" x2="210" y2="250" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="220" x2="210" y2="220" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="190" x2="210" y2="190" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="130" x2="210" y2="130" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="100" x2="210" y2="100" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="70" x2="210" y2="70" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="60" y1="40" x2="210" y2="40" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="90" y1="160" x2="228" y2="160" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-3)"/>
  <line x1="90" y1="160" x2="42" y2="160" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-3)"/>
  <line x1="90" y1="160" x2="90" y2="22" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-3)"/>
  <line x1="90" y1="160" x2="90" y2="298" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-3)"/>
  <line x1="60" y1="157" x2="60" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="60" y="177" text-anchor="middle" font-size="12">−1</text>
  <line x1="120" y1="157" x2="120" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="120" y="177" text-anchor="middle" font-size="12">1</text>
  <line x1="150" y1="157" x2="150" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="150" y="177" text-anchor="middle" font-size="12">2</text>
  <line x1="180" y1="157" x2="180" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="180" y="177" text-anchor="middle" font-size="12">3</text>
  <line x1="210" y1="157" x2="210" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="210" y="177" text-anchor="middle" font-size="12">4</text>
  <line x1="87" y1="280" x2="93" y2="280" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="284" text-anchor="end" font-size="12">−4</text>
  <line x1="87" y1="250" x2="93" y2="250" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="254" text-anchor="end" font-size="12">−3</text>
  <line x1="87" y1="220" x2="93" y2="220" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="224" text-anchor="end" font-size="12">−2</text>
  <line x1="87" y1="190" x2="93" y2="190" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="194" text-anchor="end" font-size="12">−1</text>
  <line x1="87" y1="130" x2="93" y2="130" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="134" text-anchor="end" font-size="12">1</text>
  <line x1="87" y1="100" x2="93" y2="100" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="104" text-anchor="end" font-size="12">2</text>
  <line x1="87" y1="70" x2="93" y2="70" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="74" text-anchor="end" font-size="12">3</text>
  <line x1="87" y1="40" x2="93" y2="40" stroke="currentColor" stroke-width="1.6"/>
  <text x="82" y="44" text-anchor="end" font-size="12">4</text>
  <text x="95" y="176" >O</text>
  <text x="232" y="165" >X</text>
  <text x="38" y="165" text-anchor="end">X′</text>
  <text x="102" y="18" text-anchor="middle" >Y</text>
  <text x="104" y="312" text-anchor="middle" >Y′</text>
  <line x1="90" y1="280" x2="210" y2="40" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="150" cy="160" r="5" fill="var(--dg-accent)"/>
  <circle cx="90" cy="280" r="3.5" fill="var(--dg-accent)"/>
  <text x="158" y="150" font-size="12">(2, 0)</text>
  <text x="100" y="284" font-size="12">(0, −4)</text>
  <text x="206" y="88" fill="var(--dg-accent)">y = 2x − 4</text>
  <text x="330" y="90" font-size="14">Zero of p(x) = 2x − 4</text>
  <text x="330" y="118" >p(x) = 0  ⇒  2x − 4 = 0  ⇒  x = 2</text>
  <text x="330" y="142" fill="var(--dg-muted)">The graph meets the x-axis at (2, 0).</text>
  <text x="330" y="162" fill="var(--dg-muted)">So the zero of p(x) is the x-coordinate</text>
  <text x="330" y="180" fill="var(--dg-muted)">of that point. A linear polynomial has</text>
  <text x="330" y="198" fill="var(--dg-muted)">exactly one zero.</text>
</svg>`,
    },
  ],
  "coordinate-geometry": [
    {
      title: "The Cartesian plane: axes, origin and quadrants",
      caption: "The x-axis (X′OX) and y-axis (Y′OY) meet at the origin O(0, 0) and divide the plane into four quadrants. The **signs of (x, y)** are (+, +) in I, (−, +) in II, (−, −) in III and (+, −) in IV.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="140" y1="30" x2="140" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="168" y1="30" x2="168" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="196" y1="30" x2="196" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="224" y1="30" x2="224" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="252" y1="30" x2="252" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="308" y1="30" x2="308" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="336" y1="30" x2="336" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="364" y1="30" x2="364" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="392" y1="30" x2="392" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="420" y1="30" x2="420" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="310" x2="420" y2="310" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="282" x2="420" y2="282" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="254" x2="420" y2="254" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="226" x2="420" y2="226" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="198" x2="420" y2="198" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="142" x2="420" y2="142" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="114" x2="420" y2="114" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="86" x2="420" y2="86" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="58" x2="420" y2="58" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="30" x2="420" y2="30" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="280" y1="170" x2="436.8" y2="170" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-4)"/>
  <line x1="280" y1="170" x2="123.2" y2="170" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-4)"/>
  <line x1="280" y1="170" x2="280" y2="13.2" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-4)"/>
  <line x1="280" y1="170" x2="280" y2="326.8" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-4)"/>
  <line x1="140" y1="167" x2="140" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="140" y="187" text-anchor="middle" font-size="12">−5</text>
  <line x1="168" y1="167" x2="168" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="168" y="187" text-anchor="middle" font-size="12">−4</text>
  <line x1="196" y1="167" x2="196" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="196" y="187" text-anchor="middle" font-size="12">−3</text>
  <line x1="224" y1="167" x2="224" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="224" y="187" text-anchor="middle" font-size="12">−2</text>
  <line x1="252" y1="167" x2="252" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="252" y="187" text-anchor="middle" font-size="12">−1</text>
  <line x1="308" y1="167" x2="308" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="308" y="187" text-anchor="middle" font-size="12">1</text>
  <line x1="336" y1="167" x2="336" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="336" y="187" text-anchor="middle" font-size="12">2</text>
  <line x1="364" y1="167" x2="364" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="364" y="187" text-anchor="middle" font-size="12">3</text>
  <line x1="392" y1="167" x2="392" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="392" y="187" text-anchor="middle" font-size="12">4</text>
  <line x1="420" y1="167" x2="420" y2="173" stroke="currentColor" stroke-width="1.6"/>
  <text x="420" y="187" text-anchor="middle" font-size="12">5</text>
  <line x1="277" y1="310" x2="283" y2="310" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="314" text-anchor="end" font-size="12">−5</text>
  <line x1="277" y1="282" x2="283" y2="282" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="286" text-anchor="end" font-size="12">−4</text>
  <line x1="277" y1="254" x2="283" y2="254" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="258" text-anchor="end" font-size="12">−3</text>
  <line x1="277" y1="226" x2="283" y2="226" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="230" text-anchor="end" font-size="12">−2</text>
  <line x1="277" y1="198" x2="283" y2="198" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="202" text-anchor="end" font-size="12">−1</text>
  <line x1="277" y1="142" x2="283" y2="142" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="146" text-anchor="end" font-size="12">1</text>
  <line x1="277" y1="114" x2="283" y2="114" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="118" text-anchor="end" font-size="12">2</text>
  <line x1="277" y1="86" x2="283" y2="86" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="90" text-anchor="end" font-size="12">3</text>
  <line x1="277" y1="58" x2="283" y2="58" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="62" text-anchor="end" font-size="12">4</text>
  <line x1="277" y1="30" x2="283" y2="30" stroke="currentColor" stroke-width="1.6"/>
  <text x="272" y="34" text-anchor="end" font-size="12">5</text>
  <text x="285" y="186" >O</text>
  <text x="440.8" y="175" >X</text>
  <text x="119.2" y="175" text-anchor="end">X′</text>
  <text x="292" y="9.2" text-anchor="middle" >Y</text>
  <text x="294" y="340.8" text-anchor="middle" >Y′</text>
  <circle cx="364" cy="114" r="4" fill="var(--dg-accent)"/>
  <text x="374" y="106" font-size="12">P(3, 2)</text>
  <circle cx="168" cy="86" r="4" fill="var(--dg-accent)"/>
  <text x="78" y="76" font-size="12">Q(−4, 3)</text>
  <circle cx="196" cy="226" r="4" fill="var(--dg-accent)"/>
  <text x="100" y="246" font-size="12">R(−3, −2)</text>
  <circle cx="336" cy="282" r="4" fill="var(--dg-accent)"/>
  <text x="346" y="302" font-size="12">S(2, −4)</text>
  <text x="450" y="40" >Quadrant I</text>
  <text x="450" y="58" fill="var(--dg-muted)">(+, +)</text>
  <text x="14" y="40" >Quadrant II</text>
  <text x="14" y="58" fill="var(--dg-muted)">(−, +)</text>
  <text x="14" y="300" >Quadrant III</text>
  <text x="14" y="318" fill="var(--dg-muted)">(−, −)</text>
  <text x="450" y="300" >Quadrant IV</text>
  <text x="450" y="318" fill="var(--dg-muted)">(+, −)</text>
  <text x="450" y="188" font-size="12" fill="var(--dg-muted)">x-axis: y = 0</text>
</svg>`,
    },
    {
      title: "Abscissa and ordinate of a point",
      caption: "A point (x, y) is plotted by going **x units** along the x-axis (abscissa) and **y units** parallel to the y-axis (ordinate). Points on the x-axis have y = 0 and points on the y-axis have x = 0.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="44" y1="32" x2="44" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="76" y1="32" x2="76" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="108" y1="32" x2="108" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="172" y1="32" x2="172" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="204" y1="32" x2="204" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="236" y1="32" x2="236" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="268" y1="32" x2="268" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="300" y1="32" x2="300" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="44" y1="256" x2="300" y2="256" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="44" y1="224" x2="300" y2="224" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="44" y1="192" x2="300" y2="192" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="44" y1="128" x2="300" y2="128" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="44" y1="96" x2="300" y2="96" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="44" y1="64" x2="300" y2="64" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="44" y1="32" x2="300" y2="32" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="140" y1="160" x2="319.2" y2="160" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-5)"/>
  <line x1="140" y1="160" x2="24.8" y2="160" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-5)"/>
  <line x1="140" y1="160" x2="140" y2="12.8" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-5)"/>
  <line x1="140" y1="160" x2="140" y2="275.2" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-5)"/>
  <line x1="44" y1="157" x2="44" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="44" y="177" text-anchor="middle" font-size="12">−3</text>
  <line x1="76" y1="157" x2="76" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="76" y="177" text-anchor="middle" font-size="12">−2</text>
  <line x1="108" y1="157" x2="108" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="108" y="177" text-anchor="middle" font-size="12">−1</text>
  <line x1="172" y1="157" x2="172" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="172" y="177" text-anchor="middle" font-size="12">1</text>
  <line x1="204" y1="157" x2="204" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="204" y="177" text-anchor="middle" font-size="12">2</text>
  <line x1="236" y1="157" x2="236" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="236" y="177" text-anchor="middle" font-size="12">3</text>
  <line x1="268" y1="157" x2="268" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="268" y="177" text-anchor="middle" font-size="12">4</text>
  <line x1="300" y1="157" x2="300" y2="163" stroke="currentColor" stroke-width="1.6"/>
  <text x="300" y="177" text-anchor="middle" font-size="12">5</text>
  <line x1="137" y1="256" x2="143" y2="256" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="260" text-anchor="end" font-size="12">−3</text>
  <line x1="137" y1="224" x2="143" y2="224" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="228" text-anchor="end" font-size="12">−2</text>
  <line x1="137" y1="192" x2="143" y2="192" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="196" text-anchor="end" font-size="12">−1</text>
  <line x1="137" y1="128" x2="143" y2="128" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="132" text-anchor="end" font-size="12">1</text>
  <line x1="137" y1="96" x2="143" y2="96" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="100" text-anchor="end" font-size="12">2</text>
  <line x1="137" y1="64" x2="143" y2="64" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="68" text-anchor="end" font-size="12">3</text>
  <line x1="137" y1="32" x2="143" y2="32" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="36" text-anchor="end" font-size="12">4</text>
  <text x="145" y="176" >O</text>
  <text x="323.2" y="165" >X</text>
  <text x="20.8" y="165" text-anchor="end">X′</text>
  <text x="152" y="8.8" text-anchor="middle" >Y</text>
  <text x="154" y="289.2" text-anchor="middle" >Y′</text>
  <line x1="268" y1="64" x2="268" y2="160" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <line x1="268" y1="64" x2="140" y2="64" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <circle cx="268" cy="64" r="5" fill="var(--dg-accent)"/>
  <text x="276" y="56" >P(4, 3)</text>
  <circle cx="76" cy="160" r="4" fill="var(--dg-accent)"/>
  <text x="72" y="151" font-size="12" text-anchor="middle">A(−2, 0)</text>
  <circle cx="140" cy="224" r="4" fill="var(--dg-accent)"/>
  <text x="149" y="228" font-size="12">B(0, −2)</text>
  <text x="345" y="70" font-size="14">For the point P(4, 3):</text>
  <text x="345" y="98" >abscissa = x-coordinate = 4</text>
  <text x="345" y="116" fill="var(--dg-muted)">(distance from the y-axis)</text>
  <text x="345" y="144" >ordinate = y-coordinate = 3</text>
  <text x="345" y="162" fill="var(--dg-muted)">(distance from the x-axis)</text>
  <text x="345" y="196" >On the x-axis: y = 0, e.g. A(−2, 0)</text>
  <text x="345" y="216" >On the y-axis: x = 0, e.g. B(0, −2)</text>
</svg>`,
    },
  ],
  "linear-equations-in-two-variables": [
    {
      title: "Graph of a linear equation in two variables",
      caption: "The graph of **2x + y = 6** is a straight line. Find two or three solutions such as (0, 6), (1, 4), (2, 2), (3, 0), plot them and join them; every point of the line is a solution.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="39" y1="48" x2="39" y2="296" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="101" y1="48" x2="101" y2="296" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="132" y1="48" x2="132" y2="296" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="163" y1="48" x2="163" y2="296" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="194" y1="48" x2="194" y2="296" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="225" y1="48" x2="225" y2="296" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="296" x2="225" y2="296" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="234" x2="225" y2="234" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="203" x2="225" y2="203" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="172" x2="225" y2="172" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="141" x2="225" y2="141" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="110" x2="225" y2="110" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="79" x2="225" y2="79" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="39" y1="48" x2="225" y2="48" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="70" y1="265" x2="243.6" y2="265" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-6)"/>
  <line x1="70" y1="265" x2="20.4" y2="265" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-6)"/>
  <line x1="70" y1="265" x2="70" y2="29.4" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-6)"/>
  <line x1="70" y1="265" x2="70" y2="314.6" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-6)"/>
  <line x1="39" y1="262" x2="39" y2="268" stroke="currentColor" stroke-width="1.6"/>
  <text x="39" y="282" text-anchor="middle" font-size="12">−1</text>
  <line x1="101" y1="262" x2="101" y2="268" stroke="currentColor" stroke-width="1.6"/>
  <text x="101" y="282" text-anchor="middle" font-size="12">1</text>
  <line x1="132" y1="262" x2="132" y2="268" stroke="currentColor" stroke-width="1.6"/>
  <text x="132" y="282" text-anchor="middle" font-size="12">2</text>
  <line x1="163" y1="262" x2="163" y2="268" stroke="currentColor" stroke-width="1.6"/>
  <text x="163" y="282" text-anchor="middle" font-size="12">3</text>
  <line x1="194" y1="262" x2="194" y2="268" stroke="currentColor" stroke-width="1.6"/>
  <text x="194" y="282" text-anchor="middle" font-size="12">4</text>
  <line x1="225" y1="262" x2="225" y2="268" stroke="currentColor" stroke-width="1.6"/>
  <text x="225" y="282" text-anchor="middle" font-size="12">5</text>
  <line x1="67" y1="296" x2="73" y2="296" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="300" text-anchor="end" font-size="12">−1</text>
  <line x1="67" y1="234" x2="73" y2="234" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="238" text-anchor="end" font-size="12">1</text>
  <line x1="67" y1="203" x2="73" y2="203" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="207" text-anchor="end" font-size="12">2</text>
  <line x1="67" y1="172" x2="73" y2="172" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="176" text-anchor="end" font-size="12">3</text>
  <line x1="67" y1="141" x2="73" y2="141" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="145" text-anchor="end" font-size="12">4</text>
  <line x1="67" y1="110" x2="73" y2="110" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="114" text-anchor="end" font-size="12">5</text>
  <line x1="67" y1="79" x2="73" y2="79" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="83" text-anchor="end" font-size="12">6</text>
  <line x1="67" y1="48" x2="73" y2="48" stroke="currentColor" stroke-width="1.6"/>
  <text x="62" y="52" text-anchor="end" font-size="12">7</text>
  <text x="75" y="281" >O</text>
  <text x="247.6" y="270" >X</text>
  <text x="16.4" y="270" text-anchor="end">X′</text>
  <text x="82" y="25.4" text-anchor="middle" >Y</text>
  <text x="84" y="328.6" text-anchor="middle" >Y′</text>
  <line x1="54.5" y1="48" x2="178.5" y2="296" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="70" cy="79" r="4" fill="var(--dg-accent)"/>
  <text x="80" y="75" font-size="12">(0, 6)</text>
  <circle cx="101" cy="141" r="4" fill="var(--dg-accent)"/>
  <text x="111" y="133" font-size="12">(1, 4)</text>
  <circle cx="132" cy="203" r="4" fill="var(--dg-accent)"/>
  <text x="142" y="195" font-size="12">(2, 2)</text>
  <circle cx="163" cy="265" r="4" fill="var(--dg-accent)"/>
  <text x="173" y="255" font-size="12">(3, 0)</text>
  <text x="135.1" y="172" fill="var(--dg-accent)">2x + y = 6</text>
  <text x="340" y="70" font-size="14">Graph of 2x + y = 6</text>
  <text x="340" y="92" fill="var(--dg-muted)">Write y = 6 − 2x and find solutions:</text>
  <line x1="335" y1="106" x2="520" y2="106" stroke="currentColor" stroke-width="1"/>
  <line x1="335" y1="134" x2="520" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="335" y1="162" x2="520" y2="162" stroke="currentColor" stroke-width="1"/>
  <text x="342" y="125" >x</text>
  <text x="342" y="153" >y</text>
  <text x="390" y="125" text-anchor="middle" >0</text>
  <text x="390" y="153" text-anchor="middle" >6</text>
  <text x="430" y="125" text-anchor="middle" >1</text>
  <text x="430" y="153" text-anchor="middle" >4</text>
  <text x="470" y="125" text-anchor="middle" >2</text>
  <text x="470" y="153" text-anchor="middle" >2</text>
  <text x="510" y="125" text-anchor="middle" >3</text>
  <text x="510" y="153" text-anchor="middle" >0</text>
  <text x="340" y="192" >Every point on the line is a solution;</text>
  <text x="340" y="210" >there are infinitely many.</text>
</svg>`,
    },
    {
      title: "Lines x = 3, y = −2 and y = x",
      caption: "The graph of **x = a** is a line parallel to the y-axis and **y = b** is a line parallel to the x-axis. An equation of the form **y = mx** gives a line through the origin.",
      svg: `<svg viewBox="0 0 560 335" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="38" y1="40" x2="38" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="66" y1="40" x2="66" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="94" y1="40" x2="94" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="122" y1="40" x2="122" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="178" y1="40" x2="178" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="206" y1="40" x2="206" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="234" y1="40" x2="234" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="262" y1="40" x2="262" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="290" y1="40" x2="290" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="292" x2="290" y2="292" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="264" x2="290" y2="264" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="236" x2="290" y2="236" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="208" x2="290" y2="208" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="152" x2="290" y2="152" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="124" x2="290" y2="124" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="96" x2="290" y2="96" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="68" x2="290" y2="68" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="38" y1="40" x2="290" y2="40" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="150" y1="180" x2="306.8" y2="180" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-7)"/>
  <line x1="150" y1="180" x2="21.2" y2="180" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-7)"/>
  <line x1="150" y1="180" x2="150" y2="23.2" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-7)"/>
  <line x1="150" y1="180" x2="150" y2="308.8" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m9-7)"/>
  <line x1="38" y1="177" x2="38" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="38" y="197" text-anchor="middle" font-size="12">−4</text>
  <line x1="66" y1="177" x2="66" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="66" y="197" text-anchor="middle" font-size="12">−3</text>
  <line x1="94" y1="177" x2="94" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="94" y="197" text-anchor="middle" font-size="12">−2</text>
  <line x1="122" y1="177" x2="122" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="122" y="197" text-anchor="middle" font-size="12">−1</text>
  <line x1="178" y1="177" x2="178" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="178" y="197" text-anchor="middle" font-size="12">1</text>
  <line x1="206" y1="177" x2="206" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="206" y="197" text-anchor="middle" font-size="12">2</text>
  <line x1="234" y1="177" x2="234" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <line x1="262" y1="177" x2="262" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="262" y="197" text-anchor="middle" font-size="12">4</text>
  <line x1="290" y1="177" x2="290" y2="183" stroke="currentColor" stroke-width="1.6"/>
  <text x="290" y="197" text-anchor="middle" font-size="12">5</text>
  <line x1="147" y1="292" x2="153" y2="292" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="296" text-anchor="end" font-size="12">−4</text>
  <line x1="147" y1="264" x2="153" y2="264" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="268" text-anchor="end" font-size="12">−3</text>
  <line x1="147" y1="236" x2="153" y2="236" stroke="currentColor" stroke-width="1.6"/>
  <line x1="147" y1="208" x2="153" y2="208" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="212" text-anchor="end" font-size="12">−1</text>
  <line x1="147" y1="152" x2="153" y2="152" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="156" text-anchor="end" font-size="12">1</text>
  <line x1="147" y1="124" x2="153" y2="124" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="128" text-anchor="end" font-size="12">2</text>
  <line x1="147" y1="96" x2="153" y2="96" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="100" text-anchor="end" font-size="12">3</text>
  <line x1="147" y1="68" x2="153" y2="68" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="72" text-anchor="end" font-size="12">4</text>
  <line x1="147" y1="40" x2="153" y2="40" stroke="currentColor" stroke-width="1.6"/>
  <text x="142" y="44" text-anchor="end" font-size="12">5</text>
  <text x="155" y="196" >O</text>
  <text x="310.8" y="185" >X</text>
  <text x="17.2" y="185" text-anchor="end">X′</text>
  <text x="162" y="19.2" text-anchor="middle" >Y</text>
  <text x="164" y="322.8" text-anchor="middle" >Y′</text>
  <line x1="234" y1="28.8" x2="234" y2="303.2" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="26.8" y1="236" x2="301.2" y2="236" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="38" y1="292" x2="290" y2="40" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="240" y="36.4" fill="var(--dg-accent)">x = 3</text>
  <text x="29.6" y="230" fill="var(--dg-accent)">y = −2</text>
  <text x="71.6" y="287.8" >y = x</text>
  <text x="340" y="70" font-size="14">Special lines</text>
  <text x="340" y="98" >x = 3: vertical line, parallel to the</text>
  <text x="340" y="116" >y-axis, cutting the x-axis at (3, 0).</text>
  <text x="340" y="148" >y = −2: horizontal line, parallel to</text>
  <text x="340" y="166" >the x-axis, cutting y-axis at (0, −2).</text>
  <text x="340" y="198" >y = x: passes through the origin;</text>
  <text x="340" y="216" >every point has equal x and y.</text>
</svg>`,
    },
  ],
  "introduction-to-euclids-geometry": [
    {
      title: "Euclid's Postulates 1, 2 and 3",
      caption: "Postulate 1 gives the straight line AB through two points; Postulate 2 lets the segment AB be **extended in either direction**; Postulate 3 gives a **circle** with centre O and radius OA.",
      svg: `<svg viewBox="0 0 560 225" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="40" y1="85" x2="150" y2="55" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="40" cy="85" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="150" cy="55" r="3.5" fill="var(--dg-accent)"/>
  <text x="24" y="102" >A</text>
  <text x="154" y="48" >B</text>
  <line x1="235" y1="80" x2="325" y2="80" stroke="currentColor" stroke-width="1.6"/>
  <line x1="235" y1="80" x2="198" y2="80" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#ar-m9-8)"/>
  <line x1="325" y1="80" x2="357" y2="80" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#ar-m9-8)"/>
  <circle cx="235" cy="80" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="325" cy="80" r="3.5" fill="var(--dg-accent)"/>
  <text x="230" y="100" >A</text>
  <text x="322" y="100" >B</text>
  <circle cx="465" cy="80" r="45" fill="var(--dg-fill)" opacity="0.6" stroke="currentColor" stroke-width="1.6"/>
  <line x1="465" y1="80" x2="510" y2="80" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="465" cy="80" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="510" cy="80" r="3.5" fill="var(--dg-accent)"/>
  <text x="450" y="100" >O</text>
  <text x="516" y="84" >A</text>
  <text x="482" y="72" font-size="12">r</text>
  <text x="100" y="148" text-anchor="middle" font-size="14">Postulate 1</text>
  <text x="100" y="168" text-anchor="middle" font-size="12" fill="var(--dg-muted)">A straight line can be</text>
  <text x="100" y="185" text-anchor="middle" font-size="12" fill="var(--dg-muted)">drawn from any point</text>
  <text x="100" y="202" text-anchor="middle" font-size="12" fill="var(--dg-muted)">to any other point</text>
  <text x="280" y="148" text-anchor="middle" font-size="14">Postulate 2</text>
  <text x="280" y="168" text-anchor="middle" font-size="12" fill="var(--dg-muted)">A terminated line can</text>
  <text x="280" y="185" text-anchor="middle" font-size="12" fill="var(--dg-muted)">be produced indefinitely</text>
  <text x="465" y="148" text-anchor="middle" font-size="14">Postulate 3</text>
  <text x="465" y="168" text-anchor="middle" font-size="12" fill="var(--dg-muted)">A circle can be drawn</text>
  <text x="465" y="185" text-anchor="middle" font-size="12" fill="var(--dg-muted)">with any centre and</text>
  <text x="465" y="202" text-anchor="middle" font-size="12" fill="var(--dg-muted)">any radius</text>
</svg>`,
    },
    {
      title: "Euclid's fifth postulate",
      caption: "If a line t falling on two lines l and m makes the interior angles on one side **sum to less than 180°**, then l and m, extended far enough, meet on that side.",
      svg: `<svg viewBox="0 0 560 262" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="200" y1="20" x2="200" y2="220" stroke="currentColor" stroke-width="1.6"/>
  <text x="206" y="30" >t</text>
  <line x1="60" y1="35" x2="400" y2="120" stroke="currentColor" stroke-width="1.6"/>
  <line x1="60" y1="205" x2="400" y2="120" stroke="currentColor" stroke-width="1.6"/>
  <text x="40" y="40" >l</text>
  <text x="40" y="210" >m</text>
  <path d="M200 100A30 30 0 0 0 229.1 77.3" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/>
  <path d="M200 140A30 30 0 0 1 229.1 162.7" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/>
  <text x="228" y="104" font-size="12">∠1</text>
  <text x="228" y="140" font-size="12">∠2</text>
  <circle cx="400" cy="120" r="4.5" fill="var(--dg-accent)"/>
  <text x="412" y="124" >lines meet here</text>
  <text x="280" y="246" text-anchor="middle" >If ∠1 + ∠2 &lt; 180°, the lines l and m meet on that side of t</text>
</svg>`,
    },
  ],
  "lines-and-angles": [
    {
      title: "Linear pair and vertically opposite angles",
      caption: "When two lines cross, the **vertically opposite angles are equal**. Two adjacent angles on a straight line form a **linear pair** and add up to 180°.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="25" y1="115" x2="265" y2="115" stroke="currentColor" stroke-width="1.6"/>
  <line x1="145" y1="115" x2="195" y2="28.4" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="145" cy="115" r="3" fill="var(--dg-accent)"/>
  <text x="10" y="120" >A</text>
  <text x="270" y="120" >B</text>
  <text x="197" y="14" >C</text>
  <text x="141" y="133" >O</text>
  <path d="M177 115A32 32 0 0 0 161 87.3" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M157 94.2A24 24 0 0 0 121 115" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <text x="192.7" y="89.6" text-anchor="middle" font-size="12">∠COB</text>
  <text x="111.4" y="79.8" text-anchor="middle" font-size="12">∠AOC</text>
  <text x="145" y="215" text-anchor="middle" >Linear pair: ∠AOC + ∠COB = 180°</text>
  <text x="145" y="235" text-anchor="middle" fill="var(--dg-muted)">(adjacent angles on a straight line)</text>
  <line x1="415" y1="115" x2="501" y2="54.8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="415" y1="115" x2="329" y2="175.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="415" y1="115" x2="329" y2="54.8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="415" y1="115" x2="501" y2="175.2" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="415" cy="115" r="3" fill="var(--dg-accent)"/>
  <text x="512.7" y="45.3" >P</text>
  <text x="308.3" y="194.7" >Q</text>
  <text x="308.3" y="45.3" >R</text>
  <text x="512.7" y="194.7" >S</text>
  <path d="M442.9 95.5A34 34 0 0 0 387.1 95.5" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M387.1 134.5A34 34 0 0 0 442.9 134.5" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M401.9 105.8A16 16 0 0 0 401.9 124.2" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M397.8 103A21 21 0 0 0 397.8 127" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M428.1 124.2A16 16 0 0 0 428.1 105.8" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M432.2 127A21 21 0 0 0 432.2 103" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <text x="415" y="69" text-anchor="middle" >a</text>
  <text x="415" y="173" text-anchor="middle" >a</text>
  <text x="363" y="119" text-anchor="middle" >b</text>
  <text x="467" y="119" text-anchor="middle" >b</text>
  <text x="415" y="215" text-anchor="middle" >Vertically opposite angles are equal:</text>
  <text x="415" y="235" text-anchor="middle" >a = ∠POR = ∠QOS  and  b = ∠ROQ = ∠POS</text>
</svg>`,
    },
    {
      title: "Angles made by a transversal with parallel lines",
      caption: "A transversal t cuts the parallel lines l and m. **Corresponding angles and alternate interior angles are equal; co-interior angles add up to 180°.**",
      svg: `<svg viewBox="0 0 560 262" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m9-11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="40" y1="90" x2="320" y2="90" stroke="currentColor" stroke-width="1.6"/>
  <line x1="40" y1="200" x2="320" y2="200" stroke="currentColor" stroke-width="1.6"/>
  <line x1="139" y1="247.6" x2="257.5" y2="42.4" stroke="currentColor" stroke-width="1.6"/>
  <text x="22" y="95" >l</text>
  <text x="22" y="205" >m</text>
  <text x="261.5" y="46.4" >t</text>
  <path d="M298 85L305 90L298 95M306 85L313 90L306 95" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <path d="M298 195L305 200L298 205M306 195L313 200L306 205" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="230" cy="90" r="3" fill="var(--dg-accent)"/>
  <circle cx="166.5" cy="200" r="3" fill="var(--dg-accent)"/>
  <text x="210" y="59.4" text-anchor="middle" font-size="13">1</text>
  <text x="268.1" y="72" text-anchor="middle" font-size="13">2</text>
  <text x="191.9" y="116" text-anchor="middle" font-size="13">3</text>
  <text x="249" y="126.9" text-anchor="middle" font-size="13">4</text>
  <text x="146.5" y="169.4" text-anchor="middle" font-size="13">5</text>
  <text x="204.6" y="182" text-anchor="middle" font-size="13">6</text>
  <text x="128.4" y="226" text-anchor="middle" font-size="13">7</text>
  <text x="185.5" y="236.9" text-anchor="middle" font-size="13">8</text>
  <text x="345" y="38" font-size="14">When l ∥ m:</text>
  <text x="345" y="62" font-size="12">Corresponding angles:</text>
  <text x="345" y="80" font-size="12" fill="var(--dg-muted)">∠1 = ∠5, ∠2 = ∠6, ∠3 = ∠7, ∠4 = ∠8</text>
  <text x="345" y="106" font-size="12">Alternate interior angles:</text>
  <text x="345" y="124" font-size="12" fill="var(--dg-muted)">∠3 = ∠6,  ∠4 = ∠5</text>
  <text x="345" y="150" font-size="12">Co-interior angles:</text>
  <text x="345" y="168" font-size="12" fill="var(--dg-muted)">∠3 + ∠5 = 180°,  ∠4 + ∠6 = 180°</text>
  <text x="345" y="194" font-size="12">Vertically opposite angles:</text>
  <text x="345" y="212" font-size="12" fill="var(--dg-muted)">∠1 = ∠4,  ∠2 = ∠3</text>
</svg>`,
    },
    {
      title: "Angle sum property and the exterior angle of a triangle",
      caption: "The three angles of a triangle add up to **180°**. When side BC is produced to D, the exterior angle ACD equals the **sum of the two interior opposite angles** (∠A + ∠B).",
      svg: `<svg viewBox="0 0 560 262" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="80" y1="165" x2="400" y2="165" stroke="currentColor" stroke-width="1.6"/>
  <line x1="200" y1="35" x2="80" y2="165" stroke="currentColor" stroke-width="1.6"/>
  <line x1="200" y1="35" x2="300" y2="165" stroke="currentColor" stroke-width="1.6"/>
  <line x1="50" y1="35" x2="350" y2="35" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4"/>
  <path d="M174 35A26 26 0 0 0 182.4 54.1" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M182.4 54.1A26 26 0 0 0 215.9 55.6" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <path d="M215.9 55.6A26 26 0 0 0 226 35" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <text x="157.9" y="57.4" text-anchor="middle" font-size="12">1</text>
  <text x="197.9" y="85" text-anchor="middle" font-size="12">2</text>
  <text x="241.3" y="59.3" text-anchor="middle" font-size="12">3</text>
  <path d="M110 165A30 30 0 0 0 100.3 143" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <text x="125.8" y="148.9" text-anchor="middle" font-size="12">4</text>
  <path d="M285.4 146A24 24 0 0 0 276 165" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <text x="260.5" y="149.6" text-anchor="middle" font-size="12">5</text>
  <path d="M334 165A34 34 0 0 0 279.3 138.1" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" />
  <text x="323" y="122.3" text-anchor="middle" font-size="12">6</text>
  <text x="196" y="25" >A</text>
  <text x="66" y="181" >B</text>
  <text x="296" y="183" >C</text>
  <text x="406" y="170" >D</text>
  <text x="36" y="39" >P</text>
  <text x="356" y="39" >Q</text>
  <text x="40" y="205" >Draw PQ through A parallel to BC:  ∠1 = ∠4 and ∠3 = ∠5 (alternate interior angles).</text>
  <text x="40" y="226" >∠1 + ∠2 + ∠3 = 180° (straight line PQ), so ∠A + ∠B + ∠C = 180°.</text>
  <text x="40" y="247" >Exterior angle ∠6 = 180° − ∠5 = ∠2 + ∠4 = sum of the two interior opposite angles.</text>
</svg>`,
    },
  ],
  "triangles": [
    {
      title: "Isosceles triangle: equal sides, equal angles",
      caption: "If **AB = AC**, the angles opposite them are equal: **∠B = ∠C**. Joining A to the mid-point D of BC gives △ABD ≅ △ACD, so AD is also perpendicular to BC.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="280,45 160,205 400,205" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="280" y1="45" x2="280" y2="205" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="224" y1="128" x2="216" y2="122" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="344" y1="122" x2="336" y2="128" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="218" y1="200" x2="218" y2="210" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="222" y1="200" x2="222" y2="210" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="338" y1="200" x2="338" y2="210" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="342" y1="200" x2="342" y2="210" stroke="var(--dg-accent)" stroke-width="1.8" />
  <path d="M186 205A26 26 0 0 0 175.6 184.2" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M374 205A26 26 0 0 1 384.4 184.2" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M270 205L270 195L280 195" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="280" y="36" text-anchor="middle">A</text>
  <text x="147.3" y="215.8" text-anchor="end">B</text>
  <text x="412.7" y="215.8" text-anchor="start">C</text>
  <text x="286" y="223">D</text>
  <text x="194" y="197" font-size="12" fill="var(--dg-accent)">x</text>
  <text x="360" y="197" font-size="12" fill="var(--dg-accent)">x</text>
  <text x="280" y="238" text-anchor="middle" font-size="12" fill="var(--dg-muted)">AB = AC  ⇒  ∠B = ∠C = x;  AD ⊥ BC and BD = DC</text>
</svg>`,
    },
    {
      title: "Congruence criteria: SAS, ASA, SSS, RHS",
      caption: "Marks of the same kind show equal parts. Each pair of triangles is congruent by the rule named below it; **SSA and AAA are not congruence rules**.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="55,25 25,85 115,85" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="44.5" y1="57.2" x2="35.5" y2="52.8" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="87.1" y1="50.1" x2="80.1" y2="57.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="89.9" y1="52.9" x2="82.9" y2="59.9" stroke="var(--dg-accent)" stroke-width="1.8" /><path d="M47 41.1A18 18 0 0 0 67.7 37.7" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <text x="52.1" y="18.4" text-anchor="middle">A</text>
  <text x="14.3" y="95.4" text-anchor="end">B</text>
  <text x="126.1" y="94.5" text-anchor="start">C</text>
  <polygon points="190,25 160,85 250,85" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="179.5" y1="57.2" x2="170.5" y2="52.8" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="222.1" y1="50.1" x2="215.1" y2="57.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="224.9" y1="52.9" x2="217.9" y2="59.9" stroke="var(--dg-accent)" stroke-width="1.8" /><path d="M182 41.1A18 18 0 0 0 202.7 37.7" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <text x="187.1" y="18.4" text-anchor="middle">P</text>
  <text x="149.3" y="95.4" text-anchor="end">Q</text>
  <text x="261.1" y="94.5" text-anchor="start">R</text>
  <text x="137" y="125" text-anchor="middle" font-size="14">SAS</text>
  <text x="137" y="143" text-anchor="middle" font-size="12" fill="var(--dg-muted)">two sides + included angle</text>
  <polygon points="335,25 305,85 395,85" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M313 68.9A18 18 0 0 1 323 85" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/><path d="M382.3 72.3A18 18 0 0 0 377 85" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/><path d="M379.4 69.4A22 22 0 0 0 373 85" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/><line x1="350" y1="80" x2="350" y2="90" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="332.1" y="18.4" text-anchor="middle">A</text>
  <text x="294.3" y="95.4" text-anchor="end">B</text>
  <text x="406.1" y="94.5" text-anchor="start">C</text>
  <polygon points="470,25 440,85 530,85" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M448 68.9A18 18 0 0 1 458 85" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/><path d="M517.3 72.3A18 18 0 0 0 512 85" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/><path d="M514.4 69.4A22 22 0 0 0 508 85" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/><line x1="485" y1="80" x2="485" y2="90" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="467.1" y="18.4" text-anchor="middle">P</text>
  <text x="429.3" y="95.4" text-anchor="end">Q</text>
  <text x="541.1" y="94.5" text-anchor="start">R</text>
  <text x="417" y="125" text-anchor="middle" font-size="14">ASA</text>
  <text x="417" y="143" text-anchor="middle" font-size="12" fill="var(--dg-muted)">two angles + included side</text>
  <polygon points="55,175 25,235 115,235" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="44.5" y1="207.2" x2="35.5" y2="202.8" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="87.1" y1="200.1" x2="80.1" y2="207.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="89.9" y1="202.9" x2="82.9" y2="209.9" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="66" y1="230" x2="66" y2="240" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="70" y1="230" x2="70" y2="240" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="74" y1="230" x2="74" y2="240" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="52.1" y="168.4" text-anchor="middle">A</text>
  <text x="14.3" y="245.4" text-anchor="end">B</text>
  <text x="126.1" y="244.5" text-anchor="start">C</text>
  <polygon points="190,175 160,235 250,235" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="179.5" y1="207.2" x2="170.5" y2="202.8" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="222.1" y1="200.1" x2="215.1" y2="207.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="224.9" y1="202.9" x2="217.9" y2="209.9" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="201" y1="230" x2="201" y2="240" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="205" y1="230" x2="205" y2="240" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="209" y1="230" x2="209" y2="240" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="187.1" y="168.4" text-anchor="middle">P</text>
  <text x="149.3" y="245.4" text-anchor="end">Q</text>
  <text x="261.1" y="244.5" text-anchor="start">R</text>
  <text x="137" y="275" text-anchor="middle" font-size="14">SSS</text>
  <text x="137" y="293" text-anchor="middle" font-size="12" fill="var(--dg-muted)">three sides</text>
  <polygon points="305,175 305,235 390,235" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M305 225L315 225L315 235" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="350.4" y1="200.9" x2="344.6" y2="209.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="310" y1="203" x2="300" y2="203" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="310" y1="207" x2="300" y2="207" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="298.1" y="170.2" text-anchor="end">A</text>
  <text x="295.2" y="246.9" text-anchor="end">B</text>
  <text x="401.3" y="244" text-anchor="start">C</text>
  <polygon points="440,175 440,235 525,235" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M440 225L450 225L450 235" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="485.4" y1="200.9" x2="479.6" y2="209.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="445" y1="203" x2="435" y2="203" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="445" y1="207" x2="435" y2="207" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="433.1" y="170.2" text-anchor="end">P</text>
  <text x="430.2" y="246.9" text-anchor="end">Q</text>
  <text x="536.3" y="244" text-anchor="start">R</text>
  <text x="417" y="275" text-anchor="middle" font-size="14">RHS</text>
  <text x="417" y="293" text-anchor="middle" font-size="12" fill="var(--dg-muted)">right angle + hypotenuse + one side</text>
</svg>`,
    },
  ],
  "quadrilaterals": [
    {
      title: "Parallelogram and its diagonals",
      caption: "In parallelogram ABCD, **opposite sides are equal**, opposite angles are equal and the **diagonals AC and BD bisect each other** at O.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="140,50 60,200 340,200 420,50" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="140" y1="50" x2="340" y2="200" stroke="currentColor" stroke-width="1.8" />
  <line x1="60" y1="200" x2="420" y2="50" stroke="currentColor" stroke-width="1.8" />
  <line x1="104.4" y1="127.4" x2="95.6" y2="122.6" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="384.4" y1="127.4" x2="375.6" y2="122.6" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="278" y1="45" x2="278" y2="55" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="282" y1="45" x2="282" y2="55" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="198" y1="195" x2="198" y2="205" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="202" y1="195" x2="202" y2="205" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="189.8" y1="81.1" x2="183.8" y2="89.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="193" y1="83.5" x2="187" y2="91.5" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="196.2" y1="85.9" x2="190.2" y2="93.9" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="289.8" y1="156.1" x2="283.8" y2="164.1" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="293" y1="158.5" x2="287" y2="166.5" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="296.2" y1="160.9" x2="290.2" y2="168.9" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="142.5" y1="160.2" x2="146.4" y2="169.4" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="146.2" y1="158.7" x2="150.1" y2="167.9" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="149.9" y1="157.1" x2="153.8" y2="166.3" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="153.6" y1="155.6" x2="157.5" y2="164.8" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="322.5" y1="85.2" x2="326.4" y2="94.4" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="326.2" y1="83.7" x2="330.1" y2="92.9" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="329.9" y1="82.1" x2="333.8" y2="91.3" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="333.6" y1="80.6" x2="337.5" y2="89.8" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="128.8" y="46.6" text-anchor="end">A</text>
  <text x="47.1" y="210.4" text-anchor="end">B</text>
  <text x="351.2" y="213.4" text-anchor="start">C</text>
  <text x="432.9" y="49.6" text-anchor="start">D</text>
  <text x="246" y="117">O</text>
  <text x="240" y="238" text-anchor="middle" font-size="12" fill="var(--dg-muted)">AB = DC, AD = BC;  OA = OC, OB = OD (diagonals bisect each other)</text>
</svg>`,
    },
    {
      title: "The Mid-point Theorem",
      caption: "The line joining the mid-points D and E of two sides of a triangle is **parallel to the third side and half of it**.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="220,35 60,215 460,215" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="140" y1="125" x2="340" y2="125" stroke="var(--dg-accent)" stroke-width="2.4" />
  <line x1="183.7" y1="83.3" x2="176.3" y2="76.7" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="103.7" y1="173.3" x2="96.3" y2="166.7" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="281.4" y1="74.8" x2="275.4" y2="82.8" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="284.6" y1="77.2" x2="278.6" y2="85.2" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="401.4" y1="164.8" x2="395.4" y2="172.8" stroke="var(--dg-accent)" stroke-width="1.8" /><line x1="404.6" y1="167.2" x2="398.6" y2="175.2" stroke="var(--dg-accent)" stroke-width="1.8" />
  <text x="216.9" y="26.3" text-anchor="middle">A</text>
  <text x="46.7" y="224.3" text-anchor="end">B</text>
  <text x="473.5" y="223.8" text-anchor="start">C</text>
  <text x="128" y="123" text-anchor="end">D</text>
  <text x="352" y="123">E</text>
  <text x="280" y="245" text-anchor="middle" font-size="12" fill="var(--dg-muted)">D, E mid-points of AB, AC  ⇒  DE ∥ BC and DE = ½ BC</text>
</svg>`,
    },
  ],
  "circles": [
    {
      title: "Perpendicular from the centre to a chord",
      caption: "The perpendicular from the centre of a circle to a chord **bisects the chord**; conversely, the line from the centre to the mid-point of a chord is perpendicular to it.",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="280" cy="140" r="110" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <line x1="187.8" y1="200" x2="372.2" y2="200" stroke="currentColor" stroke-width="1.8" />
  <line x1="280" y1="140" x2="187.8" y2="200" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="280" y1="140" x2="372.2" y2="200" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="280" y1="140" x2="280" y2="200" stroke="var(--dg-accent)" stroke-width="2" />
  <path d="M280 190L290 190L290 200" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <line x1="233.9" y1="195" x2="233.9" y2="205" stroke="var(--dg-accent)" stroke-width="1.8" />
  <line x1="326.1" y1="195" x2="326.1" y2="205" stroke="var(--dg-accent)" stroke-width="1.8" />
  <circle cx="280" cy="140" r="2.5" fill="currentColor"/>
  <text x="288" y="134">O</text>
  <text x="179.8" y="214" text-anchor="end">A</text>
  <text x="380.2" y="214">B</text>
  <text x="288" y="216">M</text>
  <text x="280" y="277" text-anchor="middle" font-size="12" fill="var(--dg-muted)">OM ⊥ AB  ⇒  AM = MB.   Equal chords are equidistant from the centre.</text>
</svg>`,
    },
    {
      title: "Angle at the centre and at the circumference",
      caption: "The angle subtended by an arc at the centre is **double** the angle it subtends at any point on the remaining part of the circle.",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="280" cy="140" r="110" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <line x1="280" y1="140" x2="209.3" y2="224.3" stroke="currentColor" stroke-width="1.8" />
  <line x1="280" y1="140" x2="350.7" y2="224.3" stroke="currentColor" stroke-width="1.8" />
  <line x1="280" y1="30" x2="209.3" y2="224.3" stroke="currentColor" stroke-width="1.8" />
  <line x1="280" y1="30" x2="350.7" y2="224.3" stroke="currentColor" stroke-width="1.8" />
  <path d="M265.9 156.9A22 22 0 0 0 294.1 156.9" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M270.4 56.3A28 28 0 0 0 289.6 56.3" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <text x="280" y="188" text-anchor="middle" font-size="13" fill="var(--dg-accent)">2x</text>
  <text x="280" y="92" text-anchor="middle" font-size="13" fill="var(--dg-accent)">x</text>
  <circle cx="280" cy="140" r="2.5" fill="currentColor"/>
  <text x="288" y="134">O</text>
  <text x="280" y="22" text-anchor="middle">P</text>
  <text x="201.3" y="238.3" text-anchor="end">A</text>
  <text x="358.7" y="238.3">B</text>
  <text x="280" y="277" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Arc AB subtends ∠AOB = 2 × ∠APB.  Angles in the same segment are equal.</text>
</svg>`,
    },
    {
      title: "Cyclic quadrilateral",
      caption: "The **opposite angles of a cyclic quadrilateral are supplementary** (a + b = 180°). Producing a side gives an exterior angle equal to the interior opposite angle.",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="280" cy="140" r="110" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <polygon points="189.9,76.9 216.9,230.1 364.3,210.7 335,44.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="364.3" y1="210.7" x2="423.8" y2="202.9" stroke="currentColor" stroke-width="1.8" />
  <path d="M207.5 73A18 18 0 0 1 193 94.6" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M346.4 213.1A18 18 0 0 1 361.1 193" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/><path d="M342.5 213.6A22 22 0 0 1 360.4 189" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M360.8 191A20 20 0 0 1 384.1 208.1" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <text x="218.2" y="99.8" text-anchor="middle" font-size="12" fill="var(--dg-accent)">a</text>
  <text x="332" y="191.1" text-anchor="middle" font-size="12" fill="var(--dg-accent)">b</text>
  <text x="387.9" y="182.4" text-anchor="middle" font-size="12" fill="var(--dg-accent)">c</text>
  <text x="181.9" y="72.9" text-anchor="end">A</text>
  <text x="210.9" y="246.1" text-anchor="end">B</text>
  <text x="372.3" y="224.7">C</text>
  <text x="341" y="36.7">D</text>
  <text x="431.8" y="206.9">E</text>
  <text x="280" y="277" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Cyclic quadrilateral:  a + b = 180°  (∠A + ∠C),  and exterior ∠DCE = c = ∠A.</text>
</svg>`,
    },
  ],
  "herons-formula": [
    {
      title: "Heron's formula on a 13-14-15 triangle",
      caption: "With sides a = 14, b = 15, c = 13, the semi-perimeter is s = 21 and **Area = √[s(s − a)(s − b)(s − c)] = 84 cm²**, which matches ½ × base × height.",
      svg: `<svg viewBox="0 0 560 275" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="130,57 60,225 256,225" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="130" y1="57" x2="130" y2="225" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M130 215L140 215L140 225" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="130" y="49" text-anchor="middle">A</text>
  <text x="52" y="239" text-anchor="end">B</text>
  <text x="264" y="239">C</text>
  <text x="132" y="241" text-anchor="middle">D</text>
  <text x="188" y="255" text-anchor="middle">a = BC = 14</text>
  <text x="205" y="137">b = 15</text>
  <text x="83" y="137" text-anchor="end">c = 13</text>
  <text x="138" y="155" fill="var(--dg-muted)">h = 12</text>
  <text x="330" y="70">s = (a + b + c) / 2 = 42 / 2 = 21</text>
  <text x="330" y="100" fill="var(--dg-accent)">Area = √[ s(s − a)(s − b)(s − c) ]</text>
  <text x="330" y="130">= √(21 × 7 × 6 × 8) = √7056 = 84 cm²</text>
  <text x="330" y="160" font-size="12" fill="var(--dg-muted)">Check: ½ × 14 × 12 = 84 cm²</text>
</svg>`,
    },
  ],
  "surface-areas-and-volumes": [
    {
      title: "Cuboid and cube",
      caption: "A cuboid has length **l**, breadth **b** and height **h**. A cube is the special case with all edges equal; its volume is a³. Dashed lines show the hidden edges.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="60,100 260,100 260,210 60,210" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <line x1="260" y1="100" x2="340" y2="50" stroke="currentColor" stroke-width="1.8" />
  <line x1="340" y1="50" x2="140" y2="50" stroke="currentColor" stroke-width="1.8" />
  <line x1="60" y1="100" x2="140" y2="50" stroke="currentColor" stroke-width="1.8" />
  <line x1="340" y1="50" x2="340" y2="160" stroke="currentColor" stroke-width="1.8" />
  <line x1="260" y1="210" x2="340" y2="160" stroke="currentColor" stroke-width="1.8" />
  <line x1="60" y1="210" x2="140" y2="160" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="140" y1="160" x2="340" y2="160" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="140" y1="160" x2="140" y2="50" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="160" y="232" text-anchor="middle">l</text>
  <text x="312" y="206">b</text>
  <text x="50" y="160" text-anchor="end">h</text>
  <text x="380" y="70">Volume = l × b × h</text>
  <text x="380" y="100">TSA = 2(lb + bh + hl)</text>
  <text x="380" y="130">LSA = 2h(l + b)</text>
  <text x="380" y="160">Diagonal = √(l² + b² + h²)</text>
  <text x="380" y="200" font-size="12" fill="var(--dg-muted)">Cube (l = b = h = a):</text>
  <text x="380" y="218" font-size="12" fill="var(--dg-muted)">V = a³,  TSA = 6a²,  LSA = 4a²</text>
</svg>`,
    },
    {
      title: "Right circular cylinder and cone",
      caption: "In the cone the slant height is the hypotenuse of the right triangle with sides r and h, so **l² = r² + h²**.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="110" cy="60" rx="60" ry="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <line x1="50" y1="60" x2="50" y2="190" stroke="currentColor" stroke-width="1.8" />
  <line x1="170" y1="60" x2="170" y2="190" stroke="currentColor" stroke-width="1.8" />
  <path d="M50 190A60 16 0 0 0 170 190" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M50 190A60 16 0 0 1 170 190" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="110" y1="60" x2="110" y2="190" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="110" y1="60" x2="170" y2="60" stroke="var(--dg-accent)" stroke-width="2" />
  <text x="178" y="64" text-anchor="middle" fill="var(--dg-accent)">r</text>
  <text x="104" y="130" text-anchor="end">h</text>
  <text x="110" y="245" text-anchor="middle" font-size="14">Cylinder</text>
  <text x="110" y="267" text-anchor="middle">CSA = 2πrh</text>
  <text x="110" y="287" text-anchor="middle">TSA = 2πr(r + h)</text>
  <text x="110" y="307" text-anchor="middle">V = πr²h</text>
  <line x1="400" y1="40" x2="330" y2="190" stroke="currentColor" stroke-width="1.8" />
  <line x1="400" y1="40" x2="470" y2="190" stroke="currentColor" stroke-width="1.8" />
  <path d="M330 190A70 18 0 0 0 470 190" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M330 190A70 18 0 0 1 470 190" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="400" y1="40" x2="400" y2="190" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="400" y1="190" x2="470" y2="190" stroke="var(--dg-accent)" stroke-width="2" />
  <text x="435" y="184" text-anchor="middle" fill="var(--dg-accent)">r</text>
  <text x="394" y="120" text-anchor="end">h</text>
  <text x="358" y="106" text-anchor="end" fill="var(--dg-accent)">l</text>
  <text x="400" y="30" text-anchor="middle" font-size="12" fill="var(--dg-muted)">apex</text>
  <text x="400" y="245" text-anchor="middle" font-size="14">Cone</text>
  <text x="400" y="267" text-anchor="middle">CSA = πrl,   l² = r² + h²</text>
  <text x="400" y="287" text-anchor="middle">TSA = πr(r + l)</text>
  <text x="400" y="307" text-anchor="middle">V = ⅓πr²h</text>
</svg>`,
    },
    {
      title: "Sphere and hemisphere",
      caption: "A hemisphere is half a sphere; its total surface area adds the flat circular base (πr²) to the curved surface (2πr²).",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="140" cy="115" r="80" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M60 115A80 22 0 0 0 220 115" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <path d="M60 115A80 22 0 0 1 220 115" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="140" y1="115" x2="220" y2="115" stroke="var(--dg-accent)" stroke-width="2" />
  <text x="180" y="108" text-anchor="middle" fill="var(--dg-accent)">r</text>
  <circle cx="140" cy="115" r="2.5" fill="currentColor"/>
  <text x="140" y="225" text-anchor="middle" font-size="14">Sphere</text>
  <text x="140" y="247" text-anchor="middle">SA = 4πr²</text>
  <text x="140" y="267" text-anchor="middle">V = 4/3 πr³</text>
  <path d="M320 130A80 80 0 0 1 480 130Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M320 130A80 22 0 0 0 480 130" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M320 130A80 22 0 0 1 480 130" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="400" y1="130" x2="480" y2="130" stroke="var(--dg-accent)" stroke-width="2" />
  <text x="440" y="124" text-anchor="middle" fill="var(--dg-accent)">r</text>
  <circle cx="400" cy="130" r="2.5" fill="currentColor"/>
  <text x="400" y="225" text-anchor="middle" font-size="14">Hemisphere</text>
  <text x="400" y="247" text-anchor="middle">CSA = 2πr²,   TSA = 3πr²</text>
  <text x="400" y="267" text-anchor="middle">V = ⅔ πr³</text>
  <text x="280" y="305" text-anchor="middle" font-size="12" fill="var(--dg-muted)">TSA of hemisphere = CSA 2πr² + flat circular base πr²</text>
</svg>`,
    },
  ],
  "statistics": [
    {
      title: "Histogram and frequency polygon",
      caption: "Bars of a histogram touch because the classes are continuous. The **frequency polygon** joins the mid-points of the bar tops, with an extra class of frequency 0 at each end.",
      svg: `<svg viewBox="0 0 560 275" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="70" y1="230" x2="528" y2="230" stroke="currentColor" stroke-width="1.8" />
  <line x1="70" y1="230" x2="70" y2="34" stroke="currentColor" stroke-width="1.8" />
  <rect x="126" y="160" width="56" height="70" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="182" y="118" width="56" height="112" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="238" y="62" width="56" height="168" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="294" y="104" width="56" height="126" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="350" y="146" width="56" height="84" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="406" y="188" width="56" height="42" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="98,230 154,160 210,118 266,62 322,104 378,146 434,188 490,230" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="98" cy="230" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="154" cy="160" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="210" cy="118" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="266" cy="62" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="322" cy="104" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="378" cy="146" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="434" cy="188" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="490" cy="230" r="3.5" fill="var(--dg-accent)"/>
  <line x1="70" y1="230" x2="70" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="70" y="250" text-anchor="middle">0</text>
  <line x1="126" y1="230" x2="126" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="126" y="250" text-anchor="middle">10</text>
  <line x1="182" y1="230" x2="182" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="182" y="250" text-anchor="middle">20</text>
  <line x1="238" y1="230" x2="238" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="238" y="250" text-anchor="middle">30</text>
  <line x1="294" y1="230" x2="294" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="294" y="250" text-anchor="middle">40</text>
  <line x1="350" y1="230" x2="350" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="350" y="250" text-anchor="middle">50</text>
  <line x1="406" y1="230" x2="406" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="406" y="250" text-anchor="middle">60</text>
  <line x1="462" y1="230" x2="462" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="462" y="250" text-anchor="middle">70</text>
  <line x1="518" y1="230" x2="518" y2="235" stroke="currentColor" stroke-width="1.8" />
  <text x="518" y="250" text-anchor="middle">80</text>
  <line x1="65" y1="230" x2="70" y2="230" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="234" text-anchor="end">0</text>
  <line x1="65" y1="202" x2="70" y2="202" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="206" text-anchor="end">2</text>
  <line x1="65" y1="174" x2="70" y2="174" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="178" text-anchor="end">4</text>
  <line x1="65" y1="146" x2="70" y2="146" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="150" text-anchor="end">6</text>
  <line x1="65" y1="118" x2="70" y2="118" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="122" text-anchor="end">8</text>
  <line x1="65" y1="90" x2="70" y2="90" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="94" text-anchor="end">10</text>
  <line x1="65" y1="62" x2="70" y2="62" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="66" text-anchor="end">12</text>
  <line x1="65" y1="34" x2="70" y2="34" stroke="currentColor" stroke-width="1.8" />
  <text x="61" y="38" text-anchor="end">14</text>
  <text x="304" y="272" text-anchor="middle">Class interval (marks)</text>
  <text transform="translate(18 132) rotate(-90)" text-anchor="middle">Frequency</text>
  <text x="380" y="48" font-size="12" fill="var(--dg-accent)">Frequency polygon joins the</text>
  <text x="380" y="63" font-size="12" fill="var(--dg-accent)">mid-points of the bar tops,</text>
  <text x="380" y="78" font-size="12" fill="var(--dg-accent)">and is closed on the axis</text>
  <text x="380" y="93" font-size="12" fill="var(--dg-accent)">at 5 and 75.</text>
</svg>`,
    },
  ],
});
