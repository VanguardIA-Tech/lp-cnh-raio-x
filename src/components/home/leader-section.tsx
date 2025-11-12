import Image from "next/image";
import { sectionContainerClass } from "./section-container";

export function LeaderSection() {
  return (
    <section className="bg-slate-950 py-12 sm:py-16">
      <div className={`${sectionContainerClass} gap-8`}>
        {/* Grid com itens alinhados ao topo */}
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          {/* Coluna esquerda: hierarquia e ritmo com texto maior */}
          <div className="space-y-5 text-center sm:space-y-6 md:text-left">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              <span className="font-bold text-orange-400">Quem lidera</span> o movimento de{" "}
              <span className="font-bold text-orange-400">Eficiência Inteligente no Brasil</span>.
            </h2>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Empresário e estrategista,{" "}
              <span className="font-semibold text-slate-100">Jorge Antonio Auad Filho</span> é
              fundador do{" "}
              <span className="font-semibold text-slate-100">Grupo VanguardIA</span> — a{" "}
              <span className="font-semibold text-slate-100">
                primeira aceleradora empresarial de IA do Norte do Brasil
              </span>
              . Reconhecido por sua{" "}
              <span className="font-semibold text-slate-100">abordagem prática e humana</span>, já
              ajudou centenas de negócios a{" "}
              <span className="font-semibold text-slate-100">
                dobrarem sua eficiência e margem
              </span>
              . Criador dos{" "}
              <span className="font-semibold text-slate-100">
                métodos CNH da IA, COPA e CTC
              </span>
              , que hoje formam a base do{" "}
              <span className="font-semibold text-slate-100">
                movimento Eficiência que Liberta
              </span>
              .
            </p>
            <p className="text-base italic text-slate-200 sm:text-lg">
              “IA não substitui pessoas.{" "}
              <span className="relative pb-1">
                Liberta o potencial delas.
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/30" />
              </span>
              ”
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