// Class 8 Mathematics (Ganita Prakash) diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(8, "maths", {
  "a-square-and-a-cube": [
    {
      title: "Square numbers as dot squares",
      caption: "A square number n² is an n × n array of dots. Going from n² to (n + 1)² adds an L-shaped layer of **2n + 1** dots, so the sum of the first n odd numbers is **n²**: for example 1 + 3 + 5 + 7 + 9 = 25 = 5².",
      svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="30" y="22" font-size="12" fill="var(--dg-muted)">Each new square adds an L-shaped layer of dots (highlighted): the next odd number</text>
  <circle cx="30" cy="44" r="5" fill="var(--dg-accent)"/>
  <text x="30" y="78" text-anchor="middle" font-weight="600">1² = 1</text>
  <text x="30" y="96" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1</text>
  <circle cx="90" cy="44" r="5" fill="currentColor"/>
  <circle cx="90" cy="64" r="5" fill="var(--dg-accent)"/>
  <circle cx="110" cy="44" r="5" fill="var(--dg-accent)"/>
  <circle cx="110" cy="64" r="5" fill="var(--dg-accent)"/>
  <text x="100" y="98" text-anchor="middle" font-weight="600">2² = 4</text>
  <text x="100" y="116" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 + 3</text>
  <circle cx="170" cy="44" r="5" fill="currentColor"/>
  <circle cx="170" cy="64" r="5" fill="currentColor"/>
  <circle cx="170" cy="84" r="5" fill="var(--dg-accent)"/>
  <circle cx="190" cy="44" r="5" fill="currentColor"/>
  <circle cx="190" cy="64" r="5" fill="currentColor"/>
  <circle cx="190" cy="84" r="5" fill="var(--dg-accent)"/>
  <circle cx="210" cy="44" r="5" fill="var(--dg-accent)"/>
  <circle cx="210" cy="64" r="5" fill="var(--dg-accent)"/>
  <circle cx="210" cy="84" r="5" fill="var(--dg-accent)"/>
  <text x="190" y="118" text-anchor="middle" font-weight="600">3² = 9</text>
  <text x="190" y="136" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 + 3 + 5</text>
  <circle cx="270" cy="44" r="5" fill="currentColor"/>
  <circle cx="270" cy="64" r="5" fill="currentColor"/>
  <circle cx="270" cy="84" r="5" fill="currentColor"/>
  <circle cx="270" cy="104" r="5" fill="var(--dg-accent)"/>
  <circle cx="290" cy="44" r="5" fill="currentColor"/>
  <circle cx="290" cy="64" r="5" fill="currentColor"/>
  <circle cx="290" cy="84" r="5" fill="currentColor"/>
  <circle cx="290" cy="104" r="5" fill="var(--dg-accent)"/>
  <circle cx="310" cy="44" r="5" fill="currentColor"/>
  <circle cx="310" cy="64" r="5" fill="currentColor"/>
  <circle cx="310" cy="84" r="5" fill="currentColor"/>
  <circle cx="310" cy="104" r="5" fill="var(--dg-accent)"/>
  <circle cx="330" cy="44" r="5" fill="var(--dg-accent)"/>
  <circle cx="330" cy="64" r="5" fill="var(--dg-accent)"/>
  <circle cx="330" cy="84" r="5" fill="var(--dg-accent)"/>
  <circle cx="330" cy="104" r="5" fill="var(--dg-accent)"/>
  <text x="300" y="138" text-anchor="middle" font-weight="600">4² = 16</text>
  <text x="300" y="156" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 + 3 + 5 + 7</text>
  <circle cx="390" cy="44" r="5" fill="currentColor"/>
  <circle cx="390" cy="64" r="5" fill="currentColor"/>
  <circle cx="390" cy="84" r="5" fill="currentColor"/>
  <circle cx="390" cy="104" r="5" fill="currentColor"/>
  <circle cx="390" cy="124" r="5" fill="var(--dg-accent)"/>
  <circle cx="410" cy="44" r="5" fill="currentColor"/>
  <circle cx="410" cy="64" r="5" fill="currentColor"/>
  <circle cx="410" cy="84" r="5" fill="currentColor"/>
  <circle cx="410" cy="104" r="5" fill="currentColor"/>
  <circle cx="410" cy="124" r="5" fill="var(--dg-accent)"/>
  <circle cx="430" cy="44" r="5" fill="currentColor"/>
  <circle cx="430" cy="64" r="5" fill="currentColor"/>
  <circle cx="430" cy="84" r="5" fill="currentColor"/>
  <circle cx="430" cy="104" r="5" fill="currentColor"/>
  <circle cx="430" cy="124" r="5" fill="var(--dg-accent)"/>
  <circle cx="450" cy="44" r="5" fill="currentColor"/>
  <circle cx="450" cy="64" r="5" fill="currentColor"/>
  <circle cx="450" cy="84" r="5" fill="currentColor"/>
  <circle cx="450" cy="104" r="5" fill="currentColor"/>
  <circle cx="450" cy="124" r="5" fill="var(--dg-accent)"/>
  <circle cx="470" cy="44" r="5" fill="var(--dg-accent)"/>
  <circle cx="470" cy="64" r="5" fill="var(--dg-accent)"/>
  <circle cx="470" cy="84" r="5" fill="var(--dg-accent)"/>
  <circle cx="470" cy="104" r="5" fill="var(--dg-accent)"/>
  <circle cx="470" cy="124" r="5" fill="var(--dg-accent)"/>
  <text x="430" y="158" text-anchor="middle" font-weight="600">5² = 25</text>
  <text x="430" y="176" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 + 3 + 5 + 7 + 9</text>
</svg>`,
    },
    {
      title: "A cube number as unit cubes",
      caption: "A big cube with edge 3 is built from 3 × 3 × 3 = **27** unit cubes, so 27 is a perfect cube and ∛27 = 3.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="60,70 180,70 216,34 96,34" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="180,70 216,34 216,154 180,190" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <rect x="60" y="70" width="120" height="120" fill="var(--dg-fill)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="100" y1="70" x2="100" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="110" x2="180" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="100" y1="70" x2="136" y2="34" stroke="currentColor" stroke-width="1"/>
  <line x1="72" y1="58" x2="192" y2="58" stroke="currentColor" stroke-width="1"/>
  <line x1="192" y1="58" x2="192" y2="178" stroke="currentColor" stroke-width="1"/>
  <line x1="180" y1="110" x2="216" y2="74" stroke="currentColor" stroke-width="1"/>
  <line x1="140" y1="70" x2="140" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="150" x2="180" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="140" y1="70" x2="176" y2="34" stroke="currentColor" stroke-width="1"/>
  <line x1="84" y1="46" x2="204" y2="46" stroke="currentColor" stroke-width="1"/>
  <line x1="204" y1="46" x2="204" y2="166" stroke="currentColor" stroke-width="1"/>
  <line x1="180" y1="150" x2="216" y2="114" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="210" text-anchor="middle" font-size="12">3 cubes</text>
  <text x="52" y="134" text-anchor="end" font-size="12">3</text>
  <text x="226" y="94" font-size="12">3</text>
  <text x="320" y="90">Volume = 3 × 3 × 3 = 27 unit cubes</text>
  <text x="320" y="114" font-size="12" fill="var(--dg-muted)">27 = 3³, so 3 is the cube root of 27</text>
  <text x="320" y="148" font-size="12">In general n³ = n × n × n</text>
  <text x="320" y="168" font-size="12" fill="var(--dg-muted)">1 cube: 1³ = 1;  2 × 2 × 2 = 8;  3 × 3 × 3 = 27</text>
</svg>`,
    },
  ],
  "quadrilaterals": [
    {
      title: "The family of quadrilaterals",
      caption: "Each shape on a lower line is a special case of the one above it: a rectangle and a rhombus are parallelograms, and a **square is both a rectangle and a rhombus**.",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="280" y1="58" x2="90" y2="104" stroke="currentColor" stroke-width="1.3"/>
  <line x1="280" y1="58" x2="280" y2="104" stroke="currentColor" stroke-width="1.3"/>
  <line x1="280" y1="58" x2="470" y2="104" stroke="currentColor" stroke-width="1.3"/>
  <line x1="280" y1="148" x2="170" y2="194" stroke="currentColor" stroke-width="1.3"/>
  <line x1="280" y1="148" x2="390" y2="194" stroke="currentColor" stroke-width="1.3"/>
  <line x1="170" y1="238" x2="280" y2="284" stroke="currentColor" stroke-width="1.3"/>
  <line x1="390" y1="238" x2="280" y2="284" stroke="currentColor" stroke-width="1.3"/>
  <rect x="205" y="14" width="150" height="44" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="280" y="33" text-anchor="middle" font-weight="600">Quadrilateral</text>
  <text x="280" y="50" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4 sides, angles sum 360°</text>
  <rect x="15" y="104" width="150" height="44" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="90" y="123" text-anchor="middle" font-weight="600">Trapezium</text>
  <text x="90" y="140" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 pair parallel sides</text>
  <rect x="205" y="104" width="150" height="44" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="280" y="123" text-anchor="middle" font-weight="600">Parallelogram</text>
  <text x="280" y="140" text-anchor="middle" font-size="12" fill="var(--dg-muted)">both pairs parallel</text>
  <rect x="395" y="104" width="150" height="44" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="470" y="123" text-anchor="middle" font-weight="600">Kite</text>
  <text x="470" y="140" text-anchor="middle" font-size="12" fill="var(--dg-muted)">2 pairs adjacent equal</text>
  <rect x="95" y="194" width="150" height="44" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="170" y="213" text-anchor="middle" font-weight="600">Rectangle</text>
  <text x="170" y="230" text-anchor="middle" font-size="12" fill="var(--dg-muted)">all angles 90°</text>
  <rect x="315" y="194" width="150" height="44" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="390" y="213" text-anchor="middle" font-weight="600">Rhombus</text>
  <text x="390" y="230" text-anchor="middle" font-size="12" fill="var(--dg-muted)">all sides equal</text>
  <rect x="205" y="284" width="150" height="44" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="280" y="303" text-anchor="middle" font-weight="600">Square</text>
  <text x="280" y="320" text-anchor="middle" font-size="12" fill="var(--dg-muted)">rectangle and rhombus</text>
</svg>`,
    },
    {
      title: "Diagonals of special parallelograms",
      caption: "In every parallelogram the diagonals **bisect** each other. In a rectangle they are also equal; in a rhombus they also cross at right angles; a square has both properties.",
      svg: `<svg viewBox="0 0 560 216" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="24,120 100,120 130,60 54,60" fill="var(--dg-fill)" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="24" y1="120" x2="130" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="100" y1="120" x2="54" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="48.5" y1="101.5" x2="52.5" y2="108.5" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="86.5" y1="109" x2="92.9" y2="104.2" stroke="var(--dg-accent)" stroke-width="1.5"/><line x1="84.1" y1="105.8" x2="90.5" y2="101" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="105.5" y1="78.5" x2="101.5" y2="71.5" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="67.5" y1="71" x2="61.1" y2="75.8" stroke="var(--dg-accent)" stroke-width="1.5"/><line x1="69.9" y1="74.2" x2="63.5" y2="79" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <text x="15.3" y="128.9" text-anchor="middle" font-size="12">A</text>
  <text x="106.1" y="131.9" text-anchor="middle" font-size="12">B</text>
  <text x="138.7" y="59.1" text-anchor="middle" font-size="12">C</text>
  <text x="47.9" y="56.1" text-anchor="middle" font-size="12">D</text>
  <circle cx="86" cy="81" r="0" fill="currentColor"/>
  <text x="76" y="152" text-anchor="middle" font-weight="600">Parallelogram</text>
  <text x="76" y="170" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Diagonals bisect</text>
  <text x="76" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">each other</text>
  <polygon points="162,120 270,120 270,60 162,60" fill="var(--dg-fill)" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="162" y1="120" x2="270" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="270" y1="120" x2="162" y2="60" stroke="currentColor" stroke-width="1.2"/>
  <line x1="187.1" y1="101.5" x2="190.9" y2="108.5" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="241.1" y1="108.5" x2="244.9" y2="101.5" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="244.9" y1="78.5" x2="241.1" y2="71.5" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="190.9" y1="71.5" x2="187.1" y2="78.5" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <text x="153.3" y="128.9" text-anchor="middle" font-size="12">A</text>
  <text x="278.7" y="128.9" text-anchor="middle" font-size="12">B</text>
  <text x="278.7" y="59.1" text-anchor="middle" font-size="12">C</text>
  <text x="153.3" y="59.1" text-anchor="middle" font-size="12">D</text>
  <circle cx="225" cy="81" r="0" fill="currentColor"/>
  <text x="216" y="152" text-anchor="middle" font-weight="600">Rectangle</text>
  <text x="216" y="170" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Diagonals equal and</text>
  <text x="216" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">bisect each other</text>
  <polygon points="300,90 356,122 412,90 356,58" fill="var(--dg-fill)" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="300" y1="90" x2="412" y2="90" stroke="currentColor" stroke-width="1.2"/>
  <line x1="356" y1="122" x2="356" y2="58" stroke="currentColor" stroke-width="1.2"/>
  <line x1="328" y1="86" x2="328" y2="94" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="352" y1="108" x2="360" y2="108" stroke="var(--dg-accent)" stroke-width="1.5"/><line x1="352" y1="104" x2="360" y2="104" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="384" y1="94" x2="384" y2="86" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="360" y1="72" x2="352" y2="72" stroke="var(--dg-accent)" stroke-width="1.5"/><line x1="360" y1="76" x2="352" y2="76" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <polyline points="356,97 363,97 363,90" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="290" y="94" text-anchor="middle" font-size="12">A</text>
  <text x="356" y="136" text-anchor="middle" font-size="12">B</text>
  <text x="422" y="94" text-anchor="middle" font-size="12">C</text>
  <text x="356" y="52" text-anchor="middle" font-size="12">D</text>
  <circle cx="365" cy="81" r="0" fill="currentColor"/>
  <text x="356" y="152" text-anchor="middle" font-weight="600">Rhombus</text>
  <text x="356" y="170" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Diagonals bisect</text>
  <text x="356" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">at right angles</text>
  <polygon points="464,122 528,122 528,58 464,58" fill="var(--dg-fill)" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="464" y1="122" x2="528" y2="58" stroke="currentColor" stroke-width="1.2"/>
  <line x1="528" y1="122" x2="464" y2="58" stroke="currentColor" stroke-width="1.2"/>
  <line x1="477.2" y1="103.2" x2="482.8" y2="108.8" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="509.2" y1="108.8" x2="514.8" y2="103.2" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="514.8" y1="76.8" x2="509.2" y2="71.2" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <line x1="482.8" y1="71.2" x2="477.2" y2="76.8" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <polyline points="500.9,94.9 505.9,90 500.9,85.1" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="456.9" y="133.1" text-anchor="middle" font-size="12">A</text>
  <text x="535.1" y="133.1" text-anchor="middle" font-size="12">B</text>
  <text x="535.1" y="54.9" text-anchor="middle" font-size="12">C</text>
  <text x="456.9" y="54.9" text-anchor="middle" font-size="12">D</text>
  <circle cx="505" cy="81" r="0" fill="currentColor"/>
  <text x="496" y="152" text-anchor="middle" font-weight="600">Square</text>
  <text x="496" y="170" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Diagonals equal and</text>
  <text x="496" y="186" text-anchor="middle" font-size="12" fill="var(--dg-muted)">perpendicular</text>
  <text x="280" y="206" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Matching tick marks show equal lengths.</text>
</svg>`,
    },
  ],
  "number-play": [
    {
      title: "Collatz (hailstone) sequence from 6",
      caption: "The rule is applied again and again: 6, 3, 10, 5, 16, 8, 4, 2, 1. Every starting number tried so far eventually reaches **1**.",
      svg: `<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-n8-co" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="14" y="58" width="36" height="34" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="5"/>
  <text x="32" y="80" text-anchor="middle" font-weight="600">6</text>
  <line x1="52" y1="75" x2="71" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="62" y="50" text-anchor="middle" font-size="12" fill="var(--dg-muted)">÷2</text>
  <rect x="74" y="58" width="36" height="34" fill="var(--dg-fill)" fill-opacity="0.8" stroke="var(--dg-accent)" stroke-width="2" rx="5"/>
  <text x="92" y="80" text-anchor="middle" font-weight="600">3</text>
  <line x1="112" y1="75" x2="131" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="122" y="50" text-anchor="middle" font-size="12" fill="var(--dg-accent)">×3+1</text>
  <rect x="134" y="58" width="36" height="34" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="5"/>
  <text x="152" y="80" text-anchor="middle" font-weight="600">10</text>
  <line x1="172" y1="75" x2="191" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="182" y="50" text-anchor="middle" font-size="12" fill="var(--dg-muted)">÷2</text>
  <rect x="194" y="58" width="36" height="34" fill="var(--dg-fill)" fill-opacity="0.8" stroke="var(--dg-accent)" stroke-width="2" rx="5"/>
  <text x="212" y="80" text-anchor="middle" font-weight="600">5</text>
  <line x1="232" y1="75" x2="251" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="242" y="50" text-anchor="middle" font-size="12" fill="var(--dg-accent)">×3+1</text>
  <rect x="254" y="58" width="36" height="34" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="5"/>
  <text x="272" y="80" text-anchor="middle" font-weight="600">16</text>
  <line x1="292" y1="75" x2="311" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="302" y="50" text-anchor="middle" font-size="12" fill="var(--dg-muted)">÷2</text>
  <rect x="314" y="58" width="36" height="34" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="5"/>
  <text x="332" y="80" text-anchor="middle" font-weight="600">8</text>
  <line x1="352" y1="75" x2="371" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="362" y="50" text-anchor="middle" font-size="12" fill="var(--dg-muted)">÷2</text>
  <rect x="374" y="58" width="36" height="34" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="5"/>
  <text x="392" y="80" text-anchor="middle" font-weight="600">4</text>
  <line x1="412" y1="75" x2="431" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="422" y="50" text-anchor="middle" font-size="12" fill="var(--dg-muted)">÷2</text>
  <rect x="434" y="58" width="36" height="34" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="5"/>
  <text x="452" y="80" text-anchor="middle" font-weight="600">2</text>
  <line x1="472" y1="75" x2="491" y2="75" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-co)"/>
  <text x="482" y="50" text-anchor="middle" font-size="12" fill="var(--dg-muted)">÷2</text>
  <rect x="494" y="58" width="36" height="34" fill="none" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" rx="5"/>
  <text x="512" y="80" text-anchor="middle" font-weight="600">1</text>
  <text x="14" y="28" font-size="12" fill="var(--dg-muted)">Start at 6 and apply the rule:</text>
  <text x="14" y="124" font-size="12">Even number: halve it (÷2).   Odd number: multiply by 3 and add 1 (×3 + 1).</text>
  <text x="14" y="144" font-size="12" fill="var(--dg-muted)">Odd numbers are highlighted. The sequence reaches 1 after 8 steps.</text>
</svg>`,
    },
    {
      title: "Kaprekar's routine reaches 6174",
      caption: "Start with 3524: 5432 − 2345 = 3087, then 8730 − 0378 = 8352, then 8532 − 2358 = **6174**. Every 4-digit number with unequal digits ends at 6174.",
      svg: `<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-n8-kp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="18" y="50" width="76" height="36" fill="none" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="56" y="74" text-anchor="middle" font-weight="600">3524</text>
  <line x1="98" y1="68" x2="152" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-kp)"/>
  <text x="125" y="110" text-anchor="middle" font-size="12" fill="var(--dg-muted)">5432 − 2345</text>
  <rect x="158" y="50" width="76" height="36" fill="none" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="196" y="74" text-anchor="middle" font-weight="600">3087</text>
  <line x1="238" y1="68" x2="292" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-kp)"/>
  <text x="265" y="110" text-anchor="middle" font-size="12" fill="var(--dg-muted)">8730 − 0378</text>
  <rect x="298" y="50" width="76" height="36" fill="none" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="336" y="74" text-anchor="middle" font-weight="600">8352</text>
  <line x1="378" y1="68" x2="432" y2="68" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-kp)"/>
  <text x="405" y="110" text-anchor="middle" font-size="12" fill="var(--dg-muted)">8532 − 2358</text>
  <rect x="438" y="50" width="76" height="36" fill="var(--dg-fill)" fill-opacity="0.9" stroke="var(--dg-accent)" stroke-width="2" rx="6"/>
  <text x="476" y="74" text-anchor="middle" font-weight="600">6174</text>
  <text x="18" y="30" font-size="12" fill="var(--dg-muted)">Largest arrangement − smallest arrangement of the digits, repeated:</text>
  <text x="18" y="138" font-size="12">Repeating on 6174 gives 7641 − 1467 = 6174, so the process stays at Kaprekar's constant.</text>
