// Class 12 Accountancy: current rationalised NCERT textbook (Partnership Accounts, Company Accounts,
// Analysis of Financial Statements). Format: see CONTENT_GUIDE.md
StudyData.add(12, "accountancy", {
  chapters: [
    // ───────────────────────────── 1. Partnership Fundamentals ─────────────────────────────
    {
      id: "partnership-fundamentals",
      title: "Accounting for Partnership Firms – Fundamentals",
      section: "Partnership Accounts",
      summary: "Nature of partnership, the partnership deed and the rules that apply when there is no deed, fixed and fluctuating capital accounts, the profit and loss appropriation account, interest on capital and drawings, guarantee of profit and past adjustments.",
      notes: [
        {
          heading: "Nature of partnership",
          points: [
            "Section 4 of the **Indian Partnership Act, 1932**: partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all.",
            "Features: **two or more persons**, an **agreement** (oral or written), a **lawful business**, **sharing of profits**, **mutual agency** and **unlimited liability**.",
            "The maximum number of partners is **50** (Companies Act, 2013 read with the Companies (Miscellaneous) Rules, 2014).",
            "**Mutual agency**: every partner is both an agent and a principal; he binds the other partners by his acts and is bound by theirs."
          ]
        },
        {
          heading: "Partnership deed and rules when the deed is silent",
          points: [
            "The **partnership deed** is a written agreement covering names, capitals, profit sharing ratio, interest on capital and drawings, salaries, and rules for admission, retirement and dissolution.",
            "If there is no deed, or the deed is silent: profits and losses are shared **equally**.",
            "**No interest on capital** and **no interest on drawings**.",
            "**No salary or commission** to any partner for taking part in the business.",
            "**Interest on a partner's loan** to the firm at **6% p.a.**; it is a charge against profit and is allowed even if there is a loss."
          ]
        },
        {
          heading: "Partners' capital accounts",
          points: [
            "**Fixed capital method**: two accounts per partner – a **capital account** (changes only for additional capital introduced or capital permanently withdrawn) and a **current account** for interest, salary, share of profit, drawings, etc.",
            "Under the fixed method, the capital account always has a credit balance; the current account may have a debit or a credit balance.",
            "**Fluctuating capital method**: only one capital account, in which all items are recorded, so the balance changes every year.",
            "If nothing is stated, capitals are taken to be fluctuating."
          ]
        },
        {
          heading: "Profit and loss appropriation account",
          points: [
            "It shows how the net profit is distributed among partners; it is an extension of the profit and loss account.",
            "**Debit side**: interest on capital, partners' salaries and commission, transfer to reserve, and share of profit.",
            "**Credit side**: net profit (from the profit and loss account) and interest on drawings.",
            "**Charges** such as interest on a partner's loan, rent paid to a partner and manager's commission go to the **profit and loss account**, not the appropriation account.",
            "Interest on capital (as an appropriation) is allowed only out of profits: if profit is less than the interest due, profit is divided in the **ratio of interest on capital**; nothing is allowed in case of loss."
          ]
        },
        {
          heading: "Interest on drawings",
          points: [
            "Charged only if the deed provides for it, from the date of each withdrawal to the end of the accounting year.",
            "**Product method**: multiply each drawing by the months it was outstanding, add the products, and charge interest for one month on the total.",
            "**Average period** for equal monthly drawings: at the beginning of each month – **6.5 months**; middle – **6 months**; end – **5.5 months**.",
            "For equal quarterly drawings: beginning of each quarter – **7.5 months**; middle – **6 months**; end – **4.5 months**.",
            "If the dates of drawings are not given, interest is charged for **6 months** on the total drawings."
          ]
        },
        {
          heading: "Guarantee of profit and past adjustments",
          points: [
            "A partner may be **guaranteed a minimum share of profit**; any deficiency is borne by the guaranteeing partner(s) in the agreed ratio, or in their profit sharing ratio if no ratio is agreed.",
            "The guarantee may be given by the firm (all other partners) or by one particular partner.",
            "**Past adjustments**: errors found after accounts are closed (e.g. interest on capital omitted) are corrected by a single **adjustment entry** through partners' capital or current accounts, without reopening the old accounts.",
            "Prepare a table of what each partner should have got and what he actually got; the partner who got more is debited and the partner who got less is credited."
          ]
        }
      ],
      formulas: [
        "Interest on capital = Capital × Rate ÷ 100 × Period (for additional capital, from the date introduced)",
        "Opening capital = Closing capital + Drawings − Profit and other amounts credited − Additional capital introduced",
        "Interest on drawings = Total drawings × Rate ÷ 100 × Average period (months) ÷ 12",
        "Product method: Interest = Sum of products × Rate ÷ 100 × 1 ÷ 12",
        "Monthly drawings: beginning → 6.5 months; middle → 6 months; end → 5.5 months",
        "Quarterly drawings: beginning → 7.5 months; middle → 6 months; end → 4.5 months",
        "Interest on capital: Interest on Capital A/c Dr. → To Partners' Capital (or Current) A/cs",
        "Interest on drawings: Partners' Capital (or Current) A/cs Dr. → To Interest on Drawings A/c",
        "Share of profit: Profit and Loss Appropriation A/c Dr. → To Partners' Capital (or Current) A/cs",
        "Interest on partner's loan (deed silent): 6% p.a. — Profit and Loss A/c (a charge)"
      ],
      terms: [
        { term: "Partnership deed", meaning: "The written agreement among partners setting out the terms of the partnership, such as capital, profit sharing ratio, interest and salaries." },
        { term: "Mutual agency", meaning: "Each partner is an agent of the firm and of the other partners, so the acts of one partner bind all." },
        { term: "Fixed capital method", meaning: "Capital accounts stay unchanged; interest, salary, profit and drawings are recorded in separate **current accounts**." },
        { term: "Fluctuating capital method", meaning: "Only one capital account per partner, in which all adjustments are recorded, so the balance keeps changing." },
        { term: "Profit and loss appropriation account", meaning: "An account showing how net profit is distributed among partners through interest, salary, commission, reserves and share of profit." },
        { term: "Guarantee of profit", meaning: "An agreement that a partner will get at least a fixed amount of profit; the shortfall is borne by the guaranteeing partner(s)." }
      ],
      examples: [
        {
          q: "A and B are partners sharing profits 3:2 with capitals of ₹4,00,000 and ₹2,00,000. The deed allows interest on capital at 10% p.a. and a salary of ₹3,000 per month to B. Net profit for the year is ₹1,50,000. Show the distribution of profit.",
          steps: [
            "Interest on capital: A = 10% of 4,00,000 = ₹40,000; B = 10% of 2,00,000 = ₹20,000; total ₹60,000.",
            "B's salary = 3,000 × 12 = ₹36,000.",
            "Total appropriations before sharing = 60,000 + 36,000 = ₹96,000.",
            "Divisible profit = 1,50,000 − 96,000 = ₹54,000; A = 54,000 × 3/5 = ₹32,400; B = 54,000 × 2/5 = ₹21,600.",
            "Total to A = 40,000 + 32,400 = ₹72,400; to B = 20,000 + 36,000 + 21,600 = ₹77,600. Check: 72,400 + 77,600 = ₹1,50,000. ✓"
          ],
          answer: "A gets ₹72,400 and B gets ₹77,600 in all"
        },
        {
          q: "C withdrew ₹5,000 at the beginning of every month during the year ended 31 March 2025. Interest on drawings is charged at 6% p.a. Calculate the interest on drawings. What would it be if he withdrew at the end of every month?",
          steps: [
            "Total drawings = 5,000 × 12 = ₹60,000.",
            "Beginning of each month: average period = (12 + 1) ÷ 2 = 6.5 months.",
            "Interest = 60,000 × 6/100 × 6.5/12 = ₹1,950.",
            "End of each month: average period = (11 + 0) ÷ 2 = 5.5 months; interest = 60,000 × 6/100 × 5.5/12 = ₹1,650."
          ],
          answer: "₹1,950 (beginning of each month); ₹1,650 (end of each month)"
        }
      ],
      qa: [
        { q: "State the provisions of the Indian Partnership Act, 1932 that apply when the partnership deed is silent on (a) profit sharing (b) interest on capital (c) interest on a partner's loan (d) salary to partners.", a: "(a) Profits and losses are shared **equally**. (b) **No interest** is allowed on capital (and none is charged on drawings). (c) Interest on a partner's loan is allowed at **6% p.a.**, as a charge against profit. (d) **No salary** or commission is allowed to any partner." },
        { q: "Distinguish between fixed and fluctuating capital accounts.", a: "(1) **Number of accounts**: fixed method – two accounts (capital and current) per partner; fluctuating method – only the capital account. (2) **Balance**: fixed capital stays the same unless capital is added or withdrawn; fluctuating capital changes every year. (3) **Adjustments**: under the fixed method, interest, salary, profit and drawings go to the current account; under the fluctuating method, to the capital account. (4) **Debit balance**: a fixed capital account always has a credit balance; a fluctuating capital account may show a debit balance." },
        { q: "X and Y have capitals of ₹2,40,000 and ₹1,60,000. The deed allows 10% interest on capital, treated as an appropriation. Net profit for the year is ₹30,000. Show the distribution.", a: "Interest due: X = ₹24,000, Y = ₹16,000, total ₹40,000, which is more than the profit of ₹30,000. So the profit is divided in the ratio of interest, 24,000:16,000 = 3:2. X gets 30,000 × 3/5 = **₹18,000** and Y gets 30,000 × 2/5 = **₹12,000** as interest on capital; nothing is left to share as profit." }
      ],
      quiz: [
        {
          q: "In the absence of a partnership deed, interest on a partner's loan is allowed at:",
          options: ["6% p.a.", "10% p.a.", "12% p.a.", "Nil"],
          answer: 0,
          explain: "Section 13 of the Partnership Act allows **6% p.a.** on a partner's loan, even when the deed is silent."
        },
        {
          q: "The maximum number of partners in a partnership firm, as per the Companies (Miscellaneous) Rules, 2014, is:",
          options: ["20", "10", "50", "100"],
          answer: 2,
          explain: "The limit is **50** partners."
        },
        {
          q: "P withdrew ₹2,000 at the end of every month. With interest on drawings at 6% p.a., interest for the year is:",
          options: ["₹720", "₹660", "₹780", "₹1,440"],
          answer: 1,
          explain: "Total ₹24,000 for an average of 5.5 months: 24,000 × 6% × 5.5/12 = **₹660**. ₹720 uses 6 months and ₹780 uses 6.5 months."
        },
        {
          q: "Interest on a partner's loan is debited to:",
          options: ["Profit and Loss Appropriation A/c", "Partner's Capital A/c", "Profit and Loss A/c", "Partner's Current A/c"],
          answer: 2,
          explain: "It is a **charge** against profit, not an appropriation, so it goes to the **Profit and Loss A/c**."
        },
        {
          q: "Under the fixed capital method, interest on capital is credited to the partner's:",
          options: ["Capital A/c", "Current A/c", "Loan A/c", "Drawings A/c"],
          answer: 1,
          explain: "Under the fixed method the capital account stays unchanged; such items go to the **current account**."
        },
        {
          q: "When the deed is silent, the profits of a firm are shared:",
          options: ["In the ratio of capitals", "In the ratio of time devoted", "As decided by the senior-most partner", "Equally"],
          answer: 3,
          explain: "Section 13 of the Act provides that partners share profits **equally** in the absence of an agreement."
        }
      ]
    },

    // ───────────────────────────── 2. Goodwill ─────────────────────────────
    {
      id: "goodwill-nature-and-valuation",
      title: "Goodwill: Nature and Valuation",
      section: "Partnership Accounts",
      summary: "Meaning and nature of goodwill, factors affecting its value, the need to value it in a partnership, and the average profit, super profit and capitalisation methods of valuation.",
      notes: [
        {
          heading: "Meaning and nature of goodwill",
          points: [
            "**Goodwill** is the value of the reputation of a firm in respect of the profits expected in future **over and above normal profits**.",
            "It is an **intangible asset** (it has value but cannot be seen or touched); it is not a fictitious asset.",
            "It cannot be separated from the business; it can be sold only with the business as a whole.",
            "As per **AS 26**, only **purchased goodwill** (for which consideration is paid) is recorded; **self-generated goodwill** is not recorded in the books."
          ]
        },
        {
          heading: "Factors affecting the value of goodwill",
          points: [
            "**Nature of business**: a stable business with steady demand earns more goodwill.",
            "**Location**: a central or easily reached place attracts more customers.",
            "**Efficiency of management**: higher productivity and lower costs mean higher profits.",
            "**Market situation**: a monopoly or limited competition allows higher profits.",
            "**Special advantages**: import licences, patents, trademarks, cheap power, long-term contracts and good customer relations."
          ]
        },
        {
          heading: "Need for valuation of goodwill",
          points: [
            "In a partnership, goodwill is valued on a **change in profit sharing ratio**, **admission**, **retirement** or **death** of a partner.",
            "It is also valued on **dissolution** when the business is sold, and on **amalgamation** with another firm.",
            "Partners who gain a share of future profits compensate those who sacrifice, for their share of goodwill."
          ]
        },
        {
          heading: "Average profit method",
          points: [
            "Goodwill = **Average profit × Number of years' purchase**.",
            "First adjust past profits for **abnormal items**: add back abnormal losses (e.g. loss by fire) and deduct abnormal gains (e.g. profit on sale of a fixed asset).",
            "Also adjust for expected future changes, e.g. deduct a partner's salary or an expense not charged so far.",
            "**Weighted average** profit is used when profits show a trend: recent years get higher weights (1, 2, 3 …). Weighted average = Σ(Profit × Weight) ÷ Σ Weights."
          ]
        },
        {
          heading: "Super profit method",
          points: [
            "**Normal profit** = Capital employed × Normal rate of return ÷ 100.",
            "**Super profit** = Average profit − Normal profit.",
            "Goodwill = **Super profit × Number of years' purchase**.",
            "If average profit is not more than normal profit, there is no goodwill."
          ]
        },
        {
          heading: "Capitalisation method",
          points: [
            "**Capitalisation of average profit**: capitalised value of the business = Average profit × 100 ÷ Normal rate of return; Goodwill = Capitalised value − Actual capital employed.",
            "**Capital employed (net assets)** = Total assets (excluding goodwill and fictitious assets) − Outside liabilities.",
            "**Capitalisation of super profit**: Goodwill = Super profit × 100 ÷ Normal rate of return.",
            "Both capitalisation methods give the same goodwill when applied to the same figures."
          ]
        }
      ],
      formulas: [
        "Average profit = Total of normal (adjusted) profits ÷ Number of years",
        "Goodwill (average profit method) = Average profit × Number of years' purchase",
        "Weighted average profit = Σ(Profit × Weight) ÷ Σ Weights",
        "Normal profit = Capital employed × Normal rate of return ÷ 100",
        "Super profit = Average profit − Normal profit",
        "Goodwill (super profit method) = Super profit × Number of years' purchase",
        "Capitalised value of average profit = Average profit × 100 ÷ Normal rate of return",
        "Goodwill (capitalisation of average profit) = Capitalised value − Capital employed",
        "Capital employed (net assets) = Total assets (excluding goodwill) − Outside liabilities",
        "Goodwill (capitalisation of super profit) = Super profit × 100 ÷ Normal rate of return"
      ],
      terms: [
        { term: "Goodwill", meaning: "The value of a firm's reputation that enables it to earn profits **above the normal profits** of similar businesses." },
        { term: "Purchased goodwill", meaning: "Goodwill acquired by paying a price for it, e.g. when buying a business; only this is recorded as per AS 26." },
        { term: "Normal profit", meaning: "The profit that similar firms normally earn on the same capital employed: Capital employed × Normal rate of return ÷ 100." },
        { term: "Super profit", meaning: "The excess of a firm's average profit over its normal profit." },
        { term: "Normal rate of return", meaning: "The rate of profit that investors normally expect from similar businesses in the same industry." },
        { term: "Years' purchase", meaning: "The number of years for which the firm is expected to keep earning the profit (or super profit) being valued." }
      ],
      examples: [
        {
          q: "Calculate goodwill at 3 years' purchase of the average profit of the last four years: 2021-22 ₹60,000; 2022-23 ₹75,000 (after an abnormal loss by fire of ₹15,000); 2023-24 ₹90,000; 2024-25 ₹1,05,000 (including an abnormal gain of ₹10,000).",
          steps: [
            "2021-22: ₹60,000 (no adjustment).",
            "2022-23: add back the abnormal loss: 75,000 + 15,000 = ₹90,000.",
            "2023-24: ₹90,000 (no adjustment).",
            "2024-25: remove the abnormal gain: 1,05,000 − 10,000 = ₹95,000.",
            "Average profit = (60,000 + 90,000 + 90,000 + 95,000) ÷ 4 = 3,35,000 ÷ 4 = ₹83,750.",
            "Goodwill = 83,750 × 3 = ₹2,51,250."
          ],
          answer: "Goodwill = ₹2,51,250"
        },
        {
          q: "A firm's capital employed is ₹5,00,000, the normal rate of return is 12% and its average profit is ₹84,000. Find goodwill by (a) 3 years' purchase of super profit, (b) capitalisation of super profit, (c) capitalisation of average profit.",
          steps: [
            "Normal profit = 5,00,000 × 12/100 = ₹60,000.",
            "Super profit = 84,000 − 60,000 = ₹24,000.",
            "(a) Goodwill = 24,000 × 3 = ₹72,000.",
            "(b) Goodwill = 24,000 × 100/12 = ₹2,00,000.",
            "(c) Capitalised value = 84,000 × 100/12 = ₹7,00,000; goodwill = 7,00,000 − 5,00,000 = ₹2,00,000 (same as (b))."
          ],
          answer: "(a) ₹72,000  (b) ₹2,00,000  (c) ₹2,00,000"
        }
      ],
      qa: [
        { q: "Explain any four factors affecting the value of goodwill.", a: "(1) **Nature of business**: firms with stable demand and steady profits have more goodwill. (2) **Location**: a business in a central, easily accessible place attracts more customers. (3) **Efficiency of management**: good management raises productivity and cuts costs, giving higher profits. (4) **Market situation**: monopoly or little competition lets a firm earn above-normal profits. (5) **Special advantages** such as patents, licences, trademarks or favourable contracts also raise goodwill." },
        { q: "Why is self-generated goodwill not recorded in the books? When can goodwill appear in the books?", a: "As per **AS 26 (Intangible Assets)**, internally generated goodwill is not recorded because its cost cannot be measured reliably and it is not an identifiable resource controlled by the firm. Goodwill is recorded only when it is **purchased**, i.e. when consideration in money or money's worth has been paid for it, for example when a business is bought." },
        { q: "Calculate goodwill at 2 years' purchase of the weighted average profit: 2022-23 ₹30,000 (weight 1); 2023-24 ₹45,000 (weight 2); 2024-25 ₹60,000 (weight 3).", a: "Weighted profits = 30,000 × 1 + 45,000 × 2 + 60,000 × 3 = 30,000 + 90,000 + 1,80,000 = ₹3,00,000. Sum of weights = 6. Weighted average profit = 3,00,000 ÷ 6 = ₹50,000. Goodwill = 50,000 × 2 = **₹1,00,000**." }
      ],
      quiz: [
        {
          q: "Goodwill is a/an:",
          options: ["Fictitious asset", "Current asset", "Intangible asset", "Liquid asset"],
          answer: 2,
          explain: "Goodwill has real value but no physical form: an **intangible asset**. It is not fictitious."
        },
        {
          q: "Average profit is ₹50,000 and normal profit ₹30,000. Goodwill at 4 years' purchase of super profit is:",
          options: ["₹2,00,000", "₹80,000", "₹1,20,000", "₹20,000"],
          answer: 1,
          explain: "Super profit = 50,000 − 30,000 = ₹20,000; goodwill = 20,000 × 4 = **₹80,000**."
        },
        {
          q: "Super profit is ₹18,000 and the normal rate of return 12%. Goodwill by capitalisation of super profit is:",
          options: ["₹1,50,000", "₹2,16,000", "₹2,160", "₹1,80,000"],
          answer: 0,
          explain: "18,000 × 100 ÷ 12 = **₹1,50,000**."
        },
        {
          q: "Which method of valuing goodwill gives more importance to the profits of recent years?",
          options: ["Simple average profit method", "Super profit method", "Capitalisation of average profit method", "Weighted average profit method"],
          answer: 3,
          explain: "The **weighted average** method gives higher weights to recent years, useful when profits show a rising or falling trend."
        },
        {
          q: "Average profit ₹60,000; normal rate of return 10%; net assets ₹5,00,000. Goodwill by capitalisation of average profit is:",
          options: ["₹6,00,000", "₹10,000", "₹1,00,000", "₹50,000"],
          answer: 2,
          explain: "Capitalised value = 60,000 × 100/10 = ₹6,00,000; goodwill = 6,00,000 − 5,00,000 = **₹1,00,000**."
        },
        {
          q: "While calculating average profit, an abnormal loss of ₹10,000 by fire already deducted in a year's profit should be:",
          options: ["Added back to that year's profit", "Deducted again from that year's profit", "Ignored", "Added to capital employed"],
          answer: 0,
          explain: "Abnormal losses will not recur, so they are **added back** to find the normal profit."
        }
      ]
    },

    // ───────────────────────────── 3. Change in Profit Sharing Ratio ─────────────────────────────
    {
      id: "change-in-profit-sharing-ratio",
      title: "Change in Profit Sharing Ratio among Existing Partners",
      section: "Partnership Accounts",
      summary: "What happens when existing partners change their profit sharing ratio: sacrificing and gaining ratios, treatment of goodwill, reserves and accumulated profits or losses, and revaluation of assets and liabilities.",
      notes: [
        {
          heading: "Reconstitution and change in ratio",
          points: [
            "Any change in the existing agreement among partners is a **reconstitution** of the firm: the old partnership ends and a new one begins, but the firm continues.",
            "When existing partners change their profit sharing ratio, some partners **gain** and others **sacrifice** a share of future profits.",
            "**Sacrificing ratio** = Old ratio − New ratio; **gaining ratio** = New ratio − Old ratio.",
            "A partner may neither gain nor sacrifice; the total sacrifice always equals the total gain."
          ]
        },
        {
          heading: "Treatment of goodwill",
          points: [
            "The gaining partner compensates the sacrificing partner for the share of goodwill given up.",
            "Entry: **Gaining Partner's Capital A/c Dr. → To Sacrificing Partner's Capital A/c** (firm's goodwill × share gained or sacrificed).",
            "As per AS 26, goodwill is not raised in the books for this purpose.",
            "Goodwill already in the books is first **written off among all partners in the old ratio**: Partners' Capital A/cs Dr. → To Goodwill A/c."
          ]
        },
        {
          heading: "Reserves and accumulated profits or losses",
          points: [
            "Reserves and undistributed profits were earned under the old ratio, so they are distributed in the **old ratio**: General Reserve A/c Dr., Profit and Loss A/c Dr. → To Partners' Capital A/cs.",
            "Accumulated losses (debit balance of profit and loss, deferred revenue expenditure such as advertisement suspense) are debited to partners' capital accounts in the old ratio.",
            "**Workmen Compensation Reserve**: the excess over the expected claim is distributed in the old ratio; if the claim is more than the reserve, the shortfall is debited to Revaluation A/c.",
            "**Investment Fluctuation Reserve**: the excess over the fall in market value of investments is distributed in the old ratio.",
            "If partners want to keep reserves in the books, one **adjustment entry** is passed instead: Gaining Partner's Capital A/c Dr. → To Sacrificing Partner's Capital A/c."
          ]
        },
        {
          heading: "Revaluation of assets and liabilities",
          points: [
            "Assets and liabilities are revalued because book values may differ from current values, and the change belongs to the partners in the old ratio.",
            "A **Revaluation Account** is prepared: decrease in assets and increase in liabilities are **debited**; increase in assets and decrease in liabilities are **credited**.",
            "Unrecorded assets are credited and unrecorded liabilities debited to the Revaluation A/c.",
            "Profit or loss on revaluation is transferred to partners' capital accounts in the **old ratio**.",
            "If revised values are not to be shown in the books, the net effect is adjusted by one entry between gaining and sacrificing partners."
          ]
        }
      ],
      formulas: [
        "Sacrificing ratio = Old ratio − New ratio",
        "Gaining ratio = New ratio − Old ratio",
        "Goodwill adjustment: Gaining Partner's Capital A/c Dr. → To Sacrificing Partner's Capital A/c",
        "Amount = Firm's goodwill × Share gained (or sacrificed)",
        "Existing goodwill written off: All Partners' Capital A/cs Dr. (old ratio) → To Goodwill A/c",
        "Reserves: General Reserve A/c Dr. → To Partners' Capital A/cs (old ratio)",
        "Increase in asset: Asset A/c Dr. → To Revaluation A/c;  Decrease in asset: Revaluation A/c Dr. → To Asset A/c",
        "Increase in liability: Revaluation A/c Dr. → To Liability A/c;  Decrease in liability: Liability A/c Dr. → To Revaluation A/c",
        "Revaluation profit: Revaluation A/c Dr. → To Partners' Capital A/cs (old ratio)"
      ],
      terms: [
        { term: "Reconstitution", meaning: "Any change in the existing agreement among partners, such as a change in ratio, admission, retirement or death, while the firm continues." },
        { term: "Sacrificing ratio", meaning: "The ratio in which partners give up their share of profit: Old ratio − New ratio." },
        { term: "Gaining ratio", meaning: "The ratio in which partners acquire an extra share of profit: New ratio − Old ratio." },
        { term: "Revaluation account", meaning: "An account prepared to record changes in the values of assets and liabilities on reconstitution; its profit or loss goes to partners in the old ratio." },
        { term: "Accumulated profits", meaning: "Reserves and undistributed profits appearing in the books, which belong to partners in the old ratio." },
        { term: "Workmen compensation reserve", meaning: "A reserve kept to meet possible claims of workers; only the amount exceeding the expected claim is distributed among partners." }
      ],
      examples: [
        {
          q: "A, B and C share profits 5:3:2. From 1 April 2025 they agree to share equally. The firm's goodwill is valued at ₹1,20,000. Calculate each partner's sacrifice or gain and pass the entry for goodwill.",
          steps: [
            "Old shares: A 5/10, B 3/10, C 2/10; new shares 1/3 each. With LCM 30: old 15/30, 9/30, 6/30; new 10/30 each.",
            "A: 15/30 − 10/30 = 5/30 (sacrifice). B: 9/30 − 10/30 = −1/30 (gain). C: 6/30 − 10/30 = −4/30 (gain).",
            "Check: total gain 1/30 + 4/30 = 5/30 = A's sacrifice. ✓",
            "A's compensation = 1,20,000 × 5/30 = ₹20,000; B pays 1,20,000 × 1/30 = ₹4,000; C pays 1,20,000 × 4/30 = ₹16,000.",
            "Entry: B's Capital A/c Dr. ₹4,000, C's Capital A/c Dr. ₹16,000 → To A's Capital A/c ₹20,000."
          ],
          answer: "A sacrifices 5/30; B gains 1/30 and C gains 4/30; B and C pay A ₹4,000 and ₹16,000"
        },
        {
          q: "X and Y share profits 3:2. From 1 April 2025 they will share 2:3. The books show a general reserve of ₹50,000, and a revaluation shows a net gain of ₹10,000. The partners do not want to disturb the reserve or change the book values. Pass a single adjustment entry.",
          steps: [
            "X: 3/5 − 2/5 = 1/5 (sacrifice). Y: 3/5 − 2/5 = 1/5 (gain).",
            "Total to be adjusted = General reserve 50,000 + Revaluation gain 10,000 = ₹60,000.",
            "Amount = 60,000 × 1/5 = ₹12,000.",
            "Y, the gaining partner, compensates X: Y's Capital A/c Dr. ₹12,000 → To X's Capital A/c ₹12,000."
          ],
          answer: "Y's Capital A/c Dr. ₹12,000 → To X's Capital A/c ₹12,000"
        }
      ],
      qa: [
        { q: "Distinguish between sacrificing ratio and gaining ratio.", a: "(1) **Meaning**: sacrificing ratio is the ratio in which partners give up their share of profit; gaining ratio is the ratio in which partners acquire an extra share. (2) **Formula**: sacrificing = old ratio − new ratio; gaining = new ratio − old ratio. (3) **Use**: sacrificing ratio is used to distribute the goodwill brought in by a new partner; gaining ratio is used to compensate a retiring or deceased partner for goodwill. (4) **Occasion**: sacrificing ratio mainly at admission; gaining ratio mainly at retirement or death; both arise when existing partners change their ratio." },
        { q: "Why are accumulated profits and reserves distributed in the old ratio when the profit sharing ratio changes?", a: "Reserves and accumulated profits were earned while the old ratio was in force, so they belong to the partners in that ratio. If they were left undistributed, a gaining partner would later get a larger part of them under the new ratio, at the cost of the sacrificing partner. Hence they are credited to capital accounts in the **old ratio**, or an equivalent adjustment entry is passed between gaining and sacrificing partners." },
        { q: "R, S and T share profits 2:2:1. They decide to share 1:2:2 in future. Calculate each partner's sacrifice or gain.", a: "R: 2/5 − 1/5 = **1/5 sacrifice**. S: 2/5 − 2/5 = **0**, neither gain nor sacrifice. T: 1/5 − 2/5 = −1/5, i.e. a **gain of 1/5**. So T compensates R for 1/5 of the firm's goodwill." }
      ],
      quiz: [
        {
          q: "A and B share profits 3:2. Their new ratio is 1:1. A's sacrifice is:",
          options: ["1/10", "1/5", "1/2", "3/10"],
          answer: 0,
          explain: "A: 3/5 − 1/2 = 6/10 − 5/10 = **1/10**."
        },
        {
          q: "On a change in profit sharing ratio, the gaining partner compensates the sacrificing partner by the entry:",
          options: ["Sacrificing Partner's Capital A/c Dr. → To Gaining Partner's Capital A/c", "Gaining Partner's Capital A/c Dr. → To Sacrificing Partner's Capital A/c", "Goodwill A/c Dr. → To All Partners' Capital A/cs", "Revaluation A/c Dr. → To Goodwill A/c"],
          answer: 1,
          explain: "The gainer pays (debit) and the sacrificer receives (credit). Goodwill is not raised in the books as per AS 26."
        },
        {
          q: "Profit on revaluation on a change in profit sharing ratio is shared in the:",
          options: ["New ratio", "Sacrificing ratio", "Old ratio", "Capital ratio"],
          answer: 2,
          explain: "The change in values arose before the new ratio began, so it is shared in the **old ratio**."
        },
        {
          q: "A general reserve of ₹40,000 appears in the books when partners change their ratio. It is:",
          options: ["Credited to partners' capital accounts in the new ratio", "Debited to partners' capital accounts in the old ratio", "Transferred to the Revaluation A/c", "Credited to partners' capital accounts in the old ratio"],
          answer: 3,
          explain: "A reserve is accumulated profit belonging to the old ratio, so it is **credited in the old ratio**."
        },
        {
          q: "A decrease in the value of a liability on revaluation is:",
          options: ["Debited to Revaluation A/c", "Credited to Revaluation A/c", "Debited to partners' capital accounts", "Credited to the liability account"],
          answer: 1,
          explain: "Less has to be paid, which is a gain: **credit Revaluation A/c** (Liability A/c Dr. → To Revaluation A/c)."
        },
        {
          q: "Workmen Compensation Reserve is ₹30,000 and the expected claim is ₹18,000. The amount distributed among partners in the old ratio is:",
          options: ["₹12,000", "₹30,000", "₹18,000", "₹48,000"],
          answer: 0,
          explain: "Only the excess over the claim is free: 30,000 − 18,000 = **₹12,000**."
        }
      ]
    },

    // ───────────────────────────── 4. Admission of a Partner ─────────────────────────────
    {
      id: "admission-of-a-partner",
      title: "Admission of a Partner",
      section: "Partnership Accounts",
      summary: "Accounting on the admission of a new partner: new and sacrificing ratios, premium for goodwill under AS 26, hidden goodwill, revaluation, reserves, and adjustment of capitals.",
      notes: [
        {
          heading: "Admission and the adjustments needed",
          points: [
            "A new partner can be admitted only with the **consent of all** existing partners, unless the deed provides otherwise.",
            "The new partner gets two main rights: a **share in the assets** of the firm and a **share in its future profits**.",
            "He usually brings **capital** and a **premium for goodwill** to compensate the old partners for their sacrifice.",
            "Adjustments needed: new profit sharing ratio, sacrificing ratio, goodwill, revaluation of assets and liabilities, reserves and accumulated profits, and capitals."
          ]
        },
        {
          heading: "New ratio and sacrificing ratio",
          points: [
            "If only the new partner's share is given, the old partners share the rest in their **old ratio**, and their sacrificing ratio equals the old ratio.",
            "If the new partner takes his share from the old partners in an agreed proportion, deduct each partner's sacrifice from his old share.",
            "If old partners surrender a fraction of their own shares, new share = old share × (1 − fraction surrendered).",
            "**Sacrificing ratio** = Old ratio − New ratio; it is used to distribute the premium for goodwill."
          ]
        },
        {
          heading: "Treatment of goodwill (AS 26)",
          points: [
            "**Premium brought in cash**: Bank A/c Dr. → To Premium for Goodwill A/c; then Premium for Goodwill A/c Dr. → To Sacrificing Partners' Capital A/cs (sacrificing ratio).",
            "**Premium not brought in cash**: New Partner's Current (or Capital) A/c Dr. → To Sacrificing Partners' Capital A/cs.",
            "**Premium paid privately** to the old partners outside the business: no entry in the firm's books.",
            "Existing goodwill in the books is **written off among old partners in the old ratio**.",
            "**Hidden goodwill**: if the new partner's capital implies a value of the firm higher than the total capitals, the difference is goodwill."
          ]
        },
        {
          heading: "Revaluation and reserves",
          points: [
            "Assets and liabilities are revalued through a **Revaluation Account**; its profit or loss goes to the **old partners in the old ratio**.",
            "General reserve, credit balance of profit and loss and other accumulated profits are credited to **old partners in the old ratio**.",
            "Accumulated losses and deferred revenue expenditure are debited to old partners in the old ratio.",
            "The new partner does not share profits or losses that arose before his admission."
          ]
        },
        {
          heading: "Adjustment of capitals",
          points: [
            "**New partner's capital on the basis of old partners' capitals**: total capital of the new firm = combined adjusted capitals of old partners × reciprocal of their combined new share; new partner's capital = total × his share.",
            "**Old partners' capitals on the basis of the new partner's capital**: total capital = new partner's capital × reciprocal of his share; each old partner's required capital = total × his new share.",
            "Any surplus is withdrawn (or credited to current account) and any shortfall is brought in (or debited to current account).",
            "**Adjusted capital** means capital after all adjustments for reserves, revaluation and goodwill."
          ]
        }
      ],
      formulas: [
        "Only new partner's share given: each old partner's new share = Old share × (1 − New partner's share)",
        "New share of an old partner = Old share − Share surrendered to the new partner",
        "Sacrificing ratio = Old ratio − New ratio",
        "Capital brought: Bank A/c Dr. → To New Partner's Capital A/c",
        "Premium in cash: Bank A/c Dr. → To Premium for Goodwill A/c;  Premium for Goodwill A/c Dr. → To Sacrificing Partners' Capital A/cs",
        "Premium not brought: New Partner's Current A/c Dr. → To Sacrificing Partners' Capital A/cs",
        "Hidden goodwill = New partner's capital × Reciprocal of his share − Total capitals of all partners (including the new partner, after adjustments)",
        "New partner's capital = Combined adjusted capitals of old partners × Reciprocal of their combined new share × New partner's share"
      ],
      terms: [
        { term: "Admission of a partner", meaning: "Taking a new person into an existing firm as a partner, which reconstitutes the partnership." },
        { term: "Premium for goodwill", meaning: "The amount brought in by a new partner as compensation to old partners for the share of profit they sacrifice." },
        { term: "Sacrificing ratio", meaning: "The ratio in which old partners give up their share of profit in favour of the new partner." },
        { term: "Hidden goodwill", meaning: "Goodwill inferred from the capital brought by the new partner when no value of goodwill is given." },
        { term: "Revaluation account", meaning: "An account recording changes in the values of assets and liabilities at admission; its result goes to old partners in the old ratio." },
        { term: "Adjusted capital", meaning: "A partner's capital after crediting or debiting reserves, revaluation profit or loss and goodwill." }
      ],
      examples: [
        {
          q: "A and B share profits 3:2. C is admitted for a 1/5 share of future profits. He brings ₹1,00,000 as capital and ₹30,000 as premium for goodwill in cash. Calculate the new ratio and pass the entries for capital and premium.",
          steps: [
            "Remaining share for A and B = 1 − 1/5 = 4/5, shared in the old ratio 3:2.",
            "A = 4/5 × 3/5 = 12/25; B = 4/5 × 2/5 = 8/25; C = 1/5 = 5/25. New ratio = 12:8:5.",
            "Sacrifice: A = 3/5 − 12/25 = 3/25; B = 2/5 − 8/25 = 2/25. Sacrificing ratio = 3:2 (the old ratio).",
            "Bank A/c Dr. ₹1,30,000 → To C's Capital A/c ₹1,00,000, To Premium for Goodwill A/c ₹30,000.",
            "Premium for Goodwill A/c Dr. ₹30,000 → To A's Capital A/c ₹18,000, To B's Capital A/c ₹12,000."
          ],
          answer: "New ratio 12:8:5; premium credited A ₹18,000 and B ₹12,000"
        },
        {
          q: "X and Y share profits 3:2. Their capitals after all adjustments are ₹1,50,000 and ₹1,10,000. Z is admitted for a 1/4 share and brings ₹1,20,000 as capital but nothing for goodwill. Calculate the hidden goodwill and pass the entry for Z's share of goodwill.",
          steps: [
            "Total capital of the firm implied by Z's capital = 1,20,000 × 4/1 = ₹4,80,000.",
            "Actual total capital = 1,50,000 + 1,10,000 + 1,20,000 = ₹3,80,000.",
            "Hidden goodwill of the firm = 4,80,000 − 3,80,000 = ₹1,00,000.",
            "Z's share = 1,00,000 × 1/4 = ₹25,000, credited to X and Y in the sacrificing ratio 3:2 (the old ratio, as nothing else is given).",
            "Entry: Z's Current A/c Dr. ₹25,000 → To X's Capital A/c ₹15,000, To Y's Capital A/c ₹10,000."
          ],
          answer: "Hidden goodwill ₹1,00,000; Z's share ₹25,000 (X ₹15,000, Y ₹10,000)"
        }
      ],
      qa: [
        { q: "State the rights acquired by a new partner on admission.", a: "A new partner acquires two main rights: (1) the right to **share in the assets** of the firm, and (2) the right to **share in the future profits** of the firm. Like every partner, he can also take part in the conduct of the business." },
        { q: "Explain the treatment of goodwill when the new partner brings his share of goodwill in cash.", a: "As per **AS 26**, goodwill is not raised in the books. The cash brought as premium is credited to Premium for Goodwill A/c and transferred to the **sacrificing partners in their sacrificing ratio**: (1) Bank A/c Dr. → To Premium for Goodwill A/c; (2) Premium for Goodwill A/c Dr. → To Sacrificing Partners' Capital A/cs. If the old partners withdraw this amount: Partners' Capital A/cs Dr. → To Bank A/c." },
        { q: "P and Q share profits 2:1. R is admitted for a 1/4 share, taking 1/8 from P and 1/8 from Q. Calculate the new ratio.", a: "P = 2/3 − 1/8 = 16/24 − 3/24 = 13/24. Q = 1/3 − 1/8 = 8/24 − 3/24 = 5/24. R = 1/8 + 1/8 = 1/4 = 6/24. New ratio P : Q : R = **13 : 5 : 6**." }
      ],
      quiz: [
        {
          q: "A and B share profits 2:1. C is admitted for a 1/4 share. If nothing else is given, the new ratio is:",
          options: ["2:1:1", "2:1:3", "8:4:3", "6:3:4"],
          answer: 0,
          explain: "A = 3/4 × 2/3 = 1/2; B = 3/4 × 1/3 = 1/4; C = 1/4. Ratio = **2:1:1**."
        },
        {
          q: "Premium for goodwill brought in cash by a new partner is credited to the old partners' capital accounts in their:",
          options: ["New ratio", "Capital ratio", "Sacrificing ratio", "Gaining ratio"],
          answer: 2,
          explain: "The premium compensates the old partners for their sacrifice, so it is shared in the **sacrificing ratio**."
        },
        {
          q: "Goodwill already appearing in the books at the time of admission is written off among:",
          options: ["All partners in the new ratio", "Old partners in the old ratio", "Old partners in the sacrificing ratio", "The new partner alone"],
          answer: 1,
          explain: "Existing goodwill belongs to the period before admission, so it is written off among **old partners in the old ratio**."
        },
        {
          q: "M and N have capitals of ₹60,000 and ₹40,000. O brings ₹70,000 for a 1/3 share. The hidden goodwill of the firm is:",
          options: ["₹70,000", "₹1,10,000", "₹60,000", "₹40,000"],
          answer: 3,
          explain: "Implied total = 70,000 × 3 = ₹2,10,000; actual = 60,000 + 40,000 + 70,000 = ₹1,70,000; goodwill = **₹40,000**."
        },
        {
          q: "Premium for goodwill paid by the new partner privately to the old partners is:",
          options: ["Credited to old partners' capital accounts", "Not recorded in the books of the firm", "Debited to the new partner's capital account", "Credited to the Revaluation A/c"],
          answer: 1,
          explain: "A private payment does not pass through the business, so **no entry** is made in the firm's books."
        },
        {
          q: "Profit on revaluation at the time of admission is credited to:",
          options: ["Old partners in the old ratio", "All partners in the new ratio", "The new partner only", "Old partners in the new ratio"],
          answer: 0,
          explain: "The change in values relates to the period before admission, so it belongs to the **old partners in the old ratio**."
        }
      ]
    },

    // ───────────────────────────── 5. Retirement and Death of a Partner ─────────────────────────────
    {
      id: "retirement-and-death-of-a-partner",
      title: "Retirement and Death of a Partner",
      section: "Partnership Accounts",
      summary: "Settling the account of a retiring or deceased partner: new and gaining ratios, goodwill, revaluation, reserves, the deceased partner's share of profit till death, and payment to the retiring partner or the executors.",
      notes: [
        {
          heading: "Retirement and death as reconstitution",
          points: [
            "A partner may retire (with the consent of the others, by agreement, or by notice in a partnership at will) or may die; the remaining partners continue the business.",
            "The retiring partner, or the legal representatives (**executors**) of a deceased partner, must be paid the amount due to him.",
            "Adjustments needed: new and gaining ratio, goodwill, revaluation of assets and liabilities, reserves and accumulated profits, profit up to the date of retirement or death, and settlement of the amount due."
          ]
        },
        {
          heading: "New ratio and gaining ratio",
          points: [
            "**Gaining ratio** = New ratio − Old ratio; it shows the share each continuing partner gains from the outgoing partner.",
            "If no new ratio is given, the continuing partners share future profits in their **old ratio**, and the gaining ratio equals their old ratio.",
            "If the outgoing partner's share is taken in an agreed proportion, add each partner's gain to his old share.",
            "The gaining ratio is used to compensate the outgoing partner for his share of goodwill."
          ]
        },
        {
          heading: "Goodwill, revaluation and reserves",
          points: [
            "Outgoing partner's share of goodwill: **Gaining Partners' Capital A/cs Dr. → To Retiring (or Deceased) Partner's Capital A/c**, in the gaining ratio.",
            "Goodwill already in the books is written off among **all partners, including the outgoing one, in the old ratio**.",
            "Revaluation profit or loss, reserves and accumulated profits or losses are shared by **all partners in the old ratio**.",
            "After settlement, continuing partners may adjust their capitals in their new ratio."
          ]
        },
        {
          heading: "Death of a partner",
          points: [
            "The deceased partner is entitled to his share of profit from the **date of the last balance sheet to the date of death**.",
            "It is estimated on the basis of **last year's profit**, **average profit** of past years, or **sales** (last year's profit rate × sales up to the date of death).",
            "Entry: **Profit and Loss Suspense A/c Dr. → To Deceased Partner's Capital A/c**.",
            "The balance due is transferred to the executors: Deceased Partner's Capital A/c Dr. → To Deceased Partner's Executors A/c."
          ]
        },
        {
          heading: "Settlement of the amount due",
          points: [
            "Amount due = capital + share of goodwill, reserves and revaluation profit + interest on capital, salary and profit to date − drawings, interest on drawings and share of losses.",
            "It may be paid in **cash** at once, transferred to the outgoing partner's **loan account**, or paid partly in cash with the rest transferred to loan: Retiring Partner's Capital A/c Dr. → To Retiring Partner's Loan A/c.",
            "The loan is usually repaid in instalments with interest.",
            "Under **Section 37**, if the amount is not settled, the outgoing partner or his legal representatives may claim, at their option, **interest at 6% p.a.** or the share of profits earned by the use of his money."
          ]
        }
      ],
      formulas: [
        "Gaining ratio = New ratio − Old ratio",
        "Goodwill: Gaining Partners' Capital A/cs Dr. (gaining ratio) → To Retiring Partner's Capital A/c",
        "Profit till death (time basis) = Last year's (or average) profit × Months up to death ÷ 12 × Deceased's share",
        "Profit till death (sales basis) = Sales up to death × (Last year's profit ÷ Last year's sales) × Deceased's share",
        "Profit till death: Profit and Loss Suspense A/c Dr. → To Deceased Partner's Capital A/c",
        "Transfer to executors: Deceased Partner's Capital A/c Dr. → To Deceased Partner's Executors A/c",
        "Amount left as loan: Retiring Partner's Capital A/c Dr. → To Retiring Partner's Loan A/c"
      ],
      terms: [
        { term: "Retirement", meaning: "A partner leaving the firm while the other partners continue the business." },
        { term: "Gaining ratio", meaning: "The ratio in which continuing partners acquire the share of the outgoing partner: New ratio − Old ratio." },
        { term: "Executors", meaning: "The legal representatives of a deceased partner, to whom the amount due to him is paid." },
        { term: "Profit and Loss Suspense account", meaning: "A temporary account debited with the deceased partner's estimated share of profit up to the date of death." },
        { term: "Retiring partner's loan account", meaning: "The account to which the unpaid amount due to a retiring partner is transferred; it is a liability of the firm." }
      ],
      examples: [
        {
          q: "A, B and C share profits 2:2:1. B retires, and A and C will share future profits 3:2. The goodwill of the firm is valued at ₹1,50,000. Calculate the gaining ratio and pass the entry for B's share of goodwill.",
          steps: [
            "A: new 3/5 − old 2/5 = 1/5 gain. C: new 2/5 − old 1/5 = 1/5 gain. Gaining ratio = 1:1.",
            "Check: total gain = 2/5 = B's old share. ✓",
            "B's share of goodwill = 1,50,000 × 2/5 = ₹60,000.",
            "A pays 1,50,000 × 1/5 = ₹30,000 and C pays 1,50,000 × 1/5 = ₹30,000.",
            "Entry: A's Capital A/c Dr. ₹30,000, C's Capital A/c Dr. ₹30,000 → To B's Capital A/c ₹60,000."
          ],
          answer: "Gaining ratio 1:1; A and C are debited ₹30,000 each and B is credited ₹60,000"
        },
        {
          q: "P, Q and R share profits 3:2:1. R died on 30 June 2025. Accounts are closed on 31 March every year, and the profit for the year ended 31 March 2025 was ₹1,80,000. R's share of profit till death is to be based on last year's profit. Calculate it and pass the entry.",
          steps: [
            "Period from 1 April 2025 to 30 June 2025 = 3 months.",
            "Estimated profit for 3 months = 1,80,000 × 3/12 = ₹45,000.",
            "R's share = 45,000 × 1/6 = ₹7,500.",
            "Entry: Profit and Loss Suspense A/c Dr. ₹7,500 → To R's Capital A/c ₹7,500."
          ],
          answer: "R's share of profit till death = ₹7,500"
        }
      ],
      qa: [
        { q: "What amounts are payable to a retiring partner?", a: "(1) Credit balance of his **capital** (and current) account; (2) his share of **goodwill**; (3) his share of **reserves and accumulated profits**; (4) his share of **revaluation profit**; (5) **interest on capital** and salary, if allowed; (6) his share of profit up to the date of retirement. Deducted from this: drawings, interest on drawings, and his share of revaluation loss and accumulated losses." },
        { q: "Why is a Profit and Loss Suspense Account opened on the death of a partner?", a: "A partner may die during the year, when the profit up to that date is not known. His share is estimated (on the basis of last year's or average profit, or sales) and credited to his capital account. Since the firm's profit and loss account is prepared only at the year-end, the debit is put to a temporary **Profit and Loss Suspense Account**: P&L Suspense A/c Dr. → To Deceased Partner's Capital A/c." },
        { q: "X, Y and Z share profits 4:3:2. Y retires and his share is taken by X and Z in the ratio 2:1. Calculate the new ratio.", a: "Y's share = 3/9. X gains 3/9 × 2/3 = 2/9; Z gains 3/9 × 1/3 = 1/9. X's new share = 4/9 + 2/9 = 6/9; Z's new share = 2/9 + 1/9 = 3/9. New ratio X : Z = 6 : 3 = **2 : 1**; gaining ratio = 2 : 1." }
      ],
      quiz: [
        {
          q: "On retirement, the continuing partners compensate the retiring partner for goodwill in their:",
          options: ["Old ratio", "Gaining ratio", "New ratio", "Sacrificing ratio"],
          answer: 1,
          explain: "Continuing partners pay in proportion to what they gain: the **gaining ratio**."
        },
        {
          q: "A, B and C share profits 3:2:1. C retires. If nothing is agreed, A and B will share future profits in the ratio:",
          options: ["3:2", "1:1", "5:3", "3:1"],
          answer: 0,
          explain: "Without a new agreement, continuing partners keep their **old ratio between themselves, 3:2**."
        },
        {
          q: "A deceased partner's share of profit till the date of death is debited to:",
          options: ["Profit and Loss Appropriation A/c", "Revaluation A/c", "Profit and Loss Suspense A/c", "Executors A/c"],
          answer: 2,
          explain: "The profit for the part-year is not yet known, so the estimate is debited to **Profit and Loss Suspense A/c**."
        },
        {
          q: "Revaluation profit at the time of retirement is shared by:",
          options: ["Continuing partners in the new ratio", "The retiring partner alone", "Continuing partners in the gaining ratio", "All partners, including the retiring partner, in the old ratio"],
          answer: 3,
          explain: "The change in values arose while all partners were together, so it is shared by **all partners in the old ratio**."
        },
        {
          q: "Sales up to the date of death were ₹2,00,000. Last year's sales were ₹8,00,000 and profit ₹1,20,000. The deceased partner's share was 1/4. His share of profit is:",
          options: ["₹30,000", "₹50,000", "₹7,500", "₹3,750"],
          answer: 2,
          explain: "Profit rate = 1,20,000 ÷ 8,00,000 = 15%; profit to death = 15% of 2,00,000 = ₹30,000; his share = 30,000 × 1/4 = **₹7,500**."
        },
        {
          q: "The amount due to a retiring partner that is not paid immediately is usually transferred to his:",
          options: ["Loan A/c", "Current A/c", "Drawings A/c", "Revaluation A/c"],
          answer: 0,
          explain: "The unpaid amount becomes a liability of the firm: Retiring Partner's Capital A/c Dr. → To **Retiring Partner's Loan A/c**."
        }
      ]
    },

    // ───────────────────────────── 6. Dissolution of Partnership Firm ─────────────────────────────
    {
      id: "dissolution-of-partnership-firm",
      title: "Dissolution of Partnership Firm",
      section: "Partnership Accounts",
      summary: "Dissolution of partnership versus dissolution of the firm, modes of dissolution, settlement of accounts under Section 48, and recording dissolution through the realisation account, partners' capital accounts and bank account.",
      notes: [
        {
          heading: "Dissolution of partnership and of the firm",
          points: [
            "**Dissolution of partnership**: the relationship among partners changes (admission, retirement, death, change in ratio) but the **firm continues**; the books are not closed.",
            "**Dissolution of firm**: the partnership among **all** partners ends and the **business is closed**; assets are sold, liabilities paid and the books closed.",
            "Dissolution of a firm always dissolves the partnership, but dissolution of a partnership does not necessarily dissolve the firm."
          ]
        },
        {
          heading: "Modes of dissolution of a firm",
          points: [
            "**By agreement** (Section 40): with the consent of all partners.",
            "**Compulsory dissolution** (Section 41): when all partners, or all but one, become insolvent, or when the business becomes illegal.",
            "**On the happening of certain contingencies** (Section 42): expiry of the fixed term, completion of the venture, death or insolvency of a partner (unless otherwise agreed).",
            "**By notice** (Section 43): in a partnership at will, any partner can dissolve the firm by giving written notice.",
            "**By the court** (Section 44): on a partner's insanity or permanent incapacity, misconduct, persistent breach of agreement, transfer of his whole interest, when the business can only be run at a loss, or on just and equitable grounds."
          ]
        },
        {
          heading: "Settlement of accounts (Section 48)",
          points: [
            "**Losses**, including deficiency of capital, are paid first out of profits, then out of capital, and lastly by partners individually in their **profit sharing ratio**.",
            "Assets of the firm are applied in this order: (1) **debts to third parties**, (2) **partners' loans and advances**, (3) **partners' capitals**, (4) any surplus to partners in the profit sharing ratio.",
            "Under Section 49, the firm's property is first used to pay the firm's debts, and a partner's private property is first used to pay his private debts."
          ]
        },
        {
          heading: "Realisation account",
          points: [
            "It is prepared to find the **profit or loss on realisation** of assets and payment of liabilities.",
            "Debit side: all assets at **book value** (except cash, bank and fictitious assets), payments made to settle liabilities, and realisation expenses.",
            "Credit side: **outside liabilities** at book value, and amounts realised from assets.",
            "Provisions against assets (e.g. provision for doubtful debts, accumulated depreciation) are transferred to its credit side.",
            "Partners' loans are **not** transferred to Realisation A/c; they are paid directly, after outside liabilities."
          ]
        },
        {
          heading: "Key dissolution entries",
          points: [
            "Accumulated profits and reserves are credited, and accumulated losses and fictitious assets debited, to partners' capital accounts in the profit sharing ratio.",
            "Asset taken over by a partner: **Partner's Capital A/c Dr. → To Realisation A/c**. Liability taken over by a partner: **Realisation A/c Dr. → To Partner's Capital A/c**.",
            "Realisation expenses paid by the firm: Realisation A/c Dr. → To Bank A/c. If paid by a partner on the firm's behalf: Realisation A/c Dr. → To Partner's Capital A/c.",
            "Unrecorded asset realised: Bank A/c Dr. → To Realisation A/c. Unrecorded liability paid: Realisation A/c Dr. → To Bank A/c.",
            "Finally, partners' capital accounts are settled through the bank account, which then closes."
          ]
        }
      ],
      formulas: [
        "Transfer of assets: Realisation A/c Dr. → To Sundry Assets A/cs (book value)",
        "Transfer of outside liabilities: Sundry Liabilities A/cs Dr. → To Realisation A/c",
        "Sale of assets: Bank A/c Dr. → To Realisation A/c",
        "Payment of liabilities: Realisation A/c Dr. → To Bank A/c",
        "Asset taken over by a partner: Partner's Capital A/c Dr. → To Realisation A/c",
        "Realisation expenses: Realisation A/c Dr. → To Bank A/c",
        "Partner's loan repaid: Partner's Loan A/c Dr. → To Bank A/c",
        "Realisation profit: Realisation A/c Dr. → To Partners' Capital A/cs (PSR);  Loss: Partners' Capital A/cs Dr. → To Realisation A/c",
        "Order of payment (Sec 48): outside creditors → partners' loans → partners' capitals → surplus in PSR"
      ],
      terms: [
        { term: "Dissolution of partnership", meaning: "A change in the relationship among partners (e.g. admission or retirement) without closing the business." },
        { term: "Dissolution of firm", meaning: "Ending the partnership among all partners and closing the business of the firm." },
        { term: "Realisation account", meaning: "An account prepared on dissolution to record the sale of assets and payment of liabilities and to find the profit or loss on realisation." },
        { term: "Partnership at will", meaning: "A partnership with no fixed term or particular venture; it can be dissolved by any partner by notice." },
        { term: "Unrecorded asset", meaning: "An asset that has no value in the books (e.g. a fully written-off computer) but realises money on dissolution." },
        { term: "Realisation expenses", meaning: "Expenses incurred in selling assets and settling liabilities on dissolution; debited to Realisation A/c." }
      ],
      examples: [
        {
          q: "A and B share profits 3:2. On dissolution, assets (other than cash) of book value ₹2,40,000 realised ₹2,10,000. Creditors of ₹60,000 were paid ₹57,000 in full settlement, and realisation expenses were ₹4,000. Find the profit or loss on realisation and each partner's share.",
          steps: [
            "Debit side of Realisation A/c: Assets 2,40,000 + Bank (creditors) 57,000 + Bank (expenses) 4,000 = ₹3,01,000.",
            "Credit side: Creditors 60,000 + Bank (assets realised) 2,10,000 = ₹2,70,000.",
            "Loss on realisation = 3,01,000 − 2,70,000 = ₹31,000.",
            "A's share = 31,000 × 3/5 = ₹18,600; B's share = 31,000 × 2/5 = ₹12,400.",
            "Entry: A's Capital A/c Dr. ₹18,600, B's Capital A/c Dr. ₹12,400 → To Realisation A/c ₹31,000."
          ],
          answer: "Loss on realisation ₹31,000: A ₹18,600, B ₹12,400"
        },
        {
          q: "Pass journal entries on the dissolution of the firm of X and Y: (i) stock of book value ₹40,000 was taken over by X at ₹35,000; (ii) an unrecorded computer was sold for ₹8,000; (iii) an unrecorded liability of ₹5,000 was paid; (iv) Y's loan of ₹20,000 to the firm was repaid.",
          steps: [
            "(i) X's Capital A/c Dr. ₹35,000 → To Realisation A/c ₹35,000 (the stock was already transferred to Realisation A/c at its book value).",
            "(ii) Bank A/c Dr. ₹8,000 → To Realisation A/c ₹8,000.",
            "(iii) Realisation A/c Dr. ₹5,000 → To Bank A/c ₹5,000.",
            "(iv) Y's Loan A/c Dr. ₹20,000 → To Bank A/c ₹20,000 (a partner's loan does not go through Realisation A/c)."
          ],
          answer: "Entries (i)–(iii) pass through Realisation A/c; (iv) is paid directly from bank"
        }
      ],
      qa: [
        { q: "Distinguish between dissolution of partnership and dissolution of firm.", a: "(1) **Business**: on dissolution of partnership the business continues; on dissolution of the firm it is closed. (2) **Books**: not closed in the first case; closed in the second. (3) **Assets and liabilities**: revalued in the first; sold and paid off in the second. (4) **Court**: dissolution of partnership never involves the court; a firm may be dissolved by the court. (5) Dissolution of the firm always dissolves the partnership, but not the other way round." },
        { q: "State the order of settlement of accounts under Section 48 of the Indian Partnership Act, 1932.", a: "Losses (including deficiency of capital) are met first out of profits, then out of capital, and lastly by partners individually in their profit sharing ratio. The assets are applied: (1) to pay **debts of the firm to third parties**; (2) to pay each partner's **loans and advances** to the firm; (3) to pay each partner's **capital**; (4) the **residue**, if any, is divided among partners in their profit sharing ratio." },
        { q: "State any four grounds on which the court may order dissolution of a firm.", a: "(1) A partner becomes of **unsound mind**. (2) A partner becomes **permanently incapable** of performing his duties. (3) A partner is guilty of **misconduct** that harms the business, or persistently **breaches** the partnership agreement. (4) A partner **transfers his whole interest** in the firm to a third party. (5) The business can be carried on **only at a loss**. (6) Any other **just and equitable** ground." }
      ],
      quiz: [
        {
          q: "On dissolution of a firm, a partner's loan to the firm is:",
          options: ["Transferred to Realisation A/c", "Paid after outside creditors but before partners' capitals", "Paid before outside creditors", "Transferred to his capital account"],
          answer: 1,
          explain: "Under Section 48, third-party debts come first, then **partners' loans**, then capitals."
        },
        {
          q: "An asset taken over by a partner on dissolution is debited to:",
          options: ["Realisation A/c", "Bank A/c", "Partner's Capital A/c", "Asset A/c"],
          answer: 2,
          explain: "The partner gets the asset instead of cash, so his **capital account is debited** and Realisation A/c credited."
        },
        {
          q: "Dissolution of a firm when all partners but one become insolvent is:",
          options: ["Compulsory dissolution", "Dissolution by agreement", "Dissolution by notice", "Dissolution on the happening of a contingency"],
          answer: 0,
          explain: "Section 41 makes dissolution **compulsory** when all or all but one partner are insolvent, or when the business becomes illegal."
        },
        {
          q: "Realisation expenses paid by the firm are debited to:",
          options: ["Partners' Capital A/cs", "Profit and Loss A/c", "Bank A/c", "Realisation A/c"],
          answer: 3,
          explain: "Expenses of realisation reduce realisation profit, so they are debited to **Realisation A/c**."
        },
        {
          q: "An unrecorded asset realised ₹10,000 on dissolution. The entry is:",
          options: ["Realisation A/c Dr. → To Bank A/c", "Bank A/c Dr. → To Realisation A/c", "Bank A/c Dr. → To Partners' Capital A/cs", "Asset A/c Dr. → To Realisation A/c"],
          answer: 1,
          explain: "Cash received for any asset is credited to Realisation A/c: **Bank A/c Dr. → To Realisation A/c**."
        },
        {
          q: "Assets (other than cash) of book value ₹1,00,000 realised ₹90,000, and creditors of ₹30,000 were paid ₹28,000. The loss on realisation is:",
          options: ["₹10,000", "₹12,000", "₹8,000", "₹2,000"],
          answer: 2,
          explain: "Loss on assets ₹10,000 less gain on creditors ₹2,000 = **₹8,000**."
        }
      ]
    },

    // ───────────────────────────── 7. Accounting for Share Capital ─────────────────────────────
    {
      id: "accounting-for-share-capital",
      title: "Accounting for Share Capital",
      section: "Company Accounts",
      summary: "Features of a company, categories of share capital, kinds of shares, issue of shares at par and at a premium, over-subscription and pro-rata allotment, calls in arrears and in advance, and forfeiture and reissue of shares.",
      notes: [
        {
          heading: "Company and share capital",
          points: [
            "A **company** is an artificial person created under the Companies Act, 2013, with a **separate legal entity**, **perpetual succession**, **limited liability** and **transferable shares** (in a public company).",
            "Ownership (shareholders) is separate from management (board of directors). Types include public, private and one person companies.",
            "**Share capital** is the capital raised by issuing shares; a **share** is one unit of share capital with a fixed nominal (face) value.",
            "Categories: **authorised** (maximum allowed by the memorandum), **issued** (offered for subscription), **subscribed** (taken up), **called-up** (demanded) and **paid-up** (actually received).",
            "**Reserve capital** is the part of uncalled capital that a company decides, by special resolution, to call only on winding up."
          ]
        },
        {
          heading: "Kinds of shares",
          points: [
            "**Preference shares** carry a preferential right to dividend at a **fixed rate** and to **return of capital** on winding up.",
            "Preference shares may be cumulative or non-cumulative, participating or non-participating, convertible or non-convertible; a company cannot now issue irredeemable preference shares.",
            "**Equity shares** are shares that are not preference shares; they carry voting rights and get dividend only after preference shareholders.",
            "**Sweat equity shares** are issued to employees or directors at a discount or for consideration other than cash, for providing know-how or similar value."
          ]
        },
        {
          heading: "Issue of shares",
          points: [
            "Shares may be issued at **par** (face value) or at a **premium** (above face value); the premium is credited to **Securities Premium A/c**.",
            "Under **Section 53**, a company **cannot issue shares at a discount**, except sweat equity shares.",
            "Money is usually called in instalments: **application, allotment and calls**. Shares may also be issued to vendors for assets (consideration other than cash), by **private placement** to selected persons, or to employees under an **Employee Stock Option Plan (ESOP)**.",
            "**Minimum subscription** is 90% of the issue; if it is not received, the application money must be refunded.",
            "Under **Section 52**, securities premium can be used only for: issuing fully paid **bonus shares**, writing off **preliminary expenses**, writing off expenses, commission or discount on issue of shares or debentures, providing **premium on redemption** of preference shares or debentures, and **buy-back** of own shares."
          ]
        },
        {
          heading: "Over-subscription and calls",
          points: [
            "**Over-subscription**: applications exceed the shares offered. The company may reject some applications (money refunded) and make a **pro-rata allotment** to the rest.",
            "Excess application money of pro-rata applicants is adjusted against allotment (and calls, if the articles permit); any balance is refunded.",
            "**Calls in arrears**: called-up amount not paid by a shareholder; interest may be charged (Table F: up to **10% p.a.**). It is deducted from subscribed capital in the notes.",
            "**Calls in advance**: amount received before it is called; interest is payable on it (Table F: up to **12% p.a.**). It is shown under **other current liabilities**."
          ]
        },
        {
          heading: "Forfeiture and reissue of shares",
          points: [
            "If a shareholder fails to pay a call, the company may **forfeit** his shares as per its articles; the amount already paid is not refunded.",
            "Forfeiture: Share Capital A/c Dr. (called-up amount) → To Share Forfeiture A/c (amount received) → To unpaid calls (or Calls-in-Arrears) A/c. If premium was due but not received, Securities Premium A/c is also debited.",
            "Forfeited shares may be **reissued** at par, at a premium or at a discount; the discount cannot exceed the amount forfeited on those shares.",
            "After reissue, the forfeited amount left on the reissued shares is a capital profit: Share Forfeiture A/c Dr. → To **Capital Reserve** A/c.",
            "The balance of Share Forfeiture A/c (on shares not yet reissued) is added to paid-up capital in the notes to share capital."
          ]
        }
      ],
      formulas: [
        "Application money received: Bank A/c Dr. → To Equity Share Application A/c",
        "Transfer of application money: Equity Share Application A/c Dr. → To Equity Share Capital A/c (and To Equity Share Allotment A/c for any excess adjusted)",
        "Allotment due: Equity Share Allotment A/c Dr. → To Equity Share Capital A/c, To Securities Premium A/c",
        "Call due: Equity Share First Call A/c Dr. → To Equity Share Capital A/c",
        "Calls in arrears: Calls-in-Arrears A/c Dr. → To Equity Share First Call A/c",
        "Calls in advance: Bank A/c Dr. → To Calls-in-Advance A/c",
        "Forfeiture: Equity Share Capital A/c Dr. (called up) → To Share Forfeiture A/c (paid), To Calls-in-Arrears A/c (unpaid)",
        "Reissue at a discount: Bank A/c Dr., Share Forfeiture A/c Dr. → To Equity Share Capital A/c",
        "Gain on reissue: Share Forfeiture A/c Dr. → To Capital Reserve A/c",
        "Maximum discount on reissue = Amount forfeited on those shares",
        "Interest (Table F): calls in arrears up to 10% p.a.; calls in advance up to 12% p.a.",
        "Minimum subscription = 90% of the issue"
      ],
      terms: [
        { term: "Authorised capital", meaning: "The maximum share capital a company is permitted to raise, as stated in its memorandum of association." },
        { term: "Called-up capital", meaning: "The part of subscribed capital that the company has asked shareholders to pay so far." },
        { term: "Calls in arrears", meaning: "Amount called up by the company but **not yet paid** by a shareholder." },
        { term: "Calls in advance", meaning: "Amount received from a shareholder **before** the company has called it; a liability on which interest is payable." },
        { term: "Securities premium", meaning: "The excess of the issue price of shares (or debentures) over their face value; its use is restricted by Section 52." },
        { term: "Forfeiture of shares", meaning: "Cancellation of shares for non-payment of calls; the amount already paid by the shareholder is kept by the company." }
      ],
      examples: [
        {
          q: "Rohan held 400 equity shares of ₹10 each issued at a premium of ₹2 per share, payable ₹3 on application, ₹5 on allotment (including premium) and ₹4 on first and final call. He paid the application and allotment money but not the call, and his shares were forfeited. 300 of these shares were reissued at ₹8 per share fully paid. Pass the entries for forfeiture and reissue and find the amount transferred to capital reserve.",
          steps: [
            "Per share: application ₹3 (capital), allotment ₹5 (₹3 capital + ₹2 premium), call ₹4 (capital).",
            "Rohan paid ₹6 per share towards capital; the premium was also received, so Securities Premium A/c is not debited.",
            "Forfeiture: Equity Share Capital A/c Dr. ₹4,000 (400 × ₹10) → To Share Forfeiture A/c ₹2,400 (400 × ₹6), To Equity Share First and Final Call A/c ₹1,600 (400 × ₹4).",
            "Reissue of 300 shares at ₹8: Bank A/c Dr. ₹2,400, Share Forfeiture A/c Dr. ₹600 → To Equity Share Capital A/c ₹3,000.",
            "Forfeited amount on 300 shares = 300 × ₹6 = ₹1,800; used for discount ₹600; balance ₹1,200: Share Forfeiture A/c Dr. ₹1,200 → To Capital Reserve A/c ₹1,200.",
            "Share Forfeiture A/c still shows ₹600 (100 × ₹6) for the 100 shares not reissued."
          ],
          answer: "Capital reserve ₹1,200; Share Forfeiture balance ₹600"
        },
        {
          q: "A company offered 10,000 equity shares of ₹10 each, payable ₹3 on application, ₹4 on allotment and ₹3 on call. Applications were received for 15,000 shares, and shares were allotted pro-rata to all applicants. Excess application money was adjusted towards allotment. Pass the entries up to the receipt of allotment money.",
          steps: [
            "Bank A/c Dr. ₹45,000 → To Equity Share Application A/c ₹45,000 (15,000 × ₹3).",
            "Application money needed for 10,000 shares = ₹30,000; excess = ₹15,000.",
            "Equity Share Application A/c Dr. ₹45,000 → To Equity Share Capital A/c ₹30,000, To Equity Share Allotment A/c ₹15,000.",
            "Equity Share Allotment A/c Dr. ₹40,000 → To Equity Share Capital A/c ₹40,000 (10,000 × ₹4).",
            "Bank A/c Dr. ₹25,000 → To Equity Share Allotment A/c ₹25,000 (40,000 − 15,000 already adjusted)."
          ],
          answer: "Allotment money received in cash = ₹25,000; nothing is refunded"
        }
      ],
      qa: [
        { q: "State the purposes for which securities premium can be used under Section 52 of the Companies Act, 2013.", a: "(1) Issuing **fully paid bonus shares** to members. (2) Writing off **preliminary expenses** of the company. (3) Writing off the **expenses, commission or discount** on any issue of shares or debentures. (4) Providing for the **premium payable on redemption** of preference shares or debentures. (5) **Buy-back** of its own shares or other securities." },
        { q: "Can a company issue shares at a discount? Explain.", a: "**No.** Under **Section 53** of the Companies Act, 2013, a company cannot issue shares at a discount, and any shares so issued are void. The only exception is **sweat equity shares** issued under Section 54 to employees or directors. Forfeited shares, however, may be reissued at a discount not exceeding the amount forfeited on them." },
        { q: "What is the maximum discount at which forfeited shares can be reissued? Explain with an example.", a: "The discount on reissue cannot exceed the **amount forfeited** on those shares (the amount credited to Share Forfeiture A/c for them). Example: if ₹6 per share was forfeited on a ₹10 share, it can be reissued as fully paid for not less than ₹4 per share, i.e. a maximum discount of **₹6 per share**." }
      ],
      quiz: [
        {
          q: "Securities premium cannot be used for:",
          options: ["Issuing fully paid bonus shares", "Writing off preliminary expenses", "Paying dividend to shareholders", "Buy-back of the company's own shares"],
          answer: 2,
          explain: "Section 52 lists the permitted uses; **paying dividend** is not one of them."
        },
        {
          q: "As per Table F, interest on calls in advance may be paid at a maximum rate of:",
          options: ["12% p.a.", "6% p.a.", "10% p.a.", "15% p.a."],
          answer: 0,
          explain: "Table F allows interest up to **12% p.a.** on calls in advance and up to 10% p.a. on calls in arrears."
        },
        {
          q: "100 equity shares of ₹10 each, on which ₹7 per share was called up and ₹4 per share paid, are forfeited. The amount credited to Share Forfeiture A/c is:",
          options: ["₹700", "₹300", "₹1,000", "₹400"],
          answer: 3,
          explain: "The forfeiture account gets the amount actually paid: 100 × ₹4 = **₹400**. Share Capital is debited ₹700 and ₹300 is the unpaid call."
        },
        {
          q: "50 forfeited shares of ₹10 each (₹6 per share forfeited) are reissued at ₹7 per share fully paid. The amount transferred to capital reserve is:",
          options: ["₹300", "₹150", "₹350", "₹200"],
          answer: 1,
          explain: "Forfeited ₹300; discount on reissue = 50 × ₹3 = ₹150; capital reserve = 300 − 150 = **₹150**."
        },
        {
          q: "Under Section 53 of the Companies Act, 2013, shares cannot be issued at a discount except:",
          options: ["Preference shares", "Bonus shares", "Sweat equity shares", "Right shares"],
          answer: 2,
          explain: "Only **sweat equity shares** (Section 54) may be issued at a discount."
        },
        {
          q: "Calls in arrears are shown in a company's balance sheet:",
          options: ["As a current asset", "As a deduction from subscribed capital in the notes to share capital", "Under other current liabilities", "As an addition to reserves and surplus"],
          answer: 1,
          explain: "Unpaid calls reduce paid-up capital, so they are **deducted from subscribed (not fully paid) capital**."
        }
      ]
    },

    // ───────────────────────────── 8. Issue and Redemption of Debentures ─────────────────────────────
    {
      id: "issue-and-redemption-of-debentures",
      title: "Issue and Redemption of Debentures",
      section: "Company Accounts",
      summary: "Meaning and types of debentures, issue at par, premium and discount, issue to vendors, terms of redemption and loss on issue, debentures as collateral security, interest on debentures, and an outline of redemption.",
      notes: [
        {
          heading: "Meaning of debentures",
          points: [
            "A **debenture** is a written instrument acknowledging a debt, issued by a company with a promise to pay interest at a fixed rate and to repay the principal on a given date.",
            "Debenture-holders are **creditors** of the company: they get interest whether or not there is a profit, and they have **no voting rights**.",
            "Shares represent **ownership**; debentures represent a **loan**. Interest on debentures is a **charge** against profit, while dividend is an appropriation of profit.",
            "Debentures **can** be issued at a discount, since Section 53 applies only to shares."
          ]
        },
        {
          heading: "Types of debentures",
          points: [
            "**Secured** (backed by a charge on assets) and **unsecured** debentures.",
            "**Redeemable** (repaid after a fixed period) and **irredeemable or perpetual** debentures.",
            "**Convertible** (fully or partly into shares) and **non-convertible** debentures.",
            "**Registered** (holders' names recorded with the company) and **bearer** (transferable by delivery) debentures.",
            "**Specific coupon rate** debentures carry a stated interest rate; **zero coupon rate** debentures carry no interest and are issued at a large discount."
          ]
        },
        {
          heading: "Issue of debentures and loss on issue",
          points: [
            "Issue at **par**, at a **premium** (premium credited to Securities Premium A/c) or at a **discount** (debited to Discount on Issue of Debentures A/c).",
            "If debentures are **redeemable at a premium**, the premium payable later is credited now to **Premium on Redemption of Debentures A/c** (a liability) and debited to **Loss on Issue of Debentures A/c**.",
            "Discount or loss on issue is written off **first from Securities Premium** and the balance from the **Statement of Profit and Loss** (as finance cost), in the year in which the debentures are allotted.",
            "Over-subscription is handled as for shares: refund to some applicants or pro-rata allotment."
          ]
        },
        {
          heading: "Debentures to vendors and as collateral security",
          points: [
            "Debentures may be issued to a **vendor** for assets bought: Sundry Assets A/c Dr. → To Vendor A/c; then Vendor A/c Dr. → To Debentures A/c (and To Securities Premium A/c if at a premium).",
            "Number of debentures = Amount payable to the vendor ÷ Issue price of one debenture.",
            "Debentures issued as **collateral security** are additional security given to a lender; the lender can use them only if the loan is not repaid.",
            "Collateral: either **no entry** (a note is given under the loan), or Debenture Suspense A/c Dr. → To Debentures A/c, with the suspense account deducted from debentures in the balance sheet."
          ]
        },
        {
          heading: "Interest on debentures",
          points: [
            "Interest is calculated on the **nominal (face) value** at the fixed coupon rate, even if the debentures were issued at a discount or premium.",
            "Interest due: Debenture Interest A/c Dr. → To Debentureholders A/c.",
            "Payment: Debentureholders A/c Dr. → To Bank A/c.",
            "Transfer at year-end: Statement of Profit and Loss Dr. → To Debenture Interest A/c (shown as finance cost)."
          ]
        },
        {
          heading: "Redemption (outline)",
          points: [
            "**Redemption** means repaying the debenture amount to the holders, at par or at a premium as per the terms of issue.",
            "Methods: payment in a **lump sum** at the end of the term, in **instalments** (often chosen by draw of lots), by **purchase in the open market**, or by **conversion** into shares or new debentures.",
            "On redemption: Debentures A/c Dr. (and Premium on Redemption of Debentures A/c Dr.) → To Debentureholders A/c; then Debentureholders A/c Dr. → To Bank A/c.",
            "The Companies Act, 2013 requires certain companies to create a **Debenture Redemption Reserve** out of profits before redeeming debentures."
          ]
        }
      ],
      formulas: [
        "Issue at par: Bank A/c Dr. → To Debenture Application and Allotment A/c;  then Debenture Application and Allotment A/c Dr. → To X% Debentures A/c",
        "Issue at a premium, redeemable at par: Debenture Application and Allotment A/c Dr. → To X% Debentures A/c, To Securities Premium A/c",
        "Issue at a discount, redeemable at par: Debenture Application and Allotment A/c Dr., Discount on Issue of Debentures A/c Dr. → To X% Debentures A/c",
        "Issue at par (or discount), redeemable at a premium: Debenture Application and Allotment A/c Dr., Loss on Issue of Debentures A/c Dr. → To X% Debentures A/c, To Premium on Redemption of Debentures A/c",
        "Loss on issue = Discount on issue + Premium payable on redemption",
        "Issue to vendor: Vendor A/c Dr. → To X% Debentures A/c (and To Securities Premium A/c)",
        "Number of debentures to vendor = Purchase consideration ÷ Issue price per debenture",
        "Writing off loss: Securities Premium A/c Dr., Statement of Profit and Loss Dr. → To Loss (or Discount) on Issue of Debentures A/c",
        "Annual interest = Face value of debentures × Rate ÷ 100",
        "Collateral security (second method): Debenture Suspense A/c Dr. → To X% Debentures A/c"
      ],
      terms: [
        { term: "Debenture", meaning: "A written acknowledgement of a debt by a company, carrying a fixed rate of interest and repayable on a stated date." },
        { term: "Secured debenture", meaning: "A debenture backed by a charge on the company's assets, so holders can recover their money from those assets." },
        { term: "Convertible debenture", meaning: "A debenture that can be converted, fully or partly, into equity shares after a stated period." },
        { term: "Collateral security", meaning: "Additional security given to a lender besides the main security; debentures may be issued for this purpose." },
        { term: "Loss on issue of debentures", meaning: "Discount on issue plus premium payable on redemption; written off from securities premium and then from the Statement of Profit and Loss." },
        { term: "Redemption of debentures", meaning: "Repayment of the amount of debentures to the debenture-holders, at par or at a premium." }
      ],
      examples: [
        {
          q: "X Ltd issued 5,000, 9% debentures of ₹100 each at a discount of 5%, redeemable at a premium of 10% after 5 years. The whole amount was payable on application. Pass the entries for issue, and find the loss on issue and the annual interest.",
          steps: [
            "Amount received = 5,000 × ₹95 = ₹4,75,000.",
            "Face value = 5,000 × ₹100 = ₹5,00,000; premium payable on redemption = 5,000 × ₹10 = ₹50,000.",
            "Loss on issue = discount ₹25,000 + premium on redemption ₹50,000 = ₹75,000.",
            "Bank A/c Dr. ₹4,75,000 → To Debenture Application and Allotment A/c ₹4,75,000.",
            "Debenture Application and Allotment A/c Dr. ₹4,75,000, Loss on Issue of Debentures A/c Dr. ₹75,000 → To 9% Debentures A/c ₹5,00,000, To Premium on Redemption of Debentures A/c ₹50,000.",
            "Annual interest = 9% of ₹5,00,000 (face value) = ₹45,000."
          ],
          answer: "Loss on issue ₹75,000; annual interest ₹45,000"
        },
        {
          q: "Y Ltd bought machinery worth ₹4,40,000 from Z Ltd and paid by issuing 10% debentures of ₹100 each at a premium of 10%. Find the number of debentures issued and pass the entries.",
          steps: [
            "Machinery A/c Dr. ₹4,40,000 → To Z Ltd ₹4,40,000.",
            "Issue price of one debenture = 100 + 10 = ₹110.",
            "Number of debentures = 4,40,000 ÷ 110 = 4,000.",
            "Z Ltd Dr. ₹4,40,000 → To 10% Debentures A/c ₹4,00,000 (4,000 × ₹100), To Securities Premium A/c ₹40,000 (4,000 × ₹10)."
          ],
          answer: "4,000 debentures; securities premium ₹40,000"
        }
      ],
      qa: [
        { q: "Distinguish between a share and a debenture (any three points).", a: "(1) **Status**: a shareholder is an owner; a debenture-holder is a creditor. (2) **Return**: shareholders get dividend, an appropriation paid only out of profits; debenture-holders get fixed interest, a charge payable even if there is no profit. (3) **Voting rights**: equity shareholders have them; debenture-holders do not. (4) **Security**: shares are not secured; debentures are usually secured by a charge on assets. (5) **Issue at discount**: shares cannot be issued at a discount (except sweat equity); debentures can." },
        { q: "What is meant by issue of debentures as collateral security? How is it shown in the balance sheet?", a: "Debentures issued as **collateral security** are given to a lender as **additional security** for a loan, besides the main security. The lender can sell or keep them only if the company fails to repay the loan; otherwise they are returned. In the balance sheet, either a note is given below the loan stating that it is secured by such debentures, or, if an entry is made, the Debenture Suspense A/c is shown as a deduction from the debentures under long-term borrowings." },
        { q: "How is the loss on issue of debentures written off?", a: "Loss on issue arises when debentures are issued at a discount and/or are redeemable at a premium. It is written off **first from Securities Premium** (if any balance is available), and the remaining amount from the **Statement of Profit and Loss** as a finance cost, in the year in which the debentures are allotted: Securities Premium A/c Dr., Statement of Profit and Loss Dr. → To Loss on Issue of Debentures A/c." }
      ],
      quiz: [
        {
          q: "Debenture-holders of a company are its:",
          options: ["Owners", "Creditors", "Members", "Partners"],
          answer: 1,
          explain: "A debenture is a loan to the company, so debenture-holders are **creditors** and have no ownership or voting rights."
        },
        {
          q: "1,000 debentures of ₹100 each are issued at ₹95 and are redeemable at ₹110. The loss on issue of debentures is:",
          options: ["₹5,000", "₹10,000", "₹15,000", "₹1,500"],
          answer: 2,
          explain: "Discount 1,000 × ₹5 = ₹5,000 + premium on redemption 1,000 × ₹10 = ₹10,000 = **₹15,000**."
        },
        {
          q: "Premium payable on redemption of debentures is credited at the time of issue to:",
          options: ["Securities Premium A/c", "Statement of Profit and Loss", "Capital Reserve A/c", "Premium on Redemption of Debentures A/c"],
          answer: 3,
          explain: "It is a liability payable later, credited to **Premium on Redemption of Debentures A/c**, with Loss on Issue of Debentures A/c debited."
        },
        {
          q: "Assets worth ₹3,30,000 are bought and paid for by issuing debentures of ₹100 each at a 10% premium. The number of debentures issued is:",
          options: ["3,300", "3,000", "3,630", "2,970"],
          answer: 1,
          explain: "Issue price = ₹110, so 3,30,000 ÷ 110 = **3,000** debentures."
        },
        {
          q: "Interest on debentures is calculated on their:",
          options: ["Nominal (face) value", "Issue price", "Market value", "Redemption value"],
          answer: 0,
          explain: "The coupon rate always applies to the **face value**, whatever the issue or redemption price."
        },
        {
          q: "Loss on issue of debentures is first written off from:",
          options: ["Securities Premium", "General Reserve", "Capital Reserve", "Debenture Redemption Reserve"],
          answer: 0,
          explain: "Section 52 allows **Securities Premium** to be used for this; any balance goes to the Statement of Profit and Loss."
        }
      ]
    },

    // ───────────────────────────── 9. Financial Statements of a Company ─────────────────────────────
    {
      id: "financial-statements-of-a-company",
      title: "Financial Statements of a Company",
      section: "Analysis of Financial Statements",
      summary: "Meaning, nature, objectives and limitations of financial statements, and the format of a company's balance sheet and statement of profit and loss as per Schedule III of the Companies Act, 2013.",
      notes: [
        {
          heading: "Meaning and nature",
          points: [
            "Financial statements are the end products of accounting, giving information about a company's **profitability** and **financial position**.",
            "Under Section 2(40) of the Companies Act, 2013 they include the **balance sheet**, **statement of profit and loss**, **cash flow statement**, statement of changes in equity (if applicable) and explanatory notes.",
            "Nature: they are based on **recorded facts**, **accounting conventions**, **postulates** and **personal judgements** (e.g. choice of depreciation method).",
            "Section 129 requires them to give a **true and fair view** and to be in the form given in **Schedule III**."
          ]
        },
        {
          heading: "Objectives, uses and limitations",
          points: [
            "Objectives: provide information about economic resources and obligations, profitability, cash flows and the performance of management.",
            "Uses: investors, lenders, creditors, government and employees use them to judge earning capacity and solvency.",
            "Limitations: they show **historical** data, ignore **price-level changes** and **qualitative** factors (such as staff skill), and are affected by personal judgements and window dressing."
          ]
        },
        {
          heading: "Balance sheet: equity and liabilities",
          points: [
            "**Shareholders' funds**: share capital; reserves and surplus (securities premium, general reserve, capital reserve, balance in statement of profit and loss); money received against share warrants.",
            "**Share application money pending allotment** is shown as a separate heading.",
            "**Non-current liabilities**: long-term borrowings (debentures, long-term loans), deferred tax liabilities (net), other long-term liabilities, long-term provisions (e.g. for employee benefits).",
            "**Current liabilities**: short-term borrowings (bank overdraft, cash credit), trade payables (creditors and bills payable), other current liabilities (calls in advance, interest accrued, unpaid dividend), short-term provisions (provision for tax)."
          ]
        },
        {
          heading: "Balance sheet: assets",
          points: [
            "**Non-current assets**: property, plant and equipment and intangible assets (earlier called fixed assets) – tangible assets such as land, building and machinery; intangible assets such as goodwill, patents and trademarks; capital work-in-progress; intangible assets under development.",
            "Other non-current assets: non-current investments, deferred tax assets (net), long-term loans and advances, other non-current assets.",
            "**Current assets**: current investments; **inventories** (raw materials, work-in-progress, finished goods, stores and spares, loose tools); trade receivables (debtors and bills receivable); cash and cash equivalents; short-term loans and advances; other current assets.",
            "An item is **current** if it is expected to be realised or settled within **12 months** of the balance sheet date or within the company's **operating cycle**."
          ]
        },
        {
          heading: "Statement of profit and loss",
          points: [
            "**Revenue from operations**: sale of products and services and other operating revenue. **Other income**: interest, dividend, profit on sale of assets, etc.",
            "**Expenses**: cost of materials consumed, purchases of stock-in-trade, changes in inventories, employee benefits expense, finance costs, depreciation and amortisation expense, and other expenses.",
            "Profit before tax = Total income − Total expenses; profit for the period = Profit before tax − Tax expense.",
            "Details of each item are given in **notes to accounts**, which form part of the financial statements."
          ]
        }
      ],
      formulas: [
        "Balance sheet: Total of Equity and Liabilities = Total of Assets",
        "Shareholders' funds = Share capital + Reserves and surplus (+ Money received against share warrants)",
        "Total income = Revenue from operations + Other income",
        "Profit before tax = Total income − Total expenses",
        "Profit for the period = Profit before tax − Tax expense",
        "Current item: realised or settled within 12 months of the balance sheet date, or within the operating cycle"
      ],
      terms: [
        { term: "Schedule III", meaning: "The part of the Companies Act, 2013 that prescribes the format of a company's balance sheet and statement of profit and loss." },
        { term: "Shareholders' funds", meaning: "Share capital plus reserves and surplus (and money received against share warrants): the owners' claim on the company." },
        { term: "Trade receivables", meaning: "Amounts due from customers for goods sold or services given in the normal course of business: debtors and bills receivable." },
        { term: "Trade payables", meaning: "Amounts due to suppliers for goods or services bought in the normal course of business: creditors and bills payable." },
        { term: "Cash equivalents", meaning: "Short-term, highly liquid investments readily convertible into known amounts of cash, usually maturing within 3 months." },
        { term: "Operating cycle", meaning: "The time between acquiring assets for processing and realising them in cash; taken as 12 months if it cannot be identified." }
      ],
      examples: [
        {
          q: "Find the profit before tax and profit for the year of Ankit Ltd: revenue from operations ₹20,00,000; other income ₹1,00,000; cost of materials consumed ₹9,00,000; employee benefits expense ₹3,00,000; finance costs ₹1,20,000; depreciation ₹80,000; other expenses ₹2,00,000; tax rate 30%.",
          steps: [
            "Total income = 20,00,000 + 1,00,000 = ₹21,00,000.",
            "Total expenses = 9,00,000 + 3,00,000 + 1,20,000 + 80,000 + 2,00,000 = ₹16,00,000.",
            "Profit before tax = 21,00,000 − 16,00,000 = ₹5,00,000.",
            "Tax at 30% = ₹1,50,000.",
            "Profit for the year = 5,00,000 − 1,50,000 = ₹3,50,000."
          ],
          answer: "Profit before tax ₹5,00,000; profit for the year ₹3,50,000"
        },
        {
          q: "Under which major heading and sub-heading of a company's balance sheet will these be shown: (i) calls in advance (ii) loose tools (iii) bank overdraft (iv) 9% debentures (v) provision for tax (vi) goodwill?",
          steps: [
            "(i) Calls in advance → Current liabilities: Other current liabilities.",
            "(ii) Loose tools → Current assets: Inventories.",
            "(iii) Bank overdraft → Current liabilities: Short-term borrowings.",
            "(iv) 9% Debentures → Non-current liabilities: Long-term borrowings.",
            "(v) Provision for tax → Current liabilities: Short-term provisions.",
            "(vi) Goodwill → Non-current assets: Property, plant and equipment and intangible assets – Intangible assets."
          ],
          answer: "Other current liabilities; Inventories; Short-term borrowings; Long-term borrowings; Short-term provisions; Intangible assets"
        }
      ],
      qa: [
        { q: "List the major headings and sub-headings on the Equity and Liabilities side of a company's balance sheet as per Schedule III.", a: "(1) **Shareholders' funds**: share capital; reserves and surplus; money received against share warrants. (2) **Share application money pending allotment**. (3) **Non-current liabilities**: long-term borrowings; deferred tax liabilities (net); other long-term liabilities; long-term provisions. (4) **Current liabilities**: short-term borrowings; trade payables; other current liabilities; short-term provisions." },
        { q: "State any three limitations of financial statements.", a: "(1) **Historical**: they record past transactions and do not show the current or future position. (2) **Ignore price-level changes**: assets are shown at cost, not at today's prices. (3) **Ignore qualitative information**: skill of staff, reputation or industrial relations are not shown. (4) **Personal judgement**: figures depend on choices such as the depreciation method or inventory valuation, so they are not entirely objective." },
        { q: "Under which heading and sub-heading are these shown: (a) securities premium (b) unpaid dividend (c) stores and spares?", a: "(a) **Shareholders' funds – Reserves and surplus**. (b) **Current liabilities – Other current liabilities**. (c) **Current assets – Inventories**." }
      ],
      quiz: [
        {
          q: "Securities premium is shown in a company's balance sheet under:",
          options: ["Share capital", "Reserves and surplus", "Other current liabilities", "Non-current investments"],
          answer: 1,
          explain: "Securities premium is part of **reserves and surplus** under shareholders' funds."
        },
        {
          q: "Calls in advance are shown under:",
          options: ["Share capital", "Reserves and surplus", "Short-term provisions", "Other current liabilities"],
          answer: 3,
          explain: "Money received before it is called is owed back or adjusted later: **other current liabilities**."
        },
        {
          q: "Bank overdraft is shown under:",
          options: ["Short-term borrowings", "Trade payables", "Long-term borrowings", "Cash and cash equivalents"],
          answer: 0,
          explain: "An overdraft is repayable on demand: **short-term borrowings** under current liabilities."
        },
        {
          q: "Loose tools are shown under the sub-heading:",
          options: ["Property, plant and equipment", "Inventories", "Other current assets", "Intangible assets"],
          answer: 1,
          explain: "Schedule III includes loose tools, along with stores and spares, under **inventories**."
        },
        {
          q: "In the statement of profit and loss of a manufacturing company, interest received on investments is shown as:",
          options: ["Revenue from operations", "Other expenses", "Other income", "Finance costs"],
          answer: 2,
          explain: "It does not arise from the main operations, so it is **other income**."
        },
        {
          q: "Bills payable are shown under:",
          options: ["Short-term borrowings", "Other current liabilities", "Trade payables", "Long-term provisions"],
          answer: 2,
          explain: "Bills payable arise from purchases of goods, so they are **trade payables** along with creditors."
        }
      ]
    },

    // ───────────────────────────── 10. Analysis of Financial Statements ─────────────────────────────
    {
      id: "analysis-of-financial-statements",
      title: "Analysis of Financial Statements",
      section: "Analysis of Financial Statements",
      summary: "Meaning, significance, objectives and limitations of analysing financial statements, and its tools, with comparative and common-size statements in detail.",
      notes: [
        {
          heading: "Meaning and significance",
          points: [
            "**Analysis of financial statements** is the systematic process of identifying the financial strengths and weaknesses of a firm by establishing relationships between items of the balance sheet and the statement of profit and loss.",
            "It turns raw accounting data into useful information for decisions.",
            "**Management** uses it for planning and control; **investors** for profitability and growth; **lenders and creditors** for solvency; **employees** for job security and wages; **government** for policy and tax."
          ]
        },
        {
          heading: "Objectives",
          points: [
            "Assess the **current profitability** and **operational efficiency** of the firm as a whole and of its departments.",
            "Find the **short-term and long-term solvency** of the firm.",
            "Know the relative importance of different components of the financial position.",
            "Make **inter-firm** (with other firms) and **intra-firm** (over years) comparisons.",
            "Judge the firm's **future prospects** and its ability to repay debts."
          ]
        },
        {
          heading: "Tools of analysis",
          points: [
            "**Comparative statements**: figures for two or more years side by side, with absolute and percentage changes.",
            "**Common-size statements**: each item expressed as a percentage of a common base.",
            "**Ratio analysis**: relationships between related items, e.g. current ratio, net profit ratio.",
            "**Cash flow analysis**: actual movement of cash into and out of the firm under operating, investing and financing activities."
          ]
        },
        {
          heading: "Types of analysis",
          points: [
            "**Horizontal (dynamic) analysis** compares figures over a number of years; comparative statements are an example.",
            "**Vertical (static) analysis** studies relationships among items of a single year; common-size statements are an example.",
            "**External analysis** is done by outsiders (investors, lenders) using published statements; **internal analysis** is done by management, who can see internal records."
          ]
        },
        {
          heading: "Comparative and common-size statements",
          points: [
            "Comparative statement columns: previous year, current year, absolute change, percentage change.",
            "Percentage change = Absolute change ÷ Previous year figure × 100.",
            "Common-size statement of profit and loss: each item as a percentage of **revenue from operations**.",
            "Common-size balance sheet: each item as a percentage of **total assets** (= total of equity and liabilities).",
            "Common-size statements make firms of different sizes comparable."
          ]
        },
        {
          heading: "Limitations",
          points: [
            "It is based on **historical** data and ignores **price-level changes**.",
            "It ignores **qualitative** factors such as the quality of management and staff relations.",
            "Results can be distorted by **window dressing** (showing a better position than the real one) and by personal judgement.",
            "Firms may follow **different accounting policies**, which makes comparison difficult.",
            "Analysis is only a tool; its results need careful interpretation."
          ]
        }
      ],
      formulas: [
        "Absolute change = Current year amount − Previous year amount",
        "Percentage change = Absolute change ÷ Previous year amount × 100",
        "Common-size statement of profit and loss: Item ÷ Revenue from operations × 100",
        "Common-size balance sheet: Item ÷ Total assets (or Total equity and liabilities) × 100",
        "Horizontal analysis → across years (comparative statements);  Vertical analysis → within one year (common-size statements)"
      ],
      terms: [
        { term: "Financial analysis", meaning: "Studying the relationships among items of financial statements to judge a firm's profitability, solvency and efficiency." },
        { term: "Comparative statement", meaning: "A statement showing figures of two or more periods side by side, with absolute and percentage changes." },
        { term: "Common-size statement", meaning: "A statement in which each item is shown as a percentage of a common base, such as revenue from operations or total assets." },
        { term: "Horizontal analysis", meaning: "Analysis of figures over a number of years to study trends; also called dynamic analysis." },
        { term: "Vertical analysis", meaning: "Analysis of the relationships among items of one year's statements; also called static analysis." },
        { term: "Window dressing", meaning: "Presenting financial statements so that the position looks better than it really is." }
      ],
      examples: [
        {
          q: "Revenue from operations was ₹20,00,000 in 2023-24 and ₹25,00,000 in 2024-25; total expenses were ₹15,00,000 and ₹18,00,000. Prepare comparative figures for revenue, expenses and profit before tax.",
          steps: [
            "Revenue: absolute change = 25,00,000 − 20,00,000 = ₹5,00,000; percentage change = 5,00,000 ÷ 20,00,000 × 100 = 25%.",
            "Expenses: change = 18,00,000 − 15,00,000 = ₹3,00,000; percentage change = 3,00,000 ÷ 15,00,000 × 100 = 20%.",
            "Profit before tax: 2023-24 = ₹5,00,000; 2024-25 = ₹7,00,000.",
            "Profit change = ₹2,00,000; percentage change = 2,00,000 ÷ 5,00,000 × 100 = 40%.",
            "Profit grew faster than revenue because expenses grew more slowly (20%) than revenue (25%)."
          ],
          answer: "Revenue +25%, expenses +20%, profit before tax +40%"
        },
        {
          q: "Revenue from operations ₹8,00,000; cost of materials consumed ₹4,80,000; employee benefits expense ₹80,000; other expenses ₹40,000. Prepare a common-size statement of profit and loss.",
          steps: [
            "Base: revenue from operations ₹8,00,000 = 100%.",
            "Cost of materials consumed = 4,80,000 ÷ 8,00,000 × 100 = 60%.",
            "Employee benefits = 80,000 ÷ 8,00,000 × 100 = 10%; other expenses = 40,000 ÷ 8,00,000 × 100 = 5%.",
            "Total expenses = ₹6,00,000 = 75%.",
            "Profit before tax = ₹2,00,000 = 25% of revenue."
          ],
          answer: "Materials 60%, employee benefits 10%, other expenses 5%, profit before tax 25%"
        }
      ],
      qa: [
        { q: "State any three objectives of analysis of financial statements.", a: "(1) To assess the **current profitability and operational efficiency** of the firm. (2) To find the **short-term and long-term solvency** of the firm. (3) To make **inter-firm and intra-firm comparisons**. (4) To judge the firm's **future prospects** and its ability to repay its debts." },
        { q: "Distinguish between horizontal and vertical analysis.", a: "(1) **Period**: horizontal analysis compares figures of **several years**; vertical analysis studies items of **one year**. (2) **Nature**: horizontal analysis is dynamic; vertical analysis is static. (3) **Purpose**: horizontal analysis shows trends and growth; vertical analysis shows the proportion of each item in the total. (4) **Tool**: comparative statements for horizontal analysis; common-size statements for vertical analysis." },
        { q: "Give any three limitations of financial analysis.", a: "(1) It is based on **historical** figures and ignores **price-level changes**. (2) It ignores **qualitative** aspects such as the quality of management. (3) It can be misled by **window dressing**. (4) **Different accounting policies** used by firms make comparison difficult. (5) The figures themselves involve personal judgement." }
      ],
      quiz: [
        {
          q: "Comparative statements are an example of:",
          options: ["Vertical analysis", "Horizontal analysis", "Ratio analysis", "Cash flow analysis"],
          answer: 1,
          explain: "They compare figures across years: **horizontal** (dynamic) analysis."
        },
        {
          q: "In a common-size statement of profit and loss, each item is expressed as a percentage of:",
          options: ["Total expenses", "Net profit", "Revenue from operations", "Total assets"],
          answer: 2,
          explain: "The base for the statement of profit and loss is **revenue from operations**."
        },
        {
          q: "Revenue rose from ₹4,00,000 to ₹5,00,000. The percentage change is:",
          options: ["25%", "20%", "1%", "125%"],
          answer: 0,
          explain: "Change ₹1,00,000 ÷ previous year ₹4,00,000 × 100 = **25%**. Using the current year as base wrongly gives 20%."
        },
        {
          q: "In a common-size balance sheet, items are shown as a percentage of:",
          options: ["Revenue from operations", "Share capital", "Current assets", "Total assets"],
          answer: 3,
          explain: "The base is **total assets**, which equals the total of equity and liabilities."
        },
        {
          q: "Which of the following is a limitation of financial analysis?",
          options: ["It ignores price-level changes", "It helps compare the performance of firms", "It helps judge solvency", "It reveals trends over years"],
          answer: 0,
          explain: "Statements are at historical cost, so analysis **ignores price-level changes**. The other options are uses, not limitations."
        },
        {
          q: "Analysis of a firm's statements by its own management, who can access internal records, is:",
          options: ["External analysis", "Internal analysis", "Horizontal analysis", "Common-size analysis"],
          answer: 1,
          explain: "Analysis by insiders with access to detailed records is **internal analysis**."
        }
      ]
    },

    // ───────────────────────────── 11. Accounting Ratios ─────────────────────────────
    {
      id: "accounting-ratios",
      title: "Accounting Ratios",
      section: "Analysis of Financial Statements",
      summary: "Meaning, objectives, advantages and limitations of ratio analysis, and the calculation of liquidity, solvency, activity (turnover) and profitability ratios, with the effect of transactions on ratios.",
      notes: [
        {
          heading: "Ratio analysis",
          points: [
            "An **accounting ratio** is a mathematical relationship between two related items of the financial statements, expressed as a pure ratio, as 'times' or as a percentage.",
            "Objectives: judge **liquidity**, **solvency**, **efficiency (activity)** and **profitability**, and make inter-firm and intra-firm comparisons.",
            "Advantages: simplifies accounting data, helps planning and forecasting, locates weak spots, and helps compare performance.",
            "Limitations: based on historical data; ignores price-level changes and qualitative factors; affected by window dressing and different accounting policies; there is no universally accepted standard ratio."
          ]
        },
        {
          heading: "Liquidity ratios",
          points: [
            "**Current ratio** = Current assets ÷ Current liabilities; ideal **2:1**.",
            "**Quick (liquid) ratio** = Quick assets ÷ Current liabilities; ideal **1:1**.",
            "**Quick assets** = Current assets − Inventories − Prepaid expenses.",
            "A very high current ratio may mean idle funds; a very low one may mean difficulty in paying short-term debts."
          ]
        },
        {
          heading: "Solvency ratios",
          points: [
            "**Debt-equity ratio** = Long-term debts ÷ Shareholders' funds; up to **2:1** is generally considered safe.",
            "Long-term debts = long-term borrowings + long-term provisions; shareholders' funds (equity) = share capital + reserves and surplus.",
            "**Total assets to debt ratio** = Total assets ÷ Long-term debts (higher is safer for lenders).",
            "**Proprietary ratio** = Shareholders' funds ÷ Total assets.",
            "**Interest coverage ratio** = Net profit before interest and tax ÷ Interest on long-term debts."
          ]
        },
        {
          heading: "Activity (turnover) ratios",
          points: [
            "**Inventory turnover** = Cost of revenue from operations ÷ Average inventory; average inventory = (Opening + Closing inventory) ÷ 2.",
            "**Trade receivables turnover** = Net credit revenue from operations ÷ Average trade receivables (debtors + bills receivable, taken before provision for doubtful debts).",
            "**Trade payables turnover** = Net credit purchases ÷ Average trade payables (creditors + bills payable).",
            "**Working capital turnover** = Revenue from operations ÷ Working capital.",
            "Higher turnover ratios usually show more efficient use of resources."
          ]
        },
        {
          heading: "Profitability ratios",
          points: [
            "**Gross profit ratio** = Gross profit ÷ Net revenue from operations × 100.",
            "**Operating ratio** = (Cost of revenue from operations + Operating expenses) ÷ Net revenue from operations × 100.",
            "**Operating profit ratio** = Operating profit ÷ Net revenue from operations × 100 = 100 − Operating ratio.",
            "**Net profit ratio** = Net profit ÷ Net revenue from operations × 100.",
            "**Return on investment (ROI)** = Profit before interest and tax ÷ Capital employed × 100."
          ]
        },
        {
          heading: "Effect of transactions on ratios",
          points: [
            "When a ratio is **more than 1**, an **equal increase** in numerator and denominator **reduces** it, and an **equal decrease** **increases** it.",
            "When a ratio is **less than 1**, the effects are reversed.",
            "Example: current ratio 2:1 (₹2,00,000 ÷ ₹1,00,000). Paying a creditor ₹50,000 makes it 1,50,000 ÷ 50,000 = 3:1, an increase.",
            "A transaction that only changes one current asset into another (e.g. cash collected from debtors) does not change the current ratio; buying inventory for cash does not change the current ratio but reduces the quick ratio."
          ]
        }
      ],
      formulas: [
        "Current ratio = Current assets ÷ Current liabilities  (ideal 2:1)",
        "Quick ratio = Quick assets ÷ Current liabilities  (ideal 1:1);  Quick assets = Current assets − Inventories − Prepaid expenses",
        "Working capital = Current assets − Current liabilities",
        "Debt-equity ratio = Long-term debts ÷ Shareholders' funds",
        "Total assets to debt ratio = Total assets ÷ Long-term debts",
        "Proprietary ratio = Shareholders' funds ÷ Total assets",
        "Interest coverage ratio = Net profit before interest and tax ÷ Interest on long-term debts",
        "Cost of revenue from operations = Opening inventory + Net purchases + Direct expenses − Closing inventory = Revenue from operations − Gross profit",
        "Inventory turnover ratio = Cost of revenue from operations ÷ Average inventory",
        "Trade receivables turnover ratio = Net credit revenue from operations ÷ Average trade receivables",
        "Trade payables turnover ratio = Net credit purchases ÷ Average trade payables",
        "Working capital turnover ratio = Revenue from operations ÷ Working capital",
        "Fixed asset turnover ratio = Net revenue from operations ÷ Net fixed assets",
        "Gross profit ratio = Gross profit ÷ Net revenue from operations × 100",
        "Operating ratio = (Cost of revenue from operations + Operating expenses) ÷ Net revenue from operations × 100",
        "Operating profit ratio = 100 − Operating ratio",
        "Net profit ratio = Net profit ÷ Net revenue from operations × 100",
        "ROI = Profit before interest and tax ÷ Capital employed × 100;  Capital employed = Shareholders' funds + Non-current liabilities (= Non-current assets + Working capital)"
      ],
      terms: [
        { term: "Accounting ratio", meaning: "A mathematical relationship between two related items of the financial statements." },
        { term: "Liquidity", meaning: "A firm's ability to meet its **short-term** obligations as they fall due." },
        { term: "Solvency", meaning: "A firm's ability to meet its **long-term** obligations, including repayment of long-term debt and interest." },
        { term: "Quick assets", meaning: "Current assets that can be turned into cash quickly: current assets less inventories and prepaid expenses." },
        { term: "Working capital", meaning: "Excess of current assets over current liabilities." },
        { term: "Capital employed", meaning: "Long-term funds used in the business: shareholders' funds plus non-current liabilities (or non-current assets plus working capital)." }
      ],
      examples: [
        {
          q: "Current assets of a company are ₹4,00,000, including inventories ₹1,20,000 and prepaid expenses ₹10,000. Current liabilities are ₹2,00,000. Calculate the current ratio and the quick ratio.",
          steps: [
            "Current ratio = 4,00,000 ÷ 2,00,000 = 2:1.",
            "Quick assets = 4,00,000 − 1,20,000 − 10,000 = ₹2,70,000.",
            "Quick ratio = 2,70,000 ÷ 2,00,000 = 1.35:1.",
            "The firm meets the ideal current ratio, and its quick ratio is above 1:1."
          ],
          answer: "Current ratio 2:1; quick ratio 1.35:1"
        },
        {
          q: "Revenue from operations is ₹6,00,000 and gross profit is 25% of revenue from operations. Inventory at the beginning was ₹80,000 and at the end ₹1,20,000. Calculate the inventory turnover ratio.",
          steps: [
            "Gross profit = 25% of 6,00,000 = ₹1,50,000.",
            "Cost of revenue from operations = 6,00,000 − 1,50,000 = ₹4,50,000.",
            "Average inventory = (80,000 + 1,20,000) ÷ 2 = ₹1,00,000.",
            "Inventory turnover ratio = 4,50,000 ÷ 1,00,000 = 4.5 times."
          ],
          answer: "Inventory turnover ratio = 4.5 times"
        }
      ],
      qa: [
        { q: "Explain any three limitations of ratio analysis.", a: "(1) **Historical data**: ratios are based on past figures and may not show the future. (2) **Ignores price-level changes**: assets at cost make comparisons over time misleading. (3) **Ignores qualitative factors** such as management quality and staff morale. (4) **Window dressing** can make ratios look better than reality. (5) **Different accounting policies** (e.g. depreciation methods) make inter-firm comparison difficult. (6) There is **no standard ratio** that suits every industry." },
        { q: "Long-term borrowings ₹3,00,000; long-term provisions ₹1,00,000; share capital ₹4,00,000; reserves and surplus ₹1,00,000. Calculate the debt-equity ratio.", a: "Long-term debts = 3,00,000 + 1,00,000 = ₹4,00,000. Shareholders' funds = 4,00,000 + 1,00,000 = ₹5,00,000. Debt-equity ratio = 4,00,000 ÷ 5,00,000 = **0.8 : 1**, which is well within the safe limit of 2:1." },
        { q: "The current ratio of a firm is 2.5:1 and its working capital is ₹1,50,000. Find its current assets and current liabilities.", a: "Let current liabilities = x; then current assets = 2.5x. Working capital = 2.5x − x = 1.5x = ₹1,50,000, so x = ₹1,00,000. **Current liabilities = ₹1,00,000** and **current assets = ₹2,50,000**." }
      ],
      quiz: [
        {
          q: "Quick assets are current assets minus:",
          options: ["Inventories and prepaid expenses", "Trade receivables and cash", "Cash and bank balances", "Short-term investments"],
          answer: 0,
          explain: "Inventories and prepaid expenses cannot be quickly turned into cash, so they are excluded."
        },
        {
          q: "A firm's current ratio is 2:1. Payment of a trade payable in cash will:",
          options: ["Decrease the current ratio", "Not change the current ratio", "Increase the current ratio", "Make it exactly 1:1"],
          answer: 2,
          explain: "Both current assets and current liabilities fall by the same amount, and since the ratio is above 1, it **increases** (e.g. 2,00,000/1,00,000 becomes 1,50,000/50,000 = 3:1)."
        },
        {
          q: "Revenue from operations ₹5,00,000; gross profit ₹1,25,000; average inventory ₹75,000. The inventory turnover ratio is:",
          options: ["6.67 times", "5 times", "1.67 times", "4 times"],
          answer: 1,
          explain: "Cost of revenue = 5,00,000 − 1,25,000 = ₹3,75,000; 3,75,000 ÷ 75,000 = **5 times**. Using revenue instead of cost wrongly gives 6.67."
        },
        {
          q: "The operating ratio is 82%. The operating profit ratio is:",
          options: ["82%", "118%", "41%", "18%"],
          answer: 3,
          explain: "Operating profit ratio = 100 − Operating ratio = **18%**."
        },
        {
          q: "Which of the following is a solvency ratio?",
          options: ["Quick ratio", "Proprietary ratio", "Inventory turnover ratio", "Gross profit ratio"],
          answer: 1,
          explain: "The **proprietary ratio** shows how much of total assets is financed by owners, a measure of long-term solvency."
        },
        {
          q: "Profit before interest and tax ₹1,20,000; capital employed ₹8,00,000. Return on investment is:",
          options: ["12%", "6.67%", "8%", "15%"],
          answer: 3,
          explain: "ROI = 1,20,000 ÷ 8,00,000 × 100 = **15%**."
        }
      ]
    },

    // ───────────────────────────── 12. Cash Flow Statement ─────────────────────────────
    {
      id: "cash-flow-statement",
      title: "Cash Flow Statement",
      section: "Analysis of Financial Statements",
      summary: "Preparing a cash flow statement as per AS 3 (Revised): cash and cash equivalents, classification into operating, investing and financing activities, and cash flow from operating activities by the indirect method.",
      notes: [
        {
          heading: "Cash flow statement and cash equivalents",
          points: [
            "A **cash flow statement** shows the inflows and outflows of **cash and cash equivalents** during a period, classified into operating, investing and financing activities.",
            "It is prepared as per **AS 3 (Revised)** and forms part of a company's financial statements (one person, small and dormant companies are exempt).",
            "**Cash** = cash in hand + demand deposits with banks. **Cash equivalents** = short-term, highly liquid investments readily convertible into known amounts of cash with insignificant risk, usually maturing within **3 months** of acquisition.",
            "Movements between cash and cash equivalents (e.g. buying a 2-month treasury bill with cash) are **not** cash flows.",
            "Objectives: show the sources and uses of cash, help judge the firm's ability to generate cash and meet obligations, and help in cash planning."
          ]
        },
        {
          heading: "Operating activities",
          points: [
            "The **principal revenue-producing activities** of the enterprise, and other activities that are not investing or financing.",
            "Inflows: cash sales and collections from customers, royalties, fees and commission.",
            "Outflows: payments to suppliers and employees, and **income tax paid** (unless specifically linked to investing or financing).",
            "For a **financial enterprise** (bank, finance company), interest paid, interest received and dividend received are operating activities."
          ]
        },
        {
          heading: "Investing and financing activities",
          points: [
            "**Investing**: acquisition and disposal of long-term assets and investments not included in cash equivalents – purchase or sale of fixed assets, intangible assets and long-term investments, and (for non-financial companies) **interest and dividend received**.",
            "**Financing**: changes in the size and composition of owners' capital and borrowings – issue of shares and debentures, raising and repaying loans, buy-back of shares, redemption of preference shares or debentures, **interest paid** and **dividend paid**.",
            "Dividend paid is a financing activity for financial and non-financial companies alike.",
            "Non-cash transactions (e.g. buying a building by issuing shares) are not shown in the statement but are disclosed separately."
          ]
        },
        {
          heading: "Cash from operating activities: indirect method",
          points: [
            "Start with **net profit before tax** (and extraordinary items).",
            "**Add** non-cash and non-operating expenses: depreciation, goodwill or patents written off, loss on sale of fixed assets, interest paid (finance cost).",
            "**Deduct** non-operating incomes: profit on sale of fixed assets or investments, interest and dividend received.",
            "The result is **operating profit before working capital changes**.",
            "Then adjust working capital: increase in current assets (−), decrease in current assets (+), increase in current liabilities (+), decrease in current liabilities (−); finally deduct income tax paid."
          ]
        },
        {
          heading: "Useful workings",
          points: [
            "Net profit before tax = Increase in the balance of Statement of Profit and Loss (surplus) + transfers to reserves + dividends paid out of it + provision for tax made during the year.",
            "Tax paid = Opening provision for tax + Provision made during the year − Closing provision for tax.",
            "Purchase of a fixed asset (shown net of depreciation) = Closing balance + Depreciation + Book value of asset sold − Opening balance.",
            "Sale proceeds of an asset = Book value + Profit on sale (or − Loss on sale).",
            "Check: Net increase in cash and cash equivalents = Closing balance − Opening balance of cash and cash equivalents."
          ]
        }
      ],
      formulas: [
        "Cash and cash equivalents = Cash in hand + Demand deposits + Short-term investments maturing within 3 months of acquisition",
        "Operating profit before working capital changes = Net profit before tax + Non-cash and non-operating expenses − Non-operating incomes",
        "Working capital changes: Increase in current asset (−), Decrease (+);  Increase in current liability (+), Decrease (−)",
        "Cash generated from operations = Operating profit before working capital changes ± Working capital changes",
        "Net cash from operating activities = Cash generated from operations − Income tax paid",
        "Tax paid = Opening provision for tax + Provision made during the year − Closing provision",
        "Fixed asset purchased = Closing balance + Depreciation + Book value of asset sold − Opening balance",
        "Non-financial company: Interest/dividend received → Investing;  Interest/dividend paid → Financing",
        "Net increase in cash and cash equivalents = Operating + Investing + Financing cash flows = Closing − Opening cash and cash equivalents"
      ],
      terms: [
        { term: "Cash equivalents", meaning: "Short-term, highly liquid investments, readily convertible into known amounts of cash, usually maturing within 3 months of acquisition." },
        { term: "Operating activities", meaning: "The main revenue-producing activities of an enterprise, such as buying and selling goods and paying employees." },
        { term: "Investing activities", meaning: "Purchase and sale of long-term assets and investments that are not cash equivalents." },
        { term: "Financing activities", meaning: "Activities that change the size and composition of owners' capital and borrowings, such as issuing shares or repaying loans." },
        { term: "Indirect method", meaning: "Finding cash from operating activities by adjusting net profit for non-cash items, non-operating items and working capital changes." },
        { term: "Non-cash expense", meaning: "An expense that reduces profit without any cash outflow, such as depreciation or goodwill written off." }
      ],
      examples: [
        {
          q: "Net profit before tax is ₹2,00,000. Depreciation charged ₹40,000; profit on sale of machinery ₹10,000; increase in trade receivables ₹25,000; decrease in inventories ₹15,000; increase in trade payables ₹12,000; decrease in outstanding expenses ₹5,000; income tax paid ₹50,000. Calculate the cash flow from operating activities.",
          steps: [
            "Net profit before tax = ₹2,00,000.",
            "Add depreciation ₹40,000; less profit on sale of machinery ₹10,000: operating profit before working capital changes = ₹2,30,000.",
            "Working capital: − 25,000 (receivables up) + 15,000 (inventories down) + 12,000 (payables up) − 5,000 (outstanding expenses down) = − ₹3,000.",
            "Cash generated from operations = 2,30,000 − 3,000 = ₹2,27,000.",
            "Less income tax paid ₹50,000: net cash from operating activities = ₹1,77,000."
          ],
          answer: "Net cash from operating activities = ₹1,77,000"
        },
        {
          q: "Machinery (net of depreciation) was ₹5,00,000 at the beginning and ₹6,20,000 at the end of the year. Depreciation for the year was ₹60,000, and a machine of book value ₹40,000 was sold at a loss of ₹8,000. Interest received on long-term investments was ₹12,000. Find the machinery purchased and the cash flow from investing activities.",
          steps: [
            "Sale proceeds = Book value 40,000 − Loss 8,000 = ₹32,000.",
            "Purchases = Closing 6,20,000 + Depreciation 60,000 + Book value sold 40,000 − Opening 5,00,000 = ₹2,20,000.",
            "Check: 5,00,000 + 2,20,000 − 40,000 − 60,000 = ₹6,20,000. ✓",
            "Investing activities: purchase of machinery (−) ₹2,20,000; sale of machinery (+) ₹32,000; interest received (+) ₹12,000.",
            "Net cash used in investing activities = − 2,20,000 + 32,000 + 12,000 = (−) ₹1,76,000."
          ],
          answer: "Machinery purchased ₹2,20,000; net cash used in investing activities ₹1,76,000"
        }
      ],
      qa: [
        { q: "What are cash equivalents? Is a 6-month fixed deposit a cash equivalent?", a: "Cash equivalents are **short-term, highly liquid investments** that are readily convertible into known amounts of cash and carry an insignificant risk of change in value, e.g. treasury bills and short-term deposits maturing within **3 months from the date of acquisition**. A 6-month fixed deposit is **not** a cash equivalent, because its maturity is more than 3 months." },
        { q: "Classify into operating, investing or financing activities for a manufacturing company: (a) interest paid on debentures (b) dividend received (c) purchase of goodwill (d) cash paid to suppliers (e) buy-back of shares.", a: "(a) **Financing**. (b) **Investing**. (c) **Investing** (acquisition of a long-term asset). (d) **Operating**. (e) **Financing**." },
        { q: "Why is depreciation added back to net profit while calculating cash flow from operating activities?", a: "Depreciation is a **non-cash expense**: it is deducted in finding net profit, but no cash is paid out for it during the year. Since the indirect method starts from net profit, depreciation is **added back** to remove its effect and arrive at the actual cash generated from operations." }
      ],
      quiz: [
        {
          q: "For a manufacturing company, interest paid on debentures is a/an:",
          options: ["Operating activity", "Investing activity", "Financing activity", "Non-cash item"],
          answer: 2,
          explain: "Interest paid is a cost of borrowed funds, so for a non-financial company it is a **financing activity**."
        },
        {
          q: "Dividend received by a finance company is classified as a/an:",
          options: ["Operating activity", "Investing activity", "Financing activity", "Cash equivalent"],
          answer: 0,
          explain: "For a financial enterprise, receiving interest and dividends is part of its main business: an **operating activity**."
        },
        {
          q: "Which of the following is a cash equivalent?",
          options: ["Inventory", "Treasury bill maturing within 3 months of acquisition", "Trade receivables", "Long-term investment in equity shares"],
          answer: 1,
          explain: "A **short-term, highly liquid investment maturing within 3 months** of acquisition is a cash equivalent."
        },
        {
          q: "Under the indirect method, an increase in trade receivables is:",
          options: ["Added to operating profit", "Ignored", "Shown under investing activities", "Deducted from operating profit"],
          answer: 3,
          explain: "More credit sales were not collected in cash, so the increase is **deducted**."
        },
        {
          q: "While calculating cash flow from operating activities, profit on sale of a fixed asset is:",
          options: ["Added to net profit", "Deducted from net profit", "Ignored as it is a capital item", "Shown as a financing inflow"],
          answer: 1,
          explain: "It is a non-operating gain included in net profit, so it is **deducted**; the full sale proceeds appear under investing activities."
        },
        {
          q: "Cash from operating activities ₹1,50,000; cash used in investing activities ₹90,000; cash used in financing activities ₹20,000. The net increase in cash and cash equivalents is:",
          options: ["₹2,60,000", "₹80,000", "₹40,000", "₹60,000"],
          answer: 2,
          explain: "1,50,000 − 90,000 − 20,000 = **₹40,000**."
        }
      ]
    }
  ]
});
