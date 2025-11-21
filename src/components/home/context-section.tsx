import { sectionContainerClass } from "./section-container";

export function ContextSection() {
  return (
    <section id="sec-context" aria-labelledby="heading-context" className="relative overflow-hidden border-t border-[color:var(--color-border-slate-700)] bg-[color:var(--color-bg-main)] py-16 sm:py-24 xl:py-28 2xl:py-32">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6 xl:max-w-5xl xl:space-y-8 2xl:max-w-6xl 2xl:space-y-10">
          {/* Título e Subtítulo */}
          <div className="space-y-2 xl:space-y-3 2xl:space-y-4">
            <h2 id="heading-context" className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl xl:text-5xl 2xl:text-6xl">
              A IA já está em todo lugar
            </h2>
            <p className="text-balance text-xl font-medium text-[color:var(--color-cta)] sm:text-2xl xl:text-3xl 2xl:text-4xl">
              mas quase ninguém sabe conduzir.
            </p>
          </div>

          {/* Container "Ruído -> Foco" */}
          <div className="relative mx-auto max-w-3xl pt-8 xl:max-w-4xl xl:pt-10 2xl:max-w-5xl 2xl:pt-12">
            {/* Blobs de fundo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,var(--color-green-soft)_0%,transparent_60%)] opacity-70 blur-[90px] left-[-8%] top-[-6%]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-cta-soft)_0%,transparent_60%)] opacity-80 blur-[110px] right-[-10%] bottom-[-8%]"
            />

            {/* Frases com estilos individuais */}
            <div className="flex flex-col items-center gap-3 text-balance text-lg leading-relaxed text-slate-300 md:gap-3.5 xl:gap-4 xl:text-xl 2xl:gap-5 2xl:text-2xl">
              {/* Linha 1: Problema (Ruído) */}
              <p>
                A maioria das empresas usa IA de forma{" "}
                <span className="bg-gradient-to-r from-green-500 to-orange-500/65 bg-[length:100%_2px] bg-bottom bg-no-repeat pb-0.5 opacity-80">
                  tática
                </span>
                , sem direção nem propósito.
              </p>

              {/* Linha 2: Consequência (Ruído) */}
              <p>
                O resultado?{" "}
                <span className="bg-gradient-to-r from-green-500 to-orange-500/65 bg-[length:100%_2px] bg-bottom bg-no-repeat pb-0.5 opacity-80">
                  Dependência de poucos
                </span>{" "}
                e desperdício de potencial coletivo.
              </p>

              {/* Linha 3: Solução (Foco) */}
              <div className="relative w-full py-2">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(38rem_18rem_at_50%_60%,var(--color-green-strong)_0%,transparent_60%)]"
                />
                <p>
                  A <strong className="font-bold text-slate-100">CNH Corporativa</strong> nasceu para resolver isso: formar{" "}
                  <span className="font-semibold text-[color:var(--hero-accent)]">
                    pilotos de IA
                  </span>{" "}
                  dentro das empresas, com{" "}
                  <span className="inline-block rounded-full border border-white/10 bg-white/[.06] px-2.5 py-0.5 backdrop-blur-sm">
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