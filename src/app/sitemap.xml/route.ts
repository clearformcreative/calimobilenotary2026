import { services } from "@/content/site";

export async function GET() {
  const baseUrl = "https://www.calimobilenotary.com";

  const staticPages = [
    { url: baseUrl, changefreq: "weekly", priority: "1.0" },
    { url: `${baseUrl}/services`, changefreq: "weekly", priority: "0.8" },
    { url: `${baseUrl}/pricing`, changefreq: "weekly", priority: "0.8" },
    { url: `${baseUrl}/about`, changefreq: "monthly", priority: "0.6" },
    { url: `${baseUrl}/contact`, changefreq: "monthly", priority: "0.6" },
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const allPages = [...staticPages, ...servicePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
