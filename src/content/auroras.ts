import { AuroraItem } from "@/components/decor/aurora-field";

export const heroAurora: AuroraItem[] = [
  {
    variant: "green",
    className:
      "absolute left-[12%] top-[22%] h-[60vw] w-[60vw] lg:h-[48rem] lg:w-[48rem] -z-10",
    blurClassName: "blur-[100px]",
  },
  {
    variant: "cyan",
    className:
      "absolute right-[10%] top-[30%] h-[48vw] w-[48vw] lg:h-[34rem] lg:w-[34rem] -z-10",
    blurClassName: "blur-[100px]",
  },
  {
    variant: "orange",
    className:
      "absolute bottom-0 right-[-12%] h-[60vw] w-[60vw] lg:h-[40rem] lg:w-[40rem] -z-10",
    blurClassName: "blur-[140px]",
  },
];

export type { AuroraItem };
