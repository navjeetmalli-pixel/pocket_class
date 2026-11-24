// Class 11 Biology practice bank, part 5: Digestion and Absorption (formative). Extra board-style questions for year-long practice (unreviewed draft).
(function () {
  const AR_OPTS = ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."];
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    return { q, options, answer: at, explain, level };
  }
  // AR(level, assertion, reason, answer index, explanation): assertion-reason with fixed options.
  function AR(level, a, r, answer, explain) {
    return { q: "Assertion (A): " + a + "\nReason (R): " + r, options: AR_OPTS, answer, explain, level, keepOrder: true };
  }
  // W(marks, question, model answer, type?)
  function W(marks, q, a, type) {
    const o = { q, a, marks };
    if (type) o.type = type;
    return o;
  }
  StudyData.addPractice(11, "biology", {
  "digestion-and-absorption": {
    mcq: [
      M(1, "The alimentary canal ends at the", "anus", ["rectum", "caecum", "ileum"], "Faeces pass out of the body through the anus after being stored in the rectum."),
      M(1, "The number of teeth in an adult human is", "32", ["20", "28", "36"], "The dental formula 2123/2123 gives 32 teeth."),
      M(1, "The hardest substance in the human body is", "enamel", ["dentine", "cementum", "bone"], "Enamel covers the crown of the tooth."),
      M(1, "Teeth fixed in sockets of the jaw bone are called", "thecodont", ["acrodont", "pleurodont", "homodont"], "Humans have thecodont teeth."),
      M(1, "Which gland is the largest gland in the human body?", "Liver", ["Pancreas", "Parotid gland", "Thyroid"], "The liver lies in the upper right abdomen and makes bile."),
      M(1, "Which part of the small intestine is the first one, receiving the hepatopancreatic duct?", "Duodenum", ["Jejunum", "Ileum", "Caecum"], "The bile and pancreatic juices enter the duodenum."),
      M(2, "Salivary amylase acts best on", "starch", ["proteins", "fats", "cellulose"], "It breaks starch down to maltose in the mouth."),
      M(2, "Pepsinogen is converted to pepsin by", "hydrochloric acid", ["bile salts", "enterokinase", "amylase"], "HCl from the parietal cells makes the stomach acidic and activates pepsinogen."),
      M(2, "The intrinsic factor, needed for vitamin B12 absorption, is secreted by", "parietal cells", ["chief cells", "goblet cells", "Brunner's glands"], "Parietal cells secrete both HCl and intrinsic factor."),
      M(2, "The semi-fluid mass formed in the stomach is called", "chyme", ["bolus", "chyle", "faeces"], "Food becomes a bolus in the mouth and chyme in the stomach."),
      M(2, "Which of these contains no digestive enzymes?", "Bile", ["Saliva", "Pancreatic juice", "Succus entericus"], "Bile only has bile salts and pigments, which emulsify fats."),
      M(2, "Villi of the small intestine increase the", "surface area for absorption", ["rate of peristalsis", "secretion of bile", "pH of chyme"], "Villi and microvilli give a very large absorbing surface."),
      M(2, "A lymph vessel found inside each villus is the", "lacteal", ["capillary", "hepatic vein", "lymph node"], "Lacteals take up chylomicrons."),
      M(2, "Glucose and amino acids are absorbed mainly by", "active transport", ["osmosis", "simple diffusion only", "phagocytosis"], "They enter along with sodium ions."),
      M(2, "Which hormone makes the pancreas release a bicarbonate-rich juice?", "Secretin", ["Gastrin", "Cholecystokinin", "Gastric inhibitory peptide"], "Secretin is released by the duodenum."),
      M(2, "Which structure prevents backflow of material from the large intestine to the ileum?", "Ileo-caecal valve", ["Pyloric sphincter", "Sphincter of Oddi", "Epiglottis"], "The valve lies between the ileum and the caecum."),
      M(3, "Lactose is converted by lactase to", "glucose and galactose", ["glucose and fructose", "two molecules of glucose", "fructose and galactose"], "Sucrose gives glucose and fructose, and maltose gives two glucose."),
      M(3, "Fatty acids reach the lymph after being packed into", "chylomicrons made in the intestinal cells", ["bile salts made in the liver", "pepsin made in the stomach", "villi made in the duodenum"], "Micelles carry them in, and chylomicrons carry them on to the lacteals."),
      M(3, "A person has a blocked bile duct. Which digestion would be affected most?", "Digestion and absorption of fats", ["Digestion of starch in the mouth", "Digestion of proteins in the stomach", "Absorption of water in the colon"], "Without bile, fats are not emulsified and lipases act poorly."),
      M(3, "Which sequence correctly shows the order of the parts of the small intestine?", "Duodenum, jejunum, ileum", ["Jejunum, duodenum, ileum", "Ileum, jejunum, duodenum", "Duodenum, ileum, jejunum"], "The duodenum is next to the stomach and the ileum joins the large intestine."),
      M(3, "Trypsin is released as trypsinogen so that it", "does not digest the pancreas itself", ["can digest fats in the stomach", "is stored as bile", "works only in an acid medium"], "The inactive form is activated only in the small intestine by enterokinase."),
      AR(2, "Bile is important for the digestion of fats even though it has no enzymes.", "Bile salts emulsify fats into small droplets, which gives lipases a larger surface to act on.", 0, "Emulsification speeds the action of lipases."),
      AR(3, "Fatty acids and glycerol are absorbed in the form of micelles.", "They are insoluble in water, so they cannot enter the intestinal cells directly.", 0, "Micelles carry the insoluble products into the cells."),
      AR(3, "Most digestion and absorption of food takes place in the small intestine.", "The small intestine has no digestive enzymes of its own.", 2, "A is true, but R is false: the pancreatic juice and succus entericus contain many enzymes."),
      AR(2, "The stomach wall is not digested by its own pepsin.", "Pepsin is secreted in the active form but the mucus layer is thin.", 2, "A is true, but R is false: pepsin is secreted as inactive pepsinogen and a thick mucus layer protects the wall."),
    ],
    written: [
      W(2, "Write the dental formula of an adult human and state what each letter means.", "I 2/2, C 1/1, PM 2/2, M 3/3 = 2123/2123.\nI is incisors, C canines, PM premolars and M molars, giving 32 teeth in all."),
      W(2, "What is the function of the hepatopancreatic duct and the sphincter of Oddi?", "The hepatopancreatic duct carries bile and pancreatic juice into the duodenum.\nThe sphincter of Oddi guards its opening and controls the flow."),
      W(2, "Name the cells of the gastric glands and state what each secretes.", "Chief cells secrete pepsinogen.\nParietal cells secrete HCl and intrinsic factor.\nMucus-secreting cells secrete mucus."),
      W(3, "Describe the role of the stomach in digestion.", "Gastric juice contains HCl, which kills bacteria and makes the contents acidic, and pepsinogen, which HCl converts to pepsin.\nPepsin breaks proteins into proteoses and peptones.\nMucus protects the stomach wall, and the food becomes chyme."),
      W(3, "How do trypsinogen and pepsinogen become active? Why are they secreted in inactive form?", "HCl converts pepsinogen to pepsin, and enterokinase converts trypsinogen to trypsin.\nBoth enzymes digest proteins.\nIf they were active inside the gland cells, they would digest the cells' own proteins."),
      W(3, "Name the hormones of the gastro-intestinal tract and state one function of each.", "Gastrin stimulates the gastric glands to secrete.\nSecretin makes the pancreas release bicarbonate-rich juice.\nCholecystokinin (CCK) makes the pancreas release enzymes and the gall bladder release bile.\nGIP slows down gastric secretion and movement."),
      W(4, "Explain how the structure of the small intestine is suited to absorption.", "The mucosa is folded into villi, and the cells on them have microvilli, so the surface area is very large.\nEach villus has a network of blood capillaries and a lacteal.\nThe walls are thin, so the absorbed substances pass quickly."),
      W(5, "Describe the digestion of carbohydrates, proteins and fats in the human alimentary canal.", "Carbohydrates: salivary amylase starts the digestion of starch in the mouth; pancreatic amylase continues in the duodenum; the brush-border enzymes finish the job, giving maltose → glucose, lactose → glucose + galactose and sucrose → glucose + fructose.\nProteins: pepsin in the stomach gives proteoses and peptones; trypsin and chymotrypsin in the small intestine give peptides; the peptidases of the intestinal juice give amino acids.\nFats: bile emulsifies fats; pancreatic and intestinal lipases give fatty acids and glycerol (with di- and monoglycerides on the way)."),
      W(5, "Explain how fats are absorbed and reach the blood.", "Fats are digested to fatty acids and glycerol, which cannot dissolve in water.\nThey are packed into tiny droplets called micelles, which move into the intestinal cells.\nIn the cells they are re-formed into fats, which are coated with protein as chylomicrons.\nChylomicrons enter the lacteals in the villi and are carried in the lymph.\nThe lymph finally drains into the blood."),
      W(4, "Case study: A patient has been vomiting and has had watery stools many times a day for two days. He is dehydrated.\n(i) Name the main disorder described. (1)\n(ii) Why does this cause dehydration? (1)\n(iii) Name one other disorder of the digestive system and state its cause or sign. (2)", "(i) Diarrhoea (with vomiting). (1)\n(ii) The faeces are watery and frequent, and the food and water do not remain long enough in the gut to be absorbed, so the body loses water. (1)\n(iii) Any one: jaundice (liver is affected, bile pigments build up and the skin and eyes turn yellow); constipation (faeces are retained in the rectum due to irregular bowel movements); indigestion (food is not properly digested because of too little enzyme secretion, anxiety, over-eating or spicy food). (2)", "case"),
    ]
  },
  });
})();