</svg>`,
    },
  ],
  "we-distribute-yet-things-multiply": [
    {
      title: "Area model of (a + b)²",
      caption: "A square of side a + b is cut into a square a², a square b² and two rectangles of area ab, giving **(a + b)² = a² + 2ab + b²**.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="60" y="36" width="130" height="130" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="36" width="70" height="130" fill="var(--dg-accent)" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <rect x="60" y="166" width="130" height="70" fill="var(--dg-accent)" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <rect x="190" y="166" width="70" height="70" fill="var(--dg-accent)" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="125" y="106" text-anchor="middle" font-weight="600">a²</text>
  <text x="225" y="106" text-anchor="middle" font-weight="600">ab</text>
  <text x="125" y="206" text-anchor="middle" font-weight="600">ab</text>
  <text x="225" y="206" text-anchor="middle" font-weight="600">b²</text>
  <text x="125" y="26" text-anchor="middle">a</text>
  <text x="225" y="26" text-anchor="middle">b</text>
  <text x="48" y="106" text-anchor="end">a</text>
  <text x="48" y="206" text-anchor="end">b</text>
  <text x="300" y="90">Side of the big square = a + b</text>
  <text x="300" y="120">(a + b)² = a² + ab + ab + b²</text>
  <text x="300" y="146" font-weight="600">(a + b)² = a² + 2ab + b²</text>
  <text x="300" y="184" font-size="12" fill="var(--dg-muted)">The middle term 2ab is the two ab rectangles,</text>
  <text x="300" y="202" font-size="12" fill="var(--dg-muted)">so (a + b)² is not a² + b².</text>
</svg>`,
    },
    {
      title: "Multiplying two binomials: (x + 3)(x + 5)",
      caption: "The rectangle of sides x + 5 and x + 3 splits into x², 5x, 3x and 3 × 5 = 15. Adding like terms gives **x² + 8x + 15**, which is the identity (x + a)(x + b) = x² + (a + b)x + ab.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="50" y="30" width="120" height="120" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5"/>
  <rect x="170" y="30" width="50" height="120" fill="var(--dg-accent)" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <rect x="50" y="150" width="120" height="30" fill="var(--dg-accent)" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/>
  <rect x="170" y="150" width="50" height="30" fill="var(--dg-accent)" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
  <text x="110" y="95" text-anchor="middle" font-weight="600">x²</text>
  <text x="195" y="95" text-anchor="middle" font-weight="600">5x</text>
  <text x="110" y="170" text-anchor="middle" font-weight="600">3x</text>
  <text x="195" y="170" text-anchor="middle" font-weight="600">15</text>
  <text x="110" y="20" text-anchor="middle">x</text>
  <text x="195" y="20" text-anchor="middle">5</text>
  <text x="40" y="95" text-anchor="end">x</text>
  <text x="40" y="170" text-anchor="end">3</text>
  <text x="290" y="80">(x + 3)(x + 5)</text>
  <text x="290" y="106">= x² + 5x + 3x + 15</text>
  <text x="290" y="132" font-weight="600">= x² + 8x + 15</text>
  <text x="290" y="170" font-size="12" fill="var(--dg-muted)">Each term of one bracket multiplies each</text>
  <text x="290" y="188" font-size="12" fill="var(--dg-muted)">term of the other: four regions, four terms.</text>
</svg>`,
    },
  ],
  "proportional-reasoning-1": [
    {
      title: "Direct proportion: cost of pens",
      caption: "At ₹12 per pen, 6 pens cost ₹72 and 10 pens cost ₹120. The points lie on a **straight line through the origin**, and y ÷ x = 12 (the constant of proportionality) for every point.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-n8-dp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="150" y1="38" x2="150" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="150" y1="227" x2="150" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="248" text-anchor="middle" font-size="12">2</text>
  <line x1="230" y1="38" x2="230" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="230" y1="227" x2="230" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="230" y="248" text-anchor="middle" font-size="12">4</text>
  <line x1="310" y1="38" x2="310" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="310" y1="227" x2="310" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="310" y="248" text-anchor="middle" font-size="12">6</text>
  <line x1="390" y1="38" x2="390" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="390" y1="227" x2="390" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="390" y="248" text-anchor="middle" font-size="12">8</text>
  <line x1="470" y1="38" x2="470" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="470" y1="227" x2="470" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="470" y="248" text-anchor="middle" font-size="12">10</text>
  <line x1="70" y1="198" x2="470" y2="198" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="198" x2="73" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="202" text-anchor="end" font-size="12">20</text>
  <line x1="70" y1="166" x2="470" y2="166" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="166" x2="73" y2="166" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="170" text-anchor="end" font-size="12">40</text>
  <line x1="70" y1="134" x2="470" y2="134" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="134" x2="73" y2="134" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="138" text-anchor="end" font-size="12">60</text>
  <line x1="70" y1="102" x2="470" y2="102" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="102" x2="73" y2="102" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="106" text-anchor="end" font-size="12">80</text>
  <line x1="70" y1="70" x2="470" y2="70" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="74" text-anchor="end" font-size="12">100</text>
  <line x1="70" y1="38" x2="470" y2="38" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="38" x2="73" y2="38" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="42" text-anchor="end" font-size="12">120</text>
  <line x1="70" y1="230" x2="500" y2="230" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-n8-dp)"/>
  <line x1="70" y1="230" x2="70" y2="18" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-n8-dp)"/>
  <line x1="70" y1="230" x2="470" y2="38" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="110" cy="210.8" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="150" cy="191.6" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="190" cy="172.4" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="230" cy="153.2" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="270" cy="134" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="310" cy="114.8" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="350" cy="95.6" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="390" cy="76.4" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="430" cy="57.2" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="470" cy="38" r="3.5" fill="var(--dg-accent)"/>
  <line x1="310" y1="230" x2="310" y2="114.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="114.8" x2="310" y2="114.8" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="318" y="130.8" font-size="12">(6, 72)</text>
  <text x="464" y="28" text-anchor="end" font-size="12">(10, 120)</text>
  <text x="64" y="246" text-anchor="end" font-size="12">O</text>
  <text x="285" y="270" text-anchor="middle">Number of pens</text>
  <text x="506" y="234" font-size="12">x</text>
  <text x="78" y="14" font-size="12">Cost (₹)</text>
  <text x="90" y="80" fill="var(--dg-accent)" font-weight="600">y = 12x</text>
</svg>`,
    },
  ],
  "fractions-in-disguise": [
    {
      title: "Compound interest: ₹10,000 at 10% for 2 years",
      caption: "Year 1 interest is 10% of ₹10,000 = ₹1,000. Year 2 interest is 10% of ₹11,000 = ₹1,100, because interest is also earned on the earlier interest. Amount = 10,000 × 1.1 × 1.1 = **₹12,100**, and CI = ₹2,100.",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="60" y1="250" x2="500" y2="250" stroke="currentColor" stroke-width="1.5"/>
  <rect x="100" y="70" width="90" height="180" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5"/>
  <text x="145" y="165" text-anchor="middle" font-size="12">₹10,000</text>
  <text x="145" y="62" text-anchor="middle" font-weight="600">₹10,000</text>
  <text x="145" y="270" text-anchor="middle" font-size="12">Start</text>
  <rect x="230" y="70" width="90" height="180" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5"/>
  <text x="275" y="165" text-anchor="middle" font-size="12">₹10,000</text>
  <rect x="230" y="52" width="90" height="18" fill="var(--dg-accent)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <text x="275" y="65.5" text-anchor="middle" font-size="12">+ ₹1,000</text>
  <text x="275" y="44" text-anchor="middle" font-weight="600">₹11,000</text>
  <text x="275" y="270" text-anchor="middle" font-size="12">After 1 year</text>
  <rect x="360" y="70" width="90" height="180" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5"/>
  <text x="405" y="165" text-anchor="middle" font-size="12">₹10,000</text>
  <rect x="360" y="52" width="90" height="18" fill="var(--dg-accent)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <text x="405" y="65.5" text-anchor="middle" font-size="12">+ ₹1,000</text>
  <rect x="360" y="32.2" width="90" height="19.8" fill="var(--dg-accent)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <text x="405" y="46.6" text-anchor="middle" font-size="12">+ ₹1,100</text>
  <text x="405" y="24.2" text-anchor="middle" font-weight="600">₹12,100</text>
  <text x="405" y="270" text-anchor="middle" font-size="12">After 2 years</text>
  <rect x="60" y="12" width="14" height="14" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="24" font-size="12">Principal</text>
  <rect x="160" y="12" width="14" height="14" fill="var(--dg-accent)" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5"/>
  <text x="180" y="24" font-size="12">Interest earned</text>
</svg>`,
    },
  ],
  "the-baudhayana-pythagoras-theorem": [
    {
      title: "Baudhayana–Pythagoras theorem: the 3-4-5 triangle",
      caption: "In a right-angled triangle with legs 3 and 4, the squares on the legs have areas 9 and 16, and the square on the hypotenuse has area 25 = 9 + 16. So **a² + b² = c²** and the hypotenuse is 5.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="220,138 316,210 388,114 292,42" fill="var(--dg-accent)" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="220,210 316,210 316,306 220,306" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="148,138 220,138 220,210 148,210" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <polygon points="220,210 316,210 220,138" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="230,210 230,200 220,200" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="184" y="170" text-anchor="middle" font-size="12">side 3</text>
  <text x="184" y="188" text-anchor="middle" font-weight="600">area 9</text>
  <text x="268" y="254" text-anchor="middle" font-size="12">side 4</text>
  <text x="268" y="272" text-anchor="middle" font-weight="600">area 16</text>
  <text x="304" y="114" text-anchor="middle" font-size="12">Hypotenuse</text>
  <text x="304" y="129" text-anchor="middle" font-size="12">side 5</text>
  <text x="304" y="145" text-anchor="middle" font-weight="600">area 25</text>
  <text x="214" y="224" text-anchor="end" font-size="12">C</text>
  <text x="324" y="224" font-size="12">B</text>
  <text x="212" y="134" text-anchor="end" font-size="12">A</text>
  <text x="410" y="150" font-weight="600">3² + 4² = 5²</text>
  <text x="410" y="172">9 + 16 = 25</text>
  <text x="410" y="208" font-size="12" fill="var(--dg-muted)">Square on the hypotenuse</text>
  <text x="410" y="224" font-size="12" fill="var(--dg-muted)">= sum of the squares on</text>
  <text x="410" y="240" font-size="12" fill="var(--dg-muted)">the other two sides</text>
</svg>`,
    },
    {
      title: "A ladder against a wall",
      caption: "A 10 m ladder with its foot 6 m from the wall reaches a height h where h² + 6² = 10². So h² = 64 and **h = 8 m**.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="76" y1="230" x2="66" y2="220" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="210" x2="66" y2="200" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="190" x2="66" y2="180" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="170" x2="66" y2="160" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="150" x2="66" y2="140" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="130" x2="66" y2="120" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="110" x2="66" y2="100" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="90" x2="66" y2="80" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="76" y1="70" x2="66" y2="60" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="80" y1="64" x2="80" y2="230" stroke="currentColor" stroke-width="3"/>
  <line x1="30" y1="230" x2="320" y2="230" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="230" x2="80" y2="70" stroke="var(--dg-accent)" stroke-width="3"/>
  <polyline points="90,230 90,220 80,220" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="80" y1="252" x2="200" y2="252" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="140" y="268" text-anchor="middle" font-size="12">6 m (foot to wall)</text>
  <text x="60" y="154" text-anchor="end">h = 8 m</text>
  <text x="154" y="144" font-size="12" fill="var(--dg-accent)" font-weight="600">ladder = 10 m</text>
  <text x="86" y="218" font-size="12" fill="var(--dg-muted)">wall</text>
  <text x="88" y="246"></text>
  <text x="350" y="110">The ladder is the hypotenuse:</text>
  <text x="350" y="138" font-weight="600">h² + 6² = 10²</text>
  <text x="350" y="160">h² = 100 − 36 = 64</text>
  <text x="350" y="182" font-weight="600">h = 8 m</text>
</svg>`,
    },
  ],
  "proportional-reasoning-2": [
    {
      title: "Pie chart: central angles",
      caption: "Example survey of 60 students (cricket 15, football 20, hockey 10, kabaddi 15). Each central angle is (value ÷ total) × 360°: **90°, 120°, 60° and 90°**, which add up to 360°. Cricket matches the 15 out of 60 = 90° example.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M200 150 L200 50 A100 100 0 0 1 300 150 Z" fill="var(--dg-accent)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="243.8" y="110.2" text-anchor="middle" font-weight="600">90°</text>
  <text x="280.6" y="67.4" text-anchor="start" font-size="12">Cricket (15)</text>
  <path d="M200 150 L300 150 A100 100 0 0 1 150 236.6 Z" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="231" y="207.7" text-anchor="middle" font-weight="600">120°</text>
  <text x="257" y="258.7" text-anchor="start" font-size="12">Football (20)</text>
  <path d="M200 150 L150 236.6 A100 100 0 0 1 100 150 Z" fill="var(--dg-accent)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="146.3" y="185" text-anchor="middle" font-weight="600">60°</text>
  <text x="101.3" y="217" text-anchor="end" font-size="12">Hockey (10)</text>
  <path d="M200 150 L100 150 A100 100 0 0 1 200 50 Z" fill="var(--dg-fill)" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="156.2" y="110.2" text-anchor="middle" font-weight="600">90°</text>
  <text x="119.4" y="67.4" text-anchor="end" font-size="12">Kabaddi (15)</text>
  <text x="360" y="100" font-weight="600">60 students, favourite sport</text>
  <text x="360" y="128" font-size="12">Angle = (students ÷ 60) × 360°</text>
  <text x="360" y="152" font-size="12" fill="var(--dg-muted)">Cricket: 15/60 × 360° = 90°</text>
  <text x="360" y="172" font-size="12" fill="var(--dg-muted)">Football: 20/60 × 360° = 120°</text>
  <text x="360" y="192" font-size="12" fill="var(--dg-muted)">Hockey: 10/60 × 360° = 60°</text>
  <text x="360" y="212" font-size="12" fill="var(--dg-muted)">Kabaddi: 15/60 × 360° = 90°</text>
  <text x="360" y="238" font-size="12">90° + 120° + 60° + 90° = 360°</text>
</svg>`,
    },
    {
      title: "Inverse proportion: workers and days",
      caption: "The job needs 96 worker-days, so x × y = 96. With 6 workers it takes 16 days, with 8 workers 12 days and with 12 workers 8 days. More workers means **fewer days**, and the product stays constant (the curve is not a straight line).",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-n8-iv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="130" y1="38" x2="130" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="130" y1="227" x2="130" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="130" y="248" text-anchor="middle" font-size="12">4</text>
  <line x1="190" y1="38" x2="190" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="190" y1="227" x2="190" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="190" y="248" text-anchor="middle" font-size="12">8</text>
  <line x1="250" y1="38" x2="250" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="250" y1="227" x2="250" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="250" y="248" text-anchor="middle" font-size="12">12</text>
  <line x1="310" y1="38" x2="310" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="310" y1="227" x2="310" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="310" y="248" text-anchor="middle" font-size="12">16</text>
  <line x1="370" y1="38" x2="370" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="370" y1="227" x2="370" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="370" y="248" text-anchor="middle" font-size="12">20</text>
  <line x1="430" y1="38" x2="430" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="430" y1="227" x2="430" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="248" text-anchor="middle" font-size="12">24</text>
  <line x1="70" y1="198" x2="430" y2="198" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="198" x2="73" y2="198" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="202" text-anchor="end" font-size="12">4</text>
  <line x1="70" y1="166" x2="430" y2="166" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="166" x2="73" y2="166" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="170" text-anchor="end" font-size="12">8</text>
  <line x1="70" y1="134" x2="430" y2="134" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="134" x2="73" y2="134" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="138" text-anchor="end" font-size="12">12</text>
  <line x1="70" y1="102" x2="430" y2="102" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="102" x2="73" y2="102" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="106" text-anchor="end" font-size="12">16</text>
  <line x1="70" y1="70" x2="430" y2="70" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="70" x2="73" y2="70" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="74" text-anchor="end" font-size="12">20</text>
  <line x1="70" y1="38" x2="430" y2="38" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="38" x2="73" y2="38" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="42" text-anchor="end" font-size="12">24</text>
  <line x1="70" y1="230" x2="455" y2="230" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-n8-iv)"/>
  <line x1="70" y1="230" x2="70" y2="18" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-n8-iv)"/>
  <polyline points="130,38 137.5,59.3 145,76.4 152.5,90.4 160,102 167.5,111.8 175,120.3 182.5,127.6 190,134 197.5,139.6 205,144.7 212.5,149.2 220,153.2 227.5,156.9 235,160.2 242.5,163.2 250,166 257.5,168.6 265,170.9 272.5,173.1 280,175.1 287.5,177 295,178.8 302.5,180.5 310,182 317.5,183.5 325,184.8 332.5,186.1 340,187.3 347.5,188.5 355,189.6 362.5,190.6 370,191.6 377.5,192.5 385,193.4 392.5,194.3 400,195.1 407.5,195.9 415,196.6 422.5,197.3 430,198" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="160" y1="230" x2="160" y2="102" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="102" x2="160" y2="102" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="160" cy="102" r="4" fill="var(--dg-accent)"/>
  <line x1="190" y1="230" x2="190" y2="134" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="134" x2="190" y2="134" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="190" cy="134" r="4" fill="var(--dg-accent)"/>
  <line x1="250" y1="230" x2="250" y2="166" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="166" x2="250" y2="166" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="250" cy="166" r="4" fill="var(--dg-accent)"/>
  <line x1="310" y1="230" x2="310" y2="182" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="182" x2="310" y2="182" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="310" cy="182" r="4" fill="var(--dg-accent)"/>
  <text x="168" y="96" font-size="12">(6, 16)</text>
  <text x="198" y="128" font-size="12">(8, 12)</text>
  <text x="258" y="158" font-size="12">(12, 8)</text>
  <text x="316" y="172" font-size="12">(16, 6)</text>
  <text x="250" y="270" text-anchor="middle">Number of workers (x)</text>
  <text x="78" y="14" font-size="12">Days to finish the wall (y)</text>
  <text x="320" y="80" fill="var(--dg-accent)" font-weight="600">x × y = 96</text>
