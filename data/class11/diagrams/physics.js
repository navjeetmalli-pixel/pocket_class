// Class 11 Physics diagrams (chapters 1–14). Format: see "Diagrams" in CONTENT_GUIDE.md.
StudyData.addDiagrams(11, "physics", {
  "motion-in-a-straight-line": [
    {
      title: "x–t graphs: uniform velocity and uniform acceleration",
      caption: "**Slope of an x–t graph = velocity.** A straight line means constant velocity; a parabola (x = ½at², starting from rest) means constant acceleration, and the slope of the **tangent** at any instant is the instantaneous velocity there, which keeps increasing.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-2-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-2-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="220" x2="260" y2="220" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-1)"/>
  <line x1="60" y1="220" x2="60" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-1)"/>
  <text x="266" y="224">t</text>
  <text x="56" y="28" text-anchor="end">x</text>
  <text x="50" y="236" text-anchor="end">O</text>
  <line x1="60" y1="220" x2="235" y2="97.5" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="235" y="90" text-anchor="middle" fill="var(--dg-accent)">x = vt</text>
  <line x1="110" y1="185" x2="200" y2="185" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="200" y1="185" x2="200" y2="122" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="155" y="201" text-anchor="middle">Δt</text>
  <text x="208" y="157">Δx</text>
  <text x="60" y="258">(a) Uniform velocity: slope = v</text>
  <line x1="330" y1="220" x2="520" y2="220" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-1)"/>
  <line x1="330" y1="220" x2="330" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-1)"/>
  <text x="526" y="224">t</text>
  <text x="326" y="28" text-anchor="end">x</text>
  <text x="320" y="236" text-anchor="end">O</text>
  <path d="M330 220L334 219.9L338 219.7L342 219.4L346 218.9L350 218.3L354 217.6L358 216.7L362 215.7L366 214.6L370 213.4L374 212L378 210.4L382 208.8L386 207L390 205L394 203L398 200.8L402 198.5L406 196L410 193.4L414 190.7L418 187.8L422 184.8L426 181.7L430 178.4L434 175.1L438 171.5L442 167.9L446 164.1L450 160.2L454 156.1L458 151.9L462 147.6L466 143.1L470 138.6L474 133.8L478 129L482 124L486 118.9L490 113.6L494 108.2L498 102.7L502 97.1L506 91.3L510 85.4L514 79.3L518 73.1" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="468" y="112.5" text-anchor="end" fill="var(--dg-accent)">x = ½at²</text>
  <line x1="380" y1="220" x2="500" y2="120.3" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="430" cy="178.4" r="3.5" fill="currentColor"/>
  <text x="438" y="194.4">slope = v at this t</text>
  <line x1="430" y1="178.4" x2="430" y2="220" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="430" y="236" text-anchor="middle">t</text>
  <text x="290" y="258">(b) Uniform acceleration (u = 0)</text>
</svg>`,
    },
    {
      title: "v–t graph for uniform acceleration",
      caption: "**Slope = acceleration a; area under the v–t graph = displacement s.** The trapezoid splits into a rectangle (ut) and a triangle (½at²), giving s = ut + ½at², with v = u + at read from the line.",
      svg: `<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-2-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-2-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M70 170L370 170L370 60L70 170z" fill="var(--dg-fill)" stroke="none" stroke-width="1.4"/>
  <path d="M70 230L70 170L370 170L370 230z" fill="var(--dg-fill)" stroke="none" stroke-width="1.4"/>
  <line x1="70" y1="230" x2="520" y2="230" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-2)"/>
  <line x1="70" y1="230" x2="70" y2="22" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-2)"/>
  <text x="526" y="234">t</text>
  <text x="66" y="20" text-anchor="end">v</text>
  <text x="62" y="246" text-anchor="end">O</text>
  <line x1="70" y1="170" x2="370" y2="60" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="70" y1="170" x2="370" y2="170" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="370" y1="60" x2="370" y2="230" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="70" y1="60" x2="370" y2="60" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="64" y="174" text-anchor="end">u</text>
  <text x="64" y="64" text-anchor="end">v</text>
  <text x="370" y="248" text-anchor="middle">t</text>
  <text x="220" y="200" text-anchor="middle">ut</text>
  <text x="305" y="152" text-anchor="middle">½at²</text>
  <text x="378" y="119">at</text>
  <line x1="373" y1="60" x2="373" y2="170" stroke="currentColor" stroke-width="1"/>
  <text x="92" y="122" fill="var(--dg-accent)">v = u + at</text>
  <text x="395" y="170">Area = displacement</text>
  <text x="395" y="190">s = ut + ½at²</text>
  <text x="395" y="212" fill="var(--dg-accent)">slope = a</text>
</svg>`,
    },
    {
      title: "v–t graph of a ball thrown vertically upward",
      caption: "With upward positive, v = u − gt is a straight line of **constant slope −g**. It crosses zero at the top (t = u/g) and reaches −u when the ball is back at the start (t = 2u/g). The two shaded triangles have equal area, so the **net displacement is zero**.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-2-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-2-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M70 140L70 40L220 140z" fill="var(--dg-fill)" stroke="none" stroke-width="1.4"/>
  <path d="M220 140L370 140L370 240z" fill="var(--dg-fill)" stroke="none" stroke-width="1.4"/>
  <line x1="70" y1="140" x2="520" y2="140" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-3)"/>
  <line x1="70" y1="140" x2="70" y2="15" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-2-3)"/>
  <line x1="70" y1="140" x2="70" y2="275" stroke="currentColor" stroke-width="1.4"/>
  <text x="526" y="144">t</text>
  <text x="66" y="10" text-anchor="end">v</text>
  <line x1="70" y1="40" x2="370" y2="240" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="370" y1="140" x2="370" y2="240" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="70" y1="240" x2="370" y2="240" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="64" y="44" text-anchor="end">u</text>
  <text x="64" y="244" text-anchor="end">−u</text>
  <text x="64" y="144" text-anchor="end">O</text>
  <text x="214" y="158" text-anchor="end">u/g</text>
  <text x="370" y="132" text-anchor="middle">2u/g</text>
  <text x="108" y="118">+H (up)</text>
  <text x="346" y="178" text-anchor="middle">−H (down)</text>
  <text x="220" y="70" fill="var(--dg-accent)">v = u − gt</text>
  <text x="400" y="230">slope = −g</text>
  <text x="400" y="252">net displacement = 0</text>
</svg>`,
    },
  ],
  "motion-in-a-plane": [
    {
      title: "Resolution and addition of vectors",
      caption: "**Left:** a vector A resolves into perpendicular components Aₓ = A cos θ and A_y = A sin θ. **Right:** parallelogram law, the resultant R = A + B is the diagonal; its magnitude and direction follow from the two formulas.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-3-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-3-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="215" x2="250" y2="215" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-3-1)"/>
  <line x1="60" y1="215" x2="60" y2="40" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-3-1)"/>
  <text x="256" y="219">x</text>
  <text x="68" y="44">y</text>
  <text x="54" y="231" text-anchor="end">O</text>
  <line x1="199.3" y1="117.5" x2="199.3" y2="215" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="199.3" y1="117.5" x2="60" y2="117.5" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="60" y1="215" x2="199.3" y2="117.5" stroke="var(--dg-accent)" stroke-width="2.2" marker-end="url(#ar-c11p-3-1)"/>
  <text x="205.3" y="113.5" fill="var(--dg-accent)">A</text>
  <line x1="62" y1="212" x2="199.3" y2="212" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-c11p-3-1)"/>
  <line x1="63" y1="215" x2="63" y2="117.5" stroke="var(--dg-accent)" stroke-width="1.4" marker-end="url(#ar-c11p-3-1)"/>
  <path d="M102 215A42 42 0 0 0 94.4 190.9" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="110" y="203">θ</text>
  <text x="129.6" y="233" text-anchor="middle">A<tspan dy="3" font-size="10">x</tspan><tspan dy="-3">​</tspan> = A cos θ</text>
  <text x="68" y="109.5">A<tspan dy="3" font-size="10">y</tspan><tspan dy="-3">​</tspan> = A sin θ</text>
  <line x1="460" y1="230" x2="505" y2="152.1" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="375" y1="152.1" x2="505" y2="152.1" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="330" y1="230" x2="460" y2="230" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-3-1)"/>
  <line x1="330" y1="230" x2="375" y2="152.1" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-3-1)"/>
  <line x1="330" y1="230" x2="505" y2="152.1" stroke="var(--dg-accent)" stroke-width="2.4" marker-end="url(#ar-c11p-3-1)"/>
  <text x="395" y="248" text-anchor="middle">A</text>
  <text x="363" y="166.1" text-anchor="end">B</text>
  <text x="513" y="146.1" fill="var(--dg-accent)">R</text>
  <path d="M360 230A30 30 0 0 0 345 204" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="364" y="210">θ</text>
  <path d="M392 230A62 62 0 0 0 386.6 204.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="398" y="218">α</text>
  <text x="330" y="22">R² = A² + B² + 2AB cos θ</text>
  <text x="330" y="42">tan α = B sin θ / (A + B cos θ)</text>
</svg>`,
    },
    {
      title: "Projectile motion: trajectory, range and maximum height",
      caption: "The path is an exact **parabola**, y = x tan θ − gx²/(2u²cos²θ). The horizontal velocity u cos θ never changes; the vertical velocity falls to zero at the highest point. Here θ = 50°, so H = (R tan θ)/4.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-3-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-3-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="50" y1="215" x2="510" y2="215" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-3-2)"/>
  <line x1="50" y1="215" x2="50" y2="40" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-3-2)"/>
  <text x="516" y="219">x</text>
  <text x="58" y="44">y</text>
  <text x="44" y="231" text-anchor="end">O</text>
  <path d="M50 215L56 208L62 201.1L68 194.5L74 188L80 181.8L86 175.8L92 170L98 164.3L104 158.9L110 153.7L116 148.7L122 143.9L128 139.3L134 134.9L140 130.7L146 126.7L152 123L158 119.4L164 116L170 112.8L176 109.9L182 107.1L188 104.6L194 102.2L200 100.1L206 98.1L212 96.4L218 94.9L224 93.5L230 92.4L236 91.5L242 90.8L248 90.3L254 90L260 89.9L266 90L272 90.3L278 90.8L284 91.5L290 92.4L296 93.5L302 94.9L308 96.4L314 98.1L320 100.1L326 102.2L332 104.6L338 107.1L344 109.9L350 112.8L356 116L362 119.4L368 123L374 126.7L380 130.7L386 134.9L392 139.3L398 143.9L404 148.7L410 153.7L416 158.9L422 164.3L428 170L434 175.8L440 181.8L446 188L452 194.5L458 201.1L464 208L470 215L470 215" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <line x1="260" y1="89.9" x2="260" y2="215" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="266" y="156.4">H</text>
  <line x1="50" y1="215" x2="107.9" y2="146.1" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-3-2)"/>
  <text x="118" y="135" fill="var(--dg-accent)">u</text>
  <path d="M82 215A32 32 0 0 0 70.6 190.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="88" y="207">θ</text>
  <line x1="260" y1="89.9" x2="322" y2="89.9" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-3-2)"/>
  <text x="268" y="81.9">v = u cos θ</text>
  <line x1="242" y1="237" x2="50" y2="237" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-3-2)"/>
  <line x1="278" y1="237" x2="470" y2="237" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-3-2)"/>
  <text x="260" y="242" text-anchor="middle">R</text>
  <text x="340" y="30">H = u² sin²θ / 2g</text>
  <text x="340" y="50">R = u² sin 2θ / g</text>
  <text x="340" y="70">T = 2u sin θ / g</text>
</svg>`,
    },
    {
      title: "Uniform circular motion",
      caption: "The speed is constant but the **velocity changes direction**, so there is an acceleration. v is along the tangent; the acceleration a_c = v²/r = ω²r is directed along the radius **towards the centre**, perpendicular to v.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-3-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-3-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <circle cx="200" cy="145" r="105" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="200" cy="145" r="3" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <text x="194" y="161" text-anchor="end">O</text>
  <line x1="200" y1="145" x2="280.4" y2="77.5" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="280.4" cy="77.5" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <line x1="280.4" y1="77.5" x2="238.7" y2="27.7" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-3-3)"/>
  <line x1="280.4" y1="77.5" x2="238.3" y2="112.9" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-3-3)"/>
  <text x="234.7" y="21.7" text-anchor="end" fill="var(--dg-accent)">v</text>
  <text x="262" y="114" text-anchor="start" fill="var(--dg-accent)">a<tspan dy="3" font-size="10">c</tspan><tspan dy="-3">​</tspan></text>
  <text x="290.4" y="73.5">P</text>
  <line x1="200" y1="145" x2="104.8" y2="189.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="104.8" cy="189.4" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <line x1="104.8" y1="189.4" x2="132.3" y2="248.3" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-3-3)"/>
  <line x1="104.8" y1="189.4" x2="154.7" y2="166.1" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-3-3)"/>
  <text x="140.3" y="264.3" text-anchor="start" fill="var(--dg-accent)">v</text>
  <text x="116" y="164" text-anchor="start" fill="var(--dg-accent)">a<tspan dy="3" font-size="10">c</tspan><tspan dy="-3">​</tspan></text>
  <text x="92.8" y="193.4" text-anchor="end">Q</text>
  <text x="222" y="146">r</text>
  <path d="M195.5 119.4A26 26 0 0 0 174.4 140.5" fill="none" stroke="var(--dg-accent)" stroke-width="1.6"/>
  <text x="152" y="119" text-anchor="end">ω</text>
  <text x="340" y="100">v = ωr</text>
  <text x="340" y="124">a<tspan dy="3" font-size="10">c</tspan><tspan dy="-3">​</tspan> = v²/r = ω²r</text>
  <text x="340" y="148">T = 2π/ω = 2πr/v</text>
  <text x="340" y="172">a<tspan dy="3" font-size="10">c</tspan><tspan dy="-3">​</tspan> ⟂ v, a<tspan dy="3" font-size="10">c</tspan><tspan dy="-3">​</tspan> points to O</text>
