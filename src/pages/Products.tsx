import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/products";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesQuery;
    });
  }, [query]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <h1 className="text-3xl md:text-4xl font-serif font-light text-primary">All Products</h1>
            <div className="flex gap-3">
              <Input placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-56" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Dialog key={p.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <Card className="overflow-hidden">
                      <div className="relative aspect-[4/3] bg-muted">
                        <img src={`/products/${p.image}`} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{p.volume}</span>
                          <span className="inline-flex items-center rounded-full border border-primary text-primary px-2 py-0.5 text-xs font-semibold">{p.price}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
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
                      <a href={`https://wa.me/918007446194?text=${encodeURIComponent("Hi, I'm interested in " + p.name)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm">Enquire</a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;


