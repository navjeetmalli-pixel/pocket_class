// Class 12 Maths diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(12, "maths", {
  "relations-and-functions": [
    {
      title: "One-one onto function (bijection)",
      caption: "f : A → B, f(x) = 2x + 2. **Every element of A has a different image (one-one) and every element of B is the image of some element of A (onto).** Such a function is a bijection and has an inverse.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-1-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <ellipse cx="160" cy="165" rx="62" ry="105" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="400" cy="165" rx="62" ry="105" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <text x="160" y="40" text-anchor="middle" font-size="14">A (domain)</text><text x="400" y="40" text-anchor="middle" font-size="14">B (co-domain)</text>
  <circle cx="160" cy="115" r="3.5" fill="currentColor"/><text x="148" y="119.5" text-anchor="end" >1</text>
  <circle cx="160" cy="165" r="3.5" fill="currentColor"/><text x="148" y="169.5" text-anchor="end" >2</text>
  <circle cx="160" cy="215" r="3.5" fill="currentColor"/><text x="148" y="219.5" text-anchor="end" >3</text>
  <circle cx="400" cy="115" r="3.5" fill="currentColor"/><text x="412" y="119.5" >4</text>
  <circle cx="400" cy="165" r="3.5" fill="currentColor"/><text x="412" y="169.5" >6</text>
  <circle cx="400" cy="215" r="3.5" fill="currentColor"/><text x="412" y="219.5" >8</text>
  <line x1="164" y1="115" x2="394" y2="115" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m12-1-1)"/>
  <line x1="164" y1="165" x2="394" y2="165" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m12-1-1)"/>
  <line x1="164" y1="215" x2="394" y2="215" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m12-1-1)"/>
  <text x="280" y="22" text-anchor="middle" font-size="15" font-style="italic" fill="var(--dg-accent)">f</text>
  <text x="280" y="296" text-anchor="middle" >One-one: distinct inputs give distinct outputs</text><text x="280" y="316" text-anchor="middle" fill="var(--dg-muted)">Onto: range = co-domain = {4, 6, 8}</text>
</svg>`,
    },
    {
      title: "Many-one function that is not onto",
      caption: "f : A → B, f(x) = x². Here **f(−1) = f(1) = 1, so f is not one-one**, and the element 9 of B is not the image of anything, so **f is not onto** (range {1, 4} is smaller than the co-domain).",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-1-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <ellipse cx="160" cy="165" rx="62" ry="105" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="400" cy="165" rx="62" ry="105" fill="var(--dg-fill)" opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <text x="160" y="40" text-anchor="middle" font-size="14">A (domain)</text><text x="400" y="40" text-anchor="middle" font-size="14">B (co-domain)</text>
  <circle cx="160" cy="115" r="3.5" fill="currentColor"/><text x="148" y="119.5" text-anchor="end" >−1</text>
  <circle cx="160" cy="165" r="3.5" fill="currentColor"/><text x="148" y="169.5" text-anchor="end" >1</text>
  <circle cx="160" cy="215" r="3.5" fill="currentColor"/><text x="148" y="219.5" text-anchor="end" >2</text>
  <circle cx="400" cy="115" r="3.5" fill="currentColor"/><text x="412" y="119.5" >1</text>
  <circle cx="400" cy="165" r="3.5" fill="currentColor"/><text x="412" y="169.5" >4</text>
  <circle cx="400" cy="215" r="3.5" fill="currentColor"/><text x="412" y="219.5" >9</text>
  <line x1="164" y1="115" x2="394" y2="115" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m12-1-2)"/>
  <line x1="164" y1="165" x2="394" y2="115" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m12-1-2)"/>
  <line x1="164" y1="215" x2="394" y2="165" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m12-1-2)"/>
  <text x="280" y="22" text-anchor="middle" font-size="15" font-style="italic" fill="var(--dg-accent)">f</text>
  <text x="280" y="296" text-anchor="middle" >Many-one: −1 and 1 both go to 1</text><text x="280" y="316" text-anchor="middle" fill="var(--dg-muted)">Not onto: 9 has no pre-image (range = {1, 4})</text>
</svg>`,
    },
    {
      title: "Horizontal line test for one-one functions",
      caption: "A function is one-one if **no horizontal line cuts its graph at more than one point**. y = x³/4 passes the test; y = x² − 2 fails it because y = 2 meets it at x = ±2.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-1-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="13" y1="175" x2="220.4" y2="175" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-1-3)"/>
  <line x1="115" y1="280.6" x2="115" y2="36.4" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-1-3)"/>
  <text x="218.4" y="191" text-anchor="end">X</text><text x="107" y="44.4" text-anchor="end">Y</text><text x="109" y="190" text-anchor="end" font-size="12">O</text>
  <polyline points="26.6 271.7 28.8 264.6 31 257.9 33.2 251.5 35.4 245.5 37.7 239.8 39.9 234.4 42.1 229.3 44.3 224.5 46.5 220 48.7 215.8 50.9 211.8 53.1 208.2 55.3 204.7 57.5 201.5 59.8 198.6 62 195.9 64.2 193.4 66.4 191.1 68.6 189 70.8 187.1 73 185.4 75.2 183.8 77.4 182.4 79.6 181.2 81.9 180.1 84.1 179.1 86.3 178.3 88.5 177.6 90.7 177 92.9 176.5 95.1 176.1 97.3 175.8 99.5 175.5 101.7 175.3 104 175.2 106.2 175.1 108.4 175 110.6 175 112.8 175 115 175 117.2 175 119.4 175 121.6 175 123.8 174.9 126 174.8 128.3 174.7 130.5 174.5 132.7 174.2 134.9 173.9 137.1 173.5 139.3 173 141.5 172.4 143.7 171.7 145.9 170.9 148.2 169.9 150.4 168.8 152.6 167.6 154.8 166.2 157 164.6 159.2 162.9 161.4 161 163.6 158.9 165.8 156.6 168 154.1 170.3 151.4 172.5 148.5 174.7 145.3 176.9 141.8 179.1 138.2 181.3 134.2 183.5 130 185.7 125.5 187.9 120.7 190.1 115.6 192.4 110.2 194.6 104.5 196.8 98.5 199 92.1 201.2 85.4 203.4 78.3" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="13" y1="131" x2="217" y2="131" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="222" y="135" font-size="12">y = 2</text>
  <circle cx="183" cy="131" r="3.5" fill="currentColor"/><text x="115" y="24" text-anchor="middle" font-size="14">y = x³/4  (one-one)</text>
  <line x1="288" y1="175" x2="495.4" y2="175" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-1-3)"/>
  <line x1="390" y1="280.6" x2="390" y2="36.4" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-1-3)"/>
  <text x="493.4" y="191" text-anchor="end">X</text><text x="382" y="44.4" text-anchor="end">Y</text><text x="384" y="190" text-anchor="end" font-size="12">O</text>
  <polyline points="301.6 70.3 303.8 77.6 306 84.8 308.2 91.8 310.4 98.5 312.7 105.1 314.9 111.5 317.1 117.8 319.3 123.8 321.5 129.7 323.7 135.3 325.9 140.8 328.1 146.1 330.3 151.2 332.5 156.2 334.8 160.9 337 165.5 339.2 169.8 341.4 174 343.6 178 345.8 181.8 348 185.4 350.2 188.9 352.4 192.1 354.6 195.2 356.9 198.1 359.1 200.8 361.3 203.3 363.5 205.6 365.7 207.8 367.9 209.7 370.1 211.5 372.3 213.1 374.5 214.4 376.7 215.7 379 216.7 381.2 217.5 383.4 218.2 385.6 218.6 387.8 218.9 390 219 392.2 218.9 394.4 218.6 396.6 218.2 398.8 217.5 401.1 216.7 403.3 215.7 405.5 214.4 407.7 213.1 409.9 211.5 412.1 209.7 414.3 207.8 416.5 205.6 418.7 203.3 420.9 200.8 423.2 198.1 425.4 195.2 427.6 192.1 429.8 188.9 432 185.4 434.2 181.8 436.4 178 438.6 174 440.8 169.8 443 165.5 445.3 160.9 447.5 156.2 449.7 151.2 451.9 146.1 454.1 140.8 456.3 135.3 458.5 129.7 460.7 123.8 462.9 117.8 465.1 111.5 467.4 105.1 469.6 98.5 471.8 91.8 474 84.8 476.2 77.6 478.4 70.3" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="288" y1="131" x2="492" y2="131" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="497" y="135" font-size="12">y = 2</text>
  <circle cx="322" cy="131" r="3.5" fill="currentColor"/><circle cx="458" cy="131" r="3.5" fill="currentColor"/><text x="390" y="24" text-anchor="middle" font-size="14">y = x² − 2  (many-one)</text>
  <text x="115" y="305" text-anchor="middle" font-size="12">A horizontal line cuts the graph once</text><text x="390" y="305" text-anchor="middle" font-size="12">A horizontal line cuts the graph twice</text>
