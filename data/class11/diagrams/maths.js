// Class 11 Maths diagrams (chapters 1–14). Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(11, "maths", {
  "sets": [
    {
      title: "Union and intersection of two sets",
      caption: "The shaded region is **A ∪ B** (everything in A or in B or in both) on the left, and **A ∩ B** (only the part common to A and B) on the right. U is the universal set.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="15" y="40" width="250" height="170" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="25" y="58" font-style="italic">U</text>
  <path d="M 150 85.3 A 60 60 0 1 0 150 164.7 A 60 60 0 1 0 150 85.3 Z" fill="var(--dg-accent)" fill-opacity="0.35" fill-rule="evenodd" stroke="none"/>
  <circle cx="105" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="195" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="75" y="130" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="225" y="130" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <rect x="295" y="40" width="250" height="170" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="305" y="58" font-style="italic">U</text>
  <path d="M 430 85.3 A 60 60 0 0 1 430 164.7 A 60 60 0 0 1 430 85.3 Z" fill="var(--dg-accent)" fill-opacity="0.35" fill-rule="evenodd" stroke="none"/>
  <circle cx="385" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="475" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="355" y="130" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="505" y="130" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <text x="140" y="238" text-anchor="middle" >A ∪ B = {x : x ∈ A or x ∈ B}</text>
  <text x="420" y="238" text-anchor="middle" >A ∩ B = {x : x ∈ A and x ∈ B}</text>
</svg>`,
    },
    {
      title: "Difference and complement of sets",
      caption: "**A − B** is the part of A that is outside B. **A′** is everything in the universal set U that is not in A, so A′ = U − A.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="15" y="40" width="250" height="170" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="25" y="58" font-style="italic">U</text>
  <path d="M 150 85.3 A 60 60 0 1 0 150 164.7 A 60 60 0 0 1 150 85.3 Z" fill="var(--dg-accent)" fill-opacity="0.35" fill-rule="evenodd" stroke="none"/>
  <circle cx="105" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="195" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="75" y="130" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="225" y="130" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <rect x="295" y="40" width="250" height="170" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="305" y="58" font-style="italic">U</text>
  <path d="M 295 40 h 250 v 170 h -250 Z M 325 125 a 60 60 0 1 0 120 0 a 60 60 0 1 0 -120 0 Z" fill="var(--dg-accent)" fill-opacity="0.35" fill-rule="evenodd" stroke="none"/>
  <circle cx="385" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="475" cy="125" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="355" y="130" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="505" y="130" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <text x="140" y="238" text-anchor="middle" >A − B = {x : x ∈ A and x ∉ B}</text>
  <text x="420" y="238" text-anchor="middle" >A′ = {x : x ∈ U and x ∉ A}</text>
</svg>`,
    },
    {
      title: "Subset and disjoint sets",
      caption: "On the left **A ⊂ B**: every element of A is also in B, so the circle of A lies wholly inside the circle of B. On the right A and B have no common element, so **A ∩ B = ∅** (disjoint sets).",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="15" y="40" width="250" height="170" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="25" y="58" font-style="italic">U</text>
  <circle cx="140" cy="125" r="68" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="140" cy="135" r="32" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.6"/>
  <text x="140" y="139" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="140" y="86" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <rect x="295" y="40" width="250" height="170" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="305" y="58" font-style="italic">U</text>
  <circle cx="365" cy="125" r="48" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="475" cy="125" r="48" fill="var(--dg-accent)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.6"/>
  <text x="365" y="130" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="475" y="130" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <text x="140" y="238" text-anchor="middle" >A ⊂ B  (A is a subset of B)</text>
  <text x="420" y="238" text-anchor="middle" >A ∩ B = ∅  (disjoint)</text>
</svg>`,
    },
    {
      title: "Counting with a Venn diagram: n(A ∪ B)",
      caption: "The numbers show how many elements lie in each region. **n(A ∪ B) = n(A) + n(B) − n(A ∩ B)**, because the common part is counted twice when n(A) and n(B) are added.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="20" y="30" width="380" height="225" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="30" y="48" font-style="italic">U</text>
  <circle cx="150" cy="140" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="250" cy="140" r="80" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="80" y="78" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="320" y="78" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <text x="105" y="146" text-anchor="middle" font-size="16">12</text>
  <text x="200" y="146" text-anchor="middle" font-size="16">8</text>
  <text x="295" y="146" text-anchor="middle" font-size="16">10</text>
  <text x="365" y="236" text-anchor="middle" font-size="16">5</text>
  <text x="105" y="166" text-anchor="middle" fill="var(--dg-muted)">A only</text>
  <text x="200" y="166" text-anchor="middle" fill="var(--dg-muted)">A ∩ B</text>
  <text x="295" y="166" text-anchor="middle" fill="var(--dg-muted)">B only</text>
  <text x="365" y="218" text-anchor="middle" fill="var(--dg-muted)">outside</text>
  <text x="420" y="70" >n(A) = 12 + 8 = 20</text>
  <text x="420" y="98" >n(B) = 8 + 10 = 18</text>
  <text x="420" y="126" >n(A ∩ B) = 8</text>
  <text x="420" y="166" fill="var(--dg-accent)">n(A ∪ B) = 12 + 8 + 10</text>
  <text x="420" y="186" fill="var(--dg-accent)">= 20 + 18 − 8 = 30</text>
  <text x="420" y="226" >n(U) = 30 + 5 = 35</text>
</svg>`,
    },
  ],
  "relations-and-functions": [
    {
      title: "Arrow diagram of a function: domain, co-domain and range",
      caption: "f : A → B, f(x) = 2x. Every element of A has exactly one image. **Domain = A, co-domain = B, range = {2, 4, 6}** (the images actually obtained). The element 8 of B is in the co-domain but not in the range.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <ellipse cx="150" cy="165" rx="62" ry="105" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="410" cy="165" rx="62" ry="105" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="410" cy="145" rx="44" ry="62" fill="none" stroke="var(--dg-accent)" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="150" y="40" text-anchor="middle" font-size="14">A (domain)</text>
  <text x="410" y="40" text-anchor="middle" font-size="14">B (co-domain)</text>
  <circle cx="150" cy="115" r="3.5" fill="currentColor"/><text x="138" y="119.5" text-anchor="end" >1</text>
  <circle cx="150" cy="165" r="3.5" fill="currentColor"/><text x="138" y="169.5" text-anchor="end" >2</text>
  <circle cx="150" cy="215" r="3.5" fill="currentColor"/><text x="138" y="219.5" text-anchor="end" >3</text>
  <circle cx="410" cy="100" r="3.5" fill="currentColor"/><text x="422" y="104.5" >2</text>
  <circle cx="410" cy="145" r="3.5" fill="currentColor"/><text x="422" y="149.5" >4</text>
  <circle cx="410" cy="190" r="3.5" fill="currentColor"/><text x="422" y="194.5" >6</text>
  <circle cx="410" cy="235" r="3.5" fill="currentColor"/><text x="422" y="239.5" >8</text>
  <line x1="155" y1="115" x2="404" y2="100" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-5)"/>
  <line x1="155" y1="165" x2="404" y2="145" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-5)"/>
  <line x1="155" y1="215" x2="404" y2="190" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-5)"/>
  <text x="280" y="22" text-anchor="middle" font-size="15" font-style="italic" fill="var(--dg-accent)">f</text>
  <text x="462" y="100" fill="var(--dg-accent)" font-size="12">range</text>
  <text x="280" y="300" text-anchor="middle" >Each x in A has one image f(x) in B</text>
  <text x="280" y="320" text-anchor="middle" fill="var(--dg-muted)">Range = {2, 4, 6} ⊂ B</text>
</svg>`,
    },
    {
      title: "Function and not a function",
      caption: "A relation from A to B is a function only if **every element of A has exactly one image**. On the left two elements may share an image (many-one) and it is still a function. On the right 1 has two images and 2 has none, so it is not a function.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <ellipse cx="70" cy="150" rx="38" ry="82" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="210" cy="150" rx="38" ry="82" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <text x="70" y="48" text-anchor="middle" font-size="14">A</text>
  <text x="210" y="48" text-anchor="middle" font-size="14">B</text>
  <circle cx="70" cy="100" r="3.5" fill="currentColor"/><text x="58" y="104.5" text-anchor="end" >1</text>
  <circle cx="70" cy="150" r="3.5" fill="currentColor"/><text x="58" y="154.5" text-anchor="end" >2</text>
  <circle cx="70" cy="200" r="3.5" fill="currentColor"/><text x="58" y="204.5" text-anchor="end" >3</text>
  <circle cx="210" cy="125" r="3.5" fill="currentColor"/><text x="222" y="129.5" >5</text>
  <circle cx="210" cy="175" r="3.5" fill="currentColor"/><text x="222" y="179.5" >7</text>
  <line x1="75" y1="100" x2="202" y2="125" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-6)"/>
  <line x1="75" y1="150" x2="202" y2="125" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-6)"/>
  <line x1="75" y1="200" x2="202" y2="175" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-6)"/>
  <text x="140" y="262" text-anchor="middle" font-weight="bold">A function</text>
  <text x="140" y="282" text-anchor="middle" fill="var(--dg-muted)">1 → 5, 2 → 5, 3 → 7</text>
  <ellipse cx="350" cy="150" rx="38" ry="82" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <ellipse cx="490" cy="150" rx="38" ry="82" fill="var(--dg-fill)" fill-opacity="0.7" stroke="currentColor" stroke-width="1.6"/>
  <text x="350" y="48" text-anchor="middle" font-size="14">A</text>
  <text x="490" y="48" text-anchor="middle" font-size="14">B</text>
  <circle cx="350" cy="100" r="3.5" fill="currentColor"/><text x="338" y="104.5" text-anchor="end" >1</text>
  <circle cx="350" cy="150" r="3.5" fill="currentColor"/><text x="338" y="154.5" text-anchor="end" >2</text>
  <circle cx="350" cy="200" r="3.5" fill="currentColor"/><text x="338" y="204.5" text-anchor="end" >3</text>
  <circle cx="490" cy="125" r="3.5" fill="currentColor"/><text x="502" y="129.5" >5</text>
  <circle cx="490" cy="175" r="3.5" fill="currentColor"/><text x="502" y="179.5" >7</text>
  <line x1="355" y1="100" x2="482" y2="125" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-6)"/>
  <line x1="355" y1="100" x2="482" y2="175" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-6)"/>
  <line x1="355" y1="200" x2="482" y2="175" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-m11-6)"/>
  <text x="420" y="262" text-anchor="middle" font-weight="bold">Not a function</text>
  <text x="420" y="282" text-anchor="middle" fill="var(--dg-muted)">1 has two images; 2 has none</text>
</svg>`,
    },
    {
      title: "Graphs of the modulus and signum functions",
      caption: "**f(x) = |x|** has domain R and range [0, ∞); its graph is a V with vertex at the origin. **f(x) = sgn x** takes only the values −1, 0 and 1 (0 at x = 0 only), so its range is {−1, 0, 1}.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="10.8" y1="175" x2="269.2" y2="175" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-7)"/>
  <line x1="140" y1="232" x2="140" y2="45.8" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-7)"/>
  <text x="263.2" y="191" font-style="italic">x</text>
  <text x="148" y="51.8" font-style="italic">y</text>
  <text x="126" y="190" >O</text>
  <line x1="64" y1="172" x2="64" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="64" y="192" text-anchor="middle" >−2</text>
  <line x1="102" y1="172" x2="102" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="102" y="192" text-anchor="middle" >−1</text>
  <line x1="178" y1="172" x2="178" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="178" y="192" text-anchor="middle" >1</text>
  <line x1="216" y1="172" x2="216" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="216" y="192" text-anchor="middle" >2</text>
  <line x1="137" y1="137" x2="143" y2="137" stroke="currentColor" stroke-width="1.4"/>
  <text x="133" y="141.5" text-anchor="end" >1</text>
  <line x1="137" y1="99" x2="143" y2="99" stroke="currentColor" stroke-width="1.4"/>
  <text x="133" y="103.5" text-anchor="end" >2</text>
  <line x1="137" y1="61" x2="143" y2="61" stroke="currentColor" stroke-width="1.4"/>
  <text x="133" y="65.5" text-anchor="end" >3</text>
  <path d="M 26 61 L 140 175 L 254 61" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <text x="110" y="63" text-anchor="end" fill="var(--dg-accent)" font-size="12">y = −x</text>
  <text x="220" y="53" fill="var(--dg-accent)" font-size="12">y = x</text>
  <text x="140" y="278" text-anchor="middle" font-weight="bold">f(x) = |x|</text>
  <text x="140" y="298" text-anchor="middle" fill="var(--dg-muted)">Domain R, range [0, ∞)</text>
  <line x1="290.8" y1="175" x2="549.2" y2="175" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-7)"/>
  <line x1="420" y1="232" x2="420" y2="45.8" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-7)"/>
  <text x="543.2" y="191" font-style="italic">x</text>
  <text x="428" y="51.8" font-style="italic">y</text>
  <text x="406" y="190" >O</text>
  <line x1="344" y1="172" x2="344" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="344" y="192" text-anchor="middle" >−2</text>
  <line x1="382" y1="172" x2="382" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="382" y="192" text-anchor="middle" >−1</text>
  <line x1="458" y1="172" x2="458" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="458" y="192" text-anchor="middle" >1</text>
  <line x1="496" y1="172" x2="496" y2="178" stroke="currentColor" stroke-width="1.4"/>
  <text x="496" y="192" text-anchor="middle" >2</text>
  <line x1="417" y1="213" x2="423" y2="213" stroke="currentColor" stroke-width="1.4"/>
  <text x="428" y="217.5" >−1</text>
  <line x1="417" y1="137" x2="423" y2="137" stroke="currentColor" stroke-width="1.4"/>
  <text x="413" y="141.5" text-anchor="end" >1</text>
  <line x1="306" y1="213" x2="416" y2="213" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="424" y1="137" x2="534" y2="137" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="420" cy="137" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="420" cy="213" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="420" cy="175" r="3.8" fill="var(--dg-accent)"/>
  <text x="428" y="129" fill="var(--dg-accent)" font-size="12">y = 1</text>
  <text x="372" y="230" fill="var(--dg-accent)" font-size="12">y = −1</text>
  <text x="420" y="278" text-anchor="middle" font-weight="bold">f(x) = sgn x</text>
  <text x="420" y="298" text-anchor="middle" fill="var(--dg-muted)">Range {−1, 0, 1}</text>
