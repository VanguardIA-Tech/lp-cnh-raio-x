"use client";

import { Button } from "@/components/ui/button";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";
import type testimonialsData from "@/data/testimonials.json";

type Testimonial = typeof testimonialsData[number];

interface ObrigadoContentProps {
  heading: string;
  subheading: string;
  whatsappUrl: string;
  processVideoUrl: string;
  testimonials: Testimonial[];
}

export function ObrigadoContent({ heading, subheading, whatsappUrl, processVideoUrl, testimonials }: ObrigadoContentProps) {
  return (
    <main className="min-h-screen w-full bg-[#020F00] text-slate-100">
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8 xl:max-w-6xl xl:p-12 2xl:max-w-7xl 2xl:p-16">
        {/* HERO / CONFIRMAÇÃO */}
        <section className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 md:p-10 text-center xl:p-12 2xl:p-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600/20 ring-1 ring-green-500/30">
              <CheckCircle2 className="h-7 w-7 text-green-400" aria-hidden="true" />
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl 2xl:text-6xl">
              {heading}
            </h1>

            <p className="mt-1 max-w-prose text-base text-slate-300 sm:text-lg xl:text-xl 2xl:text-2xl">
              {subheading}
            </p>

            <div className="pt-2">
              <Button
                asChild
                className="h-auto rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-whatsapp-primary"
                  data-cta="whatsapp-primary"
                  data-track="true"
                >
                  Agendar Conversa com Especialista <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* BLOCO 2 — PRÓXIMO PASSO */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 xl:mt-10 xl:p-12 2xl:mt-12 2xl:p-16">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl xl:text-4xl 2xl:text-5xl">
              Seu próximo passo é ver como as empresas estão formando times piloto de IA.
            </h2>
            <p className="text-base text-slate-300 sm:text-lg xl:text-xl 2xl:text-2xl">
              Nossos consultores vão te mostrar como o processo funciona — da avaliação à certificação completa.
            </p>
            <div className="pt-2">
              <Button
                asChild
                variant="outline"
                className="h-auto border-slate-700 bg-slate-950/40 px-4 py-3 text-base text-slate-100 hover:bg-slate-900 w-full sm:w-auto whitespace-normal break-words text-center"
              >
                <a
                  href={processVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-watch-process"
                  data-cta="watch-process-video"
                  data-track="true"
                  className="flex items-center justify-center w-full"
                >
                  <Play className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="block">Assistir vídeo de 2 minutos sobre o processo</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 xl:mt-10 xl:p-12 2xl:mt-12 2xl:p-16">
          <h2 className="text-2xl font-bold sm:text-3xl text-center mb-6 xl:text-4xl 2xl:text-5xl">Depoimentos</h2>
          <TestimonialsCarousel items={testimonials} />
        </section>

        {/* BLOCO 4 — EXCLUSIVIDADE */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 text-center xl:mt-10 xl:p-12 2xl:mt-12 2xl:p-16">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="text-base text-slate-300 sm:text-lg xl:text-xl 2xl:text-2xl">
              O programa CNH Corporativa faz parte da seleção das 100 empresas habilitadas em 2026.
            </p>
            <Button
              asChild
              data-cta="whatsapp-final"
              className="h-auto rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition hover:bg-green-700"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-final"
                data-cta="whatsapp-final"
                data-track="true"
              >
                Garantir minha vaga
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
