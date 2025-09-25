import { FC, useEffect, useState } from "react";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ProductPair = {
  id: string;
  title: string; // e.g., Argan Oil (Shampoo + Conditioner)
  subtitle?: string;
  priceFrom: string;
  image: string; // hero image for the pair
  highlights: string[];
  products: { name: string }[]; // individual items in the pair
};

const productPairs: ProductPair[] = [
  {
    id: "argan-pair",
    title: "Argan Oil – Shampoo + Conditioner",
    subtitle: "Unlock Your Hair’s Radiance",
    priceFrom: "From ₹599",
    image: "/products/argan-oil-hero.jpg",
    highlights: ["Sulphate & Paraben Free", "Nourish & Revitalize", "Salon-grade shine"],
    products: [{ name: "Argan Oil Shampoo" }, { name: "Argan Oil Conditioner" }],
  },
  {
    id: "anti-dandruff-pair",
    title: "Anti Dandruff – Shampoo + Oil",
    subtitle: "Soothe • Balance • Fresh Scalp",
    priceFrom: "From ₹529",
    image: "/products/anti-dandruff-shampoo.jpg",
    highlights: ["Controls flakes & itch", "Balances scalp pH", "Everyday freshness"],
    products: [{ name: "Anti Dandruff Shampoo" }, { name: "Anti Dandruff Oil" }],
  },
  {
    id: "intense-repair-pair",
    title: "Intense Repair – Shampoo + Conditioner",
    subtitle: "Your everyday shield against dullness",
    priceFrom: "From ₹649",
    image: "/products/anti-dandruff-shampoo.jpg",
    highlights: ["Strengthen & smooth", "Soft, glossy finish", "Color safe"],
    products: [{ name: "Intense Repair Shampoo" }, { name: "Intense Repair Conditioner" }],
  },
  {
    id: "keratin-smooth-pair",
    title: "Keratin Smooth – Shampoo + Mask",
    subtitle: "Frizz control with salon-smooth finish",
    priceFrom: "From ₹699",
    image: "/products/argan-oil-hero.jpg",
    highlights: ["Tames frizz", "Heat protection", "Glossy shine"],
    products: [{ name: "Keratin Smooth Shampoo" }, { name: "Keratin Smooth Mask" }],
  },
  {
    id: "volume-boost-pair",
    title: "Volume Boost – Shampoo + Conditioner",
    subtitle: "Lightweight lift for fine hair",
    priceFrom: "From ₹579",
    image: "/products/argan-oil-hero.jpg",
    highlights: ["Adds body", "Non-greasy", "Everyday fresh feel"],
    products: [{ name: "Volume Boost Shampoo" }, { name: "Volume Boost Conditioner" }],
  },
];

const phoneNumber = "8007446194";

const ProductCard: FC<{ item: ProductPair; onBuy: (p: ProductPair) => void }> = ({ item, onBuy }) => {
  return (
    <article className="w-full h-full bg-card rounded-xl overflow-hidden shadow-soft border border-border flex flex-col">
      <div className="relative aspect-[4/3] bg-muted">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-primary leading-snug">{item.title}</h3>
        {item.subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          {item.products.map((p) => p.name).join(" • ")}
        </p>
        <ul className="mt-3 space-y-1">
          {item.highlights.map((h) => (
            <li key={h} className="text-sm text-muted-foreground">• {h}</li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">{item.priceFrom}</span>
          <button
            onClick={() => onBuy(item)}
            className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm"
          >
            Buy
          </button>
        </div>
      </div>
    </article>
  );
};

const ProductAds: FC = () => {
  const [active, setActive] = useState<ProductPair | null>(null);
  const [mobileApi, setMobileApi] = useState<CarouselApi | null>(null);
  const [mobileActiveDot, setMobileActiveDot] = useState(0);
  const whatsappUrl = (pName?: string) => {
    const base = `https://wa.me/91${phoneNumber}`;
    const text = pName
      ? `Hi Cabin8, I'm interested in the product: ${pName}. Can you help me buy it?`
      : `Hi Cabin8, I'm interested in a selected product. Can you help me?`;
    return `${base}?text=${encodeURIComponent(text)}`;
  };

  // Update 5-dot indicator based on mobile carousel progress
  useEffect(() => {
    if (!mobileApi) return;
    const onSelect = () => {
      const total = productPairs.length;
      const idx = mobileApi.selectedScrollSnap();
      const progress = total <= 1 ? 0 : idx / (total - 1);
      const dot = Math.min(4, Math.max(0, Math.round(progress * 4)));
      setMobileActiveDot(dot);
    };
    onSelect();
    mobileApi.on("select", onSelect);
    mobileApi.on("reInit", onSelect);
    return () => {
      mobileApi.off("select", onSelect);
    };
  }, [mobileApi]);

  return (
    <section className="py-10 px-4 bg-background" id="products">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-5 text-center">
          <p className="text-muted-foreground uppercase tracking-widest text-xs font-medium">CABIN8 PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-primary">Shop Our Bestsellers</h2>
        </div>

        {/* Mobile carousel + Desktop carousel */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 md:[&>*]:h-full md:[&>*]:min-w-0">
          {/* Mobile: horizontal carousel with full-width cards */}
          <div className="md:hidden relative">
            <Carousel
              opts={{ align: "start", loop: false, containScroll: "trimSnaps" }}
              className="relative"
              setApi={(api: CarouselApi) => setMobileApi(api)}
            >
              <CarouselContent className="-ml-4">
                {productPairs.map((item) => (
                  <CarouselItem key={item.id} className="basis-full pl-4">
                    <ProductCard item={item} onBuy={setActive} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="h-7 w-7 bg-black/60 text-white border-0 shadow-soft hover:bg-black/70" />
              <CarouselNext className="h-7 w-7 bg-black/60 text-white border-0 shadow-soft hover:bg-black/70" />
            </Carousel>
            {/* 5-dot indicator */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`${mobileActiveDot === i ? "bg-primary" : "bg-muted"} h-1.5 w-5 rounded-full transition-colors`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: simple row with arrows, no fades/animations */}
          <div className="md:col-span-3 hidden md:block relative">
            <Carousel
              opts={{ align: "start", loop: false, containScroll: "trimSnaps" }}
              className="relative"
            >
              <CarouselContent className="-ml-6">
                {productPairs.map((item, index) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-[360px] pl-6 h-[560px]"
                  >
                    <ProductCard item={item} onBuy={setActive} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-primary text-primary-foreground border-0 shadow-soft hover:bg-primary/90" />
              <CarouselNext className="bg-primary text-primary-foreground border-0 shadow-soft hover:bg-primary/90" />
            </Carousel>
          </div>
          {/* Removed mobile stacked list */}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium"
          >
            Chat with us on WhatsApp
          </a>
          <a
            href="/products"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-medium"
          >
            View all products
          </a>
        </div>
      </div>

      {/* Action Sheet */}
      {active && (
        <div className="fixed inset-0 z-50">
          <button aria-label="Close" onClick={() => setActive(null)} className="absolute inset-0 bg-black/40" />
          <div className="absolute left-0 right-0 bottom-0 bg-card rounded-t-2xl shadow-soft p-4">
            <div className="text-center mb-3">
              <p className="text-sm text-muted-foreground">Proceed to buy</p>
              <h4 className="text-lg font-semibold text-primary">{active.title}</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center px-4 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium"
                onClick={() => setActive(null)}
              >
                Call
              </a>
              <a
                href={whatsappUrl(active.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-medium"
                onClick={() => setActive(null)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductAds;


