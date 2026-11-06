// Class 7 Mathematics (PSEB) practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(7, "mathspb", {
  "lines-and-angles": {
    mcq: [
      M(1, "A line that cuts two or more lines at different points is called a", "transversal", ["bisector", "tangent", "diagonal"], "Such a line is called a transversal.", "transversal"),
      M(2, "How many angles does a transversal make with two lines?", "8", ["4", "6", "12"], "A transversal makes 4 angles at each crossing, so 8 angles in all.", "transversal"),
      M(3, "Which angle pair lies inside the two lines, on opposite sides of the transversal?", "Alternate interior angles", ["Corresponding angles", "Vertically opposite angles", "Co-interior angles"], "Alternate interior angles lie between the two lines on opposite sides of the transversal.", "transversal")
    ],
    written: [
      W(2, "short", "What is a transversal? Give one everyday example and name the angle pair that is in the same position at the two crossings.", "A transversal is a line that cuts two or more lines at different points, for example a rail cutting the sleepers of a railway track. Angles in the same position at the two crossings are corresponding angles.", "transversal")
    ]
  },
  "symmetry": {
    mcq: [
      M(1, "Which letter has line symmetry only?", "T", ["H", "S", "F"], "T has a vertical line of symmetry but no rotational symmetry. H has both kinds, S has rotational only and F has neither.", "using-both-ideas"),
      M(2, "Which of these has neither line symmetry nor rotational symmetry?", "Scalene triangle", ["Rectangle", "Circle", "Kite"], "A scalene triangle has no mirror line and does not fit on itself in any turn smaller than 360°.", "using-both-ideas"),
      M(3, "Which statement about a parallelogram (not a rectangle or rhombus) is true?", "It has rotational symmetry but no line symmetry", ["It has line symmetry but no rotational symmetry", "It has both kinds of symmetry", "It has neither kind of symmetry"], "It fits on itself after a half turn, but no mirror line divides it into matching halves.", "using-both-ideas")
    ],
    written: [
      W(4, "short", "Sort the letters H, A, S and F into: both kinds of symmetry, line symmetry only, rotational symmetry only, and neither. Give a reason for each.", "H has both, as it has mirror lines and fits on itself after a half turn. A has line symmetry only, as it has one vertical mirror line. S has rotational symmetry only, as a half turn fits it but it has no mirror line. F has neither.", "using-both-ideas")
    ]
  },
  "visualising-solid-shapes": {
    mcq: [
      M(1, "Which of these solids is a polyhedron?", "Cube", ["Cone", "Sphere", "Cylinder"], "A polyhedron has flat faces and straight edges. Cone, sphere and cylinder have curved surfaces.", "plane-figures-and-solids"),
      M(2, "What is the point where the triangular faces of a pyramid meet called?", "Apex", ["Edge", "Base", "Net"], "The triangular faces of a pyramid meet at a point called the apex.", "plane-figures-and-solids"),
      M(3, "A solid has two identical parallel bases joined by rectangles. It is a", "prism", ["pyramid", "cone", "sphere"], "This describes a prism. A pyramid has only one base.", "plane-figures-and-solids")
    ],
    written: [
      W(3, "short", "How is a solid different from a plane figure? Name two solids that are not polyhedra.", "A plane figure such as a square or circle is flat, but a solid also has height or depth. A cylinder and a sphere (or a cone) are not polyhedra because they have curved surfaces.", "plane-figures-and-solids")
    ]
  },
  });
})();
