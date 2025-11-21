"use client";

import { useFloatingCta } from "@/hooks/use-floating-cta";
import PrimaryCta from "@/components/cta/PrimaryCta";
import { brandingCopy } from "@/content/branding";
import { templateConfig } from "@/config/template-config";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function FloatingCta() {
  const isVisible = useFloatingCta();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`
        fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:inset-auto sm:bottom-6 sm:right-6 z-50
        w-[calc(100vw-2rem)] sm:w-auto
        transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
      `}
    >
      <PrimaryCta
        id="cta-floating"
        href="/form"
        size="md"
        variant="primary"
        className="w-full sm:w-auto shadow-lg shadow-orange-500/30"
        ariaLabel={brandingCopy.hero.floatingCtaLabel || templateConfig.branding.primaryCtaText}
        dataCta="lead"
        dataTrack="true"
        dataVariant="floating"
      >
        {brandingCopy.hero.floatingCtaLabel || templateConfig.branding.primaryCtaText}
      </PrimaryCta>
    </div>,
    document.body
  );
}