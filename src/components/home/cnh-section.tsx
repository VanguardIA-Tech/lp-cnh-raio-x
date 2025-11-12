import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { sectionContainerClass } from "./section-container";

const features = [
  {
    text: "Formação oficial para líderes e equipes.",
  },
  {
    text: "Aplicação prática em processos reais (vendas, marketing, financeiro, operações).",
  },
  {
    text: "Treinamentos presenciais, online ou híbridos.",
  },
  {
    text: "Certificação reconhecida + acesso à Comunidade VanguardIA Corporate.",
  },
];

export function CnhSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-[#020F00] py-16 sm:py-24">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            A primeira certificação que transforma colaboradores em{" "}
            <span className="text-orange-400">pilotos de IA estratégicos</span>.
          </h2>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                  aria-hidden="true"
                />
                <span className="text-base text-slate-300">{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              asChild
              className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(34,197,94,.25)]"
            >
              <Link href="/form" id="cta-cnh" data-cta="corporate-presentation" data-track="true">
                Solicitar Apresentação Corporativa →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}