</svg>`,
    },
  ],
  "laws-of-motion": [
    {
      title: "Free-body diagram: block sliding down a rough incline",
      caption: "Forces on the block: **weight mg** (down), **normal reaction N** (perpendicular to the surface) and **friction f** (up the slope, opposing the motion). Resolving mg gives mg sin θ along the slope and mg cos θ into it, so N = mg cos θ.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-4-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-4-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M60 270L390 270L390 79.5z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M220.8 112.5L248.8 161L200.3 189L172.3 140.5z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="210.5" y1="150.8" x2="175.9" y2="170.8" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="210.5" y1="150.8" x2="245.2" y2="210.8" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="175.9" y1="170.8" x2="210.5" y2="230.8" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="245.2" y1="210.8" x2="210.5" y2="230.8" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="210.5" y1="150.8" x2="210.5" y2="230.8" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-1)"/>
  <line x1="210.5" y1="150.8" x2="175.9" y2="90.8" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-1)"/>
  <line x1="210.5" y1="150.8" x2="240" y2="133.8" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-1)"/>
  <text x="216.5" y="244.8">mg</text>
  <text x="169.9" y="86.8" text-anchor="end">N</text>
  <text x="248" y="131.8">f</text>
  <text x="167.9" y="176.8" text-anchor="end">mg sin θ</text>
  <text x="251.2" y="224.8">mg cos θ</text>
  <path d="M112 270A52 52 0 0 0 105 244" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="118" y="260">θ</text>
  <text x="410" y="60">N = mg cos θ</text>
  <text x="410" y="84">f = μN = μ mg cos θ</text>
  <text x="410" y="108">a = g(sin θ − μ cos θ)</text>
  <text x="410" y="132" fill="var(--dg-muted)">(sliding down)</text>
</svg>`,
    },
    {
      title: "Atwood machine",
      caption: "Two masses on a light string over a frictionless pulley (m₁ > m₂). Both move with the same acceleration a, and the **tension T is the same** throughout. m₁g − T = m₁a and T − m₂g = m₂a. Drawn to scale for m₁ : m₂ = 3 : 2, so T = 2.4 units lies between m₂g = 2 and m₁g = 3.",
      svg: `<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-4-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-4-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="230" y1="18" x2="330" y2="18" stroke="currentColor" stroke-width="2"/>
  <line x1="280" y1="18" x2="280" y2="36" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="280" cy="62" r="26" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="280" cy="62" r="3" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <line x1="254" y1="62" x2="254" y2="196" stroke="currentColor" stroke-width="1.4"/>
  <line x1="306" y1="62" x2="306" y2="136" stroke="currentColor" stroke-width="1.4"/>
  <rect x="230" y="196" width="48" height="46" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <rect x="286" y="136" width="40" height="38" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="254" y="224" text-anchor="middle">m₁</text>
  <text x="306" y="161" text-anchor="middle">m₂</text>
  <line x1="254" y1="196" x2="254" y2="136" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-4-2)"/>
  <line x1="306" y1="136" x2="306" y2="76" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-4-2)"/>
  <line x1="254" y1="242" x2="254" y2="317" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-4-2)"/>
  <line x1="306" y1="174" x2="306" y2="224" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-4-2)"/>
  <text x="246" y="174" text-anchor="end">T</text>
  <text x="314" y="114">T</text>
  <text x="262" y="317">m₁g</text>
  <text x="314" y="228">m₂g</text>
  <line x1="206" y1="200" x2="206" y2="240" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-2)"/>
  <text x="198" y="226" text-anchor="end">a</text>
  <line x1="354" y1="172" x2="354" y2="132" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-2)"/>
  <text x="362" y="156">a</text>
  <text x="390" y="150">m₁ > m₂</text>
  <text x="390" y="176">a = (m₁ − m₂)g/(m₁ + m₂)</text>
  <text x="390" y="202">T = 2m₁m₂g/(m₁ + m₂)</text>
</svg>`,
    },
    {
      title: "Banking of a road",
      caption: "On a road banked at angle θ the normal reaction N is tilted towards the centre of the circle. Its vertical part balances the weight (N cos θ = mg) and its horizontal part supplies the centripetal force (N sin θ = mv²/R), so tan θ = v²/Rg with no friction needed.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-4-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-4-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M50 262L430 262L430 123.7z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <path d="M278.3 136.3L291.9 173.9L228.1 197.2L214.4 159.6z" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="253.2" y1="166.8" x2="253.2" y2="66.8" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="253.2" y1="166.8" x2="216.8" y2="166.8" stroke="var(--dg-accent)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="253.2" y1="166.8" x2="253.2" y2="266.8" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-3)"/>
  <line x1="253.2" y1="166.8" x2="216.8" y2="66.8" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-3)"/>
  <text x="259.2" y="274.8">mg</text>
  <text x="210.8" y="64.8" text-anchor="end">N</text>
  <text x="259.2" y="78.8">N cos θ</text>
  <line x1="253.2" y1="165.8" x2="216.8" y2="165.8" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-4-3)"/>
  <text x="210.8" y="184.8" text-anchor="end">N sin θ</text>
  <line x1="186.8" y1="165.8" x2="26" y2="165.8" stroke="currentColor" stroke-width="1.2" marker-end="url(#ax-c11p-4-3)"/>
  <text x="26" y="158.8">towards centre of circle</text>
  <path d="M106 262A56 56 0 0 0 102.6 242.8" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="112" y="254">θ</text>
  <text x="370" y="28">N cos θ = mg</text>
  <text x="370" y="50">N sin θ = mv²/R</text>
  <text x="370" y="72">tan θ = v²/Rg</text>
  <text x="370" y="94">v₀ = √(Rg tan θ)</text>
</svg>`,
    },
  ],
  "work-energy-and-power": [
    {
      title: "Work done by a variable force",
      caption: "The work done by a force that changes with position is the **area under the F–x graph**: in a thin strip dx the force is almost constant, so dW = F dx, and W = ∫F dx between x₁ and x₂.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-5-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-5-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M190 230L190 72.7L195 71.9L200 71.2L205 70.6L210 70.3L215 70.1L220 70L225 70.1L230 70.3L235 70.6L240 71L245 71.5L250 72.1L255 72.8L260 73.6L265 74.4L270 75.4L275 76.3L280 77.4L285 78.5L290 79.6L295 80.8L300 82.1L305 83.3L310 84.6L315 86L320 87.3L325 88.7L330 90.1L335 91.5L340 92.9L345 94.4L350 95.8L355 97.3L360 98.8L365 100.2L370 101.7L375 103.2L380 104.6L385 106.1L390 107.6L395 109L400 110.5L400 110.5L400 230z" fill="var(--dg-fill)" stroke="none" stroke-width="1.4"/>
  <rect x="210" y="70" width="12" height="160" fill="var(--dg-accent)" fill-opacity=".45" stroke="var(--dg-accent)" stroke-width="1"/>
  <line x1="70" y1="230" x2="500" y2="230" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-5-1)"/>
  <line x1="70" y1="230" x2="70" y2="24" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-5-1)"/>
  <text x="506" y="234">x</text>
  <text x="66" y="22" text-anchor="end">F</text>
  <text x="62" y="246" text-anchor="end">O</text>
  <path d="M70 190L75 179.5L80 169.7L85 160.5L90 151.9L95 144L100 136.6L105 129.7L110 123.4L115 117.5L120 112.1L125 107.1L130 102.5L135 98.4L140 94.5L145 91.1L150 87.9L155 85.1L160 82.6L165 80.3L170 78.4L175 76.6L180 75.1L185 73.8L190 72.7L195 71.9L200 71.2L205 70.6L210 70.3L215 70.1L220 70L225 70.1L230 70.3L235 70.6L240 71L245 71.5L250 72.1L255 72.8L260 73.6L265 74.4L270 75.4L275 76.3L280 77.4L285 78.5L290 79.6L295 80.8L300 82.1L305 83.3L310 84.6L315 86L320 87.3L325 88.7L330 90.1L335 91.5L340 92.9L345 94.4L350 95.8L355 97.3L360 98.8L365 100.2L370 101.7L375 103.2L380 104.6L385 106.1L390 107.6L395 109L400 110.5L405 111.9L410 113.4L415 114.8L420 116.2L425 117.6L430 119L435 120.4L440 121.7L445 123.1L450 124.4L455 125.7L460 127L465 128.3L470 129.6L475 130.8L480 132" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="470" y="122.8" fill="var(--dg-accent)">F(x)</text>
  <line x1="190" y1="72.7" x2="190" y2="230" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="400" y1="110.5" x2="400" y2="230" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="190" y="248" text-anchor="middle">x₁</text>
  <text x="400" y="248" text-anchor="middle">x₂</text>
  <text x="216" y="248" text-anchor="middle">dx</text>
  <text x="216" y="62" text-anchor="middle">dW = F dx</text>
  <text x="332" y="190" text-anchor="middle">W = ∫F dx</text>
  <text x="332" y="208" text-anchor="middle">= shaded area</text>
</svg>`,
    },
    {
      title: "Potential energy curve of a spring",
      caption: "U = ½kx² is a **parabola** with its minimum at the equilibrium position x = 0. The total energy E = ½kA² is a horizontal line; at any x, U is the height of the curve and K = E − U is the gap up to the E line. At x = ±A, K = 0 (turning points).",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-5-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-5-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="235" x2="500" y2="235" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-5-2)"/>
  <line x1="280" y1="235" x2="280" y2="24" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-5-2)"/>
  <text x="506" y="239">x</text>
  <text x="286" y="24">U, E</text>
  <path d="M130 70L135 80.8L140 91.3L145 101.3L150 111.1L155 120.4L160 129.4L165 138L170 146.3L175 154.1L180 161.7L185 168.8L190 175.6L195 182L200 188.1L205 193.8L210 199.1L215 204L220 208.6L225 212.8L230 216.7L235 220.2L240 223.3L245 226L250 228.4L255 230.4L260 232.1L265 233.3L270 234.3L275 234.8L280 235L285 234.8L290 234.3L295 233.3L300 232.1L305 230.4L310 228.4L315 226L320 223.3L325 220.2L330 216.7L335 212.8L340 208.6L345 204L350 199.1L355 193.8L360 188.1L365 182L370 175.6L375 168.8L380 161.7L385 154.1L390 146.3L395 138L400 129.4L405 120.4L410 111.1L415 101.3L420 91.3L425 80.8L430 70" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="70" y1="85" x2="490" y2="85" stroke="currentColor" stroke-width="1.3" stroke-dasharray="6 4"/>
  <text x="494" y="89">E = ½kA²</text>
  <line x1="137" y1="85" x2="137" y2="235" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="423" y1="85" x2="423" y2="235" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="137" y="253" text-anchor="middle">−A</text>
  <text x="423" y="253" text-anchor="middle">+A</text>
  <text x="280" y="253" text-anchor="middle">O</text>
  <line x1="360" y1="235" x2="360" y2="188.1" stroke="currentColor" stroke-width="3"/>
  <line x1="360" y1="188.1" x2="360" y2="85" stroke="var(--dg-accent)" stroke-width="3"/>
  <text x="368" y="215.5">U</text>
  <text x="352" y="140.5" text-anchor="end" fill="var(--dg-accent)">K = E − U</text>
  <text x="360" y="253" text-anchor="middle">x</text>
  <text x="145" y="103">K = 0</text>
  <text x="415" y="103" text-anchor="end">K = 0</text>
  <text x="280" y="77" text-anchor="middle">K max at O</text>
  <text x="190" y="195" text-anchor="end">U min at x = 0</text>
  <text x="430" y="175" fill="var(--dg-accent)">U = ½kx²</text>
</svg>`,
    },
    {
      title: "Collisions in one dimension",
      caption: "**Elastic** (equal masses, one initially at rest): momentum and kinetic energy are both conserved and the velocities are exchanged. **Perfectly inelastic:** the bodies stick together, momentum is conserved but kinetic energy is lost; here v = u/2.",
      svg: `<svg viewBox="0 0 560 440" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-5-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-5-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="20" y="28">Elastic collision (equal masses m)</text>
  <text x="20" y="76">Before</text>
  <circle cx="150" cy="72" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="150" y="76" text-anchor="middle">m</text>
  <line x1="172" y1="72" x2="252" y2="72" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-5-3)"/>
  <text x="212" y="60" text-anchor="middle" fill="var(--dg-accent)">u₁</text>
  <circle cx="360" cy="72" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="360" y="76" text-anchor="middle">m</text>
  <text x="360" y="110" text-anchor="middle">u₂ = 0</text>
  <text x="20" y="164">After</text>
  <circle cx="270" cy="160" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="270" y="164" text-anchor="middle">m</text>
  <text x="270" y="198" text-anchor="middle">v₁ = 0</text>
  <circle cx="360" cy="160" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="360" y="164" text-anchor="middle">m</text>
  <line x1="382" y1="160" x2="462" y2="160" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-5-3)"/>
  <text x="422" y="148" text-anchor="middle" fill="var(--dg-accent)">v₂ = u₁</text>
  <line x1="20" y1="222" x2="540" y2="222" stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="20" y="248">Perfectly inelastic collision</text>
  <text x="20" y="294">Before</text>
  <circle cx="150" cy="290" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="150" y="294" text-anchor="middle">m</text>
  <line x1="172" y1="290" x2="252" y2="290" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-5-3)"/>
  <text x="212" y="278" text-anchor="middle" fill="var(--dg-accent)">u</text>
  <circle cx="360" cy="290" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="360" y="294" text-anchor="middle">m</text>
  <text x="360" y="328" text-anchor="middle">at rest</text>
  <text x="20" y="384">After</text>
  <circle cx="320" cy="380" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="320" y="384" text-anchor="middle">m</text>
  <circle cx="360" cy="380" r="20" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/><text x="360" y="384" text-anchor="middle">m</text>
  <line x1="382" y1="380" x2="422" y2="380" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-5-3)"/>
  <text x="402" y="368" text-anchor="middle" fill="var(--dg-accent)">v = u/2</text>
  <text x="340" y="420" text-anchor="middle">stuck together, mass 2m</text>
