// Class 12 Chemistry diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(12, "chemistry", {
  "solutions": [
    {
      title: "Raoult's law: an ideal solution",
      caption: "For an ideal solution the partial vapour pressure of each component is proportional to its mole fraction: **pA = xA × p°A** and **pB = xB × p°B**. Each is a straight line, and the **total vapour pressure p = pA + pB** also varies linearly between p°B and p°A.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-1-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="90" y1="270" x2="520" y2="270" marker-end="url(#ar-c12-1-1)"/><line x1="90" y1="270" x2="90" y2="40" marker-end="url(#ar-c12-1-1)"/></g>
  <line x1="90" y1="185" x2="490" y2="100" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="90" y1="270" x2="490" y2="100" stroke="currentColor" stroke-width="1.8"/>
  <line x1="90" y1="185" x2="490" y2="270" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="var(--dg-muted)" stroke-dasharray="3 3"><line x1="90" y1="100" x2="490" y2="100"/><line x1="490" y1="100" x2="490" y2="270"/></g>
  <text x="82" y="104" text-anchor="end">p°<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text x="82" y="189" text-anchor="end">p°<tspan baseline-shift="sub" font-size="10">B</tspan></text>
  <text x="82" y="274" text-anchor="end">0</text>
  <text x="45" y="150" transform="rotate(-90 45 150)" text-anchor="middle">Vapour pressure</text>
  <text x="90" y="288" text-anchor="middle">0</text>
  <text x="490" y="288" text-anchor="middle">1</text>
  <text x="90" y="304" text-anchor="start">x<tspan baseline-shift="sub" font-size="10">A</tspan> = 0, x<tspan baseline-shift="sub" font-size="10">B</tspan> = 1  (pure B)</text>
  <text x="490" y="304" text-anchor="end">x<tspan baseline-shift="sub" font-size="10">A</tspan> = 1  (pure A)</text>
  <text x="300" y="322" text-anchor="middle" fill="var(--dg-muted)">Mole fraction →</text>
  <text transform="translate(370 151) rotate(-23)" y="18" text-anchor="middle">p<tspan baseline-shift="sub" font-size="10">A</tspan> = x<tspan baseline-shift="sub" font-size="10">A</tspan> p°<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text transform="translate(378 246.2) rotate(12)" y="-8" text-anchor="middle">p<tspan baseline-shift="sub" font-size="10">B</tspan> = x<tspan baseline-shift="sub" font-size="10">B</tspan> p°<tspan baseline-shift="sub" font-size="10">B</tspan></text>
  <text transform="translate(210 159.5) rotate(-12)" y="-8" text-anchor="middle" fill="var(--dg-accent)">p<tspan baseline-shift="sub" font-size="10">total</tspan> = p<tspan baseline-shift="sub" font-size="10">A</tspan> + p<tspan baseline-shift="sub" font-size="10">B</tspan></text>
</svg>`,
    },
    {
      title: "Positive deviation from Raoult's law",
      caption: "A–B attractions are **weaker** than A–A and B–B attractions, so the molecules escape more easily. Both partial pressures pA, pB and the total lie **above** the Raoult's-law lines (ΔmixH > 0, ΔmixV > 0). Example: ethanol + acetone.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-1-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="90" y1="270" x2="520" y2="270" marker-end="url(#ar-c12-1-2)"/><line x1="90" y1="270" x2="90" y2="40" marker-end="url(#ar-c12-1-2)"/></g>
  <g fill="none" stroke="var(--dg-muted)" stroke-dasharray="5 4"><line x1="90" y1="270" x2="490" y2="100"/><line x1="90" y1="185" x2="490" y2="270"/><line x1="90" y1="185" x2="490" y2="100"/></g>
  <path d="M90 185L100 179.2L110 173.8L120 168.9L130 164.2L140 159.9L150 155.9L160 152.2L170 148.7L180 145.4L190 142.3L200 139.5L210 136.8L220 134.3L230 131.9L240 129.6L250 127.5L260 125.5L270 123.6L280 121.7L290 120L300 118.4L310 116.8L320 115.3L330 113.9L340 112.5L350 111.2L360 109.9L370 108.8L380 107.6L390 106.6L400 105.6L410 104.6L420 103.8L430 103L440 102.3L450 101.6L460 101.1L470 100.6L480 100.2L490 100" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M90 270L100 262.1L110 254.7L120 247.8L130 241.2L140 235L150 229.2L160 223.7L170 218.5L180 213.5L190 208.7L200 204.2L210 199.9L220 195.7L230 191.7L240 187.8L250 184.1L260 180.4L270 176.9L280 173.4L290 170L300 166.7L310 163.3L320 160.1L330 156.8L340 153.6L350 150.3L360 147.1L370 143.8L380 140.5L390 137.2L400 133.8L410 130.4L420 126.9L430 123.4L440 119.7L450 116L460 112.2L470 108.2L480 104.2L490 100" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M90 185L100 187.1L110 189.1L120 191.1L130 193L140 194.9L150 196.7L160 198.5L170 200.2L180 201.9L190 203.6L200 205.3L210 206.9L220 208.5L230 210.2L240 211.8L250 213.4L260 215L270 216.7L280 218.3L290 220L300 221.7L310 223.4L320 225.2L330 227L340 228.9L350 230.8L360 232.9L370 234.9L380 237.1L390 239.4L400 241.7L410 244.2L420 246.8L430 249.6L440 252.5L450 255.6L460 258.9L470 262.4L480 266.1L490 270" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="82" y="104" text-anchor="end">p°<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text x="82" y="189" text-anchor="end">p°<tspan baseline-shift="sub" font-size="10">B</tspan></text>
  <text x="82" y="274" text-anchor="end">0</text>
  <text x="45" y="150" transform="rotate(-90 45 150)" text-anchor="middle">Vapour pressure</text>
  <text x="90" y="288" text-anchor="middle">0</text>
  <text x="490" y="288" text-anchor="middle">1</text>
  <text x="90" y="304" text-anchor="start">x<tspan baseline-shift="sub" font-size="10">A</tspan> = 0  (pure B)</text>
  <text x="490" y="304" text-anchor="end">x<tspan baseline-shift="sub" font-size="10">A</tspan> = 1  (pure A)</text>
  <text x="300" y="322" text-anchor="middle" fill="var(--dg-muted)">Mole fraction →</text>
  <line x1="110" y1="48" x2="140" y2="48" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="146" y="52" fill="var(--dg-muted)">ideal (Raoult's law)</text>
  <line x1="110" y1="68" x2="140" y2="68" stroke="currentColor" stroke-width="1.8"/>
  <text x="146" y="72">actual p<tspan baseline-shift="sub" font-size="10">A</tspan> and p<tspan baseline-shift="sub" font-size="10">B</tspan></text>
  <line x1="110" y1="88" x2="140" y2="88" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="146" y="92" fill="var(--dg-accent)">actual p<tspan baseline-shift="sub" font-size="10">total</tspan></text>
</svg>`,
    },
    {
      title: "Negative deviation from Raoult's law",
      caption: "A–B attractions are **stronger** than A–A and B–B attractions, so escape is harder. The pressures lie **below** the Raoult's-law lines (ΔmixH < 0, ΔmixV < 0). Example: chloroform + acetone.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-1-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="90" y1="270" x2="520" y2="270" marker-end="url(#ar-c12-1-3)"/><line x1="90" y1="270" x2="90" y2="40" marker-end="url(#ar-c12-1-3)"/></g>
  <g fill="none" stroke="var(--dg-muted)" stroke-dasharray="5 4"><line x1="90" y1="270" x2="490" y2="100"/><line x1="90" y1="185" x2="490" y2="270"/><line x1="90" y1="185" x2="490" y2="100"/></g>
  <path d="M90 185L100 184.8L110 184.4L120 184L130 183.5L140 182.9L150 182.2L160 181.4L170 180.5L180 179.4L190 178.3L200 177L210 175.6L220 174.1L230 172.5L240 170.7L250 168.9L260 166.9L270 164.8L280 162.6L290 160.3L300 157.8L310 155.3L320 152.7L330 149.9L340 147.1L350 144.2L360 141.3L370 138.3L380 135.2L390 132L400 128.9L410 125.6L420 122.4L430 119.2L440 115.9L450 112.7L460 109.5L470 106.3L480 103.1L490 100" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M90 270L100 267.6L110 265.1L120 262.4L130 259.5L140 256.6L150 253.5L160 250.2L170 246.8L180 243.3L190 239.7L200 235.9L210 232L220 228L230 223.8L240 219.6L250 215.2L260 210.8L270 206.2L280 201.6L290 196.8L300 192.1L310 187.2L320 182.3L330 177.3L340 172.3L350 167.3L360 162.3L370 157.3L380 152.2L390 147.2L400 142.2L410 137.2L420 132.3L430 127.4L440 122.6L450 117.9L460 113.3L470 108.7L480 104.3L490 100" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M90 185L100 187.2L110 189.4L120 191.6L130 194L140 196.3L150 198.7L160 201.2L170 203.6L180 206.1L190 208.6L200 211.1L210 213.6L220 216.1L230 218.7L240 221.2L250 223.7L260 226.1L270 228.6L280 231L290 233.4L300 235.8L310 238.1L320 240.4L330 242.6L340 244.8L350 246.9L360 249L370 251L380 252.9L390 254.8L400 256.7L410 258.4L420 260.1L430 261.7L440 263.3L450 264.8L460 266.2L470 267.5L480 268.8L490 270" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="82" y="104" text-anchor="end">p°<tspan baseline-shift="sub" font-size="10">A</tspan></text>
  <text x="82" y="189" text-anchor="end">p°<tspan baseline-shift="sub" font-size="10">B</tspan></text>
  <text x="82" y="274" text-anchor="end">0</text>
  <text x="45" y="150" transform="rotate(-90 45 150)" text-anchor="middle">Vapour pressure</text>
  <text x="90" y="288" text-anchor="middle">0</text>
  <text x="490" y="288" text-anchor="middle">1</text>
  <text x="90" y="304" text-anchor="start">x<tspan baseline-shift="sub" font-size="10">A</tspan> = 0  (pure B)</text>
  <text x="490" y="304" text-anchor="end">x<tspan baseline-shift="sub" font-size="10">A</tspan> = 1  (pure A)</text>
  <text x="300" y="322" text-anchor="middle" fill="var(--dg-muted)">Mole fraction →</text>
  <line x1="110" y1="48" x2="140" y2="48" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="146" y="52" fill="var(--dg-muted)">ideal (Raoult's law)</text>
  <line x1="110" y1="68" x2="140" y2="68" stroke="currentColor" stroke-width="1.8"/>
  <text x="146" y="72">actual p<tspan baseline-shift="sub" font-size="10">A</tspan> and p<tspan baseline-shift="sub" font-size="10">B</tspan></text>
  <line x1="110" y1="88" x2="140" y2="88" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="146" y="92" fill="var(--dg-accent)">actual p<tspan baseline-shift="sub" font-size="10">total</tspan></text>
</svg>`,
    },
    {
      title: "Vapour pressure curves: elevation of boiling point and depression of freezing point",
      caption: "A non-volatile solute **lowers the vapour pressure** of the solvent, so the solution curve lies below the pure-solvent curve. It reaches 1 atm at a higher temperature (**ΔTb = Tb − T°b**) and meets the solid curve at a lower temperature (**ΔTf = T°f − Tf**).",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-1-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="70" y1="270" x2="520" y2="270" marker-end="url(#ar-c12-1-4)"/><line x1="70" y1="270" x2="70" y2="30" marker-end="url(#ar-c12-1-4)"/></g>
  <path d="M250 226L255 224.2L260 222.3L265 220.4L270 218.3L275 216.2L280 214L285 211.7L290 209.4L295 206.9L300 204.3L305 201.6L310 198.8L315 195.9L320 192.9L325 189.8L330 186.5L335 183.1L340 179.5L345 175.8L350 172L355 168L360 163.8L365 159.5L370 155L375 150.3L380 145.4L385 140.3L390 135L395 129.5L400 123.8L405 117.8L410 111.6L415 105.2L420 98.4L425 91.4L430 84.2L435 76.6L440 68.7L445 60.5L450 51.9" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M199 249.5L205.3 248.4L211.6 247.3L217.8 246.2L224.1 244.9L230.4 243.7L236.7 242.3L242.9 240.9L249.2 239.4L255.5 237.8L261.8 236.1L268 234.4L274.3 232.6L280.6 230.6L286.9 228.6L293.1 226.5L299.4 224.2L305.7 221.9L312 219.4L318.2 216.8L324.5 214.1L330.8 211.2L337.1 208.2L343.3 205L349.6 201.6L355.9 198.1L362.2 194.4L368.4 190.5L374.7 186.4L381 182.1L387.3 177.6L393.5 172.8L399.8 167.8L406.1 162.6L412.4 157L418.6 151.2L424.9 145.1L431.2 138.7L437.5 131.9L443.7 124.8L450 117.3" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M150 260.2L152.5 259.8L155 259.4L157.5 259L160 258.6L162.5 258.1L165 257.7L167.5 257.2L170 256.7L172.5 256.2L175 255.7L177.5 255.2L180 254.6L182.5 254L185 253.4L187.5 252.8L190 252.1L192.5 251.4L195 250.7L197.5 250L200 249.2L202.5 248.4L205 247.6L207.5 246.7L210 245.8L212.5 244.9L215 244L217.5 243L220 241.9L222.5 240.9L225 239.7L227.5 238.6L230 237.4L232.5 236.1L235 234.8L237.5 233.5L240 232.1L242.5 230.7L245 229.1L247.5 227.6L250 226" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="70" y1="155" x2="470" y2="155" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="62" y="159" text-anchor="end">1 atm</text>
  <line x1="199" y1="249.5034375970033" x2="199" y2="270" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="199" y="288" text-anchor="middle">T<tspan baseline-shift="sub" font-size="10">f</tspan></text>
  <line x1="250" y1="225.9673181128621" x2="250" y2="270" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="250" y="288" text-anchor="middle">T°<tspan baseline-shift="sub" font-size="10">f</tspan></text>
  <line x1="370" y1="155" x2="370" y2="270" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="370" y="288" text-anchor="middle">T°<tspan baseline-shift="sub" font-size="10">b</tspan></text>
  <line x1="414.5843679923415" y1="155" x2="414.5843679923415" y2="270" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="414.6" y="288" text-anchor="middle">T<tspan baseline-shift="sub" font-size="10">b</tspan></text>
  <line x1="372" y1="248" x2="412.6" y2="248" stroke="currentColor" fill="none" marker-end="url(#ar-c12-1-4)"/>
  <text x="392.3" y="264" text-anchor="middle">ΔT<tspan baseline-shift="sub" font-size="10">b</tspan></text>
  <line x1="248" y1="248" x2="201" y2="248" stroke="currentColor" fill="none" marker-end="url(#ar-c12-1-4)"/>
  <text x="224.5" y="264" text-anchor="middle">ΔT<tspan baseline-shift="sub" font-size="10">f</tspan></text>
  <text x="25" y="150" transform="rotate(-90 25 150)" text-anchor="middle">Vapour pressure</text>
  <text x="290" y="310" text-anchor="middle" fill="var(--dg-muted)">Temperature →</text>
  <text x="180" y="226.1" text-anchor="end">Solid solvent</text>
  <text x="424" y="70.2" text-anchor="end">Pure solvent</text>
  <text x="464" y="123.2" text-anchor="start" fill="var(--dg-accent)">Solution</text>
</svg>`,
    },
  ],
  "electrochemistry": [
    {
      title: "Daniell cell",
      caption: "Zn rod in ZnSO₄ (**anode, −**, oxidation) and Cu rod in CuSO₄ (**cathode, +**, reduction). **Electrons flow in the external wire from Zn to Cu**; conventional current flows the opposite way. The **salt bridge** completes the circuit and keeps both solutions electrically neutral: anions move towards the anode compartment and cations towards the cathode compartment. Cell reaction: Zn + Cu²⁺ → Zn²⁺ + Cu; cell representation Zn | Zn²⁺ (C₁) ‖ Cu²⁺ (C₂) | Cu.",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-2-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c12-2-1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M50 150 V290 H215 V150" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M345 150 V290 H510 V150" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="51" y="185" width="163" height="104" fill="var(--dg-fill)" opacity="0.8"/>
  <rect x="346" y="185" width="163" height="104" fill="var(--dg-fill)" opacity="0.8"/>
  <rect x="112" y="95" width="16" height="165" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="432" y="95" width="16" height="165" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M175 205 V122 H385 V205 M189 205 V136 H371 V205" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <line x1="175" y1="205" x2="189" y2="205" stroke="currentColor" stroke-width="1.6"/><line x1="371" y1="205" x2="385" y2="205" stroke="currentColor" stroke-width="1.6"/>
  <path d="M120 95 V48 H262 M298 48 H440 V95" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="280" cy="48" r="18" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="280" y="53" text-anchor="middle">V</text>
  <line x1="150" y1="36" x2="215" y2="36" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c12-2-1a)"/>
  <text x="182" y="28" text-anchor="middle" fill="var(--dg-accent)">e⁻ flow</text>
  <line x1="410" y1="36" x2="345" y2="36" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar-c12-2-1)"/>
  <text x="378" y="28" text-anchor="middle">current</text>
  <text x="272" y="100" text-anchor="end" font-size="12">← anions (Cl⁻ / NO₃⁻)</text>
  <text x="288" y="100" text-anchor="start" font-size="12">cations (K⁺) →</text>
  <text x="280" y="170" text-anchor="middle">Salt bridge</text>
  <text x="280" y="187" text-anchor="middle" fill="var(--dg-muted)" font-size="12">(KCl / KNO₃ in agar)</text>
  <text x="60" y="278" text-anchor="start" font-size="12">ZnSO₄ solution</text>
  <text x="500" y="278" text-anchor="end" font-size="12">CuSO₄ solution</text>
  <text x="50" y="315" text-anchor="start">Zn anode (−)</text>
  <text x="50" y="333" text-anchor="start" fill="var(--dg-muted)" font-size="12">Oxidation: Zn → Zn²⁺ + 2e⁻</text>
  <text x="510" y="315" text-anchor="end">Cu cathode (+)</text>
  <text x="510" y="333" text-anchor="end" fill="var(--dg-muted)" font-size="12">Reduction: Cu²⁺ + 2e⁻ → Cu</text>
</svg>`,
    },
    {
      title: "Molar conductivity against square root of concentration",
      caption: "Λm of a **strong electrolyte** falls slowly and linearly with c^½ (**Λm = Λ°m − A c^½**, Debye–Hückel–Onsager), so Λ°m is the intercept. A **weak electrolyte** shows a steep rise on dilution as its degree of dissociation increases, so Λ°m cannot be found by extrapolation; use **Kohlrausch's law of independent migration of ions** instead.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-2-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="90" y1="270" x2="510" y2="270" marker-end="url(#ar-c12-2-2)"/><line x1="90" y1="270" x2="90" y2="40" marker-end="url(#ar-c12-2-2)"/></g>
  <line x1="90" y1="70" x2="470" y2="150" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M96.3 85L102.7 97.4L109 112.6L115.3 127.5L121.7 140.9L128 152.6L134.3 162.6L140.7 171.2L147 178.7L153.3 185.2L159.7 190.8L166 195.8L172.3 200.2L178.7 204.2L185 207.7L191.3 210.9L197.7 213.7L204 216.3L210.3 218.7L216.7 220.9L223 222.9L229.3 224.8L235.7 226.5L242 228.1L248.3 229.5L254.7 230.9L261 232.2L267.3 233.4L273.7 234.5L280 235.6L286.3 236.6L292.7 237.6L299 238.5L305.3 239.3L311.7 240.1L318 240.9L324.3 241.6L330.7 242.3L337 242.9L343.3 243.6L349.7 244.2L356 244.7L362.3 245.3L368.7 245.8L375 246.3L381.3 246.8L387.7 247.2L394 247.7L400.3 248.1L406.7 248.5L413 248.9L419.3 249.3L425.7 249.7L432 250L438.3 250.4L444.7 250.7L451 251L457.3 251.3L463.7 251.6L470 251.9" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <line x1="86" y1="70" x2="90" y2="70" stroke="currentColor"/>
  <text x="82" y="74" text-anchor="end">Λ°<tspan baseline-shift="sub" font-size="10">m</tspan></text>
  <text x="490" y="288" text-anchor="middle">c<tspan baseline-shift="super" font-size="10">1/2</tspan></text>
  <text x="84" y="286" text-anchor="end">0</text>
  <text x="45" y="150" transform="rotate(-90 45 150)" text-anchor="middle">Molar conductivity, Λ<tspan baseline-shift="sub" font-size="10">m</tspan></text>
  <text transform="translate(299 114) rotate(12)" y="-10" text-anchor="middle" fill="var(--dg-accent)">Strong electrolyte (e.g. KCl)</text>
  <text x="249.6" y="189.8" text-anchor="start">Weak electrolyte</text>
  <text x="249.6" y="205.8" text-anchor="start" font-size="12">(e.g. CH₃COOH)</text>
  <text x="280" y="310" text-anchor="middle" fill="var(--dg-muted)">Square root of concentration →</text>
</svg>`,
    },
  ],
  "chemical-kinetics": [
    {
      title: "Zero-order reaction",
      caption: "For a zero-order reaction the **concentration falls linearly with time** (slope = −k, intercept [R]₀) and the **rate is constant**, independent of the reactant concentration. Units of k: mol L⁻¹ s⁻¹.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-3-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="70" y1="250" x2="240" y2="250" marker-end="url(#ar-c12-3-1)"/><line x1="70" y1="250" x2="70" y2="60" marker-end="url(#ar-c12-3-1)"/></g>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="350" y1="250" x2="520" y2="250" marker-end="url(#ar-c12-3-1)"/><line x1="350" y1="250" x2="350" y2="60" marker-end="url(#ar-c12-3-1)"/></g>
  <text x="155" y="28" text-anchor="middle">[R] = −kt + [R]<tspan baseline-shift="sub" font-size="10">0</tspan></text>
  <text x="435" y="28" text-anchor="middle">Rate = k[R]⁰ = k</text>
  <line x1="70" y1="100" x2="210" y2="250" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="64" y="104" text-anchor="end">[R]<tspan baseline-shift="sub" font-size="10">0</tspan></text>
  <text x="165" y="152" fill="var(--dg-accent)">slope = −k</text>
  <text transform="translate(32 160) rotate(-90)" text-anchor="middle">Concentration [R]</text>
  <text x="155" y="282" text-anchor="middle" fill="var(--dg-muted)">Time, t →</text>
  <line x1="350" y1="140" x2="500" y2="140" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="344" y="144" text-anchor="end">k</text>
  <text x="425" y="118" text-anchor="middle" fill="var(--dg-accent)">Rate is independent of [R]</text>
  <text transform="translate(312 160) rotate(-90)" text-anchor="middle">Rate of reaction</text>
  <text x="435" y="282" text-anchor="middle" fill="var(--dg-muted)">Concentration [R] →</text>
</svg>`,
    },
    {
      title: "First-order reaction",
      caption: "The concentration of a first-order reactant **decays exponentially**; each half-life halves it ([R]₀ → [R]₀/2 → [R]₀/4) and t½ = 0.693/k is **independent of the initial concentration**. A plot of **ln [R] against t is a straight line with slope −k**. Units of k: s⁻¹.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-3-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="70" y1="250" x2="240" y2="250" marker-end="url(#ar-c12-3-2)"/><line x1="70" y1="250" x2="70" y2="60" marker-end="url(#ar-c12-3-2)"/></g>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="350" y1="250" x2="520" y2="250" marker-end="url(#ar-c12-3-2)"/><line x1="350" y1="250" x2="350" y2="60" marker-end="url(#ar-c12-3-2)"/></g>
  <text x="155" y="28" text-anchor="middle">[R] = [R]<tspan baseline-shift="sub" font-size="10">0</tspan> e<tspan baseline-shift="super" font-size="10">−kt</tspan></text>
  <text x="435" y="28" text-anchor="middle">ln [R] = −kt + ln [R]<tspan baseline-shift="sub" font-size="10">0</tspan></text>
  <path d="M70 100L74.1 107.6L78.3 114.8L82.4 121.7L86.5 128.2L90.6 134.3L94.8 140.2L98.9 145.8L103 151L107.1 156.1L111.3 160.8L115.4 165.3L119.5 169.6L123.6 173.7L127.8 177.6L131.9 181.2L136 184.7L140.1 188L144.3 191.2L148.4 194.1L152.5 197L156.6 199.7L160.8 202.2L164.9 204.6L169 206.9L173.1 209.1L177.3 211.2L181.4 213.1L185.5 215L189.6 216.8L193.8 218.5L197.9 220.1L202 221.6L206.1 223L210.3 224.4L214.4 225.7L218.5 226.9L222.6 228.1L226.8 229.2L230.9 230.2L235 231.3" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3"><line x1="70" y1="175" x2="125" y2="175"/><line x1="125" y1="175" x2="125" y2="250"/><line x1="70" y1="212.5" x2="180" y2="212.5"/><line x1="180" y1="212.5" x2="180" y2="250"/></g>
  <text x="64" y="104" text-anchor="end">[R]<tspan baseline-shift="sub" font-size="10">0</tspan></text>
  <text x="64" y="179" text-anchor="end" font-size="12">[R]<tspan baseline-shift="sub" font-size="10">0</tspan>/2</text>
  <text x="64" y="216.5" text-anchor="end" font-size="12">[R]<tspan baseline-shift="sub" font-size="10">0</tspan>/4</text>
  <text x="125" y="266" text-anchor="middle" font-size="12">t<tspan baseline-shift="sub" font-size="10">½</tspan></text>
  <text x="180" y="266" text-anchor="middle" font-size="12">2t<tspan baseline-shift="sub" font-size="10">½</tspan></text>
  <text transform="translate(22 160) rotate(-90)" text-anchor="middle">Concentration [R]</text>
  <text x="155" y="286" text-anchor="middle" fill="var(--dg-muted)">Time, t →</text>
  <line x1="350" y1="90" x2="500" y2="230" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="344" y="94" text-anchor="end">ln [R]<tspan baseline-shift="sub" font-size="10">0</tspan></text>
  <text x="430" y="150" fill="var(--dg-accent)">slope = −k</text>
  <text transform="translate(302 160) rotate(-90)" text-anchor="middle">ln [R]</text>
  <text x="435" y="286" text-anchor="middle" fill="var(--dg-muted)">Time, t →</text>
</svg>`,
    },
    {
      title: "Arrhenius plot: ln k against 1/T",
      caption: "Taking logs of k = A e^(−Eₐ/RT) gives **ln k = ln A − E_{a}/RT**, a straight line. **Slope = −Eₐ/R** (so Eₐ = −2.303 R × slope when log₁₀ k is plotted) and the intercept on the ln k axis is ln A. A larger slope means a greater activation energy and a stronger temperature dependence.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-3-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="90" y1="270" x2="510" y2="270" marker-end="url(#ar-c12-3-3)"/><line x1="90" y1="270" x2="90" y2="35" marker-end="url(#ar-c12-3-3)"/></g>
  <line x1="90" y1="85" x2="470" y2="235" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="82" y="89" text-anchor="end">ln A</text>
  <circle cx="90" cy="85" r="3" fill="currentColor"/>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3" fill="none"><line x1="250" y1="148" x2="400" y2="148"/><line x1="400" y1="148" x2="400" y2="207.2"/></g>
  <text x="325" y="140" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Δ(1/T)</text>
  <text x="408" y="182" font-size="12" fill="var(--dg-muted)">Δ ln k</text>
  <text x="300" y="100" fill="var(--dg-accent)">slope = −E<tspan baseline-shift="sub" font-size="10">a</tspan>/R</text>
  <text x="300" y="118" font-size="12" fill="var(--dg-muted)">(ln k = ln A − E<tspan baseline-shift="sub" font-size="10">a</tspan>/RT)</text>
  <text transform="translate(48 150) rotate(-90)" text-anchor="middle">ln k</text>
  <text x="300" y="304" text-anchor="middle">1/T →</text>
  <text x="90" y="286" text-anchor="middle">0</text>
  <text x="500" y="262" text-anchor="end" font-size="12" fill="var(--dg-muted)">low T</text>
  <text x="98" y="262" font-size="12" fill="var(--dg-muted)">high T</text>
</svg>`,
    },
    {
      title: "Energy profile: effect of a catalyst",
      caption: "A catalyst provides an **alternative path with a lower activation energy** (Eₐ′ < Eₐ), so a larger fraction of molecules have enough energy to react and the rate rises. It **does not change ΔH** (here an exothermic reaction) or the position of equilibrium; both forward and reverse activation energies fall by the same amount.",
      svg: `<svg viewBox="0 0 560 325" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-3-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c12-3-4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g stroke="currentColor" stroke-width="1.6" fill="none"><line x1="50" y1="280" x2="520" y2="280" marker-end="url(#ar-c12-3-4)"/><line x1="50" y1="280" x2="50" y2="25" marker-end="url(#ar-c12-3-4)"/></g>
  <path d="M70 190 H120 C175 190 195 50 255 50 C320 50 340 245 400 245 H470" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <path d="M120 190 C165 190 190 115 255 115 C320 115 340 245 400 245" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="70" y1="50" x2="255" y2="50" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="400" y1="245" x2="500" y2="245" stroke="var(--dg-muted)" stroke-dasharray="4 3"/><line x1="470" y1="190" x2="500" y2="190" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <line x1="85" y1="188" x2="85" y2="52" stroke="currentColor" marker-end="url(#ar-c12-3-4)"/>
  <text x="79" y="125" text-anchor="end">E<tspan baseline-shift="sub" font-size="10">a</tspan></text>
  <line x1="145" y1="190" x2="145" y2="117" stroke="var(--dg-accent)" marker-end="url(#ar-c12-3-4a)"/>
  <line x1="145" y1="115" x2="255" y2="115" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="139" y="158" text-anchor="end" fill="var(--dg-accent)">E<tspan baseline-shift="sub" font-size="10">a</tspan>′</text>
  <line x1="490" y1="192" x2="490" y2="243" stroke="currentColor" marker-end="url(#ar-c12-3-4)"/>
  <text x="484" y="222" text-anchor="end">ΔH</text>
  <text x="95" y="208" text-anchor="middle">Reactants</text>
  <text x="430" y="265" text-anchor="middle">Products</text>
  <text x="255" y="38" text-anchor="middle" font-size="12">Activated complex</text>
  <text x="345" y="88" font-size="13">Without catalyst</text>
  <text x="362" y="160" fill="var(--dg-accent)">With catalyst</text>
  <text transform="translate(18 150) rotate(-90)" text-anchor="middle">Potential energy</text>
  <text x="285" y="306" text-anchor="middle" fill="var(--dg-muted)">Reaction coordinate →</text>
</svg>`,
    },
  ],
  "coordination-compounds": [
    {
      title: "Crystal field splitting in octahedral and tetrahedral complexes",
      caption: "In an **octahedral** field the ligands approach along the axes, so the two **eg** orbitals (dz², dx²−y²) rise by 0.6Δo and the three **t₂g** orbitals (dxy, dyz, dzx) fall by 0.4Δo about the barycentre. In a **tetrahedral** field the order is reversed (**e** lower, **t₂** higher) and the splitting is only Δt = 4/9 Δo.",
      svg: `<svg viewBox="0 0 560 265" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-5-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="140" y="34" text-anchor="middle">Octahedral field</text>
  <text x="405" y="34" text-anchor="middle">Tetrahedral field</text>
  <line x1="90" y1="150" x2="200" y2="150" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="205" y="154" font-size="12" fill="var(--dg-muted)">Barycentre</text>
  <line x1="120" y1="90" x2="146" y2="90" stroke="currentColor" stroke-width="2.4"/><line x1="154" y1="90" x2="180" y2="90" stroke="currentColor" stroke-width="2.4"/>
  <line x1="103" y1="190" x2="129" y2="190" stroke="currentColor" stroke-width="2.4"/><line x1="137" y1="190" x2="163" y2="190" stroke="currentColor" stroke-width="2.4"/><line x1="171" y1="190" x2="197" y2="190" stroke="currentColor" stroke-width="2.4"/>
  <g stroke="currentColor" fill="none"><line x1="80" y1="140" x2="80" y2="91" marker-end="url(#ar-c12-5-1)"/><line x1="80" y1="140" x2="80" y2="189" marker-end="url(#ar-c12-5-1)"/></g>
  <text x="72" y="144" text-anchor="end">Δ<tspan baseline-shift="sub" font-size="10">o</tspan></text>
  <text x="205" y="94">e<tspan baseline-shift="sub" font-size="10">g</tspan>  (+0.6Δ<tspan baseline-shift="sub" font-size="10">o</tspan>)</text>
  <text x="205" y="110" font-size="12" fill="var(--dg-muted)">d<tspan baseline-shift="sub" font-size="10">z²</tspan>, d<tspan baseline-shift="sub" font-size="10">x²−y²</tspan></text>
  <text x="205" y="194">t<tspan baseline-shift="sub" font-size="10">2g</tspan>  (−0.4Δ<tspan baseline-shift="sub" font-size="10">o</tspan>)</text>
  <text x="205" y="210" font-size="12" fill="var(--dg-muted)">d<tspan baseline-shift="sub" font-size="10">xy</tspan>, d<tspan baseline-shift="sub" font-size="10">yz</tspan>, d<tspan baseline-shift="sub" font-size="10">zx</tspan></text>
  <line x1="345" y1="150" x2="455" y2="150" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="460" y="154" font-size="12" fill="var(--dg-muted)">Barycentre</text>
  <line x1="358" y1="132" x2="384" y2="132" stroke="currentColor" stroke-width="2.4"/><line x1="392" y1="132" x2="418" y2="132" stroke="currentColor" stroke-width="2.4"/><line x1="426" y1="132" x2="452" y2="132" stroke="currentColor" stroke-width="2.4"/>
  <line x1="375" y1="176" x2="401" y2="176" stroke="currentColor" stroke-width="2.4"/><line x1="409" y1="176" x2="435" y2="176" stroke="currentColor" stroke-width="2.4"/>
  <g stroke="currentColor" fill="none"><line x1="335" y1="154" x2="335" y2="133" marker-end="url(#ar-c12-5-1)"/><line x1="335" y1="154" x2="335" y2="175" marker-end="url(#ar-c12-5-1)"/></g>
  <text x="327" y="159" text-anchor="end">Δ<tspan baseline-shift="sub" font-size="10">t</tspan></text>
  <text x="462" y="136">t<tspan baseline-shift="sub" font-size="10">2</tspan> (+0.4Δ<tspan baseline-shift="sub" font-size="10">t</tspan>)</text>
  <text x="462" y="180">e (−0.6Δ<tspan baseline-shift="sub" font-size="10">t</tspan>)</text>
  <text x="140" y="250" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Free ion: five degenerate d orbitals</text>
  <text x="405" y="250" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Δ<tspan baseline-shift="sub" font-size="10">t</tspan> = 4/9 Δ<tspan baseline-shift="sub" font-size="10">o</tspan>: smaller, usually high spin</text>
</svg>`,
    },
    {
      title: "d⁴ complex: high-spin and low-spin octahedral",
      caption: "The fourth electron goes into **eg** if the splitting Δo is smaller than the pairing energy **P** (weak-field ligands, **high spin**), and pairs up in **t₂g** if Δo > P (strong-field ligands, **low spin**). Low-spin complexes have fewer unpaired electrons and so are less paramagnetic.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-5-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-c12-5-2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="150" y="30" text-anchor="middle">Weak-field ligand: Δ<tspan baseline-shift="sub" font-size="10">o</tspan> &lt; P</text>
  <line x1="120" y1="150" x2="146" y2="150" stroke="currentColor" stroke-width="2.4"/><line x1="154" y1="150" x2="180" y2="150" stroke="currentColor" stroke-width="2.4"/>
  <line x1="103" y1="210" x2="129" y2="210" stroke="currentColor" stroke-width="2.4"/><line x1="137" y1="210" x2="163" y2="210" stroke="currentColor" stroke-width="2.4"/><line x1="171" y1="210" x2="197" y2="210" stroke="currentColor" stroke-width="2.4"/>
  <text x="218" y="154">e<tspan baseline-shift="sub" font-size="10">g</tspan></text>
  <text x="218" y="214">t<tspan baseline-shift="sub" font-size="10">2g</tspan></text>
  <g stroke="currentColor" fill="none"><line x1="72" y1="180" x2="72" y2="151" marker-end="url(#ar-c12-5-2)"/><line x1="72" y1="180" x2="72" y2="209" marker-end="url(#ar-c12-5-2)"/></g>
  <text x="64" y="184" text-anchor="end">Δ<tspan baseline-shift="sub" font-size="10">o</tspan></text>
  <path d="M116 207V184" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <path d="M150 207V184" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <path d="M184 207V184" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <path d="M133 147V124" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <text x="150" y="262" text-anchor="middle">t<tspan baseline-shift="sub" font-size="10">2g</tspan>³ e<tspan baseline-shift="sub" font-size="10">g</tspan>¹</text>
  <text x="150" y="280" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4 unpaired electrons: high spin</text>
  <text x="150" y="298" text-anchor="middle" font-size="12" fill="var(--dg-muted)">CFSE = −0.6Δ<tspan baseline-shift="sub" font-size="10">o</tspan></text>
  <text x="420" y="30" text-anchor="middle">Strong-field ligand: Δ<tspan baseline-shift="sub" font-size="10">o</tspan> &gt; P</text>
  <line x1="390" y1="110" x2="416" y2="110" stroke="currentColor" stroke-width="2.4"/><line x1="424" y1="110" x2="450" y2="110" stroke="currentColor" stroke-width="2.4"/>
  <line x1="373" y1="210" x2="399" y2="210" stroke="currentColor" stroke-width="2.4"/><line x1="407" y1="210" x2="433" y2="210" stroke="currentColor" stroke-width="2.4"/><line x1="441" y1="210" x2="467" y2="210" stroke="currentColor" stroke-width="2.4"/>
  <text x="488" y="114">e<tspan baseline-shift="sub" font-size="10">g</tspan></text>
  <text x="488" y="214">t<tspan baseline-shift="sub" font-size="10">2g</tspan></text>
  <g stroke="currentColor" fill="none"><line x1="342" y1="160" x2="342" y2="111" marker-end="url(#ar-c12-5-2)"/><line x1="342" y1="160" x2="342" y2="209" marker-end="url(#ar-c12-5-2)"/></g>
  <text x="334" y="164" text-anchor="end">Δ<tspan baseline-shift="sub" font-size="10">o</tspan></text>
  <path d="M380 207V184" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <path d="M392 184V207" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <path d="M420 207V184" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <path d="M454 207V184" stroke="var(--dg-accent)" stroke-width="1.8" fill="none" marker-end="url(#ar-c12-5-2a)"/>
  <text x="420" y="262" text-anchor="middle">t<tspan baseline-shift="sub" font-size="10">2g</tspan>⁴ e<tspan baseline-shift="sub" font-size="10">g</tspan>⁰</text>
  <text x="420" y="280" text-anchor="middle" font-size="12" fill="var(--dg-muted)">2 unpaired electrons: low spin</text>
  <text x="420" y="298" text-anchor="middle" font-size="12" fill="var(--dg-muted)">CFSE = −1.6Δ<tspan baseline-shift="sub" font-size="10">o</tspan> + P</text>
</svg>`,
    },
    {
      title: "Geometrical isomers of a square planar complex, [Pt(NH₃)₂Cl₂]",
      caption: "A square planar MA₂B₂ complex has two geometrical isomers: **cis** (like ligands next to each other) and **trans** (like ligands on opposite sides). Cisplatin, used in cancer chemotherapy, is the cis isomer.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="140" y="105" text-anchor="middle">Pt</text>
  <line x1="140" y1="89" x2="140" y2="48" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="42" text-anchor="middle">NH₃</text>
  <line x1="151" y1="100" x2="192" y2="100" stroke="currentColor" stroke-width="1.8"/>
  <text x="198" y="104" text-anchor="start">NH₃</text>
  <line x1="140" y1="111" x2="140" y2="152" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="169" text-anchor="middle" fill="var(--dg-accent)">Cl</text>
  <line x1="129" y1="100" x2="88" y2="100" stroke="currentColor" stroke-width="1.8"/>
  <text x="82" y="104" text-anchor="end" fill="var(--dg-accent)">Cl</text>
  <text x="140" y="212" text-anchor="middle">cis-[Pt(NH₃)₂Cl₂]</text>
  <text x="140" y="230" text-anchor="middle" font-size="12" fill="var(--dg-muted)">identical ligands adjacent (90°)</text>
  <text x="420" y="105" text-anchor="middle">Pt</text>
  <line x1="420" y1="89" x2="420" y2="48" stroke="currentColor" stroke-width="1.8"/>
  <text x="420" y="42" text-anchor="middle">NH₃</text>
  <line x1="431" y1="100" x2="472" y2="100" stroke="currentColor" stroke-width="1.8"/>
  <text x="478" y="104" text-anchor="start" fill="var(--dg-accent)">Cl</text>
  <line x1="420" y1="111" x2="420" y2="152" stroke="currentColor" stroke-width="1.8"/>
  <text x="420" y="169" text-anchor="middle" fill="var(--dg-accent)">Cl</text>
  <line x1="409" y1="100" x2="368" y2="100" stroke="currentColor" stroke-width="1.8"/>
  <text x="362" y="104" text-anchor="end">NH₃</text>
  <text x="420" y="212" text-anchor="middle">trans-[Pt(NH₃)₂Cl₂]</text>
  <text x="420" y="230" text-anchor="middle" font-size="12" fill="var(--dg-muted)">identical ligands opposite (180°)</text>
</svg>`,
    },
    {
      title: "Geometrical isomers of an octahedral MA₄B₂ complex",
      caption: "In **cis**-[Co(NH₃)₄Cl₂]⁺ the two Cl⁻ ligands occupy adjacent positions (90° apart); in **trans** they occupy opposite positions (180° apart). Solid wedge = bond towards the viewer, dashed bond = away from the viewer.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="140" y="115" text-anchor="middle">Co</text>
  <line x1="140" y1="98" x2="140" y2="52" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="43" text-anchor="middle" fill="var(--dg-accent)">Cl</text>
  <line x1="140" y1="122" x2="140" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="187" text-anchor="middle">NH₃</text>
  <line x1="128" y1="110" x2="82" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="75" y="114" text-anchor="end">NH₃</text>
  <line x1="152" y1="110" x2="198" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="205" y="114" text-anchor="start" fill="var(--dg-accent)">Cl</text>
  <path d="M131.8 118.7L104.7 140.9L111.3 147.1Z" fill="currentColor"/>
  <text x="103.2" y="161.1" text-anchor="end">NH₃</text>
  <line x1="148.2" y1="101.3" x2="172" y2="76" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="176.8" y="68.9" text-anchor="start">NH₃</text>
  <text x="420" y="115" text-anchor="middle">Co</text>
  <line x1="420" y1="98" x2="420" y2="52" stroke="currentColor" stroke-width="1.8"/>
  <text x="420" y="43" text-anchor="middle" fill="var(--dg-accent)">Cl</text>
  <line x1="420" y1="122" x2="420" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <text x="420" y="187" text-anchor="middle" fill="var(--dg-accent)">Cl</text>
  <line x1="408" y1="110" x2="362" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="355" y="114" text-anchor="end">NH₃</text>
  <line x1="432" y1="110" x2="478" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="485" y="114" text-anchor="start">NH₃</text>
  <path d="M411.8 118.7L384.7 140.9L391.3 147.1Z" fill="currentColor"/>
  <text x="383.2" y="161.1" text-anchor="end">NH₃</text>
  <line x1="428.2" y1="101.3" x2="452" y2="76" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="456.8" y="68.9" text-anchor="start">NH₃</text>
  <text x="140" y="222" text-anchor="middle">cis-[Co(NH₃)₄Cl₂]⁺</text>
  <text x="140" y="240" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Cl ligands at 90°</text>
  <text x="420" y="222" text-anchor="middle">trans-[Co(NH₃)₄Cl₂]⁺</text>
  <text x="420" y="240" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Cl ligands at 180°</text>
</svg>`,
    },
    {
      title: "Facial and meridional isomers of an octahedral MA₃B₃ complex",
      caption: "In the **facial (fac)** isomer the three identical ligands occupy the corners of one triangular face (all mutually cis). In the **meridional (mer)** isomer they lie in one plane through the metal, so two of them are trans to each other.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="140" y="115" text-anchor="middle">Co</text>
  <line x1="140" y1="98" x2="140" y2="52" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="43" text-anchor="middle" fill="var(--dg-accent)">Cl</text>
  <line x1="140" y1="122" x2="140" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <text x="140" y="187" text-anchor="middle">NH₃</text>
  <line x1="128" y1="110" x2="82" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="75" y="114" text-anchor="end" fill="var(--dg-accent)">Cl</text>
  <line x1="152" y1="110" x2="198" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="205" y="114" text-anchor="start">NH₃</text>
  <path d="M131.8 118.7L104.7 140.9L111.3 147.1Z" fill="currentColor"/>
  <text x="103.2" y="161.1" text-anchor="end" fill="var(--dg-accent)">Cl</text>
  <line x1="148.2" y1="101.3" x2="172" y2="76" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="176.8" y="68.9" text-anchor="start">NH₃</text>
  <text x="420" y="115" text-anchor="middle">Co</text>
  <line x1="420" y1="98" x2="420" y2="52" stroke="currentColor" stroke-width="1.8"/>
  <text x="420" y="43" text-anchor="middle" fill="var(--dg-accent)">Cl</text>
  <line x1="420" y1="122" x2="420" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <text x="420" y="187" text-anchor="middle">NH₃</text>
  <line x1="408" y1="110" x2="362" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="355" y="114" text-anchor="end" fill="var(--dg-accent)">Cl</text>
  <line x1="432" y1="110" x2="478" y2="110" stroke="currentColor" stroke-width="1.8"/>
  <text x="485" y="114" text-anchor="start" fill="var(--dg-accent)">Cl</text>
  <path d="M411.8 118.7L384.7 140.9L391.3 147.1Z" fill="currentColor"/>
  <text x="383.2" y="161.1" text-anchor="end">NH₃</text>
  <line x1="428.2" y1="101.3" x2="452" y2="76" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="456.8" y="68.9" text-anchor="start">NH₃</text>
  <text x="140" y="222" text-anchor="middle">fac-[Co(NH₃)₃Cl₃]</text>
  <text x="140" y="240" text-anchor="middle" font-size="12" fill="var(--dg-muted)">three Cl on one face of the octahedron</text>
  <text x="420" y="222" text-anchor="middle">mer-[Co(NH₃)₃Cl₃]</text>
  <text x="420" y="240" text-anchor="middle" font-size="12" fill="var(--dg-muted)">three Cl in a meridian (one plane)</text>
</svg>`,
    },
  ],
  "haloalkanes-and-haloarenes": [
    {
      title: "SN2 mechanism and Walden inversion",
      caption: "In an **SN2** reaction the nucleophile attacks from the side **opposite** to the leaving group in a single step through a pentacoordinate transition state. The three other groups flip like an umbrella, so the product has the **inverted configuration** (Walden inversion). Rate = k[R–X][Nu⁻].",
      svg: `<svg viewBox="0 0 560 415" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-6-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="355.8" y1="68.3" x2="343" y2="33" stroke="currentColor" stroke-width="1.8"/>
  <text x="343" y="27" text-anchor="middle">H</text>
  <path d="M350.8 85.9L321.1 100.5L324.9 106.5Z" fill="currentColor"/>
  <text x="323" y="118.5" text-anchor="middle">CH₃</text>
  <line x1="360" y1="89" x2="362.2" y2="88.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="359.8" y1="92" x2="363.2" y2="91.5" stroke="currentColor" stroke-width="1.3"/>
  <line x1="359.7" y1="95" x2="364.1" y2="94.4" stroke="currentColor" stroke-width="1.3"/>
  <line x1="359.5" y1="98" x2="365" y2="97.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="359.4" y1="101" x2="365.9" y2="100.1" stroke="currentColor" stroke-width="1.3"/>
  <line x1="359.2" y1="104" x2="366.8" y2="103" stroke="currentColor" stroke-width="1.3"/>
  <text x="363" y="118.5" text-anchor="middle">C₂H₅</text>
  <text x="360" y="85" text-anchor="middle">C</text>
  <text x="294" y="85" text-anchor="end" fill="var(--dg-accent)">HO⁻</text>
  <line x1="298" y1="80" x2="348" y2="80" stroke="var(--dg-accent)" stroke-width="1.3" stroke-dasharray="5 3" marker-end="url(#ar-c12-6-1)"/>
  <line x1="369" y1="80" x2="415" y2="80" stroke="currentColor" stroke-width="1.8"/>
  <text x="419" y="85" text-anchor="start">Br</text>
  <text x="20" y="72" text-anchor="start" font-size="12.5">Reactant: HO⁻ attacks C from</text>
  <text x="20" y="88" text-anchor="start" font-size="12.5">the side opposite to Br.</text>
  <line x1="360" y1="193.3" x2="360" y2="158" stroke="currentColor" stroke-width="1.8"/>
  <text x="360" y="152" text-anchor="middle">H</text>
  <path d="M355 210.9L337.3 226.2L342.7 230.8Z" fill="currentColor"/>
  <text x="340" y="243.5" text-anchor="middle">CH₃</text>
  <line x1="366.6" y1="214.5" x2="368.4" y2="213.1" stroke="currentColor" stroke-width="1.3"/>
  <line x1="368.7" y1="217.8" x2="371.3" y2="215.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="370.8" y1="221.1" x2="374.2" y2="218.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="372.9" y1="224.4" x2="377.1" y2="220.9" stroke="currentColor" stroke-width="1.3"/>
  <line x1="375" y1="227.7" x2="380" y2="223.4" stroke="currentColor" stroke-width="1.3"/>
  <line x1="377.1" y1="231" x2="382.9" y2="226" stroke="currentColor" stroke-width="1.3"/>
  <text x="380" y="243.5" text-anchor="middle">C₂H₅</text>
  <text x="360" y="210" text-anchor="middle">C</text>
  <text x="300" y="210" text-anchor="end">HO</text>
  <text x="286" y="199" text-anchor="middle" font-size="11" fill="var(--dg-muted)">δ−</text>
  <line x1="304" y1="205" x2="351" y2="205" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="369" y1="205" x2="416" y2="205" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3"/>
  <text x="420" y="210" text-anchor="start">Br</text>
  <text x="444" y="199" text-anchor="middle" font-size="11" fill="var(--dg-muted)">δ−</text>
  <path d="M256 151H250V259H256M468 151H474V259H468" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="480" y="153" text-anchor="start">⁻‡</text>
  <text x="20" y="197" text-anchor="start" font-size="12.5">Transition state: C is partly bonded</text>
  <text x="20" y="213" text-anchor="start" font-size="12.5">to HO and to Br; a, b, c lie in</text>
  <text x="20" y="229" text-anchor="start" font-size="12.5">one plane.</text>
  <line x1="364.3" y1="318.3" x2="377" y2="283" stroke="currentColor" stroke-width="1.8"/>
  <text x="377" y="277" text-anchor="middle">H</text>
  <path d="M359.3 335.9L353.5 353.1L360.5 353.9Z" fill="currentColor"/>
  <text x="357" y="368.5" text-anchor="middle">CH₃</text>
  <line x1="373.3" y1="339.8" x2="374.5" y2="337.9" stroke="currentColor" stroke-width="1.3"/>
  <line x1="377.6" y1="343.2" x2="379.4" y2="340.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="381.9" y1="346.5" x2="384.3" y2="342.8" stroke="currentColor" stroke-width="1.3"/>
  <line x1="386.3" y1="349.9" x2="389.2" y2="345.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="390.6" y1="353.3" x2="394.1" y2="347.8" stroke="currentColor" stroke-width="1.3"/>
  <line x1="395" y1="356.7" x2="399" y2="350.3" stroke="currentColor" stroke-width="1.3"/>
  <text x="397" y="368.5" text-anchor="middle">C₂H₅</text>
  <text x="360" y="335" text-anchor="middle">C</text>
  <line x1="351" y1="330" x2="305" y2="330" stroke="currentColor" stroke-width="1.8"/>
  <text x="301" y="335" text-anchor="end">HO</text>
  <text x="445" y="335" text-anchor="middle" fill="var(--dg-accent)">Br⁻</text>
  <text x="20" y="322" text-anchor="start" font-size="12.5">Product: a, b, c have flipped like</text>
  <text x="20" y="338" text-anchor="start" font-size="12.5">an umbrella – Walden inversion of</text>
  <text x="20" y="354" text-anchor="start" font-size="12.5">configuration.</text>
  <text x="280" y="405" text-anchor="middle" font-size="12.5" fill="var(--dg-muted)">Rate = k[R–Br][HO⁻]: one step, no intermediate (bimolecular)</text>
</svg>`,
    },
    {
      title: "SN1 mechanism and racemisation",
      caption: "**SN1** is a two-step reaction. Slow loss of the leaving group gives a **planar carbocation**; the nucleophile then attacks from **either face** with equal probability, giving a **racemic mixture** (50 : 50 of the two enantiomers). Rate = k[R–X]; 3° halides react fastest.",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-6-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="20" y="50" text-anchor="start" fill="var(--dg-muted)">Step 1</text>
  <text x="20" y="200" text-anchor="start" fill="var(--dg-muted)">Step 2</text>
  <line x1="90.8" y1="73.3" x2="78" y2="38" stroke="currentColor" stroke-width="1.8"/>
  <text x="78" y="32" text-anchor="middle">H</text>
  <path d="M85.8 90.9L56.1 105.5L59.9 111.5Z" fill="currentColor"/>
  <text x="58" y="123.5" text-anchor="middle">CH₃</text>
  <line x1="95" y1="94" x2="97.2" y2="93.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="94.8" y1="97" x2="98.2" y2="96.5" stroke="currentColor" stroke-width="1.3"/>
  <line x1="94.7" y1="100" x2="99.1" y2="99.4" stroke="currentColor" stroke-width="1.3"/>
  <line x1="94.5" y1="103" x2="100" y2="102.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="94.4" y1="106" x2="100.9" y2="105.1" stroke="currentColor" stroke-width="1.3"/>
  <line x1="94.2" y1="109" x2="101.8" y2="108" stroke="currentColor" stroke-width="1.3"/>
  <text x="98" y="123.5" text-anchor="middle">C₂H₅</text>
  <text x="95" y="90" text-anchor="middle">C</text>
  <line x1="104" y1="85" x2="150" y2="85" stroke="currentColor" stroke-width="1.8"/>
  <text x="154" y="90" text-anchor="start">Br</text>
  <line x1="205" y1="85" x2="300" y2="85" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-6-2)"/>
  <text x="252.5" y="63" text-anchor="middle" font-size="12">slow</text>
  <text x="252.5" y="77" text-anchor="middle" font-size="12">(rate-determining)</text>
  <line x1="375" y1="73.3" x2="375" y2="38" stroke="currentColor" stroke-width="1.8"/>
  <text x="375" y="32" text-anchor="middle">H</text>
  <path d="M370 90.9L352.3 106.2L357.7 110.8Z" fill="currentColor"/>
  <text x="355" y="123.5" text-anchor="middle">CH₃</text>
  <line x1="381.6" y1="94.5" x2="383.4" y2="93.1" stroke="currentColor" stroke-width="1.3"/>
  <line x1="383.7" y1="97.8" x2="386.3" y2="95.7" stroke="currentColor" stroke-width="1.3"/>
  <line x1="385.8" y1="101.1" x2="389.2" y2="98.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="387.9" y1="104.4" x2="392.1" y2="100.9" stroke="currentColor" stroke-width="1.3"/>
  <line x1="390" y1="107.7" x2="395" y2="103.4" stroke="currentColor" stroke-width="1.3"/>
  <line x1="392.1" y1="111" x2="397.9" y2="106" stroke="currentColor" stroke-width="1.3"/>
  <text x="395" y="123.5" text-anchor="middle">C₂H₅</text>
  <text x="375" y="90" text-anchor="middle">C</text>
  <text x="386" y="81" text-anchor="start" font-size="12">+</text>
  <text x="375" y="14" text-anchor="middle" font-size="12" fill="var(--dg-muted)">planar carbocation</text>
  <text x="440" y="90" text-anchor="start">+  Br⁻</text>
  <line x1="335" y1="140" x2="185" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c12-6-2)"/>
  <line x1="415" y1="140" x2="470" y2="170" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c12-6-2)"/>
  <line x1="134.3" y1="223.3" x2="147" y2="188" stroke="currentColor" stroke-width="1.8"/>
  <text x="147" y="182" text-anchor="middle">H</text>
  <path d="M129.3 240.9L123.5 258.1L130.5 258.9Z" fill="currentColor"/>
  <text x="127" y="273.5" text-anchor="middle">CH₃</text>
  <line x1="143.3" y1="244.8" x2="144.5" y2="242.9" stroke="currentColor" stroke-width="1.3"/>
  <line x1="147.6" y1="248.2" x2="149.4" y2="245.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="151.9" y1="251.5" x2="154.3" y2="247.8" stroke="currentColor" stroke-width="1.3"/>
  <line x1="156.3" y1="254.9" x2="159.2" y2="250.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="160.6" y1="258.3" x2="164.1" y2="252.8" stroke="currentColor" stroke-width="1.3"/>
  <line x1="165" y1="261.7" x2="169" y2="255.3" stroke="currentColor" stroke-width="1.3"/>
  <text x="167" y="273.5" text-anchor="middle">C₂H₅</text>
  <text x="130" y="240" text-anchor="middle">C</text>
  <line x1="121" y1="235" x2="75" y2="235" stroke="currentColor" stroke-width="1.8"/>
  <text x="71" y="240" text-anchor="end">HO</text>
  <line x1="425.8" y1="223.3" x2="413" y2="188" stroke="currentColor" stroke-width="1.8"/>
  <text x="413" y="182" text-anchor="middle">H</text>
  <path d="M430.8 240.9L429.5 258.9L436.5 258.1Z" fill="currentColor"/>
  <text x="433" y="273.5" text-anchor="middle">CH₃</text>
  <line x1="415.5" y1="242.9" x2="416.7" y2="244.8" stroke="currentColor" stroke-width="1.3"/>
  <line x1="410.6" y1="245.3" x2="412.4" y2="248.2" stroke="currentColor" stroke-width="1.3"/>
  <line x1="405.7" y1="247.8" x2="408.1" y2="251.5" stroke="currentColor" stroke-width="1.3"/>
  <line x1="400.8" y1="250.3" x2="403.7" y2="254.9" stroke="currentColor" stroke-width="1.3"/>
  <line x1="395.9" y1="252.8" x2="399.4" y2="258.3" stroke="currentColor" stroke-width="1.3"/>
  <line x1="391" y1="255.3" x2="395" y2="261.7" stroke="currentColor" stroke-width="1.3"/>
  <text x="393" y="273.5" text-anchor="middle">C₂H₅</text>
  <text x="430" y="240" text-anchor="middle">C</text>
  <line x1="439" y1="235" x2="485" y2="235" stroke="currentColor" stroke-width="1.8"/>
  <text x="489" y="240" text-anchor="start">HO</text>
  <text x="130" y="296" text-anchor="middle" font-size="12">HO⁻ attacks from the left</text>
  <text x="130" y="311" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(inversion)</text>
  <text x="430" y="296" text-anchor="middle" font-size="12">HO⁻ attacks from the right</text>
  <text x="430" y="311" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(retention)</text>
  <text x="280" y="335" text-anchor="middle" font-size="12.5" fill="var(--dg-muted)">Equal amounts of the two enantiomers: racemic mixture (optically inactive)</text>
</svg>`,
    },
  ],
  "alcohols-phenols-and-ethers": [
    {
      title: "Reimer–Tiemann reaction",
      caption: "Phenol heated with **chloroform and aqueous NaOH** (then acidified) gives **salicylaldehyde**: a –CHO group enters the **ortho** position. The attacking electrophile is dichlorocarbene, :CCl₂.",
      svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-7-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M70 73L97.7 89L97.7 121L70 137L42.3 121L42.3 89Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="73" y1="81.8" x2="88.6" y2="90.8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="88.6" y1="119.2" x2="73" y2="128.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="48.4" y1="114" x2="48.4" y2="96" stroke="currentColor" stroke-width="1.6"/>
  <line x1="70" y1="73" x2="70" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <text x="70" y="49" text-anchor="middle">OH</text>
  <text x="70" y="163" text-anchor="middle" font-size="12" fill="var(--dg-muted)">phenol</text>
  <path d="M455 73L482.7 89L482.7 121L455 137L427.3 121L427.3 89Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="458" y1="81.8" x2="473.6" y2="90.8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="473.6" y1="119.2" x2="458" y2="128.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="433.4" y1="114" x2="433.4" y2="96" stroke="currentColor" stroke-width="1.6"/>
  <line x1="455" y1="73" x2="455" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <text x="455" y="49" text-anchor="middle">OH</text>
  <line x1="482.7" y1="89" x2="500" y2="79" stroke="currentColor" stroke-width="1.8"/>
  <text x="502" y="78" text-anchor="start">CHO</text>
  <text x="455" y="163" text-anchor="middle" font-size="12" fill="var(--dg-muted)">salicylaldehyde</text>
  <text x="455" y="178" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(2-hydroxybenzaldehyde)</text>
  <line x1="130" y1="105" x2="395" y2="105" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-7-1)"/>
  <text x="262.5" y="97" text-anchor="middle" font-size="12">CHCl₃ + aq. NaOH, 340 K</text>
  <text x="262.5" y="122" text-anchor="middle" font-size="12">then H⁺ (acidify)</text>
</svg>`,
    },
    {
      title: "Kolbe's reaction",
      caption: "Sodium phenoxide reacts with **CO₂ at 400 K and 4–7 atm**; acidification of the sodium salicylate formed gives **salicylic acid** (2-hydroxybenzoic acid), the starting material for aspirin. Substitution is mainly **ortho**.",
      svg: `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-7-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M60 72L84.2 86L84.2 114L60 128L35.8 114L35.8 86Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="62.6" y1="79.7" x2="76.3" y2="87.6" stroke="currentColor" stroke-width="1.6"/>
  <line x1="76.3" y1="112.4" x2="62.6" y2="120.3" stroke="currentColor" stroke-width="1.6"/>
  <line x1="41.1" y1="107.9" x2="41.1" y2="92.1" stroke="currentColor" stroke-width="1.6"/>
  <line x1="60" y1="72" x2="60" y2="54" stroke="currentColor" stroke-width="1.8"/>
  <text x="60" y="50" text-anchor="middle">OH</text>
  <text x="60" y="152" text-anchor="middle" font-size="12" fill="var(--dg-muted)">phenol</text>
  <path d="M240 72L264.2 86L264.2 114L240 128L215.8 114L215.8 86Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="242.6" y1="79.7" x2="256.3" y2="87.6" stroke="currentColor" stroke-width="1.6"/>
  <line x1="256.3" y1="112.4" x2="242.6" y2="120.3" stroke="currentColor" stroke-width="1.6"/>
  <line x1="221.1" y1="107.9" x2="221.1" y2="92.1" stroke="currentColor" stroke-width="1.6"/>
  <line x1="240" y1="72" x2="240" y2="54" stroke="currentColor" stroke-width="1.8"/>
  <text x="240" y="50" text-anchor="middle">O⁻ Na⁺</text>
  <text x="240" y="152" text-anchor="middle" font-size="12" fill="var(--dg-muted)">sodium phenoxide</text>
  <path d="M455 72L479.2 86L479.2 114L455 128L430.8 114L430.8 86Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="457.6" y1="79.7" x2="471.3" y2="87.6" stroke="currentColor" stroke-width="1.6"/>
  <line x1="471.3" y1="112.4" x2="457.6" y2="120.3" stroke="currentColor" stroke-width="1.6"/>
  <line x1="436.1" y1="107.9" x2="436.1" y2="92.1" stroke="currentColor" stroke-width="1.6"/>
  <line x1="455" y1="72" x2="455" y2="54" stroke="currentColor" stroke-width="1.8"/>
  <text x="455" y="50" text-anchor="middle">OH</text>
  <line x1="479.2" y1="86" x2="494.8" y2="77" stroke="currentColor" stroke-width="1.8"/>
  <text x="496.8" y="76" text-anchor="start">COOH</text>
  <text x="455" y="152" text-anchor="middle" font-size="12" fill="var(--dg-muted)">salicylic acid</text>
  <text x="455" y="167" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(2-hydroxybenzoic acid)</text>
  <line x1="105" y1="100" x2="190" y2="100" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-7-2)"/>
  <text x="147.5" y="92" text-anchor="middle" font-size="12">NaOH</text>
  <line x1="290" y1="100" x2="395" y2="100" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-7-2)"/>
  <text x="342.5" y="78" text-anchor="middle" font-size="12">(i) CO₂, 400 K,</text>
  <text x="342.5" y="92" text-anchor="middle" font-size="12">4–7 atm</text>
  <text x="342.5" y="117" text-anchor="middle" font-size="12">(ii) H⁺</text>
</svg>`,
    },
    {
      title: "Structure of alcohols, ethers and phenol",
      caption: "Oxygen is **sp³ hybridised** and bent. The **C–O–C angle in ethers (111.7°) is larger than C–O–H in alcohols (108.9°)** because of repulsion between the bulky alkyl groups. The **C–O bond in phenol (136 pm) is shorter** than in methanol (142 pm): the carbon is sp² and the oxygen lone pair is partly delocalised into the ring.",
      svg: `<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-7-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="91.1" y1="61.4" x2="51.2" y2="89.9" stroke="currentColor" stroke-width="1.8"/>
  <line x1="108.9" y1="61.4" x2="148.8" y2="89.9" stroke="currentColor" stroke-width="1.8"/>
  <text x="100" y="60" text-anchor="middle">O</text>
  <circle cx="91" cy="42" r="1.6" fill="currentColor"/>
  <circle cx="96" cy="37" r="1.6" fill="currentColor"/>
  <circle cx="104" cy="37" r="1.6" fill="currentColor"/>
  <circle cx="109" cy="42" r="1.6" fill="currentColor"/>
  <text x="51.2" y="106.9" text-anchor="middle">CH₃</text>
  <text x="148.8" y="106.9" text-anchor="middle">H</text>
  <text x="100" y="101" text-anchor="middle" fill="var(--dg-accent)">108.9°</text>
  <text x="61.6" y="70.4" text-anchor="end" font-size="12" fill="var(--dg-muted)">142 pm</text>
  <text x="138.4" y="70.4" text-anchor="start" font-size="12" fill="var(--dg-muted)">96 pm</text>
  <line x1="270.9" y1="61.2" x2="230.3" y2="88.7" stroke="currentColor" stroke-width="1.8"/>
  <line x1="289.1" y1="61.2" x2="329.7" y2="88.7" stroke="currentColor" stroke-width="1.8"/>
  <text x="280" y="60" text-anchor="middle">O</text>
  <circle cx="271" cy="42" r="1.6" fill="currentColor"/>
  <circle cx="276" cy="37" r="1.6" fill="currentColor"/>
  <circle cx="284" cy="37" r="1.6" fill="currentColor"/>
  <circle cx="289" cy="42" r="1.6" fill="currentColor"/>
  <text x="230.3" y="105.7" text-anchor="middle">CH₃</text>
  <text x="329.7" y="105.7" text-anchor="middle">CH₃</text>
  <text x="280" y="101" text-anchor="middle" fill="var(--dg-accent)">111.7°</text>
  <text x="241.2" y="69.8" text-anchor="end" font-size="12" fill="var(--dg-muted)">141 pm</text>
  <text x="318.8" y="69.8" text-anchor="start" font-size="12" fill="var(--dg-muted)">141 pm</text>
  <path d="M460 79L482.5 92L482.5 118L460 131L437.5 118L437.5 92Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="462.5" y1="86.1" x2="475.1" y2="93.4" stroke="currentColor" stroke-width="1.6"/>
  <line x1="475.1" y1="116.6" x2="462.5" y2="123.9" stroke="currentColor" stroke-width="1.6"/>
  <line x1="442.4" y1="112.3" x2="442.4" y2="97.7" stroke="currentColor" stroke-width="1.6"/>
  <line x1="460" y1="79" x2="460" y2="55" stroke="currentColor" stroke-width="1.8"/>
  <text x="460" y="51" text-anchor="middle">OH</text>
  <text x="470" y="71" text-anchor="start" font-size="12" fill="var(--dg-muted)">136 pm</text>
  <text x="100" y="165" text-anchor="middle">methanol</text>
  <text x="280" y="165" text-anchor="middle">methoxymethane (ether)</text>
  <text x="460" y="165" text-anchor="middle">phenol</text>
</svg>`,
    },
  ],
  "aldehydes-ketones-and-carboxylic-acids": [
    {
      title: "The carbonyl group: aldehyde, ketone and acid",
      caption: "The carbonyl carbon is **sp² hybridised and trigonal planar** (bond angles about 120°): one σ and one π bond to oxygen. Oxygen is more electronegative, so C=O is **polar** (C δ+, O δ−): the carbon is attacked by nucleophiles. An aldehyde has at least one H on the carbonyl carbon; a ketone has two carbon groups; in a carboxylic acid the carbonyl carbon also carries –OH.",
      svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-8-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="91.5" y1="95" x2="91.5" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <line x1="98.5" y1="95" x2="98.5" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <text x="95" y="41" text-anchor="middle">O</text>
  <line x1="95" y1="95" x2="50" y2="121" stroke="currentColor" stroke-width="1.8"/>
  <line x1="95" y1="95" x2="140" y2="121" stroke="currentColor" stroke-width="1.8"/>
  <text x="43" y="133" text-anchor="middle">R</text>
  <text x="147" y="133" text-anchor="middle">H</text>
  <line x1="276.5" y1="95" x2="276.5" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <line x1="283.5" y1="95" x2="283.5" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <text x="280" y="41" text-anchor="middle">O</text>
  <line x1="280" y1="95" x2="235" y2="121" stroke="currentColor" stroke-width="1.8"/>
  <line x1="280" y1="95" x2="325" y2="121" stroke="currentColor" stroke-width="1.8"/>
  <text x="228" y="133" text-anchor="middle">R</text>
  <text x="332" y="133" text-anchor="middle">R′</text>
  <line x1="461.5" y1="95" x2="461.5" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <line x1="468.5" y1="95" x2="468.5" y2="53" stroke="currentColor" stroke-width="1.8"/>
  <text x="465" y="41" text-anchor="middle">O</text>
  <line x1="465" y1="95" x2="420" y2="121" stroke="currentColor" stroke-width="1.8"/>
  <line x1="465" y1="95" x2="510" y2="121" stroke="currentColor" stroke-width="1.8"/>
  <text x="413" y="133" text-anchor="middle">R</text>
  <text x="517" y="133" text-anchor="middle">OH</text>
  <text x="95" y="165" text-anchor="middle">Aldehyde</text>
  <text x="95" y="182" text-anchor="middle" font-size="12" fill="var(--dg-muted)">R–CHO</text>
  <text x="280" y="165" text-anchor="middle">Ketone</text>
  <text x="280" y="182" text-anchor="middle" font-size="12" fill="var(--dg-muted)">R–CO–R′</text>
  <text x="465" y="165" text-anchor="middle">Carboxylic acid</text>
  <text x="465" y="182" text-anchor="middle" font-size="12" fill="var(--dg-muted)">R–COOH</text>
  <text x="112" y="92" text-anchor="start" font-size="11" fill="var(--dg-accent)">δ+</text>
  <text x="112" y="48" text-anchor="start" font-size="11" fill="var(--dg-accent)">δ−</text>
  <text x="95" y="135" text-anchor="middle" font-size="11" fill="var(--dg-muted)">120°</text>
</svg>`,
    },
    {
      title: "Nucleophilic addition to the carbonyl group",
      caption: "A nucleophile (CN⁻, H⁻, R⁻ of a Grignard reagent …) attacks the **electron-poor carbonyl carbon**. The C=O π electrons move to oxygen, giving a **tetrahedral alkoxide intermediate**, which picks up H⁺ to form the addition product. Aldehydes react faster than ketones (less steric hindrance and less electron donation to C).",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-8-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="66.5" y1="112" x2="66.5" y2="76" stroke="currentColor" stroke-width="1.8"/>
  <line x1="73.5" y1="112" x2="73.5" y2="76" stroke="currentColor" stroke-width="1.8"/>
  <line x1="65" y1="124" x2="28" y2="146" stroke="currentColor" stroke-width="1.8"/>
  <line x1="75" y1="124" x2="112" y2="146" stroke="currentColor" stroke-width="1.8"/>
  <text x="70" y="125" text-anchor="middle">C</text>
  <text x="70" y="70" text-anchor="middle">O</text>
  <text x="22" y="159" text-anchor="middle">R</text>
  <text x="118" y="159" text-anchor="middle">R′</text>
  <text x="82" y="100" text-anchor="start" font-size="11" fill="var(--dg-muted)">δ+</text>
  <text x="84" y="68" text-anchor="start" font-size="11" fill="var(--dg-muted)">δ−</text>
  <text x="150" y="58" text-anchor="middle" fill="var(--dg-accent)">Nu⁻</text>
  <line x1="145" y1="68" x2="82" y2="115" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-c12-8-2)"/>
  <path d="M62 92Q44 80 56 66" fill="none" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-c12-8-2)"/>
  <text x="70" y="205" text-anchor="middle" font-size="12" fill="var(--dg-muted)">carbonyl compound</text>
  <text x="70" y="220" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(sp², planar)</text>
  <line x1="150" y1="120" x2="195" y2="120" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-2)"/>
  <line x1="265" y1="112" x2="265" y2="72" stroke="currentColor" stroke-width="1.8"/>
  <line x1="265" y1="128" x2="265" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <line x1="257" y1="120" x2="217" y2="120" stroke="currentColor" stroke-width="1.8"/>
  <line x1="273" y1="120" x2="313" y2="120" stroke="currentColor" stroke-width="1.8"/>
  <text x="265" y="125" text-anchor="middle">C</text>
  <text x="265" y="66" text-anchor="middle">O⁻</text>
  <text x="265" y="186" text-anchor="middle">Nu</text>
  <text x="211" y="124" text-anchor="end">R</text>
  <text x="319" y="124" text-anchor="start">R′</text>
  <text x="265" y="205" text-anchor="middle" font-size="12" fill="var(--dg-muted)">tetrahedral alkoxide</text>
  <text x="265" y="220" text-anchor="middle" font-size="12" fill="var(--dg-muted)">ion (sp³)</text>
  <line x1="342" y1="120" x2="405" y2="120" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-2)"/>
  <text x="373.5" y="112" text-anchor="middle" font-size="12">H⁺</text>
  <line x1="470" y1="112" x2="470" y2="72" stroke="currentColor" stroke-width="1.8"/>
  <line x1="470" y1="128" x2="470" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <line x1="462" y1="120" x2="422" y2="120" stroke="currentColor" stroke-width="1.8"/>
  <line x1="478" y1="120" x2="518" y2="120" stroke="currentColor" stroke-width="1.8"/>
  <text x="470" y="125" text-anchor="middle">C</text>
  <text x="470" y="66" text-anchor="middle">OH</text>
  <text x="470" y="186" text-anchor="middle">Nu</text>
  <text x="416" y="124" text-anchor="end">R</text>
  <text x="524" y="124" text-anchor="start">R′</text>
  <text x="470" y="205" text-anchor="middle" font-size="12" fill="var(--dg-muted)">addition product</text>
  <text x="470" y="220" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(alcohol)</text>