</svg>`,
    },
  ],
  "exploring-some-geometric-themes": [
    {
      title: "Net of a cube",
      caption: "A **net** is a flat pattern that folds into a solid. A cube has 6 square faces and **11** different nets; a 2 × 3 block of squares is not one, because faces would overlap when folded.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="30" y="100" width="56" height="56" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="58" y="132" text-anchor="middle" font-size="12">Left</text>
  <rect x="86" y="100" width="56" height="56" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="114" y="132" text-anchor="middle" font-size="12">Front</text>
  <rect x="142" y="100" width="56" height="56" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="170" y="132" text-anchor="middle" font-size="12">Right</text>
  <rect x="198" y="100" width="56" height="56" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="226" y="132" text-anchor="middle" font-size="12">Back</text>
  <rect x="86" y="44" width="56" height="56" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="114" y="76" text-anchor="middle" font-size="12">Top</text>
  <rect x="86" y="156" width="56" height="56" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.5"/>
  <text x="114" y="188" text-anchor="middle" font-size="12">Bottom</text>
  <text x="142" y="240" text-anchor="middle" font-size="12">A net of a cube: 6 squares</text>
  <text x="142" y="258" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Folds along the shared edges into a cube</text>
  <rect x="330" y="76" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="370" y="76" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="410" y="76" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="330" y="116" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="370" y="116" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="410" y="116" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="338" y1="84" x2="442" y2="148" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="338" y1="148" x2="442" y2="84" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="390" y="184" text-anchor="middle" font-size="12">Not a net of a cube</text>
  <text x="390" y="202" text-anchor="middle" font-size="12" fill="var(--dg-muted)">The faces overlap when folded</text>
  <text x="390" y="40" text-anchor="middle" font-size="12" fill="var(--dg-muted)">There are 11 different nets of a cube</text>
</svg>`,
    },
    {
      title: "Euler's relation: F + V − E = 2",
      caption: "Counting faces (F), vertices (V) and edges (E): cube 6, 8, 12; triangular prism 5, 6, 9; square pyramid 5, 5, 8. For every solid with flat faces, **F + V − E = 2**.",
      svg: `<svg viewBox="0 0 560 272" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="50" y1="174" x2="74" y2="150" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="74" y1="150" x2="144" y2="150" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="74" y1="150" x2="74" y2="80" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="50" y1="104" x2="120" y2="104" stroke="currentColor" stroke-width="1.8"/>
  <line x1="120" y1="104" x2="120" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="120" y1="174" x2="50" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="50" y1="174" x2="50" y2="104" stroke="currentColor" stroke-width="1.8"/>
  <line x1="50" y1="104" x2="74" y2="80" stroke="currentColor" stroke-width="1.8"/>
  <line x1="74" y1="80" x2="144" y2="80" stroke="currentColor" stroke-width="1.8"/>
  <line x1="144" y1="80" x2="120" y2="104" stroke="currentColor" stroke-width="1.8"/>
  <line x1="144" y1="80" x2="144" y2="150" stroke="currentColor" stroke-width="1.8"/>
  <line x1="144" y1="150" x2="120" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="240" y1="174" x2="274" y2="148" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="274" y1="148" x2="344" y2="148" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="274" y1="148" x2="309" y2="98" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="240" y1="174" x2="310" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="310" y1="174" x2="275" y2="124" stroke="currentColor" stroke-width="1.8"/>
  <line x1="275" y1="124" x2="240" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="275" y1="124" x2="309" y2="98" stroke="currentColor" stroke-width="1.8"/>
  <line x1="309" y1="98" x2="344" y2="148" stroke="currentColor" stroke-width="1.8"/>
  <line x1="344" y1="148" x2="310" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="400" y1="174" x2="424" y2="150" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="424" y1="150" x2="494" y2="150" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="447" y1="84" x2="424" y2="150" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="400" y1="174" x2="470" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="470" y1="174" x2="494" y2="150" stroke="currentColor" stroke-width="1.8"/>
  <line x1="447" y1="84" x2="400" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="447" y1="84" x2="470" y2="174" stroke="currentColor" stroke-width="1.8"/>
  <line x1="447" y1="84" x2="494" y2="150" stroke="currentColor" stroke-width="1.8"/>
  <text x="97" y="208" text-anchor="middle" font-weight="600">Cube</text>
  <text x="97" y="228" text-anchor="middle" font-size="12">F = 6, V = 8, E = 12</text>
  <text x="97" y="246" text-anchor="middle" font-size="12" fill="var(--dg-accent)">6 + 8 − 12 = 2</text>
  <text x="292" y="208" text-anchor="middle" font-weight="600">Triangular prism</text>
  <text x="292" y="228" text-anchor="middle" font-size="12">F = 5, V = 6, E = 9</text>
  <text x="292" y="246" text-anchor="middle" font-size="12" fill="var(--dg-accent)">5 + 6 − 9 = 2</text>
  <text x="447" y="208" text-anchor="middle" font-weight="600">Square pyramid</text>
  <text x="447" y="228" text-anchor="middle" font-size="12">F = 5, V = 5, E = 8</text>
  <text x="447" y="246" text-anchor="middle" font-size="12" fill="var(--dg-accent)">5 + 5 − 8 = 2</text>
  <text x="280" y="16" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Dashed lines are hidden edges</text>
</svg>`,
    },
  ],
  "tales-by-dots-and-lines": [
    {
      title: "Dot plot and mean",
      caption: "Each data value is a dot above the number line. The mean 40 ÷ 5 = **8** is the balancing point: the dots on the left and right of it are equally far in total.",
      svg: `<svg viewBox="0 0 560 225" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="40" y1="140" x2="520" y2="140" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-n8-dot)"/>
  <defs><marker id="ar-n8-dot" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="136" x2="60" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="162" text-anchor="middle" font-size="12">2</text>
  <line x1="96" y1="136" x2="96" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="96" y="162" text-anchor="middle" font-size="12">3</text>
  <line x1="132" y1="136" x2="132" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="132" y="162" text-anchor="middle" font-size="12">4</text>
  <line x1="168" y1="136" x2="168" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="168" y="162" text-anchor="middle" font-size="12">5</text>
  <line x1="204" y1="136" x2="204" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="204" y="162" text-anchor="middle" font-size="12">6</text>
  <line x1="240" y1="136" x2="240" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="240" y="162" text-anchor="middle" font-size="12">7</text>
  <line x1="276" y1="136" x2="276" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="276" y="162" text-anchor="middle" font-size="12">8</text>
  <line x1="312" y1="136" x2="312" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="312" y="162" text-anchor="middle" font-size="12">9</text>
  <line x1="348" y1="136" x2="348" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="348" y="162" text-anchor="middle" font-size="12">10</text>
  <line x1="384" y1="136" x2="384" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="384" y="162" text-anchor="middle" font-size="12">11</text>
  <line x1="420" y1="136" x2="420" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="420" y="162" text-anchor="middle" font-size="12">12</text>
  <line x1="456" y1="136" x2="456" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="456" y="162" text-anchor="middle" font-size="12">13</text>
  <line x1="492" y1="136" x2="492" y2="144" stroke="currentColor" stroke-width="1.5"/>
  <text x="492" y="162" text-anchor="middle" font-size="12">14</text>
  <circle cx="132" cy="126" r="8" fill="currentColor"/>
  <circle cx="204" cy="126" r="8" fill="currentColor"/>
  <circle cx="276" cy="126" r="8" fill="currentColor"/>
  <circle cx="348" cy="126" r="8" fill="currentColor"/>
  <circle cx="420" cy="126" r="8" fill="currentColor"/>
  <path d="M276 172 l-9 16 h18 z" fill="var(--dg-accent)"/>
  <text x="276" y="208" text-anchor="middle" fill="var(--dg-accent)" font-weight="600">mean = 8</text>
  <text x="276" y="24" text-anchor="middle" font-weight="600">Dot plot of 4, 6, 8, 10, 12</text>
  <text x="276" y="48" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Mean = (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8</text>
</svg>`,
    },
    {
      title: "Line graph: change over time",
      caption: "Example: temperature through a day, with time on the horizontal axis. A rising line means increase and a falling line means decrease; the **steeper** the line, the faster the change (the rise from 8 to 10 is the steepest here).",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-n8-lg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="70" y1="50" x2="70" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="70" y1="227" x2="70" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="248" text-anchor="middle" font-size="12">6</text>
  <line x1="138" y1="50" x2="138" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="138" y1="227" x2="138" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="138" y="248" text-anchor="middle" font-size="12">8</text>
  <line x1="206" y1="50" x2="206" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="206" y1="227" x2="206" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="206" y="248" text-anchor="middle" font-size="12">10</text>
  <line x1="274" y1="50" x2="274" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="274" y1="227" x2="274" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="274" y="248" text-anchor="middle" font-size="12">12</text>
  <line x1="342" y1="50" x2="342" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="342" y1="227" x2="342" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="342" y="248" text-anchor="middle" font-size="12">14</text>
  <line x1="410" y1="50" x2="410" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="410" y1="227" x2="410" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="410" y="248" text-anchor="middle" font-size="12">16</text>
  <line x1="478" y1="50" x2="478" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="478" y1="227" x2="478" y2="233" stroke="currentColor" stroke-width="1.5"/>
  <text x="478" y="248" text-anchor="middle" font-size="12">18</text>
  <line x1="70" y1="230" x2="478" y2="230" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="230" x2="73" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="234" text-anchor="end" font-size="12">15</text>
  <line x1="70" y1="185" x2="478" y2="185" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="185" x2="73" y2="185" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="189" text-anchor="end" font-size="12">20</text>
  <line x1="70" y1="140" x2="478" y2="140" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="140" x2="73" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="144" text-anchor="end" font-size="12">25</text>
  <line x1="70" y1="95" x2="478" y2="95" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="95" x2="73" y2="95" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="99" text-anchor="end" font-size="12">30</text>
  <line x1="70" y1="50" x2="478" y2="50" stroke="var(--dg-muted)" stroke-width="0.6" opacity="0.4"/>
  <line x1="67" y1="50" x2="73" y2="50" stroke="currentColor" stroke-width="1.5"/>
  <text x="62" y="54" text-anchor="end" font-size="12">35</text>
  <line x1="70" y1="230" x2="508" y2="230" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-n8-lg)"/>
  <line x1="70" y1="230" x2="70" y2="36" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-n8-lg)"/>
  <polyline points="70,203 138,167 206,122 274,86 342,95 410,131 478,167" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="70" cy="203" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="138" cy="167" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="206" cy="122" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="274" cy="86" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="342" cy="95" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="410" cy="131" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="478" cy="167" r="3.5" fill="var(--dg-accent)"/>
  <text x="278" y="266" text-anchor="middle">Time of day (hours)</text>
  <text x="70" y="26" font-size="12">Temperature (°C)</text>
  <text x="164" y="116" text-anchor="end" font-size="12" fill="var(--dg-accent)">steepest rise</text>
  <text x="424" y="119" font-size="12" fill="var(--dg-accent)">falling</text>
