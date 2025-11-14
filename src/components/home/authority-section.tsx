import { sectionContainerClass } from "./section-container";

export function AuthoritySection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-700 bg-[#020F00] py-16 sm:py-24">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Título */}
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Criado pela <span className="text-green-400">VanguardIA</span> — o movimento que nasceu na Amazônia para ensinar o Brasil a usar IA com propósito.
          </h2>

          {/* Texto de Autoridade/Métricas */}
          <p className="text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
            Primeira aceleradora empresarial de IA do Norte do Brasil, com impacto nacional.
          </p>
          
          {/* Metrics Block */}
          <div className="pt-4">
            <p className="text-center text-xl font-semibold text-slate-100 sm:text-2xl">
              <span className="text-orange-400">+5 000 habilitados</span> • <span className="text-orange-400">+300 IAs corporativas instaladas</span> • Clientes em todo o país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}