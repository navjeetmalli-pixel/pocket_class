// Class 12 Economics diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(12, "economics", {
  "national-income-accounting": [
    {
      title: "Circular flow of income: two-sector economy",
      caption: "Households supply factor services to firms and receive **factor payments (rent, wages, interest, profit)**; firms supply goods and services and receive **consumption expenditure**. With no saving, government or foreign trade, national income = national product = national expenditure, and the flow goes round without leakage.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs>
    <marker id="ar-ec1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>
    <marker id="ar-ec1-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker>
  </defs>
  <rect x="25" y="60" width="135" height="190" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <rect x="400" y="60" width="135" height="190" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g text-anchor="middle">
    <text x="92" y="150" font-size="14">Households</text>
    <text x="92" y="170" font-size="12" fill="var(--dg-muted)">own the factors,</text>
    <text x="92" y="186" font-size="12" fill="var(--dg-muted)">buy the goods</text>
    <text x="467" y="150" font-size="14">Firms</text>
    <text x="467" y="170" font-size="12" fill="var(--dg-muted)">hire the factors,</text>
    <text x="467" y="186" font-size="12" fill="var(--dg-muted)">produce the goods</text>
  </g>
  <g text-anchor="middle">
    <line x1="164" y1="95" x2="396" y2="95" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-ec1-a)"/>
    <text x="280" y="86">Factor services</text>
    <line x1="396" y1="135" x2="164" y2="135" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-ec1-b)"/>
    <text x="280" y="126">Factor payments</text>
    <text x="280" y="151" font-size="12" fill="var(--dg-muted)">(rent, wages, interest, profit)</text>
    <line x1="396" y1="195" x2="164" y2="195" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-ec1-a)"/>
    <text x="280" y="186">Goods and services</text>
    <line x1="164" y1="235" x2="396" y2="235" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-ec1-b)"/>
    <text x="280" y="226">Consumption expenditure</text>
  </g>
  <line x1="120" y1="285" x2="150" y2="285" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-ec1-a)"/>
  <text x="158" y="289" font-size="12">Real flow</text>
  <line x1="290" y1="285" x2="320" y2="285" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-ec1-b)"/>
  <text x="328" y="289" font-size="12">Money flow</text>
