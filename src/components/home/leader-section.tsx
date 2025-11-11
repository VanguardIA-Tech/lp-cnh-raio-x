import Image from "next/image";
import { sectionContainerClass } from "./section-container";

export function LeaderSection() {
  return (
    <section className="bg-slate-950 py-12 sm:py-16">
      <div className={`${sectionContainerClass} gap-8`}>
        {/* Grid com itens alinhados ao topo */}
        <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
          {/* Coluna esquerda: hierarquia e ritmo com texto maior */}
          <div className="space-y-6 sm:space-y-8 max-w-prose">
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Quem lidera o movimento de Eficiência Inteligente no Brasil.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed sm:text-xl">
              Empresário e estrategista, Jorge Antonio Auad Filho é fundador do Grupo VanguardIA — a primeira aceleradora empresarial de IA do Norte do Brasil. Reconhecido por sua abordagem prática e humana, já ajudou centenas de negócios a dobrarem sua eficiência e margem. Criador dos métodos CNH da IA, COPA e CTC, que hoje formam a base do movimento Eficiência que Liberta.
            </p>
            <p className="text-lg italic text-slate-200 sm:text-xl">
              “IA não substitui pessoas. Liberta o potencial delas.”
            </p>
          </div>

          {/* Coluna direita: imagem dentro de um card */}
          <div className="relative flex justify-center md:justify-end">
            <div className="
              mt-8 w-[85%] max-w-sm overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 shadow-lg
              transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/20
              md:mt-0 md:max-w-full
            ">
              <Image
                src="/jorge4.webp"
                alt="Jorge Antonio Auad Filho"
                width={800}
                height={1000}
                loading="lazy"
                sizes="(min-width: 768px) 40vw, 90vw"
                className="h-full w-full object-cover object-top"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}