</svg>`,
    },
  ],
  "system-of-particles-and-rotational-motion": [
    {
      title: "Centre of mass of two particles",
      caption: "The centre of mass lies on the line joining the particles, **nearer the heavier one**, at x_cm = (m₁x₁ + m₂x₂)/(m₁ + m₂). Here m₂ = 3m₁, so the CM is three times closer to m₂ than to m₁ (m₁r₁ = m₂r₂).",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-6-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-6-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="130" x2="520" y2="130" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-1)"/>
  <text x="526" y="134">x</text>
  <text x="60" y="148" text-anchor="middle">O</text>
  <circle cx="140" cy="130" r="13" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="440" cy="130" r="22" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="140" y="134" text-anchor="middle" font-size="12">m₁</text>
  <text x="440" y="134" text-anchor="middle">m₂</text>
  <line x1="359" y1="124" x2="371" y2="136" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="359" y1="136" x2="371" y2="124" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="365" y="116" text-anchor="middle" fill="var(--dg-accent)">CM</text>
  <line x1="140" y1="146" x2="140" y2="168" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="140" y="184" text-anchor="middle">x₁</text>
  <line x1="365" y1="146" x2="365" y2="168" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="365" y="184" text-anchor="middle">x<tspan dy="3" font-size="10">cm</tspan><tspan dy="-3">​</tspan></text>
  <line x1="440" y1="156" x2="440" y2="168" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="440" y="184" text-anchor="middle">x₂</text>
  <line x1="140" y1="78" x2="362" y2="78" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-1)"/>
  <line x1="365" y1="78" x2="143" y2="78" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-1)"/>
  <text x="252.5" y="70" text-anchor="middle">r₁</text>
  <line x1="365" y1="78" x2="437" y2="78" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-1)"/>
  <line x1="440" y1="78" x2="368" y2="78" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-1)"/>
  <text x="402.5" y="70" text-anchor="middle">r₂</text>
  <text x="280" y="236" text-anchor="middle">x<tspan dy="3" font-size="10">cm</tspan><tspan dy="-3">​</tspan> = (m₁x₁ + m₂x₂)/(m₁ + m₂)</text>
</svg>`,
    },
    {
      title: "Torque and angular momentum",
      caption: "**Left:** τ = r × F, magnitude rF sin θ = F × (perpendicular distance d from the axis to the line of action of F). **Right:** for a particle on a circle, L = r × p points along the axis and L = mvr = Iω.",
      svg: `<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-6-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-6-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="194.7" y1="218.9" x2="230.3" y2="17" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="60" y1="185" x2="196.5" y2="209.1" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="60" y1="185" x2="210.4" y2="130.3" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-6-2)"/>
  <line x1="210.4" y1="130.3" x2="225.1" y2="46.6" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-6-2)"/>
  <circle cx="60" cy="185" r="4" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <text x="54" y="203" text-anchor="start">O (axis)</text>
  <path d="M187.6 207.5L189.2 198.6L198 200.2" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="130" y="145">r</text>
  <text x="233.1" y="50.6" fill="var(--dg-accent)">F</text>
  <text x="84" y="229">d = r sin θ</text>
  <path d="M238.5 120A30 30 0 0 0 215.6 100.7" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text x="246.4" y="116.3">θ</text>
  <text x="60" y="254">τ = r F sin θ = F d</text>
  <circle cx="270" cy="250" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="270" cy="250" r="2" fill="currentColor"/>
  <text x="282" y="254">out of page</text>
  <circle cx="420" cy="125" r="80" fill="none" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="420" cy="125" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="420" cy="125" r="2" fill="currentColor"/>
  <text x="406" y="147" text-anchor="end" fill="var(--dg-accent)">L</text>
  <line x1="420" y1="125" x2="476.6" y2="68.4" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-6-2)"/>
  <line x1="476.6" y1="68.4" x2="432.7" y2="24.6" stroke="var(--dg-accent)" stroke-width="1.8" marker-end="url(#ar-c11p-6-2)"/>
  <circle cx="476.6" cy="68.4" r="5" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <text x="454" y="91">r</text>
  <text x="426.7" y="18.6" text-anchor="end" fill="var(--dg-accent)">p = mv</text>
  <text x="486.6" y="82.4">m</text>
  <text x="420" y="254" text-anchor="middle">L = r p = mvr = Iω</text>
  <text x="420" y="232" text-anchor="middle">(r ⟂ p; L along the axis)</text>
</svg>`,
    },
    {
      title: "Moment of inertia: parallel and perpendicular axes",
      caption: "**Parallel axes:** I = I_cm + Md², where d is the distance between the axis through the centre of mass and the parallel axis. For a rod this gives I_end = ML²/12 + M(L/2)² = ML²/3. **Perpendicular axes (flat lamina only):** I_z = I_x + I_y.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-6-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-6-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <rect x="40" y="142" width="160" height="16" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="120" y1="60" x2="120" y2="240" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4"/>
  <line x1="200" y1="60" x2="200" y2="240" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <circle cx="120" cy="150" r="3.5" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <text x="112" y="176" text-anchor="end">CM</text>
  <text x="120" y="52" text-anchor="middle">axis through CM</text>
  <text x="206" y="52" text-anchor="start" fill="var(--dg-accent)">parallel axis</text>
  <line x1="123" y1="100" x2="197" y2="100" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-3)"/>
  <line x1="200" y1="100" x2="123" y2="100" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-3)"/>
  <text x="160" y="94" text-anchor="middle">d</text>
  <line x1="120" y1="194" x2="40" y2="194" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-3)"/>
  <line x1="120" y1="194" x2="200" y2="194" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-3)"/>
  <text x="128" y="190">L</text>
  <text x="20" y="262">I = I<tspan dy="3" font-size="10">cm</tspan><tspan dy="-3">​</tspan> + Md²</text>
  <text x="20" y="284">I<tspan dy="3" font-size="10">end</tspan><tspan dy="-3">​</tspan> = ML²/12 + M(L/2)² = ML²/3</text>
  <circle cx="430" cy="150" r="72" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <line x1="330" y1="150" x2="530" y2="150" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-3)"/>
  <line x1="430" y1="250" x2="430" y2="50" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-6-3)"/>
  <text x="534" y="154">x</text>
  <text x="436" y="52">y</text>
  <circle cx="430" cy="150" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="430" cy="150" r="2" fill="currentColor"/>
  <text x="442" y="172">z</text>
  <text x="430" y="262" text-anchor="middle">I<tspan dy="3" font-size="10">z</tspan><tspan dy="-3">​</tspan> = I<tspan dy="3" font-size="10">x</tspan><tspan dy="-3">​</tspan> + I<tspan dy="3" font-size="10">y</tspan><tspan dy="-3">​</tspan></text>
  <text x="430" y="284" text-anchor="middle">(flat lamina; z-axis ⟂ plane, out of page)</text>
</svg>`,
    },
  ],
  "gravitation": [
    {
      title: "Variation of g with distance from the earth's centre",
      caption: "Inside the earth g falls **linearly** to zero at the centre (g = g₀r/R); outside it falls as **1/r²** (g = g₀R²/r²). The maximum value g₀ = GM/R² is at the surface.",
      svg: `<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-7-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-7-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="70" y1="230" x2="530" y2="230" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-7-1)"/>
  <line x1="70" y1="230" x2="70" y2="24" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-7-1)"/>
  <text x="536" y="234">r</text>
  <text x="66" y="22" text-anchor="end">g</text>
  <text x="64" y="246" text-anchor="end">O</text>
  <line x1="70" y1="230" x2="220" y2="80" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M220 80L226 91.3L232 101.4L238 110.4L244 118.5L250 125.8L256 132.4L262 138.4L268 143.9L274 148.9L280 153.5L286 157.7L292 161.5L298 165.1L304 168.4L310 171.4L316 174.2L322 176.9L328 179.3L334 181.6L340 183.7L346 185.7L352 187.6L358 189.3L364 191L370 192.5L376 194L382 195.3L388 196.6L394 197.8L400 199L406 200.1L412 201.1L418 202.1L424 203.1L430 204L436 204.8L442 205.6L448 206.4L454 207.1L460 207.8L466 208.5L472 209.1L478 209.7L484 210.3L490 210.9L496 211.4L502 211.9L508 212.4L514 212.9L520 213.3L520 213.3" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="220" y1="80" x2="220" y2="230" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="70" y1="80" x2="220" y2="80" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="220" y="248" text-anchor="middle">R</text>
  <text x="64" y="84" text-anchor="end">g₀</text>
  <text x="100" y="110">inside: g ∝ r</text>
  <text x="340" y="120">outside: g ∝ 1/r²</text>
  <text x="340" y="140">g = g₀R²/r²</text>
  <text x="226" y="72" fill="var(--dg-muted)">surface</text>
</svg>`,
    },
    {
      title: "Kepler's second law: equal areas in equal times",
      caption: "The planet moves in an ellipse with the Sun at one **focus**. The line from the Sun to the planet sweeps out **equal areas in equal intervals of time** (A₁ = A₂), so the planet moves fastest at perihelion and slowest at aphelion; this is conservation of angular momentum.",
      svg: `<svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-7-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-7-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M480 162L479.7 155.1L478.9 148.2L477.5 141.3L475.6 134.5L473.2 127.8L470.2 121.1L466.7 114.6L462.7 108.2L458.2 101.9L453.2 95.9L447.7 90L441.8 84.2L435.4 78.7L428.6 73.5L421.4 68.5L413.8 63.7L405.9 59.2L397.6 55L388.9 51.1L380 47.4L370.8 44.1L361.3 41.1L351.7 38.5L341.8 36.2L331.8 34.2L321.6 32.6L311.3 31.3L300.9 30.4L290.5 29.9L280 29.7L269.5 29.9L259.1 30.4L248.7 31.3L238.4 32.6L228.2 34.2L218.2 36.2L208.3 38.5L198.7 41.1L189.2 44.1L180 47.4L171.1 51.1L162.4 55L154.1 59.2L146.2 63.7L138.6 68.5L131.4 73.5L124.6 78.7L118.2 84.2L112.3 90L106.8 95.9L101.8 101.9L97.3 108.2L93.3 114.6L89.8 121.1L86.8 127.8L84.4 134.5L82.5 141.3L81.1 148.2L80.3 155.1L80 162L80.3 168.9L81.1 175.8L82.5 182.7L84.4 189.5L86.8 196.2L89.8 202.9L93.3 209.4L97.3 215.8L101.8 222.1L106.8 228.1L112.3 234L118.2 239.8L124.6 245.3L131.4 250.5L138.6 255.5L146.2 260.3L154.1 264.8L162.4 269L171.1 272.9L180 276.6L189.2 279.9L198.7 282.9L208.3 285.5L218.2 287.8L228.2 289.8L238.4 291.4L248.7 292.7L259.1 293.6L269.5 294.1L280 294.3L290.5 294.1L300.9 293.6L311.3 292.7L321.6 291.4L331.8 289.8L341.8 287.8L351.7 285.5L361.3 282.9L370.8 279.9L380 276.6L388.9 272.9L397.6 269L405.9 264.8L413.8 260.3L421.4 255.5L428.6 250.5L435.4 245.3L441.8 239.8L447.7 234L453.2 228.1L458.2 222.1L462.7 215.8L466.7 209.4L470.2 202.9L473.2 196.2L475.6 189.5L477.5 182.7L478.9 175.8L479.7 168.9L480 162z" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M430 162L365.8 281.5L375.9 278.1L386.3 274L397 269.3L408 263.6L419.2 257L430.5 249.1L441.8 239.8L452.8 228.6L463.1 215.3L471.8 199.6L477.8 181.6L480 162L477.8 142.4L471.8 124.4L463.1 108.7L452.8 95.4L441.8 84.2L430.5 74.9L419.2 67L408 60.4L397 54.7L386.3 50L375.9 45.9L365.8 42.5z" fill="var(--dg-accent)" fill-opacity=".4" stroke="var(--dg-accent)" stroke-width="1.2"/>
  <path d="M430 162L86.6 128.2L85.6 131L84.6 133.8L83.7 136.6L82.9 139.4L82.3 142.2L81.7 145L81.1 147.8L80.7 150.7L80.4 153.5L80.2 156.3L80 159.2L80 162L80 164.8L80.2 167.7L80.4 170.5L80.7 173.3L81.1 176.2L81.7 179L82.3 181.8L82.9 184.6L83.7 187.4L84.6 190.2L85.6 193L86.6 195.8z" fill="var(--dg-accent)" fill-opacity=".4" stroke="var(--dg-accent)" stroke-width="1.2"/>
  <circle cx="430" cy="162" r="8" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <text x="426" y="188" text-anchor="middle">Sun (focus)</text>
  <text x="488" y="166">perihelion</text>
  <text x="72" y="166" text-anchor="end">aphelion</text>
  <text x="456" y="142" fill="var(--dg-accent)">A₁</text>
  <text x="150" y="166" text-anchor="middle" fill="var(--dg-accent)">A₂</text>
  <text x="250" y="89.7" text-anchor="middle">A₁ = A₂ for equal times</text>
