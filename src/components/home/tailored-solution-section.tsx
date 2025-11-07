import { Button } from "@/components/ui/button";
import { Workflow, Gauge, Sparkles, ShieldCheck } from "lucide-react";
import { sectionContainerClass } from "./section-container";
import Link from "next/link";

const differentiators = [
  {
    icon: Workflow,
    title: "Fluxos mapeados",
    description: "Diagnóstico detalhado e co-criação com quem executa os processos.",
  },
  {
    icon: Gauge,
    title: "Eficiência contínua",
    description: "Sistemas adaptativos que evoluem com a operação sem travar o time.",
  },
  {
    icon: Sparkles,
    title: "IA integrada",
    description: "Automação inteligente conectada aos sistemas que você já usa.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e governança",
    description: "Implementações alinhadas à cultura, compliance e ritmo da empresa.",
  },
] as const;

export function TailoredSolutionSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-8`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              A Alfaiataria de IA que cria sistemas sob medida para o seu negócio.
            </h2>

            {/* Texto em dois parágrafos com largura de leitura confortável */}
            <div className="max-w-prose space-y-4 text-base text-slate-300 sm:text-lg">
              <p className="leading-relaxed">
                Diferente de ERPs e plataformas genéricas, nós desenhamos sistemas personalizados e integrados com IA e automação, totalmente adaptados ao seu fluxo real. Cada empresa passa por um diagnóstico profundo, mapeamento de processos e prototipagem de soluções.
              </p>
              <p className="leading-relaxed">
                Ao final, você ganha um “Sistema Vivo de Eficiência”: tecnologia que se adapta às pessoas e a sua empresa, e não o contrário. Exatamente o que você nunca tinha encontrado, mas sabe que é o que faltava.
              </p>
            </div>

            <Button
              asChild
              className="mt-8 sm:mt-10 lg:mt-14 inline-flex w-fit items-center gap-2 rounded-md bg-blue-600 px-6 py-6 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500"
            >
              <Link
                href="/form"
                id="cta-tailored-solution"
                data-cta="primary"
                data-track="true"
              >
                Quero entender o método
              </Link>
            </Button>
          </div>

          {/* Grid 2×2 com alturas consistentes e gutters equilibrados */}
          <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
            {differentiators.map(({ icon: Icon, title, description }, index) => {
              const headingId = `diff-${index}`;
              return (
                <Link
                  key={title}
                  href="/form"
                  aria-labelledby={headingId}
                  className="group block h-full cursor-pointer focus:outline-none"
                  data-track="true"
                >
                  <div
                    className="
                      flex h-full flex-col gap-3 rounded-2xl border border-slate-800/80
                      bg-slate-900/70 p-6 shadow-sm transition
                      duration-200 ease-out
                      hover:border-slate-700 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/10
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                      active:scale-[0.99]
                    "
                    role="group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/15 ring-1 ring-inset ring-blue-400/20">
                      <Icon className="h-6 w-6 text-blue-300" aria-hidden="true" />
                    </div>
                    <h3 id={headingId} className="text-lg font-semibold text-slate-50">
                      {title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-slate-300"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}