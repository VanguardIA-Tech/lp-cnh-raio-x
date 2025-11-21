"use client";

import GlowBlob, { GlowBlobProps } from "@/components/decor/glow-blob";

export type AuroraItem = GlowBlobProps & { id?: string };

export type AuroraFieldProps = {
  items: AuroraItem[];
};

export function AuroraField({ items }: AuroraFieldProps) {
  return (
    <>
      {items.map((item, idx) => (
        <GlowBlob key={item.id || idx} {...item} />
      ))}
    </>
  );
}

export default AuroraField;
