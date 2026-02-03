import { sectionContainerClass } from "./section-container";
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
    <section className="bg-[color:var(--color-bg-main)] py-14 sm:py-20 md:py-24">
      <div className={`${sectionContainerClass} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        {/* Coluna de Texto - Nova Copy */}
        <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
          <h2 className="max-w-xl text-2xl sm:text-3xl font-bold leading-tight text-slate-50">
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
            <a href="/form" className="inline-block rounded-md bg-[color:var(--hero-accent)] px-7 py-3 text-base font-semibold text-[color:var(--color-text-slate-900)] shadow-md transition hover:bg-[color:var(--hero-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--hero-accent)]">
              Solicitar Apresentação Corporativa
            </a>
          </div>
        </div>

        {/* Coluna de Imagem/Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-2xl border border-[color:var(--color-border-slate-700)] bg-white/5 shadow-2xl sm:h-[400px] lg:h-[500px]">
            {/* Placeholder para imagem ou visual */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-black/80 to-black/90">
              <div className="h-full w-full">
                <img
                  src="https://directus.vanguardiagrupo.com.br/assets/8e6441a5-6f60-4454-bd63-8b5467cf03cd"
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