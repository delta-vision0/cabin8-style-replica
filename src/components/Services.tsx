import { Card, CardContent } from "@/components/ui/card";
import hairIcon from "@/assets/hair-icon.jpg";
import blowoutIcon from "@/assets/blowout-icon.jpg";
import spaIcon from "@/assets/spa-icon.jpg";
import waxIcon from "@/assets/wax-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "HAIR + COLOR",
      icon: hairIcon,
      description: "Expert cuts, styling, and color treatments using premium products",
    },
    {
      title: "BLOWOUT BAR", 
      icon: blowoutIcon,
      description: "Professional blowouts and styling for any occasion",
    },
    {
      title: "SPA",
      icon: spaIcon,
      description: "Relaxing spa treatments and luxury wellness services",
    },
    {
      title: "WAX",
      icon: waxIcon,
      description: "Professional waxing services for smooth, lasting results",
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium mb-4">
            EXPLORE THE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-primary mb-6">
            Services We Offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 bg-transparent hover:bg-card transition-luxury cursor-pointer">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-luxury">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-luxury"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-medium text-primary mb-4 tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-luxury">
                  <span className="text-primary text-sm font-medium tracking-wide">
                    LEARN MORE →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced team is dedicated to providing you with exceptional service 
            and helping you look and feel your absolute best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury rounded-md font-medium tracking-wide">
              VIEW ALL SERVICES
            </button>
            <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury rounded-md font-medium tracking-wide">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;