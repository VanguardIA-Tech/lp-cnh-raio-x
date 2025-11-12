import { Award, Target, MonitorPlay, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sectionContainerClass } from "./section-container";

const features = [
  {
    icon: Award,
    text: "Formação oficial para líderes e equipes.",
  },
  {
    icon: Target,
    text: "Aplicação prática em processos reais (vendas, marketing, financeiro, operações).",
  },
  {
    icon: MonitorPlay,
    text: "Treinamentos presenciais, online ou híbridos.",
  },
  {
    icon: BadgeCheck,
    text: "Certificação reconhecida + acesso à Comunidade VanguardIA Corporate.",
  },
];

export function CnhSection() {
  return (
    <section className="border-t border-slate-800 bg-[#020F00] py-16 sm:py-20 md:py-24">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-slate-50 sm:text-4xl">
            A primeira certificação que transforma colaboradores em{" "}
            <span className="text-orange-400">pilotos de IA estratégicos</span>.
          </h2>

          <ul className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <feature.icon
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                  aria-hidden="true"
                />
                <span className="text-base text-slate-300">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Button
              asChild
              className="h-auto rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(255,122,24,.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98]"
            >
              <Link href="/form" data-cta="corporate-presentation" data-track="true">
                Solicitar Apresentação Corporativa
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}