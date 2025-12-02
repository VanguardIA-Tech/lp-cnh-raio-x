export const templateConfig = {
  site: {
    title: "VanguardIA — Eficiência Inteligente para Empresas",
    description: "Programa ICIA da VanguardIA: IA e automação sob medida para empresas de 30 a 1000 colaboradores.",
    language: "pt-BR",
    url: "https://cnh.vanguardia.cloud",
  },
  branding: {
    companyName: "VanguardIA",
    primaryCtaText: "Agendar Diagnóstico de Eficiência com IA",
    whatsappNumber: "+55 91 98041-3150",
    whatsappMessage: "Olá! Gostaria de agendar um diagnóstico de eficiência com IA.",
  },
  seo: {
    keywords: [
      "inteligência artificial",
      "IA para empresas",
      "automação empresarial",
      "eficiência operacional",
      "transformação digital",
      "consultoria em IA",
      "VanguardIA",
      "diagnóstico de eficiência",
      "raio-x empresarial",
      "otimização de processos",
    ],
    ogImage: "/og-image.png",
    logo: "/logo.png",
    pages: {
      home: {
        title: "VanguardIA — Eficiência Inteligente para Empresas",
        description: "Programa ICIA da VanguardIA: IA e automação sob medida para empresas de 30 a 1000 colaboradores.",
        path: "/",
        robots: { index: true, follow: true },
      },
      form: {
        title: "Diagnóstico de Eficiência com IA",
        description: "Preencha o formulário e receba um Raio-X completo de como a IA pode transformar sua empresa. Análise personalizada em até 5 minutos.",
        path: "/form",
        robots: { index: false, follow: true },
      },
      thankYou: {
        title: "Raio-X Enviado com Sucesso",
        description: "Seu diagnóstico de eficiência com IA foi gerado! Confira seu email e WhatsApp para receber o Raio-X completo da sua empresa.",
        path: "/obrigado",
        robots: { index: false, follow: false },
      },
    },
  },
  form: {
    webhookUrl: "https://automation.infra.vanguardia.cloud/webhook/funil-cnh",
    funilId: "funil-cnh-raiox",
    funilIdSecondary: "funil-cnh-direto",
    totalSteps: 3,
  },
  analytics: {
    clarity: {
      enabled: true,
    },
    variant: "A",
  },
};

export type TemplateConfig = typeof templateConfig;
export const getPrimaryCta = () => templateConfig.branding.primaryCtaText;