</svg>`,
    },
  ],
  "algebra-play": [
    {
      title: "Matchstick squares: 3n + 1",
      caption: "One square needs 4 sticks and every extra square adds 3 more, so n squares in a row need **3n + 1** sticks (4, 7, 10, …).",
      svg: `<svg viewBox="0 0 560 225" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="80" y1="54" x2="80" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="120" y1="54" x2="120" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="80" y1="54" x2="120" y2="54" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="80" y1="94" x2="120" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="220" y1="54" x2="220" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="260" y1="54" x2="260" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="300" y1="54" x2="300" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="220" y1="54" x2="260" y2="54" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="220" y1="94" x2="260" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="260" y1="54" x2="300" y2="54" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="260" y1="94" x2="300" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="360" y1="54" x2="360" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="400" y1="54" x2="400" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="440" y1="54" x2="440" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="480" y1="54" x2="480" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="360" y1="54" x2="400" y2="54" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="360" y1="94" x2="400" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="400" y1="54" x2="440" y2="54" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="400" y1="94" x2="440" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="440" y1="54" x2="480" y2="54" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <line x1="440" y1="94" x2="480" y2="94" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <text x="100" y="122" text-anchor="middle" font-weight="600">n = 1</text>
  <text x="100" y="140" text-anchor="middle" font-size="12">3 × 1 + 1 = 4 sticks</text>
  <text x="260" y="122" text-anchor="middle" font-weight="600">n = 2</text>
  <text x="260" y="140" text-anchor="middle" font-size="12">3 × 2 + 1 = 7 sticks</text>
  <text x="420" y="122" text-anchor="middle" font-weight="600">n = 3</text>
  <text x="420" y="140" text-anchor="middle" font-size="12">3 × 3 + 1 = 10 sticks</text>
  <text x="30" y="28" font-size="12" fill="var(--dg-muted)">Matchstick squares in a row</text>
  <text x="30" y="170" font-size="12">First square: 4 sticks. Each new square adds 3 sticks.</text>
  <text x="30" y="192" font-weight="600">Number of sticks for n squares = 3n + 1</text>
