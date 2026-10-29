// Class 7 Maths (PSEB, earlier NCERT book) diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(7, "mathspb", {
  "integers": [
    {
      title: "Adding integers on the number line",
      caption: "Numbers grow towards the **right**. Adding a **negative** integer moves left; adding a **positive** integer moves right. So (−4) + (−6) = −10 and (−9) + 5 = −4.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb7i-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="22" y="26" font-weight="bold">(−4) + (−6) = −10</text><line x1="22" y1="100" x2="540" y2="100" stroke="currentColor" stroke-width="1.8"/><line x1="40" y1="95" x2="40" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="40" y="122" text-anchor="middle" font-size="12">−10</text><line x1="70" y1="95" x2="70" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="70" y="122" text-anchor="middle" font-size="12">−9</text><line x1="100" y1="95" x2="100" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="100" y="122" text-anchor="middle" font-size="12">−8</text><line x1="130" y1="95" x2="130" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="130" y="122" text-anchor="middle" font-size="12">−7</text><line x1="160" y1="95" x2="160" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="160" y="122" text-anchor="middle" font-size="12">−6</text><line x1="190" y1="95" x2="190" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="190" y="122" text-anchor="middle" font-size="12">−5</text><line x1="220" y1="95" x2="220" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="220" y="122" text-anchor="middle" font-size="12">−4</text><line x1="250" y1="95" x2="250" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="250" y="122" text-anchor="middle" font-size="12">−3</text><line x1="280" y1="95" x2="280" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="280" y="122" text-anchor="middle" font-size="12">−2</text><line x1="310" y1="95" x2="310" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="310" y="122" text-anchor="middle" font-size="12">−1</text><line x1="340" y1="95" x2="340" y2="105" stroke="currentColor" stroke-width="2.4"/><text x="340" y="122" text-anchor="middle" font-size="12">0</text><line x1="370" y1="95" x2="370" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="370" y="122" text-anchor="middle" font-size="12">1</text><line x1="400" y1="95" x2="400" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="400" y="122" text-anchor="middle" font-size="12">2</text><line x1="430" y1="95" x2="430" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="430" y="122" text-anchor="middle" font-size="12">3</text><line x1="460" y1="95" x2="460" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="460" y="122" text-anchor="middle" font-size="12">4</text><line x1="490" y1="95" x2="490" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="490" y="122" text-anchor="middle" font-size="12">5</text><line x1="520" y1="95" x2="520" y2="105" stroke="currentColor" stroke-width="1.3"/><text x="520" y="122" text-anchor="middle" font-size="12">6</text><path d="M220 94 Q130 38 40 94" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-pb7i-1)"/><circle cx="220" cy="100" r="4.5" fill="var(--dg-accent)"/><circle cx="40" cy="100" r="4.5" fill="var(--dg-accent)"/><text x="130" y="56" text-anchor="middle" font-weight="bold">6 units left</text>
  <text x="22" y="170" font-weight="bold">(−9) + 5 = −4</text><line x1="22" y1="244" x2="540" y2="244" stroke="currentColor" stroke-width="1.8"/><line x1="40" y1="239" x2="40" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="40" y="266" text-anchor="middle" font-size="12">−10</text><line x1="70" y1="239" x2="70" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="70" y="266" text-anchor="middle" font-size="12">−9</text><line x1="100" y1="239" x2="100" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="100" y="266" text-anchor="middle" font-size="12">−8</text><line x1="130" y1="239" x2="130" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="130" y="266" text-anchor="middle" font-size="12">−7</text><line x1="160" y1="239" x2="160" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="160" y="266" text-anchor="middle" font-size="12">−6</text><line x1="190" y1="239" x2="190" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="190" y="266" text-anchor="middle" font-size="12">−5</text><line x1="220" y1="239" x2="220" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="220" y="266" text-anchor="middle" font-size="12">−4</text><line x1="250" y1="239" x2="250" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="250" y="266" text-anchor="middle" font-size="12">−3</text><line x1="280" y1="239" x2="280" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="280" y="266" text-anchor="middle" font-size="12">−2</text><line x1="310" y1="239" x2="310" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="310" y="266" text-anchor="middle" font-size="12">−1</text><line x1="340" y1="239" x2="340" y2="249" stroke="currentColor" stroke-width="2.4"/><text x="340" y="266" text-anchor="middle" font-size="12">0</text><line x1="370" y1="239" x2="370" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="370" y="266" text-anchor="middle" font-size="12">1</text><line x1="400" y1="239" x2="400" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="400" y="266" text-anchor="middle" font-size="12">2</text><line x1="430" y1="239" x2="430" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="430" y="266" text-anchor="middle" font-size="12">3</text><line x1="460" y1="239" x2="460" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="460" y="266" text-anchor="middle" font-size="12">4</text><line x1="490" y1="239" x2="490" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="490" y="266" text-anchor="middle" font-size="12">5</text><line x1="520" y1="239" x2="520" y2="249" stroke="currentColor" stroke-width="1.3"/><text x="520" y="266" text-anchor="middle" font-size="12">6</text><path d="M70 238 Q145 182 220 238" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-pb7i-1)"/><circle cx="70" cy="244" r="4.5" fill="var(--dg-accent)"/><circle cx="220" cy="244" r="4.5" fill="var(--dg-accent)"/><text x="145" y="200" text-anchor="middle" font-weight="bold">5 units right</text>
  <text x="400" y="26" font-size="12" fill="var(--dg-muted)">dots: start and end points</text>
</svg>`,
    },
    {
      title: "Sign rule for products and quotients",
      caption: "**Same signs give a positive result and different signs give a negative result.** (−3) × (−5) = 15 but (−3) × 5 = −15; (−48) ÷ (−6) = 8 while (−48) ÷ 6 = −8. Any number × 0 = 0; division by 0 is not defined.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="210" y="40" width="140" height="56" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="350" y="40" width="140" height="56" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="210" y="96" width="140" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="350" y="96" width="140" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="70" y="40" width="140" height="56" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="70" y="96" width="140" height="56" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="70" y="152" width="140" height="56" fill="var(--dg-fill)" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="210" y="152" width="140" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="350" y="152" width="140" height="56" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="140" y="73" text-anchor="middle" font-size="18" font-weight="600">×</text>
  <text x="280" y="73" text-anchor="middle" font-weight="600">positive (+)</text>
  <text x="420" y="73" text-anchor="middle" font-weight="600">negative (−)</text>
  <text x="140" y="129" text-anchor="middle" font-weight="600">positive (+)</text>
  <text x="140" y="185" text-anchor="middle" font-weight="600">negative (−)</text>
  <text x="280" y="131" text-anchor="middle" font-size="24" font-weight="600" fill="var(--dg-accent)">+</text>
  <text x="420" y="131" text-anchor="middle" font-size="24" font-weight="600" fill="var(--dg-accent)">−</text>
  <text x="280" y="187" text-anchor="middle" font-size="24" font-weight="600" fill="var(--dg-accent)">−</text>
  <text x="420" y="187" text-anchor="middle" font-size="24" font-weight="600" fill="var(--dg-accent)">+</text>
  <text x="280" y="238" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Same signs give a positive result; different signs give a negative result.</text>
  <text x="280" y="258" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Division follows the same rule: (−12) ÷ 3 = −4 and (−12) ÷ (−3) = 4.</text>
</svg>`,
    },
  ],
  "fractions-and-decimals": [
    {
      title: "Multiplying fractions: 2/3 × 4/5",
      caption: "Split a square into **5 columns and 3 rows** (15 equal parts). Shade **4 of 5 columns** (4/5) and **2 of 3 rows** (2/3): the overlap has **8 parts out of 15**, so 2/3 × 4/5 = 8/15.",
      svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <rect x="90" y="50" width="160" height="120" fill="var(--dg-fill)" opacity="0.6"/><rect x="90" y="50" width="200" height="80" fill="var(--dg-fill)" opacity="0.6"/>
  <rect x="90" y="50" width="160" height="80" fill="var(--dg-accent)" opacity="0.35"/>
  <g stroke="currentColor" stroke-width="1.3" fill="none"><line x1="90" y1="50" x2="90" y2="170"/><line x1="130" y1="50" x2="130" y2="170"/><line x1="170" y1="50" x2="170" y2="170"/><line x1="210" y1="50" x2="210" y2="170"/><line x1="250" y1="50" x2="250" y2="170"/><line x1="290" y1="50" x2="290" y2="170"/><line x1="90" y1="50" x2="290" y2="50"/><line x1="90" y1="90" x2="290" y2="90"/><line x1="90" y1="130" x2="290" y2="130"/><line x1="90" y1="170" x2="290" y2="170"/></g><rect x="90" y="50" width="200" height="120" fill="none" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5"><line x1="90" y1="38" x2="250" y2="38"/><line x1="90" y1="34" x2="90" y2="42"/><line x1="250" y1="34" x2="250" y2="42"/><line x1="78" y1="50" x2="78" y2="130"/><line x1="74" y1="50" x2="82" y2="50"/><line x1="74" y1="130" x2="82" y2="130"/></g>
  <text x="170" y="28" text-anchor="middle" font-weight="bold">4/5 (4 columns)</text><text x="68" y="94" text-anchor="end" font-weight="bold">2/3</text><text x="68" y="110" text-anchor="end" font-size="11">(2 rows)</text>
  <text x="330" y="80" font-weight="bold">Overlap: 8 of 15 parts</text><text x="330" y="106">2/3 × 4/5 = (2 × 4)/(3 × 5)</text><text x="330" y="128">= 8/15</text>
  <text x="330" y="156" font-size="12" fill="var(--dg-muted)">numerator × numerator,</text><text x="330" y="172" font-size="12" fill="var(--dg-muted)">denominator × denominator</text>
</svg>`,
    },
    {
      title: "Multiplying decimals: 0.3 × 0.4",
      caption: "On a **10 × 10 grid** of 100 small squares, 0.3 is **3 columns** and 0.4 is **4 rows**. The overlap is 3 × 4 = **12 small squares** out of 100, so 0.3 × 0.4 = **0.12**.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <rect x="60" y="30" width="60" height="200" fill="var(--dg-fill)" opacity="0.6"/><rect x="60" y="30" width="200" height="80" fill="var(--dg-fill)" opacity="0.6"/><rect x="60" y="30" width="60" height="80" fill="var(--dg-accent)" opacity="0.4"/>
  <g stroke="currentColor" stroke-width="0.8" fill="none"><line x1="60" y1="30" x2="60" y2="230"/><line x1="80" y1="30" x2="80" y2="230"/><line x1="100" y1="30" x2="100" y2="230"/><line x1="120" y1="30" x2="120" y2="230"/><line x1="140" y1="30" x2="140" y2="230"/><line x1="160" y1="30" x2="160" y2="230"/><line x1="180" y1="30" x2="180" y2="230"/><line x1="200" y1="30" x2="200" y2="230"/><line x1="220" y1="30" x2="220" y2="230"/><line x1="240" y1="30" x2="240" y2="230"/><line x1="260" y1="30" x2="260" y2="230"/><line x1="60" y1="30" x2="260" y2="30"/><line x1="60" y1="50" x2="260" y2="50"/><line x1="60" y1="70" x2="260" y2="70"/><line x1="60" y1="90" x2="260" y2="90"/><line x1="60" y1="110" x2="260" y2="110"/><line x1="60" y1="130" x2="260" y2="130"/><line x1="60" y1="150" x2="260" y2="150"/><line x1="60" y1="170" x2="260" y2="170"/><line x1="60" y1="190" x2="260" y2="190"/><line x1="60" y1="210" x2="260" y2="210"/><line x1="60" y1="230" x2="260" y2="230"/></g><rect x="60" y="30" width="200" height="200" fill="none" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1.5"><line x1="60" y1="20" x2="120" y2="20"/><line x1="60" y1="16" x2="60" y2="24"/><line x1="120" y1="16" x2="120" y2="24"/><line x1="48" y1="30" x2="48" y2="110"/><line x1="44" y1="30" x2="52" y2="30"/><line x1="44" y1="110" x2="52" y2="110"/></g>
  <text x="90" y="14" text-anchor="middle" font-weight="bold">0.3</text><text x="40" y="74" text-anchor="end" font-weight="bold">0.4</text>
  <text x="300" y="70" font-weight="bold">Overlap = 12 small squares</text><text x="300" y="96">12 out of 100 = 0.12</text>
  <text x="300" y="130" font-size="12" fill="var(--dg-muted)">Rule: multiply 3 × 4 = 12,</text><text x="300" y="146" font-size="12" fill="var(--dg-muted)">then put 1 + 1 = 2 decimal places:</text><text x="300" y="168" font-weight="bold">0.3 × 0.4 = 0.12</text>
</svg>`,
    },
  ],
  "data-handling": [
    {
      title: "Bar graph: favourite sport",
      caption: "In a **bar graph** the bars have equal width and their heights are proportional to the values. Check the **title**, the **scale** on the axis and what each **bar** stands for. Example data for 40 students.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <text x="285" y="16" text-anchor="middle" font-weight="bold">Favourite sport of 40 students</text><line x1="70" y1="230" x2="500" y2="230" stroke="var(--dg-muted)" stroke-dasharray="3 4" stroke-width="1"/><text x="62" y="234" text-anchor="end" font-size="12">0</text><line x1="70" y1="180" x2="500" y2="180" stroke="var(--dg-muted)" stroke-dasharray="3 4" stroke-width="1"/><text x="62" y="184" text-anchor="end" font-size="12">4</text><line x1="70" y1="130" x2="500" y2="130" stroke="var(--dg-muted)" stroke-dasharray="3 4" stroke-width="1"/><text x="62" y="134" text-anchor="end" font-size="12">8</text><line x1="70" y1="80" x2="500" y2="80" stroke="var(--dg-muted)" stroke-dasharray="3 4" stroke-width="1"/><text x="62" y="84" text-anchor="end" font-size="12">12</text><line x1="70" y1="30" x2="500" y2="30" stroke="var(--dg-muted)" stroke-dasharray="3 4" stroke-width="1"/><text x="62" y="34" text-anchor="end" font-size="12">16</text><rect x="95" y="55" width="50" height="175" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="120" y="49" text-anchor="middle" font-size="12">14</text><text x="120" y="248" text-anchor="middle" font-size="12">Cricket</text><rect x="175" y="105" width="50" height="125" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="200" y="99" text-anchor="middle" font-size="12">10</text><text x="200" y="248" text-anchor="middle" font-size="12">Football</text><rect x="255" y="130" width="50" height="100" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="280" y="124" text-anchor="middle" font-size="12">8</text><text x="280" y="248" text-anchor="middle" font-size="12">Hockey</text><rect x="335" y="155" width="50" height="75" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="360" y="149" text-anchor="middle" font-size="12">6</text><text x="360" y="248" text-anchor="middle" font-size="12">Kabaddi</text><rect x="415" y="205" width="50" height="25" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="440" y="199" text-anchor="middle" font-size="12">2</text><text x="440" y="248" text-anchor="middle" font-size="12">Tennis</text>
  <g stroke="currentColor" stroke-width="1.8"><line x1="70" y1="230" x2="500" y2="230"/><line x1="70" y1="230" x2="70" y2="28"/></g>
  <text x="285" y="278" text-anchor="middle" font-size="12">Sport</text><text x="18" y="130" text-anchor="middle" font-size="12" transform="rotate(-90 18 130)">Number of students</text>
</svg>`,
    },
    {
      title: "Probability scale",
      caption: "**Probability** lies between **0 and 1**: an impossible event has probability 0, a certain event has probability 1. For a fair coin, P(head) = 1/2 = favourable outcomes ÷ total equally likely outcomes.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb7d-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="60" y1="100" x2="500" y2="100" stroke="currentColor" stroke-width="2.4"/>
  <g stroke="currentColor" stroke-width="2"><line x1="60" y1="90" x2="60" y2="110"/><line x1="280" y1="90" x2="280" y2="110"/><line x1="500" y1="90" x2="500" y2="110"/></g>
  <g fill="var(--dg-accent)"><circle cx="60" cy="100" r="5"/><circle cx="280" cy="100" r="5"/><circle cx="500" cy="100" r="5"/></g>
  <g text-anchor="middle"><text x="60" y="128" font-weight="bold">0</text><text x="280" y="128" font-weight="bold">1/2</text><text x="500" y="128" font-weight="bold">1</text>
   <text x="60" y="76" font-size="12">Impossible event</text><text x="280" y="76" font-size="12">Fair coin: P(head)</text><text x="500" y="76" font-size="12">Certain event</text></g>
  <line x1="120" y1="170" x2="440" y2="170" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-pb7d-1)"/>
  <text x="280" y="196" text-anchor="middle" font-size="12" fill="var(--dg-muted)">more likely</text><text x="280" y="30" text-anchor="middle" font-weight="bold">0 ≤ P(event) ≤ 1</text>
</svg>`,
    },
  ],
  "simple-equations": [
    {
      title: "An equation as a balance: x + 5 = 12",
      caption: "The **LHS and RHS must weigh the same**. Taking **5 off both pans** keeps the balance, so **x = 7**. Whatever you do to one side, do to the other.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <line x1="95" y1="40" x2="325" y2="40" stroke="currentColor" stroke-width="2.6"/><line x1="210" y1="40" x2="210" y2="132" stroke="currentColor" stroke-width="2.6"/><line x1="180" y1="132" x2="240" y2="132" stroke="currentColor" stroke-width="2.6"/><circle cx="210" cy="40" r="4" fill="currentColor"/>
 <path d="M95 40 L25 110 M95 40 L165 110" stroke="currentColor" stroke-width="1" fill="none"/><line x1="20" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="2.6"/>
 <path d="M325 40 L255 110 M325 40 L395 110" stroke="currentColor" stroke-width="1" fill="none"/><line x1="250" y1="110" x2="400" y2="110" stroke="currentColor" stroke-width="2.6"/><rect x="60" y="84" width="24" height="24" rx="2" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="72" y="101" text-anchor="middle">x</text><rect x="90" y="82" width="36" height="26" rx="3" fill="var(--dg-accent)" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="108" y="100" text-anchor="middle" font-weight="bold">5</text><rect x="300" y="82" width="50" height="26" rx="3" fill="var(--dg-accent)" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="325" y="100" text-anchor="middle" font-weight="bold">12</text>
  <text x="210" y="22" text-anchor="middle" font-weight="bold">x + 5 = 12</text>
  <line x1="95" y1="176" x2="325" y2="176" stroke="currentColor" stroke-width="2.6"/><line x1="210" y1="176" x2="210" y2="268" stroke="currentColor" stroke-width="2.6"/><line x1="180" y1="268" x2="240" y2="268" stroke="currentColor" stroke-width="2.6"/><circle cx="210" cy="176" r="4" fill="currentColor"/>
 <path d="M95 176 L25 246 M95 176 L165 246" stroke="currentColor" stroke-width="1" fill="none"/><line x1="20" y1="246" x2="170" y2="246" stroke="currentColor" stroke-width="2.6"/>
 <path d="M325 176 L255 246 M325 176 L395 246" stroke="currentColor" stroke-width="1" fill="none"/><line x1="250" y1="246" x2="400" y2="246" stroke="currentColor" stroke-width="2.6"/><rect x="70" y="220" width="24" height="24" rx="2" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/><text x="82" y="237" text-anchor="middle">x</text><rect x="305" y="218" width="40" height="26" rx="3" fill="var(--dg-accent)" opacity="0.25" stroke="currentColor" stroke-width="1.5"/><text x="325" y="236" text-anchor="middle" font-weight="bold">7</text>
  <text x="210" y="158" text-anchor="middle" font-weight="bold">Take 5 from both sides: x = 7</text>
  <g font-size="12" fill="var(--dg-muted)"><text x="420" y="90">LHS = x + 5</text><text x="420" y="108">RHS = 12</text><text x="420" y="228">LHS = x</text><text x="420" y="246">RHS = 12 − 5 = 7</text></g>
</svg>`,
    },
    {
      title: "Solving 3x − 7 = 11 step by step",
      caption: "**Add 7 to both sides** to get 3x = 18, then **divide both sides by 3** to get x = 6. Check by putting x = 6 back: 3 × 6 − 7 = 11.",
      svg: `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb7e-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="10" y="40" width="120" height="48" rx="8"/><rect x="220" y="40" width="120" height="48" rx="8"/><rect x="430" y="40" width="120" height="48" rx="8"/></g>
  <g text-anchor="middle" font-size="16" font-weight="bold"><text x="70" y="71" font-size="15">3x − 7 = 11</text><text x="280" y="71">3x = 18</text><text x="490" y="71">x = 6</text></g>
  <g stroke="var(--dg-accent)" stroke-width="2.2"><line x1="134" y1="64" x2="216" y2="64" marker-end="url(#ar-pb7e-1)"/><line x1="344" y1="64" x2="426" y2="64" marker-end="url(#ar-pb7e-1)"/></g>
  <g text-anchor="middle" font-size="12"><text x="175" y="50">add 7 to</text><text x="175" y="84">both sides</text><text x="385" y="50">divide both</text><text x="385" y="84">sides by 3</text></g>
  <text x="280" y="140" text-anchor="middle">Check: 3 × 6 − 7 = 18 − 7 = 11 ✓</text><text x="280" y="164" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Transposing: −7 moves to the other side and becomes +7</text>
</svg>`,
    },
  ],
  "lines-and-angles": [
    {
      title: "Intersecting lines: vertically opposite angles",
      caption: "When lines AB and CD cross at O, **vertically opposite angles are equal**: ∠AOC = ∠BOD and ∠AOD = ∠BOC. Neighbouring angles form a **linear pair** and add up to 180°.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <g stroke="currentColor" stroke-width="2"><line x1="47.8" y1="179.5" x2="292.2" y2="90.5"/><line x1="96.1" y1="46.9" x2="243.9" y2="223.1"/></g>
  <path d="M154.6 116.6 A24 24 0 0 0 147.4 143.2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M151.4 112.8 A29 29 0 0 0 142.7 144.9" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M185.4 153.4 A24 24 0 0 0 192.6 126.8" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M188.6 157.2 A29 29 0 0 0 197.3 125.1" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M136.2 147.3 A36 36 0 0 0 193.1 162.6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M203.8 122.7 A36 36 0 0 0 146.9 107.4" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="114" y="124" text-anchor="middle" font-size="12">70°</text><text x="226" y="154" text-anchor="middle" font-size="12">70°</text><text x="154" y="198.9" text-anchor="middle" font-size="12">110°</text><text x="186" y="79.1" text-anchor="middle" font-size="12">110°</text>
  <circle cx="170" cy="135" r="3.5"/>
  <text x="35.8" y="185.5" text-anchor="middle" font-weight="bold">A</text><text x="304.2" y="92.5" text-anchor="middle" font-weight="bold">B</text><text x="90.1" y="38.9" text-anchor="middle" font-weight="bold">C</text><text x="251.9" y="239.1" text-anchor="middle" font-weight="bold">D</text><text x="173" y="126" font-weight="bold" font-size="12">O</text>
  <g font-size="13"><text x="340" y="70" font-weight="bold">Vertically opposite angles</text><text x="340" y="94">∠AOC = ∠BOD = 70°</text><text x="340" y="114">∠AOD = ∠BOC = 110°</text>
  <text x="340" y="150" font-weight="bold">Linear pair</text><text x="340" y="174">∠AOC + ∠AOD = 180°</text><text x="340" y="194" font-size="12" fill="var(--dg-muted)">70° + 110° = 180°</text></g>
</svg>`,
    },
    {
      title: "Parallel lines cut by a transversal",
      caption: "The transversal t makes eight angles. When l ∥ m, **corresponding angles are equal** (∠1 = ∠5), **alternate interior angles are equal** (∠3 = ∠6) and **interior angles on the same side add up to 180°** (∠3 + ∠5 = 180°). Vertically opposite angles (∠1 and ∠4) are always equal.",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="90" y1="80" x2="350" y2="80" stroke="currentColor" stroke-width="1.8"/>
  <line x1="90" y1="170" x2="350" y2="170" stroke="currentColor" stroke-width="1.8"/>
  <line x1="326" y1="35" x2="222" y2="215" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <polyline points="128,74 136,80 128,86" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polyline points="138,74 146,80 138,86" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polyline points="128,164 136,170 128,176" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <polyline points="138,164 146,170 138,176" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="78" y="85" text-anchor="end" font-size="14">l</text>
  <text x="78" y="175" text-anchor="end" font-size="14">m</text>
  <text x="214" y="219" text-anchor="end" font-size="14">t</text>
  <text x="284.5" y="57.7" text-anchor="middle" font-size="13">1</text>
  <text x="326.8" y="69" text-anchor="middle" font-size="13">2</text>
  <text x="273.2" y="100" text-anchor="middle" font-size="13">3</text>
  <text x="315.5" y="111.3" text-anchor="middle" font-size="13">4</text>
  <text x="232.5" y="147.7" text-anchor="middle" font-size="13">5</text>
  <text x="274.8" y="159" text-anchor="middle" font-size="13">6</text>
  <text x="221.2" y="190" text-anchor="middle" font-size="13">7</text>
  <text x="263.5" y="201.3" text-anchor="middle" font-size="13">8</text>
  <circle cx="300" cy="80" r="3" fill="currentColor"/>
  <circle cx="248" cy="170" r="3" fill="currentColor"/>
  <text x="392" y="64" text-anchor="start" font-weight="600">If l ∥ m:</text>
  <text x="392" y="88" text-anchor="start" font-size="12" fill="var(--dg-muted)">Corresponding</text>
  <text x="392" y="106" text-anchor="start" font-size="12">∠1 = ∠5, ∠2 = ∠6,</text>
  <text x="392" y="124" text-anchor="start" font-size="12">∠3 = ∠7, ∠4 = ∠8</text>
  <text x="392" y="150" text-anchor="start" font-size="12" fill="var(--dg-muted)">Alternate interior</text>
  <text x="392" y="168" text-anchor="start" font-size="12">∠3 = ∠6, ∠4 = ∠5</text>
  <text x="392" y="194" text-anchor="start" font-size="12" fill="var(--dg-muted)">Co-interior (same side)</text>
  <text x="392" y="212" text-anchor="start" font-size="12">∠3 + ∠5 = 180°</text>
  <text x="392" y="230" text-anchor="start" font-size="12">∠4 + ∠6 = 180°</text>
</svg>`,
    },
  ],
  "triangle-and-its-properties": [
    {
      title: "Medians and altitudes of a triangle",
      caption: "A **median** (AD, BE, CF) joins a vertex to the **midpoint** of the opposite side; the three medians meet at the **centroid** G. An **altitude** (AD, BE, CF) is the **perpendicular** from a vertex to the opposite side; the three altitudes also meet at one point.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <text x="130" y="18" text-anchor="middle" font-weight="bold">Medians meet at G</text><text x="420" y="18" text-anchor="middle" font-weight="bold">Altitudes meet at H</text>
  <g transform="translate(0 20)"><polygon points="85,40 20,200 240,200" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <line x1="85" y1="40" x2="130" y2="200" stroke="var(--dg-accent)" stroke-width="2"/><line x1="20" y1="200" x2="162.5" y2="120" stroke="var(--dg-accent)" stroke-width="2"/><line x1="240" y1="200" x2="52.5" y2="120" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="72" y1="205" x2="72" y2="195" stroke="currentColor" stroke-width="1.4"/><line x1="78" y1="205" x2="78" y2="195" stroke="currentColor" stroke-width="1.4"/><line x1="182" y1="205" x2="182" y2="195" stroke="currentColor" stroke-width="1.4"/><line x1="188" y1="205" x2="188" y2="195" stroke="currentColor" stroke-width="1.4"/><line x1="207" y1="158.7" x2="199.8" y2="165.6" stroke="currentColor" stroke-width="1.4"/><line x1="202.8" y1="154.4" x2="195.6" y2="161.3" stroke="currentColor" stroke-width="1.4"/><line x1="129.5" y1="78.7" x2="122.3" y2="85.6" stroke="currentColor" stroke-width="1.4"/><line x1="125.3" y1="74.4" x2="118.1" y2="81.3" stroke="currentColor" stroke-width="1.4"/><line x1="65.3" y1="75.3" x2="74.6" y2="79.1" stroke="currentColor" stroke-width="1.4"/><line x1="63" y1="80.9" x2="72.3" y2="84.7" stroke="currentColor" stroke-width="1.4"/><line x1="32.8" y1="155.3" x2="42.1" y2="159.1" stroke="currentColor" stroke-width="1.4"/><line x1="30.5" y1="160.9" x2="39.8" y2="164.7" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="115" cy="146.7" r="4" fill="currentColor"/>
  <text x="85" y="32" text-anchor="middle" font-weight="bold">A</text><text x="10" y="206" text-anchor="middle" font-weight="bold">B</text><text x="250" y="206" text-anchor="middle" font-weight="bold">C</text><text x="130" y="218" text-anchor="middle" font-weight="bold">D</text><text x="174.5" y="120" text-anchor="middle" font-weight="bold">E</text><text x="40.5" y="120" text-anchor="middle" font-weight="bold">F</text><text x="123" y="162.7" font-weight="bold">G</text></g><g transform="translate(290 20)"><polygon points="150,45 20,200 240,200" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="45" x2="150" y2="200" stroke="var(--dg-accent)" stroke-width="2"/><line x1="20" y1="200" x2="184.5" y2="104.5" stroke="var(--dg-accent)" stroke-width="2"/><line x1="240" y1="200" x2="110.8" y2="91.7" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M150 191 L159 191 L159 200" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M176.7 109 L181.2 116.8 L189 112.3" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M117.7 97.5 L111.9 104.4 L105 98.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="150" cy="124.5" r="4" fill="currentColor"/>
  <text x="150" y="37" text-anchor="middle" font-weight="bold">A</text><text x="10" y="206" text-anchor="middle" font-weight="bold">B</text><text x="250" y="206" text-anchor="middle" font-weight="bold">C</text><text x="150" y="218" text-anchor="middle" font-weight="bold">D</text><text x="198.5" y="102.5" text-anchor="middle" font-weight="bold">E</text><text x="96.8" y="89.7" text-anchor="middle" font-weight="bold">F</text><text x="158" y="140.5" font-weight="bold">H</text></g>
  <line x1="280" y1="10" x2="280" y2="262" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
</svg>`,
    },
    {
      title: "Pythagoras property: 3, 4, 5",
      caption: "In a right-angled triangle, the square on the **hypotenuse** equals the sum of the squares on the other two sides: 3² + 4² = 5² (9 + 16 = 25). The hypotenuse is the side opposite the right angle and is the longest side.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<g transform="translate(10 62)">
   <polygon points="118,160 230,160 230,272 118,272" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
   <polygon points="230,76 314,76 314,160 230,160" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
   <polygon points="118,160 230,76 146,-36 34,48" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
   <polygon points="118,160 230,160 230,76" fill="none" stroke="var(--dg-accent)" stroke-width="2.6"/>
   <path d="M221 160 V151 H230" fill="none" stroke="currentColor" stroke-width="1.3" transform="translate(0 0)"/>
   <g text-anchor="middle" font-size="12"><text x="174" y="220">4 × 4 = 16</text><text x="272" y="122">3 × 3 = 9</text><text x="132" y="66">5 × 5 = 25</text></g>
   <g text-anchor="middle" font-weight="bold"><text x="174" y="152" font-size="12">b = 4</text><text x="224" y="118" font-size="12" text-anchor="end">a = 3</text><text x="168" y="108" font-size="12" transform="rotate(-37 168 108)">c = 5 (hypotenuse)</text></g></g>
   <g font-size="13"><text x="360" y="110" font-weight="bold">(hypotenuse)² = (leg)² + (leg)²</text><text x="360" y="140">c² = a² + b²</text><text x="360" y="170">25 = 9 + 16</text><text x="360" y="206" font-size="12" fill="var(--dg-muted)">Other triplets: (6, 8, 10),</text><text x="360" y="222" font-size="12" fill="var(--dg-muted)">(5, 12, 13), (8, 15, 17)</text></g>
</svg>`,
    },
  ],
  "comparing-quantities": [
    {
      title: "Percentage on a hundred square",
      caption: "**Per cent** means 'per hundred'. Shading 35 of the 100 squares shows **35% = 35/100 = 0.35**.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<g><rect x="40" y="30" width="20" height="200" fill="var(--dg-accent)" opacity="0.35"/><rect x="60" y="30" width="20" height="200" fill="var(--dg-accent)" opacity="0.35"/><rect x="80" y="30" width="20" height="200" fill="var(--dg-accent)" opacity="0.35"/><rect x="100" y="30" width="20" height="100" fill="var(--dg-accent)" opacity="0.35"/></g><g stroke="currentColor" stroke-width="1" fill="none"><line x1="40" y1="30" x2="40" y2="230"/><line x1="40" y1="30" x2="240" y2="30"/><line x1="60" y1="30" x2="60" y2="230"/><line x1="40" y1="50" x2="240" y2="50"/><line x1="80" y1="30" x2="80" y2="230"/><line x1="40" y1="70" x2="240" y2="70"/><line x1="100" y1="30" x2="100" y2="230"/><line x1="40" y1="90" x2="240" y2="90"/><line x1="120" y1="30" x2="120" y2="230"/><line x1="40" y1="110" x2="240" y2="110"/><line x1="140" y1="30" x2="140" y2="230"/><line x1="40" y1="130" x2="240" y2="130"/><line x1="160" y1="30" x2="160" y2="230"/><line x1="40" y1="150" x2="240" y2="150"/><line x1="180" y1="30" x2="180" y2="230"/><line x1="40" y1="170" x2="240" y2="170"/><line x1="200" y1="30" x2="200" y2="230"/><line x1="40" y1="190" x2="240" y2="190"/><line x1="220" y1="30" x2="220" y2="230"/><line x1="40" y1="210" x2="240" y2="210"/><line x1="240" y1="30" x2="240" y2="230"/><line x1="40" y1="230" x2="240" y2="230"/></g><rect x="40" y="30" width="200" height="200" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="290" y="90" font-weight="bold">35 squares out of 100</text><text x="290" y="120">35% = 35/100 = 0.35</text><text x="290" y="156" font-size="12" fill="var(--dg-muted)">x% = x/100</text><text x="290" y="174" font-size="12" fill="var(--dg-muted)">x% of a quantity = x/100 × quantity</text>
</svg>`,
    },
    {
      title: "Profit, loss and discount",
      caption: "**Profit** is SP − CP (SP is more than CP); **loss** is CP − SP. **Profit % and loss % are worked out on the cost price**; **discount** = marked price − selling price, and discount % is on the marked price.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <text x="10" y="26" font-weight="bold">Profit: SP more than CP</text><rect x="110" y="34" width="120" height="20" fill="var(--dg-fill)"  stroke="currentColor" stroke-width="1.5"/><text x="116" y="49" font-size="12">CP</text><rect x="110" y="60" width="180" height="20" fill="var(--dg-fill)"  stroke="currentColor" stroke-width="1.5"/><text x="116" y="75" font-size="12">SP</text><rect x="230" y="60" width="60" height="20" fill="var(--dg-accent)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="260" y="75" text-anchor="middle" font-size="11" font-weight="bold">Profit</text><text x="330" y="48" font-size="12">Profit = SP − CP</text><text x="330" y="74" font-size="12">Profit % = (Profit ÷ CP) × 100</text>
  <text x="10" y="122" font-weight="bold">Loss: CP more than SP</text><rect x="110" y="130" width="180" height="20" fill="var(--dg-fill)"  stroke="currentColor" stroke-width="1.5"/><text x="116" y="145" font-size="12">CP</text><rect x="110" y="156" width="120" height="20" fill="var(--dg-fill)"  stroke="currentColor" stroke-width="1.5"/><text x="116" y="171" font-size="12">SP</text><rect x="230" y="130" width="60" height="20" fill="var(--dg-accent)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="260" y="145" text-anchor="middle" font-size="11" font-weight="bold">Loss</text><text x="330" y="144" font-size="12">Loss = CP − SP</text><text x="330" y="170" font-size="12">Loss % = (Loss ÷ CP) × 100</text>
  <text x="10" y="218" font-weight="bold">Discount: MP more than SP</text><rect x="110" y="226" width="180" height="20" fill="var(--dg-fill)"  stroke="currentColor" stroke-width="1.5"/><text x="116" y="241" font-size="12">MP</text><rect x="110" y="252" width="120" height="20" fill="var(--dg-fill)"  stroke="currentColor" stroke-width="1.5"/><text x="116" y="267" font-size="12">SP</text><rect x="230" y="226" width="60" height="20" fill="var(--dg-accent)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="260" y="241" text-anchor="middle" font-size="11" font-weight="bold">Discount</text><text x="330" y="240" font-size="12">Discount = MP − SP</text><text x="330" y="266" font-size="12">Discount % = (Discount ÷ MP) × 100</text>
</svg>`,
    },
  ],
  "rational-numbers": [
    {
      title: "Comparing rational numbers on the number line",
      caption: "Positive rational numbers lie to the **right** of 0 and negative ones to the **left**. Each unit is split into equal parts: −3/4 = −9/12 and −2/3 = −8/12, so **−2/3 > −3/4** (it lies to the right).",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb7r-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="30" y1="100" x2="530" y2="100" stroke="currentColor" stroke-width="2"/><path d="M530 100 l-8 -4 v8z M30 100 l8 -4 v8z" fill="currentColor"/><line x1="40" y1="88" x2="40" y2="112" stroke="currentColor" stroke-width="2"/><line x1="60" y1="94" x2="60" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="80" y1="94" x2="80" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="100" y1="94" x2="100" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="120" y1="94" x2="120" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="140" y1="94" x2="140" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="94" x2="160" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="180" y1="94" x2="180" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="200" y1="94" x2="200" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="220" y1="94" x2="220" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="240" y1="94" x2="240" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="260" y1="94" x2="260" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="280" y1="88" x2="280" y2="112" stroke="currentColor" stroke-width="2"/><line x1="300" y1="94" x2="300" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="320" y1="94" x2="320" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="340" y1="94" x2="340" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="360" y1="94" x2="360" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="380" y1="94" x2="380" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="400" y1="94" x2="400" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="420" y1="94" x2="420" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="440" y1="94" x2="440" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="460" y1="94" x2="460" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="480" y1="94" x2="480" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="500" y1="94" x2="500" y2="106" stroke="currentColor" stroke-width="1.2"/><line x1="520" y1="88" x2="520" y2="112" stroke="currentColor" stroke-width="2"/>
  <g text-anchor="middle" font-weight="bold"><text x="40" y="132">−1</text><text x="280" y="132">0</text><text x="520" y="132">1</text></g>
  <g fill="var(--dg-accent)"><circle cx="100" cy="100" r="5"/><circle cx="120" cy="100" r="5"/></g>
  <g text-anchor="middle" font-size="12"><text x="94" y="60" font-weight="bold">−3/4</text><text x="94" y="76" fill="var(--dg-muted)">= −9/12</text><text x="132" y="156" font-weight="bold">−2/3</text><text x="132" y="172" fill="var(--dg-muted)">= −8/12</text></g>
  <g stroke="currentColor" stroke-width="1"><line x1="98" y1="82" x2="100" y2="94"/><line x1="124" y1="144" x2="120" y2="106"/></g>
  <text x="400" y="62" text-anchor="middle" font-size="12" fill="var(--dg-muted)">small marks: twelfths</text>
  <line x1="190" y1="200" x2="360" y2="200" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-pb7r-1)"/><text x="275" y="220" text-anchor="middle" font-size="12">numbers increase to the right</text>
</svg>`,
    },
    {
      title: "Rational numbers contain the integers",
      caption: "A **rational number** can be written as p/q with p, q integers and q ≠ 0. Every **integer**, every fraction and every terminating or recurring decimal is rational.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <ellipse cx="280" cy="125" rx="260" ry="112" fill="var(--dg-fill)" opacity="0.5" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="190" cy="140" rx="120" ry="66" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <text x="280" y="36" text-anchor="middle" font-weight="bold">Rational numbers: p/q, q ≠ 0</text>
  <text x="190" y="116" text-anchor="middle" font-weight="bold">Integers</text><text x="190" y="140" text-anchor="middle" font-size="12">… −3, −2, −1, 0, 1, 2, 3 …</text><text x="190" y="162" text-anchor="middle" font-size="12" fill="var(--dg-muted)">e.g. 6 = 6/1,  0 = 0/5</text>
  <g font-size="13"><text x="338" y="102">3/4</text><text x="338" y="130">−5/7</text><text x="338" y="158">0.25 = 1/4</text><text x="338" y="186" font-size="12" fill="var(--dg-muted)">fractions and decimals</text></g>
</svg>`,
    },
  ],
  "perimeter-and-area": [
    {
      title: "Area of a parallelogram and a triangle",
      caption: "Area of a parallelogram = **base × height**, where the height is the **perpendicular** distance between the parallel sides (not the slanting side). Cutting off the triangle on the left and moving it to the right makes a **rectangle** with the same base and height. A diagonal splits the parallelogram into two equal triangles, so **area of a triangle = ½ × base × height**.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb7p-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g transform="translate(30 0)">
  <polygon points="40,190 180,190 220,80 80,80" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="80" x2="80" y2="190" stroke="var(--dg-accent)" stroke-width="1.8" stroke-dasharray="5 3"/><path d="M80 180 H90 V190" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <line x1="40" y1="190" x2="220" y2="80" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 3"/>
  <text x="110" y="214" text-anchor="middle">base b</text><text x="88" y="148" fill="var(--dg-accent)">height h</text><text x="52" y="136" font-size="12" text-anchor="end">slant side</text>
  <text x="130" y="62" text-anchor="middle" font-weight="bold">Parallelogram: area = b × h</text></g>
  <line x1="270" y1="135" x2="310" y2="135" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-pb7p-1)"/><text x="290" y="124" text-anchor="middle" font-size="11">cut and</text><text x="290" y="156" text-anchor="middle" font-size="11">shift</text>
  <rect x="330" y="80" width="140" height="110" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <text x="400" y="214" text-anchor="middle">base b</text><text x="478" y="140">h</text>
  <text x="400" y="62" text-anchor="middle" font-weight="bold">Rectangle: area = b × h</text>
  <text x="280" y="246" text-anchor="middle" font-weight="bold">Diagonal gives two equal triangles: triangle area = ½ × b × h</text>
</svg>`,
    },
    {
      title: "Circle: radius, diameter, circumference",
      caption: "**Circumference** C = 2πr = πd and **area** A = πr², where r is the radius and d = 2r the diameter. π is the circumference ÷ diameter, about 22/7 or 3.14.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <circle cx="130" cy="130" r="90" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2.4"/>
  <line x1="40" y1="130" x2="220" y2="130" stroke="currentColor" stroke-width="1.6"/>
  <line x1="130" y1="130" x2="175" y2="52.06" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <circle cx="130" cy="130" r="3.5"/><text x="124" y="122" text-anchor="end" font-weight="bold">O</text>
  <text x="162.5" y="87.03" fill="var(--dg-accent)" font-weight="bold">r</text>
  <text x="79" y="150" text-anchor="middle" font-weight="bold">d = 2r</text>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="193.63" y1="193.63" x2="223.63" y2="215.63"/></g>
  <text x="227.63" y="223.63" font-size="12">circumference C</text>
  <text x="380" y="80" font-weight="bold">Circumference</text><text x="380" y="104">C = 2πr = πd</text>
  <text x="380" y="140" font-weight="bold">Area</text><text x="380" y="164">A = πr²</text>
  <text x="380" y="200" font-size="12" fill="var(--dg-muted)">π ≈ 22/7 or 3.14</text><text x="380" y="218" font-size="12" fill="var(--dg-muted)">Halve the diameter to get r</text>
</svg>`,
    },
  ],
  "algebraic-expressions": [
    {
      title: "Matchstick pattern: 3n + 1",
      caption: "One starting stick is needed once, and **every square adds 3 more sticks**. So n squares in a row need **3n + 1** sticks: 4, 7, 10, 13, … A rule written in letters works for every case at once.",
      svg: `<svg viewBox="0 0 560 208" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="30" y1="30" x2="30" y2="74" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="30" y1="30" x2="74" y2="30" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="30" y1="74" x2="74" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="74" y1="30" x2="74" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <text x="52" y="100" text-anchor="middle" font-weight="600">n = 1</text>
  <text x="52" y="118" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4 sticks</text>
  <line x1="130" y1="30" x2="130" y2="74" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="130" y1="30" x2="174" y2="30" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="130" y1="74" x2="174" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="174" y1="30" x2="174" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="174" y1="30" x2="218" y2="30" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="174" y1="74" x2="218" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="218" y1="30" x2="218" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <text x="174" y="100" text-anchor="middle" font-weight="600">n = 2</text>
  <text x="174" y="118" text-anchor="middle" font-size="12" fill="var(--dg-muted)">7 sticks</text>
  <line x1="280" y1="30" x2="280" y2="74" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="280" y1="30" x2="324" y2="30" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="280" y1="74" x2="324" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="324" y1="30" x2="324" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="324" y1="30" x2="368" y2="30" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="324" y1="74" x2="368" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="368" y1="30" x2="368" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="368" y1="30" x2="412" y2="30" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="368" y1="74" x2="412" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="412" y1="30" x2="412" y2="74" stroke="var(--dg-accent)" stroke-width="3.5" stroke-linecap="round"/>
  <text x="346" y="100" text-anchor="middle" font-weight="600">n = 3</text>
  <text x="346" y="118" text-anchor="middle" font-size="12" fill="var(--dg-muted)">10 sticks</text>
  <text x="30" y="170" text-anchor="start" font-weight="600">1 starting stick + 3 sticks for each square = 3n + 1</text>
  <text x="30" y="192" text-anchor="start" font-size="12" fill="var(--dg-muted)">First stick (plain) + three sticks per square (highlighted). For n = 10: 3 × 10 + 1 = 31 sticks.</text>
</svg>`,
    },
    {
      title: "Terms, coefficients and constants",
      caption: "In the trinomial **4x² − 3x + 7** the parts added or subtracted are **terms**. The number multiplying a variable is its **coefficient**. 3x and −5x are **like terms**; 3x and 3x² are not.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"><rect x="40" y="50" width="130" height="60" rx="8"/><rect x="215" y="50" width="130" height="60" rx="8"/><rect x="390" y="50" width="130" height="60" rx="8"/></g>
  <g text-anchor="middle" font-size="24" font-weight="bold"><text x="105" y="90">4x²</text><text x="280" y="90">−3x</text><text x="455" y="90">+7</text></g>
  <g text-anchor="middle" font-weight="bold"><text x="105" y="36">Term 1</text><text x="280" y="36">Term 2</text><text x="455" y="36">Term 3</text></g>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="105" y1="112" x2="105" y2="140"/><line x1="280" y1="112" x2="280" y2="140"/><line x1="455" y1="112" x2="455" y2="140"/></g>
  <g text-anchor="middle" font-size="12"><text x="105" y="158">coefficient of x² is 4</text><text x="280" y="158">coefficient of x is −3</text><text x="455" y="158">constant term</text></g>
  <text x="280" y="208" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Monomial: 1 term · Binomial: 2 terms · Trinomial: 3 terms</text>
</svg>`,
    },
  ],
  "exponents-and-powers": [
    {
      title: "Base and exponent",
      caption: "In **aⁿ** the **base** a is multiplied by itself **n times** (the exponent). 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Base and exponent cannot be swapped: 2⁶ = 64 but 6² = 36.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb7x-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="110" y="120" text-anchor="middle" font-size="64" font-weight="bold">2</text><text x="150" y="86" font-size="38" font-weight="bold" fill="var(--dg-accent)">5</text>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="110" y1="132" x2="110" y2="160"/><line x1="156" y1="56" x2="156" y2="22"/></g>
  <text x="110" y="178" text-anchor="middle">base</text><text x="156" y="16" text-anchor="middle">exponent (power)</text>
  <text x="260" y="108" font-size="18">= 2 × 2 × 2 × 2 × 2 = 32</text><text x="260" y="134" font-size="12" fill="var(--dg-muted)">2 is multiplied 5 times</text>
  <text x="260" y="176" font-size="12">(−2)³ = −8 (odd exponent)</text><text x="260" y="194" font-size="12">(−2)⁴ = 16 (even exponent)</text><text x="260" y="212" font-size="12">a¹ = a and a⁰ = 1 (a ≠ 0)</text>
</svg>`,
    },
    {
      title: "Powers of 10 and standard form",
      caption: "Powers of 10 show large numbers compactly. **Standard form** is a decimal number between 1 and 10 times a power of 10, so 59,00,000 = **5.9 × 10⁶**.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">

  <rect x="10" y="10" width="540" height="32" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="10" y="10" width="540" height="170"/><line x1="10" y1="42" x2="550" y2="42"/><line x1="10" y1="74" x2="550" y2="74"/><line x1="10" y1="106" x2="550" y2="106"/><line x1="10" y1="138" x2="550" y2="138"/><line x1="130" y1="10" x2="130" y2="180"/><line x1="330" y1="10" x2="330" y2="180"/></g>
  <g font-weight="bold"><text x="22" y="31">Power</text><text x="142" y="31">Number</text><text x="342" y="31">Name</text></g>
  <g><text x="22" y="63">10²</text><text x="142" y="63">100</text><text x="342" y="63">hundred</text>
  <text x="22" y="95">10³</text><text x="142" y="95">1000</text><text x="342" y="95">thousand</text>
  <text x="22" y="127">10⁵</text><text x="142" y="127">1,00,000</text><text x="342" y="127">one lakh</text>
  <text x="22" y="159">10⁷</text><text x="142" y="159">1,00,00,000</text><text x="342" y="159">one crore</text></g>
  <text x="280" y="212" text-anchor="middle" font-weight="bold">59,00,000 = 5.9 × 10⁶</text><text x="280" y="234" text-anchor="middle" font-size="12" fill="var(--dg-muted)">speed of light ≈ 3 × 10⁸ m/s</text>
</svg>`,
    },
  ],
  "symmetry": [
    {
      title: "Lines of symmetry",
      caption: "A **line of symmetry** folds a figure into two mirror-image halves. A **regular polygon** has as many lines as sides; a rectangle and a rhombus have 2, an isosceles triangle has 1 and a circle has infinitely many.",
      svg: `<svg viewBox="0 0 560 336" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<polygon points="70,14 28.4,86 111.6,86" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="70" y1="4" x2="70" y2="120"/><line x1="19.8" y1="33" x2="120.2" y2="91"/><line x1="19.8" y1="91" x2="120.2" y2="33"/></g><text x="70" y="140" text-anchor="middle" font-size="12" font-weight="bold">Equilateral triangle</text><text x="70" y="156" text-anchor="middle" font-size="12" fill="var(--dg-muted)">3 lines</text><polygon points="243.9,28.1 176.1,28.1 176.1,95.9 243.9,95.9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="251" y1="21" x2="169" y2="103"/><line x1="210" y1="4" x2="210" y2="120"/><line x1="169" y1="21" x2="251" y2="103"/><line x1="152" y1="62" x2="268" y2="62"/></g><text x="210" y="140" text-anchor="middle" font-size="12" font-weight="bold">Square</text><text x="210" y="156" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4 lines</text><polygon points="350,14 304.3,47.2 321.8,100.8 378.2,100.8 395.7,47.2" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="350" y1="4" x2="350" y2="120"/><line x1="315.9" y1="15.1" x2="384.1" y2="108.9"/><line x1="294.8" y1="44.1" x2="405.2" y2="79.9"/><line x1="294.8" y1="79.9" x2="405.2" y2="44.1"/><line x1="315.9" y1="108.9" x2="384.1" y2="15.1"/></g><text x="350" y="140" text-anchor="middle" font-size="12" font-weight="bold">Regular pentagon</text><text x="350" y="156" text-anchor="middle" font-size="12" fill="var(--dg-muted)">5 lines</text><polygon points="490,14 448.4,38 448.4,86 490,110 531.6,86 531.6,38" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="490" y1="4" x2="490" y2="120"/><line x1="461" y1="11.8" x2="519" y2="112.2"/><line x1="439.8" y1="33" x2="540.2" y2="91"/><line x1="432" y1="62" x2="548" y2="62"/><line x1="439.8" y1="91" x2="540.2" y2="33"/><line x1="461" y1="112.2" x2="519" y2="11.8"/></g><text x="490" y="140" text-anchor="middle" font-size="12" font-weight="bold">Regular hexagon</text><text x="490" y="156" text-anchor="middle" font-size="12" fill="var(--dg-muted)">6 lines</text>
  <rect x="20" y="202" width="100" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="70" y1="192" x2="70" y2="272"/><line x1="10" y1="232" x2="130" y2="232"/></g><polygon points="210,188 240,232 210,276 180,232" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="210" y1="178" x2="210" y2="286"/><line x1="170" y1="232" x2="250" y2="232"/></g><polygon points="350,186 384,266 316,266" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="350" y1="176" x2="350" y2="276"/></g><circle cx="490" cy="232" r="42" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><g stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"><line x1="490" y1="180" x2="490" y2="284"/><line x1="438" y1="232" x2="542" y2="232"/><line x1="453" y1="195" x2="527" y2="269"/><line x1="527" y1="195" x2="453" y2="269"/></g>
  <g text-anchor="middle" font-size="12" font-weight="bold"><text x="70" y="306">Rectangle</text><text x="210" y="306">Rhombus</text><text x="350" y="306">Isosceles triangle</text><text x="490" y="306">Circle</text></g>
  <g text-anchor="middle" font-size="12" fill="var(--dg-muted)"><text x="70" y="322">2 lines</text><text x="210" y="322">2 lines</text><text x="350" y="322">1 line</text><text x="490" y="322">infinitely many</text></g>
</svg>`,
    },
    {
      title: "Rotational symmetry",
      caption: "A figure has **rotational symmetry** if it looks the same after a turn of less than 360° about its **centre**. Angle of rotation = 360° ÷ **order**: square order 4 (90°), equilateral triangle order 3 (120°), rectangle order 2 (180°).",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<defs><marker id="ar-pb7y-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs><polygon points="136.8,73.2 63.2,73.2 63.2,146.8 136.8,146.8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><line x1="100" y1="110" x2="136.8" y2="73.2" stroke="currentColor" stroke-width="1.6"/><line x1="100" y1="110" x2="63.2" y2="73.2" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"/><path d="M115.6 94.4 A22 22 0 0 0 84.4 94.4" fill="none" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-pb7y-1)"/><circle cx="100" cy="110" r="3.5"/><polygon points="280,58 235,136 325,136" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><line x1="280" y1="110" x2="280" y2="58" stroke="currentColor" stroke-width="1.6"/><line x1="280" y1="110" x2="235" y2="136" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"/><path d="M280 88 A22 22 0 0 0 260.9 121" fill="none" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-pb7y-1)"/><circle cx="280" cy="110" r="3.5"/><rect x="410" y="80" width="100" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><line x1="460" y1="110" x2="510" y2="80" stroke="currentColor" stroke-width="1.6"/><line x1="460" y1="110" x2="410" y2="140" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"/><path d="M478.9 98.7 A22 22 0 0 0 441.1 121.3" fill="none" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-pb7y-1)"/><circle cx="460" cy="110" r="3.5"/><text x="100" y="196" text-anchor="middle" font-weight="bold" font-size="12">Square</text><text x="100" y="214" text-anchor="middle" font-size="12">order 4, angle 90°</text><text x="280" y="196" text-anchor="middle" font-weight="bold" font-size="12">Equilateral triangle</text><text x="280" y="214" text-anchor="middle" font-size="12">order 3, angle 120°</text><text x="460" y="196" text-anchor="middle" font-weight="bold" font-size="12">Rectangle</text><text x="460" y="214" text-anchor="middle" font-size="12">order 2, angle 180°</text>
   <text x="280" y="20" text-anchor="middle" font-size="12" fill="var(--dg-muted)">solid line: start position; dashed line: after one smallest turn; dot: centre of rotation</text>
</svg>`,
    },
  ],
  "visualising-solid-shapes": [
    {
      title: "Faces, edges and vertices of solids",
      caption: "A **face** is a flat surface, an **edge** is where two faces meet and a **vertex** is a corner. A cube has 6 faces, 12 edges and 8 vertices; **Euler's formula** F + V − E = 2 holds for any polyhedron (6 + 8 − 12 = 2).",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<polygon points="70,100 102,68 186,68 154,100" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><polygon points="154,100 186,68 186,152 154,184" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="70" y="100" width="84" height="84" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M102 68 V152 M102 152 H186 M70 184 L102 152" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/>
  <text x="202" y="132" font-size="12">Face</text>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="172" y1="126" x2="198" y2="128"/><line x1="70" y1="100" x2="44" y2="84"/><line x1="112" y1="184" x2="112" y2="204"/></g>
  <text x="40" y="80" text-anchor="end" font-size="12">Vertex</text><text x="112" y="218" text-anchor="middle" font-size="12">Edge</text><g transform="translate(-30 0)"><path d="M264 90 V170 A36 12 0 0 0 336 170 V90" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><ellipse cx="300" cy="90" rx="36" ry="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M264 170 A36 12 0 0 1 336 170" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/><path d="M370 170 L410 64 L450 170 A40 12 0 0 1 370 170Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M370 170 A40 12 0 0 0 450 170" fill="none" stroke="currentColor" stroke-width="1.8"/></g><g transform="translate(-40 0)"><polygon points="475,176 535,176 520,64" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><polygon points="535,176 555,156 520,64" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M475 176 L495 156 H555 M495 156 L520 64" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"/></g>
  <text x="270" y="196" text-anchor="middle" font-size="12">Flat face</text><text x="380" y="52" text-anchor="middle" font-size="12">Vertex</text><text x="480" y="52" text-anchor="middle" font-size="12">Apex</text>
  <text x="112" y="252" text-anchor="middle" font-weight="bold" font-size="13">Cube</text><text x="112" y="269" text-anchor="middle" font-size="12" fill="var(--dg-muted)">6 faces, 12 edges,</text><text x="112" y="284" text-anchor="middle" font-size="12" fill="var(--dg-muted)">8 vertices</text><text x="270" y="252" text-anchor="middle" font-weight="bold" font-size="13">Cylinder</text><text x="270" y="269" text-anchor="middle" font-size="12" fill="var(--dg-muted)">2 flat faces,</text><text x="270" y="284" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 curved surface,</text><text x="270" y="299" text-anchor="middle" font-size="12" fill="var(--dg-muted)">no vertex</text><text x="380" y="252" text-anchor="middle" font-weight="bold" font-size="13">Cone</text><text x="380" y="269" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 flat face,</text><text x="380" y="284" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 curved surface,</text><text x="380" y="299" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 vertex</text><text x="482" y="252" text-anchor="middle" font-weight="bold" font-size="13">Square pyramid</text><text x="482" y="269" text-anchor="middle" font-size="12" fill="var(--dg-muted)">5 faces, 8 edges,</text><text x="482" y="284" text-anchor="middle" font-size="12" fill="var(--dg-muted)">5 vertices</text>
</svg>`,
    },
    {
      title: "Nets of solids",
      caption: "A **net** is a flat pattern that folds into a solid. A cube's net has **6 squares** (it has 11 different nets); a square pyramid needs **1 square and 4 triangles**; a cylinder needs **2 circles and 1 rectangle**; a cone needs **1 circle and 1 curved sector**.",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
<rect x="56" y="30" width="28" height="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="56" y="58" width="28" height="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="56" y="86" width="28" height="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="56" y="114" width="28" height="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="28" y="58" width="28" height="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="84" y="58" width="28" height="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="192" y="70" width="36" height="36" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><polygon points="192,70 228,70 210,30" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><polygon points="192,106 228,106 210,146" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><polygon points="192,70 192,106 152,88" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><polygon points="228,70 228,106 268,88" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><rect x="306" y="64" width="88" height="50" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="350" cy="50" r="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="350" cy="128" r="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M490 24 L443.2 51 A54 54 0 0 0 536.8 51 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="490" cy="96" r="18" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><text x="70" y="186" text-anchor="middle" font-weight="bold" font-size="12">Cube</text><text x="70" y="202" text-anchor="middle" font-size="12" fill="var(--dg-muted)">6 squares</text><text x="210" y="186" text-anchor="middle" font-weight="bold" font-size="12">Square pyramid</text><text x="210" y="202" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 square, 4 triangles</text><text x="350" y="186" text-anchor="middle" font-weight="bold" font-size="12">Cylinder</text><text x="350" y="202" text-anchor="middle" font-size="12" fill="var(--dg-muted)">2 circles, 1 rectangle</text><text x="490" y="186" text-anchor="middle" font-weight="bold" font-size="12">Cone</text><text x="490" y="202" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1 circle, 1 sector</text>
</svg>`,
    },
  ],
});
