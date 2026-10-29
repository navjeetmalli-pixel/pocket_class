// Class 10 Maths diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(10, "maths", {
  "real-numbers": [
    {
      title: "Prime factor tree of 180",
      caption: "Every composite number splits into primes in only one way (apart from order). Here **180 = 2² × 3² × 5**, which is how HCF and LCM are found by prime factorisation.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m1-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="280" y="45" text-anchor="middle">180</text>
  <line x1="272" y1="50" x2="200" y2="82" stroke="currentColor" stroke-width="1.4"/><line x1="288" y1="50" x2="360" y2="82" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="200" cy="98" r="15" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/><text x="200" y="103" text-anchor="middle">2</text><text x="360" y="103" text-anchor="middle">90</text>
  <line x1="352" y1="108" x2="300" y2="142" stroke="currentColor" stroke-width="1.4"/><line x1="368" y1="108" x2="420" y2="142" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="300" cy="158" r="15" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/><text x="300" y="163" text-anchor="middle">2</text><text x="420" y="163" text-anchor="middle">45</text>
  <line x1="412" y1="168" x2="370" y2="202" stroke="currentColor" stroke-width="1.4"/><line x1="428" y1="168" x2="470" y2="202" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="370" cy="218" r="15" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/><text x="370" y="223" text-anchor="middle">3</text><text x="470" y="223" text-anchor="middle">15</text>
  <line x1="462" y1="228" x2="430" y2="258" stroke="currentColor" stroke-width="1.4"/><line x1="478" y1="228" x2="510" y2="258" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="430" cy="274" r="15" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/><text x="430" y="279" text-anchor="middle">3</text><circle cx="510" cy="274" r="15" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2"/><text x="510" y="279" text-anchor="middle">5</text>
  <text x="20" y="40" font-size="14">Prime factorisation</text><text x="20" y="60" font-size="14">of 180</text>
  <text x="20" y="110" fill="var(--dg-muted)">Circled numbers are</text><text x="20" y="128" fill="var(--dg-muted)">primes (they cannot be</text><text x="20" y="146" fill="var(--dg-muted)">split further).</text>
  <text x="20" y="230">180 = 2 × 2 × 3 × 3 × 5</text><text x="20" y="250">= 2² × 3² × 5</text>
</svg>`,
    },
    {
      title: "HCF and LCM from prime factors",
      caption: "For 12 = 2² × 3 and 18 = 2 × 3²: **HCF = product of the smallest powers of the common primes = 6; LCM = product of the greatest powers = 36**. Also HCF × LCM = 6 × 36 = 12 × 18 = 216.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m1-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <circle cx="215" cy="130" r="95" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="345" cy="130" r="95" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <text x="215" y="28" text-anchor="middle" font-size="14">12 = 2² × 3</text><text x="345" y="28" text-anchor="middle" font-size="14">18 = 2 × 3²</text>
  <text x="165" y="135" text-anchor="middle" font-size="16">2</text><text x="395" y="135" text-anchor="middle" font-size="16">3</text>
  <text x="280" y="120" text-anchor="middle" font-size="16" fill="var(--dg-accent)">2 × 3</text><text x="280" y="140" text-anchor="middle" fill="var(--dg-muted)">common</text>
  <text x="165" y="160" text-anchor="middle" fill="var(--dg-muted)">only in 12</text><text x="395" y="160" text-anchor="middle" fill="var(--dg-muted)">only in 18</text>
  <text x="280" y="250" text-anchor="middle">HCF = common factors = 2 × 3 = 6</text><text x="280" y="270" text-anchor="middle">LCM = common × the rest = 2 × 3 × 2 × 3 = 36</text>
</svg>`,
    },
  ],
  "polynomials": [
    {
      title: "Zeroes of a quadratic polynomial from its graph",
      caption: "The zeroes of p(x) = x² − 2x − 3 are the x-coordinates of the points where its graph cuts the x-axis: **−1 and 3**. Check: sum = 2 = −b/a and product = −3 = c/a.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m2-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="15" y1="130" x2="380" y2="130" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-1)"/>
  <line x1="190" y1="282" x2="190" y2="12" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-1)"/>
  <text x="378" y="146" text-anchor="end">X</text><text x="182" y="22" text-anchor="end">Y</text>
  <line x1="220" y1="13" x2="220" y2="271" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <polyline points="136 14.8 139 31.3 142 47.2 145 62.5 148 77.2 151 91.3 154 104.8 157 117.7 160 130 163 141.7 166 152.8 169 163.3 172 173.2 175 182.5 178 191.2 181 199.3 184 206.8 187 213.7 190 220 193 225.7 196 230.8 199 235.3 202 239.2 205 242.5 208 245.2 211 247.3 214 248.8 217 249.7 220 250 223 249.7 226 248.8 229 247.3 232 245.2 235 242.5 238 239.2 241 235.3 244 230.8 247 225.7 250 220 253 213.7 256 206.8 259 199.3 262 191.2 265 182.5 268 173.2 271 163.3 274 152.8 277 141.7 280 130 283 117.7 286 104.8 289 91.3 292 77.2 295 62.5 298 47.2 301 31.3 304 14.8" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <circle cx="160" cy="130" r="3.5" fill="currentColor"/><circle cx="280" cy="130" r="3.5" fill="currentColor"/><circle cx="220" cy="250" r="3.5" fill="currentColor"/>
  <text x="152" y="147" text-anchor="end">A(−1, 0)</text><text x="288" y="147">B(3, 0)</text>
  <text x="210" y="272">Vertex (1, −4)</text>
  <text x="226" y="17" fill="var(--dg-muted)">x = 1</text>
  <text x="313" y="14" fill="var(--dg-accent)">y = x² − 2x − 3</text>
  <text x="390" y="55" font-size="13">Zeroes: x = −1 and x = 3</text><text x="390" y="75">(where the graph cuts</text><text x="390" y="93">the x-axis)</text>
  <text x="390" y="125" fill="var(--dg-muted)">a = 1 > 0, so the parabola</text><text x="390" y="143" fill="var(--dg-muted)">opens upward</text>
</svg>`,
    },
    {
      title: "Number of zeroes of a quadratic",
      caption: "The graph of a quadratic polynomial is a parabola. It can **cut the x-axis at two points, touch it at one point, or miss it altogether**, so a quadratic has at most 2 zeroes.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m2-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="13" y1="140" x2="173" y2="140" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-2)"/>
  <line x1="93" y1="190" x2="93" y2="32" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-2)"/>
  <polyline points="48.8 90.9 51.4 99.4 54 107.5 56.6 115 59.2 122.1 61.8 128.6 64.4 134.5 67 140 69.6 144.9 72.2 149.4 74.8 153.3 77.4 156.6 80 159.5 82.6 161.8 85.2 163.7 87.8 165 90.4 165.7 93 166 95.6 165.7 98.2 165 100.8 163.7 103.4 161.8 106 159.5 108.6 156.6 111.2 153.3 113.8 149.4 116.4 144.9 119 140 121.6 134.5 124.2 128.6 126.8 122.1 129.4 115 132 107.5 134.6 99.4 137.2 90.9" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <circle cx="67" cy="140" r="3.5" fill="currentColor"/>
  <circle cx="119" cy="140" r="3.5" fill="currentColor"/>
  <text x="93" y="24" text-anchor="middle" fill="var(--dg-accent)" font-size="14">y = x² − 1</text>
  <text x="85" y="155" text-anchor="end">O</text>
  <text x="93" y="212" text-anchor="middle">Cuts the x-axis</text><text x="93" y="229" text-anchor="middle">at two points</text><text x="93" y="246" text-anchor="middle" fill="var(--dg-muted)">2 zeroes</text>
  <line x1="200" y1="140" x2="360" y2="140" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-2)"/>
  <line x1="280" y1="190" x2="280" y2="32" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-2)"/>
  <polyline points="235.8 64.9 238.4 73.4 241 81.5 243.6 89 246.2 96.1 248.8 102.6 251.4 108.5 254 114 256.6 118.9 259.2 123.4 261.8 127.3 264.4 130.6 267 133.5 269.6 135.8 272.2 137.7 274.8 139 277.4 139.7 280 140 282.6 139.7 285.2 139 287.8 137.7 290.4 135.8 293 133.5 295.6 130.6 298.2 127.3 300.8 123.4 303.4 118.9 306 114 308.6 108.5 311.2 102.6 313.8 96.1 316.4 89 319 81.5 321.6 73.4 324.2 64.9" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <circle cx="280" cy="140" r="3.5" fill="currentColor"/>
  <text x="280" y="24" text-anchor="middle" fill="var(--dg-accent)" font-size="14">y = x²</text>
  <text x="272" y="155" text-anchor="end">O</text>
  <text x="280" y="212" text-anchor="middle">Touches the x-axis</text><text x="280" y="229" text-anchor="middle">at one point</text><text x="280" y="246" text-anchor="middle" fill="var(--dg-muted)">1 zero</text>
  <line x1="387" y1="140" x2="547" y2="140" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-2)"/>
  <line x1="467" y1="190" x2="467" y2="32" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-2)"/>
  <polyline points="422.8 38.9 425.4 47.4 428 55.5 430.6 63 433.2 70.1 435.8 76.6 438.4 82.5 441 88 443.6 92.9 446.2 97.4 448.8 101.3 451.4 104.6 454 107.5 456.6 109.8 459.2 111.7 461.8 113 464.4 113.7 467 114 469.6 113.7 472.2 113 474.8 111.7 477.4 109.8 480 107.5 482.6 104.6 485.2 101.3 487.8 97.4 490.4 92.9 493 88 495.6 82.5 498.2 76.6 500.8 70.1 503.4 63 506 55.5 508.6 47.4 511.2 38.9" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <text x="467" y="24" text-anchor="middle" fill="var(--dg-accent)" font-size="14">y = x² + 1</text>
  <text x="459" y="155" text-anchor="end">O</text>
  <text x="467" y="212" text-anchor="middle">Does not meet</text><text x="467" y="229" text-anchor="middle">the x-axis</text><text x="467" y="246" text-anchor="middle" fill="var(--dg-muted)">No real zero</text>
</svg>`,
    },
    {
      title: "Graph of a cubic polynomial",
      caption: "A cubic polynomial has at most 3 zeroes. The graph of p(x) = x³ − 4x = x(x − 2)(x + 2) cuts the x-axis at **−2, 0 and 2**.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m2-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="20" y1="150" x2="390" y2="150" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-3)"/>
  <line x1="200" y1="285" x2="200" y2="15" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m2-3)"/>
  <text x="388" y="166" text-anchor="end">X</text><text x="192" y="25" text-anchor="end">Y</text>
  <polyline points="128 276.7 131 239 134 205.4 137 175.8 140 150 143 127.8 146 109 149 93.4 152 80.9 155 71.3 158 64.3 161 59.9 164 57.8 167 57.9 170 60 173 63.9 176 69.4 179 76.3 182 84.5 185 93.8 188 103.9 191 114.8 194 126.2 197 138 200 150 203 162 206 173.8 209 185.2 212 196.1 215 206.3 218 215.5 221 223.7 224 230.6 227 236.1 230 240 233 242.1 236 242.2 239 240.1 242 235.7 245 228.8 248 219.1 251 206.6 254 191 257 172.2 260 150 263 124.2 266 94.6 269 61 272 23.3" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <circle cx="140" cy="150" r="3.5" fill="currentColor"/><circle cx="200" cy="150" r="3.5" fill="currentColor"/><circle cx="260" cy="150" r="3.5" fill="currentColor"/>
  <text x="134" y="141" text-anchor="end">(−2, 0)</text><text x="208" y="141">O (0, 0)</text><text x="268" y="167">(2, 0)</text>
  <text x="278" y="27.4" fill="var(--dg-accent)">y = x³ − 4x</text>
  <text x="400" y="95">A cubic cuts the x-axis</text><text x="400" y="113">at most 3 times.</text><text x="400" y="145">Here it cuts at 3 points:</text><text x="400" y="163" fill="var(--dg-accent)">zeroes −2, 0 and 2</text>
