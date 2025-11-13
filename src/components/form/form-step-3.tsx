"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";
import { useRef, useEffect } from "react";
import type { ChangeEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { type FormValues } from "./form-schema";

interface FormStep3Props {
  form: UseFormReturn<FormValues>;
}

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com","gmail.com.br","hotmail.com","hotmail.com.br","outlook.com","outlook.com.br",
  "live.com","live.com.br","yahoo.com","yahoo.com.br","icloud.com","aol.com","msn.com",
  "bol.com.br","uol.com.br","terra.com.br"
]);

function getEmailDomain(email: string) {
  const parts = String(email).toLowerCase().split("@");
  if (parts.length !== 2) return null;
  return parts[1].trim() || null;
}

function formatWhatsapp(value: string) {
  const raw = String(value);
  const digits = raw.replace(/\D/g, "");
  let rest = digits;
  let prefix = "";
  if (rest.startsWith("55")) {
    prefix = "+55 ";
    rest = rest.slice(2);
  } else if (raw.trim().startsWith("+")) {
    prefix = "+";
  }
  const ddd = rest.slice(0, 2);
  const number = rest.slice(2, 11);
  let formatted = prefix;
  if (ddd) formatted += ddd + " ";
  if (number.length > 5) formatted += number.slice(0, 5) + "-" + number.slice(5);
  else if (number.length > 0) formatted += number;
  return formatted.trim();
}

function caretIndexForNthDigit(formatted: string, n: number) {
  if (n <= 0) {
    for (let i = 0; i < formatted.length; i++) if (/\d/.test(formatted[i])) return i;
    return 0;
  }
  let count = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      count++;
      if (count === n) return i + 1;
    }
  }
  return formatted.length;
}

const EMAIL_DEBOUNCE_MS = 800;

const FormStep3 = ({ form }: FormStep3Props) => {
  const whatsappInputRef = useRef<HTMLInputElement | null>(null);
  const debounceRef = useRef<number | null>(null);
  const lastShownDomainRef = useRef<string | null>(null);

  const email = form.watch("email");

  useEffect(() => {
    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    const value = String(email || "").trim();
    if (!value || !value.includes("@")) {
      lastShownDomainRef.current = null;
      return;
    }
    debounceRef.current = window.setTimeout(() => {
      const domain = getEmailDomain(value);
      if (domain && FREE_EMAIL_DOMAINS.has(domain)) {
        if (lastShownDomainRef.current !== domain) {
          toast("Dica: prefira um e-mail corporativo (ex: nome@empresa.com) para agilizar o atendimento.");
          lastShownDomainRef.current = domain;
        }
      } else {
        lastShownDomainRef.current = null;
      }
      debounceRef.current = null;
    }, EMAIL_DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, [email]);

  const handleWhatsappChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEl = e.target;
    const rawValue = inputEl.value;
    const selectionStart = inputEl.selectionStart ?? rawValue.length;
    const digitsLeftOfCursor = rawValue.slice(0, selectionStart).replace(/\D/g, "").length;
    const formatted = formatWhatsapp(rawValue);
    form.setValue("whatsapp", formatted, { shouldDirty: true, shouldTouch: true, shouldValidate: true });
    requestAnimationFrame(() => {
      const el = whatsappInputRef.current;
      if (!el) return;
      const totalDigits = formatted.replace(/\D/g, "").length;
      const n = Math.min(digitsLeftOfCursor, totalDigits);
      const newCaret = caretIndexForNthDigit(formatted, n);
      try { el.setSelectionRange(newCaret, newCaret); } catch {}
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 text-center md:text-left">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-slate-100">
          Pra onde enviamos seu Raio-X?
        </h2>
        <p className="text-slate-400">
          Seu relatório personalizado será enviado em até 5 minutos.
        </p>
      </div>

      <div className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <Label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium justify-center md:justify-start">
                <User className="w-4 h-4 text-orange-400" />
                Nome completo *
              </Label>
              <FormControl>
                <Input
                  id="fullName"
                  placeholder="Digite seu nome completo"
                  className="h-12 text-center md:text-left bg-slate-950/50 border-slate-800 text-slate-100 placeholder:text-slate-400"
                  {...field}
                />
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
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium justify-center md:justify-start">
                <Mail className="w-4 h-4 text-orange-400" />
                E-mail corporativo *
              </Label>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@empresa.com"
                  className="h-12 text-center md:text-left bg-slate-950/50 border-slate-800 text-slate-100 placeholder:text-slate-400"
                  {...field}
                />
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
              <Label htmlFor="whatsapp" className="flex items-center gap-2 text-sm font-medium justify-center md:justify-start">
                <Phone className="w-4 h-4 text-orange-400" />
                WhatsApp (com DDD) *
              </Label>
              <FormControl>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="+55 11 9XXXX-XXXX"
                  value={field.value || ""}
                  onChange={handleWhatsappChange}
                  ref={whatsappInputRef}
                  className="h-12 text-center md:text-left bg-slate-950/50 border-slate-800 text-slate-100 placeholder:text-slate-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lgpdConsent"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <FormControl>
                  <Checkbox
                    id="lgpd"
                    checked={!!field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    className="mt-0.5 rounded-full border-slate-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 focus-visible:ring-green-500"
                  />
                </FormControl>
                <label htmlFor="lgpd" className="text-sm cursor-pointer flex-1 text-left">
                  Autorizo o uso dos dados para geração do meu Raio-X personalizado e contato consultivo. *
                </label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default FormStep3;