</svg>`,
    },
  ],
  "inverse-trigonometric-functions": [
    {
      title: "Graph of sin⁻¹ x and its principal value branch",
      caption: "sin x is one-one and onto [−1, 1] only on **[−π/2, π/2]**, so sin⁻¹ x is defined on [−1, 1] with range **[−π/2, π/2]**. Its graph is the mirror image of that branch of sin x in the line y = x.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-2-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="30" y1="175" x2="366" y2="175" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-2-1)"/>
  <line x1="190" y1="331" x2="190" y2="19" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-2-1)"/>
  <text x="364" y="193" text-anchor="end">X</text><text x="182" y="27" text-anchor="end">Y</text>
  <text x="197" y="190" font-size="12">O</text>
  <line x1="50" y1="315" x2="330" y2="35" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="334" y="39" font-size="12" fill="var(--dg-muted)">y = x</text>
  <polyline points="64.3 255 67.5 254.9 70.6 254.8 73.8 254.4 76.9 254 80 253.5 83.2 252.8 86.3 252 89.5 251.1 92.6 250.1 95.8 248.9 98.9 247.7 102 246.3 105.2 244.8 108.3 243.2 111.5 241.5 114.6 239.7 117.7 237.8 120.9 235.8 124 233.7 127.2 231.6 130.3 229.3 133.5 227 136.6 224.5 139.7 222 142.9 219.4 146 216.8 149.2 214.1 152.3 211.3 155.4 208.5 158.6 205.6 161.7 202.7 164.9 199.7 168 196.7 171.2 193.7 174.3 190.6 177.4 187.5 180.6 184.4 183.7 181.3 186.9 178.1 190 175 193.1 171.9 196.3 168.7 199.4 165.6 202.6 162.5 205.7 159.4 208.8 156.3 212 153.3 215.1 150.3 218.3 147.3 221.4 144.4 224.6 141.5 227.7 138.7 230.8 135.9 234 133.2 237.1 130.6 240.3 128 243.4 125.5 246.5 123 249.7 120.7 252.8 118.4 256 116.3 259.1 114.2 262.3 112.2 265.4 110.3 268.5 108.5 271.7 106.8 274.8 105.2 278 103.7 281.1 102.3 284.2 101.1 287.4 99.9 290.5 98.9 293.7 98 296.8 97.2 300 96.5 303.1 96 306.2 95.6 309.4 95.2 312.5 95.1 315.7 95" fill="none" stroke="var(--dg-muted)" stroke-width="1.8" stroke-dasharray="6 4"/>
  <polyline points="110 300.7 111.6 284.6 113.2 278 114.8 272.8 116.4 268.4 118 264.6 119.6 261.1 121.2 257.8 122.8 254.8 124.4 251.9 126 249.2 127.6 246.6 129.2 244.1 130.8 241.6 132.4 239.3 134 237 135.6 234.8 137.2 232.7 138.8 230.6 140.4 228.5 142 226.5 143.6 224.5 145.2 222.6 146.8 220.6 148.4 218.7 150 216.9 151.6 215.1 153.2 213.2 154.8 211.4 156.4 209.7 158 207.9 159.6 206.2 161.2 204.5 162.8 202.8 164.4 201.1 166 199.4 167.6 197.7 169.2 196 170.8 194.4 172.4 192.7 174 191.1 175.6 189.5 177.2 187.9 178.8 186.2 180.4 184.6 182 183 183.6 181.4 185.2 179.8 186.8 178.2 188.4 176.6 190 175 191.6 173.4 193.2 171.8 194.8 170.2 196.4 168.6 198 167 199.6 165.4 201.2 163.8 202.8 162.1 204.4 160.5 206 158.9 207.6 157.3 209.2 155.6 210.8 154 212.4 152.3 214 150.6 215.6 148.9 217.2 147.2 218.8 145.5 220.4 143.8 222 142.1 223.6 140.3 225.2 138.6 226.8 136.8 228.4 134.9 230 133.1 231.6 131.3 233.2 129.4 234.8 127.4 236.4 125.5 238 123.5 239.6 121.5 241.2 119.4 242.8 117.3 244.4 115.2 246 113 247.6 110.7 249.2 108.4 250.8 105.9 252.4 103.4 254 100.8 255.6 98.1 257.2 95.2 258.8 92.2 260.4 88.9 262 85.4 263.6 81.6 265.2 77.2 266.8 72 268.4 65.4 270 49.3" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="270" y1="175" x2="270" y2="49.3" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="190" y1="49.3" x2="270" y2="49.3" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="110" y1="175" x2="110" y2="300.7" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="190" y1="300.7" x2="110" y2="300.7" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <circle cx="270" cy="49.3" r="3.5" fill="currentColor"/><circle cx="110" cy="300.7" r="3.5" fill="currentColor"/>
  <text x="184" y="53.3" text-anchor="end" font-size="12">π/2</text><text x="196" y="304.7" font-size="12">−π/2</text>
  <text x="270" y="191" text-anchor="middle" font-size="12">1</text><text x="110" y="167" text-anchor="middle" font-size="12">−1</text>
  <text x="277" y="43.3" font-size="12">(1, π/2)</text><text x="110" y="319.7" text-anchor="middle" font-size="12">(−1, −π/2)</text>
  <text x="199.6" y="247" fill="var(--dg-accent)">y = sin⁻¹ x</text><text x="102" y="199" text-anchor="end" font-size="12" fill="var(--dg-muted)">y = sin x</text>
  <text x="400" y="90" font-size="14" fill="var(--dg-accent)">y = sin⁻¹ x</text><text x="400" y="112" >Domain: [−1, 1]</text><text x="400" y="132" >Range: [−π/2, π/2]</text><text x="400" y="152" font-size="12" fill="var(--dg-muted)">(principal value branch)</text>
  <text x="400" y="192" font-size="12">Mirror image of the sine</text><text x="400" y="210" font-size="12">branch [−π/2, π/2] in the</text><text x="400" y="228" font-size="12">line y = x.</text><text x="400" y="258" >sin⁻¹(1/2) = π/6</text>
</svg>`,
    },
    {
      title: "Graph of cos⁻¹ x and its principal value branch",
      caption: "cos x is one-one and onto [−1, 1] on **[0, π]**, so cos⁻¹ x has domain [−1, 1] and range **[0, π]**. The graph falls from (−1, π) through (0, π/2) to (1, 0), and cos⁻¹(−x) = π − cos⁻¹ x.",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-2-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="21.2" y1="252" x2="366.8" y2="252" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-2-2)"/>
  <line x1="130" y1="335.2" x2="130" y2="15.2" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-2-2)"/>
  <text x="364.8" y="270" text-anchor="end">X</text><text x="122" y="23.2" text-anchor="end">Y</text>
  <text x="137" y="267" font-size="12">O</text>
  <line x1="53.2" y1="328.8" x2="347.6" y2="34.4" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="351.6" y="38.4" font-size="12" fill="var(--dg-muted)">y = x</text>
  <polyline points="130 188 132.5 188 135 188.2 137.5 188.4 140.1 188.8 142.6 189.2 145.1 189.8 147.6 190.4 150.1 191.1 152.6 192 155.1 192.9 157.6 193.9 160.2 195 162.7 196.2 165.2 197.4 167.7 198.8 170.2 200.2 172.7 201.7 175.2 203.3 177.8 205 180.3 206.7 182.8 208.6 185.3 210.4 187.8 212.4 190.3 214.4 192.8 216.4 195.3 218.6 197.9 220.7 200.4 222.9 202.9 225.2 205.4 227.5 207.9 229.8 210.4 232.2 212.9 234.6 215.5 237.1 218 239.5 220.5 242 223 244.5 225.5 247 228 249.5 230.5 252 233 254.5 235.6 257 238.1 259.5 240.6 262 243.1 264.5 245.6 266.9 248.1 269.4 250.6 271.8 253.2 274.2 255.7 276.5 258.2 278.8 260.7 281.1 263.2 283.3 265.7 285.4 268.2 287.6 270.7 289.6 273.3 291.6 275.8 293.6 278.3 295.4 280.8 297.3 283.3 299 285.8 300.7 288.3 302.3 290.8 303.8 293.4 305.2 295.9 306.6 298.4 307.8 300.9 309 303.4 310.1 305.9 311.1 308.4 312 311 312.9 313.5 313.6 316 314.2 318.5 314.8 321 315.2 323.5 315.6 326 315.8 328.5 316 331.1 316" fill="none" stroke="var(--dg-muted)" stroke-width="1.8" stroke-dasharray="6 4"/>
  <polyline points="66 50.9 67.3 63.8 68.6 69.1 69.8 73.2 71.1 76.7 72.4 79.8 73.7 82.6 75 85.2 76.2 87.6 77.5 89.9 78.8 92.1 80.1 94.2 81.4 96.2 82.6 98.2 83.9 100 85.2 101.8 86.5 103.6 87.8 105.3 89 107 90.3 108.7 91.6 110.3 92.9 111.9 94.2 113.4 95.4 115 96.7 116.5 98 118 99.3 119.4 100.6 120.9 101.8 122.3 103.1 123.7 104.4 125.1 105.7 126.5 107 127.9 108.2 129.3 109.5 130.6 110.8 132 112.1 133.3 113.4 134.6 114.6 136 115.9 137.3 117.2 138.6 118.5 139.9 119.8 141.2 121 142.5 122.3 143.8 123.6 145.1 124.9 146.3 126.2 147.6 127.4 148.9 128.7 150.2 130 151.5 131.3 152.7 132.6 154 133.8 155.3 135.1 156.6 136.4 157.9 137.7 159.2 139 160.5 140.2 161.8 141.5 163.1 142.8 164.4 144.1 165.7 145.4 167 146.6 168.3 147.9 169.6 149.2 171 150.5 172.3 151.8 173.7 153 175 154.3 176.4 155.6 177.8 156.9 179.2 158.2 180.6 159.4 182.1 160.7 183.5 162 185 163.3 186.5 164.6 188 165.8 189.5 167.1 191.1 168.4 192.7 169.7 194.3 171 195.9 172.2 197.6 173.5 199.3 174.8 201.1 176.1 202.9 177.4 204.8 178.6 206.7 179.9 208.7 181.2 210.8 182.5 213 183.8 215.3 185 217.7 186.3 220.3 187.6 223.1 188.9 226.2 190.2 229.7 191.4 233.8 192.7 239.2 194 252" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="66" y1="252" x2="66" y2="50.9" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="130" y1="50.9" x2="66" y2="50.9" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="331.1" y1="252" x2="331.1" y2="316" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="130" y1="316" x2="331.1" y2="316" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="194" y1="252" x2="194" y2="188" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <circle cx="66" cy="50.9" r="3.5" fill="currentColor"/><circle cx="194" cy="252" r="3.5" fill="currentColor"/><circle cx="130" cy="151.5" r="3.5" fill="currentColor"/><circle cx="331.1" cy="316" r="3.5" fill="currentColor"/>
  <text x="136" y="54.9" font-size="12">π</text><text x="124" y="155.5" text-anchor="end" font-size="12">π/2</text><text x="124" y="320" text-anchor="end" font-size="12">−1</text>
  <text x="66" y="268" text-anchor="middle" font-size="12">−1</text><text x="331.1" y="244" text-anchor="middle" font-size="12">π</text>
  <text x="59" y="54.9" text-anchor="end" font-size="12">(−1, π)</text><text x="139" y="142.5" font-size="12">(0, π/2)</text>
  <text x="190" y="268" text-anchor="end" font-size="12">(1, 0)</text><text x="327.1" y="334" text-anchor="end" font-size="12">(π, −1)</text>
  <text x="226" y="210.4" font-size="12" fill="var(--dg-muted)">y = cos x</text><text x="155.6" y="111.2" fill="var(--dg-accent)">y = cos⁻¹ x</text>
  <text x="395" y="90" font-size="14" fill="var(--dg-accent)">y = cos⁻¹ x</text><text x="395" y="112" >Domain: [−1, 1]</text><text x="395" y="132" >Range: [0, π]</text><text x="395" y="152" font-size="12" fill="var(--dg-muted)">(principal value branch)</text>
  <text x="395" y="192" font-size="12">Mirror image of the cosine</text><text x="395" y="210" font-size="12">branch [0, π] in the line</text><text x="395" y="228" font-size="12">y = x.</text><text x="395" y="258" >cos⁻¹(1/2) = π/3</text>
