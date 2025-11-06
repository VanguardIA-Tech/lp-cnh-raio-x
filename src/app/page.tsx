"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
import { ApplicationFormSection } from "@/components/home/application-form-section";

const floatingCTAClasses =
  "fixed bottom-6 right-6 z-50 shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <TopBanner />

      <main className="flex flex-col">
        <HeroSection />
        <PainPointsSection />
        <SelectionCriteriaSection />
        <TailoredSolutionSection />
        <SuccessStoriesSection />
        <LeaderSection />
        <DiagnosisSection />
        <MethodSection />
        <ApplicationFormSection />
      </main>

      <SiteFooter />

      <Button
        asChild
        className={`${floatingCTAClasses} rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600`}
      >
        <Link href="/form">
          Agendar Diagnóstico de Eficiência com IA
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}