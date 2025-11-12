import { sectionContainerClass } from "./section-container";

export function ContextSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-[#020F00] py-16 sm:py-24">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Título e Subtítulo */}
          <div className="space-y-2">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
              A IA já está em todo lugar
            </h2>
            <p className="text-balance text-xl font-medium text-orange-400 sm:text-2xl">
              mas quase ninguém sabe conduzir.
            </p>
          </div>

          {/* Container "Ruído -> Foco" */}
          <div className="relative mx-auto max-w-3xl pt-8">
            {/* Blobs de fundo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(47,118,255,0.12)_0%,transparent_60%)] opacity-70 blur-[100px] left-[-8%] top-[-6%]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.10)_0%,transparent_60%)] opacity-80 blur-[120px] right-[-10%] bottom-[-8%]"
            />

            {/* Frases com estilos individuais */}
            <div className="flex flex-col items-center gap-4 text-balance text-lg leading-relaxed text-slate-300 md:gap-3">
              {/* Linha 1: Problema (Ruído) */}
              <div className="rounded-xl bg-[linear-gradient(180deg,rgba(0,0,0,.22)_0%,rgba(0,0,0,.08)_100%)] px-4 py-3">
                <p>
                  A maioria das empresas usa IA de forma{" "}
                  <span className="bg-gradient-to-r from-blue-500/30 to-orange-500/30 bg-[length:100%_3px] bg-bottom bg-no-repeat pb-1">
                    tática
                  </span>
                  ,{" "}
                  <span className="inline-block rounded-full border border-orange-500/25 bg-orange-500/10 px-2 py-0.5 text-slate-200">
                    sem direção nem propósito
                  </span>
                  .
                </p>
              </div>

              {/* Linha 2: Consequência (Ruído) */}
              <div className="rounded-xl bg-[linear-gradient(180deg,rgba(0,0,0,.22)_0%,rgba(0,0,0,.08)_100%)] px-4 py-3">
                <p>
                  O resultado?{" "}
                  <span className="bg-gradient-to-r from-blue-500/30 to-orange-500/30 bg-[length:100%_3px] bg-bottom bg-no-repeat pb-1">
                    Dependência de poucos
                  </span>{" "}
                  e{" "}
                  <span className="inline-block rounded-full border border-orange-500/25 bg-orange-500/10 px-2 py-0.5 text-slate-200">
                    desperdício de potencial coletivo
                  </span>
                  .
                </p>
              </div>

              {/* Linha 3: Solução (Foco) */}
              <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_50%,rgba(47,118,255,.18)_0%,rgba(47,118,255,0)_70%)]"
                />
                <p>
                  A <strong className="font-bold text-slate-100">CNH Corporativa</strong> nasceu para resolver isso: formar{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
                    pilotos de IA
                  </span>{" "}
                  dentro das empresas, com{" "}
                  <span className="inline-block rounded-full border border-orange-500/25 bg-orange-500/10 px-2 py-0.5 text-slate-200">
                    método, filosofia e impacto real
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}