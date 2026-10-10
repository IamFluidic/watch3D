export const WATCH_EDITIONS = [
  {
    id: "steel",
    name: "01. Celestial Glacier",
    subtitle: "316L Surgical Steel & Glacier Blue",
    dialColor: "#0A1B38",
    dialName: "Glacier Sunray Fumé",
    caseColor: "#E2E8F0",
    caseMetalness: 0.96,
    caseRoughness: 0.18,
    bezelColor: "#1A2538",
    strapType: "metal",
    strapColor: "#CBD5E1",
    handsColor: "#F8FAFC",
    lumeColor: "#38BDF8",
    accentColor: "#38BDF8",
    price: "$2,650",
    description: "Cold-forged from marine-grade 316L surgical stainless steel with vertical satin brushing and mirror chamfers, paired with an ethereal ice-glacier sunray dial and electric cyan Super-LumiNova."
  },
  {
    id: "dlc",
    name: "02. Obsidian Nebula",
    subtitle: "Metallic DLC & Cosmic Violet",
    dialColor: "#06060B",
    dialName: "Astral Violet Fumé",
    caseColor: "#101217",   // Gun-metal deep black with mirror metallic sheen
    caseMetalness: 0.98,
    caseRoughness: 0.12,    // Semi-gloss mirror-metallic finish
    bezelColor: "#0A0B0E",
    strapType: "metal",
    strapColor: "#0F1115",  // Matching DLC black link bracelet
    handsColor: "#E2E8F0",  // Mirror-polished rhodium hands
    lumeColor: "#22D3EE",   // Electric cyan lume
    accentColor: "#C084FC", // Ultraviolet second hand
    price: "$2,950",
    description: "Vapor-deposited diamond-like carbon coating over surgical steel, creating an obsidian-black exterior with 3,500 Vickers hardness, paired with a cosmic violet fumé dial and electric cyan luminescence."
  },
  {
    id: "rose",
    name: "03. Champagne Imperial 18K",
    subtitle: "18K Rose Gold & Ivory Opaline",
    dialColor: "#FAF6F0",
    dialName: "Ivory Opaline Gilt",
    caseColor: "#E6B89C",
    caseMetalness: 0.92,
    caseRoughness: 0.18,
    bezelColor: "#D4987A",
    strapType: "leather",
    strapColor: "#3B1E15",
    handsColor: "#B4654A",
    lumeColor: "#FEF08A",
    accentColor: "#1E40AF", // Classic heated flame-blued second hand
    price: "$4,450",
    description: "Cast in proprietary 18-karat rose gold enriched with platinum, paired with an ivory opaline dial, faceted rose gold batons, heat-treated flame-blued seconds hand, and hand-stitched French calfskin."
  },
  {
    id: "titanium",
    name: "04. Racing Emerald",
    subtitle: "Grade 5 Titanium & Racing Green",
    dialColor: "#032814",
    dialName: "Malachite Emerald Sunray",
    caseColor: "#94A3B8",
    caseMetalness: 0.88,
    caseRoughness: 0.38,
    bezelColor: "#052613",
    strapType: "leather",
    strapColor: "#1C1D21",
    handsColor: "#F8FAFC",
    lumeColor: "#4ADE80",
    accentColor: "#F59E0B", // Gilt gold racing seconds hand
    price: "$3,350",
    description: "Aerospace Grade 5 titanium bead-blasted to a silky satin sheen, paired with a British racing emerald sunburst dial, gilt gold railway track, and vivid C3 Super-LumiNova."
  }
];

export const EXPLODED_LAYERS = [
  {
    id: "sapphire",
    name: "Dual-Domed Sapphire Crystal",
    metric: "2.1mm thickness • 9 Mohs hardness",
    offsetZ: 3.4,
    description: "Synthetic corundum crystal with five anti-reflective interior vapor layers, virtually scratch-proof."
  },
  {
    id: "bezel",
    name: "Sculpted Octagonal Bezel",
    metric: "8 Hexagonal Screws • Mirror Chamfers • Fluted Ring",
    offsetZ: 2.3,
    description: "Iconic 8-sided geometric bezel inspired by Audemars Piguet Royal Oak with vertical satin grain, hand-polished chamfers, 8 perimeter hexagonal screws, and an inner Rolex fluted accent."
  },
  {
    id: "hands",
    name: "Diamond-Cut Dauphine Hands",
    metric: "Rhomboid profile • Continuous sweep seconds",
    offsetZ: 1.4,
    description: "Balanced diamond-cut hour and minute hands paired with a needle-thin central seconds hand counterweighted for 4Hz sweep."
  },
  {
    id: "dial",
    name: "Tapisserie & Flying Tourbillon Dial",
    metric: "Audemars Piguet Waffle • Jacob & Co Stardust • Applied 3D Batons",
    offsetZ: 0.5,
    description: "Signature 'Grande Tapisserie' waffle guilloché dial with Jacob & Co celestial stardust dusting, 12 o'clock astronomical moonphase, and 6 o'clock exposed flying tourbillon."
  },
  {
    id: "movement",
    name: "Calibre A3016 Engine & Hand Gear Train",
    metric: "28,800 vph (4Hz) • 26 Jewels • Integrated Motion Works",
    offsetZ: -0.6,
    description: "In-house automatic movement engine integrated with thick 3D hand-driving gears, central cannon pinion, 12:1 hour wheel, 4Hz fourth wheel, escape wheel, and Glucydur balance wheel."
  },
  {
    id: "case",
    name: "Monobloc Middle Case",
    metric: "40.0mm diameter • 10.8mm thin • 100m Water Resistant",
    offsetZ: -1.6,
    description: "CNC-milled from a single solid block of 316L alloy with integrated screw-down crown and O-ring twin seal gaskets."
  },
  {
    id: "caseback",
    name: "Solid Plane Steel Caseback",
    metric: "Threaded screw-in • Surgical 316L",
    offsetZ: -2.6,
    description: "Solid surgical steel back laser-engraved with the iconic ALUNA italic script and model reference A3016."
  }
];

export const TECHNICAL_SPECIFICATIONS = [
  { label: "Manufacture & Calibre", value: "ALUNA Calibre A3016 In-House Automatic" },
  { label: "Origin", value: "Handcrafted & Regulated in Nepal" },
  { label: "Frequency", value: "28,800 A/h (4 Hz / 8 Beats per Second)" },
  { label: "Power Reserve", value: "48 Hours Extended Reserve" },
  { label: "Jewels", value: "26 Synthetic Rubies" },
  { label: "Case Dimensions", value: "40.0 mm Diameter • 10.8 mm Profile • 47.2 mm Lug-to-Lug" },
  { label: "Lug Width", value: "20.0 mm (Tapered to 16.0 mm Deployant)" },
  { label: "Case Material", value: "Cold-Forged 316L Surgical Steel (1.4404)" },
  { label: "Water Resistance", value: "10 ATM / 100 Meters / 330 Feet (Dual O-Ring Hermetic)" },
  { label: "Crystal", value: "Dual-Domed Anti-Reflective Synthetic Sapphire Crystal" },
  { label: "Luminescence", value: "Nepal Super-LumiNova® Grade X1 Glow" },
  { label: "Tourbillon Regulation", value: "60-Second Flying Tourbillon Carriage (-2 / +4 sec / day)" },
  { label: "Bracelet", value: "Solid 316L 3-Link Steel with Micro-Adjust Deployant" },
  { label: "Warranty", value: "5-Year International Manufacture Warranty" }
];
