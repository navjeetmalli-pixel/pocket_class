// Class 4 EVS diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(4, "evs", {
  "roots-stems-and-leaves": [
    {
      title: "Tap root and fibrous root",
      caption: "A **tap root** has one thick main root with smaller side roots (mustard, carrot). A **fibrous root** is a bunch of thin roots of similar size (wheat, grass).",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="20" y="80" width="250" height="170" fill="var(--dg-fill)" opacity="0.6"/><rect x="300" y="80" width="250" height="170" fill="var(--dg-fill)" opacity="0.6"/>
  <line x1="20" y1="80" x2="270" y2="80" stroke="currentColor" stroke-width="1.8"/><line x1="300" y1="80" x2="550" y2="80" stroke="currentColor" stroke-width="1.8"/>
  <g text-anchor="middle" font-weight="bold"><text x="145" y="22">Tap root</text><text x="425" y="22">Fibrous root</text></g>
  <g text-anchor="middle" fill="var(--dg-muted)"><text x="145" y="40">mustard, carrot</text><text x="425" y="40">wheat, grass</text></g>
  <g stroke="currentColor" stroke-width="3"><line x1="145" y1="52" x2="145" y2="80"/><line x1="425" y1="52" x2="425" y2="80"/></g>
  <path d="M138 80 H152 L147 225 H143 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M141 110 Q127 138 103 155"/><path d="M149 110 Q163 138 187 155"/>
    <path d="M143 148 Q131 172 114 190"/><path d="M148 148 Q160 172 177 190"/>
    <path d="M144 185 Q136 200 128 212"/><path d="M147 185 Q155 200 163 212"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M425 80 Q395 115 358 160"/><path d="M425 80 Q405 130 382 190"/><path d="M425 80 Q415 140 402 215"/>
    <path d="M425 80 Q432 150 428 228"/><path d="M425 80 Q445 140 452 215"/><path d="M425 80 Q458 130 468 190"/>
    <path d="M425 80 Q455 115 492 160"/><path d="M425 80 Q432 120 440 175"/>
  </g>
  <g stroke="var(--dg-muted)" stroke-width="1"><line x1="148" y1="215" x2="205" y2="215"/><line x1="105" y1="156" x2="94" y2="156"/></g>
  <text x="211" y="219">Main root</text>
  <text x="90" y="160" text-anchor="end">Side roots</text>
  <text x="26" y="100" fill="var(--dg-muted)">Soil</text>
  <text x="425" y="272" text-anchor="middle">Many thin roots of similar size</text>
</svg>`,
    },
  ],
  "maps-and-directions": [
    {
      title: "Compass rose: the directions",
      caption: "The four main directions are **North, East, South and West**. The sun rises in the **East** and sets in the **West**. Facing North, East is on your right.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g stroke="var(--dg-muted)" stroke-width="1.4" stroke-dasharray="5 4"><line x1="225" y1="95" x2="335" y2="205"/><line x1="335" y1="95" x2="225" y2="205"/></g>
  <polygon points="280,42 293,150 267,150" fill="var(--dg-accent)" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="280,258 293,150 267,150" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="388,150 280,137 280,163" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <polygon points="172,150 280,137 280,163" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="280" cy="150" r="5" fill="currentColor"/>
  <g font-weight="bold" font-size="16" text-anchor="middle"><text x="280" y="32">N</text><text x="280" y="280">S</text></g>
  <text x="400" y="156" font-size="16" font-weight="bold">E</text>
  <text x="160" y="156" font-size="16" font-weight="bold" text-anchor="end">W</text>
  <g fill="var(--dg-muted)"><text x="342" y="92">NE</text><text x="342" y="218">SE</text><text x="218" y="92" text-anchor="end">NW</text><text x="218" y="218" text-anchor="end">SW</text></g>
  <text x="400" y="176" fill="var(--dg-muted)">Sunrise</text>
  <text x="160" y="176" fill="var(--dg-muted)" text-anchor="end">Sunset</text>
</svg>`,
    },
  ],
  "our-teeth-and-digestion": [
    {
      title: "Four kinds of teeth",
      caption: "**Incisors** cut, **canines** tear, **premolars** and **molars** grind food. Children have 20 milk teeth; adults have 32 permanent teeth.",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <g transform="translate(-10 0)" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">
    <path d="M75 70 L85 25 L95 70Z"/><path d="M67 70 H103 V118 Q85 124 67 118Z"/>
    <path d="M220 70 L230 22 L240 70Z"/><path d="M212 70 H248 V105 L230 138 L212 105Z"/>
    <path d="M365 70 L375 25 L385 70Z"/><path d="M355 70 H395 V115 L385 105 L375 118 L365 105 L355 115Z"/>
    <path d="M498 70 L508 25 L518 70Z"/><path d="M522 70 L532 25 L542 70Z"/><path d="M490 70 H550 V112 L540 104 L530 116 L520 104 L510 116 L500 104 L490 112Z"/>
  </g>
  <g text-anchor="middle" font-weight="bold"><text x="85" y="170">Incisors</text><text x="230" y="170">Canines</text><text x="375" y="170">Premolars</text><text x="520" y="170">Molars</text></g>
  <g text-anchor="middle" fill="var(--dg-accent)"><text x="85" y="190">cut</text><text x="230" y="190">tear</text><text x="375" y="190">grind</text><text x="520" y="190">grind</text></g>
</svg>`,
    },
  ],
});