</svg>`,
    },
    {
      title: "Satellite in a circular orbit",
      caption: "Gravity F = GMm/r² supplies the centripetal force, so the velocity v is along the tangent and the force points to the earth's centre. With r = R + h: v₀ = √(GM/r) and T = 2π√(r³/GM); T² ∝ r³ (Kepler's third law).",
      svg: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-7-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-7-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <circle cx="190" cy="160" r="80" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="190" cy="160" r="130" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="6 4"/>
  <text x="164" y="154" text-anchor="middle">Earth</text>
  <circle cx="190" cy="160" r="2.5" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <line x1="190" y1="160" x2="289.6" y2="76.4" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="289.6" cy="76.4" r="6" fill="currentColor" stroke="currentColor" stroke-width="1.4"/>
  <text x="299.6" y="68.4">satellite</text>
  <line x1="289.6" y1="76.4" x2="243.3" y2="21.3" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-7-3)"/>
  <text x="237.3" y="17.3" text-anchor="end" fill="var(--dg-accent)">v</text>
  <line x1="289.6" y1="76.4" x2="242.1" y2="116.3" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-7-3)"/>
  <text x="295.6" y="106.4" fill="var(--dg-accent)">F</text>
  <text x="228" y="156">r</text>
  <line x1="190" y1="160" x2="190" y2="238" stroke="currentColor" stroke-width="1.2" marker-end="url(#ax-c11p-7-3)"/>
  <text x="196" y="204">R</text>
  <line x1="107" y1="160" x2="62" y2="160" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-7-3)"/>
  <text x="85" y="152" text-anchor="middle">h</text>
  <text x="370" y="90">v₀ = √(GM/r)</text>
  <text x="370" y="114">= √(gR²/(R + h))</text>
  <text x="370" y="142">T = 2π√(r³/GM)</text>
  <text x="370" y="170">r = R + h</text>
  <text x="370" y="200" fill="var(--dg-accent)">F = GMm/r² (towards centre)</text>
</svg>`,
    },
  ],
  "mechanical-properties-of-solids": [
    {
      title: "Stress–strain curve for a ductile metal",
      caption: "Up to the **proportional limit P** stress ∝ strain (**Hooke's law**), and the slope is **Young's modulus**. Beyond the **elastic limit E** the wire does not fully recover; at the **yield point Y** it stretches with little extra stress, then necks and breaks at **F**. U is the maximum stress the wire can bear.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-8-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-8-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="80" y1="250" x2="520" y2="250" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-8-1)"/>
  <line x1="80" y1="250" x2="80" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-8-1)"/>
  <text x="526" y="254">Strain</text>
  <text x="86" y="24">Stress</text>
  <text x="72" y="254" text-anchor="end">O</text>
  <path d="M80 250L160 150Q172 135 185 128L215 118L255 123C300 118 350 62 390 60Q440 62 470 100" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <circle cx="160" cy="150" r="3.5" fill="currentColor"/>
  <circle cx="185" cy="128" r="3.5" fill="currentColor"/>
  <circle cx="215" cy="118" r="3.5" fill="currentColor"/>
  <circle cx="390" cy="60" r="3.5" fill="currentColor"/>
  <circle cx="470" cy="100" r="3.5" fill="currentColor"/>
  <text x="150" y="146" text-anchor="end">P</text>
  <text x="176" y="122" text-anchor="end">E</text>
  <text x="214" y="108" text-anchor="middle">Y</text>
  <text x="390" y="50" text-anchor="middle">U</text>
  <text x="480" y="104">F</text>
  <line x1="185" y1="128" x2="185" y2="250" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="160" y1="150" x2="160" y2="250" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="194" y="238" font-size="12" fill="var(--dg-muted)">slope = Young's modulus</text>
  <line x1="80" y1="268" x2="185" y2="268" stroke="currentColor" stroke-width="1.4"/>
  <line x1="80" y1="264" x2="80" y2="272" stroke="currentColor" stroke-width="1.4"/>
  <line x1="185" y1="264" x2="185" y2="272" stroke="currentColor" stroke-width="1.4"/>
  <line x1="185" y1="268" x2="470" y2="268" stroke="currentColor" stroke-width="1.4"/>
  <line x1="470" y1="264" x2="470" y2="272" stroke="currentColor" stroke-width="1.4"/>
  <text x="132" y="288" text-anchor="middle">elastic region</text>
  <text x="328" y="288" text-anchor="middle">plastic region (permanent deformation)</text>
  <text x="345" y="160">P  proportional limit</text>
  <text x="345" y="178">E  elastic limit</text>
  <text x="345" y="196">Y  yield point</text>
  <text x="345" y="214">U  ultimate tensile strength</text>
  <text x="345" y="232">F  fracture point</text>
</svg>`,
    },
  ],
  "mechanical-properties-of-fluids": [
    {
      title: "Venturimeter",
      caption: "In the narrow throat the fluid speeds up (**A₁v₁ = A₂v₂**), so by **Bernoulli's theorem** its pressure falls. The difference in liquid levels h in the two tubes gives **P₁ − P₂ = ρgh**, from which the flow speed is found.",
      svg: `<svg viewBox="0 0 560 305" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-9-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-9-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M60 130H170L230 150H330L390 130H500M60 210H170L230 190H330L390 210H500" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="107" y="70" width="16" height="60" fill="var(--dg-fill)"/>
  <rect x="272" y="100" width="16" height="50" fill="var(--dg-fill)"/>
  <line x1="107" y1="130" x2="107" y2="50" stroke="currentColor" stroke-width="1.4"/>
  <line x1="123" y1="130" x2="123" y2="50" stroke="currentColor" stroke-width="1.4"/>
  <line x1="272" y1="150" x2="272" y2="50" stroke="currentColor" stroke-width="1.4"/>
  <line x1="288" y1="150" x2="288" y2="50" stroke="currentColor" stroke-width="1.4"/>
  <line x1="123" y1="70" x2="340" y2="70" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="288" y1="100" x2="340" y2="100" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="335" y1="85" x2="335" y2="71" stroke="currentColor" stroke-width="1.3" marker-end="url(#ax-c11p-9-1)"/>
  <line x1="335" y1="85" x2="335" y2="99" stroke="currentColor" stroke-width="1.3" marker-end="url(#ax-c11p-9-1)"/>
  <text x="345" y="89">h</text>
  <line x1="70" y1="172" x2="145" y2="172" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-9-1)"/>
  <text x="158" y="176" fill="var(--dg-accent)">v₁</text>
  <line x1="238" y1="172" x2="318" y2="172" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-9-1)"/>
  <text x="330" y="176" fill="var(--dg-accent)">v₂</text>
  <text x="115" y="232" text-anchor="middle">A₁, P₁</text>
  <text x="280" y="218" text-anchor="middle">A₂, P₂</text>
  <text x="190" y="44">open tubes show the pressure difference</text>
  <text x="30" y="275">Continuity: A₁v₁ = A₂v₂, so v₂ > v₁ in the narrow part</text>
  <text x="30" y="296">Bernoulli: P₁ − P₂ = ½ρ(v₂² − v₁²) = ρgh, so P₂ &lt; P₁</text>
</svg>`,
    },
    {
      title: "Capillary rise and contact angle",
      caption: "**Contact angle θ** is the angle between the glass wall and the tangent to the liquid surface, measured inside the liquid. For water θ is acute, the meniscus is concave and the liquid **rises** in a narrow tube; for mercury θ is obtuse, the meniscus is convex and the level is **depressed**. **h = 2T cos θ/(rρg)**.",
      svg: `<svg viewBox="0 0 560 325" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-9-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-9-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <path d="M40 130V275H240V130" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="41" y="170" width="198" height="105" fill="var(--dg-fill)" opacity="0.7"/>
  <path d="M100 81.3A52.2 52.2 0 0 0 180 81.3V245H100Z" fill="var(--dg-fill)" opacity="0.9"/>
  <path d="M100 81.3A52.2 52.2 0 0 0 180 81.3" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="40" x2="100" y2="245" stroke="currentColor" stroke-width="1.8"/>
  <line x1="180" y1="40" x2="180" y2="245" stroke="currentColor" stroke-width="1.8"/>
  <line x1="41" y1="170" x2="99" y2="170" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="181" y1="170" x2="239" y2="170" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="100" y1="81.3" x2="125.7" y2="112" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M100 98.3A17 17 0 0 0 110.9 94.4" fill="none" stroke="var(--dg-accent)" stroke-width="1.4"/>
  <text x="110.9" y="116.4" text-anchor="middle" fill="var(--dg-accent)">θ</text>
  <line x1="54" y1="100" x2="140" y2="100" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M320 130V275H520V130" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <rect x="321" y="170" width="198" height="105" fill="var(--dg-fill)" opacity="0.7"/>
  <path d="M380 223.7A52.2 52.2 0 0 1 460 223.7V245H380Z" fill="var(--dg-fill)" opacity="0.9"/>
  <path d="M380 223.7A52.2 52.2 0 0 1 460 223.7" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="380" y1="40" x2="380" y2="245" stroke="currentColor" stroke-width="1.8"/>
  <line x1="460" y1="40" x2="460" y2="245" stroke="currentColor" stroke-width="1.8"/>
  <line x1="321" y1="170" x2="379" y2="170" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="461" y1="170" x2="519" y2="170" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="380" y1="223.7" x2="405.7" y2="193" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M380 240.7A17 17 0 0 0 390.9 210.6" fill="none" stroke="var(--dg-accent)" stroke-width="1.4"/>
  <text x="412.1" y="239.6" text-anchor="middle" fill="var(--dg-accent)">θ</text>
  <line x1="334" y1="205" x2="420" y2="205" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="70" y1="135" x2="70" y2="169" stroke="currentColor" stroke-width="1.3" marker-end="url(#ax-c11p-9-2)"/>
  <line x1="70" y1="135" x2="70" y2="100" stroke="currentColor" stroke-width="1.3" marker-end="url(#ax-c11p-9-2)"/>
  <text x="77" y="140">h</text>
  <line x1="350" y1="187.5" x2="350" y2="171" stroke="currentColor" stroke-width="1.3" marker-end="url(#ax-c11p-9-2)"/>
  <line x1="350" y1="187.5" x2="350" y2="205" stroke="currentColor" stroke-width="1.3" marker-end="url(#ax-c11p-9-2)"/>
  <text x="357" y="192">h</text>
  <text x="140" y="25" text-anchor="middle">(a) Water in glass</text>
  <text x="140" y="296" text-anchor="middle">θ &lt; 90°: concave meniscus, rises</text>
  <text x="420" y="25" text-anchor="middle">(b) Mercury in glass</text>
  <text x="420" y="296" text-anchor="middle">θ > 90°: convex meniscus, depressed</text>
  <text x="280" y="316" text-anchor="middle">h = 2T cos θ / (r ρ g)</text>
</svg>`,
    },
    {
      title: "Velocity–time graph of a sphere falling in a viscous fluid",
      caption: "The sphere starts from rest with **a = g**. As v grows, the viscous drag rises, the acceleration falls to zero, and the speed approaches a constant **terminal velocity** v_t = 2r²(ρ − σ)g/9η.",
      svg: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-9-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-9-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="70" y1="230" x2="510" y2="230" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-9-3)"/>
  <line x1="70" y1="230" x2="70" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-9-3)"/>
  <text x="516" y="234">t</text>
  <text x="64" y="28" text-anchor="end">v</text>
  <text x="62" y="246" text-anchor="end">O</text>
  <line x1="70" y1="80" x2="480" y2="80" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="80" y="72">terminal velocity v<tspan dy="3" font-size="10">t</tspan><tspan dy="-3"></tspan></text>
  <line x1="70" y1="230" x2="160" y2="80" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M70 230L75 221.9L80 214.2L85 207L90 200.1L95 193.6L100 187.5L105 181.7L110 176.2L115 171L120 166.1L125 161.4L130 157L135 152.9L140 148.9L145 145.2L150 141.7L155 138.3L160 135.2L165 132.2L170 129.4L175 126.7L180 124.2L185 121.8L190 119.5L195 117.4L200 115.4L205 113.5L210 111.7L215 109.9L220 108.3L225 106.8L230 105.4L235 104L240 102.7L245 101.5L250 100.3L255 99.2L260 98.2L265 97.2L270 96.3L275 95.4L280 94.5L285 93.8L290 93L295 92.3L300 91.6L305 91L310 90.4L315 89.9L320 89.3L325 88.8L330 88.3L335 87.9L340 87.5L345 87.1L350 86.7L355 86.3L360 86L365 85.7L370 85.4L375 85.1L380 84.8L385 84.5L390 84.3L395 84.1L400 83.8L405 83.6L410 83.4L415 83.2L420 83.1L425 82.9L430 82.7L435 82.6L440 82.5L445 82.3L450 82.2L455 82.1L460 82L465 81.9L470 81.8L475 81.7L480 81.6" fill="none" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <text x="172" y="198" font-size="12">initial slope = g</text>
  <text x="300" y="168">At v = v<tspan dy="3" font-size="10">t</tspan><tspan dy="-3">:</tspan></text>
  <text x="300" y="187">weight = drag + upthrust</text>
  <text x="300" y="206">so a = 0</text>
</svg>`,
    },
  ],
  "thermal-properties-of-matter": [
    {
      title: "Heating curve of water",
      caption: "Heat is supplied at a steady rate to ice at −20 °C. The temperature rises along the sloping parts; on the **flat parts (0 °C and 100 °C) the heat goes into changing state** as latent heat (**Q = mL**), not into raising the temperature.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-10-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-10-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="80" y1="240" x2="525" y2="240" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-10-1)"/>
  <line x1="80" y1="240" x2="80" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-10-1)"/>
  <text x="528" y="258">Q</text>
  <text x="86" y="28">T (°C)</text>
  <text x="74" y="204" text-anchor="end">0</text>
  <text x="74" y="94" text-anchor="end">100</text>
  <line x1="80" y1="200" x2="125" y2="200" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="80" y1="90" x2="285" y2="90" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M95 222L125 200L185 200L285 90L455 90L485 68" fill="none" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <text x="96" y="190">ice</text>
  <text x="152" y="190" text-anchor="middle" font-size="12">ice + water</text>
  <text x="242" y="176">water</text>
  <text x="370" y="80" text-anchor="middle">water + steam</text>
  <text x="508" y="62" text-anchor="middle">steam</text>
  <line x1="125" y1="200" x2="125" y2="240" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="185" y1="200" x2="185" y2="240" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="285" y1="90" x2="285" y2="240" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="455" y1="90" x2="455" y2="240" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="125" y1="252" x2="185" y2="252" stroke="currentColor" stroke-width="1.4"/>
  <line x1="125" y1="248" x2="125" y2="256" stroke="currentColor" stroke-width="1.4"/>
  <line x1="185" y1="248" x2="185" y2="256" stroke="currentColor" stroke-width="1.4"/>
  <line x1="285" y1="252" x2="455" y2="252" stroke="currentColor" stroke-width="1.4"/>
  <line x1="285" y1="248" x2="285" y2="256" stroke="currentColor" stroke-width="1.4"/>
  <line x1="455" y1="248" x2="455" y2="256" stroke="currentColor" stroke-width="1.4"/>
  <text x="155" y="272" text-anchor="middle">mL<tspan dy="3" font-size="10">f</tspan><tspan dy="-3"></tspan></text>
  <text x="155" y="288" text-anchor="middle" fill="var(--dg-muted)">(fusion)</text>
  <text x="370" y="272" text-anchor="middle">mL<tspan dy="3" font-size="10">v</tspan><tspan dy="-3"></tspan></text>
  <text x="370" y="288" text-anchor="middle" fill="var(--dg-muted)">(vaporisation)</text>
  <text x="540" y="30" text-anchor="end" fill="var(--dg-muted)">(not to scale)</text>
</svg>`,
    },
    {
      title: "Anomalous expansion of water",
      caption: "Between **0 °C and 4 °C water contracts on heating**; above 4 °C it expands like other liquids. So its volume is least, and its **density greatest, at 4 °C**, which is why ponds freeze from the top and aquatic life survives below the ice.",
      svg: `<svg viewBox="0 0 560 275" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-10-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-10-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="80" y1="240" x2="520" y2="240" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-10-2)"/>
  <line x1="80" y1="240" x2="80" y2="30" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-10-2)"/>
  <text x="526" y="244">T (°C)</text>
  <text x="86" y="26">Volume of a fixed mass of water</text>
  <path d="M90 161L98 163.3L106 165.6L114 167.7L122 169.6L130 171.5L138 173.2L146 174.9L154 176.4L162 177.7L170 179L178 180.1L186 181.2L194 182.1L202 182.8L210 183.5L218 184L226 184.5L234 184.8L242 184.9L250 185L258 184.9L266 184.8L274 184.5L282 184L290 183.5L298 182.8L306 182.1L314 181.2L322 180.1L330 179L338 177.7L346 176.4L354 174.9L362 173.2L370 171.5L378 169.6L386 167.7L394 165.6L402 163.3L410 161L418 158.5L426 156L434 153.3L442 150.4L450 147.5L458 144.4L466 141.3L474 138L482 134.5L490 131" fill="none" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <line x1="250" y1="186" x2="250" y2="240" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="90" y="258" text-anchor="middle">0</text>
  <text x="170" y="258" text-anchor="middle">2</text>
  <text x="250" y="258" text-anchor="middle">4</text>
  <text x="330" y="258" text-anchor="middle">6</text>
  <text x="410" y="258" text-anchor="middle">8</text>
  <text x="490" y="258" text-anchor="middle">10</text>
  <text x="250" y="128" text-anchor="middle">minimum volume,</text>
  <text x="250" y="146" text-anchor="middle">maximum density at 4 °C</text>
  <text x="95" y="62">0 to 4 °C:</text>
  <text x="95" y="80">volume decreases</text>
  <text x="330" y="62">above 4 °C:</text>
  <text x="330" y="80">volume increases</text>
