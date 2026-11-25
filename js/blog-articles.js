/* Editorial article data for blog-details.html.
   Each article is selected with ?id=<article-id> from blog.html links. */
window.BLOG_ARTICLES = {
  "carry-on-guide": {
    category: "Master Packing Guide",
    breadcrumb: "Carry-On Packing Guide",
    title: "The Art of Carry-On Travel: 7 Days in 38 Liters",
    shortTitle: "The Art of Carry-On Travel",
    author: "Julien Mercer",
    role: "Senior Travel Editor",
    date: "March 18, 2026",
    readTime: "6 min read",
    topic: "Category: Packing Science",
    image: "../images/blog-carry-on-guide.jpg",
    imageAlt: "The Art of Carry-On Travel packing guide",
    summary: "Skip baggage claim queues and airline check-in delays forever. Learn the 3-3-3 modular wardrobe method paired with compression packing cubes so you travel lighter, smarter, and completely unrestricted.",
    sections: [
      {
        heading: "1. The 3-3-3 Modular Wardrobe Method",
        paragraphs: [
          "The foundation of prolonged carry-on travel is color cohesion. Choose a three-tone palette such as midnight navy, graphite gray, and off-white, then build a strict inventory of three tops, three bottoms, and three accessories. When every garment harmonizes with every other piece, you generate dozens of distinct outfits from a minimal wardrobe.",
          "The rule below keeps a 38-liter cabin case functional without sacrificing presentation at the destination. Wear the bulkiest shoes in transit and pack only one compact alternate pair."
        ],
        list: [
          "3 Tops: 2 merino wool t-shirts, 1 tailored oxford shirt.",
          "3 Bottoms: 2 technical travel chinos, 1 pair of dark denim.",
          "3 Layers & Accessories: 1 lightweight scarf, 1 compact umbrella, 1 unstructured travel blazer."
        ]
      },
      {
        heading: "2. The Clamshell Split: Left vs. Right Geometry",
        paragraphs: [
          "In standard luggage, heavy shoes shift and crush delicate shirts. In an AeroPack hard-shell suitcase, the internal volume is deliberately bifurcated.",
          "The left enclosure is reserved for footwear, electronic charging folios, and toiletries sealed inside waterproof barrier pouches. The right enclosure houses garment compression cubes secured under the adjustable pad. Cinching the straps expels air from the weave and locks garments in place to prevent friction creases."
        ],
        figure: {
          src: "../images/blog-compression-cubes.jpg",
          alt: "Compression packing cubes organized inside a suitcase",
          caption: "Figure 1: Dual-sided clamshell packing maximizes volumetric displacement."
        }
      }
    ],
    tips: [
      { icon: "fa-plane", title: "Airport Concourse Wisdom", text: "Roll four-wheel spinner luggage beside your hips on smooth terminal tile rather than tilting onto two wheels. This balances the center of gravity and extends caster bearing longevity." },
      { icon: "fa-soap", title: "Post-Voyage Shell Care", text: "After return flights, wipe your polycarbonate suitcase with a damp microfiber cloth and remove baggage-tag residue with a drop of citrus solvent." },
      { icon: "fa-box-archive", title: "Heavy Weight Placement", text: "Position shoes and charging bricks toward the wheel base so the case does not tip forward when stood upright at taxi ranks." },
      { icon: "fa-lock", title: "Zipper Relief Strategy", text: "Press the two shell halves together before sliding a strained zipper puller around a corner to relieve tension on the teeth." }
    ],
    related: ["iata-overhead-limits", "compression-cubes", "corporate-itinerary", "suitcase-sizes"],
    cta: {
      title: "Explore The Cabin & Carry-On Collection",
      text: "Put these packing principles into practice with our Stratus Luxe Carbon Cabin Suitcase and Meridian 6-Piece Compression Cube System.",
      primaryLabel: "View Cabin Suitcase →",
      primaryHref: "service-details.html?id=stratus-carry-on",
      secondaryLabel: "Shop Compression Cubes",
      secondaryHref: "services.html?category=travel-accessories"
    }
  },

  "iata-overhead-limits": {
    category: "Buying Advice",
    breadcrumb: "Airline Cabin Rules",
    title: "Understanding IATA Overhead Bin Limits Across Major Airlines",
    shortTitle: "IATA Overhead Bin Limits",
    author: "Elena Rostova",
    role: "Aviation Analyst",
    date: "March 11, 2026",
    readTime: "5 min read",
    topic: "Category: Airline Regulations",
    image: "../images/blog-iata-limits.jpg",
    imageAlt: "IATA overhead bin limits guide",
    summary: "A comprehensive breakdown of cabin luggage allowances across European, North American, and Asian carriers, including how to measure a case the way an airline gate agent will.",
    sections: [
      {
        heading: "1. The IATA 55 × 35 × 23 cm Baseline",
        paragraphs: [
          "IATA publishes a recommended maximum cabin bag size of 55 × 35 × 23 cm including wheels, handles, and protruding pockets. Most carriers adopt this envelope, but a recommendation is not a guarantee: the operating airline's contract of carriage always takes precedence.",
          "Measure the case at its widest physical points, not just the shell. Side handles, spinner wheel housings, and front tech pockets frequently add two to four centimeters."
        ]
      },
      {
        heading: "2. Where Carriers Diverge",
        paragraphs: [
          "European low-cost carriers tend to enforce the strictest dimensional limits and the lowest weight allowances, while full-service North American carriers often permit larger bags but weigh them at the gate on shorter routes.",
          "Asian carriers frequently publish separate rules for domestic and international sectors, so check the segment you are actually flying."
        ],
        list: [
          "Europe: 55 × 40 × 20 cm is common on low-cost carriers; weigh before leaving home.",
          "North America: 56 × 36 × 23 cm is widely accepted, but basic fares may still require a fee.",
          "Asia: many carriers use 115 cm total linear dimension rather than a fixed three-sided box."
        ]
      }
    ],
    tips: [
      { icon: "fa-ruler-combined", title: "Measure With Wheels", text: "Always include wheels and handles in your measurement; gate agents measure the bag exactly as it stands." },
      { icon: "fa-scale-balanced", title: "Weigh at Home", text: "A compact luggage scale removes the risk of a surprise fee at the boarding gate." },
      { icon: "fa-ticket", title: "Check Your Fare Class", text: "Basic and light fares often exclude a cabin bag even when the aircraft has overhead space." },
      { icon: "fa-plane-circle-check", title: "Board Early", text: "On smaller aircraft, overhead space fills quickly. Early boarding preserves your overhead bin access." }
    ],
    related: ["carry-on-guide", "suitcase-sizes", "materials-shells", "compression-cubes"],
    cta: {
      title: "Find a Compliant Cabin Case",
      text: "Every AeroPack cabin spinner is engineered inside the IATA recommended envelope, including wheels and handles.",
      primaryLabel: "View Cabin Suitcase →",
      primaryHref: "service-details.html?id=stratus-carry-on",
      secondaryLabel: "Shop Compression Cubes",
      secondaryHref: "services.html?category=travel-accessories"
    }
  },

  "compression-cubes": {
    category: "Organization",
    breadcrumb: "Packing Systems",
    title: "How Compression Packing Cubes Save 50% Internal Luggage Space",
    shortTitle: "Compression Packing Cubes",
    author: "Marta Chen",
    role: "Packing Systems Editor",
    date: "March 6, 2026",
    readTime: "4 min read",
    topic: "Category: Organization",
    image: "../images/blog-compression-cubes.jpg",
    imageAlt: "Compression packing cubes organization guide",
    summary: "Why rolling versus folding clothes in silicone-ripstop compression cubes keeps dress shirts wrinkle-free while reclaiming half of your suitcase interior.",
    sections: [
      {
        heading: "1. Roll, Do Not Fold",
        paragraphs: [
          "Folding creates rigid stacks with trapped air between layers. Rolling garments into tight cylinders removes most of that air before the compression zipper is even closed, which is why flight crews favor the technique for short-haul rotations.",
          "Use a hard fold only for structured items such as tailored jackets; everything else benefits from a gentle roll."
        ]
      },
      {
        heading: "2. The Compression Ratio in Practice",
        paragraphs: [
          "A quality ripstop cube with a second compression zipper typically reduces a rolled wardrobe by 35 to 50 percent. The saving comes from expelled air, not from crushing fabric fibers, so garments recover their shape once unpacked.",
          "Place cubes upright in the deeper half of a clamshell case and reserve the flatter half for shoes and toiletries."
        ],
        figure: {
          src: "../images/blog-compression-cubes.jpg",
          alt: "Compression cubes packed neatly in a suitcase",
          caption: "Figure 1: Upright cube placement makes every garment visible at a glance."
        }
      }
    ],
    tips: [
      { icon: "fa-shirt", title: "Roll Buffers", text: "Wrap a soft t-shirt around a rolled dress shirt to prevent hard creases during transit." },
      { icon: "fa-bars", title: "Color-Code Cubes", text: "Assign one cube per outfit zone so you never unpack the entire case to find one layer." },
      { icon: "fa-droplet", title: "Separate Wet Items", text: "Keep a dedicated waterproof cube for gym wear or damp swimwear." },
      { icon: "fa-compress-arrows-alt", title: "Zip in Stages", text: "Close the primary zipper first, then work the compression zipper around the perimeter evenly." }
    ],
    related: ["carry-on-guide", "corporate-itinerary", "materials-shells", "alpine-rail"],
    cta: {
      title: "Shop The Compression Cube System",
      text: "The Meridian 6-Piece Compression Cube System is cut from silicone-ripstop fabric with dual-stage zippers.",
      primaryLabel: "Shop Compression Cubes →",
      primaryHref: "services.html?category=travel-accessories",
      secondaryLabel: "View Cabin Suitcase",
      secondaryHref: "service-details.html?id=stratus-carry-on"
    }
  },

  "corporate-itinerary": {
    category: "Business Travel",
    breadcrumb: "Corporate Mobility",
    title: "The 48-Hour Corporate Itinerary: One Bag, Two Boardrooms",
    shortTitle: "The 48-Hour Corporate Itinerary",
    author: "Julien Mercer",
    role: "Senior Travel Editor",
    date: "February 27, 2026",
    readTime: "5 min read",
    topic: "Category: Business Travel",
    image: "../images/blog-corporate-itinerary.jpg",
    imageAlt: "48-hour corporate travel itinerary guide",
    summary: "Streamline tech storage, transit charging, and suit wrinkle prevention for high-stakes business sprints where every minute between meetings counts.",
    sections: [
      {
        heading: "1. Build a Dedicated Tech Vault",
        paragraphs: [
          "A corporate trip lives or dies by cable access. Keep chargers, adapters, and a slim power bank in a single magnetic folio that can be lifted from the case and placed on the hotel desk without unpacking the wardrobe.",
          "Carry one universal adapter and one short USB-C cable; most conference venues provide the rest."
        ]
      },
      {
        heading: "2. Wrinkle Prevention Without a Iron",
        paragraphs: [
          "Hang the tailored layer in the hotel bathroom while the shower runs, then place it flat beneath the other garments in the case. The residual steam relaxes creases without adding an iron to your luggage.",
          "A unstructured blazer in a breathable wool blend will recover far faster than a fully fused synthetic jacket."
        ]
      }
    ],
    tips: [
      { icon: "fa-plug", title: "Charge During Transit", text: "Use the seat-back power outlet during the flight so the power bank is full on arrival." },
      { icon: "fa-laptop", title: "One Device, One Sleeve", text: "Store the laptop in a padded dedicated vault so it never shifts against hard-shell corners." },
      { icon: "fa-clock", title: "Stage the Morning Bag", text: "Pack the second-day meeting outfit in a single cube the night before." },
      { icon: "fa-lock", title: "TSA-Ready Security", text: "A recessed TSA lock lets screening open the case without cutting your cable lock." }
    ],
    related: ["carry-on-guide", "iata-overhead-limits", "tsa-lock-protocol", "compression-cubes"],
    cta: {
      title: "Equip the Corporate Commute",
      text: "Pair the Vanguard Executive Laptop Brief with a compliant cabin spinner for seamless boardroom-to-gate transitions.",
      primaryLabel: "Shop Business Bags →",
      primaryHref: "services.html?category=business-bags",
      secondaryLabel: "View Cabin Suitcase",
      secondaryHref: "service-details.html?id=stratus-carry-on"
    }
  },

  "alpine-rail": {
    category: "Travel Dispatch",
    breadcrumb: "Switzerland · Alpine",
    title: "Alpine Rail Journeys",
    shortTitle: "Alpine Rail Journeys",
    author: "Sofia Lind",
    role: "Destination Editor",
    date: "February 20, 2026",
    readTime: "4 min read",
    topic: "Category: Rail Travel",
    image: "../images/blog-itinerary-alpine.jpg",
    imageAlt: "Travel pack for an alpine rail journey",
    summary: "Packing for variable mountain weather: thermal compression cubes, weather-sealed ballistic bags, and nimble spinner wheels for panoramic carriage aisles.",
    sections: [
      {
        heading: "1. Dress in Modular Layers",
        paragraphs: [
          "Alpine weather changes by the hour. A merino base layer, a light insulating mid-layer, and a compact shell cover almost every condition without filling a 38-liter cabin case.",
          "Roll each layer into its own compression cube so you can add or shed warmth without opening the whole bag."
        ]
      },
      {
        heading: "2. Luggage That Works on Trains",
        paragraphs: [
          "Panoramic carriages have narrow aisles and steep boarding steps. A soft-shell travel pack or compact four-wheel spinner is easier to lift and park than an oversized trunk.",
          "Keep the rain cover accessible and store wet outer layers in a separate waterproof pocket at the base."
        ]
      }
    ],
    tips: [
      { icon: "fa-mountain-sun", title: "Sun and Snow", text: "Pack high-factor sunscreen even in winter; alpine UV intensity rises sharply with altitude." },
      { icon: "fa-shoe-prints", title: "One Sole for All", text: "A grippy trail sneaker handles cobblestone villages and platform snow equally well." },
      { icon: "fa-shower", title: "Wet Layer Pocket", text: "Isolate damp shells immediately so they do not transfer moisture into compression cubes." },
      { icon: "fa-train", title: "Aisle Etiquette", text: "Keep the bag at your seat end of the carriage to leave the panoramic aisle clear." }
    ],
    related: ["kyoto-shinkansen", "mediterranean-coastal", "compression-cubes", "materials-shells"],
    cta: {
      title: "Explore Travel Backpacks",
      text: "The Traverse Pro 35L Expandable Travel Pack is built for rail platforms and changing mountain weather.",
      primaryLabel: "Shop Travel Packs →",
      primaryHref: "services.html?category=travel-backpacks",
      secondaryLabel: "Shop Compression Cubes",
      secondaryHref: "services.html?category=travel-accessories"
    }
  },

  "kyoto-shinkansen": {
    category: "Travel Dispatch",
    breadcrumb: "Kyoto · Shinkansen",
    title: "Kyoto Shinkansen Transit",
    shortTitle: "Kyoto Shinkansen Transit",
    author: "Kenji Watanabe",
    role: "Japan Correspondent",
    date: "February 14, 2026",
    readTime: "5 min read",
    topic: "Category: Rail Travel",
    image: "../images/blog-itinerary-kyoto.jpg",
    imageAlt: "Cabin suitcase for Shinkansen transit",
    summary: "Navigating bullet train luggage reservation rules and why a 24-inch medium trunk fits perfectly in overhead baggage racks on the Tokaido line.",
    sections: [
      {
        heading: "1. The Oversized Luggage Rule",
        paragraphs: [
          "On the Tokaido Shinkansen, any bag whose total linear dimensions fall between 160 and 250 centimeters requires a reserved luggage space at booking. The rule catches many travelers who assume a check-in case is acceptable because it fits in a car trunk at home.",
          "A 24-inch medium trunk typically stays below the threshold when measured with wheels and handle included."
        ]
      },
      {
        heading: "2. Boarding and Storage Etiquette",
        paragraphs: [
          "Place large cases in the designated rack at the end of the carriage and keep the aisle clear. Smaller cabin cases can stay at your seat, but only if they do not obstruct the walkway.",
          "Keep your reservation confirmation accessible on your phone: attendants check it during boarding."
        ]
      }
    ],
    tips: [
      { icon: "fa-ticket", title: "Reserve Early", text: "Luggage spaces sell out on popular holiday departures even when seats remain." },
      { icon: "fa-ruler-combined", title: "Measure Linear Total", text: "Add height, width, and depth; anything over 160 cm needs a reservation on the Tokaido line." },
      { icon: "fa-suitcase-rolling", title: "Choose 24 Inches", text: "A medium trunk balances packing volume with Japanese rail baggage rules." },
      { icon: "fa-umbrella", title: "Keep Rain Gear Handy", text: "Kyoto station platforms are exposed; stash a folding umbrella in the front pocket." }
    ],
    related: ["alpine-rail", "mediterranean-coastal", "suitcase-sizes", "iata-overhead-limits"],
    cta: {
      title: "Find a Rail-Friendly Trunk",
      text: "The Horizon Mid 24-inch Spinner is sized for extended rail journeys without exceeding common reservation thresholds.",
      primaryLabel: "Shop Check-In Luggage →",
      primaryHref: "services.html?category=checkin-suitcases",
      secondaryLabel: "View Sizing Guide",
      secondaryHref: "blog-details.html?id=suitcase-sizes"
    }
  },

  "mediterranean-coastal": {
    category: "Travel Dispatch",
    breadcrumb: "Riviera · Coast",
    title: "Mediterranean Coastal Getaways",
    shortTitle: "Mediterranean Coastal Getaways",
    author: "Amara Rossi",
    role: "Coastal Correspondent",
    date: "February 8, 2026",
    readTime: "4 min read",
    topic: "Category: Coastal Travel",
    image: "../images/blog-itinerary-riviera.jpg",
    imageAlt: "Duffel bag for a coastal getaway",
    summary: "Durable duffel bags and lightweight carry-ons crafted for ferry boarding ramps, cobblestone seaside alleys, and last-minute beach detours.",
    sections: [
      {
        heading: "1. Ferry Boarding Made Simple",
        paragraphs: [
          "Ferry ramps are steep, wet, and often crowded. A soft-sided duffel is easier to carry in one hand while managing a boarding pass in the other, and it stows neatly under a seat.",
          "Keep swimwear and sunscreen in a top-access pocket so you can change without opening the main compartment."
        ]
      },
      {
        heading: "2. Cobblestone Durability",
        paragraphs: [
          "Historic coastal towns are built on uneven stone. Larger spinner wheels absorb vibration better than small hard casters, but a rugged ballistic duffel removes the problem entirely.",
          "Rinse salt spray from zippers at the end of each day to prevent grit from grinding the teeth."
        ]
      }
    ],
    tips: [
      { icon: "fa-sailboat", title: "Deck-Ready Bag", text: "Choose a water-resistant duffel with sealed zippers for ferry decks." },
      { icon: "fa-sun", title: "Beach Layer", text: "Pack a lightweight linen shirt that works as both sun protection and evening wear." },
      { icon: "fa-droplet", title: "Salt rinse", text: "Freshwater rinse on zippers prevents corrosion after a day at sea." },
      { icon: "fa-shoe-prints", title: "Grippy Soles", text: "Cobblestone alleys reward a shoe with a textured rubber outsole." }
    ],
    related: ["alpine-rail", "kyoto-shinkansen", "corporate-itinerary", "materials-shells"],
    cta: {
      title: "Explore Duffel Bags",
      text: "The Apex Ballistic Weekender Duffel is built for ferry decks and cobblestone detours.",
      primaryLabel: "Shop Duffel Bags →",
      primaryHref: "services.html?category=duffel-bags",
      secondaryLabel: "View Cabin Suitcase",
      secondaryHref: "service-details.html?id=stratus-carry-on"
    }
  },

  "materials-shells": {
    category: "Hardware & Care",
    breadcrumb: "Materials Science · MAT-01",
    title: "Hard-Shell vs. Soft-Shell",
    shortTitle: "Hard-Shell vs. Soft-Shell",
    author: "AeroPack Materials Lab",
    role: "Product Engineering",
    date: "January 30, 2026",
    readTime: "3 min read",
    topic: "Category: Materials Science",
    image: "../images/blog-knowledge-materials.jpg",
    imageAlt: "Hard-shell and soft-shell luggage materials",
    summary: "Polycarbonate provides unbeatable impact resistance against rain and baggage drops; ballistic fabric delivers flexible exterior pockets for immediate transit access.",
    sections: [
      {
        heading: "1. Polycarbonate Shell Dynamics",
        paragraphs: [
          "Makrolon polycarbonate flexes under impact and returns to shape, which is why it survives baggage conveyor drops better than rigid ABS. The trade-off is weight and fewer external pockets.",
          "A textured shell hides scuffs, while a glossy finish shows every conveyor mark."
        ]
      },
      {
        heading: "2. Ballistic Dobby Advantages",
        paragraphs: [
          "High-tenacity ballistic dobby fabric trades impact rigidity for flexibility. Exterior pockets stay accessible without opening the main compartment, making it ideal for commuters who reach for a pass or tablet repeatedly.",
          "Look for a water-repellent coating and reinforced base feet when choosing a soft-shell case."
        ]
      }
    ],
    tips: [
      { icon: "fa-shield-halved", title: "Impact First", text: "Choose hard-shell for checked baggage routes with rough transfer handling." },
      { icon: "fa-suitcase", title: "Access First", text: "Choose soft-shell for frequent transit access and front-pocket organization." },
      { icon: "fa-cloud-rain", title: "Weather Check", text: "Soft-shell needs a treated fabric; polycarbonate sheds rain naturally." },
      { icon: "fa-weight-scale", title: "Weight Matters", text: "Compare empty case weight before buying, especially for low-cost airline limits." }
    ],
    related: ["polycarbonate-care", "suitcase-sizes", "iata-overhead-limits", "compression-cubes"],
    cta: {
      title: "Explore Hard-Shell Luggage",
      text: "Compare Makrolon polycarbonate shells and ballistic soft-shell cases built for different travel styles.",
      primaryLabel: "Shop Check-In Luggage →",
      primaryHref: "services.html?category=checkin-suitcases",
      secondaryLabel: "Shop Soft-Shell Cases",
      secondaryHref: "services.html?category=soft-shell-suitcases"
    }
  },

  "suitcase-sizes": {
    category: "Hardware & Care",
    breadcrumb: "Sizing Guide · MAT-02",
    title: "Understanding Suitcase Sizes",
    shortTitle: "Understanding Suitcase Sizes",
    author: "AeroPack Sizing Desk",
    role: "Product Specialists",
    date: "January 24, 2026",
    readTime: "3 min read",
    topic: "Category: Sizing & Fit",
    image: "../images/blog-knowledge-sizes.jpg",
    imageAlt: "Check-in suitcase size comparison",
    summary: "From 20-inch carry-ons at 38 liters to 24-inch mid-size trunks at 68 liters and 28-inch expedition cases at 102 liters, choose the exact volume for your voyage duration.",
    sections: [
      {
        heading: "1. The Three Practical Tiers",
        paragraphs: [
          "A 38-liter cabin case covers one to four days with compression cubes. A 68-liter mid-size trunk handles a week to ten days, and a 102-liter expedition case suits two weeks or longer.",
          "Capacity matters more than nominal inches because manufacturers measure external dimensions differently."
        ],
        list: [
          "Cabin: 38–42L, 20–21 inches, ideal for overhead bins.",
          "Medium: 68L, 24 inches, balanced for week-long journeys.",
          "Large: 96–102L, 28 inches, best for checked baggage."
        ]
      },
      {
        heading: "2. Measure Internal vs. External",
        paragraphs: [
          "Airlines care about external dimensions including wheels and handles. Packing volume is measured internally, so a thick shell can reduce usable space even when the external footprint is identical.",
          "Always confirm the linear total before booking rail journeys with oversized baggage rules."
        ]
      }
    ],
    tips: [
      { icon: "fa-ruler-combined", title: "Include Wheels", text: "External measurements must include the full wheel assembly and extended handle." },
      { icon: "fa-cube", title: "Think in Liters", text: "Compare capacity in liters rather than inches across different brands." },
      { icon: "fa-train", title: "Check Rail Rules", text: "Japanese Shinkansen lines use linear dimensions for oversized luggage." },
      { icon: "fa-plane", title: "Check Your Fare", text: "Basic fares may restrict even a compliant cabin case." }
    ],
    related: ["iata-overhead-limits", "carry-on-guide", "materials-shells", "kyoto-shinkansen"],
    cta: {
      title: "Find Your Exact Fit",
      text: "Browse cabin, medium, and large AeroPack cases sized for every voyage duration.",
      primaryLabel: "Shop Luggage Sets →",
      primaryHref: "services.html?category=luggage-sets",
      secondaryLabel: "Read IATA Limits",
      secondaryHref: "blog-details.html?id=iata-overhead-limits"
    }
  },

  "polycarbonate-care": {
    category: "Hardware & Care",
    breadcrumb: "Maintenance · MAT-03",
    title: "Prolonging Polycarbonate Life",
    shortTitle: "Prolonging Polycarbonate Life",
    author: "AeroPack Service Desk",
    role: "Repair Specialists",
    date: "January 18, 2026",
    readTime: "3 min read",
    topic: "Category: Maintenance",
    image: "../images/blog-knowledge-care.jpg",
    imageAlt: "Polycarbonate check-in trunk shell",
    summary: "Remove airport baggage conveyor marks with gentle microfiber blocks and lubricate wheel axles with silicone spray twice a year.",
    sections: [
      {
        heading: "1. Cleaning the Shell",
        paragraphs: [
          "Conveyor belt residue is usually rubber transfer, not a stain in the polycarbonate. A damp microfiber cloth with a drop of mild dish soap lifts it without abrading the surface.",
          "Avoid solvent cleaners on printed or textured finishes; they can dull the protective top coat."
        ]
      },
      {
        heading: "2. Wheel Axle Maintenance",
        paragraphs: [
          "Silent spinner wheels accumulate grit in the bearing housing. Flush the axle with a dry brush, then apply a light silicone spray twice a year.",
          "Do not use oil: it attracts dust and turns into a grinding paste inside the bearing."
        ]
      }
    ],
    tips: [
      { icon: "fa-cloth", title: "Microfiber Only", text: "Paper towels and rough sponges create micro-scratches in a glossy shell." },
      { icon: "fa-spray-can-sparkles", title: "Silicone, Not Oil", text: "Silicone spray lubricates without trapping abrasive grit." },
      { icon: "fa-wrench", title: "Check Bolts", text: "Tighten wheel housing bolts at the start of each travel season." },
      { icon: "fa-box", title: "Store Upright", text: "Store the case upright in a cool closet to prevent shell deformation." }
    ],
    related: ["materials-shells", "tsa-lock-protocol", "corporate-itinerary", "compression-cubes"],
    cta: {
      title: "Shop Care & Accessories",
      text: "Keep your luggage performing with AeroPack care essentials and replacement hardware.",
      primaryLabel: "Shop Accessories →",
      primaryHref: "services.html?category=travel-accessories",
      secondaryLabel: "Explore Hard-Shell Cases",
      secondaryHref: "services.html?category=hard-shell-suitcases"
    }
  },

  "tsa-lock-protocol": {
    category: "Hardware & Care",
    breadcrumb: "Security · MAT-04",
    title: "TSA Lock Protocol Explained",
    shortTitle: "TSA Lock Protocol Explained",
    author: "AeroPack Security Lab",
    role: "Product Engineering",
    date: "January 12, 2026",
    readTime: "3 min read",
    topic: "Category: Travel Security",
    image: "../images/blog-knowledge-tsa.jpg",
    imageAlt: "TSA-approved luggage cable lock set",
    summary: "Why modern customs authorities require TSA007 locks, how master keys operate, and how to reset your personal three-digit combination.",
    sections: [
      {
        heading: "1. Why TSA007 Matters",
        paragraphs: [
          "A TSA007-approved lock allows screening authorities to open, inspect, and relock a bag with a master key instead of cutting the lock or zipper. This applies primarily to United States departures and arrivals.",
          "The red diamond logo identifies a genuine approved lock. Cable locks without the certification may be removed at screening."
        ]
      },
      {
        heading: "2. Resetting Your Combination",
        paragraphs: [
          "Set your code while the lock is open. Push the small reset button with a ballpoint pen until it clicks, roll the dials to your chosen three digits, then slide the latch to close.",
          "Choose a combination you can recall without writing it down, and test it several times before travelling."
        ]
      }
    ],
    tips: [
      { icon: "fa-lock", title: "Approved Only", text: "Look for the red TSA007 diamond before relying on a lock at US checkpoints." },
      { icon: "fa-key", title: "Reset While Open", text: "Combination changes only register when the shackle is rotated to the open position." },
      { icon: "fa-cable", title: "Cable or Recessed", text: "Recessed locks stay integrated into the shell; cable locks secure a zipper pair externally." },
      { icon: "fa-passport", title: "Keep Documents Separate", text: "Never lock passports inside checked luggage." }
    ],
    related: ["polycarbonate-care", "materials-shells", "corporate-itinerary", "carry-on-guide"],
    cta: {
      title: "Shop Travel Security",
      text: "Zenith TSA-approved cable locks give screening access while keeping your bag secured.",
      primaryLabel: "Shop Travel Accessories →",
      primaryHref: "services.html?category=travel-accessories",
      secondaryLabel: "Read Care Guide",
      secondaryHref: "blog-details.html?id=polycarbonate-care"
    }
  }
};