</svg>`,
    },
  ],
  "pair-of-linear-equations-in-two-variables": [
    {
      title: "Graphical solution of a pair of equations",
      caption: "Each linear equation is a straight line. The lines x + y = 4 and x − y = 2 **intersect at (3, 1)**, so x = 3, y = 1 is the solution. Check: 3 + 1 = 4 and 3 − 1 = 2.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m3-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="30" y1="205" x2="340" y2="205" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-1)"/>
  <line x1="80" y1="305" x2="80" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-1)"/>
  <text x="338" y="221" text-anchor="end">X</text><text x="72" y="30" text-anchor="end">Y</text>
  <line x1="46" y1="35" x2="250" y2="239" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="46" y1="307" x2="250" y2="103" stroke="currentColor" stroke-width="2.2"/>
  <circle cx="182" cy="171" r="4.5" fill="currentColor"/><circle cx="80" cy="69" r="3.5" fill="currentColor"/><circle cx="216" cy="205" r="3.5" fill="currentColor"/><circle cx="148" cy="205" r="3.5" fill="currentColor"/><circle cx="80" cy="273" r="3.5" fill="currentColor"/>
  <text x="89" y="62">(0, 4)</text><text x="223" y="197">(4, 0)</text><text x="153" y="222">(2, 0)</text><text x="72" y="271" text-anchor="end">(0, −2)</text>
  <text x="194" y="176" font-weight="bold">(3, 1)</text>
  <text x="256" y="243" fill="var(--dg-accent)">x + y = 4</text>
  <text x="256" y="107">x − y = 2</text>
  <text x="72" y="220" text-anchor="end">O</text>
  <text x="370" y="60" font-size="14">Solve  x + y = 4,  x − y = 2</text>
  <text x="370" y="90">The lines meet at one point,</text><text x="370" y="108">(3, 1), so the solution is</text><text x="370" y="126" fill="var(--dg-accent)">x = 3, y = 1.</text>
  <text x="370" y="160" fill="var(--dg-muted)">Intersecting lines:</text><text x="370" y="178" fill="var(--dg-muted)">unique solution,</text><text x="370" y="196" fill="var(--dg-muted)">consistent pair.</text>
</svg>`,
    },
    {
      title: "Intersecting, parallel and coincident lines",
      caption: "For a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0: **intersecting lines give one solution, parallel lines give none, and coincident lines give infinitely many**.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m3-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="10" y1="120" x2="164" y2="120" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-2)"/>
  <line x1="30" y1="175" x2="30" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-2)"/>
  <text x="25" y="134" text-anchor="end">O</text>
  <line x1="10" y1="70" x2="150" y2="140" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="153" y="144" font-size="12">ℓ₁</text>
  <line x1="10" y1="160" x2="130" y2="40" stroke="currentColor" stroke-width="2.2"/>
  <text x="133" y="44" font-size="12">ℓ₂</text>
  <circle cx="70" cy="100" r="3.5" fill="currentColor"/>
  <text x="92" y="22" text-anchor="middle" font-size="14">Intersecting</text>
  <text x="92" y="200" text-anchor="middle" font-size="12">a₁/a₂ ≠ b₁/b₂</text><text x="92" y="218" text-anchor="middle" font-size="12">One solution</text><text x="92" y="236" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Consistent</text>
  <line x1="186" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-2)"/>
  <line x1="206" y1="175" x2="206" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-2)"/>
  <text x="201" y="134" text-anchor="end">O</text>
  <line x1="186" y1="70" x2="326" y2="140" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="329" y="144" font-size="12">ℓ₁</text>
  <line x1="186" y1="50" x2="326" y2="120" stroke="currentColor" stroke-width="2.2"/>
  <text x="183" y="54" font-size="12" text-anchor="end">ℓ₂</text>
  <text x="268" y="22" text-anchor="middle" font-size="14">Parallel</text>
  <text x="268" y="200" text-anchor="middle" font-size="12">a₁/a₂ = b₁/b₂ ≠ c₁/c₂</text><text x="268" y="218" text-anchor="middle" font-size="12">No solution</text><text x="268" y="236" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Inconsistent</text>
  <line x1="362" y1="120" x2="516" y2="120" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-2)"/>
  <line x1="382" y1="175" x2="382" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m3-2)"/>
  <text x="377" y="134" text-anchor="end">O</text>
  <line x1="362" y1="70" x2="502" y2="140" stroke="var(--dg-accent)" stroke-width="4"/>
  <line x1="362" y1="70" x2="502" y2="140" stroke="currentColor" stroke-width="1.2"/>
  <text x="505" y="144" font-size="12">ℓ₁, ℓ₂</text>
  <text x="444" y="22" text-anchor="middle" font-size="14">Coincident</text>
  <text x="444" y="200" text-anchor="middle" font-size="12">a₁/a₂ = b₁/b₂ = c₁/c₂</text><text x="444" y="218" text-anchor="middle" font-size="12">Infinitely many solutions</text><text x="444" y="236" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Consistent</text>