</svg>`,
    },
  ],
  "thermodynamics": [
    {
      title: "Isothermal and adiabatic expansion on a P–V diagram",
      caption: "Both curves start at A. The **adiabatic curve (PVᵞ = const) is steeper** than the isotherm (PV = const) because γ > 1: on adiabatic expansion the gas also cools, so its pressure falls more. The area under each curve is the work done, larger for the isothermal path.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-11-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-11-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="270" x2="500" y2="270" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-11-1)"/>
  <line x1="60" y1="270" x2="60" y2="25" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-11-1)"/>
  <text x="506" y="274">V</text>
  <text x="54" y="24" text-anchor="end">P</text>
  <text x="54" y="286" text-anchor="end">O</text>
  <path d="M144 86.7L149.6 98.1L155.2 108.2L160.8 117.2L166.4 125.3L172 132.5L177.6 139L183.2 145L188.8 150.4L194.4 155.4L200 160L205.6 164.2L211.2 168.1L216.8 171.8L222.4 175.2L228 178.3L233.6 181.3L239.2 184.1L244.8 186.7L250.4 189.1L256 191.4L261.6 193.6L267.2 195.7L272.8 197.6L278.4 199.5L284 201.3L289.6 202.9L295.2 204.5L300.8 206L306.4 207.5L312 208.9L317.6 210.2L323.2 211.5L328.8 212.7L334.4 213.9L340 215L345.6 216.1L351.2 217.1L356.8 218.1L362.4 219.1L368 220L373.6 220.9L379.2 221.8L384.8 222.6L390.4 223.4L396 224.2L401.6 224.9L407.2 225.6L412.8 226.3L418.4 227L424 227.7L429.6 228.3L435.2 229L440.8 229.6L446.4 230.1L452 230.7L457.6 231.3L463.2 231.8L468.8 232.3L474.4 232.8L480 233.3" fill="none" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <path d="M144 45.1L149.6 64.5L155.2 81.3L160.8 95.8L166.4 108.5L172 119.7L177.6 129.6L183.2 138.4L188.8 146.4L194.4 153.5L200 160L205.6 165.9L211.2 171.2L216.8 176.1L222.4 180.6L228 184.8L233.6 188.6L239.2 192.1L244.8 195.4L250.4 198.5L256 201.3L261.6 204L267.2 206.5L272.8 208.8L278.4 211L284 213L289.6 215L295.2 216.8L300.8 218.5L306.4 220.1L312 221.7L317.6 223.2L323.2 224.5L328.8 225.9L334.4 227.1L340 228.3L345.6 229.5L351.2 230.5L356.8 231.6L362.4 232.6L368 233.5L373.6 234.4L379.2 235.3L384.8 236.1L390.4 236.9L396 237.7L401.6 238.4L407.2 239.2L412.8 239.8L418.4 240.5L424 241.1L429.6 241.7L435.2 242.3L440.8 242.9L446.4 243.4L452 244L457.6 244.5L463.2 245L468.8 245.5L474.4 245.9L480 246.4" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <line x1="60" y1="160" x2="200" y2="160" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="200" y1="160" x2="200" y2="270" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="410" y1="226" x2="410" y2="270" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="200" cy="160" r="3.5" fill="currentColor"/>
  <circle cx="410" cy="226" r="3.5" fill="currentColor"/>
  <circle cx="410" cy="239.5" r="3.5" fill="currentColor"/>
  <text x="208" y="150">A</text>
  <text x="419" y="222">B</text>
  <text x="419" y="253.5">C</text>
  <text x="54" y="164" text-anchor="end">P₁</text>
  <text x="200" y="286" text-anchor="middle">V₁</text>
  <text x="410" y="286" text-anchor="middle">V₂</text>
  <line x1="310" y1="56" x2="340" y2="56" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <text x="348" y="60">AB isothermal: PV = const</text>
  <line x1="310" y1="80" x2="340" y2="80" stroke="currentColor" stroke-width="2.4"/>
  <text x="348" y="84">AC adiabatic: PV<tspan dy="-5" font-size="10">γ</tspan><tspan dy="5">&#160;= const</tspan></text>
  <text x="348" y="104" fill="var(--dg-muted)">(adiabat is steeper)</text>
</svg>`,
    },
    {
      title: "Carnot cycle on a P–V diagram",
      caption: "Two **isothermal** (A→B at T₁, C→D at T₂) and two **adiabatic** (B→C, D→A) steps. The enclosed area is the **net work W = Q₁ − Q₂**, and the efficiency is **η = 1 − T₂/T₁ = 1 − Q₂/Q₁**.",
      svg: `<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-11-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-11-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="60" y1="305" x2="520" y2="305" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-11-2)"/>
  <line x1="60" y1="305" x2="60" y2="25" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-11-2)"/>
  <text x="526" y="309">V</text>
  <text x="54" y="24" text-anchor="end">P</text>
  <text x="54" y="321" text-anchor="end">O</text>
  <path d="M150 50L151.8 54.9L153.6 59.6L155.4 64.2L157.2 68.5L159 72.7L160.8 76.8L162.6 80.7L164.4 84.5L166.2 88.1L168 91.7L169.8 95.1L171.6 98.4L173.4 101.6L175.2 104.7L177 107.7L178.8 110.6L180.6 113.4L182.4 116.2L184.2 118.8L186 121.4L187.8 123.9L189.6 126.4L191.4 128.8L193.2 131.1L195 133.3L196.8 135.5L198.6 137.7L200.4 139.7L202.2 141.8L204 143.8L204 143.8L212.8 158.4L221.6 171L230.3 181.9L239.1 191.4L247.9 199.7L256.7 207.1L265.4 213.6L274.2 219.4L283 224.6L291.8 229.3L300.5 233.6L309.3 237.4L318.1 240.9L326.9 244.1L335.6 247.1L344.4 249.7L353.2 252.2L362 254.5L370.8 256.6L379.5 258.6L388.3 260.4L397.1 262.1L405.9 263.7L414.6 265.2L423.4 266.6L432.2 267.9L441 269.1L449.7 270.3L458.5 271.4L467.3 272.4L467.3 272.4L462.2 272L457.1 271.7L452 271.3L446.9 270.9L441.8 270.5L436.7 270.1L431.7 269.7L426.6 269.3L421.5 268.9L416.4 268.4L411.3 268L406.2 267.5L401.1 267L396 266.5L390.9 266L385.8 265.5L380.7 264.9L375.7 264.4L370.6 263.8L365.5 263.2L360.4 262.5L355.3 261.9L350.2 261.2L345.1 260.5L340 259.8L334.9 259.1L329.8 258.3L324.7 257.5L319.6 256.7L314.6 255.8L314.6 255.8L309.1 254.2L303.6 252.4L298.1 250.6L292.6 248.6L287.1 246.6L281.6 244.3L276.2 242L270.7 239.4L265.2 236.7L259.7 233.8L254.2 230.6L248.7 227.2L243.2 223.6L237.8 219.6L232.3 215.3L226.8 210.6L221.3 205.5L215.8 199.9L210.3 193.7L204.9 186.9L199.4 179.4L193.9 171L188.4 161.7L182.9 151.3L177.4 139.5L171.9 126.2L166.5 111L161 93.6L155.5 73.5L150 50Z" fill="var(--dg-fill)" opacity="0.6"/>
  <path d="M150 50L151.8 54.9L153.6 59.6L155.4 64.2L157.2 68.5L159 72.7L160.8 76.8L162.6 80.7L164.4 84.5L166.2 88.1L168 91.7L169.8 95.1L171.6 98.4L173.4 101.6L175.2 104.7L177 107.7L178.8 110.6L180.6 113.4L182.4 116.2L184.2 118.8L186 121.4L187.8 123.9L189.6 126.4L191.4 128.8L193.2 131.1L195 133.3L196.8 135.5L198.6 137.7L200.4 139.7L202.2 141.8L204 143.8" fill="none" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <path d="M204 143.8L212.8 158.4L221.6 171L230.3 181.9L239.1 191.4L247.9 199.7L256.7 207.1L265.4 213.6L274.2 219.4L283 224.6L291.8 229.3L300.5 233.6L309.3 237.4L318.1 240.9L326.9 244.1L335.6 247.1L344.4 249.7L353.2 252.2L362 254.5L370.8 256.6L379.5 258.6L388.3 260.4L397.1 262.1L405.9 263.7L414.6 265.2L423.4 266.6L432.2 267.9L441 269.1L449.7 270.3L458.5 271.4L467.3 272.4" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <path d="M467.3 272.4L462.2 272L457.1 271.7L452 271.3L446.9 270.9L441.8 270.5L436.7 270.1L431.7 269.7L426.6 269.3L421.5 268.9L416.4 268.4L411.3 268L406.2 267.5L401.1 267L396 266.5L390.9 266L385.8 265.5L380.7 264.9L375.7 264.4L370.6 263.8L365.5 263.2L360.4 262.5L355.3 261.9L350.2 261.2L345.1 260.5L340 259.8L334.9 259.1L329.8 258.3L324.7 257.5L319.6 256.7L314.6 255.8" fill="none" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <path d="M314.6 255.8L309.1 254.2L303.6 252.4L298.1 250.6L292.6 248.6L287.1 246.6L281.6 244.3L276.2 242L270.7 239.4L265.2 236.7L259.7 233.8L254.2 230.6L248.7 227.2L243.2 223.6L237.8 219.6L232.3 215.3L226.8 210.6L221.3 205.5L215.8 199.9L210.3 193.7L204.9 186.9L199.4 179.4L193.9 171L188.4 161.7L182.9 151.3L177.4 139.5L171.9 126.2L166.5 111L161 93.6L155.5 73.5L150 50" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <line x1="175.2" y1="104.7" x2="178.8" y2="110.6" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c11p-11-2)"/>
  <line x1="326.9" y1="244.1" x2="344.4" y2="249.7" stroke="currentColor" stroke-width="1.6" marker-end="url(#ax-c11p-11-2)"/>
  <line x1="396" y1="266.5" x2="385.8" y2="265.5" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c11p-11-2)"/>
  <line x1="237.8" y1="219.6" x2="226.8" y2="210.6" stroke="currentColor" stroke-width="1.6" marker-end="url(#ax-c11p-11-2)"/>
  <circle cx="150" cy="50" r="3.5" fill="currentColor"/>
  <circle cx="204" cy="143.8" r="3.5" fill="currentColor"/>
  <circle cx="467.3" cy="272.4" r="3.5" fill="currentColor"/>
  <circle cx="314.6" cy="255.8" r="3.5" fill="currentColor"/>
  <text x="141" y="46" text-anchor="end">A</text>
  <text x="213" y="139.8">B</text>
  <text x="476.3" y="276.4">C</text>
  <text x="306.6" y="273.8" text-anchor="end">D</text>
  <text x="216" y="60" font-size="12">AB: isothermal expansion at T₁</text>
  <text x="216" y="76" font-size="12" fill="var(--dg-muted)">(heat Q₁ absorbed)</text>
  <text x="312" y="173.8" font-size="12">BC: adiabatic expansion</text>
  <text x="384" y="289.3" text-anchor="middle" font-size="12">CD: isothermal compression at T₂ (Q₂ rejected)</text>
  <text x="189" y="190" text-anchor="end" font-size="12">DA: adiabatic</text>
  <text x="189" y="206" text-anchor="end" font-size="12">compression</text>
  <text x="262.5" y="239" text-anchor="middle" fill="var(--dg-accent)">W</text>
</svg>`,
    },
  ],
  "kinetic-theory": [
    {
      title: "Maxwell distribution of molecular speeds",
      caption: "The fraction of molecules with a given speed rises to a peak at the **most probable speed v_p** and has a long tail at high speeds. On **heating (T₂ > T₁) the peak shifts right and flattens**, while the total area stays the same. Always **v_p < v̄ < v_rms**.",
      svg: `<svg viewBox="0 0 560 315" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-12-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-12-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="70" y1="250" x2="540" y2="250" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-12-1)"/>
  <line x1="70" y1="250" x2="70" y2="20" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-12-1)"/>
  <text x="546" y="254">v</text>
  <text x="76" y="20">f(v)</text>
  <text x="64" y="266" text-anchor="end">O</text>
  <path d="M70 250L75.8 249.1L81.5 246.6L87.3 242.3L93 236.5L98.8 229.2L104.6 220.5L110.3 210.7L116.1 199.9L121.8 188.3L127.6 176.2L133.4 163.6L139.1 150.9L144.9 138.2L150.6 125.9L156.4 114L162.2 102.7L167.9 92.3L173.7 82.8L179.4 74.4L185.2 67.2L191 61.3L196.7 56.7L202.5 53.4L208.2 51.4L214 50.7L219.8 51.4L225.5 53.2L231.3 56.2L237 60.2L242.8 65.2L248.6 71L254.3 77.6L260.1 84.8L265.8 92.4L271.6 100.5L277.4 108.8L283.1 117.3L288.9 125.8L294.6 134.4L300.4 142.8L306.2 151.1L311.9 159.1L317.7 166.8L323.4 174.2L329.2 181.3L335 187.9L340.7 194.1L346.5 200L352.2 205.3L358 210.3L363.8 214.9L369.5 219L375.3 222.8L381 226.2L386.8 229.3L392.6 232L398.3 234.4L404.1 236.6L409.8 238.5L415.6 240.2L421.4 241.6L427.1 242.9L432.9 244L438.6 244.9L444.4 245.8L450.2 246.5L455.9 247L461.7 247.5L467.4 248L473.2 248.3L479 248.6L484.7 248.9L490.5 249.1L496.2 249.3L502 249.4L507.8 249.5L513.5 249.6L519.3 249.7L525 249.8L530.8 249.8" fill="none" stroke="currentColor" stroke-width="2.4"/>
  <path d="M70 250L75.9 249.7L81.7 248.9L87.6 247.6L93.4 245.8L99.3 243.5L105.1 240.7L111 237.5L116.8 233.8L122.7 229.8L128.5 225.4L134.4 220.7L140.2 215.7L146.1 210.5L151.9 205L157.8 199.5L163.6 193.8L169.5 188.1L175.3 182.3L181.1 176.6L187 171L192.9 165.5L198.7 160.1L204.5 155L210.4 150L216.3 145.3L222.1 141L228 136.9L233.8 133.2L239.7 129.8L245.5 126.8L251.4 124.2L257.2 122L263 120.2L268.9 118.9L274.8 117.9L280.6 117.3L286.5 117.2L292.3 117.4L298.2 118L304 119L309.9 120.3L315.7 121.9L321.5 123.8L327.4 126.1L333.3 128.6L339.1 131.3L345 134.3L350.8 137.4L356.7 140.7L362.5 144.2L368.3 147.8L374.2 151.5L380.1 155.2L385.9 159L391.8 162.9L397.6 166.7L403.5 170.6L409.3 174.4L415.2 178.3L421 182L426.9 185.7L432.7 189.3L438.6 192.8L444.4 196.2L450.3 199.5L456.1 202.7L462 205.8L467.8 208.8L473.7 211.6L479.5 214.3L485.4 216.9L491.2 219.4L497.1 221.7L502.9 223.9L508.8 225.9L514.6 227.9L520.5 229.7L526.3 231.4L532.2 233L538 234.5" fill="none" stroke="var(--dg-accent)" stroke-width="2.4"/>
  <text x="159.3" y="100.2" text-anchor="end">T₁</text>
  <text x="408.4" y="161.9" fill="var(--dg-accent)">T₂ > T₁</text>
  <line x1="214" y1="50.7" x2="214" y2="268" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="232.5" y1="57" x2="232.5" y2="284" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="246.4" y1="68.7" x2="246.4" y2="300" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="211" y="266" text-anchor="end">v<tspan dy="3" font-size="10">p</tspan><tspan dy="-3"></tspan></text>
  <text x="236.5" y="282">v̄</text>
  <text x="250.4" y="298">v<tspan dy="3" font-size="10">rms</tspan><tspan dy="-3"></tspan></text>
  <text x="340" y="50" font-size="12">v<tspan dy="3" font-size="10">p</tspan><tspan dy="-3">&#160;&lt; v̄ &lt; v</tspan><tspan dy="3" font-size="10">rms</tspan><tspan dy="-3"></tspan></text>
  <text x="340" y="68" font-size="12">v<tspan dy="3" font-size="10">p</tspan><tspan dy="-3">&#160;: v̄ : v</tspan><tspan dy="3" font-size="10">rms</tspan><tspan dy="-3">&#160;= 1 : 1.13 : 1.22</tspan></text>
  <text x="340" y="86" font-size="12" fill="var(--dg-muted)">(marked on the T₁ curve)</text>
  <text x="340" y="102" font-size="12" fill="var(--dg-muted)">area under each curve is the same</text>
</svg>`,
    },
  ],
  "oscillations": [
    {
      title: "SHM: displacement, velocity and acceleration against time",
      caption: "For x = A cos ωt: **velocity leads displacement by 90° (π/2)**, and **acceleration is 180° out of phase with displacement** (a = −ω²x). Speed is greatest at x = 0, where a = 0; at x = ±A the speed is zero and |a| is greatest.",
      svg: `<svg viewBox="0 0 560 368" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-13-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-13-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="80" y1="55" x2="408" y2="55" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-13-1)"/>
  <line x1="90" y1="9" x2="90" y2="101" stroke="currentColor" stroke-width="1.4"/>
  <line x1="80" y1="170" x2="408" y2="170" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-13-1)"/>
  <line x1="90" y1="124" x2="90" y2="216" stroke="currentColor" stroke-width="1.4"/>
  <line x1="80" y1="285" x2="408" y2="285" stroke="currentColor" stroke-width="1.4" marker-end="url(#ax-c11p-13-1)"/>
  <line x1="90" y1="239" x2="90" y2="331" stroke="currentColor" stroke-width="1.4"/>
  <line x1="90" y1="12" x2="90" y2="335" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="165" y1="12" x2="165" y2="335" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="240" y1="12" x2="240" y2="335" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="315" y1="12" x2="315" y2="335" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="390" y1="12" x2="390" y2="335" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M90 19L93.8 19.1L97.5 19.4L101.3 20L105 20.8L108.8 21.7L112.5 22.9L116.3 24.3L120 25.9L123.8 27.6L127.5 29.5L131.3 31.6L135 33.8L138.8 36.2L142.5 38.7L146.3 41.2L150 43.9L153.8 46.6L157.5 49.4L161.3 52.2L165 55L168.8 57.8L172.5 60.6L176.3 63.4L180 66.1L183.8 68.8L187.5 71.3L191.3 73.8L195 76.2L198.8 78.4L202.5 80.5L206.3 82.4L210 84.1L213.8 85.7L217.5 87.1L221.3 88.3L225 89.2L228.8 90L232.5 90.6L236.3 90.9L240 91L243.8 90.9L247.5 90.6L251.3 90L255 89.2L258.8 88.3L262.5 87.1L266.3 85.7L270 84.1L273.8 82.4L277.5 80.5L281.3 78.4L285 76.2L288.8 73.8L292.5 71.3L296.3 68.8L300 66.1L303.8 63.4L307.5 60.6L311.3 57.8L315 55L318.8 52.2L322.5 49.4L326.3 46.6L330 43.9L333.8 41.2L337.5 38.7L341.3 36.2L345 33.8L348.8 31.6L352.5 29.5L356.3 27.6L360 25.9L363.8 24.3L367.5 22.9L371.3 21.7L375 20.8L378.8 20L382.5 19.4L386.3 19.1L390 19" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M90 170L93.8 172.8L97.5 175.6L101.3 178.4L105 181.1L108.8 183.8L112.5 186.3L116.3 188.8L120 191.2L123.8 193.4L127.5 195.5L131.3 197.4L135 199.1L138.8 200.7L142.5 202.1L146.3 203.3L150 204.2L153.8 205L157.5 205.6L161.3 205.9L165 206L168.8 205.9L172.5 205.6L176.3 205L180 204.2L183.8 203.3L187.5 202.1L191.3 200.7L195 199.1L198.8 197.4L202.5 195.5L206.3 193.4L210 191.2L213.8 188.8L217.5 186.3L221.3 183.8L225 181.1L228.8 178.4L232.5 175.6L236.3 172.8L240 170L243.8 167.2L247.5 164.4L251.3 161.6L255 158.9L258.8 156.2L262.5 153.7L266.3 151.2L270 148.8L273.8 146.6L277.5 144.5L281.3 142.6L285 140.9L288.8 139.3L292.5 137.9L296.3 136.7L300 135.8L303.8 135L307.5 134.4L311.3 134.1L315 134L318.8 134.1L322.5 134.4L326.3 135L330 135.8L333.8 136.7L337.5 137.9L341.3 139.3L345 140.9L348.8 142.6L352.5 144.5L356.3 146.6L360 148.8L363.8 151.2L367.5 153.7L371.3 156.2L375 158.9L378.8 161.6L382.5 164.4L386.3 167.2L390 170" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <path d="M90 321L93.8 320.9L97.5 320.6L101.3 320L105 319.2L108.8 318.3L112.5 317.1L116.3 315.7L120 314.1L123.8 312.4L127.5 310.5L131.3 308.4L135 306.2L138.8 303.8L142.5 301.3L146.3 298.8L150 296.1L153.8 293.4L157.5 290.6L161.3 287.8L165 285L168.8 282.2L172.5 279.4L176.3 276.6L180 273.9L183.8 271.2L187.5 268.7L191.3 266.2L195 263.8L198.8 261.6L202.5 259.5L206.3 257.6L210 255.9L213.8 254.3L217.5 252.9L221.3 251.7L225 250.8L228.8 250L232.5 249.4L236.3 249.1L240 249L243.8 249.1L247.5 249.4L251.3 250L255 250.8L258.8 251.7L262.5 252.9L266.3 254.3L270 255.9L273.8 257.6L277.5 259.5L281.3 261.6L285 263.8L288.8 266.2L292.5 268.7L296.3 271.2L300 273.9L303.8 276.6L307.5 279.4L311.3 282.2L315 285L318.8 287.8L322.5 290.6L326.3 293.4L330 296.1L333.8 298.8L337.5 301.3L341.3 303.8L345 306.2L348.8 308.4L352.5 310.5L356.3 312.4L360 314.1L363.8 315.7L367.5 317.1L371.3 318.3L375 319.2L378.8 320L382.5 320.6L386.3 320.9L390 321" fill="none" stroke="var(--dg-accent)" stroke-width="2.2"/>
  <text x="98" y="15" font-style="italic">x</text>
  <text x="84" y="23" text-anchor="end">A</text>
  <text x="84" y="95" text-anchor="end">−A</text>
  <text x="98" y="130" font-style="italic">v</text>
  <text x="84" y="138" text-anchor="end">Aω</text>
  <text x="84" y="210" text-anchor="end">−Aω</text>
  <text x="98" y="245" font-style="italic">a</text>
  <text x="84" y="253" text-anchor="end">Aω²</text>
  <text x="84" y="325" text-anchor="end">−Aω²</text>
  <text x="90" y="354" text-anchor="middle">0</text>
  <text x="165" y="354" text-anchor="middle">T/4</text>
  <text x="240" y="354" text-anchor="middle">T/2</text>
  <text x="315" y="354" text-anchor="middle">3T/4</text>
  <text x="390" y="354" text-anchor="middle">T</text>
  <text x="414" y="358">t</text>
  <text x="426" y="51" font-size="12">x = A cos ωt</text>
  <text x="426" y="69" font-size="12" fill="var(--dg-muted)">extremes at x = ±A</text>
  <text x="426" y="166" font-size="12">v = −Aω sin ωt</text>
  <text x="426" y="184" font-size="12" fill="var(--dg-muted)">leads x by 90°</text>
  <text x="426" y="281" font-size="12">a = −ω²x</text>
  <text x="426" y="299" font-size="12" fill="var(--dg-muted)">opposite to x</text>
</svg>`,
    },
    {
      title: "Simple pendulum and spring–mass oscillator",
      caption: "Both oscillate in SHM. **Pendulum**: for small θ the restoring force mg sin θ ≈ mgθ, giving **T = 2π√(L/g)**. **Spring–mass**: restoring force F = −kx, giving **T = 2π√(m/k)**. The time period of the pendulum is independent of its mass and amplitude.",
      svg: `<svg viewBox="0 0 560 315" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-13-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-13-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="100" y1="40" x2="180" y2="40" stroke="currentColor" stroke-width="2.4"/>
  <line x1="110" y1="40" x2="102" y2="32" stroke="currentColor" stroke-width="1.2"/>
  <line x1="125" y1="40" x2="117" y2="32" stroke="currentColor" stroke-width="1.2"/>
  <line x1="140" y1="40" x2="132" y2="32" stroke="currentColor" stroke-width="1.2"/>
  <line x1="155" y1="40" x2="147" y2="32" stroke="currentColor" stroke-width="1.2"/>
  <line x1="170" y1="40" x2="162" y2="32" stroke="currentColor" stroke-width="1.2"/>
  <line x1="140" y1="40" x2="140" y2="220" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="140" y1="40" x2="191.3" y2="181" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="191.3" cy="181" r="11" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <path d="M140 78A38 38 0 0 0 153 75.7" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="146" y="102">θ</text>
  <text x="132" y="118" text-anchor="end">L</text>
  <line x1="191.3" y1="192" x2="191.3" y2="262" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-13-2)"/>
  <text x="199.3" y="262" fill="var(--dg-accent)">mg</text>
  <line x1="187.5" y1="170.6" x2="165" y2="108.6" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-13-2)"/>
  <text x="184.7" y="104.9" fill="var(--dg-accent)">T</text>
  <line x1="181" y1="184.7" x2="158.5" y2="192.9" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-13-2)"/>
  <text x="134" y="209" text-anchor="end">mg sin θ</text>
  <text x="140" y="236" text-anchor="middle" fill="var(--dg-muted)">mean position</text>
  <text x="140" y="282" text-anchor="middle">T = 2π√(L/g)</text>
  <text x="140" y="304" text-anchor="middle">(a) Simple pendulum</text>
  <line x1="330" y1="115" x2="330" y2="189" stroke="currentColor" stroke-width="3"/>
  <line x1="330" y1="125" x2="322" y2="133" stroke="currentColor" stroke-width="1.2"/>
  <line x1="330" y1="140" x2="322" y2="148" stroke="currentColor" stroke-width="1.2"/>
  <line x1="330" y1="155" x2="322" y2="163" stroke="currentColor" stroke-width="1.2"/>
  <line x1="330" y1="170" x2="322" y2="178" stroke="currentColor" stroke-width="1.2"/>
  <line x1="330" y1="185" x2="540" y2="185" stroke="currentColor" stroke-width="1.8"/>
  <rect x="430" y="135" width="50" height="50" fill="none" stroke="var(--dg-muted)" stroke-width="1.3" stroke-dasharray="5 4"/>
  <path d="M330 160L346 148L358 172L370 148L382 172L394 148L406 172L418 148L430 172L442 148L454 172L470 160" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <rect x="470" y="135" width="50" height="50" fill="var(--dg-fill)" stroke="currentColor" stroke-width="1.8"/>
  <text x="495" y="165" text-anchor="middle">m</text>
  <line x1="490" y1="113" x2="445" y2="113" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-13-2)"/>
  <text x="467" y="105" text-anchor="middle">F = −kx</text>
  <line x1="430" y1="185" x2="430" y2="225" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="470" y1="185" x2="470" y2="225" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="430" y1="215" x2="470" y2="215" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c11p-13-2)"/>
  <text x="450" y="211" text-anchor="middle">x</text>
  <text x="430" y="241" text-anchor="middle">x = 0</text>
  <text x="470" y="241" text-anchor="middle"></text>
  <text x="430" y="282" text-anchor="middle">T = 2π√(m/k)</text>
  <text x="430" y="304" text-anchor="middle">(b) Spring–mass system</text>
</svg>`,
    },
  ],
  "waves": [
    {
      title: "Transverse and longitudinal waves",
      caption: "In a **transverse** wave (string, light) the particles move perpendicular to the wave, forming crests and troughs. In a **longitudinal** wave (sound) they move along it, forming compressions (C) and rarefactions (R). **λ** is the distance between successive crests or successive compressions.",
      svg: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-14-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-14-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="20" y="16">(a) Transverse wave: particles vibrate ⟂ to the direction of travel</text>
  <line x1="40" y1="80" x2="520" y2="80" stroke="var(--dg-muted)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M40 80L44 74L48 69L52 64L56 60L60 56L64 53L68 51L72 50L76 50L80 50L84 52L88 55L92 58L96 62L100 67L104 72L108 77L112 82L116 88L120 93L124 97L128 101L132 105L136 107L140 109L144 110L148 109L152 108L156 106L160 103L164 99L168 95L172 90L176 85L180 80L184 74L188 69L192 64L196 60L200 56L204 53L208 51L212 50L216 50L220 50L224 52L228 55L232 58L236 62L240 67L244 72L248 77L252 82L256 88L260 93L264 97L268 101L272 105L276 107L280 109L284 110L288 109L292 108L296 106L300 103L304 99L308 95L312 90L316 85L320 80L324 74L328 69L332 64L336 60L340 56L344 53L348 51L352 50L356 50L360 50L364 52L368 55L372 58L376 62L380 67L384 72L388 77L392 82L396 88L400 93L404 97L408 101L412 105L416 107L420 109L424 110L428 109L432 108L436 106L440 103L444 99L448 95L452 90L456 85L460 80L464 74L468 69L472 64L476 60L480 56L484 53L488 51L492 50L496 50L500 50L504 52L508 55L512 58L516 62L520 67" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="75" y1="28" x2="75" y2="40" stroke="currentColor" stroke-width="1.2"/>
  <line x1="215" y1="28" x2="215" y2="40" stroke="currentColor" stroke-width="1.2"/>
  <line x1="75" y1="34" x2="215" y2="34" stroke="currentColor" stroke-width="1.2"/>
  <text x="145" y="28" text-anchor="middle">λ</text>
  <text x="355" y="38" text-anchor="middle">crest</text>
  <text x="285" y="124" text-anchor="middle">trough</text>
  <line x1="215" y1="80" x2="215" y2="50" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c11p-14-1)"/>
  <text x="222" y="70" fill="var(--dg-accent)">A</text>
  <circle cx="180" cy="80" r="3.5" fill="var(--dg-accent)"/>
  <line x1="180" y1="80" x2="180" y2="108" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c11p-14-1)"/>
  <text x="186" y="118">particle</text>
  <line x1="400" y1="138" x2="480" y2="138" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-14-1)"/>
  <text x="396" y="142" text-anchor="end">wave travels</text>
  <text x="20" y="172">(b) Longitudinal wave: particles vibrate along the direction of travel</text>
  <line x1="54" y1="200" x2="54" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="62.6" y1="200" x2="62.6" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="68.7" y1="200" x2="68.7" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="73.1" y1="200" x2="73.1" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="76.9" y1="200" x2="76.9" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="81.3" y1="200" x2="81.3" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="87.4" y1="200" x2="87.4" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="96" y1="200" x2="96" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="107.4" y1="200" x2="107.4" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="121.3" y1="200" x2="121.3" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="136.9" y1="200" x2="136.9" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="153.1" y1="200" x2="153.1" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="168.7" y1="200" x2="168.7" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="182.6" y1="200" x2="182.6" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="194" y1="200" x2="194" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="202.6" y1="200" x2="202.6" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="208.7" y1="200" x2="208.7" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="213.1" y1="200" x2="213.1" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="216.9" y1="200" x2="216.9" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="221.3" y1="200" x2="221.3" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="227.4" y1="200" x2="227.4" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="236" y1="200" x2="236" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="247.4" y1="200" x2="247.4" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="261.3" y1="200" x2="261.3" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="276.9" y1="200" x2="276.9" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="293.1" y1="200" x2="293.1" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="308.7" y1="200" x2="308.7" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="322.6" y1="200" x2="322.6" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="334" y1="200" x2="334" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="342.6" y1="200" x2="342.6" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="348.7" y1="200" x2="348.7" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="353.1" y1="200" x2="353.1" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="356.9" y1="200" x2="356.9" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="361.3" y1="200" x2="361.3" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="367.4" y1="200" x2="367.4" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="376" y1="200" x2="376" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="387.4" y1="200" x2="387.4" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="401.3" y1="200" x2="401.3" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="416.9" y1="200" x2="416.9" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="433.1" y1="200" x2="433.1" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="448.7" y1="200" x2="448.7" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="462.6" y1="200" x2="462.6" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="474" y1="200" x2="474" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="482.6" y1="200" x2="482.6" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="488.7" y1="200" x2="488.7" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="493.1" y1="200" x2="493.1" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="496.9" y1="200" x2="496.9" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="501.3" y1="200" x2="501.3" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <line x1="507.4" y1="200" x2="507.4" y2="236" stroke="currentColor" stroke-width="1.3"/>
  <text x="75" y="194" text-anchor="middle">C</text>
  <text x="215" y="194" text-anchor="middle">C</text>
  <text x="355" y="194" text-anchor="middle">C</text>
  <text x="495" y="194" text-anchor="middle">C</text>
  <text x="145" y="194" text-anchor="middle">R</text>
  <text x="285" y="194" text-anchor="middle">R</text>
  <text x="425" y="194" text-anchor="middle">R</text>
  <line x1="75" y1="254" x2="215" y2="254" stroke="currentColor" stroke-width="1.4"/>
  <line x1="75" y1="250" x2="75" y2="258" stroke="currentColor" stroke-width="1.4"/>
  <line x1="215" y1="250" x2="215" y2="258" stroke="currentColor" stroke-width="1.4"/>
  <text x="145" y="270" text-anchor="middle">λ</text>
  <line x1="400" y1="270" x2="480" y2="270" stroke="var(--dg-accent)" stroke-width="2" marker-end="url(#ar-c11p-14-1)"/>
  <text x="396" y="274" text-anchor="end">wave travels</text>
  <text x="30" y="290" fill="var(--dg-muted)">C = compression (high pressure)    R = rarefaction (low pressure)</text>
