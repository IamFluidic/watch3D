export const WATCH_EDITIONS = [
  {
    id: "steel",
    name: "01. Silver Steel",
    subtitle: "Cold-Forged 316L Surgical Steel & Sunburst Dial",
    dialColor: "#172554",
    dialName: "Cobalt Sunray & Flying Tourbillon",
    caseColor: "#CBD5E1", // Mirror polished & brushed 316L steel
    caseMetalness: 0.96,
    caseRoughness: 0.18,
    bezelColor: "#94A3B8",
    strapType: "metal",
    strapColor: "#CBD5E1",
    stitchColor: "#FAF5EE",
    handsColor: "#F8FAFC",
    lumeColor: "#38BDF8",
    accentColor: "#0284C7",
    price: "$2,450",
    description: "Cold-forged 316L surgical stainless steel alternating between vertical satin brushing and hand-chamfered mirror bevels. Features sunburst guilloché dial and live flying tourbillon."
  },
  {
    id: "dlc",
    name: "02. Matte Black DLC",
    subtitle: "Vapor-Deposited Diamond-Like Carbon & Astral Dial",
    dialColor: "#06060B",
    dialName: "Astral Obsidian Fumé",
    caseColor: "#14171E",   // Stealth matte black DLC
    caseMetalness: 0.94,
    caseRoughness: 0.28,
    bezelColor: "#0A0B0E",
    strapType: "metal",
    strapColor: "#14171E",
    stitchColor: "#38BDF8",
    handsColor: "#CBD5E1",
    lumeColor: "#22D3EE",
    accentColor: "#C084FC",
    price: "$2,950",
    description: "Vapor-deposited diamond-like carbon coating over surgical steel, paired with a cosmic obsidian dial, mirror-polished rhodium hands, and electric cyan Super-LumiNova."
  },
  {
    id: "champagne",
    name: "03. Yellow Gold Champagne",
    subtitle: "18K Champagne Imperial Gold & Ivory Opaline",
    dialColor: "#18181B",
    dialName: "Champagne Gilt & Sunburst",
    caseColor: "#EAB308",   // Warm 18K yellow gold
    caseMetalness: 0.95,
    caseRoughness: 0.16,
    bezelColor: "#CA8A04",
    strapType: "metal",
    strapColor: "#EAB308",
    stitchColor: "#FEF08A",
    handsColor: "#FEF08A",
    lumeColor: "#FEF08A",
    accentColor: "#B45309",
    price: "$4,850",
    description: "Cast in rich 18-karat champagne yellow gold enriched with mirror chamfering, paired with high-contrast guilloché subdials and gilt faceted Dauphine hands."
  },
  {
    id: "rose",
    name: "04. Rose Gold Bronze",
    subtitle: "18K Rose Gold & Antique Patina Bronze",
    dialColor: "#1E1B18",
    dialName: "Warm Chocolate & Antique Gilt",
    caseColor: "#C27B66",   // Warm luxury rose gold / bronze
    caseMetalness: 0.92,
    caseRoughness: 0.22,
    bezelColor: "#A75D49",
    strapType: "metal",
    strapColor: "#C27B66",
    stitchColor: "#FED7AA",
    handsColor: "#FDBA74",
    lumeColor: "#FED7AA",
    accentColor: "#DC2626",
    price: "$4,450",
    description: "Proprietary alloy enriched with copper and platinum for warm luster, featuring warm guilloché tapisserie dial, heat-blued indicators, and hand-sculpted lugs."
  }
];

export const EXPLODED_LAYERS = [
  {
    id: "dial",
    name: "Dial",
    metric: "Sunburst Guilloché & Roman Indices",
    offsetZ: 2.8,
    offsetX: -3.8,
    description: "Clean, elegant dial designed for readability, high visual depth, and timeless appeal."
  },
  {
    id: "tourbillon",
    name: "Tourbillon",
    metric: "4.0 Hz Beating Flying Escapement",
    offsetZ: 1.8,
    offsetX: -2.2,
    description: "Independent flying tourbillon carriage rotating once every 60 seconds."
  },
  {
    id: "monobloc",
    name: "Monobloc",
    metric: "Machined Steel Intermediate Cage",
    offsetZ: 0.6,
    offsetX: -0.8,
    description: "Precision-milled structural monobloc cage supporting central gear train pivots."
  },
  {
    id: "barrel",
    name: "Barrel",
    metric: "High-Torque Mainspring Enclosure",
    offsetZ: -0.4,
    offsetX: 0.6,
    description: "Mainspring barrel maintaining isochronal torque consistency across 48-hour reserve."
  },
  {
    id: "baseplate",
    name: "Baseplate",
    metric: "Hand-Perlage Surgical Steel Plate",
    offsetZ: -1.4,
    offsetX: 2.0,
    description: "Circular-grained surgical baseplate with 26 synthetic ruby jewel sinkings."
  },
  {
    id: "weight",
    name: "Weight",
    metric: "High-Density Bidirectional Rotor",
    offsetZ: -2.6,
    offsetX: 3.5,
    description: "Heavy oscillating perimeter mass driving bidirectional automatic winding."
  }
];

