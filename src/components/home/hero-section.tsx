"use client";

import { useState } from "react";
import PrimaryCta from "@/components/cta/PrimaryCta";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MiniLeadForm } from "@/components/form/mini-lead-form";

const HERO_VIDEO_URL = "https://res.cloudinary.com/dcg2hwh7x/video/upload/v1763478014/vangguardia-cnh_uw3nu5.mp4";

export function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-bg-main)] text-[color:var(--color-text-white)] lg:min-h-screen">
      {/* Desktop (lg+) right-side background video with internal gradient overlay */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 right-0 w-1/2 xl:w-1/2 2xl:w-1/2 z-0 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-top"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--color-bg-main)_0%,rgba(2,15,0,0.95)_15%,rgba(2,15,0,0.7)_32%,rgba(2,15,0,0.35)_58%,transparent_85%)]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 lg:grid lg:min-h-screen lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8 xl:max-w-[1400px] xl:gap-12 xl:px-12 xl:py-16 2xl:max-w-[1600px] 2xl:gap-16 2xl:px-16 2xl:py-20">
        <div className="flex flex-col gap-5 text-center sm:text-left lg:col-span-7 xl:gap-6 2xl:gap-8">
          <h1 className="mx-auto max-w-[560px] text-3xl font-extrabold leading-tight tracking-tight sm:mx-0 sm:text-4xl md:text-5xl lg:text-[44px] xl:max-w-[680px] xl:text-[52px] 2xl:max-w-[800px] 2xl:text-[64px]">
            Seu time está preparado para a{" "}
            <span className="text-[color:var(--hero-accent)] filter drop-shadow-[0_0_16px_rgba(44,90,0,0.85)]">
              nova era da IA?
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-base text-slate-200 sm:mx-0 sm:text-lg xl:max-w-[720px] xl:text-xl 2xl:max-w-[840px] 2xl:text-2xl">
            A CNH da IA Corporativa habilita líderes, colaboradores e parceiros para usar a
            Inteligência Artificial de forma estratégica.
          </p>

          <p className="text-center text-sm text-slate-300 sm:text-left xl:text-base 2xl:text-lg">
            <span className="font-semibold text-white">+5.000 profissionais</span> •{" "}
            <span className="font-semibold text-white">+300 IAs corporativas instaladas</span> •
            Clientes em todo o Brasil
          </p>

          <div className="mt-4 flex flex-col items-center gap-4 sm:items-start xl:mt-6 xl:gap-5 2xl:mt-8 2xl:gap-6">
            <PrimaryCta
              id="cta-hero"
              asButton
              onClick={handleOpenForm}
              size="md"
              variant="secondary"
              motion="gradient"
              className="uppercase shadow-[0_8px_30px_rgba(44,90,0,0.18)] drop-shadow-[0_0_18px_rgba(44,90,0,0.85)] hover:shadow-[0_0_32px_rgba(124,255,0,0.5)]"
              ariaLabel="Quero habilitar meu time"
              dataCta="cta-hero-whatsapp"
              dataTrack="true"
              dataVariant="hero"
            >
              Quero habilitar meu time
            </PrimaryCta>
            <Link
              id="cta-hero-form"
              href="/form"
              className="text-center text-xs text-slate-300 underline transition hover:text-white sm:text-left sm:text-sm xl:text-base 2xl:text-lg"
            >
              Ou gere agora o Raio-X de Eficiência com IA na sua empresa — gratuito e personalizado.
            </Link>
          </div>

          <MiniLeadForm open={isFormOpen} onOpenChange={setIsFormOpen} />
        </div>

        {/* Mobile video block below text (sem degradê) */}
        <div className="mt-10 w-full overflow-hidden rounded-xl lg:hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-auto w-full object-cover object-top"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </video>
        </div>
      </div>

      {/* Scroll Down — seta pulsante (Oculto no mobile, visível a partir de lg) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 hidden justify-center lg:flex">
        <Link
          href="#conteudo"
          aria-label="Rolar para o conteúdo"
          title="Rolar para o conteúdo"
          id="cta-scroll-down"
          data-cta="scroll-down"
          data-track="true"
          className="pointer-events-auto group inline-flex flex-col items-center gap-2 text-slate-300 hover:text-white"
        >
          <span className="rounded-full border border-white/15 bg-white/5 p-2.5 shadow-soft backdrop-blur-sm transition-colors group-hover:bg-white/10">
            <ChevronDown className="h-6 w-6 animate-pulse" aria-hidden="true" />
          </span>
          <span className="text-xs">Role para ver mais</span>
        </Link>
      </div>
    </section>
  );
}