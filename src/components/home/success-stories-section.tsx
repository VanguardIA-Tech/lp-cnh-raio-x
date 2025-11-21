"use client"

import { sectionContainerClass } from "./section-container";
import MetalCard from "@/components/ui/metal-card";
import * as React from "react";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import testimonials from "@/data/testimonials.json";

const stories = [
  {
    title: "Sindarpa",
    subtitle: "80 profissionais habilitados",
    logo: "/logo-sindarpa.png",
  },
  {
    title: "Rede Mais Saúde",
    subtitle: "times médicos e administrativos certificados",
    logo: "/logo-rede-mais-saude.png",
  },
  {
    title: "Silveira Athias Advogados",
    subtitle: "IA aplicada à rotina jurídica",
    logo: "/logo-silveiraathias.png",
  },
  {
    title: "DO IT Hub",
    subtitle: "ecossistema empresarial habilitado",
    logo: "/logo-doithub.png",
  },
] as const;

export function SuccessStoriesSection() {
  return (
    <section id="sec-success" aria-labelledby="heading-success" className="bg-[color:var(--color-bg-main)] py-16 text-[color:var(--color-text-white)] sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <h2 id="heading-success" className="text-center text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl">
          Empresas, sindicatos e associações que já habilitaram seus times
        </h2>

        <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
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
          className="mx-auto my-2 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
          aria-hidden="true"
        />

        <p className="text-center text-xl italic text-slate-200 tracking-wide sm:text-2xl">
          “Não formamos usuários. Formamos pilotos”
        </p>

        <div className="mt-8">
          <TestimonialsCarousel items={testimonials} />
        </div>
      </div>
    </section>
  );
}