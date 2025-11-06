import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { sectionContainerClass } from "./section-container";

const painPoints = [
  "Processos lentos, manuais e repetitivos.",
  "Softwares caros que não conversam entre si.",
  "Equipes sobrecarregadas e desalinhadas.",
  "Retrabalho e gargalos entre áreas.",
  "Falta de tempo para pensar e inovar.",
] as const;

type PainPointsSectionProps = {
  onPrimaryClick: () => void;
};

export function PainPointsSection({ onPrimaryClick }: PainPointsSectionProps) {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-10 items-center`}>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-center text-2xl font-bold leading-snug text-slate-50 sm:text-3xl">
            Você sente que sua empresa trabalha demais para entregar bem menos do que poderia?
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {painPoints.map((point, index) => (
              <div
                key={point}
                className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-6 text-center transition hover:shadow-lg hover:shadow-blue-500/10 ${
                  index === painPoints.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-800/20 text-blue-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-4">
          <Button
            type="button"
            onClick={onPrimaryClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-[1.02] sm:w-auto"
            aria-label="Quero resolver isso agora"
          >
            Quero resolver isso agora
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}