import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { SiteFooter } from "@/components/home/site-footer";
import { homeSections } from "@/content/home-sections";
import { FloatingCta } from "@/components/home/floating-cta";
import { templateConfig } from "@/config/template-config";
import { brandingCopy } from "@/content/branding";
import PrimaryCta from "@/components/cta/PrimaryCta";

const floatingCTAClasses =
  "fixed bottom-6 left-6 right-6 sm:left-auto sm:w-auto z-50 shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]";

export default function Home() {
  return (
    <div className="bg-[color:var(--color-bg-main)] text-[color:var(--color-text-slate-100)]">
      <header role="banner">
        <HeroSection />
      </header>

      <main id="conteudo" className="flex flex-col">
        {homeSections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>

      <SiteFooter />

      {/* CTA dinâmica que aparece com scroll */}
      <FloatingCta />
    </div>
  );
}

export const metadata = {
  title: templateConfig.seo.pages.home.title,
  description: templateConfig.seo.pages.home.description,
  openGraph: {
    title: `${templateConfig.seo.pages.home.title} | ${templateConfig.branding.companyName}`,
    description: templateConfig.seo.pages.home.description,
    url: `${templateConfig.site.url}${templateConfig.seo.pages.home.path}`,
  },
  twitter: {
    title: `${templateConfig.seo.pages.home.title} | ${templateConfig.branding.companyName}`,
    description: templateConfig.seo.pages.home.description,
  },
  alternates: {
    canonical: templateConfig.seo.pages.home.path,
  },
  robots: templateConfig.seo.pages.home.robots,
};