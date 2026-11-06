// Class 11 Geography practice bank, part 4: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "geography", {
  "interior-of-the-earth": {
    mcq: [
      M(1, "The deepest drill, at Kola in the Arctic Ocean, has reached only about", "12 km", ["3 km", "120 km", "6,370 km"], "The earth's radius is about 6,370 km, so even the deepest drill has scratched only the surface.", "sources-of-information-about-the-interior"),
      M(2, "Which of these is a direct source of information about the earth's interior?", "Lava from a volcanic eruption", ["Gravity anomalies at the surface", "Magnetic surveys of the surface", "Meteors"], "Surface rocks, mining, drilling projects and magma or lava are direct sources. The others are indirect.", "sources-of-information-about-the-interior"),
      M(3, "The earth's radius is about 6,370 km and the deepest drill reaches about 12 km. The drill has gone", "less than 1 per cent of the way", ["about 12 per cent of the whole way", "about 50 per cent of the way", "about 6 per cent of the way"], "12 ÷ 6,370 × 100 is about 0.19 per cent.", "sources-of-information-about-the-interior")
    ],
    written: [
      W(3, "short", "Why is seismic activity the most important source of information about the interior? What can meteors tell us?", "Earthquake waves travel through the earth, and their speed and direction change with the material they pass through, so they reveal the layers inside. Meteors are made of material similar to the earth, so they give clues about the earth's composition.", "sources-of-information-about-the-interior")
    ]
  },
  "composition-and-structure-of-atmosphere": {
    mcq: [
      M(1, "Climate is", "the average weather over many years", ["the weather of a single day or week", "the wind of one season only", "the rainfall of one hour"], "Weather is the short-term condition of the atmosphere; climate is its long-term average.", "elements-of-weather-and-climate"),
      M(2, "A forecast says 'heavy rain tomorrow evening'. This describes", "weather", ["climate", "relief", "insolation"], "It is about the short-term state of the atmosphere, which is weather.", "elements-of-weather-and-climate"),
      M(3, "Which of these is NOT an element of weather and climate?", "Soil type", ["Temperature", "Humidity", "Precipitation"], "The elements are temperature, pressure, winds, humidity, clouds and precipitation.", "elements-of-weather-and-climate")
    ],
    written: [
      W(3, "short", "Distinguish between weather and climate and name the main elements of both.", "Weather is the short-term condition of the atmosphere; climate is the average weather over a long period. The elements are temperature, pressure, winds, humidity, clouds and precipitation.", "elements-of-weather-and-climate")
    ]
  },
  "movements-of-ocean-water": {
    mcq: [
      M(1, "A tidal cycle with two high tides and two low tides each day is called", "semi-diurnal", ["diurnal", "mixed", "neap or spring"], "Diurnal tides have one high and one low a day; mixed tides vary in height.", "importance-of-tides-and-tidal-types"),
      M(2, "Which place in Canada has some of the highest tides in the world?", "Bay of Fundy", ["Southampton", "Gulf of Mannar", "Bay of Bengal"], "The Bay of Fundy has very high tides. Southampton in England has a double high tide.", "importance-of-tides-and-tidal-types"),
      M(3, "Which of these is a benefit of tides?", "Clearing silt and polluted water", ["Raising the salinity of rivers", "Causing earthquakes along coasts", "Making ocean currents colder"], "Tides help navigation and fishing, let ships enter harbours, generate tidal power and clear estuaries of silt and polluted water.", "importance-of-tides-and-tidal-types")
    ],
    written: [
      W(4, "short", "State four ways in which tides are important and name the three types of tides based on frequency.", "Tides help navigation and fishing, allow ships into harbours, can generate tidal power and remove silt and polluted water from estuaries. Types by frequency: semi-diurnal, diurnal and mixed.", "importance-of-tides-and-tidal-types")
    ]
  },
  "natural-vegetation": {
    mcq: [
      M(1, "India has over how many plant species?", "47,000", ["4,700", "470,000", "27,000"], "India has great diversity of flora, with over 47,000 plant species.", "factors-and-importance"),
      M(2, "Which of these does NOT decide the natural vegetation of a place?", "The language spoken there", ["The relief of the whole region", "Soil", "Sunlight"], "Natural vegetation depends on relief, soil, temperature, rainfall and sunlight.", "factors-and-importance"),
      M(3, "Forests help to", "protect soil and influence rainfall", ["dry up the rivers of the whole region", "increase soil erosion", "stop all rainfall"], "Forests also give timber, fuel, fodder and medicines.", "factors-and-importance")
    ],
    written: [
      W(3, "short", "Name five factors that decide the natural vegetation of a region and three uses of forests.", "Factors: relief, soil, temperature, rainfall and sunlight. Uses of forests: timber, fuel, fodder, medicines, protecting soil and influencing rainfall (any three).", "factors-and-importance")
    ]
  },
  });
})();