</svg>`,
    },
    {
      title: "Why a number trick works",
      caption: "Writing the trick with a variable n: n → 2n → 2n + 6 → n + 3 → (n + 3) − n = **3**. Algebra shows the answer does not depend on the number chosen.",
      svg: `<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-n8-tr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="16" y="50" width="88" height="40" fill="none" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="60" y="75" text-anchor="middle" font-weight="600">n</text>
  <text x="60" y="110" text-anchor="middle" font-size="12">Think of</text>
  <text x="60" y="126" text-anchor="middle" font-size="12">a number</text>
  <line x1="106" y1="70" x2="123" y2="70" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-tr)"/>
  <rect x="126" y="50" width="88" height="40" fill="none" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="170" y="75" text-anchor="middle" font-weight="600">2n</text>
  <text x="170" y="110" text-anchor="middle" font-size="12">Double it</text>
  <line x1="216" y1="70" x2="233" y2="70" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-tr)"/>
  <rect x="236" y="50" width="88" height="40" fill="none" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="280" y="75" text-anchor="middle" font-weight="600">2n + 6</text>
  <text x="280" y="110" text-anchor="middle" font-size="12">Add 6</text>
  <line x1="326" y1="70" x2="343" y2="70" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-tr)"/>
  <rect x="346" y="50" width="88" height="40" fill="none" fill-opacity="0.9" stroke="currentColor" stroke-width="1.5" rx="6"/>
  <text x="390" y="75" text-anchor="middle" font-weight="600">n + 3</text>
  <text x="390" y="110" text-anchor="middle" font-size="12">Halve it</text>
  <line x1="436" y1="70" x2="453" y2="70" stroke="currentColor" stroke-width="1.3" marker-end="url(#ar-n8-tr)"/>
  <rect x="456" y="50" width="88" height="40" fill="var(--dg-fill)" fill-opacity="0.9" stroke="var(--dg-accent)" stroke-width="2" rx="6"/>
  <text x="500" y="75" text-anchor="middle" font-weight="600">3</text>
  <text x="500" y="110" text-anchor="middle" font-size="12">Subtract</text>
  <text x="500" y="126" text-anchor="middle" font-size="12">the original n</text>
  <text x="16" y="28" font-size="12" fill="var(--dg-muted)">Whatever number you think of, the answer is the same:</text>
  <text x="16" y="150" font-size="12">The original number n cancels out, so the answer is always 3.</text>
