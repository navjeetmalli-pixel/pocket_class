// Mock test: setup, building the paper and running it.

(() => {
  const { D, cls, topbar, pageHead, quizItems, genItems, emptyState } = Views._;

  // ---------- mock test ----------

  // Remembered while the app is open, so "New test" keeps the last choices.
  const testCfg = { subject: "all", chapters: null, count: 20, timed: true };

  function testPool(c) {
    const subs = testCfg.subject === "all" ? D.subjectsFor(c) : [D.subject(testCfg.subject)];
    const groups = [];
    subs.forEach((s) =>
      D.chapters(c, s.id).forEach((ch) => {
        if (testCfg.subject !== "all" && testCfg.chapters && !testCfg.chapters.includes(ch.id)) return;
        groups.push(shuffle([...quizItems(c, s, ch), ...genItems(c, s, ch, 2)]));
      })
    );
    return groups;
  }

  // Round-robin across chapters so a test covers as many chapters as possible.
  function buildTest(c) {
    const groups = shuffle(testPool(c));
    const items = [];
    let added = true;
    while (items.length < testCfg.count && added) {
      added = false;
      for (const g of groups) {
        if (g.length && items.length < testCfg.count) {
          items.push(g.pop());
          added = true;
        }
      }
    }
    return shuffle(items);
  }

  // The subjects the mock-test setup page needs in full: "all", or one subject id in a list.
  const testNeeds = () => (testCfg.subject === "all" ? "all" : [testCfg.subject]);
  const testSetupNeeds = (pre) => {
    if (pre && D.subject(pre)) return [pre];
    return testNeeds();
  };

  function testSetup([pre]) {
    const c = cls();
    if (pre && D.subject(pre) && testCfg.subject !== pre) {
      testCfg.subject = pre;
      testCfg.chapters = null;
    }
    return {
      title: t("Mock test"),
      html: `${pageHead(t("Mock test"), t("Class {n} · Practise like the real exam", { n: c }))}<div id="setup"></div>`,
      mount(el) {
        const box = el.querySelector("#setup");
        const draw = () => (box.innerHTML = setupHTML(c));
        draw();
        box.onclick = (e) => {
          const b = e.target.closest("[data-subj],[data-count],[data-act]");
          if (!b) return;
          if (b.dataset.subj) {
            testCfg.subject = b.dataset.subj;
            testCfg.chapters = null;
            // Another subject may still need to load: go through the router, which shows "Loading…" meanwhile.
            if (!D.subjectsLoaded(c, testNeeds()) || !D.practiceLoaded(c, testCfg.subject === "all" ? undefined : testCfg.subject))
              return location.hash === "#/test" ? App.render({ keepScroll: true }) : (location.hash = "#/test");
          } else if (b.dataset.count) testCfg.count = Number(b.dataset.count);
          else if (b.dataset.act === "all") testCfg.chapters = null;
          else if (b.dataset.act === "none") testCfg.chapters = [];
          else if (b.dataset.act === "start") return startTest(c);
          else return;
          draw();
        };
        box.onchange = (e) => {
          if (e.target.dataset.ch !== undefined) {
            testCfg.chapters = [...box.querySelectorAll("[data-ch]")].filter((x) => x.checked).map((x) => x.dataset.ch);
            draw();
          } else if (e.target.id === "timed") {
            testCfg.timed = e.target.checked;
            draw();
          }
        };
      },
    };
  }

  function setupHTML(c) {
    const withContent = D.subjectsFor(c).filter((s) => D.chapters(c, s.id).length);
    if (!withContent.length) return emptyState("📚", t("No chapters are available yet."));
    if (testCfg.subject !== "all" && !withContent.some((s) => s.id === testCfg.subject)) testCfg.subject = "all";

    const pool = testPool(c).reduce((a, g) => a + g.length, 0);
    const count = Math.min(testCfg.count, pool);
    const chips = [`<button class="chip ${testCfg.subject === "all" ? "on" : ""}" data-subj="all">${t("All subjects")}</button>`]
      .concat(withContent.map((s) => `<button class="chip ${testCfg.subject === s.id ? "on" : ""}" data-subj="${s.id}">${s.icon} ${esc(s.short)}</button>`))
      .join("");

    let chapterPick = "";
    if (testCfg.subject !== "all") {
      const chs = D.chapters(c, testCfg.subject);
      const sel = testCfg.chapters || chs.map((x) => x.id);
      chapterPick = `<div class="card">
        <div class="row"><strong class="grow">${t("Chapters")}</strong><span class="small muted">${t("{a} of {b} selected", { a: sel.length, b: chs.length })}</span></div>
        <div class="row" style="margin-top:8px"><button class="chip" data-act="all">${t("Select all")}</button><button class="chip" data-act="none">${t("Clear")}</button></div>
        <div class="check-list">${chs
          .map((ch) => `<label><input type="checkbox" data-ch="${ch.id}" ${sel.includes(ch.id) ? "checked" : ""}><span>${esc(ch.title)}</span></label>`)
          .join("")}</div>
      </div>`;
    }

    const past = Store.state.history.filter((h) => h.kind === "test" && h.cls === c).slice(0, 5);

    return `<div class="stack">
      <div class="card"><strong>${t("Subject")}</strong><div class="chips" style="margin-top:10px">${chips}</div></div>
      ${chapterPick}
      <div class="card">
        <strong>${t("Number of questions")}</strong>
        <div class="chips" style="margin-top:10px">${[10, 20, 30, 50].map((n) => `<button class="chip ${testCfg.count === n ? "on" : ""}" data-count="${n}">${n}</button>`).join("")}</div>
        ${pool < testCfg.count ? `<p class="small muted" style="margin-top:8px">${t("Only {n} questions available for this selection.", { n: pool })}</p>` : ""}
      </div>
      <div class="card"><label class="switch"><span><strong>${t("Timer")}</strong><br><span class="small muted">${t("1 minute per question, auto-submits when time runs out")}</span></span><input type="checkbox" id="timed" ${testCfg.timed ? "checked" : ""}></label></div>
      <button class="btn primary block" data-act="start" ${count ? "" : "disabled"}>${t("Start test · {n} questions", { n: count })}${testCfg.timed ? ` · ${t("{n} min", { n: count })}` : ""}</button>
    </div>
    ${
      past.length
        ? `<h2 class="block-title">${t("Recent tests")}</h2><div class="card">${past
            .map(
              (h) => `<div class="history-row"><div class="grow"><div style="font-weight:620">${esc(t(h.title))}</div><div class="tiny muted">${relDate(h.at)}</div></div>
              <span class="pill ${pct(h.score, h.total) >= 60 ? "good" : "bad"}">${h.score}/${h.total}</span></div>`
            )
            .join("")}</div>`
        : ""
    }`;
  }

  function startTest(c) {
    const items = buildTest(c);
    if (!items.length) return;
    const subj = testCfg.subject === "all" ? null : D.subject(testCfg.subject);
    const title = subj ? t("{subject} test", { subject: subj.short }) : t("Mixed test");
    App.pendingTest = {
      title,
      items,
      seconds: testCfg.timed ? items.length * 60 : null,
      record: { subject: subj ? subj.id : "all", cls: c, kind: "test", timed: testCfg.timed },
      showFrom: true,
      backHref: "#/test",
      backLabel: "New test",
      retry: () => {
        const fresh = buildTest(c);
        return { ...App.pendingTest, items: fresh, seconds: testCfg.timed ? fresh.length * 60 : null };
      },
    };
    location.hash = "#/test/run";
  }

  function testRun() {
    const t = App.pendingTest;
    if (!t) return { redirect: "#/test" };
    return {
      title: t.title,
      html: `${topbar(t.title, "#/test")}<div id="quiz-mount"></div>`,
      mount(el) {
        Quiz.mount(el.querySelector("#quiz-mount"), { ...t, instant: false });
      },
    };
  }

  Object.assign(Views, { testSetupNeeds, testSetup, testRun });
})();
