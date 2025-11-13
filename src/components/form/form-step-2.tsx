import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { 
  FileText, 
  TrendingUp, 
  ShoppingCart, 
  Cog, 
  GitBranch,
  DollarSign,
  Users,
  GraduationCap,
  Network,
  FileCheck,
  Zap
} from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { type FormValues } from "./form-schema";

interface FormStep2Props {
  form: UseFormReturn<FormValues>;
}

const areas = [
  { value: "administrativo", label: "Administrativo", icon: FileText },
  { value: "marketing", label: "Marketing", icon: TrendingUp },
  { value: "vendas", label: "Vendas", icon: ShoppingCart },
  { value: "operacoes", label: "Operações", icon: Cog },
  { value: "processos", label: "Processos", icon: GitBranch },
  { value: "financeiro", label: "Financeiro", icon: DollarSign },
  { value: "rh", label: "RH", icon: Users },
] as const;

const focuses = [
  { value: "treinamento", label: "Treinamento prático com IA para as Pessoas", icon: GraduationCap },
  { value: "integracao", label: "Integração entre setores e sistemas", icon: Network },
  { value: "politicas", label: "Políticas Internas de Uso de IA", icon: FileCheck },
  { value: "automacao", label: "Automação de tarefas repetitivas", icon: Zap },
] as const;

const FormStep2 = ({ form }: FormStep2Props) => {
  const toggleArrayValue = (name: "priorityAreas" | "focusAreas", val: string) => {
    const current = (form.getValues(name) ?? []) as string[];
    const exists = current.includes(val);
    const next = exists ? current.filter((v) => v !== val) : [...current, val];
    form.setValue(name, next as any, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
  };

  const aiUsageValue = form.watch("aiUsage") ?? 0;
  const selectedAreas = form.watch("priorityAreas") || [];
  const selectedFocuses = form.watch("focusAreas") || [];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 text-center md:text-left">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground">
          Onde a IA pode gerar mais impacto para você?
        </h2>
        <p className="text-muted-foreground">
          Escolha até 3 áreas para o Raio-X priorizar.
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={form.control}
          name="priorityAreas"
          render={() => (
            <FormItem>
              <Label className="text-sm font-medium">Áreas prioritárias *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {areas.map((area) => {
                  const Icon = area.icon;
                  const isSelected = selectedAreas.includes(area.value);
                  return (
                    <button
                      key={area.value}
                      type="button"
                      onClick={() => toggleArrayValue("priorityAreas", area.value)}
                      className={`
                        flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-300
                        ${isSelected 
                          ? 'border-primary bg-primary/5 shadow-soft' 
                          : 'border-border hover:border-primary/50 hover:bg-secondary'
                        }
                      `}
                    >
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-xs font-medium text-center ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                        {area.label}
                      </span>
                    </button>
                  );
                })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="focusAreas"
          render={() => (
            <FormItem>
              <Label className="text-sm font-medium">Qual dessas frentes mais representa seu foco agora? *</Label>
              <div className="space-y-3">
                {focuses.map((focus) => {
                  const Icon = focus.icon;
                  const isSelected = selectedFocuses.includes(focus.value);
                  return (
                    <label
                      key={focus.value}
                      className={`
                        flex items-start text-left gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                        ${isSelected 
                          ? 'border-primary bg-primary/5 shadow-soft' 
                          : 'border-border hover:border-primary/50 hover:bg-secondary'
                        }
                      `}
                    >
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleArrayValue("focusAreas", focus.value)}
                        className="mt-0.5"
                      />
                      <div className="flex-1 flex items-center gap-3">
                        <Icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className="text-sm">{focus.label}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="aiUsage"
          render={() => (
            <FormItem>
              <Label className="text-sm font-medium">
                Hoje, quanto sua empresa aproveita o potencial da IA? *
              </Label>
              <div className="space-y-3">
                <FormControl>
                  <Slider
                    value={[aiUsageValue]}
                    onValueChange={(vals) =>
                      form.setValue("aiUsage", vals[0], { shouldDirty: true, shouldTouch: true, shouldValidate: true })
                    }
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </FormControl>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 - Nada ainda</span>
                  <span className="font-semibold text-primary">{aiUsageValue}</span>
                  <span>10 - Totalmente integrada</span>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bottleneck"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="bottleneck" className="text-sm font-medium">
                Em uma frase, qual gargalo mais trava sua eficiência hoje? *
              </Label>
              <FormControl>
                <Textarea
                  id="bottleneck"
                  placeholder="Ex: demora em relatórios ou retrabalho entre áreas"
                  className="min-h-[100px] resize-none text-center md:text-left"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Faltam 30 segundos para o seu Raio-X personalizado
      </p>
    </div>
  );
};

export default FormStep2;