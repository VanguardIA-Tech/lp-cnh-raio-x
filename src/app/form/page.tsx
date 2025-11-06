"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(1, "Queremos saber quem lidera a transformação."),
  role: z.string().min(1, "Assim entendemos seu papel na decisão e operação."),
  company: z.string().min(1, "Para conectar ao mapeamento setorial."),
  employees: z.enum(["até 30", "30 a 100", "100 a 500", "acima de 500"], {
    errorMap: () => ({ message: "Selecione uma opção." }),
  }),
  challenge: z.enum(
    [
      "Processos lentos / retrabalho",
      "Falta de integração entre sistemas",
      "Equipe sobrecarregada",
      "Falta de clareza estratégica",
    ],
    { errorMap: () => ({ message: "Selecione uma opção." }) }
  ),
  whatsapp: z.string().min(10, "Enviaremos o link direto do diagnóstico via WhatsApp."),
  email: z.string().email("Por favor, insira um e-mail corporativo válido."),
  lgpd: z.boolean().refine((val) => val === true, {
    message: "Você precisa autorizar o contato para enviar.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const step1Fields: (keyof FormValues)[] = ["name", "role", "company"];

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      role: "",
      company: "",
      whatsapp: "",
      email: "",
      lgpd: false,
    },
  });

  const { formState } = form;

  const handleNextStep = () => setStep(2);
  const handlePrevStep = () => setStep(1);

  const onSubmit = async (values: FormValues) => {
    console.table(values);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Diagnóstico solicitado com sucesso!");
    setIsSubmitted(true);
  };

  const watchedStep1Values = form.watch(step1Fields);
  const [isStep1Valid, setIsStep1Valid] = useState(false);

  useEffect(() => {
    const validateStep1 = async () => {
      const step1Schema = formSchema.pick({ name: true, role: true, company: true });
      const result = await step1Schema.safeParseAsync({
        name: watchedStep1Values[0],
        role: watchedStep1Values[1],
        company: watchedStep1Values[2],
      });
      setIsStep1Valid(result.success);
    };
    validateStep1();
  }, [watchedStep1Values]);

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4 text-center text-slate-100">
        <div className="w-full max-w-lg space-y-6">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="text-3xl font-bold text-slate-50">Aplicação recebida!</h1>
          <p className="text-lg text-slate-300">
            Sua análise personalizada está sendo preparada. Você a receberá em seu e-mail e WhatsApp em até 48h.
          </p>
          <Button asChild>
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Diagnóstico de Eficiência e IA Integrada
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            Quer descobrir quanto <strong className="text-orange-400">tempo</strong> e <strong className="text-orange-400">margem</strong> sua empresa pode recuperar com <strong className="text-blue-400">IA</strong>? Preencha o diagnóstico inicial e receba uma <strong className="text-blue-400">análise personalizada</strong> em até <strong className="text-blue-400">48h</strong>.
          </p>
        </div>

        <div className="mb-8 space-y-3">
          <div className="flex justify-between text-sm font-medium text-slate-300" aria-label={`Etapa ${step} de 2`}>
            <span className={step >= 1 ? "text-blue-400" : ""}>1. Contato</span>
            <span className={step >= 2 ? "text-blue-400" : ""}>2. Detalhes & Envio</span>
          </div>
          <Progress value={step === 1 ? 50 : 100} className="h-2 w-full bg-slate-800 [&>div]:bg-blue-600" />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-blue-500/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex items-center justify-between border-b border-slate-800 p-4">
                {step === 1 ? (
                  <div></div>
                ) : (
                  <Button type="button" variant="outline" onClick={handlePrevStep} className="h-11 border-slate-600 px-5 text-slate-200 hover:bg-slate-800">
                    Voltar
                  </Button>
                )}

                {step === 1 && (
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!isStep1Valid}
                    className={cn(
                      "h-11 px-5 text-base text-white transition-colors",
                      isStep1Valid
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "bg-orange-500/20 text-orange-400/70 cursor-not-allowed"
                    )}
                  >
                    Continuar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div aria-live="polite">
                  {step === 1 && (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl><Input placeholder="Seu nome" {...field} /></FormControl>
                          <FormDescription>Queremos saber quem lidera a transformação.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="role" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>Cargo ou função na empresa</FormLabel>
                          <FormControl><Input placeholder="Ex: Diretor de Operações" {...field} /></FormControl>
                          <FormDescription>Assim entendemos seu papel na decisão e operação.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>Nome da empresa</FormLabel>
                          <FormControl><Input placeholder="Nome da sua empresa" {...field} /></FormControl>
                          <FormDescription>Para conectar ao mapeamento setorial.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                        <FormField control={form.control} name="employees" render={({ field }) => (
                          <FormItem>
                            <FormLabel><strong>Número aproximado de colaboradores</strong></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Selecione o tamanho" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="até 30">até 30</SelectItem>
                                <SelectItem value="30 a 100">30 a 100</SelectItem>
                                <SelectItem value="100 a 500">100 a 500</SelectItem>
                                <SelectItem value="acima de 500">acima de 500</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="challenge" render={({ field }) => (
                          <FormItem>
                            <FormLabel><strong>Principal desafio atual</strong></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Selecione o desafio" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="Processos lentos / retrabalho">Processos lentos / retrabalho</SelectItem>
                                <SelectItem value="Falta de integração entre sistemas">Falta de integração entre sistemas</SelectItem>
                                <SelectItem value="Equipe sobrecarregada">Equipe sobrecarregada</SelectItem>
                                <SelectItem value="Falta de clareza estratégica">Falta de clareza estratégica</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="whatsapp" render={({ field }) => (
                          <FormItem>
                            <FormLabel><strong>WhatsApp corporativo</strong></FormLabel>
                            <FormControl><Input type="tel" placeholder="(00) 00000-0000" {...field} /></FormControl>
                            <FormDescription>Enviaremos o link direto do diagnóstico.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel><strong>E-mail corporativo</strong></FormLabel>
                            <FormControl><Input type="email" placeholder="seuemail@empresa.com" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="lgpd" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-slate-800 p-4">
                          <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="border-slate-500 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white" /></FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Li e autorizo o contato para o Diagnóstico ICIA conforme a LGPD.</FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )} />
                      <div className="flex flex-col items-center gap-3 pt-4">
                        <Button type="submit" disabled={!formState.isValid || formState.isSubmitting} className="h-14 w-full max-w-xs px-6 text-base">
                          {formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Receber meu Diagnóstico de Eficiência
                        </Button>
                        <p className="text-center text-xs text-slate-400">
                          Tempo médio de resposta: 24h úteis. Sua eficiência começa com clareza.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}