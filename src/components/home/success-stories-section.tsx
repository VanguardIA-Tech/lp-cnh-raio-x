"use client"

import { sectionContainerClass } from "./section-container";
import * as React from "react";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
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
    <section className="bg-[color:var(--color-bg-main)] py-16 text-[color:var(--color-text-white)] sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <h2 className="text-center text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl">
          Empresas, sindicatos e associações que já habilitaram seus times
        </h2>

        <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stories.map(({ title, subtitle, logo }) => (
            <div key={title} className="rounded-2xl p-[2.5px] bg-metal-green">
              <div
                className="
                  group relative flex h-full flex-col items-center justify-start gap-4
                  rounded-2xl card-metal-inner p-6 w-full transition duration-200 ease-out
                  hover:shadow-lg
                  focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-green-500
                  active:scale-[0.99]
                "
                style={{ boxSizing: 'border-box' }}
              >
                {logo && (
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/95 p-2">
                    <img
                      src={logo}
                      alt={`${title} Logo`}
                      aria-hidden="true"
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
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