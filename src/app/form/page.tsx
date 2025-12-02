import type { Metadata } from "next";
import { templateConfig } from "@/config/template-config";
import FormPageClient from "@/components/form/FormPageClient";

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

export default function FormPage() {
  return (
    <FormPageClient
      totalSteps={templateConfig.form.totalSteps}
      webhookUrl={templateConfig.form.webhookUrl}
    />
  );
}