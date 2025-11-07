import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { sectionContainerClass } from "./section-container";

export function DiagnosisSection() {
  return (
    <section className="bg-slate-900 py-14 sm:py-20 md:py-24">
      <div
        className={`${sectionContainerClass} grid items-start gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16`}
      >
        {/* Coluna de Texto */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
            Descubra onde a <span className="text-blue-400">IA</span> pode{" "}
            <span className="text-orange-400">liberar horas</span> e{" "}
            <span className="text-orange-400">aumentar margem</span> na sua operação.
          </h2>

          <div className="max-w-prose space-y-4 text-base text-slate-300 sm:text-lg">
            <p>
              O <span className="font-semibold text-slate-100">Diagnóstico ICIA</span> é a porta de
              entrada para a transformação.
            </p>
            <p>
              Em apenas <span className="font-semibold text-slate-100">15 a 30 minutos</span>,
              identificamos:
            </p>
          </div>

          <ul className="mt-2 max-w-prose space-y-3 text-base text-slate-300 sm:text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
              <span>
                Os <span className="font-semibold text-slate-100">gargalos</span> que travam sua
                eficiência.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
              <span>
                As <span className="font-semibold text-slate-100">integrações</span> que podem gerar{" "}
                <span className="font-semibold text-slate-100">automação imediata</span>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" aria-hidden="true" />
              <span>
                O potencial de <span className="font-semibold text-slate-100">economia</span> e{" "}
                <span className="font-semibold text-slate-100">aceleração via IA</span>.
              </span>
            </li>
          </ul>

          <div className="mt-4 space-y-3 rounded-lg border border-slate-800 bg-slate-950/50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Entrega:
            </h3>
            <div className="space-y-2 text-sm text-slate-300 sm:text-base">
              <p>
                📄{" "}
                <span className="font-semibold text-slate-100">Relatório de Eficiência</span> +{" "}
                <span className="font-semibold text-slate-100">Recomendações Práticas</span>.
              </p>
              <p>
                💬 <span className="font-semibold text-slate-100">Sessão consultiva</span> com
                especialista da VanguardIA.
              </p>
            </div>
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
              Agendar meu Diagnóstico ICIA
            </Link>
          </Button>
        </div>

        {/* Coluna Auxiliar (Painel Visual) */}
        <div className="relative hidden h-full min-h-[320px] items-end justify-center rounded-2xl border border-slate-800 bg-slate-950/50 p-6 md:flex">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-blue-950/40"
          />
          <p className="text-center text-sm text-slate-400">
            Análise personalizada para empresas com 30 a 1000 colaboradores.
          </p>
        </div>
      </div>
    </section>
  );
}