"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { templateConfig } from "@/config/template-config";
import { brandingCopy } from "@/content/branding";
import { cn } from "@/lib/utils";


import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "success";
type Size = "sm" | "md" | "lg";
type IconPosition = "left" | "right";
type Motion = "gradient" | "none";

export type PrimaryCtaProps = {
  href?: string;
  id?: string;
  label?: string;
  dataCta?: string;
  dataTrack?: string;
  dataVariant?: string;
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  disabled?: boolean;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  motion?: Motion;
  onClick?: () => void;
  asButton?: boolean;
};

export function PrimaryCta({
  href = "/form",
  id = "cta-primary",
  label,
  dataCta = "lead",
  dataTrack = "true",
  dataVariant,
  ariaLabel,
  className,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  disabled = false,
  type = "button",
  target,
  rel,
  motion = "none",
  onClick,
  asButton = false,
}: PrimaryCtaProps) {
  const text = label || brandingCopy.hero.floatingCtaLabel || templateConfig.branding.primaryCtaText;
  const aria = ariaLabel || text;
  const variantClass = {
    primary: "bg-[color:var(--color-bg-orange-500)] text-[color:var(--color-text-white)] hover:bg-[color:var(--color-bg-orange-600)]",
    secondary: "bg-[color:var(--hero-accent)] text-[color:var(--color-text-slate-900)] hover:bg-[color:var(--hero-accent-hover)]",
    outline: "border border-[color:var(--color-bg-orange-500)] text-[color:var(--color-bg-orange-500)] bg-transparent hover:bg-[color:var(--color-bg-orange-500)] hover:text-white",
    success: "bg-green-600 text-white hover:bg-green-700",
  }[variant];
  const sizeClass = {
    sm: "px-4 py-2 text-sm xl:px-5 xl:py-2.5 xl:text-base 2xl:px-6 2xl:py-3 2xl:text-lg",
    md: "px-6 py-3 text-base xl:px-8 xl:py-4 xl:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl",
    lg: "px-8 py-4 text-lg xl:px-10 xl:py-5 xl:text-xl 2xl:px-12 2xl:py-6 2xl:text-2xl",
  }[size];

  const motionClass = motion === "gradient" ? "animate-gradient-shift" : "";

  const baseClass = "inline-flex items-center rounded-md font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400";

  // Icon rendering
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-flex items-center mr-2">{icon}</span>
      )}
      {children ?? text}
      {icon && iconPosition === "right" && (
        <span className="inline-flex items-center ml-2">{icon}</span>
      )}
    </>
  );

  // Render as button when onClick is provided or asButton is true
  if (onClick || asButton) {
    return (
      <Button
        className={cn(baseClass, variantClass, sizeClass, motionClass, className)}
        disabled={disabled}
        type={type}
        onClick={onClick}
        id={id}
        data-cta={dataCta}
        data-variant={dataVariant || templateConfig.analytics.variant}
        aria-label={aria}
        data-track={dataTrack}
      >
        {content}
      </Button>
    );
  }

  return (
    <Button
      asChild
      className={cn(baseClass, variantClass, sizeClass, motionClass, className)}
      disabled={disabled}
      type={type}
    >
      <Link
        href={href}
        id={id}
        data-cta={dataCta}
        data-variant={dataVariant || templateConfig.analytics.variant}
        aria-label={aria}
        data-track={dataTrack}
        {...(target ? { target } : {})}
        {...(rel ? { rel } : {})}
      >
        {content}
      </Link>
    </Button>
  );
}

export default PrimaryCta;