</svg>`,
    },
    {
      title: "Aldol condensation",
      caption: "Aldehydes and ketones with an **α-hydrogen** add to each other in dilute alkali, giving a **β-hydroxy aldehyde (aldol)** or **β-hydroxy ketone (ketol)**; on heating these lose water to form an **α,β-unsaturated carbonyl compound**.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-8-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="55" y="55" text-anchor="middle">2 CH₃CHO</text>
  <text x="292" y="55" text-anchor="middle">CH₃CH(OH)CH₂CHO</text>
  <text x="487" y="55" text-anchor="middle">CH₃CH=CHCHO</text>
  <line x1="100" y1="50" x2="205" y2="50" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-3)"/>
  <text x="152.5" y="42" text-anchor="middle" font-size="12">dil. NaOH</text>
  <text x="152.5" y="67" text-anchor="middle" font-size="12">aldol addition</text>
  <line x1="370" y1="50" x2="425" y2="50" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-3)"/>
  <text x="397.5" y="42" text-anchor="middle" font-size="12">Δ</text>
  <text x="397.5" y="67" text-anchor="middle" font-size="12">− H₂O</text>
  <text x="55" y="102" text-anchor="middle" font-size="12" fill="var(--dg-muted)">ethanal</text>
  <text x="292" y="102" text-anchor="middle" font-size="12" fill="var(--dg-muted)">3-hydroxybutanal (aldol)</text>
  <text x="487" y="102" text-anchor="middle" font-size="12" fill="var(--dg-muted)">but-2-enal</text>
  <text x="55" y="165" text-anchor="middle">2 CH₃COCH₃</text>
  <text x="292" y="165" text-anchor="middle">(CH₃)₂C(OH)CH₂COCH₃</text>
  <text x="487" y="165" text-anchor="middle">(CH₃)₂C=CHCOCH₃</text>
  <line x1="100" y1="160" x2="205" y2="160" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-3)"/>
  <text x="152.5" y="152" text-anchor="middle" font-size="12">Ba(OH)₂</text>
  <text x="152.5" y="177" text-anchor="middle" font-size="12">aldol addition</text>
  <line x1="370" y1="160" x2="425" y2="160" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-3)"/>
  <text x="397.5" y="152" text-anchor="middle" font-size="12">Δ</text>
  <text x="397.5" y="177" text-anchor="middle" font-size="12">− H₂O</text>
  <text x="55" y="212" text-anchor="middle" font-size="12" fill="var(--dg-muted)">propanone</text>
  <text x="292" y="212" text-anchor="middle" font-size="12" fill="var(--dg-muted)">diacetone alcohol (ketol)</text>
  <text x="487" y="212" text-anchor="middle" font-size="12" fill="var(--dg-muted)">mesityl oxide</text>
  <text x="280" y="255" text-anchor="middle" font-size="11.5" fill="var(--dg-muted)">Needs an α-hydrogen: the CH₃/CH₂ next to C=O is removed by the base to give a carbanion (enolate).</text>
</svg>`,
    },
    {
      title: "Cannizzaro reaction",
      caption: "Aldehydes **without an α-hydrogen** (HCHO, C₆H₅CHO) on heating with **concentrated alkali** undergo self oxidation–reduction: half the molecules form the **alcohol** and half the **carboxylate salt**.",
      svg: `<svg viewBox="0 0 560 265" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-8-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="55" y="55" text-anchor="middle">2 HCHO</text>
  <text x="268" y="55" text-anchor="start">CH₃OH + HCOOK</text>
  <line x1="100" y1="50" x2="255" y2="50" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-4)"/>
  <text x="177.5" y="42" text-anchor="middle" font-size="12">conc. KOH</text>
  <text x="177.5" y="67" text-anchor="middle" font-size="12">heat</text>
  <text x="55" y="90" text-anchor="middle" font-size="12" fill="var(--dg-muted)">methanal</text>
  <text x="268" y="90" text-anchor="start" font-size="12" fill="var(--dg-muted)">methanol + potassium formate</text>
  <text x="55" y="155" text-anchor="middle">2 C₆H₅CHO</text>
  <text x="268" y="155" text-anchor="start">C₆H₅CH₂OH + C₆H₅COONa</text>
  <line x1="100" y1="150" x2="255" y2="150" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-8-4)"/>
  <text x="177.5" y="142" text-anchor="middle" font-size="12">conc. NaOH</text>
  <text x="177.5" y="167" text-anchor="middle" font-size="12">heat</text>
  <text x="55" y="190" text-anchor="middle" font-size="12" fill="var(--dg-muted)">benzaldehyde</text>
  <text x="268" y="190" text-anchor="start" font-size="12" fill="var(--dg-muted)">benzyl alcohol + sodium benzoate</text>
  <text x="280" y="235" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Aldehydes with no α-hydrogen: one molecule is oxidised (to the acid salt)</text>
  <text x="280" y="251" text-anchor="middle" font-size="12" fill="var(--dg-muted)">while the other is reduced (to the alcohol): a disproportionation.</text>
</svg>`,
    },
  ],
  "amines": [
    {
      title: "Classification of amines",
      caption: "Amines are derivatives of NH₃ in which one, two or three hydrogens are replaced by alkyl or aryl groups, giving **primary, secondary and tertiary** amines. Nitrogen is sp³ hybridised, **pyramidal**, and carries a **lone pair** (dots) responsible for the basic and nucleophilic character.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-9-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="95" y="85" text-anchor="middle">N</text>
  <circle cx="91" cy="63" r="1.7" fill="var(--dg-accent)"/>
  <circle cx="99" cy="63" r="1.7" fill="var(--dg-accent)"/>
  <line x1="91" y1="89" x2="57" y2="116" stroke="currentColor" stroke-width="1.8"/>
  <line x1="99" y1="89" x2="133" y2="116" stroke="currentColor" stroke-width="1.8"/>
  <path d="M95 89L91.5 126L98.5 126Z" fill="currentColor"/>
  <text x="57" y="131" text-anchor="middle">H</text>
  <text x="133" y="131" text-anchor="middle">R</text>
  <text x="95" y="142" text-anchor="middle">H</text>
  <text x="95" y="175" text-anchor="middle">Primary (1°) amine</text>
  <text x="95" y="192" text-anchor="middle" font-size="12" fill="var(--dg-muted)">R–NH₂</text>
  <text x="95" y="208" text-anchor="middle" font-size="12" fill="var(--dg-muted)">e.g. CH₃NH₂, methanamine</text>
  <text x="280" y="85" text-anchor="middle">N</text>
  <circle cx="276" cy="63" r="1.7" fill="var(--dg-accent)"/>
  <circle cx="284" cy="63" r="1.7" fill="var(--dg-accent)"/>
  <line x1="276" y1="89" x2="242" y2="116" stroke="currentColor" stroke-width="1.8"/>
  <line x1="284" y1="89" x2="318" y2="116" stroke="currentColor" stroke-width="1.8"/>
  <path d="M280 89L276.5 126L283.5 126Z" fill="currentColor"/>
  <text x="242" y="131" text-anchor="middle">H</text>
  <text x="318" y="131" text-anchor="middle">R</text>
  <text x="280" y="142" text-anchor="middle">R′</text>
  <text x="280" y="175" text-anchor="middle">Secondary (2°) amine</text>
  <text x="280" y="192" text-anchor="middle" font-size="12" fill="var(--dg-muted)">R–NH–R′</text>
  <text x="280" y="208" text-anchor="middle" font-size="12" fill="var(--dg-muted)">e.g. (CH₃)₂NH</text>
  <text x="465" y="85" text-anchor="middle">N</text>
  <circle cx="461" cy="63" r="1.7" fill="var(--dg-accent)"/>
  <circle cx="469" cy="63" r="1.7" fill="var(--dg-accent)"/>
  <line x1="461" y1="89" x2="427" y2="116" stroke="currentColor" stroke-width="1.8"/>
  <line x1="469" y1="89" x2="503" y2="116" stroke="currentColor" stroke-width="1.8"/>
  <path d="M465 89L461.5 126L468.5 126Z" fill="currentColor"/>
  <text x="427" y="131" text-anchor="middle">R″</text>
  <text x="503" y="131" text-anchor="middle">R</text>
  <text x="465" y="142" text-anchor="middle">R′</text>
  <text x="465" y="175" text-anchor="middle">Tertiary (3°) amine</text>
  <text x="465" y="192" text-anchor="middle" font-size="12" fill="var(--dg-muted)">R₃N</text>
  <text x="465" y="208" text-anchor="middle" font-size="12" fill="var(--dg-muted)">e.g. (CH₃)₃N</text>
  <text x="280" y="20" text-anchor="middle" font-size="12.5" fill="var(--dg-muted)">Nitrogen is sp³ with a lone pair (pyramidal, bond angle about 108°)</text>
</svg>`,
    },
    {
      title: "Hofmann bromamide degradation",
      caption: "A primary **amide** treated with **Br₂ and NaOH** gives a **primary amine with one carbon atom less**; the lost carbon leaves as carbonate. The reaction goes through an N-bromoamide and an isocyanate (R–N=C=O) in which R migrates from carbon to nitrogen.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-9-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="15" y="22" text-anchor="start" font-size="12" fill="var(--dg-muted)">Overall</text>
  <text x="55" y="60" text-anchor="middle">R–CONH₂</text>
  <line x1="105" y1="55" x2="225" y2="55" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-2)"/>
  <text x="165" y="47" text-anchor="middle" font-size="12">Br₂ + 4NaOH</text>
  <text x="235" y="60" text-anchor="start">R–NH₂ + Na₂CO₃ + 2NaBr + 2H₂O</text>
  <text x="55" y="95" text-anchor="middle" font-size="12" fill="var(--dg-muted)">amide</text>
  <text x="235" y="95" text-anchor="start" font-size="12" fill="var(--dg-muted)">primary amine with one carbon atom less</text>
  <text x="15" y="135" text-anchor="start" font-size="12" fill="var(--dg-muted)">Steps</text>
  <text x="45" y="180" text-anchor="middle">R–CONH₂</text>
  <text x="190" y="180" text-anchor="middle">R–CONHBr</text>
  <text x="352" y="180" text-anchor="middle">R–N=C=O</text>
  <text x="512" y="180" text-anchor="middle">R–NH₂</text>
  <line x1="88" y1="175" x2="148" y2="175" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-2)"/>
  <text x="118" y="167" text-anchor="middle" font-size="12">Br₂, NaOH</text>
  <line x1="235" y1="175" x2="312" y2="175" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-2)"/>
  <text x="273.5" y="167" text-anchor="middle" font-size="12">NaOH</text>
  <text x="273.5" y="192" text-anchor="middle" font-size="12">− NaBr</text>
  <line x1="395" y1="175" x2="478" y2="175" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-2)"/>
  <text x="436.5" y="167" text-anchor="middle" font-size="12">H₂O / NaOH</text>
  <text x="436.5" y="192" text-anchor="middle" font-size="12">− CO₂ (→ Na₂CO₃)</text>
  <text x="190" y="215" text-anchor="middle" font-size="12" fill="var(--dg-muted)">N-bromoamide</text>
  <text x="352" y="215" text-anchor="middle" font-size="12" fill="var(--dg-muted)">isocyanate (R migrates</text>
  <text x="352" y="230" text-anchor="middle" font-size="12" fill="var(--dg-muted)">from C to N)</text>
</svg>`,
    },
    {
      title: "Diazotisation and replacement of the diazonium group",
      caption: "Aniline with **NaNO₂ + HCl at 273–278 K** gives benzenediazonium chloride, which is unstable above 283 K. The –N₂⁺ group can be replaced by Cl, Br, CN (**Sandmeyer / Gattermann: Cu(I) salts**), I, F, H or OH, which makes it a key intermediate for preparing aryl compounds.",
      svg: `<svg viewBox="0 0 560 295" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-9-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="62" y="95" text-anchor="middle">C₆H₅NH₂</text>
  <text x="62" y="111" text-anchor="middle" font-size="12" fill="var(--dg-muted)">aniline</text>
  <line x1="62" y1="120" x2="62" y2="152" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="72" y="130" text-anchor="start" font-size="12">NaNO₂ + HCl</text>
  <text x="72" y="144" text-anchor="start" font-size="12">273–278 K</text>
  <text x="62" y="172" text-anchor="middle">C₆H₅N₂⁺Cl⁻</text>
  <text x="62" y="189" text-anchor="middle" font-size="12" fill="var(--dg-muted)">benzenediazonium</text>
  <text x="62" y="203" text-anchor="middle" font-size="12" fill="var(--dg-muted)">chloride</text>
  <line x1="108" y1="156" x2="200" y2="156" stroke="currentColor" stroke-width="1.8"/>
  <line x1="200" y1="30" x2="200" y2="282" stroke="currentColor" stroke-width="1.8"/>
  <line x1="200" y1="30" x2="320" y2="30" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="260" y="22" text-anchor="middle" font-size="12">CuCl / HCl</text>
  <text x="330" y="35" text-anchor="start">C₆H₅Cl</text>
  <text x="398" y="35" text-anchor="start" font-size="12" fill="var(--dg-muted)">chlorobenzene (Sandmeyer)</text>
  <line x1="200" y1="72" x2="320" y2="72" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="260" y="64" text-anchor="middle" font-size="12">CuBr / HBr</text>
  <text x="330" y="77" text-anchor="start">C₆H₅Br</text>
  <text x="398" y="77" text-anchor="start" font-size="12" fill="var(--dg-muted)">bromobenzene (Sandmeyer)</text>
  <line x1="200" y1="114" x2="320" y2="114" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="260" y="106" text-anchor="middle" font-size="12">CuCN / KCN</text>
  <text x="330" y="119" text-anchor="start">C₆H₅CN</text>
  <text x="398" y="119" text-anchor="start" font-size="12" fill="var(--dg-muted)">benzonitrile (Sandmeyer)</text>
  <line x1="200" y1="156" x2="320" y2="156" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="260" y="148" text-anchor="middle" font-size="12">KI</text>
  <text x="330" y="161" text-anchor="start">C₆H₅I</text>
  <text x="398" y="161" text-anchor="start" font-size="12" fill="var(--dg-muted)">iodobenzene</text>
  <line x1="200" y1="198" x2="320" y2="198" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="260" y="190" text-anchor="middle" font-size="12">HBF₄, then Δ</text>
  <text x="330" y="203" text-anchor="start">C₆H₅F</text>
  <text x="398" y="203" text-anchor="start" font-size="12" fill="var(--dg-muted)">fluorobenzene</text>
  <line x1="200" y1="240" x2="320" y2="240" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="260" y="232" text-anchor="middle" font-size="12">H₃PO₂ + H₂O</text>
  <text x="330" y="245" text-anchor="start">C₆H₆</text>
  <text x="398" y="245" text-anchor="start" font-size="12" fill="var(--dg-muted)">benzene</text>
  <line x1="200" y1="282" x2="320" y2="282" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-9-3)"/>
  <text x="260" y="274" text-anchor="middle" font-size="12">H₂O, warm</text>
  <text x="330" y="287" text-anchor="start">C₆H₅OH</text>
  <text x="398" y="287" text-anchor="start" font-size="12" fill="var(--dg-muted)">phenol</text>
</svg>`,
    },
  ],
  "biomolecules": [
    {
      title: "Open-chain structure of D-glucose",
      caption: "**Glucose (C₆H₁₂O₆)** is an aldohexose: a straight six-carbon chain with an **–CHO group at C-1** and –OH groups on C-2 to C-6. In the Fischer projection the –OH on the **penultimate carbon (C-5) lies on the right** (D-configuration). The D-sugar is dextrorotatory (+).",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-10-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="120" y1="52" x2="120" y2="272" stroke="currentColor" stroke-width="1.8"/>
  <text x="120" y="45" text-anchor="middle">CHO</text>
  <text x="120" y="285" text-anchor="middle">CH₂OH</text>
  <line x1="96" y1="95" x2="144" y2="95" stroke="currentColor" stroke-width="1.8"/>
  <text x="90" y="99" text-anchor="end">H</text>
  <text x="150" y="99" text-anchor="start">OH</text>
  <line x1="96" y1="140" x2="144" y2="140" stroke="currentColor" stroke-width="1.8"/>
  <text x="90" y="144" text-anchor="end">HO</text>
  <text x="150" y="144" text-anchor="start">H</text>
  <line x1="96" y1="185" x2="144" y2="185" stroke="currentColor" stroke-width="1.8"/>
  <text x="90" y="189" text-anchor="end">H</text>
  <text x="150" y="189" text-anchor="start">OH</text>
  <line x1="96" y1="230" x2="144" y2="230" stroke="currentColor" stroke-width="1.8"/>
  <text x="90" y="234" text-anchor="end">H</text>
  <text x="150" y="234" text-anchor="start">OH</text>
  <text x="40" y="49" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1</text>
  <text x="40" y="99" text-anchor="middle" font-size="12" fill="var(--dg-muted)">2</text>
  <text x="40" y="144" text-anchor="middle" font-size="12" fill="var(--dg-muted)">3</text>
  <text x="40" y="189" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4</text>
  <text x="40" y="234" text-anchor="middle" font-size="12" fill="var(--dg-muted)">5</text>
  <text x="40" y="289" text-anchor="middle" font-size="12" fill="var(--dg-muted)">6</text>
  <text x="120" y="14" text-anchor="middle" font-size="13">D-(+)-glucose</text>
  <line x1="150" y1="41" x2="288" y2="41" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="296" y="45" text-anchor="start">aldehyde group (C-1)</text>
  <text x="296" y="144" text-anchor="start">four chiral centres:</text>
  <text x="296" y="160" text-anchor="start">C-2, C-3, C-4, C-5</text>
  <line x1="180" y1="226" x2="288" y2="226" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="296" y="222" text-anchor="start" fill="var(--dg-accent)">–OH on the right at C-5</text>
  <text x="296" y="238" text-anchor="start" fill="var(--dg-accent)">= D-series</text>
  <line x1="165" y1="281" x2="288" y2="281" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="296" y="285" text-anchor="start">primary alcohol (C-6)</text>
</svg>`,
    },
    {
      title: "Glucose: pyranose ring (Haworth structures)",
      caption: "The –OH on **C-5** adds to the **C-1 aldehyde** to give a six-membered **pyranose ring** (hemiacetal). C-1 becomes a new chiral centre (the **anomeric carbon**): **α-anomer has the C-1 –OH down (trans to CH₂OH), β-anomer has it up**. The two interconvert through the open-chain form (mutarotation). Ring hydrogens are not shown.",
      svg: `<svg viewBox="0 70 560 215" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-10-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="105" y1="118" x2="166" y2="118" stroke="currentColor" stroke-width="1.6"/>
  <line x1="181.5" y1="124.3" x2="210" y2="152" stroke="currentColor" stroke-width="1.6"/>
  <line x1="210" y1="152" x2="175" y2="186" stroke="currentColor" stroke-width="2.6"/>
  <line x1="175" y1="186" x2="105" y2="186" stroke="currentColor" stroke-width="4"/>
  <line x1="105" y1="186" x2="70" y2="152" stroke="currentColor" stroke-width="2.6"/>
  <line x1="70" y1="152" x2="105" y2="118" stroke="currentColor" stroke-width="1.6"/>
  <text x="175" y="123" text-anchor="middle">O</text>
  <line x1="105" y1="118" x2="105" y2="90" stroke="currentColor" stroke-width="1.8"/>
  <text x="105" y="85" text-anchor="middle">CH₂OH</text>
  <line x1="70" y1="152" x2="70" y2="180" stroke="currentColor" stroke-width="1.8"/>
  <text x="70" y="196" text-anchor="middle">OH</text>
  <line x1="105" y1="186" x2="105" y2="158" stroke="currentColor" stroke-width="1.8"/>
  <text x="105" y="153" text-anchor="middle">OH</text>
  <line x1="175" y1="186" x2="175" y2="214" stroke="currentColor" stroke-width="1.8"/>
  <text x="175" y="230" text-anchor="middle">OH</text>
  <line x1="210" y1="152" x2="210" y2="180" stroke="currentColor" stroke-width="1.8"/>
  <text x="210" y="196" text-anchor="middle">OH</text>
  <text x="197" y="156" text-anchor="middle" font-size="11" fill="var(--dg-muted)">1</text>
  <text x="166" y="174" text-anchor="middle" font-size="11" fill="var(--dg-muted)">2</text>
  <text x="122" y="176" text-anchor="middle" font-size="11" fill="var(--dg-muted)">3</text>
  <text x="83" y="156" text-anchor="middle" font-size="11" fill="var(--dg-muted)">4</text>
  <text x="113" y="135" text-anchor="middle" font-size="11" fill="var(--dg-muted)">5</text>
  <line x1="405" y1="118" x2="466" y2="118" stroke="currentColor" stroke-width="1.6"/>
  <line x1="481.5" y1="124.3" x2="510" y2="152" stroke="currentColor" stroke-width="1.6"/>
  <line x1="510" y1="152" x2="475" y2="186" stroke="currentColor" stroke-width="2.6"/>
  <line x1="475" y1="186" x2="405" y2="186" stroke="currentColor" stroke-width="4"/>
  <line x1="405" y1="186" x2="370" y2="152" stroke="currentColor" stroke-width="2.6"/>
  <line x1="370" y1="152" x2="405" y2="118" stroke="currentColor" stroke-width="1.6"/>
  <text x="475" y="123" text-anchor="middle">O</text>
  <line x1="405" y1="118" x2="405" y2="90" stroke="currentColor" stroke-width="1.8"/>
  <text x="405" y="85" text-anchor="middle">CH₂OH</text>
  <line x1="370" y1="152" x2="370" y2="180" stroke="currentColor" stroke-width="1.8"/>
  <text x="370" y="196" text-anchor="middle">OH</text>
  <line x1="405" y1="186" x2="405" y2="158" stroke="currentColor" stroke-width="1.8"/>
  <text x="405" y="153" text-anchor="middle">OH</text>
  <line x1="475" y1="186" x2="475" y2="214" stroke="currentColor" stroke-width="1.8"/>
  <text x="475" y="230" text-anchor="middle">OH</text>
  <line x1="510" y1="152" x2="510" y2="124" stroke="currentColor" stroke-width="1.8"/>
  <text x="510" y="119" text-anchor="middle">OH</text>
  <text x="497" y="156" text-anchor="middle" font-size="11" fill="var(--dg-muted)">1</text>
  <text x="466" y="174" text-anchor="middle" font-size="11" fill="var(--dg-muted)">2</text>
  <text x="422" y="176" text-anchor="middle" font-size="11" fill="var(--dg-muted)">3</text>
  <text x="383" y="156" text-anchor="middle" font-size="11" fill="var(--dg-muted)">4</text>
  <text x="413" y="135" text-anchor="middle" font-size="11" fill="var(--dg-muted)">5</text>
  <text x="140" y="255" text-anchor="middle">α-D-glucopyranose</text>
  <text x="140" y="271" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(–OH at C-1 points down)</text>
  <text x="440" y="255" text-anchor="middle">β-D-glucopyranose</text>
  <text x="440" y="271" text-anchor="middle" font-size="12" fill="var(--dg-muted)">(–OH at C-1 points up)</text>
  <text x="290" y="155" text-anchor="middle" font-size="30">⇌</text>
  <text x="290" y="180" text-anchor="middle" font-size="12" fill="var(--dg-muted)">open chain</text>
</svg>`,
    },
    {
      title: "Peptide bond formation",
      caption: "The –COOH of one α-amino acid condenses with the –NH₂ of another with loss of **water**, forming an **amide (–CO–NH–) linkage called a peptide bond**. Gly + Ala gives the dipeptide glycylalanine; the chain has a free **N-terminal** amino end and a **C-terminal** carboxyl end.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-10-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="120" y="25" text-anchor="start">H₂N–CH₂–CO–<tspan fill="var(--dg-accent)">OH</tspan></text>
  <text x="278" y="25" text-anchor="middle">+</text>
  <text x="305" y="25" text-anchor="start"><tspan fill="var(--dg-accent)">H</tspan>–NH–CH(CH₃)–COOH</text>
  <text x="165" y="42" text-anchor="middle" font-size="12" fill="var(--dg-muted)">glycine</text>
  <text x="400" y="42" text-anchor="middle" font-size="12" fill="var(--dg-muted)">alanine</text>
  <line x1="280" y1="55" x2="280" y2="85" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-c12-10-3)"/>
  <text x="290" y="74" text-anchor="start" font-size="12">− H₂O (condensation)</text>
  <line x1="162.3" y1="183.3" x2="190" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <line x1="190" y1="168" x2="230" y2="190" stroke="currentColor" stroke-width="1.8"/>
  <line x1="230" y1="190" x2="260.4" y2="173.3" stroke="currentColor" stroke-width="1.8"/>
  <line x1="279.6" y1="173.3" x2="310" y2="190" stroke="currentColor" stroke-width="1.8"/>
  <line x1="310" y1="190" x2="350" y2="168" stroke="currentColor" stroke-width="1.8"/>
  <text x="150" y="195" text-anchor="middle">H₂N</text>
  <text x="270" y="173" text-anchor="middle">NH</text>
  <line x1="227" y1="190" x2="227" y2="218" stroke="currentColor" stroke-width="1.8"/>
  <line x1="233" y1="190" x2="233" y2="218" stroke="currentColor" stroke-width="1.8"/>
  <text x="230" y="234" text-anchor="middle">O</text>
  <line x1="310" y1="190" x2="310" y2="218" stroke="currentColor" stroke-width="1.8"/>
  <text x="310" y="234" text-anchor="middle">CH₃</text>
  <line x1="347" y1="168" x2="347" y2="140" stroke="currentColor" stroke-width="1.8"/>
  <line x1="353" y1="168" x2="353" y2="140" stroke="currentColor" stroke-width="1.8"/>
  <text x="350" y="134" text-anchor="middle">O</text>
  <line x1="350" y1="168" x2="378" y2="184" stroke="currentColor" stroke-width="1.8"/>
  <text x="381" y="193" text-anchor="start">OH</text>
  <rect x="206" y="152" width="80" height="98" rx="10" fill="none" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="251" y="143" text-anchor="middle" font-size="12.5" fill="var(--dg-accent)">peptide bond (–CO–NH–)</text>
  <text x="150" y="218" text-anchor="middle" font-size="12" fill="var(--dg-muted)">N-terminal end</text>
  <text x="398" y="218" text-anchor="start" font-size="12" fill="var(--dg-muted)">C-terminal end</text>
  <text x="280" y="285" text-anchor="middle" font-size="13">glycylalanine (Gly–Ala)  +  H₂O</text>
</svg>`,
    },
    {
      title: "DNA: base pairing (schematic)",
      caption: "The two polynucleotide strands are held together by **hydrogen bonds between complementary bases**: **adenine pairs with thymine (2 H-bonds)** and **guanine pairs with cytosine (3 H-bonds)**. The sugar–phosphate backbones run in opposite (antiparallel) directions, and the double strand is coiled into a double helix.",
      svg: `<svg viewBox="0 0 560 372" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-10-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="150" y1="38" x2="150" y2="300" stroke="currentColor" stroke-width="1.8"/>
  <line x1="410" y1="38" x2="410" y2="300" stroke="currentColor" stroke-width="1.8"/>
  <line x1="150" y1="70" x2="170" y2="70" stroke="currentColor" stroke-width="1.8"/>
  <line x1="390" y1="70" x2="410" y2="70" stroke="currentColor" stroke-width="1.8"/>
  <rect x="170" y="56" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <rect x="350" y="56" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="190" y="75" text-anchor="middle" font-size="15">A</text>
  <text x="370" y="75" text-anchor="middle" font-size="15">T</text>
  <line x1="212" y1="65" x2="348" y2="65" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="212" y1="75" x2="348" y2="75" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M150 59L160.5 66.6L156.5 78.9L143.5 78.9L139.5 66.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M410 59L420.5 66.6L416.5 78.9L403.5 78.9L399.5 66.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="75" text-anchor="start" font-size="12" fill="var(--dg-muted)">2 H-bonds</text>
  <line x1="150" y1="135" x2="170" y2="135" stroke="currentColor" stroke-width="1.8"/>
  <line x1="390" y1="135" x2="410" y2="135" stroke="currentColor" stroke-width="1.8"/>
  <rect x="170" y="121" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <rect x="350" y="121" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="190" y="140" text-anchor="middle" font-size="15">G</text>
  <text x="370" y="140" text-anchor="middle" font-size="15">C</text>
  <line x1="212" y1="126" x2="348" y2="126" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="212" y1="135" x2="348" y2="135" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="212" y1="144" x2="348" y2="144" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M150 124L160.5 131.6L156.5 143.9L143.5 143.9L139.5 131.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M410 124L420.5 131.6L416.5 143.9L403.5 143.9L399.5 131.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="140" text-anchor="start" font-size="12" fill="var(--dg-muted)">3 H-bonds</text>
  <line x1="150" y1="200" x2="170" y2="200" stroke="currentColor" stroke-width="1.8"/>
  <line x1="390" y1="200" x2="410" y2="200" stroke="currentColor" stroke-width="1.8"/>
  <rect x="170" y="186" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <rect x="350" y="186" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="190" y="205" text-anchor="middle" font-size="15">T</text>
  <text x="370" y="205" text-anchor="middle" font-size="15">A</text>
  <line x1="212" y1="195" x2="348" y2="195" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="212" y1="205" x2="348" y2="205" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M150 189L160.5 196.6L156.5 208.9L143.5 208.9L139.5 196.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M410 189L420.5 196.6L416.5 208.9L403.5 208.9L399.5 196.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="205" text-anchor="start" font-size="12" fill="var(--dg-muted)">2 H-bonds</text>
  <line x1="150" y1="265" x2="170" y2="265" stroke="currentColor" stroke-width="1.8"/>
  <line x1="390" y1="265" x2="410" y2="265" stroke="currentColor" stroke-width="1.8"/>
  <rect x="170" y="251" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <rect x="350" y="251" width="40" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="190" y="270" text-anchor="middle" font-size="15">C</text>
  <text x="370" y="270" text-anchor="middle" font-size="15">G</text>
  <line x1="212" y1="256" x2="348" y2="256" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="212" y1="265" x2="348" y2="265" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="212" y1="274" x2="348" y2="274" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M150 254L160.5 261.6L156.5 273.9L143.5 273.9L139.5 261.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M410 254L420.5 261.6L416.5 273.9L403.5 273.9L399.5 261.6Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="270" text-anchor="start" font-size="12" fill="var(--dg-muted)">3 H-bonds</text>
  <circle cx="150" cy="102" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="106" text-anchor="middle" font-size="11">P</text>
  <circle cx="410" cy="102" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="410" y="106" text-anchor="middle" font-size="11">P</text>
  <circle cx="150" cy="167" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="171" text-anchor="middle" font-size="11">P</text>
  <circle cx="410" cy="167" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="410" y="171" text-anchor="middle" font-size="11">P</text>
  <circle cx="150" cy="232" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="150" y="236" text-anchor="middle" font-size="11">P</text>
  <circle cx="410" cy="232" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="410" y="236" text-anchor="middle" font-size="11">P</text>
  <text x="150" y="22" text-anchor="middle">5′</text>
  <text x="410" y="22" text-anchor="middle">3′</text>
  <text x="150" y="318" text-anchor="middle">3′</text>
  <text x="410" y="318" text-anchor="middle">5′</text>
  <text x="130" y="160" text-anchor="end" font-size="12" fill="var(--dg-muted)">sugar–phosphate</text>
  <text x="130" y="175" text-anchor="end" font-size="12" fill="var(--dg-muted)">backbone</text>
  <text x="280" y="345" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Pentagon = deoxyribose sugar, P = phosphate, A–T and G–C = complementary base pairs</text>
  <text x="280" y="361" text-anchor="middle" font-size="12" fill="var(--dg-muted)">The two strands run in opposite directions (antiparallel) and form a double helix.</text>
</svg>`,
    },
    {
      title: "Four levels of protein structure",
      caption: "**Primary:** the sequence of amino acids. **Secondary:** regular folding into an **α-helix** or **β-pleated sheet** by hydrogen bonds. **Tertiary:** overall 3-D folding of one chain. **Quaternary:** association of two or more folded chains (subunits). Denaturation changes the secondary and tertiary structures but not the primary.",
      svg: `<svg viewBox="0 0 560 325" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-10-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="38" y1="60" x2="52" y2="60" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="29" cy="60" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70" y1="60" x2="84" y2="60" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="61" cy="60" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="102" y1="60" x2="116" y2="60" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="93" cy="60" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="134" y1="60" x2="148" y2="60" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="125" cy="60" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="157" cy="60" r="9" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="29" y="86" text-anchor="middle" font-size="11" fill="var(--dg-muted)">aa₁</text>
  <text x="61" y="86" text-anchor="middle" font-size="11" fill="var(--dg-muted)">aa₂</text>
  <text x="93" y="86" text-anchor="middle" font-size="11" fill="var(--dg-muted)">aa₃</text>
  <text x="93" y="120" text-anchor="middle" font-size="13">Primary structure</text>
  <text x="93" y="136" text-anchor="middle" font-size="12" fill="var(--dg-muted)">sequence of amino acids</text>
  <text x="93" y="151" text-anchor="middle" font-size="12" fill="var(--dg-muted)">joined by peptide bonds</text>
  <path d="M262 28L262.6 30.2L264.2 32.2L266.8 34.1L270.3 35.8L274.3 37.1L278.7 38L283.2 38.6L287.5 38.9L291.3 38.8L294.4 38.4L296.6 37.7L297.8 37L297.9 36.1L296.9 35.4L294.8 34.7L291.8 34.3L288 34.1L283.8 34.3L279.3 34.9L274.9 35.8L270.8 37.1L267.2 38.6L264.5 40.5L262.7 42.6L262 44.7L262.4 46.9L263.9 49L266.4 50.9L269.8 52.6L273.8 53.9L278.1 54.9L282.6 55.6L286.9 55.9L290.8 55.8L294.1 55.4L296.4 54.8L297.7 54.1L297.9 53.3L297.1 52.5L295.1 51.8L292.2 51.3L288.6 51.1L284.4 51.3L279.9 51.8L275.5 52.6L271.3 53.9L267.7 55.4L264.8 57.2L262.9 59.3L262 61.4L262.3 63.6L263.7 65.7L266 67.6L269.3 69.3L273.2 70.8L277.5 71.8L282 72.5L286.4 72.8L290.4 72.8L293.7 72.5L296.1 71.9L297.6 71.2L298 70.4L297.2 69.6L295.4 68.9L292.6 68.4L289.1 68.1L285 68.2L280.5 68.7L276.1 69.5L271.8 70.7L268.1 72.2L265.1 74L263.1 76L262.1 78.1L262.2 80.3L263.4 82.4L265.7 84.4L268.8 86.1L272.7 87.6L276.9 88.7L281.4 89.4L285.8 89.8L289.9 89.8L293.3 89.5L295.9 89L297.5 88.3L298 87.5L297.4 86.7L295.7 86L293.1 85.4L289.6 85.2L285.5 85.2L281.1 85.6L276.6 86.4L272.4 87.5L268.6 89L265.5 90.7L263.3 92.7L262.2 94.8" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="280" y="120" text-anchor="middle" font-size="13">Secondary: α-helix</text>
  <text x="280" y="136" text-anchor="middle" font-size="12" fill="var(--dg-muted)">coil held by C=O···H–N</text>
  <text x="280" y="151" text-anchor="middle" font-size="12" fill="var(--dg-muted)">hydrogen bonds</text>
  <path d="M397 29L417 43L437 29L457 43L477 29L497 43L517 29L537 43" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="417" y1="43" x2="417" y2="55" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="457" y1="43" x2="457" y2="55" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="497" y1="43" x2="497" y2="55" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <path d="M397 69L417 55L437 69L457 55L477 69L497 55L517 69L537 55" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="437" y1="69" x2="437" y2="81" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="477" y1="69" x2="477" y2="81" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="517" y1="69" x2="517" y2="81" stroke="var(--dg-accent)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <path d="M397 81L417 95L437 81L457 95L477 81L497 95L517 81L537 95" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="467" y="120" text-anchor="middle" font-size="13">Secondary: β-pleated sheet</text>
  <text x="467" y="136" text-anchor="middle" font-size="12" fill="var(--dg-muted)">chains side by side joined</text>
  <text x="467" y="151" text-anchor="middle" font-size="12" fill="var(--dg-muted)">by hydrogen bonds</text>
  <path d="M31 230C34.7 225.3 44 208 53 202C62 196 75 192.7 85 194C95 195.3 104.7 209.7 113 210C121.3 210.3 127.7 194 135 196C142.3 198 157 213.7 157 222C157 230.3 143.7 243.7 135 246C126.3 248.3 114 234 105 236C96 238 89.7 253.7 81 258C72.3 262.3 57.7 261.3 53 262" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <line x1="53" y1="202" x2="53" y2="262" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <text x="61" y="236" text-anchor="start" font-size="11.5" fill="var(--dg-accent)">S–S</text>
  <text x="93" y="282" text-anchor="middle" font-size="13">Tertiary structure</text>
  <text x="93" y="298" text-anchor="middle" font-size="12" fill="var(--dg-muted)">folding of the whole chain into a</text>
  <text x="93" y="313" text-anchor="middle" font-size="12" fill="var(--dg-muted)">3-D shape (S–S, ionic, H-bonds)</text>
  <circle cx="254" cy="190" r="23" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="254" y="195" text-anchor="middle" font-size="15">α</text>
  <circle cx="306" cy="190" r="23" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="306" y="195" text-anchor="middle" font-size="15">β</text>
  <circle cx="254" cy="238" r="23" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="254" y="243" text-anchor="middle" font-size="15">β</text>
  <circle cx="306" cy="238" r="23" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="306" y="243" text-anchor="middle" font-size="15">α</text>
  <text x="280" y="282" text-anchor="middle" font-size="13">Quaternary structure</text>
  <text x="280" y="298" text-anchor="middle" font-size="12" fill="var(--dg-muted)">several folded chains (subunits)</text>
  <text x="280" y="313" text-anchor="middle" font-size="12" fill="var(--dg-muted)">e.g. haemoglobin (α₂β₂)</text>
  <text x="467" y="232" text-anchor="middle" font-size="12.5">Denaturation destroys the</text>
  <text x="467" y="248" text-anchor="middle" font-size="12.5">secondary and tertiary</text>
  <text x="467" y="264" text-anchor="middle" font-size="12.5">structure (not the primary):</text>
  <text x="467" y="280" text-anchor="middle" font-size="12.5" fill="var(--dg-muted)">e.g. boiling an egg</text>
</svg>`,
    },
  ],
});