</svg>`,
    },
    {
      title: "Graph of tan⁻¹ x with its horizontal asymptotes",
      caption: "tan x is one-one and onto R on **(−π/2, π/2)**, so tan⁻¹ x is defined for every real x with range **(−π/2, π/2)**. Its graph rises through the origin and approaches the lines y = ±π/2 without touching them.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-2-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="1.6" y1="165" x2="410.8" y2="165" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-2-3)"/>
  <line x1="200" y1="313.8" x2="200" y2="16.2" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-2-3)"/>
  <text x="408.8" y="183" text-anchor="end">X</text><text x="192" y="24.2" text-anchor="end">Y</text>
  <text x="207" y="180" font-size="12">O</text>
  <line x1="69.8" y1="295.2" x2="330.2" y2="34.8" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="334.2" y="38.8" font-size="12" fill="var(--dg-muted)">y = x</text>
  <line x1="102.6" y1="307.6" x2="102.6" y2="22.4" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="297.4" y1="307.6" x2="297.4" y2="22.4" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="7.8" y1="262.4" x2="379.8" y2="262.4" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="7.8" y1="67.6" x2="379.8" y2="67.6" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <polyline points="129.1 301.4 131.4 288.7 133.8 277.7 136.2 268.2 138.5 259.8 140.9 252.3 143.2 245.6 145.6 239.6 148 234 150.3 229 152.7 224.3 155.1 219.9 157.4 215.8 159.8 212 162.2 208.4 164.5 204.9 166.9 201.7 169.3 198.5 171.6 195.5 174 192.7 176.4 189.9 178.7 187.2 181.1 184.5 183.4 182 185.8 179.4 188.2 177 190.5 174.5 192.9 172.1 195.3 169.7 197.6 167.4 200 165 202.4 162.6 204.7 160.3 207.1 157.9 209.5 155.5 211.8 153 214.2 150.6 216.6 148 218.9 145.5 221.3 142.8 223.6 140.1 226 137.3 228.4 134.5 230.7 131.5 233.1 128.3 235.5 125.1 237.8 121.6 240.2 118 242.6 114.2 244.9 110.1 247.3 105.7 249.7 101 252 96 254.4 90.4 256.8 84.4 259.1 77.7 261.5 70.2 263.8 61.8 266.2 52.3 268.6 41.3 270.9 28.6" fill="none" stroke="var(--dg-muted)" stroke-width="1.8"/>
  <polyline points="7.8 243 11.6 242.7 15.5 242.3 19.3 241.9 23.2 241.5 27 241.1 30.9 240.6 34.7 240.1 38.6 239.7 42.4 239.2 46.2 238.6 50.1 238.1 53.9 237.5 57.8 236.9 61.6 236.3 65.5 235.6 69.3 234.9 73.1 234.2 77 233.4 80.8 232.6 84.7 231.8 88.5 230.9 92.4 230 96.2 229 100.1 228 103.9 226.9 107.7 225.7 111.6 224.5 115.4 223.2 119.3 221.8 123.1 220.3 127 218.8 130.8 217.1 134.7 215.3 138.5 213.4 142.3 211.4 146.2 209.3 150 207.1 153.9 204.7 157.7 202.1 161.6 199.4 165.4 196.6 169.2 193.5 173.1 190.4 176.9 187.1 180.8 183.6 184.6 180.1 188.5 176.4 192.3 172.6 196.2 168.8 200 165 203.8 161.2 207.7 157.4 211.5 153.6 215.4 149.9 219.2 146.4 223.1 142.9 226.9 139.6 230.8 136.5 234.6 133.4 238.4 130.6 242.3 127.9 246.1 125.3 250 122.9 253.8 120.7 257.7 118.6 261.5 116.6 265.3 114.7 269.2 112.9 273 111.2 276.9 109.7 280.7 108.2 284.6 106.8 288.4 105.5 292.3 104.3 296.1 103.1 299.9 102 303.8 101 307.6 100 311.5 99.1 315.3 98.2 319.2 97.4 323 96.6 326.9 95.8 330.7 95.1 334.5 94.4 338.4 93.7 342.2 93.1 346.1 92.5 349.9 91.9 353.8 91.4 357.6 90.8 361.4 90.3 365.3 89.9 369.1 89.4 373 88.9 376.8 88.5 380.7 88.1 384.5 87.7 388.4 87.3 392.2 87" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="383.8" y="71.6" font-size="12">y = π/2</text><text x="383.8" y="266.4" font-size="12">y = −π/2</text>
  <text x="98.6" y="19.4" text-anchor="end" font-size="12">x = −π/2</text><text x="301.4" y="19.4" font-size="12">x = π/2</text>
  <text x="308.5" y="134" fill="var(--dg-accent)">y = tan⁻¹ x</text><text x="252.7" y="37.9" text-anchor="end" font-size="12" fill="var(--dg-muted)">y = tan x</text>
  <text x="410" y="208" font-size="13">Domain: R (all real x)</text><text x="410" y="228" font-size="13">Range: (−π/2, π/2)</text><text x="410" y="248" font-size="13">tan⁻¹ 1 = π/4</text>
</svg>`,
    },
  ],
  "determinants": [
    {
      title: "Area of a triangle using a determinant",
      caption: "The area of the triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) is **½ times the absolute value of the 3 × 3 determinant** with rows (xᵢ, yᵢ, 1). For A(2, 1), B(6, 2), C(4, 5) the determinant is 14, so the area is 7. If it were 0, the points would be collinear.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-4-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="82" y1="270" x2="82" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="124" y1="270" x2="124" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="166" y1="270" x2="166" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="208" y1="270" x2="208" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="250" y1="270" x2="250" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="292" y1="270" x2="292" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="40" y1="230" x2="308.8" y2="230" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="40" y1="190" x2="308.8" y2="190" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="40" y1="150" x2="308.8" y2="150" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="40" y1="110" x2="308.8" y2="110" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="40" y1="70" x2="308.8" y2="70" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="40" y1="30" x2="308.8" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="27.4" y1="270" x2="334" y2="270" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-4-1)"/>
  <line x1="40" y1="282" x2="40" y2="6" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-4-1)"/>
  <text x="332" y="286" text-anchor="end">X</text><text x="32" y="14" text-anchor="end">Y</text>
  <text x="35" y="285" text-anchor="end" font-size="12">O</text>
  <polygon points="124,230 292,190 208,70" fill="var(--dg-fill)" opacity="0.85" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <circle cx="124" cy="230" r="3.5" fill="currentColor"/>
  <circle cx="292" cy="190" r="3.5" fill="currentColor"/>
  <circle cx="208" cy="70" r="3.5" fill="currentColor"/>
  <text x="116" y="247" text-anchor="end" >A(2, 1)</text><text x="292" y="209" text-anchor="middle" >B(6, 2)</text><text x="208" y="60" text-anchor="middle" >C(4, 5)</text><text x="82" y="285" text-anchor="middle" font-size="11" fill="var(--dg-muted)">1</text><text x="124" y="285" text-anchor="middle" font-size="11" fill="var(--dg-muted)">2</text><text x="166" y="285" text-anchor="middle" font-size="11" fill="var(--dg-muted)">3</text><text x="208" y="285" text-anchor="middle" font-size="11" fill="var(--dg-muted)">4</text><text x="250" y="285" text-anchor="middle" font-size="11" fill="var(--dg-muted)">5</text><text x="292" y="285" text-anchor="middle" font-size="11" fill="var(--dg-muted)">6</text>
  <text x="335" y="60" font-size="14">Area of ΔABC = ½ |Δ|, where</text>
  <line x1="341" y1="76" x2="341" y2="146" stroke="currentColor" stroke-width="1.4"/><line x1="453" y1="76" x2="453" y2="146" stroke="currentColor" stroke-width="1.4"/>
  <text x="331" y="118" text-anchor="end">Δ =</text>
  <text x="363" y="98" text-anchor="middle" >2</text>
  <text x="401" y="98" text-anchor="middle" >1</text>
  <text x="439" y="98" text-anchor="middle" >1</text>
  <text x="363" y="120" text-anchor="middle" >6</text>
  <text x="401" y="120" text-anchor="middle" >2</text>
  <text x="439" y="120" text-anchor="middle" >1</text>
  <text x="363" y="142" text-anchor="middle" >4</text>
  <text x="401" y="142" text-anchor="middle" >5</text>
  <text x="439" y="142" text-anchor="middle" >1</text>
  <text x="335" y="182" >Δ = 2(2 − 5) − 1(6 − 4) + 1(30 − 8)</text><text x="351" y="204" >= −6 − 2 + 22 = 14</text><text x="335" y="240" font-size="14" fill="var(--dg-accent)">Area = ½ × 14 = 7 sq. units</text>
  <text x="335" y="270" font-size="12" fill="var(--dg-muted)">(rows are x, y, 1 of each vertex)</text>
</svg>`,
    },
  ],
  "continuity-and-differentiability": [
    {
      title: "f(x) = |x|: continuous but not differentiable at 0",
      caption: "The graph of |x| has no break, so it is **continuous everywhere**. At the corner x = 0 the slope jumps from −1 to +1, so **the left and right derivatives differ** and f′(0) does not exist.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-5-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="52" y1="205" x2="448" y2="205" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-5-1)"/>
  <line x1="250" y1="232.5" x2="250" y2="18" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-5-1)"/>
  <text x="446" y="223" text-anchor="end">X</text><text x="242" y="26" text-anchor="end">Y</text>
  <text x="244" y="220" text-anchor="end" font-size="12">O</text>
  <polyline points="85 40 90.5 45.5 96 51 101.5 56.5 107 62 112.5 67.5 118 73 123.5 78.5 129 84 134.5 89.5 140 95 145.5 100.5 151 106 156.5 111.5 162 117 167.5 122.5 173 128 178.5 133.5 184 139 189.5 144.5 195 150 200.5 155.5 206 161 211.5 166.5 217 172 222.5 177.5 228 183 233.5 188.5 239 194 244.5 199.5 250 205 255.5 199.5 261 194 266.5 188.5 272 183 277.5 177.5 283 172 288.5 166.5 294 161 299.5 155.5 305 150 310.5 144.5 316 139 321.5 133.5 327 128 332.5 122.5 338 117 343.5 111.5 349 106 354.5 100.5 360 95 365.5 89.5 371 84 376.5 78.5 382 73 387.5 67.5 393 62 398.5 56.5 404 51 409.5 45.5 415 40" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="250" cy="205" r="3.5" fill="currentColor"/>
  <text x="364.5" y="100.5" font-size="12">slope = +1</text><text x="135.5" y="100.5" text-anchor="end" font-size="12">slope = −1</text>
  <text x="421" y="44" fill="var(--dg-accent)">y = |x|</text>
  <text x="280" y="262" text-anchor="middle" font-size="14">f(x) = |x| is continuous at x = 0</text><text x="280" y="284" text-anchor="middle" font-size="13">LHD = −1 ≠ RHD = +1, so f is not differentiable at 0</text>
</svg>`,
    },
    {
      title: "Jump discontinuity at x = 2",
      caption: "The left-hand limit (3) and right-hand limit (1) at x = 2 are different, so **the limit does not exist and f is discontinuous at 2**. The open circle shows a value the graph approaches but does not take; the filled dot is f(2) = 1.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-5-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="25.5" y1="235" x2="460" y2="235" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-5-2)"/>
  <line x1="130" y1="255" x2="130" y2="19" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-5-2)"/>
  <text x="458" y="253" text-anchor="end">X</text><text x="122" y="27" text-anchor="end">Y</text>
  <text x="124" y="250" text-anchor="end" font-size="12">O</text>
  <polyline points="75 235 80.4 231.1 85.8 227.2 91.2 223.2 96.6 219.3 102 215.4 107.3 211.5 112.7 207.6 118.1 203.6 123.5 199.7 128.9 195.8 134.3 191.9 139.7 188 145.1 184 150.5 180.1 155.9 176.2 161.2 172.3 166.6 168.4 172 164.4 177.4 160.5 182.8 156.6 188.2 152.7 193.6 148.8 199 144.8 204.4 140.9 209.8 137 215.1 133.1 220.5 129.2 225.9 125.2 231.3 121.3 236.7 117.4" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <polyline points="240 195 244 192.1 248.1 189.1 252.1 186.2 256.1 183.3 260.2 180.3 264.2 177.4 268.2 174.5 272.3 171.5 276.3 168.6 280.3 165.7 284.4 162.7 288.4 159.8 292.4 156.9 296.5 153.9 300.5 151 304.5 148.1 308.6 145.1 312.6 142.2 316.6 139.3 320.7 136.3 324.7 133.4 328.7 130.5 332.8 127.5 336.8 124.6 340.8 121.7 344.9 118.7 348.9 115.8 352.9 112.9 357 109.9 361 107" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="240" y1="235" x2="240" y2="115" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="130" y1="115" x2="240" y2="115" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="130" y1="195" x2="240" y2="195" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <circle cx="240" cy="115" r="3.5" fill="none" stroke="var(--dg-accent)" stroke-width="2"/><circle cx="240" cy="195" r="3.5" fill="currentColor"/>
  <text x="124" y="119" text-anchor="end" font-size="12">3</text><text x="124" y="199" text-anchor="end" font-size="12">1</text><text x="240" y="251" text-anchor="middle" font-size="12">2</text>
  <text x="232" y="105" text-anchor="end" font-size="12">left limit = 3</text><text x="248" y="223" font-size="12">right limit = 1 = f(2)</text>
  <text x="385" y="62" font-size="13">f(x) = x + 1,  x &lt; 2</text><text x="385" y="82" font-size="13">f(x) = x − 1,  x ≥ 2</text>
  <text x="385" y="120" font-size="13">left limit at 2 is 3</text><text x="385" y="140" font-size="13">right limit at 2 is 1</text><text x="385" y="170" font-size="13">The limits differ, so f is</text><text x="385" y="190" font-size="13">discontinuous at x = 2</text><text x="385" y="210" font-size="13">(jump discontinuity).</text>