</svg>`,
    },
    {
      title: "Standing waves in strings and pipes",
      caption: "Envelopes show displacement. **String and open pipe**: all harmonics f, 2f, 3f… (f = v/2L). **Closed pipe**: node at the closed end, antinode at the open end, so only **odd harmonics** f, 3f, 5f… (f = v/4L) are possible. Adjacent nodes (or antinodes) are λ/2 apart.",
      svg: `<svg viewBox="0 0 560 352" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-14-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-14-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <text x="95" y="22" text-anchor="middle">String, both ends fixed</text>
  <text x="275" y="22" text-anchor="middle">Pipe open at both ends</text>
  <text x="455" y="22" text-anchor="middle">Pipe closed at one end</text>
  <path d="M20 70L26.3 66.9L32.5 63.8L38.8 60.8L45 58L51.3 55.4L57.5 53L63.8 51L70 49.2L76.3 47.8L82.5 46.8L88.8 46.2L95 46L101.3 46.2L107.5 46.8L113.8 47.8L120 49.2L126.3 51L132.5 53L138.8 55.4L145 58L151.3 60.8L157.5 63.8L163.8 66.9L170 70" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M20 70L26.3 73.1L32.5 76.2L38.8 79.2L45 82L51.3 84.6L57.5 87L63.8 89L70 90.8L76.3 92.2L82.5 93.2L88.8 93.8L95 94L101.3 93.8L107.5 93.2L113.8 92.2L120 90.8L126.3 89L132.5 87L138.8 84.6L145 82L151.3 79.2L157.5 76.2L163.8 73.1L170 70" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M200 46L206.3 46.2L212.5 46.8L218.8 47.8L225 49.2L231.3 51L237.5 53L243.8 55.4L250 58L256.3 60.8L262.5 63.8L268.8 66.9L275 70L281.3 73.1L287.5 76.2L293.8 79.2L300 82L306.3 84.6L312.5 87L318.8 89L325 90.8L331.3 92.2L337.5 93.2L343.8 93.8L350 94" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M200 94L206.3 93.8L212.5 93.2L218.8 92.2L225 90.8L231.3 89L237.5 87L243.8 84.6L250 82L256.3 79.2L262.5 76.2L268.8 73.1L275 70L281.3 66.9L287.5 63.8L293.8 60.8L300 58L306.3 55.4L312.5 53L318.8 51L325 49.2L331.3 47.8L337.5 46.8L343.8 46.2L350 46" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="380" y1="36" x2="380" y2="104" stroke="currentColor" stroke-width="3"/>
  <path d="M380 70L386.3 68.4L392.5 66.9L398.8 65.3L405 63.8L411.3 62.3L417.5 60.8L423.8 59.4L430 58L436.3 56.7L442.5 55.4L448.8 54.2L455 53L461.3 52L467.5 51L473.8 50L480 49.2L486.3 48.5L492.5 47.8L498.8 47.3L505 46.8L511.3 46.5L517.5 46.2L523.8 46.1L530 46" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M380 70L386.3 71.6L392.5 73.1L398.8 74.7L405 76.2L411.3 77.7L417.5 79.2L423.8 80.6L430 82L436.3 83.3L442.5 84.6L448.8 85.8L455 87L461.3 88L467.5 89L473.8 90L480 90.8L486.3 91.5L492.5 92.2L498.8 92.7L505 93.2L511.3 93.5L517.5 93.8L523.8 93.9L530 94" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M20 170L26.3 163.8L32.5 158L38.8 153L45 149.2L51.3 146.8L57.5 146L63.8 146.8L70 149.2L76.3 153L82.5 158L88.8 163.8L95 170L101.3 176.2L107.5 182L113.8 187L120 190.8L126.3 193.2L132.5 194L138.8 193.2L145 190.8L151.3 187L157.5 182L163.8 176.2L170 170" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M20 170L26.3 176.2L32.5 182L38.8 187L45 190.8L51.3 193.2L57.5 194L63.8 193.2L70 190.8L76.3 187L82.5 182L88.8 176.2L95 170L101.3 163.8L107.5 158L113.8 153L120 149.2L126.3 146.8L132.5 146L138.8 146.8L145 149.2L151.3 153L157.5 158L163.8 163.8L170 170" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M200 146L206.3 146.8L212.5 149.2L218.8 153L225 158L231.3 163.8L237.5 170L243.8 176.2L250 182L256.3 187L262.5 190.8L268.8 193.2L275 194L281.3 193.2L287.5 190.8L293.8 187L300 182L306.3 176.2L312.5 170L318.8 163.8L325 158L331.3 153L337.5 149.2L343.8 146.8L350 146" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M200 194L206.3 193.2L212.5 190.8L218.8 187L225 182L231.3 176.2L237.5 170L243.8 163.8L250 158L256.3 153L262.5 149.2L268.8 146.8L275 146L281.3 146.8L287.5 149.2L293.8 153L300 158L306.3 163.8L312.5 170L318.8 176.2L325 182L331.3 187L337.5 190.8L343.8 193.2L350 194" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="380" y1="136" x2="380" y2="204" stroke="currentColor" stroke-width="3"/>
  <path d="M380 170L386.3 165.3L392.5 160.8L398.8 156.7L405 153L411.3 150L417.5 147.8L423.8 146.5L430 146L436.3 146.5L442.5 147.8L448.8 150L455 153L461.3 156.7L467.5 160.8L473.8 165.3L480 170L486.3 174.7L492.5 179.2L498.8 183.3L505 187L511.3 190L517.5 192.2L523.8 193.5L530 194" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M380 170L386.3 174.7L392.5 179.2L398.8 183.3L405 187L411.3 190L417.5 192.2L423.8 193.5L430 194L436.3 193.5L442.5 192.2L448.8 190L455 187L461.3 183.3L467.5 179.2L473.8 174.7L480 170L486.3 165.3L492.5 160.8L498.8 156.7L505 153L511.3 150L517.5 147.8L523.8 146.5L530 146" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M20 270L26.3 260.8L32.5 253L38.8 247.8L45 246L51.3 247.8L57.5 253L63.8 260.8L70 270L76.3 279.2L82.5 287L88.8 292.2L95 294L101.3 292.2L107.5 287L113.8 279.2L120 270L126.3 260.8L132.5 253L138.8 247.8L145 246L151.3 247.8L157.5 253L163.8 260.8L170 270" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M20 270L26.3 279.2L32.5 287L38.8 292.2L45 294L51.3 292.2L57.5 287L63.8 279.2L70 270L76.3 260.8L82.5 253L88.8 247.8L95 246L101.3 247.8L107.5 253L113.8 260.8L120 270L126.3 279.2L132.5 287L138.8 292.2L145 294L151.3 292.2L157.5 287L163.8 279.2L170 270" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M200 246L206.3 247.8L212.5 253L218.8 260.8L225 270L231.3 279.2L237.5 287L243.8 292.2L250 294L256.3 292.2L262.5 287L268.8 279.2L275 270L281.3 260.8L287.5 253L293.8 247.8L300 246L306.3 247.8L312.5 253L318.8 260.8L325 270L331.3 279.2L337.5 287L343.8 292.2L350 294" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M200 294L206.3 292.2L212.5 287L218.8 279.2L225 270L231.3 260.8L237.5 253L243.8 247.8L250 246L256.3 247.8L262.5 253L268.8 260.8L275 270L281.3 279.2L287.5 287L293.8 292.2L300 294L306.3 292.2L312.5 287L318.8 279.2L325 270L331.3 260.8L337.5 253L343.8 247.8L350 246" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <line x1="380" y1="236" x2="380" y2="304" stroke="currentColor" stroke-width="3"/>
  <path d="M380 270L386.3 262.3L392.5 255.4L398.8 250L405 246.8L411.3 246.1L417.5 247.8L423.8 252L430 258L436.3 265.3L442.5 273.1L448.8 280.6L455 287L461.3 291.5L467.5 293.8L473.8 293.5L480 290.8L486.3 285.8L492.5 279.2L498.8 271.6L505 263.8L511.3 256.7L517.5 251L523.8 247.3L530 246" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <path d="M380 270L386.3 277.7L392.5 284.6L398.8 290L405 293.2L411.3 293.9L417.5 292.2L423.8 288L430 282L436.3 274.7L442.5 266.9L448.8 259.4L455 253L461.3 248.5L467.5 246.2L473.8 246.5L480 249.2L486.3 254.2L492.5 260.8L498.8 268.4L505 276.2L511.3 283.3L517.5 289L523.8 292.7L530 294" fill="none" stroke="var(--dg-accent)" stroke-width="2"/>
  <text x="95" y="122" text-anchor="middle">L = λ/2,  f₁ = v/2L</text>
  <text x="275" y="122" text-anchor="middle">L = λ/2,  f₁ = v/2L</text>
  <text x="455" y="122" text-anchor="middle">L = λ/4,  f₁ = v/4L</text>
  <text x="95" y="222" text-anchor="middle">L = λ,  2f₁ = v/L</text>
  <text x="275" y="222" text-anchor="middle">L = λ,  2f₁ = v/L</text>
  <text x="455" y="222" text-anchor="middle">L = 3λ/4,  3f₁ = 3v/4L</text>
  <text x="95" y="322" text-anchor="middle">L = 3λ/2,  3f₁ = 3v/2L</text>
  <text x="275" y="322" text-anchor="middle">L = 3λ/2,  3f₁ = 3v/2L</text>
  <text x="455" y="322" text-anchor="middle">L = 5λ/4,  5f₁ = 5v/4L</text>
  <text x="40" y="342">node (displacement zero)</text>
  <text x="260" y="342">antinode (maximum displacement)</text>
  <g fill="currentColor"><circle cx="20" cy="70" r="3.5"/><circle cx="170" cy="70" r="3.5"/><circle cx="275" cy="70" r="3.5"/><circle cx="380" cy="70" r="3.5"/><circle cx="20" cy="170" r="3.5"/><circle cx="95" cy="170" r="3.5"/><circle cx="170" cy="170" r="3.5"/><circle cx="237.5" cy="170" r="3.5"/><circle cx="312.5" cy="170" r="3.5"/><circle cx="380" cy="170" r="3.5"/><circle cx="480" cy="170" r="3.5"/><circle cx="20" cy="270" r="3.5"/><circle cx="70" cy="270" r="3.5"/><circle cx="120" cy="270" r="3.5"/><circle cx="170" cy="270" r="3.5"/><circle cx="225" cy="270" r="3.5"/><circle cx="275" cy="270" r="3.5"/><circle cx="325" cy="270" r="3.5"/><circle cx="380" cy="270" r="3.5"/><circle cx="440" cy="270" r="3.5"/><circle cx="500" cy="270" r="3.5"/><circle cx="30" cy="338" r="3.5"/></g>
  <g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="95" cy="46" r="3.5"/><circle cx="200" cy="46" r="3.5"/><circle cx="350" cy="46" r="3.5"/><circle cx="530" cy="46" r="3.5"/><circle cx="57.5" cy="146" r="3.5"/><circle cx="132.5" cy="146" r="3.5"/><circle cx="200" cy="146" r="3.5"/><circle cx="275" cy="146" r="3.5"/><circle cx="350" cy="146" r="3.5"/><circle cx="430" cy="146" r="3.5"/><circle cx="530" cy="146" r="3.5"/><circle cx="45" cy="246" r="3.5"/><circle cx="95" cy="246" r="3.5"/><circle cx="145" cy="246" r="3.5"/><circle cx="200" cy="246" r="3.5"/><circle cx="250" cy="246" r="3.5"/><circle cx="300" cy="246" r="3.5"/><circle cx="350" cy="246" r="3.5"/><circle cx="410" cy="246" r="3.5"/><circle cx="470" cy="246" r="3.5"/><circle cx="530" cy="246" r="3.5"/><circle cx="250" cy="338" r="3.5"/></g>
  <g stroke="var(--dg-muted)" stroke-width="1" stroke-dasharray="4 3"><line x1="20" y1="70" x2="170" y2="70"/><line x1="200" y1="70" x2="350" y2="70"/><line x1="380" y1="70" x2="530" y2="70"/><line x1="20" y1="170" x2="170" y2="170"/><line x1="200" y1="170" x2="350" y2="170"/><line x1="380" y1="170" x2="530" y2="170"/><line x1="20" y1="270" x2="170" y2="270"/><line x1="200" y1="270" x2="350" y2="270"/><line x1="380" y1="270" x2="530" y2="270"/></g>
  <g stroke="currentColor" stroke-width="1.4"><line x1="200" y1="36" x2="350" y2="36"/><line x1="200" y1="104" x2="350" y2="104"/><line x1="380" y1="36" x2="530" y2="36"/><line x1="380" y1="104" x2="530" y2="104"/><line x1="200" y1="136" x2="350" y2="136"/><line x1="200" y1="204" x2="350" y2="204"/><line x1="380" y1="136" x2="530" y2="136"/><line x1="380" y1="204" x2="530" y2="204"/><line x1="200" y1="236" x2="350" y2="236"/><line x1="200" y1="304" x2="350" y2="304"/><line x1="380" y1="236" x2="530" y2="236"/><line x1="380" y1="304" x2="530" y2="304"/></g>
