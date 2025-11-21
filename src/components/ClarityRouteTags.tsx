"use client";
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Props = { variant?: string };

function norm(v: string | null | undefined) {
  return (v ?? "").toString().trim().toLowerCase();
}

function pageTypeFrom(pathname: string | null): "lp" | "form" | "thanks" | "other" {
  const p = pathname || "/";
  if (p === "/") return "lp";
  if (p.startsWith("/form")) return "form";
  if (p.startsWith("/obrigado")) return "thanks";
  return "other";
}

export default function ClarityRouteTags({ variant }: Props) {
  const pathname = usePathname();
  const search = useSearchParams();
  const lastSentRef = useRef<{ page_type?: string; variant?: string; utm?: string }>(
    {}
  );

  useEffect(() => {
    const c = (window as any).clarity as undefined | ((...a: any[]) => void);
    if (!c) return; // script ainda não disponível; o efeito rodará novamente

    const page_type = pageTypeFrom(pathname);
    const v = norm(variant || process.env.NEXT_PUBLIC_VARIANT || "A");

    const utm_source = norm(search.get("utm_source"));
    const utm_medium = norm(search.get("utm_medium"));
    const utm_campaign = norm(search.get("utm_campaign"));
    const utm_term = norm(search.get("utm_term"));
    const utm_content = norm(search.get("utm_content"));

    // Construir um hash simples para evitar sets repetidos
    const utmKey = [utm_source, utm_medium, utm_campaign, utm_term, utm_content].join("|");

    // Enviar somente se mudou
    if (lastSentRef.current.page_type !== page_type) {
      c("set", "page_type", page_type);
      c("event", `view:${page_type}`); // page view opcional
      lastSentRef.current.page_type = page_type;
    }
    if (lastSentRef.current.variant !== v) {
      c("set", "variant", v);
      lastSentRef.current.variant = v;
    }
    if (lastSentRef.current.utm !== utmKey) {
      c("set", "utm_source", utm_source);
      c("set", "utm_medium", utm_medium);
      c("set", "utm_campaign", utm_campaign);
      c("set", "utm_term", utm_term);
      c("set", "utm_content", utm_content);
      lastSentRef.current.utm = utmKey;
    }
  }, [pathname, search, variant]);

  return null;
}