</svg>`,
    },
    {
      title: "Graph of the greatest integer function",
      caption: "**f(x) = [x]** is the greatest integer less than or equal to x. It is constant on each interval [n, n + 1): the filled dot at the left end is included and the open circle at the right end is not. For example [2.7] = 2 and [−1.3] = −2. Range = Z (integers).",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="52" y1="160" x2="508" y2="160" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-8)"/>
  <line x1="280" y1="296" x2="280" y2="24" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-8)"/>
  <text x="502" y="176" font-style="italic">x</text>
  <text x="288" y="30" font-style="italic">y</text>
  <text x="266" y="175" >O</text>
  <line x1="100" y1="157" x2="100" y2="163" stroke="currentColor" stroke-width="1.4"/>
  <text x="100" y="177" text-anchor="middle" >−3</text>
  <line x1="160" y1="157" x2="160" y2="163" stroke="currentColor" stroke-width="1.4"/>
  <text x="160" y="177" text-anchor="middle" >−2</text>
  <line x1="220" y1="157" x2="220" y2="163" stroke="currentColor" stroke-width="1.4"/>
  <text x="220" y="177" text-anchor="middle" >−1</text>
  <line x1="340" y1="157" x2="340" y2="163" stroke="currentColor" stroke-width="1.4"/>
  <text x="340" y="177" text-anchor="middle" >1</text>
  <line x1="400" y1="157" x2="400" y2="163" stroke="currentColor" stroke-width="1.4"/>
  <text x="400" y="177" text-anchor="middle" >2</text>
  <line x1="277" y1="280" x2="283" y2="280" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="284.5" >−3</text>
  <line x1="277" y1="240" x2="283" y2="240" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="244.5" >−2</text>
  <line x1="277" y1="200" x2="283" y2="200" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="204.5" >−1</text>
  <line x1="277" y1="120" x2="283" y2="120" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="124.5" >1</text>
  <line x1="277" y1="80" x2="283" y2="80" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="84.5" >2</text>
  <line x1="277" y1="40" x2="283" y2="40" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="44.5" >3</text>
  <line x1="104" y1="280" x2="156" y2="280" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="100" cy="280" r="3.8" fill="var(--dg-accent)"/>
  <circle cx="160" cy="280" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="164" y1="240" x2="216" y2="240" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="160" cy="240" r="3.8" fill="var(--dg-accent)"/>
  <circle cx="220" cy="240" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="224" y1="200" x2="276" y2="200" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="220" cy="200" r="3.8" fill="var(--dg-accent)"/>
  <circle cx="280" cy="200" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="284" y1="160" x2="336" y2="160" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="280" cy="160" r="3.8" fill="var(--dg-accent)"/>
  <circle cx="340" cy="160" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="344" y1="120" x2="396" y2="120" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="340" cy="120" r="3.8" fill="var(--dg-accent)"/>
  <circle cx="400" cy="120" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <line x1="404" y1="80" x2="456" y2="80" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="400" cy="80" r="3.8" fill="var(--dg-accent)"/>
  <circle cx="460" cy="80" r="3.5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="412" y="72" fill="var(--dg-accent)" font-size="12">y = 2</text>
  <text x="280" y="322" text-anchor="middle" >f(x) = [x]  ·  Domain R, range Z  ·  [x] = n for n ≤ x &lt; n + 1</text>
</svg>`,
    },
    {
      title: "Graphs of polynomial functions: y = x² and y = x³",
      caption: "**y = x²** is an even function: its parabola is symmetric about the y-axis, range [0, ∞). **y = x³** is odd: its graph is symmetric about the origin, range R, and it rises from left to right.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="51.6" y1="170" x2="228.4" y2="170" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-9)"/>
  <line x1="140" y1="251.6" x2="140" y2="34" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-9)"/>
  <text x="222.4" y="186" font-style="italic">x</text>
  <text x="148" y="40" font-style="italic">y</text>
  <text x="126" y="185" >O</text>
  <line x1="72" y1="167" x2="72" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="72" y="187" text-anchor="middle" >−2</text>
  <line x1="106" y1="167" x2="106" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="106" y="187" text-anchor="middle" >−1</text>
  <line x1="174" y1="167" x2="174" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="174" y="187" text-anchor="middle" >1</text>
  <line x1="208" y1="167" x2="208" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="208" y="187" text-anchor="middle" >2</text>
  <line x1="137" y1="136" x2="143" y2="136" stroke="currentColor" stroke-width="1.4"/>
  <text x="133" y="140.5" text-anchor="end" >1</text>
  <line x1="137" y1="102" x2="143" y2="102" stroke="currentColor" stroke-width="1.4"/>
  <text x="133" y="106.5" text-anchor="end" >2</text>
  <line x1="137" y1="68" x2="143" y2="68" stroke="currentColor" stroke-width="1.4"/>
  <text x="133" y="72.5" text-anchor="end" >3</text>
  <line x1="137" y1="34" x2="143" y2="34" stroke="currentColor" stroke-width="1.4"/>
  <text x="133" y="38.5" text-anchor="end" >4</text>
  <path d="M 72 34 Q 140 306 208 34" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <circle cx="174" cy="136" r="3.5" fill="currentColor"/>
  <text x="180" y="150" font-size="12">(1, 1)</text>
  <text x="216" y="40" fill="var(--dg-accent)">y = x²</text>
  <text x="140" y="308" text-anchor="middle" >f(x) = x²  ·  range [0, ∞)</text>
  <line x1="331.6" y1="170" x2="508.4" y2="170" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-9)"/>
  <line x1="420" y1="292.4" x2="420" y2="37.4" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-9)"/>
  <text x="502.4" y="186" font-style="italic">x</text>
  <text x="428" y="43.4" font-style="italic">y</text>
  <text x="406" y="185" >O</text>
  <line x1="352" y1="167" x2="352" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="352" y="187" text-anchor="middle" >−2</text>
  <line x1="386" y1="167" x2="386" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="386" y="187" text-anchor="middle" >−1</text>
  <line x1="454" y1="167" x2="454" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="454" y="187" text-anchor="middle" >1</text>
  <line x1="488" y1="167" x2="488" y2="173" stroke="currentColor" stroke-width="1.4"/>
  <text x="488" y="187" text-anchor="middle" >2</text>
  <line x1="417" y1="272" x2="423" y2="272" stroke="currentColor" stroke-width="1.4"/>
  <text x="413" y="276.5" text-anchor="end" >−3</text>
  <line x1="417" y1="238" x2="423" y2="238" stroke="currentColor" stroke-width="1.4"/>
  <text x="413" y="242.5" text-anchor="end" >−2</text>
  <line x1="417" y1="204" x2="423" y2="204" stroke="currentColor" stroke-width="1.4"/>
  <text x="413" y="208.5" text-anchor="end" >−1</text>
  <line x1="417" y1="136" x2="423" y2="136" stroke="currentColor" stroke-width="1.4"/>
  <text x="413" y="140.5" text-anchor="end" >1</text>
  <line x1="417" y1="102" x2="423" y2="102" stroke="currentColor" stroke-width="1.4"/>
  <text x="413" y="106.5" text-anchor="end" >2</text>
  <line x1="417" y1="68" x2="423" y2="68" stroke="currentColor" stroke-width="1.4"/>
  <text x="413" y="72.5" text-anchor="end" >3</text>
  <path d="M 369 284.8 C 403 55.3 437 284.8 471 55.3" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <circle cx="454" cy="136" r="3.5" fill="currentColor"/>
  <text x="460" y="150" font-size="12">(1, 1)</text>
  <circle cx="386" cy="204" r="3.5" fill="currentColor"/>
  <text x="380" y="200" text-anchor="end" font-size="12">(−1, −1)</text>
  <text x="477" y="63.3" fill="var(--dg-accent)">y = x³</text>
  <text x="420" y="308" text-anchor="middle" >f(x) = x³  ·  range R</text>
