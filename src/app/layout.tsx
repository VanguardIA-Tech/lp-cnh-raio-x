import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClientProvider } from "@/components/ClientProvider";
import ClarityRouteTags from "@/components/ClarityRouteTags";
import ClickTracker from "@/components/ClickTracker";
import { UtmCollector } from "@/components/UtmCollector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VanguardIA — Eficiência Inteligente para Empresas",
  description:
    "Programa ICIA da VanguardIA: IA e automação sob medida para empresas de 30 a 1000 colaboradores.",
  icons: {
    icon: [
      // Ícones para tema claro (logo escuro)
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: light)', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16-dark.png', media: '(prefers-color-scheme: light)', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32-dark.png', media: '(prefers-color-scheme: light)', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192-dark.png', media: '(prefers-color-scheme: light)', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512-dark.png', media: '(prefers-color-scheme: light)', sizes: '512x512', type: 'image/png' },
      // Ícones para tema escuro (logo claro)
      { url: '/favicon-light.ico', media: '(prefers-color-scheme: dark)', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16-light.png', media: '(prefers-color-scheme: dark)', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32-light.png', media: '(prefers-color-scheme: dark)', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192-light.png', media: '(prefers-color-scheme: dark)', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512-light.png', media: '(prefers-color-scheme: dark)', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-dark.png', media: '(prefers-color-scheme: light)' },
      { url: '/apple-touch-icon-light.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="pt-BR">
      <head>
        {clarityId ? (
          <Script
            id="ms-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ClientProvider />
        <Suspense fallback={null}>
          <ClarityRouteTags variant="A" />
          <UtmCollector />
        </Suspense>
        <ClickTracker />
        {children}
        <Toaster />
      </body>
    </html>
  );
}