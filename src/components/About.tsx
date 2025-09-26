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
    <span className="font-semibold">Cabin8 Unisex Salon & Academy</span>, located near RK Cineplex in Ichalkaranji (416115), is your premier destination for beauty, personal care, and professional training. Under the expert guidance of owner and lead stylist <span className="font-semibold">Shreyash Kshirsagar</span>, we blend culture, creativity, and expertise in Hair, Makeup, Skin, and Wellness for a complete lifestyle experience.
  </p>

  <p>
    We offer an extensive range of services including Haircuts, Hair Coloring, Hair Smoothening, Keratin, Aminotherapy, Nanoplastia, Bluetox, Botox, Bridal & Event Makeup, Skin Treatments, and Body Care. As a professional academy, we also provide comprehensive hair and makeup training for aspiring stylists. Our commitment to hygienic practices, personalized services, and affordable packages makes Cabin8 the preferred choice for clients and students alike.
  </p>
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