const questionBank = {
  Physics: {
    icon: "◉",
    questions: [
      { topic: "Motion", prompt: "A car travels 120 m in 20 s at a uniform speed. What is its speed?", options: ["4 m/s", "6 m/s", "8 m/s", "10 m/s"], answer: 1, explanation: "Speed = distance ÷ time = 120 ÷ 20 = 6 m/s." },
      { topic: "Electricity", prompt: "A 4 Ω resistor is connected across a 12 V battery. What current flows through it?", options: ["0.3 A", "3 A", "8 A", "48 A"], answer: 1, explanation: "By Ohm's law, I = V ÷ R = 12 ÷ 4 = 3 A." },
      { topic: "Work and energy", prompt: "A force of 20 N moves an object 5 m in the direction of the force. How much work is done?", options: ["4 J", "25 J", "100 J", "200 J"], answer: 2, explanation: "Work done = force × distance in the direction of the force = 20 × 5 = 100 J." },
      { topic: "Waves", prompt: "A wave has a frequency of 50 Hz and a wavelength of 0.4 m. What is its speed?", options: ["20 m/s", "50.4 m/s", "125 m/s", "200 m/s"], answer: 0, explanation: "Wave speed = frequency × wavelength = 50 × 0.4 = 20 m/s." },
      { topic: "Density", prompt: "A metal block has a mass of 200 g and a volume of 50 cm³. Find its density.", options: ["0.25 g/cm³", "2.5 g/cm³", "4 g/cm³", "10 g/cm³"], answer: 2, explanation: "Density = mass ÷ volume = 200 ÷ 50 = 4 g/cm³." },
      { topic: "Motion", prompt: "A ball is dropped from rest. Taking g = 10 m/s², what is its speed after 2 s?", options: ["5 m/s", "10 m/s", "20 m/s", "40 m/s"], answer: 2, explanation: "For motion from rest, v = u + gt = 0 + (10 × 2) = 20 m/s.", level: "easy" },
      { topic: "Power", prompt: "A machine does 600 J of work in 3 s. What is its power output?", options: ["200 W", "600 W", "1,800 W", "0.005 W"], answer: 0, explanation: "Power = work ÷ time = 600 ÷ 3 = 200 W.", level: "easy" },
      { topic: "Momentum", prompt: "What is the momentum of a 2 kg object moving at 4 m/s?", options: ["2 kg m/s", "6 kg m/s", "8 kg m/s", "16 kg m/s"], answer: 2, explanation: "Momentum = mass × velocity = 2 × 4 = 8 kg m/s.", level: "easy" },
      { topic: "Resistors", prompt: "Two resistors of 2 Ω and 3 Ω are connected in series. What is their combined resistance?", options: ["1.2 Ω", "2.5 Ω", "5 Ω", "6 Ω"], answer: 2, explanation: "Resistances in series add: 2 Ω + 3 Ω = 5 Ω.", level: "moderate" },
      { topic: "Pressure", prompt: "A force of 100 N acts normally on an area of 0.5 m². What pressure is exerted?", options: ["50 Pa", "100 Pa", "200 Pa", "500 Pa"], answer: 2, explanation: "Pressure = force ÷ area = 100 ÷ 0.5 = 200 Pa.", level: "moderate" },
      { topic: "Heat", prompt: "How much heat is needed to raise the temperature of 2 kg of water by 5 °C? (specific heat capacity = 4,200 J kg⁻¹ °C⁻¹)", options: ["4,200 J", "8,400 J", "21,000 J", "42,000 J"], answer: 3, explanation: "Q = mcΔT = 2 × 4,200 × 5 = 42,000 J.", level: "moderate" },
      { topic: "Efficiency", prompt: "A device receives 800 J of energy and produces 600 J of useful output. What is its efficiency?", options: ["25%", "60%", "75%", "133%"], answer: 2, explanation: "Efficiency = (useful output ÷ input) × 100% = (600 ÷ 800) × 100% = 75%.", level: "difficult" },
      { topic: "Electricity", prompt: "A current of 0.5 A flows for 4 minutes. How much charge passes a point in the circuit?", options: ["2 C", "30 C", "120 C", "240 C"], answer: 2, explanation: "Q = It. Convert 4 minutes to 240 seconds: Q = 0.5 × 240 = 120 C.", level: "difficult" },
      { topic: "Waves", prompt: "A sound wave travels at 340 m/s and has a frequency of 680 Hz. What is its wavelength?", options: ["0.5 m", "2 m", "340 m", "1,020 m"], answer: 0, explanation: "Wavelength = speed ÷ frequency = 340 ÷ 680 = 0.5 m.", level: "difficult" },
      { topic: "Moments", prompt: "A 40 N force acts perpendicular to a door at a distance of 0.8 m from its hinge. What moment does it produce?", options: ["32 N m", "40.8 N m", "50 N m", "320 N m"], answer: 0, explanation: "Moment = force × perpendicular distance = 40 × 0.8 = 32 N m.", level: "difficult" }
    ]
  },
  Chemistry: {
    icon: "◈",
    questions: [
      { topic: "The mole concept", prompt: "What amount of substance is present in 18 g of water? (H₂O = 18 g mol⁻¹)", options: ["0.5 mol", "1 mol", "2 mol", "18 mol"], answer: 1, explanation: "Amount in moles = mass ÷ molar mass = 18 ÷ 18 = 1 mol." },
      { topic: "Atomic structure", prompt: "The atomic number of an element is equal to the number of its:", options: ["neutrons", "protons", "protons and neutrons", "electron shells"], answer: 1, explanation: "The atomic number is the number of protons in the nucleus of an atom." },
      { topic: "Acids and bases", prompt: "Which products are formed when hydrochloric acid reacts completely with sodium hydroxide?", options: ["Sodium and hydrogen", "Sodium chloride and water", "Chlorine and oxygen", "Sodium oxide and hydrogen"], answer: 1, explanation: "This neutralisation reaction is HCl + NaOH → NaCl + H₂O." },
      { topic: "Electrolysis", prompt: "At which electrode does reduction take place during electrolysis?", options: ["Anode", "Cathode", "Both electrodes", "Neither electrode"], answer: 1, explanation: "Reduction is the gain of electrons. Positive ions gain electrons at the cathode." },
      { topic: "Chemical formulae", prompt: "What is the relative molecular mass of carbon dioxide, CO₂? (C = 12, O = 16)", options: ["28", "32", "44", "48"], answer: 2, explanation: "Mr(CO₂) = 12 + (2 × 16) = 44." },
      { topic: "Atomic structure", prompt: "Atoms of the same element with different numbers of neutrons are called:", options: ["ions", "isotopes", "isobars", "allotropes"], answer: 1, explanation: "Isotopes have the same number of protons but different numbers of neutrons.", level: "easy" },
      { topic: "Organic chemistry", prompt: "What is the general formula of the alkanes?", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙHₙ", "CₙH₂ₙ₋₂"], answer: 1, explanation: "Acyclic alkanes have the general formula CₙH₂ₙ₊₂.", level: "easy" },
      { topic: "Periodic table", prompt: "Elements in the same group of the periodic table generally have the same number of:", options: ["electron shells", "neutrons", "outer-shell electrons", "protons"], answer: 2, explanation: "For main-group elements, members of the same group have the same number of valence (outer-shell) electrons.", level: "easy" },
      { topic: "Reaction rates", prompt: "A catalyst increases the rate of a reaction mainly by:", options: ["increasing the mass of products", "lowering the activation energy", "raising the equilibrium yield in every reaction", "being permanently consumed"], answer: 1, explanation: "A catalyst provides an alternative reaction pathway with lower activation energy and is regenerated.", level: "moderate" },
      { topic: "Gas laws", prompt: "At room temperature and pressure, what volume is occupied by 0.5 mol of a gas? (Molar volume = 24 dm³ mol⁻¹)", options: ["6 dm³", "12 dm³", "24 dm³", "48 dm³"], answer: 1, explanation: "Volume = amount × molar volume = 0.5 × 24 = 12 dm³.", level: "moderate" },
      { topic: "Redox reactions", prompt: "Oxidation, in terms of electron transfer, is the:", options: ["gain of electrons", "loss of electrons", "gain of neutrons", "loss of protons"], answer: 1, explanation: "Oxidation is loss of electrons; reduction is gain of electrons.", level: "moderate" },
      { topic: "Chemical bonding", prompt: "Which type of bond forms when one atom transfers electrons to another?", options: ["Covalent", "Ionic", "Metallic", "Hydrogen"], answer: 1, explanation: "Electron transfer forms oppositely charged ions held together by electrostatic attraction, an ionic bond.", level: "difficult" },
      { topic: "Mole concept", prompt: "How many moles are present in 11 g of carbon dioxide? (CO₂ = 44 g mol⁻¹)", options: ["0.25 mol", "0.5 mol", "2 mol", "4 mol"], answer: 0, explanation: "Amount = mass ÷ molar mass = 11 ÷ 44 = 0.25 mol.", level: "difficult" },
      { topic: "Electrolysis", prompt: "How many moles of electrons are required to deposit 1 mol of copper from Cu²⁺ ions?", options: ["0.5 mol", "1 mol", "2 mol", "4 mol"], answer: 2, explanation: "Cu²⁺ + 2e⁻ → Cu, so 2 moles of electrons are needed per mole of copper.", level: "difficult" },
      { topic: "Chemical equilibrium", prompt: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what happens to the equilibrium position when pressure is increased at constant temperature?", options: ["It shifts left, towards more gas molecules", "It shifts right, towards fewer gas molecules", "It does not change", "The reaction stops"], answer: 1, explanation: "Higher pressure favours the side with fewer gas molecules. The right side has 2 moles of gas versus 4 on the left.", level: "difficult" }
    ]
  },
  Biology: {
    icon: "❋",
    questions: [
      { topic: "Cell biology", prompt: "Which cell organelle is the main site of photosynthesis in green plants?", options: ["Nucleus", "Chloroplast", "Mitochondrion", "Ribosome"], answer: 1, explanation: "Chloroplasts contain chlorophyll, which absorbs light energy for photosynthesis." },
      { topic: "Cell biology", prompt: "The organelle that releases most of the energy during aerobic respiration is the:", options: ["vacuole", "Golgi body", "mitochondrion", "cell wall"], answer: 2, explanation: "Most aerobic respiration takes place in the mitochondria, where ATP is produced." },
      { topic: "Transport in animals", prompt: "Which blood vessel carries blood away from the heart?", options: ["Artery", "Vein", "Capillary", "Venule"], answer: 0, explanation: "Arteries carry blood away from the heart; veins carry blood towards it." },
      { topic: "Genetics", prompt: "A gene is best described as:", options: ["a type of blood cell", "a segment of DNA that carries hereditary information", "an organelle that makes food", "a complete set of chromosomes"], answer: 1, explanation: "A gene is a section of DNA containing information that can influence an inherited characteristic." },
      { topic: "Movement of substances", prompt: "In osmosis, water moves across a selectively permeable membrane from a region of:", options: ["higher solute concentration to lower solute concentration", "lower water potential to higher water potential", "higher water potential to lower water potential", "equal water potential to equal water potential only"], answer: 2, explanation: "Water moves by osmosis from higher water potential (a more dilute solution) to lower water potential." },
      { topic: "Plant transport", prompt: "Which tissue transports water and mineral salts from roots to the rest of a plant?", options: ["Phloem", "Xylem", "Epidermis", "Cambium"], answer: 1, explanation: "Xylem vessels conduct water and dissolved mineral salts upward through the plant.", level: "easy" },
      { topic: "Plant physiology", prompt: "Most water vapour leaves a plant through the:", options: ["root hairs", "stomata", "xylem", "petals"], answer: 1, explanation: "Transpiration occurs mainly through stomata in the leaves.", level: "easy" },
      { topic: "Enzymes", prompt: "Enzymes are best described as biological:", options: ["hormones", "catalysts", "antibodies", "wastes"], answer: 1, explanation: "Enzymes are biological catalysts that speed up reactions without being used up.", level: "easy" },
      { topic: "Ecology", prompt: "In a food chain, green plants are usually the:", options: ["primary consumers", "decomposers", "producers", "secondary consumers"], answer: 2, explanation: "Green plants make organic food from inorganic materials using light energy, so they are producers.", level: "moderate" },
      { topic: "Evolution", prompt: "Natural selection favours organisms that:", options: ["are best adapted to their environment", "always have the largest body size", "do not reproduce", "change their genes because they need to"], answer: 0, explanation: "Individuals with heritable traits suited to their environment are more likely to survive and reproduce.", level: "moderate" },
      { topic: "Human physiology", prompt: "Which blood component is primarily responsible for clotting?", options: ["Red blood cells", "Platelets", "Plasma water", "Lymphocytes"], answer: 1, explanation: "Platelets help initiate blood clotting at a damaged blood vessel.", level: "moderate" },
      { topic: "Genetics", prompt: "An organism with genotype Tt is described as:", options: ["homozygous dominant", "homozygous recessive", "heterozygous", "haploid"], answer: 2, explanation: "Tt contains two different alleles for the gene, so the organism is heterozygous.", level: "difficult" },
      { topic: "Cell biology", prompt: "A plant cell placed in a very dilute solution becomes firm mainly because:", options: ["water enters by osmosis and the cell contents press against the wall", "water leaves by diffusion and the wall contracts", "the cell wall dissolves", "the vacuole loses all its contents"], answer: 0, explanation: "Water enters by osmosis, increasing turgor pressure; the rigid cell wall prevents bursting.", level: "difficult" },
      { topic: "Ecology", prompt: "If producers store 10,000 kJ of energy, about how much may be available to primary consumers using the 10% rule?", options: ["100 kJ", "1,000 kJ", "5,000 kJ", "10,000 kJ"], answer: 1, explanation: "Using the approximate 10% transfer rule, primary consumers receive about 10% of 10,000 kJ = 1,000 kJ.", level: "difficult" },
      { topic: "Human physiology", prompt: "Which sequence correctly traces a red blood cell from the right ventricle to the left atrium?", options: ["Pulmonary artery → lungs → pulmonary vein", "Aorta → body tissues → vena cava", "Pulmonary vein → lungs → pulmonary artery", "Vena cava → lungs → aorta"], answer: 0, explanation: "Blood leaves the right ventricle through the pulmonary artery, passes through lung capillaries, and returns via the pulmonary veins to the left atrium.", level: "difficult" }
    ]
  },
  Mathematics: {
    icon: "∑",
    questions: [
      { topic: "Algebra", prompt: "If 3x + 5 = 20, what is the value of x?", options: ["3", "5", "8", "15"], answer: 1, explanation: "Subtract 5 from both sides: 3x = 15. Divide by 3 to get x = 5." },
      { topic: "Mensuration", prompt: "Find the area of a triangle with base 12 cm and perpendicular height 7 cm.", options: ["19 cm²", "42 cm²", "84 cm²", "168 cm²"], answer: 1, explanation: "Area of a triangle = ½ × base × height = ½ × 12 × 7 = 42 cm²." },
      { topic: "Factorisation", prompt: "Factorise x² − 9 completely.", options: ["(x − 9)(x + 1)", "(x − 3)(x + 3)", "(x − 3)²", "(x + 9)(x − 1)"], answer: 1, explanation: "This is a difference of two squares: x² − 3² = (x − 3)(x + 3)." },
      { topic: "Probability", prompt: "A fair six-sided die is rolled once. What is the probability of getting an even number?", options: ["⅓", "½", "⅔", "⅚"], answer: 1, explanation: "The even outcomes are 2, 4 and 6: 3 favourable outcomes out of 6, so the probability is 3/6 = 1/2." },
      { topic: "Financial mathematics", prompt: "Calculate the simple interest on ₦2,000 at 5% per annum for 2 years.", options: ["₦100", "₦200", "₦500", "₦2,200"], answer: 1, explanation: "Simple interest = PRT/100 = 2,000 × 5 × 2 ÷ 100 = ₦200." },
      { topic: "Algebra", prompt: "If x + y = 9 and x − y = 3, what is the value of x?", options: ["3", "6", "9", "12"], answer: 1, explanation: "Add the equations to get 2x = 12, so x = 6.", level: "easy" },
      { topic: "Indices", prompt: "Evaluate 2³ × 2².", options: ["2⁵", "2⁶", "4⁵", "4⁶"], answer: 0, explanation: "When multiplying powers with the same base, add the indices: 2³ × 2² = 2⁵.", level: "easy" },
      { topic: "Percentages", prompt: "A bag costing ₦8,000 is reduced by 15%. What is the new price?", options: ["₦1,200", "₦6,800", "₦7,200", "₦9,200"], answer: 1, explanation: "The discount is 0.15 × ₦8,000 = ₦1,200. New price = ₦8,000 − ₦1,200 = ₦6,800.", level: "easy" },
      { topic: "Sequences", prompt: "What is the next term in the arithmetic sequence 4, 9, 14, 19, …?", options: ["20", "23", "24", "25"], answer: 2, explanation: "The common difference is 5, so the next term is 19 + 5 = 24.", level: "moderate" },
      { topic: "Trigonometry", prompt: "In a right-angled triangle, the side opposite angle θ is 3 cm and the hypotenuse is 5 cm. What is sin θ?", options: ["3/5", "4/5", "3/4", "5/3"], answer: 0, explanation: "sin θ = opposite ÷ hypotenuse = 3 ÷ 5 = 3/5.", level: "moderate" },
      { topic: "Coordinate geometry", prompt: "Find the gradient of the line passing through (1, 2) and (4, 8).", options: ["2", "3", "6", "10"], answer: 0, explanation: "Gradient = (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2.", level: "moderate" },
      { topic: "Quadratic equations", prompt: "Solve x² − 5x + 6 = 0.", options: ["x = 1 or 6", "x = 2 or 3", "x = −2 or −3", "x = −1 or −6"], answer: 1, explanation: "Factorise: x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or 3.", level: "difficult" },
      { topic: "Probability", prompt: "A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement. What is the probability that both are red?", options: ["3/10", "2/5", "1/2", "3/5"], answer: 0, explanation: "P(both red) = 3/5 × 2/4 = 6/20 = 3/10.", level: "difficult" },
      { topic: "Mensuration", prompt: "A cylinder has radius 3 cm and height 5 cm. What is its volume in terms of π?", options: ["45π cm³", "30π cm³", "15π cm³", "8π cm³"], answer: 0, explanation: "Volume = πr²h = π × 3² × 5 = 45π cm³.", level: "difficult" },
      { topic: "Logarithms", prompt: "If log₁₀ 2 = 0.3010, find log₁₀ 200.", options: ["1.3010", "2.3010", "3.0100", "200.3010"], answer: 1, explanation: "200 = 2 × 100, so log₁₀ 200 = log₁₀ 2 + log₁₀ 100 = 0.3010 + 2 = 2.3010.", level: "difficult" }
    ]
  },
  English: {
    icon: "Aa",
    questions: [
      { topic: "Lexis and structure", prompt: "Choose the word that best completes the sentence: Neither of the candidates _____ present at the meeting yesterday.", options: ["were", "are", "was", "have been"], answer: 2, explanation: "“Neither” is treated as singular in this sentence, and “yesterday” calls for the past tense: “was”." },
      { topic: "Vocabulary", prompt: "Choose the word nearest in meaning to “abundant”.", options: ["scarce", "plentiful", "hidden", "ordinary"], answer: 1, explanation: "“Abundant” means existing in large quantities; “plentiful” is the closest meaning." },
      { topic: "Antonyms", prompt: "Choose the word opposite in meaning to “ancient”.", options: ["old", "historic", "modern", "distant"], answer: 2, explanation: "“Modern” means relating to the present or recent times, the opposite of “ancient”." },
      { topic: "Comprehension", passage: "Musa used to spend his evenings scrolling through his phone. When he began setting aside thirty minutes each day to read, he found that he could concentrate for longer and explain ideas more clearly. He now encourages his friends to make reading a daily habit.", prompt: "According to the passage, what change helped Musa concentrate for longer?", options: ["Spending more time on his phone", "Reading for thirty minutes each day", "Explaining ideas to his friends", "Studying only in the evening"], answer: 1, explanation: "The passage says that setting aside thirty minutes each day to read helped Musa concentrate for longer." },
      { topic: "Idioms", prompt: "If someone says, “I visit my hometown once in a blue moon,” they mean that they visit:", options: ["every month", "very rarely", "at night", "when the moon is full"], answer: 1, explanation: "“Once in a blue moon” is an idiom meaning very rarely." },
      { topic: "Vocabulary", prompt: "Choose the word nearest in meaning to “diligent”.", options: ["careless", "hardworking", "impatient", "uncertain"], answer: 1, explanation: "A diligent person is careful and hardworking.", level: "easy" },
      { topic: "Grammar", prompt: "Choose the correct option: The news _____ encouraging.", options: ["are", "were", "is", "have been"], answer: 2, explanation: "“News” is an uncountable noun treated as singular, so it takes “is.”", level: "easy" },
      { topic: "Prepositions", prompt: "Choose the correct option: The students congratulated Ada _____ her success.", options: ["for", "on", "at", "with"], answer: 1, explanation: "The standard expression is “congratulate someone on” an achievement.", level: "easy" },
      { topic: "Concord", prompt: "Choose the correct option: Each of the players _____ a locker.", options: ["have", "has", "are having", "were having"], answer: 1, explanation: "“Each” is singular and takes the singular verb “has.”", level: "moderate" },
      { topic: "Phrasal verbs", prompt: "In the sentence “The meeting was put off,” the phrase “put off” means:", options: ["cancelled permanently", "postponed", "started early", "attended"], answer: 1, explanation: "“Put off” means to postpone or delay something.", level: "moderate" },
      { topic: "Sentence structure", prompt: "Choose the correctly punctuated sentence.", options: ["After the rain stopped we continued our journey.", "After the rain stopped, we continued our journey.", "After, the rain stopped we continued our journey.", "After the rain, stopped we continued our journey."], answer: 1, explanation: "A comma separates the introductory dependent clause from the main clause.", level: "moderate" },
      { topic: "Vocabulary", prompt: "Choose the word opposite in meaning to “mitigate”.", options: ["lessen", "ease", "aggravate", "moderate"], answer: 2, explanation: "“Mitigate” means to make less severe; “aggravate” means to make worse.", level: "difficult" },
      { topic: "Grammar", prompt: "Choose the correct option: If I _____ about the delay, I would have waited.", options: ["know", "knew", "had known", "have known"], answer: 2, explanation: "This is a third conditional structure: “If I had known …, I would have waited.”", level: "difficult" },
      { topic: "Direct and reported speech", prompt: "Choose the correct reported form of: Bisi said, “I am studying now.”", options: ["Bisi said that I am studying now.", "Bisi said that she was studying then.", "Bisi says that she studied now.", "Bisi said she is studied then."], answer: 1, explanation: "In reported speech, the pronoun changes to “she,” the tense backshifts to “was studying,” and “now” changes to “then.”", level: "difficult" },
      { topic: "Comprehension", passage: "Although the community library had few books, its volunteers opened it every afternoon. They organised reading circles and helped pupils borrow books for home. Within a year, more children were reading regularly, and the school reported improved confidence in written work.", prompt: "What did the volunteers do to encourage reading?", options: ["They built a new school", "They organised reading circles and book borrowing", "They replaced all classroom lessons", "They asked pupils to buy books"], answer: 1, explanation: "The passage says the volunteers organised reading circles and helped pupils borrow books.", level: "difficult" }
    ]
  }
};

const subjectList = document.querySelector("#subject-list");
const questionNav = document.querySelector("#question-nav");
const subjectNames = Object.keys(questionBank);
const subjectIcons = { Physics: "◉", Chemistry: "◈", Biology: "❋", Mathematics: "∑", English: "Aa" };
const starterLevels = ["easy", "moderate", "easy", "difficult", "moderate"];
subjectNames.forEach((subject) => {
  questionBank[subject].questions.forEach((question, index) => {
    question.level = question.level || starterLevels[index];
    question.id = `${subject.toLowerCase()}-${index + 1}`;
  });
});

let activeSubject = "Physics";
let selectedSubject = "Physics";
let questionIndex = 0;
let sessionQuestions = [];
let sessionAnswers = {};
let sessionActive = false;
let sessionDeadline = 0;
let timerHandle = null;
let sessionStartedAt = 0;

function renderSubjects() {
  subjectList.innerHTML = subjectNames.map((subject) => {
    const active = subject === selectedSubject;
    return `<button class="subject-card${active ? " is-active" : ""}" type="button" data-subject="${subject}" aria-pressed="${active}">
      <span class="subject-icon icon-${subject.toLowerCase()}">${subjectIcons[subject]}</span>
      <span class="subject-info"><strong>${subject}</strong><small>${questionBank[subject].questions.length} practice questions</small></span>
      <span class="subject-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join("");
}

function getAvailableQuestions() {
  const difficulty = document.querySelector("#difficulty").value;
  const pool = questionBank[selectedSubject].questions;
  return difficulty === "mixed" ? pool : pool.filter((question) => question.level === difficulty);
}

function updateSetup() {
  const countInput = document.querySelector("#question-count");
  const timeInput = document.querySelector("#time-limit");
  const available = getAvailableQuestions().length;
  const requestedCount = Number(countInput.value);
  const requestedTime = Number(timeInput.value);
  const message = document.querySelector("#setup-message");
  const startButton = document.querySelector("#start-button");
  let hasProfile = false;
  try {
    hasProfile = Boolean(window.PracticeAccounts.getCurrentUser());
  } catch (error) {
    message.textContent = error.message;
    startButton.disabled = true;
    return;
  }
  const validCount = Number.isInteger(requestedCount) && requestedCount >= 5 && requestedCount <= 1000 && requestedCount <= available;
  const validTime = Number.isInteger(requestedTime) && requestedTime >= 1 && requestedTime <= 180;

  document.querySelector("#bank-availability").textContent = `${available} ${document.querySelector("#difficulty").value === "mixed" ? "total" : document.querySelector("#difficulty").value} questions available`;
  if (!Number.isInteger(requestedCount) || requestedCount < 5 || requestedCount > 1000) {
    message.textContent = "Choose a whole number from 5 to 1,000.";
  } else if (requestedCount > available) {
    message.textContent = `Only ${available} questions at this level are currently in the ${activeSubject} bank. Add more reviewed questions before choosing ${requestedCount}.`;
  } else if (!validTime) {
    message.textContent = "Choose a time limit from 1 to 180 whole minutes.";
  } else if (!hasProfile) {
    message.textContent = "Create or sign in to a profile before starting practice. This local demo profile is not a secure real account.";
  } else {
    const nextSessionNote = sessionActive ? ` Current ${activeSubject} session continues until you start the new one.` : "";
    message.textContent = `Ready: ${requestedCount} ${selectedSubject} questions · ${document.querySelector("#difficulty").selectedOptions[0].text.toLowerCase()} · ${requestedTime} minutes. Questions will not repeat within this session.${nextSessionNote}`;
  }
  startButton.disabled = !validCount || !validTime || !hasProfile;
}

function shuffled(items) {
  const result = items.slice();
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function renderNav() {
  questionNav.innerHTML = sessionQuestions.map((question, index) => {
    const answered = sessionAnswers[question.id] !== undefined;
    const current = index === questionIndex;
    return `<button type="button" class="nav-item${current ? " is-current" : ""}${answered ? " is-answered" : ""}" data-index="${index}" aria-label="Go to question ${index + 1}${answered ? ", answered" : ""}" aria-current="${current ? "step" : "false"}">${String(index + 1).padStart(2, "0")}</button>`;
  }).join("");
}

function renderQuestion() {
  if (!sessionQuestions.length || !sessionActive) return;
  const question = sessionQuestions[questionIndex];
  const savedAnswer = sessionAnswers[question.id];
  const answered = savedAnswer !== undefined;

  document.querySelector("#session-subject").textContent = activeSubject;
  document.querySelector("#progress-label").textContent = `${questionIndex + 1} / ${sessionQuestions.length}`;
  document.querySelector("#question-number").textContent = `QUESTION ${String(questionIndex + 1).padStart(2, "0")}`;
  document.querySelector("#topic-label").textContent = `${question.topic} · ${question.level}`;
  document.querySelector("#question-text").textContent = question.prompt;
  const passage = document.querySelector("#passage");
  passage.textContent = question.passage || "";
  passage.hidden = !question.passage;
  document.querySelector("#answer-options").innerHTML = question.options.map((option, index) => {
    const selected = savedAnswer === index;
    const correct = answered && index === question.answer;
    const wrong = answered && selected && !correct;
    const letter = String.fromCharCode(65 + index);
    return `<label class="option${selected ? " is-selected" : ""}${correct ? " is-correct" : ""}${wrong ? " is-wrong" : ""}">
      <input type="radio" name="answer" value="${index}" ${selected ? "checked" : ""} ${answered ? "disabled" : ""}>
      <span class="option-letter">${letter}</span><span class="option-text">${option}</span>
      ${correct ? '<span class="option-mark" aria-label="Correct answer">✓</span>' : ""}
    </label>`;
  }).join("");

  const feedback = document.querySelector("#feedback");
  feedback.hidden = !answered;
  feedback.className = `feedback${answered && savedAnswer === question.answer ? " feedback-correct" : " feedback-incorrect"}`;
  feedback.innerHTML = answered
    ? `<strong>${savedAnswer === question.answer ? "That's correct!" : "Not quite — review this one."}</strong><span>${question.explanation}</span>`
    : "";
  document.querySelector("#check-button").hidden = answered;
  document.querySelector("#next-button").hidden = !answered;
  document.querySelector("#back-button").disabled = questionIndex === 0;
  document.querySelector("#next-button").innerHTML = questionIndex === sessionQuestions.length - 1
    ? 'Finish session <span aria-hidden="true">✓</span>'
    : 'Next question <span aria-hidden="true">→</span>';

  const score = sessionQuestions.filter((item) => sessionAnswers[item.id] === item.answer).length;
  document.querySelector("#score-value").textContent = score;
  const progressBar = document.querySelector("#progress-bar");
  progressBar.setAttribute("aria-valuemax", sessionQuestions.length);
  progressBar.setAttribute("aria-valuenow", questionIndex + 1);
  document.querySelector("#progress-fill").style.width = `${((questionIndex + 1) / sessionQuestions.length) * 100}%`;
  renderNav();
  renderSubjects();
}

function updateTimer() {
  if (!sessionActive) return;
  const secondsLeft = Math.max(0, Math.ceil((sessionDeadline - Date.now()) / 1000));
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timerDisplay = document.querySelector("#timer-display");
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timerDisplay.classList.toggle("time-low", secondsLeft <= 60);
  if (secondsLeft === 0) finishSession("Time is up");
}

function startSession() {
  if (document.querySelector("#start-button").disabled) return;
  const requestedCount = Number(document.querySelector("#question-count").value);
  const durationMinutes = Number(document.querySelector("#time-limit").value);
  const pool = getAvailableQuestions();
  if (requestedCount > pool.length) {
    updateSetup();
    return;
  }

  activeSubject = selectedSubject;
  sessionQuestions = shuffled(pool).slice(0, requestedCount);
  sessionAnswers = {};
  questionIndex = 0;
  sessionActive = true;
  sessionStartedAt = Date.now();
  sessionDeadline = sessionStartedAt + durationMinutes * 60 * 1000;
  document.querySelector("#question-content").hidden = false;
  document.querySelector("#practice-gate").hidden = true;
  document.querySelector("#results-panel").hidden = true;
  document.querySelector("#finish-button").disabled = false;
  if (timerHandle !== null) window.clearInterval(timerHandle);
  updateTimer();
  timerHandle = window.setInterval(updateTimer, 250);
  renderQuestion();
  document.querySelector("#question-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

function finishSession(reason) {
  if (!sessionActive) return;
  sessionActive = false;
  if (timerHandle !== null) {
    window.clearInterval(timerHandle);
    timerHandle = null;
  }
  const answeredCount = sessionQuestions.filter((question) => sessionAnswers[question.id] !== undefined).length;
  const score = sessionQuestions.filter((question) => sessionAnswers[question.id] === question.answer).length;
  const percent = sessionQuestions.length ? Math.round((score / sessionQuestions.length) * 100) : 0;
  document.querySelector("#question-content").hidden = true;
  document.querySelector("#practice-gate").hidden = true;
  document.querySelector("#results-panel").hidden = false;
  document.querySelector("#results-heading").textContent = reason === "Time is up" ? "Time is up." : "Nice work.";
  document.querySelector("#results-summary").textContent = `${reason === "Time is up" ? "Your time ended" : "You finished"} with ${score} correct out of ${sessionQuestions.length} (${percent}%). You answered ${answeredCount} question${answeredCount === 1 ? "" : "s"}.`;
  document.querySelector("#finish-button").disabled = true;
}

subjectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-subject]");
  if (!button) return;
  selectedSubject = button.dataset.subject;
  renderSubjects();
  updateSetup();
});

questionNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-index]");
  if (!button || !sessionActive) return;
  questionIndex = Number(button.dataset.index);
  renderQuestion();
});

document.querySelector("#answer-options").addEventListener("change", (event) => {
  if (event.target.name !== "answer") return;
  document.querySelectorAll(".option").forEach((option) => option.classList.remove("is-selected"));
  event.target.closest(".option").classList.add("is-selected");
});

document.querySelector("#check-button").addEventListener("click", () => {
  if (!sessionActive) return;
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.querySelector("#feedback");
  if (!selected) {
    feedback.hidden = false;
    feedback.className = "feedback feedback-prompt";
    feedback.innerHTML = "<strong>Choose an option first.</strong><span>Select the answer you think is correct, then check it.</span>";
    return;
  }
  sessionAnswers[sessionQuestions[questionIndex].id] = Number(selected.value);
  renderQuestion();
});

document.querySelector("#back-button").addEventListener("click", () => {
  if (sessionActive && questionIndex > 0) {
    questionIndex -= 1;
    renderQuestion();
  }
});

document.querySelector("#next-button").addEventListener("click", () => {
  if (!sessionActive) return;
  if (questionIndex === sessionQuestions.length - 1) {
    finishSession("You finished");
    return;
  }
  questionIndex += 1;
  renderQuestion();
});

document.querySelector("#finish-button").addEventListener("click", () => finishSession("You finished"));
document.querySelector("#results-setup-button").addEventListener("click", () => {
  document.querySelector("#setup-heading").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector("#question-count").focus({ preventScroll: true });
});
document.querySelector("#start-button").addEventListener("click", startSession);
["question-count", "time-limit", "difficulty"].forEach((id) => {
  document.querySelector(`#${id}`).addEventListener("input", updateSetup);
  document.querySelector(`#${id}`).addEventListener("change", updateSetup);
});

const premiumDialog = document.querySelector("#premium-dialog");
document.querySelector("#upgrade-button").addEventListener("click", () => premiumDialog.showModal());
premiumDialog.addEventListener("click", (event) => {
  if (event.target === premiumDialog) premiumDialog.close();
});

const accountDialog = document.querySelector("#account-dialog");
const accountForm = document.querySelector("#account-form");
const signInForm = document.querySelector("#signin-form");
const accountStatus = document.querySelector("#account-status");
const accountButton = document.querySelector("#account-button");

function showAccountMode(mode) {
  const signedInUser = window.PracticeAccounts.getCurrentUser();
  const signedIn = Boolean(signedInUser);
  accountForm.hidden = signedIn || mode !== "signup";
  signInForm.hidden = signedIn || mode !== "signin";
  accountStatus.hidden = !signedIn;
  document.querySelector("#account-mode-signup").classList.toggle("is-active", mode === "signup");
  document.querySelector("#account-mode-signin").classList.toggle("is-active", mode === "signin");
  document.querySelector("#account-mode-signup").setAttribute("aria-selected", String(mode === "signup"));
  document.querySelector("#account-mode-signin").setAttribute("aria-selected", String(mode === "signin"));
  document.querySelector("#account-title").textContent = signedIn ? `Hello, ${signedInUser.username}` : mode === "signup" ? "Create your account" : "Welcome back";
  document.querySelector("#gate-account-button").textContent = signedIn ? "View your profile" : "Create your account";
  document.querySelector(".account-intro").hidden = signedIn || mode === "signin";
  document.querySelector(".account-warning").hidden = signedIn;
  document.querySelector(".account-tabs").hidden = signedIn;
  accountButton.textContent = signedIn ? signedInUser.username : "Create account";
  if (signedIn) {
    const statusLabels = { pending: "Payment pending review", approved: "Premium payment approved", rejected: "Payment not approved", none: "Free profile" };
    document.querySelector("#account-status-chip").textContent = statusLabels[signedInUser.paymentStatus] || "Free profile";
    document.querySelector("#account-status-text").textContent = signedInUser.paymentReference
      ? `Username: ${signedInUser.username}. Reference submitted: ${signedInUser.paymentReference}.`
      : `Username: ${signedInUser.username}. No payment reference is currently on file.`;
  }
}

accountButton.addEventListener("click", () => {
  try {
    showAccountMode("signup");
    accountDialog.showModal();
  } catch (error) {
    window.alert(error.message);
  }
});
document.querySelector("#account-mode-signup").addEventListener("click", () => showAccountMode("signup"));
document.querySelector("#account-mode-signin").addEventListener("click", () => showAccountMode("signin"));

accountForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = document.querySelector("#account-message");
  const password = document.querySelector("#account-password").value;
  if (password !== document.querySelector("#account-password-confirm").value) {
    message.textContent = "The passwords do not match.";
    return;
  }
  message.textContent = "Creating your browser-local demo profile…";
  try {
    await window.PracticeAccounts.createUser({
      username: document.querySelector("#account-username").value,
      password,
      paymentReference: document.querySelector("#payment-reference").value
    });
    accountForm.reset();
    showAccountMode("signup");
    updateSetup();
    document.querySelector("#practice-gate-heading").textContent = "Your profile is ready.";
    document.querySelector("#practice-gate-message").textContent = "Your local demo profile is active. Review your subject, question count, difficulty and time above, then start practice.";
  } catch (error) {
    message.textContent = error.message;
  }
});

signInForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = document.querySelector("#signin-message");
  message.textContent = "Signing in…";
  try {
    await window.PracticeAccounts.signIn(
      document.querySelector("#signin-username").value,
      document.querySelector("#signin-password").value
    );
    signInForm.reset();
    showAccountMode("signin");
    updateSetup();
    document.querySelector("#practice-gate-heading").textContent = "Welcome back.";
    document.querySelector("#practice-gate-message").textContent = "Your local demo profile is active. Review your session settings above, then start practice.";
  } catch (error) {
    message.textContent = error.message;
  }
});

