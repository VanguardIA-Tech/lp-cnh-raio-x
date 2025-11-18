"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";

const PROCESS_VIDEO_URL = "https://res.cloudinary.com/dcg2hwh7x/video/upload/v1763478014/vangguardia-cnh_uw3nu5.mp4";

export default function ObrigadoPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "/form";
  const isCalendlyExternal = /^https?:\/\//i.test(calendlyUrl);

  return (
    <main className="min-h-screen w-full bg-[#020F00] text-slate-100">
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">
        {/* HERO / CONFIRMAÇÃO */}
        <section className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 md:p-10 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600/20 ring-1 ring-green-500/30">
              <CheckCircle2 className="h-7 w-7 text-green-400" aria-hidden="true" />
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Perfeito. Sua empresa está na lista de seleção para habilitação em IA.
            </h1>

            <p className="mt-1 max-w-prose text-base text-slate-300 sm:text-lg">
              Em até 5 minutos você receberá um Raio-X de Eficiência com IA no seu e-mail e WhatsApp.
            </p>

            <div className="pt-2">
              <Button
                asChild
                className="h-auto rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                <Link
                  href={calendlyUrl}
                  {...(isCalendlyExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  id="cta-calendly-primary"
                  data-cta="calendar"
                  data-track="true"
                >
                  Agendar Conversa com Especialista <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* BLOCO 2 — PRÓXIMO PASSO */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Seu próximo passo é ver como as empresas estão formando times piloto de IA.
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              Nossos consultores vão te mostrar como o processo funciona — da avaliação à certificação completa.
            </p>
            <div className="pt-2">
              <Button
                asChild
                variant="outline"
                className="h-auto border-slate-700 bg-slate-950/40 px-6 py-3 text-base text-slate-100 hover:bg-slate-900"
              >
                <a
                  href={PROCESS_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-watch-process"
                  data-cta="watch-process-video"
                  data-track="true"
                >
                  <Play className="mr-2 h-4 w-4" aria-hidden="true" />
                  Assistir vídeo de 2 minutos sobre o processo
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* BLOCO 3 — PROVAS E LEGADO */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8">
          <div className="space-y-6">
            <Carousel className="w-full">
              <CarouselContent>
                {/* Slide 1 — Sindarpa */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50">
                    <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-md bg-white/90 px-2 py-1">
                      <Image
                        src="/logo-sindarpa.png"
                        alt="Sindarpa"
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                      />
                      <span className="text-xs font-medium text-slate-900">Sindarpa</span>
                    </div>
                    <video
                      src={PROCESS_VIDEO_URL}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-[260px] w-full object-cover sm:h-[320px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-sm font-medium text-white">
                        “A IA não substitui pessoas, ela liberta o potencial delas.”
                      </p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Slide 2 — Rede Mais Saúde */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                  <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50">
                    <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-md bg-white/90 px-2 py-1">
                      <Image
                        src="/logo-rede-mais-saude.png"
                        alt="Rede Mais Saúde"
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                      />
                      <span className="text-xs font-medium text-slate-900">Rede Mais Saúde</span>
                    </div>
                    <video
                      src={PROCESS_VIDEO_URL}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-[260px] w-full object-cover sm:h-[320px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-sm font-medium text-white">
                        “A IA não substitui pessoas, ela liberta o potencial delas.”
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* BLOCO 4 — EXCLUSIVIDADE */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 text-center">
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="text-base text-slate-300 sm:text-lg">
              O programa CNH Corporativa faz parte da seleção das 100 empresas habilitadas em 2026.
            </p>
            <Button
              asChild
              className="h-auto rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition hover:bg-green-700"
            >
              <Link
                href={calendlyUrl}
                {...(isCalendlyExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                id="cta-final-slot"
                data-cta="calendar-final"
                data-track="true"
              >
                Garantir minha vaga <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}