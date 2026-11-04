// Place-value blocks (Maths Studio, Classes 1 to 6): put ones, tens, hundreds and bigger blocks into a place-value chart, regroup
// (10 of one place make 1 of the next place) and read the number in digits, in words and in expanded form, in the Indian system
// (thousand, lakh, crore) or the international one (thousand, million).
//
//   value = sum over places of (blocks in the place) x (value of the place)      the same number can be made in more than one way
//   10 blocks of a place = 1 block of the next place (regroup); 1 block = 10 blocks of the place before (break)
//   Indian grouping: 12,34,567 (last three digits, then pairs)   International grouping: 1,234,567 (threes)
//
// Assumptions: whole numbers only; seven places at most (up to the ten lakhs / millions place); each place holds at most 19 blocks.

(() => {
  const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const below100 = (n) => (n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? "-" + ONES[n % 10] : ""));
  const below1000 = (n) => [n >= 100 ? ONES[Math.floor(n / 100)] + " hundred" : "", n % 100 ? below100(n % 100) : ""].filter(Boolean).join(" ");

  // Number names. Indian: crore (10^7), lakh (10^5), thousand. International: billion, million, thousand.
  function wordsIndian(n) {
    if (n === 0) return "zero";
    const cr = Math.floor(n / 1e7);
    const parts = [cr ? below1000(cr) + " crore" : "", Math.floor(n / 1e5) % 100 ? below100(Math.floor(n / 1e5) % 100) + " lakh" : "", Math.floor(n / 1e3) % 100 ? below100(Math.floor(n / 1e3) % 100) + " thousand" : "", n % 1000 ? below1000(n % 1000) : ""];
    return parts.filter(Boolean).join(" ");
  }
  function wordsIntl(n) {
    if (n === 0) return "zero";
    const parts = [Math.floor(n / 1e9) ? below1000(Math.floor(n / 1e9)) + " billion" : "", Math.floor(n / 1e6) % 1000 ? below1000(Math.floor(n / 1e6) % 1000) + " million" : "", Math.floor(n / 1e3) % 1000 ? below1000(Math.floor(n / 1e3) % 1000) + " thousand" : "", n % 1000 ? below1000(n % 1000) : ""];
    return parts.filter(Boolean).join(" ");
  }
  const words = (n, sys) => (sys === "intl" ? wordsIntl(n) : wordsIndian(n));
  // 1234567 -> "12,34,567" (in) or "1,234,567" (intl)
  function group(n, sys) {
    const s = String(n);
    if (s.length <= 3) return s;
    if (sys === "intl") return s.replace(/\B(?=(\d{3})+$)/g, ",");
    const last = s.slice(-3);
    return s.slice(0, -3).replace(/\B(?=(\d{2})+$)/g, ",") + "," + last;
  }
  // 245 -> "200 + 40 + 5"
  function expanded(n, sys) {
    if (n === 0) return "0";
    const s = String(n);
    return [...s].map((d, i) => (d === "0" ? null : group(Number(d) * 10 ** (s.length - 1 - i), sys))).filter(Boolean).join(" + ");
  }
  const value = (cnt) => cnt.reduce((s, c, i) => s + c * 10 ** i, 0);
  const digitsOf = (n, len) => Array.from({ length: len }, (_, i) => Math.floor(n / 10 ** i) % 10);
  // Regroup 10 blocks of place i into 1 block of place i+1 (or the reverse); null when it cannot be done.
  function regroup(cnt, i, cap = 19, len = cnt.length) {
    if (i >= len - 1 || cnt[i] < 10 || cnt[i + 1] >= cap) return null;
    const c = cnt.slice();
    c[i] -= 10;
    c[i + 1]++;
    return c;
  }
  function brk(cnt, i, cap = 19) {
    if (i < 1 || cnt[i] < 1 || cnt[i - 1] + 10 > cap) return null;
    const c = cnt.slice();
    c[i]--;
    c[i - 1] += 10;
    return c;
  }

  // Places: v = 10^i; one / many are the names of a block of that place.
  const PLACES = [
    { one: "{n} {n:one|ones}", name: "Ones" },
    { one: "{n} {n:ten|tens}", name: "Tens" },
    { one: "{n} {n:hundred|hundreds}", name: "Hundreds" },
    { one: "{n} {n:thousand|thousands}", name: "Thousands" },
    { one: "{n} {n:ten thousand|ten thousands}", name: "Ten thousands" },
    { one: "{n} {n:lakh|lakhs}", name: "Lakhs", intlOne: "{n} {n:hundred thousand|hundred thousands}", intl: "Hundred thousands" },
    { one: "{n} {n:ten lakh|ten lakhs}", name: "Ten lakhs", intlOne: "{n} {n:million|millions}", intl: "Millions" },
  ];
  const placeName = (i, sys) => (sys === "intl" && PLACES[i].intl) || PLACES[i].name;
  const placeCount = (i, sys) => (sys === "intl" && PLACES[i].intlOne) || PLACES[i].one;
  const STR = [];
  PLACES.forEach((p) => STR.push(p.name, p.one, ...(p.intl ? [p.intl, p.intlOne] : [])));

  const SYSNAME = { in: "Indian (thousand, lakh, crore)", intl: "International (thousand, million)" };
  STR.push(...Object.values(SYSNAME));

  const ASSUME = "Whole numbers only, with seven places at most (up to the ten lakhs, or millions, place). Each place holds at most 19 blocks. The blocks stand for the idea of a place, not their real size: a ten block is not drawn ten times as big as a one block.";
  const COLS = [
    { key: "arr", label: "Blocks used", var: true },
    { key: "value", label: "Number" },
    { key: "blocks", label: "Number of blocks", d: 0 },
  ];
  const COLS_NUM = [
    { key: "arr", label: "Blocks used", var: true },
    { key: "num", label: "Number" },
    { key: "blocks", label: "Number of blocks", d: 0 },
  ];
  const COLS_SYS = [
    { key: "arr", label: "Blocks used" },
    { key: "system", label: "Grouping used", var: true },
    { key: "value", label: "Number" },
    { key: "words", label: "In words" },
  ];
  const INVS = [
    {
      id: "245",
      title: "Make 245 two different ways",
      question: "Can 245 be made with hundreds, tens and ones blocks in more than one way?",
      predict: { opts: ["No, there is only one way to make 245", "Yes, for example by trading a ten for ten ones", "Yes, but only by using more hundreds"], ans: 1 },
      vary: "arr",
      held: ["The number (245)"],
      go: "Build 245 with 2 hundreds, 4 tens and 5 ones and record a run. Then regroup, for example break 1 ten into 10 ones, so the blocks are different but the number is still 245, and record again.",
      target: 245,
      columns: COLS,
      explain: {
        q: "What do your two runs show?",
        opts: ["The same number can be made with different blocks, because 10 ones make 1 ten and 10 tens make 1 hundred", "A different arrangement of blocks always makes a different number", "Only the arrangement with the fewest blocks is the real number"],
        ans: 0,
        why: "Ten ones are worth the same as one ten, and ten tens the same as one hundred, so trading blocks changes how the number is made, not what it is. The way with the fewest blocks (2 hundreds, 4 tens, 5 ones) is the one we write as digits.",
      },
      graph: { x: "run", y: "blocks" },
    },
    {
      id: "regroup",
      title: "Regroup 10 ones into 1 ten",
      question: "You have 2 tens and 13 ones. What happens to the number when you regroup 10 of the ones into 1 ten?",
      predict: { opts: ["The number gets bigger", "The number stays 33", "The number gets smaller"], ans: 1 },
      vary: "arr",
      held: ["The number (33)"],
      go: "The chart starts with 2 tens and 13 ones. Record a run. Then tap the 10 to 1 button under the ones to regroup, and record again.",
      target: 33,
      columns: COLS,
      explain: {
        q: "Why does the number stay the same?",
        opts: ["10 ones are worth exactly 1 ten, so only the blocks change, not the amount", "Regrouping adds a block, so the number grows", "Regrouping takes blocks away, so the number shrinks"],
        ans: 0,
        why: "Regrouping trades 10 ones for 1 ten, which is the same amount. After regrouping you have 3 tens and 3 ones, which is 33, and 13 ones with 2 tens was 33 as well.",
      },
      graph: { x: "run", y: "blocks" },
    },
    {
      id: "digit",
      title: "The same digit in different places",
      question: "The digit 3 is in the ones place, then the tens place, then the hundreds place. How does its value change?",
      predict: { opts: ["It stays 3 each time", "It becomes 10 times as much each place to the left", "It goes up by 3 each place to the left"], ans: 1 },
      vary: "arr",
      held: ["The digit (3)", "The number of blocks (3)"],
      go: "Put 3 blocks in the ones place and record a run. Clear the chart, put 3 blocks in the tens place and record. Then do the same in the hundreds place.",
      columns: COLS_NUM,
      explain: {
        q: "What do your runs show about the value of a digit?",
        opts: ["A place is worth 10 times the place on its right, so the same digit stands for a bigger amount further left", "The value of a digit does not depend on its place", "Each place to the left adds 3 more"],
        ans: 0,
        why: "3 ones is 3, 3 tens is 30 and 3 hundreds is 300. Each place is worth ten times the place to its right, which is why the place of a digit matters as much as the digit.",
      },
      graph: { x: "run", y: "num" },
    },
    {
      id: "lakh",
      title: "One lakh in the two systems",
      minCols: 7,
      question: "One lakh is written 1,00,000 in the Indian system. How is the same number written and named in the international system?",
      predict: { opts: ["10,000 (ten thousand)", "100,000 (one hundred thousand)", "1,000,000 (one million)"], ans: 1 },
      vary: "system",
      held: ["The blocks (1 block in the lakhs place)"],
      go: "The chart starts with 1 block in the lakhs place. Record a run with the Indian grouping. Then change the grouping to International and record again.",
      target: 100000,
      columns: COLS_SYS,
      explain: {
        q: "What do your two runs show?",
        opts: ["It is the same number, 100000. Only the commas and the names change: one lakh is one hundred thousand", "The two systems are two different numbers", "International numbers are ten times bigger than Indian numbers"],
        ans: 0,
        why: "The number does not change, only how we group the digits and name the groups. Indian grouping puts commas after the first three digits and then every two (1,00,000, one lakh); international grouping uses threes (100,000, one hundred thousand). Ten lakh is one million.",
      },
    },
  ];

  Labs.calc.placevalue = { wordsIndian, wordsIntl, words, group, expanded, value, digitsOf, regroup, brk, PLACES, INVS, COLS, COLS_NUM, COLS_SYS, ASSUME, STR, placeName };

  const hues = ["var(--blue)", "var(--green)", "var(--gold)", "var(--purple)", "var(--coral)", "var(--accent)", "var(--good)"];
  const CAP = 19;

  function blockSvg(i) {
    if (i === 0) return `<svg class="pv-blk" viewBox="0 0 10 10" width="10" height="10" aria-hidden="true"><rect x=".5" y=".5" width="9" height="9" rx="1.5"/></svg>`;
    if (i === 1) return `<svg class="pv-blk" viewBox="0 0 40 8" width="40" height="8" aria-hidden="true"><rect x=".5" y=".5" width="39" height="7" rx="1.5"/><path d="${Array.from({ length: 9 }, (_, k) => `M${(k + 1) * 4} .5v7`).join("")}"/></svg>`;
    if (i === 2) return `<svg class="pv-blk" viewBox="0 0 36 36" width="36" height="36" aria-hidden="true"><rect x=".5" y=".5" width="35" height="35" rx="2"/><path d="${Array.from({ length: 9 }, (_, k) => `M${(k + 1) * 3.6} .5v35M.5 ${(k + 1) * 3.6}h35`).join("")}"/></svg>`;
    return `<svg class="pv-blk pv-big" viewBox="0 0 40 18" width="40" height="18" aria-hidden="true"><rect x=".5" y=".5" width="39" height="17" rx="3"/><path d="M6 6h28M6 12h28"/></svg>`;
  }

  function mount(el, api) {
    const cls = api.cls || 6;
    const N = cls <= 3 ? 3 : cls === 4 ? 4 : 7;
    const MAXV = 10 ** N - 1;
    const intl = typeof International !== "undefined" && International.on && International.on();
    const S = { cnt: Array(7).fill(0), sys: intl ? "intl" : "in" };
    let flow;
    const invs = INVS.filter((v) => (v.minCols || 0) <= N);

    const arrText = () => {
      const parts = [];
      for (let i = N - 1; i >= 0; i--) if (S.cnt[i]) parts.push(t(placeCount(i, S.sys), { n: S.cnt[i] }));
      return parts.length ? parts.join(", ") : t("no blocks");
    };
    const total = () => S.cnt.reduce((a, b) => a + b, 0);
    const val = () => value(S.cnt);

    const stage = () => `<div class="pv">
      <div class="vl-ctrl" ${N > 4 ? "" : "hidden"}><label for="pv-sys">${t("Grouping of digits and names")}</label>
        <select id="pv-sys" data-sys><option value="in">${esc(t(SYSNAME.in))}</option><option value="intl">${esc(t(SYSNAME.intl))}</option></select></div>
      <p class="small muted">${t("Tap a block at the top of a column to add one, or drag it into its own column. The buttons under a column regroup.")}</p>
      <div class="pv-chart" data-chart role="group" aria-label="${esc(t("Place-value chart"))}"></div>
      <p class="vl-warn" data-msg role="status"></p>
      <div class="vl-ctrl"><label for="pv-make">${t("Show a number")}</label>
        <input id="pv-make" class="pv-in" type="number" inputmode="numeric" min="0" max="${MAXV}" step="1" data-make>
        <button type="button" class="btn" data-makego>${t("Show it")}</button></div>
      <div class="sim-btns"><button type="button" class="btn" data-clear-chart>${icon("reset")} ${t("Clear the chart")}</button>
        <button type="button" class="btn primary" data-vl-run data-record>${icon("check")} ${t("Record this run")}</button></div></div>`;

    function say(msg, bad) {
      const m = el.querySelector("[data-msg]");
      if (!m) return;
      m.textContent = msg || "";
      m.classList.toggle("is-bad", !!bad);
    }

    function paint(focus) {
      const sys = S.sys;
      let h = "";
      for (let i = N - 1; i >= 0; i--) {
        const c = S.cnt[i];
        const nm = t(placeName(i, sys));
        const v = group(10 ** i, sys);
        const upOk = i < N - 1 && regroup(S.cnt, i, CAP, N);
        const dnOk = i > 0 && brk(S.cnt, i, CAP);
        const nxt = i < N - 1 ? t(placeName(i + 1, sys)) : "";
        const lower = i > 0 ? t(placeName(i - 1, sys)) : "";
        h += `<div class="pv-col" data-col="${i}" style="--pc:${hues[i]}">
          <div class="pv-h"><b>${v}</b><span>${esc(nm)}</span></div>
          <button type="button" class="pv-tray" data-tray="${i}" aria-label="${esc(t("Add one block worth {v} to {p}. You can also drag it.", { v, p: nm }))}">${blockSvg(i)}<span aria-hidden="true">+</span></button>
          <div class="pv-blocks" aria-hidden="true">${blockSvg(i).repeat(c)}</div>
          <output class="pv-n" data-n="${i}" aria-label="${esc(t("{p}: {n} blocks", { p: nm, n: c }))}">${c}</output>
          <button type="button" class="btn at-btn pv-b" data-minus="${i}" aria-label="${esc(t("Take away one block from {p}", { p: nm }))}" ${c ? "" : "disabled"}>−</button>
          ${i < N - 1 ? `<button type="button" class="btn pv-reg" data-regroup="${i}" ${upOk ? "" : "disabled"} aria-label="${esc(t("Regroup 10 {a} into 1 block in {b}", { a: nm, b: nxt }))}">10→1</button>` : `<span class="pv-reg-gap"></span>`}
          ${i > 0 ? `<button type="button" class="btn pv-reg" data-break="${i}" ${dnOk ? "" : "disabled"} aria-label="${esc(t("Break 1 block of {a} into 10 blocks in {b}", { a: nm, b: lower }))}">1→10</button>` : `<span class="pv-reg-gap"></span>`}
        </div>`;
      }
      const chart = el.querySelector("[data-chart]");
      chart.style.setProperty("--cols", N);
      chart.innerHTML = h;
      if (focus) {
        const f = el.querySelector(focus);
        if (f && !f.disabled) f.focus({ preventScroll: true });
      }
      const n = val();
      const w = words(n, sys);
      el.querySelector("[data-sys]").value = sys;
      flow.live(
        [
          [t("Number"), group(n, sys)],
          [t("In words (English)"), w],
          [t("Expanded form"), expanded(n, sys)],
          [t("Blocks used"), arrText()],
          [t("Number of blocks"), String(total())],
        ],
        `${group(n, sys)}, ${w}. ${arrText()}.`
      );
    }

    function set(cnt, focus, msg) {
      S.cnt = cnt;
      say(msg || "");
      paint(focus);
    }
    function add(i) {
      if (S.cnt[i] >= CAP) {
        say(t("A place holds at most 19 blocks here. Regroup 10 of them into the next place first."), true);
        return;
      }
      const c = S.cnt.slice();
      c[i]++;
      set(c, `[data-tray="${i}"]`);
    }

    const prep = {
      "245": () => Array(7).fill(0),
      regroup: () => [13, 2, 0, 0, 0, 0, 0],
      digit: () => Array(7).fill(0),
      lakh: () => [0, 0, 0, 0, 0, 1, 0],
    };

    flow = Labs.flow(el, api, {
      assumptions: ASSUME,
      columns: COLS,
      investigations: invs,
      extra: () => ({ number: val(), system: S.sys, blocks: S.cnt.slice(0, N) }),
      mountStage(slot, F) {
        flow = F;
        slot.innerHTML = stage();
        slot.addEventListener("click", (e) => {
          const tr = e.target.closest("[data-tray]");
          if (tr) return tr.dataset.dragged ? null : add(Number(tr.dataset.tray));
          const mi = e.target.closest("[data-minus]");
          if (mi) {
            const i = Number(mi.dataset.minus);
            const c = S.cnt.slice();
            if (c[i]) c[i]--;
            return set(c, `[data-minus="${i}"]`);
          }
          const rg = e.target.closest("[data-regroup]");
          if (rg) {
            const i = Number(rg.dataset.regroup);
            const c = regroup(S.cnt, i, CAP, N);
            return c ? set(c, `[data-regroup="${i}"]`, t("10 blocks of {a} are now 1 block of {b}. The number has not changed.", { a: t(placeName(i, S.sys)), b: t(placeName(i + 1, S.sys)) })) : null;
          }
          const bk = e.target.closest("[data-break]");
          if (bk) {
            const i = Number(bk.dataset.break);
            const c = brk(S.cnt, i, CAP);
            return c ? set(c, `[data-break="${i}"]`, t("1 block of {a} is now 10 blocks of {b}. The number has not changed.", { a: t(placeName(i, S.sys)), b: t(placeName(i - 1, S.sys)) })) : null;
          }
          if (e.target.closest("[data-clear-chart]")) return set(Array(7).fill(0), "[data-clear-chart]");
          if (e.target.closest("[data-makego]")) {
            const inp = el.querySelector("[data-make]");
            const n = Number(inp.value);
            if (inp.value === "" || !Number.isInteger(n) || n < 0 || n > MAXV) return say(t("Choose a whole number from 0 to {max}.", { max: group(MAXV, S.sys) }), true);
            return set(digitsOf(n, 7), null, t("Shown with the fewest blocks."));
          }
          if (e.target.closest("[data-record]")) {
            const inv = F.inv;
            if (inv.target != null && val() !== inv.target) return say(t("Make the number {n} first, then record.", { n: group(inv.target, S.sys) }), true);
            const n = val();
            say("");
            F.addRun({ arr: arrText(), value: group(n, S.sys), num: n, blocks: total(), system: t(SYSNAME[S.sys]), words: words(n, S.sys) });
          }
        });
        slot.addEventListener("change", (e) => {
          if (e.target.matches("[data-sys]")) {
            S.sys = e.target.value;
            paint();
          }
        });
        Games.draggable(slot, "[data-tray]", {
          onDrop(chip, els) {
            const col = els.find((x) => x.matches && x.matches("[data-col]"));
            if (!col) return;
            const want = Number(chip.dataset.tray);
            if (Number(col.dataset.col) === want) add(want);
            else say(t("That block is worth {v}. It belongs in the {p} column.", { v: group(10 ** want, S.sys), p: t(placeName(want, S.sys)) }), true);
          },
          onTap() {},
          over(els) {
            slot.querySelectorAll("[data-col]").forEach((b) => b.classList.toggle("vl-over", els.includes(b)));
          },
        });
      },
      onInvestigation(inv) {
        S.cnt = prep[inv.id]();
        if (inv.id === "lakh") S.sys = "in";
        say("");
        paint();
      },
    });
  }

  Labs.register("placevalue", {
    title: "Place-value blocks",
    area: "maths",
    icon: "numline",
    objective: "Build numbers with ones, tens, hundreds and bigger blocks. Regroup 10 of one place into 1 of the next, and read the same number in digits, in words and in expanded form, with Indian (lakh, crore) or international (thousand, million) grouping.",
    chapters: [
      { cls: 1, subject: "maths", chapter: "numbers-10-to-20" },
      { cls: 1, subject: "maths", chapter: "numbers-up-to-50" },
      { cls: 2, subject: "maths", chapter: "numbers-up-to-100" },
      { cls: 2, subject: "maths", chapter: "place-value-tens-and-ones" },
      { cls: 2, subject: "maths", chapter: "addition-with-carrying" },
      { cls: 2, subject: "maths", chapter: "subtraction-with-borrowing" },
      { cls: 3, subject: "maths", chapter: "numbers-up-to-999" },
      { cls: 4, subject: "maths", chapter: "numbers-up-to-9999" },
      { cls: 5, subject: "maths", chapter: "large-numbers" },
      { cls: 6, subject: "mathspb", chapter: "knowing-our-numbers" },
      { cls: 6, subject: "maths", chapter: "number-play" },
    ],
    mount,
  });
})();
