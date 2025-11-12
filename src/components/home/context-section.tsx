import { sectionContainerClass } from "./section-container";

export function ContextSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-[#020F00] py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.1)_0%,transparent_70%)] opacity-70 blur-[120px] lg:left-[5%] lg:top-[10%]"
      />
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
              A IA já está em todo lugar
            </h2>
            <p className="text-balance text-xl font-medium text-orange-400 sm:text-2xl">
              — mas quase ninguém sabe conduzir.
            </p>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p>
              A maioria das empresas usa IA de forma{" "}
              <span className="font-semibold text-slate-100">tática, sem direção nem propósito</span>.
            </p>
            <p>
              O resultado?{" "}
              <span className="font-semibold text-slate-100">Dependência de poucos</span> e{" "}
              <span className="font-semibold text-slate-100">desperdício de potencial coletivo</span>.
            </p>
            <p>
              A <span className="font-semibold text-slate-100">CNH Corporativa</span> nasceu para resolver isso: formar{" "}
              <span className="font-semibold text-slate-100">pilotos de IA</span> dentro das empresas, com{" "}
              <span className="font-semibold text-slate-100">método, filosofia e impacto real</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}