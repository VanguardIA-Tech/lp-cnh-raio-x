import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7 flex flex-col gap-5 pb-10 lg:pb-16">
          <div>
            <h1 className="max-w-[560px] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[44px]">
              Transforme sua operação com sistemas personalizados de IA e automação integrados à sua realidade.
              <span className="mt-2 block font-semibold text-blue-700">
                Tudo feito para atender o SEU negócio.
              </span>
            </h1>
            <p className="mt-4 max-w-[600px] text-base text-slate-200 sm:text-lg">
              O Programa ICIA (Inteligência Corporativa Integrada com Automação) é a aceleração que redesenha processos, integra pessoas e instala cultura de eficiência com IA. Sem precisar trocar seus sistemas atuais nem contratar um monte de gente com altos salários.
            </p>
          </div>

          <div className="mt-3 flex flex-col items-start gap-3">
            <Button
              asChild
              className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
            >
              <Link
                href="/form"
                id="cta-hero"
                data-cta="lead"
                data-track="true"
              >
                Quero meu Diagnóstico
              </Link>
            </Button>
            <p className="mt-1 text-sm italic text-slate-300">
              O futuro das empresas eficientes é sob medida. A sua também pode ser.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center lg:col-span-5 lg:mt-0 lg:justify-end">
          <img
            src="/jorge3.webp"
            alt="Retrato de Jorge Auad"
            className="h-auto max-h-[65vh] w-auto max-w-full scale-[1.3] object-contain"
          />
        </div>
      </div>
    </section>
  );
}