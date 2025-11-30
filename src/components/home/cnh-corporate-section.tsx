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
      className="relative overflow-hidden bg-[color:var(--color-bg-main)] py-14 sm:py-20 md:py-24 xl:py-28 2xl:py-32"
    >
      {/* Desktop (md+) right-side background image limited in width */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 right-0 w-1/2 lg:w-[55%] xl:w-2/3 z-0 bg-[url('/jorge-sindarpa1.webp')] bg-cover bg-right"
      />
      {/* Desktop gradient overlay blending left to image with custom stops */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--color-bg-main)_0%,var(--color-bg-main)_38%,rgba(2,15,0,0.85)_58%,transparent_82%)]"
      />
      {/* Mobile vertical gradient overlay limited to upper area (not covering image block) */}
      <div
        aria-hidden="true"
        className="md:hidden absolute top-0 left-0 right-0 h-[70%] z-0 pointer-events-none  bg-[linear-gradient(to_right,var(--color-bg-main)_0%,var(--color-bg-main)_32%,rgba(2,15,0,1)_45%,rgba(2,15,0,0.65)_58%,rgba(2,15,0,0.25)_72%,transparent_88%)]"
      />
      <div
        className={`${sectionContainerClass} relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 2xl:gap-24`}
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
              dataCta="cta-cnh"
              dataTrack="true"
              dataVariant="cnh-corporate"
            >
              Solicitar Apresentação Corporativa
            </PrimaryCta>
          </div>
        </div>

        {/* Mobile image block below text */}
        <div className="mt-10 w-full h-64 overflow-hidden rounded-xl md:hidden">
          <img
            src="/jorge-sindarpa1.webp"
            alt="Treinamento corporativo"
            className="h-full w-full object-cover"
          />
        </div>
        
        
      </div>
    </section>
  );
}