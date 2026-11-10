// Parent PIN: a 4-digit PIN that keeps the Parent area and the actions that can't be undone (delete a student,
// reset progress, restore a backup) away from children. It is a parental gate, not security: the PIN is kept as a
// salted hash in the device settings (Store.pin), so a child reading the saved data doesn't see it, but the app has
// no account to recover it from. "Forgot PIN?" asks a grown-up question (a multiplication written in words) and then
// lets a new PIN be set.
//
//   Pin.isSet()                 a PIN has been chosen on this device
//   Pin.unlocked()              entered in the last few minutes (no need to ask again)
//   Pin.ask(reason) -> Promise<boolean>   shows the PIN screen (or "create a PIN" the first time); true when let in
//   Pin.guard(reason, fn)       runs fn() after a successful ask (straight away when no PIN is set)
//   Pin.lock()                  forget the unlock (the app going to the background does this too)
//   Pin.remove()                after a successful ask: turn the PIN off

const Pin = (() => {
  const TTL = 5 * 60 * 1000; // stays unlocked this long after the PIN was entered
  let unlockedAt = 0;

  // A small string hash (cyrb53): enough for a parental gate, and synchronous.
  function hash(str) {
    let h1 = 0xdeadbeef,
      h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }
  const digest = (salt, pin) => hash(`${salt}:${pin}:pocket-class`);
  const valid = (pin) => /^\d{4}$/.test(pin);

  const isSet = () => !!Store.pin();
  const unlocked = () => !isSet() || Date.now() - unlockedAt < TTL;
  const lock = () => (unlockedAt = 0);
  function check(pin) {
    const p = Store.pin();
    return !!p && digest(p.salt, pin) === p.hash;
  }
  function setPin(pin) {
    const salt = Math.random().toString(36).slice(2, 10);
    Store.setPin({ salt, hash: digest(salt, pin) });
    unlockedAt = Date.now();
  }

  // A multiplication only a grown-up reads quickly: both numbers are written in words.
  const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const words = (n) => (n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? "-" + ONES[n % 10] : ""));
  function grownUpSum() {
    const a = 12 + Math.floor(Math.random() * 37); // 12–48
    const b = 6 + Math.floor(Math.random() * 4); // 6–9
    return { text: t("What is {a} times {b}? Write the answer in digits.", { a: words(a), b: words(b) }), answer: String(a * b) };
  }

  // ---------- the dialog ----------
  let open = null; // the dialog being shown: { finish(ok) }

  function ask(reason) {
    if (unlocked() && isSet()) return Promise.resolve(true);
    if (open) open.finish(false);
    return new Promise((resolve) => {
      const back = document.createElement("div");
      back.className = "pin-back";
      const box = document.createElement("div");
      box.className = "pin-box";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true");
      box.setAttribute("aria-labelledby", "pin-h");
      document.body.append(back, box);
      const before = document.activeElement;
      let mode = isSet() ? "enter" : "create"; // enter | create | confirm | forgot
      let first = "";
      let sum = null;

      function finish(ok) {
        back.remove();
        box.remove();
        document.removeEventListener("keydown", onKey, true);
        open = null;
        if (before && before.focus && document.contains(before)) before.focus();
        resolve(ok);
      }
      open = { finish };

      function draw(msg) {
        const head = {
          enter: t("Enter the parent PIN"),
          create: t("Choose a parent PIN"),
          confirm: t("Type the new PIN again"),
          forgot: t("Forgot the PIN?"),
        }[mode];
        const sub = {
          enter: reason || t("This part is for parents."),
          create: t("4 digits. It keeps the Parent area and actions that can't be undone away from children. Keep it to yourself."),
          confirm: t("To make sure it was typed right."),
          forgot: sum ? sum.text : "",
        }[mode];
        const isSum = mode === "forgot";
        box.innerHTML = `<h2 id="pin-h">${icon("lock")} ${head}</h2>
          <p class="small muted">${esc(sub)}</p>
          <input id="pin-in" class="input pin-in" type="password" inputmode="numeric" autocomplete="off" ${isSum ? 'maxlength="4" aria-label="' + t("Answer") + '"' : 'maxlength="4" pattern="[0-9]*" aria-label="' + t("PIN") + '"'}>
          <p class="pin-msg small" role="alert">${msg ? esc(msg) : ""}</p>
          <div class="pin-actions">
            <button type="button" class="btn" data-pin="cancel">${t("Cancel")}</button>
            <button type="button" class="btn primary" data-pin="ok">${mode === "enter" || isSum ? t("OK") : t("Continue")}</button>
          </div>
          ${mode === "enter" ? `<button type="button" class="linkish small" data-pin="forgot">${t("Forgot PIN?")}</button>` : ""}`;
        const inp = box.querySelector("#pin-in");
        inp.oninput = () => {
          inp.value = inp.value.replace(/\D/g, "").slice(0, 4);
          if (!isSum && inp.value.length === 4) submit();
        };
        setTimeout(() => inp.focus(), 0);
      }

      function submit() {
        const v = box.querySelector("#pin-in").value.trim();
        if (mode === "enter") {
          if (check(v)) {
            unlockedAt = Date.now();
            return finish(true);
          }
          return draw(t("That PIN isn't right. Try again."));
        }
        if (mode === "create") {
          if (!valid(v)) return draw(t("Type 4 digits."));
          first = v;
          mode = "confirm";
          return draw();
        }
        if (mode === "confirm") {
          if (v !== first) {
            mode = "create";
            return draw(t("The two PINs were different. Choose the PIN again."));
          }
          setPin(v);
          toast(t("Parent PIN saved"));
          return finish(true);
        }
        if (mode === "forgot") {
          if (v === sum.answer) {
            mode = "create";
            return draw();
          }
          sum = grownUpSum();
          return draw(t("Not quite. Here is another one."));
        }
      }

      box.onclick = (e) => {
        const b = e.target.closest("[data-pin]");
        if (!b) return;
        const a = b.dataset.pin;
        if (a === "cancel") finish(false);
        else if (a === "ok") submit();
        else if (a === "forgot") {
          mode = "forgot";
          sum = grownUpSum();
          draw();
        }
      };
      back.onclick = () => finish(false);
      function onKey(e) {
        if (e.key === "Escape") {
          e.preventDefault();
          finish(false);
        } else if (e.key === "Enter" && box.contains(document.activeElement)) {
          e.preventDefault();
          submit();
        } else if (e.key === "Tab") {
          // Keep focus inside the dialog.
          const f = [...box.querySelectorAll("input, button")];
          const i = f.indexOf(document.activeElement);
          if (e.shiftKey && i <= 0) (e.preventDefault(), f[f.length - 1].focus());
          else if (!e.shiftKey && i === f.length - 1) (e.preventDefault(), f[0].focus());
        }
      }
      document.addEventListener("keydown", onKey, true);
      draw();
    });
  }

  // For actions (delete, reset, restore): with no PIN set they go straight through; only the Parent area asks to create one.
  const guard = (reason, fn) => (isSet() ? ask(reason).then((ok) => ok && fn()) : Promise.resolve(fn()));

  function remove() {
    Store.setPin(null);
    unlockedAt = 0;
  }

  // A new page (Back, a link) closes the dialog as cancelled.
  window.addEventListener("hashchange", () => open && open.finish(false));

  // Lock again when the app is hidden (another app, the home screen, the screen turned off).
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) lock();
  });

  return { isSet, unlocked, ask, guard, lock, remove, _digest: digest };
})();
