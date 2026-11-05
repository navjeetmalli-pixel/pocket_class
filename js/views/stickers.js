// My stickers (#/stickers): the sticker book for Classes 1-5. Earned stickers in colour with the day they were earned,
// the rest as soft outlines with a "?". Tapping an earned sticker says its name (only on a press). Nothing is ever taken away
// and there is no comparison with anyone. Rules and the daily cap: js/stickers.js.

(() => {
  const { topbar } = Views._;

  function slot(def, rec) {
    if (rec) {
      const nm = Stickers.name(def);
      const when = dateShort(new Date(rec.at));
      return `<li><button type="button" class="stk-slot got" data-stk-say="${esc(nm)}" aria-label="${esc(t("{name}, earned on {date}. Tap to hear it.", { name: nm, date: when }))}">
        ${Stickers.art(def, 84)}<span class="stk-cap">${esc(nm)}</span><span class="stk-date">${esc(when)}</span></button></li>`;
    }
    return `<li><div class="stk-slot empty" role="img" aria-label="${esc(t("Sticker {n}, not earned yet", { n: def.n }))}"><span class="stk-ghost" aria-hidden="true">?</span><span class="stk-cap stk-num" aria-hidden="true">${def.n}</span></div></li>`;
  }

  // The card at the top of the young Progress tab.
  function card() {
    const list = Store.stickers();
    const last = list.slice(-3).reverse().map((r) => Stickers.byId[r.id]).filter(Boolean);
    return `<a class="card stickers-card main-action" href="#/stickers">
      <span class="sc-pile" aria-hidden="true">${last.length ? last.map((d) => Stickers.art(d, 50)).join("") : `<span class="stk-ghost sc-q">?</span>`}</span>
      <span class="grow"><span class="k">${t("My stickers ({n})", { n: list.length })}</span><span class="s">${list.length ? t("{n} of {total} in your book", { n: list.length, total: Stickers.SEQ.length }) : t("Finish a lesson, a quiz or a game to get your first sticker.")}</span></span>
      <span class="go">${icon("arrow")}</span></a>`;
  }

  function stickers() {
    if (!Stickers.on()) return { redirect: "#/progress" };
    const list = Store.stickers();
    const byId = Object.fromEntries(list.map((r) => [r.id, r]));
    const n = list.length;
    const say = n ? t("You have {n} {n:sticker|stickers}!", { n }) : t("Your sticker book is waiting!");
    const sub = n >= Stickers.SEQ.length ? t("Your book is full. Well done!") : t("Finish a lesson, a quiz or a game to get a new sticker. You can get up to {n} a day.", { n: Stickers.DAILY_CAP });
    return {
      title: t("My stickers"),
      html: `
        ${topbar(t("My stickers"), "#/progress")}
        <div class="stk-head">${Mascot.html(n ? "cheer" : "wave", { size: 92, say: `<p>${say}</p>` })}</div>
        <p class="stk-sub" data-read>${sub}</p>
        <p class="stk-count small muted">${t("{n} of {total} stickers", { n, total: Stickers.SEQ.length })}</p>
        <ul class="stk-grid" aria-label="${esc(t("My stickers"))}">${Stickers.SEQ.map((d) => slot(d, byId[d.id])).join("")}</ul>`,
      mount(el) {
        el.onclick = (e) => {
          const b = e.target.closest("[data-stk-say]");
          if (!b) return;
          if (typeof Sound !== "undefined") Sound.play("pop");
          Speech.say(b.dataset.stkSay);
          b.classList.remove("wiggle");
          void b.offsetWidth;
          b.classList.add("wiggle");
        };
      },
    };
  }

  Views._.stickersCard = card;
  Object.assign(Views, { stickers });
})();
