export type GalleryItem = {
  id: string;
  src: string; // path under public/gallery
  alt: string;
};

// Place the provided photos in public/gallery with these file names
export const galleryItems: GalleryItem[] = [
  { id: "salon-1", src: "/gallery/cabin8-salon-1.jpg", alt: "Cabin8 salon interior view" },
  { id: "salon-2", src: "/gallery/cabin8-salon-2.jpg", alt: "Cabin8 workstations and mirrors" },
  { id: "certificates", src: "/gallery/cabin8-certificates.jpg", alt: "Cabin8 certificates counter" },
  { id: "service-1", src: "/gallery/cabin8-service-1.jpg", alt: "Stylist performing hair service" },
  { id: "branding-1", src: "/gallery/cabin8-branding-1.jpg", alt: "Cabin8 branding closeup" },
];



