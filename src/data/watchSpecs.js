export const WATCH_EDITIONS = [
  {
    id: "dlc",
    name: "01. Midnight Phantom",
    subtitle: "Metallic Black DLC Coated",
    dialColor: "#09090B", // Deep obsidian black
    dialName: "Obsidian Black",
    caseColor: "#111318",   // Gun-metal deep black
    caseMetalness: 0.96,
    caseRoughness: 0.14,    // Semi-gloss — metallic sheen
    bezelColor: "#0A0B0E",
    strapType: "metal",
    strapColor: "#0F1115",  // Matching black link bracelet
    handsColor: "#CBD5E1",  // Cool silver-grey hands for contrast
    lumeColor: "#38BDF8",   // Cyan lume
    accentColor: "#38BDF8", // Cyan seconds hand
    price: "$2,850",
    description: "Vapor-deposited DLC coating bonds to the surgical steel core at the atomic level, creating an obsidian-black surface with 3,500 Vickers hardness and mirror-metallic sheen."
  },
  {
    id: "steel",
    name: "02. Steel Classic",
    subtitle: "316L Surgical Stainless Steel",
    dialColor: "#1B2A4A",
    dialName: "Cobalt Sunray",
    caseColor: "#E2E8F0",
    caseMetalness: 0.95,
    caseRoughness: 0.22,
    bezelColor: "#0F172A",
    strapType: "metal",
    strapColor: "#CBD5E1",
    handsColor: "#F8FAFC",
    lumeColor: "#38BDF8",
    accentColor: "#38BDF8",
    price: "$2,450",
    description: "Cold-forged from marine-grade 316L stainless steel with vertical satin brushing, polished chamfered bevels, and a deep cobalt sunray dial."
  },
  {
    id: "rose",
    name: "03. Champagne 18K",
    subtitle: "18K Rose Gold & Opaline",
    dialColor: "#FBF6EE",
    dialName: "Ivory Opaline",
    caseColor: "#E6B89C",
    caseMetalness: 0.92,
    caseRoughness: 0.2,
    bezelColor: "#C99276",
    strapType: "leather",
    strapColor: "#3A2118",
    handsColor: "#B4654A",
    lumeColor: "#FDE047",
    accentColor: "#B4654A",
    price: "$4,200",
    description: "Cast in proprietary 18-karat rose gold alloy enriched with copper and platinum for lasting lustre, paired with an opaline dial and French calfskin."
  },
  {
    id: "titanium",
    name: "04. Racing Titanium",
    subtitle: "Grade 5 Satin Titanium",
    dialColor: "#0D2818",
    dialName: "Racing Emerald",
    caseColor: "#94A3B8",
    caseMetalness: 0.88,
    caseRoughness: 0.42,
    bezelColor: "#041B0E",
    strapType: "leather",
    strapColor: "#1E2228",
    handsColor: "#F8FAFC",
    lumeColor: "#4ADE80",
    accentColor: "#22C55E",
    price: "$3,150",
    description: "Ultra-light Grade 5 aerospace titanium bead-blasted to a satin sheen, boasting 40% less weight than steel with double the tensile resistance."
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
    name: "Ceramic Tachymeter Bezel",
    metric: "120-click unidirectional • Zirconia (ZrO2)",
    offsetZ: 2.3,
    description: "High-density ceramic bezel insert impervious to UV discoloration, laser-engraved with silver platinum markings."
  },
  {
    id: "dial",
    name: "Dial & Applied Baton Indices",
    metric: "Sunray radial grain • Grade X1 Super-LumiNova",
    offsetZ: 1.2,
    description: "Individually hand-applied faceted markers with chamfered edges and photoluminescent compound reservoirs."
  },
  {
    id: "hands",
    name: "Diamond-Cut Dauphine Hands",
    metric: "Rhomboid profile • Continuous sweep seconds",
    offsetZ: 0.6,
    description: "Balanced diamond-cut hour and minute hands paired with a needle-thin central seconds hand counterweighted for 4Hz sweep."
  },
  {
    id: "movement",
    name: "Calibre 60P Automatic Engine",
    metric: "28,800 vph (4Hz) • 26 Jewels • 42h Reserve",
    offsetZ: -0.6,
    description: "In-house mechanical movement with Glucydur balance wheel, perlage circular graining, and Incabloc shock protection."
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
    name: "Exhibition Sapphire Caseback",
    metric: "Threaded screw-in • Mineral gasket",
    offsetZ: -2.6,
    description: "Exhibition window revealing the rhythmic dance of the escapement and circular bridge finishing."
  },
  {
    id: "rotor",
    name: "Tungsten Oscillating Weight",
    metric: "High-density 21K tungsten alloy • 360° Ball Bearings",
    offsetZ: -3.4,
    description: "Heavy bidirectional winding rotor with Geneva stripes (Côtes de Genève) that harnesses every arm movement into kinetic energy."
  }
];

export const TECHNICAL_SPECIFICATIONS = [
  { label: "Calibre", value: "60P In-House Automatic" },
  { label: "Frequency", value: "28,800 A/h (4 Hz)" },
  { label: "Power Reserve", value: "42 Hours" },
  { label: "Jewels", value: "26 Synthetic Rubies" },
  { label: "Case Diameter", value: "40.0 mm" },
  { label: "Case Thickness", value: "10.8 mm" },
  { label: "Lug to Lug", value: "47.2 mm" },
  { label: "Lug Width", value: "20.0 mm" },
  { label: "Water Resistance", value: "10 ATM / 100 Meters" },
  { label: "Crystal", value: "Dual-Domed Anti-Reflective Sapphire" },
  { label: "Luminescence", value: "Swiss Super-LumiNova® Grade X1" },
  { label: "Accuracy", value: "-2 / +4 sec / day (COSC Standard)" }
];
