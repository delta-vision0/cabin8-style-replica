export type Product = {
  id: string;
  name: string;
  category: string;
  priceFrom: number;
  image: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "argan-shampoo",
    name: "Argan Oil Shampoo",
    category: "Hair Care",
    priceFrom: 599,
    image: "/products/argan-oil-hero.jpg",
    highlights: ["Sulphate free", "Shine boost", "Daily use"],
  },
  {
    id: "argan-conditioner",
    name: "Argan Oil Conditioner",
    category: "Hair Care",
    priceFrom: 599,
    image: "/products/argan-oil-hero.jpg",
    highlights: ["Softness", "Detangle", "Gloss"],
  },
  {
    id: "anti-dandruff-shampoo",
    name: "Anti Dandruff Shampoo",
    category: "Scalp Care",
    priceFrom: 529,
    image: "/products/anti-dandruff-shampoo.jpg",
    highlights: ["Flake control", "Fresh scalp", "Balanced pH"],
  },
  {
    id: "anti-dandruff-oil",
    name: "Anti Dandruff Oil",
    category: "Scalp Care",
    priceFrom: 529,
    image: "/products/anti-dandruff-shampoo.jpg",
    highlights: ["Soothing", "Anti-itch", "Weekly care"],
  },
  {
    id: "intense-repair-shampoo",
    name: "Intense Repair Shampoo",
    category: "Repair",
    priceFrom: 649,
    image: "/products/anti-dandruff-shampoo.jpg",
    highlights: ["Strengthen", "Smooth", "Color safe"],
  },
  {
    id: "intense-repair-conditioner",
    name: "Intense Repair Conditioner",
    category: "Repair",
    priceFrom: 649,
    image: "/products/anti-dandruff-shampoo.jpg",
    highlights: ["Softness", "Shine", "Daily repair"],
  },
];


