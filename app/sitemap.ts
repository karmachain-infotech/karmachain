import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.karmachain.in";
  const lastModified = new Date();

  return [
    // Core pages
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/technologies`, lastModified },
    { url: `${baseUrl}/portfolio`, lastModified },
    { url: `${baseUrl}/blog`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },

    // Service pages (from dropdown – real URLs)
    // { url: `${baseUrl}/web-development`, lastModified },
    // { url: `${baseUrl}/mobile-app-development`, lastModified },
    // { url: `${baseUrl}/python-development`, lastModified },
  ];
}
