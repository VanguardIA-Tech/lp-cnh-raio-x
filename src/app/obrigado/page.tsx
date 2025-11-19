"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import testimonials from "./testimonials.json";
import { Dialog } from "@/components/ui/dialog";

const PROCESS_VIDEO_URL = "https://res.cloudinary.com/dcg2hwh7x/video/upload/v1763478014/vangguardia-cnh_uw3nu5.mp4";
const whatsappUrl = "https://wa.me/5591980413150?text=Falar%20com%20o%20time%20da%20Vanguardia";

export default function ObrigadoPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-whatsapp-primary"
                  data-cta="whatsapp"
                  data-track="true"
                >
                  Agendar Conversa com Especialista <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
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
                className="h-auto border-slate-700 bg-slate-950/40 px-4 py-3 text-base text-slate-100 hover:bg-slate-900 w-full sm:w-auto whitespace-normal break-words text-center"
              >
                <a
                  href={PROCESS_VIDEO_URL}
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

        {/* Testimonials Carousel */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl text-center mb-6">
            Depoimentos
          </h2>
          <div className="relative max-w-3xl mx-auto px-8 sm:px-12">
            <Carousel opts={{ align: "start", loop: true, slidesToScroll: 1 }}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="flex justify-center basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className="flex flex-col items-center cursor-pointer w-full max-w-[400px]"
                      onClick={() => setSelectedVideo(testimonial.videoUrl)}
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 shadow-lg w-full h-[370px] sm:h-[420px]">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                        <video
                          src={testimonial.videoUrl}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          preload="metadata"
                        />
                      </div>
                      <p className="mt-4 text-center text-base font-semibold text-slate-100">
                        {testimonial.name}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-black/80 border-none text-white hover:bg-black/90 shadow-lg" />
              <CarouselNext className="bg-black/80 border-none text-white hover:bg-black/90 shadow-lg" />
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

        {/* Video Popup */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
              <div className="relative w-full max-w-3xl mx-4">
                <button
                  className="absolute top-2 right-2 z-20 rounded-full bg-black/80 text-white p-2 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Fechar vídeo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center justify-center w-full" style={{ maxHeight: '90vh' }}>
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    className="w-full max-h-[90vh] rounded-lg shadow-2xl bg-black object-contain"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </main>
  );
}