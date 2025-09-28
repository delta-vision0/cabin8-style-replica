import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-serif font-light tracking-wider mb-2">
              CABIN8
            </h3>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">
              unisex salon
            </p>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Where modern techniques meet timeless elegance. Experience luxury styling 
              and exceptional service in the heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-smooth">About</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-smooth">Services</a></li>
              <li><a href="#team" className="hover:text-primary-foreground transition-smooth">Team</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:8007446194" className="text-sm underline-offset-2 hover:underline">8007446194</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">cabin8salon@gmail.com</span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium mb-1">Hours:</p>
                <p className="text-sm">WED - MON: 9AM - 9PM</p>
                <p className="text-sm">Tuesday : Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Cabin8 Unisex Salon. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/cabin8salon/" 
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-luxury"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-luxury"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
