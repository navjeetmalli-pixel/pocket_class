// Small shared effects for the 2.5D picture-book games (timeline.js, graphs.js): reduced-motion check and a celebration.
//   GameFx.calm()        true when the device asks for reduced motion
//   GameFx.burst(host)   a few stars and confetti pieces fly out of host (position: relative) and fade in under a second;
//                        with reduced motion they only appear and fade. It never blocks anything. Styles: .fb-burst in css/styles.css.
const GameFx = (() => {
  const calm = () => !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  function burst(host) {
    if (!host || host.querySelector(".fb-burst")) return;
    const quiet = calm();
    const cols = ["#ffc933", "#e5473d", "#3b82e0", "#4caf50", "#ee6fa4", "#f59a23"];
    const bits = Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * 2 * Math.PI + (i % 2) * 0.2;
      const dist = 70 + (i % 3) * 26;
      const star = i % 3 === 0;
      return `<svg class="fb-bit" viewBox="-8 -8 16 16" style="--dx:${Math.round(Math.cos(a) * dist)}px;--dy:${Math.round(Math.sin(a) * dist - 16)}px;--rot:${(i * 67) % 180}deg;animation-delay:${(i % 4) * 25}ms" aria-hidden="true">${
        star ? `<path d="M0-7 2.1-2.4 7-2 3.3 1.4 4.4 6.4 0 3.8-4.4 6.4-3.3 1.4-7-2-2.1-2.4Z" fill="${cols[i % 6]}" stroke="#a87400" stroke-width=".8" stroke-linejoin="round"/>` : `<rect x="-3.5" y="-2.2" width="7" height="4.4" rx="1.2" fill="${cols[i % 6]}"/>`
      }</svg>`;
    }).join("");
    const b = document.createElement("div");
    b.className = "fb-burst" + (quiet ? " calm" : "");
    b.setAttribute("aria-hidden", "true");
    b.innerHTML = bits;
    host.appendChild(b);
    setTimeout(() => b.remove(), quiet ? 900 : 1000);
  }
  return { calm, burst };
})();
