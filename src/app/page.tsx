"use client";

import { useCallback } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Gauge,
  Sparkles,
  ShieldCheck,
  Workflow,
  Lightbulb,
  Rocket,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const applicationFormSchema = z.object({
  name: z.string().min(1, "Informe seu nome completo."),
  email: z
    .string()
    .min(1, "Informe um e-mail corporativo.")
    .email("Digite um e-mail válido."),
  phone: z.string().min(1, "Informe um telefone ou WhatsApp."),
  company: z.string().min(1, "Informe o nome da empresa."),
  employees: z.string().min(1, "Informe o número aproximado de colaboradores."),
  role: z.string().optional(),
  message: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

const floatingCTAClasses =
  "fixed bottom-6 right-6 z-50 shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]";

const sectionContainer =
  "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8";

const highlightedTextClass = "font-semibold text-blue-600";

export default function Home() {
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      role: "",
      message: "",
    },
  });

  const scrollToForm = useCallback(() => {
    const formSection = document.getElementById("application-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleCTA = useCallback(() => {
    scrollToForm();
  }, [scrollToForm]);

  const onSubmit = (values: ApplicationFormValues) => {
    console.table(values);
    toast.success("Aplicação recebida! Nossa equipe entrará em contato em breve.");
    form.reset();
  };

  return (
    <div className="bg-white text-slate-900">
      {/* Top blue band (faixa de abertura) */}
      <header className="bg-blue-600">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm font-medium text-white sm:text-base">
          <span role="img" aria-label="alvo" className="mr-2 inline-block">
            🎯
          </span>
          Exclusivo para empresas com 30 a 1000 colaboradores que buscam eficiência real com Inteligência Artificial e Automação.
        </div>
      </header>

      <main className="flex flex-col">
        {/* HERO section — ajustado: menos espaço superior, fontes menores e menos margem lateral */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:py-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
            {/* Left column: logo + headline + subheadline + CTA */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                {/* small logo box */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-white/10 p-2">
                  <img src="/next.svg" alt="VanguardIA" className="h-8 w-8 object-contain" />
                </div>

                {/* Heading — reduced sizes and max width */}
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[48px] leading-tight font-extrabold tracking-tight text-left max-w-[540px]">
                  Transforme sua operação com sistemas personalizados de IA e automação integrados à sua realidade.
                  <span className="block text-blue-400 mt-2">Tudo feito para atender o SEU negócio.</span>
                </h1>

                {/* Subheadline */}
                <p className="mt-5 max-w-[560px] text-base text-slate-200 sm:text-lg">
                  O Programa ICIA (Inteligência Corporativa Integrada com Automação) é a aceleração que redesenha processos, integra pessoas e instala cultura de eficiência com IA. Sem precisar trocar seus sistemas atuais nem contratar um monte de gente com altos salários.
                </p>
              </div>

              {/* CTA and microcopy */}
              <div className="mt-4 flex flex-col items-start gap-3">
                <Button
                  type="button"
                  onClick={handleCTA}
                  className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
                >
                  Quero meu Diagnóstico de Eficiência com IA
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="mt-2 text-sm italic text-slate-300">
                  O futuro das empresas eficientes é sob medida. A sua também pode ser.
                </p>
              </div>
            </div>

            {/* Right column: portrait / card */}
            <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[460px]">
                <div className="relative overflow-hidden rounded-2xl bg-white/5 p-0 shadow-2xl shadow-blue-900/20">
                  {/* imagem placeholder; substitua por foto do designer para retrato real */}
                  <img
                    src="/window.svg"
                    alt="Jorge Auad"
                    className="w-full h-[320px] object-cover object-center rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of page sections remain unchanged */}
        <section className="bg-white py-16 sm:py-24">
          <div className={`${sectionContainer} gap-10`}>
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
                “Você sente que sua empresa trabalha demais para entregar bem menos do que poderia?”
              </h2>
              <ul className="space-y-4 text-base text-slate-700 sm:text-lg">
                {[
                  "Processos lentos, manuais e repetitivos.",
                  "Softwares caros que não conversam entre si.",
                  "Equipes sobrecarregadas e desalinhadas.",
                  "Retrabalho e gargalos entre áreas.",
                  "Falta de tempo para pensar e inovar.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1.5 h-5 w-5 flex-none text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              type="button"
              onClick={handleCTA}
              variant="outline"
              className="inline-flex w-fit items-center gap-2 rounded-full border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Quero resolver isso agora
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="bg-slate-100 py-16 sm:py-24">
          <div className={`${sectionContainer} gap-8`}>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              100% das empresas são criteriosamente selecionadas. <br />
              Fazemos o que ninguém no Brasil faz. E fazemos com autoridade e provas reais do que funciona para empresas sérias e consolidadas. <br />
              Por isso, poucos e bons (muito bons) recebem nossa alfaiataria de tecnologia com IA para processos eficientes e negócios ainda mais duradouros.
            </h2>
            <p className="max-w-3xl text-base text-slate-700 sm:text-lg">
              O ICIA é um programa de aceleração com vagas limitadas. Selecionamos apenas empresas comprometidas com inovação real e abertura para aplicar IA de forma prática e estratégica. Nosso foco é performance e margem líquida, não complexidade técnica.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "+30 colaboradores",
                  description: "Operações com escala suficiente para grandes ganhos de eficiência.",
                },
                {
                  icon: Lightbulb,
                  title: "Mentalidade de crescimento e inovação constantes",
                  description: "Empresas que enxergam tecnologia como estratégia, não como custo.",
                },
                {
                  icon: ShieldCheck,
                  title: "Comprometimento com transformação",
                  description: "Executivos e líderes prontos para implementar mudanças reais.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <Icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className={`${sectionContainer} gap-8`}>
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                A Alfaiataria de IA que cria sistemas sob medida para o seu negócio.
              </h2>
              <p className="text-base text-slate-700 sm:text-lg">
                Diferente de ERPs e plataformas genéricas, nós desenhamos sistemas personalizados e integrados com IA e automação, totalmente adaptados ao seu fluxo real. Cada empresa passa por um diagnóstico profundo, mapeamento de processos e prototipagem de soluções. Ao final, você ganha um “Sistema Vivo de Eficiência”: tecnologia que se adapta às pessoas e a sua empresa, e não o contrário. Exatamente o que você nunca tinha encontrado, mas sabe que é o que faltava.
              </p>
              <Button
                type="button"
                onClick={handleCTA}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
              >
                Quero entender o método
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Workflow,
                  title: "Fluxos mapeados",
                  description: "Diagnóstico detalhado e co-criação com quem executa os processos.",
                },
                {
                  icon: Gauge,
                  title: "Eficiência contínua",
                  description: "Sistemas adaptativos que evoluem com a operação sem travar o time.",
                },
                {
                  icon: Sparkles,
                  title: "IA integrada",
                  description: "Automação inteligente conectada aos sistemas que você já usa.",
                },
                {
                  icon: ShieldCheck,
                  title: "Segurança e governança",
                  description: "Implementações alinhadas à cultura, compliance e ritmo da empresa.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <Icon className="h-7 w-7 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white sm:py-24">
          <div className={`${sectionContainer} gap-10`}>
            <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
              Empresas que já transformaram seus resultados com o ICIA.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Rede Mais Saúde",
                  result: "Redução de 25 dias para 3 dias em processos internos.",
                },
                {
                  title: "Do It Hub",
                  result: "Operação comercial multiplicada por 3 em 60 dias.",
                },
                {
                  title: "Silveira Athias",
                  result: "Escritório jurídico com cultura de IA instalada em toda a equipe.",
                },
              ].map(({ title, result }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-blue-300" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="text-sm text-slate-200">{result}</p>
                </div>
              ))}
            </div>
            <p className="text-base text-slate-200 sm:text-lg">
              São empresas que decidiram parar de improvisar e começaram a operar com sistemas sob medida — criados pela VanguardIA.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className={`${sectionContainer} gap-8`}>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Quem lidera o movimento de Eficiência Inteligente no Brasil.
                </h2>
                <p className="text-base text-slate-700 sm:text-lg">
                  Empresário e estrategista, Jorge Antonio Auad Filho é fundador do Grupo VanguardIA — a primeira aceleradora empresarial de IA do Norte do Brasil. Reconhecido por sua abordagem prática e humana, já ajudou centenas de negócios a dobrarem sua eficiência e margem. Criador dos métodos CNH da IA, COPA e CTC, que hoje formam a base do movimento Eficiência que Liberta.
                </p>
                <p className="text-lg italic text-slate-900">
                  “IA não substitui pessoas. Liberta o potencial delas.”
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-full w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-slate-200" />
                  <div className="relative space-y-6 text-slate-800">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Bastidores VanguardIA
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold">Eficiência que Liberta</h3>
                    </div>
                    <div className="space-y-3 text-sm text-slate-600">
                      <p>
                        Mentorias executivas, squads de automação e laboratórios internos conectando líderes e tecnologia.
                      </p>
                      <p>
                        Cultura de dados, processos enxutos e IA aplicada para gerar margem e escala sustentável.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-xs font-medium uppercase tracking-widest text-slate-700">
                      <ShieldCheck className="h-5 w-5 text-blue-600" />
                      VanguardIA — Inteligência Aplicada à Prosperidade
                    </div>
                  </div>
                </div>
                <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16 sm:py-24">
          <div className={`${sectionContainer} gap-8`}>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Descubra onde a IA pode liberar horas e aumentar margem na sua operação.
                </h2>
                <p className="text-base text-slate-700 sm:text-lg">
                  O Diagnóstico ICIA é a porta de entrada para a transformação. Em apenas 15 a 30 minutos, identificamos:
                </p>
                <ul className="space-y-4 text-base text-slate-700 sm:text-lg">
                  {[
                    "Os gargalos que travam sua eficiência.",
                    "As integrações que podem gerar automação imediata.",
                    "O potencial de economia e aceleração via IA.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1.5 h-5 w-5 flex-none text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm text-slate-700 sm:text-base">
                  <p className={`${highlightedTextClass}`}>Entrega:</p>
                  <p>📄 Relatório de Eficiência + Recomendações Práticas.</p>
                  <p>💬 Sessão consultiva com especialista da VanguardIA.</p>
                </div>
                <Button
                  type="button"
                  onClick={handleCTA}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
                >
                  Agendar meu Diagnóstico ICIA
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900">
                  <Rocket className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Sua jornada em 3 passos</h3>
                    <p className="text-sm text-slate-600">Diagnosticar, prototipar e ativar eficiência real.</p>
                  </div>
                </div>
                <div className="space-y-5 text-sm text-slate-600">
                  <div>
                    <p className="font-semibold text-slate-800">1. Diagnóstico Profundo</p>
                    <p>Mapeamos processos, dados e ferramentas para encontrar brechas de eficiência.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">2. Desenho sob Medida</p>
                    <p>Prototipamos soluções com IA integrada aos sistemas que já existem.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">3. Ativação e Cultura</p>
                    <p>Instalamos a cultura de autonomia com IA para garantir resultados duradouros.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24">
          <div className={`${sectionContainer} gap-8`}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Habilitamos pessoas e empresas para pilotar a IA com autonomia.
                </h2>
                <p className="text-base text-slate-700 sm:text-lg">
                  Além de sistemas sob medida, o ICIA instala cultura. Com o CNH da IA para CNPJ, habilitamos profissionais e gestores a operarem a nova tecnologia de forma inteligente e segura. Ao final do programa, sua empresa não depende de consultores externos — ela pensa, automatiza e cresce com IA.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Capacitação aplicada",
                      description:
                        "Workshops e laboratórios práticos para times executarem IA no dia a dia.",
                    },
                    {
                      title: "Playbooks proprietários",
                      description:
                        "Métodos CNH da IA, COPA e CTC documentados e adaptados à sua operação.",
                    },
                    {
                      title: "Autonomia sustentável",
                      description:
                        "Times habilitados a identificar oportunidades e escalar automações continuamente.",
                    },
                  ].map(({ title, description }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Sparkles className="mt-1.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-base font-semibold text-slate-900 sm:text-lg">{title}</p>
                        <p className="text-sm text-slate-600">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                id="application-form"
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <div className="mb-6 space-y-2">
                  <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    Preencha o formulário e aplique-se agora.
                  </h2>
                  <p className="text-sm text-slate-600 sm:text-base">
                    As vagas para o Diagnóstico ICIA são limitadas. Preencha os dados abaixo para verificar elegibilidade e receber contato da nossa equipe.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail corporativo</FormLabel>
                          <FormControl>
                            <Input placeholder="nome@empresa.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone ou WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome da empresa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="employees"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de colaboradores</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex.: 150"
                              inputMode="numeric"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cargo (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Cargo ou departamento" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contexto atual (opcional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Compartilhe desafios, metas ou expectativas para o ICIA."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
                    >
                      Quero meu Diagnóstico ICIA
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-10 text-slate-300">
        <div className={`${sectionContainer} items-center justify-between gap-6 text-sm`}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold text-white">
              V
            </div>
            <div className="text-base font-semibold text-white">VanguardIA</div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-slate-400">
            <span>Contato</span>
            <span>Endereço</span>
            <span>Política de Privacidade</span>
          </div>
        </div>
        <div className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          “VanguardIA — Inteligência Aplicada à Prosperidade.”
        </div>
      </footer>

      <Button
        type="button"
        onClick={handleCTA}
        className={`${floatingCTAClasses} rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600`}
      >
        Agendar Diagnóstico de Eficiência com IA
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}