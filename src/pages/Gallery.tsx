import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryItems } from "@/lib/gallery";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-light text-primary mb-6">Cabin8 Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((g) => (
              <div key={g.id} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <img src={g.src} alt={g.alt} className="absolute inset-0 h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;


