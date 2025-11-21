"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MetalVariant = "metal-green"; // futuras variantes podem ser adicionadas
type PaddingSize = "sm" | "md" | "lg";

export interface MetalCardProps {
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  logoSrc?: string;
  logoAlt?: string;
  icon?: ReactNode;
  children?: ReactNode; // conteúdo extra abaixo do header
  href?: string; // torna o card clicável inteiro
  target?: string;
  rel?: string;
  dataCta?: string;
  dataTrack?: string;
  dataVariant?: string;
  variant?: MetalVariant;
  padding?: PaddingSize;
  outerClassName?: string; // wrapper gradient
  innerClassName?: string; // inner card
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
}

const outerVariantClass: Record<MetalVariant, string> = {
  "metal-green": "bg-metal-green",
};

const paddingMap: Record<PaddingSize, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function MetalCard({
  id,
  title,
  subtitle,
  logoSrc,
  logoAlt,
  icon,
  children,
  href,
  target,
  rel,
  dataCta,
  dataTrack = "true",
  dataVariant,
  variant = "metal-green",
  padding = "md",
  outerClassName,
  innerClassName,
  ariaLabel,
  role,
  tabIndex,
}: MetalCardProps) {
  const Wrapper = href ? Link : ("div" as any);
  const interactiveProps = href
    ? { href, ...(target ? { target } : {}), ...(rel ? { rel } : {}), "aria-label": ariaLabel }
    : {};

  return (
    <div
      className={cn("rounded-2xl p-[2.5px]", outerVariantClass[variant], outerClassName)}
      id={id}
      data-cta={dataCta}
      data-track={dataTrack}
      data-variant={dataVariant}
      role={role}
    >
      <Wrapper
        className={cn(
          "group relative flex h-full flex-col items-center justify-start gap-4 rounded-2xl card-metal-inner w-full transition duration-200 ease-out hover:shadow-lg focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 active:scale-[0.99]",
          paddingMap[padding],
          innerClassName
        )}
        tabIndex={tabIndex}
        {...interactiveProps}
      >
        {(logoSrc || icon) && (
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/95 p-2">
            {logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoSrc}
                alt={logoAlt || (typeof title === "string" ? `${title} Logo` : "Logo")}
                className="h-full w-full object-contain"
              />
            ) : (
              icon
            )}
          </div>
        )}
        {(title || subtitle) && (
          <div className="space-y-1 text-center sm:text-left">
            {title && (
              <h3 className="text-base font-semibold text-slate-50 sm:text-lg text-center">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-slate-300 text-center">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Wrapper>
    </div>
  );
}

export default MetalCard;