// Class 8 Science diagrams. Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(8, "science", {
  "invisible-living-world": [
    {
      title: "Animal cell and plant cell",
      caption: "Both have a **cell membrane, cytoplasm and nucleus**. A plant cell also has a **cell wall**, a large **vacuole** and (in green cells) **chloroplasts** for photosynthesis.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <ellipse cx="125" cy="155" rx="85" ry="68" fill="var(--dg-fill)" stroke="currentColor" stroke-width="2"/>
  <circle cx="125" cy="155" r="24" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="125" cy="155" r="6" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="70" y1="54" x2="70" y2="101"/><line x1="125" y1="268" x2="125" y2="215"/><line x1="40" y1="268" x2="108" y2="172"/></g>
  <text x="70" y="48" text-anchor="middle">Cell membrane</text>
  <text x="125" y="284" text-anchor="middle">Cytoplasm</text>
  <text x="10" y="284">Nucleus</text>
  <text x="125" y="18" text-anchor="middle" font-weight="bold">Animal cell</text>
  <g transform="translate(-30 0)">
  <rect x="285" y="65" width="170" height="180" fill="none" stroke="currentColor" stroke-width="3.5"/>
  <rect x="291" y="71" width="158" height="168" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="340" y="105" width="90" height="100" fill="none" stroke="currentColor" stroke-dasharray="4 3"/>
  <circle cx="316" cy="155" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="316" cy="155" r="4" fill="currentColor"/>
  <g fill="var(--dg-accent)" opacity="0.7" stroke="currentColor"><ellipse cx="335" cy="88" rx="12" ry="6"/><ellipse cx="400" cy="90" rx="12" ry="6"/><ellipse cx="400" cy="222" rx="12" ry="6"/><ellipse cx="335" cy="222" rx="12" ry="6"/></g>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="455" y1="85" x2="478" y2="85"/><line x1="449" y1="115" x2="478" y2="115"/><line x1="445" y1="145" x2="478" y2="145"/><line x1="430" y1="175" x2="478" y2="175"/><line x1="412" y1="222" x2="478" y2="222"/><line x1="316" y1="52" x2="316" y2="141"/></g>
  <text x="482" y="89">Cell wall</text>
  <text x="482" y="119">Cell membrane</text>
  <text x="482" y="149">Cytoplasm</text>
  <text x="482" y="179">Vacuole</text>
  <text x="482" y="226">Chloroplast</text>
  <text x="316" y="46" text-anchor="middle">Nucleus</text>
  <text x="370" y="18" text-anchor="middle" font-weight="bold">Plant cell</text>
  </g>
</svg>`,
    },
  ],
  "electricity-magnetic-and-heating-effects": [
    {
      title: "An electromagnet",
      caption: "A coil of insulated wire wound on a **soft iron core** becomes a magnet while current flows, so it picks up iron pins. Its strength rises with **more turns, more current** and the iron core.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="205" y="184" width="150" height="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M70 60 H200 M260 60 H490 V190 H355"/>
    <path d="M70 60 V108 M70 124 V190 H205"/>
    <path d="M200 60 L252 40"/>
    <path d="M222 190 q7.5 -26 15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0"/>
  </g>
  <circle cx="200" cy="60" r="3" fill="currentColor"/><circle cx="260" cy="60" r="3" fill="currentColor"/>
  <line x1="55" y1="108" x2="85" y2="108" stroke="currentColor" stroke-width="2"/>
  <line x1="62" y1="124" x2="78" y2="124" stroke="currentColor" stroke-width="4"/>
  <text x="95" y="107">+</text><text x="95" y="130">−</text>
  <text x="40" y="150" text-anchor="middle">Cell</text>
  <text x="230" y="28" text-anchor="middle">Switch</text>
  <g stroke="currentColor" stroke-width="1.8"><line x1="250" y1="212" x2="250" y2="236"/><line x1="280" y1="212" x2="280" y2="240"/><line x1="310" y1="212" x2="310" y2="234"/></g>
  <g fill="currentColor"><circle cx="250" cy="238" r="3"/><circle cx="280" cy="242" r="3"/><circle cx="310" cy="236" r="3"/></g>
  <text x="280" y="262" text-anchor="middle" fill="var(--dg-muted)">Iron pins attracted</text>
  <text x="280" y="120" text-anchor="middle">Coil of insulated wire</text>
  <text x="400" y="222" fill="currentColor">Soft iron core</text>
  <line x1="398" y1="218" x2="352" y2="196" stroke="currentColor" stroke-width="1"/>
  <line x1="280" y1="126" x2="280" y2="168" stroke="currentColor" stroke-width="1"/>
</svg>`,
    },
    {
      title: "Electric bell",
      caption: "Pressing the switch sends current through the **electromagnet**, which attracts the **iron armature** so the **hammer strikes the gong**. The movement breaks contact, the magnet switches off, the armature springs back and the cycle repeats, so the bell keeps ringing.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <rect x="213" y="104" width="72" height="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="297" y="88" width="14" height="44" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M215 110 q7.5 -22 15 0 t15 0 t15 0 t15 0"/>
    <path d="M213 110 H190 V240 H235 M245 240 H300 M340 240 H420 V170 H376"/>
    <path d="M285 110 H282 V45 H304"/>
    <path d="M304 45 V170 H312"/>
    <path d="M304 70 H453"/>
    <path d="M300 240 L336 222"/>
    <path d="M452 38 Q494 70 452 102" stroke-width="3"/>
  </g>
  <line x1="312" y1="170" x2="376" y2="170" stroke="currentColor" stroke-width="3"/>
  <circle cx="458" cy="70" r="6" fill="currentColor"/>
  <circle cx="300" cy="240" r="3" fill="currentColor"/><circle cx="340" cy="240" r="3" fill="currentColor"/>
  <line x1="235" y1="228" x2="235" y2="252" stroke="currentColor" stroke-width="2"/>
  <line x1="245" y1="234" x2="245" y2="246" stroke="currentColor" stroke-width="4"/>
  <path d="M296 40 H312 M298 34 L304 40 M304 34 L310 40" stroke="currentColor" fill="none"/>
  <text x="240" y="272" text-anchor="middle">Battery</text>
  <text x="330" y="262" text-anchor="middle">Switch</text>
  <text x="240" y="146" text-anchor="middle">Electromagnet</text>
  <text x="326" y="112">Iron armature</text>
  <text x="372" y="60" text-anchor="middle">Hammer</text>
  <text x="482" y="74">Gong</text>
  <text x="345" y="194" text-anchor="middle">Contact screw</text>
  <text x="304" y="26" text-anchor="middle">Fixed end</text>
</svg>`,
    },
  ],
  "exploring-forces": [
    {
      title: "Balanced and unbalanced forces",
      caption: "**Balanced forces** are equal and opposite, so the net force is zero and the motion does not change. **Unbalanced forces** give a net force in the direction of the larger force, equal to their difference.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c8-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="140" y="24" text-anchor="middle" font-weight="bold">Balanced</text>
  <rect x="100" y="80" width="80" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="var(--dg-accent)" stroke-width="3"><line x1="98" y1="110" x2="30" y2="110" marker-end="url(#ar-c8-1)"/><line x1="182" y1="110" x2="250" y2="110" marker-end="url(#ar-c8-1)"/></g>
  <text x="62" y="98" text-anchor="middle">10 N</text><text x="218" y="98" text-anchor="middle">10 N</text>
  <line x1="20" y1="140" x2="260" y2="140" stroke="currentColor"/>
  <text x="140" y="190" text-anchor="middle">Net force = 0</text>
  <text x="140" y="208" text-anchor="middle" fill="var(--dg-muted)">no change in motion</text>
  <line x1="280" y1="20" x2="280" y2="215" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="420" y="24" text-anchor="middle" font-weight="bold">Unbalanced</text>
  <rect x="380" y="80" width="80" height="60" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="var(--dg-accent)" stroke-width="3"><line x1="378" y1="110" x2="330" y2="110" marker-end="url(#ar-c8-1)"/><line x1="462" y1="110" x2="545" y2="110" marker-end="url(#ar-c8-1)"/></g>
  <text x="352" y="98" text-anchor="middle">4 N</text><text x="505" y="98" text-anchor="middle">10 N</text>
  <line x1="300" y1="140" x2="550" y2="140" stroke="currentColor"/>
  <text x="420" y="190" text-anchor="middle">Net force = 10 − 4 = 6 N to the right</text>
  <text x="420" y="208" text-anchor="middle" fill="var(--dg-muted)">motion changes</text>
</svg>`,
    },
    {
      title: "Friction opposes motion",
      caption: "When a block is pushed along a surface, **friction acts in the opposite direction** to the motion. Even a smooth-looking surface has tiny bumps that catch on each other, so rough surfaces give more friction.",
      svg: `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c8-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="60" y="148" width="440" height="22" fill="var(--dg-fill)" opacity="0.7"/>
  <rect x="190" y="60" width="110" height="82" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M60 148 L80 140 L100 148 L120 140 L140 148 L160 140 L180 148 L200 140 L220 148 L240 140 L260 148 L280 140 L300 148 L320 140 L340 148 L360 140 L380 148 L400 140 L420 148 L440 140 L460 148 L480 140 L500 148" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="245" y="86" text-anchor="middle">Block</text>
  <text x="280" y="164" text-anchor="middle" fill="var(--dg-muted)">Rough surface</text>
  <line x1="70" y1="100" x2="186" y2="100" stroke="var(--dg-accent)" stroke-width="3" marker-end="url(#ar-c8-2)"/>
  <text x="128" y="88" text-anchor="middle">Applied force</text>
  <line x1="285" y1="128" x2="205" y2="128" stroke="var(--dg-accent)" stroke-width="3" marker-end="url(#ar-c8-2)"/>
  <text x="245" y="116" text-anchor="middle">Friction</text>
  <line x1="340" y1="100" x2="440" y2="100" stroke="currentColor" stroke-dasharray="4 3" marker-end="url(#ar-c8-2)"/>
  <text x="390" y="88" text-anchor="middle" fill="var(--dg-muted)">Direction of motion</text>
</svg>`,
    },
  ],
  "pressure-winds-storms-cyclones": [
    {
      title: "Sea breeze (a convection current)",
      caption: "In the day the land warms faster, so **warm air rises over the land, leaving a low-pressure region**. Cooler air from the sea, at higher pressure, rushes in to take its place. This moving air is the **sea breeze**.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <rect x="20" y="190" width="260" height="60" fill="var(--dg-fill)" opacity="0.8"/>
  <path d="M280 190 H540 V250 H280 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="20" y1="190" x2="280" y2="190" stroke="currentColor" stroke-width="1.8"/>
  <text x="150" y="226" text-anchor="middle">Sea (cooler)</text>
  <text x="410" y="226" text-anchor="middle">Land (warmer)</text>
    <g fill="none" stroke="var(--dg-accent)" stroke-width="2.2">
    <path d="M150 176 H350 Q400 176 400 130 V90" marker-end="url(#ar-c6-1)"/>
    <path d="M400 70 Q400 50 360 50 H200 Q150 50 150 80" marker-end="url(#ar-c6-1)"/>
  </g>
  <path d="M150 80 V168" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-c6-1)" fill="none"/>
  <text x="212" y="40" text-anchor="middle">Cool air sinks (higher pressure)</text>
  <text x="408" y="118">Warm air rises</text>
  <text x="408" y="136" fill="var(--dg-muted)">(lower pressure)</text>
  <text x="230" y="168" text-anchor="middle">Sea breeze</text>
  <circle cx="480" cy="40" r="14" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="currentColor" stroke-width="1.5"><line x1="480" y1="16" x2="480" y2="8"/><line x1="480" y1="64" x2="480" y2="72"/><line x1="456" y1="40" x2="448" y2="40"/><line x1="504" y1="40" x2="512" y2="40"/><line x1="463" y1="23" x2="457" y2="17"/><line x1="497" y1="57" x2="503" y2="63"/><line x1="497" y1="23" x2="503" y2="17"/><line x1="463" y1="57" x2="457" y2="63"/></g>
  <text x="480" y="90" text-anchor="middle">Sun</text>
</svg>`,
    },
    {
      title: "A cyclone from above",
      caption: "A cyclone forms over a warm tropical ocean around a **low-pressure centre called the eye**. Strong winds spiral in towards it, bringing heavy rain.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c6-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <g transform="translate(-30 0)">
  <ellipse cx="280" cy="150" rx="180" ry="128" fill="var(--dg-fill)" opacity="0.6"/>
  <g fill="none" stroke="var(--dg-accent)" stroke-width="2.4">
  <path d="M448.8 150.0 L445.8 161.2 L441.5 172.1 L435.7 182.4 L428.5 192.2 L420.2 201.4 L410.8 209.8 L400.4 217.4 L389.1 224.1 L377.1 230.0 L364.5 235.0 L351.5 239.0 L338.2 242.0 L324.7 244.1 L311.2 245.2 L297.8 245.4 L284.7 244.6 L271.9 243.0 L259.6 240.5 L247.9 237.3 L236.9 233.3 L226.7 228.7 L217.3 223.4 L208.9 217.6 L201.4 211.4 L195.0 204.8 L189.6 197.9 L185.3 190.8 L182.1 183.6 L180.0 176.3 L178.9 169.1 L178.9 161.9 L179.9 154.9 L181.8 148.2 L184.6 141.8 L188.3 135.7 L192.7 130.0 L197.8 124.8 L203.4 120.1 L209.6 116.0 L216.2 112.3 L223.1 109.3 L230.3 106.8 L237.6 104.9 L244.9 103.6 L252.2 102.8 L259.4 102.6 L266.4 102.9 L273.1 103.7 L279.4 105.0 L285.4 106.6 L290.9 108.7 L295.9 111.0 L300.3 113.7 L304.2 116.6 L307.5 119.6 L310.2 122.8 L312.3 126.1 L313.8 129.3 L314.7 132.6 L315.1 135.8" marker-end="url(#ar-c6-2)"/>
<path d="M195.6 252.8 L183.2 245.5 L172.1 237.4 L162.2 228.6 L153.8 219.4 L146.7 209.8 L141.1 199.8 L136.9 189.7 L134.2 179.4 L133.0 169.2 L133.2 159.0 L134.8 149.1 L137.7 139.5 L141.9 130.2 L147.2 121.4 L153.7 113.2 L161.2 105.5 L169.6 98.6 L178.8 92.3 L188.6 86.8 L199.0 82.1 L209.8 78.2 L221.0 75.1 L232.3 72.8 L243.7 71.4 L255.0 70.8 L266.2 71.0 L277.1 71.9 L287.6 73.6 L297.6 75.9 L307.1 78.9 L315.9 82.4 L324.0 86.5 L331.3 91.1 L337.8 96.0 L343.5 101.3 L348.2 106.8 L352.1 112.5 L355.0 118.3 L357.1 124.1 L358.2 130.0 L358.5 135.7 L358.0 141.3 L356.7 146.7 L354.7 151.8 L351.9 156.7 L348.6 161.1 L344.8 165.2 L340.4 168.9 L335.7 172.2 L330.7 175.0 L325.4 177.3 L320.0 179.2 L314.5 180.5 L309.0 181.5 L303.6 182.0 L298.4 182.0 L293.3 181.7 L288.5 180.9 L284.1 179.9 L280.0 178.5" marker-end="url(#ar-c6-2)"/>
<path d="M195.6 47.2 L210.9 43.3 L226.5 40.6 L242.1 38.9 L257.7 38.4 L273.1 38.9 L288.2 40.4 L302.7 43.0 L316.7 46.5 L329.9 50.8 L342.3 56.0 L353.7 61.9 L364.1 68.5 L373.4 75.7 L381.5 83.4 L388.4 91.4 L394.1 99.8 L398.5 108.4 L401.6 117.1 L403.5 125.9 L404.1 134.6 L403.5 143.2 L401.7 151.5 L398.8 159.5 L394.9 167.2 L390.0 174.4 L384.2 181.1 L377.6 187.3 L370.3 192.9 L362.4 197.8 L354.0 202.1 L345.2 205.7 L336.1 208.5 L326.9 210.7 L317.5 212.2 L308.2 213.0 L299.1 213.2 L290.2 212.7 L281.5 211.6 L273.3 209.9 L265.5 207.7 L258.3 205.0 L251.7 201.9 L245.7 198.4 L240.4 194.6 L235.8 190.5 L232.0 186.2 L228.9 181.8 L226.5 177.4 L224.8 172.9 L223.9 168.4 L223.7 164.0 L224.1 159.8 L225.1 155.8 L226.7 152.0 L228.9 148.4 L231.4 145.2 L234.4 142.3 L237.7 139.7 L241.2 137.6 L244.9 135.8" marker-end="url(#ar-c6-2)"/>
  </g>
  <circle cx="280" cy="150" r="16" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="280" y="154" text-anchor="middle" font-size="12">L</text>
  </g>
  <line x1="266" y1="150" x2="436" y2="150" stroke="currentColor" stroke-width="1"/>
  <text x="442" y="146">Eye</text><text x="442" y="162" fill="var(--dg-muted)">(low pressure,</text><text x="442" y="178" fill="var(--dg-muted)">calm centre)</text>
  <line x1="135" y1="34" x2="190" y2="72" stroke="currentColor" stroke-width="1"/>
  <text x="20" y="28">Strong spiralling winds</text>
  <text x="250" y="292" text-anchor="middle" fill="var(--dg-muted)">Top view of a cyclone over a warm tropical ocean: heavy rain around the eye</text>
</svg>`,
    },
  ],
  "particulate-nature-of-matter": [
    {
      title: "Particles in solids, liquids and gases",
      caption: "**Solid:** particles closely packed, fixed shape and volume. **Liquid:** close but able to slide, fixed volume but no fixed shape. **Gas:** far apart and moving freely, no fixed shape or volume. Attraction is strongest in solids and weakest in gases.",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="100" y="30" text-anchor="middle" font-weight="bold">Solid</text><text x="280" y="30" text-anchor="middle" font-weight="bold">Liquid</text><text x="460" y="30" text-anchor="middle" font-weight="bold">Gas</text>
  <rect x="20" y="50" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="40" cy="70" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="60" cy="70" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="80" cy="70" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="100" cy="70" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="120" cy="70" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="140" cy="70" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="160" cy="70" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="40" cy="91" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="60" cy="91" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="80" cy="91" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="100" cy="91" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="120" cy="91" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="140" cy="91" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="160" cy="91" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="40" cy="112" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="60" cy="112" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="80" cy="112" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="100" cy="112" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="120" cy="112" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="140" cy="112" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="160" cy="112" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="40" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="60" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="80" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="100" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="120" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="140" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="160" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="40" cy="154" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="60" cy="154" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="80" cy="154" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="100" cy="154" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="120" cy="154" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="140" cy="154" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="160" cy="154" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <rect x="200" y="50" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="96" x2="360" y2="96" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <circle cx="245" cy="114" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="266" cy="117" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="223" cy="132" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="335" cy="156" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="315" cy="121" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="285" cy="125" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="242" cy="164" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="255" cy="146" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="311" cy="159" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="294" cy="148" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="346" cy="120" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="220" cy="150" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="268" cy="165" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="324" cy="138" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="217" cy="110" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="222" cy="168" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="296" cy="109" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="343" cy="140" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="286" cy="166" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="275" cy="140" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="243" cy="133" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <circle cx="329" cy="111" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <rect x="380" y="50" width="160" height="130" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="501" y1="94" x2="503" y2="80" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <circle cx="501" cy="94" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <line x1="427" y1="82" x2="418" y2="71" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <circle cx="427" cy="82" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <line x1="436" y1="165" x2="448" y2="158" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <circle cx="436" cy="165" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <line x1="407" y1="124" x2="417" y2="134" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <circle cx="407" cy="124" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <line x1="501" y1="164" x2="489" y2="171" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <circle cx="501" cy="164" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <line x1="454" y1="122" x2="442" y2="130" stroke="var(--dg-accent)" stroke-width="1.5"/>
  <circle cx="454" cy="122" r="8" fill="var(--dg-fill)" stroke="currentColor"/>
  <g text-anchor="middle">
  <text x="100" y="204">Closely packed,</text><text x="100" y="221">vibrate in place</text>
  <text x="280" y="204">Close together, slide</text><text x="280" y="221">past each other</text>
  <text x="460" y="204">Far apart,</text><text x="460" y="221">move freely</text>
  <text x="100" y="240" fill="var(--dg-muted)">strongest attraction</text><text x="280" y="240" fill="var(--dg-muted)">medium attraction</text><text x="460" y="240" fill="var(--dg-muted)">weakest attraction</text>
  </g>
</svg>`,
    },
  ],
  "elements-compounds-and-mixtures": [
    {
      title: "Filtration",
      caption: "Filtration separates an **insoluble solid (residue)** from a liquid. The liquid that passes through the filter paper is the **filtrate**.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c8-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M190 190 V280 H330 V190" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="191" y="245" width="138" height="34" fill="var(--dg-fill)" opacity="0.8"/>
  <path d="M170 70 L255 160 V205 H265 V160 L350 70 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M182 74 L260 154 L338 74" fill="var(--dg-fill)" stroke="var(--dg-muted)" stroke-width="1.5"/>
  <g fill="currentColor"><circle cx="252" cy="148" r="2"/><circle cx="262" cy="150" r="2"/><circle cx="268" cy="146" r="2"/><circle cx="258" cy="142" r="2"/><circle cx="248" cy="140" r="2"/><circle cx="270" cy="138" r="2"/></g>
  <line x1="120" y1="30" x2="215" y2="112" stroke="currentColor" stroke-width="3"/>
  <path d="M118 6 V26" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-c8-3)" fill="none"/>
  <path d="M260 212 V244" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c8-3)" fill="none"/>
  <text x="14" y="14">Mixture poured</text><text x="14" y="30" >in slowly</text>
  <text x="132" y="68" text-anchor="end" fill="var(--dg-muted)">Glass rod</text>
  <line x1="150" y1="130" x2="246" y2="144" stroke="currentColor" stroke-width="1"/>
  <text x="145" y="136" text-anchor="end">Residue</text>
  <text x="360" y="70">Funnel</text>
  <line x1="300" y1="100" x2="360" y2="108" stroke="currentColor" stroke-width="1"/>
  <text x="364" y="112">Filter paper</text>
  <text x="340" y="268">Filtrate</text>
  <text x="340" y="228" fill="var(--dg-muted)">Beaker</text>
</svg>`,
    },
    {
      title: "Distillation",
      caption: "Distillation separates liquids by evaporating and then condensing them, for example **pure water from salt water**. The vapour cools in the condenser and drips into the receiving flask; the salt stays behind.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c8-4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <path d="M46.1 180 A45 45 0 1 0 133.9 180 Z" fill="var(--dg-fill)"/>
  <path d="M80 100 V146.1 A45 45 0 1 0 100 146.1 V100" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="76" y="96" width="28" height="12" fill="currentColor" opacity="0.5"/>
  <line x1="90" y1="70" x2="90" y2="165" stroke="currentColor" stroke-width="3"/><circle cx="90" cy="168" r="4" fill="currentColor"/>
  <text x="90" y="205" text-anchor="middle" fill="var(--dg-muted)">Salt water</text>
  <path d="M90 262 Q76 253 90 240 Q104 253 90 262Z" fill="var(--dg-accent)" opacity="0.6"/>
  <rect x="82" y="264" width="16" height="22" fill="none" stroke="currentColor"/><line x1="66" y1="286" x2="114" y2="286" stroke="currentColor" stroke-width="2"/>
  <text x="90" y="304" text-anchor="middle">Burner</text>
  <path d="M104 118 H150" fill="none" stroke="currentColor" stroke-width="2"/>
  <g transform="translate(150 120) rotate(15.1)">
    <rect x="40" y="-14" width="170" height="28" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
    <line x1="0" y1="0" x2="248" y2="0" stroke="currentColor" stroke-width="2"/>
    <path d="M190 14 V26 M60 -14 V-26" stroke="currentColor" stroke-width="2"/>
  </g>
  <path d="M389 185 V215" stroke="currentColor" stroke-width="2"/>
  <path d="M380 205 V228 L350 280 H430 L400 228 V205" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M360.4 262 H419.6 L430 280 H350 Z" fill="var(--dg-fill)"/>
  <path d="M215 100 V84" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c8-4)" fill="none"/>
  <path d="M327 214 V196" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c8-4)" fill="none"/>
  <text x="215" y="76" text-anchor="middle">Water out</text>
  <text x="327" y="232" text-anchor="middle">Water in</text>
  <text x="90" y="60" text-anchor="middle">Thermometer</text>
  <text x="300" y="132" text-anchor="middle">Condenser</text>
  <text x="440" y="250">Receiving flask</text>
  <text x="440" y="270" fill="var(--dg-muted)">(pure water)</text>
  <text x="127" y="110" text-anchor="middle" fill="var(--dg-muted)">Vapour</text>