</svg>`,
    },
    {
      title: "Graph of the reciprocal function y = 1/x",
      caption: "**f(x) = 1/x** is defined for every real x except 0. The graph has two branches (in quadrants I and III) that approach, but never touch, the axes, which are its asymptotes. Domain = range = R − {0}. It is an odd function.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="78.4" y1="165" x2="481.6" y2="165" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-10)"/>
  <line x1="280" y1="297" x2="280" y2="17" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-10)"/>
  <text x="475.6" y="181" font-style="italic">x</text>
  <text x="288" y="23" font-style="italic">y</text>
  <text x="266" y="180" >O</text>
  <line x1="136" y1="162" x2="136" y2="168" stroke="currentColor" stroke-width="1.4"/>
  <text x="136" y="157" text-anchor="middle" >−3</text>
  <line x1="184" y1="162" x2="184" y2="168" stroke="currentColor" stroke-width="1.4"/>
  <text x="184" y="157" text-anchor="middle" >−2</text>
  <line x1="232" y1="162" x2="232" y2="168" stroke="currentColor" stroke-width="1.4"/>
  <text x="232" y="157" text-anchor="middle" >−1</text>
  <line x1="328" y1="162" x2="328" y2="168" stroke="currentColor" stroke-width="1.4"/>
  <text x="328" y="182" text-anchor="middle" >1</text>
  <line x1="376" y1="162" x2="376" y2="168" stroke="currentColor" stroke-width="1.4"/>
  <text x="376" y="182" text-anchor="middle" >2</text>
  <line x1="424" y1="162" x2="424" y2="168" stroke="currentColor" stroke-width="1.4"/>
  <text x="424" y="182" text-anchor="middle" >3</text>
  <line x1="277" y1="285" x2="283" y2="285" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="289.5" >−3</text>
  <line x1="277" y1="245" x2="283" y2="245" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="249.5" >−2</text>
  <line x1="277" y1="205" x2="283" y2="205" stroke="currentColor" stroke-width="1.4"/>
  <text x="288" y="209.5" >−1</text>
  <line x1="277" y1="125" x2="283" y2="125" stroke="currentColor" stroke-width="1.4"/>
  <text x="273" y="129.5" text-anchor="end" >1</text>
  <line x1="277" y1="85" x2="283" y2="85" stroke="currentColor" stroke-width="1.4"/>
  <text x="273" y="89.5" text-anchor="end" >2</text>
  <line x1="277" y1="45" x2="283" y2="45" stroke="currentColor" stroke-width="1.4"/>
  <text x="273" y="49.5" text-anchor="end" >3</text>
  <path d="M 294.4 31.7 L 299.3 65.7 L 304.3 85.9 L 309.2 99.3 L 314.2 108.8 L 319.1 115.9 L 324 121.4 L 329 125.8 L 333.9 129.4 L 338.9 132.4 L 343.8 134.9 L 348.8 137.1 L 353.7 138.9 L 358.6 140.6 L 363.6 142 L 368.5 143.3 L 373.5 144.5 L 378.4 145.5 L 383.3 146.4 L 388.3 147.3 L 393.2 148 L 398.2 148.8 L 403.1 149.4 L 408 150 L 413 150.6 L 417.9 151.1 L 422.9 151.6 L 427.8 152 L 432.8 152.4 L 437.7 152.8 L 442.6 153.2 L 447.6 153.5 L 452.5 153.9 L 457.5 154.2 L 462.4 154.5" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <path d="M 265.6 298.3 L 260.7 264.3 L 255.7 244.1 L 250.8 230.7 L 245.8 221.2 L 240.9 214.1 L 236 208.6 L 231 204.2 L 226.1 200.6 L 221.1 197.6 L 216.2 195.1 L 211.2 192.9 L 206.3 191.1 L 201.4 189.4 L 196.4 188 L 191.5 186.7 L 186.5 185.5 L 181.6 184.5 L 176.7 183.6 L 171.7 182.7 L 166.8 182 L 161.8 181.2 L 156.9 180.6 L 152 180 L 147 179.4 L 142.1 178.9 L 137.1 178.4 L 132.2 178 L 127.2 177.6 L 122.3 177.2 L 117.4 176.8 L 112.4 176.5 L 107.5 176.1 L 102.5 175.8 L 97.6 175.5" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <circle cx="328" cy="125" r="3.5" fill="currentColor"/>
  <text x="337" y="117" font-size="12">(1, 1)</text>
  <circle cx="232" cy="205" r="3.5" fill="currentColor"/>
  <text x="223" y="221" text-anchor="end" font-size="12">(−1, −1)</text>
  <text x="433.6" y="121" fill="var(--dg-accent)">y = 1/x</text>
  <text x="280" y="318" text-anchor="middle" >Asymptotes: the x-axis and the y-axis  ·  Domain = range = R − {0}</text>
</svg>`,
    },
  ],
  "trigonometric-functions": [
    {
      title: "One radian: arc length equal to the radius",
      caption: "If an arc of a circle has length **l = r**, it subtends an angle of **1 radian** at the centre. In general θ = l / r, so a full turn of 360° is 2π radians and **π rad = 180°**, giving 1 rad ≈ 57.3°.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <circle cx="170" cy="185" r="125" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="170" y1="185" x2="295" y2="185" stroke="currentColor" stroke-width="1.4"/>
  <line x1="170" y1="185" x2="237.5" y2="79.8" stroke="currentColor" stroke-width="1.4"/>
  <path d="M 295 185 A 125 125 0 0 0 237.5 79.8" fill="none" stroke="var(--dg-accent)" stroke-width="3.5"/>
  <path d="M 204 185 A 34 34 0 0 0 188.4 156.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="170" cy="185" r="3.5" fill="currentColor"/>
  <circle cx="295" cy="185" r="3.5" fill="currentColor"/>
  <circle cx="237.5" cy="79.8" r="3.5" fill="currentColor"/>
  <text x="156" y="201" >O</text>
  <text x="303" y="191" >A</text>
  <text x="245.5" y="73.8" >P</text>
  <text x="210" y="171" >θ = 1 rad</text>
  <text x="232.5" y="203" text-anchor="middle" >r</text>
  <text x="164.9" y="141.7" >r</text>
  <text x="311" y="160.4" fill="var(--dg-accent)" font-weight="bold">arc AP = r</text>
  <text x="400" y="90" >θ = l / r</text>
  <text x="400" y="120" >360° = 2π rad</text>
  <text x="400" y="150" >180° = π rad</text>
  <text x="400" y="180" >90° = π/2 rad</text>
  <text x="400" y="210" >1 rad = 180°/π ≈ 57.3°</text>
  <text x="400" y="240" >1° ≈ 0.0175 rad</text>
</svg>`,
    },
    {
      title: "Unit circle: sin θ and cos θ as coordinates",
      caption: "On the circle of radius 1, the point P at angle θ from the positive x-axis has coordinates **(cos θ, sin θ)**. The right triangle OMP has hypotenuse 1, so **sin²θ + cos²θ = 1**. As θ goes round, cos θ and sin θ always lie between −1 and 1.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="70" y1="175" x2="375" y2="175" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-12)"/>
  <line x1="220" y1="320" x2="220" y2="22" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-12)"/>
  <circle cx="220" cy="175" r="125" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="220,175 300.3,175 300.3,79.2" fill="var(--dg-fill)" fill-opacity="0.7" stroke="none"/>
  <line x1="220" y1="175" x2="300.3" y2="79.2" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="220" y1="175" x2="300.3" y2="175" stroke="currentColor" stroke-width="2"/>
  <line x1="300.3" y1="175" x2="300.3" y2="79.2" stroke="currentColor" stroke-width="2"/>
  <path d="M 250 175 A 30 30 0 0 0 239.3 152" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="300.3" cy="79.2" r="3.5" fill="currentColor"/>
  <circle cx="220" cy="175" r="3.5" fill="currentColor"/>
  <circle cx="300.3" cy="175" r="3" fill="currentColor"/>
  <text x="204" y="191" >O</text>
  <text x="310.3" y="71.2" >P (cos θ, sin θ)</text>
  <text x="296.3" y="192" >M</text>
  <text x="256" y="167"  font-style="italic">θ</text>
  <text x="250.2" y="192" text-anchor="middle" >cos θ</text>
  <text x="306.3" y="155" font-size="12">sin θ</text>
  <text x="250" y="119.2" fill="var(--dg-accent)">1</text>
  <text x="379" y="180" >x</text>
  <text x="228" y="26" >y</text>
  <text x="353" y="167" font-size="12">(1, 0)</text>
  <text x="228" y="42" font-size="12">(0, 1)</text>
  <text x="89" y="167" text-anchor="end" font-size="12">(−1, 0)</text>
  <text x="228" y="316" font-size="12">(0, −1)</text>
  <text x="380" y="230" >sin²θ + cos²θ = 1</text>
  <text x="380" y="256" >−1 ≤ sin θ ≤ 1</text>
  <text x="380" y="282" >−1 ≤ cos θ ≤ 1</text>
  <text x="380" y="308" >tan θ = sin θ / cos θ</text>
</svg>`,
    },
    {
      title: "Unit circle with standard angles",
      caption: "Coordinates of P at the standard angles are **(cos θ, sin θ)**: at 0 they are (1, 0), at π/6 (√3/2, 1/2), at π/4 (1/√2, 1/√2), at π/3 (1/2, √3/2), at π/2 (0, 1), at π (−1, 0) and at 3π/2 (0, −1).",
      svg: `<svg viewBox="0 0 560 350" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="50" y1="180" x2="355" y2="180" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-13)"/>
  <line x1="200" y1="327" x2="200" y2="27" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-13)"/>
  <circle cx="200" cy="180" r="125" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="180" x2="308.3" y2="117.5" stroke="var(--dg-accent)" stroke-width="1.4"/>
  <circle cx="308.3" cy="117.5" r="3.5" fill="currentColor"/>
  <line x1="200" y1="180" x2="288.4" y2="91.6" stroke="var(--dg-accent)" stroke-width="1.4"/>
  <circle cx="288.4" cy="91.6" r="3.5" fill="currentColor"/>
  <line x1="200" y1="180" x2="262.5" y2="71.7" stroke="var(--dg-accent)" stroke-width="1.4"/>
  <circle cx="262.5" cy="71.7" r="3.5" fill="currentColor"/>
  <text x="318.3" y="121.5" font-size="12">π/6  (√3/2, 1/2)</text>
  <text x="298.4" y="89.6" font-size="12">π/4  (1/√2, 1/√2)</text>
  <text x="266.5" y="61.7" font-size="12">π/3  (1/2, √3/2)</text>
  <circle cx="325" cy="180" r="3.5" fill="currentColor"/>
  <circle cx="200" cy="55" r="3.5" fill="currentColor"/>
  <circle cx="75" cy="180" r="3.5" fill="currentColor"/>
  <circle cx="200" cy="305" r="3.5" fill="currentColor"/>
  <text x="333" y="196" font-size="12">0  (1, 0)</text>
  <text x="208" y="45" font-size="12">π/2  (0, 1)</text>
  <text x="69" y="196" text-anchor="end" font-size="12">π  (−1, 0)</text>
  <text x="208" y="321" font-size="12">3π/2  (0, −1)</text>
  <text x="186" y="195" >O</text>
  <text x="359" y="174" >x</text>
  <text x="186" y="33" >y</text>
  <text x="400" y="250" fill="var(--dg-muted)">Each point is</text>
  <text x="400" y="268" fill="var(--dg-muted)">(cos θ, sin θ)</text>
</svg>`,
    },
    {
      title: "Signs of trigonometric ratios in the four quadrants",
      caption: "The sign of each ratio depends on the quadrant of the angle: **I: all positive; II: only sin (and cosec); III: only tan (and cot); IV: only cos (and sec)**. Remember \"All, Sin, Tan, Cos\".",
      svg: `<svg viewBox="0 0 560 350" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-14" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="40" y1="175" x2="520" y2="175" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-14)"/>
  <line x1="280" y1="325" x2="280" y2="22" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-14)"/>
  <text x="526" y="180" >x</text>
  <text x="288" y="18" >y</text>
  <text x="288" y="190" >O</text>
  <text x="410" y="60" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-accent)">I  (0 &lt; θ &lt; π/2)</text>
  <text x="410" y="82" text-anchor="middle" ></text>
  <text x="410" y="102" text-anchor="middle" fill="var(--dg-muted)"></text>
  <text x="410" y="120" text-anchor="middle" fill="var(--dg-muted)"></text>
  <text x="410" y="84" text-anchor="middle" font-weight="bold">All ratios positive</text>
  <text x="410" y="108" text-anchor="middle" fill="var(--dg-muted)">sin +, cos +, tan +</text>
  <text x="410" y="126" text-anchor="middle" fill="var(--dg-muted)">cosec +, sec +, cot +</text>
  <text x="150" y="60" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-accent)">II  (π/2 &lt; θ &lt; π)</text>
  <text x="150" y="84" text-anchor="middle" font-weight="bold">Only sin is positive</text>
  <text x="150" y="108" text-anchor="middle" fill="var(--dg-muted)">sin +, cos −, tan −</text>
  <text x="150" y="126" text-anchor="middle" fill="var(--dg-muted)">cosec +, sec −, cot −</text>
  <text x="150" y="232" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-accent)">III  (π &lt; θ &lt; 3π/2)</text>
  <text x="150" y="256" text-anchor="middle" font-weight="bold">Only tan is positive</text>
  <text x="150" y="280" text-anchor="middle" fill="var(--dg-muted)">sin −, cos −, tan +</text>
  <text x="150" y="298" text-anchor="middle" fill="var(--dg-muted)">cosec −, sec −, cot +</text>
  <text x="410" y="232" text-anchor="middle" font-size="15" font-weight="bold" fill="var(--dg-accent)">IV  (3π/2 &lt; θ &lt; 2π)</text>
  <text x="410" y="256" text-anchor="middle" font-weight="bold">Only cos is positive</text>
  <text x="410" y="280" text-anchor="middle" fill="var(--dg-muted)">sin −, cos +, tan −</text>
  <text x="410" y="298" text-anchor="middle" fill="var(--dg-muted)">cosec −, sec +, cot −</text>
</svg>`,
    },
    {
      title: "Graph of y = sin x on [0, 2π]",
      caption: "The sine curve starts at 0, rises to **1 at x = π/2**, returns to 0 at π, falls to **−1 at 3π/2** and is back to 0 at 2π. It repeats every 2π (period 2π); domain R, range [−1, 1].",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-15" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="30" y1="160" x2="542.5" y2="160" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-15)"/>
  <line x1="40" y1="285" x2="40" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-15)"/>
  <text x="536.5" y="178" font-style="italic">x</text>
  <text x="48" y="38" font-style="italic">y</text>
  <text x="34" y="176" text-anchor="end" >O</text>
  <line x1="37" y1="60" x2="43" y2="60" stroke="currentColor" stroke-width="1.4"/>
  <text x="33" y="64.5" text-anchor="end" >1</text>
  <line x1="37" y1="260" x2="43" y2="260" stroke="currentColor" stroke-width="1.4"/>
  <text x="33" y="264.5" text-anchor="end" >−1</text>
  <line x1="157.8" y1="156" x2="157.8" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <line x1="275.6" y1="156" x2="275.6" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <line x1="393.4" y1="156" x2="393.4" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <line x1="511.2" y1="156" x2="511.2" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <text x="157.8" y="179" text-anchor="middle" >π/2</text>
  <text x="271.6" y="177" text-anchor="end" >π</text>
  <text x="393.4" y="151" text-anchor="middle" >3π/2</text>
  <text x="515.2" y="177" >2π</text>
  <path d="M 40 160 L 47.4 150.2 L 54.7 140.5 L 62.1 131 L 69.5 121.7 L 76.8 112.9 L 84.2 104.4 L 91.5 96.6 L 98.9 89.3 L 106.3 82.7 L 113.6 76.9 L 121 71.8 L 128.4 67.6 L 135.7 64.3 L 143.1 61.9 L 150.4 60.5 L 157.8 60 L 165.2 60.5 L 172.5 61.9 L 179.9 64.3 L 187.3 67.6 L 194.6 71.8 L 202 76.9 L 209.4 82.7 L 216.7 89.3 L 224.1 96.6 L 231.4 104.4 L 238.8 112.9 L 246.2 121.7 L 253.5 131 L 260.9 140.5 L 268.3 150.2 L 275.6 160 L 283 169.8 L 290.3 179.5 L 297.7 189 L 305.1 198.3 L 312.4 207.1 L 319.8 215.6 L 327.2 223.4 L 334.5 230.7 L 341.9 237.3 L 349.3 243.1 L 356.6 248.2 L 364 252.4 L 371.3 255.7 L 378.7 258.1 L 386.1 259.5 L 393.4 260 L 400.8 259.5 L 408.2 258.1 L 415.5 255.7 L 422.9 252.4 L 430.2 248.2 L 437.6 243.1 L 445 237.3 L 452.3 230.7 L 459.7 223.4 L 467.1 215.6 L 474.4 207.1 L 481.8 198.3 L 489.1 189 L 496.5 179.5 L 503.9 169.8 L 511.2 160" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <line x1="157.8" y1="160" x2="157.8" y2="60" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="157.8" cy="60" r="3.2" fill="currentColor"/>
  <text x="163.8" y="54" font-size="12" >(π/2, 1)</text>
  <line x1="393.4" y1="160" x2="393.4" y2="260" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="393.4" cy="260" r="3.2" fill="currentColor"/>
  <text x="387.4" y="276" font-size="12" text-anchor="end">(3π/2, −1)</text>
  <text x="272.5" y="310" text-anchor="middle" font-weight="bold">y = sin x</text>
  <text x="272.5" y="330" text-anchor="middle" fill="var(--dg-muted)">Period 2π  ·  range [−1, 1]  ·  sin(−x) = −sin x</text>
</svg>`,
    },
    {
      title: "Graph of y = cos x on [0, 2π]",
      caption: "The cosine curve starts at **1 when x = 0**, crosses zero at π/2, is **−1 at x = π**, crosses zero again at 3π/2 and returns to 1 at 2π. It is the sine curve shifted left by π/2; cos(−x) = cos x, so it is symmetric about the y-axis.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-16" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="30" y1="160" x2="542.5" y2="160" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-16)"/>
  <line x1="40" y1="285" x2="40" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-16)"/>
  <text x="536.5" y="178" font-style="italic">x</text>
  <text x="48" y="38" font-style="italic">y</text>
  <text x="34" y="176" text-anchor="end" >O</text>
  <line x1="37" y1="60" x2="43" y2="60" stroke="currentColor" stroke-width="1.4"/>
  <text x="33" y="64.5" text-anchor="end" >1</text>
  <line x1="37" y1="260" x2="43" y2="260" stroke="currentColor" stroke-width="1.4"/>
  <text x="33" y="264.5" text-anchor="end" >−1</text>
  <line x1="157.8" y1="156" x2="157.8" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <line x1="275.6" y1="156" x2="275.6" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <line x1="393.4" y1="156" x2="393.4" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <line x1="511.2" y1="156" x2="511.2" y2="164" stroke="currentColor" stroke-width="1.4"/>
  <text x="153.8" y="177" text-anchor="end" >π/2</text>
  <text x="275.6" y="151" text-anchor="middle" >π</text>
  <text x="397.4" y="177" >3π/2</text>
  <text x="511.2" y="179" text-anchor="middle" >2π</text>
  <path d="M 40 60 L 47.4 60.5 L 54.7 61.9 L 62.1 64.3 L 69.5 67.6 L 76.8 71.8 L 84.2 76.9 L 91.5 82.7 L 98.9 89.3 L 106.3 96.6 L 113.6 104.4 L 121 112.9 L 128.4 121.7 L 135.7 131 L 143.1 140.5 L 150.4 150.2 L 157.8 160 L 165.2 169.8 L 172.5 179.5 L 179.9 189 L 187.3 198.3 L 194.6 207.1 L 202 215.6 L 209.4 223.4 L 216.7 230.7 L 224.1 237.3 L 231.4 243.1 L 238.8 248.2 L 246.2 252.4 L 253.5 255.7 L 260.9 258.1 L 268.3 259.5 L 275.6 260 L 283 259.5 L 290.3 258.1 L 297.7 255.7 L 305.1 252.4 L 312.4 248.2 L 319.8 243.1 L 327.2 237.3 L 334.5 230.7 L 341.9 223.4 L 349.3 215.6 L 356.6 207.1 L 364 198.3 L 371.3 189 L 378.7 179.5 L 386.1 169.8 L 393.4 160 L 400.8 150.2 L 408.2 140.5 L 415.5 131 L 422.9 121.7 L 430.2 112.9 L 437.6 104.4 L 445 96.6 L 452.3 89.3 L 459.7 82.7 L 467.1 76.9 L 474.4 71.8 L 481.8 67.6 L 489.1 64.3 L 496.5 61.9 L 503.9 60.5 L 511.2 60" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <line x1="40" y1="160" x2="40" y2="60" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="40" cy="60" r="3.2" fill="currentColor"/>
  <text x="48" y="56" font-size="12" >(0, 1)</text>
  <line x1="275.6" y1="160" x2="275.6" y2="260" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="275.6" cy="260" r="3.2" fill="currentColor"/>
  <text x="283.6" y="276" font-size="12" >(π, −1)</text>
  <text x="272.5" y="310" text-anchor="middle" font-weight="bold">y = cos x</text>
  <text x="272.5" y="330" text-anchor="middle" fill="var(--dg-muted)">Period 2π  ·  range [−1, 1]  ·  cos(−x) = cos x</text>
</svg>`,
    },
    {
      title: "Graph of y = tan x",
      caption: "tan x = sin x / cos x is not defined where cos x = 0, i.e. at x = ±π/2, ±3π/2, …, so the graph has **vertical asymptotes** there (dashed). Each branch rises from −∞ to +∞; tan x is zero at 0, ±π, …. Period π; range R.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-17" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="59.5" y1="150" x2="500.5" y2="150" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-17)"/>
  <line x1="280" y1="273.6" x2="280" y2="20.4" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-17)"/>
  <text x="494.5" y="167" font-style="italic">x</text>
  <text x="288" y="26.4" font-style="italic">y</text>
  <line x1="67.9" y1="32.4" x2="67.9" y2="267.6" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="67.9" y="287.6" text-anchor="middle" >−3π/2</text>
  <line x1="209.3" y1="32.4" x2="209.3" y2="267.6" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="209.3" y="287.6" text-anchor="middle" >−π/2</text>
  <line x1="350.7" y1="32.4" x2="350.7" y2="267.6" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="350.7" y="287.6" text-anchor="middle" >π/2</text>
  <line x1="492.1" y1="32.4" x2="492.1" y2="267.6" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="492.1" y="287.6" text-anchor="middle" >3π/2</text>
  <line x1="138.6" y1="146" x2="138.6" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <line x1="421.4" y1="146" x2="421.4" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="286" y="166" >O</text>
  <text x="138.6" y="170" text-anchor="middle" >−π</text>
  <text x="421.4" y="170" text-anchor="middle" >π</text>
  <path d="M 80.8 265.6 L 83.7 243.1 L 86.6 227.3 L 89.5 215.5 L 92.4 206.3 L 95.3 198.9 L 98.2 192.8 L 101 187.6 L 103.9 183 L 106.8 179 L 109.7 175.4 L 112.6 172.2 L 115.5 169.2 L 118.4 166.4 L 121.3 163.8 L 124.2 161.3 L 127.1 158.9 L 130 156.6 L 132.8 154.4 L 135.7 152.2 L 138.6 150 L 141.5 147.8 L 144.4 145.6 L 147.3 143.4 L 150.2 141.1 L 153.1 138.7 L 156 136.2 L 158.9 133.6 L 161.8 130.8 L 164.6 127.8 L 167.5 124.6 L 170.4 121 L 173.3 117 L 176.2 112.4 L 179.1 107.2 L 182 101.1 L 184.9 93.7 L 187.8 84.5 L 190.7 72.7 L 193.6 56.9 L 196.4 34.4" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <path d="M 222.2 265.6 L 225.1 243.1 L 228 227.3 L 230.9 215.5 L 233.7 206.3 L 236.6 198.9 L 239.5 192.8 L 242.4 187.6 L 245.3 183 L 248.2 179 L 251.1 175.4 L 254 172.2 L 256.9 169.2 L 259.8 166.4 L 262.7 163.8 L 265.5 161.3 L 268.4 158.9 L 271.3 156.6 L 274.2 154.4 L 277.1 152.2 L 280 150 L 282.9 147.8 L 285.8 145.6 L 288.7 143.4 L 291.6 141.1 L 294.5 138.7 L 297.3 136.2 L 300.2 133.6 L 303.1 130.8 L 306 127.8 L 308.9 124.6 L 311.8 121 L 314.7 117 L 317.6 112.4 L 320.5 107.2 L 323.4 101.1 L 326.3 93.7 L 329.1 84.5 L 332 72.7 L 334.9 56.9 L 337.8 34.4" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <path d="M 363.6 265.6 L 366.4 243.1 L 369.3 227.3 L 372.2 215.5 L 375.1 206.3 L 378 198.9 L 380.9 192.8 L 383.8 187.6 L 386.7 183 L 389.6 179 L 392.5 175.4 L 395.4 172.2 L 398.2 169.2 L 401.1 166.4 L 404 163.8 L 406.9 161.3 L 409.8 158.9 L 412.7 156.6 L 415.6 154.4 L 418.5 152.2 L 421.4 150 L 424.3 147.8 L 427.2 145.6 L 430 143.4 L 432.9 141.1 L 435.8 138.7 L 438.7 136.2 L 441.6 133.6 L 444.5 130.8 L 447.4 127.8 L 450.3 124.6 L 453.2 121 L 456.1 117 L 459 112.4 L 461.8 107.2 L 464.7 101.1 L 467.6 93.7 L 470.5 84.5 L 473.4 72.7 L 476.3 56.9 L 479.2 34.4" fill="none" stroke="var(--dg-accent)" stroke-width="2.2" />
  <text x="280" y="318" text-anchor="middle"  font-weight="bold">y = tan x  ·  period π  ·  range R</text>
