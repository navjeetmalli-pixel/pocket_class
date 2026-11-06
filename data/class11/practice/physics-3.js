// Class 11 Physics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(11, "physics", {
  "motion-in-a-plane": {
    mcq: [
      M(1, "For a body moving along a curved path in a plane, the velocity at any instant is directed", "along the tangent to the path", ["along the normal to the path at that point", "towards the origin of the coordinate axes", "opposite to the direction of acceleration"], "Velocity is dr/dt and always points along the tangent to the path.", "motion-in-a-plane-with-constant-acceleration"),
      M(2, "Motion in a plane with constant acceleration can be treated as", "two independent straight-line motions", ["one circular motion about the origin", "a single straight-line motion", "two motions that depend on each other"], "The equations v = v₀ + at and r = r₀ + v₀t + ½at² hold separately for the x and y components.", "motion-in-a-plane-with-constant-acceleration"),
      M(3, "A particle starts at the origin with v₀ = (2î + 3ĵ) m s⁻¹ and constant acceleration a = (4î − ĵ) m s⁻². Its position after 2 s is", "(12î + 4ĵ) m", ["(10î + ĵ) m", "(20î + 2ĵ) m", "(4î + 6ĵ) m"], "x = 2(2) + ½(4)(2²) = 12 m and y = 3(2) + ½(−1)(2²) = 4 m. (10î + ĵ) is the velocity, not the position.", "motion-in-a-plane-with-constant-acceleration")
    ],
    written: [
      W(4, "short", "A body starts from the origin with velocity 5î m s⁻¹ and has a constant acceleration 2ĵ m s⁻². Find its position and its speed after 3 s.", "x = v₀t = 5 × 3 = 15 m and y = ½at² = ½ × 2 × 9 = 9 m, so r = (15î + 9ĵ) m. The velocity is v = 5î + 2 × 3 ĵ = (5î + 6ĵ) m s⁻¹, so the speed is √(25 + 36) = √61 ≈ 7.8 m s⁻¹.", "motion-in-a-plane-with-constant-acceleration")
    ]
  },
  "system-of-particles-and-rotational-motion": {
    mcq: [
      M(1, "The rotational analogue of F = ma is", "τ = Iα", ["L = Iω", "P = τω", "W = τθ"], "Torque τ = Iα plays the role of force, with moment of inertia for mass and angular acceleration for acceleration.", "rotation-about-a-fixed-axis"),
      M(2, "The rotational kinetic energy of a body of moment of inertia I and angular velocity ω is", "½Iω²", ["½Iω", "Iω²", "½Iα²"], "Rotational KE = ½Iω², the analogue of ½mv².", "rotation-about-a-fixed-axis"),
      M(3, "A wheel starts from rest with a constant angular acceleration of 4 rad s⁻². The angle it turns through in 5 s is", "50 rad", ["100 rad", "20 rad", "10 rad"], "θ = ω₀t + ½αt² = 0 + ½ × 4 × 25 = 50 rad.", "rotation-about-a-fixed-axis")
    ],
    written: [
      W(4, "short", "A flywheel of moment of inertia 2 kg m² rotates at 30 rad s⁻¹. Find its rotational kinetic energy and the constant torque that brings it to rest in 6 s.", "KE = ½Iω² = ½ × 2 × 30² = 900 J. The angular deceleration is α = 30/6 = 5 rad s⁻². The torque is τ = Iα = 2 × 5 = 10 N m.", "rotation-about-a-fixed-axis")
    ]
  },
  "waves": {
    mcq: [
      M(1, "When a wave is reflected at a rigid boundary, the phase change is", "π", ["zero", "π/2", "2π"], "At a rigid boundary a crest returns as a trough, a phase change of π. At an open boundary there is no phase change.", "superposition-reflection-and-standing-waves"),
      M(2, "In a standing wave the distance between two adjacent nodes is", "λ/2", ["λ/4", "λ", "2λ"], "Adjacent nodes are λ/2 apart, and a node and the next antinode are λ/4 apart.", "superposition-reflection-and-standing-waves"),
      M(3, "A standing wave on a string has adjacent nodes 0.3 m apart. The wave speed on the string is 120 m s⁻¹. The frequency is", "200 Hz", ["400 Hz", "100 Hz", "800 Hz"], "λ/2 = 0.3 m, so λ = 0.6 m. Then f = v/λ = 120/0.6 = 200 Hz.", "superposition-reflection-and-standing-waves")
    ],
    written: [
      W(3, "short", "Distinguish reflection at a rigid boundary from reflection at an open boundary. In a standing wave, what is the distance between a node and the next antinode?", "At a rigid boundary the wave is reflected with a phase change of π (a crest returns as a trough). At an open boundary it is reflected with no phase change. A node and the next antinode are λ/4 apart.", "superposition-reflection-and-standing-waves")
    ]
  },
  });
})();