</svg>`,
    },
  ],
  "solutes-solvents-and-solutions": [
    {
      title: "Solute, solvent and solution",
      caption: "The part that dissolves is the **solute** and the part it dissolves in is the **solvent**. In salt water, salt is the solute and water is the solvent; together they form a **homogeneous solution**.",
      svg: `<svg viewBox="0 66 560 204" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c9-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M40 130 H110 V190 H40 Z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M120 130 H190" stroke="none"/>
  <g fill="currentColor"><circle cx="55" cy="180" r="4"/><circle cx="68" cy="182" r="4"/><circle cx="81" cy="180" r="4"/><circle cx="94" cy="182" r="4"/><circle cx="62" cy="171" r="4"/><circle cx="75" cy="172" r="4"/><circle cx="88" cy="171" r="4"/></g>
  <text x="75" y="212" text-anchor="middle">Solute</text><text x="75" y="228" text-anchor="middle" fill="var(--dg-muted)">(salt)</text>
  <text x="145" y="168" text-anchor="middle" font-size="20">+</text>
  <path d="M180 100 V200 H280 V100" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="181" y="130" width="98" height="69" fill="var(--dg-fill)" opacity="0.8"/>
  <text x="230" y="212" text-anchor="middle" dy="0">Solvent</text><text x="230" y="228" text-anchor="middle" fill="var(--dg-muted)">(water)</text>
  <line x1="300" y1="165" x2="340" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#ar-c9-1)"/>
  <text x="320" y="152" text-anchor="middle" fill="var(--dg-muted)">stir</text>
  <path d="M360 100 V200 H460 V100" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="361" y="130" width="98" height="69" fill="var(--dg-fill)" opacity="0.8"/>
  <circle cx="387" cy="167" r="3" fill="currentColor"/><circle cx="421" cy="140" r="3" fill="currentColor"/><circle cx="368" cy="184" r="3" fill="currentColor"/><circle cx="389" cy="149" r="3" fill="currentColor"/><circle cx="453" cy="163" r="3" fill="currentColor"/><circle cx="422" cy="185" r="3" fill="currentColor"/><circle cx="432" cy="170" r="3" fill="currentColor"/><circle cx="401" cy="182" r="3" fill="currentColor"/><circle cx="443" cy="142" r="3" fill="currentColor"/><circle cx="411" cy="158" r="3" fill="currentColor"/><circle cx="441" cy="192" r="3" fill="currentColor"/><circle cx="429" cy="155" r="3" fill="currentColor"/><circle cx="415" cy="171" r="3" fill="currentColor"/><circle cx="369" cy="139" r="3" fill="currentColor"/>
  <text x="410" y="212" text-anchor="middle">Solution</text><text x="410" y="228" text-anchor="middle" fill="var(--dg-muted)">(salt water)</text>
  <text x="410" y="252" text-anchor="middle" fill="var(--dg-muted)">Same throughout; particles do not settle</text>
  <text x="280" y="86" text-anchor="middle">Solute + Solvent → Solution</text>
