// Class 9 Science practice bank, part 1: Exploration, Cell, Tissues, Motion, Mixtures, Forces, Work and Energy.
(function () {
  const AR = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  StudyData.addPractice(9, "science", {
  "exploration-entering-the-world-of-secondary-science": {
    mcq: [
      { q: "A simplified representation of a real system that keeps only the details that matter for a question is called a:", options: ["law", "model", "theory", "prediction"], answer: 1, explain: "A model deliberately ignores unimportant details so that the problem becomes manageable.", level: 1 },
      { q: "The first step in making a good estimate is to:", options: ["pick any number", "multiply all the numbers given", "understand the situation", "look up the final answer"], answer: 2, explain: "Estimation steps: understand the situation, identify the quantities, make a rough estimate, then check that it is sensible.", level: 1 },
      { q: "Which statement describes a scientific theory best?", options: ["An evidence-based explanation of why a pattern occurs", "An untested guess", "A list of measurements", "A symbol for a quantity"], answer: 0, explain: "A theory is tested against evidence and explains why a pattern occurs; it is not a guess.", level: 1 },
      { q: "Newton's laws of motion are examples of scientific:", options: ["theories", "estimates", "models only", "laws"], answer: 3, explain: "A law describes a regular pattern in nature, often as a mathematical relation.", level: 1 },
      { q: "A scientific prediction is:", options: ["a wish about the future", "a reasoned expectation based on evidence", "a proven fact", "a random guess"], answer: 1, explain: "Predictions are based on laws, theories, models and past data, and can be checked against what happens.", level: 1 },
      { q: "Which detail can a simple model of a cricket ball hit for six safely ignore?", options: ["Initial speed of the ball", "Direction of the hit", "Colour of the ball", "Mass of the ball"], answer: 2, explain: "Colour has no effect on the flight; speed, direction and mass do.", level: 2 },
      { q: "A person breathes about 15 times a minute, about 0.5 L per breath. The air breathed in one hour is about:", options: ["45 L", "450 L", "900 L", "4500 L"], answer: 1, explain: "15 × 60 = 900 breaths; 900 × 0.5 L = 450 L.", level: 2 },
      {
        q: "Assertion (A): A scientific theory can be modified when new evidence is found.\nReason (R): A theory is an explanation tested against evidence and remains open to improvement.",
        options: AR,
        answer: 0, explain: "Both are true, and openness to improvement is exactly why a theory can be modified.", level: 2, keepOrder: true
      },
      { q: "Ria's group measured one length in centimetres and another in metres, then added the two numbers directly and got a meaningless result. What is the best lesson?", options: ["Ignore the smaller reading", "Use bigger numbers", "Convert both to one standard unit before combining", "Always measure in centimetres"], answer: 2, explain: "Quantities must be in the same (preferably SI) unit before they are combined; the pounds–kilograms fuel mix-up shows the danger.", level: 2 },
      { q: "Which question can be tested scientifically?", options: ["Is this cricket bat lucky?", "Does the time of a pendulum swing depend on its length?", "Is rain beautiful?", "Is Tuesday an unlucky day?"], answer: 1, explain: "Only a question that can be answered with measurable data can be tested.", level: 2 },
      { q: "A heart beats about 72 times a minute. The best estimate of beats in a year (365 days) is:", options: ["3.8 × 10⁵", "3.8 × 10⁶", "3.8 × 10⁷", "3.8 × 10⁸"], answer: 2, explain: "72 × 1440 ≈ 1.04 × 10⁵ beats a day; × 365 ≈ 3.8 × 10⁷ a year.", level: 3 },
      {
        q: "Assertion (A): A model that ignores air resistance can still be useful.\nReason (R): A model must include every detail of the real system to be useful.",
        options: AR,
        answer: 2, explain: "A is true because small effects can be ignored to simplify the problem. R is false: models deliberately leave out unimportant details.", level: 3, keepOrder: true
      },
      { q: "A forecaster says rain is likely because humidity has been above 85 % and the wind has turned to blow from the sea, as happened before each of the last five rains. This is:", options: ["a prediction based on measured data and past patterns", "a superstition", "a law of nature", "a random guess"], answer: 0, explain: "It uses measurable quantities and earlier patterns, which makes it a testable scientific prediction.", level: 3 },
      { q: "A student's prediction does not match the result of her experiment. The most scientific response is to:", options: ["hide the result", "repeat until it agrees", "declare that science is wrong", "re-examine the assumptions, model and measurements"], answer: 3, explain: "A failed prediction is a clue: scientists check the assumptions, the model and the measurements.", level: 3 }
    ],
    written: [
      { q: "What is a scientific model?", a: "A model is a simplified representation of a real system that keeps only the details important for the question and deliberately ignores the rest.", marks: 1 },
      { q: "State the value of the speed of light and its symbol.", a: "Symbol c; c = 299 792 458 m s⁻¹ (defined exactly), about 3 × 10⁸ m s⁻¹.", marks: 1 },
      { q: "Distinguish between a scientific law and a theory.", a: "A law describes a regular pattern observed in nature, often as a mathematical relation (e.g. Newton's laws).\nA theory explains why the pattern occurs and is supported by tested evidence (e.g. atomic theory).", marks: 2 },
      { q: "Why is it important to use standard units? Give an example of what can go wrong.", a: "Standard (SI) units make measurements comparable everywhere and avoid confusion.\nExample: mixing pounds and kilograms left an aircraft about 15 000 litres short of fuel.", marks: 2 },
      { q: "Name the three steps of a good estimate and show them for the number of breaths a person takes in a day at 14 breaths a minute.", a: "Step 1: understand the situation and identify the quantities (breaths per minute, minutes per day).\nStep 2: make a rough estimate: 14 × 1440 ≈ 20 000 breaths.\nStep 3: check that the answer is sensible (about 20 000 a day is reasonable).", marks: 3 },
      { q: "A student says a theory is just a guess. Explain why this is wrong.", a: "(1) A theory explains why a pattern occurs.\n(2) It is built on evidence and tested critically by many people.\n(3) A guess is untested, while a theory can still be improved or replaced when new evidence appears.", marks: 3 },
      { q: "A model of a six hit in cricket treats some details as important and ignores others. Name two of each and give a reason.", a: "Important: speed of the ball and direction of the hit (also mass).\nIgnored: colour of the ball and brand of the bat.\nReason: only the important quantities decide whether the ball clears the boundary; ignoring the rest keeps the problem simple, and small effects such as air resistance can be added later for more accuracy.", marks: 3 },
      { q: "Estimate the volume of air a person breathes in one day if they take 18 breaths a minute and 0.5 L per breath. Show every step and check that it is sensible.", a: "Minutes in a day = 60 × 24 = 1440.\nBreaths in a day = 18 × 1440 = 25 920.\nAir breathed = 25 920 × 0.5 L = 12 960 L.\nAnswer: about 1.3 × 10⁴ L (about 13 000 litres) a day.\nCheck: an adult breathes roughly 10 000 L a day, so the value is sensible.", marks: 5 },
      { q: "Explain how different branches of science are connected, using the working of a face mask as an example. Also state the role of models and units in such a problem.", a: "(1) Science is connected: physics, chemistry, biology, earth science and mathematics together explain real problems.\n(2) Physics: air flow and particle size through the mask fibres.\n(3) Chemistry: the material and its properties.\n(4) Biology: how germs spread and how breathing is affected.\n(5) Models simplify the system (e.g. treat the mask as a filter for particles), and standard units and mathematics let the results be compared.", marks: 5 },
      { q: "Case study: A weather office predicts rain tomorrow. It notes that over the last six rainy days the humidity was above 85 % and the wind blew from the sea. Today both conditions hold. Dark clouds are also visible.\n(i) Which data does the prediction use?\n(ii) Why is 'the clouds look dark' alone a weaker basis?\n(iii) What should scientists do if no rain falls?", a: "(i) Measured humidity and wind direction, and the pattern from earlier rainy days.\n(ii) It is a vague, unmeasured observation; it does not give measurable data or a pattern that can be tested.\n(iii) Re-examine the assumptions, the model and the measurements instead of ignoring the failure; this helps improve the prediction.", marks: 4, type: "case" }
    ]
  },
  "cell-the-building-block-of-life": {
    mcq: [
      { q: "Which organelle makes proteins?", options: ["Lysosome", "Vacuole", "Ribosome", "Golgi apparatus"], answer: 2, explain: "Ribosomes are the sites of protein synthesis.", level: 1 },
      { q: "Photosynthesis takes place in the:", options: ["chloroplast", "leucoplast", "mitochondrion", "lysosome"], answer: 0, explain: "Chloroplasts are green plastids containing chlorophyll.", level: 1 },
      { q: "The cell wall of fungi is made of:", options: ["cellulose", "pectin", "chitin", "lignin"], answer: 2, explain: "Fungal walls are chitin; plant walls are cellulose.", level: 1 },
      { q: "Gametes are formed by:", options: ["mitosis", "binary fission", "budding", "meiosis"], answer: 3, explain: "Meiosis gives cells with half the chromosome number, used as gametes.", level: 1 },
      { q: "Movement of water across a selectively permeable membrane is called:", options: ["diffusion", "osmosis", "transpiration", "evaporation"], answer: 1, explain: "Osmosis is the movement of water through a selectively permeable membrane.", level: 1 },
      { q: "Which statement about an animal cell is correct?", options: ["It has a cellulose wall", "It has no cell wall", "It has no plasma membrane", "It contains chloroplasts"], answer: 1, explain: "Animal cells have only a plasma membrane; there is no cell wall or chloroplast.", level: 2 },
      { q: "A bacterium is about 2 μm long and a eukaryotic cell about 50 μm. The eukaryotic cell is ___ times longer.", options: ["5", "25", "50", "100"], answer: 1, explain: "50 ÷ 2 = 25.", level: 2 },
      {
        q: "Assertion (A): Mitochondria are called the powerhouses of the cell.\nReason (R): Mitochondria release energy from food.",
        options: AR,
        answer: 0, explain: "Releasing energy from food is the reason for the name.", level: 2, keepOrder: true
      },
      { q: "A cook sprinkles a lot of salt on cucumber slices and soon finds water on the plate. This happens because:", options: ["salt dissolves the cell walls", "water is made by the salt", "water leaves the cells by osmosis into the salty surface", "cucumber cells burst on heating"], answer: 2, explain: "The salt makes a concentrated solution outside, so water moves out of the cells by osmosis.", level: 2 },
      { q: "A cell with 8 chromosomes divides by mitosis. Each daughter cell has:", options: ["4 chromosomes", "8 chromosomes", "16 chromosomes", "2 chromosomes"], answer: 1, explain: "Mitosis gives identical cells with the same chromosome number.", level: 2 },
      { q: "A cell with 24 chromosomes undergoes meiosis. The result is:", options: ["2 cells with 24 chromosomes each", "2 cells with 12 chromosomes each", "4 cells with 24 chromosomes each", "4 cells with 12 chromosomes each"], answer: 3, explain: "Meiosis gives four cells, each with half the chromosome number.", level: 3 },
      {
        q: "Assertion (A): Prokaryotic cells have a well-defined nucleus.\nReason (R): The genetic material of prokaryotes lies in a region called the nucleoid.",
        options: AR,
        answer: 3, explain: "A is false: prokaryotes have no membrane-bound nucleus. R is true.", level: 3, keepOrder: true
      },
      { q: "Pooja sees a cell about 5 μm across from curd. It has a cell wall but no nucleus or membrane-bound organelles. The cell is most likely:", options: ["a prokaryotic cell (bacterium)", "a plant cell with chloroplasts", "an animal cell", "an acellular virus"], answer: 0, explain: "Small size, a cell wall and no nucleus are features of a bacterium.", level: 3 },
      { q: "Which pair is correctly matched?", options: ["Lysosome – photosynthesis", "Mitochondria – protein synthesis", "Leucoplast – storage", "Chloroplast – digestion"], answer: 2, explain: "Leucoplasts are colourless plastids that store food. Lysosomes digest, mitochondria release energy, chloroplasts photosynthesise.", level: 3 }
    ],
    written: [
      { q: "Name the organelle that digests waste material in a cell.", a: "Lysosome (it contains digestive enzymes).", marks: 1 },
      { q: "What is meant by a selectively permeable membrane?", a: "A membrane that allows only some substances to pass through while stopping others, so it controls what enters and leaves the cell.", marks: 1 },
      { q: "Write two differences between a plant cell and an animal cell.", a: "(1) Plant cells have a cellulose cell wall outside the membrane; animal cells have none.\n(2) Plant cells have plastids such as chloroplasts and large vacuoles; animal cells lack plastids and have small vacuoles.", marks: 2 },
      { q: "Why are mitochondria called the powerhouses of the cell? Name one organelle found only in plant cells.", a: "Mitochondria release energy from food, which the cell uses for its activities.\nChloroplast (any plastid) is found only in plant cells.", marks: 2 },
      { q: "Differentiate between diffusion and osmosis.", a: "(1) Diffusion is movement of any particles from higher to lower concentration; osmosis is movement of water only.\n(2) Osmosis happens across a selectively permeable membrane; diffusion can occur without a membrane.\n(3) Example: smell of food spreading in a room is diffusion; swelling of raisins in water is osmosis.", marks: 3 },
      { q: "Name the three types of plastids and state one function of each.", a: "Chloroplast: green, contains chlorophyll, carries out photosynthesis.\nChromoplast: coloured, gives colour to flowers and fruits.\nLeucoplast: colourless, stores food such as starch.", marks: 3 },
      { q: "How do cancer cells differ from normal cells? State why cancer is harmful.", a: "(1) Normal cells divide in a controlled way, do their work and die.\n(2) Cancer cells divide uncontrollably and form lumps called tumours.\n(3) The growing tumour disturbs the working of the normal tissues around it, which is harmful.", marks: 3 },
      { q: "Describe the structure and functions of the nucleus.", a: "(1) It is surrounded by a double nuclear membrane.\n(2) The membrane has pores that allow exchange of materials with the cytoplasm.\n(3) The nucleolus inside makes ribosomal subunits.\n(4) Chromosomes of DNA and protein carry hereditary information.\n(5) The nucleus controls the activities of the cell.", marks: 5 },
      { q: "Compare mitosis and meiosis in five points.", a: "(1) Number of cells: mitosis 2; meiosis 4.\n(2) Chromosome number: mitosis same as parent; meiosis half.\n(3) Daughter cells: identical to the parent in mitosis; varied in meiosis.\n(4) Function: growth, repair and replacement in mitosis; formation of gametes in meiosis.\n(5) Steps: mitosis is one division; meiosis is a two-step division.", marks: 5 },
      { q: "Case study: Radha places a piece of onion peel in concentrated salt solution and sees under a microscope that the cell contents have pulled away from the wall, though the cell outline stays the same. She wonders what would happen to an animal cell.\n(i) Name the process responsible.\n(ii) Why does the outline remain?\n(iii) What would an animal cell do?", a: "(i) Osmosis: water leaves the cell through the selectively permeable membrane.\n(ii) The rigid cellulose cell wall keeps the shape of the cell.\n(iii) An animal cell has no wall, so it simply shrinks.", marks: 4, type: "case" }
    ]
  },
  "tissues-in-action": {
    mcq: [
      { q: "Water and minerals are carried upward in a plant by:", options: ["xylem", "phloem", "cork", "collenchyma"], answer: 0, explain: "Xylem is the water-conducting complex tissue.", level: 1 },
      { q: "The bark of a tree is formed by:", options: ["phloem", "cork", "collenchyma", "parenchyma"], answer: 1, explain: "Cork forms the bark and protects the stem.", level: 1 },
      { q: "The dead, hard, supporting plant tissue is:", options: ["parenchyma", "collenchyma", "sclerenchyma", "epidermis"], answer: 2, explain: "Sclerenchyma cells are dead and have thick walls.", level: 1 },
      { q: "Ligaments join:", options: ["muscle to bone", "muscle to muscle", "skin to bone", "bone to bone"], answer: 3, explain: "Ligaments join bone to bone; tendons join muscle to bone.", level: 1 },
      { q: "The cell that carries nerve impulses is the:", options: ["neuron", "osteocyte", "myocyte", "fibroblast"], answer: 0, explain: "Neurons are the cells of nervous tissue.", level: 1 },
      { q: "The joint that allows you to turn your head side to side is a:", options: ["hinge joint", "ball-and-socket joint", "pivot joint", "fixed joint"], answer: 2, explain: "The neck has a pivot joint that allows rotation.", level: 2 },
      { q: "Grass grows back quickly after being mown because of:", options: ["apical meristem", "lateral meristem", "parenchyma", "intercalary meristem"], answer: 3, explain: "Intercalary meristem at the base of leaves allows regrowth.", level: 2 },
      {
        q: "Assertion (A): The bones of the skull are joined by fixed joints.\nReason (R): Fixed joints allow free movement so that the brain can move.",
        options: AR,
        answer: 2, explain: "A is true, but fixed joints allow no movement and protect the brain, so R is false.", level: 2, keepOrder: true
      },
      { q: "A cut tree trunk shows 35 rings. The tree is about ___ old and the rings are made by the ___.", options: ["35 years; apical meristem", "35 months; intercalary meristem", "35 years; lateral meristem (cambium)", "70 years; parenchyma"], answer: 2, explain: "One ring forms each year through the activity of the lateral meristem.", level: 2 },
      { q: "The thin tissue lining the air sacs of the lungs, which allows quick exchange of gases, is:", options: ["connective tissue", "epithelial tissue", "muscular tissue", "nervous tissue"], answer: 1, explain: "Epithelial tissue is thin and closely packed, suited to rapid exchange.", level: 2 },
      { q: "Which statement about xylem and phloem is correct?", options: ["Both carry only water", "Xylem carries water and minerals; phloem carries prepared food", "Phloem carries water; xylem carries food", "They are present only in animals"], answer: 1, explain: "Xylem conducts water and minerals; phloem conducts food from the leaves.", level: 3 },
      {
        q: "Assertion (A): Cardiac muscle works continuously without tiring.\nReason (R): Cardiac muscle is under voluntary control.",
        options: AR,
        answer: 2, explain: "A is true. R is false: cardiac muscle is involuntary.", level: 3, keepOrder: true
      },
      { q: "F. C. Steward grew a whole carrot plant from a single phloem cell placed in a nutrient medium. This shows that:", options: ["phloem cells are dead", "a mature plant cell can be totipotent", "carrots have no xylem", "only embryos can form new plants"], answer: 1, explain: "A mature cell that can divide and redifferentiate into a whole plant is totipotent.", level: 3 },
      { q: "Meena lifts a cup by bending her elbow. Which description is correct?", options: ["Hinge joint; the muscle pulls the bone through a tendon", "Pivot joint; a ligament pulls the muscle", "Ball-and-socket joint; the muscle joins the bone to bone", "Fixed joint; nerves pull the bone"], answer: 0, explain: "The elbow is a hinge joint and tendons transmit the muscle's pull to the bone.", level: 3 }
    ],
    written: [
      { q: "Name the meristem that increases the length of a stem or root.", a: "Apical meristem.", marks: 1 },
      { q: "What is totipotency?", a: "The ability of a cell to divide and redifferentiate to grow into a whole new organism (as in plant tissue culture).", marks: 1 },
      { q: "Differentiate between a tendon and a ligament.", a: "A tendon is tough connective tissue joining muscle to bone and transmits the muscle's pull.\nA ligament joins bone to bone at a joint and holds the bones together.", marks: 2 },
      { q: "State two features of meristematic cells and say why they are needed.", a: "They have thin walls, dense cytoplasm and a large nucleus, and keep dividing.\nTheir division produces new cells, which gives the plant growth.", marks: 2 },
      { q: "Distinguish among parenchyma, collenchyma and sclerenchyma by function.", a: "Parenchyma: storage and photosynthesis (living, thin-walled).\nCollenchyma: flexible support to growing parts.\nSclerenchyma: dead, hard cells that give strength and rigid support.", marks: 3 },
      { q: "Name three types of joints with one example and the type of movement each allows.", a: "Ball-and-socket (shoulder, hip): movement in all directions.\nHinge (elbow, knee): movement in one plane.\nPivot (neck): rotation. (Fixed joints in the skull allow no movement.)", marks: 3 },
      { q: "Why does cardiac muscle not get tired? State two other differences between cardiac and skeletal muscle.", a: "(1) Cardiac muscle has many mitochondria and a rich blood supply, so it contracts continuously without fatigue.\n(2) Cardiac muscle is involuntary; skeletal muscle is voluntary.\n(3) Cardiac muscle is found only in the heart; skeletal muscle is attached to bones.", marks: 3 },
      { q: "Describe the four types of animal tissue, giving one location or example and one function of each.", a: "Epithelial: covers the body and lines organs (lungs, skin); protects and allows exchange.\nConnective: blood, bone, cartilage, tendons, fat; connects and supports.\nMuscular: skeletal, smooth, cardiac; produces movement.\nNervous: neurons in brain and nerves; receive and carry impulses and control the body.\nAll tissues work together; the muscles and bones move the body under control of the nervous system.", marks: 5 },
      { q: "Describe the three kinds of meristem with the place where each is found and its function.", a: "Apical: tips of roots and shoots; growth in length.\nLateral: along the sides of stem and root (cambium); growth in girth.\nIntercalary: base of leaves or internodes (as in grass); regrowth after cutting.\nCells of all meristems are thin-walled with dense cytoplasm and a large nucleus.\nAnnual rings in a trunk are produced each year by the lateral meristem.", marks: 5 },
      { q: "Case study: Meera lifts a heavy bag and then turns her head to look behind. Her teacher explains that bones, muscles and joints work together, and that the skull bones do not move.\n(i) Name the joint at her elbow and the joint that turns her head.\n(ii) What is the role of tendons?\n(iii) Why are the skull bones joined by fixed joints?", a: "(i) Elbow: hinge joint; neck: pivot joint.\n(ii) Tendons join muscles to bones and transmit the pull of the muscle to move the bone.\n(iii) Fixed joints allow no movement, giving the skull a rigid frame that protects the brain.", marks: 4, type: "case" }
    ]
  },
  "describing-motion-around-us": {
    mcq: [
      { q: "The SI unit of acceleration is:", options: ["m s⁻¹", "m s", "m² s⁻¹", "m s⁻²"], answer: 3, explain: "Acceleration = change in velocity ÷ time, so its unit is (m s⁻¹)/s = m s⁻².", level: 1 },
      { q: "Which of these is a vector quantity?", options: ["Distance", "Speed", "Displacement", "Time"], answer: 2, explain: "Displacement has both magnitude and direction.", level: 1 },
      { q: "The slope of a velocity–time graph gives:", options: ["acceleration", "distance", "average speed", "force"], answer: 0, explain: "Slope = change in velocity ÷ time = acceleration. The area gives displacement.", level: 1 },
      { q: "54 km h⁻¹ expressed in m s⁻¹ is:", options: ["54", "10", "20", "15"], answer: 3, explain: "54 × 5/18 = 15 m s⁻¹.", level: 1 },
      { q: "In uniform circular motion the velocity at any point is directed along the:", options: ["radius towards the centre", "radius away from the centre", "chord", "tangent"], answer: 3, explain: "Velocity is along the tangent to the circle at that point.", level: 1 },
      { q: "A car covers 60 km in 1.5 h. Its average speed is:", options: ["40 km h⁻¹", "90 km h⁻¹", "60 km h⁻¹", "45 km h⁻¹"], answer: 0, explain: "Average speed = 60 ÷ 1.5 = 40 km h⁻¹.", level: 2 },
      { q: "A body starts from rest and has a constant acceleration of 2 m s⁻². The distance covered in 5 s is:", options: ["10 m", "12.5 m", "25 m", "50 m"], answer: 2, explain: "s = ½at² = ½ × 2 × 25 = 25 m.", level: 2 },
      {
        q: "Assertion (A): The area under a velocity–time graph gives displacement.\nReason (R): The slope of a velocity–time graph gives acceleration.",
        options: AR,
        answer: 1, explain: "Both statements are true, but the slope fact does not explain why the area gives displacement.", level: 2, keepOrder: true
      },
      { q: "Priya runs one full lap of a circular track of circumference 400 m in 80 s and stops where she started. Her average speed and average velocity are:", options: ["5 m s⁻¹ and 5 m s⁻¹", "5 m s⁻¹ and 0", "0 and 5 m s⁻¹", "0 and 0"], answer: 1, explain: "Speed = 400/80 = 5 m s⁻¹. Displacement is zero, so average velocity is zero.", level: 2 },
      { q: "A ball is thrown vertically upward. At its highest point:", options: ["velocity is zero and acceleration is zero", "velocity is zero and acceleration is 9.8 m s⁻² downward", "velocity is 9.8 m s⁻¹ and acceleration is zero", "velocity is zero and acceleration is 9.8 m s⁻² upward"], answer: 1, explain: "The ball momentarily stops, but gravity still acts downward with 9.8 m s⁻².", level: 2 },
      { q: "A car moving at 72 km h⁻¹ is brought to rest with a retardation of 5 m s⁻². The stopping distance is:", options: ["80 m", "20 m", "40 m", "8 m"], answer: 2, explain: "u = 20 m s⁻¹; 0 = 400 − 2 × 5 × s gives s = 40 m.", level: 3 },
      {
        q: "Assertion (A): A body moving with constant speed may still be accelerated.\nReason (R): Acceleration is the rate of change of speed only.",
        options: AR,
        answer: 2, explain: "A is true (e.g. circular motion). R is false: acceleration is the rate of change of velocity, which includes direction.", level: 3, keepOrder: true
      },
      { q: "A car's velocity rises uniformly from 0 to 20 m s⁻¹ in 10 s and then stays constant for 20 s. The total distance covered is:", options: ["500 m", "400 m", "600 m", "300 m"], answer: 0, explain: "Area = ½ × 10 × 20 + 20 × 20 = 100 + 400 = 500 m.", level: 3 },
      { q: "A train's speed rises from 10 m s⁻¹ to 30 m s⁻¹ while it covers 400 m with constant acceleration. The acceleration is:", options: ["0.5 m s⁻²", "2 m s⁻²", "1 m s⁻²", "2.5 m s⁻²"], answer: 2, explain: "v² − u² = 2as gives 900 − 100 = 800 = 2a × 400, so a = 1 m s⁻².", level: 3 }
    ],
    written: [
      { q: "Define displacement.", a: "Displacement is the net change in position of an object: the shortest straight-line distance from the start to the end point, with direction.", marks: 1 },
      { q: "Write the kinematic equation that connects v, u, a and s.", a: "v² = u² + 2as.", marks: 1 },
      { q: "Distinguish between distance and displacement.", a: "Distance is the total length of the path travelled; it is a scalar and never negative.\nDisplacement is the shortest straight-line change in position with direction; it is a vector and can be zero even if the distance is not.", marks: 2 },
      { q: "A bus slows down from 20 m s⁻¹ to 10 m s⁻¹ in 5 s. Find its acceleration.", a: "a = (v − u)/t = (10 − 20)/5 = −2 m s⁻².\nThe negative sign shows retardation of 2 m s⁻².", marks: 2 },
      { q: "A train starts from rest and accelerates at 0.5 m s⁻² for 20 s. Find its final velocity and the distance covered.", a: "u = 0, a = 0.5 m s⁻², t = 20 s.\nv = u + at = 0.5 × 20 = 10 m s⁻¹.\ns = ½at² = ½ × 0.5 × 400 = 100 m.", marks: 3 },
      { q: "A car moving at 36 km h⁻¹ accelerates uniformly at 2 m s⁻² for 5 s. Find the distance covered and the final speed.", a: "u = 36 × 5/18 = 10 m s⁻¹.\nv = u + at = 10 + 2 × 5 = 20 m s⁻¹.\ns = ut + ½at² = 10 × 5 + ½ × 2 × 25 = 50 + 25 = 75 m.", marks: 3 },
      { q: "What is uniform circular motion? Explain why it is an accelerated motion.", a: "(1) It is motion along a circle at constant speed.\n(2) The direction of velocity (along the tangent) changes continuously.\n(3) Acceleration is a change in velocity in magnitude or direction, so the motion is accelerated even though speed is constant.", marks: 3 },
      { q: "A stone is dropped from the top of a tower and takes 3 s to reach the ground (g = 9.8 m s⁻²). Find (a) its speed just before hitting the ground, (b) the height of the tower, (c) its average speed during the fall.", a: "u = 0, a = 9.8 m s⁻², t = 3 s.\n(a) v = u + at = 9.8 × 3 = 29.4 m s⁻¹.\n(b) s = ½at² = ½ × 9.8 × 9 = 44.1 m.\n(c) Average speed = 44.1/3 = 14.7 m s⁻¹ (also (0 + 29.4)/2).", marks: 5 },
      { q: "A ball is thrown vertically upward with a speed of 19.6 m s⁻¹ (g = 9.8 m s⁻²). Find the maximum height reached, the time to reach it, and the total time of flight.", a: "At the top v = 0 and a = −9.8 m s⁻².\nTime up: t = (v − u)/a = (0 − 19.6)/(−9.8) = 2 s.\nMaximum height: v² = u² + 2as gives 0 = 19.6² − 2 × 9.8 × h, so h = 384.16/19.6 = 19.6 m.\nThe time to come down equals the time to go up, so total time = 2 × 2 = 4 s.", marks: 5 },
      { q: "Case study: A cyclist's position from her home is 0 m at t = 0, 50 m at 10 s and 100 m at 20 s. From 20 s to 30 s she rests. Between 30 s and 40 s she rides back to the 50 m mark.\n(i) Find her velocity during the first 20 s.\n(ii) What does the position–time graph look like from 20 s to 30 s?\n(iii) Find her average velocity between 30 s and 40 s.", a: "(i) v = (100 − 0)/20 = 5 m s⁻¹ away from home.\n(ii) A horizontal line parallel to the time axis, as she is at rest.\n(iii) v = (50 − 100)/10 = −5 m s⁻¹, i.e. 5 m s⁻¹ towards home.", marks: 4, type: "case" }
    ]
  },
  "exploring-mixtures-and-their-separation": {
    mcq: [
      { q: "Which of these is a heterogeneous mixture?", options: ["Salt in water", "Sugar syrup", "Sand in water", "Brass"], answer: 2, explain: "Sand does not dissolve and stays visible, so the composition is not uniform.", level: 1 },
      { q: "Milk is an example of a:", options: ["true solution", "suspension", "colloid", "pure compound"], answer: 2, explain: "Milk has particles of intermediate size that do not settle and scatter light.", level: 1 },
      { q: "The dyes in black ink can be separated by:", options: ["paper chromatography", "filtration", "sublimation", "distillation of ink"], answer: 0, explain: "Different dyes move at different rates on paper.", level: 1 },
      { q: "A solid changing directly into vapour on heating is called:", options: ["melting", "evaporation", "condensation", "sublimation"], answer: 3, explain: "Sublimation separates camphor or ammonium chloride from sand.", level: 1 },
      { q: "Cream is separated from milk by:", options: ["filtration", "centrifugation", "crystallisation", "sublimation"], answer: 1, explain: "Fast spinning makes the denser components settle apart.", level: 1 },
      { q: "20 g of salt is dissolved in 80 g of water. The mass by mass percentage of the solution is:", options: ["25 %", "16 %", "20 %", "80 %"], answer: 2, explain: "Mass of solution = 20 + 80 = 100 g; (20/100) × 100 = 20 %.", level: 2 },
      { q: "Which of these shows the Tyndall effect?", options: ["Salt solution", "Sugar solution", "Fog", "Copper sulphate solution"], answer: 2, explain: "Fog is a colloid, so its particles scatter a beam of light. True solutions do not.", level: 2 },
      {
        q: "Assertion (A): A mixture of oil and water can be separated with a separating funnel.\nReason (R): Oil and water are immiscible and have different densities.",
        options: AR,
        answer: 0, explain: "The two liquids form separate layers, so the denser one can be run off.", level: 2, keepOrder: true
      },
      { q: "Anita has a mixture of sand, common salt and ammonium chloride. The correct sequence to separate all three is:", options: ["add water, filter, then sublime", "sublime first, then dissolve the residue in water, filter and evaporate the filtrate", "evaporate first, then filter", "centrifuge, then sublime"], answer: 1, explain: "Ammonium chloride sublimes; salt then dissolves while sand is left behind on the filter paper; salt is recovered by evaporation.", level: 2 },
      { q: "Ethanol (boiling point 78 °C) and acetic acid (118 °C) are miscible liquids. They can be separated by:", options: ["filtration", "sublimation", "centrifugation", "distillation"], answer: 3, explain: "The boiling points differ by more than 25 °C, so distillation works.", level: 2 },
      { q: "5 g of a solute is present in 250 mL of solution. The mass by volume percentage is:", options: ["2 %", "5 %", "20 %", "0.5 %"], answer: 0, explain: "(5/250) × 100 = 2 %.", level: 3 },
      { q: "How much water is needed to make a 10 % (m/m) solution that contains 15 g of salt?", options: ["150 g", "135 g", "15 g", "85 g"], answer: 1, explain: "Mass of solution = 15 × 100/10 = 150 g, so water = 150 − 15 = 135 g.", level: 3 },
      {
        q: "Assertion (A): The mass of a solution is the sum of the masses of the solute and the solvent.\nReason (R): The mass of a solution is equal to the mass of the solvent only.",
        options: AR,
        answer: 2, explain: "A is true. R is false: the dissolved solute also contributes to the mass of the solution.", level: 3, keepOrder: true
      },
      { q: "A water-treatment plant adds alum to muddy water. The alum helps because it:", options: ["kills all bacteria", "dissolves the clay particles", "adds oxygen to the water", "makes tiny suspended particles clump together so that they settle"], answer: 3, explain: "This is coagulation: the clumped particles are heavy enough to settle and can be filtered.", level: 3 }
    ],
    written: [
      { q: "What is the Tyndall effect?", a: "The scattering of a beam of light by particles of a colloid or suspension, which makes the path of the beam visible.", marks: 1 },
      { q: "Name the method used to separate a mixture of oil and water.", a: "Separating funnel, because the two liquids are immiscible and have different densities.", marks: 1 },
      { q: "Distinguish between a solution and a suspension in two points.", a: "(1) In a solution the particles are very small, invisible, do not settle and pass through filter paper; in a suspension they are large, visible and settle on standing and can be filtered.\n(2) A solution does not scatter light; a suspension does.", marks: 2 },
      { q: "A solution has 15 g of solute in 135 g of solvent. Find its mass by mass percentage.", a: "Mass of solution = 15 + 135 = 150 g.\nMass % = (15/150) × 100 = 10 %.", marks: 2 },
      { q: "How much sugar is present in 250 g of a 12 % (m/m) sugar solution? How much water is needed?", a: "Sugar = (12/100) × 250 = 30 g.\nWater = 250 − 30 = 220 g.\nSo 30 g of sugar and 220 g of water make the solution.", marks: 3 },
      { q: "State the condition under which distillation is used and describe the method briefly.", a: "(1) Used to separate two miscible liquids whose boiling points differ by at least about 25 °C, or a liquid from a dissolved solid.\n(2) The mixture is heated; the liquid with the lower boiling point vaporises first.\n(3) The vapour is cooled in a condenser and collected as the pure liquid.", marks: 3 },
      { q: "Write three differences among a solution, a colloid and a suspension.", a: "(1) Particle size: very small in a solution, intermediate in a colloid, large in a suspension.\n(2) Settling: none in a solution and a colloid; a suspension settles.\n(3) Light: a solution does not scatter light; a colloid (Tyndall effect) and a suspension do. Only a suspension can be filtered.", marks: 3 },
      { q: "Describe how you would separate a mixture of sand, common salt and camphor. Name the technique at each step.", a: "(1) Heat the mixture gently in a china dish covered with an inverted funnel: camphor sublimes and is collected on the funnel (sublimation).\n(2) Add water to the residue and stir so that the salt dissolves.\n(3) Filter: sand remains on the filter paper (filtration).\n(4) Heat the filtrate to evaporate the water, or cool the saturated solution, to get salt crystals (evaporation/crystallisation).\n(5) Three separate components are thus obtained.", marks: 5 },
      { q: "Name four separation methods and state for each the property used and one application.", a: "Crystallisation: solubility changes with temperature; pure salt crystals from a saturated solution.\nDistillation: different boiling points; separating two miscible liquids.\nPaper chromatography: different rates of movement on paper; dyes in ink.\nCentrifugation: different densities on fast spinning; cream from milk or blood components.\nCoagulation with alum is used to purify muddy water.", marks: 5 },
      { q: "Case study: Rohan puts a small spot of black ink near the bottom of a strip of filter paper and dips the end in water without letting the spot touch the water. After some time, bands of blue, red and yellow appear at different heights.\n(i) Name the technique.\n(ii) Why do the colours separate?\n(iii) Why must the spot be above the water level?", a: "(i) Paper chromatography.\n(ii) Different dyes in the ink move up the paper at different rates, so they separate into bands.\n(iii) If the spot touched the water the dyes would dissolve in the water instead of travelling up the paper.", marks: 4, type: "case" }
    ]
  },
  "how-forces-affect-motion": {
    mcq: [
      { q: "The SI unit of force is the:", options: ["newton", "joule", "watt", "pascal"], answer: 0, explain: "1 N = 1 kg m s⁻².", level: 1 },
      { q: "The weight of an object of mass m on Earth is:", options: ["m/g", "mg", "m + g", "g/m"], answer: 1, explain: "Weight W = mg, with g = 9.8 m s⁻².", level: 1 },
      { q: "The tendency of an object to resist a change in its state of rest or motion is called:", options: ["friction", "momentum", "inertia", "weight"], answer: 2, explain: "That is inertia; a more massive object has greater inertia.", level: 1 },
      { q: "According to Newton's second law, force is equal to:", options: ["m/a", "a/m", "m + a", "m × a"], answer: 3, explain: "F = ma.", level: 1 },
      { q: "The action and reaction forces in Newton's third law act on:", options: ["the same object", "different objects", "only moving objects", "only objects at rest"], answer: 1, explain: "Because they act on different objects, they do not cancel each other.", level: 1 },
      { q: "Forces of 10 N and 6 N act on a body in opposite directions along the same line. The net force is:", options: ["16 N", "60 N", "4 N", "2 N"], answer: 2, explain: "Opposite forces subtract: 10 − 6 = 4 N.", level: 2 },
      { q: "A force produces an acceleration of 3 m s⁻² in a 5 kg mass. The force is:", options: ["8 N", "15 N", "1.67 N", "2 N"], answer: 1, explain: "F = ma = 5 × 3 = 15 N.", level: 2 },
      {
        q: "Assertion (A): Passengers lurch forward when a moving bus brakes suddenly.\nReason (R): The passengers' bodies tend to continue in their state of motion because of inertia.",
        options: AR,
        answer: 0, explain: "The bus slows but the passengers' bodies tend to keep moving forward.", level: 2, keepOrder: true
      },
      { q: "Ramesh pushes a 40 kg box with a force of 120 N but the box does not move. The force of friction on the box is:", options: ["0 N", "392 N", "120 N", "160 N"], answer: 2, explain: "The box is at rest, so the net force is zero and friction equals the push, 120 N.", level: 2 },
      { q: "The same force acts on trolleys of mass 2 kg and 4 kg. The ratio of their accelerations (2 kg : 4 kg) is:", options: ["1 : 2", "2 : 1", "1 : 1", "4 : 1"], answer: 1, explain: "a = F/m, so acceleration is inversely proportional to mass: 4 : 2 = 2 : 1.", level: 2 },
      { q: "Blocks of 2 kg and 3 kg are joined by a string on a smooth table. A force of 20 N pulls the 3 kg block, and the 2 kg block trails behind it. The tension in the string is:", options: ["20 N", "12 N", "8 N", "10 N"], answer: 2, explain: "a = 20/(2 + 3) = 4 m s⁻². The tension alone accelerates the 2 kg block: T = 2 × 4 = 8 N.", level: 3 },
      {
        q: "Assertion (A): The action and reaction forces cancel each other, so no motion ever occurs.\nReason (R): The action and reaction forces act on different objects.",
        options: AR,
        answer: 3, explain: "A is false. The forces act on different objects, so they cannot cancel (R is true), and motion does occur.", level: 3, keepOrder: true
      },
      { q: "A 1000 kg car has an engine force of 3000 N while friction is 1000 N. Its acceleration is:", options: ["2 m s⁻²", "1 m s⁻²", "3 m s⁻²", "4 m s⁻²"], answer: 0, explain: "Net force = 3000 − 1000 = 2000 N; a = 2000/1000 = 2 m s⁻².", level: 3 },
      { q: "A 2 kg ball at rest is acted on by a net force of 6 N for 4 s. Its speed at the end is:", options: ["6 m s⁻¹", "12 m s⁻¹", "24 m s⁻¹", "3 m s⁻¹"], answer: 1, explain: "a = 6/2 = 3 m s⁻²; v = 0 + 3 × 4 = 12 m s⁻¹.", level: 3 }
    ],
    written: [
      { q: "State Newton's first law of motion.", a: "An object stays at rest or in uniform motion in a straight line unless an unbalanced external force acts on it.", marks: 1 },
      { q: "Define one newton.", a: "One newton is the force that gives a mass of 1 kg an acceleration of 1 m s⁻².", marks: 1 },
      { q: "Differentiate between mass and weight.", a: "Mass is the quantity of matter in a body (kg); it is constant everywhere.\nWeight is the gravitational force on the body, W = mg (N); it changes with the value of g.", marks: 2 },
      { q: "Why is a loaded truck harder to stop than an empty one moving at the same speed?", a: "A loaded truck has greater mass and hence greater inertia.\nBy F = ma, the same braking force gives it a smaller retardation, so it takes longer to stop.", marks: 2 },
      { q: "A force of 12 N acts on a body of mass 3 kg initially at rest. Find the acceleration and the velocity after 5 s.", a: "a = F/m = 12/3 = 4 m s⁻².\nv = u + at = 0 + 4 × 5 = 20 m s⁻¹.\nSo the acceleration is 4 m s⁻² and the velocity after 5 s is 20 m s⁻¹.", marks: 3 },
      { q: "A 1500 kg car's engine gives a force of 4500 N and friction is 1500 N. Find the acceleration, and the speed and distance after 6 s from rest.", a: "Net force = 4500 − 1500 = 3000 N.\na = 3000/1500 = 2 m s⁻².\nv = at = 2 × 6 = 12 m s⁻¹.\ns = ½at² = ½ × 2 × 36 = 36 m.", marks: 3 },
      { q: "State Newton's third law and explain it with two everyday examples.", a: "(1) When object A exerts a force on B, B exerts an equal and opposite force on A; the forces act on different objects.\n(2) Example 1: a swimmer pushes the water backward and the water pushes the swimmer forward.\n(3) Example 2: a gun pushes the bullet forward and the bullet pushes the gun backward (recoil).", marks: 3 },
      { q: "Two blocks of 4 kg and 6 kg are connected by a string and rest on a smooth table. A force of 50 N pulls the 6 kg block along the table so that the 4 kg block trails behind. Find the acceleration and the tension in the string.", a: "Treat both blocks as one system: total mass = 4 + 6 = 10 kg.\na = F/(m₁ + m₂) = 50/10 = 5 m s⁻².\nThe tension is the only force accelerating the 4 kg block: T = 4 × 5 = 20 N.\nCheck on the 6 kg block: 50 − T = 6 × 5 gives T = 20 N.\nAnswer: a = 5 m s⁻², T = 20 N.", marks: 5 },
      { q: "State Newton's three laws of motion and give one everyday illustration of each.", a: "First law: an object remains at rest or in uniform motion unless an unbalanced force acts; passengers jerk forward when a bus stops suddenly.\nSecond law: acceleration is directly proportional to net force and inversely proportional to mass, F = ma; an empty cart is easier to accelerate than a loaded one.\nThird law: every action has an equal and opposite reaction on a different object; a gun recoils when it fires.\nThe unit of force follows from F = ma: 1 N = 1 kg m s⁻².\nTogether they explain the motion of objects under balanced and unbalanced forces.", marks: 5 },
      { q: "Case study: A bullet of mass 0.05 kg is fired from a gun of mass 4 kg. During firing each experiences a force of 200 N for a short time.\n(i) Compare the forces on the bullet and the gun.\n(ii) Find the acceleration of the bullet and of the gun.\n(iii) Name the law that explains the gun's recoil.", a: "(i) The forces are equal in magnitude (200 N) and opposite in direction.\n(ii) Bullet: a = 200/0.05 = 4000 m s⁻². Gun: a = 200/4 = 50 m s⁻².\n(iii) Newton's third law; the lighter bullet gets a far larger acceleration because a = F/m.", marks: 4, type: "case" }
    ]
  },
  "work-energy-and-simple-machines": {
    mcq: [
      { q: "The SI unit of work is the:", options: ["joule", "watt", "newton", "pascal"], answer: 0, explain: "1 J = 1 N m.", level: 1 },
      { q: "The kinetic energy of a body of mass m moving with speed v is:", options: ["mv", "½mv²", "mv²", "½mv"], answer: 1, explain: "K = ½mv².", level: 1 },
      { q: "The rate of doing work is called:", options: ["energy", "force", "power", "momentum"], answer: 2, explain: "P = W/t, measured in watt.", level: 1 },
      { q: "The mechanical advantage of a fixed pulley is:", options: ["0", "2", "0.5", "1"], answer: 3, explain: "A fixed pulley only changes the direction of the effort, so MA = 1.", level: 1 },
      { q: "A pair of scissors is a lever of:", options: ["Class I", "Class II", "Class III", "no class"], answer: 0, explain: "The fulcrum (the pivot) lies between the effort and the load.", level: 1 },
      { q: "A force of 50 N moves an object 4 m in its own direction. The work done is:", options: ["54 J", "12.5 J", "200 J", "0.08 J"], answer: 2, explain: "W = F × s = 50 × 4 = 200 J.", level: 2 },
      { q: "A 2 kg ball moves with a speed of 3 m s⁻¹. Its kinetic energy is:", options: ["6 J", "9 J", "18 J", "3 J"], answer: 1, explain: "K = ½ × 2 × 3² = 9 J.", level: 2 },
      {
        q: "Assertion (A): The work done by gravity on a person walking along a level road is zero.\nReason (R): The force of gravity is perpendicular to the displacement.",
        options: AR,
        answer: 0, explain: "Work is force along the displacement; a perpendicular force does no work.", level: 2, keepOrder: true
      },
      { q: "Rohan lifts a 20 kg sack to a shelf 1.5 m high in 3 s (g = 10 m s⁻²). The power he develops is:", options: ["30 W", "300 W", "100 W", "450 W"], answer: 2, explain: "W = mgh = 20 × 10 × 1.5 = 300 J; P = 300/3 = 100 W.", level: 2 },
      { q: "If the velocity of a body is doubled, its kinetic energy becomes:", options: ["twice", "four times", "eight times", "unchanged"], answer: 1, explain: "K ∝ v², so doubling v gives 4 times K.", level: 2 },
      { q: "A 0.5 kg ball is dropped from a height of 20 m (g = 10 m s⁻²). Its speed just before hitting the ground is:", options: ["10 m s⁻¹", "40 m s⁻¹", "14 m s⁻¹", "20 m s⁻¹"], answer: 3, explain: "mgh = ½mv² gives v = √(2gh) = √400 = 20 m s⁻¹.", level: 3 },
      {
        q: "Assertion (A): A machine can deliver more work than the work put into it.\nReason (R): A machine can reduce the effort needed to do a task.",
        options: AR,
        answer: 3, explain: "A is false: energy cannot be created. R is true, as a machine can change the size or direction of the force.", level: 3, keepOrder: true
      },
      { q: "A lever has an effort arm of 60 cm and a load arm of 20 cm. The effort needed to lift a load of 90 N is:", options: ["270 N", "10 N", "30 N", "60 N"], answer: 2, explain: "Effort × 60 = 90 × 20 gives effort = 30 N (MA = 3).", level: 3 },
      { q: "The engine of a 1200 kg car increases its speed from 10 m s⁻¹ to 20 m s⁻¹. The work done by the engine is:", options: ["1.2 × 10⁵ J", "1.8 × 10⁵ J", "2.4 × 10⁵ J", "6 × 10⁴ J"], answer: 1, explain: "Change in K = ½ × 1200 × (400 − 100) = 1.8 × 10⁵ J. Squaring the difference of speeds is the common mistake.", level: 3 }
    ],
    written: [
      { q: "State the work–energy theorem.", a: "The work done on an object equals the change in its kinetic energy.", marks: 1 },
      { q: "Write the formula for gravitational potential energy and the unit.", a: "U = mgh; unit joule (J).", marks: 1 },
      { q: "A force of 25 N moves a body 6 m along its own direction. Find the work done. State what happens to the work if the body moves 6 m opposite to the force.", a: "W = F × s = 25 × 6 = 150 J.\nIf the displacement is opposite to the force, the work is negative: −150 J.", marks: 2 },
      { q: "Why is no work done by a person who stands holding a heavy load?", a: "Work needs displacement in the direction of the force.\nThe load does not move, so the displacement is zero and the work done is zero.", marks: 2 },
      { q: "Find the kinetic energy of an 800 kg car moving at 72 km h⁻¹.", a: "v = 72 × 5/18 = 20 m s⁻¹.\nK = ½mv² = ½ × 800 × 400.\nK = 1.6 × 10⁵ J.", marks: 3 },
      { q: "A pump lifts 600 kg of water to a height of 10 m in 2 minutes (g = 10 m s⁻²). Find the power.", a: "Work = mgh = 600 × 10 × 10 = 60 000 J.\nTime = 120 s.\nP = W/t = 60 000/120 = 500 W.", marks: 3 },
      { q: "A 2 kg stone is dropped from a height of 5 m (g = 10 m s⁻²). Using conservation of energy find its kinetic energy and speed just before landing.", a: "Initial potential energy = mgh = 2 × 10 × 5 = 100 J.\nPE changes completely into KE, so K = 100 J.\n½ × 2 × v² = 100 gives v = 10 m s⁻¹.", marks: 3 },
      { q: "A 5 kg body is raised to a height of 8 m and released (g = 10 m s⁻²). Find (a) its potential energy at the top, (b) its kinetic energy and (c) speed when it is 3 m above the ground, (d) its kinetic energy on reaching the ground.", a: "(a) PE = mgh = 5 × 10 × 8 = 400 J.\n(b) At 3 m, PE = 5 × 10 × 3 = 150 J; KE = 400 − 150 = 250 J (total energy is conserved).\n(c) ½ × 5 × v² = 250 gives v² = 100, v = 10 m s⁻¹.\n(d) At the ground PE = 0, so KE = 400 J.", marks: 5 },
      { q: "Describe the three classes of levers with the positions of fulcrum, load and effort, and one example of each. State the lever balance condition.", a: "Balance condition: effort × effort arm = load × load arm.\nClass I: the fulcrum is between effort and load (scissors, seesaw).\nClass II: the load is between the fulcrum and the effort (wheelbarrow).\nClass III: the effort is between the fulcrum and the load (tweezers).\nMechanical advantage = load ÷ effort; a Class III lever has MA less than 1.", marks: 5 },
      { q: "Case study: A worker raises a load of 100 N to a height of 1 m by sliding it up a smooth inclined plane 5 m long.\n(i) Find the work done on the load against gravity.\n(ii) Find the effort needed along the plane.\n(iii) Find the mechanical advantage and say what is gained and lost.", a: "(i) Work = load × height = 100 × 1 = 100 J.\n(ii) Effort × length = work, so effort = 100/5 = 20 N.\n(iii) MA = load/effort = 100/20 = 5. A smaller force is needed but it acts over a longer distance; the work done is the same.", marks: 4, type: "case" }
    ]
  }
  });
})();
