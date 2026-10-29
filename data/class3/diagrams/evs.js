// Class 3 EVS diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(3, "evs", {
  "plants-around-us": [
    {
      title: "Parts of a plant",
      caption: "A plant has **roots** under the soil, a **stem**, **leaves**, **flowers** and **fruits** with seeds. Roots hold the plant and take in water; leaves make food.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="100" y="190" width="360" height="85" fill="var(--dg-fill)" opacity="0.6"/>
  <line x1="100" y1="190" x2="460" y2="190" stroke="currentColor" stroke-width="1.8"/>
  <line x1="280" y1="190" x2="280" y2="68" stroke="currentColor" stroke-width="4"/>
  <path d="M280 145 Q245 100 215 120 Q245 155 280 145Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M280 120 Q315 78 347 96 Q315 130 280 120Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5">
    <ellipse cx="280" cy="40" rx="8" ry="13"/><ellipse cx="280" cy="68" rx="8" ry="13"/>
    <ellipse cx="266" cy="54" rx="13" ry="8"/><ellipse cx="294" cy="54" rx="13" ry="8"/>
  </g>
  <circle cx="280" cy="54" r="6" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.2"/>
  <line x1="280" y1="165" x2="322" y2="170" stroke="currentColor" stroke-width="2"/>
  <circle cx="332" cy="173" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <g fill="none" stroke="currentColor" stroke-width="2.2">
    <path d="M280 190 V255"/><path d="M280 205 Q260 215 245 238"/><path d="M280 205 Q300 215 315 238"/>
    <path d="M280 228 Q265 238 258 256"/><path d="M280 228 Q295 238 302 256"/>
  </g>
  <g stroke="var(--dg-muted)" stroke-width="1"><line x1="301" y1="54" x2="372" y2="54"/><line x1="345" y1="173" x2="372" y2="173"/><line x1="222" y1="119" x2="190" y2="119"/><line x1="277" y1="168" x2="190" y2="168"/><line x1="246" y1="232" x2="190" y2="232"/></g>
  <text x="378" y="58">Flower</text>
  <text x="378" y="177">Fruit (has seeds)</text>
  <text x="184" y="123" text-anchor="end">Leaf</text>
  <text x="184" y="172" text-anchor="end">Stem</text>
  <text x="184" y="236" text-anchor="end">Roots</text>
  <text x="440" y="208" text-anchor="end" fill="var(--dg-muted)">Soil</text>
</svg>`,
    },
  ],
  "food-we-eat": [
    {
      title: "A balanced plate",
      caption: "A healthy meal has **half a plate of vegetables and fruits** (vitamins and minerals), a **quarter of cereals** (energy) and a **quarter of dal, milk or eggs** (growth).",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="280" cy="150" r="130" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <circle cx="280" cy="150" r="118" fill="none" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
  <line x1="280" y1="32" x2="280" y2="268" stroke="currentColor" stroke-width="1.8"/>
  <line x1="280" y1="150" x2="394" y2="150" stroke="currentColor" stroke-width="1.8"/>
  <g text-anchor="middle">
    <text x="215" y="125" font-weight="bold">Vegetables</text><text x="215" y="143" font-weight="bold">and fruits</text>
    <text x="215" y="170" fill="var(--dg-muted)">Vitamins and</text><text x="215" y="187" fill="var(--dg-muted)">minerals</text>
    <text x="340" y="95" font-weight="bold">Cereals</text><text x="340" y="112" fill="var(--dg-muted)">roti, rice</text><text x="340" y="132" fill="var(--dg-accent)">Energy</text>
    <text x="340" y="177" font-weight="bold">Dal, milk,</text><text x="340" y="194" font-weight="bold">eggs</text><text x="340" y="216" fill="var(--dg-accent)">Growth</text>
  </g>
</svg>`,
    },
  ],
  "our-body-and-senses": [
    {
      title: "The five sense organs",
      caption: "Each sense organ sends messages to the brain: **eyes** see, **ears** hear, **nose** smells, **tongue** tastes and **skin** feels touch.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="280" cy="150" r="85" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <ellipse cx="193" cy="150" rx="9" ry="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <ellipse cx="367" cy="150" rx="9" ry="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.6"><ellipse cx="250" cy="130" rx="12" ry="8" fill="none"/><ellipse cx="310" cy="130" rx="12" ry="8" fill="none"/></g>
  <circle cx="250" cy="130" r="4"/><circle cx="310" cy="130" r="4"/>
  <path d="M280 140 L272 168 H288" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M258 192 Q280 206 302 192" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M271 198 Q280 222 289 198Z" fill="var(--dg-accent)" opacity="0.6" stroke="currentColor" stroke-width="1.4"/>
  <g stroke="var(--dg-muted)" stroke-width="1">
    <line x1="238" y1="127" x2="176" y2="90"/><line x1="184" y1="150" x2="170" y2="150"/><line x1="228" y1="180" x2="176" y2="215"/>
    <line x1="284" y1="155" x2="385" y2="100"/><line x1="287" y1="207" x2="380" y2="232"/>
  </g>
  <text x="170" y="86" text-anchor="end">Eyes (see)</text>
  <text x="164" y="154" text-anchor="end">Ears (hear)</text>
  <text x="170" y="219" text-anchor="end">Skin (touch)</text>
  <text x="391" y="100">Nose (smell)</text>
  <text x="386" y="236">Tongue (taste)</text>
</svg>`,
    },
  ],
  "travel-and-transport": [
    {
      title: "Ways of travel",
      caption: "We travel by **land** (bus, car, train, cycle), by **water** (boat, ship, ferry) and by **air** (aeroplane, helicopter).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g fill="none" stroke="var(--dg-muted)" stroke-width="1.2"><rect x="15" y="15" width="165" height="220" rx="10"/><rect x="197" y="15" width="165" height="220" rx="10"/><rect x="379" y="15" width="165" height="220" rx="10"/></g>
  <g text-anchor="middle" font-weight="bold"><text x="97" y="42">By land</text><text x="280" y="42">By water</text><text x="461" y="42">By air</text></g>
  <!-- bus -->
  <rect x="47" y="85" width="100" height="48" rx="6" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g fill="none" stroke="currentColor" stroke-width="1.4"><rect x="55" y="93" width="16" height="15"/><rect x="77" y="93" width="16" height="15"/><rect x="99" y="93" width="16" height="15"/><rect x="121" y="93" width="19" height="15"/></g>
  <circle cx="72" cy="136" r="10" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/><circle cx="122" cy="136" r="10" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <!-- boat -->
  <rect x="274" y="78" width="12" height="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="254" y="94" width="52" height="24" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M225 118 H335 L318 142 H242 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M212 152 q9 -8 18 0 t18 0 t18 0 t18 0 t18 0 t18 0 t18 0" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <!-- aeroplane -->
  <ellipse cx="461" cy="112" rx="52" ry="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M452 118 L478 150 L492 150 L476 118Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M416 108 L406 84 L424 84 L438 104Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g><circle cx="470" cy="108" r="2.5"/><circle cx="482" cy="108" r="2.5"/><circle cx="494" cy="108" r="2.5"/></g>
  <g text-anchor="middle">
    <text x="97" y="190">Bus, car, train,</text><text x="97" y="208">cycle, bullock cart</text>
    <text x="280" y="190">Boat, ship,</text><text x="280" y="208">ferry</text>
    <text x="461" y="190">Aeroplane,</text><text x="461" y="208">helicopter</text>
  </g>
</svg>`,
    },
  ],
});
