"use client";

import { cn } from "@/lib/utils";

type Variant = "green" | "cyan" | "orange" | "custom";

export type GlowBlobProps = {
  variant?: Variant;
  className?: string; // posição e tamanho (ex: left/top/width/height responsive)
  blurClassName?: string; // ex: blur-[100px]
  bgClassName?: string; // usar quando variant="custom"
  hiddenFrom?: "sm" | "md" | "lg" | "xl" | "2xl"; // opcional para esconder por breakpoint
  ariaHidden?: boolean;
};

const variantBg: Record<Exclude<Variant, "custom">, string> = {
  green: "bg-[color:var(--color-bg-green)]",
  cyan: "bg-[color:var(--color-bg-cyan)]",
  orange: "bg-[color:var(--color-bg-orange)]",
};

export function GlowBlob({
  variant = "green",
  className,
  blurClassName = "blur-[100px]",
  bgClassName,
  hiddenFrom,
  ariaHidden = true,
}: GlowBlobProps) {
  const base = "pointer-events-none absolute rounded-full";
  const visibility = hiddenFrom ? `${hiddenFrom}:hidden` : undefined;
  const bg = variant === "custom" ? bgClassName : variantBg[variant];
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(base, bg, blurClassName, visibility, className)}
    />
  );
}

export default GlowBlob;
