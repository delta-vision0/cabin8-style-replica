import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Users, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Scissors,
      title: "Expert Stylists",
      description: "Our team of skilled professionals brings years of experience and passion to every service."
    },
    {
      icon: Users,
      title: "Unisex Services",
      description: "Welcoming all clients with personalized treatments tailored to individual style and needs."
    },
    {
      icon: Award,
      title: "Premium Products",
      description: "We use only the finest hair care and beauty products for exceptional results."
    },
    {
      icon: Heart,
      title: "Luxury Experience",
      description: "Relax in our elegant space designed for comfort and sophisticated style."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium mb-4">
                ABOUT CABIN8
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-primary mb-6 leading-tight">
                About Cabin8
                <span className="block">Unisex Salon</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Located in Ichalkaranji 416115 near RK Cineplex, Cabin8 Unisex Salon is your destination 
                for premium beauty, cosmetic & personal care services. Under the expert guidance of 
                owner and lead stylist <span className="font-semibold">Shreyash Kshirsagar</span>, we bring together culture and expertise in Makeup, Beauty, Hair, 
                and Health for happy lifestyles.
              </p>
              
              <p>
                We specialize in advanced treatments including Keratin, Aminotherapy, Nanoplastia, 
                Bluetox, and Bootox. Our commitment to hygienic services at affordable prices, 
                combined with loyalty rewards and complimentary consultations, makes us the 
                preferred choice for discerning clients.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-serif text-primary mb-6">Our Expert Team</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[{ n: 'Shreyash Kshirsagar', role: 'Owner • Lead Expert' }, { n: 'Nachiket', role: 'Expert Stylist' }, { n: 'Rushikesh', role: 'Expert Stylist' }, { n: 'Sanchita', role: 'Expert Stylist' }, { n: 'Smital', role: 'Expert Stylist' }, { n: 'Pooja', role: 'Expert Stylist' }, { n: 'Om', role: 'Expert Stylist' }].map((m, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-muted/20 border border-accent/10 p-4 text-center hover:shadow-lg transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                          <span className="text-lg font-serif font-semibold text-primary">{m.n.charAt(0)}</span>
                        </div>
                        <p className="font-serif font-medium text-primary text-base mb-1">{m.n}</p>
                        <p className="text-xs text-muted-foreground tracking-wide uppercase">{m.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#careers" className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury rounded-md font-medium tracking-wide">
                START YOUR CAREER WITH US
              </a>
              <a href="#gallery" className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury rounded-md font-medium tracking-wide">
                VIEW GALLERY
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-card/50 hover:bg-card transition-luxury group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-luxury">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif font-medium text-primary mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;