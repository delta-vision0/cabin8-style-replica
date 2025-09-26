const fs = require("fs");

// All your site pages
const pages = [
  "/",
  "/products",
  "/treatments",
  "/treatments/keratin",
  "/treatments/aminotherapy",
  "/treatments/nanoplastia",
  "/treatments/bluetox",
  "/treatments/botox",
  "/gallery"
];

const baseUrl = "https://www.cabin8salon.com";
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach((path, i) => {
  sitemap += `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${i <= 2 ? "weekly" : "monthly"}</changefreq>
    <priority>${i === 0 ? "1.0" : i <= 2 ? "0.9" : i === pages.length - 1 ? "0.6" : "0.8"}</priority>
  </url>
`;
});

sitemap += `</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated at public/sitemap.xml");
