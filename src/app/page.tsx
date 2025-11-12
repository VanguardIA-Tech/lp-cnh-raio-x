"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopBanner } from "@/components/home/top-banner";
import { HeroSection } from "@/components/home/hero-section";
import { ContextSection } from "@/components/home/context-section";
import { CnhCorporateSection } from "@/components/home/cnh-corporate-section";
import { AuthoritySection } from "@/components/home/authority-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { LeaderSection } from "@/components/home/leader-section";
import { SiteFooter } from "@/components/home/site-footer";
import { DiagnosisSection } from "@/components/home/diagnosis-section";
import { MethodSection } from "@/components/home/method-section";

const floatingCTAClasses =
  "fixed bottom-6 left-6 right-6 sm:left-auto sm:w-auto z-50 shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]";

export default function Home() {
  return (
    <div className="bg-[#020F00] text-slate-100">
      <div className="flex flex-col">
        <TopBanner />
        <HeroSection />
      </div>

      <main className="flex flex-col">
        <ContextSection />
        <CnhCorporateSection />
        <SuccessStoriesSection />
        <AuthoritySection />
        <LeaderSection />
        <DiagnosisSection />
        <MethodSection />
      </main>

      <SiteFooter />

      <Button
        asChild
        className={`${floatingCTAClasses} rounded-md bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 text-center`}
      >
        <Link
          href="/form"
          id="cta-floating"
          data-cta="lead"
          data-track="true"
        >
          Agendar Diagnóstico de Eficiência com IA
        </Link>
      </Button>
    </div>
  );
}