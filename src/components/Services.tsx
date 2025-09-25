import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { treatments, getTreatmentById } from "@/lib/treatments";
import hairIcon from "@/assets/hair-icon.jpg";
import blowoutIcon from "@/assets/blowout-icon.jpg";
import spaIcon from "@/assets/spa-icon.jpg";
import waxIcon from "@/assets/wax-icon.jpg";

const Services = () => {
  const services = [
    {
      id: "keratin",
      title: "KERATIN",
      icon: hairIcon,
      description: "Professional keratin treatment for smooth, frizz-free hair. Price depends on length and density.",
    },
    {
      id: "aminotherapy",
      title: "AMINOTHERAPY", 
      icon: blowoutIcon,
      description: "Advanced amino acid therapy for hair restoration and strengthening.",
    },
    {
      id: "nanoplastia",
      title: "NANOPLASTIA",
      icon: spaIcon,
      description: "Revolutionary nanoplastia treatment for silky, manageable hair.",
    },
    {
      id: "bluetox",
      title: "BLUETOX",
      icon: waxIcon,
      description: "Premium bluetox treatment for ultimate hair smoothening and repair.",
    },
    {
      id: "botox",
      title: "BOTOX",
      icon: spaIcon,
      description: "Intensive hair botox therapy for damaged hair restoration.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
          {services.map((service) => (
            <Dialog key={service.id}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <Card className="group border-0 md:border md:bg-card md:rounded-xl bg-transparent hover:bg-card transition-luxury cursor-pointer h-full">
                  <CardContent className="p-6 md:p-8 lg:p-10 text-center">
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
                  <h3 className="text-xl font-serif font-medium text-primary mb-4 tracking-wide break-words">
                  {service.title}
                </h3>

                {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed break-words">
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
                </div>
              </DialogTrigger>
              <DialogContent>
                {(() => {
                  const t = getTreatmentById(service.id) || treatments[0];
                  return (
                    <div className="space-y-3">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-serif text-primary">{t.title}</DialogTitle>
                      </DialogHeader>
                      <p className="text-sm text-muted-foreground">{t.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Benefits</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {t.benefits.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p><span className="font-medium text-foreground">Duration:</span> {t.duration}</p>
                        <p><span className="font-medium text-foreground">Suitable for:</span> {t.suitableFor}</p>
                      </div>
                      <div className="pt-2">
                       
                      </div>
                    </div>
                  );
                })()}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced team is dedicated to providing you with exceptional service 
            and helping you look and feel your absolute best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/treatments" className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury rounded-md font-medium tracking-wide">
              VIEW ALL SERVICES
            </Link>
            <a href="tel:8007446194" className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury rounded-md font-medium tracking-wide">
              BOOK CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;