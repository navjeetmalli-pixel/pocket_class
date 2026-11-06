// Class 11 Accountancy practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "accountancy", {
  "theory-base-of-accounting": {
    mcq: [
      M(1, "GAAP are followed so that financial statements are", "uniform and comparable", ["free of income tax", "always show a profit", "kept secret from users"], "GAAP are rules and guidelines for recording and reporting transactions so that statements are uniform and comparable.", "generally-accepted-accounting-principles-gaap"),
      M(2, "GAAP are refined from time to time by", "professional accounting bodies", ["stock exchange dealers", "individual small shopkeepers in a town", "customers of the business"], "They evolved from experience, usage and the needs of users, and professional accounting bodies refine them.", "generally-accepted-accounting-principles-gaap"),
      M(3, "Which statement about GAAP is correct?", "Rules and guidelines for recording and reporting", ["Laws passed by a court separately for each firm", "Rules that change every year for the same firm", "Rules for collecting income tax from firms only"], "The words concepts, conventions, postulates and principles are often used for these rules.", "generally-accepted-accounting-principles-gaap")
    ],
    written: [
      W(3, "short", "What are GAAP? Why are they needed? Name two other words often used for these rules.", "GAAP (Generally Accepted Accounting Principles) are the rules and guidelines followed in recording and reporting transactions. They are needed so that financial statements are uniform and comparable. They are also called concepts, conventions, postulates or principles.", "generally-accepted-accounting-principles-gaap")
    ]
  },
  "bank-reconciliation-statement": {
    mcq: [
      M(1, "An error such as wrong totalling in the cash book must be corrected by", "the business", ["the bank", "the customer", "the Reserve Bank"], "The business corrects its own errors in the cash book and asks the bank to correct the bank's errors.", "causes-of-difference-errors"),
      M(2, "A cheque of another customer is wrongly debited in our pass book. This is corrected by", "asking the bank to correct it", ["correcting our own cash book entry", "ignoring it for the time being", "debiting our cash book again"], "This is an error by the bank, so the bank must correct its own records.", "causes-of-difference-errors"),
      M(3, "A cheque deposit of ₹5,400 was entered on the debit side of the cash book as ₹4,500. The cash book debit balance before correction was ₹30,000. The corrected balance is", "₹30,900", ["₹29,100", "₹30,000", "₹31,800"], "The debit side was short by 5,400 − 4,500 = ₹900, so the corrected balance is 30,000 + 900 = ₹30,900.", "causes-of-difference-errors")
    ],
    written: [
      W(3, "short", "The bank column of a cash book shows a debit balance of ₹18,000. It is found that the debit side was under-added by ₹1,000 and that a payment of ₹600 was entered as ₹900. Find the corrected cash book balance.", "Under-adding the debit side understated the balance, so add ₹1,000. The payment was entered ₹300 too high (900 − 600), so the balance was understated by ₹300 and we add ₹300. Corrected balance = 18,000 + 1,000 + 300 = ₹19,300 (debit).", "causes-of-difference-errors")
    ]
  },
  "depreciation-provisions-and-reserves": {
    mcq: [
      M(1, "Under the provision for depreciation method, the asset is shown in the balance sheet at", "its original cost", ["its book value at present", "its scrap value at the end", "its current market price"], "The asset stays at original cost and the accumulated depreciation is shown as a deduction from it.", "recording-depreciation-and-disposal"),
      M(2, "When depreciation is charged directly to the asset account, the asset appears at", "cost less depreciation to date", ["its original cost, with nothing deducted", "its scrap value after its life", "zero from the first year"], "The asset appears at its book value, which is cost less depreciation to date.", "recording-depreciation-and-disposal"),
      M(3, "A machine costing ₹60,000 has a provision for depreciation of ₹24,000. It is sold for ₹30,000. The result of the sale is", "a loss of ₹6,000", ["a profit of ₹6,000", "a loss of ₹24,000", "a profit of ₹30,000"], "Book value = 60,000 − 24,000 = ₹36,000. Sale price ₹30,000 is lower, so the loss is ₹6,000.", "recording-depreciation-and-disposal")
    ],
    written: [
      W(4, "short", "Pass the journal entries for depreciation of ₹5,000 (a) when it is charged to the asset account and (b) when a provision for depreciation account is used. Also give the entry to transfer depreciation to the profit and loss account.", "(a) Depreciation A/c Dr. ₹5,000 To Asset A/c ₹5,000. (b) Depreciation A/c Dr. ₹5,000 To Provision for Depreciation A/c ₹5,000. In both methods: Profit and Loss A/c Dr. ₹5,000 To Depreciation A/c ₹5,000.", "recording-depreciation-and-disposal")
    ]
  },
  "financial-statements-1": {
    mcq: [
      M(1, "The statement that shows the financial position of a business at the end of the year is the", "balance sheet", ["trial balance", "trading account", "cash book"], "The balance sheet is the position statement. The trading and profit and loss account shows profit or loss.", "financial-statements-and-their-users"),
      M(2, "Which pair are the two objectives of preparing financial statements?", "Finding profit or loss and financial position", ["Raising fresh capital and fixing selling prices", "Collecting taxes and paying wages", "Recording journals and posting ledgers"], "Statements are prepared to find the profit or loss for the period and to show the financial position at its end.", "financial-statements-and-their-users"),
      M(3, "Which user of financial statements is mainly concerned with the firm's ability to repay a loan?", "Lenders", ["Employees", "Tax authorities", "Owners"], "Lenders such as banks want to know whether the business can pay interest and repay the loan.", "financial-statements-and-their-users")
    ],
    written: [
      W(3, "short", "Name the two financial statements prepared at the end of the year, the record they are prepared from, and any four users of the statements.", "The trading and profit and loss account (income statement) and the balance sheet (position statement), prepared from the trial balance after adjustments. Users include owners, managers, lenders, creditors, investors, employees, the government and tax authorities (any four).", "financial-statements-and-their-users")
    ]
  },
  "financial-statements-2": {
    mcq: [
      M(1, "Adjustments to the final accounts are given", "below the trial balance", ["inside the trial balance", "only in the cash book", "only in the journal proper"], "Items already inside the trial balance are shown only once, so adjustments are given below it.", "need-for-adjustments"),
      M(2, "Every adjustment in the final accounts has a", "two-fold effect", ["single effect", "three-fold effect", "nil effect"], "It usually affects the trading or profit and loss account once and the balance sheet once.", "need-for-adjustments"),
      M(3, "Salaries paid per the trial balance are ₹60,000 and salaries outstanding are ₹5,000. The amount of salaries charged to the profit and loss account is", "₹65,000", ["₹60,000", "₹55,000", "₹5,000"], "Outstanding salaries belong to this year, so the charge is 60,000 + 5,000 = ₹65,000.", "need-for-adjustments")
    ],
    written: [
      W(3, "short", "Why are adjustments needed? Show the two-fold effect of prepaid insurance of ₹2,000.", "The trial balance may leave out items that belong to the year, so adjustments make the statements follow the accrual and matching concepts and show true profit and position. Prepaid insurance of ₹2,000 is deducted from insurance expense in the profit and loss account and shown as a current asset in the balance sheet.", "need-for-adjustments")
    ]
  },
  });
})();