</svg>`,
    },
  ],
  "complex-numbers-and-quadratic-equations": [
    {
      title: "Argand plane: modulus, argument and conjugate",
      caption: "The complex number z = x + iy is plotted as the point (x, y). Its **modulus |z| = r = √(x² + y²)** is the distance OP, and its **argument θ** is the angle OP makes with the positive real axis. The conjugate z̄ = x − iy is the mirror image of z in the real axis. Here z = 4 + 3i, |z| = 5.",
      svg: `<svg viewBox="0 0 560 370" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-18" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="30" y1="185" x2="395" y2="185" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-18)"/>
  <line x1="160" y1="335" x2="160" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-18)"/>
  <text x="168" y="17" fill="var(--dg-muted)" font-size="12">Imaginary axis</text>
  <text x="146" y="201" >O</text>
  <line x1="320" y1="65" x2="320" y2="185" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="320" y1="305" x2="320" y2="185" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="160" y1="65" x2="320" y2="65" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="160" y1="185" x2="320" y2="65" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-m11-18)"/>
  <line x1="160" y1="185" x2="320" y2="305" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2 3"/>
  <path d="M 196 185 A 36 36 0 0 0 188.8 163.4" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="202" y="177" font-style="italic">θ</text>
  <circle cx="320" cy="65" r="3.5" fill="currentColor"/>
  <circle cx="320" cy="305" r="3.5" fill="currentColor"/>
  <circle cx="320" cy="185" r="3" fill="currentColor"/>
  <text x="330" y="59" >P  z = 4 + 3i</text>
  <text x="328" y="321" >Q  z̄ = 4 − 3i</text>
  <text x="226" y="119" text-anchor="end" fill="var(--dg-accent)">r = |z| = 5</text>
  <text x="314" y="201" text-anchor="end" >4</text>
  <text x="154" y="69" text-anchor="end" >3</text>
  <text x="330" y="129" fill="var(--dg-muted)" font-size="12">y = 3</text>
  <text x="425" y="90" >|z| = √(x² + y²)</text>
  <text x="425" y="116" >x = r cos θ</text>
  <text x="425" y="142" >y = r sin θ</text>
  <text x="425" y="168" >tan θ = y / x</text>
  <text x="425" y="200" >|z̄| = |z|</text>
  <text x="395" y="203" text-anchor="end" fill="var(--dg-muted)" font-size="12">Real axis</text>
</svg>`,
    },
    {
      title: "Addition of complex numbers: parallelogram law",
      caption: "To add z₁ = 3 + i and z₂ = 1 + 3i, draw the parallelogram with sides OA and OB. **The diagonal OC represents z₁ + z₂ = 4 + 4i.** Because one side of a triangle is less than the sum of the other two, |z₁ + z₂| ≤ |z₁| + |z₂|.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-19" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="50" y1="290" x2="360" y2="290" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-19)"/>
  <line x1="70" y1="310" x2="70" y2="40" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-19)"/>
  <text x="78" y="38" fill="var(--dg-muted)" font-size="12">Imaginary</text>
  <text x="56" y="306" >O</text>
  <line x1="235" y1="235" x2="290" y2="70" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="125" y1="125" x2="290" y2="70" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="70" y1="290" x2="235" y2="235" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m11-19)"/>
  <line x1="70" y1="290" x2="125" y2="125" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-m11-19)"/>
  <line x1="70" y1="290" x2="290" y2="70" stroke="currentColor" stroke-width="2.4" marker-end="url(#ar-m11-19)"/>
  <circle cx="235" cy="235" r="3.5" fill="currentColor"/>
  <circle cx="125" cy="125" r="3.5" fill="currentColor"/>
  <circle cx="290" cy="70" r="3.5" fill="currentColor"/>
  <text x="243" y="251" >A</text>
  <text x="121" y="115" >B</text>
  <text x="300" y="74" >C</text>
  <text x="360" y="120" >A : z₁ = 3 + i</text>
  <text x="360" y="148" >B : z₂ = 1 + 3i</text>
  <text x="360" y="176" fill="var(--dg-accent)">C : z₁ + z₂ = 4 + 4i</text>
  <text x="235" y="307" text-anchor="middle" >3</text>
  <text x="290" y="307" text-anchor="middle" >4</text>
  <text x="125" y="307" text-anchor="middle" >1</text>
  <text x="64" y="129" text-anchor="end" >3</text>
  <text x="64" y="239" text-anchor="end" >1</text>
  <text x="64" y="74" text-anchor="end" >4</text>
  <text x="360" y="324" text-anchor="end" fill="var(--dg-muted)" font-size="12">Real axis</text>
</svg>`,
    },
  ],
  "linear-inequalities": [
    {
      title: "Solutions of inequalities on the number line",
      caption: "A **filled dot** means the end point is included (≤ or ≥); an **open circle** means it is not included (< or >). The thick line shows all solutions. Bounds in an interval can be mixed: −1 < x ≤ 4.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-20" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="40" y1="60" x2="530" y2="60" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-20)"/>
  <line x1="60" y1="56" x2="60" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="60" y="80" text-anchor="middle" >−5</text>
  <line x1="96" y1="56" x2="96" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="96" y="80" text-anchor="middle" >−4</text>
  <line x1="132" y1="56" x2="132" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="132" y="80" text-anchor="middle" >−3</text>
  <line x1="168" y1="56" x2="168" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="168" y="80" text-anchor="middle" >−2</text>
  <line x1="204" y1="56" x2="204" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="204" y="80" text-anchor="middle" >−1</text>
  <line x1="240" y1="56" x2="240" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="240" y="80" text-anchor="middle" >0</text>
  <line x1="276" y1="56" x2="276" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="276" y="80" text-anchor="middle" >1</text>
  <line x1="312" y1="56" x2="312" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="312" y="80" text-anchor="middle" >2</text>
  <line x1="348" y1="56" x2="348" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="348" y="80" text-anchor="middle" >3</text>
  <line x1="384" y1="56" x2="384" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="384" y="80" text-anchor="middle" >4</text>
  <line x1="420" y1="56" x2="420" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="420" y="80" text-anchor="middle" >5</text>
  <line x1="456" y1="56" x2="456" y2="64" stroke="currentColor" stroke-width="1.4"/>
  <text x="456" y="80" text-anchor="middle" >6</text>
  <line x1="44" y1="60" x2="348" y2="60" stroke="var(--dg-accent)" stroke-width="5"/>
  <path d="M 40 60 l 10 -6 v 12 z" fill="var(--dg-accent)"/>
  <circle cx="348" cy="60" r="5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="38" font-weight="bold">x &lt; 3   ,   x ∈ (−∞, 3)</text>
  <line x1="40" y1="150" x2="530" y2="150" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-20)"/>
  <line x1="60" y1="146" x2="60" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="60" y="170" text-anchor="middle" >−5</text>
  <line x1="96" y1="146" x2="96" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="96" y="170" text-anchor="middle" >−4</text>
  <line x1="132" y1="146" x2="132" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="132" y="170" text-anchor="middle" >−3</text>
  <line x1="168" y1="146" x2="168" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="168" y="170" text-anchor="middle" >−2</text>
  <line x1="204" y1="146" x2="204" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="204" y="170" text-anchor="middle" >−1</text>
  <line x1="240" y1="146" x2="240" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="240" y="170" text-anchor="middle" >0</text>
  <line x1="276" y1="146" x2="276" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="276" y="170" text-anchor="middle" >1</text>
  <line x1="312" y1="146" x2="312" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="312" y="170" text-anchor="middle" >2</text>
  <line x1="348" y1="146" x2="348" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="348" y="170" text-anchor="middle" >3</text>
  <line x1="384" y1="146" x2="384" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="384" y="170" text-anchor="middle" >4</text>
  <line x1="420" y1="146" x2="420" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="420" y="170" text-anchor="middle" >5</text>
  <line x1="456" y1="146" x2="456" y2="154" stroke="currentColor" stroke-width="1.4"/>
  <text x="456" y="170" text-anchor="middle" >6</text>
  <line x1="168" y1="150" x2="526" y2="150" stroke="var(--dg-accent)" stroke-width="5"/>
  <path d="M 530 150 l -10 -6 v 12 z" fill="var(--dg-accent)"/>
  <circle cx="168" cy="150" r="5" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.3"/>
  <text x="40" y="128" font-weight="bold">x ≥ −2   ,   x ∈ [−2, ∞)</text>
  <line x1="40" y1="240" x2="530" y2="240" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-20)"/>
  <line x1="60" y1="236" x2="60" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="60" y="260" text-anchor="middle" >−5</text>
  <line x1="96" y1="236" x2="96" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="96" y="260" text-anchor="middle" >−4</text>
  <line x1="132" y1="236" x2="132" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="132" y="260" text-anchor="middle" >−3</text>
  <line x1="168" y1="236" x2="168" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="168" y="260" text-anchor="middle" >−2</text>
  <line x1="204" y1="236" x2="204" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="204" y="260" text-anchor="middle" >−1</text>
  <line x1="240" y1="236" x2="240" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="240" y="260" text-anchor="middle" >0</text>
  <line x1="276" y1="236" x2="276" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="276" y="260" text-anchor="middle" >1</text>
  <line x1="312" y1="236" x2="312" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="312" y="260" text-anchor="middle" >2</text>
  <line x1="348" y1="236" x2="348" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="348" y="260" text-anchor="middle" >3</text>
  <line x1="384" y1="236" x2="384" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="384" y="260" text-anchor="middle" >4</text>
  <line x1="420" y1="236" x2="420" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="420" y="260" text-anchor="middle" >5</text>
  <line x1="456" y1="236" x2="456" y2="244" stroke="currentColor" stroke-width="1.4"/>
  <text x="456" y="260" text-anchor="middle" >6</text>
  <line x1="204" y1="240" x2="384" y2="240" stroke="var(--dg-accent)" stroke-width="5"/>
  <circle cx="204" cy="240" r="5" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="384" cy="240" r="5" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.3"/>
  <text x="40" y="218" font-weight="bold">−1 &lt; x ≤ 4   ,   x ∈ (−1, 4]</text>
</svg>`,
    },
    {
      title: "Graph of a linear inequality in two variables",
      caption: "To graph **3x + 2y ≥ 6**, draw the line 3x + 2y = 6 through (2, 0) and (0, 3). Test the point O(0, 0): 0 ≥ 6 is false, so **shade the side away from the origin**. The line is solid because ≥ includes it (use a dashed line for < or >).",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-21" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <polygon points="55,35 295,35 295,275 215,275" fill="var(--dg-accent)" fill-opacity="0.28" stroke="none"/>
  <line x1="27" y1="215" x2="303" y2="215" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-21)"/>
  <line x1="95" y1="283" x2="95" y2="23" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-21)"/>
  <text x="297" y="232" font-style="italic">x</text>
  <text x="103" y="29" font-style="italic">y</text>
  <text x="89" y="230" text-anchor="end" >O</text>
  <line x1="55" y1="35" x2="215" y2="275" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="175" cy="215" r="3.5" fill="currentColor"/>
  <circle cx="95" cy="95" r="3.5" fill="currentColor"/>
  <text x="177" y="232" text-anchor="end" font-size="12">(2, 0)</text>
  <text x="103" y="89" font-size="12">(0, 3)</text>
  <circle cx="95" cy="215" r="3.5" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="219" y="95" fill="var(--dg-accent)">3x + 2y = 6</text>
  <text x="330" y="70" font-weight="bold">Test point O(0, 0)</text>
  <text x="330" y="94" >3(0) + 2(0) = 0 ≥ 6 ?</text>
  <text x="330" y="118" >False  →  O is not in the region</text>
  <text x="330" y="160" fill="var(--dg-accent)">Shaded side (away from O)</text>
  <text x="330" y="182" fill="var(--dg-accent)">= solution region of</text>
  <text x="330" y="204" fill="var(--dg-accent)">3x + 2y ≥ 6</text>
</svg>`,
    },
    {
      title: "Solution region of a system of linear inequalities",
      caption: "The solution of the system x ≥ 0, y ≥ 0, x + y ≤ 4, x − y ≤ 2 is the **region common to all four half-planes**. It is the shaded quadrilateral OABC with vertices O(0, 0), A(2, 0), B(3, 1) and C(0, 4); the points on its edges are included.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-22" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <polygon points="70,285 174,285 226,233 70,77" fill="var(--dg-accent)" fill-opacity="0.3" stroke="none"/>
  <line x1="44" y1="285" x2="350.8" y2="285" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-22)"/>
  <line x1="70" y1="311" x2="70" y2="25" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar-m11-22)"/>
  <text x="344.8" y="302" font-style="italic">x</text>
  <text x="78" y="31" font-style="italic">y</text>
  <text x="64" y="301" text-anchor="end" >O</text>
  <line x1="54.4" y1="61.4" x2="293.6" y2="300.6" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="158.4" y1="300.6" x2="309.2" y2="149.8" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="174" cy="285" r="3.5" fill="currentColor"/>
  <circle cx="226" cy="233" r="3.5" fill="currentColor"/>
  <circle cx="70" cy="77" r="3.5" fill="currentColor"/>
  <circle cx="70" cy="285" r="3" fill="currentColor"/>
  <text x="170" y="303" font-size="12">A(2, 0)</text>
  <text x="234" y="229" font-size="12">B(3, 1)</text>
  <text x="78" y="71" font-size="12">C(0, 4)</text>
  <text x="301.6" y="314.6" fill="var(--dg-accent)" font-size="12">x + y = 4</text>
  <text x="315.2" y="153.8" fill="var(--dg-accent)" font-size="12">x − y = 2</text>
  <text x="400" y="60" font-weight="bold">Constraints</text>
  <text x="400" y="86" >x ≥ 0</text>
  <text x="400" y="108" >y ≥ 0</text>
  <text x="400" y="130" >x + y ≤ 4</text>
  <text x="400" y="152" >x − y ≤ 2</text>
  <text x="116.8" y="238.2" text-anchor="middle" fill="var(--dg-muted)" font-size="12">Feasible</text>
  <text x="116.8" y="252.2" text-anchor="middle" fill="var(--dg-muted)" font-size="12">region</text>
