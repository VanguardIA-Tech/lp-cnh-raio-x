"use client";

import GlowBlob from "@/components/decor/glow-blob";

export function HeroAurora() {
  return (
    <>
      <GlowBlob
        variant="green"
        className="left-[12%] top-[22%] h-[60vw] w-[60vw] lg:h-[48rem] lg:w-[48rem]"
        blurClassName="blur-[100px]"
      />
      <GlowBlob
        variant="cyan"
        className="right-[10%] top-[30%] h-[48vw] w-[48vw] lg:h-[34rem] lg:w-[34rem]"
        blurClassName="blur-[100px]"
      />
      <GlowBlob
        variant="orange"
        className="bottom-0 right-[-12%] h-[60vw] w-[60vw] lg:h-[40rem] lg:w-[40rem]"
        blurClassName="blur-[140px]"
      />
    </>
  );
}

export default HeroAurora;