document.querySelector("#account-signout").addEventListener("click", () => {
  sessionActive = false;
  if (timerHandle !== null) {
    window.clearInterval(timerHandle);
    timerHandle = null;
  }
  window.PracticeAccounts.signOut();
  document.querySelector("#question-content").hidden = true;
  document.querySelector("#results-panel").hidden = true;
  document.querySelector("#practice-gate").hidden = false;
  document.querySelector("#practice-gate-heading").textContent = "Create an account to begin.";
  document.querySelector("#practice-gate-message").textContent = "Create a browser-local demo profile before starting practice. Choose your session settings above, then start when you're ready.";
  showAccountMode("signup");
  updateSetup();
});
document.querySelector("#gate-account-button").addEventListener("click", () => accountButton.click());
accountDialog.addEventListener("click", (event) => {
  if (event.target === accountDialog) accountDialog.close();
});

renderSubjects();
document.querySelector("#question-content").hidden = true;
document.querySelector("#results-panel").hidden = true;
updateSetup();
try {
  if (window.PracticeAccounts.getCurrentUser()) {
    showAccountMode("signup");
    document.querySelector("#practice-gate-heading").textContent = "Welcome back.";
    document.querySelector("#practice-gate-message").textContent = "Your local demo profile is active. Review your session settings above, then start practice.";
  }
} catch (error) {
  console.error("Could not restore the browser-local demo profile.", error);
}