import PrimaryCta from "@/components/cta/PrimaryCta";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectionContainerClass } from "./section-container";

export function FinalCtaSection() {
  return (
    <section
      id="sec-final"
      aria-labelledby="heading-final"
      className="border-t border-[color:var(--color-border-slate-700)] bg-[color:var(--color-bg-main)] py-16 sm:py-24 md:py-32 xl:py-40 2xl:py-48"
    >
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6 xl:max-w-5xl xl:space-y-8 2xl:max-w-6xl 2xl:space-y-10">
          <h2
            id="heading-final"
            className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            A nova era profissional começou
            <br />
            <span className="text-[color:var(--hero-accent)]">Sua empresa vai ficar de fora?</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-slate-300 sm:text-xl xl:text-2xl 2xl:text-3xl">
            Habilite seu time com a CNH da IA e entre para o 1 % que lidera
            <br />
            <span className="text-[color:var(--hero-accent)]">Prova, propósito e performance na mesma decisão.</span>
          </p>

          <div className="pt-6 xl:pt-8 2xl:pt-10">
            <PrimaryCta
              id="cta-final"
              href="/form"
              size="lg"
              variant="secondary"
              className="h-auto rounded-md px-8 py-4 text-base font-semibold text-[color:var(--color-text-slate-900)] shadow-lg shadow-[color:var(--color-green-shadow)] transition hover:bg-[color:var(--hero-accent-hover)] hover:shadow-[0_0_24px_var(--color-green-shadow)] uppercase bg-[color:var(--hero-accent)] xl:px-12 xl:py-6 xl:text-xl 2xl:px-16 2xl:py-7 2xl:text-2xl"
              ariaLabel="Quero habilitar meu time"
              dataCta="lead"
              dataTrack="true"
              dataVariant="final"
            >
              Quero habilitar meu time
            </PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}