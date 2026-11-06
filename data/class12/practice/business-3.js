// Class 12 Business Studies practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "business", {
  "nature-and-significance-of-management": {
    mcq: [
      M(1, "Survival, profit and growth are examples of", "organisational objectives", ["social objectives of society", "personal objectives", "legal objectives"], "These are the objectives of the organisation as a whole.", "objectives-and-importance"),
      M(2, "Giving jobs to disadvantaged sections of society is an example of a", "social objective", ["organisational objective", "personal objective", "profit objective"], "Social objectives create benefits for society, such as using environment-friendly methods.", "objectives-and-importance"),
      M(3, "Which of these is a personal objective of management?", "Employees' need for recognition", ["Surviving in the market", "Using environment-friendly methods", "Earning profit for the owners"], "Personal objectives meet employees' financial needs (pay), social needs (recognition) and higher needs (personal growth).", "objectives-and-importance")
    ],
    written: [
      W(3, "short", "Explain organisational, social and personal objectives of management with one example of each.", "Organisational: survival, profit and growth. Social: creating benefits for society, for example giving jobs to disadvantaged sections. Personal: meeting employees' needs, for example competitive pay (financial), recognition (social) or growth opportunities (higher needs).", "objectives-and-importance")
    ]
  },
  "planning": {
    mcq: [
      M(1, "Planning is deciding in advance", "what to do and how to do it", ["who will lend the money", "when the owners will retire", "where to list the shares"], "It bridges the gap between where we are and where we want to go.", "meaning-and-importance"),
      M(2, "Planning reduces the risks of uncertainty by", "anticipating changes", ["ignoring changes", "avoiding all decisions", "leaving matters to chance"], "Planning provides direction and prepares the firm for likely changes.", "meaning-and-importance"),
      M(3, "Which statement shows that planning establishes standards for controlling?", "Targets are compared with actual results", ["Plans are written only after the results are known", "Standards are fixed only at the stage of control", "Planning removes the need for any control"], "The standards set in planning are what the actual performance is compared with in controlling.", "meaning-and-importance")
    ],
    written: [
      W(3, "short", "Explain any three points showing the importance of planning.", "Planning provides directions for action; reduces the risks of uncertainty by anticipating changes; reduces overlapping and wasteful activities; promotes innovative ideas; facilitates decision making; establishes standards for controlling (any three, each with a line of explanation).", "meaning-and-importance")
    ]
  },
  "staffing": {
    mcq: [
      M(1, "Staffing means filling and keeping filled", "the posts in the organisation", ["the godown of the firm", "the cash book of the firm", "the share capital of the firm"], "Staffing puts the right people in the right jobs and is part of human resource management.", "meaning-and-importance-of-staffing"),
      M(2, "Succession planning, a result of good staffing, ensures", "continuous survival and growth", ["a fall in competition in the market", "a rise in the share price", "a cut in all wages"], "Having trained people ready for higher posts keeps the organisation going.", "meaning-and-importance-of-staffing"),
      M(3, "Staffing helps optimum use of human resources by avoiding", "over-manning and shortage of staff", ["payment of wages and salaries to staff", "training and promotion", "job satisfaction"], "The right number of people in each job means no waste and no shortage.", "meaning-and-importance-of-staffing")
    ],
    written: [
      W(4, "short", "Explain any four points showing the importance of staffing.", "It obtains competent personnel; ensures higher performance by putting the right person in the right job; ensures continuous survival and growth through succession planning; ensures optimum use of human resources by avoiding over-manning and shortage; improves job satisfaction and morale (any four).", "meaning-and-importance-of-staffing")
    ]
  },
  "controlling": {
    mcq: [
      M(1, "Controlling ensures that activities in an organisation are performed", "according to plans", ["without any plans", "at the owners' wish", "at the lowest cost only"], "It also ensures that resources are used effectively and efficiently.", "meaning-and-importance"),
      M(2, "Controlling is a function present at", "all levels of management", ["the top level of management only", "the lower level only", "the middle level only"], "It is a goal-oriented function at every level.", "meaning-and-importance"),
      M(3, "Which of these is NOT an importance of controlling?", "Removing the need for any planning", ["Accomplishing organisational goals", "Ensuring order and discipline", "Improving employee motivation"], "Controlling and planning go together: control checks results against plans.", "meaning-and-importance")
    ],
    written: [
      W(3, "short", "Why is controlling called a goal-oriented function? State any two points of its importance.", "Controlling checks that activities are carried out according to plans so that the organisation's goals are achieved. Importance: it accomplishes organisational goals, judges the accuracy of standards, makes efficient use of resources, improves employee motivation, ensures order and discipline and facilitates coordination (any two).", "meaning-and-importance")
    ]
  },
  "financial-management": {
    mcq: [
      M(1, "Financial planning is the preparation of", "a financial blueprint of future operations", ["the final accounts of the last financial year", "a list of all shareholders", "the balance sheet of a competitor"], "It looks ahead to the funds the firm will need.", "financial-planning"),
      M(2, "A key objective of financial planning is to", "avoid raising funds unnecessarily", ["raise as much money as the market allows", "avoid all borrowing", "reduce all costs to zero"], "The other objective is to ensure that funds are available when required.", "financial-planning"),
      M(3, "A company needs ₹40 lakh and raises it by issuing 4 lakh equity shares of ₹10 each. EBIT is ₹6 lakh and the tax rate is 30%. EPS is", "₹1.05", ["₹1.50", "₹0.60", "₹4.20"], "No debt, so EBT = ₹6 lakh. Tax = 1.8 lakh, so profit after tax = ₹4.2 lakh. EPS = 4,20,000 ÷ 4,00,000 = ₹1.05.", "financial-planning")
    ],
    written: [
      W(3, "short", "State the two objectives of financial planning and any three points of its importance.", "Objectives: to ensure that funds are available when required and that the firm does not raise funds unnecessarily. Importance: it helps forecast for different business situations, avoids shocks and surprises, coordinates business functions, reduces waste and duplication, links the present with the future and makes evaluation of performance easier (any three).", "financial-planning")
    ]
  },
  "financial-markets": {
    mcq: [
      M(1, "A financial market links", "savers with investors", ["producers with consumers", "teachers with students", "buyers with sellers of land"], "It links savers (households) with investors (business firms).", "concept-and-functions"),
      M(2, "The money market deals in funds for a period of up to", "one year", ["five years", "ten years", "any number of years"], "The money market handles short-term funds. The capital market handles medium- and long-term funds.", "concept-and-functions"),
      M(3, "Which of these is a function of a financial market?", "Facilitating price discovery", ["Fixing the wages of all workers", "Printing currency notes", "Providing free insurance"], "Other functions are mobilising savings, providing liquidity and reducing the cost of transactions.", "concept-and-functions")
    ],
    written: [
      W(4, "short", "Explain any four functions of a financial market.", "Mobilisation of savings and channelling them into productive uses; facilitating price discovery through the interaction of buyers and sellers; providing liquidity to financial assets by making them easy to buy and sell; reducing the cost of transactions by providing information.", "concept-and-functions")
    ]
  },
  "consumer-protection": {
    mcq: [
      M(1, "From the consumers' point of view, one reason for consumer protection is", "consumer ignorance of their rights", ["too many rights given to consumers by law", "low prices in every market", "high quality in every shop"], "Consumers are often ignorant, unorganised and exploited by adulteration, defective goods and misleading advertisements.", "importance-of-consumer-protection"),
      M(2, "From the business point of view, protecting consumers serves its", "long-term interest", ["short-term loss of profit", "tax-free status", "monopoly position"], "Satisfied customers return, so protecting them is in the long-term interest of business.", "importance-of-consumer-protection"),
      M(3, "Codes of conduct made by trade associations are an example of protection by", "business associations", ["government action", "consumer organisations", "individual consumers"], "Ways of protection are self-regulation, business associations, consumer awareness, consumer organisations and the government.", "importance-of-consumer-protection")
    ],
    written: [
      W(4, "short", "Give two reasons for consumer protection from the consumers' point of view and two from the business point of view.", "Consumers: they are ignorant of their rights and unorganised; they are widely exploited by adulteration, defective goods, black marketing and misleading advertisements. Business: it serves the long-term interest of the business; business uses society's resources and has a social responsibility (also moral justification and avoiding government intervention).", "importance-of-consumer-protection")
    ]
  },
  });
})();
