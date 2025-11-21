import PrimaryCta from "@/components/cta/PrimaryCta";
import { CheckCircle2, Search, Users, TrendingUp } from "lucide-react";
import VideoCard from "@/components/ui/video-card";
import { sectionContainerClass } from "./section-container";

const steps = [
  {
    icon: Search,
    text: "Diagnóstico de Eficiência — mapeamos maturidade e oportunidades.",
  },
  {
    icon: Users,
    text: "Treinamento CNH Corporativo — imersões com cases reais.",
  },
  {
    icon: TrendingUp,
    text: "Acompanhamento e Cultura — indicadores de uso e performance.",
  },
];

const DIAGNOSIS_VIDEO_URL = "https://res.cloudinary.com/dcg2hwh7x/video/upload/v1762886107/copy_33173A90-9720-4B2B-9894-1BBBE2C26924_shdgu8.webm";

export function DiagnosisSection() {
  return (
    <section id="sec-diagnosis" aria-labelledby="heading-diagnosis" className="bg-[color:var(--color-bg-main)] py-14 sm:py-20 md:py-24">
      <div
        className={`${sectionContainerClass} grid items-start gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16`}
      >
        {/* Coluna de Texto e Etapas */}
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <h2 id="heading-diagnosis" className="max-w-xl text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
            Três etapas para instalar a <span className="text-[color:var(--hero-accent)]">cultura de IA</span> na sua empresa.
          </h2>

          <ul className="mt-4 max-w-prose space-y-5 text-base text-slate-300 sm:text-lg">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={index} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 flex-shrink-0 text-[color:var(--hero-accent)]" aria-hidden="true" />
                  <span className="font-semibold text-slate-100">{step.text}</span>
                </li>
              );
            })}
          </ul>

          {/* Box Raio-X */}
          <div className="mt-6 space-y-3 rounded-lg border border-[color:var(--color-border-slate-700)] bg-white/5 p-4">
            <p className="text-sm text-slate-300 sm:text-base">
              <span className="font-semibold text-[color:var(--color-cta)]">
                <Search className="inline h-5 w-5 mr-2 align-middle" />
                Raio-X de Eficiência com IA
              </span> — descubra de uma vez o que é possível para VOCÊ e sua equipe. Sua empresa é única. Seus treinamentos também devem ser.
            </p>
          </div>

          <PrimaryCta
            id="cta-diagnosis"
            href="/form"
            size="lg"
            variant="primary"
            className="mt-6 w-full rounded-md px-6 py-6 text-base font-semibold shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 sm:w-auto"
            ariaLabel="Gerar Raio-X"
            dataCta="primary"
            dataTrack="true"
            dataVariant="diagnosis"
          >
            Gerar Raio-X
          </PrimaryCta>
        </div>

        {/* Coluna Auxiliar (Painel Visual) - Mantendo o vídeo */}
        <VideoCard
          src={DIAGNOSIS_VIDEO_URL}
          className="relative hidden h-full min-h-[320px] md:flex"
          fill
          overlayClassName="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          clickToOpen
          dialogClassName="max-w-5xl"
          dialogTitle="Demonstração do diagnóstico"
        />
      </div>
    </section>
  );
}