import type { LucideIcon } from "lucide-react";

export type NavItem = {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
};

// 导航内容已清空：新主题的导航将在后续阶段按最终内容结构重建
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
