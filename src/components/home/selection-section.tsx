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
    <section className="bg-slate-900 py-16 sm:py-20 lg:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        {/* Cabeçalho centralizado */}
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            <span className="text-orange-400">100% das empresas</span> são{" "}
            <span className="text-orange-400">criteriosamente selecionadas</span>.
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Fazemos o que ninguém no Brasil faz. E fazemos com{" "}
            <span className="font-semibold text-slate-100">autoridade</span> e{" "}
            <span className="font-semibold text-slate-100">provas reais</span> do que funciona para{" "}
            <span className="font-semibold text-slate-100">empresas sérias</span> e{" "}
            <span className="font-semibold text-slate-100">consolidadas</span>.
          </p>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Por isso, <span className="font-semibold text-slate-100">poucos e bons (muito bons)</span>{" "}
            recebem nossa{" "}
            <span className="font-semibold text-slate-100">alfaiataria de tecnologia</span> com IA
            para <span className="font-semibold text-slate-100">processos eficientes</span> e{" "}
            <span className="font-semibold text-slate-100">negócios ainda mais duradouros</span>.
          </p>
        </div>

        {/* Container com borda/gradiente e conteúdo interno */}
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10">
          <div
            aria-hidden="true"
            className="absolute -z-10 h-[38rem] w-[38rem] blur-[120px]"
            style={{
              left: "14%",
              top: "42%",
              background: "radial-gradient(closest-side, rgba(47, 118, 255, 0.25), transparent)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -z-10 h-[52rem] w-[52rem] blur-[160px]"
            style={{
              right: "-8%",
              bottom: "-12%",
              background: "radial-gradient(closest-side, rgba(255, 122, 24, 0.15), transparent)",
            }}
          />

          <div className="relative p-6 sm:p-8">
            <div className="mx-auto max-w-4xl space-y-3 text-center">
              <h3 className="text-lg font-semibold text-slate-100">
                O ICIA é um <span className="text-slate-50">programa de aceleração</span> com{" "}
                <span className="relative text-slate-50">
                  vagas limitadas
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30" />
                </span>
                .
              </h3>
              <p className="text-sm text-slate-300 sm:text-base">
                Selecionamos apenas empresas comprometidas com{" "}
                <span className="font-semibold text-slate-100">inovação real</span> e abertura para
                aplicar IA de forma{" "}
                <span className="font-semibold text-slate-100">prática e estratégica</span>.
              </p>
              <p className="text-sm text-slate-300 sm:text-base">
                Nosso foco é{" "}
                <span className="relative font-semibold text-blue-400">
                  performance e margem líquida
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30" />
                </span>
                , não <span className="font-semibold text-slate-100">complexidade técnica</span>.
              </p>
            </div>

            <div className="my-8 h-px w-full bg-slate-800" />

            {/* Benefícios */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, support }) => (
                <div key={title} className="group flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-blue-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/10 transition-transform duration-200 group-hover:-translate-y-1">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-sm font-semibold text-slate-50 sm:text-base">{title}</p>
                    <p className="text-xs text-slate-300 sm:text-sm line-clamp-2">{support}</p>
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