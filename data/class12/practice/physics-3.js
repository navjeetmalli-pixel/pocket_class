// Class 12 Physics practice bank, part 3: questions for learning objectives that had none. Extra practice (unreviewed draft).
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
  StudyData.addPractice(12, "physics", {
  "electrostatic-potential-and-capacitance": {
    mcq: [
      M(1, "Inside a conductor in electrostatic equilibrium, any excess charge resides", "only on the outer surface", ["uniformly throughout its volume", "at the centre of the conductor", "only inside the cavity"], "The field inside the conductor is zero, so excess charge moves to the outer surface.", "conductors-and-dielectrics"),
      M(2, "The dielectric constant K = ε/ε₀ of any dielectric is", "greater than 1", ["less than 1", "exactly equal to 1", "negative"], "A dielectric gets polarised and partly opposes the applied field, so K > 1.", "conductors-and-dielectrics"),
      M(3, "The surface charge density on a conductor is 8.85 × 10⁻⁹ C m⁻². The electric field just outside its surface is (ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²)", "10³ N C⁻¹", ["10⁻³ N C⁻¹", "7.8 × 10⁻²⁰ N C⁻¹", "10⁶ N C⁻¹"], "E = σ/ε₀ = 8.85 × 10⁻⁹ ÷ 8.85 × 10⁻¹² = 10³ N C⁻¹, normal to the surface.", "conductors-and-dielectrics")
    ],
    written: [
      W(3, "short", "Why is it safe to sit inside a car during a thunderstorm? What happens to a dielectric placed in an electric field?", "The field inside a cavity of a conductor is zero (electrostatic shielding), so the metal body of the car protects the people inside from outside fields. A dielectric becomes polarised: its molecules develop or align dipoles, which create a field that partly opposes the applied field.", "conductors-and-dielectrics")
    ]
  },
  "dual-nature-of-radiation-and-matter": {
    mcq: [
      M(1, "The minimum energy needed to free an electron from a metal surface is called the", "work function", ["stopping potential", "photon flux", "emission current"], "Free electrons cannot normally leave a metal; the minimum energy needed is the work function φ₀.", "electron-emission"),
      M(2, "Emission of electrons from a metal by heating it is called", "thermionic emission", ["field emission", "photoelectric emission", "secondary emission"], "Energy can be supplied by heating (thermionic), a very strong electric field (field emission) or light (photoelectric).", "electron-emission"),
      M(3, "The work function of caesium is 2.14 eV. In joules it is about (1 eV = 1.6 × 10⁻¹⁹ J)", "3.4 × 10⁻¹⁹ J", ["1.3 × 10⁻¹⁹ J", "3.4 × 10⁻²⁰ J", "2.14 × 10⁻¹⁹ J"], "2.14 × 1.6 × 10⁻¹⁹ = 3.42 × 10⁻¹⁹ J.", "electron-emission"),
      M(1, "Experiments show that the maximum kinetic energy of photoelectrons depends only on the", "frequency of the incident light", ["intensity of the incident light", "time of exposure", "area of the metal plate"], "Wave theory predicted that it should increase with intensity, but experiments show it depends only on frequency.", "failure-of-the-wave-theory"),
      M(2, "Wave theory predicts emission at any frequency if the light is intense enough. Experiments show", "a threshold frequency", ["emission at every frequency", "emission only at low frequencies", "emission only in the dark"], "Below the threshold frequency no photoelectrons are emitted, however intense the light.", "failure-of-the-wave-theory"),
      M(3, "Wave theory predicts a time lag for weak light, but experiments show that photoelectric emission is", "instantaneous", ["delayed by a few minutes", "delayed by several hours", "delayed in proportion to intensity"], "Emission begins at once even for very weak light of suitable frequency.", "failure-of-the-wave-theory")
    ],
    written: [
      W(3, "short", "Name the three ways in which an electron can be given the energy to leave a metal and describe each. Who discovered the photoelectric effect?", "Thermionic emission: heating the metal. Field emission: a very strong electric field of about 10⁸ V m⁻¹. Photoelectric emission: illuminating it with suitable light. The effect was discovered by Hertz in 1887 and studied further by Hallwachs and Lenard.", "electron-emission"),
      W(4, "short", "Light of frequency 8.0 × 10¹⁴ Hz falls on a metal of work function 2.5 eV. Find the maximum kinetic energy of the photoelectrons and the stopping potential. (h = 6.63 × 10⁻³⁴ J s, 1 eV = 1.6 × 10⁻¹⁹ J) Which prediction of wave theory does it not depend on?", "Photon energy = hν = 6.63 × 10⁻³⁴ × 8.0 × 10¹⁴ = 5.30 × 10⁻¹⁹ J = 3.3 eV. K(max) = 3.3 − 2.5 = 0.8 eV (about 0.82 eV), so the stopping potential is about 0.8 V. This depends on the frequency and not on the intensity, unlike what wave theory predicted.", "failure-of-the-wave-theory")
    ]
  },
  "atoms": {
    mcq: [
      M(1, "In Rutherford's model of the hydrogen atom, the centripetal force on the electron is supplied by", "electrostatic attraction", ["gravitation", "the magnetic force", "the strong nuclear force"], "mv²/r = ke²/r²: the Coulomb attraction of the nucleus provides the force.", "rutherford-s-model-and-its-limitations"),
      M(2, "By classical theory, an electron orbiting the nucleus should", "radiate energy and spiral inward", ["stay in a fixed orbit for ever", "gain energy and move outward", "emit light of only one wavelength"], "An orbiting electron is accelerating, so it should radiate energy continuously and the atom would be unstable.", "rutherford-s-model-and-its-limitations"),
      M(3, "Rutherford's model would give a continuous spectrum, but atoms actually emit", "line spectra", ["band spectra", "no spectra", "a single bright line"], "Atoms emit line spectra with definite wavelengths.", "rutherford-s-model-and-its-limitations"),
      M(1, "For a stationary orbit, de Broglie's standing-wave condition is", "2πrₙ = nλ", ["πrₙ = nλ", "rₙ = nλ", "2πrₙ = λ/n"], "The circumference must hold a whole number of wavelengths.", "de-broglie-s-explanation-and-limitations"),
      M(2, "Putting λ = h/mv in 2πrₙ = nλ gives", "mvrₙ = nh/2π", ["mvrₙ = nh", "mvrₙ = h/(2πn)", "mv²rₙ = nh/2π"], "This is Bohr's second postulate on quantised angular momentum.", "de-broglie-s-explanation-and-limitations"),
      M(3, "Bohr's model works only for", "hydrogen-like atoms", ["all atoms of the periodic table", "all molecules and ions", "all nuclei and isotopes"], "It fails for atoms with more electrons and cannot explain the relative intensities of spectral lines.", "de-broglie-s-explanation-and-limitations")
    ],
    written: [
      W(3, "short", "The total energy of the electron in a hydrogen atom is E = −ke²/(2r). Find E in eV for r = 5.3 × 10⁻¹¹ m. (k = 9 × 10⁹ N m² C⁻², e = 1.6 × 10⁻¹⁹ C) What does the negative sign show?", "E = −(9 × 10⁹)(1.6 × 10⁻¹⁹)² / (2 × 5.3 × 10⁻¹¹) = −2.3 × 10⁻²⁸ ÷ 1.06 × 10⁻¹⁰ ≈ −2.2 × 10⁻¹⁸ J = −13.6 eV. The negative sign shows that the electron is bound to the nucleus.", "rutherford-s-model-and-its-limitations"),
      W(2, "short", "State two limitations of Bohr's model.", "It works only for hydrogen-like (single-electron) atoms and fails for atoms with more electrons. It cannot explain the relative intensities of spectral lines; a full description needs quantum mechanics.", "de-broglie-s-explanation-and-limitations")
    ]
  },
  "semiconductor-electronics": {
    mcq: [
      M(1, "Which class of solids has resistivity of about 10¹¹ to 10¹⁹ Ω m?", "Insulators", ["Metals", "Semiconductors", "Superconductors"], "Metals are about 10⁻² to 10⁻⁸ Ω m and semiconductors about 10⁻⁵ to 10⁶ Ω m.", "classification-of-solids"),
      M(2, "The elemental semiconductors are", "Si and Ge", ["Cu and Ag", "Na and K", "Fe and Al"], "Silicon and germanium are the elemental semiconductors. GaAs, CdS and InP are compound semiconductors.", "classification-of-solids"),
      M(3, "The energy gap between the valence band and the conduction band is called the", "band gap", ["depletion width", "barrier potential", "drift gap"], "It is written E_g.", "classification-of-solids")
    ],
    written: [
      W(3, "short", "Classify solids into metals, semiconductors and insulators on the basis of resistivity, giving the range for each, and name two compound semiconductors.", "Metals: ρ ≈ 10⁻² to 10⁻⁸ Ω m. Semiconductors: ρ ≈ 10⁻⁵ to 10⁶ Ω m. Insulators: ρ ≈ 10¹¹ to 10¹⁹ Ω m. Compound semiconductors include GaAs, CdS and InP.", "classification-of-solids")
    ]
  },
  });
})();
