import { z } from "zod";

// Primitive option lists (retained for backward compatibility with existing imports)
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
export const focusAreaOptions = ["treinamento", "integracao", "politicas", "automacao"] as const;

// Aggregated view of all option groups for easier iteration / future dynamic rendering
export const formOptionGroups = {
  role: roleOptions,
  employeeRange: employeeRangeOptions,
  sector: sectorOptions,
  priorityArea: priorityAreaOptions,
  focusArea: focusAreaOptions,
};

// Strongly typed option aliases
export type RoleOption = typeof roleOptions[number];
export type EmployeeRangeOption = typeof employeeRangeOptions[number];
export type SectorOption = typeof sectorOptions[number];
export type PriorityAreaOption = typeof priorityAreaOptions[number];
export type FocusAreaOption = typeof focusAreaOptions[number];

// Centralized validation messages for consistency
const messages = {
  company: "Informe o nome da empresa.",
  role: "Selecione seu cargo.",
  employees: "Selecione a faixa de colaboradores.",
  sector: "Selecione o setor de atuação.",
  priorityAreasMin: "Selecione pelo menos uma área prioritária.",
  priorityAreasMax: "Selecione no máximo três áreas prioritárias.",
  focusAreasMin: "Selecione pelo menos uma frente de foco.",
  aiUsage: "Informe o nível atual de uso de IA.",
  aiUsageMin: "O nível mínimo é 0.",
  aiUsageMax: "O nível máximo é 10.",
  bottleneck: "Descreva o principal gargalo de eficiência.",
  fullName: "Informe seu nome completo.",
  email: "Informe um e-mail corporativo.",
  emailInvalid: "Informe um e-mail válido.",
  whatsapp: "Informe o WhatsApp com DDD.",
  whatsappInvalid: "Informe um WhatsApp válido com DDD (ex: +55 11 9XXXX-XXXX).",
  lgpdConsent: "Você precisa autorizar o contato para continuar.",
};

// Phone / WhatsApp validation utilities (kept lightweight)
const VALID_DDDS = new Set([
  "11","12","13","14","15","16","17","18","19",
  "21","22","24","27","28",
  "31","32","33","34","35","37","38",
  "41","42","43","44","45","46","47","48","49",
  "51","53","54","55",
  "61","62","63","64","65","66","67","68","69",
  "71","73","74","75","77","79",
  "81","82","83","84","85","86","87","88","89",
  "91","92","93","94","95","96","97","98","99",
]);

function digits(value: string) { return value.replace(/\D/g, ""); }

function isValidWhatsapp(value: string) {
  const d = digits(value);
  const withCountry = d.startsWith("55");
  const expectedLength = withCountry ? 13 : 11; // 55 + 2 ddd + 9 number
  if (d.length !== expectedLength) return false;
  const ddd = withCountry ? d.slice(2,4) : d.slice(0,2);
  return VALID_DDDS.has(ddd);
}

export const formSchema = z.object({
  company: z.string().min(1, messages.company),
  role: z.enum(roleOptions, { errorMap: () => ({ message: messages.role }) }),
  employees: z.enum(employeeRangeOptions, { errorMap: () => ({ message: messages.employees }) }),
  sector: z.enum(sectorOptions, { errorMap: () => ({ message: messages.sector }) }),
  priorityAreas: z.array(z.enum(priorityAreaOptions)).min(1, messages.priorityAreasMin).max(3, messages.priorityAreasMax),
  focusAreas: z.array(z.enum(focusAreaOptions)).min(1, messages.focusAreasMin),
  aiUsage: z.number({ invalid_type_error: messages.aiUsage }).min(0, messages.aiUsageMin).max(10, messages.aiUsageMax),
  bottleneck: z.string().min(1, messages.bottleneck),
  fullName: z.string().min(1, messages.fullName),
  email: z.string().min(1, messages.email).email(messages.emailInvalid),
  whatsapp: z.string().min(1, messages.whatsapp).refine(isValidWhatsapp, { message: messages.whatsappInvalid }),
  lgpdConsent: z.literal(true, { errorMap: () => ({ message: messages.lgpdConsent }) }),
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