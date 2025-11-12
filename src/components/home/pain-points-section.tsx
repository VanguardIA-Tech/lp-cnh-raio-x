import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { sectionContainerClass } from "./section-container";

const painPoints = [
  "Sistemas legados e planilhas que travam a operação.",
  "Falta de visibilidade e dados confiáveis para decidir.",
  "Processos manuais, repetitivos e com alto risco de erro.",
  "Equipes sobrecarregadas com tarefas de baixo valor.",
  "Dificuldade em escalar sem aumentar custos na mesma proporção.",
  "Tecnologia que não acompanha a evolução do negócio.",
] as const;

export function PainPointsSection() {
  return (
    <section className="bg-[#020F00] py-16 sm:py-24">
      <div className={sectionContainerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Sua empresa está pronta para o próximo nível, mas a operação não acompanha?
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Se você se identifica com algum destes desafios, a VanguardIA pode ser a parceira
            estratégica que faltava para destravar seu crescimento.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:mt-16">
          {painPoints.map((point) => (
            <div key={point} className="flex items-start gap-3 text-center sm:text-left">
              <CheckCircle
                className="mt-1 h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <span className="text-base text-slate-200">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <Button
            asChild
            className="h-auto rounded-md bg-green-600 px-5 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] sm:h-18 sm:px-9 sm:py-0 sm:text-2xl"
          >
            <Link
              href="/form"
              id="cta-pain-points"
              data-cta="primary"
              data-track="true"
              className="text-center leading-tight"
            >
              <span className="hidden sm:inline">Quero agendar uma demonstração</span>
              <span className="sm:hidden">
                Quero agendar
                <br />
                uma demonstração
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}