</svg>`,
    },
  ],
  "light-mirrors-and-lenses": [
    {
      title: "Reflection from a plane mirror",
      caption: "**Law of reflection: angle of incidence ∠i = angle of reflection ∠r**, both measured from the normal. The incident ray, the reflected ray and the normal lie in the same plane.",
      svg: `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c10-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="100" y1="190" x2="460" y2="190" stroke="currentColor" stroke-width="3"/>
  <g stroke="currentColor" stroke-width="1"><line x1="120" y1="192" x2="110" y2="206"/><line x1="134" y1="192" x2="124" y2="206"/><line x1="148" y1="192" x2="138" y2="206"/><line x1="162" y1="192" x2="152" y2="206"/><line x1="176" y1="192" x2="166" y2="206"/><line x1="190" y1="192" x2="180" y2="206"/><line x1="204" y1="192" x2="194" y2="206"/><line x1="218" y1="192" x2="208" y2="206"/><line x1="232" y1="192" x2="222" y2="206"/><line x1="246" y1="192" x2="236" y2="206"/><line x1="260" y1="192" x2="250" y2="206"/><line x1="274" y1="192" x2="264" y2="206"/><line x1="288" y1="192" x2="278" y2="206"/><line x1="302" y1="192" x2="292" y2="206"/><line x1="316" y1="192" x2="306" y2="206"/><line x1="330" y1="192" x2="320" y2="206"/><line x1="344" y1="192" x2="334" y2="206"/><line x1="358" y1="192" x2="348" y2="206"/><line x1="372" y1="192" x2="362" y2="206"/><line x1="386" y1="192" x2="376" y2="206"/><line x1="400" y1="192" x2="390" y2="206"/><line x1="414" y1="192" x2="404" y2="206"/><line x1="428" y1="192" x2="418" y2="206"/><line x1="442" y1="192" x2="432" y2="206"/><line x1="456" y1="192" x2="446" y2="206"/></g>
  <line x1="280" y1="190" x2="280" y2="30" stroke="var(--dg-muted)" stroke-dasharray="5 4"/>
  <line x1="177.2" y1="67.4" x2="278" y2="188" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-c10-1)" transform="translate(0 0)"/>
  <line x1="280" y1="190" x2="382.8" y2="67.4" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M357.1 98.1 L382.8 67.4" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-c10-1)" fill="none"/>
  <path d="M280 140 A50 50 0 0 0 247.9 151.7" fill="none" stroke="currentColor"/>
  <path d="M280 140 A50 50 0 0 1 312.1 151.7" fill="none" stroke="currentColor"/>
  <text x="251" y="132" text-anchor="middle" font-style="italic">i</text>
  <text x="309" y="132" text-anchor="middle" font-style="italic">r</text>
  <circle cx="280" cy="190" r="3" fill="currentColor"/>
  <text x="169" y="61" text-anchor="end">Incident ray</text>
  <text x="391" y="61">Reflected ray</text>
  <text x="285" y="26">Normal</text>
  <text x="410" y="228" text-anchor="middle" fill="var(--dg-muted)">Plane mirror</text>
  <text x="272" y="228" text-anchor="end" fill="var(--dg-muted)">Point of incidence</text>
