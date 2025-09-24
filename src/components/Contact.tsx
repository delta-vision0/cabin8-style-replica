import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-SALON",
      subtitle: "Call or text to book"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "hello@cabin8salon.com",
      subtitle: "We'll respond within 24hrs"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Style Street",
      subtitle: "Downtown District"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Tue - Sat: 9AM - 7PM",
      subtitle: "Sun - Mon: Closed"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-medium mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-primary mb-6">
            Visit Cabin8
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your look? Book your appointment today and experience 
            the luxury and expertise that sets Cabin8 apart.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 bg-card/50 hover:bg-card transition-luxury group text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-luxury">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-serif font-medium text-primary mb-2">
                  {info.title}
                </h3>
                
                <p className="text-primary font-medium mb-1">
                  {info.details}
                </p>
                
                <p className="text-muted-foreground text-sm">
                  {info.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card/30 rounded-2xl p-12 shadow-soft">
          <h3 className="text-3xl md:text-4xl font-serif font-light text-primary mb-6">
            Ready to Book Your Appointment?
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the difference of professional styling in our luxurious salon environment. 
            Our team is ready to help you achieve your perfect look.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-luxury px-8 py-3 text-lg font-medium"
            >
              BOOK NOW
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury px-8 py-3 text-lg font-medium"
            >
              CONSULTATION
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-luxury group"
            >
              <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-luxury" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-luxury group"
            >
              <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-luxury" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;