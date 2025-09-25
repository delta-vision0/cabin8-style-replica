import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/lib/products";
import { useMemo, useState } from "react";

const ProductsPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => ["all", ...Array.from(new Set(products.map((p) => p.category)))], []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCat = category === "all" || p.category === category;
      return matchesQuery && matchesCat;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <h1 className="text-3xl md:text-4xl font-serif font-light text-primary">All Products</h1>
            <div className="flex gap-3">
              <Input placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-56" />
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-40"><SelectValue placeholder="Category" /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Card key={p.id} className="overflow-hidden">
                <div className="relative aspect-[4/3] bg-muted">
                  <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                    {p.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold">From ₹{p.priceFrom}</span>
                    <a href={`https://wa.me/918007446194?text=${encodeURIComponent("Hi, I'm interested in " + p.name)}`} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      Enquire
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;


