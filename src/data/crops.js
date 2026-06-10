// src/data/crops.js
// All crop data – edit freely to add/remove/update entries

export const categories = [
  { id: "vegetable", label: "Vegetable", icon: "bi-flower1", color: "#3a8c1e" },
  { id: "fruit",     label: "Fruit",     icon: "bi-apple",   color: "#e07b39" },
  { id: "flower",    label: "Flower",    icon: "bi-flower2", color: "#d946a8" },
  { id: "herb",      label: "Herb",      icon: "bi-leaf",    color: "#2da05a" },
  { id: "tree",      label: "Crops",     icon: "bi-tree",    color: "#5c7a29" },
];

export const crops = [


    // ── Crops ────────────────────────────────────────────────────────────────────
  {
    id: 15,
    name: "Wheat",
    category: "tree",
    price: 249,
    season: "Summer",
    germinationDays: "14–21",
    rating: 4.6,
    stock: 75,
    featured: true,
    image: "https://pramoda.co.in/wp-content/uploads/2018/12/Wheat.jpg",
    shortDesc: "India's medicinal wonder tree – fast growing.",
    description:
      "Wheat grow into fast-growing, drought-tolerant plants with incredible nutritional and agricultural value. Every part of the wheat plant – grains, straw, leaves – has a practical use. A must-have for any sustainable farm.",
    howToGrow:
      "Sow fresh seeds 2 cm deep in sandy loam. Keep warm (25 °C+). Transplant to permanent location when 30 cm tall. Drought-hardy once established.",
    tips: ["Use fresh seeds – viability drops quickly", "Perfect for agroforestry", "Leaves make excellent pest-control spray"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },
  {
    id: 16,
    name: "Rice",
    category: "tree",
    price: 199,
    season: "Summer",
    germinationDays: "7–14",
    rating: 4.8,
    stock: 110,
    featured: false,
    image: "https://www.pachaa.in/image/cache/catalog/riceDals/rice/buy-marudham-rice-raw-sona-masoori-300x300.jpg",
    shortDesc: "Superfood tree – leaves, pods & seeds all edible.",
    description:
      "Rice is a staple food in many cultures, used in dishes like sambar; leaves in curries and health supplements.",
    howToGrow:
      "Sow directly 2–3 cm deep in well-drained soil with full sun. Germinates quickly in warm soil. Prune annually to control height and encourage new growth.",
    tips: ["Grows 3–5 m/year", "Harvest young leaves regularly", "Deep taproot – drought tolerant after establishment"],
        weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },


  

  // ── Vegetables ──────────────────────────────────────────────────────────────

// {
//     id: 16, 
//     name: "Potato",
//     category: "vegetable",
//     price: 59,
//     season: "Winter",
//     germinationDays: "2–5",
//     rating: 4.7,
//     stock: 500,
//     featured: true,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5WaMvZsSAmZGV4UadscRd_EpDN1eNbNa1w&s",
//     shortDesc: "Versatile, starchy tuber – a kitchen essential.",
//     description: "Potatoes are a versatile and starchy tuber that is a staple food in many cuisines. They are easy to grow and can be stored for long periods.",
//     howToGrow: "Plant seed potatoes in well-drained soil with good sunlight. Water regularly and harvest when the foliage dies back.",
//     tips: ["Choose certified seed potatoes", "Hill soil around plants to protect tubers", "Store in a cool, dark place"],
//     weight: "1 Quantal (100 kg) - 1 bag",
//     sellerPhone: "919876543210",

// },

  {
    id: 1,
    name: "Tomato",
    category: "vegetable",
    price: 129,
    season: "Summer",
    germinationDays: "7–14",
    rating: 4.8,
    stock: 250,
    featured: true,
    image: "https://images.jdmagicbox.com/quickquotes/images_main/-w1eotfca.jpg",
    shortDesc: "Sweet, bite-sized tomatoes bursting with flavour.",
    description:
      "Tomato produce in compact plants loaded with clusters of sweet, juicy fruits. Ideal for container gardens, raised beds, or sunny windowsills. Highly productive and disease-resistant variety perfect for beginners and experts alike.",
    howToGrow:
      "Sow 6mm deep in seed-starting mix indoors 6–8 weeks before last frost. Transplant outdoors when nighttime temps stay above 10 °C. Water regularly; support with stakes or cages.",
    tips: ["Full sun preferred", "Water deeply twice a week", "Pinch suckers for larger fruits"],
        weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://plantogallery.com/cdn/shop/files/spinach.jpg?v=1753979814",
    shortDesc: "Nutrient-rich, fast-growing leafy green.",
    description:
      "This high-yielding spinach variety thrives in cool weather and produces large, dark-green leaves rich in iron and vitamins. Ready to harvest in as little as 30 days. Perfect for salads, curries, and smoothies.",
    howToGrow:
      "Direct sow 1cm deep, 5cm apart in well-drained fertile soil. Keep soil moist. Harvest outer leaves when 8–10 cm long.",
    tips: ["Best in full sun to partial shade", "Avoid transplanting – direct sow preferred", "Harvest in morning for best flavour"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBjvPbijVAPT0qpcO78wEagd3wWM_gHpZ9g&s",
    shortDesc: "Crisp, colourful peppers – red, yellow & green.",
    description:
      "Mixed bell pepper seeds produce heavy-yielding plants with sweet, thick-walled fruits in red, yellow, and green. Rich in Vitamin C and perfect for stir-fries, salads, or stuffing.",
    howToGrow:
      "Start indoors 8–10 weeks before last frost. Transplant into warm, sunny spots with well-amended soil. Water consistently.",
    tips: ["Needs warm soil (20 °C+)", "Feed with potassium-rich fertiliser during fruiting", "Stake plants when heavy with fruit"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI9gBjVky8tb1mf9JKgsJIYa5_uKnwR-_oA&s",
    shortDesc: "Classic purple brinjal for Indian kitchens.",
    description:
      "This classic Indian brinjal variety produces large, glossy, deep-purple fruits that are perfect for bharta, curry, and grilling. Plants are vigorous and highly productive throughout the warm season.",
    howToGrow:
      "Sow seeds in trays, 1 cm deep. Transplant when 15 cm tall. Water generously and mulch to retain soil moisture.",
    tips: ["Loves heat and full sun", "Harvest while skin is shiny", "Rotate crops annually"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://www.purveyd.com/cdn/shop/products/WATERMELON-45-GENERIC_600x.jpg?v=1670352259",
    shortDesc: "Juicy, large summer fruits – up to 8 kg each.",
    description:
      "This heritage watermelon variety produces round to oval fruits weighing 5–8 kg with bright red, sugary flesh. Perfect for home gardens with plenty of space. One of India's favourite summer crops.",
    howToGrow:
      "Direct sow 3 seeds per hole, 2.5 cm deep, in hills 2 m apart after soil warms to 21 °C. Thin to strongest seedling.",
    tips: ["Needs lots of space", "Reduce watering as fruit nears maturity for sweeter flesh", "Tap the fruit – hollow sound = ripe"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/plant-seed/k/d/l/10-organic-muskmelon-sweet-honeydew-seeds-k8767-aywal-original-imagt68q8wcyfccx.jpeg?q=90",
    shortDesc: "Aromatic, sweet cantaloupe-style melon.",
    description:
      "Muskmelon seeds produce sprawling vines yielding aromatic, netted-skin fruits with sweet orange flesh. High in vitamins A and C. Popular across India for fresh eating and juices.",
    howToGrow:
      "Sow seeds in raised mounds in full sun. Water deeply but infrequently. Train vines; support heavy fruits with slings if trellising.",
    tips: ["Full sun essential", "Avoid wetting foliage", "Stop watering 1 week before harvest"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },


  {
    id: 17,
    name: "Papaya",
    category: "fruit",
    price: 179,
    season: "Summer",
    germinationDays: "10–14",
    rating: 4.5,
    stock: 140,
    featured: false,
    image: "https://5.imimg.com/data5/SELLER/Default/2026/3/588480712/QV/QL/FJ/79946230/red-lady-papaya-1-250x250.webp",
    shortDesc: "Fast-growing papaya with sweet orange fruit in about 9 months.",
    description:
      "Papaya Rich in vitamins A and C and the enzyme papain. Ideal for warm Indian climates.",
    howToGrow:
      "Sow 3–4 seeds per hole, 1 cm deep, in full sun with well-drained soil. Thin to the strongest plant. Water regularly but avoid waterlogging.",
    tips: ["Fruits best in warm, frost-free climates", "Avoid waterlogged soil", "Plant multiple for cross-pollination"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },

  {
    id: 21,
    name: "Mango",
    category: "fruit",
    price: 179,
    season: "Summer",
    germinationDays: "10–14",
    rating: 4.5,
    stock: 140,
    featured: false,
    image: "https://images.merstatic.com/imgcache/420x320/images/offer/2021/05/05/mango-1620214851-1620214902.jpg",
    shortDesc: "Sweet mango variety for juicy summer harvests.",
    description:
      "Mango juicy fruits within 9–12 months of sowing. Rich in vitamins A and C and perfect for warm climates.",
    howToGrow:
      "Sow 3–4 seeds per hole, 1 cm deep, in full sun with well-drained soil. Thin to the strongest plant. Water regularly but avoid waterlogging.",
    tips: ["Fruits best in warm, frost-free climates", "Avoid waterlogged soil", "Plant multiple for cross-pollination"],
        weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },

  {
    id: 22,
    name: "Guava",
    category: "fruit",  
    price: 179,
    season: "Summer",
    germinationDays: "10–14",
    rating: 4.5,
    stock: 140,
    featured: false,
    image: "https://indiangloriousnursery.com/wp-content/uploads/2023/04/product-jpeg-500x500-1-1.jpg",
    shortDesc: "Hardy guava plant producing fragrant, nutrient-rich fruit.",
    description:
      "Guava crops produce fast-growing tropical plants that yield sweet, juicy fruits within 9–12 months. Packed with Vitamin C, they are ideal for home orchards and fresh eating.",
    howToGrow:
      "Sow 3–4 seeds per hole, 1 cm deep, in full sun with well-drained soil. Thin to the strongest plant. Water regularly but avoid waterlogging.",
    tips: ["Fruits best in warm, frost-free climates", "Avoid waterlogged soil", "Plant multiple for cross-pollination"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },

  {
    id: 23,
    name: "Litchi",
    category: "fruit",
    price: 179,
    season: "Summer",
    germinationDays: "10–14",
    rating: 4.5,
    stock: 140,
    featured: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8aeR_UONRIqASkq3rrVfn_Gn3j30SWPlQA&s",
    shortDesc: "Juicy litchi harvests from fragrant tropical plants.",
    description:
      "Litchi crops produce lush tropical plants that yield sweet, aromatic fruits in warm climates. The fruit is prized for its delicate flavour and juicy texture.",
    howToGrow:
      "Sow 3–4 seeds per hole, 1 cm deep, in full sun with well-drained soil. Thin to the strongest plant. Water regularly but avoid waterlogging.",
    tips: ["Fruits best in warm, frost-free climates", "Avoid waterlogged soil", "Plant multiple for cross-pollination"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },

  // // ── Flowers ──────────────────────────────────────────────────────────────────
  // {
  //   id: 7,
  //   name: "Marigold (Genda)",
  //   category: "flower",
  //   price: 69,
  //   season: "All Season",
  //   germinationDays: "4–7",
  //   rating: 4.9,
  //   stock: 600,
  //   featured: true,
  //   image: "https://www.seedbasket.in/image/cache/catalog/Products/Flowers/All%20Seasons/Marigold-mix-seeds-550x550w.jpeg",
  //   shortDesc: "Vibrant orange & yellow blooms, natural pest repellent.",
  //   description:
  //     "African Marigold seeds produce tall, bushy plants covered in large pompom blooms in golden orange and yellow. Their scent naturally repels pests making them excellent companion plants. Ideal for festivals, borders, and pots.",
  //   howToGrow:
  //     "Sow directly or in trays, 6mm deep. Thin to 30 cm apart. Deadhead spent blooms to encourage continuous flowering.",
  //   tips: ["Thrives in full sun", "Drought tolerant once established", "Great companion plant for vegetables"],
  //   weight: "1g (≈ 250 seeds)",
  //   sellerPhone: "919876543210",
  // },
  // {
  //   id: 8,
  //   name: "Sunflower",
  //   category: "flower",
  //   price: 119,
  //   season: "Summer",
  //   germinationDays: "7–10",
  //   rating: 4.7,
  //   stock: 320,
  //   featured: true,
  //   image: "https://seedvanam.com/cdn/shop/files/2_65e5fb7f-67a3-4c5e-a889-89acc3ae81c2_1200x.webp?v=1763804758",
  //   shortDesc: "Giant heads reaching 30 cm – a garden showstopper.",
  //   description:
  //     "These giant sunflower seeds grow stalks up to 2 m tall topped with enormous golden-yellow blooms. The seeds attract birds and can be harvested for roasting. Perfect for back borders or statement garden rows.",
  //   howToGrow:
  //     "Direct sow 2.5 cm deep after last frost, in full sun. Thin to 45–60 cm apart. Little care needed once established.",
  //   tips: ["Faces the sun – east to west", "Stake in windy locations", "Harvest seeds when back of head turns brown"],
  //   weight: "10g (≈ 40 seeds)",
  //   sellerPhone: "919876543210",
  // },
  // {
  //   id: 9,
  //   name: "Zinnia Mix",
  //   category: "flower",
  //   price: 89,
  //   season: "Summer",
  //   germinationDays: "5–7",
  //   rating: 4.6,
  //   stock: 450,
  //   featured: false,
  //   image: "https://nativeindianorganics.com/cdn/shop/files/zinnia_mix_seeds_26cfb0ea-cdfb-4c99-9069-8503a8026040.webp?v=1760417980&width=910",
  //   shortDesc: "Vivid rainbow colours – easy for beginners.",
  //   description:
  //     "Zinnia seeds produce upright, bushy plants smothered in fully double blooms in red, pink, orange, purple, and white. Extremely easy to grow, heat-loving, and excellent for cutting. Butterflies love them.",
  //   howToGrow:
  //     "Direct sow after frost risk passes, 6mm deep in full sun. Thin to 15–30 cm. Water at soil level to prevent powdery mildew.",
  //   tips: ["Don't over-water", "Pinch when young for bushier plants", "Excellent cut flower – lasts 10+ days in vase"],
  //   weight: "2g (≈ 80 seeds)",
  //   sellerPhone: "919876543210",
  // },
  // {
  //   id: 10,
  //   name: "Cosmos Mix",
  //   category: "flower",
  //   price: 79,
  //   season: "Summer",
  //   germinationDays: "7–10",
  //   rating: 4.5,
  //   stock: 280,
  //   featured: false,
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hLqw4WANp-lokW-lq9F9n5TeF6iJy7DQqw&s",
  //   shortDesc: "Feathery foliage with delicate daisy-like blooms.",
  //   description:
  //     "Cosmos seeds grow into tall, airy plants with finely cut foliage and cheerful pink, white, and red daisy-like blooms. Self-seeding and low-maintenance, they naturalise beautifully in cottage and wildflower gardens.",
  //   howToGrow:
  //     "Direct sow on soil surface after frost. No covering needed – light aids germination. Thin to 30–45 cm.",
  //   tips: ["Prefers poor soil – avoid over-fertilising", "Self-seeds readily", "Cut regularly to prolong blooming"],
  //   weight: "2g (≈ 100 seeds)",
  //   sellerPhone: "919876543210",
  // },

  // ── Herbs ────────────────────────────────────────────────────────────────────
  // {
  //   id: 11,
  //   name: "Basil (Tulsi Sweet)",
  //   category: "herb",
  //   price: 79,
  //   season: "Summer",
  //   germinationDays: "5–10",
  //   rating: 4.8,
  //   stock: 500,
  //   featured: true,
  //   image: "https://m.media-amazon.com/images/I/81XShXOcB9L._SL1500_.jpg",
  //   shortDesc: "Aromatic culinary basil – perfect with tomatoes.",
  //   description:
  //     "Sweet Basil seeds produce compact, aromatic plants essential in Italian cuisine and Indian cooking. Large, fragrant leaves with a sweet clove-anise flavour. Easy to grow indoors or out and continuously harvestable.",
  //   howToGrow:
  //     "Sow seeds shallowly indoors or outdoors after frosts. Keep warm (21 °C+). Pinch flower buds to keep leaf production high.",
  //   tips: ["Keep indoors near a sunny window", "Pinch flowers immediately for longer leaf harvest", "Water at base to prevent fungal issues"],
  //   weight: "1g (≈ 400 seeds)",
  //   sellerPhone: "919876543210",
  // },
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
    image: "https://satopradhan.com/cdn/shop/products/dhania-sabut-coriander-seeds-100g-natural-and-purely-organic-without-adulteration-satopradhan-1-13351675691158.jpg?v=1696574793",
    shortDesc: "India's favourite herb – fresh leaves & spice seeds.",
    description:
      "Coriander produce fast-growing plants providing fresh leaves for salads, chutneys, and garnishes, plus aromatic seeds used in spice mixes. Dual-purpose and indispensable in Indian cooking.",
    howToGrow:
      "Crush seeds slightly before sowing. Direct sow 1 cm deep in partial shade in summer, full sun in winter. Sow every 3 weeks for continuous supply.",
    tips: ["Bolts quickly in heat – use bolt-resistant variety", "Harvest outer leaves first", "Let some plants go to seed for spice"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://rukminim1.flixcart.com/image/1464/1464/xif0q/plant-seed/d/w/d/15-m-mint32-maa-original-imagh9bwh5g5xpjz.jpeg?q=90",
    shortDesc: "Cool, refreshing mint for drinks, chutneys & more.",
    description:
      "Peppermint seeds grow into vigorous, spreading plants with intensely aromatic leaves used in teas, chutneys, cocktails, and as a digestive aid. Easy to grow and incredibly productive.",
    howToGrow:
      "Surface sow seeds; do not cover. Keep moist in a warm location. Plant in containers to control spreading. Harvest regularly.",
    tips: ["Contains growth in pots", "Loves moisture", "Harvest before flowering for best flavour"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/528652343/QE/EG/MB/82670258/fenugreek-seeds-methi-seeds.jpeg",
    shortDesc: "Fast-growing winter herb – leaves & seeds edible.",
    description:
      "Methi germinate within days and produce tender, slightly bitter leaves that are staples of Indian cooking. The seeds are used as a spice and the sprouts are highly nutritious. One of the fastest-growing kitchen herbs.",
    howToGrow:
      "Direct sow thickly in autumn/winter. Water lightly every day. Harvest leaves from 15–20 days. Resow every 2 weeks for continuous supply.",
      tips: ["Superb in containers", "Harvest whole plant at once or cut-and-come-again", "Soak seeds overnight for faster germination"],
      weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/492387428/YC/JU/DN/233432111/bhindi-okra-f1-hybrid-lady-finger-vegetable-seeds-500x500.webp",
    shortDesc: "Tender green pods – a summer kitchen staple.",
    description:
      "Okra produce tall, ornamental plants with hibiscus-like flowers followed by tender green pods. Highly productive in Indian summer heat. Harvest young pods every 2–3 days for continuous yield.",
    howToGrow:
      "Soak seeds overnight. Direct sow 2 cm deep in warm, well-drained soil. Space 30 cm apart. Water regularly during flowering.",
    tips: ["Loves heat – sow when soil is 21 °C+", "Harvest when 8–10 cm long for tenderness", "Wear gloves – plant irritates skin"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://5.imimg.com/data5/SELLER/Default/2025/2/491371997/FE/KC/YS/233432111/bottle-gourd-lauki-long-f1-vegetable-seeds.jpg",
    shortDesc: "Prolific climbing vine – popular Indian vegetable.",
    description:
      "Bottle gourd produce vigorous climbing vines that yield large, smooth-skinned gourds used extensively in Indian cooking and Ayurvedic medicine. Very easy to grow and extremely productive.",
    howToGrow:
      "Sow 2–3 seeds per hole, 2 cm deep. Provide a strong trellis or fence. Water generously. Harvest when tender at 20–30 cm.",
    tips: ["Needs sturdy support", "Water daily in peak summer", "Harvest young for best flavour"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
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
    image: "https://organicbazar.net/cdn/shop/files/Bitter_Gourd_Karela_Seeds_Hybrid_Long.jpg?v=1770981062&width=1445",
    shortDesc: "Diabetic-friendly bitter gourd with high yield.",
    description:
      "Karela  produce climbing vines with deeply ridged, bitter fruits famous for their anti-diabetic properties and role in Indian cuisine. Very heat-tolerant and productive from June to October.",
    howToGrow:
      "Nick seeds with a file and soak 24 hours before sowing 2 cm deep. Train on trellis. Harvest when green and firm.",
    tips: ["Nick seed coat to improve germination", "Harvest before fruits turn yellow", "Both male and female flowers needed – hand pollinate if needed"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  },

  {
    id: 24,
    name: "Pomegranate",
    category: "fruit",
    price: 199,
    season: "Autumn",
    germinationDays: "10–15",
    rating: 4.5,
    stock: 150,
    featured: false,
    image: "https://images.jdmagicbox.com/quickquotes/images_main/fresh-pomegranate-fruit-red-omp790d4.jpg",
    shortDesc: "Tropical tree with delicious, nutrient-rich fruits.",
    description:
      "Pomegranate produce robust trees that thrive in warm, dry climates. The fruits are rich in antioxidants and are widely used in traditional medicine and cuisine.",
    howToGrow:
      "Sow seeds in well-drained soil. Provide full sun and regular watering. Prune to maintain shape and promote fruiting.",
    tips: ["Prefers alkaline soil", "Requires full sun", "Prune annually to encourage fruiting"],
    weight: "1 Quantal (100 kg) - 1 bag",
    sellerPhone: "919876543210",
  }






  
];

export const getFeaturedCrops = () => crops.filter((c) => c.featured);
export const getCropById = (id) => crops.find((c) => c.id === parseInt(id));
export const getCropsByCategory = (cat) =>
  cat === "all" ? crops : crops.filter((c) => c.category === cat);
export const searchCrops = (query) =>
  crops.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));