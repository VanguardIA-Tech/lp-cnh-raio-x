import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectionContainerClass } from "./section-container";

export function FinalCtaSection() {
  return (
    <section className="border-t border-[color:var(--color-border-slate-700)] bg-[color:var(--color-bg-main)] py-16 sm:py-24 md:py-32">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            A nova era profissional começou
            <br />
            <span className="text-[color:var(--hero-accent)]">
              Sua empresa vai ficar de fora?
            </span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
            Habilite seu time com a CNH da IA e entre para o 1 % que lidera
            <br />
            <span className="text-[color:var(--hero-accent)]">
              Prova, propósito e performance na mesma decisão.
            </span>
          </p>

          <div className="pt-6">
            <Button
              asChild
              className="h-auto rounded-md bg-[color:var(--hero-accent)] px-8 py-4 text-base font-semibold text-[color:var(--color-text-slate-900)] shadow-lg shadow-[color:var(--color-green-shadow)] transition hover:bg-[color:var(--hero-accent-hover)] hover:shadow-[0_0_24px_var(--color-green-shadow)] uppercase"
              size="lg"
            >
              <Link
                href="/form"
                id="cta-final"
                data-cta="lead"
                data-track="true"
              >
                Quero habilitar meu time
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}