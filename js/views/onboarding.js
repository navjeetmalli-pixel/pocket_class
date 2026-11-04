// First screen: name, class, board and language.

(() => {
  const { boardPicker, classGrid, langSwitch } = Views._;

  // What the student has picked so far on the first screen.
  const onboardChoices = { name: "", pick: null, board: "cbse" };

  function onboarding() {
    // Kept outside the screen so choosing a language (which redraws it) doesn't lose what was already picked.
    const ob = onboardChoices;
    return {
      title: t("Welcome"),
      html: `
        <div class="onboard">
          ${langSwitch()}
          <div class="brand"><span class="brand-mark">P</span>Pocket Class India</div>
          <div>
            <h1>${t("Your study partner from Class 1 to 12")}</h1>
            <p class="muted" style="margin-top:10px">${t("Notes, flashcards, quizzes and mock tests for every main subject, from Class 1 maths to Class 12 physics, accountancy and history. Follows the CBSE / NCERT and PSEB (Punjab Board) syllabi and works offline.")}</p>
          </div>
          <div class="field">
            <label for="ob-name">${t("What should we call you?")}</label>
            <input id="ob-name" class="input" value="${esc(ob.name)}" placeholder="${t("Your name (optional)")}" autocomplete="given-name" maxlength="30">
          </div>
          <div class="field">
            <label>${t("Which class are you in?")}</label>
            ${classGrid(ob.pick)}
          </div>
          <div class="field">
            <label>${t("Which board?")}</label>
            ${boardPicker(ob.board)}
          </div>
          <button class="btn primary block" data-act="start" ${ob.pick ? "" : "disabled"}>${t("Start studying")} ${icon("arrow")}</button>
        </div>`,
      mount(el) {
        el.querySelector("#ob-name").oninput = (e) => (ob.name = e.target.value);
        el.onclick = (e) => {
          const b = e.target.closest("[data-lang],[data-cls],[data-board],[data-act]");
          if (!b) return;
          if (b.dataset.lang) {
            Store.setLang(b.dataset.lang);
            applyLang();
            App.render();
          } else if (b.dataset.cls) {
            ob.pick = Number(b.dataset.cls);
            el.querySelectorAll("[data-cls]").forEach((x) => x.classList.toggle("on", x === b));
            el.querySelector('[data-act="start"]').disabled = false;
          } else if (b.dataset.board) {
            ob.board = b.dataset.board;
            el.querySelectorAll("[data-board]").forEach((x) => x.classList.toggle("on", x === b));
          } else if (ob.pick) {
            Store.setProfile(el.querySelector("#ob-name").value, ob.pick, ob.board);
            location.hash = "#/";
            App.render();
          }
        };
      },
    };
  }

  Object.assign(Views, { onboarding });
})();
