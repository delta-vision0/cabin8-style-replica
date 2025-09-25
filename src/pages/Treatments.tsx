import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import interiorImage from "@/assets/cabin8-interior.jpg";
import { treatments } from "@/lib/treatments";
import { useState } from "react";

const Treatments = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${interiorImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto max-w-6xl text-center text-white">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">
            Premium Hair Treatments
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
            Discover our advanced hair treatments designed to restore, repair, and revitalize your hair 
            with the latest technology and premium products.
          </p>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-primary mb-4">Treatment Pricing</h3>
              <p className="text-muted-foreground text-lg">
                All treatment prices depend on hair length and density. 
                Contact us for a personalized consultation and accurate pricing.
              </p>
              <Button className="mt-4" asChild>
                <Link to="/#contact">Get Price Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {treatments.map((t) => {
              const expanded = expandedId === t.id;
              return (
                <Card key={t.id} className="transition-all duration-300">
                  <button
                    className="w-full text-left"
                    onClick={() => setExpandedId(expanded ? null : t.id)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-2xl font-serif text-primary">
                        <span>{t.title}</span>
                        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CardTitle>
                      <p className="text-muted-foreground">{t.description}</p>
                    </CardHeader>
                  </button>
                  {expanded && (
                    <CardContent className="space-y-6">
                      <div className="text-sm text-muted-foreground">
                        <p><span className="font-medium text-foreground">Duration:</span> {t.duration}</p>
                        <p><span className="font-medium text-foreground">Suitable for:</span> {t.suitableFor}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Benefits</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {t.benefits.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Process</h4>
                        <p className="text-sm text-muted-foreground">{t.process}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Aftercare</h4>
                        <p className="text-sm text-muted-foreground">{t.aftercare}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treatments;