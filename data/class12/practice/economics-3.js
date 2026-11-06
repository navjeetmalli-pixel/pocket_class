// Class 12 Economics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "economics", {
  "national-income-accounting": {
    mcq: [
      M(1, "In the circular flow, households supply factor services to firms and receive", "factor incomes", ["subsidies", "taxes", "intermediate goods"], "Firms pay wages, rent, interest and profit to the households.", "circular-flow-of-income"),
      M(2, "Which of these are factor incomes?", "Wages, rent, interest and profit", ["Taxes, fines and customs duties on imports", "Sales, purchases and stocks", "Exports and imports"], "Factor incomes are payments for the services of labour, land, capital and entrepreneurship.", "circular-flow-of-income"),
      M(3, "Firm A produces goods worth ₹500 and sells them to firm B, which uses them to make goods worth ₹800 and sells these to consumers. GDP by the value added method is", "₹800", ["₹1,300", "₹500", "₹300"], "Value added by A = 500 and by B = 800 − 500 = 300. The sum is ₹800, which equals the value of final goods.", "circular-flow-of-income")
    ],
    written: [
      W(3, "short", "Why do the product, expenditure and income methods of measuring GDP give the same result? Explain with the circular flow of income.", "Households supply factor services and receive factor incomes. They spend these incomes on goods and services produced by firms, so money flows back to firms. Hence value of production = factor incomes = expenditure on final goods.", "circular-flow-of-income")
    ]
  },
  "money-and-banking": {
    mcq: [
      M(1, "On 8 November 2016, which notes ceased to be legal tender in the demonetisation?", "₹500 and ₹1,000 notes", ["₹10 and ₹50 notes", "₹100 and ₹200 notes", "₹2,000 notes and coins"], "These notes could no longer be used as legal tender.", "demonetisation"),
      M(2, "Which of these was NOT a stated aim of demonetisation?", "Raising import duties", ["Curbing black money", "Curbing counterfeit currency", "Promoting digital payments"], "The stated aims were to curb black money, corruption, counterfeit currency and terror financing.", "demonetisation"),
      M(3, "Demonetisation was also expected to push people towards", "digital payments", ["gold hoarding", "barter", "more cash holding"], "It was expected to increase digital payments and bring more savings into the formal banking system.", "demonetisation")
    ],
    written: [
      W(3, "short", "State the date of demonetisation in India and any four aims of the measure.", "It took place on 8 November 2016. Aims: to curb black money, corruption, counterfeit currency and terror financing; to push people towards digital payments and to bring more savings into the formal banking system.", "demonetisation")
    ]
  },
  "determination-of-income-and-employment": {
    mcq: [
      M(1, "Investment is the addition to the stock of physical capital together with", "changes in inventories", ["changes in bank deposits", "changes in consumer prices", "changes in the tax rate"], "Machines, buildings and roads are physical capital.", "investment"),
      M(2, "In this model planned investment is autonomous, which means it", "does not depend on the level of income", ["rises steadily with the level of income", "falls with income", "is always equal to consumption"], "I = Ī, a constant at every level of income.", "investment"),
      M(3, "Because investment is autonomous, the AD line C̄ + Ī + cY is", "parallel to the consumption line", ["steeper than the consumption line", "below the consumption line", "a vertical line"], "AD = C + I adds a constant amount Ī to consumption at every level of income, so the slope c is unchanged.", "investment")
    ],
    written: [
      W(4, "short", "In an economy, C = 80 + 0.75Y and autonomous investment I = ₹40 crore. Find the equilibrium level of income, consumption and saving.", "At equilibrium Y = C + I = 80 + 0.75Y + 40, so 0.25Y = 120 and Y = ₹480 crore. C = 80 + 0.75 × 480 = ₹440 crore. S = Y − C = 480 − 440 = ₹40 crore, which equals I.", "investment")
    ]
  },
  "government-budget-and-the-economy": {
    mcq: [
      M(1, "Borrowing by the government from the RBI (deficit financing) can cause", "inflation", ["a fall in prices", "a fall in money supply", "a fall in imports"], "It creates new money, which raises the money supply.", "financing-deficits-and-public-debt"),
      M(2, "When heavy government borrowing reduces the funds available to private borrowers, this is called", "crowding out", ["the multiplier effect", "disinvestment", "deficit financing"], "Government borrowing can crowd out private investment.", "financing-deficits-and-public-debt"),
      M(3, "The FRBM Act, 2003 set rules to", "bring down the fiscal deficit and the revenue deficit", ["raise the fiscal deficit and the revenue deficit every year", "abolish all taxes", "end all borrowing from abroad"], "FRBM stands for Fiscal Responsibility and Budget Management.", "financing-deficits-and-public-debt")
    ],
    written: [
      W(4, "short", "Revenue receipts are ₹800 crore, capital receipts other than borrowings are ₹100 crore, total expenditure is ₹1,000 crore and interest payments are ₹60 crore. Find the fiscal deficit and the primary deficit. State one consequence of financing it by borrowing from the RBI.", "Fiscal deficit = total expenditure − total receipts other than borrowings = 1,000 − (800 + 100) = ₹100 crore. Primary deficit = 100 − 60 = ₹40 crore. Borrowing from the RBI creates new money, raises the money supply and can cause inflation.", "financing-deficits-and-public-debt")
    ]
  },
  "open-economy-macroeconomics": {
    mcq: [
      M(1, "An open economy trades with other nations in", "goods, services and financial assets", ["only the goods made inside the country", "services only", "gold only"], "It has links in the output, financial and labour markets.", "open-economy-linkages"),
      M(2, "In the financial market linkage of an open economy, residents can", "buy foreign shares and bonds", ["only buy shares of domestic companies", "only sell domestic land", "only buy foreign goods"], "Residents can buy foreign assets and foreigners can buy domestic assets.", "open-economy-linkages"),
      M(3, "The movement of labour between countries is restricted mainly by", "immigration laws", ["export duties on goods", "exchange rates", "interest rates"], "Firms can choose where to produce, but workers cannot move freely because of immigration laws.", "open-economy-linkages"),
      M(1, "Which of these is recorded in the capital account of the balance of payments?", "Foreign direct investment", ["Export of goods and services", "Import of services", "Net current transfers"], "The capital account records transactions that change assets and liabilities: FDI, FPI, external borrowing, NRI deposits and external assistance.", "capital-account"),
      M(2, "Foreigners buying a country's assets is recorded in its capital account as a", "credit", ["debit", "visible item", "current transfer"], "Capital inflows are credits and outflows are debits.", "capital-account"),
      M(3, "A current account deficit must be financed by", "a net capital inflow or use of reserves", ["a rise in the exports of goods alone this year", "stopping all imports", "a rise in the fiscal deficit alone"], "The balance of payments must balance, so the gap is met from capital inflows or reserves.", "capital-account")
    ],
    written: [
      W(3, "short", "Describe the three market linkages of an open economy and one limit on any of them.", "Output market: trade in goods and services gives buyers and sellers wider choice. Financial market: residents can buy foreign assets and foreigners can buy domestic assets. Labour market: firms can choose where to produce and workers where to work, though immigration laws restrict movement of labour.", "open-economy-linkages"),
      W(4, "short", "Calculate the balance of trade and the current account balance (₹ crore): exports of goods 600; imports of goods 800; net exports of services 100; net income from abroad −30; net current transfers 50. How can a deficit be financed?", "Balance of trade = 600 − 800 = −₹200 crore (deficit). Current account balance = −200 + 100 − 30 + 50 = −₹80 crore (deficit). It must be financed by a net capital inflow or by drawing down foreign exchange reserves.", "capital-account")
    ]
  },
  "human-capital-formation": {
    mcq: [
      M(1, "An educated, trained and healthy worker is generally", "more productive", ["less productive", "unable to use machines", "costly only for the state"], "Human capital raises labour productivity.", "human-capital-and-economic-growth"),
      M(2, "Human capital helps people to", "absorb new technology", ["avoid all training and learning", "ignore innovation", "reduce their output"], "It also spreads innovation.", "human-capital-and-economic-growth"),
      M(3, "'Growth and human capital reinforce each other' means that", "higher income pays for more education and health", ["growth removes the need for spending on education", "health spending lowers all incomes", "human capital is unrelated to income"], "The link works in both directions.", "human-capital-and-economic-growth")
    ],
    written: [
      W(3, "short", "Explain how human capital contributes to economic growth. Give one example from India.", "An educated, trained and healthy worker produces more, so human capital raises labour productivity; it spreads innovation and helps people absorb new technology. Growth and human capital reinforce each other. India's success in IT and software services shows this and has made India a growing knowledge economy.", "human-capital-and-economic-growth")
    ]
  },
  "rural-development": {
    mcq: [
      M(1, "Rural development is a plan of action for the development of", "rural areas that lag behind", ["cities with large industries", "foreign trade zones", "the stock market"], "It aims to raise living standards in lagging rural areas.", "meaning-and-key-issues"),
      M(2, "Which of these is a key area of rural development?", "Land reforms", ["Space research", "Stock exchange reforms", "Import of luxury cars"], "Key areas are human resources, land reforms, productive resources and infrastructure.", "meaning-and-key-issues"),
      M(3, "Rural progress is central to India's development because a large share of the workforce depends on", "agriculture", ["mining", "software exports", "defence"], "A large share of India's workers still depends on agriculture.", "meaning-and-key-issues")
    ],
    written: [
      W(4, "short", "Name four key areas of rural development.", "Developing human resources (literacy, especially female literacy, education, skills, health and sanitation); land reforms; development of productive resources; infrastructure such as electricity, irrigation, credit, marketing and roads (research too); special measures for poverty alleviation.", "meaning-and-key-issues")
    ]
  },
  "employment-growth-informalisation": {
    mcq: [
      M(1, "Which sector includes agriculture, forestry, fishing, mining and quarrying?", "Primary sector", ["Secondary sector", "Tertiary sector", "Service sector"], "The primary sector is the main source of employment for most workers, especially in rural areas.", "employment-in-different-sectors"),
      M(2, "Which of these belongs to the secondary sector?", "Construction", ["Trade in goods", "Transport", "Fishing"], "The secondary sector includes manufacturing, construction, and electricity, gas and water supply.", "employment-in-different-sectors"),
      M(3, "In urban areas, the largest share of workers is employed in the", "service sector", ["primary sector", "secondary sector", "mining sector"], "In rural areas agriculture dominates; in urban areas services employ the largest share.", "employment-in-different-sectors")
    ],
    written: [
      W(3, "short", "A town has a population of 4,000, of whom 1,600 are workers. Another 200 people are looking for work but cannot find any. Find the worker-population ratio and the unemployment rate.", "Worker-population ratio = 1,600 ÷ 4,000 × 100 = 40%. Labour force = 1,600 + 200 = 1,800. Unemployment rate = 200 ÷ 1,800 × 100 ≈ 11.1%.", "employment-in-different-sectors")
    ]
  },
  "india-and-its-neighbours": {
    mcq: [
      M(1, "Which of these is a regional grouping of South Asian countries?", "SAARC", ["ASEAN", "BRICS", "G-20"], "Countries form groupings such as SAARC, the EU, ASEAN, G-20 and BRICS to strengthen their economies.", "why-compare-with-neighbours"),
      M(2, "Studying the development paths of neighbouring countries helps India to", "learn from their strengths and weaknesses", ["copy all of their policies without any change", "ignore its own needs", "stop all trade with them"], "Comparisons show what has worked and what has not.", "why-compare-with-neighbours"),
      M(3, "India, Pakistan and China are often compared because they", "began development at about the same time", ["have identical economies today", "were part of one single country until 1980", "have the same population"], "They also have many similar physical endowments.", "why-compare-with-neighbours")
    ],
    written: [
      W(3, "short", "Why is it useful to compare India's development with that of Pakistan and China?", "India, Pakistan and China have many similar physical endowments and began their development journeys at about the same time, so their experiences are comparable. Understanding their paths helps India learn from their strengths and weaknesses.", "why-compare-with-neighbours")
    ]
  },
  });
})();
