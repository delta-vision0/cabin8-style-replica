import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/cabin8-interior.jpg";

const Hero = () => {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="space-y-4 md:space-y-6">
          <p className="text-base md:text-xl font-light tracking-wide uppercase mt-4 md:mt-0">
            Hair, Beauty, Cosmetic & Personal Care
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
            <span className="block">CABIN8</span>
            <span className="block">UNISEX SALON</span>
          </h1>

          <p className="text-base md:text-xl font-light max-w-2xl mx-auto">
            We're bringing together culture and Hair, Beauty, Makeup, Health experts and happy lifestyles.
          </p>

          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-white/90">Hygienic services at affordable prices</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-white/90">Win lucky draws & enjoy loyalty points</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-white/90">Get Free HairCut With Hair Treatment</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-8">
            <a
              href="tel:8007446194"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 transition-luxury px-8 py-3 text-lg font-medium rounded-md"
            >
              BOOK APPOINTMENT
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center border border-white text-black hover:bg-white hover:text-primary transition-luxury px-8 py-3 text-lg font-medium rounded-md"
            >
              VIEW SERVICES
            </a>
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
