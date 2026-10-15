import type { LucideIcon } from "lucide-react";
import { BookOpen, Castle, Map, Scale, TrendingUp, Users, Wrench } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

// 分类 slug 与 content/<locale>/ 下的文章子目录一一对应（真相源：关键词.json 的 categories）
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "towers", path: "/towers", icon: Castle, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "comparison", path: "/comparison", icon: Scale, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
