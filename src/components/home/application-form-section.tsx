"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { sectionContainerClass } from "./section-container";

const applicationFormSchema = z.object({
  name: z.string().min(1, "Informe seu nome completo."),
  email: z.string().min(1, "Informe um e-mail.").email("Digite um e-mail válido."),
  company: z.string().min(1, "Informe o nome da empresa."),
  role: z.string().optional(),
  phone: z.string().optional(),
  companySize: z.string().min(1, "Selecione o tamanho da empresa."),
  areaToOptimize: z.string().optional(),
  objective: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos para continuar.",
  }),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

export function ApplicationFormSection() {
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      companySize: "",
      areaToOptimize: "",
      objective: "",
      consent: false,
    },
  });

  const onSubmit = (values: ApplicationFormValues) => {
    console.table(values);
    toast.success("Aplicação recebida! Nossa equipe entrará em contato em breve.");
    form.reset();
  };

  return (
    <section className="border-t border-slate-800 bg-slate-950 py-14 sm:py-20 md:py-24">
      <div className={`${sectionContainerClass} items-center text-center`}>
        <div className="mb-10 max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
            Preencha o formulário e <span className="text-orange-400">aplique-se agora</span>.
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">
            As <span className="font-semibold text-slate-100">vagas</span> para o Diagnóstico ICIA são limitadas. Preencha os dados abaixo para{" "}
            <span className="font-semibold text-slate-100">verificar elegibilidade</span> e receber{" "}
            <span className="font-semibold text-slate-100">contato</span> da nossa equipe.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-4xl space-y-6 text-left"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
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
                      <Input type="email" placeholder="nome@empresa.com" {...field} />
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
                      <Input placeholder="Nome da sua empresa" {...field} />
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
                    <FormLabel>Cargo/Função</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Diretor de Operações" {...field} />
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
                    <FormLabel>Telefone/WhatsApp</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tamanho da empresa</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Nº de colaboradores" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1–10</SelectItem>
                        <SelectItem value="11-50">11–50</SelectItem>
                        <SelectItem value="51-200">51–200</SelectItem>
                        <SelectItem value="201-1000">201–1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="objective"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Objetivo com o Diagnóstico (opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva brevemente o que você espera otimizar."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-800 p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Li e autorizo o contato para o Diagnóstico ICIA conforme a LGPD.
                    </FormLabel>
                     <FormDescription>
                      Usaremos seus dados apenas para entrar em contato sobre o diagnóstico.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <div className="pt-4 text-center">
              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="w-full rounded-md bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 sm:w-auto"
              >
                {form.formState.isSubmitting ? "Enviando..." : "Quero meu Diagnóstico ICIA"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}