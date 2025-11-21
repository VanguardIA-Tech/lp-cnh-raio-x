import { sectionContainerClass } from "./section-container";
import PrimaryCta from "@/components/cta/PrimaryCta";
import { Zap, Users, TrendingUp, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    text: "Formação oficial para líderes e equipes.",
  },
  {
    icon: TrendingUp,
    text: "Aplicação prática em processos reais (vendas, marketing, financeiro, operações).",
  },
  {
    icon: Users,
    text: "Treinamentos presenciais, online ou híbridos.",
  },
  {
    icon: Zap,
    text: "Certificação reconhecida + acesso à Comunidade VanguardIA Corporate.",
  },
];

export function CnhCorporateSection() {
  return (
    <section id="sec-cnh" aria-labelledby="heading-cnh" className="bg-[color:var(--color-bg-main)] py-14 sm:py-20 md:py-24">
      <div className={`${sectionContainerClass} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        {/* Coluna de Texto - Nova Copy */}
        <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
          <h2 id="heading-cnh" className="max-w-xl text-2xl sm:text-3xl font-bold leading-tight text-slate-50">
            A primeira certificação que transforma colaboradores em <span className="text-[color:var(--hero-accent)]">pilotos de IA estratégicos.</span>
          </h2>

          <ul className="max-w-prose space-y-4 text-base text-slate-200 sm:text-lg">
            {features.map((feature, index) => (
              <li key={index} className="flex flex-col items-center sm:flex-row sm:items-center gap-3">
                <feature.icon className="h-4 w-4 text-[color:var(--hero-accent)] flex-shrink-0" aria-hidden="true" />
                <span className="text-center sm:text-left">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <PrimaryCta
              id="cta-cnh-corporate"
              href="/form"
              size="md"
              variant="secondary"
              className="px-7 py-3 text-base font-semibold uppercase shadow-md transition focus-visible:ring-2 focus-visible:ring-[color:var(--hero-accent)]"
              ariaLabel="Solicitar Apresentação Corporativa"
              dataCta="corporate"
              dataTrack="true"
              dataVariant="cnh-corporate"
            >
              Solicitar Apresentação Corporativa
            </PrimaryCta>
          </div>
        </div>

        {/* Coluna de Imagem/Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-2xl border border-[color:var(--color-border-slate-700)] bg-white/5 shadow-2xl sm:h-[400px] lg:h-[500px]">
            {/* Placeholder para imagem ou visual */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-black/80 to-black/90">
              <div className="h-full w-full">
                <img
                  src="/jorge-sindarpa1.webp"
                  alt="CNH Corporativa"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}