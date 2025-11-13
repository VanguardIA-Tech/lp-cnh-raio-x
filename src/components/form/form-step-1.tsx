import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, User, Users, Briefcase } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { type FormValues, roleOptions, employeeRangeOptions, sectorOptions } from "./form-schema";

interface FormStep1Props {
  form: UseFormReturn<FormValues>;
}

const FormStep1 = ({ form }: FormStep1Props) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 text-center md:text-left">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground">
          Comece seu Raio-X de Eficiência com IA
        </h2>
        <p className="text-muted-foreground">
          Responda em 2 minutos. Em 5, você recebe o relatório no WhatsApp e e-mail.
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="company" className="flex items-center gap-2 text-sm font-medium justify-center md:justify-start">
                <Building2 className="w-4 h-4 text-primary" />
                Nome da empresa *
              </Label>
              <FormControl>
                <Input
                  id="company"
                  placeholder="Ex: Rede Mais Saúde"
                  className="h-12 text-center md:text-left"
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
              <Label className="flex items-center gap-2 text-sm font-medium justify-center md:justify-start">
                <User className="w-4 h-4 text-primary" />
                Seu cargo/função *
              </Label>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione seu cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt === "ceo" ? "CEO" :
                         opt === "diretor" ? "Diretor" :
                         opt === "gerente" ? "Gerente" :
                         opt === "coordenador" ? "Coordenador" :
                         "Outro"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              <Label className="flex items-center gap-2 text-sm font-medium justify-center md:justify-start">
                <Users className="w-4 h-4 text-primary" />
                Número de colaboradores *
              </Label>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione a faixa" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeRangeOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt === "1-20" ? "1 a 20" :
                         opt === "21-50" ? "21 a 50" :
                         opt === "51-200" ? "51 a 200" :
                         "Mais de 200"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sector"
          render={({ field }) => (
            <FormItem>
              <Label className="flex items-center gap-2 text-sm font-medium justify-center md:justify-start">
                <Briefcase className="w-4 h-4 text-primary" />
                Setor de atuação *
              </Label>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectorOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt === "industria" ? "Indústria" :
                         opt === "servicos" ? "Serviços" :
                         opt === "saude" ? "Saúde" :
                         opt === "varejo" ? "Varejo" :
                         opt === "juridico" ? "Jurídico" :
                         opt === "educacao" ? "Educação" : "Outro"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Faltam só 2 etapas
      </p>
    </div>
  );
};

export default FormStep1;