export const COMPONENT_WEIGHTS = [
  { id: "dial",     name: "Dial",     index: "01", category: "Mechanism", weight: 11, desc: "Dual-layer guilloché dial with applied indices and flying tourbillon aperture." },
  { id: "hands",    name: "Hands",    index: "02", category: "Mechanism", weight: 5,  desc: "Faceted diamond-cut Dauphine hands with Super-LumiNova inlays." },
  { id: "crystal",  name: "Crystal",  index: "03", category: "Case",      weight: 12, desc: "Dual-domed anti-reflective synthetic sapphire crystal (9 Mohs)." },
  { id: "bezel",    name: "Bezel",    index: "04", category: "Case",      weight: 16, desc: "Octagonal sculpted bezel with micro-chamfered 45° polished edges." },
  { id: "lugs",     name: "Lugs",     index: "05", category: "Case",      weight: 14, desc: "Integrated curved architecture lugs with ergonomic wrist curvature." },
  { id: "strap",    name: "Strap",    index: "06", category: "Hardware",  weight: 34, desc: "Cold-forged 316L solid links with satin-brushed flanks." },
  { id: "buckle",   name: "Buckle",   index: "07", category: "Hardware",  weight: 8,  desc: "Double butterfly deployant clasp with micro-adjust twin pushers." },
  { id: "crown",    name: "Crown",    index: "08", category: "Hardware",  weight: 3,  desc: "Fluted screw-down crown with engraved emblem and twin O-rings." },
  { id: "caseback", name: "Caseback", index: "09", category: "Case",      weight: 14, desc: "Flat plane laser-engraved surgical steel caseback, 100M hermetic." },
  { id: "movement", name: "Movement", index: "10", category: "Mechanism", weight: 29, desc: "In-house automatic calibre with 28,800 vph escapement and 26 rubies." }
];

export const TOTAL_WEIGHT_GRAMS = 146;

export const EDITORIAL_CARDS = [
  {
    id: "classic",
    title: "Classic Edition",
    subtitle: "A timeless design combining elegance and precision for everyday wear.",
    tag: "316L Steel / Cobalt",
    gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
  },
  {
    id: "sport",
    title: "Sport Chronograph",
    subtitle: "Durable and dynamic, crafted for active lifestyles without compromising style.",
    tag: "100M Water Tight / Shock Resilient",
    gradient: "linear-gradient(135deg, #0f172a 0%, #020617 100%)"
  }
];

export const TECHNICAL_SPECIFICATIONS = [
  { label: "Manufacture & Calibre", value: "ALUNA Calibre FS-60P / A3016 In-House Automatic" },
  { label: "Origin", value: "Handcrafted & Regulated in Nepal" },
  { label: "Frequency", value: "28,800 A/h (4 Hz / 8 Beats per Second)" },
  { label: "Power Reserve", value: "48 Hours Extended Reserve" },
  { label: "Jewels", value: "26 Synthetic Rubies" },
  { label: "Case Dimensions", value: "40.0 mm Diameter • 10.8 mm Profile • 47.2 mm Lug-to-Lug" },
  { label: "Lug Width", value: "20.0 mm (Tapered to 16.0 mm Deployant)" },
  { label: "Total Mass", value: "146 Grams (Certified Calibrated Weight)" },
  { label: "Case Material", value: "Cold-Forged 316L Surgical Steel (1.4404)" },
  { label: "Water Resistance", value: "10 ATM / 100 Meters / 330 Feet (Dual O-Ring Hermetic)" },
  { label: "Crystal", value: "Dual-Domed Anti-Reflective Synthetic Sapphire Crystal" },
  { label: "Luminescence", value: "Super-LumiNova® Grade X1 Glow" },
  { label: "Warranty", value: "5-Year International Manufacture Warranty" }
];


