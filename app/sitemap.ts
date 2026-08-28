import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { serviceContent } from "@/data/serviceContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
    { path: "/service-areas", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/get-estimate", changeFrequency: "monthly", priority: 0.9 },
  ];

  const serviceRoutes = serviceContent.map((service) => ({
    path: `/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const now = new Date();

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
