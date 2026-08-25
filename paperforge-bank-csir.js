/* 🏭 PAPERFORGE — CSIR NET (Physical Sciences) bank v2 (30 Q · PYQ-difficulty · with figures)
   Compact CSIR NET / JRF pattern mock: Part A (General Aptitude), Part B (Core),
   Part C (Advanced). Every question double-solved — no PYQ photocopies.
   Full-length attempt caps (15/20/20) live in the 75-Q mocks; this 30-Q drill
   is attempt-all practice at the same difficulty. */
window.FORGE_BANKS = window.FORGE_BANKS || {};
window.FORGE_BANKS["pf-csir-net"] = {
 "id": "pf-csir-net",
 "label": "🎓 PAPERFORGE — CSIR NET · Physical Sciences mock (A/B/C)",
 "series": "PAPERFORGE",
 "stage": "CSIR",
 "minted": "2026-08-20",
 "aiGenerated": true,
 "note": "AI-GENERATED original CSIR NET mock bank — PYQ-level difficulty with 10 embedded figures. Pattern: Part A aptitude (2 marks), Part B core (3.5 marks), Part C advanced (5 marks with negative; MSQ/NAT no negative). Zero PYQ photocopies.",
 "durationSec": 10800,
 "totalQ": 30,
 "maxScore": 105,
 "figCount": 10,
 "limits": {"A": {"max": 10}, "B": {"max": 10}, "C": {"max": 10}},
 "partCounts": {"A": 10, "B": 10, "C": 10},
 "typeTally": {"MCQ": 24, "MSQ": 2, "NAT": 4},
 "questions": [
  {
   "id": "CSIRA-01", "n": 1, "part": "A", "lane": "aptitude", "sub": "series", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "Find the next term in the series: 2, 3, 8, 27, 112, ___",
   "opts": ["560", "565", "570", "575"],
   "ans": 1,
   "sol": "Pattern: ×1+1, ×2+2, ×3+3, ×4+4, ×5+5 → 112×5+5 = 565.",
   "tags": ["series"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-02", "n": 2, "part": "A", "lane": "aptitude", "sub": "series", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "Find the next term in the series: 3, 10, 29, 66, 127, ___",
   "opts": ["216", "218", "220", "222"],
   "ans": 1,
   "sol": "Terms are n³+2: 1³+2, 2³+2, 3³+2, 4³+2, 5³+2, 6³+2 = 218.",
   "tags": ["series"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-03", "n": 3, "part": "A", "lane": "aptitude", "sub": "numbers", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "Which one is the odd one out: 121, 1331, 14641, 125?",
   "opts": ["121", "1331", "14641", "125"],
   "ans": 3,
   "sol": "121=11², 1331=11³, 14641=11⁴ are powers of 11; 125 = 5³.",
   "tags": ["numbers"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-04", "n": 4, "part": "A", "lane": "aptitude", "sub": "coding", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "In a code every letter is replaced by the NEXT letter of the alphabet (A→B, …, Z→A). TEST is written UFTU. How is CODE written in this code?",
   "opts": ["DPEF", "DQEF", "DPEE", "DPFE"],
   "ans": 0,
   "sol": "C→D, O→P, D→E, E→F ⇒ DPEF.",
   "tags": ["coding"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-05", "n": 5, "part": "A", "lane": "aptitude", "sub": "syllogism", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "Statements: All electrons are fermions. Some fermions are leptons. Conclusions: I. Some electrons are leptons. II. Some fermions are electrons.",
   "opts": ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
   "ans": 1,
   "sol": "All electrons ⊆ fermions ⇒ some fermions are electrons (II follows). There is no link between electrons and leptons, so I does not follow.",
   "tags": ["syllogism"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-06", "n": 6, "part": "A", "lane": "aptitude", "sub": "percentage", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "A trader sells an article at a loss of 20%. Had he sold it for ₹240 more, he would have gained 20%. The cost price (₹) is",
   "opts": ["500", "600", "700", "800"],
   "ans": 1,
   "sol": "Let CP = x. 1.2x − 0.8x = 240 ⇒ 0.4x = 240 ⇒ x = 600.",
   "tags": ["percentage"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-07", "n": 7, "part": "A", "lane": "aptitude", "sub": "work", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "A can finish a job in 10 days and B in 15 days. A works alone for 3 days, then B joins him. How many more days are needed to finish the job?",
   "opts": ["3.5", "4.0", "4.2", "5.0"],
   "ans": 2,
   "sol": "A does 3/10 of the job in 3 days. Together they do 1/10+1/15 = 1/6 per day. Remaining 7/10 needs (7/10)/(1/6) = 4.2 days.",
   "tags": ["work"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-08", "n": 8, "part": "A", "lane": "aptitude", "sub": "probability", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "A bag has 5 red and 3 blue balls. Two balls are drawn at random without replacement. The probability that both are red is",
   "opts": ["5/14", "25/64", "5/28", "10/56"],
   "ans": 0,
   "sol": "P = (5/8) × (4/7) = 20/56 = 5/14.",
   "tags": ["probability"], "correctMarks": 2, "wrongMarks": 0.5
  },
  {
   "id": "CSIRA-09", "n": 9, "part": "A", "lane": "aptitude", "sub": "data interpretation", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "The bar chart shows monthly sales (₹ lakh): Jan 20, Feb 30, Mar 50, Apr 70, May 90. The percentage increase in sales from March to May is",
   "opts": ["60%", "70%", "80%", "90%"],
   "ans": 2,
   "sol": "Increase = (90 − 50)/50 × 100 = 80%.",
   "tags": ["data interpretation"], "correctMarks": 2, "wrongMarks": 0.5,
   "figSvg": "<svg viewBox=\"0 0 420 190\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#22384d\"><line x1=\"40\" y1=\"150\" x2=\"400\" y2=\"150\"/><line x1=\"40\" y1=\"150\" x2=\"40\" y2=\"10\"/></g><text x=\"38\" y=\"8\" fill=\"#7ee7dc\" font-size=\"12\" font-family=\"monospace\">₹ lakh</text><g fill=\"#1f8a80\"><rect x=\"70\" y=\"126\" width=\"44\" height=\"24\"/><rect x=\"140\" y=\"114\" width=\"44\" height=\"36\"/><rect x=\"210\" y=\"90\" width=\"44\" height=\"60\"/><rect x=\"280\" y=\"66\" width=\"44\" height=\"84\"/><rect x=\"350\" y=\"42\" width=\"44\" height=\"108\"/></g><g fill=\"#cfeff2\" font-size=\"12\" font-family=\"monospace\" text-anchor=\"middle\"><text x=\"92\" y=\"121\">20</text><text x=\"162\" y=\"109\">30</text><text x=\"232\" y=\"85\">50</text><text x=\"302\" y=\"61\">70</text><text x=\"372\" y=\"37\">90</text></g><g fill=\"#9fb4c8\" font-size=\"11\" font-family=\"monospace\" text-anchor=\"middle\"><text x=\"92\" y=\"166\">Jan</text><text x=\"162\" y=\"166\">Feb</text><text x=\"232\" y=\"166\">Mar</text><text x=\"302\" y=\"166\">Apr</text><text x=\"372\" y=\"166\">May</text></g></svg>",
   "figCaption": "Monthly sales (₹ lakh), January–May"
  },
  {
   "id": "CSIRA-10", "n": 10, "part": "A", "lane": "aptitude", "sub": "data interpretation", "type": "MCQ", "marks": 2, "diff": "seed",
   "stem": "A college has 540 students. In the pie chart, the sector angle for the Physics stream is 120°. The number of Physics students is",
   "opts": ["120", "150", "180", "200"],
   "ans": 2,
   "sol": "Physics = (120/360) × 540 = 180 students.",
   "tags": ["data interpretation"], "correctMarks": 2, "wrongMarks": 0.5,
   "figSvg": "<svg viewBox=\"0 0 300 230\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(110,110)\"><path d=\"M0,0 L0,-70 A70,70 0 0 1 62,34 Z\" fill=\"#0e7490\"/><path d=\"M0,0 L62,34 A70,70 0 0 1 14,68.6 Z\" fill=\"#14b8a6\"/><path d=\"M0,0 L14,68.6 A70,70 0 0 1 -58,38 Z\" fill=\"#67e8f9\"/><path d=\"M0,0 L-58,38 A70,70 0 0 1 0,-70 Z\" fill=\"#2dd4bf\"/></g><g font-size=\"12\" font-family=\"monospace\"><rect x=\"210\" y=\"40\" width=\"12\" height=\"12\" fill=\"#0e7490\"/><text x=\"228\" y=\"51\" fill=\"#cfeff2\">Physics 120°</text><rect x=\"210\" y=\"64\" width=\"12\" height=\"12\" fill=\"#14b8a6\"/><text x=\"228\" y=\"75\" fill=\"#cfeff2\">Chemistry 110°</text><rect x=\"210\" y=\"88\" width=\"12\" height=\"12\" fill=\"#67e8f9\"/><text x=\"228\" y=\"99\" fill=\"#cfeff2\">Maths 70°</text><rect x=\"210\" y=\"112\" width=\"12\" height=\"12\" fill=\"#2dd4bf\"/><text x=\"228\" y=\"123\" fill=\"#cfeff2\">Others 60°</text></g></svg>",
   "figCaption": "Stream distribution by sector angle"
  },
  {
   "id": "CSIRB-01", "n": 11, "part": "B", "lane": "physics", "sub": "quantum", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `For a particle in a one-dimensional infinite square well of width $L$, the ratio $E_2/E_1$ of the first-excited to the ground-state energy is`,
   "opts": ["2", "4", "8", "16"],
   "ans": 1,
   "sol": `$E_n = n^2\pi^2\hbar^2/(2mL^2)$, so $E_2/E_1 = 4$.`,
   "tags": ["quantum"], "correctMarks": 3.5, "wrongMarks": 0.875,
   "figSvg": "<svg viewBox=\"0 0 340 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"50\" y1=\"30\" x2=\"50\" y2=\"170\" stroke=\"#9fb4c8\" stroke-width=\"3\"/><line x1=\"230\" y1=\"30\" x2=\"230\" y2=\"170\" stroke=\"#9fb4c8\" stroke-width=\"3\"/><line x1=\"50\" y1=\"30\" x2=\"230\" y2=\"30\" stroke=\"#22384d\"/><path d=\"M50 150 Q 140 150 140 60 Q 140 150 230 150\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"2\"/><path d=\"M50 150 Q 90 150 90 60 Q 90 20 90 60 Q 90 150 140 150 Q 185 150 185 60 Q 185 20 185 60 Q 185 150 230 150\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"2\" opacity=\"0.6\"/><text x=\"252\" y=\"150\" fill=\"#9fb4c8\" font-size=\"11\" font-family=\"monospace\">n=1</text><text x=\"252\" y=\"60\" fill=\"#9fb4c8\" font-size=\"11\" font-family=\"monospace\">n=2</text><text x=\"140\" y=\"184\" fill=\"#cfeff2\" font-size=\"12\" font-family=\"monospace\">x = 0&#8239;&#8239;L</text></svg>",
   "figCaption": "Infinite well with the ground and first-excited states"
  },
  {
   "id": "CSIRB-02", "n": 12, "part": "B", "lane": "physics", "sub": "quantum", "type": "NAT", "marks": 3.5, "diff": "core",
   "stem": `The ground-state energy of a quantum harmonic oscillator is $\frac12\hbar\omega$. In units of $\hbar\omega$, this energy is (Enter a decimal.)`,
   "opts": [],
   "ans": "0.5",
   "sol": `$E_0 = \frac12 \hbar\omega$, i.e. $0.5\,\hbar\omega$.`,
   "tags": ["quantum"], "correctMarks": 3.5, "wrongMarks": 0
  },
  {
   "id": "CSIRB-03", "n": 13, "part": "B", "lane": "physics", "sub": "electromagnetism", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `The displacement-current term in Maxwell's equations is proportional to`,
   "opts": [`$\frac{d\Phi_E}{dt}$`, `$\Phi_E$`, `$\frac{d\Phi_B}{dt}$`, `$I$`],
   "ans": 0,
   "sol": `The displacement current is $\varepsilon_0\, d\Phi_E/dt$.`,
   "tags": ["electromagnetism"], "correctMarks": 3.5, "wrongMarks": 0.875
  },
  {
   "id": "CSIRB-04", "n": 14, "part": "B", "lane": "physics", "sub": "electromagnetism", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `The magnetic field at the centre of a circular current loop of radius $R$ carrying current $I$ is`,
   "opts": [`$\frac{\mu_0 I}{2R}$`, `$\frac{\mu_0 I}{4R}$`, `$\frac{\mu_0 I}{R}$`, `$\frac{\mu_0 I}{2\pi R}$`],
   "ans": 0,
   "sol": `Biot–Savart integration over the loop gives $B = \mu_0 I/(2R)$.`,
   "tags": ["electromagnetism"], "correctMarks": 3.5, "wrongMarks": 0.875,
   "figSvg": "<svg viewBox=\"0 0 220 200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"100\" r=\"62\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"3\"/><polygon points=\"168,88 182,100 168,112\" fill=\"#f0b429\"/><circle cx=\"100\" cy=\"100\" r=\"5\" fill=\"#f43f5e\"/><text x=\"84\" y=\"118\" fill=\"#cfeff2\" font-size=\"12\" font-family=\"monospace\">I</text><text x=\"30\" y=\"50\" fill=\"#9fb4c8\" font-size=\"12\" font-family=\"monospace\">R</text><text x=\"46\" y=\"34\" fill=\"#7ee7dc\" font-size=\"11\" font-family=\"monospace\">B at centre</text></svg>",
   "figCaption": "Current loop and the field at its centre"
  },
  {
   "id": "CSIRB-05", "n": 15, "part": "B", "lane": "physics", "sub": "mechanics", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `The period of a simple pendulum of length $L$ in a gravitational field $g$ (for small oscillations) is`,
   "opts": [`$2\pi\sqrt{L/g}$`, `$2\pi\sqrt{g/L}$`, `$\sqrt{L/g}$`, `$\frac{1}{2\pi}\sqrt{g/L}$`],
   "ans": 0,
   "sol": `$T = 2\pi\sqrt{L/g}$.`,
   "tags": ["mechanics"], "correctMarks": 3.5, "wrongMarks": 0.875,
   "figSvg": "<svg viewBox=\"0 0 240 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"80\" y1=\"20\" x2=\"160\" y2=\"20\" stroke=\"#33465c\" stroke-width=\"3\"/><line x1=\"120\" y1=\"20\" x2=\"168\" y2=\"120\" stroke=\"#cfeff2\" stroke-width=\"2\"/><circle cx=\"168\" cy=\"120\" r=\"14\" fill=\"#14b8a6\"/><text x=\"161\" y=\"125\" fill=\"#04242a\" font-size=\"12\" font-family=\"monospace\">m</text><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"120\" stroke=\"#f0b429\" stroke-dasharray=\"4 4\"/><text x=\"126\" y=\"74\" fill=\"#f0b429\" font-size=\"11\" font-family=\"monospace\">L</text><text x=\"120\" y=\"176\" fill=\"#9fb4c8\" font-size=\"11\" font-family=\"monospace\">θ</text></svg>",
   "figCaption": "Simple pendulum of length L"
  },
  {
   "id": "CSIRB-06", "n": 16, "part": "B", "lane": "physics", "sub": "mechanics", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `The moment of inertia of a uniform rod of mass $M$ and length $L$ about an axis through its centre, perpendicular to the rod, is`,
   "opts": [`$ML^2/12$`, `$ML^2/3$`, `$ML^2/2$`, `$ML^2/6$`],
   "ans": 0,
   "sol": `For a rod about its centre, $I = \frac{1}{12}ML^2$.`,
   "tags": ["mechanics"], "correctMarks": 3.5, "wrongMarks": 0.875
  },
  {
   "id": "CSIRB-07", "n": 17, "part": "B", "lane": "physics", "sub": "quantum", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `The de Broglie wavelength of a non-relativistic particle of momentum $p$ is`,
   "opts": [`$h/p$`, `$p/h$`, `$h\,p$`, `$h/(2p)$`],
   "ans": 0,
   "sol": `$\lambda = h/p$.`,
   "tags": ["quantum"], "correctMarks": 3.5, "wrongMarks": 0.875
  },
  {
   "id": "CSIRB-08", "n": 18, "part": "B", "lane": "physics", "sub": "thermo", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `At the same temperature, the rms speed of helium atoms (mass 4 u) compared with that of hydrogen molecules (mass 2 u) is`,
   "opts": [`$1/\sqrt{2}$ times`, `$\sqrt{2}$ times`, "2 times", "the same"],
   "ans": 0,
   "sol": `$v_{rms} = \sqrt{3kT/m}$, so $v_{He}/v_{H_2} = \sqrt{2/4} = 1/\sqrt{2}$.`,
   "tags": ["thermo"], "correctMarks": 3.5, "wrongMarks": 0.875,
   "figSvg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#22384d\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"16\" stroke=\"#22384d\"/><path d=\"M40 158 C 60 40 90 24 120 32 C 160 44 200 80 296 150\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"2\"/><path d=\"M40 158 C 80 60 130 44 170 50 C 220 60 260 90 296 140\" fill=\"none\" stroke=\"#9fb4c8\" stroke-width=\"2\"/><text x=\"236\" y=\"40\" fill=\"#7ee7dc\" font-size=\"11\" font-family=\"monospace\">light (H2)</text><text x=\"240\" y=\"70\" fill=\"#9fb4c8\" font-size=\"11\" font-family=\"monospace\">heavy (He)</text><text x=\"300\" y=\"176\" fill=\"#9fb4c8\" font-size=\"12\" font-family=\"monospace\">v</text><text x=\"12\" y=\"30\" fill=\"#9fb4c8\" font-size=\"12\" font-family=\"monospace\">f(v)</text></svg>",
   "figCaption": "Maxwell distributions for two masses at the same temperature"
  },
  {
   "id": "CSIRB-09", "n": 19, "part": "B", "lane": "physics", "sub": "math", "type": "NAT", "marks": 3.5, "diff": "core",
   "stem": `The value of the integral $\int_0^\infty e^{-x}\,dx$ is (Enter a whole number.)`,
   "opts": [],
   "ans": "1",
   "sol": `$\int_0^\infty e^{-x}dx = [-e^{-x}]_0^\infty = 1$.`,
   "tags": ["math"], "correctMarks": 3.5, "wrongMarks": 0
  },
  {
   "id": "CSIRB-10", "n": 20, "part": "B", "lane": "physics", "sub": "thermo", "type": "MCQ", "marks": 3.5, "diff": "core",
   "stem": `An ideal gas undergoes a free (Joule) expansion into a vacuum. Its temperature`,
   "opts": ["increases", "decreases", "stays the same", "first increases then decreases"],
   "ans": 2,
   "sol": `For an ideal gas, internal energy depends only on temperature, and no work or heat transfer occurs, so $T$ is unchanged.`,
   "tags": ["thermo"], "correctMarks": 3.5, "wrongMarks": 0.875
  },
  {
   "id": "CSIRC-01", "n": 21, "part": "C", "lane": "physics", "sub": "quantum", "type": "MCQ", "marks": 5, "diff": "adv",
   "stem": `To first order, the correction to the energy of a non-degenerate state $|n\rangle$ due to a perturbation $H'$ is`,
   "opts": [`$\langle n|H'|n\rangle$`, `$\sum_{m\neq n}\frac{|\langle m|H'|n\rangle|^2}{E_n-E_m}$`, `$-\langle n|H'|n\rangle$`, "zero"],
   "ans": 0,
   "sol": `The first-order non-degenerate correction is the diagonal matrix element $\langle n|H'|n\rangle$.`,
   "tags": ["quantum"], "correctMarks": 5, "wrongMarks": 1.25
  },
  {
   "id": "CSIRC-02", "n": 22, "part": "C", "lane": "physics", "sub": "thermo", "type": "MCQ", "marks": 5, "diff": "adv",
   "stem": `In the high-temperature limit ($\beta\hbar\omega \ll 1$), the partition function of a one-dimensional quantum harmonic oscillator is approximately`,
   "opts": [`$kT/(\hbar\omega)$`, `$\hbar\omega/(kT)$`, `$e^{-\beta\hbar\omega/2}$`, "1"],
   "ans": 0,
   "sol": `$Z = e^{-\beta\hbar\omega/2}/(1-e^{-\beta\hbar\omega}) \to 1/(\beta\hbar\omega) = kT/(\hbar\omega)$ as $\beta\hbar\omega \to 0$.`,
   "tags": ["thermo"], "correctMarks": 5, "wrongMarks": 1.25
  },
  {
   "id": "CSIRC-03", "n": 23, "part": "C", "lane": "physics", "sub": "solid", "type": "NAT", "marks": 5, "diff": "adv",
   "stem": `The Fermi energy of a free-electron gas scales with the electron number density $n$ as $E_F \propto n^{\alpha}$. The value of $\alpha$ is (Enter a decimal to 3 places.)`,
   "opts": [],
   "ans": "0.667",
   "sol": `$E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$, so $\alpha = 2/3 = 0.667$.`,
   "tags": ["solid"], "correctMarks": 5, "wrongMarks": 0,
   "figSvg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#22384d\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"16\" stroke=\"#22384d\"/><path d=\"M40 150 C 140 130 220 90 292 40\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"2\"/><text x=\"300\" y=\"176\" fill=\"#9fb4c8\" font-size=\"12\" font-family=\"monospace\">n</text><text x=\"14\" y=\"30\" fill=\"#9fb4c8\" font-size=\"12\" font-family=\"monospace\">E_F</text><text x=\"150\" y=\"120\" fill=\"#7ee7dc\" font-size=\"11\" font-family=\"monospace\">E_F ∝ n^(2/3)</text></svg>",
   "figCaption": "Fermi energy vs electron density"
  },
  {
   "id": "CSIRC-04", "n": 24, "part": "C", "lane": "physics", "sub": "atomic", "type": "MCQ", "marks": 5, "diff": "adv",
   "stem": `A magnetic moment $\mu$ placed in a uniform magnetic field $B$ precesses (Larmor precession) with angular frequency`,
   "opts": [`$\omega = \mu B/\hbar$`, `$\omega = \hbar\mu/B$`, `$\omega = \mu/(\hbar B)$`, `$\omega = B/(\mu\hbar)$`],
   "ans": 0,
   "sol": `The torque is $\boldsymbol{\mu}\times\mathbf{B}$, giving Larmor frequency $\omega_L = \mu B/\hbar$.`,
   "tags": ["atomic"], "correctMarks": 5, "wrongMarks": 1.25,
   "figSvg": "<svg viewBox=\"0 0 260 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"180\" stroke=\"#9fb4c8\" stroke-width=\"2\"/><polygon points=\"130,20 126,34 134,34\" fill=\"#9fb4c8\"/><text x=\"138\" y=\"28\" fill=\"#9fb4c8\" font-size=\"11\" font-family=\"monospace\">B</text><path d=\"M130 80 L 158 110\" stroke=\"#f0b429\" stroke-width=\"2\"/><circle cx=\"130\" cy=\"80\" r=\"6\" fill=\"#f0b429\"/><ellipse cx=\"158\" cy=\"110\" rx=\"38\" ry=\"14\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"1.5\"/><path d=\"M158 110 A 38 14 0 0 1 120 120\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"1.5\"/><text x=\"188\" y=\"128\" fill=\"#7ee7dc\" font-size=\"11\" font-family=\"monospace\">μ precesses</text></svg>",
   "figCaption": "Magnetic moment precessing about the field direction"
  },
  {
   "id": "CSIRC-05", "n": 25, "part": "C", "lane": "physics", "sub": "quantum", "type": "MCQ", "marks": 5, "diff": "adv",
   "stem": `Fermi's golden rule gives the transition rate as proportional to`,
   "opts": [`$|\langle f|H'|i\rangle|^2\,\rho(E_f)$`, `$|\langle f|i\rangle|$`, `$\rho(E_i)$ alone`, "the matrix element alone, with no density factor"],
   "ans": 0,
   "sol": `The rate $\propto |\langle f|H'|i\rangle|^2\,\rho(E_f)$.`,
   "tags": ["quantum"], "correctMarks": 5, "wrongMarks": 1.25
  },
  {
   "id": "CSIRC-06", "n": 26, "part": "C", "lane": "physics", "sub": "thermo", "type": "MCQ", "marks": 5, "diff": "adv",
   "stem": `Bose–Einstein condensation in an ideal Bose gas in three dimensions occurs when the chemical potential`,
   "opts": ["reaches the ground-state energy", "becomes infinitely large", "reaches the Fermi energy", "becomes exactly zero for all temperatures"],
   "ans": 0,
   "sol": `Condensation begins when $\mu$ approaches the ground-state energy and a macroscopic fraction of particles occupies the lowest state.`,
   "tags": ["thermo"], "correctMarks": 5, "wrongMarks": 1.25
  },
  {
   "id": "CSIRC-07", "n": 27, "part": "C", "lane": "physics", "sub": "quantum", "type": "MSQ", "marks": 5, "diff": "adv",
   "stem": "Which of the following operators commute with the Hamiltonian of a spherically symmetric potential?",
   "opts": [`$L^2$`, `$L_z$`, `$p_x$`, `$p_y$`],
   "ans": [0, 1],
   "sol": `For a central potential, $H$ commutes with $L^2$ and $L_z$ (and parity). The Cartesian momentum components do not commute with $H$.`,
   "tags": ["quantum"], "correctMarks": 5, "wrongMarks": 0
  },
  {
   "id": "CSIRC-08", "n": 28, "part": "C", "lane": "physics", "sub": "electromagnetism", "type": "NAT", "marks": 5, "diff": "adv",
   "stem": `A plane electromagnetic wave in vacuum has electric-field amplitude $E_0$ and magnetic-field amplitude $B_0$. The ratio $E_0/B_0$ in units of $10^8$ m/s is (Enter a whole number.)`,
   "opts": [],
   "ans": "3",
   "sol": `$E_0/B_0 = c = 3\times10^8$ m/s, i.e. 3 in units of $10^8$ m/s.`,
   "tags": ["electromagnetism"], "correctMarks": 5, "wrongMarks": 0
  },
  {
   "id": "CSIRC-09", "n": 29, "part": "C", "lane": "physics", "sub": "waves", "type": "MCQ", "marks": 5, "diff": "adv",
   "stem": `For a dispersive wave with phase velocity $v_p$ and wavelength $\lambda$, the group velocity is`,
   "opts": [`$v_g = v_p - \lambda\frac{dv_p}{d\lambda}$`, `$v_g = v_p + \lambda\frac{dv_p}{d\lambda}$`, `$v_g = v_p$`, `$v_g = \lambda v_p$`],
   "ans": 0,
   "sol": `$v_g = v_p - \lambda\frac{dv_p}{d\lambda} = v_p + k\frac{dv_p}{dk}$.`,
   "tags": ["waves"], "correctMarks": 5, "wrongMarks": 1.25,
   "figSvg": "<svg viewBox=\"0 0 320 190\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#22384d\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"16\" stroke=\"#22384d\"/><path d=\"M40 150 C 120 120 200 60 280 24\" fill=\"none\" stroke=\"#2dd4bf\" stroke-width=\"2\"/><line x1=\"40\" y1=\"150\" x2=\"200\" y2=\"60\" stroke=\"#f0b429\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"98\" x2=\"230\" y2=\"52\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/><text x=\"206\" y=\"66\" fill=\"#f0b429\" font-size=\"10\" font-family=\"monospace\">v_p = ω/k</text><text x=\"206\" y=\"40\" fill=\"#f43f5e\" font-size=\"10\" font-family=\"monospace\">v_g = dω/dk</text><text x=\"300\" y=\"176\" fill=\"#9fb4c8\" font-size=\"12\" font-family=\"monospace\">k</text><text x=\"14\" y=\"30\" fill=\"#9fb4c8\" font-size=\"12\" font-family=\"monospace\">ω</text></svg>",
   "figCaption": "Dispersion curve with phase (chord) and group (tangent) velocities"
  },
  {
   "id": "CSIRC-10", "n": 30, "part": "C", "lane": "physics", "sub": "atomic", "type": "MSQ", "marks": 5, "diff": "adv",
   "stem": "Which statements about the hydrogen atom are correct (non-relativistic, spin ignored)?",
   "opts": ["The energy depends only on the principal quantum number $n$", "The degeneracy of level $n$ is $n^2$", "The ground state is spherically symmetric", "The energy depends on the orbital quantum number $l$"],
   "ans": [0, 1, 2],
   "sol": `$E_n = -13.6/n^2$ eV depends only on $n$; degeneracy is $n^2$ (spin ignored); the ground state has $l=0$ and is spherically symmetric. The energy does not depend on $l$ in the non-relativistic Coulomb problem.`,
   "tags": ["atomic"], "correctMarks": 5, "wrongMarks": 0,
   "figSvg": "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"60\" y1=\"180\" x2=\"60\" y2=\"20\" stroke=\"#22384d\"/><g stroke=\"#2dd4bf\" stroke-width=\"2\"><line x1=\"60\" y1=\"150\" x2=\"140\" y2=\"150\"/><line x1=\"60\" y1=\"102\" x2=\"140\" y2=\"102\"/><line x1=\"60\" y1=\"70\" x2=\"140\" y2=\"70\"/></g><g fill=\"#9fb4c8\" font-size=\"11\" font-family=\"monospace\"><text x=\"20\" y=\"154\">n=1</text><text x=\"20\" y=\"106\">n=2</text><text x=\"20\" y=\"74\">n=3</text></g><g fill=\"#7ee7dc\" font-size=\"11\" font-family=\"monospace\"><text x=\"148\" y=\"154\">-13.6 eV</text><text x=\"148\" y=\"106\">-3.4 eV</text><text x=\"148\" y=\"74\">-1.51 eV</text></g><text x=\"60\" y=\"16\" fill=\"#cfeff2\" font-size=\"11\" font-family=\"monospace\">E_n = -13.6/n² eV</text></svg>",
   "figCaption": "Hydrogen energy ladder"
  }
 ]
};
