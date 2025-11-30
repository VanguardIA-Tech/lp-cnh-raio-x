"use client";

// Reusable configuration for Clarity route tagging.
// Projects can customize page type mapping and variant source
// by either editing this file or overriding via window.__clarityRouteConfig.

export type PageType = "lp" | "form" | "thanks" | "other" | string;

export interface ClarityRouteConfig {
  pageTypeFrom: (pathname: string | null) => PageType;
  getVariant?: () => string | undefined;
  enableViewEvent?: boolean; // emits view:<pageType>
}

function defaultPageTypeFrom(pathname: string | null): PageType {
  const p = pathname || "/";
  if (p === "/") return "lp";
  if (p.startsWith("/form")) return "form";
  if (p.startsWith("/obrigado")) return "thanks";
  return "other";
}

function defaultGetVariant(): string | undefined {
  const v = (process.env.NEXT_PUBLIC_VARIANT || "A").toString().trim();
  return v || undefined;
}

export function getClarityRouteConfig(): ClarityRouteConfig {
  // Allow runtime override without rebuilding via globalThis
  const globalCfg = (typeof window !== "undefined" && (window as any).__clarityRouteConfig) as
    | Partial<ClarityRouteConfig>
    | undefined;

  return {
    pageTypeFrom: globalCfg?.pageTypeFrom || defaultPageTypeFrom,
    getVariant: globalCfg?.getVariant || defaultGetVariant,
    enableViewEvent: globalCfg?.enableViewEvent ?? true,
  };
}
