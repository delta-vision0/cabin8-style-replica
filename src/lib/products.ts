export type Product = {
  id: string;
  name: string;
  description: string;
  ingredients: string;
  howToUse: string;
  volume: string;
  price: string;
  image: string; // image file name (stored under public/products)
};

export const products: Product[] = [
  {
    id: "cabin8-argan-oil-shampoo",
    name: "Cabin8 Argan Oil Shampoo",
    description:
      "Cabin8 Argan Oil Shampoo is enriched with the nourishing power of Argan Oil to deeply hydrate and revitalize your hair. This sulphate and paraben-free formula gently cleanses while protecting color-treated hair, leaving it soft, shiny, and frizz-free.",
    ingredients:
      "Aqua, Cocamidopropyl Betaine, Etheylene Glycol Disterate, Coco Diethanolamine, Moroccan Argan Oil Extracts, Glycerine, Sodium Lauroyl Sarcosinate, a Polyquaternium - 7, Coco Glucoside, Aloe Barbadensis, Dmdm Hydantoin, Citric Acid and fragrance",
    howToUse: "Apply a small amount to wet hair, massage gently into the scalp and hair, then rinse thoroughly. Enjoy the nourishing benefits of Argan oil for luxuriously soft and shiny hair.",
    volume: "300ml",
    price: "₹599/-",
    image: "cabin8-argan-oil-shampoo.jpg",
  },
  {
    id: "cabin8-argan-oil-conditioner",
    name: "Cabin8 Argan Oil Conditioner",
    description:
      "Cabin8 Argan Oil Conditioner is infused with the luxurious goodness of Argan Oil, delivering intense hydration and nourishment. This sulphate and paraben-free conditioner smoothens and detangles, leaving your hair silky, frizz-free, and safe for color-treated strands.",
    ingredients:
      "Aqua, Glycerine, Argan Oil Extracts, Cetosteary Alcohol, Ceteareth 20, cetyl Alchol, Shea Butter. Cetrimonium Chloride, Peg-100 Stearate (and) Glyceryl Stearate, Dimethiconol, Olive Oil, Argan Oil, Polyquaternium - 7, DMDM Hydantoin, Citric Acid, Fragrance.",
    howToUse:
      "After shampooing with Cabin8 Argan Oil Shampoo, apply a generous amount of Cabin8 Argan Oil Conditioner to damp hair, focusing on mid-lengths to ends. Leave on for 1-2 minutes, then rinse thoroughly. Enjoy silky-smooth, nourished locks.",
    volume: "300ml",
    price: "₹599/-",
    image: "cabin8-argan-oil-conditioner.jpg",
  },
  {
    id: "cabin8-intense-repair-shampoo",
    name: "Cabin8 Intense Repair Shampoo",
    description:
      "Cabin8 Intense Repair Shampoo is enriched with the nourishing power of hydrolized keratin and quinoa protein to deeply hydrate and revitalize your hair. This sulfate-and paraben-free formula gently cleanses while protecting color-treated hair, leaving it soft, shiny, and frizz-free.",
    ingredients:
      "Purified Water (Aqua), Cocoamidopropyl Betaine, Glycerine, Sodium Lauroy! Sarcosinate, Polyquaternium - 7, Aloe Barbadensis, DMDM Hydantoin, Fragrance",
    howToUse:
      "Apply a small amount to wet hair, massage gently into the scalp and hair, then rinse thoroughly. Enjoy the nourishing benefits of hydrolized keratin for luxuriously soft and shiny hair.",
    volume: "250ml",
    price: "₹1199/-",
    image: "cabin8-intense-repair-shampoo.jpg",
  },
  {
    id: "cabin8-intense-repair-conditioner",
    name: "Cabin8 Intense Repair Conditioner",
    description:
      "Cabin8 intense Repair Conditioner is a rich cream conditioning formula specially designed to strengthen hair while restoring shine and radiance. It does not contain harmful chemicals like sulphate and paraben.",
    ingredients:
      "Purified Water (Aqua), Glycerine, Cetostearyl Alcohol, Ceteareth 20, Cetrimonium Chloride, Dimethiconol, Olive Oil, Argan Oil, Polyquaternium 7, DMDM Hydantoin, Fragrance",
    howToUse:
      "Wash hair with cabin8 Intense Repair Shampoo. Then Apply cabin8 Intense Repair Conditioner and comb through the ends. Leave it on for 5-7 minutes and rinse thoroughly with cold water.",
    volume: "250ml",
    price: "₹1199/-",
    image: "cabin8-intense-repair-conditioner.jpg",
  },
  {
    id: "cabin8-intense-repair-hair-serum",
    name: "Cabin8 Intense Repair Hair Serum",
    description:
      "Experience the transformation with Cabin8 Intense Repair Hair Serum, a dynamic formula designed to unlock the full potential of your hair. Lightweight, non-greasy serum for silky, smooth, and radiantly healthy hair. Helps fight frizz, split ends, and adds shine.",
    ingredients:
      "Cyclopentasiloxane, Dimethiconol, Sweet Almond Oil, Light Liquid Paraffin, Parfume.",
    howToUse:
      "Apply a small quantity to washed and dried hair, spread evenly along lengths and ends. Reapply if necessary, depending on hair thickness.",
    volume: "100ml",
    price: "₹450/-",
    image: "cabin8-intense-repair-hair-serum.jpg",
  },
  {
    id: "cabin8-anti-dandruff-shampoo",
    name: "Cabin8 Anti-Dandruff Shampoo",
    description:
      "Experience the revitalizing power of cabin8 Anti-Dandruff shampoo-an expertly crafted solution to banish dandruff and restore a healthy, flake-free scalp, Our advanced formula comaines the oest of nature and science to provide a cleansing experience that goes beyond the surface, leaving your hair refreshed and your confidence renewed. Enriched with potent anti-dandruff agents, this shampoo effectively targets the root causes of flakiness, working to soothe irritation and maintain a balanced scalp environment. Cabin8 Anti-Dandruff Shampoo is your ticket to a clean, comfortable scalp and lusciously healthy hair.",
    ingredients:
      "Aqua, Disodium Ethylenediaminetetraacetic Acid, Glycerin, Guar Hydroxypropyltrimonium Chloride. Ethylene Glycol Distearate, Sodium lauryl Ethor Sulphate, Cocamidopropyl Betaine, Coco Diethanolamine, Polyquaternium 7, Dimethicone, Amodimethicone, Laureth-23, Polyquaternium-10 And Laureth-4, Zine lyrithione, Kotoconazolo, Aloeverd xtract, Avocado Oil, Linalool, Olive Oil Phenoxyethanol (and) Ethylhexylglycerin, Fragrance, Colour.",
    howToUse:
      "Wet your hair thoroughly. Take o generous amount of cabin8 Anti-dandruff Shampoo and apply it to your scalp. Gently massage the shampoo into your scalp using circular motions, ensuring even coverage. Allow the shampoo to sit for 2-3 minutes, allowing the active ingredients to work their magic. Rinse thoroughly with lukewarm water.",
    volume: "250ml",
    price: "₹599/-",
    image: "cabin8-anti-dandruff-shampoo.jpg",
  },
  {
    id: "cabin8-anti-dandruff-hair-oil",
    name: "Cabin8 Anti-Dandruff Hair Oil",
    description:
      "Indulge in the rejuvenating experience of cabin8 Anti-Dandruff Hair Oil, a meticulously crafted elixir designed to liberate your scalp from the grip of persistent dandruff. Our premium formula combines the therapeutic properties of natural ingredients to provide a comprehensive solution or a nealthier, fake-free scalp. Enriched with a patent blend of herbal extracts, cabin8 Anti-Dandruff Hair Oil works to soothe Irritation, combat dryness, and restore balance to your scalp's microflora. with rogular uso, experience the gradual Disappearance of those pesky white flakes, leaving your hair and confidence revitalised. Harnessing the power of nature, cabin8 formulation not only addresses dandruff but also nurtures your hair, promoting overall hair health. The oil's lightweight texture ensures easy absorption, delivering its nourishing benefit deep into the roots.",
    ingredients:
      "Coconut Oil, lavender Oil, Avacado Oll, Tocopherol, Neem Oil, Almond Oil, Rosemary Oil, Tea Tree Oil, Castor Oil, Sunflower Oil.",
    howToUse:
      "Start with dry or damp hair. Take a small amount of cabin8 Anti-Dandruff Hair Oil on to your fingertips. Gently massage the oil into your scalp using circular motions, ensuring even distribution. Leave the oil on for at least 30 minutes or overnight for an intensive treatment. Wash with cabin8 Anti dandruff shampoo. For best results, use 2-3 times a week.",
    volume: "100ml",
    price: "₹599/-",
    image: "cabin8-anti-dandruff-hair-oil.jpg",
  },
  
];


