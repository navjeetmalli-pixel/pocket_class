// Class 11 Accountancy: current rationalised NCERT textbook (Financial Accounting, Parts I and II).
// Format: see CONTENT_GUIDE.md
StudyData.add(11, "accountancy", {
  chapters: [
    // ───────────────────────────── 1. Introduction to Accounting ─────────────────────────────
    {
      id: "introduction-to-accounting",
      title: "Introduction to Accounting",
      section: "Financial Accounting",
      summary: "What accounting is, its role as an information system, its users, the qualitative characteristics of accounting information, its objectives and limitations, and basic terms such as assets, liabilities, capital, revenue and expenses.",
      notes: [
        {
          heading: "Meaning of accounting",
          points: [
            "The American Institute of Certified Public Accountants (AICPA, 1941) described accounting as the **art of recording, classifying and summarising**, in terms of money, transactions and events of a financial character, and **interpreting** the results.",
            "The modern view sees accounting as a process of **identifying, measuring and communicating** economic information so that users can make informed judgements and decisions.",
            "Steps: identify transactions → measure them in money → record → classify → summarise → analyse and interpret → communicate.",
            "**Book-keeping** is the recording part (routine and clerical); accounting is wider and includes analysis, interpretation and communication.",
            "Branches: **financial accounting** (records and reports for outsiders), **cost accounting** (cost of products and services) and **management accounting** (information for managers' decisions)."
          ]
        },
        {
          heading: "Accounting as a source of information and its users",
          points: [
            "Accounting is called the **language of business**: it communicates the results and financial position of a business to its users.",
            "**Internal users**: management at all levels (chief executive, finance officer, business unit and plant managers, supervisors), who use it for planning, control and decisions.",
            "**External users**: present and potential investors, banks and other lenders, creditors, tax authorities, regulators (Registrar of Companies, SEBI), labour unions, trade associations, stock exchanges and customers.",
            "Lenders and creditors look at the **ability to repay**; investors at **profitability and growth**; government at tax and policy needs."
          ]
        },
        {
          heading: "Qualitative characteristics of accounting information",
          points: [
            "**Reliability**: information is free from error and bias, can be verified, and faithfully represents what it claims to show.",
            "**Relevance**: information is available **in time** and helps users predict outcomes or confirm (give feedback on) earlier expectations.",
            "**Understandability**: information is presented so that users understand it in the sense in which the preparer intended.",
            "**Comparability**: users can compare a firm's performance over years (intra-firm) and with other firms (inter-firm); this needs common measurement and reporting practices."
          ]
        },
        {
          heading: "Objectives, role and limitations",
          points: [
            "Objectives: keep a **systematic record** of transactions, find the **profit or loss**, show the **financial position**, and **provide information** to users.",
            "Accounting helps management plan and control, and provides a reliable basis for taxation and for settling legal matters.",
            "Limitations: it records only **monetary** transactions, is based on **historical cost**, ignores **price-level changes**, and involves personal judgement (for example in estimating depreciation)."
          ]
        },
        {
          heading: "Basic accounting terms",
          points: [
            "**Assets** are resources owned by the business that have money value: **non-current** (land, building, machinery, furniture) and **current** (cash, bank, debtors, stock), which turn into cash within a year.",
            "**Liabilities** are amounts owed to outsiders: **non-current** (long-term loans, debentures) and **current** (creditors, bills payable, outstanding expenses).",
            "**Capital** is the owner's investment in the business and is a liability of the business towards the owner. **Drawings** are cash or goods taken by the owner for personal use.",
            "**Revenue** is the amount earned from regular business activities (sales, commission, rent received); **expenses** are costs incurred to earn revenue (rent, wages, salaries).",
            "**Capital expenditure** gives benefit for many years (buying a machine); **revenue expenditure** is used up within the year (repairs, wages).",
            "**Trade discount** is a reduction from the list price and is **not recorded**; **cash discount** is given for prompt payment and is recorded as discount allowed or received."
          ]
        }
      ],
      formulas: [
        "Assets = Liabilities + Capital",
        "Capital = Assets − Liabilities",
        "Profit = Revenue − Expenses",
        "Closing capital = Opening capital + Additional capital + Profit − Drawings",
        "Trade discount: not recorded in the books;  Cash discount: recorded as Discount Allowed (expense) or Discount Received (income)"
      ],
      terms: [
        { term: "Book-keeping", meaning: "Recording business transactions in the books of account in a systematic way; the first, clerical stage of accounting." },
        { term: "Assets", meaning: "Economic resources owned by the business that have money value, e.g. land, machinery, stock, debtors, cash." },
        { term: "Liabilities", meaning: "Amounts the business owes to outsiders, e.g. creditors, bank loans, bills payable." },
        { term: "Capital", meaning: "Amount invested by the owner in the business; it is a **liability** of the business towards the owner." },
        { term: "Drawings", meaning: "Cash or goods withdrawn by the owner from the business for **personal use**; they reduce capital." },
        { term: "Revenue", meaning: "Amount earned from the regular activities of the business, such as sales of goods, commission or rent received." }
      ],
      qa: [
        { q: "Distinguish between book-keeping and accounting (any three points).", a: "(1) **Scope**: book-keeping is only the recording of transactions; accounting also classifies, summarises, analyses, interprets and communicates. (2) **Nature**: book-keeping is routine and clerical; accounting is analytical and needs judgement. (3) **Stage**: book-keeping is the primary stage; accounting begins where book-keeping ends. (4) **Objective**: book-keeping keeps complete records; accounting finds the results and financial position and reports them to users." },
        { q: "Explain 'reliability' and 'relevance' as qualitative characteristics of accounting information.", a: "**Reliability**: information should be free from error and bias, verifiable, and should faithfully represent the facts, so that users can depend on it. **Relevance**: information should be available **in time** for decisions and should help users predict future outcomes or confirm past expectations. Information that is reliable but arrives too late is of little use." },
        { q: "Why is accounting called the 'language of business'?", a: "Just as a language conveys ideas, accounting **communicates** the financial results (profit or loss) and financial position of a business to owners, investors, lenders, government and other users. Decisions about a business are made, and its performance is judged, on the basis of this information. Hence accounting is called the **language of business**." }
      ],
      quiz: [
        {
          q: "The recording phase of accounting, which is routine and clerical in nature, is called:",
          options: ["Auditing", "Book-keeping", "Cost accounting", "Interpretation"],
          answer: 1,
          explain: "**Book-keeping** is concerned only with recording transactions; accounting starts where book-keeping ends."
        },
        {
          q: "Information that reaches decision makers in time and helps them predict future outcomes is said to be:",
          options: ["Reliable", "Comparable", "Understandable", "Relevant"],
          answer: 3,
          explain: "Timeliness and predictive value are parts of **relevance**. Reliability is about being free from error and bias."
        },
        {
          q: "Goods worth ₹5,000 taken by the owner for personal use are recorded as:",
          options: ["Drawings", "Purchases", "Sales", "Capital"],
          answer: 0,
          explain: "Anything withdrawn by the owner for personal use is **drawings**, which reduces capital."
        },
        {
          q: "Which of the following is a non-current (fixed) asset?",
          options: ["Stock of goods", "Debtors", "Machinery", "Cash at bank"],
          answer: 2,
          explain: "**Machinery** is held for long-term use. Stock, debtors and cash at bank are current assets."
        },
        {
          q: "Trade discount allowed to a customer is:",
          options: ["Debited to Discount Allowed A/c", "Credited to Discount Received A/c", "Shown in the profit and loss account", "Not recorded in the books of account"],
          answer: 3,
          explain: "Trade discount is deducted from the list price on the invoice itself, so it is **not recorded**. Only cash discount is recorded."
        },
        {
          q: "Which of the following is an external user of accounting information?",
          options: ["Plant manager", "Creditor", "Chief executive", "Finance officer"],
          answer: 1,
          explain: "A **creditor** is outside the business and uses the information to judge its ability to pay. The others are internal users (management)."
        }
      ]
    },

    // ───────────────────────────── 2. Theory Base of Accounting ─────────────────────────────
    {
      id: "theory-base-of-accounting",
      title: "Theory Base of Accounting",
      section: "Financial Accounting",
      summary: "Generally Accepted Accounting Principles, the basic accounting concepts, accounting standards (AS and Ind AS), cash and accrual bases of accounting, and an introduction to Goods and Services Tax (GST).",
      notes: [
        {
          heading: "Generally Accepted Accounting Principles (GAAP)",
          points: [
            "GAAP are the **rules and guidelines** followed in recording and reporting transactions, so that financial statements are uniform and comparable.",
            "They have evolved over time from experience, usage and the needs of users, and are refined by professional accounting bodies.",
            "The words concepts, conventions, postulates and principles are often used for these rules."
          ]
        },
        {
          heading: "Basic accounting concepts – I",
          points: [
            "**Business entity**: the business is separate from its owner, so capital is shown as a liability of the business and drawings are recorded.",
            "**Money measurement**: only transactions that can be expressed in money are recorded; a strike or the skill of staff is not recorded.",
            "**Going concern**: the business is assumed to continue for a long time, so fixed assets are shown at cost less depreciation, not at their sale value.",
            "**Accounting period**: the life of the business is divided into periods (usually one year, 1 April to 31 March) to measure profit and position.",
            "**Cost concept**: assets are recorded at their purchase (historical) cost, including costs to acquire and install them, not at market value.",
            "**Dual aspect**: every transaction has two equal effects (debit and credit), so Assets = Liabilities + Capital always holds."
          ]
        },
        {
          heading: "Basic accounting concepts – II",
          points: [
            "**Revenue recognition (realisation)**: revenue is recognised when it is earned (goods sold or service given), not when cash is received.",
            "**Matching**: expenses of a period are matched with the revenues of the same period, so outstanding and prepaid items are adjusted.",
            "**Full disclosure**: all material information must be disclosed in the financial statements and notes.",
            "**Consistency**: the same accounting methods are used year after year so that results are comparable; any change must be disclosed.",
            "**Conservatism (prudence)**: do not anticipate profits but provide for all possible losses, e.g. stock at **cost or net realisable value, whichever is lower**, and provision for doubtful debts.",
            "**Materiality**: items that could influence users' decisions must be shown; trivial items can be treated simply. **Objectivity**: entries must be supported by verifiable evidence such as vouchers."
          ]
        },
        {
          heading: "Accounting standards",
          points: [
            "Accounting standards are **written policy documents** issued by an expert body on how transactions should be recognised, measured, presented and disclosed.",
            "In India, the **Accounting Standards Board (ASB)** of the Institute of Chartered Accountants of India (ICAI), set up in 1977, formulates them.",
            "**Ind AS** are Indian Accounting Standards converged with **IFRS** (International Financial Reporting Standards); they are notified by the Ministry of Corporate Affairs and apply in phases to listed and large companies.",
            "Benefits: uniform practices, better **comparability**, greater **credibility** of statements and fewer chances of manipulation."
          ]
        },
        {
          heading: "Bases of accounting",
          points: [
            "**Cash basis**: entries are made only when cash is received or paid; there are no outstanding or prepaid items. It is simple but does not show the true profit.",
            "**Accrual basis**: revenues are recorded when earned and expenses when incurred, whether or not cash has been received or paid.",
            "The accrual basis follows the matching concept and shows a truer profit. The Companies Act, 2013 requires companies to keep accounts on the **accrual basis** under the double entry system."
          ]
        },
        {
          heading: "Goods and Services Tax (GST)",
          points: [
            "GST is a **comprehensive, destination-based indirect tax** on the supply of goods and services, in force in India from **1 July 2017**.",
            "It replaced many indirect taxes such as central excise duty, VAT and service tax: 'One Nation, One Tax'.",
            "**Intra-state supply** (within a state): **CGST** (to the Centre) + **SGST/UTGST** (to the state or union territory). **Inter-state supply**: **IGST**, collected by the Centre.",
            "**Input tax credit**: GST paid on purchases is set off against GST collected on sales, which removes the cascading effect (tax on tax).",
            "Every registered dealer gets a 15-character **GSTIN** (GST Identification Number)."
          ]
        }
      ],
      formulas: [
        "Dual aspect: Assets = Liabilities + Capital (every debit has an equal credit)",
        "Conservatism: Closing stock = Cost or Net realisable value, whichever is lower",
        "Accrual basis: income when earned, expense when incurred;  Cash basis: only when cash is received or paid",
        "Intra-state supply: CGST + SGST (or UTGST), usually half the GST rate each",
        "Inter-state supply: IGST at the full GST rate"
      ],
      terms: [
        { term: "GAAP", meaning: "Generally Accepted Accounting Principles: uniform rules and guidelines followed in recording and reporting transactions." },
        { term: "Business entity concept", meaning: "The business is treated as **separate from its owner**; so the owner's capital is a liability of the business." },
        { term: "Going concern concept", meaning: "The assumption that the business will **continue for a long time** and has no intention of closing down." },
        { term: "Matching concept", meaning: "Expenses of an accounting period are **matched with the revenues** of the same period to find the correct profit." },
        { term: "Conservatism", meaning: "Prudence: do not anticipate profits, but **provide for all possible losses**." },
        { term: "GST", meaning: "Goods and Services Tax: a destination-based indirect tax on the supply of goods and services, levied as CGST + SGST (intra-state) or IGST (inter-state)." }
      ],
      qa: [
        { q: "Explain the going concern concept. How does it justify showing fixed assets at cost less depreciation?", a: "The **going concern** concept assumes that the business will continue for a long, indefinite period and has no intention of closing down. Fixed assets are held for use, not for sale, so their cost is spread over their useful life and they are shown at **cost less depreciation**, not at their current sale value. Prepaid expenses are carried forward on the same basis." },
        { q: "Distinguish between cash basis and accrual basis of accounting.", a: "(1) **Recording**: cash basis records only when cash is received or paid; accrual basis records when income is earned or expense incurred. (2) **Outstanding/prepaid items**: none under cash basis; adjusted under accrual basis. (3) **Profit**: cash basis does not show the true profit; accrual basis does, as it follows matching. (4) **Legal acceptance**: companies must use the accrual basis under the Companies Act, 2013." },
        { q: "Explain the matching concept with an example.", a: "Under the **matching concept**, expenses incurred to earn revenue in a period are charged against the revenue of that same period. Example: goods are sold in March 2025, and the salesman's commission of ₹5,000 on those sales is paid in April 2025. The commission is still charged in the year ending 31 March 2025 as an outstanding expense. Similarly, unsold closing stock is carried forward because its cost relates to next year's sales." }
      ],
      quiz: [
        {
          q: "Which concept treats the owner's capital as a liability of the business?",
          options: ["Business entity", "Money measurement", "Going concern", "Accounting period"],
          answer: 0,
          explain: "Under the **business entity** concept, the business is separate from the owner, so it owes the capital to the owner."
        },
        {
          q: "Valuing closing stock at cost or net realisable value, whichever is lower, follows the concept of:",
          options: ["Consistency", "Materiality", "Revenue recognition", "Conservatism"],
          answer: 3,
          explain: "**Conservatism** (prudence) provides for possible losses but does not anticipate profits."
        },
        {
          q: "Expenses of a period are set against the revenues of the same period under the:",
          options: ["Cost concept", "Matching concept", "Full disclosure concept", "Money measurement concept"],
          answer: 1,
          explain: "The **matching concept** ensures the correct profit by matching costs with the revenues they help to earn."
        },
        {
          q: "Goods sold by a dealer in Punjab to a buyer in Rajasthan attract:",
          options: ["CGST and SGST", "Only CGST", "IGST", "UTGST only"],
          answer: 2,
          explain: "A supply from one state to another is an **inter-state** supply, so **IGST** is charged."
        },
        {
          q: "In India, accounting standards are formulated by the Accounting Standards Board of the:",
          options: ["Reserve Bank of India", "Securities and Exchange Board of India", "Institute of Chartered Accountants of India", "Comptroller and Auditor General of India"],
          answer: 2,
          explain: "The **ASB of the ICAI**, set up in 1977, formulates accounting standards."
        },
        {
          q: "Under the accrual basis, salary for March that is still unpaid on 31 March is:",
          options: ["Recorded as an expense of the year in which it is incurred", "Ignored until it is paid", "Recorded only in the next year when cash is paid", "Treated as drawings of the owner"],
          answer: 0,
          explain: "The accrual basis records an expense **when it is incurred**, so the unpaid salary is shown as an outstanding expense of the current year."
        }
      ]
    },

    // ───────────────────────────── 3. Recording of Transactions – I ─────────────────────────────
    {
      id: "recording-of-transactions-1",
      title: "Recording of Transactions – I",
      section: "Financial Accounting",
      summary: "Source documents and vouchers, the accounting equation, rules of debit and credit, recording in the journal, posting to the ledger and balancing accounts, including entries with GST.",
      notes: [
        {
          heading: "Source documents and vouchers",
          points: [
            "Every transaction is recorded on the basis of a **source document**: cash memo, invoice (bill), receipt, pay-in-slip, cheque, debit note or credit note.",
            "A **debit note** is sent by a buyer to the supplier when goods are returned to him; a **credit note** is sent by a seller to a customer who has returned goods.",
            "A **voucher** is written evidence prepared from source documents to support an entry; vouchers are numbered and filed for audit.",
            "Order of the accounting process: transaction → source document → voucher → journal → ledger → trial balance → financial statements."
          ]
        },
        {
          heading: "Accounting equation",
          points: [
            "**Assets = Liabilities + Capital**. It follows from the dual aspect concept, so it holds after every transaction.",
            "Each transaction changes at least two items. Buying furniture for cash increases furniture and decreases cash; the totals do not change.",
            "Revenues increase capital and expenses reduce it: Assets = Liabilities + (Capital + Revenues − Expenses).",
            "Selling goods costing ₹8,000 for ₹10,000 cash: cash rises by ₹10,000, stock falls by ₹8,000, and capital rises by the profit of ₹2,000."
          ]
        },
        {
          heading: "Rules of debit and credit",
          points: [
            "Every account has two sides: the left side is **debit (Dr.)** and the right side is **credit (Cr.)**.",
            "Accounting equation (modern) approach: **assets and expenses** increase on the debit side and decrease on the credit side.",
            "**Liabilities, capital and revenues** increase on the credit side and decrease on the debit side.",
            "**Drawings** reduce capital, so they are debited. Every debit has an equal credit; this is the double entry system.",
            "Traditional approach: Personal A/c – debit the receiver, credit the giver; Real A/c – debit what comes in, credit what goes out; Nominal A/c – debit expenses and losses, credit incomes and gains."
          ]
        },
        {
          heading: "Journal",
          points: [
            "The **journal** is the book of original (prime) entry in which transactions are first recorded in date order.",
            "Columns: Date, Particulars, Ledger Folio (L.F.), Debit amount (₹) and Credit amount (₹). Each entry has a short explanation called a **narration**.",
            "A **compound entry** has more than one debit or credit, e.g. cash received from a debtor with a cash discount allowed.",
            "Goods withdrawn by the owner are recorded at cost: **Drawings A/c Dr. → To Purchases A/c**."
          ]
        },
        {
          heading: "Ledger, posting and balancing",
          points: [
            "The **ledger** is the principal book containing all accounts; it shows the net position of each account.",
            "**Posting** transfers entries from the journal to the ledger: the debited account shows 'To (name of credited account)' on its debit side, and the credited account shows 'By (name of debited account)' on its credit side.",
            "**Balancing**: total both sides, write the difference as 'Balance c/d' on the smaller side, and bring it down as 'Balance b/d' at the start of the next period.",
            "Assets, expenses and debtors usually have **debit balances**; liabilities, capital, incomes and creditors usually have **credit balances**."
          ]
        },
        {
          heading: "Recording GST transactions",
          points: [
            "On purchases, GST paid is debited to **Input CGST, Input SGST or Input IGST** accounts (an asset, since its credit can be claimed).",
            "On sales, GST collected is credited to **Output CGST, Output SGST or Output IGST** accounts (a liability towards the government).",
            "Input CGST is set off against output CGST (and IGST); input SGST against output SGST (and IGST); input IGST first against IGST and then CGST and SGST. **CGST and SGST are never set off against each other.**",
            "Set-off: Output CGST A/c Dr. → To Input CGST A/c; the balance payable is then paid: Output CGST A/c Dr. → To Bank A/c."
          ]
        }
      ],
      formulas: [
        "Assets = Liabilities + Capital",
        "Assets and expenses: increase → Debit, decrease → Credit",
        "Liabilities, capital and revenues: increase → Credit, decrease → Debit",
        "Personal A/c: debit the receiver, credit the giver;  Real A/c: debit what comes in, credit what goes out;  Nominal A/c: debit expenses and losses, credit incomes and gains",
        "Capital introduced: Cash A/c Dr. → To Capital A/c",
        "Goods bought on credit: Purchases A/c Dr. → To Supplier's A/c",
        "Goods sold for cash: Cash A/c Dr. → To Sales A/c",
        "Goods withdrawn by owner: Drawings A/c Dr. → To Purchases A/c",
        "Cash received with discount: Cash A/c Dr., Discount Allowed A/c Dr. → To Debtor's A/c",
        "Intra-state credit purchase with GST: Purchases A/c Dr., Input CGST A/c Dr., Input SGST A/c Dr. → To Supplier's A/c",
        "Inter-state credit sale with GST: Customer's A/c Dr. → To Sales A/c, To Output IGST A/c"
      ],
      terms: [
        { term: "Source document", meaning: "Written proof of a transaction, such as a cash memo, invoice, receipt or pay-in-slip, on the basis of which entries are made." },
        { term: "Journal", meaning: "The book of original entry where transactions are first recorded in **chronological (date) order**." },
        { term: "Ledger", meaning: "The principal book of accounts, where entries are classified **account-wise** and balances are found." },
        { term: "Narration", meaning: "A brief explanation written below a journal entry describing the transaction." },
        { term: "Compound entry", meaning: "A journal entry with more than one debit or more than one credit." },
        { term: "Debit note", meaning: "A document sent by a buyer to a supplier when goods are returned, showing that the supplier's account has been **debited**." }
      ],
      examples: [
        {
          q: "Show the accounting equation for these transactions of Rohit: (i) started business with cash ₹1,00,000; (ii) bought goods on credit from Amit ₹30,000; (iii) bought furniture for cash ₹20,000; (iv) sold goods costing ₹10,000 for ₹15,000 cash.",
          steps: [
            "(i) Cash 1,00,000 = Capital 1,00,000.",
            "(ii) Cash 1,00,000 + Stock 30,000 = Creditors 30,000 + Capital 1,00,000 (₹1,30,000 each side).",
            "(iii) Cash 80,000 + Stock 30,000 + Furniture 20,000 = Creditors 30,000 + Capital 1,00,000 (₹1,30,000 each side).",
            "(iv) Cash rises by ₹15,000 to ₹95,000, stock falls by ₹10,000 to ₹20,000, and the profit of ₹5,000 is added to capital.",
            "Assets: 95,000 + 20,000 + 20,000 = ₹1,35,000. Liabilities + Capital: 30,000 + 1,05,000 = ₹1,35,000. ✓"
          ],
          answer: "Cash ₹95,000 + Stock ₹20,000 + Furniture ₹20,000 = Creditors ₹30,000 + Capital ₹1,05,000"
        },
        {
          q: "Journalise in the books of Mehta Traders, Jaipur: (i) bought goods from Kapoor & Co., Jaipur, for ₹50,000 on credit, CGST and SGST 6% each; (ii) sold goods to Singh Bros., Ludhiana (Punjab), for ₹80,000 on credit, IGST 12%; (iii) received ₹49,000 from Ravi in full settlement of ₹50,000.",
          steps: [
            "(i) Intra-state purchase: CGST = 6% of 50,000 = ₹3,000; SGST = ₹3,000.",
            "Purchases A/c Dr. ₹50,000, Input CGST A/c Dr. ₹3,000, Input SGST A/c Dr. ₹3,000 → To Kapoor & Co. ₹56,000.",
            "(ii) Inter-state sale: IGST = 12% of 80,000 = ₹9,600.",
            "Singh Bros. A/c Dr. ₹89,600 → To Sales A/c ₹80,000, To Output IGST A/c ₹9,600.",
            "(iii) Discount allowed = 50,000 − 49,000 = ₹1,000.",
            "Cash A/c Dr. ₹49,000, Discount Allowed A/c Dr. ₹1,000 → To Ravi ₹50,000."
          ],
          answer: "Kapoor & Co. credited ₹56,000; Singh Bros. debited ₹89,600; discount allowed ₹1,000"
        }
      ],
      qa: [
        { q: "State the rules of debit and credit under the accounting equation approach.", a: "(1) Increase in **assets** is debited, decrease credited. (2) Increase in **liabilities** is credited, decrease debited. (3) Increase in **capital** is credited, decrease (including drawings) debited. (4) **Revenues and gains** are credited, as they increase capital. (5) **Expenses and losses** are debited, as they reduce capital." },
        { q: "Distinguish between journal and ledger.", a: "(1) The journal is the book of **original entry**; the ledger is the **principal book**. (2) The journal records transactions in **chronological** (date) order; the ledger records them **account-wise** (analytically). (3) Journal entries carry narrations; ledger accounts do not. (4) The net balance of an account can be known only from the ledger, not from the journal." },
        { q: "What is meant by balancing an account? What does a debit balance in a personal account show?", a: "Balancing means finding the difference between the two sides of an account, writing it on the smaller side as 'Balance c/d' so that both totals agree, and bringing it down on the opposite side as 'Balance b/d' for the next period. A **debit balance** in a personal account (such as a customer's) shows that the person **owes money to the business**, i.e. he is a debtor." }
      ],
      quiz: [
        {
          q: "Rent paid in cash will:",
          options: ["Increase assets and increase capital", "Decrease assets and decrease liabilities", "Decrease assets and decrease capital", "Decrease capital and increase liabilities"],
          answer: 2,
          explain: "Cash (an asset) goes down, and rent is an expense, which **reduces capital**."
        },
        {
          q: "Goods costing ₹2,000 taken by the proprietor for personal use are recorded as:",
          options: ["Drawings A/c Dr. → To Sales A/c", "Drawings A/c Dr. → To Purchases A/c", "Purchases A/c Dr. → To Drawings A/c", "Capital A/c Dr. → To Cash A/c"],
          answer: 1,
          explain: "Goods are withdrawn at cost, so purchases are reduced: **Drawings A/c Dr. → To Purchases A/c**."
        },
        {
          q: "Which of the following accounts normally shows a credit balance?",
          options: ["Creditors", "Drawings", "Furniture", "Wages"],
          answer: 0,
          explain: "**Creditors** are a liability, and liabilities increase on the credit side. Drawings, furniture and wages have debit balances."
        },
        {
          q: "If total assets are ₹1,50,000 and capital is ₹1,10,000, the liabilities are:",
          options: ["₹2,60,000", "₹1,10,000", "₹1,50,000", "₹40,000"],
          answer: 3,
          explain: "Liabilities = Assets − Capital = 1,50,000 − 1,10,000 = **₹40,000**."
        },
        {
          q: "Goods worth ₹20,000 are bought within Maharashtra with GST at 18%. The input CGST is:",
          options: ["₹3,600", "₹1,800", "₹18,000", "₹2,000"],
          answer: 1,
          explain: "Intra-state: 18% is split into CGST 9% and SGST 9%. CGST = 9% of 20,000 = **₹1,800**."
        },
        {
          q: "A document sent by a buyer to the supplier while returning goods is a:",
          options: ["Credit note", "Cash memo", "Debit note", "Pay-in-slip"],
          answer: 2,
          explain: "The buyer sends a **debit note**, informing the supplier that his account has been debited for the goods returned."
        }
      ]
    },

    // ───────────────────────────── 4. Recording of Transactions – II ─────────────────────────────
    {
      id: "recording-of-transactions-2",
      title: "Recording of Transactions – II",
      section: "Financial Accounting",
      summary: "Special purpose books: the cash book (simple, with bank column, and petty cash book), the purchases, sales, purchases return and sales return books, and the journal proper.",
      notes: [
        {
          heading: "Special purpose books",
          points: [
            "In a large business, similar transactions are recorded in separate books; this saves time and allows division of work.",
            "Main books: **cash book**, **purchases book**, **sales book**, **purchases return book**, **sales return book** and the **journal proper**.",
            "Only **credit purchases and credit sales of goods** go to the purchases and sales books; cash purchases and cash sales go to the cash book.",
            "Credit purchase or sale of **assets** (not goods) is recorded in the journal proper."
          ]
        },
        {
          heading: "Cash book",
          points: [
            "The cash book records all cash receipts on the debit side and all cash payments on the credit side, in date order.",
            "It is both a **book of original entry** and a **ledger account** (it replaces the Cash A/c), so its entries are not journalised again.",
            "The cash column always shows a **debit balance** (or nil), because cash paid can never exceed cash available.",
            "Types: **simple (single column) cash book**, **cash book with bank column (double column)** and **petty cash book**."
          ]
        },
        {
          heading: "Cash book with bank column",
          points: [
            "It has separate Cash and Bank columns on each side; cheques received and deposited, and cheques issued, are entered in the bank column.",
            "A **contra entry** affects both the cash and bank columns, e.g. cash deposited into bank or cash withdrawn from bank for office use; 'C' is written in the L.F. column.",
            "A **credit balance** in the bank column means an **overdraft** (the bank has paid more than the amount deposited).",
            "If a deposited cheque is dishonoured, the customer's account is debited and the bank column is credited."
          ]
        },
        {
          heading: "Petty cash book",
          points: [
            "Small payments such as postage, cartage, stationery, conveyance and refreshments are recorded by a **petty cashier** in the petty cash book.",
            "Under the **imprest system**, the petty cashier gets a fixed amount (the imprest) at the start of a period and is **reimbursed exactly the amount spent**, so he starts each period with the full imprest.",
            "An **analytical petty cash book** has a separate column for each type of expense; the column totals are posted to the ledger periodically."
          ]
        },
        {
          heading: "Purchases, sales and return books",
          points: [
            "**Purchases book**: credit purchases of goods, from invoices received. Its periodic total is debited to Purchases A/c; each supplier's account is credited.",
            "**Sales book**: credit sales of goods, from invoices issued. Its total is credited to Sales A/c; each customer's account is debited.",
            "**Purchases return (return outwards) book**: goods returned to suppliers, based on debit notes. Total credited to Purchases Return A/c; suppliers debited.",
            "**Sales return (return inwards) book**: goods returned by customers, based on credit notes. Total debited to Sales Return A/c; customers credited.",
            "Amounts are entered net of trade discount."
          ]
        },
        {
          heading: "Journal proper",
          points: [
            "Records entries that do not fit into any special purpose book.",
            "Examples: **opening entries**, **closing entries**, **adjustment entries** (outstanding and prepaid items, depreciation), **rectification entries** and transfer entries.",
            "Also used for credit purchase or sale of assets, goods withdrawn by the owner, goods lost by fire or given as charity, and bad debts written off."
          ]
        }
      ],
      formulas: [
        "Cash book: debit side = receipts; credit side = payments",
        "Cash deposited into bank (contra): Bank A/c Dr. → To Cash A/c — 'C' in L.F. column on both sides",
        "Cash withdrawn from bank for office use (contra): Cash A/c Dr. → To Bank A/c",
        "Imprest system: amount reimbursed = amount spent by the petty cashier during the period",
        "Purchases book: total → Dr. Purchases A/c; each supplier → Cr. individually",
        "Sales book: total → Cr. Sales A/c; each customer → Dr. individually",
        "Purchases return book: total → Cr. Purchases Return A/c;  Sales return book: total → Dr. Sales Return A/c"
      ],
      terms: [
        { term: "Contra entry", meaning: "An entry that affects both the cash and bank columns of the cash book, such as cash deposited into bank; marked 'C' in the L.F. column." },
        { term: "Imprest system", meaning: "A petty cash system in which the petty cashier receives a fixed amount and is reimbursed exactly what he spends in each period." },
        { term: "Petty cash book", meaning: "A book in which small routine cash payments (postage, cartage, stationery) are recorded by the petty cashier." },
        { term: "Purchases book", meaning: "A special book recording only **credit purchases of goods** meant for resale." },
        { term: "Sales return book", meaning: "Also called the return inwards book: records goods returned **by customers**, based on credit notes issued." },
        { term: "Journal proper", meaning: "The journal used for entries that cannot be recorded in any special book, such as opening, closing, adjustment and rectification entries." }
      ],
      examples: [
        {
          q: "From the following, find the closing cash balance in a simple cash book: opening cash ₹15,000; cash sales ₹22,000; received from Raju ₹8,000; wages paid ₹4,500; goods bought for cash ₹12,000; rent paid ₹3,000; cash deposited into bank ₹10,000.",
          steps: [
            "Debit side (receipts) = 15,000 + 22,000 + 8,000 = ₹45,000.",
            "Credit side (payments) = 4,500 + 12,000 + 3,000 + 10,000 = ₹29,500.",
            "Closing balance (Balance c/d, written on the credit side) = 45,000 − 29,500 = ₹15,500.",
            "The balance is a debit balance, as a cash column always is."
          ],
          answer: "Closing cash balance = ₹15,500"
        },
        {
          q: "A petty cashier is given an imprest of ₹5,000 on 1 April. During April he spends: postage ₹650, stationery ₹1,200, cartage ₹480, conveyance ₹900 and refreshments ₹570. How much is reimbursed on 30 April, and with what balance does he start May?",
          steps: [
            "Total spent = 650 + 1,200 + 480 + 900 + 570 = ₹3,800.",
            "Balance in hand on 30 April = 5,000 − 3,800 = ₹1,200.",
            "Under the imprest system he is reimbursed the amount spent: ₹3,800.",
            "Balance at the start of May = 1,200 + 3,800 = ₹5,000 (the full imprest)."
          ],
          answer: "Reimbursement ₹3,800; he starts May with ₹5,000"
        }
      ],
      qa: [
        { q: "Why is the cash book called both a book of original entry and a ledger?", a: "Cash transactions are recorded **directly** in the cash book from source documents, in date order, so it is a **book of original entry**. It also has debit and credit sides and is balanced like an account, so it serves as the **Cash A/c in the ledger**. Hence no separate Cash A/c is opened in the ledger." },
        { q: "What is a contra entry? Give two examples.", a: "An entry that affects **both the cash and bank columns** of the cash book is a contra entry; both its debit and credit are recorded in the cash book itself, and 'C' is written in the L.F. column. Examples: (1) cash deposited into bank – debit bank column, credit cash column; (2) cash withdrawn from bank for office use – debit cash column, credit bank column." },
        { q: "Name the book in which each is recorded: (a) credit purchase of furniture (b) cash sale of goods (c) goods returned by a customer (d) credit sale of goods.", a: "(a) **Journal proper**, since furniture is an asset, not goods. (b) **Cash book**. (c) **Sales return (return inwards) book**. (d) **Sales book**." }
      ],
      quiz: [
        {
          q: "The cash column of a cash book cannot show a:",
          options: ["Debit balance", "Credit balance", "Opening balance", "Closing balance"],
          answer: 1,
          explain: "Cash paid can never exceed cash available, so the cash column never has a **credit balance**."
        },
        {
          q: "Credit purchase of machinery is recorded in the:",
          options: ["Purchases book", "Cash book", "Journal proper", "Sales book"],
          answer: 2,
          explain: "The purchases book records only credit purchases of **goods**. Assets bought on credit go to the **journal proper**."
        },
        {
          q: "Under the imprest system, the petty cashier is reimbursed:",
          options: ["The amount he spent during the period", "A fixed amount every month regardless of spending", "Only the amount spent on postage", "Double the opening imprest"],
          answer: 0,
          explain: "He is reimbursed **exactly what he spent**, so he begins every period with the same imprest."
        },
        {
          q: "Cash withdrawn from the bank for office use is recorded on the:",
          options: ["Debit side bank column and credit side cash column", "Debit side cash column and credit side bank column", "Debit side cash column only", "Credit side bank column only"],
          answer: 1,
          explain: "Cash comes in (debit cash column) and the bank balance goes down (credit bank column). It is a contra entry."
        },
        {
          q: "Goods returned by a customer are recorded in the:",
          options: ["Purchases return book", "Sales book", "Petty cash book", "Sales return book"],
          answer: 3,
          explain: "Returns by customers are **return inwards**, recorded in the **sales return book** on the basis of credit notes."
        },
        {
          q: "A credit balance in the bank column of a cash book indicates:",
          options: ["Overdraft", "Cash in hand", "Favourable balance at bank", "Excess deposit"],
          answer: 0,
          explain: "A credit balance means the business owes money to the bank: an **overdraft**."
        }
      ]
    },

    // ───────────────────────────── 5. Bank Reconciliation Statement ─────────────────────────────
    {
      id: "bank-reconciliation-statement",
      title: "Bank Reconciliation Statement",
      section: "Financial Accounting",
      summary: "Why the bank column of the cash book and the pass book show different balances, and how to reconcile them through a bank reconciliation statement, including overdrafts and the amended cash book.",
      notes: [
        {
          heading: "Need for a bank reconciliation statement",
          points: [
            "A business records bank transactions in the **bank column of its cash book**; the bank records them in the **pass book (bank statement)**.",
            "On a given date the two balances often differ, because some items are recorded by one party and not yet by the other, or because of errors.",
            "A **bank reconciliation statement (BRS)** lists these differences and reconciles the two balances. It is a **statement**, not an account.",
            "It helps detect errors and frauds and confirms the correct bank balance. A **debit** balance in the cash book matches a **credit** balance in the pass book (favourable balance)."
          ]
        },
        {
          heading: "Causes of difference: timing",
          points: [
            "**Cheques issued but not yet presented** for payment: the cash book is credited, but the bank has not yet paid them.",
            "**Cheques deposited but not yet collected/credited** by the bank: the cash book is debited, but the pass book is not yet credited.",
            "**Bank charges, interest on overdraft**, and payments under standing instructions (insurance premium, loan instalments) appear first in the pass book.",
            "**Interest allowed by the bank, dividend collected** by the bank and **direct deposits** by customers (NEFT, RTGS, UPI) appear first in the pass book.",
            "**Dishonour of a cheque** deposited is recorded by the bank first."
          ]
        },
        {
          heading: "Causes of difference: errors",
          points: [
            "Errors in the cash book: wrong totalling, wrong amount recorded, entry on the wrong side, or omission of an entry.",
            "Errors by the bank: a cheque wrongly debited or credited, or a wrong amount entered in the pass book.",
            "The business corrects its own errors in the cash book and asks the bank to correct the bank's errors."
          ]
        },
        {
          heading: "Preparing the BRS",
          points: [
            "Start with the balance as per one book and work towards the other by **adding** items that make the other balance higher and **deducting** items that make it lower.",
            "Starting with a **debit balance as per cash book**: add cheques issued but not presented and amounts credited only by the bank; deduct cheques deposited but not collected and amounts debited only by the bank.",
            "Starting with a **credit balance as per pass book**, the additions and deductions are reversed.",
            "For each item ask: 'Because of this item, is the other book's balance bigger or smaller?'"
          ]
        },
        {
          heading: "Overdraft and amended cash book",
          points: [
            "An **overdraft** (unfavourable balance) is a **credit balance in the cash book** and a **debit balance in the pass book**.",
            "When starting with an overdraft, treat it as a negative balance, or reverse the rules: items that make the other book's overdraft bigger are added.",
            "Often the cash book is first corrected in an **amended cash book** for items not yet recorded in it (bank charges, interest, direct deposits, dishonoured cheques, errors in the cash book).",
            "The BRS then starts with the amended balance and shows only items not yet recorded by the bank (cheques issued but not presented, cheques deposited but not collected) and errors by the bank."
          ]
        }
      ],
      formulas: [
        "Starting with cash book (Dr.) balance — ADD: cheques issued but not presented; interest and direct deposits credited only by the bank",
        "Starting with cash book (Dr.) balance — LESS: cheques deposited but not collected; bank charges and direct payments debited only by the bank; cheques dishonoured",
        "Starting with pass book (Cr.) balance: do the reverse of the above",
        "Favourable balance: Dr. in cash book = Cr. in pass book;  Overdraft: Cr. in cash book = Dr. in pass book"
      ],
      terms: [
        { term: "Pass book", meaning: "The copy of a customer's account in the bank's books (bank statement), showing deposits, withdrawals and the balance." },
        { term: "Bank reconciliation statement", meaning: "A statement prepared to explain the difference between the bank balance as per the cash book and as per the pass book on a given date." },
        { term: "Overdraft", meaning: "An arrangement where the bank lets the customer withdraw more than his deposit; shown as a credit balance in the cash book." },
        { term: "Cheques issued but not presented", meaning: "Cheques recorded as payments in the cash book that the payees have not yet presented to the bank for payment." },
        { term: "Cheques deposited but not cleared", meaning: "Cheques recorded as deposits in the cash book that the bank has not yet collected and credited." },
        { term: "Standing instruction", meaning: "A direction to the bank to make regular payments (insurance premium, loan instalments) directly from the account; these appear in the pass book first." }
      ],
      examples: [
        {
          q: "On 31 March 2025 the cash book of Neha Traders shows a debit bank balance of ₹42,000. (i) Cheques of ₹12,500 issued were not presented for payment. (ii) Cheques of ₹9,000 deposited were not credited by the bank. (iii) Bank charges of ₹300 were not entered in the cash book. (iv) Interest of ₹750 was credited by the bank. (v) A customer directly deposited ₹4,000. Find the balance as per pass book.",
          steps: [
            "Start: balance as per cash book (Dr.) = ₹42,000.",
            "Add cheques issued but not presented ₹12,500 (the bank has not yet paid them, so the pass book balance is higher).",
            "Add interest credited ₹750 and direct deposit ₹4,000 (recorded only in the pass book). Total = 42,000 + 12,500 + 750 + 4,000 = ₹59,250.",
            "Less cheques deposited but not credited ₹9,000 and bank charges ₹300 = ₹9,300.",
            "Balance as per pass book = 59,250 − 9,300 = ₹49,950."
          ],
          answer: "Balance as per pass book = ₹49,950 (Cr.)"
        },
        {
          q: "On 31 March the pass book shows an overdraft of ₹25,000. (i) Cheques of ₹6,000 deposited were not collected by the bank. (ii) Cheques of ₹8,500 issued were not presented for payment. (iii) Interest on overdraft ₹600 was debited by the bank but not recorded in the cash book. Find the overdraft as per cash book.",
          steps: [
            "Start with the overdraft as per pass book: ₹25,000.",
            "(i) The cash book has already recorded the ₹6,000 deposit, which reduces its overdraft: deduct ₹6,000.",
            "(ii) The cash book has already recorded the ₹8,500 payment, which increases its overdraft: add ₹8,500.",
            "(iii) Interest ₹600 is only in the pass book, so the cash book overdraft is smaller: deduct ₹600.",
            "Overdraft as per cash book = 25,000 − 6,000 + 8,500 − 600 = ₹26,900."
          ],
          answer: "Overdraft as per cash book = ₹26,900 (Cr. balance)"
        }
      ],
      qa: [
        { q: "Give four reasons why the bank balance shown by the cash book may differ from that shown by the pass book.", a: "(1) **Cheques issued but not yet presented** for payment. (2) **Cheques deposited but not yet collected** by the bank. (3) **Bank charges or interest on overdraft** debited by the bank but not yet entered in the cash book. (4) **Interest allowed, dividends collected or direct deposits** credited by the bank but not yet entered in the cash book. Errors made by the business or the bank can also cause a difference." },
        { q: "Why is a bank reconciliation statement prepared? Is it part of the books of account?", a: "A BRS is prepared to explain the difference between the bank balance as per the cash book and as per the pass book, to find the correct bank balance, and to detect errors and frauds in time. It is **not** part of the double entry books; it is only a **statement** prepared periodically for checking." },
        { q: "The cash book shows a debit balance of ₹18,000 on 31 March. Cheques of ₹5,000 deposited were not collected by that date, and bank charges of ₹200 were not entered in the cash book. Find the pass book balance.", a: "Start with ₹18,000 (Dr. as per cash book). Uncollected cheques make the pass book balance **lower**: deduct ₹5,000. Bank charges appear only in the pass book: deduct ₹200. Balance as per pass book = 18,000 − 5,000 − 200 = **₹12,800 (Cr.)**." }
      ],
      quiz: [
        {
          q: "A debit balance in the bank column of the cash book means:",
          options: ["Overdraft", "Amount owed to the bank", "Favourable balance at the bank", "Bank charges are due"],
          answer: 2,
          explain: "A debit balance means money is lying with the bank: a **favourable balance**. An overdraft is a credit balance in the cash book."
        },
        {
          q: "When starting with the cash book balance, cheques issued but not yet presented for payment are:",
          options: ["Added", "Deducted", "Ignored", "Added only if they are crossed"],
          answer: 0,
          explain: "The bank has not paid them yet, so the pass book balance is **higher**; they are added."
        },
        {
          q: "Bank charges debited in the pass book but not entered in the cash book make the pass book balance:",
          options: ["Higher than the cash book balance", "Lower than the cash book balance", "Equal to the cash book balance", "An overdraft"],
          answer: 1,
          explain: "The bank has reduced the balance by the charges, so the pass book shows a **lower** balance."
        },
        {
          q: "Debit balance as per cash book ₹10,000; cheques deposited but not collected ₹2,500. The balance as per pass book is:",
          options: ["₹12,500", "₹10,000", "₹2,500", "₹7,500"],
          answer: 3,
          explain: "The bank has not yet credited ₹2,500, so pass book balance = 10,000 − 2,500 = **₹7,500**."
        },
        {
          q: "An overdraft as per the pass book is shown by a:",
          options: ["Debit balance in the pass book", "Credit balance in the pass book", "Debit balance in the cash book", "Nil balance in the cash book"],
          answer: 0,
          explain: "In the bank's books the customer owes money, so an overdraft is a **debit balance in the pass book** (and a credit balance in the cash book)."
        },
        {
          q: "Which of these differences is caused by an error rather than by timing?",
          options: ["Cheques issued but not presented", "Cheques deposited but not cleared", "Wrong totalling of the bank column of the cash book", "Interest credited by the bank"],
          answer: 2,
          explain: "**Wrong totalling** is an error by the business. The other items arise because one party has recorded the transaction before the other."
        }
      ]
    },

    // ───────────────────────────── 6. Trial Balance and Rectification of Errors ─────────────────────────────
    {
      id: "trial-balance-and-rectification-of-errors",
      title: "Trial Balance and Rectification of Errors",
      section: "Financial Accounting",
      summary: "Preparing a trial balance to check the arithmetical accuracy of the ledger, the types of errors, errors disclosed and not disclosed by a trial balance, the suspense account, and rectification of errors.",
      notes: [
        {
          heading: "Trial balance",
          points: [
            "A **trial balance** is a statement of the debit and credit balances of all ledger accounts (including cash and bank) on a particular date.",
            "If both sides agree, the ledger is taken to be **arithmetically accurate**; agreement does not prove that there are no errors.",
            "Objectives: check arithmetical accuracy, help locate errors, and give a summary of balances for preparing financial statements.",
            "Methods: **balance method** (most common), totals method, and totals-and-balances method."
          ]
        },
        {
          heading: "Placing items in the trial balance",
          points: [
            "**Debit side**: assets, expenses and losses, drawings, debtors, purchases, sales returns, opening stock, discount allowed.",
            "**Credit side**: capital, liabilities, creditors, loans taken, incomes and gains, sales, purchases returns, provisions and reserves, discount received.",
            "Closing stock is normally **not** in the trial balance; it appears inside only when adjusted purchases are shown.",
            "The trial balance is a statement, not an account, so it is not part of the double entry."
          ]
        },
        {
          heading: "Classification of errors",
          points: [
            "**Errors of commission**: wrong amount, posting to the wrong account or wrong side, wrong totalling (casting), wrong carrying forward, or wrong balancing.",
            "**Errors of omission**: a transaction omitted **completely** (not recorded at all) or **partially** (recorded in the journal but not posted to one account).",
            "**Errors of principle**: violating accounting principles, e.g. treating capital expenditure as revenue (furniture debited to Purchases A/c) or vice versa.",
            "**Compensating errors**: two or more errors that cancel each other, e.g. Ram's account debited ₹100 short and Shyam's account debited ₹100 extra."
          ]
        },
        {
          heading: "Errors disclosed and not disclosed by a trial balance",
          points: [
            "**Disclosed (one-sided) errors**: wrong totalling of a subsidiary book, posting to the wrong side, posting a wrong amount, omitting to post to one account, wrong balancing.",
            "**Not disclosed**: complete omission, errors of principle, compensating errors, a wrong amount in the book of original entry, and posting to the correct side of a wrong account.",
            "Errors not disclosed affect both sides equally (or not at all), so the trial balance still agrees."
          ]
        },
        {
          heading: "Suspense account",
          points: [
            "If the trial balance does not agree and accounts must be prepared, the difference is put into a **suspense account** temporarily.",
            "If the credit side is bigger, suspense is shown on the **debit** side; if the debit side is bigger, it is shown on the **credit** side.",
            "One-sided errors are rectified **through the suspense account**; once all such errors are corrected, it closes by itself.",
            "If it cannot be closed, a debit balance is shown on the assets side and a credit balance on the liabilities side of the balance sheet."
          ]
        },
        {
          heading: "Rectification of errors",
          points: [
            "**Two-sided errors** are corrected by a journal entry between the accounts concerned, at any stage.",
            "**One-sided errors** found **before** the trial balance is prepared are corrected by an extra posting or a note in the account concerned, without a journal entry.",
            "One-sided errors found **after** the trial balance are corrected by a journal entry with the suspense account on the missing side.",
            "Method: write the wrong entry made, write the correct entry, and pass the entry that bridges the two.",
            "Errors in nominal accounts (sales, purchases, expenses, incomes) change the **net profit**; errors only in real or personal accounts do not."
          ]
        }
      ],
      formulas: [
        "If the ledger is arithmetically accurate: Total of debit balances = Total of credit balances",
        "Rectification entry = Correct entry − Wrong entry already made",
        "Credit sale to Ram ₹5,000 not recorded at all: Ram's A/c Dr. → To Sales A/c ₹5,000",
        "Furniture bought debited to Purchases A/c (error of principle): Furniture A/c Dr. → To Purchases A/c",
        "Sales book undercast by ₹1,000 (found after trial balance): Suspense A/c Dr. → To Sales A/c ₹1,000",
        "Wages ₹800 posted to the credit of Wages A/c (found after trial balance): Wages A/c Dr. → To Suspense A/c ₹1,600 (twice the amount)",
        "Credit sale to Mohan ₹10,000 entered in the purchases book: Mohan's A/c Dr. ₹20,000 → To Purchases A/c ₹10,000, To Sales A/c ₹10,000"
      ],
      terms: [
        { term: "Trial balance", meaning: "A statement of debit and credit balances of all ledger accounts on a date, prepared to check the **arithmetical accuracy** of the ledger." },
        { term: "Suspense account", meaning: "A temporary account to which the difference in a trial balance is transferred until the errors are found and rectified." },
        { term: "Error of omission", meaning: "An error where a transaction is left out completely, or recorded in the journal but not posted to the ledger (partial omission)." },
        { term: "Error of principle", meaning: "An error caused by ignoring accounting principles, e.g. treating capital expenditure as revenue expenditure." },
        { term: "Compensating errors", meaning: "Two or more errors whose effects cancel each other, so the trial balance still agrees." },
        { term: "One-sided error", meaning: "An error that affects only one account, such as wrong totalling of the sales book; it is rectified through the suspense account." }
      ],
      examples: [
        {
          q: "A trial balance did not agree and the difference was put to a suspense account. The following errors were found: (i) the sales book was overcast by ₹2,000; (ii) a purchase of ₹3,500 from Gupta was correctly entered in the purchases book but posted to Gupta's account as ₹5,300; (iii) repairs of ₹1,200 were debited to Building A/c. Pass the rectifying entries and find the opening balance of the suspense account.",
          steps: [
            "(i) Overcasting the sales book gave Sales A/c an excess credit of ₹2,000: Sales A/c Dr. ₹2,000 → To Suspense A/c ₹2,000.",
            "(ii) Gupta was credited ₹5,300 instead of ₹3,500, an excess credit of ₹1,800: Gupta's A/c Dr. ₹1,800 → To Suspense A/c ₹1,800.",
            "(iii) Repairs debited to Building is an error of principle affecting two accounts equally, so no suspense: Repairs A/c Dr. ₹1,200 → To Building A/c ₹1,200.",
            "Suspense A/c is credited ₹2,000 + ₹1,800 = ₹3,800 to close it, so it must have started with a debit balance of ₹3,800.",
            "This means the credit side of the trial balance was ₹3,800 more than the debit side."
          ],
          answer: "Suspense A/c had an opening debit balance of ₹3,800"
        },
        {
          q: "A trader's net profit was ₹80,000. Later these errors were found: (i) machinery bought for ₹20,000 was debited to Purchases A/c; (ii) a credit sale of ₹6,000 was not recorded at all; (iii) rent paid ₹3,000 was debited to the landlord's personal account. Find the correct net profit (ignore depreciation).",
          steps: [
            "(i) Purchases were overstated by ₹20,000, so profit was understated: add ₹20,000.",
            "(ii) Sales were understated by ₹6,000, so profit was understated: add ₹6,000.",
            "(iii) Rent, an expense, was not charged to profit and loss, so profit was overstated: deduct ₹3,000.",
            "Correct net profit = 80,000 + 20,000 + 6,000 − 3,000 = ₹1,03,000."
          ],
          answer: "Correct net profit = ₹1,03,000"
        }
      ],
      qa: [
        { q: "State any three errors that are not disclosed by a trial balance.", a: "(1) **Error of complete omission**, e.g. a credit sale not recorded at all. (2) **Error of principle**, e.g. purchase of furniture debited to Purchases A/c. (3) **Compensating errors**, where one error cancels another. Also: a wrong amount entered in the book of original entry, and posting to the correct side of a wrong account." },
        { q: "What is a suspense account? When is it opened?", a: "A **suspense account** is a temporary account to which the difference in the trial balance is transferred when the trial balance does not agree and the errors cannot be located at once. It is opened so that the financial statements can be prepared on time. As one-sided errors are found and rectified through it, the account closes." },
        { q: "Pass the rectifying entry: goods of ₹2,500 withdrawn by the proprietor for personal use were not recorded.", a: "This is an **error of complete omission**, so no suspense account is needed. Rectifying entry: **Drawings A/c Dr. ₹2,500 → To Purchases A/c ₹2,500** (being goods withdrawn for personal use, now recorded)." }
      ],
      quiz: [
        {
          q: "Purchase of furniture debited to Purchases A/c is an error of:",
          options: ["Omission", "Principle", "Commission", "Compensating nature"],
          answer: 1,
          explain: "Capital expenditure (furniture) has been treated as revenue (purchases of goods): an **error of principle**."
        },
        {
          q: "Which of the following errors is disclosed by a trial balance?",
          options: ["Complete omission of a transaction", "Error of principle", "Wrong totalling of the sales book", "Compensating errors"],
          answer: 2,
          explain: "Wrong totalling affects only the Sales A/c (one side), so the trial balance will **not agree**."
        },
        {
          q: "The difference in a trial balance is temporarily transferred to:",
          options: ["Suspense A/c", "Capital A/c", "Profit and Loss A/c", "Drawings A/c"],
          answer: 0,
          explain: "A **suspense account** holds the difference until the errors are located and rectified."
        },
        {
          q: "Salary of ₹4,000 paid was posted to the credit of Salary A/c. To rectify it, Salary A/c must be debited with:",
          options: ["₹4,000", "₹2,000", "₹12,000", "₹8,000"],
          answer: 3,
          explain: "₹4,000 is needed to cancel the wrong credit and another ₹4,000 to record the correct debit: **₹8,000** (Suspense A/c credited)."
        },
        {
          q: "A credit sale of ₹10,000 to Mohan was recorded in the purchases book. The rectifying entry is:",
          options: ["Mohan's A/c Dr. ₹10,000 → To Sales A/c ₹10,000", "Sales A/c Dr. ₹10,000 → To Purchases A/c ₹10,000", "Mohan's A/c Dr. ₹20,000 → To Purchases A/c ₹10,000, To Sales A/c ₹10,000", "Purchases A/c Dr. ₹10,000 → To Mohan's A/c ₹10,000"],
          answer: 2,
          explain: "Purchases was wrongly debited and Mohan wrongly credited. Mohan must be debited **₹20,000** (cancel the credit and record the debit), Purchases credited ₹10,000 and Sales credited ₹10,000."
        },
        {
          q: "A trial balance is prepared to check the:",
          options: ["Arithmetical accuracy of the ledger", "Net profit for the year", "Financial position of the business", "Cash balance"],
          answer: 0,
          explain: "Its main purpose is to check the **arithmetical accuracy** of ledger posting and balancing."
        }
      ]
    },

    // ───────────────────────────── 7. Depreciation, Provisions and Reserves ─────────────────────────────
    {
      id: "depreciation-provisions-and-reserves",
      title: "Depreciation, Provisions and Reserves",
      section: "Financial Accounting",
      summary: "Meaning, causes and need for depreciation, the straight line and written down value methods, ways of recording depreciation and disposal of assets, and the difference between provisions and reserves.",
      notes: [
        {
          heading: "Meaning and features of depreciation",
          points: [
            "**Depreciation** is the fall in the value of a fixed (depreciable) asset due to use, passage of time or obsolescence.",
            "It is a **permanent, gradual and continuous** decline, charged against the revenue of each period.",
            "It is a **non-cash expense**: no cash goes out when depreciation is charged.",
            "Related terms: **depletion** for natural resources such as mines and quarries; **amortisation** for intangible assets such as patents and copyrights."
          ]
        },
        {
          heading: "Causes, need and factors",
          points: [
            "Causes: **wear and tear** from use, **expiry of legal rights** (lease, patent), **obsolescence** (new technology or change in demand) and **abnormal factors** (accidents).",
            "Need: proper **matching** of cost with revenue, a **true and fair** financial position, tax deduction, and compliance with law.",
            "Factors: **cost** of the asset (including freight and installation), **estimated useful life**, **estimated net residual (scrap) value**, and **depreciable cost** (cost − residual value)."
          ]
        },
        {
          heading: "Straight line method (SLM)",
          points: [
            "Also called the **fixed instalment** or **original cost** method: the **same amount** is charged every year.",
            "Annual depreciation = (Cost − Scrap value) ÷ Useful life. The asset can be written down to zero or to its scrap value.",
            "Simple to use; suitable for **leasehold property, patents and copyrights**, whose use is spread evenly over time.",
            "Drawback: the total charge (depreciation + repairs) rises in later years as repairs increase."
          ]
        },
        {
          heading: "Written down value method (WDV)",
          points: [
            "Also called the **reducing balance** or **diminishing balance** method: a fixed rate is applied to the **opening book value** each year.",
            "Depreciation is **highest in the first year** and falls every year; the asset is never reduced to zero.",
            "The total charge (depreciation + repairs) stays fairly even, as depreciation falls while repairs rise.",
            "Accepted by income tax law; suitable for **plant and machinery, vehicles** and assets that become obsolete quickly."
          ]
        },
        {
          heading: "Recording depreciation and disposal",
          points: [
            "**Charging to the asset account**: Depreciation A/c Dr. → To Asset A/c. The asset appears at book value (cost less depreciation to date).",
            "**Provision for depreciation (accumulated depreciation) account**: Depreciation A/c Dr. → To Provision for Depreciation A/c. The asset stays at **original cost**, and the accumulated depreciation is shown as a deduction from it.",
            "In both methods depreciation is transferred: Profit and Loss A/c Dr. → To Depreciation A/c.",
            "On sale, book value is compared with the sale price; under the provision method an **Asset Disposal A/c** is used to find the profit or loss."
          ]
        },
        {
          heading: "Provisions and reserves",
          points: [
            "A **provision** is a **charge against profit** for a known liability or expected loss whose amount is uncertain, e.g. provision for doubtful debts, depreciation or taxation. It is made even if there is a loss.",
            "A **reserve** is an **appropriation of profit** to strengthen the financial position; it is made only when there are profits.",
            "**Revenue reserves** come from operating profits: **general reserve** (free, for any purpose) and **specific reserves** (dividend equalisation reserve, debenture redemption reserve).",
            "**Capital reserve** comes from **capital profits**, e.g. profit on sale of fixed assets, profit on revaluation, profit on reissue of forfeited shares; it is generally not used for dividends.",
            "A **secret reserve** is a hidden reserve created by undervaluing assets or overvaluing liabilities; it does not appear in the balance sheet."
          ]
        }
      ],
      formulas: [
        "Cost of asset = Purchase price + Freight + Installation and other costs to make it ready for use",
        "SLM: Annual depreciation = (Original cost − Estimated scrap value) ÷ Estimated useful life",
        "SLM rate = Annual depreciation ÷ Original cost × 100",
        "WDV: Depreciation = Opening book value × Rate ÷ 100",
        "Profit or loss on sale = Sale price − Book value on the date of sale",
        "Charging to asset A/c: Depreciation A/c Dr. → To Asset A/c;  then Profit and Loss A/c Dr. → To Depreciation A/c",
        "Provision method: Depreciation A/c Dr. → To Provision for Depreciation A/c",
        "Sale (provision method): Asset Disposal A/c Dr. → To Asset A/c (original cost);  Provision for Depreciation A/c Dr. → To Asset Disposal A/c;  Bank A/c Dr. → To Asset Disposal A/c",
        "Provision for doubtful debts: Profit and Loss A/c Dr. → To Provision for Doubtful Debts A/c",
        "General reserve: Profit and Loss A/c Dr. → To General Reserve A/c (appropriation of profit)"
      ],
      terms: [
        { term: "Depreciation", meaning: "A permanent, gradual and continuous fall in the value of a fixed asset due to use, passage of time or obsolescence." },
        { term: "Depletion", meaning: "Reduction in the value of **natural resources** (mines, quarries, oil wells) as they are extracted." },
        { term: "Amortisation", meaning: "Writing off the cost of **intangible assets** such as patents, copyrights and trademarks over their useful life." },
        { term: "Obsolescence", meaning: "An asset becoming out of date because of new technology or a change in demand, even if it still works." },
        { term: "Provision", meaning: "An amount charged against profit for a known liability or expected loss whose exact amount is uncertain." },
        { term: "Secret reserve", meaning: "A hidden reserve, created by undervaluing assets or overvaluing liabilities, that does not appear in the balance sheet." }
      ],
      examples: [
        {
          q: "A machine was bought on 1 April 2022 for ₹1,80,000 and ₹20,000 was spent on its installation. Its useful life is 8 years and its scrap value ₹16,000. Find the annual depreciation and rate under the straight line method, and its book value on 31 March 2025 (accounts are closed on 31 March).",
          steps: [
            "Cost = 1,80,000 + 20,000 = ₹2,00,000 (installation is part of cost).",
            "Annual depreciation = (2,00,000 − 16,000) ÷ 8 = 1,84,000 ÷ 8 = ₹23,000.",
            "Rate = 23,000 ÷ 2,00,000 × 100 = 11.5% p.a. on original cost.",
            "Depreciation for 3 years (2022-23 to 2024-25) = 3 × 23,000 = ₹69,000.",
            "Book value on 31 March 2025 = 2,00,000 − 69,000 = ₹1,31,000."
          ],
          answer: "Annual depreciation ₹23,000; rate 11.5%; book value ₹1,31,000"
        },
        {
          q: "Machinery costing ₹1,00,000 was bought on 1 April 2022. Depreciation is charged at 20% p.a. by the written down value method, and accounts are closed on 31 March. On 1 April 2025 the machine was sold for ₹45,000. Find the profit or loss on sale.",
          steps: [
            "2022-23: depreciation = 20% of 1,00,000 = ₹20,000; book value = ₹80,000.",
            "2023-24: depreciation = 20% of 80,000 = ₹16,000; book value = ₹64,000.",
            "2024-25: depreciation = 20% of 64,000 = ₹12,800; book value on 1 April 2025 = ₹51,200.",
            "Sale price ₹45,000 is less than the book value of ₹51,200.",
            "Loss on sale = 51,200 − 45,000 = ₹6,200, debited to Profit and Loss A/c."
          ],
          answer: "Loss on sale = ₹6,200"
        }
      ],
      qa: [
        { q: "Distinguish between the straight line method and the written down value method (any three points).", a: "(1) **Basis**: SLM is charged on original cost; WDV on the opening book value. (2) **Amount**: equal every year under SLM; decreasing every year under WDV. (3) **Book value**: SLM can reduce it to zero or scrap value; WDV never reduces it to zero. (4) **Total charge**: under SLM, depreciation + repairs rises over the years; under WDV it stays fairly even. (5) **Tax**: WDV is accepted by income tax law." },
        { q: "Differentiate between provision and reserve.", a: "(1) A **provision** is a **charge against profit**; a **reserve** is an **appropriation of profit**. (2) A provision meets a known liability or expected loss; a reserve strengthens the financial position. (3) A provision must be made even if there is a loss; a reserve only when there is a profit. (4) A provision is deducted from the asset or shown as a liability; a reserve is shown under capital (reserves and surplus). (5) Provisions cannot be used for dividends; revenue reserves can be." },
        { q: "Explain the need for providing depreciation.", a: "(1) **Matching costs and revenue**: the cost of an asset used to earn revenue must be charged over its useful life. (2) **True and fair position**: without depreciation, assets would be overstated in the balance sheet. (3) **Tax**: depreciation is an allowable deduction for income tax. (4) **Compliance with law**: the Companies Act requires companies to provide depreciation. It also keeps funds in the business, since less profit is available for withdrawal." }
      ],
      quiz: [
        {
          q: "Under the written down value method, the amount of depreciation:",
          options: ["Remains the same every year", "Decreases every year", "Increases every year", "Is charged only in the first year"],
          answer: 1,
          explain: "A fixed rate on a **falling book value** gives a smaller amount every year."
        },
        {
          q: "A machine costs ₹50,000, its scrap value is ₹5,000 and its life is 9 years. Annual depreciation under SLM is:",
          options: ["₹5,000", "₹5,556", "₹4,500", "₹6,111"],
          answer: 0,
          explain: "(50,000 − 5,000) ÷ 9 = **₹5,000**. ₹5,556 ignores the scrap value."
        },
        {
          q: "Depletion is the term used for:",
          options: ["Writing off intangible assets", "Fall in value due to new inventions", "Decrease in the value of natural resources such as mines", "Fall in the market price of shares"],
          answer: 2,
          explain: "**Depletion** applies to wasting natural resources. Writing off intangibles is amortisation; new inventions cause obsolescence."
        },
        {
          q: "Provision for doubtful debts is created by debiting:",
          options: ["Debtors A/c", "Profit and Loss A/c", "General Reserve A/c", "Capital A/c"],
          answer: 1,
          explain: "A provision is a **charge against profit**: Profit and Loss A/c Dr. → To Provision for Doubtful Debts A/c."
        },
        {
          q: "Machinery bought for ₹2,00,000 is depreciated at 10% p.a. on WDV. Depreciation for the second year is:",
          options: ["₹20,000", "₹16,200", "₹38,000", "₹18,000"],
          answer: 3,
          explain: "Year 1: ₹20,000, book value ₹1,80,000. Year 2: 10% of 1,80,000 = **₹18,000**."
        },
        {
          q: "General reserve is an example of a:",
          options: ["Capital reserve", "Specific reserve", "Revenue reserve", "Provision"],
          answer: 2,
          explain: "General reserve is created out of operating profits and is free for any purpose: a **revenue reserve**."
        }
      ]
    },

    // ───────────────────────────── 8. Financial Statements – I ─────────────────────────────
    {
      id: "financial-statements-1",
      title: "Financial Statements – I",
      section: "Financial Accounting",
      summary: "Objectives and users of financial statements, capital and revenue items, preparing the trading and profit and loss account and the balance sheet of a sole proprietor, operating profit, and opening and closing entries.",
      notes: [
        {
          heading: "Financial statements and their users",
          points: [
            "Financial statements are prepared at the end of the accounting period: the **trading and profit and loss account** (income statement) and the **balance sheet** (position statement).",
            "They are prepared from the trial balance, after taking adjustments into account.",
            "Users (stakeholders): owners, managers, lenders, creditors, investors, employees, government and tax authorities.",
            "Objectives: find the **profit or loss** for the period and show the **financial position** at its end."
          ]
        },
        {
          heading: "Capital and revenue",
          points: [
            "**Capital expenditure** gives benefit for more than one year: buying or improving fixed assets, and installation or legal charges on their purchase. It goes to the balance sheet.",
            "**Revenue expenditure** gives benefit within the year: wages, rent, salaries, repairs, carriage on goods. It is charged to the trading or profit and loss account.",
            "**Deferred revenue expenditure** is revenue in nature but heavy, with benefit over a few years (e.g. a big advertising campaign); it is written off over those years.",
            "**Capital receipts** (capital introduced, loans, sale of fixed assets) go to the balance sheet; **revenue receipts** (sales, commission, interest received) go to the profit and loss account."
          ]
        },
        {
          heading: "Trading account",
          points: [
            "Finds **gross profit**: the difference between net sales and the cost of goods sold.",
            "Debit side: opening stock, purchases less returns, and **direct expenses** (wages, carriage inwards, freight, fuel and power, import duty, dock charges, manufacturing expenses).",
            "Credit side: sales less returns, and closing stock.",
            "A credit balance is **gross profit**, transferred to the credit of the profit and loss account; a debit balance is gross loss."
          ]
        },
        {
          heading: "Profit and loss account",
          points: [
            "Finds **net profit**: gross profit plus other incomes minus indirect expenses and losses.",
            "Debit side: **indirect expenses** such as salaries, office rent, carriage outwards, advertising, depreciation, bad debts, discount allowed, interest paid, and losses such as loss by fire.",
            "Credit side: gross profit, discount received, commission received, rent received, interest received.",
            "**Operating profit** is profit from the main business operations; it excludes non-operating items such as interest on investments, profit on sale of assets and loss by fire.",
            "Net profit is added to the owner's capital in the balance sheet; net loss is deducted."
          ]
        },
        {
          heading: "Balance sheet",
          points: [
            "A statement of the **assets and liabilities** of the business on a particular date; it is not an account.",
            "**Grouping** means putting similar items under one heading (e.g. all debtors as 'Sundry debtors'); **marshalling** means arranging them in a particular order.",
            "**Order of liquidity**: most liquid assets (cash) first and liabilities payable soonest first. **Order of permanence**: fixed assets (goodwill, land and buildings) first and capital first.",
            "Capital is shown as: opening capital + additional capital + net profit − drawings."
          ]
        },
        {
          heading: "Opening and closing entries",
          points: [
            "**Closing entries** transfer the balances of nominal accounts (purchases, sales, expenses, incomes) to the trading and profit and loss account at the year-end.",
            "Real and personal accounts are not closed; their balances are carried forward to the next year.",
            "An **opening entry** is passed at the start of the next year to bring these balances into the new books: Assets A/cs Dr. → To Liabilities A/cs, To Capital A/c."
          ]
        }
      ],
      formulas: [
        "Net sales = Sales − Sales returns;  Net purchases = Purchases − Purchases returns",
        "Cost of goods sold = Opening stock + Net purchases + Direct expenses − Closing stock",
        "Gross profit = Net sales − Cost of goods sold",
        "Net profit = Gross profit + Other incomes − Indirect expenses and losses",
        "Operating profit = Net profit + Non-operating expenses and losses − Non-operating incomes and gains",
        "Closing capital = Opening capital + Additional capital + Net profit − Drawings",
        "Closing stock: Closing Stock A/c Dr. → To Trading A/c",
        "Closing entry: Trading A/c Dr. → To Opening Stock A/c, To Purchases A/c, To Wages A/c, To Carriage Inwards A/c",
        "Transfer of net profit: Profit and Loss A/c Dr. → To Capital A/c",
        "Opening entry: Sundry Assets A/cs Dr. → To Sundry Liabilities A/cs, To Capital A/c"
      ],
      terms: [
        { term: "Capital expenditure", meaning: "Expenditure whose benefit lasts for more than one year, such as buying or improving fixed assets; shown in the balance sheet." },
        { term: "Revenue expenditure", meaning: "Expenditure whose benefit is used up within the year, such as wages, rent and repairs; charged to profit and loss." },
        { term: "Deferred revenue expenditure", meaning: "Heavy revenue expenditure whose benefit lasts a few years, such as a large advertising campaign; written off over those years." },
        { term: "Gross profit", meaning: "Excess of net sales over the cost of goods sold; the balance of the trading account." },
        { term: "Operating profit", meaning: "Profit earned from the **normal operations** of the business, excluding non-operating incomes and losses." },
        { term: "Marshalling", meaning: "Arranging assets and liabilities in the balance sheet in a particular order: liquidity or permanence." }
      ],
      examples: [
        {
          q: "From the following, find the gross profit and net profit: opening stock ₹30,000; purchases ₹1,60,000; purchases returns ₹10,000; wages ₹15,000; carriage inwards ₹5,000; sales ₹2,80,000; sales returns ₹20,000; closing stock ₹40,000; salaries ₹24,000; rent ₹12,000; carriage outwards ₹4,000; commission received ₹6,000.",
          steps: [
            "Net purchases = 1,60,000 − 10,000 = ₹1,50,000; net sales = 2,80,000 − 20,000 = ₹2,60,000.",
            "Cost of goods sold = 30,000 + 1,50,000 + 15,000 + 5,000 − 40,000 = ₹1,60,000.",
            "Gross profit = 2,60,000 − 1,60,000 = ₹1,00,000.",
            "Indirect expenses = salaries 24,000 + rent 12,000 + carriage outwards 4,000 = ₹40,000.",
            "Net profit = 1,00,000 + 6,000 − 40,000 = ₹66,000."
          ],
          answer: "Gross profit ₹1,00,000; net profit ₹66,000"
        },
        {
          q: "A trader's net profit for the year is ₹1,20,000, after charging a loss by fire of ₹15,000 and after including a profit on sale of old machinery of ₹6,000 and interest on investments of ₹4,000. (i) Find the operating profit. (ii) If opening capital was ₹4,00,000 and drawings ₹48,000, find the closing capital.",
          steps: [
            "Loss by fire is a non-operating loss: add back ₹15,000.",
            "Profit on sale of machinery and interest on investments are non-operating incomes: deduct 6,000 + 4,000 = ₹10,000.",
            "Operating profit = 1,20,000 + 15,000 − 10,000 = ₹1,25,000.",
            "Closing capital = Opening capital + Net profit − Drawings = 4,00,000 + 1,20,000 − 48,000 = ₹4,72,000."
          ],
          answer: "Operating profit ₹1,25,000; closing capital ₹4,72,000"
        }
      ],
      qa: [
        { q: "Distinguish between capital expenditure and revenue expenditure.", a: "(1) **Benefit**: capital expenditure benefits more than one year; revenue expenditure benefits only the current year. (2) **Purpose**: capital expenditure acquires or improves fixed assets; revenue expenditure maintains them or runs the business. (3) **Treatment**: capital expenditure is shown in the balance sheet; revenue expenditure is charged to the trading or profit and loss account. (4) **Nature**: capital expenditure is non-recurring; revenue expenditure is usually recurring." },
        { q: "What is meant by grouping and marshalling of assets and liabilities?", a: "**Grouping** means showing items of a similar nature under a common heading, e.g. the balances of all customers as 'Sundry debtors' and all suppliers as 'Sundry creditors'. **Marshalling** means arranging assets and liabilities in a particular order in the balance sheet, either in the **order of liquidity** (most liquid first) or in the **order of permanence** (most permanent first)." },
        { q: "Classify as capital or revenue expenditure: (a) wages paid for installing a new machine (b) repairs to an existing machine (c) legal charges paid on buying land (d) carriage inwards on goods purchased.", a: "(a) **Capital** – installation cost is part of the machine's cost. (b) **Revenue** – it only maintains the asset. (c) **Capital** – it is part of the cost of the land. (d) **Revenue** – it is a direct expense on goods, charged to the trading account." }
      ],
      quiz: [
        {
          q: "Carriage inwards is debited to:",
          options: ["Trading A/c", "Profit and Loss A/c", "Balance sheet", "Capital A/c"],
          answer: 0,
          explain: "Carriage inwards is a **direct expense** on purchases, so it goes to the trading account."
        },
        {
          q: "Wages paid for the installation of a new machine are:",
          options: ["Revenue expenditure", "Capital expenditure", "Deferred revenue expenditure", "Drawings"],
          answer: 1,
          explain: "Installation is needed to make the machine ready for use, so it is added to its cost: **capital expenditure**."
        },
        {
          q: "Opening stock ₹20,000, net purchases ₹80,000, direct expenses ₹10,000 and closing stock ₹30,000. The cost of goods sold is:",
          options: ["₹1,10,000", "₹90,000", "₹80,000", "₹1,40,000"],
          answer: 2,
          explain: "20,000 + 80,000 + 10,000 − 30,000 = **₹80,000**."
        },
        {
          q: "When a balance sheet shows goodwill and land and buildings first, the assets are arranged in the order of:",
          options: ["Liquidity", "Value", "Date of purchase", "Permanence"],
          answer: 3,
          explain: "Starting with the most permanent assets is the **order of permanence**."
        },
        {
          q: "Which of the following is a non-operating expense?",
          options: ["Salaries", "Loss by fire", "Office rent", "Advertising"],
          answer: 1,
          explain: "**Loss by fire** is abnormal and not part of normal operations; the others are operating expenses."
        },
        {
          q: "Heavy advertising on launching a new product, whose benefit is expected to last 3–4 years, is:",
          options: ["Capital expenditure", "Revenue expenditure", "Deferred revenue expenditure", "A capital loss"],
          answer: 2,
          explain: "It is revenue in nature but its benefit extends over a few years: **deferred revenue expenditure**."
        }
      ]
    },

    // ───────────────────────────── 9. Financial Statements – II ─────────────────────────────
    {
      id: "financial-statements-2",
      title: "Financial Statements – II",
      section: "Financial Accounting",
      summary: "Adjustments while preparing final accounts: closing stock, outstanding and prepaid expenses, accrued income and income received in advance, depreciation, bad debts and provisions, manager's commission, interest on capital and drawings, and abnormal loss.",
      notes: [
        {
          heading: "Need for adjustments",
          points: [
            "The trial balance may leave out items that belong to the year but are not yet recorded, such as outstanding expenses or depreciation.",
            "Adjustments make the statements follow the **accrual** and **matching** concepts, so they show the true profit and financial position.",
            "Every adjustment has a **two-fold effect**: usually once in the trading or profit and loss account and once in the balance sheet.",
            "Adjustments are given below the trial balance; items already inside the trial balance are shown only once."
          ]
        },
        {
          heading: "Closing stock, outstanding and prepaid expenses",
          points: [
            "**Closing stock** (outside the trial balance): credit the trading account and show it as a current asset.",
            "**Outstanding expenses** (due but unpaid): add to the expense in the trading or profit and loss account and show as a **current liability**.",
            "**Prepaid expenses** (paid in advance): deduct from the expense and show as a **current asset**.",
            "If outstanding or prepaid items appear **inside** the trial balance, they are shown only in the balance sheet."
          ]
        },
        {
          heading: "Accrued income and income received in advance",
          points: [
            "**Accrued income** (earned but not yet received, e.g. interest due on investments): add to the income and show as a **current asset**.",
            "**Income received in advance** (unearned, e.g. rent received for next year): deduct from the income and show as a **current liability**.",
            "Both follow the revenue recognition concept: income belongs to the year in which it is earned."
          ]
        },
        {
          heading: "Depreciation and interest on capital and drawings",
          points: [
            "**Depreciation**: debit the profit and loss account and deduct from the asset in the balance sheet.",
            "**Interest on capital** is an expense for the business: debit the profit and loss account and add to capital.",
            "**Interest on drawings** is an income for the business: credit the profit and loss account and deduct from capital (along with drawings).",
            "Interest on capital is calculated on opening capital, plus interest on any additional capital for the period it was used."
          ]
        },
        {
          heading: "Bad debts and provisions on debtors",
          points: [
            "**Further bad debts** (given as an adjustment): add to bad debts in the profit and loss account and deduct from debtors.",
            "The **provision for doubtful debts** is calculated on debtors **after deducting further bad debts**.",
            "Charge to profit and loss = bad debts + further bad debts + new provision − old provision; if the result is negative, it is credited to profit and loss.",
            "In the balance sheet, debtors are shown less further bad debts and less the new provision.",
            "**Provision for discount on debtors** is calculated on debtors after deducting further bad debts and the provision for doubtful debts."
          ]
        },
        {
          heading: "Manager's commission and abnormal loss",
          points: [
            "Manager's commission on net profit **before charging such commission** = Net profit × Rate ÷ 100.",
            "Commission on net profit **after charging such commission** = Net profit before commission × Rate ÷ (100 + Rate).",
            "Commission is debited to the profit and loss account and, if unpaid, shown as a current liability.",
            "**Loss of stock by fire**: credit the trading account with the cost of stock lost; show the insurance claim admitted as a current asset and debit the uninsured part to the profit and loss account."
          ]
        }
      ],
      formulas: [
        "Outstanding expense: Expense A/c Dr. → To Outstanding Expense A/c  (add to expense; current liability)",
        "Prepaid expense: Prepaid Expense A/c Dr. → To Expense A/c  (deduct from expense; current asset)",
        "Accrued income: Accrued Income A/c Dr. → To Income A/c  (add to income; current asset)",
        "Income received in advance: Income A/c Dr. → To Income Received in Advance A/c  (deduct from income; current liability)",
        "Interest on capital: Interest on Capital A/c Dr. → To Capital A/c",
        "Interest on drawings: Drawings (or Capital) A/c Dr. → To Interest on Drawings A/c",
        "Further bad debts: Bad Debts A/c Dr. → To Debtors A/c",
        "Charge to P&L = Bad debts + Further bad debts + New provision − Old provision",
        "Debtors in balance sheet = Debtors − Further bad debts − New provision",
        "Manager's commission (before charging it) = Net profit × Rate ÷ 100",
        "Manager's commission (after charging it) = Net profit before commission × Rate ÷ (100 + Rate)",
        "Loss by fire: Loss by Fire A/c Dr., Insurance Claim A/c Dr. → To Trading A/c"
      ],
      terms: [
        { term: "Outstanding expense", meaning: "An expense of the current year that is due but **not yet paid**; shown as a current liability." },
        { term: "Prepaid expense", meaning: "An expense paid in advance for a period falling in the **next year**; shown as a current asset." },
        { term: "Accrued income", meaning: "Income **earned** during the year but **not yet received**; shown as a current asset." },
        { term: "Income received in advance", meaning: "Income received during the year that relates to a future period (unearned income); shown as a current liability." },
        { term: "Bad debts", meaning: "Amounts due from debtors that have become **irrecoverable** and are written off as a loss." },
        { term: "Provision for doubtful debts", meaning: "An amount charged to profit and loss for debts that **may** not be recovered in future, based on conservatism." }
      ],
      examples: [
        {
          q: "The trial balance shows debtors ₹82,000, bad debts ₹1,500 and provision for doubtful debts ₹3,000. Adjustments: write off further bad debts ₹2,000, and create a provision for doubtful debts at 5% on debtors. Find the amount charged to the profit and loss account and the debtors shown in the balance sheet.",
          steps: [
            "Debtors after further bad debts = 82,000 − 2,000 = ₹80,000.",
            "New provision = 5% of 80,000 = ₹4,000.",
            "Charge to profit and loss = 1,500 + 2,000 + 4,000 − 3,000 = ₹4,500.",
            "Balance sheet: debtors = 82,000 − 2,000 − 4,000 = ₹76,000."
          ],
          answer: "Charge to profit and loss ₹4,500; debtors shown at ₹76,000"
        },
        {
          q: "Show the treatment for the year ended 31 March 2025: (i) salaries in the trial balance ₹60,000, of which ₹5,000 more is outstanding; (ii) insurance premium ₹12,000 paid on 1 July 2024 for one year; (iii) the manager gets 10% commission on net profit after charging such commission, and net profit before commission is ₹2,20,000.",
          steps: [
            "(i) Salaries in profit and loss = 60,000 + 5,000 = ₹65,000; outstanding salaries ₹5,000 shown as a current liability.",
            "(ii) The premium covers 1 July 2024 to 30 June 2025, so April–June 2025 (3 months) is prepaid: 12,000 × 3/12 = ₹3,000.",
            "Insurance in profit and loss = 12,000 − 3,000 = ₹9,000; prepaid insurance ₹3,000 shown as a current asset.",
            "(iii) Commission = 2,20,000 × 10 ÷ 110 = ₹20,000. Check: profit after commission = ₹2,00,000, and 10% of it is ₹20,000.",
            "Commission ₹20,000 is debited to profit and loss and shown as outstanding commission (current liability)."
          ],
          answer: "Salaries ₹65,000; insurance ₹9,000 (prepaid ₹3,000); manager's commission ₹20,000"
        }
      ],
      qa: [
        { q: "Explain the treatment of outstanding expenses in the final accounts, with an example.", a: "Outstanding expenses belong to the current year but are unpaid. (1) They are **added** to the expense concerned in the trading or profit and loss account. (2) They are shown as a **current liability** in the balance sheet. Example: wages in the trial balance ₹40,000 and outstanding wages ₹4,000 → the trading account shows wages ₹44,000 and the balance sheet shows outstanding wages ₹4,000. Entry: Wages A/c Dr. → To Outstanding Wages A/c." },
        { q: "Why is a provision for doubtful debts created? How is it shown in the balance sheet?", a: "Some debtors may fail to pay in future. Following **conservatism**, the expected loss is provided for in the current year by debiting the profit and loss account, so that profit is not overstated. In the balance sheet, the provision is **deducted from debtors** (after deducting further bad debts), so that debtors are shown at the amount expected to be realised." },
        { q: "Give the two-fold effect of (a) interest on capital (b) accrued income.", a: "(a) **Interest on capital**: shown on the debit side of the profit and loss account as an expense, and **added to capital** in the balance sheet. (b) **Accrued income**: **added to the income** concerned on the credit side of the profit and loss account, and shown as a **current asset** in the balance sheet." }
      ],
      quiz: [
        {
          q: "Outstanding wages are shown in the balance sheet as a:",
          options: ["Current asset", "Current liability", "Fixed asset", "Deduction from capital"],
          answer: 1,
          explain: "Wages due but unpaid are owed by the business: a **current liability**."
        },
        {
          q: "Prepaid insurance is:",
          options: ["Deducted from insurance in profit and loss and shown as a current asset", "Added to insurance in profit and loss and shown as a current liability", "Deducted from capital in the balance sheet", "Credited to the trading account"],
          answer: 0,
          explain: "The prepaid part belongs to next year, so it is **deducted from the expense** and shown as a **current asset**."
        },
        {
          q: "Net profit before the manager's commission is ₹1,05,000. If the manager gets 5% of net profit after charging his commission, his commission is:",
          options: ["₹5,250", "₹5,000", "₹4,750", "₹5,500"],
          answer: 1,
          explain: "1,05,000 × 5 ÷ 105 = **₹5,000**. ₹5,250 would be 5% before charging the commission."
        },
        {
          q: "Debtors ₹50,000; further bad debts ₹2,000; provision for doubtful debts to be kept at 5%. The new provision is:",
          options: ["₹2,500", "₹2,000", "₹2,600", "₹2,400"],
          answer: 3,
          explain: "The provision is on debtors after further bad debts: 5% of 48,000 = **₹2,400**."
        },
        {
          q: "Income received in advance is shown in the balance sheet as a:",
          options: ["Current asset", "Addition to capital", "Current liability", "Fixed asset"],
          answer: 2,
          explain: "The business still has to provide the service or goods for it, so it is a **current liability**."
        },
        {
          q: "Closing stock given outside the trial balance is shown:",
          options: ["Only in the balance sheet", "On the debit side of the trading account", "Only on the credit side of the trading account", "On the credit side of the trading account and as a current asset in the balance sheet"],
          answer: 3,
          explain: "An adjustment outside the trial balance has a **two-fold effect**: credit the trading account and show it as a current asset."
        }
      ]
    }
  ]
});
