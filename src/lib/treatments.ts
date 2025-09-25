export type Treatment = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  suitableFor: string;
  process: string;
  aftercare: string;
};

export const treatments: Treatment[] = [
  {
    id: "keratin",
    title: "Keratin Treatment",
    description:
      "Professional keratin treatment that smoothens and strengthens your hair, eliminating frizz and providing long-lasting results.",
    benefits: [
      "Reduces frizz up to 95%",
      "Cuts styling time in half",
      "Adds incredible shine",
      "Strengthens hair structure",
      "Lasts 3-6 months",
    ],
    duration: "2-4 hours",
    suitableFor: "All hair types, especially frizzy and damaged hair",
    process: "Deep cleansing, keratin application, blow-dry, and heat sealing for maximum effectiveness.",
    aftercare: "Avoid washing for 72 hours, use sulfate-free shampoo, and minimize heat styling.",
  },
  {
    id: "aminotherapy",
    title: "Aminotherapy",
    description:
      "Advanced amino acid therapy that repairs damaged hair from within, restoring natural strength and vitality.",
    benefits: [
      "Repairs damaged hair cuticles",
      "Restores natural protein balance",
      "Improves hair elasticity",
      "Reduces breakage significantly",
      "Long-lasting results",
    ],
    duration: "1.5-2.5 hours",
    suitableFor: "Chemically treated and severely damaged hair",
    process:
      "Hair analysis, amino acid application, processing with controlled heat, and protective sealing.",
    aftercare:
      "Use protein-free products for 2 weeks, gentle handling, and regular deep conditioning.",
  },
  {
    id: "nanoplastia",
    title: "Nanoplastia",
    description:
      "Revolutionary nanotechnology treatment that penetrates deep into hair fibers for ultimate smoothness and manageability.",
    benefits: [
      "Ultimate hair smoothening",
      "Reduces volume naturally",
      "Eliminates static and frizz",
      "Adds natural movement",
      "Safe for colored hair",
    ],
    duration: "2-3 hours",
    suitableFor: "All hair types seeking smoothness without chemical processing",
    process:
      "Gentle cleansing, nanoplastia application layer by layer, controlled drying, and sealing.",
    aftercare:
      "Wait 48 hours before washing, use recommended products, and avoid tight hairstyles.",
  },
  {
    id: "bluetox",
    title: "Bluetox Treatment",
    description:
      "Premium bluetox formula that provides intensive repair while maintaining hair's natural movement and texture.",
    benefits: [
      "Intensive hair repair",
      "Maintains natural texture",
      "Reduces frizz moderately",
      "Adds healthy shine",
      "Quick processing time",
    ],
    duration: "1-2 hours",
    suitableFor: "Mildly damaged hair wanting natural-looking results",
    process:
      "Pre-treatment preparation, bluetox application, gentle processing, and final conditioning.",
    aftercare: "Regular maintenance treatments recommended, use color-safe products.",
  },
  {
    id: "botox",
    title: "Hair Botox Treatment",
    description:
      "Intensive botox therapy that fills hair fiber gaps, providing immediate repair and rejuvenation for damaged hair.",
    benefits: [
      "Instant hair rejuvenation",
      "Fills damaged areas",
      "Adds volume and body",
      "Improves hair health",
      "No harsh chemicals",
    ],
    duration: "1.5-2 hours",
    suitableFor: "Thin, fine, or moderately damaged hair",
    process: "Deep cleansing, botox mask application, steam processing, and nutrient sealing.",
    aftercare:
      "Avoid washing for 24 hours, use gentle products, and maintain with regular treatments.",
  },
];

export function getTreatmentById(id: string) {
  return treatments.find((t) => t.id === id);
}