</svg>`,
    },
  ],
  "permutations-and-combinations": [
    {
      title: "Tree diagram: arranging 3 letters (3! = 6)",
      caption: "To arrange a, b, c in three places there are **3 choices for the first place, 2 for the second and 1 for the third**, so 3 × 2 × 1 = 3! = 6 arrangements. Each path from the left to a right-hand end is one permutation.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-23" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="150" y="26" text-anchor="middle" fill="var(--dg-muted)">1st place</text>
  <text x="270" y="26" text-anchor="middle" fill="var(--dg-muted)">2nd place</text>
  <text x="390" y="26" text-anchor="middle" fill="var(--dg-muted)">3rd place</text>
  <text x="150" y="42" text-anchor="middle" fill="var(--dg-muted)" font-size="12">3 ways</text>
  <text x="270" y="42" text-anchor="middle" fill="var(--dg-muted)" font-size="12">2 ways</text>
  <text x="390" y="42" text-anchor="middle" fill="var(--dg-muted)" font-size="12">1 way</text>
  <circle cx="40" cy="172" r="4" fill="currentColor"/>
  <text x="26" y="160" fill="var(--dg-muted)" font-size="12">Start</text>
  <line x1="40" y1="172" x2="138" y2="84" stroke="currentColor" stroke-width="1.3"/>
  <line x1="162" y1="84" x2="258" y2="62" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282" y1="62" x2="378" y2="62" stroke="currentColor" stroke-width="1.3"/>
  <line x1="162" y1="84" x2="258" y2="106" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282" y1="106" x2="378" y2="106" stroke="currentColor" stroke-width="1.3"/>
  <line x1="40" y1="172" x2="138" y2="172" stroke="currentColor" stroke-width="1.3"/>
  <line x1="162" y1="172" x2="258" y2="150" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282" y1="150" x2="378" y2="150" stroke="currentColor" stroke-width="1.3"/>
  <line x1="162" y1="172" x2="258" y2="194" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282" y1="194" x2="378" y2="194" stroke="currentColor" stroke-width="1.3"/>
  <line x1="40" y1="172" x2="138" y2="260" stroke="currentColor" stroke-width="1.3"/>
  <line x1="162" y1="260" x2="258" y2="238" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282" y1="238" x2="378" y2="238" stroke="currentColor" stroke-width="1.3"/>
  <line x1="162" y1="260" x2="258" y2="282" stroke="currentColor" stroke-width="1.3"/>
  <line x1="282" y1="282" x2="378" y2="282" stroke="currentColor" stroke-width="1.3"/>
  <circle cx="150" cy="84" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="150" y="88.5" text-anchor="middle" >a</text>
  <circle cx="150" cy="172" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="150" y="176.5" text-anchor="middle" >b</text>
  <circle cx="150" cy="260" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="150" y="264.5" text-anchor="middle" >c</text>
  <circle cx="270" cy="62" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="270" y="66.5" text-anchor="middle" >b</text>
  <circle cx="390" cy="62" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="390" y="66.5" text-anchor="middle" >c</text>
  <text x="450" y="66.5" fill="var(--dg-accent)" font-weight="bold">abc</text>
  <circle cx="270" cy="106" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="270" y="110.5" text-anchor="middle" >c</text>
  <circle cx="390" cy="106" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="390" y="110.5" text-anchor="middle" >b</text>
  <text x="450" y="110.5" fill="var(--dg-accent)" font-weight="bold">acb</text>
  <circle cx="270" cy="150" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="270" y="154.5" text-anchor="middle" >a</text>
  <circle cx="390" cy="150" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="390" y="154.5" text-anchor="middle" >c</text>
  <text x="450" y="154.5" fill="var(--dg-accent)" font-weight="bold">bac</text>
  <circle cx="270" cy="194" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="270" y="198.5" text-anchor="middle" >c</text>
  <circle cx="390" cy="194" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="390" y="198.5" text-anchor="middle" >a</text>
  <text x="450" y="198.5" fill="var(--dg-accent)" font-weight="bold">bca</text>
  <circle cx="270" cy="238" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="270" y="242.5" text-anchor="middle" >a</text>
  <circle cx="390" cy="238" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="390" y="242.5" text-anchor="middle" >b</text>
  <text x="450" y="242.5" fill="var(--dg-accent)" font-weight="bold">cab</text>
  <circle cx="270" cy="282" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="270" y="286.5" text-anchor="middle" >b</text>
  <circle cx="390" cy="282" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.4"/><text x="390" y="286.5" text-anchor="middle" >a</text>
  <text x="450" y="286.5" fill="var(--dg-accent)" font-weight="bold">cba</text>
  <text x="470" y="26" text-anchor="middle" fill="var(--dg-muted)">Permutations</text>
</svg>`,
    },
  ],
  "binomial-theorem": [
    {
      title: "Pascal’s triangle",
      caption: "Each number is the **sum of the two numbers just above it** (shown for 4 + 6 = 10). Row n gives the coefficients of the expansion of (a + b)ⁿ, for example row 4 gives 1, 4, 6, 4, 1 in (a + b)⁴. The numbers in row n are the binomial coefficients ⁿC₀, ⁿC₁, …, ⁿCₙ.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11-24" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <circle cx="244" cy="229" r="17" fill="var(--dg-accent)" fill-opacity="0.3" stroke="none"/>
  <line x1="218" y1="200" x2="238" y2="216" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-m11-24)"/>
  <line x1="270" y1="200" x2="250" y2="216" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-m11-24)"/>
  <text x="24" y="34" fill="var(--dg-muted)" font-size="12">Row 0</text>
  <text x="270" y="34" text-anchor="middle" font-size="15">1</text>
  <text x="24" y="74" fill="var(--dg-muted)" font-size="12">Row 1</text>
  <text x="244" y="74" text-anchor="middle" font-size="15">1</text>
  <text x="296" y="74" text-anchor="middle" font-size="15">1</text>
  <text x="24" y="114" fill="var(--dg-muted)" font-size="12">Row 2</text>
  <text x="218" y="114" text-anchor="middle" font-size="15">1</text>
  <text x="270" y="114" text-anchor="middle" font-size="15">2</text>
  <text x="322" y="114" text-anchor="middle" font-size="15">1</text>
  <text x="24" y="154" fill="var(--dg-muted)" font-size="12">Row 3</text>
  <text x="192" y="154" text-anchor="middle" font-size="15">1</text>
  <text x="244" y="154" text-anchor="middle" font-size="15">3</text>
  <text x="296" y="154" text-anchor="middle" font-size="15">3</text>
  <text x="348" y="154" text-anchor="middle" font-size="15">1</text>
  <text x="24" y="194" fill="var(--dg-muted)" font-size="12">Row 4</text>
  <text x="166" y="194" text-anchor="middle" font-size="15">1</text>
  <text x="218" y="194" text-anchor="middle" font-size="15" font-weight="bold">4</text>
  <text x="270" y="194" text-anchor="middle" font-size="15" font-weight="bold">6</text>
  <text x="322" y="194" text-anchor="middle" font-size="15">4</text>
  <text x="374" y="194" text-anchor="middle" font-size="15">1</text>
  <text x="24" y="234" fill="var(--dg-muted)" font-size="12">Row 5</text>
  <text x="140" y="234" text-anchor="middle" font-size="15">1</text>
  <text x="192" y="234" text-anchor="middle" font-size="15">5</text>
  <text x="244" y="234" text-anchor="middle" font-size="15" font-weight="bold">10</text>
  <text x="296" y="234" text-anchor="middle" font-size="15">10</text>
  <text x="348" y="234" text-anchor="middle" font-size="15">5</text>
  <text x="400" y="234" text-anchor="middle" font-size="15">1</text>
  <text x="24" y="274" fill="var(--dg-muted)" font-size="12">Row 6</text>
  <text x="114" y="274" text-anchor="middle" font-size="15">1</text>
  <text x="166" y="274" text-anchor="middle" font-size="15">6</text>
  <text x="218" y="274" text-anchor="middle" font-size="15">15</text>
  <text x="270" y="274" text-anchor="middle" font-size="15">20</text>
  <text x="322" y="274" text-anchor="middle" font-size="15">15</text>
  <text x="374" y="274" text-anchor="middle" font-size="15">6</text>
  <text x="426" y="274" text-anchor="middle" font-size="15">1</text>
  <text x="404" y="195" fill="var(--dg-muted)">(a + b)⁴</text>
  <text x="352" y="115" fill="var(--dg-muted)">(a + b)²</text>
