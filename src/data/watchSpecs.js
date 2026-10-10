export const WATCH_EDITIONS = [
  {
    id: "steel",
    name: "01. Celestial Alchemist",
    subtitle: "Engraved Antique Bronze & Constellation Damascus Steel",
    dialColor: "#172554",
    dialName: "Astronomical Lapis & Skeleton Tourbillon",
    caseColor: "#B87C58", // Antique brushed bronze
    caseMetalness: 0.88,
    caseRoughness: 0.28,
    bezelColor: "#1E2026", // Dark slate Damascus constellation bezel
    strapType: "leather",
    strapColor: "#3D2518", // Distressed vintage espresso leather
    stitchColor: "#FAF5EE", // Contrast cream saddle stitching
    handsColor: "#F5DAC0", // Rose gold / champagne
    lumeColor: "#38BDF8",
    accentColor: "#9333EA", // Amethyst cabochon purple
    price: "$6,850",
    description: "Hand-sculpted antique bronze case with celestial constellation engravings, dark Damascus star-map bezel, royal lapis lazuli Roman subdial, astronomical sun & moon phase, and an openworked cobalt-blue flying tourbillon, crowned with a faceted amethyst cabochon."
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
    strapType: "leather",
    strapColor: "#0C0D11",  // Matching Obsidian black leather
    stitchColor: "#38BDF8", // Electric cyan accent saddle stitch
    handsColor: "#E2E8F0",  // Mirror-polished rhodium hands
    lumeColor: "#22D3EE",   // Electric cyan lume
    accentColor: "#C084FC", // Ultraviolet second hand
    price: "$2,950",
    description: "Vapor-deposited diamond-like carbon coating over surgical steel, paired with a cosmic violet fumé dial, obsidian leather strap, and cyan hand-stitched accents."
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
    stitchColor: "#FEF08A",
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
    strapColor: "#0A2416",
    stitchColor: "#86EFAC",
    handsColor: "#F8FAFC",
    lumeColor: "#4ADE80",
    accentColor: "#F59E0B", // Gilt gold racing seconds hand
    price: "$3,350",
    description: "Aerospace Grade 5 titanium bead-blasted to a silky satin sheen, paired with a British racing emerald sunburst dial, gilt gold railway track, and racing green saddle-stitched leather."
  }
];

export const EXPLODED_LAYERS = [
  {
    id: "sapphire",
    name: "Dual-Domed Sapphire Crystal",
    metric: "2.1mm thickness • 9 Mohs hardness",
    offsetZ: 3.4,
    description: "Synthetic corundum crystal with five anti-reflective interior vapor layers, revealing deep three-dimensional astronomical complications."
  },
  {
    id: "bezel",
    name: "Constellation Damascus Bezel",
    metric: "Laser-Engraved Star Maps • Degree Arcs • Astrolabe Glyphs",
    offsetZ: 2.3,
    description: "Dark slate Damascus steel bezel intricately engraved with celestial star charts including Ursa Major, Orion, Cassiopeia, coordinate tick marks, and miniature astrolabe glyphs."
  },
  {
    id: "dial",
    name: "Four Astronomical Clock Circles Dial",
    metric: "Lapis Lazuli Hours • Minute Ring • Sun & Moon • Tourbillon Ring",
    offsetZ: 1.3,
    description: "The 4 distinctive complication clock circles floating as one unified dial layer: Lapis Lazuli Roman hours, elevated minute ring with orbiting ruby cabochon, 24-hr Sunrise & Sunset disc, and the blued showcase tourbillon ring."
  },
  {
    id: "gears",
    name: "Complete Skeletonized Gear Train Layer",
    metric: "26-Jewel Cascading Mechanical Train • Individual Z-Explosion",
    offsetZ: 0.1,
    description: "Every driving wheel, transmission pinion, motion works gear, and tourbillon gear floating in its own dedicated layer, with all gears exploding with individual 3D depth separation."
  },
  {
    id: "movement",
    name: "Astronomical Celestial Mainplate & Bridges",
    metric: "Hand-Guilloché Starmap • Astrolabe Coordinate Grid",
    offsetZ: -0.9,
    description: "Deep midnight sapphire movement mainplate engraved with golden astrolabe coordinates, Keplerian planetary orbits, golden constellations, and Geneva rubies."
  },
  {
    id: "case",
    name: "Sculpted Antique Bronze Case & Crown",
    metric: "Constellation-Engraved Lugs • Faceted Amethyst Cabochon",
    offsetZ: -1.9,
    description: "Warm antique brushed bronze case with hand-engraved constellation motifs along the flanks, flowing sculpted lugs, and a fluted crown crowned with a royal purple amethyst crystal cabochon."
  },
  {
    id: "caseback",
    name: "Solid Engraved Bronze Caseback",
    metric: "Threaded screw-in • Astronomical Inscriptions",
    offsetZ: -2.9,
    description: "Solid caseback laser-engraved with astronomical star coordinates and the iconic ALUNA Celestial Calibre insignia."
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
  { label: "Strap & Buckle", value: "Hand-Stitched French Calfskin with Deployant Clasp & Point Sellier Saddle Stitching" },
  { label: "Warranty", value: "5-Year International Manufacture Warranty" }
];

export const TOTAL_WEIGHT_GRAMS = 146;

