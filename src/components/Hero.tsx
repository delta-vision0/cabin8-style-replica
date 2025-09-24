import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/salon-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-lg md:text-xl font-light tracking-wide uppercase">
            Experience luxury and style
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
            <span className="block">PREMIERE</span>
            <span className="block">UNISEX SALON</span>
          </h1>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Where modern techniques meet timeless elegance in the heart of the city
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-luxury px-8 py-3 text-lg font-medium"
            >
              BOOK APPOINTMENT
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-luxury px-8 py-3 text-lg font-medium"
            >
              VIEW SERVICES
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-light tracking-wider">SCROLL</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;