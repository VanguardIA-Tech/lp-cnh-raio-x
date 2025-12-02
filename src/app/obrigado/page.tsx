
import type { Metadata } from "next";
import { templateConfig } from "@/config/template-config";
import { brandingCopy } from "@/content/branding";
import testimonials from "@/data/testimonials.json";
import { ObrigadoContent } from "@/components/obrigado/ObrigadoContent";

export const metadata: Metadata = {
  title: templateConfig.seo.pages.thankYou.title,
  description: templateConfig.seo.pages.thankYou.description,
  openGraph: {
    title: `${templateConfig.seo.pages.thankYou.title} | ${templateConfig.branding.companyName}`,
    description: templateConfig.seo.pages.thankYou.description,
    url: `${templateConfig.site.url}${templateConfig.seo.pages.thankYou.path}`,
  },
  twitter: {
    title: `${templateConfig.seo.pages.thankYou.title} | ${templateConfig.branding.companyName}`,
    description: templateConfig.seo.pages.thankYou.description,
  },
  alternates: {
    canonical: templateConfig.seo.pages.thankYou.path,
  },
  robots: templateConfig.seo.pages.thankYou.robots,
};

const PROCESS_VIDEO_URL = "https://res.cloudinary.com/dcg2hwh7x/video/upload/v1763478014/vangguardia-cnh_uw3nu5.mp4";
const whatsappNumber = templateConfig.branding.whatsappNumber.replace(/[^\d]/g, "");
const whatsappMessage = encodeURIComponent(templateConfig.branding.whatsappMessage);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function ObrigadoPage() {
  return (
    <ObrigadoContent
      heading={brandingCopy.obrigado.heading}
      subheading={brandingCopy.obrigado.subheading}
      whatsappUrl={whatsappUrl}
      processVideoUrl={PROCESS_VIDEO_URL}
      testimonials={testimonials}
    />
  );
}