</svg>`,
    },
    {
      title: "Convex and concave lenses",
      caption: "A **convex lens** is thicker in the middle and **converges** parallel rays to its focus. A **concave lens** is thinner in the middle and **spreads the rays out**; they appear to come from its focus.",
      svg: `<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c10-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <line x1="280" y1="15" x2="280" y2="210" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <text x="140" y="22" text-anchor="middle" font-weight="bold">Convex lens</text>
  <text x="420" y="22" text-anchor="middle" font-weight="bold">Concave lens</text>
  <line x1="10" y1="110" x2="270" y2="110" stroke="var(--dg-muted)"/>
  <line x1="290" y1="110" x2="550" y2="110" stroke="var(--dg-muted)"/>
  <path d="M130 40 Q150 110 130 180 Q110 110 130 40 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M400 40 H420 Q408 110 420 180 H400 Q412 110 400 40 Z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <g stroke="var(--dg-accent)" stroke-width="2" fill="none">
    <line x1="20" y1="80" x2="130" y2="80"/><line x1="20" y1="140" x2="130" y2="140"/><line x1="20" y1="110" x2="130" y2="110"/>
    <line x1="130" y1="80" x2="190" y2="98" marker-end="url(#ar-c10-2)"/><line x1="130" y1="140" x2="190" y2="122" marker-end="url(#ar-c10-2)"/>
    <line x1="190" y1="98" x2="230" y2="110"/><line x1="190" y1="122" x2="230" y2="110"/>
    <line x1="230" y1="110" x2="260" y2="119"/><line x1="230" y1="110" x2="260" y2="101"/>
    <line x1="140" y1="110" x2="200" y2="110" marker-end="url(#ar-c10-2)" stroke-width="0"/>
    <line x1="300" y1="80" x2="410" y2="80"/><line x1="300" y1="140" x2="410" y2="140"/><line x1="300" y1="110" x2="410" y2="110"/>
    <line x1="410" y1="80" x2="520" y2="47" marker-end="url(#ar-c10-2)"/><line x1="410" y1="140" x2="520" y2="173" marker-end="url(#ar-c10-2)"/>
    <line x1="410" y1="110" x2="520" y2="110" marker-end="url(#ar-c10-2)"/>
  </g>
  <g stroke="var(--dg-accent)" stroke-width="2" fill="none"><line x1="20" y1="80" x2="75" y2="80" marker-end="url(#ar-c10-2)"/><line x1="20" y1="140" x2="75" y2="140" marker-end="url(#ar-c10-2)"/><line x1="20" y1="110" x2="75" y2="110" marker-end="url(#ar-c10-2)"/>
  <line x1="300" y1="80" x2="355" y2="80" marker-end="url(#ar-c10-2)"/><line x1="300" y1="140" x2="355" y2="140" marker-end="url(#ar-c10-2)"/><line x1="300" y1="110" x2="355" y2="110" marker-end="url(#ar-c10-2)"/></g>
  <g stroke="var(--dg-muted)" stroke-dasharray="4 3"><line x1="410" y1="80" x2="310" y2="110"/><line x1="410" y1="140" x2="310" y2="110"/></g>
  <circle cx="230" cy="110" r="3" fill="currentColor"/><circle cx="310" cy="110" r="3" fill="currentColor"/>
  <text x="230" y="130" text-anchor="middle">F</text>
  <text x="310" y="130" text-anchor="middle">F</text>
  <text x="140" y="205" text-anchor="middle" fill="var(--dg-muted)">rays converge at the focus</text>
  <text x="420" y="205" text-anchor="middle" fill="var(--dg-muted)">rays spread out (diverge)</text>