</svg>`,
    },
  ],
  "area": [
    {
      title: "Area of a parallelogram and a triangle",
      caption: "The height h is the **perpendicular** distance between the parallel sides. A diagonal splits the parallelogram into two identical triangles, so a triangle has half the area: ½ × b × h (for example, b = 10 and h = 6 give 30).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="60,200 260,200 320,100 120,100" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="60" y1="200" x2="320" y2="100" stroke="var(--dg-accent)" stroke-width="1.3"/>
  <line x1="120" y1="100" x2="120" y2="200" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 3"/>
  <polyline points="111,200 111,191 120,191" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="52" y="214" text-anchor="end" font-size="12">A</text>
  <text x="264" y="216" font-size="12">B</text>
  <text x="328" y="104" font-size="12">C</text>
  <text x="116" y="92" text-anchor="end" font-size="12">D</text>
  <text x="160" y="222" text-anchor="middle">base b</text>
  <text x="128" y="150">h</text>
  <text x="360" y="130" font-weight="600">Parallelogram = b × h</text>
  <text x="360" y="156" font-size="12">Diagonal AC cuts it into two</text>
  <text x="360" y="174" font-size="12">identical triangles ABC and ACD.</text>
  <text x="360" y="200" fill="var(--dg-accent)" font-weight="600">Triangle = ½ × b × h</text>
</svg>`,
    },
    {
      title: "Area of a trapezium and a rhombus",
      caption: "**Trapezium** = ½ × (sum of parallel sides) × height, so with parallel sides 8 and 12 and height 5 the area is ½ × 20 × 5 = 50. **Rhombus** = ½ × d₁ × d₂, where the diagonals cross at right angles.",
      svg: `<svg viewBox="0 0 560 232" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <polygon points="40,160 220,160 190,85 70,85" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="70" y1="85" x2="70" y2="160" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 3"/>
  <polyline points="79,160 79,151 70,151" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="130" y="75" text-anchor="middle">8</text>
  <text x="130" y="180" text-anchor="middle">12</text>
  <text x="78" y="128" font-size="12">h = 5</text>
  <text x="130" y="36" text-anchor="middle" font-weight="600">Trapezium</text>
  <text x="130" y="214" text-anchor="middle" font-size="12">Area = ½ × (8 + 12) × 5 = 50</text>
  <polygon points="340,125 410,175 480,125 410,75" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <line x1="340" y1="125" x2="480" y2="125" stroke="var(--dg-accent)" stroke-width="1.3" stroke-dasharray="5 3"/>
  <line x1="410" y1="75" x2="410" y2="175" stroke="var(--dg-accent)" stroke-width="1.3" stroke-dasharray="5 3"/>
  <polyline points="418,125 418,117 410,117" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="445" y="141" text-anchor="middle" font-size="12">d₁</text>
  <text x="418" y="104" font-size="12">d₂</text>
  <text x="410" y="36" text-anchor="middle" font-weight="600">Rhombus</text>
  <text x="410" y="214" text-anchor="middle" font-size="12">Area = ½ × d₁ × d₂</text>
</svg>`,
    },
  ],
});
