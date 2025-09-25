import { FC, useEffect, useMemo, useState } from "react";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { products } from "@/lib/products";

const phoneNumber = "8007446194";
const featured = products;

const ProductCard: FC<{ name: string; image: string; price: string; volume: string; description?: string; onView: () => void }> = ({ name, image, price, volume, description, onView }) => {
  const tags = useMemo(() => {
    if (!description) return [] as string[];
    const text = description.toLowerCase();
    const picked: string[] = [];
    const add = (label: string) => { if (!picked.includes(label) && picked.length < 2) picked.push(label); };
    if (/(sulphate|sulfate)\s*-?\s*free/.test(text)) add("Sulphate Free");
    if (/paraben\s*-?\s*free/.test(text)) add("Paraben Free");
    if (/(anti[-\s]?dandruff|dandruff)/.test(text)) add("Anti-Dandruff");
    if (/(hydrate|moistur|nourish|revital)/.test(text)) add("Nourishing");
    if (/(color[-\s]?safe|protecting color)/.test(text)) add("Color Safe");
    if (/(shine|gloss)/.test(text)) add("Shine");
    return picked;
  }, [description]);
  return (
    <article className="w-full h-full bg-card rounded-xl overflow-hidden shadow-soft border border-border flex flex-col">
      <div className="relative aspect-[4/3] bg-muted">
        <img src={`/products/${image}`} alt={name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-primary leading-snug">{name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{volume}</span>
          <span className="inline-flex items-center rounded-full border border-primary text-primary px-2 py-0.5 text-xs font-semibold">{price}</span>
        </div>
        <div className="mt-2 h-[28px] flex items-center gap-2 overflow-hidden">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[11px] text-muted-foreground whitespace-nowrap">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span />
          <button onClick={onView} className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">View</button>
        </div>
      </div>
    </article>
  );
};

const ProductAds: FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
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
      const total = featured.length;
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
                {featured.map((p) => (
                  <CarouselItem key={p.id} className="basis-full pl-4">
                    <ProductCard name={p.name} image={p.image} price={p.price} volume={p.volume} description={p.description} onView={() => setActiveId(p.id)} />
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
                {featured.map((p) => (
                  <CarouselItem key={p.id} className="basis-[360px] pl-6 h-[560px]">
                    <ProductCard name={p.name} image={p.image} price={p.price} volume={p.volume} description={p.description} onView={() => setActiveId(p.id)} />
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

      {/* Product Detail Dialog */}
      {activeId && (
        <Dialog open onOpenChange={(o) => !o && setActiveId(null)}>
          <DialogContent className="sm:max-w-md">
            {(() => {
              const p = featured.find((x) => x.id === activeId)!;
              return (
                <div className="max-h-[80vh] flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-serif text-primary">{p.name}</DialogTitle>
                  </DialogHeader>
                  <div className="relative aspect-[4/3] bg-muted rounded-md overflow-hidden">
                    <img src={`/products/${p.image}`} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="mt-3 overflow-y-auto hide-scrollbar pr-1 flex-1 space-y-3">
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                    <div>
                      <h4 className="font-medium">Ingredients</h4>
                      <p className="text-sm text-muted-foreground">{p.ingredients}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">How to Use</h4>
                      <p className="text-sm text-muted-foreground">{p.howToUse}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{p.volume}</span>
                      <span className="inline-flex items-center rounded-full border border-primary text-primary px-2 py-0.5 text-xs font-semibold">{p.price}</span>
                    </span>
                    <a href={whatsappUrl(p.name)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">Enquire</a>
                  </div>
                </div>
              );
            })()}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ProductAds;


