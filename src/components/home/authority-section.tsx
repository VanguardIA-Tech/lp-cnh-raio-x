import { sectionContainerClass } from "./section-container";

export function AuthoritySection() {
  return (
    <section id="sec-authority" aria-labelledby="heading-authority" className="relative overflow-hidden border-t border-[color:var(--color-border-slate-700)] bg-[color:var(--color-bg-main)] py-16 sm:py-24">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Título */}
          <h2 id="heading-authority" className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Criado pela <span className="text-[color:var(--hero-accent)]">VanguardIA</span>, o movimento que nasceu na Amazônia para ensinar o Brasil a usar IA com propósito.
          </h2>

          {/* Texto de Autoridade/Métricas */}
          <p className="text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
            Primeira aceleradora empresarial de IA do Norte do Brasil, com impacto nacional.
          </p>
          
          {/* Metrics Block */}
          <div className="pt-4">
            <p className="text-center text-xl font-semibold text-slate-100 sm:text-2xl">
              <span className="text-[color:var(--color-cta)]">+5.000 habilitados</span> • <span className="text-[color:var(--color-cta)]">+300 IAs corporativas instaladas</span> • Clientes em todo o país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}