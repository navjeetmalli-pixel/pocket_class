// Learning objectives for Class 12 (hand-written pilot chapters). Format: see CONTENT_GUIDE.md.
StudyData.addObjectives(12, {
  biology: {
    "principles-of-inheritance-and-variation": [
      {
        id: "mendel-laws",
        text: "I can state Mendel's laws and predict monohybrid, dihybrid and test cross ratios using a Punnett square.",
        topics: ["Mendel's Laws"],
        level: "apply",
        prereq: ["10/science/heredity", "11/biology/cell-cycle-and-cell-division"],
        mistakes: [
          { id: "genotypic-3-1", text: "Giving 3 : 1 as the genotypic ratio of a monohybrid F₂.", fix: "3 : 1 is the phenotypic ratio. The genotypic ratio is 1 : 2 : 1 (TT : Tt : tt)." },
          { id: "testcross-dominant", text: "Defining a test cross as a cross with the homozygous dominant parent.", fix: "A test cross is with the homozygous recessive. A 1 : 1 result shows a heterozygote, and all dominant offspring show a homozygote." },
          { id: "dominant-common", text: "Thinking a dominant allele is stronger or more common in the population.", fix: "Dominance only means the allele is expressed in the heterozygote and masks the recessive one." }
        ]
      },
      {
        id: "beyond-mendel",
        text: "I can tell incomplete dominance, codominance, multiple alleles, pleiotropy and polygenic inheritance apart, and work out ABO blood-group crosses.",
        topics: ["Extensions of Mendelian Inheritance"],
        level: "analyse",
        prereq: ["12/biology/principles-of-inheritance-and-variation#mendel-laws"],
        mistakes: [
          { id: "blending", text: "Saying incomplete dominance means the alleles blend permanently.", fix: "The heterozygote is intermediate, but the alleles stay unchanged and red, pink and white appear again in F₂ in a 1 : 2 : 1 ratio." },
          { id: "incomplete-codominant", text: "Confusing incomplete dominance with codominance.", fix: "In incomplete dominance the heterozygote shows an intermediate trait. In codominance both alleles express fully, as in the AB blood group." },
          { id: "three-alleles", text: "Saying a person with ABO blood group has three alleles.", fix: "The population has three alleles (Iᴬ, Iᴮ, i), but each person carries only two." }
        ]
      },
      {
        id: "linkage",
        text: "I can explain the chromosomal theory, linkage and recombination, and use recombination frequency to compare the distance between genes.",
        topics: ["Chromosomal Theory and Linkage"],
        level: "understand",
        prereq: ["11/biology/cell-cycle-and-cell-division"],
        mistakes: [
          { id: "linked-closer", text: "Believing that genes with a high recombination frequency are close together.", fix: "Recombination frequency increases with the distance between genes. Tightly linked genes are close and give few recombinants." },
          { id: "linked-independent", text: "Applying independent assortment to genes on the same chromosome.", fix: "Genes on the same chromosome are linked and do not assort independently unless crossing over separates them." }
        ]
      },
      {
        id: "sex-determination",
        text: "I can compare XY, XO, ZW and haplodiploid sex determination and say which parent determines the sex of the offspring.",
        topics: ["Sex Determination"],
        level: "understand",
        mistakes: [
          { id: "mother-decides", text: "Saying the mother decides the sex of a human child.", fix: "All eggs carry X; the sperm carries X or Y in equal numbers. The father's sperm decides the sex." },
          { id: "birds-same", text: "Using the human XY pattern for birds.", fix: "In birds the female is heterogametic (ZW) and the male is ZZ, so the egg decides the sex." }
        ]
      },
      {
        id: "disorders",
        text: "I can classify genetic disorders as Mendelian or chromosomal, trace X-linked inheritance in a pedigree and explain non-disjunction.",
        topics: ["Genetic Disorders"],
        level: "analyse",
        prereq: ["12/biology/principles-of-inheritance-and-variation#sex-determination"],
        mistakes: [
          { id: "haemophilia-father", text: "Saying a father with haemophilia passes it to his sons.", fix: "A father passes his Y to sons and his X to daughters. His sons get the disease only through a carrier or affected mother." },
          { id: "sickle-protein", text: "Saying sickle-cell anaemia is caused by a chromosomal abnormality.", fix: "It is a Mendelian (autosomal recessive) disorder caused by a single base change, which substitutes valine for glutamic acid in the β-globin chain." },
          { id: "down-chromosomes", text: "Giving 45 as the chromosome number in Down syndrome.", fix: "Down syndrome is trisomy 21, so there are 47 chromosomes. 45 chromosomes is Turner syndrome (XO)." }
        ]
      }
    ]
  },
  accountancy: {
    "goodwill-nature-and-valuation": [
      {
        id: "nature",
        text: "I can define goodwill, state its features and say which goodwill may be recorded in the books as per AS 26.",
        topics: ["Meaning and nature of goodwill"],
        level: "understand",
        prereq: ["12/accountancy/partnership-fundamentals"],
        mistakes: [
          { id: "goodwill-fictitious", text: "Calling goodwill a fictitious asset.", fix: "Goodwill is an intangible asset: it has value but cannot be seen or touched. Fictitious assets, such as preliminary expenses, have no real value." },
          { id: "self-generated", text: "Recording self-generated goodwill in the books.", fix: "As per AS 26, only purchased goodwill is recorded." }
        ]
      },
      {
        id: "factors-need",
        text: "I can list the factors that affect goodwill and the situations in which a partnership must value it.",
        topics: ["Factors affecting the value of goodwill", "Need for valuation of goodwill"],
        level: "remember",
        mistakes: [
          { id: "need-ratio", text: "Forgetting that goodwill must be valued when only the profit sharing ratio changes.", fix: "Goodwill is valued on a change in ratio, admission, retirement or death of a partner, on dissolution and on amalgamation." }
        ]
      },
      {
        id: "average-profit",
        text: "I can value goodwill by the simple and weighted average profit methods after adjusting profits for abnormal items.",
        topics: ["Average profit method"],
        level: "apply",
        prereq: ["12/accountancy/partnership-fundamentals"],
        mistakes: [
          { id: "abnormal-sign", text: "Deducting an abnormal loss from profit, or adding an abnormal gain.", fix: "Add back abnormal losses (loss by fire) and deduct abnormal gains (profit on sale of a fixed asset) to get the normal profit." },
          { id: "weights-order", text: "Giving the highest weight to the oldest year in a weighted average.", fix: "When profits show a trend, recent years get higher weights (1, 2, 3 … with the latest year highest)." }
        ]
      },
      {
        id: "super-profit",
        text: "I can find normal profit and super profit, and value goodwill as super profit × number of years' purchase.",
        topics: ["Super profit method"],
        level: "apply",
        mistakes: [
          { id: "normal-profit-capital", text: "Using total assets, not capital employed, to find normal profit.", fix: "Normal profit = capital employed × normal rate of return ÷ 100. Capital employed excludes goodwill and fictitious assets and is net of outside liabilities." },
          { id: "negative-goodwill", text: "Showing negative goodwill when average profit is less than normal profit.", fix: "If average profit is not more than normal profit, there is no super profit and the goodwill is nil." }
        ]
      },
      {
        id: "capitalisation",
        text: "I can value goodwill by capitalising average profit or super profit, and show that the two give the same answer.",
        topics: ["Capitalisation method"],
        level: "analyse",
        prereq: ["12/accountancy/goodwill-nature-and-valuation#super-profit"],
        mistakes: [
          { id: "capital-actual", text: "Subtracting the capital originally invested by the partners instead of the actual capital employed.", fix: "Goodwill = capitalised value of average profit − actual capital employed (net assets: assets without goodwill and fictitious assets, less outside liabilities)." },
          { id: "formula-100", text: "Forgetting the factor 100 ÷ rate of return.", fix: "Capitalised value = average profit × 100 ÷ normal rate of return, and goodwill by super profit = super profit × 100 ÷ normal rate." }
        ]
      }
    ]
  },
  history: {
    "mahatma-gandhi-and-the-nationalist-movement": [
      {
        id: "emergence",
        text: "I can explain how Gandhi built a base in India through Champaran, Ahmedabad and Kheda after returning in 1915.",
        topics: ["Gandhi's emergence"],
        level: "understand",
        prereq: ["12/history/rebels-and-the-raj", "8/sst/indias-long-road-to-independence"],
        mistakes: [
          { id: "champaran-cause", text: "Linking Champaran with a mill workers' strike.", fix: "Champaran (1917) was against indigo planters. Ahmedabad (1918) was the mill workers' strike and Kheda (1917–18) was a peasants' campaign." }
        ]
      },
      {
        id: "non-cooperation",
        text: "I can explain the causes, methods and withdrawal of the Non-Cooperation Movement, including Rowlatt Act, Jallianwala Bagh, Khilafat and Chauri Chaura.",
        topics: ["Non-Cooperation Movement (1920–22)"],
        level: "understand",
        prereq: ["12/history/mahatma-gandhi-and-the-nationalist-movement#emergence"],
        mistakes: [
          { id: "withdrawal-reason", text: "Saying Gandhi withdrew the movement because the British had accepted the demands.", fix: "He withdrew it in February 1922 after the violence at Chauri Chaura, since the movement was meant to remain non-violent." }
        ]
      },
      {
        id: "civil-disobedience",
        text: "I can describe the Purna Swaraj resolution, the Salt March, the Gandhi–Irwin Pact and the Poona Pact in order.",
        topics: ["Civil Disobedience (1930–34)"],
        level: "understand",
        prereq: ["12/history/mahatma-gandhi-and-the-nationalist-movement#non-cooperation"],
        mistakes: [
          { id: "salt-dates", text: "Giving the Salt March as 1920 or placing it before the Lahore session.", fix: "The Lahore session (December 1929) demanded Purna Swaraj. The march from Sabarmati began on 12 March 1930 and reached Dandi on 6 April." },
          { id: "poona-pact", text: "Thinking the Poona Pact was signed with the British to end the Salt Satyagraha.", fix: "The Poona Pact (1932) settled the question of separate electorates for the depressed classes, after Gandhi's fast." }
        ]
      },
      {
        id: "quit-india",
        text: "I can trace the events from the Cripps Mission and Quit India to Partition and independence, and describe the communal violence of 1946–47 and Gandhi's efforts for peace.",
        topics: ["Quit India and the road to freedom"],
        level: "analyse",
        mistakes: [
          { id: "quit-india-date", text: "Dating the Quit India resolution to 1930 or 1947.", fix: "It was passed on 8 August 1942, with the call \"Do or Die\"." },
          { id: "lahore-two", text: "Mixing up the Lahore session of 1929 and the Lahore Resolution of 1940.", fix: "The 1929 Congress session demanded Purna Swaraj. The 1940 Lahore Resolution was passed by the Muslim League demanding autonomous states for Muslims." }
        ]
      },
      {
        id: "sources",
        text: "I can compare the three movements led by Gandhi: their aims, methods, who took part and how each ended.",
        topics: ["Gandhi's emergence", "Civil Disobedience (1930–34)", "Quit India and the road to freedom"],
        level: "analyse",
        mistakes: [
          { id: "one-leader", text: "Describing the movements as led by Gandhi alone.", fix: "Local leaders and ordinary people carried the movements on, especially after leaders were arrested in 1942." }
        ]
      }
    ]
  }
});
