// Class 12 Accountancy practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
(function () {
  const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation, objective id): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain, obj) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    return { q, options, answer: at, explain, level, obj };
  }
  // AR(level, assertion, reason, answer index, explanation, objective id): assertion-reason with fixed options.
  function AR(level, a, r, answer, explain, obj) {
    return { q: "Assertion (A): " + a + "\nReason (R): " + r, options: AR_OPTS, answer, explain, level, keepOrder: true, obj };
  }
  // W(marks, type, question, model answer, objective id)
  function W(marks, type, q, a, obj) {
    return { q, a, marks, type, obj };
  }
  StudyData.addPractice(12, "accountancy", {
  "goodwill-nature-and-valuation": {
    mcq: [
      M(1, "A shop in a central, easily reached place attracts more customers. Which factor affecting goodwill is this?", "Location", ["Nature of business", "Market situation", "Efficiency of management"], "A central or easily reached place attracts more customers, so profits and goodwill are higher.", "factors-need"),
      M(2, "Goodwill of a partnership firm must be valued on", "the retirement of a partner", ["the receipt of rent by the firm", "the purchase of stationery", "the payment of the audit fee"], "Goodwill is valued on a change in profit sharing ratio, admission, retirement or death of a partner, and also on dissolution or amalgamation.", "factors-need"),
      M(3, "Which situation is likely to give a firm HIGHER goodwill?", "Limited competition in its market", ["Frequent labour disputes", "A fall in demand for its products", "Loss of its long-term contracts"], "A monopoly or limited competition allows higher profits, and higher profits mean higher goodwill.", "factors-need")
    ],
    written: [
      W(4, "short", "Name four factors that affect the value of goodwill and three occasions on which goodwill of a partnership is valued.", "Factors: nature of business, location, efficiency of management, market situation, special advantages (any four). Occasions: change in profit sharing ratio, admission, retirement or death of a partner, dissolution and amalgamation (any three).", "factors-need")
    ]
  },
  "retirement-and-death-of-a-partner": {
    mcq: [
      M(1, "On the death of a partner, the amount due to him is paid to his", "legal representatives (executors)", ["creditors", "bank manager", "a successor partner chosen automatically"], "The retiring partner, or the executors of a deceased partner, must be paid the amount due.", "retirement-and-death-as-reconstitution"),
      M(2, "Which of these is NOT an adjustment needed on retirement of a partner?", "Issue of fresh equity shares", ["Calculation of gaining ratio", "Revaluation of assets and liabilities", "Valuation of goodwill"], "Gaining ratio, goodwill, revaluation, reserves, profit up to the date of retirement and settlement of the amount due are needed.", "retirement-and-death-as-reconstitution"),
      M(3, "A, B and C share profits 3 : 2 : 1. C retires and A and B decide to share future profits 4 : 3. The gaining ratio of A and B is", "3 : 4", ["4 : 3", "3 : 2", "1 : 1"], "A gains 4/7 − 3/6 = 1/14 = 3/42 and B gains 3/7 − 2/6 = 2/21 = 4/42, so the gaining ratio is 3 : 4.", "retirement-and-death-as-reconstitution")
    ],
    written: [
      W(4, "short", "A, B and C share profits 3 : 2 : 1. C retires and A and B will share future profits 3 : 2. Goodwill of the firm is valued at ₹90,000. Find the gaining ratio and pass the journal entry for C's share of goodwill.", "Gain: A = 3/5 − 3/6 = 1/10; B = 2/5 − 2/6 = 1/15. Gaining ratio = 3 : 2. C's share of goodwill = 90,000 × 1/6 = ₹15,000, borne by A 9,000 and B 6,000. Entry: A's Capital A/c Dr. 9,000; B's Capital A/c Dr. 6,000; To C's Capital A/c 15,000.", "retirement-and-death-as-reconstitution")
    ]
  },
  "accounting-for-share-capital": {
    mcq: [
      M(1, "Preference shareholders have a preferential right to", "dividend at a fixed rate", ["vote on every resolution", "dividend after equity holders", "appoint the auditors"], "They also have a preferential right to return of capital on winding up.", "kinds-of-shares"),
      M(2, "Equity shareholders get dividend", "only after preference shareholders", ["before the preference shareholders are paid", "at a fixed rate every year", "only when the company is wound up"], "Equity shares carry voting rights and get dividend after the preference shareholders have been paid.", "kinds-of-shares"),
      M(3, "Shares issued to employees or directors at a discount for providing know-how are called", "sweat equity shares", ["bonus shares", "rights shares", "redeemable preference shares"], "Sweat equity shares are issued at a discount or for consideration other than cash.", "kinds-of-shares")
    ],
    written: [
      W(3, "short", "Distinguish between preference shares and equity shares on any three bases.", "Dividend: preference shares get a fixed rate and are paid first; equity shares get dividend only after them. Return of capital: preference shareholders are repaid first on winding up. Voting rights: equity shares carry voting rights; preference shares generally do not.", "kinds-of-shares")
    ]
  },
  "issue-and-redemption-of-debentures": {
    mcq: [
      M(1, "Redemption of debentures means", "repaying the debenture amount", ["issuing more debentures", "cancelling the interest due", "transferring profit to reserves"], "Redemption can be at par or at a premium, as per the terms of issue.", "redemption-outline"),
      M(2, "Which of these is a method of redeeming debentures?", "Purchase in the open market", ["Forfeiture of debentures", "Making a call on debentures", "Allotment by lottery of new shares"], "Methods are lump sum, instalments (often by draw of lots), purchase in the open market and conversion.", "redemption-outline"),
      M(3, "On redemption at a premium, the entry is Debentures A/c Dr. and Premium on Redemption of Debentures A/c Dr. To", "Debentureholders A/c", ["Bank A/c", "Profit and Loss A/c", "Debenture Redemption Reserve"], "The amount due is first credited to the debentureholders, then paid by crediting the bank.", "redemption-outline")
    ],
    written: [
      W(4, "short", "A company redeems 1,000 debentures of ₹100 each at a premium of 10% in a lump sum. Pass the journal entries.", "Debentures A/c Dr. 1,00,000; Premium on Redemption of Debentures A/c Dr. 10,000; To Debentureholders A/c 1,10,000. Then Debentureholders A/c Dr. 1,10,000; To Bank A/c 1,10,000.", "redemption-outline")
    ]
  },
  "financial-statements-of-a-company": {
    mcq: [
      M(1, "The data shown in a company's financial statements is mainly", "historical", ["forecast of the next year", "a prediction of share prices", "an estimate of staff skill"], "Financial statements record what has already happened.", "objectives-uses-and-limitations"),
      M(2, "Which of these is a limitation of financial statements?", "They ignore price-level changes", ["They show future profits exactly", "They include the value of staff skill", "They are free from personal judgement"], "They show historical data, ignore price-level changes and qualitative factors, and are affected by personal judgement and window dressing.", "objectives-uses-and-limitations"),
      M(3, "Window dressing means", "showing a better position than the true one", ["painting the premises of the firm before an audit", "correcting an error in the books", "valuing all assets at market price"], "It makes the statements look better than the real position.", "objectives-uses-and-limitations")
    ],
    written: [
      W(4, "short", "State two objectives, one use and two limitations of the financial statements of a company.", "Objectives: to provide information about economic resources and obligations and about profitability, cash flows and management performance. Use: investors, lenders and others judge earning capacity and solvency. Limitations: they show historical data and ignore price-level changes and qualitative factors.", "objectives-uses-and-limitations")
    ]
  },
  "analysis-of-financial-statements": {
    mcq: [
      M(1, "Analysis of financial statements identifies the", "financial strengths and weaknesses of a firm", ["the names and addresses of all the firm's customers", "date of the next audit", "number of staff on leave"], "It does so by establishing relationships between items of the balance sheet and the statement of profit and loss.", "meaning-and-significance"),
      M(2, "Which user of financial statements analyses them mainly to judge solvency?", "Lenders and creditors", ["Employees of the firm", "Management of the firm", "Government as tax collector"], "Lenders and creditors want to know whether the firm can repay. Employees look at job security and wages.", "meaning-and-significance"),
      M(3, "Employees use the analysis of statements mainly for", "job security and wages", ["tax policy", "planning and control", "profitability and growth"], "Management uses it for planning and control, investors for profitability and growth and government for policy and tax.", "meaning-and-significance"),
      M(1, "Comparing a firm's results with those of other firms is called", "inter-firm comparison", ["intra-firm comparison", "vertical analysis", "cash flow analysis"], "Comparison with other firms is inter-firm; comparison over years is intra-firm.", "objectives"),
      M(2, "Which is an objective of analysing financial statements?", "To find short-term and long-term solvency", ["To record all the journal entries of the year", "To prepare the trial balance", "To audit the cash book"], "Other objectives are assessing profitability and efficiency, judging future prospects and ability to repay debts.", "objectives"),
      M(3, "Comparing the results of the same firm over several years is called", "intra-firm comparison", ["inter-firm comparison", "industry survey", "budget comparison"], "Intra-firm comparison looks at the firm's own performance over time.", "objectives")
    ],
    written: [
      W(3, "short", "Define analysis of financial statements and state its significance for management and for investors.", "Analysis of financial statements is the systematic process of identifying the financial strengths and weaknesses of a firm by establishing relationships between items of the balance sheet and the statement of profit and loss. Management uses it for planning and control; investors use it to judge profitability and growth.", "meaning-and-significance"),
      W(3, "short", "Distinguish between inter-firm comparison and intra-firm comparison with an example of each.", "Inter-firm comparison compares a firm with other firms, for example its profit ratio with that of a rival. Intra-firm comparison compares the same firm over different years, for example this year's profit ratio with last year's.", "objectives")
    ]
  },
  "accounting-ratios": {
    mcq: [
      M(1, "Which ratios judge a firm's ability to pay its short-term dues?", "Liquidity ratios", ["Profitability ratios", "Solvency ratios", "Activity ratios"], "Liquidity ratios deal with the short term; solvency ratios deal with the long term.", "ratio-analysis"),
      M(2, "Which of these is a limitation of ratio analysis?", "There is no universally accepted standard ratio", ["It always shows the true profit", "It fully includes the effect of price-level changes", "It cannot be affected by window dressing"], "Ratios are based on historical data, ignore price-level changes and qualitative factors, and depend on accounting policies.", "ratio-analysis"),
      M(3, "Current assets are ₹3,00,000, including inventories ₹90,000 and prepaid expenses ₹10,000. Current liabilities are ₹1,00,000. The quick ratio is", "2 : 1", ["3 : 1", "2.1 : 1", "1 : 1"], "Quick assets = 3,00,000 − 90,000 − 10,000 = ₹2,00,000. Quick ratio = 2,00,000 ÷ 1,00,000 = 2 : 1.", "ratio-analysis")
    ],
    written: [
      W(3, "short", "Define an accounting ratio. Revenue from operations is ₹8,00,000 and cost of revenue from operations is ₹6,00,000. Find the gross profit ratio.", "An accounting ratio is a mathematical relationship between two related items of the financial statements, expressed as a pure ratio, as 'times' or as a percentage. Gross profit = 8,00,000 − 6,00,000 = ₹2,00,000. Gross profit ratio = 2,00,000 ÷ 8,00,000 × 100 = 25%.", "ratio-analysis")
    ]
  },
  });
})();