</svg>`,
    },
  ],
  "straight-lines": [
    {
      title: "Slope and angle of inclination",
      caption: "The angle of inclination **θ** is measured anticlockwise from the positive x-axis to the line. The slope is **m = tan θ = rise / run**; here the line through P₁(1, 0) and P₂(5, 3) has m = 3/4.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="60" y1="250" x2="360" y2="250" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-1)"/>
  <line x1="80" y1="286" x2="80" y2="74" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-1)"/>
  <text x="366" y="254" font-style="italic">x</text>
  <text x="88" y="78" font-style="italic">y</text>
  <text x="68" y="265" font-style="italic">O</text>
  <line x1="110" y1="257.6" x2="332" y2="91" stroke="currentColor" stroke-width="2"/>
  <line x1="280" y1="250" x2="280" y2="130" stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="120" y1="250" x2="280" y2="250" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="280" y1="250" x2="280" y2="130" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M 154 250 A 34 34 0 0 0 147.2 229.6" fill="none" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <text x="167.4" y="239.2" font-size="15" font-style="italic">θ</text>
  <circle cx="120" cy="250" r="3.5" fill="currentColor"/>
  <circle cx="280" cy="130" r="3.5" fill="currentColor"/>
  <text x="126" y="268">P₁(1, 0)</text>
  <text x="274" y="120" text-anchor="end">P₂(5, 3)</text>
  <text x="240" y="268" text-anchor="middle" fill="var(--dg-accent)">run = 4</text>
  <text x="288" y="194" fill="var(--dg-accent)">rise = 3</text>
  <text x="395" y="100" font-weight="bold">m = tan θ = rise / run</text>
  <text x="395" y="122">= (y₂ − y₁) / (x₂ − x₁)</text>
  <text x="395" y="144">= 3/4</text>
  <text x="395" y="178" fill="var(--dg-muted)">θ = angle of inclination,</text>
  <text x="395" y="196" fill="var(--dg-muted)">0° ≤ θ &lt; 180°, θ ≠ 90°</text>
  <text x="395" y="222" fill="var(--dg-muted)">θ acute → m &gt; 0</text>
  <text x="395" y="240" fill="var(--dg-muted)">θ obtuse → m &lt; 0</text>
</svg>`,
    },
    {
      title: "Angle between two lines",
      caption: "Lines with inclinations θ₁ and θ₂ meet at P. The angle between them is **θ = θ₂ − θ₁**, so tan θ = |(m₂ − m₁)/(1 + m₁m₂)|. For m₁ = 1/2 and m₂ = 3 this gives tan θ = 1, so θ = 45°.",
      svg: `<svg viewBox="0 0 560 295" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="60" y1="215" x2="380" y2="215" stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="56.3" y1="241.8" x2="333.6" y2="103.2" stroke="currentColor" stroke-width="2"/>
  <line x1="97.4" y1="252.9" x2="160.6" y2="63.2" stroke="currentColor" stroke-width="2"/>
  <path d="M 110 215 L 159.2 190.4 A 55 55 0 0 0 127.4 162.8 Z" fill="var(--dg-accent)" fill-opacity="0.3" stroke="none"/>
  <path d="M 195 215 A 85 85 0 0 0 186 177" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <path d="M 225 215 A 115 115 0 0 0 146.4 105.9" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="128.9" y="191.3" font-size="15" font-style="italic">θ</text>
  <text x="201.3" y="197" font-size="15" font-style="italic">θ₁</text>
  <text x="198.4" y="127.7" font-size="15" font-style="italic">θ₂</text>
  <circle cx="110" cy="215" r="3.5" fill="currentColor"/>
  <text x="120" y="232" font-style="italic">P</text>
  <text x="338.6" y="107.2">l₁  (slope m₁)</text>
  <text x="168.6" y="67.2">l₂  (slope m₂)</text>
  <text x="280" y="262" text-anchor="middle">m₁ = tan θ₁ = 1/2&#160;&#160;&#160;&#160;&#160;&#160;m₂ = tan θ₂ = 3&#160;&#160;&#160;&#160;&#160;&#160;θ = θ₂ − θ₁</text>
  <text x="280" y="284" text-anchor="middle" font-weight="bold">tan θ = |(m₂ − m₁)/(1 + m₁m₂)| = |(3 − 1/2)/(1 + 3/2)| = 1,  so θ = 45°</text>
</svg>`,
    },
    {
      title: "Intercept form and slope-intercept form",
      caption: "**Left:** the line x/a + y/b = 1 cuts the axes at (a, 0) and (0, b). **Right:** the line y = mx + c has slope m (rise/run) and cuts the y-axis at (0, c).",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="36.4" y1="215" x2="233.6" y2="215" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <line x1="50" y1="228.6" x2="50" y2="72.2" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <text x="239.6" y="219" font-style="italic">x</text>
  <text x="58" y="76.2" font-style="italic">y</text>
  <text x="38" y="230" font-style="italic">O</text>
  <line x1="39.8" y1="105.4" x2="191.1" y2="220.1" stroke="currentColor" stroke-width="2"/>
  <circle cx="186" cy="215" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="50" cy="113" r="3.5" fill="var(--dg-accent)"/>
  <text x="186" y="236" text-anchor="middle" fill="var(--dg-accent)">(a, 0) = (4, 0)</text>
  <text x="58" y="107" fill="var(--dg-accent)">(0, b) = (0, 3)</text>
  <text x="130" y="38" text-anchor="middle" font-weight="bold">Intercept form</text>
  <text x="130" y="58" text-anchor="middle">x/a + y/b = 1</text>
  <text x="130" y="262" text-anchor="middle" fill="var(--dg-muted)">here x/4 + y/3 = 1</text>
  <line x1="263.8" y1="215" x2="542.6" y2="215" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <line x1="410" y1="228.6" x2="410" y2="65.4" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <text x="548.6" y="219" font-style="italic">x</text>
  <text x="418" y="69.4" font-style="italic">y</text>
  <text x="398" y="230" font-style="italic">O</text>
  <line x1="274" y1="215" x2="539.2" y2="82.4" stroke="currentColor" stroke-width="2"/>
  <polyline points="410,147 478,147 478,113" fill="none" stroke="var(--dg-accent)" stroke-width="1.8" stroke-dasharray="5 4"/>
  <circle cx="410" cy="147" r="3.5" fill="var(--dg-accent)"/>
  <text x="403" y="141" text-anchor="end" fill="var(--dg-accent)">(0, c) = (0, 2)</text>
  <text x="444" y="164" text-anchor="middle" fill="var(--dg-accent)">run = 2</text>
  <text x="484" y="134" fill="var(--dg-accent)">rise = 1</text>
  <text x="410" y="38" text-anchor="middle" font-weight="bold">Slope-intercept form</text>
  <text x="410" y="58" text-anchor="middle">y = mx + c</text>
  <text x="410" y="262" text-anchor="middle" fill="var(--dg-muted)">here y = ½x + 2  (m = 1/2, c = 2)</text>
</svg>`,
    },
    {
      title: "Distance of a point from a line",
      caption: "The distance of P(x₁, y₁) from the line Ax + By + C = 0 is the length of the perpendicular PF. For P(4, 5) and the line 3x + 4y − 12 = 0, d = 4 and the foot of the perpendicular is F(1.6, 1.8).",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="47.2" y1="255" x2="313.2" y2="255" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-4)"/>
  <line x1="70" y1="300.6" x2="70" y2="42.2" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-4)"/>
  <text x="319.2" y="259" font-style="italic">x</text>
  <text x="78" y="46.2" font-style="italic">y</text>
  <text x="58" y="270" font-style="italic">O</text>
  <line x1="32" y1="112.5" x2="271.4" y2="292.1" stroke="currentColor" stroke-width="2"/>
  <text x="279.4" y="290.1">3x + 4y − 12 = 0</text>
  <line x1="222" y1="65" x2="130.8" y2="186.6" stroke="var(--dg-accent)" stroke-width="2"/>
  <polygon points="130.8,186.6 123.6,181.2 129,174 136.2,179.4" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="222" cy="65" r="3.5" fill="currentColor"/>
  <circle cx="130.8" cy="186.6" r="3.5" fill="currentColor"/>
  <circle cx="222" cy="255" r="3" fill="currentColor"/>
  <circle cx="70" cy="141" r="3" fill="currentColor"/>
  <text x="230" y="69">P(4, 5)</text>
  <text x="146.8" y="184.6">F(1.6, 1.8)</text>
  <text x="224" y="272" text-anchor="end">(4, 0)</text>
  <text x="78" y="133">(0, 3)</text>
  <text x="190.4" y="121.8" font-weight="bold" fill="var(--dg-accent)">d = 4</text>
  <text x="345" y="100" font-weight="bold">d = |Ax₁ + By₁ + C| / √(A² + B²)</text>
  <text x="345" y="126" fill="var(--dg-muted)">For 3x + 4y − 12 = 0 and P(4, 5):</text>
  <text x="345" y="150">d = |3·4 + 4·5 − 12| / √(3² + 4²)</text>
  <text x="345" y="172">= 20 / 5 = 4</text>
</svg>`,
    },
  ],
  "conic-sections": [
    {
      title: "Conic sections as slices of a cone",
      caption: "A plane cutting a double cone gives the four conics. Perpendicular to the axis: **circle**. Tilted but cutting only one nappe: **ellipse**. Parallel to a generator: **parabola**. Steeper than a generator, cutting both nappes: **hyperbola**.",
      svg: `<svg viewBox="0 0 560 335" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="70" y1="8" x2="70" y2="202" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="70" y1="105" x2="25" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70" y1="105" x2="115" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70" y1="105" x2="25" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70" y1="105" x2="115" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="70" cy="15" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <ellipse cx="70" cy="195" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <ellipse cx="70" cy="160" rx="27.5" ry="6" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="26" y1="160" x2="42" y2="160" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="98" y1="160" x2="114" y2="160" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="70" cy="252" r="22" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="70" y="306" text-anchor="middle" font-weight="bold">Circle</text>
  <text x="70" y="325" text-anchor="middle" font-size="12" fill="var(--dg-muted)">plane ⟂ axis</text>
  <line x1="205" y1="8" x2="205" y2="202" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="205" y1="105" x2="160" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="205" y1="105" x2="250" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="205" y1="105" x2="160" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <line x1="205" y1="105" x2="250" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="205" cy="15" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <ellipse cx="205" cy="195" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="163" y1="179.6" x2="247" y2="140.4" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <ellipse cx="205" cy="252" rx="32" ry="18" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="205" y="306" text-anchor="middle" font-weight="bold">Ellipse</text>
  <text x="205" y="325" text-anchor="middle" font-size="12" fill="var(--dg-muted)">tilted, one nappe</text>
  <line x1="340" y1="8" x2="340" y2="202" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="340" y1="105" x2="295" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340" y1="105" x2="385" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340" y1="105" x2="295" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340" y1="105" x2="385" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="340" cy="15" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <ellipse cx="340" cy="195" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="290" y1="115" x2="335" y2="205" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="344" y1="101" x2="384" y2="181" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <polyline points="312,232 314.8,239.6 317.6,246.4 320.4,252.4 323.2,257.6 326,262 328.8,265.6 331.6,268.4 334.4,270.4 337.2,271.6 340,272 342.8,271.6 345.6,270.4 348.4,268.4 351.2,265.6 354,262 356.8,257.6 359.6,252.4 362.4,246.4 365.2,239.6 368,232" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="340" y="306" text-anchor="middle" font-weight="bold">Parabola</text>
  <text x="340" y="325" text-anchor="middle" font-size="12" fill="var(--dg-muted)">∥ to a generator</text>
  <line x1="475" y1="8" x2="475" y2="202" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="475" y1="105" x2="430" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="475" y1="105" x2="520" y2="15" stroke="currentColor" stroke-width="1.5"/>
  <line x1="475" y1="105" x2="430" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <line x1="475" y1="105" x2="520" y2="195" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="475" cy="15" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <ellipse cx="475" cy="195" rx="45" ry="7" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="495" y1="10" x2="495" y2="200" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <polyline points="435.8,230.3 442.4,232.8 448.3,234.8 453.6,236.5 458.4,237.8 462.9,238.8 467.1,239.5 471.1,239.9 475,240 478.9,239.9 482.9,239.5 487.1,238.8 491.6,237.8 496.4,236.5 501.7,234.8 507.6,232.8 514.2,230.3" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <polyline points="435.8,273.7 442.4,271.2 448.3,269.2 453.6,267.5 458.4,266.2 462.9,265.2 467.1,264.5 471.1,264.1 475,264 478.9,264.1 482.9,264.5 487.1,265.2 491.6,266.2 496.4,267.5 501.7,269.2 507.6,271.2 514.2,273.7" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="475" y="306" text-anchor="middle" font-weight="bold">Hyperbola</text>
  <text x="475" y="325" text-anchor="middle" font-size="12" fill="var(--dg-muted)">cuts both nappes</text>
  <text x="26" y="111" font-size="12" fill="var(--dg-muted)">vertex</text>
</svg>`,
    },
    {
      title: "Circle: centre and radius",
      caption: "Every point P(x, y) on the circle is at the same distance **r** from the centre C(h, k). That gives (x − h)² + (y − k)² = r². Here C is (3, 2) and r = 2.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="40" y1="250" x2="335" y2="250" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-2)"/>
  <line x1="60" y1="270" x2="60" y2="15" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-2)"/>
  <text x="341" y="254" font-style="italic">x</text>
  <text x="68" y="19" font-style="italic">y</text>
  <text x="48" y="265" font-style="italic">O</text>
  <circle cx="210" cy="150" r="100" fill="var(--dg-fill)" fill-opacity="0.5" stroke="currentColor" stroke-width="1.8"/>
  <line x1="210" y1="150" x2="210" y2="250" stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="210" y1="150" x2="60" y2="150" stroke="var(--dg-muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="210" y1="150" x2="274.3" y2="73.4" stroke="var(--dg-accent)" stroke-width="2"/>
  <circle cx="210" cy="150" r="3.5" fill="currentColor"/>
  <circle cx="274.3" cy="73.4" r="3.5" fill="currentColor"/>
  <text x="210" y="267" text-anchor="middle" fill="var(--dg-muted)">h = 3</text>
  <text x="54" y="154" text-anchor="end" fill="var(--dg-muted)">k = 2</text>
  <text x="216" y="170">C(h, k)</text>
  <text x="282.3" y="69.4">P(x, y)</text>
  <text x="234.1" y="107.7" text-anchor="end" font-size="15" font-style="italic" fill="var(--dg-accent)">r</text>
  <text x="360" y="90" fill="var(--dg-muted)">Standard form</text>
  <text x="360" y="114" font-weight="bold">(x − h)² + (y − k)² = r²</text>
  <text x="360" y="150">Centre C(h, k) = (3, 2)</text>
  <text x="360" y="172">Radius r = 2</text>
  <text x="360" y="198" font-weight="bold">(x − 3)² + (y − 2)² = 4</text>
  <text x="360" y="232" fill="var(--dg-muted)">Centre at O: x² + y² = r²</text>
</svg>`,
    },
    {
      title: "Parabola y² = 12x",
      caption: "For y² = 4ax with a = 3: focus F(3, 0), directrix x = −3, vertex at the origin. The latus rectum is the chord through the focus perpendicular to the axis, of length 4a = 12. Every point is as far from F as from the directrix (LF = LM = 6).",
      svg: `<svg viewBox="0 0 560 405" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="41.6" y1="200" x2="317.2" y2="200" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <line x1="130" y1="387.2" x2="130" y2="12.8" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <text x="323.2" y="204" font-style="italic">x</text>
  <text x="138" y="16.8" font-style="italic">y</text>
  <line x1="52" y1="12.8" x2="52" y2="387.2" stroke="var(--dg-muted)" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="60" y="300" fill="var(--dg-muted)">directrix</text>
  <text x="60" y="317" fill="var(--dg-muted)">x = −3</text>
  <polyline points="224.4,371.6 213.3,361.2 202.9,350.8 193.2,340.4 184.2,330 175.8,319.6 168.2,309.2 161.3,298.8 155,288.4 149.5,278 144.6,267.6 140.5,257.2 137,246.8 134.2,236.4 132.2,226 130.8,215.6 130.1,205.2 130.1,194.8 130.8,184.4 132.2,174 134.2,163.6 137,153.2 140.5,142.8 144.6,132.4 149.5,122 155,111.6 161.3,101.2 168.2,90.8 175.8,80.4 184.2,70 193.2,59.6 202.9,49.2 213.3,38.8 224.4,28.4" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <line x1="208" y1="44" x2="208" y2="356" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="208" y1="44" x2="52" y2="44" stroke="var(--dg-accent)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <circle cx="208" cy="44" r="3.5" fill="currentColor"/>
  <circle cx="208" cy="356" r="3.5" fill="currentColor"/>
  <circle cx="208" cy="200" r="4" fill="var(--dg-accent)"/>
  <circle cx="52" cy="44" r="3" fill="currentColor"/>
  <circle cx="130" cy="200" r="3.5" fill="currentColor"/>
  <text x="218" y="62">L(3, 6)</text>
  <text x="218" y="346">L′(3, −6)</text>
  <text x="214" y="218">F(3, 0)</text>
  <text x="124" y="218" text-anchor="end">V(0, 0)</text>
  <text x="60" y="36">M(−3, 6)</text>
  <text x="175" y="36" text-anchor="middle" fill="var(--dg-accent)">LM = 6</text>
  <text x="216" y="166" fill="var(--dg-accent)">LF = 6</text>
  <text x="218" y="270" fill="var(--dg-accent)">latus rectum</text>
  <text x="218" y="287" fill="var(--dg-accent)">LL′ = 4a = 12</text>
  <text x="295" y="192" text-anchor="end" fill="var(--dg-muted)">axis</text>
  <text x="370" y="90" font-weight="bold">y² = 12x  (y² = 4ax, a = 3)</text>
  <text x="370" y="120">Vertex V  (0, 0)</text>
  <text x="370" y="144">Focus F(a, 0)  = (3, 0)</text>
  <text x="370" y="168">Directrix  x = −a = −3</text>
  <text x="370" y="192">Latus rectum  4a = 12</text>
  <text x="370" y="216">Eccentricity  e = 1</text>
</svg>`,
    },
    {
      title: "Ellipse x²/25 + y²/9 = 1",
      caption: "Here a = 5, b = 3 and c = √(a² − b²) = 4. The foci F′(−4, 0) and F(4, 0) lie on the major axis; the vertices are (±5, 0). The latus rectum passes through a focus, and the directrices are the lines x = ±a/e = ±25/4.",
      svg: `<svg viewBox="0 0 560 335" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="64" y1="140" x2="496" y2="140" stroke="var(--dg-muted)" stroke-width="1.2" marker-end="url(#ar-m11b-4)"/>
  <line x1="280" y1="266" x2="280" y2="14" stroke="var(--dg-muted)" stroke-width="1.2" marker-end="url(#ar-m11b-4)"/>
  <ellipse cx="280" cy="140" rx="150" ry="90" fill="var(--dg-fill)" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>
  <line x1="92.5" y1="29" x2="92.5" y2="251" stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="467.5" y1="29" x2="467.5" y2="251" stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="97.5" y="36" font-size="12" fill="var(--dg-muted)">directrix</text>
  <text x="97.5" y="51" font-size="12" fill="var(--dg-muted)">x = −25/4</text>
  <text x="462.5" y="36" text-anchor="end" font-size="12" fill="var(--dg-muted)">directrix</text>
  <text x="462.5" y="51" text-anchor="end" font-size="12" fill="var(--dg-muted)">x = 25/4</text>
  <line x1="160" y1="86" x2="160" y2="194" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="400" y1="86" x2="400" y2="194" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="408" y="94" font-size="12" fill="var(--dg-accent)">latus</text>
  <text x="408" y="108" font-size="12" fill="var(--dg-accent)">rectum</text>
  <circle cx="130" cy="140" r="3.2" fill="currentColor"/>
  <circle cx="430" cy="140" r="3.2" fill="currentColor"/>
  <circle cx="280" cy="50" r="3.2" fill="currentColor"/>
  <circle cx="280" cy="230" r="3.2" fill="currentColor"/>
  <circle cx="160" cy="140" r="3.2" fill="var(--dg-accent)"/>
  <circle cx="400" cy="140" r="3.2" fill="var(--dg-accent)"/>
  <circle cx="280" cy="140" r="3.2" fill="currentColor"/>
  <text x="123" y="132" text-anchor="end">A′</text>
  <text x="437" y="132">A</text>
  <text x="167" y="157" fill="var(--dg-accent)">F′</text>
  <text x="393" y="157" text-anchor="end" fill="var(--dg-accent)">F</text>
  <text x="288" y="43">B</text>
  <text x="288" y="246">B′</text>
  <text x="274" y="156" text-anchor="end" font-style="italic">O</text>
  <text x="280" y="272" text-anchor="middle">a = 5, b = 3, c = √(a² − b²) = 4, e = c/a = 4/5; A′, A = (±5, 0); F′, F = (±4, 0); B, B′ = (0, ±3)</text>
  <text x="280" y="292" text-anchor="middle">Major axis 2a = 10, minor axis 2b = 6, latus rectum 2b²/a = 18/5</text>
  <text x="280" y="312" text-anchor="middle">Directrices x = ±a/e = ±25/4</text>
</svg>`,
    },
    {
      title: "Hyperbola x²/16 − y²/9 = 1",
      caption: "Here a = 4, b = 3 and c = √(a² + b²) = 5. The foci are (±5, 0), the vertices (±4, 0), and the branches approach the asymptotes y = ±(3/4)x. The directrices are x = ±a/e = ±16/5.",
      svg: `<svg viewBox="0 0 560 365" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="67.2" y1="150" x2="492.8" y2="150" stroke="var(--dg-muted)" stroke-width="1.2" marker-end="url(#ar-m11b-5)"/>
  <line x1="280" y1="295.6" x2="280" y2="4.4" stroke="var(--dg-muted)" stroke-width="1.2" marker-end="url(#ar-m11b-5)"/>
  <rect x="168" y="66" width="224" height="168" fill="none" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="100.8" y1="284.4" x2="459.2" y2="15.6" stroke="var(--dg-muted)" stroke-width="1.4"/>
  <line x1="100.8" y1="15.6" x2="459.2" y2="284.4" stroke="var(--dg-muted)" stroke-width="1.4"/>
  <text x="463.2" y="23.6" font-size="12" fill="var(--dg-muted)">y = (3/4)x</text>
  <text x="463.2" y="288.4" font-size="12" fill="var(--dg-muted)">y = −(3/4)x</text>
  <line x1="190.4" y1="49.2" x2="190.4" y2="250.8" stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="369.6" y1="49.2" x2="369.6" y2="250.8" stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="190.4" y="40" text-anchor="middle" font-size="12" fill="var(--dg-muted)">x = −16/5</text>
  <text x="369.6" y="40" text-anchor="middle" font-size="12" fill="var(--dg-muted)">x = 16/5</text>
  <polyline points="474.6,269.3 459.6,255.3 446.5,242.4 435,230.3 425,219.1 416.5,208.5 409.4,198.6 403.5,189.1 398.9,180 395.5,171.2 393.3,162.6 392.1,154.2 392.1,145.8 393.3,137.4 395.5,128.8 398.9,120 403.5,110.9 409.4,101.4 416.5,91.5 425,80.9 435,69.7 446.5,57.6 459.6,44.7 474.6,30.7" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <polyline points="85.4,269.3 100.4,255.3 113.5,242.4 125,230.3 135,219.1 143.5,208.5 150.6,198.6 156.5,189.1 161.1,180 164.5,171.2 166.7,162.6 167.9,154.2 167.9,145.8 166.7,137.4 164.5,128.8 161.1,120 156.5,110.9 150.6,101.4 143.5,91.5 135,80.9 125,69.7 113.5,57.6 100.4,44.7 85.4,30.7" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <line x1="140" y1="87" x2="140" y2="213" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <line x1="420" y1="87" x2="420" y2="213" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="428" y="190" font-size="12" fill="var(--dg-accent)">latus rectum</text>
  <circle cx="168" cy="150" r="3.2" fill="currentColor"/>
  <circle cx="392" cy="150" r="3.2" fill="currentColor"/>
  <circle cx="280" cy="150" r="3.2" fill="currentColor"/>
  <circle cx="140" cy="150" r="3.5" fill="var(--dg-accent)"/>
  <circle cx="420" cy="150" r="3.5" fill="var(--dg-accent)"/>
  <text x="162" y="142" text-anchor="end">A′</text>
  <text x="398" y="142">A</text>
  <text x="134" y="142" text-anchor="end" fill="var(--dg-accent)">F′</text>
  <text x="426" y="142" fill="var(--dg-accent)">F</text>
  <text x="286" y="166" font-style="italic">O</text>
  <text x="280" y="318" text-anchor="middle" font-size="12">a = 4, b = 3, c = √(a² + b²) = 5, e = c/a = 5/4; vertices A′, A = (±4, 0); foci F′, F = (±5, 0)</text>
  <text x="280" y="338" text-anchor="middle">Transverse axis 2a = 8, conjugate axis 2b = 6, latus rectum 2b²/a = 9/2</text>
  <text x="280" y="358" text-anchor="middle">Directrices x = ±a/e = ±16/5&#160;&#160;&#160;&#160;&#160;Asymptotes y = ±(3/4)x</text>
</svg>`,
    },
  ],
  "introduction-to-three-dimensional-geometry": [
    {
      title: "Coordinate axes and a point in space",
      caption: "Three mutually perpendicular axes meet at the origin O. A point P(x, y, z) is located by its distances from the three coordinate planes: here P(2, 3, 6), and OP = √(x² + y² + z²) = 7.",
      svg: `<svg viewBox="0 0 560 385" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="164" y1="268" x2="260" y2="268" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="286" y1="250" x2="260" y2="268" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="190" y1="82" x2="164" y2="100" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="190" y1="82" x2="286" y2="82" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="164" y1="100" x2="260" y2="100" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="286" y1="82" x2="260" y2="100" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="164" y1="268" x2="164" y2="100" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="286" y1="250" x2="286" y2="82" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="260" y1="268" x2="260" y2="100" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="190" y1="250" x2="260" y2="268" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="190" y1="250" x2="125" y2="295" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-1)"/>
  <line x1="190" y1="250" x2="398" y2="250" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-1)"/>
  <line x1="190" y1="250" x2="190" y2="54" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-1)"/>
  <line x1="190" y1="250" x2="209.5" y2="236.5" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="190" y1="250" x2="126" y2="250" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="190" y1="250" x2="190" y2="292" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <line x1="190" y1="250" x2="260" y2="100" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="260" cy="100" r="4" fill="var(--dg-accent)"/>
  <circle cx="164" cy="268" r="3" fill="currentColor"/>
  <circle cx="286" cy="250" r="3" fill="currentColor"/>
  <circle cx="190" cy="82" r="3" fill="currentColor"/>
  <circle cx="190" cy="250" r="3" fill="currentColor"/>
  <text x="111" y="309" font-style="italic">X</text>
  <text x="406" y="254" font-style="italic">Y</text>
  <text x="186" y="46" font-style="italic">Z</text>
  <text x="213.5" y="234.5" font-style="italic">X′</text>
  <text x="104" y="254" font-style="italic">Y′</text>
  <text x="196" y="304" font-style="italic">Z′</text>
  <text x="198" y="266" font-style="italic">O</text>
  <text x="294" y="98" font-weight="bold" fill="var(--dg-accent)">P(2, 3, 6)</text>
  <text x="172" y="284">A</text>
  <text x="291" y="242">B</text>
  <text x="182" y="74" text-anchor="end">C</text>
  <text x="215" y="192" text-anchor="end" font-style="italic" fill="var(--dg-accent)">OP</text>
  <text x="280" y="335" text-anchor="middle" font-size="12">A, B, C (the feet of the perpendiculars on the axes) are (2, 0, 0), (0, 3, 0) and (0, 0, 6)</text>
  <text x="280" y="355" text-anchor="middle" font-size="12">x = 2, y = 3, z = 6 are the distances of P from the YZ-, ZX- and XY-planes</text>
  <text x="280" y="375" text-anchor="middle" font-weight="bold">OP = √(x² + y² + z²) = √(4 + 9 + 36) = 7</text>
