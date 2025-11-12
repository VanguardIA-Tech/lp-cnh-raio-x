import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex-grow overflow-hidden bg-[#0B1220] text-white">
      {/* Aurora Mesh Blobs */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[22%] h-[60vw] w-[60vw] rounded-full bg-[#2F76FF]/[0.35] blur-[100px] lg:h-[48rem] lg:w-[48rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[30%] h-[48vw] w-[48vw] rounded-full bg-[#6EE7F9]/[0.25] blur-[100px] lg:h-[34rem] lg:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-8%] right-[-12%] h-[80vw] w-[80vw] rounded-full bg-[#FF7A18]/[0.20] blur-[140px] lg:h-[60rem] lg:w-[60rem]"
      />

      <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-6 py-14 sm:py-20 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8">
        <div className="flex flex-col gap-5 text-center sm:text-left lg:col-span-7">
          <h1 className="mx-auto max-w-[560px] text-3xl font-extrabold leading-tight tracking-tight sm:mx-0 sm:text-4xl md:text-5xl lg:text-[44px]">
            Transforme sua operação com{" "}
            <span className="text-orange-400">
              sistemas personalizados de IA
            </span>{" "}
            e automação integrados à sua realidade.
            <span className="mt-2 block font-semibold text-orange-400">
              Tudo feito para atender o seu negócio.
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-base text-slate-200 sm:mx-0 sm:text-lg">
            O Programa ICIA (Inteligência Corporativa Integrada com Automação) é a aceleração que redesenha processos, integra pessoas e instala cultura de eficiência com IA. Sem precisar trocar seus sistemas atuais nem contratar um monte de gente com altos salários.
          </p>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Button
              asChild
              className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(47,118,255,.25)]"
            >
              <Link href="/form" id="cta-hero" data-cta="lead" data-track="true">
                Quero meu Diagnóstico
              </Link>
            </Button>
            <p className="mt-1 text-sm italic text-slate-300">
              O futuro das empresas eficientes é sob medida. A sua também pode ser.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:col-span-5 lg:mt-0 lg:justify-end">
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