</svg>`,
    },
    {
      title: "Removable discontinuity at x = 1",
      caption: "The limit at x = 1 exists (it is 2) but **differs from f(1) = 3**, so f is discontinuous. This is a removable discontinuity: the graph is the line y = x + 1 with a hole at (1, 2).",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-5-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="22" y1="235" x2="376" y2="235" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-5-3)"/>
  <line x1="190" y1="257.5" x2="190" y2="23.5" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-5-3)"/>
  <text x="374" y="253" text-anchor="end">X</text><text x="182" y="31.5" text-anchor="end">Y</text>
  <text x="184" y="250" text-anchor="end" font-size="12">O</text>
  <polyline points="88 266.5 93.3 262.5 98.6 258.6 103.8 254.6 109.1 250.7 114.4 246.7 119.7 242.7 125 238.8 130.2 234.8 135.5 230.9 140.8 226.9 146.1 222.9 151.4 219 156.6 215 161.9 211.1 167.2 207.1 172.5 203.1 177.8 199.2 183 195.2 188.3 191.3 193.6 187.3 198.9 183.3 204.2 179.4 209.4 175.4 214.7 171.5 220 167.5 225.3 163.5 230.6 159.6 235.8 155.6 241.1 151.7 246.4 147.7" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <polyline points="253.6 142.3 256.7 140 259.8 137.7 262.8 135.4 265.9 133.1 269 130.8 272.1 128.4 275.2 126.1 278.2 123.8 281.3 121.5 284.4 119.2 287.5 116.9 290.6 114.6 293.6 112.3 296.7 110 299.8 107.7 302.9 105.3 306 103 309 100.7 312.1 98.4 315.2 96.1 318.3 93.8 321.4 91.5 324.4 89.2 327.5 86.9 330.6 84.5 333.7 82.2 336.8 79.9 339.8 77.6 342.9 75.3 346 73" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="250" y1="235" x2="250" y2="100" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="190" y1="145" x2="250" y2="145" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="190" y1="100" x2="250" y2="100" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <circle cx="250" cy="145" r="3.5" fill="none" stroke="var(--dg-accent)" stroke-width="2"/><circle cx="250" cy="100" r="3.5" fill="currentColor"/>
  <text x="184" y="149" text-anchor="end" font-size="12">2</text><text x="184" y="104" text-anchor="end" font-size="12">3</text><text x="252" y="251" text-anchor="middle" font-size="12">1</text>
  <text x="260" y="104" font-size="12">f(1) = 3</text><text x="238" y="133" text-anchor="end" font-size="12">limit = 2</text>
  <text x="350" y="62" font-size="13">f(x) = (x² − 1)/(x − 1), x ≠ 1</text><text x="350" y="82" font-size="13">f(1) = 3</text>
  <text x="350" y="124" font-size="13">For x ≠ 1, f(x) = x + 1</text><text x="350" y="148" font-size="13">limit as x → 1 is 2, but f(1) = 3</text><text x="350" y="178" font-size="13">Removable discontinuity:</text><text x="350" y="198" font-size="13">redefining f(1) = 2 would</text><text x="350" y="218" font-size="13">make f continuous.</text>
</svg>`,
    },
  ],
  "application-of-derivatives": [
    {
      title: "Increasing, decreasing and turning points of a cubic",
      caption: "For f(x) = x³ − 3x, f′(x) = 3(x² − 1). **f′ > 0 means f is increasing and f′ < 0 means decreasing.** f′ changes from + to − at x = −1 (local maximum, value 2) and from − to + at x = 1 (local minimum, value −2); the tangent is horizontal at both.",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-6-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="30" y1="185" x2="446" y2="185" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-6-1)"/>
  <line x1="230" y1="285.8" x2="230" y2="90.5" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-6-1)"/>
  <text x="444" y="201" text-anchor="end">X</text><text x="222" y="98.5" text-anchor="end">Y</text>
  <text x="237" y="178" font-size="12">O</text>
  <polyline points="54 270 57.9 258.5 61.8 247.7 65.7 237.4 69.6 227.8 73.6 218.8 77.5 210.4 81.4 202.6 85.3 195.3 89.2 188.6 93.1 182.4 97 176.7 100.9 171.5 104.8 166.8 108.8 162.6 112.7 158.9 116.6 155.5 120.5 152.6 124.4 150.1 128.3 148 132.2 146.3 136.1 145 140 144 144 143.4 147.9 143 151.8 143 155.7 143.3 159.6 143.9 163.5 144.7 167.4 145.8 171.3 147.1 175.2 148.6 179.2 150.4 183.1 152.3 187 154.4 190.9 156.7 194.8 159.1 198.7 161.6 202.6 164.3 206.5 167.1 210.4 169.9 214.4 172.8 218.3 175.8 222.2 178.9 226.1 181.9 230 185 233.9 188.1 237.8 191.1 241.7 194.2 245.6 197.2 249.6 200.1 253.5 202.9 257.4 205.7 261.3 208.4 265.2 210.9 269.1 213.3 273 215.6 276.9 217.7 280.8 219.6 284.8 221.4 288.7 222.9 292.6 224.2 296.5 225.3 300.4 226.1 304.3 226.7 308.2 227 312.1 227 316 226.6 320 226 323.9 225 327.8 223.7 331.7 222 335.6 219.9 339.5 217.4 343.4 214.5 347.3 211.1 351.2 207.4 355.2 203.2 359.1 198.5 363 193.3 366.9 187.6 370.8 181.4 374.7 174.7 378.6 167.4 382.5 159.6 386.4 151.2 390.4 142.2 394.3 132.6 398.2 122.3 402.1 111.5 406 100" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="70" y1="143" x2="230" y2="143" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="390" y1="227" x2="230" y2="227" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="110" y1="143" x2="190" y2="143" stroke="var(--dg-accent)" stroke-width="1.6"/>
  <line x1="270" y1="227" x2="350" y2="227" stroke="var(--dg-accent)" stroke-width="1.6"/>
  <circle cx="150" cy="143" r="3.5" fill="currentColor"/><circle cx="310" cy="227" r="3.5" fill="currentColor"/>
  <text x="142" y="135" text-anchor="end" font-size="12">Local maximum (−1, 2)</text>
  <text x="318" y="246" font-size="12">Local minimum (1, −2)</text>
  <text x="145" y="201" text-anchor="end" font-size="12">−1</text>
  <text x="315" y="179" font-size="12">1</text>
  <text x="346" y="94.7" fill="var(--dg-accent)">y = x³ − 3x</text>
  <text x="86" y="24" text-anchor="middle" font-size="12">f′(x) &gt; 0</text><text x="86" y="40" text-anchor="middle" font-size="12">increasing</text>
  <text x="230" y="24" text-anchor="middle" font-size="12">f′(x) &lt; 0</text><text x="230" y="40" text-anchor="middle" font-size="12">decreasing</text>
  <text x="374" y="24" text-anchor="middle" font-size="12">f′(x) &gt; 0</text><text x="374" y="40" text-anchor="middle" font-size="12">increasing</text>
  <line x1="150" y1="48" x2="150" y2="137" stroke="var(--dg-muted)" stroke-dasharray="2 5"/>
  <line x1="150" y1="189" x2="150" y2="300" stroke="var(--dg-muted)" stroke-dasharray="2 5"/>
  <line x1="310" y1="48" x2="310" y2="221" stroke="var(--dg-muted)" stroke-dasharray="2 5"/>
  <line x1="310" y1="251" x2="310" y2="300" stroke="var(--dg-muted)" stroke-dasharray="2 5"/>
  <text x="230" y="330" text-anchor="middle" font-size="13">f′(x) = 3x² − 3 = 3(x − 1)(x + 1) = 0 at x = −1 and x = 1</text>