</svg>`,
    },
    {
      title: "The eight octants",
      caption: "The three coordinate planes divide space into eight octants. The octant of a point is found from the signs of its coordinates: for example (−2, 3, −5) lies in octant VI.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="30" y1="20" x2="530" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="40" text-anchor="middle" font-weight="bold">Octant</text>
  <text x="215" y="40" text-anchor="middle" font-weight="bold">Region</text>
  <text x="340" y="40" text-anchor="middle" font-weight="bold">x</text>
  <text x="410" y="40" text-anchor="middle" font-weight="bold">y</text>
  <text x="480" y="40" text-anchor="middle" font-weight="bold">z</text>
  <line x1="30" y1="52" x2="530" y2="52" stroke="currentColor" stroke-width="1.2"/>
  <text x="90" y="76" text-anchor="middle">I</text>
  <text x="215" y="76" text-anchor="middle">XOYZ</text>
  <text x="340" y="76" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="410" y="76" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="480" y="76" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <line x1="30" y1="87" x2="530" y2="87" stroke="var(--dg-muted)" stroke-width="0.6"/>
  <text x="90" y="104" text-anchor="middle">II</text>
  <text x="215" y="104" text-anchor="middle">X′OYZ</text>
  <text x="340" y="104" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="410" y="104" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="480" y="104" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <line x1="30" y1="115" x2="530" y2="115" stroke="var(--dg-muted)" stroke-width="0.6"/>
  <text x="90" y="132" text-anchor="middle">III</text>
  <text x="215" y="132" text-anchor="middle">X′OY′Z</text>
  <text x="340" y="132" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="410" y="132" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="480" y="132" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <line x1="30" y1="143" x2="530" y2="143" stroke="var(--dg-muted)" stroke-width="0.6"/>
  <text x="90" y="160" text-anchor="middle">IV</text>
  <text x="215" y="160" text-anchor="middle">XOY′Z</text>
  <text x="340" y="160" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="410" y="160" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="480" y="160" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <line x1="30" y1="171" x2="530" y2="171" stroke="var(--dg-muted)" stroke-width="0.6"/>
  <text x="90" y="188" text-anchor="middle">V</text>
  <text x="215" y="188" text-anchor="middle">XOYZ′</text>
  <text x="340" y="188" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="410" y="188" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="480" y="188" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <line x1="30" y1="199" x2="530" y2="199" stroke="var(--dg-muted)" stroke-width="0.6"/>
  <text x="90" y="216" text-anchor="middle">VI</text>
  <text x="215" y="216" text-anchor="middle">X′OYZ′</text>
  <text x="340" y="216" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="410" y="216" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="480" y="216" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <line x1="30" y1="227" x2="530" y2="227" stroke="var(--dg-muted)" stroke-width="0.6"/>
  <text x="90" y="244" text-anchor="middle">VII</text>
  <text x="215" y="244" text-anchor="middle">X′OY′Z′</text>
  <text x="340" y="244" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="410" y="244" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="480" y="244" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <line x1="30" y1="255" x2="530" y2="255" stroke="var(--dg-muted)" stroke-width="0.6"/>
  <text x="90" y="272" text-anchor="middle">VIII</text>
  <text x="215" y="272" text-anchor="middle">XOY′Z′</text>
  <text x="340" y="272" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">+</text>
  <text x="410" y="272" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <text x="480" y="272" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">−</text>
  <line x1="30" y1="283" x2="530" y2="283" stroke="currentColor" stroke-width="1.5"/>
</svg>`,
    },
  ],
  "limits-and-derivatives": [
    {
      title: "Derivative as the limit of secants",
      caption: "For f(x) = x², the secant through P(1, 1) and Q(1 + h, f(1 + h)) has slope 2 + h. As h → 0, Q slides along the curve towards P and the secant turns into the tangent at P, whose slope is the derivative f′(1) = 2.",
      svg: `<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="50" y1="340" x2="210" y2="340" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <line x1="60" y1="355" x2="60" y2="25" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-3)"/>
  <text x="216" y="344" font-style="italic">x</text>
  <text x="68" y="29" font-style="italic">y</text>
  <text x="48" y="355" font-style="italic">O</text>
  <polyline points="60,340 65,339.5 70,338 75,335.5 80,332 85,327.5 90,322 95,315.5 100,308 105,299.5 110,290 115,279.5 120,268 125,255.5 130,242 135,227.5 140,212 145,195.5 150,178 155,159.5 160,140 165,119.5 170,98 175,75.5 180,52" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <line x1="97.5" y1="327.5" x2="167.5" y2="117.5" stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="97.5" y1="321.3" x2="145" y2="202.5" stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="97.5" y1="317.5" x2="132.5" y2="240.5" stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="85" y1="340" x2="175" y2="160" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <text x="180" y="164" fill="var(--dg-accent)">tangent</text>
  <circle cx="160" cy="140" r="3.5" fill="currentColor"/>
  <text x="153" y="134" text-anchor="end">Q₁</text>
  <circle cx="135" cy="227.5" r="3.5" fill="currentColor"/>
  <text x="128" y="221.5" text-anchor="end">Q₂</text>
  <circle cx="120" cy="268" r="3.5" fill="currentColor"/>
  <text x="113" y="262" text-anchor="end">Q₃</text>
  <circle cx="110" cy="290" r="4.5" fill="var(--dg-accent)"/>
  <text x="118" y="308" font-weight="bold" fill="var(--dg-accent)">P(1, 1)</text>
  <text x="110" y="357" text-anchor="middle">1</text>
  <text x="160" y="357" text-anchor="middle" font-size="12">1 + h</text>
  <text x="255" y="60" font-weight="bold">f(x) = x²,  P(1, 1)</text>
  <text x="255" y="84" fill="var(--dg-muted)">Secant through P and Q(1 + h, f(1 + h)):</text>
  <text x="255" y="108">slope = [f(1 + h) − f(1)] / h = 2 + h</text>
  <text x="255" y="132">Q₁: h = 1, slope 3</text>
  <text x="255" y="156">Q₂: h = 0.5, slope 2.5</text>
  <text x="255" y="180">Q₃: h = 0.2, slope 2.2</text>
  <text x="255" y="204" fill="var(--dg-muted)">As h → 0, Q slides along the curve to P</text>
  <text x="255" y="228" fill="var(--dg-muted)">and the secant becomes the tangent:</text>
  <text x="255" y="252" font-weight="bold">f′(1) = lim (h → 0) (2 + h) = 2</text>
</svg>`,
    },
  ],
  "statistics": [
    {
      title: "Histogram of a grouped frequency table",
      caption: "Each bar's width is its class interval and its height is the frequency. With class marks 5, 15, 25, 35, 45 and frequencies 5, 8, 15, 16, 6 (N = 50), the mean is x̄ = Σfx/N = 1350/50 = 27, shown by the dashed line.",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="70" y1="260" x2="502" y2="260" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-4)"/>
  <line x1="70" y1="260" x2="70" y2="26" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-4)"/>
  <text x="508" y="264" font-size="12" font-style="italic">marks</text>
  <text x="64" y="18" text-anchor="middle" font-size="12" font-style="italic">frequency</text>
  <line x1="66" y1="260" x2="70" y2="260" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="264" text-anchor="end" font-size="12">0</text>
  <line x1="66" y1="212" x2="70" y2="212" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="216" text-anchor="end" font-size="12">4</text>
  <line x1="70" y1="212" x2="470" y2="212" stroke="var(--dg-muted)" stroke-width="0.5" stroke-dasharray="2 4"/>
  <line x1="66" y1="164" x2="70" y2="164" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="168" text-anchor="end" font-size="12">8</text>
  <line x1="70" y1="164" x2="470" y2="164" stroke="var(--dg-muted)" stroke-width="0.5" stroke-dasharray="2 4"/>
  <line x1="66" y1="116" x2="70" y2="116" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="120" text-anchor="end" font-size="12">12</text>
  <line x1="70" y1="116" x2="470" y2="116" stroke="var(--dg-muted)" stroke-width="0.5" stroke-dasharray="2 4"/>
  <line x1="66" y1="68" x2="70" y2="68" stroke="currentColor" stroke-width="1"/>
  <text x="62" y="72" text-anchor="end" font-size="12">16</text>
  <line x1="70" y1="68" x2="470" y2="68" stroke="var(--dg-muted)" stroke-width="0.5" stroke-dasharray="2 4"/>
  <rect x="70" y="200" width="80" height="60" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/>
  <text x="110" y="218" text-anchor="middle" font-weight="bold">5</text>
  <rect x="150" y="164" width="80" height="96" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/>
  <text x="190" y="182" text-anchor="middle" font-weight="bold">8</text>
  <rect x="230" y="80" width="80" height="180" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/>
  <text x="270" y="98" text-anchor="middle" font-weight="bold">15</text>
  <rect x="310" y="68" width="80" height="192" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/>
  <text x="350" y="86" text-anchor="middle" font-weight="bold">16</text>
  <rect x="390" y="188" width="80" height="72" fill="var(--dg-fill)" fill-opacity="0.8" stroke="currentColor" stroke-width="1.5"/>
  <text x="430" y="206" text-anchor="middle" font-weight="bold">6</text>
  <text x="70" y="277" text-anchor="middle" font-size="12">0</text>
  <text x="150" y="277" text-anchor="middle" font-size="12">10</text>
  <text x="230" y="277" text-anchor="middle" font-size="12">20</text>
  <text x="310" y="277" text-anchor="middle" font-size="12">30</text>
  <text x="390" y="277" text-anchor="middle" font-size="12">40</text>
  <text x="470" y="277" text-anchor="middle" font-size="12">50</text>
  <line x1="286" y1="260" x2="286" y2="32" stroke="var(--dg-accent)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="286" y="26" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">mean x̄ = 27</text>
  <text x="280" y="306" text-anchor="middle" font-size="12">class marks 5, 15, 25, 35, 45;  x̄ = Σfx / N = (25 + 120 + 375 + 560 + 270) / 50 = 27</text>