</svg>`,
    },
  ],
  "triangles": [
    {
      title: "Basic Proportionality Theorem (Thales)",
      caption: "If a line DE is drawn parallel to side BC of ΔABC, meeting AB at D and AC at E, then **it divides the two sides in the same ratio: AD/DB = AE/EC** (here 2 : 3).",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m6-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <polygon points="280,36 100,250 460,250" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="208" y1="121.6" x2="352" y2="121.6" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="208" cy="121.6" r="3" fill="currentColor"/><circle cx="352" cy="121.6" r="3" fill="currentColor"/>
  <text x="280" y="26" text-anchor="middle">A</text><text x="90" y="256" text-anchor="end">B</text><text x="470" y="256">C</text>
  <text x="198" y="126.6" text-anchor="end">D</text><text x="362" y="126.6">E</text>
  <path d="M275 116.6 L283 121.6 L275 126.6" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M275 245 L283 250 L275 255" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="280" y="143.60000000000002" text-anchor="middle" font-size="12" fill="var(--dg-accent)">DE ∥ BC</text>
  <text x="280" y="282" text-anchor="middle">Basic Proportionality Theorem:  AD/DB = AE/EC</text>
</svg>`,
    },
    {
      title: "Similar triangles (AA criterion)",
      caption: "Two triangles with equal corresponding angles are similar, so **their corresponding sides are in the same ratio**: AB/PQ = BC/QR = CA/RP (here 2/3).",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m6-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <polygon points="120,110 30,230 180,230" fill="none" stroke="currentColor" stroke-width="1.8"/><polygon points="425,70 290,250 515,250" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M50 230 A20 20 0 0 0 42 214" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M318 250 A28 28 0 0 0 306.8 227.6" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M171.1 212.1 A20 20 0 0 0 160 230" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M168.8 207.6 A25 25 0 0 0 155 230" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M502.5 225 A28 28 0 0 0 487 250" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M500.2 220.5 A33 33 0 0 0 482 250" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M109.2 124.4 A18 18 0 0 0 128 126.1" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M106.2 128.4 A23 23 0 0 0 130.3 130.6" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M103.2 132.4 A28 28 0 0 0 132.5 135" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M409.4 90.8 A26 26 0 0 0 436.6 93.3" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M406.4 94.8 A31 31 0 0 0 438.9 97.7" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/><path d="M403.4 98.8 A36 36 0 0 0 441.1 102.2" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/>
  <text x="120" y="100" text-anchor="middle">A</text><text x="22" y="235" text-anchor="end">B</text><text x="188" y="235">C</text>
  <text x="425" y="60" text-anchor="middle">P</text><text x="282" y="255" text-anchor="end">Q</text><text x="523" y="255">R</text>
  <text x="105" y="262" text-anchor="middle">ΔABC</text><text x="403" y="276" text-anchor="middle">ΔPQR</text>
  <text x="280" y="20" text-anchor="middle">ΔABC ~ ΔPQR  (equal angles are marked alike)</text>
</svg>`,
    },
    {
      title: "Right triangle with the altitude to the hypotenuse",
      caption: "In right-angled ΔABC, the perpendicular BD to the hypotenuse splits it into **two triangles similar to ΔABC and to each other**. Using this, AC² = AB² + BC² (Pythagoras theorem).",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m6-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <polygon points="90,50 90,240 440,240" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="90" y1="240" x2="169.7" y2="93.2" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <path d="M90 226 L104 226 L104 240" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M159.1 87.5 L153.4 98.1 L163.9 103.8" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="90" y="40" text-anchor="middle">A</text><text x="80" y="246" text-anchor="end">B</text><text x="450" y="246">C</text>
  <text x="178.3" y="84.9">D</text>
  <text x="80" y="149" text-anchor="end">AB</text><text x="265" y="260" text-anchor="middle">BC</text>
  <text x="279" transform="rotate(28.5 279 135)" y="135" text-anchor="start" fill="var(--dg-accent)">AC (hypotenuse)</text>
  <text x="142" y="192" font-size="12" fill="var(--dg-muted)">BD ⊥ AC</text>
  <text x="280" y="284" text-anchor="middle">∠B = 90°:   AC² = AB² + BC²</text>
</svg>`,
    },
  ],
  "coordinate-geometry": [
    {
      title: "Distance formula",
      caption: "Draw PR parallel to the x-axis and QR parallel to the y-axis to get a right-angled triangle. By Pythagoras, **PQ² = (x₂ − x₁)² + (y₂ − y₁)²**. Here P(2, 1), Q(6, 4) give PQ = 5.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m7-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="35" y1="270" x2="500" y2="270" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m7-1)"/>
  <line x1="60" y1="295" x2="60" y2="15" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m7-1)"/>
  <text x="498" y="286" text-anchor="end">X</text><text x="52" y="25" text-anchor="end">Y</text>
  <line x1="160" y1="220" x2="160" y2="270" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="360" y1="70" x2="360" y2="270" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="60" y1="220" x2="160" y2="220" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="60" y1="70" x2="360" y2="70" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <polygon points="160,220 360,220 360,70" fill="var(--dg-fill)" opacity="0.6" stroke="none"/>
  <line x1="160" y1="220" x2="360" y2="220" stroke="currentColor" stroke-width="1.8"/><line x1="360" y1="220" x2="360" y2="70" stroke="currentColor" stroke-width="1.8"/><line x1="160" y1="220" x2="360" y2="70" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <path d="M348 220 V208 H360" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="160" cy="220" r="3.5" fill="currentColor"/><circle cx="360" cy="70" r="3.5" fill="currentColor"/><circle cx="360" cy="220" r="3" fill="currentColor"/>
  <text x="152" y="238" text-anchor="end">P(x₁, y₁)</text><text x="369" y="66">Q(x₂, y₂)</text><text x="369" y="225">R(x₂, y₁)</text>
  <text x="160" y="288" text-anchor="middle">x₁</text><text x="360" y="288" text-anchor="middle">x₂</text><text x="52" y="225" text-anchor="end">y₁</text><text x="52" y="75" text-anchor="end">y₂</text><text x="52" y="285" text-anchor="end">O</text>
  <text x="260" y="240" text-anchor="middle">PR = x₂ − x₁</text><text x="370" y="149" text-anchor="start">QR = y₂ − y₁</text>
  <text x="252" y="137" text-anchor="end" fill="var(--dg-accent)">d = PQ</text>
  <text x="80" y="40" font-size="14">d = PQ = √[(x₂ − x₁)² + (y₂ − y₁)²]</text>
  <text x="80" y="60" fill="var(--dg-muted)">(Pythagoras in right-angled ΔPRQ)</text>
</svg>`,
    },
    {
      title: "Section formula (internal division)",
      caption: "Perpendiculars AL, PM, BN to the x-axis and the right triangles APQ and PBR (similar by AA) give the ratio m : n. Here A(1, 1), B(7, 4) and **P(5, 3) divides AB in the ratio 2 : 1**.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m7-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="35" y1="250" x2="500" y2="250" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m7-2)"/>
  <line x1="60" y1="275" x2="60" y2="35" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m7-2)"/>
  <text x="498" y="266" text-anchor="end">X</text><text x="52" y="45" text-anchor="end">Y</text>
  <line x1="110" y1="200" x2="110" y2="250" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="310" y1="100" x2="310" y2="250" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="410" y1="50" x2="410" y2="250" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="110" y1="200" x2="310" y2="200" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="310" y1="100" x2="410" y2="100" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="110" y1="200" x2="410" y2="50" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <circle cx="110" cy="200" r="3.5" fill="currentColor"/><circle cx="410" cy="50" r="3.5" fill="currentColor"/><circle cx="310" cy="100" r="4.5" fill="currentColor"/><circle cx="310" cy="200" r="3" fill="currentColor"/><circle cx="410" cy="100" r="3" fill="currentColor"/>
  <text x="116" y="220">A(x₁, y₁)</text><text x="419" y="46">B(x₂, y₂)</text><text x="319" y="120" font-weight="bold">P(x, y)</text>
  <text x="316" y="216">Q</text><text x="419" y="116">R</text>
  <text x="110" y="267" text-anchor="middle">L</text><text x="310" y="267" text-anchor="middle">M</text><text x="410" y="267" text-anchor="middle">N</text><text x="52" y="265" text-anchor="end">O</text>
  <text x="110" y="283" text-anchor="middle" fill="var(--dg-muted)">x₁</text><text x="310" y="283" text-anchor="middle" fill="var(--dg-muted)">x</text><text x="410" y="283" text-anchor="middle" fill="var(--dg-muted)">x₂</text>
  <text x="204" y="138" text-anchor="end" fill="var(--dg-accent)">m</text><text x="354" y="63" text-anchor="end" fill="var(--dg-accent)">n</text>
  <text x="80" y="40" font-size="14">P divides AB internally in the ratio m : n</text>
  <text x="80" y="62">x = (m·x₂ + n·x₁)/(m + n)</text><text x="80" y="82">y = (m·y₂ + n·y₁)/(m + n)</text>
</svg>`,
    },
  ],
  "introduction-to-trigonometry": [
    {
      title: "Trigonometric ratios in a right triangle",
      caption: "In right △ABC with ∠B = 90°, the sides are named from angle A: **BC is opposite, AB is adjacent, AC is the hypotenuse**. For the 3-4-5 triangle shown, sin A = 3/5, cos A = 4/5, tan A = 3/4, and the other three are their reciprocals.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M100 220 L300 220 L300 70 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M290 220 L290 210 L300 210" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M134 220 A34 34 0 0 0 127.2 199.6" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="88" y="236" text-anchor="middle" >A</text>
  <text x="312" y="236" text-anchor="middle" >B</text>
  <text x="300" y="60" text-anchor="middle" >C</text>
  <text x="190" y="126" text-anchor="end" >AC = 5 (hypotenuse)</text>
  <text x="200" y="246" text-anchor="middle" >AB = 4 (adjacent)</text>
  <text x="310" y="142" >BC = 3</text>
  <text x="310" y="160" fill="var(--dg-muted)">(opposite)</text>
  <text x="392" y="34" font-size="14">Ratios of angle A</text>
  <text x="392" y="62" >sin A = BC/AC = 3/5</text>
  <text x="392" y="88" >cos A = AB/AC = 4/5</text>
  <text x="392" y="114" >tan A = BC/AB = 3/4</text>
  <text x="392" y="148" >cosec A = AC/BC = 5/3</text>
  <text x="392" y="174" >sec A = AC/AB = 5/4</text>
  <text x="392" y="200" >cot A = AB/BC = 4/3</text>
  <text x="392" y="232" font-size="12" fill="var(--dg-muted)">cosec, sec, cot are reciprocals</text>
  <text x="392" y="248" font-size="12" fill="var(--dg-muted)">of sin, cos, tan.</text>
</svg>`,
    },
    {
      title: "Triangles for 30°, 45° and 60°",
      caption: "Half a square gives the 45° triangle with sides **1 : 1 : √2**; half an equilateral triangle gives the 30°–60°–90° triangle with sides **1 : √3 : 2**. Both are drawn to scale; every standard value in the table follows from them.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M50 210 L180 210 L50 80 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M60 210 L60 200 L50 200" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M50 110 A30 30 0 0 0 71.2 101.2" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M150 210 A30 30 0 0 1 158.8 188.8" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="60" y="128" font-size="12">45°</text>
  <text x="130" y="204" font-size="12">45°</text>
  <text x="115" y="227" text-anchor="middle" >1</text>
  <text x="42" y="145" text-anchor="end" >1</text>
  <text x="130" y="138" >√2</text>
  <text x="115" y="255" text-anchor="middle" >sin 45° = cos 45° = 1/√2</text>
  <text x="115" y="273" text-anchor="middle" >tan 45° = 1</text>
  <path d="M300 210 L473.2 210 L300 110 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M310 210 L310 200 L300 200" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M300 136 A26 26 0 0 0 322.5 123" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M443.2 210 A30 30 0 0 1 447.2 195" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="307" y="150" font-size="12">60°</text>
  <text x="408" y="204" font-size="12">30°</text>
  <text x="386.6" y="227" text-anchor="middle" >√3</text>
  <text x="292" y="160" text-anchor="end" >1</text>
  <text x="392" y="150" >2</text>
  <text x="388" y="255" text-anchor="middle" >sin 30° = cos 60° = 1/2</text>
  <text x="388" y="273" text-anchor="middle" >sin 60° = cos 30° = √3/2, tan 30° = 1/√3</text>
</svg>`,
    },
  ],
  "some-applications-of-trigonometry": [
    {
      title: "Angle of elevation (tower, 60°)",
      caption: "An observer stands 30 m from the foot of a tower and sees its top at an **angle of elevation of 60°** (measured upward from the horizontal). Then tan 60° = h/30, so **h = 30√3 ≈ 51.96 m**. Drawn to scale.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="40" y1="250" x2="520" y2="250" stroke="currentColor" stroke-width="1.6"/>
  <rect x="372" y="42.2" width="16" height="207.8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="260" y1="250" x2="380" y2="42.2" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M304 250 A44 44 0 0 0 282 211.9" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="328" y="220" text-anchor="middle" font-size="12" fill="var(--dg-accent)">60°</text>
  <circle cx="260" cy="250" r="3" fill="currentColor"/>
  <text x="380" y="33.2" text-anchor="middle" >A</text>
  <text x="392" y="268" >B</text>
  <text x="252" y="268" text-anchor="end" >P</text>
  <text x="320" y="268" text-anchor="middle" >30 m</text>
  <text x="396" y="146.1" >h = AB</text>
  <text x="20" y="36" font-size="14">Observer at P, tower AB</text>
  <text x="20" y="64" >tan 60° = AB / PB</text>
  <text x="20" y="86" >√3 = h / 30</text>
  <text x="20" y="108" font-weight="bold">h = 30√3 ≈ 51.96 m</text>
</svg>`,
    },
    {
      title: "Angle of depression (from a tower, 30°)",
      caption: "From the top of a 50 m tower the **angle of depression** of a car is 30°. It is measured **downward from the horizontal** at the top; by alternate angles it equals the angle of elevation of the top from the car. So tan 30° = 50/BC and **BC = 50√3 ≈ 86.6 m**. Drawn to scale.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="40" y1="250" x2="520" y2="250" stroke="currentColor" stroke-width="1.6"/>
  <rect x="112" y="100" width="16" height="150" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="120" y1="100" x2="520" y2="100" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="120" y1="100" x2="379.8" y2="250" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M176 100 A56 56 0 0 1 168.5 128" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="218" y="124" text-anchor="middle" font-size="12" fill="var(--dg-accent)">30°</text>
  <path d="M323.8 250 A56 56 0 0 1 331.3 222" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="299.8" y="240" text-anchor="middle" font-size="12" fill="var(--dg-accent)">30°</text>
  <circle cx="379.8" cy="250" r="3" fill="currentColor"/>
  <text x="110" y="92" >A</text>
  <text x="120" y="268" text-anchor="middle" >B</text>
  <text x="379.8" y="268" text-anchor="middle" >C</text>
  <text x="249.9" y="268" text-anchor="middle" >BC = 50√3 m</text>
  <text x="106" y="175" text-anchor="end" >50 m</text>
  <text x="430" y="92" fill="var(--dg-muted)">horizontal</text>
  <text x="20" y="34" font-size="14">Angle of depression = angle of elevation</text>
  <text x="20" y="56" >tan 30° = AB / BC  ⇒  1/√3 = 50 / BC</text>
</svg>`,
    },
    {
      title: "Two angles of elevation (30° and 60°)",
      caption: "A tower is seen at 60° from a point Q, 10 m from its foot, and at 30° from a point P 20 m further back. Both observations give the same height: **h = 10√3 ≈ 17.3 m**. Use tan θ = h/distance for each point and equate or solve. Drawn to scale.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="30" y1="250" x2="520" y2="250" stroke="currentColor" stroke-width="1.6"/>
  <rect x="434" y="42.2" width="12" height="207.8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="80" y1="250" x2="440" y2="42.2" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="320" y1="250" x2="440" y2="42.2" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M150 250 A70 70 0 0 0 140.6 215" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="188" y="232" text-anchor="middle" font-size="12" fill="var(--dg-accent)">30°</text>
  <path d="M348 250 A28 28 0 0 0 334 225.8" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="374" y="230" text-anchor="middle" font-size="12" fill="var(--dg-accent)">60°</text>
  <circle cx="80" cy="250" r="3" fill="currentColor"/>
  <circle cx="320" cy="250" r="3" fill="currentColor"/>
  <text x="440" y="33.2" text-anchor="middle" >A</text>
  <text x="452" y="268" >B</text>
  <text x="80" y="268" text-anchor="middle" >P</text>
  <text x="320" y="268" text-anchor="middle" >Q</text>
  <text x="200" y="286" text-anchor="middle" >PQ = 20 m</text>
  <text x="380" y="268" text-anchor="middle" >10 m</text>
  <text x="454" y="146.1" >h</text>
  <text x="20" y="34" >At Q: tan 60° = h / 10  ⇒  h = 10√3</text>
  <text x="20" y="56" >At P: tan 30° = h / 30  ⇒  h = 30/√3 = 10√3  ✓</text>
</svg>`,
    },
  ],
  "circles": [
    {
      title: "Tangent is perpendicular to the radius",
      caption: "The tangent at T touches the circle at one point only, and **OT ⟂ tangent**. Every other point of the tangent (such as Q) is outside the circle, so OQ > OT: the radius is the shortest distance from O to the tangent line.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="240" cy="140" r="100" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="90" y1="240" x2="395" y2="240" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="240" y1="140" x2="240" y2="240" stroke="currentColor" stroke-width="1.6"/>
  <line x1="240" y1="140" x2="340" y2="240" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M240 228 L252 228 L252 240" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="240" cy="140" r="3" fill="currentColor"/>
  <circle cx="240" cy="240" r="3" fill="currentColor"/>
  <circle cx="340" cy="240" r="3" fill="currentColor"/>
  <text x="226" y="132" >O</text>
  <text x="248" y="200" >r</text>
  <text x="240" y="260" text-anchor="middle" >T</text>
  <text x="340" y="260" text-anchor="middle" >Q</text>
  <text x="100" y="232" fill="var(--dg-muted)">tangent</text>
  <text x="334" y="198" fill="var(--dg-muted)">OQ</text>
  <text x="410" y="60" font-size="14">Tangent ⟂ radius</text>
  <text x="410" y="86" >∠OTQ = 90°</text>
  <text x="410" y="112" >OQ² = OT² + TQ²</text>
  <text x="410" y="138" >OQ > OT</text>
  <text x="410" y="166" fill="var(--dg-muted)" font-size="12">The point T is called the</text>
  <text x="410" y="182" fill="var(--dg-muted)" font-size="12">point of contact.</text>
</svg>`,
    },
    {
      title: "Two tangents from an external point",
      caption: "From an external point P, the two tangents PA and PB are **equal in length** (here 5-12-13: r = 5, OP = 13, so PA = PB = 12). OP bisects ∠APB and ∠AOB, and the radii OA, OB are perpendicular to the tangents. Drawn to scale.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="150" cy="150" r="70" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="332" y1="150" x2="176.9" y2="85.4" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="332" y1="150" x2="176.9" y2="214.6" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="150" y1="150" x2="176.9" y2="85.4" stroke="currentColor" stroke-width="1.6"/>
  <line x1="150" y1="150" x2="176.9" y2="214.6" stroke="currentColor" stroke-width="1.6"/>
  <line x1="150" y1="150" x2="332" y2="150" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M173.1 94.6 L182.3 98.5 L186.2 89.2" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M173.1 205.4 L182.3 201.5 L186.2 210.8" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="150" cy="150" r="3" fill="currentColor"/>
  <circle cx="332" cy="150" r="3" fill="currentColor"/>
  <circle cx="176.9" cy="85.4" r="3" fill="currentColor"/>
  <circle cx="176.9" cy="214.6" r="3" fill="currentColor"/>
  <text x="134" y="154" >O</text>
  <text x="342" y="154" >P</text>
  <text x="170.9" y="75.4" >A</text>
  <text x="170.9" y="234.6" >B</text>
  <text x="154" y="120" text-anchor="end" fill="var(--dg-muted)">5</text>
  <text x="154" y="190" text-anchor="end" fill="var(--dg-muted)">5</text>
  <text x="285" y="144" text-anchor="middle" fill="var(--dg-muted)">13</text>
  <text x="262.5" y="107.7" >12</text>
  <text x="262.5" y="204.3" >12</text>
  <text x="380" y="60" font-size="14">PA = PB</text>
  <text x="380" y="86" >∠APO = ∠BPO</text>
  <text x="380" y="112" >∠AOP = ∠BOP</text>
  <text x="380" y="138" >∠OAP = ∠OBP = 90°</text>
  <text x="380" y="170" fill="var(--dg-muted)">PA² = OP² − OA²</text>
</svg>`,
    },
  ],
  "areas-related-to-circles": [
    {
      title: "Sector of a circle",
      caption: "A sector is the region between two radii and the arc they cut off. With the angle θ at the centre, **arc length l = (θ/360°) × 2πr** and **area = (θ/360°) × πr²**. The figure shows θ = 60° (one-sixth of the circle).",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="180" cy="200" r="130" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M180 200 L310 200 A130 130 0 0 0 245 87.4 Z" fill="var(--dg-fill)" stroke="var(--dg-accent)" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M214 200 A34 34 0 0 0 197 170.6" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="225" y="178" text-anchor="middle" font-size="14">θ</text>
  <circle cx="180" cy="200" r="3" fill="currentColor"/>
  <text x="162" y="216" >O</text>
  <text x="318" y="216" >A</text>
  <text x="239" y="79.4" >B</text>
  <text x="245" y="218" text-anchor="middle" >r</text>
  <text x="196.5" y="139.7" >r</text>
  <text x="303.5" y="129" >l</text>
  <text x="340" y="70" font-size="14">Sector OAB</text>
  <text x="340" y="98" >Arc length l = (θ/360°) × 2πr</text>
  <text x="340" y="122" >Area = (θ/360°) × πr²</text>
  <text x="340" y="146" >Perimeter = l + 2r</text>
  <text x="340" y="184" fill="var(--dg-muted)">Example: r = 7 cm, θ = 60°</text>
  <text x="340" y="206" fill="var(--dg-muted)">l = 22/3 cm,  area = 77/3 cm²</text>
  <text x="340" y="240" font-size="12" fill="var(--dg-muted)">Dashed circle: the full circle.</text>
</svg>`,
    },
    {
      title: "Segment of a circle",
      caption: "A chord AB divides the circle into a minor segment (shaded) and a major segment. **Area of minor segment = area of sector OAB − area of △OAB**. For θ = 90° and r = 10 cm: 25π − 50 ≈ 28.5 cm².",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="180" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M109.3 220.7 A100 100 0 0 0 250.7 220.7 Z" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="180" y1="150" x2="109.3" y2="220.7" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="180" y1="150" x2="250.7" y2="220.7" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M161.6 168.4 A26 26 0 0 0 198.4 168.4" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="180" cy="150" r="3" fill="currentColor"/>
  <text x="174" y="140" >O</text>
  <text x="103.3" y="224.7" text-anchor="end" >A</text>
  <text x="256.7" y="224.7" >B</text>
  <text x="180" y="194" text-anchor="middle" font-size="14">θ</text>
  <text x="150" y="190" text-anchor="end" >r</text>
  <text x="180" y="214.7" text-anchor="middle" fill="var(--dg-muted)" font-size="12">chord AB</text>
  <text x="180" y="274" text-anchor="middle" font-size="12">minor segment (shaded)</text>
  <text x="180" y="110" text-anchor="middle" font-size="12" fill="var(--dg-muted)">major segment</text>
  <text x="325" y="70" font-size="14">Minor segment</text>
  <text x="325" y="96" >= sector OAB − △OAB</text>
  <text x="325" y="120" >= (θ/360°) πr² − ½ r² sin θ</text>
  <text x="325" y="158" fill="var(--dg-muted)">Example (r = 10, θ = 90°):</text>
  <text x="325" y="180" fill="var(--dg-muted)">25π − 50 ≈ 28.5 cm²</text>
</svg>`,
    },
    {
      title: "Ring (annulus) between two concentric circles",
      caption: "Two circles with the same centre enclose a ring (shaded). **Area of ring = πR² − πr² = π(R² − r²)**, where R is the outer and r the inner radius. A circular path or a washer is a ring.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path fill-rule="evenodd" d="M60 150 a110 110 0 1 0 220 0 a110 110 0 1 0 -220 0 Z M105 150 a65 65 0 1 0 130 0 a65 65 0 1 0 -130 0 Z" fill="var(--dg-fill)"/>
  <circle cx="170" cy="150" r="110" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="170" cy="150" r="65" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <line x1="170" y1="150" x2="280" y2="150" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="170" y1="150" x2="124" y2="104" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="170" cy="150" r="3" fill="currentColor"/>
  <text x="154" y="166" >O</text>
  <text x="257.5" y="144" text-anchor="middle" >R</text>
  <text x="120.3" y="128.5" >r</text>
  <text x="340" y="80" font-size="14">Area of ring</text>
  <text x="340" y="106" >= πR² − πr²</text>
  <text x="340" y="130" >= π(R² − r²)</text>
  <text x="340" y="168" fill="var(--dg-muted)">= π(R + r)(R − r)</text>
</svg>`,
    },
  ],
  "surface-areas-and-volumes": [
    {
      title: "Right circular cone",
      caption: "A cone has height h, base radius r and slant height l, joined by **l² = r² + h²** (drawn here as a 3-4-5 triangle: r = 3, h = 4, l = 5 units).",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <path d="M80 230 A90 24 0 0 0 260 230" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M80 230 A90 24 0 0 1 260 230" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="80" y1="230" x2="170" y2="110" stroke="currentColor" stroke-width="1.6"/>
  <line x1="260" y1="230" x2="170" y2="110" stroke="currentColor" stroke-width="1.6"/>
  <line x1="170" y1="110" x2="170" y2="230" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="170" y1="230" x2="260" y2="230" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M170 220 L180 220 L180 230" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="170" cy="110" r="3" fill="currentColor"/>
  <circle cx="170" cy="230" r="3" fill="currentColor"/>
  <text x="176" y="200" >h</text>
  <text x="215" y="246" text-anchor="middle" >r</text>
  <text x="227" y="160" >l</text>
  <text x="170" y="100" text-anchor="middle" >apex</text>
  <text x="156" y="246" >O</text>
  <text x="340" y="70" font-size="14">Right circular cone</text>
  <text x="340" y="98" >l = √(r² + h²)</text>
  <text x="340" y="124" >Curved surface area = πrl</text>
  <text x="340" y="150" >Total surface area = πr(l + r)</text>
  <text x="340" y="176" >Volume = ⅓πr²h</text>
  <text x="340" y="212" fill="var(--dg-muted)" font-size="12">Height h is the perpendicular</text>
  <text x="340" y="228" fill="var(--dg-muted)" font-size="12">from the apex to the base.</text>
</svg>`,
    },
    {
      title: "Cylinder, sphere and hemisphere",
      caption: "The three basic solids with their formulas. **Hemisphere** = half a sphere: curved surface 2πr², total surface 3πr² (the flat circle πr² is added), volume ⅔πr³.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="90" cy="70" rx="45" ry="14" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M45 70 L45 180 A45 14 0 0 0 135 180 L135 70" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M45 180 A45 14 0 0 1 135 180" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="90" y1="70" x2="135" y2="70" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="135" y1="70" x2="135" y2="180" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4" opacity="0"/>
  <line x1="90" y1="70" x2="90" y2="180" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <text x="140" y="74" >r</text>
  <text x="94" y="132" >h</text>
  <text x="90" y="28" text-anchor="middle" font-size="14">Cylinder</text>
  <text x="90" y="232" text-anchor="middle" >CSA = 2πrh</text>
  <text x="90" y="254" text-anchor="middle" >TSA = 2πr(r + h)</text>
  <text x="90" y="276" text-anchor="middle" >V = πr²h</text>
  <circle cx="280" cy="125" r="55" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M225 125 A55 16 0 0 0 335 125" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M225 125 A55 16 0 0 1 335 125" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="280" y1="125" x2="280" y2="180" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="280" cy="125" r="2.5" fill="currentColor"/>
  <text x="286" y="166" >r</text>
  <text x="280" y="28" text-anchor="middle" font-size="14">Sphere</text>
  <text x="280" y="232" text-anchor="middle" >Surface area = 4πr²</text>
  <text x="280" y="254" text-anchor="middle" >V = ⁴⁄₃ πr³</text>
  <path d="M415 150 A55 55 0 0 1 525 150 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M415 150 A55 16 0 0 0 525 150" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M415 150 A55 16 0 0 1 525 150" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="470" y1="150" x2="470" y2="95" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="470" cy="150" r="2.5" fill="currentColor"/>
  <text x="476" y="128" >r</text>
  <text x="470" y="28" text-anchor="middle" font-size="14">Hemisphere</text>
  <text x="470" y="232" text-anchor="middle" >CSA = 2πr²</text>
  <text x="470" y="254" text-anchor="middle" >TSA = 3πr²</text>
  <text x="470" y="276" text-anchor="middle" >V = ⅔ πr³</text>
</svg>`,
    },
    {
      title: "Frustum of a cone",
      caption: "A frustum is what is left of a cone when a smaller cone is cut off by a plane parallel to the base. Here r₁ = 10, r₂ = 6, h = 9.6 (units of 10), so **l = √(h² + (r₁ − r₂)²) = 10.4**. Drawn to scale; the dashed lines show the cone it was cut from.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="110" y1="164" x2="170" y2="20" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="230" y1="164" x2="170" y2="20" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M70 260 A100 26 0 0 0 270 260" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M70 260 A100 26 0 0 1 270 260" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <ellipse cx="170" cy="164" rx="60" ry="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="110" y1="164" x2="70" y2="260" stroke="currentColor" stroke-width="1.6"/>
  <line x1="230" y1="164" x2="270" y2="260" stroke="currentColor" stroke-width="1.6"/>
  <line x1="170" y1="164" x2="170" y2="260" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="170" y1="260" x2="270" y2="260" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="170" y1="164" x2="230" y2="164" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M170 250 L180 250 L180 260" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="176" y="220" >h</text>
  <text x="220" y="276" text-anchor="middle" >r₁</text>
  <text x="240" y="156" >r₂</text>
  <text x="248" y="232" >l</text>
  <text x="340" y="70" font-size="14">Frustum</text>
  <text x="340" y="98" >l = √(h² + (r₁ − r₂)²)</text>
  <text x="340" y="124" >CSA = πl(r₁ + r₂)</text>
  <text x="340" y="150" >TSA = CSA + π(r₁² + r₂²)</text>
  <text x="340" y="176" >V = ⅓πh(r₁² + r₂² + r₁r₂)</text>
  <text x="340" y="212" fill="var(--dg-muted)" font-size="12">r₁ = bottom radius,</text>
  <text x="340" y="228" fill="var(--dg-muted)" font-size="12">r₂ = top radius.</text>
</svg>`,
    },
    {
      title: "Combinations of solids",
      caption: "Many problems join solids. Left: a **cone on a hemisphere** (a toy) with r = 3, h = 4, l = 5 units. Right: a **cylinder with a hemisphere on top**. Add the volumes; for surface area add only the curved surfaces that are exposed.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="150" y="26" text-anchor="middle" font-size="14">Cone on a hemisphere</text>
  <path d="M90 150 A60 60 0 0 0 210 150 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M90 150 L150 70 L210 150" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M90 150 A60 16 0 0 0 210 150" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M90 150 A60 16 0 0 1 210 150" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="150" y1="70" x2="150" y2="150" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="150" y1="150" x2="210" y2="150" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="150" cy="150" r="2.5" fill="currentColor"/>
  <text x="156" y="118" >h</text>
  <text x="180" y="143" text-anchor="middle" >r</text>
  <text x="188" y="104" >l</text>
  <text x="150" y="260" text-anchor="middle" >V = ⅓πr²h + ⅔πr³</text>
  <text x="150" y="282" text-anchor="middle" >Surface = πrl + 2πr²</text>
  <text x="400" y="26" text-anchor="middle" font-size="14">Cylinder with hemisphere on top</text>
  <path d="M350 150 L350 240 A50 14 0 0 0 450 240 L450 150 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M350 240 A50 14 0 0 1 450 240" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M350 150 A50 50 0 0 1 450 150" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M350 150 A50 14 0 0 0 450 150" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="400" y1="150" x2="450" y2="150" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="400" y1="240" x2="400" y2="150" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="400" cy="150" r="2.5" fill="currentColor"/>
  <text x="426" y="144" text-anchor="middle" >r</text>
  <text x="406" y="200" >h</text>
  <text x="400" y="282" text-anchor="middle" >V = πr²h + ⅔πr³</text>
  <text x="400" y="304" text-anchor="middle" >TSA = 2πrh + 3πr²</text>
</svg>`,
    },
  ],
  "statistics": [
    {
      title: "Histogram and the mode",
      caption: "The modal class is the tallest bar (30–40). Join the **top right corner of the modal bar to the top right corner of the bar before it**, and its **top left corner to the top left corner of the next bar**. The x-value where the lines cross is the mode: 30 + (16 − 12)/(32 − 12 − 6) × 10 ≈ 32.86.",
      svg: `<svg viewBox="0 0 560 305" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="60" y1="250" x2="490" y2="250" stroke="currentColor" stroke-width="1.6"/>
  <line x1="60" y1="250" x2="60" y2="48" stroke="currentColor" stroke-width="1.6"/>
  <rect x="60" y="202" width="70" height="48" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="130" y="154" width="70" height="96" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="200" y="106" width="70" height="144" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="270" y="58" width="70" height="192" fill="var(--dg-accent)" fill-opacity="0.25" stroke="var(--dg-accent)" stroke-width="2"/>
  <rect x="340" y="178" width="70" height="72" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="410" y="202" width="70" height="48" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="254" text-anchor="end" font-size="12">0</text>
  <text x="52" y="206" text-anchor="end" font-size="12">4</text>
  <text x="52" y="158" text-anchor="end" font-size="12">8</text>
  <text x="52" y="110" text-anchor="end" font-size="12">12</text>
  <text x="52" y="62" text-anchor="end" font-size="12">16</text>
  <text x="60" y="267" text-anchor="middle" font-size="12">0</text>
  <text x="130" y="267" text-anchor="middle" font-size="12">10</text>
  <text x="200" y="267" text-anchor="middle" font-size="12">20</text>
  <text x="270" y="267" text-anchor="middle" font-size="12">30</text>
  <text x="340" y="267" text-anchor="middle" font-size="12">40</text>
  <text x="410" y="267" text-anchor="middle" font-size="12">50</text>
  <text x="480" y="267" text-anchor="middle" font-size="12">60</text>
  <text x="95" y="197" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4</text>
  <text x="165" y="149" text-anchor="middle" font-size="12" fill="var(--dg-muted)">8</text>
  <text x="235" y="101" text-anchor="middle" font-size="12" fill="var(--dg-muted)">12</text>
  <text x="305" y="53" text-anchor="middle" font-size="12" fill="var(--dg-muted)">16</text>
  <text x="375" y="173" text-anchor="middle" font-size="12" fill="var(--dg-muted)">6</text>
  <text x="445" y="197" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4</text>
  <line x1="270" y1="106" x2="340" y2="58" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="270" y1="58" x2="340" y2="178" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="290" y1="92.3" x2="290" y2="250" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="290" cy="92.3" r="3.5" fill="currentColor"/>
  <text x="290" y="286" text-anchor="middle" fill="var(--dg-accent)">Mode ≈ 32.9</text>
  <text x="490" y="286" text-anchor="end" fill="var(--dg-muted)">Class interval</text>
  <text x="20" y="24" font-size="12" fill="var(--dg-muted)">Frequency</text>
  <text x="120" y="26" font-size="13">Mode = l + (f₁ − f₀)/(2f₁ − f₀ − f₂) × h</text>
</svg>`,
    },
    {
      title: "Less-than and more-than ogives",
      caption: "Plot cumulative frequency against the **upper limits** (less-than ogive) and the **lower limits** (more-than ogive). They cross at the **median**: here at x ≈ 30.6, where cumulative frequency = N/2 = 25 (N = 50).",
      svg: `<svg viewBox="0 0 560 325" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <line x1="60" y1="260" x2="490" y2="260" stroke="currentColor" stroke-width="1.6"/>
  <line x1="60" y1="260" x2="60" y2="48" stroke="currentColor" stroke-width="1.6"/>
  <text x="52" y="264" text-anchor="end" font-size="12">0</text>
  <text x="52" y="224" text-anchor="end" font-size="12">10</text>
  <text x="52" y="184" text-anchor="end" font-size="12">20</text>
  <text x="52" y="144" text-anchor="end" font-size="12">30</text>
  <text x="52" y="104" text-anchor="end" font-size="12">40</text>
  <text x="52" y="64" text-anchor="end" font-size="12">50</text>
  <text x="60" y="277" text-anchor="middle" font-size="12">0</text>
  <text x="130" y="277" text-anchor="middle" font-size="12">10</text>
  <text x="200" y="277" text-anchor="middle" font-size="12">20</text>
  <text x="270" y="277" text-anchor="middle" font-size="12">30</text>
  <text x="340" y="277" text-anchor="middle" font-size="12">40</text>
  <text x="410" y="277" text-anchor="middle" font-size="12">50</text>
  <text x="480" y="277" text-anchor="middle" font-size="12">60</text>
  <polyline points="60,260 130,244 200,212 270,164 340,100 410,76 480,60" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <polyline points="60,60 130,76 200,108 270,156 340,220 410,244 480,260" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <circle cx="130" cy="244" r="2.5" fill="currentColor"/>
  <circle cx="200" cy="212" r="2.5" fill="currentColor"/>
  <circle cx="270" cy="164" r="2.5" fill="currentColor"/>
  <circle cx="340" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="410" cy="76" r="2.5" fill="currentColor"/>
  <circle cx="480" cy="60" r="2.5" fill="currentColor"/>
  <circle cx="60" cy="60" r="2.5" fill="currentColor"/>
  <circle cx="130" cy="76" r="2.5" fill="currentColor"/>
  <circle cx="200" cy="108" r="2.5" fill="currentColor"/>
  <circle cx="270" cy="156" r="2.5" fill="currentColor"/>
  <circle cx="340" cy="220" r="2.5" fill="currentColor"/>
  <circle cx="410" cy="244" r="2.5" fill="currentColor"/>
  <line x1="60" y1="160" x2="274.4" y2="160" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="274.4" y1="160" x2="274.4" y2="260" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="274.4" cy="160" r="4" fill="currentColor"/>
  <text x="52" y="164" text-anchor="end" font-size="12" fill="var(--dg-accent)">25</text>
  <text x="274.4" y="296" text-anchor="middle" fill="var(--dg-accent)">Median ≈ 30.6</text>
  <text x="490" y="296" text-anchor="end" fill="var(--dg-muted)">Class limits</text>
  <text x="20" y="26" font-size="13">Cumulative frequency</text>
  <line x1="214" y1="72" x2="238" y2="72" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="244" y="76" font-size="12">Less than ogive</text>
  <line x1="214" y1="92" x2="238" y2="92" stroke="currentColor" stroke-width="2.2"/>
  <text x="244" y="96" font-size="12">More than ogive</text>
</svg>`,
    },
  ],
  "probability": [
    {
      title: "Sample space for two dice",
      caption: "Throwing two dice gives 6 × 6 = **36 equally likely outcomes** (first die, second die). The shaded cells have sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), so **P(sum = 7) = 6/36 = 1/6**.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="80" y="62" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="102" y="88" text-anchor="middle" font-size="12">(1,1)</text>
  <rect x="124" y="62" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="146" y="88" text-anchor="middle" font-size="12">(1,2)</text>
  <rect x="168" y="62" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="190" y="88" text-anchor="middle" font-size="12">(1,3)</text>
  <rect x="212" y="62" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="234" y="88" text-anchor="middle" font-size="12">(1,4)</text>
  <rect x="256" y="62" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="278" y="88" text-anchor="middle" font-size="12">(1,5)</text>
  <rect x="300" y="62" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="322" y="88" text-anchor="middle" font-size="12" font-weight="bold">(1,6)</text>
  <rect x="80" y="106" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="102" y="132" text-anchor="middle" font-size="12">(2,1)</text>
  <rect x="124" y="106" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="146" y="132" text-anchor="middle" font-size="12">(2,2)</text>
  <rect x="168" y="106" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="190" y="132" text-anchor="middle" font-size="12">(2,3)</text>
  <rect x="212" y="106" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="234" y="132" text-anchor="middle" font-size="12">(2,4)</text>
  <rect x="256" y="106" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="278" y="132" text-anchor="middle" font-size="12" font-weight="bold">(2,5)</text>
  <rect x="300" y="106" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="322" y="132" text-anchor="middle" font-size="12">(2,6)</text>
  <rect x="80" y="150" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="102" y="176" text-anchor="middle" font-size="12">(3,1)</text>
  <rect x="124" y="150" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="146" y="176" text-anchor="middle" font-size="12">(3,2)</text>
  <rect x="168" y="150" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="190" y="176" text-anchor="middle" font-size="12">(3,3)</text>
  <rect x="212" y="150" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="234" y="176" text-anchor="middle" font-size="12" font-weight="bold">(3,4)</text>
  <rect x="256" y="150" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="278" y="176" text-anchor="middle" font-size="12">(3,5)</text>
  <rect x="300" y="150" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="322" y="176" text-anchor="middle" font-size="12">(3,6)</text>
  <rect x="80" y="194" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="102" y="220" text-anchor="middle" font-size="12">(4,1)</text>
  <rect x="124" y="194" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="146" y="220" text-anchor="middle" font-size="12">(4,2)</text>
  <rect x="168" y="194" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="190" y="220" text-anchor="middle" font-size="12" font-weight="bold">(4,3)</text>
  <rect x="212" y="194" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="234" y="220" text-anchor="middle" font-size="12">(4,4)</text>
  <rect x="256" y="194" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="278" y="220" text-anchor="middle" font-size="12">(4,5)</text>
  <rect x="300" y="194" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="322" y="220" text-anchor="middle" font-size="12">(4,6)</text>
  <rect x="80" y="238" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="102" y="264" text-anchor="middle" font-size="12">(5,1)</text>
  <rect x="124" y="238" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="146" y="264" text-anchor="middle" font-size="12" font-weight="bold">(5,2)</text>
  <rect x="168" y="238" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="190" y="264" text-anchor="middle" font-size="12">(5,3)</text>
  <rect x="212" y="238" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="234" y="264" text-anchor="middle" font-size="12">(5,4)</text>
  <rect x="256" y="238" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="278" y="264" text-anchor="middle" font-size="12">(5,5)</text>
  <rect x="300" y="238" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="322" y="264" text-anchor="middle" font-size="12">(5,6)</text>
  <rect x="80" y="282" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="102" y="308" text-anchor="middle" font-size="12" font-weight="bold">(6,1)</text>
  <rect x="124" y="282" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="146" y="308" text-anchor="middle" font-size="12">(6,2)</text>
  <rect x="168" y="282" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="190" y="308" text-anchor="middle" font-size="12">(6,3)</text>
  <rect x="212" y="282" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="234" y="308" text-anchor="middle" font-size="12">(6,4)</text>
  <rect x="256" y="282" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="278" y="308" text-anchor="middle" font-size="12">(6,5)</text>
  <rect x="300" y="282" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="322" y="308" text-anchor="middle" font-size="12">(6,6)</text>
  <line x1="80" y1="62" x2="344" y2="62" stroke="currentColor" stroke-width="1.6"/>
  <line x1="80" y1="326" x2="344" y2="326" stroke="currentColor" stroke-width="1.6"/>
  <line x1="80" y1="62" x2="80" y2="326" stroke="currentColor" stroke-width="1.6"/>
  <line x1="344" y1="62" x2="344" y2="326" stroke="currentColor" stroke-width="1.6"/>
  <text x="102" y="54" text-anchor="middle" font-size="12" fill="var(--dg-muted)">1</text>
  <text x="146" y="54" text-anchor="middle" font-size="12" fill="var(--dg-muted)">2</text>
  <text x="190" y="54" text-anchor="middle" font-size="12" fill="var(--dg-muted)">3</text>
  <text x="234" y="54" text-anchor="middle" font-size="12" fill="var(--dg-muted)">4</text>
  <text x="278" y="54" text-anchor="middle" font-size="12" fill="var(--dg-muted)">5</text>
  <text x="322" y="54" text-anchor="middle" font-size="12" fill="var(--dg-muted)">6</text>
  <text x="72" y="88" text-anchor="end" font-size="12" fill="var(--dg-muted)">1</text>
  <text x="72" y="132" text-anchor="end" font-size="12" fill="var(--dg-muted)">2</text>
  <text x="72" y="176" text-anchor="end" font-size="12" fill="var(--dg-muted)">3</text>
  <text x="72" y="220" text-anchor="end" font-size="12" fill="var(--dg-muted)">4</text>
  <text x="72" y="264" text-anchor="end" font-size="12" fill="var(--dg-muted)">5</text>
  <text x="72" y="308" text-anchor="end" font-size="12" fill="var(--dg-muted)">6</text>
  <text x="212" y="34" text-anchor="middle" font-size="12">Second die</text>
  <text x="8" y="174" font-size="12">First</text>
  <text x="8" y="190" font-size="12">die</text>
  <text x="372" y="100" >Total outcomes = 36</text>
  <text x="372" y="126" >Sum = 7: 6 outcomes</text>
  <text x="372" y="152" font-weight="bold">P(sum = 7) = 6/36 = 1/6</text>
  <text x="372" y="190" fill="var(--dg-muted)">Doublets (1,1) … (6,6):</text>
  <text x="372" y="210" fill="var(--dg-muted)">6 outcomes, P = 1/6</text>
</svg>`,
    },
  ],
});
