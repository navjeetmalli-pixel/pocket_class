StudyData.add(12, "physics", {
  // What this content follows. match: "textbook" | "older-book" | "topic". Set reviewed to a date once a teacher has checked it.
  syllabus: {board: "CBSE", match: "textbook", books: ["Physics Part I","Physics Part II"], reviewed: false},
  chapters: [
    // ------------------------------------------------------------------
    {
      id: "electric-charges-and-fields",
      title: "Electric Charges and Fields",
      section: "Electrostatics",
      summary: "Charges at rest exert forces on each other. This chapter covers the properties of charge, Coulomb's law, the electric field and field lines, electric dipoles, electric flux, and Gauss's law with its applications.",
      notes: [
        {
          heading: "Electric Charge",
          points: [
            "Charge is of two kinds, **positive and negative**; like charges repel and unlike charges attract.",
            "**Additivity**: the total charge of a system is the algebraic sum of its charges, e.g. +2 C, −5 C and +1 C give −2 C.",
            "**Conservation**: the net charge of an isolated system stays constant; charge is only transferred from one body to another.",
            "**Quantisation**: every charge is an integral multiple of the basic charge, q = ne, with e = 1.6 × 10⁻¹⁹ C. For large (μC) charges n is huge, so quantisation can be ignored.",
            "**Charging by induction**: a charged rod held near a conductor separates its charges; earthing the conductor and then removing the rod leaves it with charge **opposite** to the rod.",
            "Conductors (metals, human body, earth) let charges move freely; insulators (glass, plastic, nylon) do not."
          ]
        },
        {
          heading: "Coulomb's Law",
          points: [
            "Force between two point charges: **F = kq₁q₂/r²**, where k = 1/4πε₀ = 9 × 10⁹ N m² C⁻².",
            "ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻² is the **permittivity of free space**.",
            "The force acts along the line joining the charges and obeys Newton's third law: F₁₂ = −F₂₁.",
            "In a medium of dielectric constant K the force becomes **F/K** (K = ε/ε₀; K = 1 for vacuum, about 80 for water).",
            "**Superposition principle**: the net force on a charge is the **vector sum** of the forces due to each other charge, each found as if the rest were absent."
          ]
        },
        {
          heading: "Electric Field and Field Lines",
          points: [
            "Electric field **E = F/q₀** is the force per unit positive test charge; SI unit N C⁻¹ (= V m⁻¹).",
            "Field of a point charge: E = kq/r², radially **outward for +q** and **inward for −q**.",
            "Field lines start on positive charges and end on negative charges (or at infinity); they are continuous curves in a charge-free region.",
            "Two field lines **never cross**, and electrostatic field lines **never form closed loops**.",
            "Lines are **crowded where the field is strong**; a uniform field has parallel, equally spaced lines."
          ]
        },
        {
          heading: "Electric Dipole",
          points: [
            "An electric dipole is a pair of charges ±q separated by 2a. Dipole moment **p = q × 2a**, directed **from −q to +q**; SI unit C m.",
            "On the axis at distance r (r ≫ a): E = 2kp/r³, along p. On the equatorial line: E = kp/r³, **opposite to p**.",
            "A dipole field falls off as **1/r³**, faster than the 1/r² field of a single charge.",
            "In a **uniform field** the net force on a dipole is zero, but a torque **τ = p × E** (magnitude pE sin θ) tends to align p with E.",
            "In a **non-uniform field** there is also a net force; this is why a charged comb attracts small bits of paper."
          ]
        },
        {
          heading: "Electric Flux and Gauss's Law",
          points: [
            "Electric flux through an area: **Φ = E · ΔS = EΔS cos θ**, θ being the angle between E and the normal to the area. Unit: N m² C⁻¹.",
            "**Gauss's law**: total flux through any closed surface = **q_enc/ε₀**, where q_enc is the net charge enclosed.",
            "Charges outside the surface give zero net flux, although they do change the field at the surface.",
            "If a closed surface encloses no net charge, the net flux through it is zero.",
            "Gauss's law is most useful for symmetric charge distributions; the closed surface chosen is called a **Gaussian surface**."
          ]
        },
        {
          heading: "Applications of Gauss's Law",
          points: [
            "Charge densities: linear λ (C m⁻¹), surface σ (C m⁻²), volume ρ (C m⁻³).",
            "Infinitely long straight wire: **E = λ/(2πε₀r)**, radial (cylindrical Gaussian surface).",
            "Infinite plane sheet: **E = σ/(2ε₀)**, normal to the sheet and **independent of distance**.",
            "Uniformly charged thin spherical shell: outside (r > R) E = kq/r², as if all the charge were at the centre; inside (r < R) **E = 0**."
          ]
        }
      ],
      formulas: [
        "Quantisation: q = ne (n = integer, e = 1.6 × 10⁻¹⁹ C)",
        "Coulomb's law: F = (1/4πε₀) q₁q₂/r², with 1/4πε₀ = 9 × 10⁹ N m² C⁻²",
        "Permittivity of free space: ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²",
        "Force in a medium: F_medium = F_vacuum/K, where K = ε/ε₀",
        "Electric field: E = F/q₀ (N C⁻¹ or V m⁻¹)",
        "Point charge: E = (1/4πε₀) q/r²",
        "Dipole moment: p = q × 2a (C m), from −q to +q",
        "Dipole, axial point (r ≫ a): E = (1/4πε₀) 2p/r³",
        "Dipole, equatorial point (r ≫ a): E = (1/4πε₀) p/r³, opposite to p",
        "Torque on a dipole: τ = p × E, τ = pE sin θ (N m)",
        "Electric flux: Φ = E · S = ES cos θ (N m² C⁻¹)",
        "Gauss's law: ∮E · dS = q_enc/ε₀",
        "Infinite line charge: E = λ/(2πε₀r)",
        "Infinite plane sheet: E = σ/(2ε₀)",
        "Thin spherical shell: E = (1/4πε₀) q/r² for r ≥ R; E = 0 for r < R"
      ],
      terms: [
        { term: "Quantisation of charge", meaning: "Charge exists only in **integral multiples of e** (1.6 × 10⁻¹⁹ C): q = ne." },
        { term: "Electric field", meaning: "**Force per unit positive test charge** at a point, E = F/q₀; unit N C⁻¹." },
        { term: "Electric dipole moment", meaning: "Product of either charge and the separation, **p = q × 2a**, directed from −q to +q." },
        { term: "Electric flux", meaning: "Measure of the field lines crossing a surface, **Φ = E · S = ES cos θ**." },
        { term: "Gauss's law", meaning: "Total electric flux through a closed surface equals **q_enc/ε₀**." },
        { term: "Superposition principle", meaning: "The net force (or field) due to many charges is the **vector sum** of the individual forces (fields)." }
      ],
      examples: [
        {
          q: "Two point charges +2 μC and −4 μC are placed 30 cm apart in vacuum. Find the magnitude and nature of the force between them.",
          steps: [
            "F = kq₁q₂/r², with k = 9 × 10⁹ N m² C⁻²",
            "Product of magnitudes: q₁q₂ = (2 × 10⁻⁶)(4 × 10⁻⁶) = 8 × 10⁻¹² C²",
            "r² = (0.30 m)² = 0.09 m²",
            "F = 9 × 10⁹ × 8 × 10⁻¹² / 0.09 = 0.072/0.09 = 0.8 N",
            "The charges are unlike, so the force is attractive"
          ],
          answer: "F = 0.8 N, attractive"
        },
        {
          q: "An electric dipole consists of charges ±10 μC separated by 2 mm. It is placed in a uniform field of 5 × 10⁴ N C⁻¹ with its axis at 30° to the field. Find the dipole moment and the torque on it.",
          steps: [
            "p = q × 2a = 10 × 10⁻⁶ C × 2 × 10⁻³ m = 2 × 10⁻⁸ C m",
            "τ = pE sin θ = 2 × 10⁻⁸ × 5 × 10⁴ × sin 30°",
            "τ = 1 × 10⁻³ × 0.5 = 5 × 10⁻⁴ N m"
          ],
          answer: "p = 2 × 10⁻⁸ C m; τ = 5 × 10⁻⁴ N m"
        }
      ],
      qa: [
        {
          q: "Why do two electric field lines never cross each other?",
          a: "The tangent to a field line at any point gives the direction of the electric field there. If two lines crossed, there would be **two tangents, i.e. two directions of E**, at the same point. This is impossible, because the net field at a point has only one direction."
        },
        {
          q: "Using Gauss's law, find the electric field due to an infinitely long straight wire with uniform linear charge density λ.",
          a: "Take a coaxial **cylindrical Gaussian surface** of radius r and length l. By symmetry E is radial and has the same magnitude everywhere on the curved surface; the flat ends give no flux because E is parallel to them. Flux = E × 2πrl. Charge enclosed = λl. By Gauss's law, E × 2πrl = λl/ε₀, so **E = λ/(2πε₀r)**, directed radially outward for positive λ."
        },
        {
          q: "Show that the net force on an electric dipole in a uniform electric field is zero, and write the torque acting on it.",
          a: "The force on +q is qE along the field and on −q is qE opposite to the field. These are **equal and opposite, so the net force is zero**. Since they act at different points, they form a couple. Torque = qE × 2a sin θ = **pE sin θ**, or τ = p × E. It tends to align the dipole with the field and is zero when p is parallel or antiparallel to E."
        }
      ],
      quiz: [
        {
          q: "Two point charges repel each other with force F. If each charge is doubled and the distance between them is halved, the new force is:",
          options: ["4F", "8F", "16F", "F/4"],
          answer: 2,
          explain: "F ∝ q₁q₂/r². New force = (2 × 2) ÷ (½)² × F = 4 × 4F = **16F**."
        },
        {
          q: "A point charge q is placed at the centre of a cube. The electric flux through one face of the cube is:",
          options: ["q/ε₀", "q/(6ε₀)", "6q/ε₀", "q/(4πε₀)"],
          answer: 1,
          explain: "By Gauss's law the total flux is q/ε₀. By symmetry it is shared equally by the 6 faces, so each face gets **q/(6ε₀)**."
        },
        {
          q: "The electric field at a point inside a uniformly charged thin spherical shell is:",
          options: ["zero", "kq/R², where R is the radius", "kq/r², where r is the distance from the centre", "σ/ε₀"],
          answer: 0,
          explain: "A Gaussian sphere drawn inside the shell encloses no charge, so the flux and hence the field are **zero** everywhere inside."
        },
        {
          q: "An electric dipole is placed in a uniform electric field. It experiences:",
          options: ["a net force along the field and no torque", "a net force and a torque", "a net force opposite to the field", "zero net force, and a torque unless p is parallel or antiparallel to E"],
          answer: 3,
          explain: "Forces qE and −qE cancel, so **net force = 0**. They form a couple with torque pE sin θ, which vanishes only at θ = 0° or 180°."
        },
        {
          q: "The number of electrons that make up a charge of −1 C is:",
          options: ["6.25 × 10¹⁸", "1.6 × 10¹⁹", "6.25 × 10¹⁹", "1.6 × 10⁻¹⁹"],
          answer: 0,
          explain: "n = q/e = 1/(1.6 × 10⁻¹⁹) = **6.25 × 10¹⁸**."
        },
        {
          q: "For a short electric dipole, the ratio of the field at an axial point to that at an equatorial point at the same distance is:",
          options: ["1 : 2", "2 : 1", "1 : 1", "4 : 1"],
          answer: 1,
          explain: "E_axial = 2kp/r³ and E_equatorial = kp/r³, so the ratio is **2 : 1**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electrostatic-potential-and-capacitance",
      title: "Electrostatic Potential and Capacitance",
      section: "Electrostatics",
      summary: "Electric potential describes the work done in moving charges in an electric field. This chapter covers potential due to charges and dipoles, equipotential surfaces, potential energy, conductors and dielectrics, and capacitors with their combinations and stored energy.",
      notes: [
        {
          heading: "Electrostatic Potential",
          points: [
            "The electrostatic force is **conservative**: the work done in moving a charge between two points does not depend on the path.",
            "Potential V at a point = work done by an external force in bringing a **unit positive charge from infinity** to that point, without acceleration. Unit: volt = J C⁻¹.",
            "Point charge: **V = kq/r**, a scalar, positive for +q and negative for −q; V → 0 as r → ∞.",
            "Dipole: V = kp cos θ/r² (r ≫ a); **V = 0** everywhere on the equatorial plane.",
            "System of charges: V = k(q₁/r₁ + q₂/r₂ + …), an **algebraic sum**, not a vector sum."
          ]
        },
        {
          heading: "Equipotential Surfaces",
          points: [
            "An equipotential surface has the same potential everywhere, so **no work** is done in moving a charge along it.",
            "The electric field is always **perpendicular** to equipotential surfaces.",
            "For a point charge they are concentric spheres; for a uniform field, parallel planes normal to the field.",
            "**E = −dV/dr**: the field points in the direction of **steepest decrease** of potential.",
            "Equipotential surfaces are closer together where the field is stronger."
          ]
        },
        {
          heading: "Electrostatic Potential Energy",
          points: [
            "Two charges: **U = kq₁q₂/r₁₂**; positive for like charges, negative for unlike charges.",
            "For three or more charges, add the term for every pair: U = k(q₁q₂/r₁₂ + q₂q₃/r₂₃ + q₁q₃/r₁₃).",
            "A charge q at a point of external potential V has U = qV. Atomic energies are often given in electron volts: 1 eV = 1.6 × 10⁻¹⁹ J.",
            "Dipole in a uniform field: **U = −p · E = −pE cos θ**; minimum (stable) at θ = 0°, maximum (unstable) at θ = 180°."
          ]
        },
        {
          heading: "Conductors and Dielectrics",
          points: [
            "Inside a conductor in electrostatic equilibrium **E = 0**, and any excess charge resides only on the outer surface.",
            "The whole conductor is at **one potential**; just outside the surface E = σ/ε₀, normal to the surface.",
            "**Electrostatic shielding**: the field inside a cavity in a conductor is zero, so a car or metal cabinet protects what is inside from outside fields.",
            "A dielectric in a field gets **polarised** (its molecules develop or align dipoles), creating a field that partly opposes the applied field.",
            "Dielectric constant **K = ε/ε₀** (also called relative permittivity εᵣ) is greater than 1 for every dielectric."
          ]
        },
        {
          heading: "Capacitors and Their Combinations",
          points: [
            "A capacitor is two conductors separated by an insulator. Capacitance **C = Q/V**; unit farad (F); practical units μF, nF, pF.",
            "Parallel plate capacitor: **C = ε₀A/d**; filled with a dielectric, C = Kε₀A/d (K times larger).",
            "C depends only on the size, shape, separation and the medium, not on Q or V.",
            "**Series**: 1/C = 1/C₁ + 1/C₂ + …; each capacitor carries the same charge; the total is less than the smallest.",
            "**Parallel**: C = C₁ + C₂ + …; each capacitor has the same potential difference."
          ]
        },
        {
          heading: "Energy Stored in a Capacitor",
          points: [
            "Work done in charging is stored as potential energy: **U = Q²/2C = ½CV² = ½QV**.",
            "The energy resides in the field between the plates; energy density **u = ½ε₀E²**.",
            "Dielectric inserted with the battery **disconnected**: Q is constant; C → KC, V → V/K, E → E/K, U → U/K.",
            "Dielectric inserted with the battery **connected**: V is constant; C → KC, Q → KQ, U → KU."
          ]
        }
      ],
      formulas: [
        "Potential: V = W/q (volt = J C⁻¹)",
        "Point charge: V = (1/4πε₀) q/r",
        "Dipole: V = (1/4πε₀) p cos θ/r²",
        "Field and potential: E = −dV/dr; in a uniform field E = V/d",
        "Two charges: U = (1/4πε₀) q₁q₂/r₁₂",
        "Charge in external potential: U = qV",
        "Dipole in uniform field: U = −p · E = −pE cos θ",
        "Field just outside a conductor: E = σ/ε₀",
        "Capacitance: C = Q/V (farad, F)",
        "Parallel plate: C = ε₀A/d; with dielectric C = Kε₀A/d",
        "Slab of thickness t (t < d) between plates: C = ε₀A/(d − t + t/K)",
        "Series: 1/C = 1/C₁ + 1/C₂ + 1/C₃ + …",
        "Parallel: C = C₁ + C₂ + C₃ + …",
        "Energy stored: U = Q²/2C = ½CV² = ½QV (joule)",
        "Energy density: u = ½ε₀E² (J m⁻³)",
        "Dielectric constant: K = ε/ε₀ = C_medium/C_vacuum"
      ],
      terms: [
        { term: "Electrostatic potential", meaning: "Work done by an external force in bringing a **unit positive charge from infinity** to a point, without acceleration." },
        { term: "Equipotential surface", meaning: "A surface on which the **potential is the same everywhere**; E is perpendicular to it." },
        { term: "Capacitance", meaning: "Ratio of charge to potential difference, **C = Q/V**; unit farad." },
        { term: "Dielectric constant", meaning: "Factor **K = ε/ε₀** by which a medium reduces the electric field and increases capacitance." },
        { term: "Electrostatic shielding", meaning: "The field inside a **cavity of a conductor is zero**, which protects whatever is inside from outside fields." },
        { term: "Polarisation", meaning: "**Dipole moment per unit volume** induced in a dielectric placed in an electric field." }
      ],
      examples: [
        {
          q: "A parallel plate capacitor has plates of area 6 × 10⁻³ m² separated by 3 mm of air. Find its capacitance and the charge on each plate when it is connected to a 100 V supply. (ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²)",
          steps: [
            "C = ε₀A/d = 8.85 × 10⁻¹² × 6 × 10⁻³ / (3 × 10⁻³)",
            "C = 8.85 × 10⁻¹² × 2 = 17.7 × 10⁻¹² F = 17.7 pF",
            "Q = CV = 17.7 × 10⁻¹² × 100 = 1.77 × 10⁻⁹ C"
          ],
          answer: "C ≈ 17.7 pF; Q ≈ 1.77 × 10⁻⁹ C"
        },
        {
          q: "Capacitors of 2 μF, 3 μF and 6 μF are connected in series across a 12 V battery. Find the equivalent capacitance, the charge on each, the voltage across each and the total energy stored.",
          steps: [
            "1/C = 1/2 + 1/3 + 1/6 = (3 + 2 + 1)/6 = 1, so C = 1 μF",
            "In series each capacitor has the same charge: Q = CV = 1 μF × 12 V = 12 μC",
            "V₁ = 12/2 = 6 V; V₂ = 12/3 = 4 V; V₃ = 12/6 = 2 V (total 12 V)",
            "U = ½CV² = ½ × 1 × 10⁻⁶ × 12² = 72 × 10⁻⁶ J"
          ],
          answer: "C = 1 μF; Q = 12 μC on each; 6 V, 4 V and 2 V; U = 72 μJ"
        }
      ],
      qa: [
        {
          q: "Why is the electric field always perpendicular to an equipotential surface?",
          a: "Between any two points on an equipotential surface ΔV = 0, so the work W = qΔV done in moving a charge along it is zero. Work = qE d cos θ can be zero for a non-zero displacement only if **θ = 90°**. Hence E is **normal to the surface** at every point. If E had a component along the surface, work would be done and the potential would change."
        },
        {
          q: "Derive an expression for the energy stored in a charged capacitor.",
          a: "When the capacitor holds charge q, the potential difference across it is q/C. The work needed to add a further charge dq is dW = (q/C) dq. Total work to charge it from 0 to Q is W = ∫(q/C) dq = **Q²/2C**. This work is stored as electrostatic potential energy. Using Q = CV, **U = Q²/2C = ½CV² = ½QV**."
        },
        {
          q: "A parallel plate capacitor is charged and then disconnected from the battery. A dielectric slab of constant K is then made to fill the gap. How do Q, C, V, E and U change?",
          a: "The capacitor is isolated, so **Q stays constant**. Capacitance becomes **KC**. V = Q/C becomes **V/K**. The field E = V/d becomes **E/K**. Energy U = Q²/2C becomes **U/K**: it decreases, because the field does work in pulling the slab in."
        }
      ],
      quiz: [
        {
          q: "The work done in moving a 2 μC charge between two points on an equipotential surface at 10 V is:",
          options: ["20 μJ", "5 μJ", "zero", "10 μJ"],
          answer: 2,
          explain: "W = qΔV, and ΔV = 0 on an equipotential surface, so **W = 0**."
        },
        {
          q: "The electric potential at any point on the equatorial line of a short electric dipole is:",
          options: ["kp/r²", "zero", "2kp/r²", "kp/r³"],
          answer: 1,
          explain: "V = kp cos θ/r² with θ = 90°, so **V = 0**. The field there is not zero, though."
        },
        {
          q: "Capacitors of 4 μF and 12 μF are connected in series. The equivalent capacitance is:",
          options: ["16 μF", "8 μF", "48 μF", "3 μF"],
          answer: 3,
          explain: "1/C = 1/4 + 1/12 = 4/12, so **C = 3 μF**. 16 μF is the parallel value."
        },
        {
          q: "A 10 μF capacitor is charged to 200 V. The energy stored in it is:",
          options: ["0.2 J", "0.4 J", "2 J", "0.02 J"],
          answer: 0,
          explain: "U = ½CV² = ½ × 10 × 10⁻⁶ × (200)² = ½ × 10⁻⁵ × 4 × 10⁴ = **0.2 J**."
        },
        {
          q: "A parallel plate capacitor stays connected to a battery while a dielectric slab of constant K is inserted. The charge on its plates:",
          options: ["decreases to Q/K", "remains Q", "becomes KQ", "becomes K²Q"],
          answer: 2,
          explain: "The battery keeps V fixed and C becomes KC, so Q = CV becomes **KQ**."
        },
        {
          q: "The electric field at a point is directed along the direction in which the potential:",
          options: ["remains constant", "increases most rapidly", "is zero", "decreases most rapidly"],
          answer: 3,
          explain: "E = −dV/dr: the field points along the **steepest decrease** of potential."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "current-electricity",
      title: "Current Electricity",
      section: "Current Electricity",
      summary: "Electric current is the flow of charge through conductors. This chapter covers drift velocity, Ohm's law, resistivity and its temperature dependence, electrical power, cells with internal resistance, and Kirchhoff's rules with the Wheatstone bridge.",
      notes: [
        {
          heading: "Electric Current and Drift Velocity",
          points: [
            "Current **I = dq/dt**; SI unit ampere (A). Conventional current flows opposite to the motion of electrons.",
            "Without a field, free electrons move randomly and their average velocity is zero, so there is no net current.",
            "In a field E, electrons acquire a small average **drift velocity** v_d = eEτ/m (opposite to E), where τ is the **relaxation time**, the average time between collisions.",
            "Current in terms of drift: **I = neAv_d**, where n is the number of free electrons per unit volume.",
            "Drift speed is tiny (about 1 mm s⁻¹), but the field is set up along the wire almost instantly, so a bulb lights as soon as it is switched on.",
            "**Mobility** μ = v_d/E = eτ/m; SI unit m² V⁻¹ s⁻¹."
          ]
        },
        {
          heading: "Ohm's Law and Resistivity",
          points: [
            "**Ohm's law**: at constant temperature V = IR for a metallic conductor; resistance R is in ohm (Ω).",
            "**R = ρl/A**, where ρ is the resistivity of the material (Ω m); conductivity σ = 1/ρ (S m⁻¹).",
            "Microscopic form: **j = σE**, where the current density j = I/A = nev_d (A m⁻²).",
            "From the drift model, ρ = m/(ne²τ): resistivity depends on the material (n, τ) and temperature, not on shape.",
            "Ohm's law is not universal: V may not be proportional to I, the relation may depend on the sign of V (as in a diode), or more than one V may give the same I (as in GaAs)."
          ]
        },
        {
          heading: "Temperature Dependence of Resistivity",
          points: [
            "Metals: **ρ_T = ρ₀[1 + α(T − T₀)]**, α being the temperature coefficient of resistivity; ρ rises with temperature because τ decreases (more frequent collisions).",
            "Semiconductors: resistivity **decreases** as temperature rises, because the number of charge carriers n increases rapidly.",
            "Alloys such as **nichrome, manganin and constantan** have a very weak dependence of resistivity on temperature, so they are used for **standard resistors**."
          ]
        },
        {
          heading: "Power, EMF and Internal Resistance",
          points: [
            "Power dissipated in a resistor: **P = VI = I²R = V²/R** (Joule heating).",
            "Power is transmitted at **high voltage** so that the current, and hence the I²R loss in the cables, is small.",
            "The **emf ε** of a cell is the potential difference between its terminals when no current is drawn.",
            "With external resistance R: **I = ε/(R + r)** and terminal voltage **V = ε − Ir**, less than ε. While the cell is being charged, V = ε + Ir.",
            "Cells in series: ε_eq = ε₁ + ε₂, r_eq = r₁ + r₂. Cells in parallel: ε_eq = (ε₁r₂ + ε₂r₁)/(r₁ + r₂), r_eq = r₁r₂/(r₁ + r₂)."
          ]
        },
        {
          heading: "Kirchhoff's Rules and Wheatstone Bridge",
          points: [
            "**Junction rule**: total current entering a junction = total current leaving it (ΣI = 0); based on **conservation of charge**.",
            "**Loop rule**: the algebraic sum of potential changes around any closed loop is zero (ΣΔV = 0); based on **conservation of energy**.",
            "Signs: crossing a resistor along the current, potential falls by IR; crossing a cell from − to + terminal, it rises by ε.",
            "**Wheatstone bridge**: four resistors P, Q, R, S with a galvanometer across the middle; it is **balanced** (no galvanometer current) when **P/Q = R/S**.",
            "A balanced bridge gives an unknown resistance: S = R × Q/P."
          ]
        }
      ],
      formulas: [
        "Current: I = dq/dt (ampere)",
        "Drift velocity: v_d = eEτ/m (magnitude)",
        "Current and drift velocity: I = neAv_d",
        "Current density: j = I/A = nev_d = σE",
        "Mobility: μ = v_d/E = eτ/m (m² V⁻¹ s⁻¹)",
        "Ohm's law: V = IR",
        "Resistance: R = ρl/A; conductivity σ = 1/ρ",
        "Resistivity (drift model): ρ = m/(ne²τ)",
        "Temperature dependence: ρ_T = ρ₀[1 + α(T − T₀)]",
        "Power: P = VI = I²R = V²/R (watt)",
        "Cell: I = ε/(R + r); V = ε − Ir (discharging); V = ε + Ir (charging)",
        "Cells in series: ε_eq = ε₁ + ε₂; r_eq = r₁ + r₂",
        "Cells in parallel: ε_eq = (ε₁r₂ + ε₂r₁)/(r₁ + r₂); 1/r_eq = 1/r₁ + 1/r₂",
        "Resistors: series R = R₁ + R₂ + …; parallel 1/R = 1/R₁ + 1/R₂ + …",
        "Kirchhoff: ΣI = 0 at a junction; ΣΔV = 0 round a closed loop",
        "Balanced Wheatstone bridge: P/Q = R/S",
        "Wire stretched n times its length (volume constant): R becomes n²R"
      ],
      terms: [
        { term: "Drift velocity", meaning: "Small **average velocity** of free electrons in a conductor under an electric field, directed opposite to the field." },
        { term: "Relaxation time", meaning: "**Average time between successive collisions** of a free electron with the ions of the conductor." },
        { term: "Resistivity", meaning: "Resistance of a conductor of **unit length and unit cross-sectional area**; depends on material and temperature, unit Ω m." },
        { term: "Mobility", meaning: "**Drift speed per unit electric field**, μ = v_d/E." },
        { term: "EMF of a cell", meaning: "Potential difference between the terminals of a cell when **no current is drawn** (open circuit)." },
        { term: "Internal resistance", meaning: "Resistance offered by the **electrolyte and electrodes** of a cell to current through it." }
      ],
      examples: [
        {
          q: "A copper wire of cross-sectional area 1.0 × 10⁻⁷ m² carries a current of 1.5 A. The free electron density of copper is 8.5 × 10²⁸ m⁻³. Find the drift speed of the electrons.",
          steps: [
            "v_d = I/(neA)",
            "neA = 8.5 × 10²⁸ × 1.6 × 10⁻¹⁹ × 1.0 × 10⁻⁷ = 1.36 × 10³ C m⁻¹",
            "v_d = 1.5/1360 ≈ 1.1 × 10⁻³ m s⁻¹"
          ],
          answer: "v_d ≈ 1.1 × 10⁻³ m s⁻¹ (about 1.1 mm s⁻¹)"
        },
        {
          q: "A cell of emf 12 V and internal resistance 0.4 Ω is connected to an external resistance of 5.6 Ω. Find the current, the terminal voltage and the power dissipated in the external resistor.",
          steps: [
            "I = ε/(R + r) = 12/(5.6 + 0.4) = 12/6 = 2 A",
            "Terminal voltage V = ε − Ir = 12 − 2 × 0.4 = 11.2 V (check: IR = 2 × 5.6 = 11.2 V)",
            "Power in R: P = I²R = 2² × 5.6 = 22.4 W"
          ],
          answer: "I = 2 A; V = 11.2 V; P = 22.4 W"
        }
      ],
      qa: [
        {
          q: "Define drift velocity. Derive the relation I = neAv_d.",
          a: "Drift velocity is the **average velocity with which free electrons drift** opposite to an applied electric field. Consider a conductor of length l and area A with n free electrons per unit volume. Total free charge = neAl. With drift speed v_d, all of it passes one end in time t = l/v_d. So I = q/t = neAl ÷ (l/v_d) = **neAv_d**."
        },
        {
          q: "State Kirchhoff's two rules. On which conservation law is each based?",
          a: "**Junction rule**: at any junction, the sum of currents entering equals the sum of currents leaving (ΣI = 0). It follows from **conservation of charge**, since charge cannot pile up at a junction. **Loop rule**: the algebraic sum of changes in potential around any closed loop is zero (ΣΔV = 0). It follows from **conservation of energy**, since a charge returning to its starting point must have the same potential energy."
        },
        {
          q: "Why does the resistivity of a metal increase with temperature, while that of a semiconductor decreases?",
          a: "ρ = m/(ne²τ). In a **metal**, n hardly changes; as temperature rises the ions vibrate more, electrons collide more often and **τ decreases**, so ρ increases. In a **semiconductor**, τ also decreases, but many more electrons are freed from bonds, so **n increases very rapidly**. This effect dominates, and ρ decreases."
        }
      ],
      quiz: [
        {
          q: "A wire of resistance R is stretched uniformly to double its length. Its new resistance is:",
          options: ["2R", "R/2", "4R", "8R"],
          answer: 2,
          explain: "Volume stays constant, so doubling l halves A. R = ρl/A becomes ρ(2l)/(A/2) = **4R**."
        },
        {
          q: "Kirchhoff's junction rule is a consequence of the conservation of:",
          options: ["energy", "charge", "momentum", "mass"],
          answer: 1,
          explain: "Charge cannot accumulate at a junction, so current in = current out: **conservation of charge**. The loop rule comes from conservation of energy."
        },
        {
          q: "A cell of emf 1.5 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor. The current in the circuit is:",
          options: ["0.6 A", "3 A", "0.75 A", "0.5 A"],
          answer: 3,
          explain: "I = ε/(R + r) = 1.5/(2.5 + 0.5) = **0.5 A**. (0.6 A results from forgetting the internal resistance.)"
        },
        {
          q: "When the temperature of a pure semiconductor is increased, its resistivity:",
          options: ["decreases", "increases", "stays constant", "first increases, then becomes constant"],
          answer: 0,
          explain: "More electrons are freed to conduct as temperature rises, so the resistivity **decreases**."
        },
        {
          q: "In a balanced Wheatstone bridge, P = 10 Ω, Q = 20 Ω and R = 15 Ω. The fourth resistance S is:",
          options: ["7.5 Ω", "30 Ω", "15 Ω", "45 Ω"],
          answer: 1,
          explain: "P/Q = R/S gives S = RQ/P = 15 × 20/10 = **30 Ω**."
        },
        {
          q: "The potential difference across a metal wire is kept constant and its length is doubled. The drift speed of the electrons:",
          options: ["doubles", "becomes four times", "is halved", "remains unchanged"],
          answer: 2,
          explain: "v_d = eEτ/m and E = V/l. Doubling l halves E, so the drift speed is **halved**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "moving-charges-and-magnetism",
      title: "Moving Charges and Magnetism",
      section: "Magnetism",
      summary: "Moving charges and currents produce magnetic fields and feel forces in them. This chapter covers the Lorentz force, motion of charges in a magnetic field, the Biot–Savart law and Ampere's circuital law, forces between currents, torque on a current loop, and the moving coil galvanometer.",
      notes: [
        {
          heading: "Magnetic Force and Lorentz Force",
          points: [
            "Force on a charge q moving with velocity v in fields E and B (**Lorentz force**): **F = q[E + v × B]**.",
            "Magnetic part: F = q(v × B), magnitude qvB sin θ; it is **zero** for a charge at rest or moving along B.",
            "The magnetic force is always **perpendicular to v**, so it does **no work** and cannot change the speed or kinetic energy.",
            "SI unit of B is the tesla: 1 T = 1 N A⁻¹ m⁻¹. A smaller unit is the gauss: 1 G = 10⁻⁴ T.",
            "Force on a straight conductor carrying current I: **F = I(l × B)**, magnitude IlB sin θ."
          ]
        },
        {
          heading: "Motion in a Magnetic Field",
          points: [
            "If v ⊥ B the charge moves in a **circle**: qvB = mv²/r, so **r = mv/(qB)**.",
            "Angular frequency ω = qB/m and period **T = 2πm/(qB)** do not depend on the speed or the radius.",
            "If v has a component along B, the path is a **helix** with pitch p = v cos θ × 2πm/(qB).",
            "For the same speed, r ∝ m/q; for the same momentum, r ∝ 1/q."
          ]
        },
        {
          heading: "Biot–Savart Law and Circular Loop",
          points: [
            "**Biot–Savart law**: dB = (μ₀/4π) I dl sin θ/r²; in vector form dB = (μ₀/4π) I (dl × r)/r³.",
            "μ₀ = 4π × 10⁻⁷ T m A⁻¹ is the **permeability of free space**.",
            "On the axis of a circular loop of radius R, at distance x from its centre: B = μ₀IR²/[2(x² + R²)^(3/2)].",
            "At the centre (x = 0): **B = μ₀I/(2R)**; for N turns, B = μ₀NI/(2R).",
            "**Right-hand thumb rule**: curl the fingers along the current in the loop; the thumb points along B on the axis."
          ]
        },
        {
          heading: "Ampere's Circuital Law",
          points: [
            "**Ampere's law**: ∮B · dl = μ₀I, where I is the net current passing through the closed loop (Amperian loop).",
            "Long straight wire: **B = μ₀I/(2πr)**; field lines are concentric circles around the wire.",
            "Long solenoid: **B = μ₀nI** inside, where n is the number of turns per unit length; the field inside is uniform and along the axis, and nearly zero outside."
          ]
        },
        {
          heading: "Force Between Parallel Currents",
          points: [
            "Force per unit length between two long parallel wires a distance d apart: **F/l = μ₀I₁I₂/(2πd)**.",
            "Currents in the **same direction attract**; currents in **opposite directions repel**.",
            "This was the basis of the earlier definition of the **ampere**: the current that produces a force of 2 × 10⁻⁷ N per metre between two long parallel wires 1 m apart in vacuum."
          ]
        },
        {
          heading: "Current Loop and Moving Coil Galvanometer",
          points: [
            "A current loop is a **magnetic dipole** with moment **m = NIA**, directed by the right-hand rule; unit A m².",
            "In a uniform field the net force on the loop is zero, but the torque is **τ = m × B**, magnitude NIAB sin θ.",
            "**Galvanometer**: at equilibrium NIAB = kφ, so the deflection φ = (NAB/k)I is proportional to I (k = torsional constant of the spring).",
            "Concave pole pieces and a soft iron core make the field **radial**, so the plane of the coil is always parallel to B and the scale is linear.",
            "Current sensitivity φ/I = NAB/k; voltage sensitivity φ/V = NAB/(kR).",
            "**Ammeter**: a small shunt S = I_gG/(I − I_g) in parallel. **Voltmeter**: a large resistance R = V/I_g − G in series."
          ]
        }
      ],
      formulas: [
        "Lorentz force: F = q[E + v × B]",
        "Magnetic force on a charge: F = qvB sin θ",
        "Force on a conductor: F = I(l × B), F = IlB sin θ",
        "Radius of circular path: r = mv/(qB) = p/(qB) = √(2mK)/(qB)",
        "Period and frequency: T = 2πm/(qB); ν = qB/(2πm); ω = qB/m",
        "Pitch of helix: p = v cos θ × 2πm/(qB)",
        "Biot–Savart law: dB = (μ₀/4π) I dl sin θ/r², μ₀ = 4π × 10⁻⁷ T m A⁻¹",
        "Axis of circular loop: B = μ₀IR²/[2(x² + R²)^(3/2)]",
        "Centre of circular coil: B = μ₀NI/(2R)",
        "Ampere's circuital law: ∮B · dl = μ₀I",
        "Long straight wire: B = μ₀I/(2πr)",
        "Long solenoid: B = μ₀nI (n = turns per unit length)",
        "Parallel wires: F/l = μ₀I₁I₂/(2πd)",
        "Magnetic moment of a loop: m = NIA (A m²)",
        "Torque on a loop: τ = m × B, τ = NIAB sin θ",
        "Galvanometer: φ = (NAB/k) I",
        "Sensitivities: current φ/I = NAB/k; voltage φ/V = NAB/(kR)",
        "Ammeter shunt: S = I_gG/(I − I_g)",
        "Voltmeter series resistance: R = V/I_g − G"
      ],
      terms: [
        { term: "Lorentz force", meaning: "Total force on a charge moving in electric and magnetic fields, **F = q(E + v × B)**." },
        { term: "Tesla", meaning: "SI unit of magnetic field: the field that exerts **1 N on a 1 C charge moving at 1 m s⁻¹** perpendicular to it." },
        { term: "Ampere's circuital law", meaning: "The line integral of B around a closed loop equals **μ₀ times the current enclosed**." },
        { term: "Magnetic dipole moment of a loop", meaning: "**m = NIA**, directed along the normal to the loop by the right-hand rule." },
        { term: "Shunt", meaning: "A **small resistance connected in parallel** with a galvanometer to convert it into an ammeter." },
        { term: "Current sensitivity", meaning: "**Deflection per unit current** of a galvanometer, NAB/k." }
      ],
      examples: [
        {
          q: "An electron accelerated through 2.0 kV enters a uniform magnetic field of 0.15 T perpendicular to its velocity. Find its speed and the radius of its path. (m = 9.1 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C)",
          steps: [
            "Kinetic energy gained: ½mv² = eV, so v = √(2eV/m)",
            "v = √(2 × 1.6 × 10⁻¹⁹ × 2000 / 9.1 × 10⁻³¹) = √(7.03 × 10¹⁴) ≈ 2.65 × 10⁷ m s⁻¹",
            "r = mv/(eB) = (9.1 × 10⁻³¹ × 2.65 × 10⁷)/(1.6 × 10⁻¹⁹ × 0.15)",
            "r = 2.41 × 10⁻²³ / 2.4 × 10⁻²⁰ ≈ 1.0 × 10⁻³ m"
          ],
          answer: "v ≈ 2.65 × 10⁷ m s⁻¹; it moves in a circle of radius about 1.0 mm"
        },
        {
          q: "A galvanometer of resistance 12 Ω shows full-scale deflection for a current of 3 mA. How will you convert it into (a) a voltmeter of range 0–18 V, (b) an ammeter of range 0–6 A?",
          steps: [
            "(a) Series resistance R = V/I_g − G = 18/(3 × 10⁻³) − 12 = 6000 − 12 = 5988 Ω",
            "(b) Shunt S = I_gG/(I − I_g) = (3 × 10⁻³ × 12)/(6 − 0.003)",
            "S = 0.036/5.997 ≈ 6.0 × 10⁻³ Ω"
          ],
          answer: "(a) 5988 Ω in series; (b) a shunt of about 6 mΩ in parallel"
        }
      ],
      qa: [
        {
          q: "State Ampere's circuital law and use it to find the magnetic field inside a long solenoid.",
          a: "**Ampere's law**: ∮B · dl = μ₀I, where I is the net current through the surface bounded by the closed loop. For a long solenoid with n turns per unit length, take a rectangular loop with one side of length h inside, parallel to the axis, and the opposite side outside. Only the inside side contributes: B outside is nearly zero, and B is perpendicular to the short sides. The loop encloses nh turns, so Bh = μ₀(nh)I, giving **B = μ₀nI**, uniform and along the axis."
        },
        {
          q: "Show that a magnetic field does no work on a moving charged particle.",
          a: "The magnetic force F = q(v × B) is always **perpendicular to the velocity**. So the power F · v = 0 and the work done is zero. Hence the **speed and kinetic energy stay constant**; the field only changes the direction of motion, for example producing circular motion when v ⊥ B."
        },
        {
          q: "Why are the pole pieces of a moving coil galvanometer concave, and why is a soft iron core used?",
          a: "Concave pole pieces together with a cylindrical **soft iron core** make the magnetic field **radial**, so the plane of the coil stays parallel to B whatever its deflection. Then sin θ = 1, torque = NIAB, and φ ∝ I, giving a **linear scale**. Soft iron has high permeability, so it also **strengthens the field** and increases the sensitivity."
        }
      ],
      quiz: [
        {
          q: "A charged particle moves in a circle in a uniform magnetic field. If its speed is doubled, its period of revolution:",
          options: ["doubles", "halves", "becomes four times", "remains the same"],
          answer: 3,
          explain: "T = 2πm/(qB) does not depend on speed. The radius doubles, but so does the speed, so the **period is unchanged**."
        },
        {
          q: "Two long parallel wires carry currents in the same direction. The wires:",
          options: ["attract each other", "repel each other", "exert no force on each other", "exert a torque but no net force on each other"],
          answer: 0,
          explain: "Parallel currents in the **same direction attract**; in opposite directions they repel."
        },
        {
          q: "The magnetic field at the centre of a circular loop of radius R carrying current I is:",
          options: ["μ₀I/(2πR)", "μ₀I/(2R)", "μ₀I/(4πR)", "μ₀IR/2"],
          answer: 1,
          explain: "From the Biot–Savart law, B at the centre = **μ₀I/(2R)**. μ₀I/(2πR) is the field of a long straight wire."
        },
        {
          q: "The magnetic field at a distance of 10 cm from a long straight wire carrying 5 A is:",
          options: ["1 × 10⁻⁴ T", "3.14 × 10⁻⁵ T", "1 × 10⁻⁵ T", "2 × 10⁻⁵ T"],
          answer: 2,
          explain: "B = μ₀I/(2πr) = 2 × 10⁻⁷ × 5/0.1 = **1 × 10⁻⁵ T**."
        },
        {
          q: "A proton and an alpha particle enter the same uniform magnetic field perpendicularly with the same velocity. The ratio of their radii r_p : r_α is:",
          options: ["2 : 1", "1 : 1", "1 : 4", "1 : 2"],
          answer: 3,
          explain: "r = mv/(qB) ∝ m/q. Proton: m/e. Alpha: 4m/2e = 2m/e. So r_p : r_α = **1 : 2**."
        },
        {
          q: "To convert a galvanometer into an ammeter, we connect:",
          options: ["a high resistance in series", "a low resistance in parallel", "a high resistance in parallel", "a low resistance in series"],
          answer: 1,
          explain: "A **low resistance (shunt) in parallel** carries most of the current, and the ammeter's total resistance becomes very small."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "magnetism-and-matter",
      title: "Magnetism and Matter",
      section: "Magnetism",
      summary: "Magnets and magnetic materials are understood through the idea of magnetic dipoles. This chapter covers the bar magnet and its field lines, a magnetic dipole in a uniform field, Gauss's law for magnetism, magnetisation and magnetic intensity, and diamagnetic, paramagnetic and ferromagnetic substances.",
      notes: [
        {
          heading: "The Bar Magnet",
          points: [
            "A freely suspended bar magnet points **north–south**; like poles repel and unlike poles attract.",
            "Poles always occur in pairs: breaking a magnet gives two smaller magnets. **Isolated magnetic monopoles do not exist.**",
            "Magnetic field lines form **continuous closed loops**: outside the magnet from N to S, inside from S to N.",
            "Field lines never intersect; the tangent gives the direction of B and crowding shows a stronger field.",
            "A bar magnet behaves like a **current-carrying solenoid**; both have the same far-field pattern."
          ]
        },
        {
          heading: "Magnetic Dipole in a Uniform Field",
          points: [
            "Far field of a magnet of moment m: axial **B = (μ₀/4π) 2m/r³**, equatorial **B = (μ₀/4π) m/r³** (opposite to m), like an electric dipole with 1/ε₀ replaced by μ₀.",
            "Torque: **τ = m × B**, magnitude mB sin θ; it tends to align m with B.",
            "Potential energy: **U = −m · B = −mB cos θ**; minimum −mB at θ = 0° (stable), maximum +mB at θ = 180° (unstable).",
            "Work needed to turn it from θ₁ to θ₂: W = mB(cos θ₁ − cos θ₂).",
            "A magnet or compass needle disturbed from equilibrium oscillates with period **T = 2π√(I/mB)**, where I is its moment of inertia."
          ]
        },
        {
          heading: "Gauss's Law for Magnetism",
          points: [
            "The net magnetic flux through **any closed surface is zero**: ∮B · dS = 0.",
            "Reason: magnetic field lines are closed loops, so every line entering a closed surface also leaves it.",
            "In electrostatics the net flux is q/ε₀ because isolated charges exist; magnetic monopoles do not, so the magnetic flux is always zero."
          ]
        },
        {
          heading: "Magnetisation and Magnetic Intensity",
          points: [
            "**Magnetisation** M = net magnetic moment per unit volume; unit A m⁻¹.",
            "**Magnetic intensity** H = B/μ₀ − M (A m⁻¹); for a solenoid H = nI, fixed by the free current.",
            "Field inside a material: **B = μ₀(H + M)**.",
            "For most materials M = χH, where χ is the dimensionless **magnetic susceptibility**.",
            "So B = μ₀(1 + χ)H = μ₀μᵣH = μH, with relative permeability **μᵣ = 1 + χ**."
          ]
        },
        {
          heading: "Diamagnetic and Paramagnetic Substances",
          points: [
            "**Diamagnetic**: weakly **repelled**, move from stronger to weaker field; χ small and negative (−1 ≤ χ < 0), μᵣ slightly less than 1. Examples: bismuth, copper, lead, silicon, water, sodium chloride, nitrogen (at STP).",
            "A **superconductor** is a perfect diamagnet (χ = −1) that expels magnetic field lines: the **Meissner effect**.",
            "**Paramagnetic**: atoms have permanent dipole moments; weakly **attracted**; χ small and positive, μᵣ slightly more than 1. Examples: aluminium, sodium, calcium, oxygen (at STP), copper chloride.",
            "**Curie's law**: for a paramagnet χ = Cμ₀/T, so susceptibility is **inversely proportional to absolute temperature**."
          ]
        },
        {
          heading: "Ferromagnetic Substances",
          points: [
            "**Ferromagnetic**: strongly attracted; χ is very large and positive. Examples: iron, cobalt, nickel, gadolinium.",
            "Atomic moments line up spontaneously in small regions called **domains**; an applied field makes the aligned domains grow.",
            "Above the **Curie temperature** T_c a ferromagnet becomes paramagnetic, with χ = C/(T − T_c).",
            "**Hard** ferromagnets (e.g. Alnico) keep their magnetisation and make **permanent magnets**; **soft** ferromagnets (soft iron) lose it when the field is removed and are used in **electromagnets**."
          ]
        }
      ],
      formulas: [
        "Solenoid equivalent of a magnet: m = NIA (A m² = J T⁻¹)",
        "Axial field (far): B = (μ₀/4π) 2m/r³",
        "Equatorial field (far): B = (μ₀/4π) m/r³, opposite to m",
        "Torque: τ = m × B, τ = mB sin θ",
        "Potential energy: U = −m · B = −mB cos θ",
        "Work in turning from θ₁ to θ₂: W = mB(cos θ₁ − cos θ₂)",
        "Period of oscillation: T = 2π√(I/mB)",
        "Gauss's law for magnetism: ∮B · dS = 0",
        "Magnetisation: M = m_net/V (A m⁻¹)",
        "Magnetic intensity: H = B/μ₀ − M; for a solenoid H = nI",
        "Field in a material: B = μ₀(H + M) = μ₀μᵣH",
        "Susceptibility and permeability: χ = M/H; μᵣ = 1 + χ; μ = μ₀μᵣ",
        "Curie's law (paramagnets): χ = Cμ₀/T",
        "Ferromagnet above Curie temperature: χ = C/(T − T_c)"
      ],
      terms: [
        { term: "Magnetic monopole", meaning: "An isolated N or S pole. It is **not found in nature**, which is why the net magnetic flux through a closed surface is zero." },
        { term: "Magnetisation", meaning: "**Net magnetic moment per unit volume** of a material, M = m_net/V." },
        { term: "Magnetic susceptibility", meaning: "**χ = M/H**: negative for diamagnets, small positive for paramagnets, very large for ferromagnets." },
        { term: "Relative permeability", meaning: "**μᵣ = μ/μ₀ = 1 + χ**; slightly below 1 for diamagnets, slightly above 1 for paramagnets." },
        { term: "Curie temperature", meaning: "Temperature above which a **ferromagnet becomes paramagnetic**." },
        { term: "Domain", meaning: "Small region of a ferromagnet in which all atomic magnetic moments **point in the same direction**." }
      ],
      examples: [
        {
          q: "A bar magnet of magnetic moment 0.32 J T⁻¹ is placed in a uniform magnetic field of 0.15 T. Find (a) the torque on it when its axis makes 30° with the field, (b) its potential energy in stable and unstable equilibrium.",
          steps: [
            "(a) τ = mB sin θ = 0.32 × 0.15 × sin 30° = 0.048 × 0.5 = 0.024 N m",
            "(b) Stable equilibrium: m parallel to B (θ = 0°), U = −mB = −0.048 J",
            "Unstable equilibrium: m antiparallel to B (θ = 180°), U = +mB = +0.048 J"
          ],
          answer: "τ = 0.024 N m; U = −0.048 J (stable) and +0.048 J (unstable)"
        },
        {
          q: "A solenoid with 1000 turns per metre carries a current of 2 A and has a core of relative permeability 400. Find H, B and M in the core. (μ₀ = 4π × 10⁻⁷ T m A⁻¹)",
          steps: [
            "H = nI = 1000 × 2 = 2 × 10³ A m⁻¹",
            "B = μᵣμ₀H = 400 × 4π × 10⁻⁷ × 2 × 10³ = 400 × 2.51 × 10⁻³ ≈ 1.0 T",
            "M = χH = (μᵣ − 1)H = 399 × 2 × 10³ ≈ 8 × 10⁵ A m⁻¹"
          ],
          answer: "H = 2 × 10³ A m⁻¹; B ≈ 1.0 T; M ≈ 8 × 10⁵ A m⁻¹"
        }
      ],
      qa: [
        {
          q: "State Gauss's law for magnetism. How does it differ from Gauss's law in electrostatics, and why?",
          a: "Gauss's law for magnetism: the **net magnetic flux through any closed surface is zero**, ∮B · dS = 0. In electrostatics the net flux equals q_enc/ε₀, which can be non-zero. The difference arises because isolated electric charges exist but **magnetic monopoles do not**: magnetic field lines form closed loops, so every line that enters a closed surface also leaves it."
        },
        {
          q: "Distinguish between diamagnetic, paramagnetic and ferromagnetic substances (any three points).",
          a: "(i) **Susceptibility**: diamagnetic small and negative; paramagnetic small and positive; ferromagnetic very large and positive. (ii) **In a magnetic field**: diamagnets are weakly repelled (move towards weaker field); paramagnets are weakly attracted; ferromagnets are strongly attracted. (iii) **Relative permeability**: slightly less than 1; slightly more than 1; much greater than 1. (iv) **Temperature**: paramagnetic χ ∝ 1/T (Curie's law); a ferromagnet becomes paramagnetic above its Curie temperature."
        },
        {
          q: "Why does a paramagnetic sample show greater magnetisation when it is cooled, for the same applied field?",
          a: "In a paramagnet the field tries to align the atomic dipoles, while **thermal agitation** randomises them. On cooling, thermal agitation decreases, so more dipoles stay aligned with the field and the magnetisation increases. This is **Curie's law**, χ = Cμ₀/T: susceptibility (and so M = χH) rises as T falls."
        }
      ],
      quiz: [
        {
          q: "The magnetic susceptibility of a diamagnetic substance is:",
          options: ["small and positive", "small and negative", "large and positive", "exactly zero"],
          answer: 1,
          explain: "Diamagnets are weakly repelled; M is opposite to H, so χ is **small and negative**."
        },
        {
          q: "Which of these is ferromagnetic?",
          options: ["Copper", "Aluminium", "Bismuth", "Nickel"],
          answer: 3,
          explain: "**Nickel** is ferromagnetic (like iron and cobalt). Copper and bismuth are diamagnetic; aluminium is paramagnetic."
        },
        {
          q: "Unlike electric field lines, magnetic field lines:",
          options: ["form continuous closed loops", "begin on N poles and end on S poles", "can intersect where the field is strong", "are always straight lines"],
          answer: 0,
          explain: "Magnetic field lines **form closed loops** (S to N inside the magnet), because there are no monopoles to start or end on."
        },
        {
          q: "A bar magnet of moment 2 A m² lies along a uniform field of 0.5 T. The work needed to turn it through 180° is:",
          options: ["1 J", "0 J", "2 J", "4 J"],
          answer: 2,
          explain: "W = mB(cos 0° − cos 180°) = 2 × 0.5 × (1 + 1) = **2 J**."
        },
        {
          q: "The susceptibility of a paramagnetic sample is χ at 300 K. At 150 K (same field), it becomes:",
          options: ["χ/2", "χ", "4χ", "2χ"],
          answer: 3,
          explain: "Curie's law: χ ∝ 1/T. Halving the absolute temperature **doubles** χ."
        },
        {
          q: "Above its Curie temperature, iron becomes:",
          options: ["diamagnetic", "paramagnetic", "a superconductor", "a stronger ferromagnet"],
          answer: 1,
          explain: "Above the Curie temperature thermal agitation destroys the domains, and a ferromagnet becomes **paramagnetic**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electromagnetic-induction",
      title: "Electromagnetic Induction",
      section: "EMI and AC",
      summary: "A changing magnetic flux induces an emf in a circuit. This chapter covers magnetic flux, Faraday's and Lenz's laws, motional emf, self and mutual inductance, and the AC generator.",
      notes: [
        {
          heading: "Magnetic Flux and Faraday's Experiments",
          points: [
            "Magnetic flux through an area A: **Φ_B = B · A = BA cos θ**, θ being the angle between B and the normal to A. Unit: weber (Wb) = T m².",
            "Faraday and Henry found that moving a magnet towards or away from a coil, or changing the current in a nearby coil, deflects a galvanometer connected to the coil.",
            "An emf is induced only while the flux is **changing**; a stationary magnet or a steady current induces nothing.",
            "Flux can be changed by changing B, the area A, or the angle θ (for example by rotating a coil)."
          ]
        },
        {
          heading: "Faraday's Law and Lenz's Law",
          points: [
            "**Faraday's law**: the induced emf equals the rate of change of magnetic flux: **ε = −N dΦ_B/dt** for a coil of N turns.",
            "**Lenz's law**: the induced current flows in a direction that **opposes the change in flux** producing it (the minus sign).",
            "Example: when the N pole of a magnet approaches a coil, the near face of the coil becomes a N pole and repels the magnet.",
            "Lenz's law follows from **conservation of energy**: work done against the opposing force appears as electrical energy.",
            "Induced charge Δq = NΔΦ/R depends only on the total change of flux, not on how fast it changes."
          ]
        },
        {
          heading: "Motional EMF",
          points: [
            "A rod of length l moving with velocity v perpendicular to B develops an emf **ε = Blv** between its ends, due to the Lorentz force on its free charges.",
            "A rod of length l rotating with angular speed ω about one end, in a field B parallel to the axis: **ε = ½Bωl²**.",
            "If the rod is part of a circuit of resistance R: I = Blv/R, the opposing force is F = B²l²v/R, and the power needed P = B²l²v²/R appears as Joule heat."
          ]
        },
        {
          heading: "Inductance",
          points: [
            "**Mutual inductance**: N₂Φ₂ = MI₁ and ε₂ = −M dI₁/dt. Unit: henry (H).",
            "Two long coaxial solenoids: **M = μ₀n₁n₂πr₁²l**, r₁ being the radius of the inner solenoid; M₁₂ = M₂₁.",
            "**Self-inductance**: NΦ = LI and **ε = −L dI/dt**; this back emf opposes any change of current in the coil.",
            "Long solenoid: **L = μ₀n²Al** (n = turns per unit length); with a core of relative permeability μᵣ, L = μᵣμ₀n²Al.",
            "Self-inductance acts like electrical inertia; energy stored in an inductor is **U = ½LI²**."
          ]
        },
        {
          heading: "AC Generator",
          points: [
            "An AC generator converts **mechanical energy into electrical energy** by rotating a coil in a magnetic field.",
            "For a coil rotating at angular speed ω: Φ = NBA cos ωt, so **ε = NBAω sin ωt**.",
            "Peak emf **ε₀ = NBAω**; the emf is maximum when the plane of the coil is **parallel to B**, where the flux is zero but changing fastest.",
            "In India the mains supply has a frequency of 50 Hz."
          ]
        }
      ],
      formulas: [
        "Magnetic flux: Φ_B = B · A = BA cos θ (weber, Wb = T m²)",
        "Faraday's law: ε = −N dΦ_B/dt",
        "Induced current and charge: I = ε/R; Δq = NΔΦ/R",
        "Motional emf: ε = Blv",
        "Rod rotating about one end: ε = ½Bωl²",
        "Rod in a circuit: F = B²l²v/R; P = B²l²v²/R",
        "Mutual inductance: N₂Φ₂ = MI₁; ε₂ = −M dI₁/dt",
        "Coaxial solenoids: M = μ₀n₁n₂πr₁²l",
        "Self-inductance: NΦ = LI; ε = −L dI/dt (henry, H)",
        "Long solenoid: L = μ₀n²Al = μ₀N²A/l",
        "Energy in an inductor: U = ½LI²",
        "AC generator: ε = NBAω sin ωt; ε₀ = NBAω; ω = 2πν"
      ],
      terms: [
        { term: "Magnetic flux", meaning: "Product of B and the area normal to it, **Φ = BA cos θ**; unit weber." },
        { term: "Faraday's law", meaning: "Induced emf equals the **negative rate of change of magnetic flux** linked with the circuit." },
        { term: "Lenz's law", meaning: "The induced current **opposes the change in flux** that causes it; a consequence of energy conservation." },
        { term: "Motional emf", meaning: "Emf induced in a conductor **moving through a magnetic field**, ε = Blv." },
        { term: "Self-inductance", meaning: "Flux linkage per unit current in a coil, **L = NΦ/I**; it opposes changes of current in the coil." },
        { term: "Mutual inductance", meaning: "Flux linked with one coil **per unit current in a neighbouring coil**, M = N₂Φ₂/I₁." }
      ],
      examples: [
        {
          q: "A 1.0 m long metal rod rotates at 400 rad s⁻¹ about an axis through one end, perpendicular to the rod, in a uniform magnetic field of 0.5 T parallel to the axis. Find the emf between its ends.",
          steps: [
            "For a rod rotating about one end: ε = ½Bωl²",
            "ε = ½ × 0.5 × 400 × (1.0)²",
            "ε = 100 V"
          ],
          answer: "ε = 100 V"
        },
        {
          q: "A coil of 100 turns and area 0.10 m² rotates at half a revolution per second in a uniform magnetic field of 0.01 T perpendicular to the axis of rotation. Find the maximum emf generated.",
          steps: [
            "ω = 2πν = 2π × 0.5 = π rad s⁻¹",
            "ε₀ = NBAω = 100 × 0.01 × 0.10 × π",
            "ε₀ = 0.1π ≈ 0.314 V"
          ],
          answer: "ε₀ ≈ 0.314 V"
        }
      ],
      qa: [
        {
          q: "State Lenz's law. Show that it is consistent with the law of conservation of energy.",
          a: "**Lenz's law**: the induced current flows in a direction that **opposes the change in magnetic flux** producing it. When the N pole of a magnet is pushed towards a coil, the near face of the coil becomes a N pole and repels the magnet, so we must do mechanical work to keep it moving. This work appears as electrical energy (and heat) in the coil. If the induced current helped the motion instead, the magnet would speed up on its own and energy would be created from nothing, **violating conservation of energy**."
        },
        {
          q: "Derive an expression for the energy stored in an inductor carrying a current I.",
          a: "While the current i is growing, the back emf ε = L di/dt opposes it. The source must supply power P = εi = Li di/dt, so the work done in time dt is dW = Li di. Total work as the current rises from 0 to I: W = ∫Li di (from 0 to I) = **½LI²**. This work is stored as magnetic energy, **U = ½LI²**."
        },
        {
          q: "A rod of length l slides with velocity v on two parallel conducting rails, in a uniform magnetic field B perpendicular to the plane of the rails. Derive the emf induced.",
          a: "Let x be the distance of the rod from the closed end of the rails. The flux through the loop is Φ = Blx. As the rod moves, x changes at the rate dx/dt = v. Induced emf |ε| = dΦ/dt = Bl dx/dt = **Blv**. Alternatively, each free charge q in the rod feels a Lorentz force qvB along the rod; the work done per unit charge over length l is Bvl, so ε = Blv."
        }
      ],
      quiz: [
        {
          q: "The SI unit of magnetic flux is the:",
          options: ["tesla", "henry", "weber", "gauss"],
          answer: 2,
          explain: "Flux = BA, so its unit is T m², called the **weber**. Tesla is the unit of B; henry of inductance."
        },
        {
          q: "The flux through a coil varies as Φ = (5t² + 3t) mWb, with t in seconds. The magnitude of the induced emf at t = 2 s is:",
          options: ["26 mV", "23 mV", "13 mV", "20 mV"],
          answer: 1,
          explain: "|ε| = dΦ/dt = 10t + 3 = 10 × 2 + 3 = **23 mV**. (26 mWb is the flux itself at t = 2 s.)"
        },
        {
          q: "Lenz's law is a consequence of the conservation of:",
          options: ["charge", "momentum", "mass", "energy"],
          answer: 3,
          explain: "The opposing induced current means work must be done to produce it, so Lenz's law follows from **conservation of energy**."
        },
        {
          q: "A 0.5 m long rod moves at 4 m s⁻¹ perpendicular to a uniform magnetic field of 0.2 T. The emf induced across its ends is:",
          options: ["0.4 V", "4 V", "0.04 V", "1.6 V"],
          answer: 0,
          explain: "ε = Blv = 0.2 × 0.5 × 4 = **0.4 V**."
        },
        {
          q: "The energy stored in a 2 H inductor carrying a current of 3 A is:",
          options: ["6 J", "18 J", "9 J", "3 J"],
          answer: 2,
          explain: "U = ½LI² = ½ × 2 × 3² = **9 J**."
        },
        {
          q: "If the number of turns of a solenoid is doubled, keeping its length and area the same, its self-inductance:",
          options: ["doubles", "becomes four times", "is halved", "remains the same"],
          answer: 1,
          explain: "L = μ₀N²A/l ∝ N², so doubling N makes L **four times**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "alternating-current",
      title: "Alternating Current",
      section: "EMI and AC",
      summary: "Alternating current changes direction periodically. This chapter covers rms values, AC through a resistor, an inductor and a capacitor, phasors, the series LCR circuit and resonance, power and power factor, and the transformer.",
      notes: [
        {
          heading: "AC Voltage and RMS Values",
          points: [
            "AC voltage: **v = vₘ sin ωt**, where vₘ is the peak value and ω = 2πν.",
            "The average of a sinusoidal current over a full cycle is **zero**, so we use **rms (effective) values**: I = iₘ/√2 ≈ 0.707 iₘ and V = vₘ/√2.",
            "The rms current is the steady current that produces the **same heating** in a resistor. Indian mains 220 V is an rms value; its peak is about 311 V.",
            "AC ammeters and voltmeters read rms values.",
            "Resistor in AC: current is **in phase** with voltage; average power P = I²R (rms values)."
          ]
        },
        {
          heading: "Inductor and Capacitor in AC",
          points: [
            "Pure inductor: inductive reactance **X_L = ωL**; current **lags** voltage by π/2 (90°).",
            "Pure capacitor: capacitive reactance **X_C = 1/(ωC)**; current **leads** voltage by π/2.",
            "X_L ∝ frequency, X_C ∝ 1/frequency. A capacitor **blocks DC** (X_C is infinite at ν = 0), while an inductor passes DC easily.",
            "Average power over a cycle is **zero** for a pure inductor or a pure capacitor: energy is stored and returned to the source each cycle.",
            "A **phasor** is a rotating vector whose projection on the vertical axis gives the instantaneous value; phasor diagrams show phase relations."
          ]
        },
        {
          heading: "Series LCR Circuit",
          points: [
            "Impedance: **Z = √[R² + (X_C − X_L)²]**; peak current iₘ = vₘ/Z.",
            "Phase angle φ between voltage and current: **tan φ = (X_C − X_L)/R**.",
            "If X_L > X_C the circuit is **inductive** (current lags); if X_C > X_L it is **capacitive** (current leads).",
            "Voltages across R, L and C add as phasors, not arithmetically: V = √[V_R² + (V_C − V_L)²]."
          ]
        },
        {
          heading: "Resonance",
          points: [
            "At resonance **X_L = X_C**, so Z = R (minimum), the current is **maximum** and voltage and current are in phase.",
            "Resonant angular frequency **ω₀ = 1/√(LC)**; resonant frequency ν₀ = 1/(2π√(LC)).",
            "Resonance is possible only when **both L and C** are present. It is used for **tuning** radio and TV receivers.",
            "**Quality factor** Q = ω₀L/R = 1/(ω₀CR); a higher Q means a **sharper** resonance."
          ]
        },
        {
          heading: "Power in AC Circuits",
          points: [
            "Average power **P = VI cos φ** (rms values); cos φ is the **power factor**, cos φ = R/Z.",
            "Purely resistive circuit: φ = 0, cos φ = 1. Pure L or pure C: φ = 90°, cos φ = 0, no power consumed.",
            "Current through a pure inductor or capacitor consumes no power, so it is called **wattless current**.",
            "A low power factor needs a larger current for the same power, increasing line losses; it can be improved by connecting a suitable capacitor."
          ]
        },
        {
          heading: "Transformer",
          points: [
            "A transformer changes AC voltage using **mutual induction**; it does not work with steady DC.",
            "Ideal transformer: **Vₛ/Vₚ = Nₛ/Nₚ = Iₚ/Iₛ**. A **step-up** transformer has Nₛ > Nₚ: voltage rises and current falls.",
            "Energy losses: **flux leakage**, **resistance of the windings** (I²R heating), **eddy currents** (reduced by a laminated core) and **hysteresis** (reduced by a soft iron core).",
            "Power is sent over long distances at **high voltage and low current** to reduce I²R losses in the lines, then stepped down for homes."
          ]
        }
      ],
      formulas: [
        "AC voltage and current: v = vₘ sin ωt; i = iₘ sin(ωt + φ)",
        "RMS values: I = iₘ/√2 ≈ 0.707 iₘ; V = vₘ/√2",
        "Inductive reactance: X_L = ωL = 2πνL (ohm)",
        "Capacitive reactance: X_C = 1/(ωC) = 1/(2πνC) (ohm)",
        "Impedance (series LCR): Z = √[R² + (X_C − X_L)²]",
        "Phase angle: tan φ = (X_C − X_L)/R",
        "Resonance: ω₀ = 1/√(LC); ν₀ = 1/(2π√(LC))",
        "Quality factor: Q = ω₀L/R = 1/(ω₀CR)",
        "Average power: P = VI cos φ (rms values)",
        "Power factor: cos φ = R/Z",
        "Ideal transformer: Vₛ/Vₚ = Nₛ/Nₚ = Iₚ/Iₛ",
        "Transformer efficiency: η = output power/input power"
      ],
      terms: [
        { term: "RMS current", meaning: "The steady current that produces the **same heating in a resistor** as the AC; I = iₘ/√2." },
        { term: "Reactance", meaning: "Opposition to AC offered by an inductor (**X_L = ωL**) or a capacitor (**X_C = 1/ωC**); unit ohm." },
        { term: "Impedance", meaning: "Total opposition of an LCR circuit to AC, **Z = √[R² + (X_C − X_L)²]**." },
        { term: "Resonance", meaning: "Condition **X_L = X_C** in a series LCR circuit, giving minimum impedance and maximum current." },
        { term: "Power factor", meaning: "**cos φ = R/Z**, the fraction of VI that is actually consumed as power." },
        { term: "Wattless current", meaning: "Current in a purely inductive or capacitive circuit, which **consumes no average power**." }
      ],
      examples: [
        {
          q: "A 100 Ω resistor is connected to a 220 V, 50 Hz AC supply. Find (a) the rms current, (b) the peak current, (c) the average power consumed.",
          steps: [
            "(a) I = V/R = 220/100 = 2.2 A",
            "(b) iₘ = √2 × I = 1.414 × 2.2 ≈ 3.11 A",
            "(c) P = VI = 220 × 2.2 = 484 W (or V²/R = 48400/100 = 484 W)"
          ],
          answer: "I = 2.2 A (rms); iₘ ≈ 3.11 A; P = 484 W"
        },
        {
          q: "A series LCR circuit has R = 40 Ω, X_L = 80 Ω and X_C = 50 Ω and is connected to a 200 V (rms) AC supply. Find the impedance, current, power factor and average power.",
          steps: [
            "Z = √[R² + (X_L − X_C)²] = √(40² + 30²) = √2500 = 50 Ω",
            "I = V/Z = 200/50 = 4 A",
            "cos φ = R/Z = 40/50 = 0.8; X_L > X_C, so the current lags the voltage",
            "P = VI cos φ = 200 × 4 × 0.8 = 640 W (check: I²R = 16 × 40 = 640 W)"
          ],
          answer: "Z = 50 Ω; I = 4 A; cos φ = 0.8; P = 640 W"
        }
      ],
      qa: [
        {
          q: "A capacitor blocks DC but allows AC to flow in a circuit. Explain.",
          a: "Capacitive reactance X_C = 1/(2πνC). For DC, ν = 0, so **X_C is infinite**: once the capacitor is charged, no steady current flows. With AC, the capacitor charges and discharges every half cycle, so current keeps flowing in the circuit; X_C is finite and **decreases as the frequency increases**."
        },
        {
          q: "What is wattless current? Show that the average power consumed by a pure inductor in an AC circuit is zero.",
          a: "In a pure inductor the current lags the voltage by π/2. With v = vₘ sin ωt, i = iₘ sin(ωt − π/2) = −iₘ cos ωt. Instantaneous power p = vi = −vₘiₘ sin ωt cos ωt = −½vₘiₘ sin 2ωt, whose average over a full cycle is **zero**. Equivalently P = VI cos 90° = 0. A current that flows but consumes no power is called **wattless current**."
        },
        {
          q: "Why is electric power transmitted over long distances at high voltage? Name two energy losses in a transformer.",
          a: "For a given power P = VI, a high voltage means a **small current**. The heat lost in the lines is I²R, so a small current greatly **reduces transmission losses**. Step-up transformers raise the voltage at the power station and step-down transformers lower it near consumers. Losses in a transformer: **flux leakage**, **copper loss** (I²R in the windings), **eddy current loss** (reduced by a laminated core) and **hysteresis loss**."
        }
      ],
      quiz: [
        {
          q: "The peak value of the 220 V (rms) household supply is about:",
          options: ["311 V", "156 V", "220 V", "440 V"],
          answer: 0,
          explain: "vₘ = √2 × V = 1.414 × 220 ≈ **311 V**. (156 V comes from wrongly dividing by √2.)"
        },
        {
          q: "In a purely inductive AC circuit, the current:",
          options: ["leads the voltage by π/2", "is in phase with the voltage", "lags the voltage by π/2", "lags the voltage by π"],
          answer: 2,
          explain: "The back emf of the inductor delays the current: it **lags the voltage by π/2**. In a pure capacitor it leads by π/2."
        },
        {
          q: "A series LCR circuit has L = 0.5 H and C = 8 μF. Its resonant angular frequency is:",
          options: ["250 rad s⁻¹", "500 rad s⁻¹", "2000 rad s⁻¹", "50 rad s⁻¹"],
          answer: 1,
          explain: "ω₀ = 1/√(LC) = 1/√(0.5 × 8 × 10⁻⁶) = 1/√(4 × 10⁻⁶) = 1/(2 × 10⁻³) = **500 rad s⁻¹**."
        },
        {
          q: "The power factor of a series LCR circuit at resonance is:",
          options: ["zero", "0.5", "0.707", "1"],
          answer: 3,
          explain: "At resonance Z = R, so cos φ = R/Z = **1**: voltage and current are in phase."
        },
        {
          q: "A transformer has 100 turns in the primary and 500 turns in the secondary. If 220 V AC is applied to the primary, the secondary voltage is:",
          options: ["1100 V", "44 V", "220 V", "2200 V"],
          answer: 0,
          explain: "Vₛ = Vₚ × Nₛ/Nₚ = 220 × 500/100 = **1100 V** (step-up). 44 V results from inverting the ratio."
        },
        {
          q: "If the frequency of the AC supply is doubled, the reactance of a capacitor in the circuit:",
          options: ["doubles", "becomes four times", "is halved", "remains the same"],
          answer: 2,
          explain: "X_C = 1/(2πνC) ∝ 1/ν, so doubling the frequency **halves** X_C. (An inductor's reactance would double.)"
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "electromagnetic-waves",
      title: "Electromagnetic Waves",
      section: "Electromagnetic Waves",
      summary: "Changing electric and magnetic fields sustain each other and travel through space as electromagnetic waves. This chapter covers displacement current, the sources and nature of EM waves, and the electromagnetic spectrum with its uses.",
      notes: [
        {
          heading: "Displacement Current",
          points: [
            "While a capacitor charges, conduction current flows in the wires but not across the gap, so Ampere's law gives different answers for different surfaces bounded by the same loop.",
            "Maxwell removed this inconsistency by adding the **displacement current** **i_d = ε₀ dΦ_E/dt**, produced by a **changing electric flux**.",
            "**Ampere–Maxwell law**: ∮B · dl = μ₀(i_c + i_d) = μ₀i_c + μ₀ε₀ dΦ_E/dt.",
            "Total current (conduction + displacement) is continuous: in the capacitor gap, i_d equals the conduction current in the wires.",
            "Just as a changing B produces E (Faraday), a **changing E produces B**; this symmetry makes EM waves possible."
          ]
        },
        {
          heading: "Sources and Nature of EM Waves",
          points: [
            "EM waves are produced by **accelerated charges**; a charge oscillating at frequency ν radiates EM waves of the same frequency.",
            "E and B oscillate **perpendicular to each other and to the direction of propagation**: EM waves are **transverse**.",
            "For a wave along z: E_x = E₀ sin(kz − ωt) and B_y = B₀ sin(kz − ωt); E and B are **in phase**.",
            "Speed in vacuum **c = 1/√(μ₀ε₀) = 3 × 10⁸ m s⁻¹**; in a medium v = 1/√(με). Also **E₀/B₀ = c**.",
            "EM waves need **no material medium**. Hertz first produced and detected them (1887); J. C. Bose produced waves of much shorter wavelength (25 mm to 5 mm).",
            "EM waves carry **energy and momentum**; a wave delivering energy U to a surface (complete absorption) delivers momentum U/c, so it exerts **radiation pressure**."
          ]
        },
        {
          heading: "The Electromagnetic Spectrum",
          points: [
            "In order of decreasing wavelength (increasing frequency): **radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays**.",
            "Approximate wavelengths: radio > 0.1 m; microwaves 0.1 m to 1 mm; infrared 1 mm to 700 nm; visible 700 nm to 400 nm; UV 400 nm to 1 nm; X-rays 1 nm to 10⁻³ nm; gamma rays below 10⁻³ nm.",
            "The regions overlap and have no sharp boundaries. All travel at c in vacuum and differ only in frequency and wavelength (c = νλ).",
            "Different animals sense different ranges; for example, snakes can detect infrared."
          ]
        },
        {
          heading: "Radio Waves, Microwaves, Infrared and Light",
          points: [
            "**Radio waves**: produced by accelerated charges in antennas; used in radio and TV communication. AM band 530 kHz to 1710 kHz; FM band 88 MHz to 108 MHz; cell phones use the UHF band.",
            "**Microwaves**: produced by klystrons, magnetrons and Gunn diodes; used in **radar** for aircraft navigation and in **microwave ovens**, whose frequency matches the resonant frequency of **water molecules**.",
            "**Infrared**: produced by hot bodies and molecules (heat waves); used in **TV remote controls**, physical therapy and night vision; infrared trapped by the atmosphere keeps Earth warm (**greenhouse effect**).",
            "**Visible light** (about 400 nm to 700 nm) is the only part of the spectrum our eyes can detect."
          ]
        },
        {
          heading: "Ultraviolet, X-rays and Gamma Rays",
          points: [
            "**Ultraviolet**: produced by special lamps and very hot bodies such as the Sun; most of the Sun's UV is absorbed by the **ozone layer**.",
            "UV is used in **LASIK eye surgery** and in **water purifiers to kill germs**; welders wear special glass goggles to protect their eyes from it.",
            "**X-rays**: produced by bombarding a metal target with high-energy electrons; used in **medical diagnosis** and to treat certain forms of cancer.",
            "**Gamma rays**: produced in **nuclear reactions** and emitted by radioactive nuclei; used in medicine to **destroy cancer cells**.",
            "Large doses of UV, X-rays or gamma rays damage living tissue, so they must be used carefully."
          ]
        }
      ],
      formulas: [
        "Displacement current: i_d = ε₀ dΦ_E/dt",
        "Ampere–Maxwell law: ∮B · dl = μ₀i_c + μ₀ε₀ dΦ_E/dt",
        "Speed of light in vacuum: c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m s⁻¹",
        "Speed in a medium: v = 1/√(με)",
        "Plane wave along z: E_x = E₀ sin(kz − ωt); B_y = B₀ sin(kz − ωt)",
        "Wave relations: k = 2π/λ; ω = 2πν; c = ω/k = νλ",
        "Field amplitudes: E₀/B₀ = c",
        "Momentum delivered on complete absorption: p = U/c",
        "Spectrum, decreasing λ: radio > microwave > infrared > visible > UV > X-rays > gamma rays",
        "Visible range: about 400 nm (violet) to 700 nm (red)"
      ],
      terms: [
        { term: "Displacement current", meaning: "Current due to a **changing electric flux**, i_d = ε₀ dΦ_E/dt; it exists even in empty space between capacitor plates." },
        { term: "Electromagnetic wave", meaning: "Self-sustaining **transverse wave of oscillating E and B fields**, travelling at c in vacuum." },
        { term: "Electromagnetic spectrum", meaning: "Arrangement of EM waves in order of **wavelength or frequency**, from radio waves to gamma rays." },
        { term: "Radiation pressure", meaning: "Pressure exerted by EM waves on a surface, because they **carry momentum**." },
        { term: "Greenhouse effect", meaning: "Warming of Earth as **infrared radiation** from its surface is trapped by gases such as CO₂ and water vapour." },
        { term: "Ozone layer", meaning: "Layer high in the atmosphere that **absorbs most of the Sun's ultraviolet** radiation." }
      ],
      examples: [
        {
          q: "A plane electromagnetic wave of frequency 25 MHz travels in vacuum. At a certain point the electric field is 6.3 V m⁻¹. Find the wavelength and the magnetic field at that point.",
          steps: [
            "λ = c/ν = 3 × 10⁸/(25 × 10⁶) = 12 m",
            "B = E/c = 6.3/(3 × 10⁸) = 2.1 × 10⁻⁸ T",
            "B is perpendicular to both E and the direction of propagation"
          ],
          answer: "λ = 12 m; B = 2.1 × 10⁻⁸ T"
        },
        {
          q: "A 100 pF capacitor is connected to a 230 V (rms) AC supply of angular frequency 300 rad s⁻¹. Find the rms conduction current. What is the displacement current between the plates?",
          steps: [
            "X_C = 1/(ωC) = 1/(300 × 100 × 10⁻¹²) = 1/(3 × 10⁻⁸) ≈ 3.33 × 10⁷ Ω",
            "I = V/X_C = VωC = 230 × 300 × 100 × 10⁻¹² = 6.9 × 10⁻⁶ A",
            "Between the plates the displacement current equals the conduction current in the wires"
          ],
          answer: "Conduction current = 6.9 μA (rms); displacement current = 6.9 μA"
        }
      ],
      qa: [
        {
          q: "What is displacement current? Why did Maxwell need to introduce it?",
          a: "Displacement current is the current due to a **changing electric flux**: i_d = ε₀ dΦ_E/dt. While a capacitor charges, Ampere's law gives B = μ₀i near the wire for a surface pierced by the wire, but **zero** for a surface passing through the gap between the plates, where no conduction current flows. To remove this contradiction, Maxwell added i_d, which equals the conduction current in the gap. Then the total current is continuous, and it follows that **a changing electric field produces a magnetic field**."
        },
        {
          q: "State any four properties of electromagnetic waves.",
          a: "(i) They are produced by **accelerated charges**. (ii) They are **transverse**: E, B and the direction of propagation are mutually perpendicular. (iii) In vacuum they travel at **c = 1/√(μ₀ε₀) = 3 × 10⁸ m s⁻¹** and need no medium. (iv) E₀/B₀ = c, and E and B oscillate in phase. (v) They carry **energy and momentum** and exert radiation pressure."
        },
        {
          q: "Name the EM radiation used (a) to kill germs in water purifiers, (b) in radar for aircraft navigation, (c) in TV remote controls, (d) to destroy cancer cells. Arrange them in order of increasing frequency.",
          a: "(a) **Ultraviolet**, (b) **microwaves**, (c) **infrared**, (d) **gamma rays**. In order of increasing frequency: microwaves, infrared, ultraviolet, gamma rays."
        }
      ],
      quiz: [
        {
          q: "For an electromagnetic wave in vacuum, the ratio E₀/B₀ equals:",
          options: ["1/c", "c", "c²", "√(μ₀/ε₀)"],
          answer: 1,
          explain: "The amplitudes are related by **E₀ = cB₀**, so E₀/B₀ = c."
        },
        {
          q: "Which of these has the shortest wavelength?",
          options: ["X-rays", "Ultraviolet rays", "Microwaves", "Gamma rays"],
          answer: 3,
          explain: "**Gamma rays** lie at the high-frequency end of the spectrum, with wavelengths below about 10⁻³ nm."
        },
        {
          q: "Microwave ovens heat food because the microwaves:",
          options: ["have a frequency matching the resonant frequency of water molecules", "ionise the molecules of the food", "are reflected strongly by water", "travel faster than light inside the food"],
          answer: 0,
          explain: "The frequency is chosen to match the **resonant frequency of water molecules**, which absorb the energy and heat the food."
        },
        {
          q: "The frequency of light of wavelength 600 nm in vacuum is:",
          options: ["2 × 10¹⁴ Hz", "5 × 10¹⁴ Hz", "5 × 10¹⁵ Hz", "5 × 10¹³ Hz"],
          answer: 1,
          explain: "ν = c/λ = (3 × 10⁸)/(600 × 10⁻⁹) = **5 × 10¹⁴ Hz**."
        },
        {
          q: "The magnetic field amplitude of an EM wave in vacuum is 2 × 10⁻⁸ T. The amplitude of its electric field is:",
          options: ["0.6 V m⁻¹", "15 V m⁻¹", "6 V m⁻¹", "6.7 × 10⁻¹⁷ V m⁻¹"],
          answer: 2,
          explain: "E₀ = cB₀ = 3 × 10⁸ × 2 × 10⁻⁸ = **6 V m⁻¹**."
        },
        {
          q: "Displacement current is produced by:",
          options: ["a steady magnetic field", "the flow of electrons across the capacitor gap", "a constant electric field", "a changing electric flux"],
          answer: 3,
          explain: "i_d = ε₀ dΦ_E/dt, so it exists only where the **electric flux is changing**, e.g. between the plates of a charging capacitor."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "ray-optics-and-optical-instruments",
      title: "Ray Optics and Optical Instruments",
      section: "Optics",
      summary: "Ray optics treats light as rays travelling in straight lines. This chapter covers reflection by spherical mirrors, refraction and total internal reflection, refraction at spherical surfaces and lenses, the lens maker's formula and power, refraction through a prism, and microscopes and telescopes.",
      notes: [
        {
          heading: "Reflection by Spherical Mirrors",
          points: [
            "**Cartesian sign convention**: distances are measured from the pole; those along the direction of incident light are positive, those against it negative; heights above the axis are positive.",
            "Focal length **f = R/2**; with this convention f is negative for a concave mirror and positive for a convex mirror.",
            "**Mirror equation**: 1/v + 1/u = 1/f; magnification **m = h′/h = −v/u**.",
            "Negative m means a real, inverted image; positive m means a virtual, erect image.",
            "A convex mirror always forms a virtual, erect and diminished image."
          ]
        },
        {
          heading: "Refraction and Total Internal Reflection",
          points: [
            "**Snell's law**: n₁ sin i = n₂ sin r; refractive index of medium 2 relative to 1: n₂₁ = n₂/n₁ = v₁/v₂.",
            "An object at depth h in water, seen from above, appears raised: apparent depth = h/n.",
            "**Total internal reflection (TIR)** occurs when light goes from a **denser to a rarer** medium at an angle of incidence greater than the **critical angle** i_c, where sin i_c = 1/n (n = refractive index of the denser medium relative to the rarer).",
            "Diamond has a small critical angle (about 24.4°), so light inside it undergoes repeated TIR and it **sparkles**.",
            "Applications: **optical fibres** (core of higher refractive index than the cladding), prisms that turn rays through 90° or 180°, and the **mirage**."
          ]
        },
        {
          heading: "Refraction at Spherical Surfaces and Lenses",
          points: [
            "Single spherical surface: **n₂/v − n₁/u = (n₂ − n₁)/R**.",
            "**Lens maker's formula**: 1/f = (n₂₁ − 1)(1/R₁ − 1/R₂), n₂₁ being the refractive index of the lens relative to the surrounding medium.",
            "**Thin lens formula**: 1/v − 1/u = 1/f; magnification **m = v/u**.",
            "Convex (converging) lens: f positive; concave (diverging) lens: f negative.",
            "**Power P = 1/f** (f in metres); unit dioptre (D). A converging lens has positive power."
          ]
        },
        {
          heading: "Combination of Lenses and the Prism",
          points: [
            "Thin lenses in contact: **1/f = 1/f₁ + 1/f₂**, P = P₁ + P₂; total magnification m = m₁ × m₂.",
            "Prism: **A + δ = i + e** and r₁ + r₂ = A, where δ is the angle of deviation.",
            "At **minimum deviation** D, i = e and r₁ = r₂ = A/2; the ray passes symmetrically through the prism.",
            "Refractive index: **n = sin[(A + D)/2]/sin(A/2)**.",
            "Thin prism (small A): **D = (n − 1)A**."
          ]
        },
        {
          heading: "Microscopes",
          points: [
            "**Simple microscope** (a convex lens): m = 1 + D/f with the image at the near point (D = 25 cm), and m = D/f with the image at infinity.",
            "**Compound microscope**: the objective (short focal length) forms a real, magnified image, which the eyepiece magnifies further like a simple microscope.",
            "Final image at infinity: **m = (L/fₒ)(D/fₑ)**, where L is the **tube length**, the distance between the second focal point of the objective and the first focal point of the eyepiece.",
            "The final image in a compound microscope is inverted with respect to the object."
          ]
        },
        {
          heading: "Telescopes",
          points: [
            "**Refracting telescope**: objective of **large focal length and large aperture**, eyepiece of small focal length.",
            "Normal adjustment (final image at infinity): **m = fₒ/fₑ**; length of the tube = fₒ + fₑ.",
            "A larger objective gathers more light and gives a better resolving power.",
            "**Reflecting telescopes** (e.g. Cassegrain) use a concave mirror as the objective: no chromatic aberration, a paraboloidal mirror removes spherical aberration, and a mirror is lighter and easier to support than a large lens."
          ]
        }
      ],
      formulas: [
        "Spherical mirror: f = R/2",
        "Mirror equation: 1/v + 1/u = 1/f; m = −v/u",
        "Snell's law: n₁ sin i = n₂ sin r; n₂₁ = n₂/n₁ = v₁/v₂",
        "Apparent depth: h′ = h/n",
        "Critical angle: sin i_c = 1/n₂₁ (denser medium 2 to rarer medium 1)",
        "Spherical surface: n₂/v − n₁/u = (n₂ − n₁)/R",
        "Lens maker's formula: 1/f = (n₂₁ − 1)(1/R₁ − 1/R₂)",
        "Thin lens formula: 1/v − 1/u = 1/f; m = v/u",
        "Power: P = 1/f (f in m); unit dioptre, D = m⁻¹",
        "Lenses in contact: 1/f = 1/f₁ + 1/f₂; P = P₁ + P₂; m = m₁m₂",
        "Prism: A + δ = i + e; r₁ + r₂ = A",
        "Minimum deviation: n = sin[(A + D)/2]/sin(A/2)",
        "Thin prism: D = (n − 1)A",
        "Simple microscope: m = 1 + D/f (near point); m = D/f (infinity), D = 25 cm",
        "Compound microscope (normal adjustment): m = (L/fₒ)(D/fₑ)",
        "Telescope (normal adjustment): m = fₒ/fₑ; length = fₒ + fₑ"
      ],
      terms: [
        { term: "Critical angle", meaning: "Angle of incidence in the denser medium for which the **angle of refraction is 90°**; sin i_c = 1/n." },
        { term: "Total internal reflection", meaning: "Complete reflection of light back into the denser medium when the angle of incidence **exceeds the critical angle**." },
        { term: "Power of a lens", meaning: "**Reciprocal of the focal length in metres**, P = 1/f; unit dioptre." },
        { term: "Angle of minimum deviation", meaning: "Smallest deviation produced by a prism, when the ray passes through it **symmetrically** (i = e)." },
        { term: "Optical fibre", meaning: "Thin glass or plastic fibre that carries light by **repeated total internal reflection**." },
        { term: "Magnifying power", meaning: "Ratio of the **angle subtended at the eye by the image** to the angle subtended by the object seen directly." }
      ],
      examples: [
        {
          q: "An object is placed 30 cm in front of a convex lens of focal length 20 cm. Find the position, nature and magnification of the image.",
          steps: [
            "Sign convention: u = −30 cm, f = +20 cm",
            "1/v = 1/f + 1/u = 1/20 − 1/30 = (3 − 2)/60 = 1/60",
            "v = +60 cm, i.e. on the other side of the lens",
            "m = v/u = 60/(−30) = −2"
          ],
          answer: "Image 60 cm behind the lens; real, inverted and twice the size of the object"
        },
        {
          q: "A prism of angle 60° produces a minimum deviation of 30°. Find the refractive index of its material.",
          steps: [
            "n = sin[(A + D)/2]/sin(A/2)",
            "(A + D)/2 = (60° + 30°)/2 = 45°; A/2 = 30°",
            "n = sin 45°/sin 30° = (1/√2)/(1/2) = √2 ≈ 1.414"
          ],
          answer: "n = √2 ≈ 1.41"
        }
      ],
      qa: [
        {
          q: "What is total internal reflection? State its two conditions and give two applications.",
          a: "When light in a denser medium strikes the boundary with a rarer medium at an angle greater than the critical angle, it is **entirely reflected back** into the denser medium. Conditions: (i) light must travel from a **denser to a rarer** medium; (ii) the angle of incidence must be **greater than the critical angle**. Applications: **optical fibres**, totally reflecting prisms (which turn light through 90° or 180°), the sparkling of diamonds and the mirage."
        },
        {
          q: "Give three reasons why reflecting telescopes are preferred to refracting telescopes.",
          a: "(i) A mirror has **no chromatic aberration**, since reflection does not depend on wavelength. (ii) A **paraboloidal mirror** removes spherical aberration. (iii) A large mirror is **lighter and can be supported over its whole back**, whereas a large lens is heavy, hard to make and can be supported only at its rim. A large mirror also collects more light."
        },
        {
          q: "A convex lens made of glass (n = 1.5) is immersed in water (n = 1.33). How does its focal length change?",
          a: "By the lens maker's formula, 1/f ∝ (n₂₁ − 1). In air: n₂₁ − 1 = 1.5 − 1 = 0.5. In water: n₂₁ = 1.5/1.33 ≈ 1.128, so n₂₁ − 1 ≈ 0.128. Hence f_water/f_air ≈ 0.5/0.128 ≈ 3.9. The focal length becomes **about four times larger**: the lens still converges, but much more weakly."
        }
      ],
      quiz: [
        {
          q: "The power of a concave lens of focal length 25 cm is:",
          options: ["+4 D", "−4 D", "−0.25 D", "−25 D"],
          answer: 1,
          explain: "f = −0.25 m for a concave lens, so P = 1/f = **−4 D**. (Focal length must be in metres.)"
        },
        {
          q: "Two thin lenses of power +10 D and −5 D are placed in contact. The focal length of the combination is:",
          options: ["+6.7 cm", "−20 cm", "+20 cm", "+15 cm"],
          answer: 2,
          explain: "P = +10 − 5 = +5 D, so f = 1/5 m = **+20 cm** (converging)."
        },
        {
          q: "The critical angle for light going from a medium of refractive index √2 into air is:",
          options: ["30°", "60°", "90°", "45°"],
          answer: 3,
          explain: "sin i_c = 1/n = 1/√2, so i_c = **45°**."
        },
        {
          q: "An astronomical telescope has an objective of focal length 140 cm and an eyepiece of 5 cm. In normal adjustment, its magnifying power and tube length are:",
          options: ["28 and 145 cm", "28 and 135 cm", "700 and 145 cm", "135 and 28 cm"],
          answer: 0,
          explain: "m = fₒ/fₑ = 140/5 = **28**; length = fₒ + fₑ = **145 cm**."
        },
        {
          q: "A thin prism of angle 5° is made of glass of refractive index 1.5. The deviation it produces is:",
          options: ["7.5°", "2.5°", "5°", "3.3°"],
          answer: 1,
          explain: "D = (n − 1)A = (1.5 − 1) × 5° = **2.5°**."
        },
        {
          q: "Optical fibres transmit light by:",
          options: ["total internal reflection", "refraction at each surface", "diffraction at the core", "scattering by the cladding"],
          answer: 0,
          explain: "Light travels along the fibre by **repeated total internal reflection** at the core–cladding boundary."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "wave-optics",
      title: "Wave Optics",
      section: "Optics",
      summary: "Wave optics explains interference, diffraction and polarisation, which ray optics cannot. This chapter covers Huygens principle, coherent sources and interference, Young's double-slit experiment, diffraction at a single slit, and polarisation.",
      notes: [
        {
          heading: "Huygens Principle",
          points: [
            "A **wavefront** is the locus of points oscillating in the same phase; rays are perpendicular to wavefronts.",
            "A point source gives spherical wavefronts; far from the source, a small part of the wavefront is nearly **plane**.",
            "**Huygens principle**: every point on a wavefront acts as a source of **secondary wavelets**; the forward envelope of these wavelets gives the new wavefront.",
            "It explains reflection (i = r) and refraction: sin i/sin r = v₁/v₂ = n₂/n₁.",
            "On refraction the **frequency stays the same**, while speed and wavelength change: λ′ = λ/n in a medium of refractive index n."
          ]
        },
        {
          heading: "Coherent Sources and Interference",
          points: [
            "**Coherent sources** have the same frequency and a **constant phase difference**; two independent lamps are incoherent because their phases change randomly.",
            "Resultant intensity: **I = I₁ + I₂ + 2√(I₁I₂) cos φ**, φ being the phase difference; phase difference = (2π/λ) × path difference.",
            "**Constructive** interference: path difference nλ, giving I_max = (√I₁ + √I₂)².",
            "**Destructive** interference: path difference (n + ½)λ, giving I_min = (√I₁ − √I₂)².",
            "Two equal coherent sources (I₀ each): I = 4I₀ cos²(φ/2). Incoherent sources simply add: I = 2I₀."
          ]
        },
        {
          heading: "Young's Double-Slit Experiment",
          points: [
            "Two narrow slits S₁ and S₂, a distance d apart and lit by the same source, act as **coherent sources**; the screen is at distance D.",
            "Path difference at a point a distance x from the centre: S₂P − S₁P = xd/D.",
            "Bright fringes at **x = nλD/d**; dark fringes at x = (n + ½)λD/d.",
            "**Fringe width β = λD/d**: fringes are equally spaced; β increases with λ and D and decreases with d.",
            "In a medium of refractive index n, β becomes β/n. With white light the central fringe is white and the others are coloured."
          ]
        },
        {
          heading: "Diffraction at a Single Slit",
          points: [
            "**Diffraction** is the bending of light around the edges of an obstacle or aperture whose size is comparable to λ.",
            "Single slit of width a: central bright maximum at θ = 0; **minima** at θ ≈ nλ/a (n = ±1, ±2, …).",
            "Secondary maxima lie roughly at θ ≈ (n + ½)λ/a, with rapidly **decreasing intensity**.",
            "Angular width of the central maximum = **2λ/a**; on a screen at distance D its width = 2λD/a, **twice** that of each secondary maximum.",
            "A narrower slit gives a wider central maximum."
          ]
        },
        {
          heading: "Polarisation",
          points: [
            "Light is a **transverse** wave; in unpolarised light the electric field vibrates in all directions perpendicular to the direction of travel.",
            "A **polaroid** passes only the component of E along its pass axis, giving **plane polarised light**; unpolarised light of intensity I₀ emerges with intensity I₀/2.",
            "**Malus's law**: plane polarised light of intensity I₀ passing through a polaroid whose axis is at angle θ to its plane of polarisation emerges with **I = I₀ cos²θ**.",
            "Crossed polaroids (θ = 90°) transmit no light. Polarisation proves that light waves are **transverse**; sound waves in air cannot be polarised.",
            "Polaroids are used in **sunglasses**, window panes and camera filters to control glare and intensity."
          ]
        }
      ],
      formulas: [
        "Refraction (wave theory): sin i/sin r = v₁/v₂ = n₂/n₁; λ′ = λ/n (frequency unchanged)",
        "Phase difference: φ = (2π/λ) × path difference",
        "Resultant intensity: I = I₁ + I₂ + 2√(I₁I₂) cos φ",
        "Equal sources: I = 4I₀ cos²(φ/2)",
        "I_max = (√I₁ + √I₂)²; I_min = (√I₁ − √I₂)²",
        "Constructive: path difference = nλ; destructive: path difference = (n + ½)λ",
        "YDSE path difference: S₂P − S₁P = xd/D",
        "Bright fringe: x = nλD/d; dark fringe: x = (n + ½)λD/d",
        "Fringe width: β = λD/d; angular fringe width = λ/d",
        "Single-slit minima: a sin θ = nλ (θ ≈ nλ/a), n = ±1, ±2, …",
        "Central maximum width: angular 2λ/a; linear 2λD/a",
        "Malus's law: I = I₀ cos²θ",
        "Unpolarised light through a polaroid: I = I₀/2"
      ],
      terms: [
        { term: "Wavefront", meaning: "Locus of all points of a wave **vibrating in the same phase**." },
        { term: "Coherent sources", meaning: "Sources with the **same frequency and a constant phase difference**." },
        { term: "Fringe width", meaning: "Distance between two consecutive bright (or dark) fringes, **β = λD/d**." },
        { term: "Diffraction", meaning: "**Bending of light** around the edges of an obstacle or aperture comparable in size to its wavelength." },
        { term: "Plane polarised light", meaning: "Light in which the electric field vibrates **in only one direction** perpendicular to the direction of travel." },
        { term: "Malus's law", meaning: "Intensity through a polariser **I = I₀ cos²θ**, θ being the angle between the plane of polarisation and the pass axis." }
      ],
      examples: [
        {
          q: "In Young's double-slit experiment the slits are 0.28 mm apart and the screen is 1.4 m away. The distance between the central bright fringe and the fourth bright fringe is 1.2 cm. Find the wavelength of the light.",
          steps: [
            "Position of the nth bright fringe: x = nλD/d, with n = 4",
            "λ = xd/(nD) = (1.2 × 10⁻² × 0.28 × 10⁻³)/(4 × 1.4)",
            "λ = 3.36 × 10⁻⁶/5.6 = 6.0 × 10⁻⁷ m"
          ],
          answer: "λ = 600 nm"
        },
        {
          q: "Light of wavelength 500 nm falls normally on a narrow slit. On a screen 1 m away, the first minimum is 2.5 mm from the centre of the pattern. Find the width of the slit.",
          steps: [
            "First minimum: a sin θ = λ, and for small θ, sin θ ≈ x/D",
            "a = λD/x = (500 × 10⁻⁹ × 1)/(2.5 × 10⁻³)",
            "a = 2 × 10⁻⁴ m"
          ],
          answer: "a = 0.2 mm"
        }
      ],
      qa: [
        {
          q: "State Huygens principle. What happens to the speed, frequency and wavelength of light when it passes from air into glass?",
          a: "**Huygens principle**: every point on a wavefront is a source of secondary wavelets, which spread out with the speed of the wave; the forward envelope of these wavelets at a later time is the new wavefront. When light enters glass (refractive index n): the **frequency stays the same**, since it is set by the source; the **speed decreases** to v = c/n; so the **wavelength decreases** to λ/n, because λ = v/ν."
        },
        {
          q: "What are coherent sources? Why do two independent sodium lamps not produce a steady interference pattern?",
          a: "Coherent sources emit waves of the **same frequency with a constant phase difference**. In an ordinary lamp, light is emitted by a huge number of atoms acting independently, so the phase difference between two separate lamps **changes rapidly and randomly**. The bright and dark fringes shift so fast that the eye sees only the average intensity I₁ + I₂, i.e. uniform illumination. In Young's experiment both slits are lit by the same source, so they are coherent."
        },
        {
          q: "Give three differences between the interference pattern in Young's experiment and the diffraction pattern of a single slit.",
          a: "(i) Interference is due to superposition of waves from **two coherent sources**; diffraction is due to superposition of **secondary wavelets from different parts of the same wavefront**. (ii) Interference fringes are **equally wide**; in diffraction the central maximum is **twice as wide** as the others. (iii) Interference bright fringes are of nearly **equal intensity**; in diffraction the intensity of successive maxima **falls off rapidly**."
        }
      ],
      quiz: [
        {
          q: "In Young's double-slit experiment the slit separation is halved and the distance to the screen is doubled. The fringe width becomes:",
          options: ["4 times", "2 times", "unchanged", "half"],
          answer: 0,
          explain: "β = λD/d. Doubling D and halving d multiplies β by 2 × 2 = **4**."
        },
        {
          q: "Young's double-slit apparatus is immersed in water (n = 4/3). The fringe width:",
          options: ["becomes 4/3 times", "becomes 3/4 times", "remains the same", "becomes 9/16 times"],
          answer: 1,
          explain: "In water λ becomes λ/n, so β = λD/(nd) becomes **3/4** of its value in air."
        },
        {
          q: "Unpolarised light of intensity I₀ passes through two polaroids whose axes are at 60° to each other. The final intensity is:",
          options: ["I₀/4", "I₀/2", "3I₀/8", "I₀/8"],
          answer: 3,
          explain: "After the first polaroid: I₀/2. Malus's law: (I₀/2) × cos²60° = (I₀/2) × ¼ = **I₀/8**."
        },
        {
          q: "Two coherent sources have intensities in the ratio 9 : 1. The ratio I_max : I_min in their interference pattern is:",
          options: ["9 : 1", "3 : 1", "4 : 1", "16 : 1"],
          answer: 2,
          explain: "Amplitude ratio = √9 : √1 = 3 : 1. I_max : I_min = (3 + 1)² : (3 − 1)² = 16 : 4 = **4 : 1**."
        },
        {
          q: "In single-slit diffraction, if the slit width is increased, the width of the central maximum:",
          options: ["increases", "decreases", "remains the same", "first increases, then decreases"],
          answer: 1,
          explain: "Angular width = 2λ/a, so a wider slit gives a **narrower** central maximum."
        },
        {
          q: "When light passes from air into glass, which quantity remains unchanged?",
          options: ["Wavelength", "Speed", "Frequency", "Wave number"],
          answer: 2,
          explain: "**Frequency** is set by the source and does not change on refraction; speed, wavelength and wave number (2π/λ) all change."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "dual-nature-of-radiation-and-matter",
      title: "Dual Nature of Radiation and Matter",
      section: "Modern Physics",
      summary: "Light and matter both show wave as well as particle properties. This chapter covers electron emission, the photoelectric effect and its laws, Einstein's photoelectric equation and photons, and de Broglie's matter waves.",
      notes: [
        {
          heading: "Electron Emission",
          points: [
            "Free electrons cannot normally leave a metal; the minimum energy needed is the **work function** φ₀, usually given in electron volts (1 eV = 1.6 × 10⁻¹⁹ J).",
            "Work function depends on the metal and its surface; caesium has a low value (2.14 eV) and platinum a high one (5.65 eV).",
            "The energy can be supplied by heating (**thermionic emission**), by a very strong electric field of about 10⁸ V m⁻¹ (**field emission**), or by suitable light (**photoelectric emission**).",
            "The photoelectric effect was discovered by Hertz (1887) and studied further by Hallwachs and Lenard."
          ]
        },
        {
          heading: "Experimental Laws of the Photoelectric Effect",
          points: [
            "For each metal there is a **threshold frequency** ν₀ below which no electrons are emitted, however intense the light.",
            "Above ν₀, the **photocurrent is proportional to the intensity** of light.",
            "The **stopping potential** V₀, and so the maximum kinetic energy, is **independent of intensity** but increases linearly with frequency.",
            "Emission is practically **instantaneous** (within about 10⁻⁹ s), even for very dim light.",
            "Maximum kinetic energy K_max = eV₀, where V₀ is the negative collector potential that just stops the fastest photoelectrons."
          ]
        },
        {
          heading: "Failure of the Wave Theory",
          points: [
            "Wave theory predicts that the maximum kinetic energy should increase with **intensity**; experiments show it depends only on frequency.",
            "Wave theory predicts emission at **any frequency** if the light is intense enough; experiments show a threshold frequency.",
            "Wave theory predicts a **time lag** while an electron gathers enough energy from a weak wave; experiments show emission is instantaneous."
          ]
        },
        {
          heading: "Einstein's Equation and Photons",
          points: [
            "Light consists of **photons**, each of energy **E = hν** and momentum **p = h/λ**; h = 6.63 × 10⁻³⁴ J s.",
            "One photon is absorbed by one electron: **K_max = hν − φ₀ = eV₀**.",
            "Threshold frequency **ν₀ = φ₀/h**; no emission if hν is less than φ₀.",
            "V₀ = (h/e)ν − φ₀/e: the graph of V₀ against ν is a **straight line of slope h/e**, the same for all metals; it meets the ν-axis at ν₀. Millikan's experiments confirmed this.",
            "Greater intensity means **more photons** per second, hence more photoelectrons (larger current) but not more energy per electron.",
            "Photons travel at c in vacuum, have **zero rest mass** and no charge; in photon–electron collisions energy and momentum are conserved."
          ]
        },
        {
          heading: "Matter Waves",
          points: [
            "**de Broglie hypothesis**: a moving particle has a wave associated with it, of wavelength **λ = h/p = h/(mv)**.",
            "In terms of kinetic energy: λ = h/√(2mK). For an electron accelerated through V volts: **λ = 1.227/√V nm**.",
            "For everyday objects λ is far too small to detect; for electrons it is comparable to the spacing of atoms in crystals.",
            "Radiation and matter both have a **dual nature**: wave nature appears in interference and diffraction, particle nature in the exchange of energy and momentum."
          ]
        }
      ],
      formulas: [
        "Electron volt: 1 eV = 1.6 × 10⁻¹⁹ J",
        "Photon energy: E = hν = hc/λ; hc ≈ 1240 eV nm",
        "Photon momentum: p = hν/c = h/λ",
        "Photons emitted per second by a source of power P: N = P/(hν)",
        "Work function: φ₀ = hν₀ = hc/λ₀",
        "Einstein's equation: K_max = hν − φ₀ = h(ν − ν₀)",
        "Stopping potential: eV₀ = K_max = ½mv²_max",
        "V₀ = (h/e)ν − φ₀/e (slope of V₀–ν graph = h/e)",
        "de Broglie wavelength: λ = h/p = h/(mv)",
        "In terms of kinetic energy: λ = h/√(2mK)",
        "Charge q accelerated through V: λ = h/√(2mqV)",
        "Electron accelerated through V volts: λ = 1.227/√V nm"
      ],
      terms: [
        { term: "Work function", meaning: "**Minimum energy** an electron needs to escape from a metal surface, φ₀ (usually in eV)." },
        { term: "Threshold frequency", meaning: "**Minimum frequency** of light that can cause photoelectric emission from a metal, ν₀ = φ₀/h." },
        { term: "Stopping potential", meaning: "Negative collector potential that **just stops the most energetic photoelectrons**; eV₀ = K_max." },
        { term: "Photon", meaning: "A **quantum of light** with energy hν, momentum h/λ and zero rest mass." },
        { term: "de Broglie wavelength", meaning: "Wavelength associated with a moving particle, **λ = h/(mv)**." },
        { term: "Saturation current", meaning: "Maximum photocurrent, reached when **all emitted photoelectrons are collected**; proportional to intensity." }
      ],
      examples: [
        {
          q: "The work function of caesium is 2.14 eV. Light of frequency 6.0 × 10¹⁴ Hz falls on it. Find the maximum kinetic energy of the photoelectrons and the stopping potential. (h = 6.63 × 10⁻³⁴ J s)",
          steps: [
            "Photon energy hν = 6.63 × 10⁻³⁴ × 6.0 × 10¹⁴ = 3.98 × 10⁻¹⁹ J",
            "In eV: 3.98 × 10⁻¹⁹/(1.6 × 10⁻¹⁹) ≈ 2.49 eV",
            "K_max = hν − φ₀ = 2.49 − 2.14 ≈ 0.35 eV",
            "Stopping potential V₀ = K_max/e ≈ 0.35 V"
          ],
          answer: "K_max ≈ 0.35 eV; V₀ ≈ 0.35 V"
        },
        {
          q: "Find the de Broglie wavelength of an electron accelerated through a potential difference of 100 V.",
          steps: [
            "For an electron, λ = h/√(2meV) = 1.227/√V nm",
            "λ = 1.227/√100 nm = 1.227/10 nm",
            "λ ≈ 0.123 nm, comparable to the spacing of atoms in a crystal"
          ],
          answer: "λ ≈ 0.123 nm (1.23 × 10⁻¹⁰ m)"
        }
      ],
      qa: [
        {
          q: "How do (a) the intensity and (b) the frequency of the incident light affect the photocurrent and the stopping potential?",
          a: "(a) For light above the threshold frequency, increasing the **intensity increases the photocurrent** (saturation current) in proportion, because more photons eject more electrons; the **stopping potential does not change**. (b) Increasing the **frequency** (above ν₀) **increases the stopping potential** linearly, V₀ = (h/e)ν − φ₀/e, because each photon carries more energy. Below ν₀ there is no photocurrent at all."
        },
        {
          q: "Using Einstein's photoelectric equation, explain (i) the existence of a threshold frequency, (ii) why the maximum kinetic energy of photoelectrons does not depend on intensity.",
          a: "Einstein's equation: K_max = hν − φ₀. (i) K_max cannot be negative, so emission needs hν ≥ φ₀, i.e. **ν ≥ ν₀ = φ₀/h**. Below this frequency no single photon has enough energy to free an electron, however many photons arrive. (ii) Each electron absorbs **one photon**, so its maximum energy depends only on hν and φ₀. Intensity changes only the **number of photons**, so it changes the number of photoelectrons but not K_max."
        },
        {
          q: "An electron and a proton have the same kinetic energy. Which has the longer de Broglie wavelength? Explain.",
          a: "λ = h/p = h/√(2mK). For the same K, λ ∝ 1/√m. The electron's mass is about 1836 times smaller than the proton's, so the **electron has the longer wavelength**, about √1836 ≈ 43 times longer."
        }
      ],
      quiz: [
        {
          q: "In a photoelectric experiment, the stopping potential depends on:",
          options: ["the intensity of the incident light", "the frequency of the incident light", "the area of the emitter plate", "the distance of the light source"],
          answer: 1,
          explain: "eV₀ = hν − φ₀, so V₀ depends on the **frequency** of the light (and the metal), not on its intensity."
        },
        {
          q: "The energy of a photon of wavelength 500 nm is about (hc ≈ 1240 eV nm):",
          options: ["1.24 eV", "4.96 eV", "2.48 eV", "0.248 eV"],
          answer: 2,
          explain: "E = hc/λ = 1240/500 = **2.48 eV**."
        },
        {
          q: "The slope of the graph of stopping potential V₀ against frequency ν is:",
          options: ["h", "e/h", "φ₀/e", "h/e"],
          answer: 3,
          explain: "V₀ = (h/e)ν − φ₀/e, a straight line of slope **h/e**, the same for every metal."
        },
        {
          q: "Light with photon energy 5 eV falls on a metal of work function 2 eV. The stopping potential is:",
          options: ["3 V", "7 V", "2.5 V", "5 V"],
          answer: 0,
          explain: "K_max = 5 − 2 = 3 eV, so eV₀ = 3 eV and **V₀ = 3 V**."
        },
        {
          q: "If the accelerating potential of an electron is increased four times, its de Broglie wavelength becomes:",
          options: ["half", "four times", "twice", "one-fourth"],
          answer: 0,
          explain: "λ = 1.227/√V nm ∝ 1/√V. Making V four times larger divides λ by √4 = 2: λ becomes **half**."
        },
        {
          q: "A proton and an alpha particle are accelerated through the same potential difference. The ratio of their de Broglie wavelengths λₚ : λ_α is:",
          options: ["√2 : 1", "2 : 1", "2√2 : 1", "4 : 1"],
          answer: 2,
          explain: "λ = h/√(2mqV) ∝ 1/√(mq). For the alpha particle m = 4mₚ and q = 2e, so λₚ/λ_α = √(4 × 2) = √8 = **2√2**."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "atoms",
      title: "Atoms",
      section: "Modern Physics",
      summary: "This chapter traces how our model of the atom developed: Rutherford's nuclear model from alpha-particle scattering and its limitations, Bohr's model of the hydrogen atom with its energy levels and line spectrum, and de Broglie's explanation of Bohr's quantisation condition.",
      notes: [
        {
          heading: "Alpha-Particle Scattering",
          points: [
            "Geiger and Marsden, at Rutherford's suggestion, directed **5.5 MeV alpha particles** from a radioactive bismuth source at a thin gold foil.",
            "Most alpha particles passed **undeflected**; a few were scattered through large angles, and about **1 in 8000** was deflected by more than 90°.",
            "Conclusions: the atom is mostly **empty space**; its positive charge and nearly all its mass are concentrated in a tiny **nucleus** (about 10⁻¹⁵ m to 10⁻¹⁴ m across, while the atom is about 10⁻¹⁰ m).",
            "**Impact parameter** b: perpendicular distance of the initial velocity of the alpha particle from the centre of the nucleus. Small b gives large scattering; for b = 0 (head-on) the particle bounces straight back.",
            "**Distance of closest approach** (head-on): r₀ = 2kZe²/K, where K is the initial kinetic energy; it sets an upper limit on the size of the nucleus."
          ]
        },
        {
          heading: "Rutherford's Model and Its Limitations",
          points: [
            "Electrons revolve around the nucleus like planets, the electrostatic attraction supplying the centripetal force: mv²/r = ke²/r².",
            "Total energy of the electron in hydrogen: E = −ke²/(2r); the negative sign shows that the electron is bound.",
            "Limitation 1: an orbiting electron is accelerating, so by classical theory it should **radiate energy continuously** and spiral into the nucleus; atoms would be unstable.",
            "Limitation 2: the emitted radiation would have a **continuous spectrum**, but atoms actually emit **line spectra**."
          ]
        },
        {
          heading: "Bohr's Postulates",
          points: [
            "**Postulate 1**: electrons revolve only in certain **stationary orbits** in which they do not radiate energy.",
            "**Postulate 2**: the allowed orbits are those in which the angular momentum is an integral multiple of h/2π: **mvr = nh/2π**.",
            "**Postulate 3**: an electron emits (or absorbs) a photon only when it jumps between orbits: **hν = Eᵢ − E_f**."
          ]
        },
        {
          heading: "Bohr Model of Hydrogen",
          points: [
            "Radius of the nth orbit: **rₙ = n²a₀**, where a₀ = 0.53 Å (5.3 × 10⁻¹¹ m) is the **Bohr radius**; r ∝ n².",
            "Speed in the nth orbit vₙ ∝ 1/n; in the first orbit it is about 2.2 × 10⁶ m s⁻¹.",
            "Energy of the nth level: **Eₙ = −13.6/n² eV**: E₁ = −13.6 eV, E₂ = −3.4 eV, E₃ = −1.51 eV, E₄ = −0.85 eV.",
            "Kinetic energy = −E and potential energy = 2E; in the ground state KE = 13.6 eV and PE = −27.2 eV.",
            "**Ionisation energy** of hydrogen (from the ground state) is 13.6 eV; the first excitation energy (n = 1 to 2) is 10.2 eV."
          ]
        },
        {
          heading: "Hydrogen Line Spectrum",
          points: [
            "Each element emits a characteristic **line emission spectrum** and absorbs the same wavelengths (dark lines) in its **absorption spectrum**.",
            "**Rydberg formula**: 1/λ = R(1/n₁² − 1/n₂²), with n₂ > n₁ and R = 1.097 × 10⁷ m⁻¹.",
            "**Lyman series** (n₁ = 1): ultraviolet. **Balmer series** (n₁ = 2): visible. **Paschen** (n₁ = 3), **Brackett** (n₁ = 4) and **Pfund** (n₁ = 5): infrared.",
            "The Balmer Hα line (3 → 2) is red, λ ≈ 656.3 nm. The **series limit** (n₂ → ∞) gives the shortest wavelength in a series."
          ]
        },
        {
          heading: "de Broglie's Explanation and Limitations",
          points: [
            "An electron in a stationary orbit forms a **standing wave**, so the circumference must hold a whole number of wavelengths: **2πrₙ = nλ**.",
            "With λ = h/(mv): 2πrₙ = nh/(mv), i.e. **mvrₙ = nh/2π**, which is Bohr's second postulate.",
            "Bohr's model works only for **hydrogen-like (single-electron) atoms**; it fails for atoms with more electrons.",
            "It cannot explain the **relative intensities** of spectral lines; a full description needs quantum mechanics."
          ]
        }
      ],
      formulas: [
        "Distance of closest approach: r₀ = (1/4πε₀)(2Ze²/K)",
        "Electron orbit: mv²/r = (1/4πε₀) e²/r²",
        "Total energy in an orbit: E = −e²/(8πε₀r)",
        "Bohr's quantisation: L = mvr = nh/2π",
        "Orbit radius: rₙ = n²h²ε₀/(πme²) = 0.53 n² Å",
        "Orbital speed: vₙ = e²/(2ε₀nh) ≈ (2.2 × 10⁶/n) m s⁻¹",
        "Energy levels: Eₙ = −me⁴/(8ε₀²h²n²) = −13.6/n² eV",
        "Kinetic and potential energy: KE = −Eₙ; PE = 2Eₙ",
        "Photon emitted: hν = Eᵢ − E_f",
        "Rydberg formula: 1/λ = R(1/n₁² − 1/n₂²), R = 1.097 × 10⁷ m⁻¹",
        "Standing-wave condition: 2πrₙ = nλ"
      ],
      terms: [
        { term: "Impact parameter", meaning: "Perpendicular distance of the initial velocity of an alpha particle from the **centre of the nucleus**." },
        { term: "Distance of closest approach", meaning: "Minimum distance from the nucleus reached by an alpha particle in a **head-on collision**, when all its KE has become PE." },
        { term: "Stationary orbit", meaning: "An allowed Bohr orbit in which the electron **does not radiate energy**." },
        { term: "Ionisation energy", meaning: "Minimum energy needed to **remove an electron** from the ground state of an atom; 13.6 eV for hydrogen." },
        { term: "Bohr radius", meaning: "Radius of the first orbit of hydrogen, **a₀ ≈ 0.53 Å**." },
        { term: "Spectral series", meaning: "Group of lines from transitions that **end on the same lower level**, e.g. the Balmer series ends on n = 2." }
      ],
      examples: [
        {
          q: "Find the energy and wavelength of the photon emitted when the electron in a hydrogen atom jumps from n = 4 to n = 2. (hc ≈ 1240 eV nm)",
          steps: [
            "E₄ = −13.6/16 = −0.85 eV; E₂ = −13.6/4 = −3.40 eV",
            "Photon energy = E₄ − E₂ = −0.85 − (−3.40) = 2.55 eV",
            "λ = hc/E = 1240/2.55 ≈ 486 nm",
            "This is the blue-green Hβ line of the Balmer series"
          ],
          answer: "E = 2.55 eV; λ ≈ 486 nm (visible, Balmer series)"
        },
        {
          q: "An alpha particle of kinetic energy 7.7 MeV moves head-on towards a gold nucleus (Z = 79). Find the distance of closest approach. (1/4πε₀ = 9 × 10⁹ N m² C⁻², e = 1.6 × 10⁻¹⁹ C)",
          steps: [
            "At closest approach all the KE becomes PE: K = (1/4πε₀)(2e)(Ze)/r₀",
            "r₀ = (9 × 10⁹ × 2 × 79 × (1.6 × 10⁻¹⁹)²)/(7.7 × 10⁶ × 1.6 × 10⁻¹⁹ J)",
            "Numerator = 9 × 10⁹ × 158 × 2.56 × 10⁻³⁸ ≈ 3.64 × 10⁻²⁶; denominator = 1.232 × 10⁻¹²",
            "r₀ ≈ 2.95 × 10⁻¹⁴ m"
          ],
          answer: "r₀ ≈ 3.0 × 10⁻¹⁴ m, about 30 fm"
        }
      ],
      qa: [
        {
          q: "State Bohr's postulates for the hydrogen atom.",
          a: "(i) An electron can revolve only in certain **stationary orbits** around the nucleus without radiating energy. (ii) The stationary orbits are those in which the **angular momentum is an integral multiple of h/2π**: mvr = nh/2π, n = 1, 2, 3, … (iii) An electron emits or absorbs energy only when it **jumps from one orbit to another**; the photon emitted has energy hν = Eᵢ − E_f."
        },
        {
          q: "What were the main observations and conclusions of the Geiger–Marsden alpha-particle scattering experiment?",
          a: "Observations: (i) most alpha particles passed straight through the gold foil; (ii) a few were deflected through large angles; (iii) about 1 in 8000 was deflected by more than 90°. Conclusions: (i) most of the atom is **empty space**; (ii) the positive charge and almost all the mass are concentrated in a very small central **nucleus**; (iii) large deflections happen only for alpha particles passing very close to the nucleus (small impact parameter), where the Coulomb repulsion is very strong."
        },
        {
          q: "How does de Broglie's hypothesis explain Bohr's quantisation condition?",
          a: "de Broglie proposed that the electron in an orbit behaves as a wave. A stable orbit corresponds to a **standing wave**, which requires the circumference to contain a whole number of wavelengths: 2πrₙ = nλ. Using λ = h/(mvₙ), 2πrₙ = nh/(mvₙ), so **mvₙrₙ = nh/2π**. This is exactly Bohr's quantisation of angular momentum."
        }
      ],
      quiz: [
        {
          q: "The energy of the electron in the n = 3 orbit of hydrogen is:",
          options: ["−1.51 eV", "−4.53 eV", "−3.4 eV", "−0.85 eV"],
          answer: 0,
          explain: "Eₙ = −13.6/n² = −13.6/9 ≈ **−1.51 eV**. (−4.53 eV comes from dividing by n instead of n².)"
        },
        {
          q: "In hydrogen, the ratio of the radius of the second Bohr orbit to that of the first is:",
          options: ["2 : 1", "1 : 4", "4 : 1", "√2 : 1"],
          answer: 2,
          explain: "rₙ ∝ n², so r₂ : r₁ = 2² : 1² = **4 : 1**."
        },
        {
          q: "The spectral series of hydrogen that lies in the visible region is the:",
          options: ["Lyman series", "Balmer series", "Paschen series", "Pfund series"],
          answer: 1,
          explain: "The **Balmer series** (transitions to n = 2) lies mainly in the visible region. Lyman is ultraviolet; Paschen and Pfund are infrared."
        },
        {
          q: "The total energy of the electron in the ground state of hydrogen is −13.6 eV. Its potential energy is:",
          options: ["−13.6 eV", "+13.6 eV", "−6.8 eV", "−27.2 eV"],
          answer: 3,
          explain: "PE = 2E = 2 × (−13.6) = **−27.2 eV**, and KE = −E = +13.6 eV."
        },
        {
          q: "In the Geiger–Marsden experiment most alpha particles passed through the gold foil undeflected. This shows that:",
          options: ["the nucleus is negatively charged", "most of the atom is empty space", "electrons are very heavy", "positive charge is spread uniformly through the atom"],
          answer: 1,
          explain: "Most alpha particles met nothing to deflect them, so **most of the atom is empty space**."
        },
        {
          q: "The shortest wavelength in the Lyman series of hydrogen is about (R = 1.097 × 10⁷ m⁻¹):",
          options: ["121.6 nm", "364.6 nm", "656.3 nm", "91.2 nm"],
          answer: 3,
          explain: "Series limit: n₂ → ∞, n₁ = 1, so 1/λ = R and λ = 1/(1.097 × 10⁷) m ≈ **91.2 nm**. 121.6 nm is the longest Lyman line (2 → 1)."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "nuclei",
      title: "Nuclei",
      section: "Modern Physics",
      summary: "The nucleus is a tiny, very dense core of protons and neutrons held together by the nuclear force. This chapter covers the composition and size of nuclei, mass defect and binding energy, the binding energy curve, properties of nuclear force, and the energy released in fission and fusion.",
      notes: [
        {
          heading: "Composition of the Nucleus",
          points: [
            "Atomic masses are measured in **atomic mass units**: 1 u = 1/12 of the mass of a carbon-12 atom = 1.660539 × 10⁻²⁷ kg.",
            "A nucleus contains Z **protons** and N **neutrons** (together, nucleons); **mass number A = Z + N**. Gold is written ¹⁹⁷₇₉Au (A above, Z below).",
            "The neutron was discovered by **Chadwick** (1932); it is neutral, with mass 1.00866 u, slightly more than the proton's 1.00727 u.",
            "**Isotopes**: same Z, different A (¹H, ²H, ³H). **Isobars**: same A, different Z (³H and ³He). **Isotones**: same N, different Z (¹⁹⁸₈₀Hg and ¹⁹⁷₇₉Au)."
          ]
        },
        {
          heading: "Size and Density of the Nucleus",
          points: [
            "Nuclear radius **R = R₀A^(1/3)**, with R₀ ≈ 1.2 × 10⁻¹⁵ m. Nuclear sizes are measured in fermi: 1 fm = 10⁻¹⁵ m.",
            "Volume ∝ R³ ∝ A, so **nuclear density is the same for all nuclei**, about 2.3 × 10¹⁷ kg m⁻³.",
            "This is enormous compared with ordinary matter (water: 10³ kg m⁻³), because an atom is mostly empty space."
          ]
        },
        {
          heading: "Mass–Energy and Binding Energy",
          points: [
            "Einstein's relation **E = mc²**: mass is a form of energy. 1 u of mass is equivalent to **931.5 MeV**.",
            "**Mass defect**: a nucleus has less mass than its separate nucleons: ΔM = [Zmₚ + (A − Z)mₙ] − M.",
            "**Binding energy** E_b = ΔMc² is the energy needed to separate a nucleus into free nucleons (equal to the energy released when it forms).",
            "**Binding energy per nucleon** E_bn = E_b/A measures how **stable** a nucleus is.",
            "When atomic masses are given, use the mass of a hydrogen atom m_H in place of mₚ, so that electron masses cancel."
          ]
        },
        {
          heading: "Binding Energy Curve",
          points: [
            "E_bn is nearly constant, about **8 MeV**, for 30 < A < 170; this shows that nuclear force **saturates** (each nucleon interacts only with its close neighbours).",
            "E_bn reaches a maximum of about **8.75 MeV at A = 56** (iron), the most stable nuclei.",
            "E_bn is lower for light nuclei (A < 30) and for heavy nuclei (about 7.6 MeV at A = 238).",
            "So energy is released when a heavy nucleus **splits** (fission) or light nuclei **join** (fusion), because the products are more tightly bound."
          ]
        },
        {
          heading: "Nuclear Force",
          points: [
            "The nuclear force is much **stronger** than the Coulomb force, and it holds protons together inside the nucleus despite their repulsion.",
            "It is **short-range**: it falls rapidly to zero beyond a few femtometres.",
            "It is **attractive** for separations greater than about 0.8 fm and strongly **repulsive** for smaller separations.",
            "It is nearly **charge-independent**: the n–n, n–p and p–p nuclear forces are about the same."
          ]
        },
        {
          heading: "Fission and Fusion",
          points: [
            "**Fission**: a heavy nucleus absorbs a neutron and splits into two medium nuclei, e.g. ²³⁵₉₂U + ¹₀n → ²³⁶₉₂U → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n.",
            "About **200 MeV** is released per fission of ²³⁵U; the extra neutrons can cause a **chain reaction**, which is controlled in nuclear reactors.",
            "**Fusion**: light nuclei combine into a heavier nucleus, e.g. ²₁H + ²₁H → ³₂He + n + 3.27 MeV.",
            "Fusion needs extremely high temperatures so that nuclei can overcome Coulomb repulsion (**thermonuclear fusion**); it powers the **Sun and stars**, where hydrogen is converted into helium."
          ]
        }
      ],
      formulas: [
        "Atomic mass unit: 1 u = 1.660539 × 10⁻²⁷ kg ≈ 931.5 MeV/c²",
        "Mass number: A = Z + N",
        "Nuclear radius: R = R₀A^(1/3), R₀ ≈ 1.2 fm",
        "Nuclear density: ρ ≈ 2.3 × 10¹⁷ kg m⁻³ (same for all nuclei)",
        "Mass–energy relation: E = mc²",
        "Mass defect: ΔM = [Zmₚ + (A − Z)mₙ] − M",
        "Binding energy: E_b = ΔMc² = ΔM (in u) × 931.5 MeV",
        "Binding energy per nucleon: E_bn = E_b/A",
        "Q-value of a reaction: Q = (mass of reactants − mass of products) × c²",
        "Energy per fission of ²³⁵U ≈ 200 MeV",
        "1 MeV = 1.6 × 10⁻¹³ J"
      ],
      terms: [
        { term: "Atomic mass unit", meaning: "**1/12 of the mass of a carbon-12 atom**, 1.660539 × 10⁻²⁷ kg, equivalent to 931.5 MeV." },
        { term: "Isotopes", meaning: "Nuclides with the **same atomic number Z** but different mass numbers A." },
        { term: "Isobars", meaning: "Nuclides with the **same mass number A** but different atomic numbers Z." },
        { term: "Mass defect", meaning: "Difference between the **total mass of the free nucleons** and the actual mass of the nucleus." },
        { term: "Binding energy per nucleon", meaning: "**Average energy needed to remove a nucleon** from a nucleus; a measure of its stability." },
        { term: "Nuclear fission", meaning: "Splitting of a **heavy nucleus** into two lighter nuclei, with release of energy." }
      ],
      examples: [
        {
          q: "Find the binding energy and the binding energy per nucleon of ¹⁶₈O. Mass of ¹⁶O atom = 15.99491 u, m_H = 1.00783 u, mₙ = 1.00867 u, 1 u = 931.5 MeV/c².",
          steps: [
            "Mass of 8 hydrogen atoms = 8 × 1.00783 = 8.06264 u",
            "Mass of 8 neutrons = 8 × 1.00867 = 8.06936 u",
            "ΔM = 8.06264 + 8.06936 − 15.99491 = 0.13709 u",
            "E_b = 0.13709 × 931.5 ≈ 127.7 MeV",
            "E_bn = 127.7/16 ≈ 7.98 MeV per nucleon"
          ],
          answer: "E_b ≈ 127.7 MeV; about 7.98 MeV per nucleon"
        },
        {
          q: "Each fission of ²³⁵U releases about 200 MeV. How much energy is released by the complete fission of 1 kg of ²³⁵U? (N_A = 6.02 × 10²³ mol⁻¹)",
          steps: [
            "Number of nuclei in 1 kg = (1000/235) × 6.02 × 10²³ ≈ 2.56 × 10²⁴",
            "Energy per fission = 200 MeV = 200 × 1.6 × 10⁻¹³ J = 3.2 × 10⁻¹¹ J",
            "Total energy = 2.56 × 10²⁴ × 3.2 × 10⁻¹¹ ≈ 8.2 × 10¹³ J"
          ],
          answer: "About 8.2 × 10¹³ J"
        }
      ],
      qa: [
        {
          q: "Describe how the binding energy per nucleon varies with mass number, and explain how this shows that energy is released in fission and fusion.",
          a: "E_bn rises steeply for light nuclei, reaches a maximum of about **8.75 MeV near A = 56**, stays nearly constant (about 8 MeV) for 30 < A < 170, and falls slowly to about 7.6 MeV at A = 238. **Fission**: a heavy nucleus (A ≈ 240, E_bn ≈ 7.6 MeV) splitting into two nuclei of A ≈ 120 (E_bn ≈ 8.5 MeV) makes the nucleons more tightly bound, so about 0.9 MeV per nucleon, roughly 200 MeV per fission, is released. **Fusion**: light nuclei with low E_bn join to form a more tightly bound nucleus, again releasing energy."
        },
        {
          q: "State any four properties of the nuclear force.",
          a: "(i) It is the **strongest** of the forces acting in the nucleus, much stronger than the Coulomb force. (ii) It is **short-range**, becoming negligible beyond a few femtometres. (iii) It is **attractive** for separations above about 0.8 fm and **repulsive** below it. (iv) It is nearly **charge-independent**: n–n, n–p and p–p forces are about equal. (v) It **saturates**: a nucleon interacts only with its nearest neighbours."
        },
        {
          q: "Show that the density of nuclear matter is the same for all nuclei.",
          a: "Mass of a nucleus ≈ Am, where m is the mass of a nucleon. Radius R = R₀A^(1/3), so volume V = (4/3)πR₀³A. Density ρ = Am ÷ [(4/3)πR₀³A] = **3m/(4πR₀³)**, which does not contain A. So all nuclei have the same density, about 2.3 × 10¹⁷ kg m⁻³."
        }
      ],
      quiz: [
        {
          q: "The ratio of the nuclear radii of ²⁷Al and ¹²⁵Te is:",
          options: ["27 : 125", "9 : 25", "3 : 5", "5 : 3"],
          answer: 2,
          explain: "R ∝ A^(1/3): 27^(1/3) : 125^(1/3) = **3 : 5**."
        },
        {
          q: "The density of nuclear matter:",
          options: ["increases with mass number", "decreases with mass number", "is about equal to that of water", "is the same for all nuclei"],
          answer: 3,
          explain: "Mass ∝ A and volume ∝ R³ ∝ A, so the density is **the same for all nuclei** (about 2.3 × 10¹⁷ kg m⁻³)."
        },
        {
          q: "A mass defect of 0.1 u corresponds to a binding energy of about:",
          options: ["93.15 MeV", "931.5 MeV", "9.315 MeV", "0.1 MeV"],
          answer: 0,
          explain: "1 u ≡ 931.5 MeV, so 0.1 u ≡ **93.15 MeV**."
        },
        {
          q: "Isotones are nuclides having the same:",
          options: ["mass number", "number of neutrons", "atomic number", "binding energy"],
          answer: 1,
          explain: "Isotones have the same **number of neutrons** N, e.g. ¹⁹⁸Hg and ¹⁹⁷Au (N = 118). Same Z means isotopes; same A means isobars."
        },
        {
          q: "Which nucleus has the highest binding energy per nucleon?",
          options: ["⁴He", "²³⁸U", "⁵⁶Fe", "²H"],
          answer: 2,
          explain: "The binding energy curve peaks near A = 56 (about 8.75 MeV), so **⁵⁶Fe** is among the most stable nuclei."
        },
        {
          q: "The nuclear force between two nucleons is:",
          options: ["long-range and charge-dependent", "repulsive at all distances", "weaker than the electrostatic force between them", "short-range and nearly charge-independent"],
          answer: 3,
          explain: "Nuclear force is **short-range** (a few fm) and acts almost equally between n–n, n–p and p–p pairs."
        }
      ]
    },

    // ------------------------------------------------------------------
    {
      id: "semiconductor-electronics",
      title: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
      section: "Electronics",
      summary: "Semiconductors are the basis of modern electronics. This chapter covers the classification of solids by resistivity and energy bands, intrinsic and extrinsic semiconductors, the p-n junction, the junction diode and its use as a rectifier.",
      notes: [
        {
          heading: "Classification of Solids",
          points: [
            "By resistivity: **metals** ρ ≈ 10⁻² to 10⁻⁸ Ω m; **semiconductors** ρ ≈ 10⁻⁵ to 10⁶ Ω m; **insulators** ρ ≈ 10¹¹ to 10¹⁹ Ω m.",
            "Elemental semiconductors: **Si and Ge**. Compound semiconductors include inorganic ones such as GaAs, CdS and InP, as well as organic and polymer semiconductors.",
            "In a solid, the energy levels of atoms spread into **energy bands**: the **valence band** and the **conduction band** above it, separated by the **band gap** E_g."
          ]
        },
        {
          heading: "Energy Bands",
          points: [
            "**Metals**: the conduction band is partly filled or overlaps the valence band, so there is no gap and many electrons are free to conduct.",
            "**Insulators**: large band gap (E_g > 3 eV); for diamond E_g ≈ 5.4 eV. Practically no electrons reach the conduction band.",
            "**Semiconductors**: small band gap (E_g < 3 eV); Si ≈ 1.1 eV, Ge ≈ 0.71 eV. At room temperature some electrons cross into the conduction band.",
            "At 0 K a pure semiconductor behaves as an **insulator**."
          ]
        },
        {
          heading: "Intrinsic Semiconductors",
          points: [
            "In pure Si or Ge each atom forms four **covalent bonds**; thermal energy breaks a few bonds and frees electrons.",
            "Each freed electron leaves behind a **hole**, a vacancy with an effective **positive charge** that can move through the crystal.",
            "In an intrinsic semiconductor **nₑ = nₕ = nᵢ**, the intrinsic carrier concentration.",
            "Total current I = Iₑ + Iₕ: under an applied field electrons and holes move in opposite directions, but both carry current in the direction of the field."
          ]
        },
        {
          heading: "Extrinsic Semiconductors",
          points: [
            "**Doping** adds a tiny amount of a suitable impurity (a few parts per million) and greatly increases conductivity.",
            "**n-type**: doped with pentavalent atoms (As, Sb, P), called **donors**; electrons are the majority carriers, nₑ ≫ nₕ.",
            "**p-type**: doped with trivalent atoms (B, Al, In), called **acceptors**; holes are the majority carriers, nₕ ≫ nₑ.",
            "In thermal equilibrium **nₑnₕ = nᵢ²**. A doped crystal as a whole remains **electrically neutral**.",
            "The donor energy level lies just below the conduction band; the acceptor level lies just above the valence band."
          ]
        },
        {
          heading: "The p-n Junction",
          points: [
            "Electrons diffuse from the n-side to the p-side and holes from p to n because of the concentration difference: the **diffusion current**.",
            "This leaves immobile positive donor ions on the n-side and negative acceptor ions on the p-side: the **depletion region**, which has no free carriers.",
            "The ions set up a field from n to p and a **barrier potential** that opposes further diffusion and drives a **drift current** of minority carriers.",
            "In equilibrium the diffusion current equals the drift current, so the net current is zero."
          ]
        },
        {
          heading: "Junction Diode and Rectifier",
          points: [
            "**Forward bias** (p to +, n to −): barrier height and depletion width **decrease**; current rises sharply beyond the **threshold voltage**, about 0.7 V for Si and 0.2 V for Ge.",
            "**Reverse bias**: barrier height and depletion width **increase**; only a tiny reverse current (μA) flows, nearly independent of voltage, until **breakdown**.",
            "Dynamic resistance r_d = ΔV/ΔI. Since a diode conducts in one direction only, it is used as a **rectifier** to convert AC into DC.",
            "**Half-wave rectifier** (one diode): output only in alternate half cycles; output frequency equals the input frequency.",
            "**Full-wave rectifier** (two diodes with a centre-tap transformer): output in both half cycles in the same direction; output frequency is **twice** the input (100 Hz for 50 Hz mains). A **capacitor filter** smooths the output."
          ]
        }
      ],
      formulas: [
        "Intrinsic semiconductor: nₑ = nₕ = nᵢ",
        "Thermal equilibrium: nₑnₕ = nᵢ²",
        "n-type: nₑ ≈ N_D ≫ nₕ; p-type: nₕ ≈ N_A ≫ nₑ (N_D, N_A = donor, acceptor concentrations)",
        "Total current: I = Iₑ + Iₕ",
        "Band gaps: Si ≈ 1.1 eV; Ge ≈ 0.71 eV; diamond ≈ 5.4 eV",
        "Threshold voltage: Si ≈ 0.7 V; Ge ≈ 0.2 V",
        "Dynamic resistance: r_d = ΔV/ΔI",
        "Half-wave rectifier: output frequency = input frequency",
        "Full-wave rectifier: output frequency = 2 × input frequency"
      ],
      terms: [
        { term: "Band gap", meaning: "Energy gap E_g between the **top of the valence band and the bottom of the conduction band**." },
        { term: "Hole", meaning: "Vacancy left by an electron in a covalent bond; it behaves as a **positive charge carrier**." },
        { term: "Doping", meaning: "Adding a **small amount of a suitable impurity** to a pure semiconductor to increase its conductivity." },
        { term: "Depletion region", meaning: "Region near a p-n junction **with no free charge carriers**, containing only immobile ions." },
        { term: "Barrier potential", meaning: "Potential difference across the depletion region that **opposes diffusion** of majority carriers." },
        { term: "Rectifier", meaning: "Circuit that **converts AC into pulsating DC** using diodes." }
      ],
      examples: [
        {
          q: "A pure Si crystal has 5 × 10²⁸ atoms m⁻³. It is doped with arsenic at 1 part per million. If nᵢ = 1.5 × 10¹⁶ m⁻³, find the electron and hole concentrations.",
          steps: [
            "Arsenic is pentavalent, so each As atom donates one electron",
            "nₑ ≈ N_D = 5 × 10²⁸ × 10⁻⁶ = 5 × 10²² m⁻³",
            "nₕ = nᵢ²/nₑ = (1.5 × 10¹⁶)²/(5 × 10²²) = 2.25 × 10³²/(5 × 10²²)",
            "nₕ = 4.5 × 10⁹ m⁻³"
          ],
          answer: "nₑ ≈ 5 × 10²² m⁻³; nₕ ≈ 4.5 × 10⁹ m⁻³ (an n-type semiconductor)"
        },
        {
          q: "For a forward-biased silicon diode, the current increases from 10 mA to 20 mA when the voltage rises from 0.7 V to 0.8 V. Find its dynamic resistance.",
          steps: [
            "ΔV = 0.8 − 0.7 = 0.1 V",
            "ΔI = 20 − 10 = 10 mA = 0.01 A",
            "r_d = ΔV/ΔI = 0.1/0.01 = 10 Ω"
          ],
          answer: "r_d = 10 Ω"
        }
      ],
      qa: [
        {
          q: "Explain how the depletion region and barrier potential are formed in a p-n junction.",
          a: "The n-side has many free electrons and the p-side many holes. Because of this concentration difference, **electrons diffuse** from n to p and **holes diffuse** from p to n. They leave behind **immobile positive donor ions** on the n-side and **negative acceptor ions** on the p-side. This thin layer, empty of free carriers, is the **depletion region**. The ions set up an electric field from n to p, and the resulting potential difference, the **barrier potential**, opposes further diffusion. Equilibrium is reached when the diffusion current equals the opposite drift current."
        },
        {
          q: "Distinguish between n-type and p-type semiconductors.",
          a: "(i) **Dopant**: n-type uses a pentavalent impurity (As, Sb, P); p-type uses a trivalent impurity (B, Al, In). (ii) **Majority carriers**: electrons in n-type; holes in p-type. (iii) **Impurity level**: the donor level lies just below the conduction band in n-type; the acceptor level lies just above the valence band in p-type. (iv) **Concentrations**: nₑ ≫ nₕ in n-type; nₕ ≫ nₑ in p-type. Both are electrically neutral."
        },
        {
          q: "Explain the working of a full-wave rectifier.",
          a: "It uses a **centre-tap transformer** and two diodes D₁ and D₂ connected to the two ends of the secondary; the load is connected between the joined diode outputs and the centre tap. In one half cycle, one end of the secondary is positive, so D₁ is forward biased and conducts while D₂ is reverse biased. In the next half cycle the polarity reverses, so D₂ conducts and D₁ does not. In both half cycles current flows through the load in the **same direction**, giving pulsating DC over the whole cycle, at **twice** the input frequency. A capacitor across the load smooths the output."
        }
      ],
      quiz: [
        {
          q: "To obtain p-type silicon, it should be doped with:",
          options: ["arsenic", "phosphorus", "boron", "antimony"],
          answer: 2,
          explain: "**Boron** is trivalent and creates holes (acceptor). Arsenic, phosphorus and antimony are pentavalent and give n-type."
        },
        {
          q: "When a p-n junction is reverse biased, its depletion region:",
          options: ["becomes wider", "becomes narrower", "disappears", "remains unchanged"],
          answer: 0,
          explain: "Reverse bias pulls majority carriers away from the junction, so the barrier rises and the depletion region **becomes wider**."
        },
        {
          q: "An n-type semiconductor, taken as a whole, is:",
          options: ["negatively charged", "positively charged", "charged according to the doping level", "electrically neutral"],
          answer: 3,
          explain: "Each donor atom is neutral when added; the extra electron is balanced by the donor ion's positive charge, so the crystal is **electrically neutral**."
        },
        {
          q: "A full-wave rectifier is fed with 50 Hz AC mains. The frequency of the output ripple is:",
          options: ["100 Hz", "25 Hz", "50 Hz", "200 Hz"],
          answer: 0,
          explain: "Both half cycles give an output pulse, so there are 2 × 50 = **100** pulses per second."
        },
        {
          q: "In a doped semiconductor nᵢ = 1.5 × 10¹⁶ m⁻³ and nₑ = 4.5 × 10²² m⁻³. The hole concentration is:",
          options: ["1.5 × 10¹⁶ m⁻³", "4.5 × 10²² m⁻³", "5 × 10⁹ m⁻³", "5 × 10¹⁰ m⁻³"],
          answer: 2,
          explain: "nₕ = nᵢ²/nₑ = (2.25 × 10³²)/(4.5 × 10²²) = **5 × 10⁹ m⁻³**."
        },
        {
          q: "The band gap of silicon is about:",
          options: ["0.71 eV", "1.1 eV", "5.4 eV", "3.0 eV"],
          answer: 1,
          explain: "Silicon's band gap is about **1.1 eV**. 0.71 eV is germanium; 5.4 eV is diamond (an insulator)."
        }
      ]
    }
  ]
});
