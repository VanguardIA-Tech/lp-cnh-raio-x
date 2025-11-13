import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { sectionContainerClass } from "./section-container";

const steps = [
  {
    icon: "1️⃣",
    text: "Diagnóstico de Eficiência — mapeamos maturidade e oportunidades.",
  },
  {
    icon: "2️⃣",
    text: "Treinamento CNH Corporativo — imersões com cases reais.",
  },
  {
    icon: "3️⃣",
    text: "Acompanhamento e Cultura — indicadores de uso e performance.",
  },
];

export function DiagnosisSection() {
  return (
    <section className="bg-[#020F00] py-14 sm:py-20 md:py-24">
      <div
        className={`${sectionContainerClass} grid items-start gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16`}
      >
        {/* Coluna de Texto e Etapas */}
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
            Três etapas para instalar a <span className="text-green-400">cultura de IA</span> na sua empresa.
          </h2>

          <div className="max-w-prose space-y-4 text-base text-slate-300 sm:text-lg">
            <p>
              O programa ICIA é um ciclo completo de transformação, garantindo que a IA não seja apenas uma ferramenta, mas um novo motor de crescimento.
            </p>
          </div>

          <ul className="mt-4 max-w-prose space-y-5 text-base text-slate-300 sm:text-lg">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 flex-shrink-0 text-green-400 text-xl" aria-hidden="true">
                  {step.icon}
                </span>
                <span className="font-semibold text-slate-100">{step.text}</span>
              </li>
            ))}
          </ul>

          {/* Box Raio-X */}
          <div className="mt-6 space-y-3 rounded-lg border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-300 sm:text-base">
              <span className="font-semibold text-orange-400">🔍 Raio-X de Eficiência com IA</span> — descubra de uma vez o que é possível para VOCÊ e sua equipe. Sua empresa é única. Seus treinamentos também devem ser.
            </p>
          </div>

          <Button
            asChild
            className="mt-6 w-full rounded-md bg-orange-500 px-6 py-6 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 sm:w-auto"
            size="lg"
          >
            <Link
              href="/form"
              id="cta-diagnosis"
              data-cta="primary"
              data-track="true"
            >
              Solicitar Diagnóstico de Habilitação
            </Link>
          </Button>
        </div>

        {/* Coluna Auxiliar (Painel Visual) - Mantendo o vídeo */}
        <div className="relative hidden h-full min-h-[320px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 md:flex">
          <video
            src="https://res.cloudinary.com/dcg2hwh7x/video/upload/v1762886107/copy_33173A90-9720-4B2B-9894-1BBBE2C26924_shdgu8.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}