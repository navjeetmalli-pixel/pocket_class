// Built-in profile pictures: 12 simple pictures drawn inline (no image files, nothing loaded), coloured with the theme's
// named colours so they work in light and dark. Avatars.svg(id, size) -> markup; ids are Store.AVATARS ("a01" ... "a12").

const Avatars = (() => {
  const COLORS = ["blue", "green", "amber", "purple", "coral", "navy"];
  // Each picture is drawn in white on a 48 x 48 circle.
  const ART = {
    a01: '<path d="m24 10 4.2 8.6 9.5 1.4-6.9 6.7 1.6 9.4L24 31.6l-8.4 4.5 1.6-9.4-6.9-6.7 9.5-1.4z"/>', // star
    a02: '<circle cx="24" cy="24" r="6.5"/><path d="M24 10v5M24 33v5M10 24h5M33 24h5M14 14l3.5 3.5M30.5 30.5 34 34M34 14l-3.5 3.5M17.5 30.5 14 34" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/>', // sun
    a03: '<path d="M30 11a14 14 0 1 0 7 25 12 12 0 0 1-7-25z"/>', // moon
    a04: '<path d="M12 36C12 20 22 12 37 11c0 15-7 25-22 25-1 0-2 0-3 0z"/><path d="M13 35 28 20" stroke="#000" stroke-opacity=".25" stroke-width="2" fill="none"/>', // leaf
    a05: '<path d="M10 14h12a2 2 0 0 1 2 2v20a5 5 0 0 0-5-5H10zM38 14H26a2 2 0 0 0-2 2v20a5 5 0 0 1 5-5h9z"/>', // book
    a06: '<path d="M24 9a10 10 0 0 0-5.5 18.3c.9.7 1.5 1.7 1.5 2.7v1h8v-1c0-1 .6-2 1.5-2.7A10 10 0 0 0 24 9z"/><rect x="20" y="34" width="8" height="3" rx="1.5"/>', // bulb
    a07: '<path d="M24 8c6 5 8 12 7 20H17c-1-8 1-15 7-20z"/><circle cx="24" cy="21" r="3" fill="#000" fill-opacity=".3"/><path d="m17 28-5 7 7-2zM31 28l5 7-7-2z"/>', // rocket
    a08: '<circle cx="24" cy="14" r="5.5"/><circle cx="14" cy="22" r="5.5"/><circle cx="34" cy="22" r="5.5"/><circle cx="18" cy="33" r="5.5"/><circle cx="30" cy="33" r="5.5"/><circle cx="24" cy="25" r="5" fill="#000" fill-opacity=".25"/>', // flower
    a09: '<path d="M11 12l7 5h12l7-5v14a13 11 0 0 1-26 0z"/><circle cx="19" cy="26" r="2" fill="#000" fill-opacity=".45"/><circle cx="29" cy="26" r="2" fill="#000" fill-opacity=".45"/><path d="M22 31h4l-2 2z" fill="#000" fill-opacity=".45"/>', // cat
    a10: '<path d="M8 24c5-8 14-10 22-6l6-5v22l-6-5c-8 4-17 2-22-6z"/><circle cx="16" cy="22" r="1.8" fill="#000" fill-opacity=".45"/>', // fish
    a11: '<path d="M6 36 18 14l7 12 5-8 12 18z"/>', // mountains
    a12: '<path d="M24 38C10 28 8 22 8 18a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 4-2 10-16 20z"/>', // heart
  };

  // size in px (default 40). Decorative: the name next to it says who it is.
  function svg(id, size = 40) {
    const i = Store.AVATARS.indexOf(id);
    if (i < 0 || !ART[id]) return "";
    return `<svg class="avatar av-${COLORS[i % COLORS.length]}" width="${size}" height="${size}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><circle cx="24" cy="24" r="24" class="av-bg"/><g fill="#fff">${ART[id]}</g></svg>`;
  }

  // A round badge for a student: their picture, or the first letter of their name.
  function badge(profile, name, cls = "av", size = 34) {
    const pic = profile && svg(profile.avatar, size);
    return `<span class="${cls}${pic ? " has-pic" : ""}">${pic || esc([...(name || "?")][0].toUpperCase())}</span>`;
  }

  return { svg, badge, ids: () => Store.AVATARS };
})();
