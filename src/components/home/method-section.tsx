import { sectionContainerClass } from "./section-container";

export function MethodSection() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 py-14 sm:py-20 md:py-24">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="max-w-3xl space-y-5">
          <h2 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
            Habilitamos pessoas e empresas para pilotar a{" "}
            <span className="text-blue-400">IA</span> com{" "}
            <span className="text-orange-400">autonomia</span>.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p>
              Além de sistemas sob medida, o{" "}
              <span className="font-semibold text-slate-100">ICIA</span> instala cultura.
            </p>
            <p>
              Com o{" "}
              <span className="font-semibold text-slate-100">CNH da IA para CNPJ</span>,
              habilitamos{" "}
              <span className="font-semibold text-slate-100">profissionais e gestores</span> a
              operarem a nova tecnologia de forma{" "}
              <span className="font-semibold text-slate-100">inteligente e segura</span>.
            </p>
            <p>
              Ao final do programa, sua empresa{" "}
              <span className="font-semibold text-slate-100">
                não depende de consultores externos
              </span>{" "}
              — ela <span className="font-semibold text-slate-100">pensa</span>,{" "}
              <span className="font-semibold text-slate-100">automatiza</span> e{" "}
              <span className="font-semibold text-slate-100">cresce com IA</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}