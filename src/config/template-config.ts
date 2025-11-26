export const templateConfig = {
  site: {
    title: "VanguardIA — Eficiência Inteligente para Empresas",
    description: "Programa ICIA da VanguardIA: IA e automação sob medida para empresas de 30 a 1000 colaboradores.",
    language: "pt-BR",
  },
  branding: {
    companyName: "VanguardIA",
    primaryCtaText: "Agendar Diagnóstico de Eficiência com IA",
    whatsappNumber: "+55 91 98041-3150",
    whatsappMessage: "Olá! Gostaria de agendar um diagnóstico de eficiência com IA.",
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