</svg>`,
    },
    {
      title: "Mean deviation about the mean",
      caption: "For the data 3, 5, 9, 12, 16 the mean is 9. Each coloured bar is the distance |xᵢ − x̄| of a value from the mean, and the mean deviation is the average of these distances.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="44" y1="225" x2="531" y2="225" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar-m11b-5)"/>
  <line x1="50" y1="221" x2="50" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="50" y="245" text-anchor="middle" font-size="12">0</text>
  <line x1="128" y1="221" x2="128" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="128" y="245" text-anchor="middle" font-size="12">3</text>
  <line x1="206" y1="221" x2="206" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="206" y="245" text-anchor="middle" font-size="12">6</text>
  <line x1="284" y1="221" x2="284" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="284" y="245" text-anchor="middle" font-size="12">9</text>
  <line x1="362" y1="221" x2="362" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="362" y="245" text-anchor="middle" font-size="12">12</text>
  <line x1="440" y1="221" x2="440" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="440" y="245" text-anchor="middle" font-size="12">15</text>
  <line x1="518" y1="221" x2="518" y2="229" stroke="currentColor" stroke-width="1"/>
  <text x="518" y="245" text-anchor="middle" font-size="12">18</text>
  <line x1="284" y1="28" x2="284" y2="225" stroke="var(--dg-accent)" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="284" y="20" text-anchor="middle" font-weight="bold" fill="var(--dg-accent)">mean x̄ = 9</text>
  <line x1="128" y1="55" x2="128" y2="225" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="128" y1="55" x2="284" y2="55" stroke="var(--dg-accent)" stroke-width="3"/>
  <circle cx="128" cy="55" r="4" fill="currentColor"/>
  <circle cx="128" cy="225" r="4" fill="currentColor"/>
  <text x="120" y="59" text-anchor="end" font-size="12">|3 − 9| = 6</text>
  <line x1="180" y1="87" x2="180" y2="225" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="180" y1="87" x2="284" y2="87" stroke="var(--dg-accent)" stroke-width="3"/>
  <circle cx="180" cy="87" r="4" fill="currentColor"/>
  <circle cx="180" cy="225" r="4" fill="currentColor"/>
  <text x="172" y="91" text-anchor="end" font-size="12">|5 − 9| = 4</text>
  <line x1="284" y1="119" x2="284" y2="225" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="2 4"/>
  <circle cx="284" cy="119" r="4" fill="currentColor"/>
  <circle cx="284" cy="225" r="4" fill="currentColor"/>
  <text x="292" y="123" text-anchor="start" font-size="12">|9 − 9| = 0</text>
  <line x1="362" y1="151" x2="362" y2="225" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="362" y1="151" x2="284" y2="151" stroke="var(--dg-accent)" stroke-width="3"/>
  <circle cx="362" cy="151" r="4" fill="currentColor"/>
  <circle cx="362" cy="225" r="4" fill="currentColor"/>
  <text x="370" y="155" text-anchor="start" font-size="12">|12 − 9| = 3</text>
  <line x1="466" y1="183" x2="466" y2="225" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="2 4"/>
  <line x1="466" y1="183" x2="284" y2="183" stroke="var(--dg-accent)" stroke-width="3"/>
  <circle cx="466" cy="183" r="4" fill="currentColor"/>
  <circle cx="466" cy="225" r="4" fill="currentColor"/>
  <text x="474" y="187" text-anchor="start" font-size="12">|16 − 9| = 7</text>
  <text x="280" y="268" text-anchor="middle">Σ|xᵢ − x̄| = 6 + 4 + 0 + 3 + 7 = 20</text>
  <text x="280" y="290" text-anchor="middle" font-weight="bold">M.D. = Σ|xᵢ − x̄| / n = 20 / 5 = 4</text>
</svg>`,
    },
  ],
  "probability": [
    {
      title: "Sample space for two dice",
      caption: "Rolling two dice gives 6 × 6 = 36 equally likely outcomes. The shaded outcomes are the event A: the sum is 7, with n(A) = 6, so P(A) = 6/36 = 1/6.",
      svg: `<svg viewBox="0 0 560 335" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="222" y="22" text-anchor="middle" font-size="12" fill="var(--dg-muted)">Number on the first die</text>
  <text x="40" y="184" text-anchor="middle" font-size="12" fill="var(--dg-muted)">2nd die</text>
  <text x="112" y="44" text-anchor="middle" font-weight="bold">1</text>
  <text x="80" y="79" text-anchor="end" font-weight="bold">1</text>
  <text x="156" y="44" text-anchor="middle" font-weight="bold">2</text>
  <text x="80" y="123" text-anchor="end" font-weight="bold">2</text>
  <text x="200" y="44" text-anchor="middle" font-weight="bold">3</text>
  <text x="80" y="167" text-anchor="end" font-weight="bold">3</text>
  <text x="244" y="44" text-anchor="middle" font-weight="bold">4</text>
  <text x="80" y="211" text-anchor="end" font-weight="bold">4</text>
  <text x="288" y="44" text-anchor="middle" font-weight="bold">5</text>
  <text x="80" y="255" text-anchor="end" font-weight="bold">5</text>
  <text x="332" y="44" text-anchor="middle" font-weight="bold">6</text>
  <text x="80" y="299" text-anchor="end" font-weight="bold">6</text>
  <rect x="90" y="52" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="112" y="78" text-anchor="middle" font-size="12">1,1</text>
  <rect x="134" y="52" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="156" y="78" text-anchor="middle" font-size="12">2,1</text>
  <rect x="178" y="52" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="200" y="78" text-anchor="middle" font-size="12">3,1</text>
  <rect x="222" y="52" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="244" y="78" text-anchor="middle" font-size="12">4,1</text>
  <rect x="266" y="52" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="288" y="78" text-anchor="middle" font-size="12">5,1</text>
  <rect x="310" y="52" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="332" y="78" text-anchor="middle" font-size="12" font-weight="bold">6,1</text>
  <rect x="90" y="96" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="112" y="122" text-anchor="middle" font-size="12">1,2</text>
  <rect x="134" y="96" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="156" y="122" text-anchor="middle" font-size="12">2,2</text>
  <rect x="178" y="96" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="200" y="122" text-anchor="middle" font-size="12">3,2</text>
  <rect x="222" y="96" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="244" y="122" text-anchor="middle" font-size="12">4,2</text>
  <rect x="266" y="96" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="288" y="122" text-anchor="middle" font-size="12" font-weight="bold">5,2</text>
  <rect x="310" y="96" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="332" y="122" text-anchor="middle" font-size="12">6,2</text>
  <rect x="90" y="140" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="112" y="166" text-anchor="middle" font-size="12">1,3</text>
  <rect x="134" y="140" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="156" y="166" text-anchor="middle" font-size="12">2,3</text>
  <rect x="178" y="140" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="200" y="166" text-anchor="middle" font-size="12">3,3</text>
  <rect x="222" y="140" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="244" y="166" text-anchor="middle" font-size="12" font-weight="bold">4,3</text>
  <rect x="266" y="140" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="288" y="166" text-anchor="middle" font-size="12">5,3</text>
  <rect x="310" y="140" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="332" y="166" text-anchor="middle" font-size="12">6,3</text>
  <rect x="90" y="184" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="112" y="210" text-anchor="middle" font-size="12">1,4</text>
  <rect x="134" y="184" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="156" y="210" text-anchor="middle" font-size="12">2,4</text>
  <rect x="178" y="184" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="200" y="210" text-anchor="middle" font-size="12" font-weight="bold">3,4</text>
  <rect x="222" y="184" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="244" y="210" text-anchor="middle" font-size="12">4,4</text>
  <rect x="266" y="184" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="288" y="210" text-anchor="middle" font-size="12">5,4</text>
  <rect x="310" y="184" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="332" y="210" text-anchor="middle" font-size="12">6,4</text>
  <rect x="90" y="228" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="112" y="254" text-anchor="middle" font-size="12">1,5</text>
  <rect x="134" y="228" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="156" y="254" text-anchor="middle" font-size="12" font-weight="bold">2,5</text>
  <rect x="178" y="228" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="200" y="254" text-anchor="middle" font-size="12">3,5</text>
  <rect x="222" y="228" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="244" y="254" text-anchor="middle" font-size="12">4,5</text>
  <rect x="266" y="228" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="288" y="254" text-anchor="middle" font-size="12">5,5</text>
  <rect x="310" y="228" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="332" y="254" text-anchor="middle" font-size="12">6,5</text>
  <rect x="90" y="272" width="44" height="44" fill="var(--dg-accent)" fill-opacity="0.3" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="112" y="298" text-anchor="middle" font-size="12" font-weight="bold">1,6</text>
  <rect x="134" y="272" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="156" y="298" text-anchor="middle" font-size="12">2,6</text>
  <rect x="178" y="272" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="200" y="298" text-anchor="middle" font-size="12">3,6</text>
  <rect x="222" y="272" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="244" y="298" text-anchor="middle" font-size="12">4,6</text>
  <rect x="266" y="272" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="288" y="298" text-anchor="middle" font-size="12">5,6</text>
  <rect x="310" y="272" width="44" height="44" fill="none" stroke="var(--dg-muted)" stroke-width="1"/>
  <text x="332" y="298" text-anchor="middle" font-size="12">6,6</text>
  <text x="365" y="90" font-weight="bold">Sample space S</text>
  <text x="365" y="112">n(S) = 36 outcomes</text>
  <text x="365" y="148" font-weight="bold" fill="var(--dg-accent)">Event A: sum = 7</text>
  <text x="365" y="170">A = {(1,6), (2,5), (3,4),</text>
  <text x="365" y="188">(4,3), (5,2), (6,1)}</text>
  <text x="365" y="212">n(A) = 6</text>
  <text x="365" y="244" font-weight="bold">P(A) = n(A) / n(S) = 6/36 = 1/6</text>
</svg>`,
    },
    {
      title: "Venn diagrams for events",
      caption: "**Left:** for events A and B, P(A ∪ B) = P(A) + P(B) − P(A ∩ B). **Right:** mutually exclusive events cannot happen together, A ∩ B = ∅, so P(A ∪ B) = P(A) + P(B). The numbers in the regions are probabilities, and the whole rectangle (the sample space) has probability 1.",
      svg: `<svg viewBox="0 0 560 265" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-m11b-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="aa-m11b-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="15" y="25" width="250" height="175" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="25" y="43" font-style="italic">S</text>
  <circle cx="105" cy="112" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="195" cy="112" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path d="M 150 72.3 A 60 60 0 0 1 150 151.7 A 60 60 0 0 1 150 72.3 Z" fill="var(--dg-accent)" fill-opacity="0.3" stroke="none"/>
  <text x="58" y="56" font-size="15" font-style="italic">A</text>
  <text x="242" y="56" font-size="15" font-style="italic">B</text>
  <text x="72" y="117" text-anchor="middle">0.3</text>
  <text x="150" y="117" text-anchor="middle" font-weight="bold">0.2</text>
  <text x="228" y="117" text-anchor="middle">0.4</text>
  <text x="240" y="190" text-anchor="middle">0.1</text>
  <text x="140" y="222" text-anchor="middle" font-size="12">P(A) = 0.5, P(B) = 0.6, P(A ∩ B) = 0.2</text>
  <text x="140" y="242" text-anchor="middle" font-size="12" font-weight="bold">P(A ∪ B) = 0.5 + 0.6 − 0.2 = 0.9</text>
  <rect x="295" y="25" width="250" height="175" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="305" y="43" font-style="italic">S</text>
  <circle cx="357" cy="112" r="46" fill="var(--dg-accent)" fill-opacity="0.3" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="463" cy="112" r="46" fill="var(--dg-accent)" fill-opacity="0.3" stroke="currentColor" stroke-width="1.6"/>
  <text x="357" y="56" text-anchor="middle" font-size="15" font-style="italic">A</text>
  <text x="463" y="56" text-anchor="middle" font-size="15" font-style="italic">B</text>
  <text x="357" y="117" text-anchor="middle">0.35</text>
  <text x="463" y="117" text-anchor="middle">0.40</text>
  <text x="520" y="190" text-anchor="middle">0.25</text>
  <text x="420" y="222" text-anchor="middle" font-size="12">A ∩ B = ∅,  P(A) = 0.35, P(B) = 0.40</text>
  <text x="420" y="242" text-anchor="middle" font-size="12" font-weight="bold">P(A ∪ B) = 0.35 + 0.40 = 0.75</text>
</svg>`,
    },
  ],
});
