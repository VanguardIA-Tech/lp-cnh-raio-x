import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { sectionContainerClass } from "./section-container";
import Link from "next/link";

const painPoints = [
  <>
    <strong>Processos lentos</strong>, <strong>manuais e repetitivos</strong> que consomem tempo
    precioso.
  </>,
  <>
    <strong>Softwares caros</strong> que <strong>não conversam</strong> entre si, gerando ilhas de
    informação.
  </>,
  <>
    <strong>Equipes sobrecarregadas</strong> e <strong>desalinhadas</strong>, presas em tarefas de
    baixo valor.
  </>,
  <>
    <strong>Retrabalho</strong> e <strong>gargalos</strong> constantes entre áreas que minam a
    produtividade.
  </>,
  <>
    <strong>Falta de tempo</strong> para o estratégico: <strong>pensar e inovar</strong> no negócio.
  </>,
];

export function PainPointsSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className={`${sectionContainerClass} items-center`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
            Você sente que sua empresa <span className="text-orange-400">trabalha demais</span> para{" "}
            <span className="text-orange-400">entregar bem menos</span> do que{" "}
            <span className="text-blue-400">poderia</span>?
          </h2>
        </div>

        <div className="mt-12 w-full max-w-4xl">
          {/* Timeline Container */}
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-[auto,1fr]">
            {/* Coluna da Espinha (Desktop) */}
            <div className="hidden md:flex md:flex-col md:items-center">
              {painPoints.map((_, index) => (
                <React.Fragment key={`spine-${index}`}>
                  <div className="flex h-32 items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500/50 ring-4 ring-blue-500/10" />
                  </div>
                  {index < painPoints.length - 1 && (
                    <div className="h-full w-0.5 flex-grow bg-slate-800" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Coluna dos Blocos */}
            <div className="flex flex-col gap-4">
              {painPoints.map((point, index) => (
                <div
                  key={`step-${index}`}
                  className="
                    group relative rounded-2xl border border-slate-800 bg-slate-900/70
                    p-6 transition-all duration-200 ease-out
                    hover:-translate-y-0.5 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-500/10
                    md:h-32
                  "
                >
                  {/* Bullet e Linha (Mobile) */}
                  <div className="absolute -left-6 top-8 hidden h-3 w-3 rounded-full bg-blue-500/50 ring-4 ring-blue-500/10 md:hidden" />
                  <div className="absolute bottom-full left-0 h-8 w-0.5 bg-slate-800 md:hidden" />

                  <p className="text-base text-slate-300 sm:text-lg">
                    <span className="font-semibold text-slate-100">{point}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex w-full max-w-md flex-col items-center gap-4">
          <Button
            asChild
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-[1.02] sm:w-auto"
            aria-label="Quero resolver isso agora"
          >
            <Link href="/form">
              Quero resolver isso agora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import React from "react";