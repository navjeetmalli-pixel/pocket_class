// Class 11 Business Studies practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "business", {
  "private-public-and-global-enterprises": {
    mcq: [
      M(1, "India has both privately owned and government-owned enterprises, so its economy is called a", "mixed economy", ["closed economy", "pure capitalist economy", "barter economy"], "A mixed economy has both private and public sectors.", "private-and-public-sectors"),
      M(2, "Which of these is a private sector enterprise?", "A partnership firm", ["Indian Railways", "A statutory corporation", "A departmental undertaking"], "The private sector includes sole proprietorships, partnerships, Joint Hindu Family businesses, cooperatives and companies.", "private-and-public-sectors"),
      M(3, "The roles of the private and public sectors were set out in the Industrial Policy Resolutions of", "1948, 1956 and 1991", ["1935, 1947 and 1950", "1969, 1973 and 1980", "1951, 1961 and 1971"], "These three policy resolutions defined the roles of the two sectors.", "private-and-public-sectors")
    ],
    written: [
      W(3, "short", "Distinguish between the private sector and the public sector, giving two examples of private sector forms.", "The private sector consists of businesses owned by individuals or groups, such as sole proprietorships and partnerships (also Joint Hindu Family businesses, cooperatives and companies). The public sector consists of organisations owned and controlled by the government, wholly or partly.", "private-and-public-sectors")
    ]
  },
  "business-services": {
    mcq: [
      M(1, "A bank accepts deposits from the public for the purpose of", "lending or investment", ["gifting to members", "printing notes", "fixing prices of goods"], "A bank accepts deposits, repayable on demand or otherwise, for lending or investment.", "banks-and-their-functions"),
      M(2, "The central bank of India is the", "Reserve Bank of India", ["State Bank of India", "National Bank for Agriculture and Rural Development", "Punjab National Bank"], "The central bank is a separate type of bank, the Reserve Bank of India.", "banks-and-their-functions"),
      M(3, "Which of these is a form of lending by banks?", "Overdraft", ["Locker facility", "Remittance of funds", "Cheque facility"], "Loans, cash credit, overdraft and discounting of bills are lending functions.", "banks-and-their-functions")
    ],
    written: [
      W(4, "short", "Name the four main types of banks and give three functions of a bank.", "Types: commercial banks, cooperative banks, specialised banks and the central bank (RBI). Functions: accepting deposits, lending (loans, cash credit, overdraft), cheque facility, remittance of funds, and allied services such as lockers (any three).", "banks-and-their-functions")
    ]
  },
  "small-business-and-entrepreneurship": {
    mcq: [
      M(1, "In rural areas, small and cottage industries provide", "non-farm employment", ["only seasonal farm work", "foreign loans for all", "import licences for all"], "They give jobs outside agriculture, reduce poverty and inequality and check migration.", "small-business-in-rural-india-and-its-problems"),
      M(2, "How do small and cottage industries help check migration to cities?", "By giving people jobs in their own villages", ["By raising the price of land in the villages", "By shutting down all the farms in villages", "By ending the use of local skills and materials"], "With work available locally, fewer people need to move to cities.", "small-business-in-rural-india-and-its-problems"),
      M(3, "Which of these is NOT a problem of small businesses?", "Abundant low-cost bank finance", ["Irregular supply of raw materials", "Lack of managerial skills", "Competition from global firms"], "Shortage of finance, not abundance of it, is a problem for small businesses.", "small-business-in-rural-india-and-its-problems")
    ],
    written: [
      W(4, "short", "State two ways in which small business helps rural India and three problems it faces.", "It provides non-farm employment and checks migration to cities (also reduces poverty and inequality, uses local raw materials and skills). Problems: shortage of finance, irregular supply of raw materials, lack of managerial skills, weak marketing, poor quality, outdated technology (any three).", "small-business-in-rural-india-and-its-problems")
    ]
  },
  "internal-trade": {
    mcq: [
      M(1, "Which of these is a service of retailers to consumers?", "After-sales service", ["Large-scale production", "Fixing minimum prices", "Printing currency"], "Retailers provide regular availability, information, convenience, a wide selection, after-sales service and credit.", "services-of-retailers"),
      M(2, "Which of these is a service of retailers to manufacturers?", "Collecting market information", ["Giving a loan for buying plant", "Registering patents for the firm", "Supplying raw materials"], "Retailers help in distribution, personal selling, large-scale operations, market information and promotion.", "services-of-retailers"),
      M(3, "A retailer lets a regular customer buy now and pay later. Which service is this?", "Credit", ["Personal selling", "Promotion", "Wide selection"], "Giving credit to regular customers is a service to consumers.", "services-of-retailers")
    ],
    written: [
      W(4, "short", "Explain any four services rendered by retailers to consumers.", "Regular availability of products; information about new products; convenience in buying; a wide selection; after-sales service; credit to regular customers (any four, each with a line of explanation).", "services-of-retailers")
    ]
  },
  "international-business": {
    mcq: [
      M(1, "The first step in the import procedure is a", "trade enquiry", ["letter of credit", "bill of entry", "customs clearance"], "The importer first makes a trade enquiry to collect information about exporters and their terms.", "import-procedure"),
      M(2, "In which arrangement does the importer retire the import documents by accepting the bill of exchange?", "Documents against acceptance (D/A)", ["Documents against payment (D/P) only", "Letter of credit", "Import licence"], "Under D/A the importer accepts a bill of exchange to get the documents. Under D/P the importer pays.", "import-procedure"),
      M(3, "Which step comes immediately after placing the order (indent) with the exporter?", "Sending a letter of credit", ["Customs clearance of goods", "A trade enquiry to exporters", "Filing the bill of entry"], "The steps run: trade enquiry, licence/IEC, foreign exchange, order, letter of credit, shipment advice, retiring documents, customs clearance.", "import-procedure")
    ],
    written: [
      W(4, "short", "List the steps of the import procedure in the correct order.", "Trade enquiry; import licence/IEC and arranging foreign exchange; placing the order (indent); sending a letter of credit and arranging finance; receiving the shipment advice; retiring the import documents by paying (D/P) or accepting (D/A); customs clearance with the bill of entry and customs duty; obtaining the delivery order.", "import-procedure")
    ]
  },
  });
})();
