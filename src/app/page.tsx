"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopBanner } from "@/components/home/top-banner";
import { HeroSection } from "@/components/home/hero-section";
import { PainPointsSection } from "@/components/home/pain-points-section";
import { SelectionCriteriaSection } from "@/components/home/selection-section";
import { TailoredSolutionSection } from "@/components/home/tailored-solution-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { LeaderSection } from "@/components/home/leader-section";
import { SiteFooter } from "@/components/home/site-footer";
import { DiagnosisSection } from "@/components/home/diagnosis-section";
import { MethodSection } from "@/components/home/method-section";

const floatingCTAClasses =
  "fixed bottom-6 right-6 z-50 shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="flex h-[90vh] flex-col">
        <TopBanner />
        <HeroSection />
      </div>

      <main className="flex flex-col">
        <PainPointsSection />
        <SelectionCriteriaSection />
        <TailoredSolutionSection />
        <SuccessStoriesSection />
        <LeaderSection />
        <DiagnosisSection />
        <MethodSection />
      </main>

      <SiteFooter />

      <Button
        asChild
        className={`${floatingCTAClasses} rounded-md bg-orange-500 px-6 py-6 text-base font-semibold text-white hover:bg-orange-600`}
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