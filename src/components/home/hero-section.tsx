import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020F00] text-white lg:min-h-screen">
      {/* Aurora Mesh Blobs */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[22%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,94,0,0.92)_0%,rgba(255,122,24,0.85)_40%,transparent_70%)] blur-[140px] lg:h-[48rem] lg:w-[48rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[30%] h-[48vw] w-[48vw] rounded-full bg-[#6EE7F9]/[0.25] blur-[100px] lg:h-[34rem] lg:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[-12%] h-[60vw] w-[60vw] rounded-full bg-[#FF7A18]/[0.20] blur-[140px] lg:h-[40rem] lg:w-[40rem]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 lg:grid lg:min-h-screen lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8">
        <div className="flex flex-col gap-5 text-center sm:text-left lg:col-span-7">
          <h1 className="mx-auto max-w-[560px] text-3xl font-extrabold leading-tight tracking-tight sm:mx-0 sm:text-4xl md:text-5xl lg:text-[44px]">
            Seu time está preparado para a{" "}
            {/* Container relativo para posicionar a bola de luz atrás do trecho destacado */}
            <span className="relative inline-block">
              {/* Bola de luz (decorativa) */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  -z-10
                  h-36 w-36 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64
                  rounded-full
                  blur-[72px]
                  bg-[radial-gradient(closest-side,rgba(255,122,24,0.16),rgba(124,255,0,0.12),transparent_60%)]
                  opacity-95
                "
              />
              <span className="text-[#7CFF00] filter drop-shadow-[0_0_16px_rgba(124,255,0,0.85)]">
                nova era da IA?
              </span>
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-base text-slate-200 sm:mx-0 sm:text-lg">
            A CNH da IA Corporativa habilita líderes, colaboradores e parceiros para usar a
            Inteligência Artificial de forma estratégica.
          </p>

          <p className="text-center text-sm text-slate-300 sm:text-left">
            <span className="font-semibold text-white">+5.000 profissionais</span> •{" "}
            <span className="font-semibold text-white">+300 IAs corporativas instaladas</span> •
            Clientes em todo o Brasil
          </p>

          <div className="mt-4 flex flex-col items-center gap-4 sm:items-start">
            <Button
              asChild
              className="inline-flex items-center rounded-md bg-[#7CFF00] px-5 py-3 text-base font-semibold text-slate-900 shadow-[0_8px_30px_rgba(124,255,0,0.18)] filter drop-shadow-[0_0_18px_rgba(124,255,0,0.85)] transition hover:bg-[#6BEE00] hover:shadow-[0_0_32px_rgba(124,255,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <Link href="/form" id="cta-hero" data-cta="lead" data-track="true">
                Quero habilitar meu time
              </Link>
            </Button>
            <Link
              href="/form"
              className="text-center text-xs text-slate-300 underline transition hover:text-white sm:text-left sm:text-sm"
            >
              Ou gere agora o Raio-X de Eficiência com IA na sua empresa — gratuito e personalizado.
            </Link>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:col-span-5 lg:mt-0">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 shadow-lg lg:h-[75vh]">
            <video
              src="https://res.cloudinary.com/dcg2hwh7x/video/upload/v1762886107/copy_33173A90-9720-4B2B-9894-1BBBE2C26924_shdgu8.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-lg font-semibold text-white drop-shadow-md">
                “99% usam IA. 1% pilota.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down — seta pulsante */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center">
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