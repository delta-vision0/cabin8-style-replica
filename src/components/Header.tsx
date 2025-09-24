import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>CALL 8007449164 TO BOOK NOW!</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Ichalkaranji 416115 near RK Cineplex</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-serif font-light tracking-wider text-primary">
                CABIN8
                <span className="block text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground">
                  unisex salon
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                ABOUT
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
                SERVICES
              </a>
              <a href="#team" className="text-foreground hover:text-primary transition-smooth font-medium">
                TEAM
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                CONTACT
              </a>
              <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury">
                WORK WITH US
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </a>
                <a
                  href="#services"
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SERVICES
                </a>
                <a
                  href="#team"
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  TEAM
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </a>
                <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury w-fit">
                  WORK WITH US
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;