</svg>`,
    },
    {
      title: "Tangent and normal to a curve at a point",
      caption: "At P(1, 1) on y = x², the **tangent has slope dy/dx = 2** and the **normal, being perpendicular to it, has slope −1/2**. The little square marks the right angle between them.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-6-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="15" y1="250" x2="310" y2="250" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-6-2)"/>
  <line x1="105" y1="310" x2="105" y2="5" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-6-2)"/>
  <text x="308" y="266" text-anchor="end">X</text><text x="97" y="13" text-anchor="end">Y</text>
  <text x="99" y="265" text-anchor="end" font-size="12">O</text>
  <polyline points="30 137.5 32.6 145.1 35.1 152.4 37.7 159.5 40.3 166.2 42.9 172.8 45.4 179 48 185 50.6 190.8 53.1 196.2 55.7 201.4 58.3 206.4 60.9 211 63.4 215.4 66 219.6 68.6 223.5 71.1 227.1 73.7 230.4 76.3 233.5 78.9 236.3 81.4 238.9 84 241.2 86.6 243.2 89.1 245 91.7 246.5 94.3 247.7 96.9 248.7 99.4 249.4 102 249.8 104.6 250 107.1 249.9 109.7 249.6 112.3 248.9 114.9 248.1 117.4 246.9 120 245.5 122.6 243.8 125.1 241.9 127.7 239.7 130.3 237.2 132.9 234.5 135.4 231.5 138 228.2 140.6 224.7 143.1 220.9 145.7 216.8 148.3 212.5 150.9 207.9 153.4 203.1 156 198 158.6 192.6 161.1 187 163.7 181.1 166.3 174.9 168.9 168.4 171.4 161.7 174 154.8 176.6 147.6 179.1 140.1 181.7 132.3 184.3 124.3 186.9 116 189.4 107.4 192 98.6 194.6 89.5 197.1 80.2 199.7 70.6 202.3 60.7 204.9 50.6 207.4 40.2 210 29.5" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="85" y1="340" x2="225" y2="60" stroke="currentColor" stroke-width="1.6"/>
  <line x1="45" y1="145" x2="275" y2="260" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <polyline points="160.4 189.3 171.1 194.6 165.7 205.4" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="155" cy="200" r="3.5" fill="currentColor"/>
  <text x="173" y="192" >P(1, 1)</text><text x="216" y="34" >y = x²</text>
  <text x="231" y="64" font-size="12">Tangent</text><text x="255" y="275" text-anchor="middle" font-size="12" fill="var(--dg-accent)">Normal</text>
  <text x="330" y="90" font-size="14">y = x²,  P(1, 1)</text><text x="330" y="116" >dy/dx = 2x = 2 at P</text>
  <text x="330" y="154" >Tangent: slope m = 2</text><text x="330" y="174" >y − 1 = 2(x − 1)</text><text x="330" y="194" >i.e. 2x − y − 1 = 0</text>
  <text x="330" y="232" fill="var(--dg-accent)">Normal: slope = −1/m = −1/2</text><text x="330" y="252" fill="var(--dg-accent)">y − 1 = −½(x − 1)</text><text x="330" y="272" fill="var(--dg-accent)">i.e. x + 2y − 3 = 0</text>
</svg>`,
    },
  ],
  "integrals": [
    {
      title: "Definite integral as the limit of a sum of strips",
      caption: "The area under y = x² from 0 to 2 is squeezed between the **lower sum of the shaded rectangles (2.19)** and the **upper sum of the dashed rectangles (3.19)**. As the strips get thinner both sums approach the definite integral of x² from 0 to 2, which is **8/3**.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-7-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="38.5" y1="250" x2="374.5" y2="250" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-7-1)"/>
  <line x1="70" y1="264.4" x2="70" y2="66.4" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-7-1)"/>
  <text x="372.5" y="266" text-anchor="end">X</text><text x="62" y="74.4" text-anchor="end">Y</text>
  <text x="66" y="265" text-anchor="end" font-size="12">O</text>
  <rect x="70" y="247.8" width="26.3" height="2.3" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="70" y="250" width="26.3" height="0" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="96.3" y="241" width="26.3" height="9" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="96.3" y="247.8" width="26.3" height="2.3" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="122.5" y="229.8" width="26.3" height="20.3" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="122.5" y="241" width="26.3" height="9" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="148.8" y="214" width="26.3" height="36" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="148.8" y="229.8" width="26.3" height="20.3" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="175" y="193.8" width="26.3" height="56.3" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="175" y="214" width="26.3" height="36" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="201.3" y="169" width="26.3" height="81" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="201.3" y="193.8" width="26.3" height="56.3" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="227.5" y="139.8" width="26.3" height="110.3" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="227.5" y="169" width="26.3" height="81" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <rect x="253.8" y="106" width="26.3" height="144" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3" stroke-width="1"/>
  <rect x="253.8" y="139.8" width="26.3" height="110.3" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="1"/>
  <polyline points="70 250 72.8 250 75.6 249.9 78.5 249.8 81.3 249.6 84.1 249.3 86.9 249.1 89.8 248.7 92.6 248.3 95.4 247.9 98.2 247.4 101 246.9 103.9 246.3 106.7 245.6 109.5 244.9 112.3 244.1 115.2 243.3 118 242.5 120.8 241.6 123.6 240.6 126.4 239.6 129.3 238.5 132.1 237.4 134.9 236.2 137.7 235 140.5 233.7 143.4 232.4 146.2 231 149 229.6 151.8 228.1 154.7 226.6 157.5 225 160.3 223.4 163.1 221.7 165.9 219.9 168.8 218.1 171.6 216.3 174.4 214.4 177.2 212.5 180.1 210.5 182.9 208.4 185.7 206.3 188.5 204.1 191.3 201.9 194.2 199.7 197 197.3 199.8 195 202.6 192.6 205.5 190.1 208.3 187.6 211.1 185 213.9 182.4 216.7 179.7 219.6 177 222.4 174.2 225.2 171.3 228 168.5 230.8 165.5 233.7 162.5 236.5 159.5 239.3 156.4 242.1 153.2 245 150 247.8 146.8 250.6 143.5 253.4 140.1 256.2 136.7 259.1 133.3 261.9 129.8 264.7 126.2 267.5 122.6 270.4 118.9 273.2 115.2 276 111.4 278.8 107.6 281.6 103.7 284.5 99.8 287.3 95.8 290.1 91.8 292.9 87.7 295.8 83.6" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="280" y="266" text-anchor="middle" font-size="12">b = 2</text><text x="238" y="80.8" fill="var(--dg-accent)">y = x²</text>
  <text x="320" y="70" font-size="13">Strip width h = (2 − 0)/8 = 0.25</text><text x="320" y="100" font-size="13">Lower sum (shaded) = 2.19</text><text x="320" y="120" font-size="13">Upper sum (dashed) = 3.19</text>
  <text x="320" y="160" font-size="13">Lower sum &lt; area &lt; upper sum</text><text x="320" y="190" font-size="13">As n → ∞ both tend to</text>
  <text x="320" y="220" font-size="14" fill="var(--dg-accent)"><tspan dx="0">∫</tspan><tspan font-size="9" dy="8">0</tspan><tspan font-size="9" dx="-5" dy="-15">2</tspan><tspan dy="7"> x² dx = [x³/3] = 8/3</tspan></text><text x="320" y="242" font-size="13">≈ 2.67</text>
</svg>`,
    },
    {
      title: "Signed area: the integral of sin x over 0 to 2π",
      caption: "A definite integral gives **signed area**: area above the x-axis counts positive and area below counts negative. The two arches of sin x each have area 2, so the integral of sin x from 0 to 2π is 0 while the actual enclosed area is 4.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-7-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="38.4" y1="150" x2="556.8" y2="150" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-7-2)"/>
  <line x1="60" y1="266" x2="60" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-7-2)"/>
  <text x="554.8" y="144" text-anchor="end">X</text><text x="52" y="38" text-anchor="end">Y</text>
  <text x="55" y="165" text-anchor="end" font-size="12">O</text>
  <polygon points="60 150 60 150 63.8 145.8 67.5 141.6 71.3 137.5 75.1 133.4 78.8 129.3 82.6 125.3 86.4 121.3 90.2 117.5 93.9 113.7 97.7 110 101.5 106.4 105.2 103 109 99.7 112.8 96.5 116.5 93.4 120.3 90.5 124.1 87.8 127.9 85.3 131.6 82.9 135.4 80.7 139.2 78.7 142.9 76.9 146.7 75.3 150.5 73.9 154.2 72.7 158 71.7 161.8 71 165.6 70.4 169.3 70.1 173.1 70 176.9 70.1 180.6 70.4 184.4 71 188.2 71.7 191.9 72.7 195.7 73.9 199.5 75.3 203.3 76.9 207 78.7 210.8 80.7 214.6 82.9 218.3 85.3 222.1 87.8 225.9 90.5 229.6 93.4 233.4 96.5 237.2 99.7 241 103 244.7 106.4 248.5 110 252.3 113.7 256 117.5 259.8 121.3 263.6 125.3 267.3 129.3 271.1 133.4 274.9 137.5 278.7 141.6 282.4 145.8 286.2 150 286.2 150" fill="var(--dg-fill)" opacity="0.85"/>
  <polygon points="286.2 150 286.2 150 290 154.2 293.7 158.4 297.5 162.5 301.3 166.6 305 170.7 308.8 174.7 312.6 178.7 316.4 182.5 320.1 186.3 323.9 190 327.7 193.6 331.4 197 335.2 200.3 339 203.5 342.7 206.6 346.5 209.5 350.3 212.2 354.1 214.7 357.8 217.1 361.6 219.3 365.4 221.3 369.1 223.1 372.9 224.7 376.7 226.1 380.4 227.3 384.2 228.3 388 229 391.8 229.6 395.5 229.9 399.3 230 403.1 229.9 406.8 229.6 410.6 229 414.4 228.3 418.1 227.3 421.9 226.1 425.7 224.7 429.5 223.1 433.2 221.3 437 219.3 440.8 217.1 444.5 214.7 448.3 212.2 452.1 209.5 455.8 206.6 459.6 203.5 463.4 200.3 467.2 197 470.9 193.6 474.7 190 478.5 186.3 482.2 182.5 486 178.7 489.8 174.7 493.5 170.7 497.3 166.6 501.1 162.5 504.8 158.4 508.6 154.2 512.4 150 512.4 150" fill="var(--dg-fill)" opacity="0.85"/>
  <polyline points="60 150 63.8 145.8 67.5 141.6 71.3 137.5 75.1 133.4 78.8 129.3 82.6 125.3 86.4 121.3 90.2 117.5 93.9 113.7 97.7 110 101.5 106.4 105.2 103 109 99.7 112.8 96.5 116.5 93.4 120.3 90.5 124.1 87.8 127.9 85.3 131.6 82.9 135.4 80.7 139.2 78.7 142.9 76.9 146.7 75.3 150.5 73.9 154.2 72.7 158 71.7 161.8 71 165.6 70.4 169.3 70.1 173.1 70 176.9 70.1 180.6 70.4 184.4 71 188.2 71.7 191.9 72.7 195.7 73.9 199.5 75.3 203.3 76.9 207 78.7 210.8 80.7 214.6 82.9 218.3 85.3 222.1 87.8 225.9 90.5 229.6 93.4 233.4 96.5 237.2 99.7 241 103 244.7 106.4 248.5 110 252.3 113.7 256 117.5 259.8 121.3 263.6 125.3 267.3 129.3 271.1 133.4 274.9 137.5 278.7 141.6 282.4 145.8 286.2 150 290 154.2 293.7 158.4 297.5 162.5 301.3 166.6 305 170.7 308.8 174.7 312.6 178.7 316.4 182.5 320.1 186.3 323.9 190 327.7 193.6 331.4 197 335.2 200.3 339 203.5 342.7 206.6 346.5 209.5 350.3 212.2 354.1 214.7 357.8 217.1 361.6 219.3 365.4 221.3 369.1 223.1 372.9 224.7 376.7 226.1 380.4 227.3 384.2 228.3 388 229 391.8 229.6 395.5 229.9 399.3 230 403.1 229.9 406.8 229.6 410.6 229 414.4 228.3 418.1 227.3 421.9 226.1 425.7 224.7 429.5 223.1 433.2 221.3 437 219.3 440.8 217.1 444.5 214.7 448.3 212.2 452.1 209.5 455.8 206.6 459.6 203.5 463.4 200.3 467.2 197 470.9 193.6 474.7 190 478.5 186.3 482.2 182.5 486 178.7 489.8 174.7 493.5 170.7 497.3 166.6 501.1 162.5 504.8 158.4 508.6 154.2 512.4 150" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="173.1" y="167" text-anchor="middle" font-size="12">π/2</text>
  <text x="286.2" y="167" text-anchor="middle" font-size="12">π</text>
  <text x="399.3" y="167" text-anchor="middle" font-size="12">3π/2</text>
  <text x="512.4" y="167" text-anchor="middle" font-size="12">2π</text>
  <text x="173.1" y="118" text-anchor="middle" font-size="14">+2</text><text x="399.3" y="186" text-anchor="middle" font-size="14">−2</text>
  <text x="320.1" y="78" fill="var(--dg-accent)">y = sin x</text>
  <text x="280" y="258" text-anchor="middle" font-size="13"><tspan dx="0">∫</tspan><tspan font-size="9" dy="8">0</tspan><tspan font-size="9" dx="-5" dy="-15">π</tspan><tspan dy="7"> sin x dx = 2,        </tspan><tspan dx="30">∫</tspan><tspan font-size="9" dy="8">π</tspan><tspan font-size="9" dx="-5" dy="-15">2π</tspan><tspan dy="7"> sin x dx = −2</tspan></text>
  <text x="280" y="284" text-anchor="middle" font-size="13"><tspan dx="0">∫</tspan><tspan font-size="9" dy="8">0</tspan><tspan font-size="9" dx="-5" dy="-15">2π</tspan><tspan dy="7"> sin x dx = 2 + (−2) = 0      (area below the axis counts as negative)</tspan></text>
</svg>`,
    },
    {
      title: "Additive property of definite integrals",
      caption: "For a < c < b, the area under y = f(x) from a to b is **the area from a to c (A₁) plus the area from c to b (A₂)**. This property is used to split integrals such as the integral of |x − 2| at the point where the expression changes sign.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m12-7-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="44" y1="235" x2="500" y2="235" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-7-3)"/>
  <line x1="60" y1="247" x2="60" y2="43" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m12-7-3)"/>
  <text x="498" y="253" text-anchor="end">X</text><text x="52" y="51" text-anchor="end">Y</text>
  <text x="55" y="250" text-anchor="end" font-size="12">O</text>
  <polygon points="140 235 140 162.4 143.2 162.1 146.4 161.7 149.6 161.4 152.8 161.1 156 160.8 159.2 160.5 162.4 160.2 165.6 159.9 168.8 159.6 172 159.3 175.2 159 178.4 158.7 181.6 158.4 184.8 158.1 188 157.8 191.2 157.6 194.4 157.3 197.6 157.1 200.8 156.8 204 156.6 207.2 156.3 210.4 156.1 213.6 155.8 216.8 155.6 220 155.4 223.2 155.1 226.4 154.9 229.6 154.7 232.8 154.5 236 154.2 239.2 154 242.4 153.8 245.6 153.6 248.8 153.3 252 153.1 255.2 152.9 258.4 152.6 261.6 152.4 264.8 152.2 268 151.9 271.2 151.7 274.4 151.4 277.6 151.1 280.8 150.8 284 150.5 287.2 150.2 290.4 149.9 293.6 149.6 296.8 149.2 300 148.9 300 235" fill="var(--dg-fill)" opacity="0.9" stroke="currentColor" stroke-width="0.8"/>
  <polygon points="300 235 300 148.9 303.2 148.5 306.4 148.1 309.6 147.7 312.8 147.3 316 146.8 319.2 146.4 322.4 145.9 325.6 145.4 328.8 144.8 332 144.3 335.2 143.7 338.4 143.1 341.6 142.4 344.8 141.8 348 141.1 351.2 140.4 354.4 139.6 357.6 138.8 360.8 138 364 137.1 367.2 136.3 370.4 135.3 373.6 134.4 376.8 133.4 380 132.4 383.2 131.3 386.4 130.2 389.6 129 392.8 127.9 396 126.6 399.2 125.4 402.4 124.1 405.6 122.7 408.8 121.3 412 119.9 415.2 118.4 418.4 116.9 421.6 115.4 424.8 113.8 428 112.1 431.2 110.5 434.4 108.7 437.6 107 440.8 105.2 444 103.3 447.2 101.4 450.4 99.5 453.6 97.5 456.8 95.5 460 93.4 460 235" fill="var(--dg-accent)" opacity="0.25" stroke="currentColor" stroke-width="0.8"/>
  <polyline points="140 162.4 143.2 162.1 146.4 161.7 149.6 161.4 152.8 161.1 156 160.8 159.2 160.5 162.4 160.2 165.6 159.9 168.8 159.6 172 159.3 175.2 159 178.4 158.7 181.6 158.4 184.8 158.1 188 157.8 191.2 157.6 194.4 157.3 197.6 157.1 200.8 156.8 204 156.6 207.2 156.3 210.4 156.1 213.6 155.8 216.8 155.6 220 155.4 223.2 155.1 226.4 154.9 229.6 154.7 232.8 154.5 236 154.2 239.2 154 242.4 153.8 245.6 153.6 248.8 153.3 252 153.1 255.2 152.9 258.4 152.6 261.6 152.4 264.8 152.2 268 151.9 271.2 151.7 274.4 151.4 277.6 151.1 280.8 150.8 284 150.5 287.2 150.2 290.4 149.9 293.6 149.6 296.8 149.2 300 148.9 303.2 148.5 306.4 148.1 309.6 147.7 312.8 147.3 316 146.8 319.2 146.4 322.4 145.9 325.6 145.4 328.8 144.8 332 144.3 335.2 143.7 338.4 143.1 341.6 142.4 344.8 141.8 348 141.1 351.2 140.4 354.4 139.6 357.6 138.8 360.8 138 364 137.1 367.2 136.3 370.4 135.3 373.6 134.4 376.8 133.4 380 132.4 383.2 131.3 386.4 130.2 389.6 129 392.8 127.9 396 126.6 399.2 125.4 402.4 124.1 405.6 122.7 408.8 121.3 412 119.9 415.2 118.4 418.4 116.9 421.6 115.4 424.8 113.8 428 112.1 431.2 110.5 434.4 108.7 437.6 107 440.8 105.2 444 103.3 447.2 101.4 450.4 99.5 453.6 97.5 456.8 95.5 460 93.4" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="140" y1="235" x2="140" y2="162.4" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="300" y1="235" x2="300" y2="148.9" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="460" y1="235" x2="460" y2="93.4" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <text x="140" y="251" text-anchor="middle" font-size="13">a</text><text x="300" y="251" text-anchor="middle" font-size="13">c</text><text x="460" y="251" text-anchor="middle" font-size="13">b</text>
  <text x="220" y="205" text-anchor="middle" font-size="15">A₁</text><text x="380" y="205" text-anchor="middle" font-size="15">A₂</text>
  <text x="468" y="97.4" fill="var(--dg-accent)">y = f(x)</text>
  <text x="280" y="272" text-anchor="middle" font-size="13"><tspan dx="0">∫</tspan><tspan font-size="9" dy="8">a</tspan><tspan font-size="9" dx="-5" dy="-15">c</tspan><tspan dy="7"> f(x) dx = A₁,        </tspan><tspan dx="30">∫</tspan><tspan font-size="9" dy="8">c</tspan><tspan font-size="9" dx="-5" dy="-15">b</tspan><tspan dy="7"> f(x) dx = A₂</tspan></text>
  <text x="280" y="296" text-anchor="middle" font-size="13"><tspan dx="0">∫</tspan><tspan font-size="9" dy="8">a</tspan><tspan font-size="9" dx="-5" dy="-15">b</tspan><tspan dy="7"> f(x) dx =</tspan><tspan dx="8">∫</tspan><tspan font-size="9" dy="8">a</tspan><tspan font-size="9" dx="-5" dy="-15">c</tspan><tspan dy="7"> f(x) dx +</tspan><tspan dx="8">∫</tspan><tspan font-size="9" dy="8">c</tspan><tspan font-size="9" dx="-5" dy="-15">b</tspan><tspan dy="7"> f(x) dx = A₁ + A₂,</tspan>  a &lt; c &lt; b</text>
