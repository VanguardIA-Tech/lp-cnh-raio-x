import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const HERO_VIDEO_URL = "https://res.cloudinary.com/dcg2hwh7x/video/upload/v1763478014/vangguardia-cnh_uw3nu5.mp4";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-bg-main)] text-[color:var(--color-text-white)] lg:min-h-screen">
      {/* Aurora Mesh Blobs */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[22%] h-[60vw] w-[60vw] rounded-full bg-[color:var(--color-bg-green)] blur-[100px] lg:h-[48rem] lg:w-[48rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[30%] h-[48vw] w-[48vw] rounded-full bg-[color:var(--color-bg-cyan)] blur-[100px] lg:h-[34rem] lg:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-[-12%] h-[60vw] w-[60vw] rounded-full bg-[color:var(--color-bg-orange)] blur-[140px] lg:h-[40rem] lg:w-[40rem]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 lg:grid lg:min-h-screen lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8">
        <div className="flex flex-col gap-5 text-center sm:text-left lg:col-span-7">
          <h1 className="mx-auto max-w-[560px] text-3xl font-extrabold leading-tight tracking-tight sm:mx-0 sm:text-4xl md:text-5xl lg:text-[44px]">
            Seu time está preparado para a{" "}
            <span className="text-[color:var(--hero-accent)] filter drop-shadow-[0_0_16px_rgba(44,90,0,0.85)]">
              nova era da IA?
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
              className="inline-flex items-center rounded-md bg-[var(--hero-accent)] px-5 py-3 text-base font-semibold text-slate-900 shadow-[0_8px_30px_rgba(44,90,0,0.18)] filter drop-shadow-[0_0_18px_rgba(44,90,0,0.85)] transition hover:bg-[var(--hero-accent-hover)] hover:shadow-[0_0_32px_rgba(124,255,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 uppercase"
            >
              <Link href="https://wa.me/5591980413150?text=Falar%20com%20o%20time%20da%20Vanguardia" id="cta-hero" data-cta="lead" data-track="true" target="_blank" rel="noopener noreferrer">
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
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[color:var(--color-border-slate-700)] bg-white/5 shadow-lg lg:h-[75vh]">
            <video
              src={HERO_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Faixa de texto ajustada */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center p-6">
              <div className="w-fit rounded-full bg-black/50 px-4 py-2 backdrop-blur-sm">
                <p className="text-lg font-semibold text-white drop-shadow-md">
                  99% usam IA. 1% pilota.
                </p>
              </div>
            </div>
          </div>
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