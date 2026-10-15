export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "The Eternal Abyss Wiki",
  shortName: "The Eternal Abyss",
  logoText: "T",
  tagline: "High Difficulty Roblox Tower Obby",
  description: "Explore challenging towers, discover unique areas, and master difficult jumps in The Eternal Abyss. Find tower walkthroughs, progression tips, and strategies for Pit of Misery, Timeless Manor, Starry Night, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://the-eternal-abyss.top",
  supportEmail: "support@the-eternal-abyss.top",
  gameUrl: "https://www.roblox.com/games/15873244701/The-Eternal-Abyss",
  heroVideoId: "LBf_nZd5VxQ", // [HARDEST OBBY] Tower of the Quest for Perfection // Verified // The Eternal Abyss
  social: {
    discord: "https://discord.gg/theeternalabyss",
    youtube: "https://www.youtube.com/watch?v=LBf_nZd5VxQ",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