</svg>`,
    },
    {
      title: "Beats",
      caption: "Two waves of nearly equal frequency alternately add and cancel. The resultant has an amplitude that swells and fades at **beat frequency |f₁ − f₂|** (here the lower wave has 8 cycles and the upper 10 in the same time, so 2 beats).",
      svg: `<svg viewBox="0 0 560 318" xmlns="http://www.w3.org/2000/svg" font-size="13" fill="currentColor">
  <defs><marker id="ar-c11p-14-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--dg-accent)"/></marker><marker id="ax-c11p-14-3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
  <line x1="70" y1="45" x2="500" y2="45" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="70" y1="115" x2="500" y2="115" stroke="var(--dg-muted)" stroke-width="1"/>
  <line x1="70" y1="215" x2="500" y2="215" stroke="var(--dg-muted)" stroke-width="1"/>
  <path d="M70 45L72 37L75 31L78 26L81 23L84 23L87 25L90 29L92 35L95 42L98 49L101 56L104 62L107 65L110 67L113 65L115 62L118 57L121 50L124 43L127 36L130 29L133 25L135 23L138 23L141 25L144 30L147 36L150 44L153 51L156 57L158 63L161 66L164 67L167 65L170 61L173 55L176 48L178 41L181 34L184 28L187 24L190 23L193 23L196 26L199 32L201 38L204 45L207 53L210 59L213 64L216 66L219 66L221 64L224 60L227 53L230 46L233 39L236 32L239 27L242 24L244 23L247 24L250 28L253 33L256 40L259 47L262 54L264 60L267 64L270 66L273 66L276 63L279 58L282 52L285 45L287 37L290 31L293 26L296 23L299 23L302 25L305 29L307 35L310 42L313 49L316 56L319 62L322 65L325 67L328 65L330 62L333 57L336 50L339 43L342 36L345 29L348 25L350 23L353 23L356 25L359 30L362 36L365 44L368 51L371 57L373 63L376 66L379 67L382 65L385 61L388 55L391 48L393 41L396 34L399 28L402 24L405 23L408 23L411 26L414 32L416 38L419 45L422 53L425 59L428 64L431 66L434 66L436 64L439 60L442 53L445 46L448 39L451 32L454 27L457 24L459 23L462 24L465 28L468 33L471 40L474 47L477 54L479 60L482 64L485 66L488 66L491 63L494 58L497 52L500 45" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M70 115L72 106L75 98L78 94L81 93L84 95L87 102L90 110L92 119L95 127L98 134L101 136L104 135L107 131L110 123L113 115L115 106L118 98L121 94L124 93L127 95L130 102L133 110L135 119L138 127L141 134L144 136L147 135L150 131L153 123L156 115L158 106L161 98L164 94L167 93L170 95L173 102L176 110L178 119L181 127L184 134L187 136L190 135L193 131L196 123L199 115L201 106L204 98L207 94L210 93L213 95L216 102L219 110L221 119L224 127L227 134L230 136L233 135L236 131L239 123L242 115L244 106L247 98L250 94L253 93L256 95L259 102L262 110L264 119L267 127L270 134L273 136L276 135L279 131L282 123L285 115L287 106L290 98L293 94L296 93L299 95L302 102L305 110L307 119L310 127L313 134L316 136L319 135L322 131L325 123L328 115L330 106L333 98L336 94L339 93L342 95L345 102L348 110L350 119L353 127L356 134L359 136L362 135L365 131L368 123L371 115L373 106L376 98L379 94L382 93L385 95L388 102L391 110L393 119L396 127L399 134L402 136L405 135L408 131L411 123L414 115L416 106L419 98L422 94L425 93L428 95L431 102L434 110L436 119L439 127L442 134L445 136L448 135L451 131L454 123L457 115L459 106L462 98L465 94L468 93L471 95L474 102L477 110L479 119L482 127L485 134L488 136L491 135L494 131L497 123L500 115" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M70 215L72 203L74 192L76 183L78 177L80 172L82 171L84 173L86 178L88 185L90 194L92 204L94 215L96 226L98 235L100 243L102 249L104 252L106 253L108 250L110 246L112 239L114 231L116 223L118 214L120 205L122 198L124 192L126 188L128 186L130 186L132 189L134 192L136 198L138 203L140 210L142 216L144 221L146 225L148 228L150 230L152 230L154 229L156 227L158 225L160 222L162 219L164 216L166 214L168 213L170 212L172 212L174 213L176 214L178 215L180 216L182 217L184 217L186 217L188 216L190 214L192 211L194 209L196 206L198 203L200 201L202 199L204 199L206 200L208 202L210 206L212 211L214 217L216 223L218 229L220 234L222 239L224 242L226 243L228 242L230 239L232 234L234 228L236 220L238 211L240 202L242 194L244 186L246 181L248 177L250 176L252 178L254 183L256 190L258 198L260 209L262 219L264 230L266 240L268 248L270 254L272 257L274 258L276 255L278 249L280 241L282 231L284 220L286 209L288 198L290 188L292 180L294 174L296 171L298 172L300 175L302 181L304 189L306 199L308 210L310 221L312 231L314 240L316 246L318 251L320 253L322 252L324 248L326 243L328 235L330 227L332 218L334 209L336 201L338 195L340 190L342 187L344 186L346 187L348 190L350 195L352 200L354 206L356 213L358 218L360 223L362 227L364 229L366 230L368 230L370 229L372 226L374 223L376 220L378 218L380 215L382 213L384 212L386 212L388 212L390 213L392 214L394 215L396 217L398 217L400 217L402 216L404 215L406 213L408 210L410 207L412 204L414 202L416 200L418 199L420 199L422 201L424 204L426 208L428 214L430 220L432 226L434 232L436 237L438 240L440 243L442 243L444 241L446 237L448 231L450 224L452 216L454 207L456 198L458 190L460 183L462 179L464 177L466 177L468 180L470 186L472 194L474 203L476 214L478 225L480 235L482 244L484 251L486 256L488 258L490 257L492 253L494 246L496 237L498 226L500 215" fill="none" stroke="var(--dg-accent)" stroke-width="1.8"/>
  <path d="M70 171L75 171L80 171L86 172L91 173L96 174L102 175L107 177L113 179L118 181L123 183L129 186L134 189L139 192L145 195L150 198L156 201L161 204L166 208L172 211L177 215L182 211L188 208L193 204L199 201L204 198L209 195L215 192L220 189L225 186L231 183L236 181L242 179L247 177L252 175L258 174L263 173L268 172L274 171L279 171L285 171L290 171L295 171L301 172L306 173L311 174L317 175L322 177L328 179L333 181L338 183L344 186L349 189L354 192L360 195L365 198L371 201L376 204L381 208L387 211L392 215L397 211L403 208L408 204L414 201L419 198L424 195L430 192L435 189L440 186L446 183L451 181L457 179L462 177L467 175L473 174L478 173L483 172L489 171L494 171L500 171" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <path d="M70 259L75 258L80 258L86 257L91 256L96 255L102 254L107 252L113 250L118 248L123 246L129 243L134 240L139 238L145 235L150 231L156 228L161 225L166 221L172 218L177 215L182 218L188 221L193 225L199 228L204 231L209 235L215 238L220 240L225 243L231 246L236 248L242 250L247 252L252 254L258 255L263 256L268 257L274 258L279 258L285 259L290 258L295 258L301 257L306 256L311 255L317 254L322 252L328 250L333 248L338 246L344 243L349 240L354 238L360 235L365 231L371 228L376 225L381 221L387 218L392 215L397 218L403 221L408 225L414 228L419 231L424 235L430 238L435 240L440 243L446 246L451 248L457 250L462 252L467 254L473 255L478 256L483 257L489 258L494 258L500 259" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="62" y="49" text-anchor="end">f₁</text>
  <text x="62" y="119" text-anchor="end">f₂</text>
  <text x="62" y="219" text-anchor="end">sum</text>
  <text x="70" y="12">Two waves of slightly different frequency, f₂ > f₁</text>
  <text x="70" y="160" text-anchor="start">loud</text>
  <text x="285" y="160" text-anchor="middle">loud</text>
  <text x="500" y="160" text-anchor="end">loud</text>
  <text x="177.5" y="160" text-anchor="middle">soft</text>
  <text x="392.5" y="160" text-anchor="middle">soft</text>
  <text x="70" y="160">loud</text>
  <text x="285" y="160" text-anchor="middle">loud</text>
  <line x1="177.5" y1="268" x2="70" y2="268" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c11p-14-3)"/>
  <line x1="177.5" y1="268" x2="285" y2="268" stroke="var(--dg-accent)" stroke-width="1.6" marker-end="url(#ar-c11p-14-3)"/>
  <text x="177.5" y="288" text-anchor="middle">beat period T<tspan dy="3" font-size="10">b</tspan><tspan dy="-3">&#160;= 1/(f₂ − f₁)</tspan></text>
  <text x="70" y="308" fill="var(--dg-muted)">beat frequency = number of loud notes per second = |f₁ − f₂|</text>
</svg>`,
    },
  ],
});