</svg>`,
    },
  ],
  "keeping-time-with-the-skies": [
    {
      title: "Phases of the Moon",
      caption: "The Moon shines by **reflecting sunlight**, and half of it is always lit. As it **orbits the Earth** we see different amounts of the lit half: new moon, crescent, first quarter, gibbous, full moon, then the waning phases back to new moon.",
      svg: `<svg viewBox="0 0 560 285" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <circle cx="330" cy="145" r="100" fill="none" stroke="var(--dg-muted)" stroke-dasharray="4 3"/>
  <circle cx="330" cy="145" r="22" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="330" y="149" text-anchor="middle" font-size="12">Earth</text>
    <circle cx="230.0" cy="145.0" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M230.0 133.0 A12 12 0 0 0 230.0 157.0 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <circle cx="259.3" cy="215.7" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M259.3 203.7 A12 12 0 0 0 259.3 227.7 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <circle cx="330.0" cy="245.0" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M330.0 233.0 A12 12 0 0 0 330.0 257.0 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <circle cx="400.7" cy="215.7" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M400.7 203.7 A12 12 0 0 0 400.7 227.7 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <circle cx="430.0" cy="145.0" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M430.0 133.0 A12 12 0 0 0 430.0 157.0 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <circle cx="400.7" cy="74.3" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M400.7 62.3 A12 12 0 0 0 400.7 86.3 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <circle cx="330.0" cy="45.0" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M330.0 33.0 A12 12 0 0 0 330.0 57.0 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <circle cx="259.3" cy="74.3" r="12" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <path d="M259.3 62.3 A12 12 0 0 0 259.3 86.3 Z" fill="var(--dg-accent)" opacity="0.75"/>
  <g stroke="var(--dg-accent)" stroke-width="2.2"><line x1="10" y1="100" x2="112" y2="100" marker-end="url(#ar-c11-1)"/><line x1="10" y1="145" x2="112" y2="145" marker-end="url(#ar-c11-1)"/><line x1="10" y1="190" x2="112" y2="190" marker-end="url(#ar-c11-1)"/></g>
  <text x="60" y="84" text-anchor="middle">Sunlight</text>
  <text x="216" y="149" text-anchor="end">New moon</text>
  <text x="245" y="238" text-anchor="end">Waxing crescent</text>
  <text x="330" y="272" text-anchor="middle">First quarter</text>
  <text x="415" y="238" text-anchor="start">Waxing gibbous</text>
  <text x="446" y="149" text-anchor="start">Full moon</text>
  <text x="415" y="64" text-anchor="start">Waning gibbous</text>
  <text x="330" y="26" text-anchor="middle">Last quarter</text>
  <text x="245" y="64" text-anchor="end">Waning crescent</text>
  <text x="10" y="22" fill="var(--dg-muted)">Coloured half of each Moon</text><text x="10" y="38" fill="var(--dg-muted)">faces the Sun and is lit</text>
