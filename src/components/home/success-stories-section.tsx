"use client"

import { sectionContainerClass } from "./section-container";
import MetalCard from "@/components/ui/metal-card";
import * as React from "react";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import testimonials from "@/data/testimonials.json";

const stories = [
  {
    title: "Sindarpa",
    subtitle: "80 profissionais habilitados",
    logo: "https://directus.vanguardiagrupo.com.br/assets/5ffed61c-7ec9-48a3-b856-9008a37f4620",
  },
  {
    title: "Rede Mais Saúde",
    subtitle: "times médicos e administrativos certificados",
    logo: "https://directus.vanguardiagrupo.com.br/assets/6b5f9231-2c2b-4920-a1a2-c1c317d80dec",
  },
  {
    title: "Silveira Athias Advogados",
    subtitle: "IA aplicada à rotina jurídica",
    logo: "https://directus.vanguardiagrupo.com.br/assets/96a23939-eb14-4db5-951b-8b2fdc9702b5",
  },
  {
    title: "DO IT Hub",
    subtitle: "ecossistema empresarial habilitado",
    logo: "https://directus.vanguardiagrupo.com.br/assets/0fe18dbe-afb5-4e52-9dd2-bba90b72cb1f",
  },
] as const;

export function SuccessStoriesSection() {
  return (
    <section id="sec-success" aria-labelledby="heading-success" className="bg-[color:var(--color-bg-main)] py-16 text-[color:var(--color-text-white)] sm:py-24 xl:py-28 2xl:py-32">
      <div className={`${sectionContainerClass} gap-10 xl:gap-12 2xl:gap-16`}>
        <h2 id="heading-success" className="text-center text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl xl:text-4xl 2xl:text-5xl">
          Empresas, sindicatos e associações que já habilitaram seus times
        </h2>

        <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 2xl:gap-10">
          {stories.map(({ title, subtitle, logo }) => (
            <MetalCard
              key={title}
              title={title}
              subtitle={subtitle}
              logoSrc={logo}
              dataVariant="success-story"
              variant="metal-green"
              padding="md"
              ariaLabel={`Caso de sucesso: ${title}`}
            />
          ))}
        </div>

        <div
          className="mx-auto my-2 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-green-500/20 to-transparent xl:max-w-6xl 2xl:max-w-7xl"
          aria-hidden="true"
        />

        <p className="text-center text-xl italic text-slate-200 tracking-wide sm:text-2xl xl:text-3xl 2xl:text-4xl">
          “Não formamos usuários. Formamos pilotos”
        </p>

        <div className="mt-12 xl:mt-16 2xl:mt-20 w-full">
          <TestimonialsGrid items={testimonials} />
        </div>
      </div>
    </section>
  );
}