</svg>`,
    },
  ],
  "determination-of-income-and-employment": [
    {
      title: "Consumption and saving functions",
      caption: "**C = C̄ + cY** starts at autonomous consumption C̄ and rises with income by the slope c (MPC). The 45° line shows C = Y. At the **break-even point B** consumption equals income, so saving is zero; below Y₀ saving is negative (dissaving), above it positive. **S = −C̄ + sY** (s = MPS = 1 − c).",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-ec2-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="90" y1="300" x2="90" y2="22" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec2-a)"/>
  <line x1="90" y1="230" x2="490" y2="230" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec2-a)"/>
  <text x="100" y="18">Consumption, Saving</text>
  <text x="488" y="250" text-anchor="end">Income (Y)</text>
  <text x="84" y="246" text-anchor="end">O</text>
  <line x1="90" y1="230" x2="300" y2="20" stroke="var(--dg-muted)" stroke-width="1.6" stroke-dasharray="6 4"/>
  <line x1="90" y1="190" x2="360" y2="28" stroke="currentColor" stroke-width="2.2"/>
  <line x1="90" y1="270" x2="360" y2="162" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="190" y1="130" x2="190" y2="230" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <circle cx="190" cy="130" r="4" fill="currentColor"/>
  <text x="182" y="116" text-anchor="end">Break-even</text>
  <text x="182" y="131" text-anchor="end">point B</text>
  <text x="190" y="248" text-anchor="middle">Y₀</text>
  <text x="84" y="194" text-anchor="end">C̄</text>
  <text x="84" y="274" text-anchor="end">−C̄</text>
  <text x="368" y="34">C = C̄ + cY</text>
  <text x="368" y="166" fill="var(--dg-accent)">S = −C̄ + sY</text>
  <text x="308" y="16" fill="var(--dg-muted)">45° line (C = Y)</text>
</svg>`,
    },
    {
      title: "Equilibrium income: AD = Y",
      caption: "Aggregate demand **AD = C + I** is the consumption line shifted up by investment I. Equilibrium is at **E, where AD cuts the 45° line**, i.e. AD = Y. At incomes below Y*, AD exceeds output so output rises; above Y*, output exceeds AD so it falls.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-ec3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="90" y1="260" x2="90" y2="22" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec3-a)"/>
  <line x1="90" y1="260" x2="490" y2="260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec3-a)"/>
  <text x="100" y="18">AD, Y</text>
  <text x="488" y="282" text-anchor="end">Income / output (Y)</text>
  <text x="84" y="276" text-anchor="end">O</text>
  <line x1="90" y1="260" x2="330" y2="20" stroke="var(--dg-muted)" stroke-width="1.6" stroke-dasharray="6 4"/>
  <line x1="90" y1="220" x2="370" y2="52" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="190" x2="370" y2="22" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="265" y1="85" x2="265" y2="260" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="90" y1="85" x2="265" y2="85" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <circle cx="265" cy="85" r="4" fill="currentColor"/>
  <text x="250" y="76" text-anchor="end">E</text>
  <text x="265" y="278" text-anchor="middle">Y*</text>
  <text x="84" y="89" text-anchor="end">AD*</text>
  <g stroke="currentColor"><line x1="300" y1="66" x2="300" y2="92"/><line x1="296" y1="66" x2="304" y2="66"/><line x1="296" y1="92" x2="304" y2="92"/></g>
  <text x="291" y="84" text-anchor="end">I</text>
  <text x="378" y="56">C</text>
  <text x="378" y="26" fill="var(--dg-accent)">AD = C + I</text>
  <text x="322" y="16" text-anchor="end" fill="var(--dg-muted)">45° line (AD = Y)</text>
</svg>`,
    },
    {
      title: "Excess demand and deficient demand",
      caption: "Y_F is the full-employment output. If AD₂ lies **above** the 45° line at Y_F, the gap is the **inflationary gap** (excess demand: prices rise). If AD₁ lies **below** it, the gap is the **deflationary gap** (deficient demand: output and employment fall short, equilibrium at Y₁ < Y_F).",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-ec4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="90" y1="270" x2="90" y2="22" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec4-a)"/>
  <line x1="90" y1="270" x2="500" y2="270" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec4-a)"/>
  <text x="100" y="18">AD, Y</text>
  <text x="498" y="292" text-anchor="end">Income / output (Y)</text>
  <text x="84" y="286" text-anchor="end">O</text>
  <line x1="90" y1="270" x2="298" y2="62" stroke="var(--dg-muted)" stroke-width="1.6" stroke-dasharray="6 4"/>
  <line x1="90" y1="160" x2="298" y2="36" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="250" x2="340" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="290" y1="40" x2="290" y2="270" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="290" y1="40" x2="290" y2="70" stroke="var(--dg-accent)" stroke-width="4"/>
  <line x1="290" y1="70" x2="290" y2="130" stroke="var(--dg-accent)" stroke-width="4"/>
  <circle cx="290" cy="70" r="3.5" fill="currentColor"/>
  <line x1="140" y1="220" x2="140" y2="270" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <circle cx="140" cy="220" r="3.5" fill="currentColor"/>
  <text x="140" y="288" text-anchor="middle">Y₁</text>
  <text x="290" y="288" text-anchor="middle">Y<tspan dy="4" font-size="10">F</tspan></text>
  <text x="304" y="40">AD₂</text>
  <text x="346" y="104">AD₁</text>
  <text x="304" y="56" fill="var(--dg-accent)">Inflationary gap</text>
  <text x="300" y="150" fill="var(--dg-accent)">Deflationary gap</text>
  <line x1="294" y1="110" x2="302" y2="140" stroke="var(--dg-accent)" stroke-width="0.8"/>
  <text transform="translate(165 168) rotate(-45)" fill="var(--dg-muted)">45° line (AD = Y)</text>
</svg>`,
    },
  ],
  "open-economy-macroeconomics": [
    {
      title: "Determination of the exchange rate",
      caption: "In a floating-rate system the exchange rate (₹ per $) is fixed where the **demand curve D for foreign exchange** (imports, travel, foreign investment abroad) meets the **supply curve S** (exports, remittances, foreign investment in India). At E, quantity demanded equals quantity supplied.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-ec5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="90" y1="260" x2="90" y2="22" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec5-a)"/>
  <line x1="90" y1="260" x2="490" y2="260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec5-a)"/>
  <text x="100" y="18">Exchange rate (₹ per $)</text>
  <text x="488" y="282" text-anchor="end">Foreign exchange ($)</text>
  <text x="84" y="276" text-anchor="end">O</text>
  <line x1="130" y1="50" x2="400" y2="230" stroke="currentColor" stroke-width="2.2"/>
  <line x1="130" y1="230" x2="400" y2="50" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="265" y1="140" x2="265" y2="260" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="90" y1="140" x2="265" y2="140" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <circle cx="265" cy="140" r="4" fill="currentColor"/>
  <text x="280" y="134">E</text>
  <text x="265" y="278" text-anchor="middle">Q*</text>
  <text x="84" y="144" text-anchor="end">R*</text>
  <text x="408" y="236">D</text>
  <text x="408" y="52" fill="var(--dg-accent)">S</text>
</svg>`,
    },
    {
      title: "Depreciation of the rupee: demand for foreign exchange rises",
      caption: "When demand for foreign exchange increases (say, imports rise), **D shifts right to D₁**. The equilibrium rate rises from R₀ to R₁ (more rupees per dollar): the rupee **depreciates** and the equilibrium quantity of foreign exchange rises from Q₀ to Q₁.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-ec6-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="90" y1="260" x2="90" y2="22" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec6-a)"/>
  <line x1="90" y1="260" x2="490" y2="260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-ec6-a)"/>
  <text x="100" y="18">Exchange rate (₹ per $)</text>
  <text x="488" y="282" text-anchor="end">Foreign exchange ($)</text>
  <text x="84" y="276" text-anchor="end">O</text>
  <line x1="130" y1="50" x2="400" y2="230" stroke="currentColor" stroke-width="2.2"/>
  <line x1="190" y1="50" x2="400" y2="190" stroke="currentColor" stroke-width="2.2" stroke-dasharray="7 4"/>
  <line x1="130" y1="230" x2="400" y2="50" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="265" y1="140" x2="265" y2="260" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="90" y1="140" x2="265" y2="140" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="295" y1="120" x2="295" y2="260" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="90" y1="120" x2="295" y2="120" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <circle cx="265" cy="140" r="4" fill="currentColor"/>
  <circle cx="295" cy="120" r="4" fill="currentColor"/>
  <text x="258" y="158" text-anchor="end">E₀</text>
  <text x="283" y="106">E₁</text>
  <text x="265" y="278" text-anchor="end">Q₀</text>
  <text x="295" y="278" text-anchor="start">Q₁</text>
  <text x="84" y="144" text-anchor="end">R₀</text>
  <text x="84" y="124" text-anchor="end">R₁</text>
  <text x="408" y="236">D</text>
  <text x="408" y="196">D₁</text>
  <text x="408" y="52" fill="var(--dg-accent)">S</text>
</svg>`,
    },
  ],
});
