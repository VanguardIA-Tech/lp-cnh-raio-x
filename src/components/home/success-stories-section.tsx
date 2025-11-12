import { sectionContainerClass } from "./section-container";
import * as React from "react";

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
    <section className="bg-[#020F00] py-16 text-white sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <h2 className="text-center text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl">
          Empresas, sindicatos e associações que já habilitaram seus times
        </h2>

        <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stories.map(({ title, subtitle, logo }) => (
            <div
              key={title}
              className="
                group relative flex h-full flex-col items-center justify-start gap-4
                rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6
                shadow-sm transition duration-200 ease-out
                hover:border-slate-700 hover:bg-slate-900 hover:shadow-lg
                focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-green-500
                active:scale-[0.99]
              "
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
          ))}
        </div>

        <div
          className="mx-auto my-2 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"
          aria-hidden="true"
        />

        <p className="text-center text-xl italic text-slate-200 tracking-wide sm:text-2xl">
          “Não formamos usuários. Formamos pilotos”
        </p>
      </div>
    </section>
  );
}