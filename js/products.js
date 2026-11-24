// ============================================================
// AEROPACK – PRODUCT CATALOG DATASET
// Consistent across Home, Services, Service Details & Pricing
// ============================================================

const AEROPACK_PRODUCTS = [
  {
    id: "aero-voyager-set",
    name: "AeroVoyager Pro 3-Piece Luggage Set",
    category: "luggage-sets",
    categoryName: "Luggage Sets",
    price: 489,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 142,
    pieces: 3,
    size: "20\" / 24\" / 28\"",
    material: "Polycarbonate Shell",
    shellType: "Hard-Shell",
    colors: [
      { name: "Midnight Navy", hex: "#17283D", active: true },
      { name: "Graphite", hex: "#30363D" },
      { name: "Warm Sand", hex: "#E9DDCA" }
    ],
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575844264771-892081089af5?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Bestseller",
    badgeType: "bestseller",
    features: ["360° Whisper-Glide Spinner Wheels", "Built-in TSA Approved Lock", "Expandable Zipper (+20% Capacity)"],
    description: "The definitive 3-piece travel solution engineered from aerospace-grade Makrolon® polycarbonate. Includes 20\" Carry-On, 24\" Medium Check-In, and 28\" Extended Journey Trunk.",
    specs: {
      dimensions: "Carry-On: 55x38x23 cm | Medium: 68x46x28 cm | Large: 78x52x32 cm",
      weight: "2.9 kg / 3.8 kg / 4.6 kg",
      capacity: "38L / 68L / 102L",
      wheels: "Dual Japanese Hinomoto 360° silent wheels",
      handle: "3-stage telescopic aviation-grade aluminum handle",
      lock: "Integrated dual TSA combination recessed lock",
      warranty: "5-Year Limited Global Shell Warranty"
    }
  },
  {
    id: "stratus-carry-on",
    name: "Stratus Luxe Carbon Cabin Suitcase",
    category: "cabin-luggage",
    categoryName: "Cabin Luggage",
    price: 265,
    originalPrice: 310,
    rating: 4.8,
    reviewsCount: 98,
    pieces: 1,
    size: "21\" (Cabin)",
    material: "Polycarbonate & Aluminum Frame",
    shellType: "Hard-Shell",
    colors: [
      { name: "Deep Teal", hex: "#285B62", active: true },
      { name: "Graphite", hex: "#30363D" },
      { name: "Off White", hex: "#F8F8F5" }
    ],
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Staff Pick",
    badgeType: "featured",
    features: ["IATA Cabin Approved Size", "Front Quick-Access Laptop Sleeve", "Internal Compression Pad"],
    description: "Designed for discerning frequent flyers who require seamless overhead bin compliance, instant security checkpoint access, and indestructible structural protection.",
    specs: {
      dimensions: "55 x 36 x 23 cm (Complies with major airline carry-on allowances)",
      weight: "3.1 kg",
      capacity: "42 Liters",
      wheels: "Quad-bearing silent spinner wheels",
      handle: "Multi-stop ergonomic anodized grip handle",
      lock: "TSA007 Certified keyless code lock",
      warranty: "Lifetime Structural Frame Protection"
    }
  },
  {
    id: "horizon-checkin-large",
    name: "Horizon Grand 28\" Check-in Trunk",
    category: "checkin-suitcases",
    categoryName: "Check-in Suitcases",
    price: 345,
    originalPrice: 395,
    rating: 4.9,
    reviewsCount: 76,
    pieces: 1,
    size: "28\" (Check-in)",
    material: "Polycarbonate Shell",
    shellType: "Hard-Shell",
    colors: [
      { name: "Midnight Navy", hex: "#17283D", active: true },
      { name: "Muted Gold", hex: "#B99A63" }
    ],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Popular",
    badgeType: "bestseller",
    features: ["Massive 96L Packing Capacity", "Corner Aluminum Reinforcement Caps", "Waterproof Wet-Pocket Divider"],
    description: "When extended journeys call for comprehensive packing, the Horizon Grand delivers unmatched capacity with effortless glide performance across airport concourses.",
    specs: {
      dimensions: "76 x 50 x 31 cm",
      weight: "4.7 kg",
      capacity: "96 Liters",
      wheels: "Double steel-axle 360° caster wheels",
      handle: "Heavy-duty dual-tube aluminum push handle",
      lock: "Flush-mount dual TSA latch system",
      warranty: "5-Year Global Travel Protection"
    }
  },
  {
    id: "apex-flight-duffel",
    name: "Apex Ballistic Weekender Duffel",
    category: "duffel-bags",
    categoryName: "Duffel Bags",
    price: 185,
    originalPrice: 220,
    rating: 4.7,
    reviewsCount: 64,
    pieces: 1,
    size: "Weekender (45L)",
    material: "1680D Cordura Ballistic Nylon",
    shellType: "Soft-Shell",
    colors: [
      { name: "Graphite", hex: "#30363D", active: true },
      { name: "Midnight Navy", hex: "#17283D" }
    ],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "New",
    badgeType: "new",
    features: ["Dedicated Ventilated Shoe Garage", "Pass-Through Luggage Trolley Sleeve", "Water-Repellent DWR Finish"],
    description: "Crafted for 48-hour business sprints and adventurous weekend getaways, featuring rugged ballistic weave nylon and Italian full-grain leather touchpoints.",
    specs: {
      dimensions: "52 x 28 x 26 cm",
      weight: "1.4 kg",
      capacity: "45 Liters",
      wheels: "N/A (Ergonomic Padded Shoulder Sling)",
      handle: "Reinforced magnetic leather wrap carry handles",
      lock: "YKK Racquet Coil tamper-resistant zippers",
      warranty: "3-Year Limited Material Guarantee"
    }
  },
  {
    id: "traverse-travel-backpack",
    name: "Traverse Pro 35L Expandable Travel Pack",
    category: "travel-backpacks",
    categoryName: "Travel Backpacks",
    price: 195,
    originalPrice: 240,
    rating: 4.9,
    reviewsCount: 110,
    pieces: 1,
    size: "35L (Expandable)",
    material: "Recycled Oxford Nylon & TPU",
    shellType: "Soft-Shell",
    colors: [
      { name: "Midnight Navy", hex: "#17283D", active: true },
      { name: "Deep Teal", hex: "#285B62" },
      { name: "Graphite", hex: "#30363D" }
    ],
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Top Rated",
    badgeType: "bestseller",
    features: ["180° Clamshell Suitcase Opening", "Suspended 16\" Padded Laptop Vault", "Concealed Passport Anti-Theft Pocket"],
    description: "The one-bag traveler’s holy grail. Combines the organized volume of a suitcase with the ergonomic mobility of an alpine expedition pack.",
    specs: {
      dimensions: "50 x 32 x 20 cm (Expands to 25 cm depth)",
      weight: "1.35 kg",
      capacity: "35L (Expands to 42L)",
      wheels: "Ergonomic load-lifter shoulder harness",
      handle: "Top & side dual padded haul handles",
      lock: "Lockable storm-resistant reverse coil zippers",
      warranty: "3-Year Craftsmanship Warranty"
    }
  },
  {
    id: "executive-briefcase",
    name: "Vanguard Commute Executive Laptop Brief",
    category: "business-bags",
    categoryName: "Business Bags",
    price: 175,
    originalPrice: 210,
    rating: 4.8,
    reviewsCount: 52,
    pieces: 1,
    size: "15.6\" Laptop Fit",
    material: "Full-Grain Italian Leather & Nylon",
    shellType: "Soft-Shell",
    colors: [
      { name: "Graphite", hex: "#30363D", active: true },
      { name: "Midnight Navy", hex: "#17283D" }
    ],
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Executive",
    badgeType: "featured",
    features: ["Tech-Organized Cable Bay", "Magnetic Quick-Snap Closures", "Luggage Stacking Rear Sleeve"],
    description: "Engineered for international corporate commutes, boardroom presentations, and seamless terminal transit with dedicated tech storage.",
    specs: {
      dimensions: "42 x 31 x 11 cm",
      weight: "1.1 kg",
      capacity: "16 Liters",
      wheels: "N/A (Luggage pass-through strap)",
      handle: "Hand-stitched rolled leather grab handles",
      lock: "Custom metal push-clip lock",
      warranty: "2-Year Manufacturer Quality Support"
    }
  },
  {
    id: "aero-duo-set",
    name: "Nomad Duo 2-Piece Carry-On & Check Set",
    category: "luggage-sets",
    categoryName: "Luggage Sets",
    price: 380,
    originalPrice: 450,
    rating: 4.8,
    reviewsCount: 88,
    pieces: 2,
    size: "20\" Cabin & 26\" Medium",
    material: "Virgin Covestro Polycarbonate",
    shellType: "Hard-Shell",
    colors: [
      { name: "Warm Sand", hex: "#E9DDCA", active: true },
      { name: "Deep Teal", hex: "#285B62" },
      { name: "Midnight Navy", hex: "#17283D" }
    ],
    image: "https://images.unsplash.com/photo-1575844264771-892081089af5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575844264771-892081089af5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Sale -15%",
    badgeType: "sale",
    features: ["Nesting Storage Design", "Double-Coil Burst-Proof Zippers", "Scratch-Resistant Micro-Diamond Texture"],
    description: "The ideal pair for modern duos and flexible solo voyagers: store the cabin piece snugly inside the 26\" trunk when resting at home.",
    specs: {
      dimensions: "Cabin: 55x38x22 cm | Medium: 67x45x27 cm",
      weight: "3.0 kg / 4.1 kg",
      capacity: "39L / 72L",
      wheels: "Whisper-quiet dual wheel spinners",
      handle: "3-position aviation-aluminum telescope bar",
      lock: "Integrated TSA combination lock on each",
      warranty: "5-Year Global Shell Guarantee"
    }
  },
  {
    id: "ultralight-soft-cabin",
    name: "Aerolight Featherweight Softshell Trolley",
    category: "soft-shell-suitcases",
    categoryName: "Soft-Shell Suitcases",
    price: 215,
    originalPrice: 250,
    rating: 4.7,
    reviewsCount: 47,
    pieces: 1,
    size: "21\" Cabin",
    material: "High-Tenacity 600D Dobby Fabric",
    shellType: "Soft-Shell",
    colors: [
      { name: "Graphite", hex: "#30363D", active: true },
      { name: "Midnight Navy", hex: "#17283D" }
    ],
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Ultralight",
    badgeType: "new",
    features: ["Weighs Only 2.2 kg Unpacked", "Exterior Document Front Zip Pockets", "Flex-Frame Corner Protection"],
    description: "For travelers who treasure every gram of weight allowance, the Aerolight provides flexible capacity, deep exterior pockets, and featherweight ease.",
    specs: {
      dimensions: "54 x 37 x 22 cm",
      weight: "2.2 kg",
      capacity: "41 Liters",
      wheels: "Omni-directional dual glide wheels",
      handle: "Lightweight single-button lock handle",
      lock: "TSA approved side lock",
      warranty: "3-Year Limited Material Guarantee"
    }
  },
  {
    id: "meridian-packing-cubes",
    name: "Meridian 6-Piece Compression Cube System",
    category: "travel-accessories",
    categoryName: "Travel Accessories",
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviewsCount: 164,
    pieces: 6,
    size: "XS, S, M, L, Shoe, Laundry",
    material: "Ripstop Ultralight Silicone Nylon",
    shellType: "Accessory",
    colors: [
      { name: "Deep Teal", hex: "#285B62", active: true },
      { name: "Graphite", hex: "#30363D" },
      { name: "Warm Sand", hex: "#E9DDCA" }
    ],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Essential",
    badgeType: "bestseller",
    features: ["Double-Zip Compression System (-50% Bulk)", "Semi-Translucent Breathable Mesh", "Water-Resistant Coating"],
    description: "Transform chaotic suitcase interiors into organized zen. Compresses clothes up to 50% so you pack double with zero creases.",
    specs: {
      dimensions: "Includes 6 modular sizes fitting all AeroPack trunks",
      weight: "340 grams total set",
      capacity: "Scalable 10L - 45L packing space",
      wheels: "N/A",
      handle: "Grab loop webbing on each cube",
      lock: "Heavy-duty YKK compression dual zips",
      warranty: "2-Year Stitching Guarantee"
    }
  },
  {
    id: "albatross-leather-weekender",
    name: "Albatross Heritage Leather Duffel Bag",
    category: "duffel-bags",
    categoryName: "Duffel Bags",
    price: 295,
    originalPrice: 340,
    rating: 4.9,
    reviewsCount: 39,
    pieces: 1,
    size: "50L Capacity",
    material: "Full-Grain Vegetable Tanned Leather",
    shellType: "Soft-Shell",
    colors: [
      { name: "Warm Sand", hex: "#E9DDCA", active: true },
      { name: "Midnight Navy", hex: "#17283D" }
    ],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Heritage",
    badgeType: "featured",
    features: ["Antiqued Solid Brass Hardware", "Reinforced Base with Metal Feet", "Padded Ergonomic Leather Strap"],
    description: "Handcrafted to age with distinguished patina across decades of global wandering, road trips, and weekend hotel escapes.",
    specs: {
      dimensions: "54 x 30 x 28 cm",
      weight: "1.95 kg",
      capacity: "50 Liters",
      wheels: "N/A",
      handle: "Twin riveted harness leather handles",
      lock: "Heavy brass padlock with leather key clochette",
      warranty: "5-Year Heritage Leather Craftsmanship"
    }
  },
  {
    id: "zenith-security-lock-kit",
    name: "Zenith TSA Heavy-Duty Cable Lock & Tag Set",
    category: "travel-accessories",
    categoryName: "Travel Accessories",
    price: 34,
    originalPrice: 42,
    rating: 4.8,
    reviewsCount: 82,
    pieces: 2,
    size: "Universal Fit",
    material: "Braided Steel & Zinc Alloy",
    shellType: "Accessory",
    colors: [
      { name: "Graphite", hex: "#30363D", active: true },
      { name: "Muted Gold", hex: "#B99A63" }
    ],
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Safety",
    badgeType: "bestseller",
    features: ["Patented Open-Inspection Alert Indicator", "Flexible High-Tensile Steel Cable", "Laser-Etched Metal ID Tag"],
    description: "Peace of mind across international transit lines. Notifies you if customs agents inspected your luggage en route.",
    specs: {
      dimensions: "Lock: 7.5 x 3.2 cm | Cable length: 12 cm",
      weight: "95 grams",
      capacity: "Universal fit through all luggage zipper pullers",
      wheels: "N/A",
      handle: "N/A",
      lock: "TSA certified 3-dial resettable lock",
      warranty: "Lifetime Hardware Replacement Support"
    }
  },
  {
    id: "voyage-tech-organizer",
    name: "Atlas Magnetic Tech & Cable Travel Folio",
    category: "travel-accessories",
    categoryName: "Travel Accessories",
    price: 52,
    originalPrice: 65,
    rating: 4.8,
    reviewsCount: 71,
    pieces: 1,
    size: "Compact Tech Case",
    material: "Weatherproof Matte Tarpaulin & Poly",
    shellType: "Accessory",
    colors: [
      { name: "Midnight Navy", hex: "#17283D", active: true },
      { name: "Graphite", hex: "#30363D" }
    ],
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80"
    ],
    badge: "Tech Essential",
    badgeType: "featured",
    features: ["Elastic Cable Tidy Loops", "Zippered Power Bank Compartment", "Pass-Through Charging Port Hole"],
    description: "Keeps chargers, international adapters, SD cards, AirPods, and stylus pens safely segregated and immediately deployable.",
    specs: {
      dimensions: "24 x 16 x 6 cm",
      weight: "220 grams",
      capacity: "Houses 1x power bank, 5x cords, adapters & mouse",
      wheels: "N/A",
      handle: "Slim side slip handle",
      lock: "Weather-sealed polyurethane coated zipper",
      warranty: "2-Year Quality Guarantee"
    }
  }
];

// Reusable helper functions
function getProductById(id) {
  return AEROPACK_PRODUCTS.find(p => p.id === id) || AEROPACK_PRODUCTS[0];
}

function getBestsellers() {
  return AEROPACK_PRODUCTS.filter(p => p.badgeType === "bestseller" || p.rating >= 4.8).slice(0, 4);
}

function getProductsByCategory(category) {
  if (!category || category === "all") return AEROPACK_PRODUCTS;
  return AEROPACK_PRODUCTS.filter(p => p.category === category);
}
