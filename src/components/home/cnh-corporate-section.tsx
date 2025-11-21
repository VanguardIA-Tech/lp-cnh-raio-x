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
    <section
      id="sec-cnh"
      aria-labelledby="heading-cnh"
      className="bg-[color:var(--color-bg-main)] py-14 sm:py-20 md:py-24 xl:py-28 2xl:py-32"
    >
      <div
        className={`${sectionContainerClass} grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 2xl:gap-24`}
      >
        {/* Coluna de Texto - Nova Copy */}
        <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left xl:gap-8 2xl:gap-10">
          <h2
            id="heading-cnh"
            className="max-w-xl text-2xl sm:text-3xl font-bold leading-tight text-slate-50 xl:max-w-2xl xl:text-4xl 2xl:max-w-3xl 2xl:text-5xl"
          >
            A primeira certificação que transforma colaboradores em{' '}
            <span className="text-[color:var(--hero-accent)]">pilotos de IA estratégicos.</span>
          </h2>

          <ul className="max-w-prose space-y-4 text-base text-slate-200 sm:text-lg xl:space-y-5 xl:text-xl 2xl:space-y-6 2xl:text-2xl">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex flex-col items-center sm:flex-row sm:items-center gap-3 xl:gap-4 2xl:gap-5"
              >
                <feature.icon
                  className="h-4 w-4 text-[color:var(--hero-accent)] flex-shrink-0 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
                  aria-hidden="true"
                />
                <span className="text-center sm:text-left">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 xl:mt-9 2xl:mt-12">
            <PrimaryCta
              id="cta-cnh-corporate"
              href="/form"
              size="md"
              variant="secondary"
              className="px-7 py-3 text-base font-semibold uppercase shadow-md transition focus-visible:ring-2 focus-visible:ring-[color:var(--hero-accent)] xl:px-9 xl:py-4 xl:text-lg 2xl:px-11 2xl:py-5 2xl:text-xl"
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
          <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-2xl border border-[color:var(--color-border-slate-700)] bg-white/5 shadow-2xl sm:h-[400px] lg:h-[500px] xl:max-w-lg xl:h-[560px] 2xl:max-w-xl 2xl:h-[640px]">
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