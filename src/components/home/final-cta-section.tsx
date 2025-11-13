import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sectionContainerClass } from "./section-container";

export function FinalCtaSection() {
  return (
    <section className="border-t border-slate-800 bg-[#020F00] py-16 sm:py-24 md:py-32">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            A nova era profissional começou. Sua empresa vai ficar de fora?
          </h2>
          <p className="text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
            Habilite seu time com a CNH da IA e entre para o 1 % que lidera. Prova, propósito e performance na mesma decisão.
          </p>
          
          <div className="pt-6">
            <Button
              asChild
              className="h-auto rounded-md bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition hover:bg-green-700 hover:shadow-[0_0_24px_rgba(34,197,94,.25)]"
              size="lg"
            >
              <Link
                href="/form"
                id="cta-final"
                data-cta="lead"
                data-track="true"
              >
                Quero habilitar meu time <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}