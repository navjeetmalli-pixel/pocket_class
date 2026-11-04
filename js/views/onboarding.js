// First-time setup: one screen per step, with a back button and progress dots. Every step is saved in the learner's
// profile (profile.setup.step), so setup resumes where it stopped after the app is closed.
//
//   Student:  welcome > who > board > class > view > subjects > me > goal > tour > Home
//   Parent:   welcome > who > kids > pick > view > subjects > me > goal > tour > Home
//             (kids: one or more child profiles with name, class and board; pick: who is learning now)
//
// While the current learner's setup is not done the app shows only this flow (js/app.js); a profile with cls null is
// one that has not reached the class step yet.

(() => {
  const { D, langSwitch } = Views._;

  const STUDENT = ["welcome", "who", "board", "class", "view", "subjects", "me", "goal", "tour"];
  const PARENT = ["welcome", "who", "kids", "pick", "view", "subjects", "me", "goal", "tour"];

  // What the learner has picked on the screen in front of them but not yet saved (kept here so a redraw, e.g. after
  // choosing a language, doesn't lose it). Reset on every step change, except what later steps and Back need.
  const ob = { step: "welcome", who: null, board: null, cls: null, view: null, sel: null, goal: undefined, kid: null, tour: 0, focus: false, focusSel: null };

  const P = () => Store.state.profile;
  const flow = () => (P() && P().role === "parent-managed" ? PARENT : STUDENT);
  const kids = () => Store.students().filter((s) => s.role === "parent-managed" && s.cls != null);
  // Classes 1 and 2 get bigger buttons (CSS) and simpler words.
  const tiny = () => !!(P() && P().cls && P().cls <= 2);
  const easy = (normal, simple) => (tiny() ? t(simple) : t(normal));

  function currentStep() {
    const s = P() ? P().setup.step : ob.step;
    return flow().includes(s) ? s : "welcome";
  }

  // Moves to a step: saved in the profile once there is one.
  function go(next, opts = {}) {
    ob.focus = true;
    ob.focusSel = null;
    if (next === "tour") ob.tour = 0;
    if (P()) Store.setProfile({ setup: { step: next } });
    else ob.step = next;
    App.render(opts);
  }

  function finish() {
    Store.setProfile({ setup: { done: true } });
    location.hash = "#/";
    App.render();
    announce(t("You're all set"));
  }

  // ----- pieces -----

  const choice = (attrs, icon_, title, sub, on, extra = "") =>
    `<button type="button" class="ob-choice" ${attrs} aria-pressed="${!!on}"><span class="ci" aria-hidden="true">${icon_}</span><span class="grow"><span class="ct">${title}${extra}</span>${sub ? `<span class="cs">${sub}</span>` : ""}</span><span class="tick" aria-hidden="true">${icon("check")}</span></button>`;

  const primary = (label, enabled = true) => `<button type="button" class="btn primary" data-act="next" ${enabled ? "" : "disabled"}>${label} ${icon("arrow")}</button>`;

  function frame(i, n, body, actions) {
    return `<div class="ob" data-step="${currentStep()}">
      <div class="ob-top">
        <button type="button" class="ob-back" data-act="back" aria-label="${t("Back")}" ${i === 0 ? 'style="visibility:hidden" tabindex="-1" aria-hidden="true"' : ""}>${icon("back")}</button>
        <div class="ob-dots" role="img" aria-label="${t("Step {n} of {total}", { n: i + 1, total: n })}">${flow().map((_, k) => `<span class="${k < i ? "done" : k === i ? "now" : ""}"></span>`).join("")}</div>
      </div>
      ${body}
      ${actions ? `<div class="ob-actions">${actions}</div>` : ""}
    </div>`;
  }

  const head = (title, lead, hint) =>
    `<div><h1 id="ob-h" tabindex="-1">${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ""}${hint ? `<p class="hint">${hint}</p>` : ""}</div>`;

  // ----- the steps: each returns { title, body, actions, mount(el, sync) } -----

  const STEPS = {
    welcome() {
      return {
        title: t("Your world of learning starts here."),
        body: `<div class="ob-brand"><span class="brand-mark" aria-hidden="true">P</span>Pocket Class India</div>
          ${langSwitch()}
          <div><h1 id="ob-h" tabindex="-1">${t("Your world of learning starts here.")}</h1>
            <p class="ob-tag mt" style="margin-top:14px"><span>${t("Learn")}</span><i>•</i><span>${t("Play")}</span><i>•</i><span>${t("Explore")}</span><i>•</i><span>${t("Master")}</span></p></div>
          <ul class="ob-facts"><li>${t("Classes 1–12")}</li><li>${t("CBSE & PSEB")}</li><li>${t("Works offline")}</li></ul>`,
        actions: `<button type="button" class="btn primary" data-act="start">${t("Start Learning")} ${icon("arrow")}</button>`,
        next() {
          if (!P()) Store.setProfile({ name: "", cls: null, board: "cbse", role: "student", setup: { step: "who" } });
          go("who");
        },
      };
    },

    who() {
      if (ob.who == null) ob.who = P().role === "parent-managed" ? "parent" : P().cls != null ? "student" : null;
      const pick = (v, ic, title, sub) => choice(`data-who="${v}"`, ic, title, sub, ob.who === v);
      return {
        title: t("Who is using Pocket Class?"),
        body: `${head(t("Who is using Pocket Class?"))}
          <div class="ob-choices" role="group" aria-label="${t("Who is using Pocket Class?")}">
            ${pick("student", "🎒", t("I'm a Student"), t("Learn, play and practise on your own"))}
            ${pick("parent", "👨‍👩‍👧", t("I'm a Parent or Guardian"), t("Set up one or more children and choose who is learning"))}
          </div>`,
        actions: primary(t("Continue"), !!ob.who),
        click(b) {
          if (b.dataset.who) ob.who = b.dataset.who;
        },
        next() {
          if (ob.who === "parent") {
            Store.setProfile({ role: "parent-managed" });
            return go("kids");
          }
          Store.dropSetupStudents(Store.currentId); // children added by going Back are not needed for a student
          Store.setProfile({ role: "student" });
          go("board");
        },
        ready: () => !!ob.who,
      };
    },

    kids() {
      const list = kids();
      return {
        title: t("Add your children"),
        body: `${head(t("Add your children"), t("Add each child with their name, class and board. You can add more later in Settings."))}
          ${list.length ? `<ul class="ob-kids" aria-label="${t("Children added")}">${list.map((k) => `<li>${Avatars.badge(k, k.name, "av")}<span class="grow"><strong>${esc(k.name)}</strong><span>${t("Class {n}", { n: k.cls })} · ${k.board === "pseb" ? "PSEB" : "CBSE"}</span></span><button type="button" class="btn" data-kid-del="${k.id}" aria-label="${t("Remove {name}", { name: k.name })}">${t("Remove")}</button></li>`).join("")}</ul>` : ""}
          <div class="ob-form" role="group" aria-label="${t("Add a child")}">
            <div class="field"><label for="kid-name">${t("Child's name")}</label><input id="kid-name" class="input" maxlength="30" autocomplete="off"></div>
            <div class="field"><label for="kid-cls">${t("Class")}</label><select id="kid-cls" class="input">${D.classes.map((n) => `<option value="${n}">${t("Class {n}", { n })}</option>`).join("")}</select></div>
            <div class="field"><label for="kid-board">${t("Board")}</label><select id="kid-board" class="input"><option value="cbse">CBSE / NCERT</option><option value="pseb">PSEB (Punjab Board)</option></select></div>
            <button type="button" class="btn" data-act="add-kid">${t("Add child")}</button>
          </div>`,
        actions: primary(t("Continue"), list.length > 0),
        click(b, el) {
          if (b.dataset.act === "add-kid") {
            const name = el.querySelector("#kid-name").value.trim();
            if (!name) {
              toast(t("Type your child's name first"));
              el.querySelector("#kid-name").focus();
              return;
            }
            const cls = Number(el.querySelector("#kid-cls").value);
            const board = el.querySelector("#kid-board").value;
            if (P().cls == null) Store.setProfile({ name, cls, board, role: "parent-managed" });
            else Store.addStudent(name, cls, board, { role: "parent-managed", setup: { step: "kids" } });
            ob.focusSel = "#kid-name";
            announce(t("{name} added", { name }));
            App.render({ keepScroll: true });
          } else if (b.dataset.kidDel) {
            const id = b.dataset.kidDel;
            const name = (kids().find((k) => k.id === id) || {}).name;
            if (!Store.deleteStudent(id)) Store.setProfile({ name: "", cls: null }); // the only profile: empty it

            announce(t("{name} removed", { name }));
            ob.focusSel = "#kid-name";
            App.render({ keepScroll: true });
          }
        },
        next: () => go("pick"),
        ready: () => kids().length > 0,
      };
    },

    pick() {
      const list = kids();
      if (!list.some((k) => k.id === ob.kid)) ob.kid = list.length === 1 ? list[0].id : null;
      return {
        title: t("Who is learning now?"),
        body: `${head(t("Who is learning now?"), t("The other children are saved too. Switch between them any time in Settings."))}
          <div class="ob-choices" role="group" aria-label="${t("Who is learning now?")}">
            ${list.map((k) => choice(`data-kid="${k.id}"`, Avatars.badge(k, k.name, "av", 44), esc(k.name), `${t("Class {n}", { n: k.cls })} · ${k.board === "pseb" ? "PSEB" : "CBSE"}`, ob.kid === k.id)).join("")}
          </div>`,
        actions: primary(t("Continue"), !!ob.kid),
        click(b) {
          if (b.dataset.kid) ob.kid = b.dataset.kid;
        },
        next() {
          // The other children are finished with setup (defaults: Class-wise, every subject); the chosen one carries on.
          for (const k of kids()) {
            if (k.id === ob.kid) continue;
            Store.switchStudent(k.id);
            Store.setProfile({ setup: { done: true } });
          }
          Store.switchStudent(ob.kid);
          go("view");
        },
        ready: () => !!ob.kid,
      };
    },

    board() {
      if (ob.board == null && P().cls != null) ob.board = P().board;
      const pick = (v, title, sub) => choice(`data-board="${v}"`, `<span style="font-weight:800;font-size:15px">${v === "pseb" ? "PS" : "CB"}</span>`, title, sub, ob.board === v);
      return {
        title: t("Choose your board"),
        body: `${head(easy("Choose your board", "Which books do you use?"), t("This decides which syllabus and books your lessons follow."))}
          <div class="ob-choices two" role="group" aria-label="${t("Board")}">
            ${pick("cbse", "CBSE / NCERT", t("NCERT books and the CBSE syllabus"))}
            ${pick("pseb", "PSEB (Punjab Board)", t("Punjab School Education Board books"))}
          </div>`,
        actions: primary(t("Continue"), !!ob.board),
        click(b) {
          if (b.dataset.board) ob.board = b.dataset.board;
        },
        next() {
          Store.setProfile({ board: ob.board });
          go("class");
        },
        ready: () => !!ob.board,
      };
    },

    class() {
      if (ob.cls == null) ob.cls = P().cls;
      return {
        title: t("Which class are you in?"),
        body: `${head(t("Which class are you in?"))}
          <div class="ob-grid" role="group" aria-label="${t("Class")}">${D.classes.map((n) => `<button type="button" data-cls="${n}" aria-label="${t("Class {n}", { n })}" aria-pressed="${ob.cls === n}">${n}</button>`).join("")}</div>`,
        actions: primary(t("Continue"), !!ob.cls),
        click(b) {
          if (b.dataset.cls) ob.cls = Number(b.dataset.cls);
        },
        next() {
          Store.setProfile({ cls: ob.cls });
          go("view");
        },
        ready: () => !!ob.cls,
      };
    },

    view() {
      if (ob.view == null) ob.view = P().view;
      return {
        title: t("How do you want to learn?"),
        body: `${head(easy("How do you want to learn?", "How do you want to learn?"), t("You can change this any time in your profile."))}
          <div class="ob-choices" role="group" aria-label="${t("Learning view")}">
            ${choice('data-view="class"', "📚", t("Class-wise"), t("Follow your class programme with all available subjects"), ob.view === "class", `<span class="ob-badge">${t("Recommended")}</span>`)}
            ${choice('data-view="subject"', "🎯", t("Subject-wise"), t("Focus on the subjects you want"), ob.view === "subject")}
          </div>`,
        actions: primary(t("Continue")),
        click(b) {
          if (b.dataset.view) ob.view = b.dataset.view;
        },
        next() {
          Store.setProfile({ view: ob.view });
          ob.sel = null;
          go("subjects");
        },
        ready: () => true,
      };
    },

    subjects() {
      const list = Store.availableSubjects();
      const all = list.map((s) => s.id);
      const byClass = P().view !== "subject";
      if (!ob.sel) ob.sel = new Set(P().subjects ? P().subjects.filter((id) => all.includes(id)) : byClass ? all : []);
      const lead = byClass ? t("All subjects for your class are selected. Untick any you don't want in Today's plan.") : t("Pick the subjects you want to focus on. You need at least one, or decide later.");
      return {
        title: t("Choose your subjects"),
        body: `${head(easy("Choose your subjects", "What do you want to learn?"), lead)}
          <div class="ob-choices two" role="group" aria-label="${t("Subjects")}">
            ${list.map((s) => choice(`data-sub="${s.id}"`, SubjectIcons.html(s), esc(s.name), esc(s.native || ""), ob.sel.has(s.id))).join("")}
          </div>`,
        actions: `${primary(t("Continue"), ob.sel.size > 0)}${byClass ? "" : `<button type="button" class="btn link" data-act="later">${t("Decide later")}</button>`}`,
        click(b) {
          if (b.dataset.sub) ob.sel.has(b.dataset.sub) ? ob.sel.delete(b.dataset.sub) : ob.sel.add(b.dataset.sub);
          if (b.dataset.act === "later") {
            Store.setProfile({ subjects: null });
            ob.sel = null;
            go("me");
          }
        },
        next() {
          Store.setProfile({ subjects: ob.sel.size === all.length ? null : [...ob.sel] });
          ob.sel = null;
          go("me");
        },
        ready: () => !!ob.sel && ob.sel.size > 0,
      };
    },

    me() {
      const p = P();
      const lessonLangs = [["en", "English"], ["hi", "Hindi"], ["pa", "Punjabi"]];
      return {
        title: t("About you"),
        body: `${head(easy("About you", "What is your name?"))}
          <div class="field"><label for="ob-name">${t("Your name (optional)")}</label><input id="ob-name" class="input" value="${esc(p.name)}" maxlength="30" autocomplete="given-name"></div>
          <div class="field"><span class="lab" id="av-l">${t("Choose a picture")}</span>
            <div class="ob-avatars" role="group" aria-labelledby="av-l">${Store.AVATARS.map((id, i) => `<button type="button" data-avatar="${id}" aria-label="${t("Picture {n}", { n: i + 1 })}" aria-pressed="${p.avatar === id}">${Avatars.svg(id, 64)}</button>`).join("")}</div></div>
          <div class="field"><span class="lab">${t("App language")}</span>${langSwitch("App language")}<span class="hint" style="margin:0">${t("Buttons and menus.")}</span></div>
          <div class="field"><span class="lab">${t("Lesson language")}</span>
            <div class="seg" role="group" aria-label="${t("Lesson language")}">${lessonLangs.map(([v, l]) => `<button type="button" data-ll="${v}" class="${p.learnLang === v ? "on" : ""}" aria-pressed="${p.learnLang === v}">${t(l)}</button>`).join("")}</div>
            <span class="hint" style="margin:0">${t("The language you like explanations in. Not every lesson has every language yet.")}</span></div>`,
        actions: primary(t("Continue")),
        mount(el) {
          el.querySelector("#ob-name").oninput = (e) => Store.setProfile({ name: e.target.value });
        },
        click(b, el) {
          if (b.dataset.avatar) {
            Store.setProfile({ avatar: b.dataset.avatar });
            el.querySelectorAll("[data-avatar]").forEach((x) => x.setAttribute("aria-pressed", x === b));
          } else if (b.dataset.ll) {
            Store.setProfile({ learnLang: b.dataset.ll });
            el.querySelectorAll("[data-ll]").forEach((x) => {
              x.classList.toggle("on", x === b);
              x.setAttribute("aria-pressed", x === b);
            });
          }
        },
        next: () => go("goal"),
        ready: () => true,
      };
    },

    goal() {
      if (ob.goal === undefined) ob.goal = P().goal;
      const opt = (n, sub) => choice(`data-goal="${n}"`, "⏱️", t("{n} minutes a day", { n }), sub, ob.goal === n);
      return {
        title: t("Set a daily study goal"),
        body: `${head(easy("Set a daily study goal", "How long each day?"), t("Today's plan fits this time. You can change it any time."))}
          <div class="ob-choices" role="group" aria-label="${t("Daily goal")}">
            ${opt(15, t("A quick start"))}${opt(20, t("A steady routine"))}${opt(30, t("A deeper habit"))}
          </div>`,
        actions: `${primary(t("Continue"), !!ob.goal)}<button type="button" class="btn link" data-act="later">${t("I'll decide later")}</button>`,
        click(b) {
          if (b.dataset.goal) ob.goal = Number(b.dataset.goal);
          if (b.dataset.act === "later") {
            Store.setProfile({ goal: null });
            ob.goal = undefined;
            go("tour");
          }
        },
        next() {
          Store.setProfile({ goal: ob.goal });
          ob.goal = undefined;
          go("tour");
        },
        ready: () => !!ob.goal,
      };
    },

    tour() {
      const cards = [
        ["blue", "play", t("Continue a lesson"), t("Today shows the next step, so you can pick up where you stopped.")],
        ["purple", "game", t("Try a chapter game"), t("Every chapter has games to play and practise with.")],
        ["green", "bolt", t("Explore a lab"), t("Try experiments on screen and see what changes.")],
      ];
      const [col, ic, title, text] = cards[ob.tour];
      const last = ob.tour === cards.length - 1;
      return {
        title: t("A quick look around"),
        body: `${head(t("A quick look around"))}
          <section class="ob-tour" aria-label="${title}"><span class="ci c-${col}" aria-hidden="true">${icon(ic)}</span><span class="ob-count">${t("{n} of {total}", { n: ob.tour + 1, total: cards.length })}</span><h2>${title}</h2><p>${text}</p></section>`,
        actions: `<button type="button" class="btn primary" data-act="${last ? "done" : "more"}">${last ? t("Go to Today") : t("Next")} ${icon("arrow")}</button><button type="button" class="btn link" data-act="skip">${t("Skip tour")}</button>`,
        click(b) {
          if (b.dataset.act === "more") {
            ob.tour++;
            ob.focus = true;
            App.render();
          } else if (b.dataset.act === "done" || b.dataset.act === "skip") finish();
        },
        next: finish,
        ready: () => true,
      };
    },
  };

  function onboarding() {
    const key = currentStep();
    const flowList = flow();
    const i = flowList.indexOf(key);
    const s = STEPS[key]();
    return {
      title: t("Welcome"),
      html: frame(i, flowList.length, s.body, s.actions),
      mount(el) {
        const sync = () => {
          const nx = el.querySelector('[data-act="next"]');
          if (nx) nx.disabled = !s.ready();
        };
        if (s.mount) s.mount(el);
        el.onclick = (e) => {
          const b = e.target.closest("button");
          if (!b || !el.contains(b)) return;
          if (b.dataset.lang) {
            if (b.dataset.lang === currentLang()) return;
            Store.setLang(b.dataset.lang);
            applyLang();
            App.render({ keepScroll: true });
            return;
          }
          const act = b.dataset.act;
          if (act === "back") {
            return go(flowList[Math.max(0, i - 1)]);
          }
          if (act === "next" || act === "start") return s.next();
          if (s.click) s.click(b, el);
          if (currentStep() !== key || ob.focus) return; // the click moved to another step (it has drawn its own buttons)
          // Choices: mark the pressed one in place (no redraw, so focus stays where it is).
          const group = b.closest(".ob-choices, .ob-grid");
          if (group && b.hasAttribute("aria-pressed") && !b.dataset.sub) group.querySelectorAll("[aria-pressed]").forEach((x) => x.setAttribute("aria-pressed", x === b));
          else if (b.dataset.sub) b.setAttribute("aria-pressed", ob.sel.has(b.dataset.sub));
          sync();
        };
        if (ob.focus) {
          ob.focus = false;
          // After the page is drawn: App.render puts focus back on the last button, but a new step starts at its heading.
          setTimeout(() => {
            const h = el.querySelector("#ob-h");
            if (h) h.focus({ preventScroll: true });
            announce(`${t("Step {n} of {total}", { n: i + 1, total: flowList.length })}: ${s.title}`);
          }, 0);
        } else if (ob.focusSel) {
          const f = ob.focusSel;
          ob.focusSel = null;
          setTimeout(() => {
            const n = el.querySelector(f);
            if (n) n.focus({ preventScroll: true });
          }, 0);
        }
      },
    };
  }

  Object.assign(Views, { onboarding });
})();
