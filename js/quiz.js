// Quiz runner, used for chapter quizzes, mock tests and mistake practice.
//   instant: true  -> feedback after every answer (chapter quiz)
//   instant: false -> answer everything, then submit; optional time limit (mock test)
// Items look like { q, options, answer, explain, ref: { key, from } }.

const Quiz = (() => {
  let s = null;
  let el = null;

  function mount(container, opts) {
    stop();
    el = container;
    s = {
      opts,
      // keepOrder: options that only make sense in a fixed order (assertion–reason).
      items: opts.items.map((it) => ({ ...it, order: it.keepOrder ? [0, 1, 2, 3] : shuffle([0, 1, 2, 3]), picked: null })),
      i: 0,
      started: Date.now(),
      ended: null,
      done: false,
      timer: null,
      endAt: opts.seconds ? Date.now() + opts.seconds * 1000 : null,
    };
    el.onclick = onClick;
    if (s.endAt) s.timer = setInterval(tick, 500);
    render();
  }

  function stop() {
    if (s && s.timer) clearInterval(s.timer);
  }

  const live = () => s && el && el.isConnected;

  function render() {
    if (!live()) return stop();
    const hadFocus = el.contains(document.activeElement);
    el.innerHTML = s.done ? resultHTML() : questionHTML();
    // Re-rendering replaces the buttons, so put keyboard focus back somewhere sensible.
    if (hadFocus) {
      const f = ['[data-act="next"]', '[data-act="submit"]', ".option.selected", ".option:not(.locked)", '[data-act="retry"]'].map((q) => el.querySelector(q)).find(Boolean);
      if (f) f.focus({ preventScroll: true });
    }
  }

  // Shortcuts only apply while focus is in the quiz (or nowhere in particular).
  const forUs = (e) => (e.target === document.body || el.contains(e.target)) && !e.metaKey && !e.ctrlKey && !e.altKey;

  // Read-aloud button for young classes: the question, then its options in the order shown.
  function speakQuestion(it) {
    const r = it.ref || {};
    const k = r.key ? Store.parseKey(r.key) : r;
    if (!k.cls) return "";
    return Speech.btn(k.cls, k.subject, [it.q, ...it.order.map((o, j) => `${"ABCD"[j]}. ${it.options[o]}`)].join(". "));
  }

  function questionHTML() {
    const it = s.items[s.i];
    const n = s.items.length;
    const instant = s.opts.instant;
    const locked = instant && it.picked !== null;
    const answered = s.items.filter((x) => x.picked !== null).length;

    const options = it.order
      .map((orig, k) => {
        let cls = "option";
        if (locked) {
          cls += " locked";
          if (orig === it.answer) cls += " correct";
          else if (orig === it.picked) cls += " wrong";
        } else if (orig === it.picked) cls += " selected";
        // Colour alone must not carry the result: say it in words for screen readers too.
        const state = !locked ? "" : orig === it.answer ? `<span class="sr-only">${t("Correct answer:")} </span>` : orig === it.picked ? `<span class="sr-only">${t("Your answer:")} </span>` : "";
        const pressed = !instant ? ` aria-pressed="${orig === it.picked}"` : "";
        return `<button class="${cls}" data-pick="${orig}"${pressed}>${state}<span class="letter" aria-hidden="true">${"ABCD"[k]}</span><span>${rich(it.options[orig])}</span></button>`;
      })
      .join("");

    let right;
    if (s.endAt) {
      const left = (s.endAt - Date.now()) / 1000;
      right = `<span class="quiz-clock ${left < 60 ? "low" : ""}">${icon("timer")}<span data-clock>${clock(left)}</span></span>`;
    } else if (instant) {
      const correct = s.items.filter((x) => x.picked !== null && x.picked === x.answer).length;
      right = `<span class="quiz-clock"><span aria-hidden="true">✓ ${correct}</span><span class="sr-only">${t("{n} correct so far", { n: correct })}</span></span>`;
    } else {
      right = `<span class="quiz-clock">${t("{a}/{n} answered", { a: answered, n })}</span>`;
    }

    let footer = "";
    if (instant) {
      if (locked) {
        const ok = it.picked === it.answer;
        footer = `
          <div class="feedback ${ok ? "good" : "bad"}">
            <div class="h">${ok ? t("Correct! 🎉") : t("Not quite")}</div>
            ${ok ? "" : `<div>${t("Correct answer:")} <strong>${rich(it.options[it.answer])}</strong></div>`}
            <div>${rich(it.explain)}</div>
            ${ok ? "" : Learn.feedbackHTML(it, it.picked)}
          </div>
          <div class="quiz-nav"><button class="btn primary" data-act="next">${s.i < n - 1 ? t("Next question") : t("See my score")} ${icon("arrow")}</button></div>`;
      }
    } else {
      footer = `
        <div class="quiz-nav">
          <button class="btn" data-act="prev" ${s.i === 0 ? "disabled" : ""}>${icon("back")} ${t("Previous")}</button>
          ${s.i < n - 1 ? `<button class="btn primary" data-act="next">${t("Next")} ${icon("next")}</button>` : `<button class="btn primary" data-act="submit">${t("Submit test")}</button>`}
        </div>
        <div class="palette" aria-label="${t("Jump to question")}">
          ${s.items.map((x, j) => `<button data-go="${j}" class="${x.picked !== null ? "answered" : ""} ${j === s.i ? "current" : ""}" aria-label="${x.picked !== null ? t("Question {n}, answered", { n: j + 1 }) : t("Question {n}", { n: j + 1 })}" ${j === s.i ? 'aria-current="true"' : ""}>${j + 1}</button>`).join("")}
        </div>
        ${s.i < n - 1 ? `<button class="btn block mt" data-act="submit">${t("Submit test ({a}/{n} answered)", { a: answered, n })}</button>` : ""}`;
    }

    return `
      <div class="card">
        <div class="quiz-head"><span>${t("Question {i} of {n}", { i: s.i + 1, n })}</span>${right}</div>
        <span class="bar" aria-hidden="true"><i style="width:${pct(s.i + (locked ? 1 : 0), n)}%"></i></span>
        ${it.ref && it.ref.from && s.opts.showFrom ? `<div class="quiz-from" style="margin-top:16px">${esc(it.ref.from)}</div>` : ""}
        <div class="quiz-q" id="quiz-q">${rich(it.q)}${speakQuestion(it)}</div>
        <div class="options" role="group" aria-labelledby="quiz-q">${options}</div>
        ${footer}
      </div>
      <p class="tiny muted center kbd-tip" style="margin-top:10px">${instant ? t("Tip: press 1–4 to answer, Enter for next.") : t("Tip: press 1–4 to answer.")}</p>`;
  }

  function resultHTML() {
    const n = s.items.length;
    const score = s.items.filter((x) => x.picked === x.answer).length;
    const p = pct(score, n);
    const msg = p >= 90 ? t("Outstanding! 🌟") : p >= 75 ? t("Great work! 🎉") : p >= 50 ? t("Good effort 👍") : t("Keep practising 💪");
    const ring = p >= 75 ? "var(--good)" : p >= 50 ? "var(--gold)" : "var(--bad)";
    // Only saved questions go to My mistakes; generated ones have no key and are never kept.
    const wrong = s.items.filter((x) => x.ref.key && x.picked !== x.answer).length;

    // Per-chapter breakdown for mixed tests.
    const groups = {};
    s.items.forEach((x) => {
      const g = (groups[x.ref.from] = groups[x.ref.from] || { ok: 0, n: 0 });
      g.n++;
      if (x.picked === x.answer) g.ok++;
    });
    const groupList = Object.entries(groups).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n);
    const breakdown =
      groupList.length > 1
        ? `<h2 class="block-title">${t("By chapter")}</h2>
           <div class="card breakdown">${groupList
             .map(
               ([name, g]) => `<div>
                 <div class="row"><span class="lbl grow">${esc(name)}</span><span class="val">${g.ok}/${g.n}</span></div>
                 <span class="bar"><i style="width:${pct(g.ok, g.n)}%;background:${pct(g.ok, g.n) >= 60 ? "var(--good)" : "var(--bad)"}"></i></span>
               </div>`
             )
             .join("")}</div>`
        : "";

    const review = s.items
      .map((x, j) => {
        const ok = x.picked === x.answer;
        return `<div class="card review-item ${ok ? "ok" : "no"}">
          ${s.opts.showFrom ? `<div class="quiz-from">${esc(x.ref.from)}</div>` : ""}
          <div style="font-weight:620">${j + 1}. ${rich(x.q)}</div>
          <div class="opts">
            ${ok ? "" : `<div class="yours">${icon("x").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"')} ${t("Your answer:")} ${x.picked === null ? `<em>${t("not answered")}</em>` : rich(x.options[x.picked])}</div>`}
            <div class="right">${icon("check").replace('class="i"', 'class="i" style="width:16px;height:16px;vertical-align:-3px"')} ${rich(x.options[x.answer])}</div>
          </div>
          <div class="why">${rich(x.explain)}</div>
        </div>`;
      })
      .join("");

    return `
      <div class="card result-top">
        <div class="ring" style="--p:${p};--ring:${ring}"><div><span class="v">${score}/${n}</span><span class="l">${p}%</span></div></div>
        <div class="result-msg">${msg}</div>
        <div class="muted small">${t("Time taken {time}", { time: clock((s.ended - s.started) / 1000) })}${wrong ? ` · ${t("{n} {n:question|questions} added to My mistakes", { n: wrong })}` : ""}</div>
        <div class="result-actions">
          <button class="btn primary" data-act="retry">${icon("reset")} ${t("Try again")}</button>
          ${s.opts.backHref ? `<a class="btn" href="${s.opts.backHref}">${esc(t(s.opts.backLabel || "Back"))}</a>` : ""}
        </div>
      </div>
      ${s.opts.resultExtra ? s.opts.resultExtra(score, n) : ""}
      ${Learn.improvedHTML(s.learned)}
      ${breakdown}
      <h2 class="block-title">${t("Review answers")}</h2>
      <div class="stack">${review}</div>`;
  }

  function pick(orig) {
    const it = s.items[s.i];
    if (s.opts.instant && it.picked !== null) return;
    it.picked = orig;
    render();
    // The result is spoken here (once), not by re-inserting a live region with the page.
    if (s.opts.instant) {
      const f = el.querySelector(".feedback");
      if (f) announce(f.textContent);
    }
  }

  function go(i) {
    s.i = Math.max(0, Math.min(s.items.length - 1, i));
    render();
    const top = el.getBoundingClientRect().top;
    if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
  }

  function next() {
    if (s.i < s.items.length - 1) go(s.i + 1);
    else finish();
  }

  function submit() {
    const left = s.items.filter((x) => x.picked === null).length;
    if (left && !confirm(t("You have {n} unanswered {n:question|questions}. Submit anyway?", { n: left }))) return;
    finish();
  }

  function finish() {
    stop();
    s.done = true;
    s.ended = Date.now();
    let score = 0;
    // Learning evidence (js/learn.js): every answered question counts towards its objective. Built first, because
    // "attempt" looks at My mistakes as they were before this round.
    const source = Learn.SOURCE_OF_KIND[(s.opts.record || {}).kind] || "quiz";
    const evidence = s.items.filter((x) => x.picked !== null).map((x) => Learn.answerEvent(x, x.picked === x.answer, { picked: x.picked, source }));
    s.items.forEach((x) => {
      if (x.picked === x.answer) score++;
      // Generated questions have no key: they're new every time, so there's nothing to revisit.
      if (!x.ref.key) return;
      if (x.picked === x.answer) Store.clearMistake(x.ref.key);
      else Store.addMistake(x.ref.key, x.ref.path);
    });
    const answers = s.items.filter((x) => x.ref.key && x.picked !== null).map((x) => ({ key: x.ref.key, ok: x.picked === x.answer }));
    s.learned = Learn.record(evidence);
    if (s.opts.record) Store.recordQuiz({ ...s.opts.record, title: s.opts.title, score, total: s.items.length, answers });
    // Practice by topic: the level is marked mastered here, and the result screen says what comes next.
    if (s.opts.onDone) s.opts.onDone(score, s.items.length);
    render();
    window.scrollTo({ top: 0 });
  }

  function tick() {
    if (!live() || s.done) return stop();
    const left = (s.endAt - Date.now()) / 1000;
    // Say the time left only at a few moments, not every second.
    for (const mark of [300, 60, 10]) if (left <= mark && !(s.said || (s.said = {}))[mark] && s.endAt - s.started > mark * 1000 * 1.5) {
      s.said[mark] = true;
      announce(mark >= 60 ? t("{n} {n:minute|minutes} left", { n: mark / 60 }) : t("{n} seconds left", { n: mark }));
    }
    const c = el.querySelector("[data-clock]");
    if (c) {
      c.textContent = clock(left);
      c.parentElement.classList.toggle("low", left < 60);
    }
    if (left <= 0) {
      toast(t("Time's up! Your test has been submitted."));
      finish();
    }
  }

  function onClick(e) {
    const b = e.target.closest("[data-pick],[data-act],[data-go]");
    if (!b || !s) return;
    if (b.dataset.pick !== undefined) return pick(Number(b.dataset.pick));
    if (b.dataset.go !== undefined) return go(Number(b.dataset.go));
    const act = b.dataset.act;
    if (act === "next") next();
    else if (act === "prev") go(s.i - 1);
    else if (act === "submit") submit();
    else if (act === "retry") {
      const again = s.opts.retry ? s.opts.retry() : s.opts;
      if (again) mount(el, again);
      else App.render();
    }
  }

  document.addEventListener("keydown", (e) => {
    if (!live() || s.done || !forUs(e)) return;
    const it = s.items[s.i];
    const onButton = e.target.closest("button, a");
    const k = e.key.toLowerCase();
    const idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    if (idx >= 0 && k.length === 1) {
      pick(it.order[idx]);
      e.preventDefault();
    } else if (e.key === "Enter" && !onButton && (!s.opts.instant || it.picked !== null)) {
      next();
      e.preventDefault();
    } else if (!s.opts.instant && e.key === "ArrowRight") go(s.i + 1);
    else if (!s.opts.instant && e.key === "ArrowLeft") go(s.i - 1);
  });

  return {
    mount,
    inProgress: () => live() && !s.done && s.items.some((x) => x.picked !== null),
  };
})();

// Flip-card practice for key terms.
// Cards look like { key, front, back, from }.
const Cards = (() => {
  let s = null;
  let el = null;

  function mount(container, opts) {
    el = container;
    s = { opts, deck: opts.cards.slice(), i: 0, flipped: false, known: 0 };
    el.onclick = onClick;
    render();
  }

  const live = () => s && el && el.isConnected;

  function render() {
    if (!live()) return;
    const hadFocus = el.contains(document.activeElement);
    draw();
    if (hadFocus) {
      const f = el.querySelector(".flashcard, .result-actions .btn");
      if (f) f.focus({ preventScroll: true });
    }
  }

  function draw() {
    const n = s.deck.length;
    if (!n) {
      el.innerHTML = `<div class="card empty"><div class="big">🎉</div>${t("No cards here right now.")}</div>`;
      return;
    }
    if (s.i >= n) {
      const learning = n - s.known;
      el.innerHTML = `
        <div class="card result-top">
          <div class="ring" style="--p:${pct(s.known, n)};--ring:var(--good)"><div><span class="v">${s.known}/${n}</span><span class="l">${t("known")}</span></div></div>
          <div class="result-msg">${learning ? t("Nice work! Keep going 💪") : t("You know them all! 🌟")}</div>
          <div class="result-actions">
            ${learning ? `<button class="btn primary" data-act="learning-only">${t("Practise {n} still learning", { n: learning })}</button>` : ""}
            <button class="btn" data-act="restart">${icon("reset")} ${t("Start again")}</button>
          </div>
        </div>`;
      return;
    }
    const c = s.deck[s.i];
    const status = Store.state.cards[c.key];
    el.innerHTML = `
      <div class="row small muted" style="margin-bottom:10px">
        <span>${t("Card {i} of {n}", { i: s.i + 1, n })}</span>
        ${status ? `<span class="pill ${status === "known" ? "good" : "bad"}">${status === "known" ? t("Known") : t("Learning")}</span>` : ""}
        <span class="grow"></span>
        ${speakCard(c)}
        <button class="chip" data-act="shuffle">${icon("shuffle").replace('class="i"', 'class="i" style="width:16px;height:16px"')} ${t("Shuffle")}</button>
      </div>
      <button type="button" class="flashcard ${s.flipped ? "flipped" : ""}" data-act="flip" aria-pressed="${s.flipped}" aria-label="${esc(cardLabel(c))}">
        <span class="flashcard-inner">
          <span class="face front" ${s.flipped ? 'aria-hidden="true"' : ""}>
            ${c.from ? `<span class="from">${esc(c.from)}</span>` : ""}
            <span class="term">${rich(c.front)}</span>
            <span class="hint">${t("Tap to see the meaning")}</span>
          </span>
          <span class="face back" ${s.flipped ? "" : 'aria-hidden="true"'}>
            <span class="from">${rich(c.front)}</span>
            <span class="meaning">${rich(c.back)}</span>
          </span>
        </span>
      </button>
      <div class="card-actions">
        <button class="btn bad" data-act="learning">${t("Still learning")}</button>
        <button class="btn good" data-act="known">${t("I know this")}</button>
      </div>
      <p class="tiny muted center kbd-tip" style="margin-top:10px">${t("Tip: Space flips, ← still learning, → I know this.")}</p>`;
  }

  // The button's name carries the card's words, so a screen reader hears the term (and the meaning once flipped).
  const cardLabel = (c) => `${plain(c.front)}. ${s.flipped ? plain(c.back) + ". " + t("Meaning shown. Press to see the term") : t("Press to see the meaning")}`;

  // Reads the face that is showing: the term, or the term and its meaning once flipped.
  const cardText = (c) => (s.flipped ? `${c.front}. ${c.back}` : c.front);
  function speakCard(c) {
    const k = Store.parseKey(c.key);
    return Speech.btn(k.cls, k.subject, cardText(c));
  }

  function flip() {
    s.flipped = !s.flipped;
    const say = el.querySelector(".say");
    if (say) say.dataset.say = plain(cardText(s.deck[s.i])).replace(/\s+/g, " ").trim();
    const f = el.querySelector(".flashcard");
    if (!f) return;
    f.classList.toggle("flipped", s.flipped);
    f.setAttribute("aria-pressed", s.flipped);
    f.setAttribute("aria-label", cardLabel(s.deck[s.i]));
    const hide = (face, hidden) => (hidden ? face.setAttribute("aria-hidden", "true") : face.removeAttribute("aria-hidden"));
    hide(f.querySelector(".front"), s.flipped);
    hide(f.querySelector(".back"), !s.flipped);
  }

  function mark(status) {
    const c = s.deck[s.i];
    Store.setCard(c.key, status);
    if (status === "known") s.known++;
    s.i++;
    s.flipped = false;
    render();
  }

  function onClick(e) {
    const b = e.target.closest("[data-act]");
    if (!b || !s) return;
    const act = b.dataset.act;
    if (act === "flip") flip();
    else if (act === "known" || act === "learning") mark(act);
    else if (act === "shuffle") {
      s.deck = shuffle(s.deck);
      s.i = 0;
      s.known = 0;
      s.flipped = false;
      render();
    } else if (act === "restart") mount(el, s.opts);
    else if (act === "learning-only") {
      const learning = s.deck.filter((c) => Store.state.cards[c.key] !== "known");
      mount(el, { ...s.opts, cards: learning });
    }
  }

  document.addEventListener("keydown", (e) => {
    if (!live() || s.i >= s.deck.length || e.metaKey || e.ctrlKey || e.altKey) return;
    // Only while focus is on the cards (or nowhere in particular); buttons handle Space/Enter themselves.
    if (e.target !== document.body && !el.contains(e.target)) return;
    if (e.key === " " && e.target === document.body) {
      flip();
      e.preventDefault();
    } else if (e.key === "ArrowLeft") mark("learning");
    else if (e.key === "ArrowRight") mark("known");
  });

  return { mount };
})();
