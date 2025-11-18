import { sectionContainerClass } from "./section-container";
import { Zap, Users, TrendingUp, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    text: "Aceleração de Produtividade: Reduza o tempo gasto em tarefas repetitivas em até 40%.",
  },
  {
    icon: Users,
    text: "Cultura de Inovação: Transforme colaboradores em 'pilotos de IA', prontos para liderar a mudança.",
  },
  {
    icon: TrendingUp,
    text: "Vantagem Competitiva: Use a IA para gerar insights estratégicos e tomar decisões mais rápidas.",
  },
  {
    icon: ShieldCheck,
    text: "Segurança e Ética: Implemente políticas de uso responsável, minimizando riscos e vazamentos.",
  },
];

export function CnhCorporateSection() {
  return (
    <section className="bg-[#020F00] py-14 sm:py-20 md:py-24">
      <div className={`${sectionContainerClass} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        {/* Coluna de Texto */}
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
            O que é a <span className="text-cyan-400">CNH da IA Corporativa</span>?
          </h2>

          <div className="max-w-prose space-y-4 text-base text-slate-300 sm:text-lg">
            <p>
              É o programa de habilitação que transforma o uso da Inteligência Artificial de uma ferramenta individual para um motor de crescimento estratégico em toda a sua organização.
            </p>
            <p>
              Garantimos que cada líder e colaborador saiba como pilotar as IAs corporativas, maximizando a eficiência e a segurança.
            </p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4 text-left">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-green-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <p className="text-base text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna de Imagem/Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50 shadow-2xl sm:h-[400px] lg:h-[500px]">
            {/* Placeholder para imagem ou visual */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
              <div className="text-center">
                <Zap className="mx-auto h-10 w-10 text-cyan-400" />
                <p className="mt-2 text-lg font-semibold text-slate-300">
                  IA Corporativa em Ação
                </p>
                <p className="text-sm text-slate-500">
                  (Visual de dashboard ou case de uso)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}