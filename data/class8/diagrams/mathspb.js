// Class 8 Mathematics (PSEB, earlier NCERT book) diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(8, "mathspb", {
  "rational-numbers": [
    {
      title: "Rational numbers on the number line",
      caption: "Negative rationals lie to the left of 0 and positive ones to the right. To mark p/q, divide each unit into q equal parts and count p parts from 0 (to the left if p is negative). Here −7/4, −1/2, 3/4 and 5/4 are marked.",
      svg: `<svg viewBox="0 50 560 130" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<line x1="30" y1="100" x2="530" y2="100" stroke="currentColor" stroke-width="1.5" marker-start="url(#ar-pb8-1)" marker-end="url(#ar-pb8-1)"/>
<line x1="40" y1="93" x2="40" y2="107" stroke="currentColor"/>
<text x="40" y="126" text-anchor="middle">−2</text>
<line x1="70" y1="97" x2="70" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="100" y1="97" x2="100" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="130" y1="97" x2="130" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="160" y1="93" x2="160" y2="107" stroke="currentColor"/>
<text x="160" y="126" text-anchor="middle">−1</text>
<line x1="190" y1="97" x2="190" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="220" y1="97" x2="220" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="250" y1="97" x2="250" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="280" y1="93" x2="280" y2="107" stroke="currentColor"/>
<text x="280" y="126" text-anchor="middle">0</text>
<line x1="310" y1="97" x2="310" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="340" y1="97" x2="340" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="370" y1="97" x2="370" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="400" y1="93" x2="400" y2="107" stroke="currentColor"/>
<text x="400" y="126" text-anchor="middle">1</text>
<line x1="430" y1="97" x2="430" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="460" y1="97" x2="460" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="490" y1="97" x2="490" y2="103" stroke="currentColor" stroke-width="1"/>
<line x1="520" y1="93" x2="520" y2="107" stroke="currentColor"/>
<text x="520" y="126" text-anchor="middle">2</text>
<circle cx="70" cy="100" r="5" fill="var(--dg-accent)"/>
<text x="70" y="78" text-anchor="middle" font-weight="600">−7/4</text>
<line x1="70" y1="84" x2="70" y2="94" stroke="var(--dg-accent)" stroke-dasharray="2 2"/>
<circle cx="220" cy="100" r="5" fill="var(--dg-accent)"/>
<text x="220" y="78" text-anchor="middle" font-weight="600">−1/2</text>
<line x1="220" y1="84" x2="220" y2="94" stroke="var(--dg-accent)" stroke-dasharray="2 2"/>
<circle cx="370" cy="100" r="5" fill="var(--dg-accent)"/>
<text x="370" y="78" text-anchor="middle" font-weight="600">3/4</text>
<line x1="370" y1="84" x2="370" y2="94" stroke="var(--dg-accent)" stroke-dasharray="2 2"/>
<circle cx="430" cy="100" r="5" fill="var(--dg-accent)"/>
<text x="430" y="78" text-anchor="middle" font-weight="600">5/4</text>
<line x1="430" y1="84" x2="430" y2="94" stroke="var(--dg-accent)" stroke-dasharray="2 2"/>
<text x="280" y="170" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Each unit is divided into 4 equal parts, so every small tick is 1/4. Negative rationals lie to the left of 0.</text>
</svg>`,
    },
    {
      title: "A rational number between two rationals",
      caption: "Between any two rational numbers there is another one: their **mean**. The mean of 1/4 and 1/2 is 3/8, which sits halfway between them on the number line.",
      svg: `<svg viewBox="0 60 560 150" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<line x1="40" y1="100" x2="520" y2="100" stroke="currentColor" stroke-width="1.5"/>
<line x1="60" y1="93" x2="60" y2="107" stroke="currentColor"/>
<text x="60" y="126" text-anchor="middle">0</text>
<line x1="115" y1="96" x2="115" y2="104" stroke="currentColor" stroke-width="1"/>
<line x1="170" y1="93" x2="170" y2="107" stroke="currentColor"/>
<text x="170" y="126" text-anchor="middle">1/4</text>
<line x1="225" y1="96" x2="225" y2="104" stroke="currentColor" stroke-width="1"/>
<line x1="280" y1="93" x2="280" y2="107" stroke="currentColor"/>
<text x="280" y="126" text-anchor="middle">1/2</text>
<line x1="335" y1="96" x2="335" y2="104" stroke="currentColor" stroke-width="1"/>
<line x1="390" y1="93" x2="390" y2="107" stroke="currentColor"/>
<text x="390" y="126" text-anchor="middle">3/4</text>
<line x1="445" y1="96" x2="445" y2="104" stroke="currentColor" stroke-width="1"/>
<line x1="500" y1="93" x2="500" y2="107" stroke="currentColor"/>
<text x="500" y="126" text-anchor="middle">1</text>
<circle cx="170" cy="100" r="5" fill="var(--dg-accent)"/>
<circle cx="280" cy="100" r="5" fill="var(--dg-accent)"/>
<circle cx="225" cy="100" r="7" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
<text x="225" y="72" text-anchor="middle" font-weight="600">3/8</text>
<line x1="225" y1="79" x2="225" y2="91" stroke="var(--dg-accent)" stroke-dasharray="2 2"/>
<text x="280" y="170" text-anchor="middle">The mean (1/4 + 1/2) ÷ 2 = 3/8 lies exactly halfway between 1/4 and 1/2</text>
<text x="280" y="192" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Small ticks are eighths. Repeating this gives infinitely many rationals between any two.</text>
</svg>`,
    },
  ],
  "linear-equations-in-one-variable": [
    {
      title: "An equation as a balance",
      caption: "An equation is like a balanced beam: the two sides are equal, so the same operation must be done on both sides to keep it balanced. Solving 2x + 3 = 9 gives x = 3.",
      svg: `<svg viewBox="0 90 560 210" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<line x1="40" y1="150" x2="520" y2="150" stroke="currentColor" stroke-width="2.5"/>
<polygon points="280,150 255,198 305,198" fill="var(--dg-fill)" stroke="currentColor"/>
<line x1="235" y1="198" x2="325" y2="198" stroke="currentColor"/>
<rect x="50" y="114" width="40" height="36" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="94" y="114" width="40" height="36" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="138" y="114" width="34" height="36" fill="none" stroke="currentColor"/>
<text x="70" y="137" text-anchor="middle" font-weight="600">x</text>
<text x="114" y="137" text-anchor="middle" font-weight="600">x</text>
<text x="155" y="137" text-anchor="middle">3</text>
<rect x="390" y="114" width="100" height="36" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="440" y="137" text-anchor="middle">9</text>
<text x="111" y="106" text-anchor="middle" font-weight="600">2x + 3</text>
<text x="440" y="106" text-anchor="middle" font-weight="600">9</text>
<text x="280" y="100" text-anchor="middle" font-size="20">=</text>
<text x="30" y="232">Step 1: take 3 from both sides:  2x = 9 − 3 = 6</text>
<text x="30" y="254">Step 2: divide both sides by 2:  x = 6 ÷ 2 = 3</text>
<text x="30" y="276" font-size="12" fill="var(--dg-muted)">Check: 2(3) + 3 = 9 ✓  Whatever is done to one side must be done to the other.</text>
</svg>`,
    },
  ],
  "understanding-quadrilaterals": [
    {
      title: "Angle sum of a quadrilateral",
      caption: "Drawing the diagonal AC divides any quadrilateral into two triangles. Each triangle has an angle sum of 180°, so the four angles of a quadrilateral add up to **360°**.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<polygon points="150,40 60,170 270,200 330,70" fill="var(--dg-fill)" stroke="currentColor"/>
<line x1="150" y1="40" x2="270" y2="200" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="5 3"/>
<text x="141.2" y="30.6" text-anchor="middle" font-weight="600">A</text>
<text x="44.9" y="179.3" text-anchor="middle" font-weight="600">B</text>
<text x="280.3" y="216.2" text-anchor="middle" font-weight="600">C</text>
<text x="344.9" y="68.2" text-anchor="middle" font-weight="600">D</text>
<text x="153.2" y="74.9" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">1</text>
<text x="92" y="163.3" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">2</text>
<text x="234.8" y="183.7" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">3</text>
<text x="182" y="64.3" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">4</text>
<text x="263.6" y="173.1" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">5</text>
<text x="304.4" y="84.7" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">6</text>
<text x="375" y="70" text-anchor="start">△ABC: ∠1 + ∠2 + ∠3 = 180°</text>
<text x="375" y="94" text-anchor="start">△ACD: ∠4 + ∠5 + ∠6 = 180°</text>
<text x="375" y="126" text-anchor="start" font-weight="600">Adding: ∠A + ∠B + ∠C + ∠D</text>
<text x="375" y="148" text-anchor="start" font-weight="600">= 180° + 180° = 360°</text>
<text x="375" y="186" text-anchor="start" font-size="12" fill="var(--dg-muted)">Diagonal AC splits the</text>
<text x="375" y="202" text-anchor="start" font-size="12" fill="var(--dg-muted)">quadrilateral into 2 triangles.</text>
</svg>`,
    },
    {
      title: "Properties of a parallelogram",
      caption: "In a parallelogram opposite sides are parallel and equal, opposite angles are equal (α, β), adjacent angles are supplementary, and the diagonals **bisect each other** at O.",
      svg: `<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<polygon points="80,190 260,190 370,70 190,70" fill="var(--dg-fill)" stroke="currentColor"/>
<line x1="80" y1="190" x2="370" y2="70" stroke="currentColor" stroke-dasharray="5 3"/>
<line x1="260" y1="190" x2="190" y2="70" stroke="currentColor" stroke-dasharray="5 3"/>
<line x1="170" y1="184" x2="170" y2="196" stroke="var(--dg-accent)" stroke-width="1.8"/>
<line x1="280" y1="64" x2="280" y2="76" stroke="var(--dg-accent)" stroke-width="1.8"/>
<line x1="128.9" y1="127.8" x2="137.7" y2="135.9" stroke="var(--dg-accent)" stroke-width="1.8"/>
<line x1="132.3" y1="124.1" x2="141.1" y2="132.2" stroke="var(--dg-accent)" stroke-width="1.8"/>
<line x1="308.9" y1="127.8" x2="317.7" y2="135.9" stroke="var(--dg-accent)" stroke-width="1.8"/>
<line x1="312.3" y1="124.1" x2="321.1" y2="132.2" stroke="var(--dg-accent)" stroke-width="1.8"/>
<circle cx="225" cy="130" r="3" fill="currentColor"/>
<text x="66" y="204" text-anchor="middle" font-weight="600">A</text>
<text x="274" y="204" text-anchor="middle" font-weight="600">B</text>
<text x="384" y="64" text-anchor="middle" font-weight="600">C</text>
<text x="176" y="64" text-anchor="middle" font-weight="600">D</text>
<text x="217" y="146" text-anchor="middle" font-weight="600">O</text>
<text x="110" y="184" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">α</text>
<text x="340" y="87" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">α</text>
<text x="234" y="184" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">β</text>
<text x="218" y="87" text-anchor="middle" font-size="12" fill="var(--dg-accent)" font-weight="600">β</text>
<text x="410" y="78" text-anchor="start">AB ∥ DC,  AD ∥ BC</text>
<text x="410" y="100" text-anchor="start">AB = DC,  AD = BC</text>
<text x="410" y="122" text-anchor="start">∠A = ∠C,  ∠B = ∠D</text>
<text x="410" y="144" text-anchor="start">∠A + ∠B = 180°</text>
<text x="410" y="166" text-anchor="start">OA = OC,  OB = OD</text>
<text x="410" y="196" text-anchor="start" font-size="12" fill="var(--dg-muted)">Diagonals bisect each</text>
<text x="410" y="212" text-anchor="start" font-size="12" fill="var(--dg-muted)">other at O.</text>
</svg>`,
    },
  ],
  "data-handling": [
    {
      title: "Pie chart with central angles",
      caption: "Each sector has a central angle = (value ÷ total) × 360°. For a family spending ₹ 20,000 a month the sectors for food, rent, education and savings are 144°, 108°, 72° and 36°.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<path d="M195 140L195 50A90 90 0 0 1 247.9 212.8Z" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<text x="244.5" y="123.9" text-anchor="middle" font-weight="600">Food</text>
<text x="244.5" y="139.9" text-anchor="middle" font-weight="600">144°</text>
<path d="M195 140L247.9 212.8A90 90 0 0 1 109.4 167.8Z" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="178.9" y="189.5" text-anchor="middle" font-weight="600">Rent</text>
<text x="178.9" y="205.5" text-anchor="middle" font-weight="600">108°</text>
<path d="M195 140L109.4 167.8A90 90 0 0 1 142.1 67.2Z" fill="none" stroke="currentColor"/>
<text x="98" y="108.5" text-anchor="end" font-weight="600">Education 72°</text>
<path d="M195 140L142.1 67.2A90 90 0 0 1 195 50Z" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="163.5" y="43" text-anchor="end" font-weight="600">Savings 36°</text>
<text x="335" y="70" text-anchor="start" font-weight="600">Total = ₹ 20,000</text>
<text x="335" y="98" text-anchor="start" font-size="12">Food: 8,000/20000 × 360° = 144°</text>
<text x="335" y="122" text-anchor="start" font-size="12">Rent: 6,000/20000 × 360° = 108°</text>
<text x="335" y="146" text-anchor="start" font-size="12">Education: 4,000/20000 × 360° = 72°</text>
<text x="335" y="170" text-anchor="start" font-size="12">Savings: 2,000/20000 × 360° = 36°</text>
<text x="335" y="206" text-anchor="start" font-size="12" fill="var(--dg-muted)">Check: 144° + 108° + 72° + 36° = 360°</text>
</svg>`,
    },
    {
      title: "Histogram of grouped data",
      caption: "A histogram has class intervals on the horizontal axis and frequencies on the vertical axis. The bars are of equal width and **touch each other** because the classes are continuous. Here 4, 9, 13, 6 and 3 students scored in 0–10, 10–20, 20–30, 30–40 and 40–50.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<line x1="90" y1="230" x2="510" y2="230" stroke="currentColor" marker-end="url(#ar-pb8-4)"/>
<line x1="90" y1="230" x2="90" y2="30" stroke="currentColor" marker-end="url(#ar-pb8-4)"/>
<line x1="85" y1="230" x2="90" y2="230" stroke="currentColor"/>
<text x="81" y="234" text-anchor="end">0</text>
<line x1="85" y1="182" x2="90" y2="182" stroke="currentColor"/>
<text x="81" y="186" text-anchor="end">4</text>
<line x1="90" y1="182" x2="490" y2="182" stroke="var(--dg-muted)" stroke-dasharray="2 4" stroke-width=".7"/>
<line x1="85" y1="134" x2="90" y2="134" stroke="currentColor"/>
<text x="81" y="138" text-anchor="end">8</text>
<line x1="90" y1="134" x2="490" y2="134" stroke="var(--dg-muted)" stroke-dasharray="2 4" stroke-width=".7"/>
<line x1="85" y1="86" x2="90" y2="86" stroke="currentColor"/>
<text x="81" y="90" text-anchor="end">12</text>
<line x1="90" y1="86" x2="490" y2="86" stroke="var(--dg-muted)" stroke-dasharray="2 4" stroke-width=".7"/>
<line x1="85" y1="38" x2="90" y2="38" stroke="currentColor"/>
<text x="81" y="42" text-anchor="end">16</text>
<line x1="90" y1="38" x2="490" y2="38" stroke="var(--dg-muted)" stroke-dasharray="2 4" stroke-width=".7"/>
<rect x="90" y="182" width="80" height="48" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="130" y="176" text-anchor="middle" font-weight="600">4</text>
<rect x="170" y="122" width="80" height="108" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="210" y="116" text-anchor="middle" font-weight="600">9</text>
<rect x="250" y="74" width="80" height="156" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="290" y="68" text-anchor="middle" font-weight="600">13</text>
<rect x="330" y="158" width="80" height="72" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="370" y="152" text-anchor="middle" font-weight="600">6</text>
<rect x="410" y="194" width="80" height="36" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="450" y="188" text-anchor="middle" font-weight="600">3</text>
<line x1="90" y1="230" x2="90" y2="235" stroke="currentColor"/>
<text x="90" y="249" text-anchor="middle">0</text>
<line x1="170" y1="230" x2="170" y2="235" stroke="currentColor"/>
<text x="170" y="249" text-anchor="middle">10</text>
<line x1="250" y1="230" x2="250" y2="235" stroke="currentColor"/>
<text x="250" y="249" text-anchor="middle">20</text>
<line x1="330" y1="230" x2="330" y2="235" stroke="currentColor"/>
<text x="330" y="249" text-anchor="middle">30</text>
<line x1="410" y1="230" x2="410" y2="235" stroke="currentColor"/>
<text x="410" y="249" text-anchor="middle">40</text>
<line x1="490" y1="230" x2="490" y2="235" stroke="currentColor"/>
<text x="490" y="249" text-anchor="middle">50</text>
<text x="290" y="270" text-anchor="middle">Marks (class intervals of width 10)</text>
<text x="30" y="130" text-anchor="middle" transform="rotate(-90 30 130)">Number of students (frequency)</text>
</svg>`,
    },
  ],
  "squares-and-square-roots": [
    {
      title: "Pythagorean triplet 3, 4, 5",
      caption: "In the right-angled triangle with sides 3, 4 and 5, the squares drawn on the sides have areas 9, 16 and 25, and 9 + 16 = 25. For any m > 1, (2m, m² − 1, m² + 1) is a Pythagorean triplet.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<polygon points="180,110 180,170 120,170 120,110" fill="var(--dg-fill)" stroke="currentColor"/>
<polygon points="180,170 260,170 260,250 180,250" fill="var(--dg-fill)" stroke="currentColor"/>
<polygon points="180,110 260,170 320,90 240,30" fill="var(--dg-fill)" stroke="currentColor"/>
<polygon points="180,110 180,170 260,170" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M180 158H192V170" fill="none" stroke="currentColor"/>
<text x="150" y="138" text-anchor="middle">3² = 9</text>
<text x="220" y="214" text-anchor="middle">4² = 16</text>
<text x="250" y="96" text-anchor="middle">5² = 25</text>
<text x="170" y="104" text-anchor="end" font-weight="600">A</text>
<text x="272" y="180" text-anchor="start" font-weight="600">B</text>
<text x="194" y="185" text-anchor="start" font-weight="600">C</text>
<text x="370" y="90" text-anchor="start" font-weight="600">9 + 16 = 25</text>
<text x="370" y="114" text-anchor="start" font-weight="600">3² + 4² = 5²</text>
<text x="370" y="148" text-anchor="start" font-size="12" fill="var(--dg-muted)">(3, 4, 5) is a Pythagorean</text>
<text x="370" y="164" text-anchor="start" font-size="12" fill="var(--dg-muted)">triplet: the squares on the two</text>
<text x="370" y="180" text-anchor="start" font-size="12" fill="var(--dg-muted)">shorter sides together have the</text>
<text x="370" y="196" text-anchor="start" font-size="12" fill="var(--dg-muted)">same area as the square on the</text>
<text x="370" y="212" text-anchor="start" font-size="12" fill="var(--dg-muted)">longest side.</text>
</svg>`,
    },
    {
      title: "Square number as sum of odd numbers",
      caption: "Each new L-shaped layer of unit squares adds the next odd number (1, 3, 5, 7, 9), so the sum of the first n odd numbers is n². Here the 5 × 5 square shows 25 = 1 + 3 + 5 + 7 + 9.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<rect x="40" y="30" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="70" y="30" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="100" y="30" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="130" y="30" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="160" y="30" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="40" y="60" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="70" y="60" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="100" y="60" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="130" y="60" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="160" y="60" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="40" y="90" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="70" y="90" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="100" y="90" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="130" y="90" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="160" y="90" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="40" y="120" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="70" y="120" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="100" y="120" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="130" y="120" width="30" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="160" y="120" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="40" y="150" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="70" y="150" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="100" y="150" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="130" y="150" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="160" y="150" width="30" height="30" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<text x="55" y="49" text-anchor="middle" font-size="12" font-weight="600">1</text>
<text x="85" y="79" text-anchor="middle" font-size="12" font-weight="600">3</text>
<text x="115" y="109" text-anchor="middle" font-size="12" font-weight="600">5</text>
<text x="145" y="139" text-anchor="middle" font-size="12" font-weight="600">7</text>
<text x="175" y="169" text-anchor="middle" font-size="12" font-weight="600">9</text>
<text x="115" y="200" text-anchor="middle">5 × 5 = 25 unit squares</text>
<text x="240" y="64" text-anchor="start" font-weight="600">Layer by layer (L-shapes):</text>
<text x="240" y="92" text-anchor="start">1</text>
<text x="240" y="114" text-anchor="start">1 + 3 = 4 = 2²</text>
<text x="240" y="136" text-anchor="start">1 + 3 + 5 = 9 = 3²</text>
<text x="240" y="158" text-anchor="start">1 + 3 + 5 + 7 = 16 = 4²</text>
<text x="240" y="180" text-anchor="start" font-weight="600">1 + 3 + 5 + 7 + 9 = 25 = 5²</text>
<text x="240" y="208" text-anchor="start" font-size="12" fill="var(--dg-muted)">Sum of first n odd numbers = n²</text>
</svg>`,
    },
  ],
  "cubes-and-cube-roots": [
    {
      title: "A cube of 27 unit cubes",
      caption: "A cube of edge 3 is built from 3 × 3 × 3 = 27 unit cubes, so 3³ = 27. Reversing this, the cube root of 27 is the edge length of the cube, ∛27 = 3.",
      svg: `<svg viewBox="0 0 560 265" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<polygon points="60,110 180,110 180,230 60,230" fill="var(--dg-fill)" stroke="currentColor"/>
<polygon points="60,110 120,65 240,65 180,110" fill="var(--dg-fill)" stroke="currentColor"/>
<polygon points="180,110 240,65 240,185 180,230" fill="var(--dg-fill)" stroke="currentColor"/>
<line x1="100" y1="110" x2="100" y2="230" stroke="currentColor" stroke-width=".8"/>
<line x1="60" y1="150" x2="180" y2="150" stroke="currentColor" stroke-width=".8"/>
<line x1="100" y1="110" x2="160" y2="65" stroke="currentColor" stroke-width=".8"/>
<line x1="180" y1="150" x2="240" y2="105" stroke="currentColor" stroke-width=".8"/>
<line x1="200" y1="95" x2="200" y2="215" stroke="currentColor" stroke-width=".8"/>
<line x1="80" y1="95" x2="200" y2="95" stroke="currentColor" stroke-width=".8"/>
<line x1="140" y1="110" x2="140" y2="230" stroke="currentColor" stroke-width=".8"/>
<line x1="60" y1="190" x2="180" y2="190" stroke="currentColor" stroke-width=".8"/>
<line x1="140" y1="110" x2="200" y2="65" stroke="currentColor" stroke-width=".8"/>
<line x1="180" y1="190" x2="240" y2="145" stroke="currentColor" stroke-width=".8"/>
<line x1="220" y1="80" x2="220" y2="200" stroke="currentColor" stroke-width=".8"/>
<line x1="100" y1="80" x2="220" y2="80" stroke="currentColor" stroke-width=".8"/>
<line x1="80" y1="95" x2="200" y2="95" stroke="currentColor" stroke-width=".8"/>
<line x1="100" y1="80" x2="220" y2="80" stroke="currentColor" stroke-width=".8"/>
<text x="120" y="250" text-anchor="middle">3 units</text>
<text x="52" y="174" text-anchor="end">3 units</text>
<text x="222" y="223.5" text-anchor="start">3 units</text>
<text x="340" y="70" text-anchor="start" font-weight="600">Edge = 3 units</text>
<text x="340" y="94" text-anchor="start">Each layer: 3 × 3 = 9 cubes</text>
<text x="340" y="116" text-anchor="start">3 layers: 3 × 9 = 27 cubes</text>
<text x="340" y="146" text-anchor="start" font-weight="600">Volume = 3 × 3 × 3 = 3³ = 27</text>
<text x="340" y="178" text-anchor="start" font-size="12" fill="var(--dg-muted)">So ∛27 = 3: the cube root is</text>
<text x="340" y="194" text-anchor="start" font-size="12" fill="var(--dg-muted)">the edge of the cube.</text>
</svg>`,
    },
  ],
  "comparing-quantities": [
    {
      title: "Compound vs simple interest",
      caption: "On ₹ 10,000 at 10% a year, simple interest is the same ₹ 1,000 every year. Compound interest is charged on the new amount each year, so the second year earns ₹ 1,100 and the amount after 2 years is ₹ 12,100.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<text x="20" y="30" text-anchor="start" font-weight="600">Compound interest (interest on interest)</text>
<rect x="20" y="44" width="100" height="40" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="70" y="69" text-anchor="middle" font-weight="600">₹ 10,000</text>
<rect x="235" y="44" width="100" height="40" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="285" y="69" text-anchor="middle" font-weight="600">₹ 11,000</text>
<rect x="450" y="44" width="100" height="40" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="500" y="69" text-anchor="middle" font-weight="600">₹ 12,100</text>
<line x1="122" y1="64" x2="233" y2="64" marker-end="url(#ar-pb8-7)" stroke="var(--dg-accent)" stroke-width="1.5"/>
<line x1="337" y1="64" x2="448" y2="64" marker-end="url(#ar-pb8-7)" stroke="var(--dg-accent)" stroke-width="1.5"/>
<text x="177" y="52" text-anchor="middle" font-size="12">+ ₹ 1,000</text>
<text x="177" y="82" text-anchor="middle" font-size="12" fill="var(--dg-muted)">10% of 10,000</text>
<text x="392" y="52" text-anchor="middle" font-size="12">+ ₹ 1,100</text>
<text x="392" y="82" text-anchor="middle" font-size="12" fill="var(--dg-muted)">10% of 11,000</text>
<text x="20" y="130" text-anchor="start" font-weight="600">Simple interest (always on the principal)</text>
<rect x="20" y="144" width="100" height="40" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="70" y="169" text-anchor="middle" font-weight="600">₹ 10,000</text>
<rect x="235" y="144" width="100" height="40" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="285" y="169" text-anchor="middle" font-weight="600">₹ 11,000</text>
<rect x="450" y="144" width="100" height="40" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="500" y="169" text-anchor="middle" font-weight="600">₹ 12,000</text>
<line x1="122" y1="164" x2="233" y2="164" marker-end="url(#ar-pb8-7)" stroke="var(--dg-accent)" stroke-width="1.5"/>
<line x1="337" y1="164" x2="448" y2="164" marker-end="url(#ar-pb8-7)" stroke="var(--dg-accent)" stroke-width="1.5"/>
<text x="177" y="152" text-anchor="middle" font-size="12">+ ₹ 1,000</text>
<text x="177" y="182" text-anchor="middle" font-size="12" fill="var(--dg-muted)">10% of 10,000</text>
<text x="392" y="152" text-anchor="middle" font-size="12">+ ₹ 1,000</text>
<text x="392" y="182" text-anchor="middle" font-size="12" fill="var(--dg-muted)">10% of 10,000</text>
<text x="280" y="222" text-anchor="middle" font-size="12">Compound amount − simple amount = 12,100 − 12,000 = ₹ 100 (interest on the first year’s interest)</text>
<text x="280" y="242" text-anchor="middle" font-size="12" fill="var(--dg-muted)">A = P(1 + R/100)ⁿ  gives  10000 × 1.1 × 1.1 = ₹ 12,100</text>
</svg>`,
    },
  ],
  "algebraic-expressions-and-identities": [
    {
      title: "Area model of (a + b)²",
      caption: "A square of side (a + b) is cut into a square a², a square b² and two rectangles ab. Adding the four areas gives the identity (a + b)² = a² + 2ab + b².",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<rect x="60" y="40" width="130" height="130" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="190" y="40" width="80" height="130" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="60" y="170" width="130" height="80" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="190" y="170" width="80" height="80" fill="none" stroke="currentColor"/>
<text x="125" y="109" text-anchor="middle" font-weight="600">a²</text>
<text x="230" y="109" text-anchor="middle" font-weight="600">ab</text>
<text x="125" y="214" text-anchor="middle" font-weight="600">ab</text>
<text x="230" y="214" text-anchor="middle" font-weight="600">b²</text>
<text x="125" y="30" text-anchor="middle">a</text>
<text x="230" y="30" text-anchor="middle">b</text>
<text x="48" y="109" text-anchor="end">a</text>
<text x="48" y="214" text-anchor="end">b</text>
<text x="292" y="80" text-anchor="start" font-weight="600">(a + b)² = (a + b)(a + b)</text>
<text x="292" y="106" text-anchor="start">= a² + ab + ab + b²</text>
<text x="292" y="132" text-anchor="start" font-weight="600">= a² + 2ab + b²</text>
<text x="292" y="164" text-anchor="start" font-size="12" fill="var(--dg-muted)">Side of big square = a + b</text>
</svg>`,
    },
    {
      title: "Area model of a² − b²",
      caption: "Remove a small square b² from a square a². Cutting the L-shaped remainder and moving piece II beside piece I gives a rectangle (a + b) by (a − b), which proves a² − b² = (a + b)(a − b).",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<rect x="30" y="50" width="100" height="60" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="30" y="110" width="160" height="100" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="130" y="50" width="60" height="60" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
<text x="80" y="84" text-anchor="middle">II</text>
<text x="110" y="164" text-anchor="middle">I</text>
<text x="160" y="84" text-anchor="middle" font-size="12" fill="var(--dg-muted)">b²</text>
<text x="110" y="40" text-anchor="middle">a</text>
<text x="22" y="134" text-anchor="end">a</text>
<text x="110" y="230" text-anchor="middle" font-weight="600">a² − b² = I + II</text>
<rect x="300" y="110" width="160" height="100" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<rect x="460" y="110" width="60" height="100" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="380" y="164" text-anchor="middle">I</text>
<text x="490" y="164" text-anchor="middle">II</text>
<text x="410" y="100" text-anchor="middle">a + b</text>
<text x="292" y="164" text-anchor="end">a − b</text>
<text x="410" y="230" text-anchor="middle" font-weight="600">(a + b)(a − b) = I + II</text>
<text x="410" y="258" text-anchor="middle" font-size="12" fill="var(--dg-muted)">So  a² − b² = (a + b)(a − b)</text>
<text x="110" y="252" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(square a² with corner b² removed)</text>
</svg>`,
    },
  ],
  "mensuration": [
    {
      title: "Area of a trapezium",
      caption: "A trapezium has one pair of parallel sides a and b, with perpendicular distance h between them. Splitting it by a diagonal gives two triangles, so Area = ½ × a × h + ½ × b × h = ½ (a + b) h.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<polygon points="60,190 300,190 240,70 110,70" fill="var(--dg-fill)" stroke="currentColor"/>
<line x1="110" y1="70" x2="110" y2="190" stroke="var(--dg-accent)" stroke-dasharray="4 3" stroke-width="1.5"/>
<path d="M110 178H122V190" fill="none" stroke="currentColor"/>
<line x1="110" y1="70" x2="300" y2="190" stroke-dasharray="2 3" stroke="var(--dg-muted)"/>
<text x="60" y="208" text-anchor="end">P</text>
<text x="300" y="208" text-anchor="start">Q</text>
<text x="246" y="64" text-anchor="start">R</text>
<text x="104" y="64" text-anchor="end">S</text>
<text x="180" y="212" text-anchor="middle" font-weight="600">a</text>
<text x="175" y="58" text-anchor="middle" font-weight="600">b</text>
<text x="100" y="134" text-anchor="end" font-weight="600">h</text>
<text x="345" y="84" text-anchor="start" font-size="12" fill="var(--dg-muted)">Diagonal SQ splits it into</text>
<text x="345" y="102" text-anchor="start" font-size="12" fill="var(--dg-muted)">two triangles:</text>
<text x="345" y="128" text-anchor="start">Triangle PQS = ½ × a × h</text>
<text x="345" y="150" text-anchor="start">Triangle SQR = ½ × b × h</text>
<text x="345" y="182" text-anchor="start" font-weight="600">Area = ½ × (a + b) × h</text>
<text x="345" y="202" text-anchor="start" font-size="12" fill="var(--dg-muted)">a, b = parallel sides</text>
<text x="345" y="218" text-anchor="start" font-size="12" fill="var(--dg-muted)">h = distance between them</text>
</svg>`,
    },
    {
      title: "Cuboid and cylinder",
      caption: "The cuboid has length l, breadth b and height h; the cylinder has base radius r and height h. The lateral surface of a cylinder unrolls into a rectangle 2πr by h, so CSA = 2πrh.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<polygon points="40,100 90,60 220,60 170,100" fill="var(--dg-fill)" stroke="currentColor"/>
<polygon points="170,100 220,60 220,130 170,170" fill="var(--dg-fill)" stroke="currentColor"/>
<rect x="40" y="100" width="130" height="70" fill="var(--dg-fill)" stroke="currentColor"/>
<line x1="40" y1="170" x2="90" y2="130" stroke="currentColor" stroke-dasharray="4 3"/>
<line x1="90" y1="130" x2="220" y2="130" stroke="currentColor" stroke-dasharray="4 3"/>
<line x1="90" y1="60" x2="90" y2="130" stroke="currentColor" stroke-dasharray="4 3"/>
<text x="105" y="188" text-anchor="middle" font-weight="600">l</text>
<text x="28" y="138" text-anchor="end" font-weight="600">h</text>
<text x="207" y="164" text-anchor="start" font-weight="600">b</text>
<text x="130" y="46" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Cuboid</text>
<path d="M345 60V170A55 15 0 0 0 455 170V60" fill="var(--dg-fill)" stroke="currentColor"/>
<ellipse cx="400" cy="60" rx="55" ry="15" fill="var(--dg-fill)" stroke="currentColor"/>
<path d="M345 170A55 15 0 0 1 455 170" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
<line x1="400" y1="60" x2="455" y2="60" stroke="var(--dg-accent)" stroke-width="1.5"/>
<circle cx="400" cy="60" r="2.5" fill="currentColor"/>
<text x="427.5" y="54" text-anchor="middle" font-weight="600" font-size="12">r</text>
<line x1="477" y1="60" x2="477" y2="170" stroke="currentColor" marker-start="url(#ar-pb8-9)" marker-end="url(#ar-pb8-9)" stroke-width="1"/>
<text x="485" y="120" text-anchor="start" font-weight="600">h</text>
<text x="400" y="38" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Cylinder</text>
<text x="40" y="226" text-anchor="start">TSA = 2(lb + bh + hl)</text>
<text x="40" y="248" text-anchor="start">LSA = 2h(l + b)</text>
<text x="40" y="270" text-anchor="start">V = l × b × h</text>
<text x="310" y="226" text-anchor="start">CSA = 2πrh</text>
<text x="310" y="248" text-anchor="start">TSA = 2πr(r + h)</text>
<text x="310" y="270" text-anchor="start">V = πr²h</text>
</svg>`,
    },
  ],
  "direct-and-inverse-proportions": [
    {
      title: "Direct proportion graph",
      caption: "When two quantities are in direct proportion (y = kx), the graph is a straight line through the origin. Rice at ₹ 60 per kg: 1, 2, 3, 4, 5 kg cost ₹ 60, 120, 180, 240, 300.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<line x1="70" y1="230" x2="490" y2="230" stroke="currentColor" marker-end="url(#ar-pb8-11)"/>
<line x1="70" y1="230" x2="70" y2="35" stroke="currentColor" marker-end="url(#ar-pb8-11)"/>
<line x1="150" y1="230" x2="150" y2="235" stroke="currentColor"/>
<text x="150" y="250" text-anchor="middle">1</text>
<line x1="230" y1="230" x2="230" y2="235" stroke="currentColor"/>
<text x="230" y="250" text-anchor="middle">2</text>
<line x1="310" y1="230" x2="310" y2="235" stroke="currentColor"/>
<text x="310" y="250" text-anchor="middle">3</text>
<line x1="390" y1="230" x2="390" y2="235" stroke="currentColor"/>
<text x="390" y="250" text-anchor="middle">4</text>
<line x1="470" y1="230" x2="470" y2="235" stroke="currentColor"/>
<text x="470" y="250" text-anchor="middle">5</text>
<line x1="65" y1="194" x2="70" y2="194" stroke="currentColor"/>
<text x="60" y="198" text-anchor="end">60</text>
<line x1="65" y1="158" x2="70" y2="158" stroke="currentColor"/>
<text x="60" y="162" text-anchor="end">120</text>
<line x1="65" y1="122" x2="70" y2="122" stroke="currentColor"/>
<text x="60" y="126" text-anchor="end">180</text>
<line x1="65" y1="86" x2="70" y2="86" stroke="currentColor"/>
<text x="60" y="90" text-anchor="end">240</text>
<line x1="65" y1="50" x2="70" y2="50" stroke="currentColor"/>
<text x="60" y="54" text-anchor="end">300</text>
<text x="62" y="246" text-anchor="end">0</text>
<line x1="70" y1="230" x2="470" y2="50" stroke="var(--dg-accent)" stroke-width="2"/>
<circle cx="150" cy="194" r="4" fill="var(--dg-accent)"/>
<circle cx="230" cy="158" r="4" fill="var(--dg-accent)"/>
<circle cx="310" cy="122" r="4" fill="var(--dg-accent)"/>
<circle cx="390" cy="86" r="4" fill="var(--dg-accent)"/>
<circle cx="470" cy="50" r="4" fill="var(--dg-accent)"/>
<text x="222" y="150" text-anchor="end">(2, 120)</text>
<text x="382" y="78" text-anchor="end">(4, 240)</text>
<text x="280" y="276" text-anchor="middle">Weight of rice (kg)</text>
<text x="70" y="24" text-anchor="middle">Cost (₹)</text>
<text x="300" y="200" text-anchor="start">Cost ÷ weight = 60 every time</text>
<text x="300" y="220" text-anchor="start" font-size="12" fill="var(--dg-muted)">Straight line through the origin</text>
</svg>`,
    },
    {
      title: "Inverse proportion graph",
      caption: "In inverse proportion (xy = k) the product is constant, so the graph is a curve that falls as x increases and never meets the axes. Here workers × days = 72, e.g. 6 workers take 12 days.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<line x1="70" y1="230" x2="500" y2="230" stroke="currentColor" marker-end="url(#ar-pb8-12)"/>
<line x1="70" y1="230" x2="70" y2="35" stroke="currentColor" marker-end="url(#ar-pb8-12)"/>
<line x1="140" y1="230" x2="140" y2="235" stroke="currentColor"/>
<text x="140" y="250" text-anchor="middle">2</text>
<line x1="210" y1="230" x2="210" y2="235" stroke="currentColor"/>
<text x="210" y="250" text-anchor="middle">4</text>
<line x1="280" y1="230" x2="280" y2="235" stroke="currentColor"/>
<text x="280" y="250" text-anchor="middle">6</text>
<line x1="350" y1="230" x2="350" y2="235" stroke="currentColor"/>
<text x="350" y="250" text-anchor="middle">8</text>
<line x1="420" y1="230" x2="420" y2="235" stroke="currentColor"/>
<text x="420" y="250" text-anchor="middle">10</text>
<line x1="490" y1="230" x2="490" y2="235" stroke="currentColor"/>
<text x="490" y="250" text-anchor="middle">12</text>
<line x1="65" y1="170" x2="70" y2="170" stroke="currentColor"/>
<text x="60" y="174" text-anchor="end">12</text>
<line x1="65" y1="110" x2="70" y2="110" stroke="currentColor"/>
<text x="60" y="114" text-anchor="end">24</text>
<line x1="65" y1="50" x2="70" y2="50" stroke="currentColor"/>
<text x="60" y="54" text-anchor="end">36</text>
<text x="62" y="246" text-anchor="end">0</text>
<path d="M140 50L148.8 70L157.5 86L166.3 99.1L175 110L183.8 119.2L192.5 127.1L201.3 134L210 140L218.8 145.3L227.5 150L236.3 154.2L245 158L253.8 161.4L262.5 164.5L271.3 167.4L280 170L288.8 172.4L297.5 174.6L306.3 176.7L315 178.6L323.8 180.3L332.5 182L341.3 183.5L350 185L358.8 186.4L367.5 187.6L376.3 188.9L385 190L393.8 191.1L402.5 192.1L411.3 193.1L420 194L428.8 194.9L437.5 195.7L446.3 196.5L455 197.3L463.8 198L472.5 198.7L481.3 199.4L490 200" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
<circle cx="140" cy="50" r="4" fill="var(--dg-accent)"/>
<circle cx="175" cy="110" r="4" fill="var(--dg-accent)"/>
<circle cx="210" cy="140" r="4" fill="var(--dg-accent)"/>
<circle cx="280" cy="170" r="4" fill="var(--dg-accent)"/>
<circle cx="385" cy="190" r="4" fill="var(--dg-accent)"/>
<circle cx="490" cy="200" r="4" fill="var(--dg-accent)"/>
<text x="290" y="164" text-anchor="start">(6, 12)</text>
<text x="185" y="106" text-anchor="start">(3, 24)</text>
<text x="285" y="276" text-anchor="middle">Number of workers</text>
<text x="70" y="24" text-anchor="middle">Days to finish the job</text>
<text x="320" y="110" text-anchor="start">Workers × days = 72 always</text>
<text x="320" y="130" text-anchor="start" font-size="12" fill="var(--dg-muted)">As one increases the other</text>
<text x="320" y="146" text-anchor="start" font-size="12" fill="var(--dg-muted)">decreases: a curve, not a line.</text>
</svg>`,
    },
  ],
  "factorisation": [
    {
      title: "Factorising x² + 5x + 6 with tiles",
      caption: "Arrange one x² tile, five x tiles and six unit tiles into a rectangle. Its sides are the factors: width x + 3 and height x + 2, so x² + 5x + 6 = (x + 2)(x + 3).",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<rect x="60" y="40" width="110" height="110" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor"/>
<text x="115" y="100" text-anchor="middle" font-weight="600">x²</text>
<rect x="170" y="40" width="30" height="110" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="185" y="99" text-anchor="middle" font-size="12">x</text>
<rect x="200" y="40" width="30" height="110" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="215" y="99" text-anchor="middle" font-size="12">x</text>
<rect x="230" y="40" width="30" height="110" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="245" y="99" text-anchor="middle" font-size="12">x</text>
<rect x="60" y="150" width="110" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="115" y="169" text-anchor="middle" font-size="12">x</text>
<rect x="60" y="180" width="110" height="30" fill="var(--dg-fill)" stroke="currentColor"/>
<text x="115" y="199" text-anchor="middle" font-size="12">x</text>
<rect x="170" y="150" width="30" height="30" fill="none" stroke="currentColor"/>
<text x="185" y="169" text-anchor="middle" font-size="12">1</text>
<rect x="170" y="180" width="30" height="30" fill="none" stroke="currentColor"/>
<text x="185" y="199" text-anchor="middle" font-size="12">1</text>
<rect x="200" y="150" width="30" height="30" fill="none" stroke="currentColor"/>
<text x="215" y="169" text-anchor="middle" font-size="12">1</text>
<rect x="200" y="180" width="30" height="30" fill="none" stroke="currentColor"/>
<text x="215" y="199" text-anchor="middle" font-size="12">1</text>
<rect x="230" y="150" width="30" height="30" fill="none" stroke="currentColor"/>
<text x="245" y="169" text-anchor="middle" font-size="12">1</text>
<rect x="230" y="180" width="30" height="30" fill="none" stroke="currentColor"/>
<text x="245" y="199" text-anchor="middle" font-size="12">1</text>
<text x="115" y="30" text-anchor="middle">x</text>
<text x="185" y="30" text-anchor="middle">1</text>
<text x="215" y="30" text-anchor="middle">1</text>
<text x="245" y="30" text-anchor="middle">1</text>
<text x="50" y="99" text-anchor="end">x</text>
<text x="50" y="169" text-anchor="end">1</text>
<text x="50" y="199" text-anchor="end">1</text>
<text x="160" y="232" text-anchor="middle" font-size="12" fill="var(--dg-muted)">width = x + 3,  height = x + 2</text>
<text x="300" y="80" text-anchor="start" font-size="12" fill="var(--dg-muted)">Area by tiles:</text>
<text x="300" y="102" text-anchor="start" font-weight="600">x² + 5x + 6</text>
<text x="300" y="134" text-anchor="start" font-size="12" fill="var(--dg-muted)">Area as length × breadth:</text>
<text x="300" y="156" text-anchor="start" font-weight="600">(x + 3)(x + 2)</text>
<text x="300" y="188" text-anchor="start">So x² + 5x + 6</text>
<text x="300" y="208" text-anchor="start">= (x + 2)(x + 3)</text>
</svg>`,
    },
  ],
  "introduction-to-graphs": [
    {
      title: "Distance–time graph",
      caption: "A car moving at a steady 40 km/h covers 40, 80, 120 and 160 km in 1, 2, 3 and 4 hours. The points lie on a straight line through the origin, and the dashed lines show that 100 km takes 2.5 hours.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<line x1="70" y1="230" x2="490" y2="230" stroke="currentColor" marker-end="url(#ar-pb8-13)"/>
<line x1="70" y1="230" x2="70" y2="25" stroke="currentColor" marker-end="url(#ar-pb8-13)"/>
<line x1="170" y1="230" x2="170" y2="235" stroke="currentColor"/>
<text x="170" y="250" text-anchor="middle">1</text>
<line x1="270" y1="230" x2="270" y2="235" stroke="currentColor"/>
<text x="270" y="250" text-anchor="middle">2</text>
<line x1="370" y1="230" x2="370" y2="235" stroke="currentColor"/>
<text x="370" y="250" text-anchor="middle">3</text>
<line x1="470" y1="230" x2="470" y2="235" stroke="currentColor"/>
<text x="470" y="250" text-anchor="middle">4</text>
<line x1="65" y1="180" x2="70" y2="180" stroke="currentColor"/>
<text x="60" y="184" text-anchor="end">40</text>
<line x1="65" y1="130" x2="70" y2="130" stroke="currentColor"/>
<text x="60" y="134" text-anchor="end">80</text>
<line x1="65" y1="80" x2="70" y2="80" stroke="currentColor"/>
<text x="60" y="84" text-anchor="end">120</text>
<line x1="65" y1="30" x2="70" y2="30" stroke="currentColor"/>
<text x="60" y="34" text-anchor="end">160</text>
<text x="62" y="246" text-anchor="end">0</text>
<line x1="70" y1="230" x2="470" y2="30" stroke="var(--dg-accent)" stroke-width="2"/>
<circle cx="170" cy="180" r="4" fill="var(--dg-accent)"/>
<circle cx="270" cy="130" r="4" fill="var(--dg-accent)"/>
<circle cx="370" cy="80" r="4" fill="var(--dg-accent)"/>
<circle cx="470" cy="30" r="4" fill="var(--dg-accent)"/>
<line x1="70" y1="105" x2="320" y2="105" stroke="var(--dg-accent)" stroke-dasharray="4 3"/>
<line x1="320" y1="105" x2="320" y2="230" stroke="var(--dg-accent)" stroke-dasharray="4 3"/>
<text x="100" y="99" text-anchor="start" font-size="12">100 km</text>
<text x="328" y="222" text-anchor="start" font-size="12">2.5 h</text>
<text x="362" y="70" text-anchor="end">(3, 120)</text>
<text x="280" y="276" text-anchor="middle">Time (hours)</text>
<text x="70" y="16" text-anchor="middle">Distance (km)</text>
<text x="120" y="60" text-anchor="start" font-weight="600">Speed = 40 km/h:</text>
<text x="120" y="80" text-anchor="start" font-size="12" fill="var(--dg-muted)">a straight line through the origin</text>
</svg>`,
    },
    {
      title: "Coordinate plane with quadrants",
      caption: "The x-axis and y-axis meet at the origin O(0, 0) and divide the plane into four quadrants, numbered anticlockwise. A point (x, y) is plotted by moving x units along the x-axis and y units parallel to the y-axis.",
      svg: `<svg viewBox="0 -14 560 312" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb8-14" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<line x1="44.4" y1="150" x2="340.8" y2="150" stroke="currentColor" marker-end="url(#ar-pb8-14)"/>
<line x1="190" y1="295.6" x2="190" y2="-0.8" stroke="currentColor" marker-end="url(#ar-pb8-14)"/>
<line x1="60" y1="147" x2="60" y2="153" stroke="currentColor"/>
<line x1="187" y1="280" x2="193" y2="280" stroke="currentColor"/>
<text x="60" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">−5</text>
<text x="183" y="284" text-anchor="end" font-size="11" fill="var(--dg-muted)">−5</text>
<line x1="86" y1="147" x2="86" y2="153" stroke="currentColor"/>
<line x1="187" y1="254" x2="193" y2="254" stroke="currentColor"/>
<text x="86" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">−4</text>
<text x="183" y="258" text-anchor="end" font-size="11" fill="var(--dg-muted)">−4</text>
<line x1="112" y1="147" x2="112" y2="153" stroke="currentColor"/>
<line x1="187" y1="228" x2="193" y2="228" stroke="currentColor"/>
<text x="112" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">−3</text>
<text x="183" y="232" text-anchor="end" font-size="11" fill="var(--dg-muted)">−3</text>
<line x1="138" y1="147" x2="138" y2="153" stroke="currentColor"/>
<line x1="187" y1="202" x2="193" y2="202" stroke="currentColor"/>
<text x="138" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">−2</text>
<text x="183" y="206" text-anchor="end" font-size="11" fill="var(--dg-muted)">−2</text>
<line x1="164" y1="147" x2="164" y2="153" stroke="currentColor"/>
<line x1="187" y1="176" x2="193" y2="176" stroke="currentColor"/>
<text x="164" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">−1</text>
<text x="183" y="180" text-anchor="end" font-size="11" fill="var(--dg-muted)">−1</text>
<line x1="216" y1="147" x2="216" y2="153" stroke="currentColor"/>
<line x1="187" y1="124" x2="193" y2="124" stroke="currentColor"/>
<text x="216" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">1</text>
<text x="183" y="128" text-anchor="end" font-size="11" fill="var(--dg-muted)">1</text>
<line x1="242" y1="147" x2="242" y2="153" stroke="currentColor"/>
<line x1="187" y1="98" x2="193" y2="98" stroke="currentColor"/>
<text x="242" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">2</text>
<text x="183" y="102" text-anchor="end" font-size="11" fill="var(--dg-muted)">2</text>
<line x1="268" y1="147" x2="268" y2="153" stroke="currentColor"/>
<line x1="187" y1="72" x2="193" y2="72" stroke="currentColor"/>
<text x="268" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">3</text>
<text x="183" y="76" text-anchor="end" font-size="11" fill="var(--dg-muted)">3</text>
<line x1="294" y1="147" x2="294" y2="153" stroke="currentColor"/>
<line x1="187" y1="46" x2="193" y2="46" stroke="currentColor"/>
<text x="294" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">4</text>
<text x="183" y="50" text-anchor="end" font-size="11" fill="var(--dg-muted)">4</text>
<line x1="320" y1="147" x2="320" y2="153" stroke="currentColor"/>
<line x1="187" y1="20" x2="193" y2="20" stroke="currentColor"/>
<text x="320" y="166" text-anchor="middle" font-size="11" fill="var(--dg-muted)">5</text>
<text x="183" y="24" text-anchor="end" font-size="11" fill="var(--dg-muted)">5</text>
<text x="196" y="164" text-anchor="start" font-weight="600">O</text>
<text x="340.8" y="142" text-anchor="middle" font-weight="600">x</text>
<text x="200" y="3.2" text-anchor="start" font-weight="600">y</text>
<circle cx="268" cy="98" r="4" fill="var(--dg-accent)"/>
<text x="276" y="91" text-anchor="start" font-weight="600">P(3, 2)</text>
<circle cx="86" cy="72" r="4" fill="var(--dg-accent)"/>
<text x="78" y="65" text-anchor="end" font-weight="600">Q(−4, 3)</text>
<circle cx="112" cy="202" r="4" fill="var(--dg-accent)"/>
<text x="104" y="195" text-anchor="end" font-weight="600">R(−3, −2)</text>
<circle cx="242" cy="228" r="4" fill="var(--dg-accent)"/>
<text x="250" y="221" text-anchor="start" font-weight="600">S(2, −3)</text>
<text x="317.4" y="33" text-anchor="middle" font-size="14" fill="var(--dg-muted)" font-weight="600">I</text>
<text x="62.6" y="22.6" text-anchor="middle" font-size="14" fill="var(--dg-muted)" font-weight="600">II</text>
<text x="67.8" y="269.6" text-anchor="middle" font-size="14" fill="var(--dg-muted)" font-weight="600">III</text>
<text x="312.2" y="269.6" text-anchor="middle" font-size="14" fill="var(--dg-muted)" font-weight="600">IV</text>
<text x="380" y="60" text-anchor="start" font-weight="600">Quadrants</text>
<text x="380" y="84" text-anchor="start">I:  (+, +)</text>
<text x="380" y="104" text-anchor="start">II:  (−, +)</text>
<text x="380" y="124" text-anchor="start">III:  (−, −)</text>
<text x="380" y="144" text-anchor="start">IV:  (+, −)</text>
<text x="380" y="180" text-anchor="start" font-size="12" fill="var(--dg-muted)">Point on x-axis: (a, 0)</text>
<text x="380" y="198" text-anchor="start" font-size="12" fill="var(--dg-muted)">Point on y-axis: (0, b)</text>
<text x="380" y="216" text-anchor="start" font-size="12" fill="var(--dg-muted)">Origin: O(0, 0)</text>
</svg>`,
    },
  ],
});