</svg>`,
    },
  ],
  "application-of-integrals": [
    {
      title: "Area between the parabola y² = 4x and the line y = x",
      caption: "The curves meet at (0, 0) and (4, 4). **Take a vertical strip of height (2√x − x) and width dx, and add the strips from x = 0 to x = 4.** Here the parabola lies above the line.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-8-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <polygon points="70,285 70,283 70.1,281 70.2,279 70.3,277 70.5,275 70.7,273 71,271 71.3,269 71.6,267 72,265 72.4,263 72.9,261 73.4,259 73.9,257 74.5,255 75.1,253 75.8,251 76.5,249 77.2,247 78,245 78.8,243 79.7,241 80.6,239 81.5,237 82.5,235 83.5,233 84.6,231 85.7,229 86.8,227 88,225 89.2,223 90.5,221 91.8,219 93.1,217 94.5,215 95.9,213 97.4,211 98.9,209 100.4,207 102,205 103.6,203 105.3,201 107,199 108.7,197 110.5,195 112.3,193 114.2,191 116.1,189 118,187 120,185 122,183 124.1,181 126.2,179 128.3,177 130.5,175 132.7,173 135,171 137.3,169 139.6,167 142,165 144.4,163 146.9,161 149.4,159 151.9,157 154.5,155 157.1,153 159.8,151 162.5,149 165.2,147 168,145 170.8,143 173.7,141 176.6,139 179.5,137 182.5,135 185.5,133 188.6,131 191.7,129 194.8,127 198,125 201.2,123 204.5,121 207.8,119 211.1,117 214.5,115 217.9,113 221.4,111 224.9,109 228.4,107 232,105 235.6,103 239.3,101 243,99 246.7,97 250.5,95 254.3,93 258.2,91 262.1,89 266,87 270,85 70,285" fill="var(--dg-fill)" opacity="0.8"/>
  <line x1="50" y1="285" x2="350" y2="285" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-8-1)"/><line x1="70" y1="305" x2="70" y2="15" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-8-1)"/>
  <polyline points="70,285 70,283 70.1,281 70.2,279 70.3,277 70.5,275 70.7,273 71,271 71.3,269 71.6,267 72,265 72.4,263 72.9,261 73.4,259 73.9,257 74.5,255 75.1,253 75.8,251 76.5,249 77.2,247 78,245 78.8,243 79.7,241 80.6,239 81.5,237 82.5,235 83.5,233 84.6,231 85.7,229 86.8,227 88,225 89.2,223 90.5,221 91.8,219 93.1,217 94.5,215 95.9,213 97.4,211 98.9,209 100.4,207 102,205 103.6,203 105.3,201 107,199 108.7,197 110.5,195 112.3,193 114.2,191 116.1,189 118,187 120,185 122,183 124.1,181 126.2,179 128.3,177 130.5,175 132.7,173 135,171 137.3,169 139.6,167 142,165 144.4,163 146.9,161 149.4,159 151.9,157 154.5,155 157.1,153 159.8,151 162.5,149 165.2,147 168,145 170.8,143 173.7,141 176.6,139 179.5,137 182.5,135 185.5,133 188.6,131 191.7,129 194.8,127 198,125 201.2,123 204.5,121 207.8,119 211.1,117 214.5,115 217.9,113 221.4,111 224.9,109 228.4,107 232,105 235.6,103 239.3,101 243,99 246.7,97 250.5,95 254.3,93 258.2,91 262.1,89 266,87 270,85 274,83 278.1,81 282.2,79 286.3,77 290.5,75 294.7,73 299,71 303.3,69 307.6,67 312,65 316.4,63" fill="none" stroke="var(--dg-accent)" stroke-width="2"/><line x1="70" y1="285" x2="320" y2="35" stroke="currentColor" stroke-width="2"/>
  <rect x="170" y="143.6" width="6" height="41.4" fill="var(--dg-accent)" opacity="0.6"/>
  <line x1="270" y1="85" x2="270" y2="285" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="70" y1="85" x2="270" y2="85" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <circle cx="270" cy="85" r="3.5"/><circle cx="70" cy="285" r="3.5"/>
  <text x="270" y="303" text-anchor="middle" >4</text><text x="54" y="89" >4</text><text x="54" y="301" >O</text>
  <text x="350" y="289" font-style="italic">x</text><text x="78" y="18" font-style="italic">y</text>
  <text x="280" y="111" >(4, 4)</text><text x="326" y="39" >y = x</text><text x="326" y="77.5" fill="var(--dg-accent)">y² = 4x</text>
  <text x="173" y="203" text-anchor="middle" font-size="12">dx</text>
  <text x="372" y="140" >Strip at x: height 2√x − x</text>
  <text x="372" y="168" >Area = ∫₀⁴ (2√x − x) dx</text><text x="372" y="192" >= [4x^(3/2)/3 − x²/2]₀⁴</text><text x="372" y="216" >= 32/3 − 8 = 8/3 sq. units</text>
</svg>`,
    },
    {
      title: "Ellipse x²/25 + y²/9 = 1: area of one quadrant",
      caption: "The ellipse is symmetric about both axes, so **Area = 4 × (area of the first quadrant) = 4∫₀ᵃ y dx** with y = (b/a)√(a² − x²). The total area is πab.",
      svg: `<svg viewBox="0 0 560 350" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-8-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M260 170 L485 170 A225 135 0 0 0 260 35 Z" fill="var(--dg-fill)" opacity="0.85"/>
  <ellipse cx="260" cy="170" rx="225" ry="135" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="20" y1="170" x2="520" y2="170" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-8-2)"/><line x1="260" y1="325" x2="260" y2="12" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-8-2)"/>
  <rect x="395" y="62" width="6" height="108" fill="var(--dg-accent)" opacity="0.6"/>
  <circle cx="485" cy="170" r="3.5"/><circle cx="260" cy="35" r="3.5"/>
  <text x="493" y="188" >(5, 0)</text><text x="200" y="57" >(0, 3)</text>
  <text x="246" y="186" >O</text><text x="522" y="174" font-style="italic">x</text><text x="268" y="18" font-style="italic">y</text>
  <text x="398" y="188" text-anchor="middle" font-size="12">dx</text>
  <text x="335" y="100" text-anchor="middle" font-size="12">y = (3/5)√(25 − x²)</text>
  <text x="350" y="245" text-anchor="middle" >x²/25 + y²/9 = 1</text>
  <text x="280" y="343" text-anchor="middle" >Area = 4∫₀⁵ (3/5)√(25 − x²) dx = π · 5 · 3 = 15π sq. units</text>
</svg>`,
    },
  ],
  "differential-equations": [
    {
      title: "Family of curves y = Cx² (solution curves of x dy/dx = 2y)",
      caption: "Each value of the arbitrary constant C gives one curve; together they are the **general solution** of the first-order equation x dy/dx = 2y. Fixing one point (a condition) picks a single curve, the particular solution.",
      svg: `<svg viewBox="0 0 560 335" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-9-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="130" y1="300" x2="440" y2="300" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-9-1)"/><line x1="280" y1="318" x2="280" y2="18" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-9-1)"/>
  <polyline points="168.2,175 170.1,179.1 171.9,183.2 173.8,187.2 175.7,191.1 177.5,195 179.4,198.7 181.2,202.5 183.1,206.1 185,209.7 186.8,213.2 188.7,216.6 190.6,220 192.4,223.3 194.3,226.5 196.1,229.7 198,232.8 199.9,235.8 201.7,238.8 203.6,241.6 205.5,244.4 207.3,247.2 209.2,249.9 211.1,252.5 212.9,255 214.8,257.5 216.6,259.9 218.5,262.2 220.4,264.4 222.2,266.6 224.1,268.8 226,270.8 227.8,272.8 229.7,274.7 231.6,276.5 233.4,278.3 235.3,280 237.1,281.6 239,283.2 240.9,284.7 242.7,286.1 244.6,287.5 246.5,288.8 248.3,290 250.2,291.1 252,292.2 253.9,293.2 255.8,294.1 257.6,295 259.5,295.8 261.4,296.5 263.2,297.2 265.1,297.8 267,298.3 268.8,298.8 270.7,299.1 272.5,299.4 274.4,299.7 276.3,299.9 278.1,300 280,300 281.9,300 283.7,299.9 285.6,299.7 287.5,299.4 289.3,299.1 291.2,298.8 293,298.3 294.9,297.8 296.8,297.2 298.6,296.5 300.5,295.8 302.4,295 304.2,294.1 306.1,293.2 308,292.2 309.8,291.1 311.7,290 313.5,288.7 315.4,287.5 317.3,286.1 319.1,284.7 321,283.2 322.9,281.6 324.7,280 326.6,278.3 328.4,276.5 330.3,274.7 332.2,272.8 334,270.8 335.9,268.7 337.8,266.6 339.6,264.4 341.5,262.2 343.4,259.9 345.2,257.5 347.1,255 348.9,252.5 350.8,249.9 352.7,247.2 354.5,244.4 356.4,241.6 358.3,238.7 360.1,235.8 362,232.8 363.9,229.7 365.7,226.5 367.6,223.3 369.4,220 371.3,216.6 373.2,213.2 375,209.7 376.9,206.1 378.8,202.5 380.6,198.7 382.5,195 384.3,191.1 386.2,187.2 388.1,183.2 389.9,179.1 391.8,175" fill="none" stroke="currentColor" stroke-width="1.8"/><polyline points="180,100 181.7,106.6 183.3,113.1 185,119.5 186.7,125.8 188.3,131.9 190,138 191.7,143.9 193.3,149.8 195,155.5 196.7,161.1 198.3,166.6 200,172 201.7,177.3 203.3,182.4 205,187.5 206.7,192.4 208.3,197.3 210,202 211.7,206.6 213.3,211.1 215,215.5 216.7,219.8 218.3,223.9 220,228 221.7,231.9 223.3,235.8 225,239.5 226.7,243.1 228.3,246.6 230,250 231.7,253.3 233.3,256.4 235,259.5 236.7,262.4 238.3,265.3 240,268 241.7,270.6 243.3,273.1 245,275.5 246.7,277.8 248.3,279.9 250,282 251.7,283.9 253.3,285.8 255,287.5 256.7,289.1 258.3,290.6 260,292 261.7,293.3 263.3,294.4 265,295.5 266.7,296.4 268.3,297.3 270,298 271.7,298.6 273.3,299.1 275,299.5 276.7,299.8 278.3,299.9 280,300 281.7,299.9 283.3,299.8 285,299.5 286.7,299.1 288.3,298.6 290,298 291.7,297.3 293.3,296.4 295,295.5 296.7,294.4 298.3,293.3 300,292 301.7,290.6 303.3,289.1 305,287.5 306.7,285.8 308.3,283.9 310,282 311.7,279.9 313.3,277.8 315,275.5 316.7,273.1 318.3,270.6 320,268 321.7,265.3 323.3,262.4 325,259.5 326.7,256.4 328.3,253.3 330,250 331.7,246.6 333.3,243.1 335,239.5 336.7,235.8 338.3,231.9 340,228 341.7,223.9 343.3,219.8 345,215.5 346.7,211.1 348.3,206.6 350,202 351.7,197.3 353.3,192.4 355,187.5 356.7,182.4 358.3,177.3 360,172 361.7,166.6 363.3,161.1 365,155.5 366.7,149.8 368.3,143.9 370,138 371.7,131.9 373.3,125.8 375,119.5 376.7,113.1 378.3,106.6 380,100" fill="none" stroke="var(--dg-accent)" stroke-width="2"/><polyline points="198.6,35 200,43.8 201.3,52.4 202.7,60.8 204,69.2 205.4,77.3 206.7,85.3 208.1,93.2 209.5,101 210.8,108.5 212.2,116 213.5,123.3 214.9,130.4 216.2,137.4 217.6,144.2 219,150.9 220.3,157.5 221.7,163.9 223,170.1 224.4,176.3 225.7,182.2 227.1,188 228.5,193.7 229.8,199.2 231.2,204.6 232.5,209.8 233.9,214.9 235.2,219.8 236.6,224.6 237.9,229.3 239.3,233.7 240.7,238.1 242,242.3 243.4,246.3 244.7,250.2 246.1,254 247.4,257.6 248.8,261.1 250.2,264.4 251.5,267.5 252.9,270.6 254.2,273.4 255.6,276.1 256.9,278.7 258.3,281.2 259.7,283.4 261,285.6 262.4,287.6 263.7,289.4 265.1,291.1 266.4,292.6 267.8,294 269.1,295.3 270.5,296.4 271.9,297.3 273.2,298.2 274.6,298.8 275.9,299.3 277.3,299.7 278.6,299.9 280,300 281.4,299.9 282.7,299.7 284.1,299.3 285.4,298.8 286.8,298.2 288.1,297.4 289.5,296.4 290.9,295.3 292.2,294 293.6,292.6 294.9,291.1 296.3,289.4 297.6,287.6 299,285.6 300.3,283.4 301.7,281.2 303.1,278.7 304.4,276.2 305.8,273.4 307.1,270.6 308.5,267.5 309.8,264.4 311.2,261.1 312.6,257.6 313.9,254 315.3,250.2 316.6,246.3 318,242.3 319.3,238.1 320.7,233.8 322.1,229.3 323.4,224.6 324.8,219.8 326.1,214.9 327.5,209.8 328.8,204.6 330.2,199.2 331.5,193.7 332.9,188 334.3,182.2 335.6,176.3 337,170.2 338.3,163.9 339.7,157.5 341,150.9 342.4,144.2 343.8,137.4 345.1,130.4 346.5,123.3 347.8,116 349.2,108.5 350.5,101 351.9,93.2 353.3,85.4 354.6,77.3 356,69.2 357.3,60.8 358.7,52.4 360,43.8 361.4,35" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="192.6" y="39" text-anchor="end">C = 2</text><text x="174" y="104" text-anchor="end" fill="var(--dg-accent)">C = 1</text><text x="162.2" y="179" text-anchor="end">C = 1/2</text>
  <text x="264" y="316" >O</text><text x="444" y="304" font-style="italic">x</text><text x="288" y="20" font-style="italic">y</text>
  <text x="410" y="39" >y = Cx²</text>
</svg>`,
    },
  ],
  "vector-algebra": [
    {
      title: "Triangle law and parallelogram law of vector addition",
      caption: "Triangle law: **if OA = a and AB = b, then OB = a + b** (the tail of b is placed at the head of a). Parallelogram law: when a and b are drawn from the same point O, **their sum is the diagonal OB** of the parallelogram OABC with OA = a and OC = b.",
      svg: `<svg viewBox="0 95 560 190" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-10-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-m12-10-1x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="30" y1="210" x2="150" y2="135" stroke="currentColor" stroke-width="2" marker-end="url(#ar-m12-10-1)"/><line x1="150" y1="135" x2="260" y2="195" stroke="currentColor" stroke-width="2" marker-end="url(#ar-m12-10-1)"/><line x1="30" y1="210" x2="260" y2="195" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m12-10-1)"/>
  <text x="76" y="160" font-style="italic" text-anchor="end">a</text><text x="222" y="152" font-style="italic">b</text><text x="140" y="224" text-anchor="middle" font-style="italic" fill="var(--dg-accent)">a + b</text>
  <text x="18" y="216" >O</text><text x="150" y="124" text-anchor="middle" >A</text><text x="268" y="202" >B</text>
  <text x="150" y="268" text-anchor="middle" >Triangle law: OB = OA + AB</text>
  <line x1="310" y1="230" x2="450" y2="200" stroke="currentColor" stroke-width="2" marker-end="url(#ar-m12-10-1)"/><line x1="310" y1="230" x2="370" y2="140" stroke="currentColor" stroke-width="2" marker-end="url(#ar-m12-10-1)"/><line x1="370" y1="140" x2="510" y2="110" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="450" y1="200" x2="510" y2="110" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="310" y1="230" x2="510" y2="110" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m12-10-1)"/>
  <text x="385" y="236" text-anchor="middle" font-style="italic">a</text><text x="326" y="184" font-style="italic" text-anchor="end">b</text><text x="432" y="182" text-anchor="middle" font-style="italic" fill="var(--dg-accent)">a + b</text>
  <text x="298" y="238" >O</text><text x="458" y="214" >A</text><text x="356" y="136" >C</text><text x="516" y="106" >B</text>
  <text x="410" y="268" text-anchor="middle" >Parallelogram law: OB = OA + OC</text>
</svg>`,
    },
    {
      title: "Section formula: P divides AB internally in the ratio m : n",
      caption: "With position vectors OA = a, OB = b and OP = r, a point P on AB with **AP : PB = m : n** has **r = (m·b + n·a)/(m + n)**. The midpoint is the case m = n = 1, giving r = (a + b)/2.",
      svg: `<svg viewBox="0 55 560 265" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-10-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="100" y1="110" x2="480" y2="70" stroke="currentColor" stroke-width="2.2"/>
  <line x1="280" y1="265" x2="100" y2="110" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-m12-10-2)"/><line x1="280" y1="265" x2="480" y2="70" stroke="currentColor" stroke-width="1.8" marker-end="url(#ar-m12-10-2)"/><line x1="280" y1="265" x2="252" y2="94" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m12-10-2)"/>
  <circle cx="100" cy="110" r="3.5"/><circle cx="480" cy="70" r="3.5"/><circle cx="252" cy="94" r="3.5"/><circle cx="280" cy="265" r="3.5"/>
  <text x="86" y="114" text-anchor="end">A</text><text x="490" y="72" >B</text><text x="252" y="82" text-anchor="middle" >P</text><text x="290" y="269" >O</text>
  <text x="176" y="126" text-anchor="middle" font-style="italic">m</text><text x="366" y="104" text-anchor="middle" font-style="italic">n</text>
  <text x="192" y="208" font-style="italic" text-anchor="end">a</text><text x="398" y="186" font-style="italic">b</text><text x="274" y="172" font-style="italic" fill="var(--dg-accent)" >r</text>
  <text x="280" y="298" text-anchor="middle" >OP = (m·OB + n·OA)/(m + n),  i.e.  r = (m b + n a)/(m + n)</text>
</svg>`,
    },
    {
      title: "Projection of a vector a on a vector b",
      caption: "Drop a perpendicular from the tip of a to the line of b. **The length OF is the projection of a on b = |a| cos θ = (a·b)/|b|.** It is positive when θ is acute and negative when θ is obtuse.",
      svg: `<svg viewBox="0 65 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-10-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-m12-10-3x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="80" y1="220" x2="420" y2="220" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-10-3)"/><line x1="80" y1="220" x2="250" y2="80" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-10-3)"/>
  <line x1="250" y1="80" x2="250" y2="220" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="80" y1="220" x2="250" y2="220" stroke="var(--dg-accent)" stroke-width="4"/>
  <path d="M240 220 v-10 h10" fill="none" stroke="currentColor"/>
  <path d="M125 220 A45 45 0 0 0 114.7 191.4" fill="none" stroke="currentColor"/>
  <text x="135" y="212" >θ</text><text x="148" y="148" font-style="italic" text-anchor="end">a</text><text x="428" y="224" font-style="italic">b</text>
  <text x="68" y="240" >O</text><text x="246" y="240" >F</text><text x="258" y="82" >A</text>
  <text x="165" y="258" text-anchor="middle" fill="var(--dg-accent)">OF = projection of a on b</text><text x="165" y="278" text-anchor="middle" >= |a| cos θ = (a·b)/|b|</text>
</svg>`,
    },
  ],
  "three-dimensional-geometry": [
    {
      title: "Direction angles and direction cosines of a line OP",
      caption: "If a directed line OP makes angles α, β, γ with the positive x, y and z axes, then **l = cos α, m = cos β, n = cos γ are its direction cosines**, and l² + m² + n² = 1. For P(x, y, z) and r = OP: l = x/r, m = y/r, n = z/r.",
      svg: `<svg viewBox="0 0 560 345" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-11-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="200" y1="230" x2="88" y2="302" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-11-1)"/><line x1="200" y1="230" x2="480" y2="230" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-11-1)"/><line x1="200" y1="230" x2="200" y2="22" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-11-1)"/>
  <line x1="264" y1="266" x2="264" y2="110" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="264" y1="266" x2="144" y2="266" stroke="var(--dg-muted)" stroke-dasharray="5 4"/><line x1="264" y1="266" x2="320" y2="230" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="200" y1="230" x2="264" y2="110" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m12-11-1)"/>
  <circle cx="200" cy="230" r="3.5"/><circle cx="264" cy="110" r="3.5"/>
  <text x="74" y="308" font-style="italic">x</text><text x="486" y="234" font-style="italic">y</text><text x="208" y="28" font-style="italic">z</text>
  <text x="208" y="246" >O</text><text x="272" y="104" >P (x, y, z)</text>
  <text x="136" y="282" text-anchor="end">A</text><text x="324" y="246" >B</text>
  <text x="166" y="232" fill="var(--dg-accent)">α</text><text x="226" y="222" fill="var(--dg-accent)">β</text><text x="206" y="190" fill="var(--dg-accent)">γ</text>
  <text x="370" y="110" >α, β, γ = angles of OP</text><text x="370" y="128" >with Ox, Oy, Oz</text>
  <text x="370" y="158" >l = cos α = x/r</text><text x="370" y="178" >m = cos β = y/r</text><text x="370" y="198" >n = cos γ = z/r</text>
  <text x="370" y="228" >l² + m² + n² = 1</text>
  <text x="280" y="330" text-anchor="middle" >Example: P(2, 3, 6), r = 7, so (l, m, n) = (2/7, 3/7, 6/7)</text>
</svg>`,
    },
    {
      title: "Angle between two lines from their direction vectors",
      caption: "The angle θ between two lines is the angle between their direction vectors b₁ and b₂: **cos θ = |b₁·b₂| / (|b₁||b₂|)**. For skew lines, shift one line parallel to itself until the lines meet and measure the angle there.",
      svg: `<svg viewBox="0 40 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-11-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="ar-m12-11-2x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="147.7" y1="210.5" x2="463.8" y2="85.3" stroke="currentColor" stroke-width="1.6"/><line x1="220.2" y1="233.3" x2="313.9" y2="34.3" stroke="currentColor" stroke-width="1.6"/>
  <line x1="250" y1="170" x2="389.5" y2="114.8" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m12-11-2x)"/><line x1="250" y1="170" x2="299" y2="65.9" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m12-11-2x)"/>
  <path d="M305.8 147.9 A60 60 0 0 0 275.5 115.7" fill="none" stroke="currentColor"/>
  <text x="318" y="143" >θ</text>
  <text x="472.5" y="87.5" >ℓ₁</text><text x="320" y="25.8" >ℓ₂</text>
  <text x="385.5" y="132.8" font-style="italic" fill="var(--dg-accent)">b₁</text><text x="309" y="65.9" font-style="italic" fill="var(--dg-accent)">b₂</text>
  <circle cx="250" cy="170" r="3.5"/>
  <text x="280" y="262" text-anchor="middle" >cos θ = |b₁·b₂| / (|b₁||b₂|)</text><text x="280" y="284" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Direction ratios (a₁, b₁, c₁), (a₂, b₂, c₂): numerator = |a₁a₂ + b₁b₂ + c₁c₂|</text>
</svg>`,
    },
  ],
  "linear-programming": [
    {
      title: "Feasible region and corner points: Maximise Z = 3x + 2y",
      caption: "Constraints: x + 2y ≤ 10, 3x + y ≤ 15, x, y ≥ 0. The shaded **feasible region is bounded**, so the maximum of Z occurs at a corner point. Compare Z at O, A, P and D: **the maximum is 18 at P(4, 3)**.",
      svg: `<svg viewBox="0 0 560 335" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor"><defs><marker id="ar-m12-12-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <polygon points="70,300 295,300 250,165 70,75" fill="var(--dg-fill)" opacity="0.85"/>
  <line x1="50" y1="300" x2="450" y2="300" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-12-1)"/><line x1="70" y1="318" x2="70" y2="12" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m12-12-1)"/>
  <line x1="70" y1="75" x2="430" y2="255" stroke="currentColor" stroke-width="1.8"/><line x1="295" y1="300" x2="205" y2="30" stroke="currentColor" stroke-width="1.8"/>
  <line x1="340" y1="300" x2="160" y2="30" stroke="var(--dg-accent)" stroke-width="1.8" stroke-dasharray="6 4"/>
  <g><circle cx="70" cy="300" r="4"/><circle cx="295" cy="300" r="4"/><circle cx="250" cy="165" r="4"/><circle cx="70" cy="75" r="4"/></g>
  <text x="150" y="223.5" text-anchor="middle" font-size="12">Feasible region</text>
  <text x="436" y="258" >x + 2y = 10</text><text x="213" y="38" >3x + y = 15</text><text x="150" y="26" text-anchor="end" fill="var(--dg-accent)">Z = 18</text>
  <text x="66" y="316" text-anchor="end">O (0, 0)</text>
  <text x="299" y="318" text-anchor="middle" >A (5, 0)</text><text x="259" y="151" >P (4, 3)</text><text x="62" y="79" text-anchor="end">D (0, 5)</text>
  <text x="446" y="304" font-style="italic">x</text><text x="78" y="18" font-style="italic">y</text>
  <text x="380" y="58" >Corner</text><text x="470" y="58" >Z = 3x + 2y</text>
  <text x="380" y="82" >O (0, 0)</text><text x="470" y="82" >0</text><text x="380" y="102" >A (5, 0)</text><text x="470" y="102" >15</text>
  <text x="380" y="122" fill="var(--dg-accent)">P (4, 3)</text><text x="470" y="122" fill="var(--dg-accent)">18  (max)</text><text x="380" y="142" >D (0, 5)</text><text x="470" y="142" >10</text>
  <line x1="376" y1="66" x2="545" y2="66" stroke="var(--dg-muted)"/>
  <text x="380" y="176" >Maximise Z = 3x + 2y</text><text x="380" y="196" >x + 2y ≤ 10</text><text x="380" y="214" >3x + y ≤ 15,  x, y ≥ 0</text>
</svg>`,
    },
  ],
  "probability": [
    {
      title: "Bayes' theorem: tree diagram for two machines",
      caption: "Multiply along each branch to get joint probabilities. **P(E₁|D) = P(E₁∩D) / [P(E₁∩D) + P(E₂∩D)]**, the branches that end in D are the denominator. Here E₁, E₂ = item made by machine 1 or 2; D = item defective.",
      svg: `<svg viewBox="0 0 560 385" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="280" y="18" text-anchor="middle" font-size="12">E₁: made by machine 1 (60%, 2% defective)</text><text x="280" y="36" text-anchor="middle" font-size="12">E₂: made by machine 2 (40%, 5% defective)</text>
  <line x1="40" y1="175" x2="190" y2="95" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="175" x2="190" y2="255" stroke="currentColor" stroke-width="1.5"/>
  <line x1="190" y1="95" x2="370" y2="50" stroke="currentColor" stroke-width="1.5"/><line x1="190" y1="95" x2="370" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="190" y1="255" x2="370" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="190" y1="255" x2="370" y2="310" stroke="currentColor" stroke-width="1.5"/>
  <g><circle cx="40" cy="175" r="3.5"/><circle cx="190" cy="95" r="3.5"/><circle cx="190" cy="255" r="3.5"/><circle cx="370" cy="50" r="3.5"/><circle cx="370" cy="140" r="3.5"/><circle cx="370" cy="200" r="3.5"/><circle cx="370" cy="310" r="3.5"/></g>
  <text x="95" y="106.7" text-anchor="middle" font-size="12">P(E₁) = 3/5</text><text x="95" y="252.3" text-anchor="middle" font-size="12">P(E₂) = 2/5</text>
  <text x="280" y="54.3" text-anchor="middle" font-size="12">P(D|E₁) = 1/50</text><text x="280" y="146" text-anchor="middle" font-size="12">P(D′|E₁) = 49/50</text>
  <text x="280" y="206.8" text-anchor="middle" font-size="12">P(D|E₂) = 1/20</text><text x="280" y="313.8" text-anchor="middle" font-size="12">P(D′|E₂) = 19/20</text>
  <text x="190" y="83" text-anchor="middle" font-weight="bold">E₁</text><text x="190" y="277" text-anchor="middle" font-weight="bold">E₂</text>
  <text x="382" y="54" fill="var(--dg-accent)">E₁ ∩ D :  3/250</text><text x="382" y="144" >E₁ ∩ D′ :  147/250</text>
  <text x="382" y="204" fill="var(--dg-accent)">E₂ ∩ D :  1/50</text><text x="382" y="314" >E₂ ∩ D′ :  19/50</text>
  <text x="280" y="338" text-anchor="middle" font-size="12" fill="var(--dg-muted)">D: the item is defective</text>
  <text x="280" y="362" text-anchor="middle" >P(E₁|D) = (3/5 × 1/50) / (3/5 × 1/50 + 2/5 × 1/20) = 3/8</text>
</svg>`,
    },
    {
      title: "Partition of the sample space and the theorem of total probability",
      caption: "E₁, E₂, E₃ are mutually exclusive and exhaustive, so they split the sample space S. Any event A is cut into the pieces A∩E₁, A∩E₂, A∩E₃, giving **P(A) = Σ P(Eᵢ) P(A|Eᵢ)**, the denominator of Bayes' theorem.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="40" y="25" width="480" height="200" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <line x1="200" y1="25" x2="200" y2="225" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="25" x2="360" y2="225" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="280" cy="130" rx="150" ry="60" fill="var(--dg-fill)" opacity="0.8" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="120" y="48" text-anchor="middle" font-size="14">E₁</text><text x="280" y="48" text-anchor="middle" font-size="14">E₂</text><text x="440" y="48" text-anchor="middle" font-size="14">E₃</text>
  <text x="48" y="214" >S</text>
  <text x="168" y="134" text-anchor="middle" font-size="12">A ∩ E₁</text><text x="280" y="134" text-anchor="middle" font-size="12">A ∩ E₂</text><text x="392" y="134" text-anchor="middle" font-size="12">A ∩ E₃</text>
  <text x="150" y="92" text-anchor="end" fill="var(--dg-accent)" font-size="14">A</text>
  <text x="280" y="252" text-anchor="middle" >P(A) = P(E₁)P(A|E₁) + P(E₂)P(A|E₂) + P(E₃)P(A|E₃)</text>
  <text x="280" y="276" text-anchor="middle" fill="var(--dg-muted)">Bayes: P(Eᵢ|A) = P(Eᵢ)P(A|Eᵢ) / Σ P(Eⱼ)P(A|Eⱼ)</text>
</svg>`,
    },
  ],
});
