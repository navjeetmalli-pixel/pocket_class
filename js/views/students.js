// Students sharing the device: the Home switcher and the Settings list.

(() => {
  const { D } = Views._;

  // ---------- students sharing the device ----------
  const studentName = (stu, i) => stu.name || t("Student {n}", { n: i + 1 });

  // Switches to another student and starts from their Home page.
  function goToStudent(id) {
    Store.switchStudent(id);
    if (location.hash === "#/" || location.hash === "") App.render();
    else location.hash = "#/";
  }

  // Shown on Home when 2 or more students use the device.
  function studentSwitcher() {
    const list = Store.students();
    if (list.length < 2) return "";
    const cur = list.findIndex((x) => x.id === Store.currentId);
    return `<label class="stud-switch">${Avatars.badge(list[cur], studentName(list[cur], cur))}
      <select aria-label="${t("Student")}">${list.map((x, i) => `<option value="${x.id}" ${x.id === Store.currentId ? "selected" : ""}>${esc(studentName(x, i))}</option>`).join("")}</select></label>`;
  }

  function mountStudentSwitcher(el) {
    const sel = el.querySelector(".stud-switch select");
    if (sel) sel.onchange = () => goToStudent(sel.value);
  }

  function studentsCard() {
    const list = Store.students();
    const rows = list
      .map((x, i) => {
        const cur = x.id === Store.currentId;
        return `<div class="stud-row" data-id="${x.id}">
          ${Avatars.badge(x, studentName(x, i))}
          <div class="grow"><input class="input" data-rename value="${esc(x.name)}" placeholder="${esc(studentName(x, i))}" maxlength="30" aria-label="${t("Student name")}">
            <div class="tiny muted" style="margin-top:2px">${International.label(x)} · ${x.board === "intl" ? t(International.country(x.country).name) : x.board === "pseb" ? "PSEB" : "CBSE"}</div></div>
          ${cur ? `<span class="pill accent">${t("Current")}</span>` : `<button class="btn" data-switch>${t("Switch")}</button>`}
          ${list.length > 1 ? `<button class="btn bad" data-del>${t("Delete")}</button>` : ""}
        </div>`;
      })
      .join("");
    return `<div class="card stack" id="students">
      <div><strong>${t("Students")}</strong><div class="small muted">${t("Brothers and sisters can share this device. Each student has their own progress, mistakes and streak.")}</div></div>
      ${rows}
      <div class="stud-add">
        <input class="input" id="new-name" maxlength="30" placeholder="${t("Student name")}" aria-label="${t("Student name")}">
        <select class="input" id="new-cls" aria-label="${t("Class")}">${D.classes.map((n) => `<option value="${n}">${t("Class {n}", { n })}</option>`).join("")}</select>
        <select class="input" id="new-board" aria-label="${t("Board")}"><option value="cbse">CBSE / NCERT</option><option value="pseb">PSEB</option></select>
        <button class="btn primary" data-add>${t("Add a student")}</button>
      </div>
    </div>`;
  }

  function mountStudents(el) {
    const box = el.querySelector("#students");
    box.onchange = (e) => {
      const row = e.target.closest("[data-rename]");
      if (!row) return;
      Store.renameStudent(row.closest(".stud-row").dataset.id, row.value);
      toast(t("Name saved"));
      App.render({ keepScroll: true });
    };
    box.onclick = (e) => {
      const b = e.target.closest("[data-switch],[data-del],[data-add]");
      if (!b) return;
      e.stopPropagation(); // the page's own click handler is for the other settings
      const row = b.closest(".stud-row");
      const list = Store.students();
      if (b.hasAttribute("data-switch")) {
        const x = list.find((s) => s.id === row.dataset.id);
        goToStudent(row.dataset.id);
        toast(t("Switched to {name}", { name: studentName(x, list.indexOf(x)) }));
      } else if (b.hasAttribute("data-del")) {
        const i = list.findIndex((s) => s.id === row.dataset.id);
        const name = studentName(list[i], i);
        const id = row.dataset.id;
        Pin.guard(t("Deleting a student can't be undone."), () => {
          if (!confirm(t("Delete {name} and all their progress? This can't be undone.", { name }))) return;
          Store.deleteStudent(id);
          toast(t("{name} deleted", { name }));
          App.render({ keepScroll: true });
        });
      } else {
        const name = box.querySelector("#new-name").value;
        Store.addStudent(name, Number(box.querySelector("#new-cls").value), box.querySelector("#new-board").value);
        const n = Store.students().length;
        toast(t("Switched to {name}", { name: name.trim() || t("Student {n}", { n }) }));
        location.hash = "#/";
      }
    };
  }

  Object.assign(Views._, { studentName, goToStudent, studentSwitcher, mountStudentSwitcher, studentsCard, mountStudents });
})();
