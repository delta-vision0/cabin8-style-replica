import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import interior from "@/assets/cabin8-interior.jpg";
import merch from "@/assets/cabin8-merchandise.jpg";
import { galleryItems } from "@/lib/gallery";
import ProductAds from "@/components/ProductAds";
import Staff from "@/components/Staff";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <Hero />
      {/* Highlight products near the top */}
      <ProductAds />
      <About />
      {/* Start With Us (Careers) before Gallery */}
      <section id="careers" className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-primary mb-4">Start Your Career With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our hair & makeup academy and grow with industry professionals. Hands-on training, real clients, and a clear path to success.
          </p>
          <a href="tel:8007446194" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury rounded-md font-medium tracking-wide">
            CONTACT ADMISSIONS
          </a>
        </div>
      </section>
      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium mb-2">INSIDE CABIN8</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-primary">Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.slice(0, 3).map((g) => (
              <img key={g.id} src={g.src} alt={g.alt} className="w-full h-72 object-cover rounded-xl shadow-soft" />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/gallery" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury rounded-md font-medium tracking-wide">Explore Cabin8 Gallery</a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <Services />

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-primary mb-4">Start Your Career With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our hair & makeup academy and grow with industry professionals. Hands-on training, real clients, and a clear path to success.
          </p>
          <a href="tel:8007446194" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury rounded-md font-medium tracking-wide">
            CONTACT ADMISSIONS
          </a>
        </div>
      </section>
      {/* Staff above Contact */}
      <Staff />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
