import type { MetadataRoute } from "next";
import { projects } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/contact", ...projects.map(project => `/work/${project.slug}`)].map(path => ({ url: `https://serveekay.com${path}` }));
}
