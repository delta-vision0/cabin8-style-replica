import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import interiorImage from "@/assets/cabin8-interior.jpg";

const Treatments = () => {
  const treatments = [
    {
      id: "keratin",
      title: "Keratin Treatment",
      description: "Professional keratin treatment that smoothens and strengthens your hair, eliminating frizz and providing long-lasting results.",
      benefits: [
        "Reduces frizz up to 95%",
        "Cuts styling time in half", 
        "Adds incredible shine",
        "Strengthens hair structure",
        "Lasts 3-6 months"
      ],
      duration: "2-4 hours",
      suitableFor: "All hair types, especially frizzy and damaged hair",
      process: "Deep cleansing, keratin application, blow-dry, and heat sealing for maximum effectiveness.",
      aftercare: "Avoid washing for 72 hours, use sulfate-free shampoo, and minimize heat styling."
    },
    {
      id: "aminotherapy",
      title: "Aminotherapy",
      description: "Advanced amino acid therapy that repairs damaged hair from within, restoring natural strength and vitality.",
      benefits: [
        "Repairs damaged hair cuticles",
        "Restores natural protein balance",
        "Improves hair elasticity",
        "Reduces breakage significantly",
        "Long-lasting results"
      ],
      duration: "1.5-2.5 hours",
      suitableFor: "Chemically treated and severely damaged hair",
      process: "Hair analysis, amino acid application, processing with controlled heat, and protective sealing.",
      aftercare: "Use protein-free products for 2 weeks, gentle handling, and regular deep conditioning."
    },
    {
      id: "nanoplastia",
      title: "Nanoplastia",
      description: "Revolutionary nanotechnology treatment that penetrates deep into hair fibers for ultimate smoothness and manageability.",
      benefits: [
        "Ultimate hair smoothening",
        "Reduces volume naturally",
        "Eliminates static and frizz",
        "Adds natural movement",
        "Safe for colored hair"
      ],
      duration: "2-3 hours", 
      suitableFor: "All hair types seeking smoothness without chemical processing",
      process: "Gentle cleansing, nanoplastia application layer by layer, controlled drying, and sealing.",
      aftercare: "Wait 48 hours before washing, use recommended products, and avoid tight hairstyles."
    },
    {
      id: "bluetox",
      title: "Bluetox Treatment",
      description: "Premium bluetox formula that provides intensive repair while maintaining hair's natural movement and texture.",
      benefits: [
        "Intensive hair repair",
        "Maintains natural texture",
        "Reduces frizz moderately",
        "Adds healthy shine",
        "Quick processing time"
      ],
      duration: "1-2 hours",
      suitableFor: "Mildly damaged hair wanting natural-looking results",
      process: "Pre-treatment preparation, bluetox application, gentle processing, and final conditioning.",
      aftercare: "Regular maintenance treatments recommended, use color-safe products."
    },
    {
      id: "botox",
      title: "Hair Botox Treatment", 
      description: "Intensive botox therapy that fills hair fiber gaps, providing immediate repair and rejuvenation for damaged hair.",
      benefits: [
        "Instant hair rejuvenation",
        "Fills damaged areas",
        "Adds volume and body",
        "Improves hair health",
        "No harsh chemicals"
      ],
      duration: "1.5-2 hours",
      suitableFor: "Thin, fine, or moderately damaged hair",
      process: "Deep cleansing, botox mask application, steam processing, and nutrient sealing.",
      aftercare: "Avoid washing for 24 hours, use gentle products, and maintain with regular treatments."
    }
  ];

  const { serviceId } = useParams();

  const visibleTreatments = serviceId
    ? treatments.filter((t) => t.id === serviceId)
    : treatments;

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
            {visibleTreatments.map((treatment) => (
              <Card key={treatment.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-primary">
                    {treatment.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{treatment.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{treatment.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Expert Care</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-accent" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-1">
                      {treatment.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable For */}
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Suitable For:</h4>
                    <p className="text-sm text-muted-foreground">{treatment.suitableFor}</p>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Process:</h4>
                    <p className="text-sm text-muted-foreground">{treatment.process}</p>
                  </div>

                  {/* Aftercare */}
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Aftercare:</h4>
                    <p className="text-sm text-muted-foreground">{treatment.aftercare}</p>
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

export default Treatments;