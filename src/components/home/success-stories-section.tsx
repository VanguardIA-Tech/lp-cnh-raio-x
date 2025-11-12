import { sectionContainerClass } from "./section-container";
import * as React from "react";

const successStories = [
  {
    title: "Rede Mais Saúde",
    result: "Redução de 25 dias para 3 dias em processos internos.",
    logo: "/logo-rede-mais-saude.png",
  },
  {
    title: "Do It Hub",
    result: "Operação comercial multiplicada por 3 em 60 dias.",
    logo: "/logo-doithub.png",
  },
  {
    title: "Silveira Athias",
    result: "Escritório jurídico com cultura de IA instalada em toda a equipe.",
    logo: "/logo-silveiraathias.png",
  },
] as const;

// Enfatiza sutilmente números/ganhos sem alterar a copy (wrap tipográfico)
function emphasizeMetrics(text: string) {
  const parts: React.ReactNode[] = [];
  const regex = /(\b\d+(?:[.,]\d+)?\s*(?:dias|%|x|×)?|\b[x×]\d+)/gi;

  let lastIndex = 0;
  text.replace(regex, (match, _g, offset) => {
    if (lastIndex < offset) parts.push(text.slice(lastIndex, offset));
    parts.push(
      <span key={offset} className="font-semibold text-slate-100">
        {match}
      </span>
    );
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function SuccessStoriesSection() {
  return (
    <section className="bg-[#020F00] py-16 text-white sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <h2 className="text-center text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl">
          Empresas que já transformaram seus resultados com o ICIA.
        </h2>

        <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map(({ title, result, logo }) => (
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
              {/* Área de logo normalizada e centralizada */}
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/95 p-2">
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="text-base font-semibold text-slate-50 sm:text-lg">{title}</h3>

              <p
                className="max-w-[50ch] text-sm leading-relaxed text-slate-200 sm:text-base"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {emphasizeMetrics(result)}
              </p>
            </div>
          ))}
        </div>

        {/* Divisor sutil entre cartões e rodapé da seção */}
        <div
          className="mx-auto my-2 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"
          aria-hidden="true"
        />

        <p className="text-center text-sm text-slate-400 tracking-wide sm:text-base">
          São empresas que decidiram parar de improvisar e começaram a operar com sistemas sob medida — criados pela VanguardIA.
        </p>
      </div>
    </section>
  );
}