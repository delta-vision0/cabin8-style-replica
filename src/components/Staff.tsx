import { Card, CardContent } from "@/components/ui/card";

const team = [
  { n: "Shreyash Kshirsagar", role: "Owner • Lead Expert" },
  { n: "Nachiket", role: "Expert Stylist" },
  { n: "Rushikesh", role: "Expert Stylist" },
  { n: "Sanchita", role: "Expert Stylist" },
  { n: "Smital", role: "Expert Stylist" },
  { n: "Pooja", role: "Expert Stylist" },
  { n: "Om", role: "Expert Stylist" },
];

const Staff = () => {
  return (
    <section id="team" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-8">Our Expert Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {team.map((m) => (
            <div key={m.n} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-muted/20 border border-accent/10 p-4 text-center hover:shadow-lg transition-all duration-300">
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
    </section>
  );
};

export default Staff;


