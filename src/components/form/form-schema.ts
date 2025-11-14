import { z } from "zod";

export const roleOptions = ["ceo", "diretor", "gerente", "coordenador", "outro"] as const;
export const employeeRangeOptions = ["1-20", "21-50", "51-200", "200+"] as const;
export const sectorOptions = [
  "industria",
  "servicos",
  "saude",
  "varejo",
  "juridico",
  "educacao",
  "outro",
] as const;

export const priorityAreaOptions = [
  "administrativo",
  "marketing",
  "vendas",
  "operacoes",
  "processos",
  "financeiro",
  "rh",
] as const;

export const focusAreaOptions = [
  "treinamento",
  "integracao",
  "politicas",
  "automacao",
] as const;

const VALID_DDDS = new Set([
  "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "21", "22", "24", "27", "28",
  "31", "32", "33", "34", "35", "37", "38",
  "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "51", "53", "54", "55",
  "61", "62", "63", "64", "65", "66", "67", "68", "69",
  "71", "73", "74", "75", "77", "79",
  "81", "82", "83", "84", "85", "86", "87", "88", "89",
  "91", "92", "93", "94", "95", "96", "97", "98", "99",
]);

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function isValidWhatsapp(value: string) {
  const digits = onlyDigits(value);
  const hasCountryCode = digits.startsWith("55");
  const expectedLength = hasCountryCode ? 13 : 11;

  if (digits.length !== expectedLength) {
    return false;
  }

  const ddd = hasCountryCode ? digits.slice(2, 4) : digits.slice(0, 2);
  return VALID_DDDS.has(ddd);
}

export const formSchema = z.object({
  company: z.string().min(1, "Informe o nome da empresa."),
  role: z.enum(roleOptions, { errorMap: () => ({ message: "Selecione seu cargo." }) }),
  employees: z.enum(employeeRangeOptions, { errorMap: () => ({ message: "Selecione a faixa de colaboradores." }) }),
  sector: z.enum(sectorOptions, { errorMap: () => ({ message: "Selecione o setor de atuação." }) }),

  priorityAreas: z
    .array(z.enum(priorityAreaOptions))
    .min(1, "Selecione pelo menos uma área prioritária.")
    .max(3, "Selecione no máximo três áreas prioritárias."),
  focusAreas: z
    .array(z.enum(focusAreaOptions))
    .min(1, "Selecione pelo menos uma frente de foco."),
  aiUsage: z
    .number({ invalid_type_error: "Informe o nível atual de uso de IA." })
    .min(0, "O nível mínimo é 0.")
    .max(10, "O nível máximo é 10."),
  bottleneck: z.string().min(1, "Descreva o principal gargalo de eficiência."),

  fullName: z.string().min(1, "Informe seu nome completo."),
  email: z
    .string()
    .min(1, "Informe um e-mail corporativo.")
    .email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .min(1, "Informe o WhatsApp com DDD.")
    .refine(isValidWhatsapp, {
      message: "Informe um WhatsApp válido com DDD (ex: +55 11 9XXXX-XXXX).",
    }),
  lgpdConsent: z.literal(true, {
    errorMap: () => ({
      message: "Você precisa autorizar o contato para continuar.",
    }),
  }),
});

export type FormValues = z.infer<typeof formSchema>;

export const defaultFormValues: FormValues = {
  company: "",
  role: "ceo",
  employees: "1-20",
  sector: "industria",
  priorityAreas: [],
  focusAreas: [],
  aiUsage: 0,
  bottleneck: "",
  fullName: "",
  email: "",
  whatsapp: "",
  lgpdConsent: true,
};