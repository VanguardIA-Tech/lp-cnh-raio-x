"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const cases = [
  {
    text: (
      <>
        Rede Mais Saúde — <strong className="text-orange-400">25 dias → 3 dias</strong>
      </>
    ),
  },
  {
    text: (
      <>
        Silveira Athias — <strong className="text-orange-400">IA em 100 %</strong> dos fluxos
      </>
    ),
  },
  {
    text: (
      <>
        DO IT Hub — <strong className="text-orange-400">300 % + de eficiência</strong> operacional
      </>
    ),
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
];

export default function ObrigadoPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/80 p-7 sm:p-10 md:p-12">
        <div className="flex flex-col items-center text-center">
          {/* 1. Hero/Confirmação */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Sua <strong className="text-orange-400">aplicação foi enviada!</strong>
          </h1>
          <p className="mt-4 max-w-prose text-base text-slate-300 sm:text-lg">
            Em breve meu time de especialistas entrará em contato para agendar o seu{" "}
            <strong className="text-orange-400">diagnóstico</strong>.
          </p>

          {/* 2. Mini-cases Grade */}
          <div className="my-8 w-full max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="flex h-24 items-center justify-center rounded-lg border border-slate-800 bg-slate-800/40 p-4 sm:h-28 sm:p-6"
                >
                  <p className="text-base font-medium text-slate-100 sm:text-lg">
                    {caseItem.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divisor */}
          <hr className="mb-6 h-px w-full max-w-xs border-slate-800" />

          {/* 3. Bloco de Exclusividade */}
          <p className="max-w-prose text-base text-slate-300 sm:text-lg">
            Este programa é <strong className="text-orange-400">exclusivo</strong> e{" "}
            <strong className="text-orange-400">personalizado</strong>, faz parte da seleção das apenas{" "}
            <strong className="text-orange-400">100 empresas selecionadas</strong> em 2026 para{" "}
            <strong className="text-orange-400">integração corporativa de IA</strong> no Brasil
          </p>

          {/* Divisor */}
          <hr className="my-8 h-px w-full max-w-md border-slate-800" />

          {/* 4. Footer Interno */}
          <footer className="flex w-full flex-col items-center gap-6">
            <Link href="/" aria-label="Página Inicial da VanguardIA">
              <Image
                src="/vanguardia-logo.png"
                alt="VanguardIA Logo"
                width={165}
                height={35}
                className="h-auto w-36 object-contain"
                priority
              />
            </Link>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Eficiência que liberta
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}