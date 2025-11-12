import { Button } from "@/components/ui/button";
import { Workflow, Gauge, Sparkles, ShieldCheck } from "lucide-react";
import { sectionContainerClass } from "./section-container";
import Link from "next/link";

const differentiators = [
  {
    icon: Workflow,
    title: "Fluxos mapeados",
    description: "Diagnóstico detalhado e co-criação com quem executa os processos.",
    highlight: "Diagnóstico detalhado",
  },
  {
    icon: Gauge,
    title: "Eficiência contínua",
    description: "Sistemas adaptativos que evoluem com a operação sem travar o time.",
    highlight: "evoluem",
  },
  {
    icon: Sparkles,
    title: "IA integrada",
    description: "Automação inteligente conectada aos sistemas que você já usa.",
    highlight: "conectada",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e governança",
    description: "Implementações alinhadas à cultura, compliance e ritmo da empresa.",
    highlight: "compliance",
  },
] as const;

// Helper to highlight text
const Highlight = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight) return <>{text}</>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong key={i} className="font-semibold text-slate-100">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
};

export function TailoredSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24">
      {/* Blobs for the entire section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[56rem] w-[56rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.10)_0%,transparent_60%)] opacity-70 blur-[120px] lg:left-[-12%] lg:top-[22%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(47,118,255,0.16)_0%,transparent_60%)] opacity-80 blur-[100px] lg:left-[30%] lg:top-[40%]"
      />

      <div className={`${sectionContainerClass} gap-8`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative z-10 space-y-6 text-center sm:text-left">
            {/* Contrast Veil */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-black/20 to-black/10"
            />
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              A{" "}
              <strong className="font-bold">
                <span className="bg-gradient-to-r from-blue-500/30 to-orange-500/30 bg-[length:100%_3px] bg-bottom bg-no-repeat pb-1">
                  Alfaiataria de IA
                </span>
              </strong>{" "}
              que cria sistemas{" "}
              <strong className="font-bold">
                <span className="bg-gradient-to-r from-blue-500/30 to-orange-500/30 bg-[length:100%_3px] bg-bottom bg-no-repeat pb-1">
                  sob medida
                </span>
              </strong>{" "}
              para o seu negócio.
            </h2>

            <div className="max-w-prose space-y-4 text-base text-slate-200 sm:text-lg">
              <p className="leading-relaxed">
                Diferente de ERPs e plataformas genéricas, nós desenhamos{" "}
                <strong className="font-semibold text-slate-100">sistemas personalizados</strong> e
                integrados com{" "}
                <strong className="font-semibold text-slate-100">IA e automação</strong>,
                totalmente adaptados ao seu fluxo real. Cada empresa passa por um{" "}
                <strong className="font-semibold text-slate-100">diagnóstico profundo</strong>,{" "}
                <strong className="font-semibold text-slate-100">mapeamento de processos</strong> e
                prototipagem de soluções.
              </p>
              <p className="leading-relaxed">
                Ao final, você ganha um “
                <strong className="font-semibold text-slate-100">
                  Sistema Vivo de Eficiência
                </strong>
                ”: tecnologia que se adapta às pessoas e a sua empresa, e não o contrário.
                Exatamente o que você nunca tinha encontrado, mas sabe que é o que faltava.
              </p>
            </div>

            <Button
              asChild
              className="mt-8 h-14 rounded-md bg-[#FF7A18] px-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,122,24,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] sm:mt-10 lg:mt-14"
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

          <div className="relative grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
            {/* Blobs for the grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.08)_0%,transparent_70%)] blur-[100px] lg:right-[-10%] lg:top-[10%]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(47,118,255,0.12)_0%,transparent_70%)] blur-[90px] lg:bottom-[-8%] lg:right-[20%]"
            />
            {differentiators.map(({ icon: Icon, title, description, highlight }, index) => {
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
                      flex h-full flex-col gap-3 rounded-2xl border border-slate-800
                      bg-slate-900 p-6 shadow-sm transition
                      duration-200 ease-out text-center sm:text-left
                      hover:border-slate-700 hover:shadow-[0_12px_28px_rgba(255,122,24,0.10)]
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
                      active:scale-[0.99]
                    "
                    role="group"
                  >
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[radial-gradient(closest-side,rgba(47,118,255,0.25),rgba(47,118,255,0))] ring-2 ring-orange-500/35 ring-offset-1 ring-offset-slate-900">
                      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 id={headingId} className="text-lg font-semibold text-slate-50">
                      <span className="bg-gradient-to-r from-blue-500/30 to-orange-500/30 bg-[length:100%_2px] bg-bottom bg-no-repeat pb-0.5">
                        {title}
                      </span>
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
                      <Highlight text={description} highlight={highlight} />
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