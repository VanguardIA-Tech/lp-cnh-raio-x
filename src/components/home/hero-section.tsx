import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex-grow overflow-hidden bg-[#0B1220] text-white">
      {/* Aurora Mesh Blobs */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[22%] h-[60vw] w-[60vw] rounded-full bg-[#2F76FF]/[0.25] blur-[100px] lg:h-[48rem] lg:w-[48rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[30%] h-[48vw] w-[48vw] rounded-full bg-[#6EE7F9]/[0.18] blur-[100px] lg:h-[34rem] lg:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-8%] right-[-12%] h-[80vw] w-[80vw] rounded-full bg-[#FF7A18]/[0.12] blur-[140px] lg:h-[60rem] lg:w-[60rem]"
      />

      <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-6 py-14 sm:py-20 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          {/* Contrast Pane */}
          <div className="rounded-lg bg-gradient-to-b from-black/20 to-black/10 backdrop-blur-[8px]">
            <div className="flex flex-col gap-5 p-1">
              <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                A <span className="text-cyan-300">Alfaiataria de IA</span> que cria sistemas{" "}
                <span className="text-cyan-300">sob medida</span> para o seu negócio.
              </h1>
              <p className="max-w-[66ch] text-base leading-relaxed text-slate-300 sm:text-lg">
                Diferente de ERPs e plataformas genéricas, nós desenhamos{" "}
                <strong className="font-semibold text-slate-100">sistemas personalizados</strong>{" "}
                integrados com{" "}
                <strong className="font-semibold text-slate-100">IA e automação</strong>,
                totalmente adaptados ao seu fluxo real. Cada empresa passa por um{" "}
                <strong className="font-semibold text-slate-100">diagnóstico profundo</strong> e{" "}
                <strong className="font-semibold text-slate-100">mapeamento de processos</strong>.
                Ao final, você ganha um{" "}
                <strong className="font-semibold text-slate-100">
                  “Sistema Vivo de Eficiência”
                </strong>
                : tecnologia que se adapta às pessoas e a sua empresa, e não o contrário.
              </p>

              <div className="mt-3 flex flex-col items-start gap-3">
                <Button
                  asChild
                  className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(47,118,255,.25)]"
                >
                  <Link href="/form" id="cta-hero" data-cta="lead" data-track="true">
                    Quero meu Diagnóstico
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:col-span-5 lg:mt-0 lg:h-full lg:justify-end">
          <img
            src="/jorge3.webp"
            alt="Retrato de Jorge Auad"
            className="h-auto max-h-[50vh] w-auto max-w-full object-contain object-bottom lg:h-full lg:max-h-none"
          />
        </div>
      </div>
    </section>
  );
}