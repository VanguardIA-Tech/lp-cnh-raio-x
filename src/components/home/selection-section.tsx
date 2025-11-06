import { Users, TrendingUp, Target } from "lucide-react";
import { sectionContainerClass } from "./section-container";

const benefits = [
  {
    icon: Users,
    title: "+30 colaboradores",
    support: "Empresas com estrutura consolidada",
  },
  {
    icon: TrendingUp,
    title: "Mentalidade de crescimento",
    support: "Inovação constante no DNA",
  },
  {
    icon: Target,
    title: "Comprometimento",
    support: "Abertura para transformação real",
  },
] as const;

export function SelectionCriteriaSection() {
  return (
    <section className="bg-slate-900 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        {/* Cabeçalho centralizado */}
        <div className="mx-auto max-w-5xl space-y-5 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            100% das empresas são criteriosamente selecionadas.
          </h2>
          <p className="text-base text-slate-300 sm:text-lg">
            Fazemos o que ninguém no Brasil faz. E fazemos com autoridade e provas reais do que
            funciona para empresas sérias e consolidadas.
          </p>
          <p className="text-base text-slate-300 sm:text-lg">
            Por isso, <span className="font-semibold text-slate-100">poucos e bons (muito bons)</span> recebem
            nossa alfaiataria de tecnologia com IA para processos eficientes e negócios ainda mais duradouros.
          </p>
        </div>

        {/* Container com borda/gradiente e conteúdo interno */}
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-blue-950/40"
          />
          <div className="relative p-6 sm:p-8">
            <div className="mx-auto max-w-4xl space-y-3 text-center">
              <h3 className="text-lg font-semibold text-slate-100">
                O ICIA é um programa de aceleração com vagas limitadas.
              </h3>
              <p className="text-sm text-slate-300 sm:text-base">
                Selecionamos apenas empresas comprometidas com inovação real e abertura para aplicar IA de forma prática e estratégica.
              </p>
              <p className="text-sm text-slate-300 sm:text-base">
                Nosso foco é <span className="font-semibold text-blue-400">performance e margem líquida</span>, não complexidade técnica.
              </p>
            </div>

            {/* Benefícios */}
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, title, support }) => (
                <div key={title} className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-blue-700/20 to-blue-800/30 ring-1 ring-inset ring-blue-500/20">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-sm font-semibold text-slate-100 sm:text-base">{title}</p>
                    <p className="text-xs text-slate-400 sm:text-sm">{support}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}