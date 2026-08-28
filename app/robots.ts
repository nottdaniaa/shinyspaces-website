import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// No path is disallowed — this is a fully public marketing site with no admin
// area, no user accounts, and no API routes. The explicit per-bot rules exist
// only to make "AI crawlers are welcome" unambiguous to anyone inspecting
// this file; the wildcard rule already covers them.
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "CCBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
