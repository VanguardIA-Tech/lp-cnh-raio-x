import { Award, Briefcase, MonitorPlay, Users } from "lucide-react";
import { sectionContainerClass } from "./section-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: Award,
    text: "Formação oficial para líderes e equipes.",
  },
  {
    icon: Briefcase,
    text: "Aplicação prática em processos reais (vendas, marketing, financeiro, operações).",
  },
  {
    icon: MonitorPlay,
    text: "Treinamentos presenciais, online ou híbridos.",
  },
  {
    icon: Users,
    text: "Certificação reconhecida + acesso à Comunidade VanguardIA Corporate.",
  },
];

export function CnhCorporateSection() {
  return (
    <section className="bg-[#020F00] py-16 sm:py-20 lg:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            A primeira certificação que transforma colaboradores em{" "}
            <span className="text-orange-400">pilotos de IA estratégicos</span>.
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-green-500/10 sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -z-10 h-[38rem] w-[38rem] blur-[120px]"
            style={{
              left: "14%",
              top: "42%",
              background: "radial-gradient(closest-side, rgba(34, 197, 94, 0.25), transparent)",
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

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4 text-left">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-green-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <p className="text-base text-slate-200">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="h-auto rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(255,122,24,.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98]"
            >
              <Link
                href="/form"
                id="cta-cnh-corporate"
                data-cta="corporate-presentation"
                data-track="true"
              >
                Solicitar Apresentação Corporativa →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}