import { defineRouting } from "next-intl/routing";

// 唯一真相源：语言集合只在此处维护
export const locales = ["en", "es", "pt-br", "de"] as const;

export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});
