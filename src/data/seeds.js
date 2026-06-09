// src/data/seeds.js
// All seed data – edit freely to add/remove/update entries

export const categories = [
  { id: "vegetable", label: "Vegetable", icon: "bi-flower1", color: "#3a8c1e" },
  { id: "fruit",     label: "Fruit",     icon: "bi-apple",   color: "#e07b39" },
  { id: "flower",    label: "Flower",    icon: "bi-flower2", color: "#d946a8" },
  { id: "herb",      label: "Herb",      icon: "bi-leaf",    color: "#2da05a" },
  { id: "tree",      label: "Tree",      icon: "bi-tree",    color: "#5c7a29" },
];

export const seeds = [
  // ── Vegetables ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Cherry Tomato",
    category: "vegetable",
    price: 129,
    season: "Summer",
    germinationDays: "7–14",
    rating: 4.8,
    stock: 250,
    featured: true,
    image: "https://www.allthatgrows.in/cdn/shop/products/V35.jpg?v=1598080204&width=1800",
    shortDesc: "Sweet, bite-sized tomatoes bursting with flavour.",
    description:
      "Cherry Tomato seeds produce compact plants loaded with clusters of sweet, juicy fruits. Ideal for container gardens, raised beds, or sunny windowsills. Highly productive and disease-resistant variety perfect for beginners and experts alike.",
    howToGrow:
      "Sow 6mm deep in seed-starting mix indoors 6–8 weeks before last frost. Transplant outdoors when nighttime temps stay above 10 °C. Water regularly; support with stakes or cages.",
    tips: ["Full sun preferred", "Water deeply twice a week", "Pinch suckers for larger fruits"],
    weight: "1g (≈ 300 seeds)",
  },
  {
    id: 2,
    name: "Spinach (Palak)",
    category: "vegetable",
    price: 89,
    season: "Winter",
    germinationDays: "5–10",
    rating: 4.6,
    stock: 400,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/V72.jpg?v=1598083000&width=1800",
    shortDesc: "Nutrient-rich, fast-growing leafy green.",
    description:
      "This high-yielding spinach variety thrives in cool weather and produces large, dark-green leaves rich in iron and vitamins. Ready to harvest in as little as 30 days. Perfect for salads, curries, and smoothies.",
    howToGrow:
      "Direct sow 1cm deep, 5cm apart in well-drained fertile soil. Keep soil moist. Harvest outer leaves when 8–10 cm long.",
    tips: ["Best in full sun to partial shade", "Avoid transplanting – direct sow preferred", "Harvest in morning for best flavour"],
    weight: "5g (≈ 500 seeds)",
  },
  {
    id: 3,
    name: "Bell Pepper",
    category: "vegetable",
    price: 149,
    season: "Summer",
    germinationDays: "10–21",
    rating: 4.5,
    stock: 180,
    featured: true,
    image: "https://www.allthatgrows.in/cdn/shop/products/V27.jpg?v=1598079552&width=1800",
    shortDesc: "Crisp, colourful peppers – red, yellow & green.",
    description:
      "Mixed bell pepper seeds produce heavy-yielding plants with sweet, thick-walled fruits in red, yellow, and green. Rich in Vitamin C and perfect for stir-fries, salads, or stuffing.",
    howToGrow:
      "Start indoors 8–10 weeks before last frost. Transplant into warm, sunny spots with well-amended soil. Water consistently.",
    tips: ["Needs warm soil (20 °C+)", "Feed with potassium-rich fertiliser during fruiting", "Stake plants when heavy with fruit"],
    weight: "0.5g (≈ 150 seeds)",
  },
  {
    id: 4,
    name: "Brinjal (Eggplant)",
    category: "vegetable",
    price: 99,
    season: "Summer",
    germinationDays: "10–14",
    rating: 4.3,
    stock: 310,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/V18.jpg?v=1598078956&width=1800",
    shortDesc: "Classic purple brinjal for Indian kitchens.",
    description:
      "This classic Indian brinjal variety produces large, glossy, deep-purple fruits that are perfect for bharta, curry, and grilling. Plants are vigorous and highly productive throughout the warm season.",
    howToGrow:
      "Sow seeds in trays, 1 cm deep. Transplant when 15 cm tall. Water generously and mulch to retain soil moisture.",
    tips: ["Loves heat and full sun", "Harvest while skin is shiny", "Rotate crops annually"],
    weight: "1g (≈ 200 seeds)",
  },

  // ── Fruits ───────────────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Watermelon",
    category: "fruit",
    price: 199,
    season: "Summer",
    germinationDays: "5–10",
    rating: 4.7,
    stock: 120,
    featured: true,
    image: "https://www.allthatgrows.in/cdn/shop/products/Fr-78.jpg?v=1742552431&width=1800",
    shortDesc: "Juicy, large summer fruits – up to 8 kg each.",
    description:
      "This heritage watermelon variety produces round to oval fruits weighing 5–8 kg with bright red, sugary flesh. Perfect for home gardens with plenty of space. One of India's favourite summer crops.",
    howToGrow:
      "Direct sow 3 seeds per hole, 2.5 cm deep, in hills 2 m apart after soil warms to 21 °C. Thin to strongest seedling.",
    tips: ["Needs lots of space", "Reduce watering as fruit nears maturity for sweeter flesh", "Tap the fruit – hollow sound = ripe"],
    weight: "5g (≈ 60 seeds)",
  },
  {
    id: 6,
    name: "Muskmelon (Kharbuja)",
    category: "fruit",
    price: 169,
    season: "Summer",
    germinationDays: "5–8",
    rating: 4.5,
    stock: 95,
    featured: false,
    image: "https://m.media-amazon.com/images/I/71h9MmlZmKL._SL1500_.jpg",
    shortDesc: "Aromatic, sweet cantaloupe-style melon.",
    description:
      "Muskmelon seeds produce sprawling vines yielding aromatic, netted-skin fruits with sweet orange flesh. High in vitamins A and C. Popular across India for fresh eating and juices.",
    howToGrow:
      "Sow seeds in raised mounds in full sun. Water deeply but infrequently. Train vines; support heavy fruits with slings if trellising.",
    tips: ["Full sun essential", "Avoid wetting foliage", "Stop watering 1 week before harvest"],
    weight: "2g (≈ 80 seeds)",
  },

  // ── Flowers ──────────────────────────────────────────────────────────────────
  {
    id: 7,
    name: "Marigold (Genda)",
    category: "flower",
    price: 69,
    season: "All Season",
    germinationDays: "4–7",
    rating: 4.9,
    stock: 600,
    featured: true,
    image: "https://organicbazar.net/cdn/shop/files/marigold_double_dwarf_orange_seeds_marigold_flowers_flower_seeds_organic_bazar_seeds_organic_bazar.jpg?v=1755090462",
    shortDesc: "Vibrant orange & yellow blooms, natural pest repellent.",
    description:
      "African Marigold seeds produce tall, bushy plants covered in large pompom blooms in golden orange and yellow. Their scent naturally repels pests making them excellent companion plants. Ideal for festivals, borders, and pots.",
    howToGrow:
      "Sow directly or in trays, 6mm deep. Thin to 30 cm apart. Deadhead spent blooms to encourage continuous flowering.",
    tips: ["Thrives in full sun", "Drought tolerant once established", "Great companion plant for vegetables"],
    weight: "1g (≈ 250 seeds)",
  },
  {
    id: 8,
    name: "Sunflower",
    category: "flower",
    price: 119,
    season: "Summer",
    germinationDays: "7–10",
    rating: 4.7,
    stock: 320,
    featured: true,
    image: "https://www.allthatgrows.in/cdn/shop/products/SunflowerJapaneseMiniature_300ae52f-f431-4020-bc09-c40b9c29c826.jpg?v=1614061547&width=1080",
    shortDesc: "Giant heads reaching 30 cm – a garden showstopper.",
    description:
      "These giant sunflower seeds grow stalks up to 2 m tall topped with enormous golden-yellow blooms. The seeds attract birds and can be harvested for roasting. Perfect for back borders or statement garden rows.",
    howToGrow:
      "Direct sow 2.5 cm deep after last frost, in full sun. Thin to 45–60 cm apart. Little care needed once established.",
    tips: ["Faces the sun – east to west", "Stake in windy locations", "Harvest seeds when back of head turns brown"],
    weight: "10g (≈ 40 seeds)",
  },
  {
    id: 9,
    name: "Zinnia Mix",
    category: "flower",
    price: 89,
    season: "Summer",
    germinationDays: "5–7",
    rating: 4.6,
    stock: 450,
    featured: false,
    image: "https://organicbazar.net/cdn/shop/files/ZinniaLiliputMixedColorSeeds_1_d6b4c595-314a-492d-9522-cc4289b0da30.jpg?v=1755428698&width=1100",
    shortDesc: "Vivid rainbow colours – easy for beginners.",
    description:
      "Zinnia seeds produce upright, bushy plants smothered in fully double blooms in red, pink, orange, purple, and white. Extremely easy to grow, heat-loving, and excellent for cutting. Butterflies love them.",
    howToGrow:
      "Direct sow after frost risk passes, 6mm deep in full sun. Thin to 15–30 cm. Water at soil level to prevent powdery mildew.",
    tips: ["Don't over-water", "Pinch when young for bushier plants", "Excellent cut flower – lasts 10+ days in vase"],
    weight: "2g (≈ 80 seeds)",
  },
  {
    id: 10,
    name: "Cosmos Mix",
    category: "flower",
    price: 79,
    season: "Summer",
    germinationDays: "7–10",
    rating: 4.5,
    stock: 280,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/CosmosBrightLights_632a082d-5890-40bb-b6aa-2d2be7b33245.jpg?v=1614062564&width=1800",
    shortDesc: "Feathery foliage with delicate daisy-like blooms.",
    description:
      "Cosmos seeds grow into tall, airy plants with finely cut foliage and cheerful pink, white, and red daisy-like blooms. Self-seeding and low-maintenance, they naturalise beautifully in cottage and wildflower gardens.",
    howToGrow:
      "Direct sow on soil surface after frost. No covering needed – light aids germination. Thin to 30–45 cm.",
    tips: ["Prefers poor soil – avoid over-fertilising", "Self-seeds readily", "Cut regularly to prolong blooming"],
    weight: "2g (≈ 100 seeds)",
  },

  // ── Herbs ────────────────────────────────────────────────────────────────────
  {
    id: 11,
    name: "Basil (Tulsi Sweet)",
    category: "herb",
    price: 79,
    season: "Summer",
    germinationDays: "5–10",
    rating: 4.8,
    stock: 500,
    featured: true,
    image: "https://www.allthatgrows.in/cdn/shop/products/H07.jpg?v=1598076196&width=1800",
    shortDesc: "Aromatic culinary basil – perfect with tomatoes.",
    description:
      "Sweet Basil seeds produce compact, aromatic plants essential in Italian cuisine and Indian cooking. Large, fragrant leaves with a sweet clove-anise flavour. Easy to grow indoors or out and continuously harvestable.",
    howToGrow:
      "Sow seeds shallowly indoors or outdoors after frosts. Keep warm (21 °C+). Pinch flower buds to keep leaf production high.",
    tips: ["Keep indoors near a sunny window", "Pinch flowers immediately for longer leaf harvest", "Water at base to prevent fungal issues"],
    weight: "1g (≈ 400 seeds)",
  },
  {
    id: 12,
    name: "Coriander (Dhaniya)",
    category: "herb",
    price: 59,
    season: "Winter",
    germinationDays: "7–10",
    rating: 4.7,
    stock: 650,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/M13.jpg?v=1598073557&width=1800",
    shortDesc: "India's favourite herb – fresh leaves & spice seeds.",
    description:
      "Coriander seeds produce fast-growing plants providing fresh leaves for salads, chutneys, and garnishes, plus aromatic seeds used in spice mixes. Dual-purpose and indispensable in Indian cooking.",
    howToGrow:
      "Crush seeds slightly before sowing. Direct sow 1 cm deep in partial shade in summer, full sun in winter. Sow every 3 weeks for continuous supply.",
    tips: ["Bolts quickly in heat – use bolt-resistant variety", "Harvest outer leaves first", "Let some plants go to seed for spice"],
    weight: "5g (≈ 200 seeds)",
  },
  {
    id: 13,
    name: "Mint (Pudina)",
    category: "herb",
    price: 89,
    season: "All Season",
    germinationDays: "10–16",
    rating: 4.6,
    stock: 380,
    featured: false,
    image: "https://organicbazar.net/cdn/shop/files/MintSeeds_PipretaSeeds_PudinaSeeds.jpg?v=1761632901&width=1920",
    shortDesc: "Cool, refreshing mint for drinks, chutneys & more.",
    description:
      "Peppermint seeds grow into vigorous, spreading plants with intensely aromatic leaves used in teas, chutneys, cocktails, and as a digestive aid. Easy to grow and incredibly productive.",
    howToGrow:
      "Surface sow seeds; do not cover. Keep moist in a warm location. Plant in containers to control spreading. Harvest regularly.",
    tips: ["Contains growth in pots", "Loves moisture", "Harvest before flowering for best flavour"],
    weight: "0.5g (≈ 500 seeds)",
  },
  {
    id: 14,
    name: "Fenugreek (Methi)",
    category: "herb",
    price: 49,
    season: "Winter",
    germinationDays: "3–5",
    rating: 4.5,
    stock: 800,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/H14.jpg?v=1598076939&width=1800",
    shortDesc: "Fast-growing winter herb – leaves & seeds edible.",
    description:
      "Methi seeds germinate within days and produce tender, slightly bitter leaves that are staples of Indian cooking. The seeds are used as a spice and the sprouts are highly nutritious. One of the fastest-growing kitchen herbs.",
    howToGrow:
      "Direct sow thickly in autumn/winter. Water lightly every day. Harvest leaves from 15–20 days. Resow every 2 weeks for continuous supply.",
    tips: ["Superb in containers", "Harvest whole plant at once or cut-and-come-again", "Soak seeds overnight for faster germination"],
    weight: "10g (≈ 1000 seeds)",
  },

  // ── Trees ────────────────────────────────────────────────────────────────────
  {
    id: 15,
    name: "Neem Tree",
    category: "tree",
    price: 249,
    season: "Summer",
    germinationDays: "14–21",
    rating: 4.6,
    stock: 75,
    featured: true,
    image: "https://rukminim2.flixcart.com/image/1464/1464/xif0q/plant-seed/b/f/2/250-neem-seeds-vepa-ginjalu-azadirachta-indica-value-life-original-imahhuazmttkvsvr.jpeg?q=90",
    shortDesc: "India's medicinal wonder tree – fast growing.",
    description:
      "Neem tree seeds grow into fast-growing, drought-tolerant trees with incredible medicinal, insecticidal, and ecological value. Every part of the neem tree – leaves, bark, seeds – has a practical use. A must-have for any sustainable garden.",
    howToGrow:
      "Sow fresh seeds 2 cm deep in sandy loam. Keep warm (25 °C+). Transplant to permanent location when 30 cm tall. Drought-hardy once established.",
    tips: ["Use fresh seeds – viability drops quickly", "Perfect for agroforestry", "Leaves make excellent pest-control spray"],
    weight: "20g (≈ 10 seeds)",
  },
  {
    id: 16,
    name: "Moringa (Drumstick)",
    category: "tree",
    price: 199,
    season: "Summer",
    germinationDays: "7–14",
    rating: 4.8,
    stock: 110,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/V53.jpg?v=1598081537&width=1800",
    shortDesc: "Superfood tree – leaves, pods & seeds all edible.",
    description:
      "Moringa oleifera is one of the world's most nutritious trees. Fast-growing, drought-tolerant, and productive, every part is edible and medicinal. Pods (drumsticks) are used in sambar; leaves in curries and health supplements.",
    howToGrow:
      "Sow directly 2–3 cm deep in well-drained soil with full sun. Germinates quickly in warm soil. Prune annually to control height and encourage new growth.",
    tips: ["Grows 3–5 m/year", "Harvest young leaves regularly", "Deep taproot – drought tolerant after establishment"],
    weight: "10g (≈ 15 seeds)",
  },
  {
    id: 17,
    name: "Papaya",
    category: "tree",
    price: 179,
    season: "Summer",
    germinationDays: "10–14",
    rating: 4.5,
    stock: 140,
    featured: false,
    image: "https://organicbazar.net/cdn/shop/files/Desi_Papaya_Op_Seeds_papaya_seeds_organic_bazae_fruit_seeds_fruit_seeds_yellow_papaya_seeds.jpg?v=1757424601&width=1100",
    shortDesc: "Tropical fruiting tree – bears fruit in 9 months.",
    description:
      "Papaya seeds produce fast-growing, tropical trees that bear sweet, orange-fleshed fruits within 9–12 months of sowing. Rich in vitamins A and C and the enzyme papain. Ideal for warm Indian climates.",
    howToGrow:
      "Sow 3–4 seeds per hole, 1 cm deep, in full sun with well-drained soil. Thin to the strongest plant. Water regularly but avoid waterlogging.",
    tips: ["Fruits best in warm, frost-free climates", "Avoid waterlogged soil", "Plant multiple for cross-pollination"],
    weight: "2g (≈ 50 seeds)",
  },

  // ── Extra Vegetables ─────────────────────────────────────────────────────────
  {
    id: 18,
    name: "Okra (Bhindi)",
    category: "vegetable",
    price: 79,
    season: "Summer",
    germinationDays: "5–10",
    rating: 4.4,
    stock: 420,
    featured: false,
    image: "https://organicbazar.net/cdn/shop/files/OkraorLadyFingerSeeds_okraseeds_ladyfingerseeds_vegetableseeds_organicbazarseeds_bhndiKeBeej.jpg?v=1770811840&width=1100",
    shortDesc: "Tender green pods – a summer kitchen staple.",
    description:
      "Okra seeds produce tall, ornamental plants with hibiscus-like flowers followed by tender green pods. Highly productive in Indian summer heat. Harvest young pods every 2–3 days for continuous yield.",
    howToGrow:
      "Soak seeds overnight. Direct sow 2 cm deep in warm, well-drained soil. Space 30 cm apart. Water regularly during flowering.",
    tips: ["Loves heat – sow when soil is 21 °C+", "Harvest when 8–10 cm long for tenderness", "Wear gloves – plant irritates skin"],
    weight: "5g (≈ 60 seeds)",
  },
  {
    id: 19,
    name: "Bottle Gourd (Lauki)",
    category: "vegetable",
    price: 69,
    season: "Summer",
    germinationDays: "5–7",
    rating: 4.3,
    stock: 300,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/V15.jpg?v=1598078732&width=1800",
    shortDesc: "Prolific climbing vine – popular Indian vegetable.",
    description:
      "Bottle gourd seeds produce vigorous climbing vines that yield large, smooth-skinned gourds used extensively in Indian cooking and Ayurvedic medicine. Very easy to grow and extremely productive.",
    howToGrow:
      "Sow 2–3 seeds per hole, 2 cm deep. Provide a strong trellis or fence. Water generously. Harvest when tender at 20–30 cm.",
    tips: ["Needs sturdy support", "Water daily in peak summer", "Harvest young for best flavour"],
    weight: "5g (≈ 30 seeds)",
  },
  {
    id: 20,
    name: "Bitter Gourd (Karela)",
    category: "vegetable",
    price: 89,
    season: "Summer",
    germinationDays: "7–12",
    rating: 4.2,
    stock: 260,
    featured: false,
    image: "https://www.allthatgrows.in/cdn/shop/products/V11.jpg?v=1598078422&width=1800",
    shortDesc: "Diabetic-friendly bitter gourd with high yield.",
    description:
      "Karela seeds produce climbing vines with deeply ridged, bitter fruits famous for their anti-diabetic properties and role in Indian cuisine. Very heat-tolerant and productive from June to October.",
    howToGrow:
      "Nick seeds with a file and soak 24 hours before sowing 2 cm deep. Train on trellis. Harvest when green and firm.",
    tips: ["Nick seed coat to improve germination", "Harvest before fruits turn yellow", "Both male and female flowers needed – hand pollinate if needed"],
    weight: "5g (≈ 25 seeds)",
  },
];

export const getFeaturedSeeds = () => seeds.filter((s) => s.featured);
export const getSeedById = (id) => seeds.find((s) => s.id === parseInt(id));
export const getSeedsByCategory = (cat) =>
  cat === "all" ? seeds : seeds.filter((s) => s.category === cat);
export const searchSeeds = (query) =>
  seeds.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));