</svg>`,
    },
  ],
  "how-nature-works-in-harmony": [
    {
      title: "A food chain",
      caption: "A **food chain** shows who eats whom, starting from a **producer**. Each step is a **trophic level**, and energy flows in one direction, with much lost as heat at every step. Decomposers return nutrients to the soil.",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c12-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker></defs>
  <text x="56" y="16" text-anchor="middle">Sunlight energy</text>
  <line x1="56" y1="24" x2="56" y2="76" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-c12-1)"/>
  <rect x="14" y="80" width="84" height="40" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="56" y="105" text-anchor="middle">Grass</text><text x="56" y="140" text-anchor="middle">Producer</text><text x="56" y="157" text-anchor="middle" fill="var(--dg-muted)">Level 1</text><line x1="56" y1="165" x2="56" y2="212" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
  <rect x="124" y="80" width="84" height="40" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="166" y="105" text-anchor="middle">Grasshopper</text><text x="166" y="140" text-anchor="middle">Herbivore</text><text x="166" y="157" text-anchor="middle" fill="var(--dg-muted)">Level 2</text><line x1="166" y1="165" x2="166" y2="212" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
  <rect x="234" y="80" width="84" height="40" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="276" y="105" text-anchor="middle">Frog</text><text x="276" y="140" text-anchor="middle">Carnivore</text><text x="276" y="157" text-anchor="middle" fill="var(--dg-muted)">Level 3</text><line x1="276" y1="165" x2="276" y2="212" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
  <rect x="344" y="80" width="84" height="40" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="386" y="105" text-anchor="middle">Snake</text><text x="386" y="140" text-anchor="middle">Carnivore</text><text x="386" y="157" text-anchor="middle" fill="var(--dg-muted)">Level 4</text><line x1="386" y1="165" x2="386" y2="212" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
  <rect x="454" y="80" width="84" height="40" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="496" y="105" text-anchor="middle">Eagle</text><text x="496" y="140" text-anchor="middle">Carnivore</text><text x="496" y="157" text-anchor="middle" fill="var(--dg-muted)">Level 5</text><line x1="496" y1="165" x2="496" y2="212" stroke="var(--dg-muted)" stroke-dasharray="3 3"/>
  <g stroke="var(--dg-accent)" stroke-width="2.2"><line x1="99" y1="100" x2="123" y2="100" marker-end="url(#ar-c12-1)"/><line x1="209" y1="100" x2="233" y2="100" marker-end="url(#ar-c12-1)"/><line x1="319" y1="100" x2="343" y2="100" marker-end="url(#ar-c12-1)"/><line x1="429" y1="100" x2="453" y2="100" marker-end="url(#ar-c12-1)"/></g>
  <text x="350" y="60" text-anchor="middle">Only about 10% of the energy passes to the next level</text>
  <rect x="14" y="214" width="524" height="30" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="276" y="234" text-anchor="middle">Decomposers (bacteria and fungi) break down dead matter</text>
</svg>`,
    },
  ],
  "earth-a-unique-life-sustaining-planet": [
    {
      title: "Layers of the Earth",
      caption: "The solid Earth has three layers: the thin **crust** on which we live, the **mantle** below it and the **core** at the centre.",
      svg: `<svg viewBox="0 0 560 336" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <circle cx="190" cy="190" r="130" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="190" cy="190" r="118" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="190" cy="190" r="62" fill="var(--dg-accent)" opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="190" cy="190" r="62" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <g stroke="currentColor" stroke-width="1" fill="none"><line x1="314" y1="125" x2="360" y2="125"/><line x1="270" y1="180" x2="360" y2="180"/><line x1="210" y1="200" x2="360" y2="245"/></g>
  <circle cx="314" cy="125" r="2.5" fill="currentColor"/><circle cx="270" cy="180" r="2.5" fill="currentColor"/><circle cx="210" cy="200" r="2.5" fill="currentColor"/>
  <text x="366" y="122">Crust</text><text x="366" y="138" fill="var(--dg-muted)">thin outer layer, where we live</text>
  <text x="366" y="177">Mantle</text><text x="366" y="193" fill="var(--dg-muted)">thick middle layer</text>
  <text x="366" y="242">Core</text><text x="366" y="258" fill="var(--dg-muted)">innermost layer</text>
  <text x="190" y="22" text-anchor="middle" fill="var(--dg-muted)">Section through the Earth (not to scale)</text>
</svg>`,
    },
    {
      title: "What air is made of",
      caption: "Air is mainly **nitrogen (about 78%)** and **oxygen (about 21%)**, with small amounts of argon, carbon dioxide and water vapour.",
      svg: `<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <text x="280" y="24" text-anchor="middle" font-weight="bold">Composition of air</text>
  <rect x="40" y="60" width="374.4" height="44" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.5"/>
  <rect x="414.4" y="60" width="100.8" height="44" fill="var(--dg-accent)" opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
  <rect x="515.2" y="60" width="4.8" height="44" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
  <text x="227" y="87" text-anchor="middle">Nitrogen (about 78%)</text>
  <text x="465" y="87" text-anchor="middle" font-size="12">Oxygen</text>
  <text x="465" y="130" text-anchor="middle">about 21%</text>
  <line x1="465" y1="106" x2="465" y2="118" stroke="currentColor"/>
  <line x1="519" y1="106" x2="519" y2="150" stroke="currentColor"/>
  <text x="520" y="166" text-anchor="end">Argon, carbon dioxide, water vapour (small amounts)</text>
</svg>`,
    },
  ],
});
