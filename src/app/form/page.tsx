import type { Metadata } from "next";
import { templateConfig } from "@/config/template-config";

export const metadata: Metadata = {
  title: templateConfig.seo.pages.form.title,
  description: templateConfig.seo.pages.form.description,
  openGraph: {
    title: `${templateConfig.seo.pages.form.title} | ${templateConfig.branding.companyName}`,
    description: templateConfig.seo.pages.form.description,
    url: `${templateConfig.site.url}${templateConfig.seo.pages.form.path}`,
  },
  twitter: {
    title: `${templateConfig.seo.pages.form.title} | ${templateConfig.branding.companyName}`,
    description: templateConfig.seo.pages.form.description,
  },
  alternates: {
    canonical: templateConfig.seo.pages.form.path,
  },
  robots: templateConfig.seo.pages.form.robots,
};

"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormHeader from "@/components/form/form-header";
import FormProgress from "@/components/form/form-progress";
import HighlightBox from "@/components/form/highlight-box";
import FormStep1 from "@/components/form/form-step-1";
import FormStep2 from "@/components/form/form-step-2";
import FormStep3 from "@/components/form/form-step-3";
import { formSchema, type FormValues, defaultFormValues } from "@/components/form/form-schema";
import { useFormTelemetry } from "@/components/clarity/FormObserver";
import { Form } from "@/components/ui/form";
import { safeEvent, setTag } from "@/components/clarity/observability";

const TOTAL_STEPS = templateConfig.form.totalSteps;
const WEBHOOK_URL = templateConfig.form.webhookUrl;

const step1Fields: (keyof FormValues)[] = ["company", "role", "employees", "sector"];
const step2Fields: (keyof FormValues)[] = ["priorityAreas", "focusAreas", "aiUsage", "bottleneck"];
const step3Fields: (keyof FormValues)[] = ["fullName", "email", "whatsapp", "lgpdConsent"];

export default function FormPage() {
  const router = useRouter();
  const { onSuccess, onValidationError } = useFormTelemetry();

  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: defaultFormValues,
  });

  const formData = form.watch();

  const stepFields = useMemo(() => {
    if (currentStep === 1) return step1Fields;
    if (currentStep === 2) return step2Fields;
    return step3Fields;
  }, [currentStep]);

  const canProceed = useMemo(() => {
    const v = formData;
    if (currentStep === 1) return !!v.company && !!v.role && !!v.employees && !!v.sector;
    if (currentStep === 2)
      return (v.priorityAreas?.length || 0) > 0 &&
        (v.priorityAreas?.length || 0) <= 3 &&
        (v.focusAreas?.length || 0) > 0 &&
        typeof v.aiUsage === "number" &&
        String(v.bottleneck || "").trim().length > 0;
    return (
      String(v.fullName || "").trim().length > 0 &&
      String(v.email || "").trim().length > 0 &&
      String(v.whatsapp || "").trim().length > 0 &&
      v.lgpdConsent === true
    );
  }, [currentStep, formData]);

  const handleNext = async () => {
    // explicit funnel event: user clicked next on current step
    safeEvent(`form:next_click:step_${currentStep}`);
    const ok = await form.trigger(stepFields as any);
    if (!ok) {
      const firstError = Object.keys(form.formState.errors)[0] as keyof FormValues | undefined;
      onValidationError(firstError);
      toast.error("Por favor, corrija os campos desta etapa.");
      return;
    }
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((s) => s + 1);
      // success transition to next step
      safeEvent(`form:next_success:from_${currentStep}_to_${currentStep + 1}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    // explicit funnel event: user clicked back on current step
    safeEvent(`form:back_click:step_${currentStep}`);
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
      // success transition to previous step
      safeEvent(`form:back_success:from_${currentStep}_to_${currentStep - 1}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onSubmit = async (values: FormValues) => {
    // explicit funnel event: submit attempt begins
    safeEvent("form:submit_attempt");
    let utms = {};
    try {
      const stored = sessionStorage.getItem("vanguardia_utms");
      if (stored) utms = JSON.parse(stored);
    } catch {}

    const payload = {
      ...values,
      ...utms,
      // Atualizado conforme solicitado pelo usuário
      funil: templateConfig.form.funilId,
      submittedAt: new Date().toISOString(),
    };

    const resp = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      // error path with http status tag
      setTag("form_http_status", String(resp.status));
      safeEvent("form:submit_error");
      const text = await resp.text().catch(() => "");
      console.error("Webhook error:", resp.status, text);
      toast.error("Ocorreu um erro ao enviar o formulário. Tente novamente.");
      return;
    }

    // success path
    safeEvent("form:submit_success");
    await onSuccess(values.email);
    toast.success("Raio-X gerado com sucesso!");
    router.push("/obrigado");
  };

  const handleSubmitClick = async () => {
    // explicit funnel event: submit button clicked on step 3
    safeEvent("form:submit_click");
    const ok = await form.trigger(step3Fields as any);
    if (!ok) {
      const firstError = Object.keys(form.formState.errors)[0] as keyof FormValues | undefined;
      onValidationError(firstError);
      toast.error("Por favor, corrija os campos desta etapa.");
      return;
    }
    await onSubmit(form.getValues());
  };

  // Track step views
  useEffect(() => {
    safeEvent(`form:step_${currentStep}_view`);
    setTag("form_current_step", String(currentStep));
  }, [currentStep]);

  return (
    <section className="min-h-screen w-screen bg-[#020F00] text-slate-100">
      <div className="h-full w-full rounded-none border border-transparent bg-transparent flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-12 lg:px-20 xl:px-28 xl:py-16 2xl:px-36 2xl:py-20">
          <div className="max-w-6xl mx-auto xl:max-w-7xl 2xl:max-w-[1600px]">
            <FormHeader />

            <div className="mt-6">
              <FormProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />
            </div>

            <div className="mt-8 xl:mt-10 2xl:mt-12">
              <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-12 items-start xl:gap-8 2xl:gap-10 xl:max-w-7xl 2xl:max-w-[1600px]">
                <div className="lg:col-span-12">
                  <div className="mb-6">
                    <HighlightBox />
                  </div>

                  <Form {...form}>
                    <div className="min-h-[60vh]">
                      {currentStep === 1 && <FormStep1 form={form} />}
                      {currentStep === 2 && <FormStep2 form={form} />}
                      {currentStep === 3 && <FormStep3 form={form} />}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-800/60 bg-[#020F00] px-6 py-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto flex gap-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                data-cta={`form_back_step_${currentStep}`}
                className="flex-1 h-12 border-slate-700 text-slate-200"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            )}

            {currentStep < TOTAL_STEPS ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!canProceed}
                data-cta={`form_next_step_${currentStep}`}
                className="flex-1 h-12 bg-orange-500 text-white transition hover:bg-orange-600 disabled:opacity-60"
              >
                Próximo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmitClick}
                disabled={!canProceed}
                data-cta="form_submit_step_3"
                className="flex-1 h-12 bg-orange-500 text-white font-bold transition hover:bg-orange-600 disabled:opacity-60"
              >
                🚀 Gerar meu Raio-X agora
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}