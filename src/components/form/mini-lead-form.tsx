"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { templateConfig } from "@/config/template-config";

const miniFormSchema = z.object({
  fullName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: z.string().min(10, "Telefone inválido"),
});

type MiniFormData = z.infer<typeof miniFormSchema>;

interface MiniLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MiniLeadForm({ open, onOpenChange }: MiniLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MiniFormData>({
    resolver: zodResolver(miniFormSchema),
    defaultValues: {
      fullName: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (data: MiniFormData) => {
    setIsSubmitting(true);

    try {
      // Get UTMs from sessionStorage
      const storedUtms = sessionStorage.getItem("vanguardia_utms");
      let utmData = {};
      
      if (storedUtms) {
        try {
          utmData = JSON.parse(storedUtms);
        } catch (e) {
          console.error("Failed to parse UTMs:", e);
        }
      }

      // Build payload with same structure as main form
      const payload = {
        nome: data.fullName,
        telefone: data.whatsapp,
        funil: templateConfig.form.funilIdSecondary,
        ...utmData,
      };

      // Submit to webhook
      const response = await fetch(templateConfig.form.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Build WhatsApp redirect URL
      const whatsappNumber = templateConfig.branding.whatsappNumber.replace(/\D/g, "");
      const whatsappMessage = encodeURIComponent(templateConfig.branding.whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      // Open WhatsApp in new tab and close modal
      window.open(whatsappUrl, "_blank");
      onOpenChange(false);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Erro ao enviar formulário. Por favor, tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agendar Diagnóstico</DialogTitle>
          <DialogDescription>
            Preencha seus dados para continuar pelo WhatsApp
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
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
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(00) 00000-0000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Continuar no WhatsApp"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
