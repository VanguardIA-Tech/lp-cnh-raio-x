import { sectionContainerClass } from "./section-container";

export function AuthoritySection() {
  return (
    <section id="sec-authority" aria-labelledby="heading-authority" className="relative overflow-hidden border-t border-[color:var(--color-border-slate-700)] bg-[color:var(--color-bg-main)] py-16 sm:py-24 xl:py-28 2xl:py-32">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6 xl:max-w-5xl xl:space-y-8 2xl:max-w-6xl 2xl:space-y-10">
          {/* Título */}
          <h2 id="heading-authority" className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl">
            Criado pela <span className="text-[color:var(--hero-accent)]">VanguardIA</span>, o movimento que nasceu na Amazônia para ensinar o Brasil a usar IA com propósito.
          </h2>

          {/* Texto de Autoridade/Métricas */}
          <p className="text-balance text-lg leading-relaxed text-slate-300 sm:text-xl xl:text-2xl 2xl:text-3xl">
            Primeira aceleradora empresarial de IA do Norte do Brasil, com impacto nacional.
          </p>
          
          {/* Metrics Block */}
          <div className="pt-4 xl:pt-6 2xl:pt-8">
            <p className="text-center text-xl font-semibold text-slate-100 sm:text-2xl xl:text-3xl 2xl:text-4xl">
              <span className="text-[color:var(--color-cta)]">+5.000 habilitados</span> • <span className="text-[color:var(--color-cta)]">+300 IAs corporativas instaladas</span> • Clientes em todo o país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}